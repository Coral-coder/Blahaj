// End-to-end playtest: loads the real game in headless Chromium and plays the
// whole story the way a player would, from the title's Begin button through
// every cutscene and chapter to the ending screen. A bot drives the actual
// input system (keys, camera, jumps); simulation is stepped deterministically
// with rendering paused so software GPUs keep up.
//
//   npm run build && npm run playtest            (CHROMIUM_PATH=... if needed)
const { chromium } = require('playwright-core');
const http = require('http'), fs = require('fs'), path = require('path');
const ROUTES = Object.values(require('./routes.cjs'));

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

(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || undefined,
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.stack));
  await page.addInitScript(() => localStorage.setItem('blahaj-backtobed-v1', JSON.stringify({ quality: 'low', qualityLocked: true })));
  await page.goto(`http://localhost:${server.address().port}/`, { waitUntil: 'domcontentloaded', timeout: 120000 });
  await page.waitForFunction(() => window.__blahaj && window.__blahaj.game && window.__blahaj.mode === 'title', null, { timeout: 180000 });
  await page.addScriptTag({ content: fs.readFileSync(path.join(__dirname, 'bot.js'), 'utf8') });
  let failures = 0;
  const playCines = async () => {
    for (let guard = 0; guard < 200 && (await page.evaluate(() => window.__blahaj.mode)) === 'cine'; guard++) await page.evaluate(() => window.__blahaj.sim(0.5));
  };
  await page.click('#btnStart');
  for (let ch = 0; ch < ROUTES.length && !failures; ch++) {
    await page.waitForFunction((ch) => window.__blahaj.game && window.__blahaj.game.index === ch && ['cine', 'play'].includes(window.__blahaj.mode), ch, { timeout: 180000 });
    await page.evaluate(() => { window.__blahaj.debug.noRender = true; });
    await playCines();
    const r = await page.evaluate((route) => window.__bot.run(route), ROUTES[ch].filter((w) => w[0] !== 'snap'));
    console.log(`${r.ok ? 'PASS' : 'FAIL'} chapter ${ch + 1} (lowest comfort ${Math.round(r.minComfort)})`);
    if (!r.ok) { failures++; console.log(r.log.join('\n')); break; }
    await page.waitForTimeout(600);
    await playCines();
    await page.waitForTimeout(400);
  }
  if (!failures) {
    try {
      // the outro starts on a short timer; keep stepping cutscenes until the ending shows
      let shown = false;
      for (let i = 0; i < 120 && !shown; i++) {
        await playCines();
        shown = await page.evaluate(() => !document.getElementById('ending').classList.contains('hidden'));
        if (!shown) await page.waitForTimeout(500);
      }
      if (!shown) throw new Error('no ending');
      console.log('PASS ending screen reached');
    } catch (e) { failures++; console.log('FAIL ending screen never appeared'); }
  }
  if (errors.length) { failures++; console.log('PAGE ERRORS:\n' + errors.join('\n')); }
  await browser.close(); server.close();
  console.log(failures ? `\n${failures} problem(s)` : '\nThe whole story is playable start to finish.');
  process.exit(failures ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
