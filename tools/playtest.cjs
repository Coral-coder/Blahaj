// End-to-end gameplay tests: loads the real game in headless Chromium and
// drives it through the actual input system, stepping the simulation
// deterministically (rendering is paused so software GPUs keep up).
//
//   npm run build && npm run playtest
//
// Uses playwright-core. Set CHROMIUM_PATH if Chromium isn't auto-detected.
const { chromium } = require('playwright-core');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const types = { '.js': 'text/javascript', '.html': 'text/html' };
const server = http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split('?')[0]);
  if (u === '/') u = '/index.html';
  const f = path.join(ROOT, u);
  if (!f.startsWith(ROOT) || !fs.existsSync(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' });
  res.end(fs.readFileSync(f));
});

let failures = 0;
const tests = async (page) => {
  await page.waitForFunction(() => window.__blahaj && window.__blahaj.game, null, { timeout: 120000 });
  const start = async (i) => {
    await page.evaluate((i) => window.__blahaj.startLevel(i), i);
    await page.waitForFunction((i) => window.__blahaj.mode === 'play' && window.__blahaj.game.index === i, i, { timeout: 120000 });
    await page.evaluate(() => { window.__blahaj.debug.noRender = true; window.__blahaj.sim(0.3); });
  };
  const st = () => page.evaluate(() => { const g = window.__blahaj.game, p = g.p; return { x: +p.pos.x.toFixed(2), y: +p.pos.y.toFixed(2), z: +p.pos.z.toFixed(2), vy: +p.vel.y.toFixed(2), g: p.grounded, hearts: p.hearts, fish: g.stats.fish, state: g.state, falls: g.stats.falls, bops: g.stats.bops }; });
  const hold = async (keys, ms) => { for (const k of keys) await page.keyboard.down(k); await page.evaluate((ms) => window.__blahaj.sim(ms / 1000), ms); for (const k of keys) await page.keyboard.up(k); };
  const tp = (pos, yaw = 0) => page.evaluate(([pos, yaw]) => { const g = window.__blahaj.game; g.p.pos.set(...pos); g.p.vel.set(0, 0, 0); g.cam.yaw = yaw; g.cam.target.copy(g.p.pos); }, [pos, yaw]);
  const log = (...a) => console.log(...a);
  const press = async (k) => { await page.keyboard.down(k); await page.evaluate(() => window.__blahaj.sim(1 / 60)); await page.keyboard.up(k); };
  const check = (name, cond, extra = '') => { if (!cond) failures++; log((cond ? 'PASS ' : 'FAIL ') + name + (extra ? '  ' + JSON.stringify(extra) : '')); };

  // --- level 1: walk forward, collect fish, jump
  await start(0);
  let a = await st();
  check('spawn grounded', a.g, a);
  await hold(['KeyW'], 700);
  let b = await st();
  check('walk forward moves -Z', b.z < a.z - 2, b);
  check('collected fish while walking', b.fish >= 2, b);
  await page.keyboard.down('Space'); await page.evaluate(() => window.__blahaj.sim(0.12));
  let c = await st();
  check('jump leaves ground', !c.g && c.vy > 3, c);
  await page.keyboard.up('Space');
  await page.evaluate(() => window.__blahaj.sim(0.9));
  c = await st();
  check('lands again', c.g, c);
  // jump from start rug onto book stack ahead (gap 2) by running + jumping
  await tp([0, 0, -3], 0);
  await page.evaluate(() => window.__blahaj.sim(0.2));
  await page.keyboard.down('KeyW'); await page.evaluate(() => window.__blahaj.sim(0.08));
  await page.keyboard.down('Space'); await page.evaluate(() => window.__blahaj.sim(0.3)); await page.keyboard.up('Space');
  await page.evaluate(() => window.__blahaj.sim(0.5)); await page.keyboard.up('KeyW');
  await page.evaluate(() => window.__blahaj.sim(0.5));
  c = await st();
  check('jump onto book stack (y=0, z≈-8)', c.g && Math.abs(c.y) < 0.05 && c.z < -6, c);
  // walk into the lava -> respawn
  await tp([0, 0, -9], Math.PI / 2);
  await hold(['KeyW'], 1600);
  await page.evaluate(() => window.__blahaj.sim(0.9));
  c = await st();
  check('falling in goo respawns', c.falls === 1 && c.g && c.hearts === 2, c);
  // stomp the bunny
  const bp = await page.evaluate(() => { const e = window.__blahaj.game.enemies[0]; e.e.speed = 0.0001; return [e.pos.x, e.pos.y, e.pos.z]; });
  await tp([bp[0], bp[1] + 3, bp[2]]);
  await page.evaluate(() => window.__blahaj.sim(1.2));
  c = await st();
  check('stomp dust bunny', c.bops === 1, c);
  // lego hazard hurts
  const hBefore = c.hearts;
  await tp([1.2, 1, -48.2]);
  await page.evaluate(() => window.__blahaj.sim(0.3));
  c = await st();
  check('toy brick hurts', c.hearts === hBefore - 1, c);
  // moving platform carries the player (let any knockback/respawn settle first)
  await page.evaluate(() => window.__blahaj.sim(2.5));
  const plat = await page.evaluate(() => { const g = window.__blahaj.game; const pl = g.platforms[7]; return [pl.cur.x, pl.cur.y, pl.cur.z]; });
  await page.evaluate(() => { const g = window.__blahaj.game; const pl = g.platforms[7]; g.p.pos.set(pl.cur.x, pl.cur.y + 0.05, pl.cur.z); g.p.vel.set(0, 0, 0); });
  await page.evaluate(() => window.__blahaj.sim(0.05));
  const c1 = await st(); const p1 = await page.evaluate(() => window.__blahaj.game.platforms[7].cur.x);
  await page.evaluate(() => window.__blahaj.sim(0.7)); const c2 = await st();
  const p2 = await page.evaluate(() => window.__blahaj.game.platforms[7].cur.x);
  check('moving platform carries player', c2.g && Math.abs((c2.x - c1.x) - (p2 - p1)) < 0.05 && Math.abs(p2 - p1) > 0.3, { dPlayer: c2.x - c1.x, dPlat: p2 - p1 });
  // goal completes level
  await tp([0, 5.2, -64.2]);
  await page.evaluate(() => window.__blahaj.sim(3.5));
  const vis = await page.evaluate(() => !document.getElementById('complete').classList.contains('hidden'));
  check('reaching pillow completes level', vis);

  const sv = await page.evaluate(() => JSON.parse(localStorage.getItem('blahaj-adventure-v1')));
  check('progress saved', sv.completed[0] === true, sv.completed);

  // --- level 2: double jump + sponge bounce
  await start(1);
  await tp([0, 0, -0.5], 0);
  await page.evaluate(() => window.__blahaj.sim(0.3));
  await press('Space'); await page.evaluate(() => window.__blahaj.sim(0.35));
  const y1 = (await st()).y;
  await page.keyboard.down('Space'); await page.evaluate(() => window.__blahaj.sim(0.3));
  const y2 = (await st()).y;
  await page.keyboard.up('Space');
  check('double jump goes higher', y2 > y1 + 0.5, { y1, y2 });
  await page.evaluate(() => window.__blahaj.sim(1.2));
  await tp([0, 3.5, -29]);
  await page.evaluate(() => window.__blahaj.sim(0.16));
  c = await st();
  let maxY = c.y;
  for (let i = 0; i < 10; i++) { await page.evaluate(() => window.__blahaj.sim(0.06)); maxY = Math.max(maxY, (await st()).y); }
  check('sponge bounces high', maxY > 5, { maxY });

  // --- level 3: belly flop breaks crate, super bounce
  await start(2);
  await tp([2.5, 8, -28.5]);
  await page.evaluate(() => window.__blahaj.sim(0.15));
  await press('KeyC');
  await page.evaluate(() => window.__blahaj.sim(0.9));
  const crate = await page.evaluate(() => window.__blahaj.game.crates[0].broken);
  check('belly flop breaks crate', crate);
  await page.evaluate(() => window.__blahaj.sim(1.5));
  const star = await page.evaluate(() => window.__blahaj.game.stars.filter((s) => s.taken).length);
  check('crate star collectable', star >= 1, { star });
  await tp([0, 9, -33]);
  await page.evaluate(() => window.__blahaj.sim(0.1));
  await press('KeyC');
  maxY = 0;
  for (let i = 0; i < 25; i++) { await page.evaluate(() => window.__blahaj.sim(0.05)); maxY = Math.max(maxY, (await st()).y); }
  check('super bounce off sponge', maxY > 11, { maxY });
  // crumble cookie falls
  await tp([0, 2.6, -12]);
  await page.evaluate(() => window.__blahaj.sim(1.2));
  const cr = await page.evaluate(() => window.__blahaj.game.platforms[2].crumble);
  check('cookie crumbles', cr === 2, { cr });
  // roomba: stomp only stuns, flop defeats
  await page.evaluate(() => window.__blahaj.sim(1.5));
  const rp = await page.evaluate(() => { const e = window.__blahaj.game.enemies[0]; e.e.speed = 0.0001; return [e.pos.x, e.pos.y, e.pos.z]; });
  await tp([rp[0], rp[1] + 3, rp[2]]);
  await page.evaluate(() => window.__blahaj.sim(0.7));
  let r = await page.evaluate(() => { const e = window.__blahaj.game.enemies[0]; return { alive: e.alive, stun: e.stun }; });
  check('stomped roomba only stunned', r.alive && r.stun > 0, r);
  await page.evaluate(() => window.__blahaj.sim(1.5));
  const rp2 = await page.evaluate(() => { const e = window.__blahaj.game.enemies[0]; return [e.pos.x, e.pos.y, e.pos.z]; });
  await tp([rp2[0], rp2[1] + 3, rp2[2]]);
  await page.evaluate(() => window.__blahaj.sim(0.06));
  await press('KeyC');
  await page.evaluate(() => window.__blahaj.sim(0.8));
  r = await page.evaluate(() => window.__blahaj.game.enemies[0].alive);
  check('belly flop defeats roomba', !r);

  // --- level 4: dash covers distance in the air
  await start(3);
  await tp([0, 0, -3.5], 0);
  await page.evaluate(() => window.__blahaj.sim(0.3));
  await page.keyboard.down('KeyW'); await page.keyboard.down('Space');
  await page.evaluate(() => window.__blahaj.sim(0.3)); await page.keyboard.up('Space');
  await press('Space'); await page.evaluate(() => window.__blahaj.sim(0.25));
  await press('ShiftLeft');
  await page.evaluate(() => window.__blahaj.sim(0.9)); await page.keyboard.up('KeyW');
  await page.evaluate(() => window.__blahaj.sim(0.4));
  c = await st();
  check('jump + double jump + dash crosses the 8-unit gap', c.g && c.z < -12 && Math.abs(c.y) < 0.1, c);

  // --- level 5: glide + updraft
  await start(4);
  await tp([0, 10, -3], 0);
  await page.keyboard.down('KeyW');
  await page.keyboard.down('Space'); await page.evaluate(() => window.__blahaj.sim(0.25)); await page.keyboard.up('Space');
  await page.evaluate(() => window.__blahaj.sim(0.15));
  await page.keyboard.down('Space');
  for (let i = 0; i < 60; i++) { await page.evaluate(() => window.__blahaj.sim(0.05)); if ((await st()).z < -21) break; }
  await page.keyboard.up('KeyW');
  await page.evaluate(() => window.__blahaj.sim(1.5));
  await page.keyboard.up('Space');
  await page.evaluate(() => window.__blahaj.sim(0.8));
  c = await st();
  check('glide reaches the second island', c.g && Math.abs(c.y - 4) < 0.1 && c.z < -18, c);
  const glideY = (await st()).y;
  check('glide fell slowly (stayed above 4)', glideY > 3.9, { glideY });
  await tp([0, 3, -32]);
  await page.evaluate(() => window.__blahaj.sim(2.2));
  c = await st();
  check('updraft lifts player', c.y > 10, c);

};

(async () => {
  await new Promise((r) => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || undefined,
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.stack));
  // all abilities unlocked, low graphics so the boot is quick
  await page.addInitScript(() => localStorage.setItem('blahaj-adventure-v1', JSON.stringify({ quality: 'low', qualityLocked: true, completed: [true, true, true, true, true] })));
  await page.goto(`http://localhost:${port}/`);
  await tests(page, async () => {});
  if (errors.length) { failures++; console.log('PAGE ERRORS:\n' + errors.join('\n')); }
  await browser.close();
  server.close();
  console.log(failures ? `\n${failures} check(s) failed` : '\nAll checks passed');
  process.exit(failures ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
