// App shell: screens, saving, progression, main loop.
import { CFG } from './config.js';
import { LEVELS } from './levels.js';
import { Audio } from './audio.js';
import { Renderer, QUALITY, QUALITY_ORDER } from './renderer.js';
import { Input } from './input.js';
import { Game } from './game.js';

const $ = (id) => document.getElementById(id);
const SAVE_KEY = 'blahaj-adventure-v1';

const ABILITIES = {
  doubleJump: { icon: '🫧', name: 'Double Jump', how: 'Press Space again in the air' },
  flop: { icon: '💥', name: 'Belly Flop', how: 'Press C in the air: cracks crates, super-bounces sponges' },
  dash: { icon: '🚀', name: 'Torpedo Dash', how: 'Press Shift to zoom forward' },
  glide: { icon: '🪽', name: 'Fin Glide', how: 'Hold Space while falling' },
};

// ----------------------------------------------------------------- save --
function loadSave() {
  let s = null;
  try { s = JSON.parse(localStorage.getItem(SAVE_KEY)); } catch (e) { /* storage unavailable */ }
  s = s || {};
  s.completed = s.completed || [];
  s.stars = s.stars || [];
  s.bestTime = s.bestTime || [];
  s.bestFish = s.bestFish || [];
  LEVELS.forEach((L, i) => { s.stars[i] = s.stars[i] || [false, false, false]; });
  s.quality = s.quality || 'high';
  return s;
}
const save = loadSave();
function persist() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) { /* ignore */ } }
const totalStars = () => save.stars.reduce((a, s) => a + s.filter(Boolean).length, 0);
const abilities = () => { const a = {}; for (const [k, lvl] of Object.entries(CFG.unlocks)) a[k] = !!save.completed[lvl]; return a; };
const unlocked = (i) => (LEVELS[i].bonus ? totalStars() >= CFG.bonusStars : i === 0 || !!save.completed[i - 1]);

// -------------------------------------------------------------- engine --
const renderer = new Renderer($('game'));
renderer.setQuality(save.quality);
const input = new Input($('game'));
let game = null;
let mode = 'title';
let current = 0;

function show(id) {
  ['title', 'how', 'levels', 'pause', 'complete', 'ending'].forEach((s) => $(s).classList.toggle('hidden', s !== id));
  $('hud').classList.toggle('hidden', id !== null);
  $('touch').classList.toggle('off', id !== null);
}

const hooks = {
  hud: updateHud,
  toast,
  pop,
  hint: (t) => { const h = $('hint'); if (t) { h.textContent = t; h.style.opacity = 1; } else h.style.opacity = 0; },
  fade: (on) => $('fade').classList.toggle('on', on),
  star: (i) => { if (!save.stars[current][i]) { save.stars[current][i] = true; persist(); } },
  complete: onComplete,
};

function loading(on, text = 'Fluffing pillows…') {
  $('loading').classList.toggle('hidden', !on);
  $('loadingText').textContent = text;
}

function startLevel(i, attract = false) {
  loading(true, attract ? 'Fluffing pillows…' : `Loading ${LEVELS[i].name}…`);
  // let the loading card paint before the heavy texture/geometry work
  setTimeout(() => {
    if (game) game.dispose();
    current = i;
    game = new Game(renderer, input, LEVELS[i], i, abilities(), save.stars[i], hooks);
    game.attract = attract;
    perf.reset();
    loading(false);
    if (attract) return;
    mode = 'play';
    show(null);
    $('levelName').textContent = `${i + 1}. ${LEVELS[i].name}`;
    $('fishTotal').textContent = LEVELS[i].fish.length;
    updateHud();
    Audio.init(); Audio.resume(); Audio.startMusic(LEVELS[i].music);
    const newAb = Object.entries(CFG.unlocks).find(([, lvl]) => lvl === i - 1);
    if (newAb && abilities()[newAb[0]]) toast(`${ABILITIES[newAb[0]].icon} ${ABILITIES[newAb[0]].name}`, ABILITIES[newAb[0]].how, 4000);
    $('game').focus();
  }, 40);
}

function updateHud() {
  if (!game) return;
  $('fish').textContent = game.stats.fish;
  const st = game.stars.map((s) => s.taken || save.stars[current][s.i]);
  $('stars').innerHTML = st.map((on) => `<span class="${on ? '' : 'off'}">⭐</span>`).join('');
  $('hearts').innerHTML = Array.from({ length: CFG.maxHearts }, (_, k) => `<span class="${k < game.p.hearts ? '' : 'lost'}">💙</span>`).join('');
}

let toastTimer = null;
function toast(title, sub = '', ms = 2200) {
  const t = $('toast');
  t.innerHTML = `${title}${sub ? `<small>${sub}</small>` : ''}`;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), ms);
}
let popTimer = null;
function pop(text) {
  const c = $('combo');
  c.textContent = text;
  c.classList.add('show');
  clearTimeout(popTimer);
  popTimer = setTimeout(() => c.classList.remove('show'), 700);
}

const fmt = (t) => (Number.isFinite(t) ? `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}` : '–');

function onComplete(r) {
  const i = current;
  const wasBonusOpen = totalStars() >= CFG.bonusStars;
  const before = abilities();
  save.completed[i] = true;
  r.stars.forEach((s, k) => { if (s) save.stars[i][k] = true; });
  save.bestTime[i] = save.bestTime[i] ? Math.min(save.bestTime[i], r.time) : r.time;
  save.bestFish[i] = Math.max(save.bestFish[i] || 0, r.fish);
  persist();
  Audio.stopMusic();
  mode = 'menu';
  $('completeTitle').textContent = `${LEVELS[i].name} complete!`;
  $('completeStars').innerHTML = save.stars[i].map((s) => `<span class="${s ? '' : 'off'}">⭐</span>`).join('');
  $('cFish').textContent = `${r.fish} / ${r.fishTotal}${r.fish >= r.fishTotal ? ' 👑' : ''}`;
  $('cTime').textContent = `${fmt(r.time)}  (best ${fmt(save.bestTime[i])})`;
  $('cBops').textContent = r.bops;
  $('cFalls').textContent = r.falls;
  let unlock = '';
  const after = abilities();
  for (const k of Object.keys(after)) if (after[k] && !before[k]) unlock += `<div class="unlock">New ability: ${ABILITIES[k].icon} ${ABILITIES[k].name}<small>${ABILITIES[k].how}</small></div>`;
  if (!wasBonusOpen && totalStars() >= CFG.bonusStars) unlock += `<div class="unlock">✨ Bonus level unlocked: ${LEVELS[LEVELS.length - 1].name}!</div>`;
  $('completeUnlock').innerHTML = unlock;
  if (unlock) Audio.unlock();
  const next = i + 1 < LEVELS.length && unlocked(i + 1) ? i + 1 : -1;
  $('btnNext').classList.toggle('hidden', next < 0);
  $('btnNext').onclick = () => { Audio.click(); startLevel(next); };
  if (LEVELS[i].id === 'dreamsea' && !save.sawEnding) { save.sawEnding = true; persist(); show('ending'); $('btnEndLevels').onclick = () => { Audio.click(); show('complete'); }; }
  else show('complete');
}

function buildLevelGrid() {
  const grid = $('levelGrid');
  grid.innerHTML = '';
  const swatch = { bedroom: '#ffb3c6', kitchen: '#ffd166', shelf: '#b79fff', rooftops: '#ff9f68', dreamsea: '#5a4b9c', lagoon: '#36c5b8' };
  LEVELS.forEach((L, i) => {
    const open = unlocked(i);
    const d = document.createElement('div');
    d.className = 'lvl' + (open ? '' : ' locked') + (L.bonus ? ' bonus' : '');
    const st = save.stars[i].map((s) => `<span class="${s ? '' : 'off'}">⭐</span>`).join('');
    const lockMsg = L.bonus ? `🔒 Collect ${CFG.bonusStars} ⭐ (${totalStars()}/${CFG.bonusStars})` : '🔒 Finish the previous level';
    d.innerHTML = `<div class="swatch" style="background:${swatch[L.theme]}"></div><div class="num">${L.bonus ? 'Bonus' : 'Level ' + (i + 1)}</div><div class="name">${L.name}</div>
      <div class="blurb">${open ? L.blurb : lockMsg}</div><div class="stars">${st}</div>
      <div class="meta">${save.completed[i] ? `🐟 best ${save.bestFish[i] || 0}/${L.fish.length}${(save.bestFish[i] || 0) >= L.fish.length ? ' 👑' : ''} · ⏱ ${fmt(save.bestTime[i])}` : open ? 'Not finished yet' : ''}</div>`;
    if (open) d.onclick = () => { Audio.init(); Audio.click(); startLevel(i); };
    grid.appendChild(d);
  });
  const ab = abilities();
  $('abilityList').innerHTML = Object.entries(ABILITIES).map(([k, a]) => `<span class="ab ${ab[k] ? '' : 'off'}" title="${a.how}">${a.icon} ${a.name}</span>`).join('') + `<span class="ab">⭐ ${totalStars()} / ${LEVELS.length * 3}</span>`;
}

function openLevels() {
  Audio.init(); Audio.click();
  if (mode === 'play' || mode === 'paused' || mode === 'menu') { mode = 'title'; Audio.stopMusic(); startLevel(0, true); }
  buildLevelGrid();
  show('levels');
}

function pause(on) {
  if (on && mode === 'play') { mode = 'paused'; show('pause'); Audio.stopMusic(); }
  else if (!on && mode === 'paused') { mode = 'play'; show(null); Audio.startMusic(LEVELS[current].music); $('game').focus(); }
}

function qualityLabel() { return `Graphics: ${QUALITY[renderer.quality].label}`; }
function cycleQuality() {
  const i = QUALITY_ORDER.indexOf(renderer.quality);
  const q = QUALITY_ORDER[(i + 1) % QUALITY_ORDER.length];
  save.quality = q; persist();
  renderer.setQuality(q);
  document.querySelectorAll('.qbtn').forEach((b) => (b.textContent = qualityLabel()));
  perf.reset();
  if (game && mode !== 'title') toast(qualityLabel(), 'Grass and some effects update on the next level');
}

// ----------------------------------------------------------- wiring ----
$('btnStart').onclick = openLevels;
$('btnHow').onclick = () => { Audio.init(); Audio.click(); show('how'); };
$('btnHowBack').onclick = () => { Audio.click(); show('title'); };
$('btnBackTitle').onclick = () => { Audio.click(); show('title'); };
$('btnReset').onclick = () => {
  if (!confirm('Reset all progress? Your starfish will swim away!')) return;
  try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* ignore */ }
  location.reload();
};
$('btnResume').onclick = () => pause(false);
$('btnRestart').onclick = () => { Audio.click(); startLevel(current); };
$('btnQuit').onclick = openLevels;
$('btnAgain').onclick = () => { Audio.click(); startLevel(current); };
$('btnToLevels').onclick = openLevels;
$('btnEndLevels').onclick = openLevels;
document.querySelectorAll('.qbtn').forEach((b) => { b.textContent = qualityLabel(); b.onclick = () => { Audio.click(); cycleQuality(); }; });
$('tPause').onclick = () => pause(true);

addEventListener('keydown', (e) => {
  if (e.code === 'KeyM') { Audio.init(); const m = Audio.toggleMute(); toast(m ? '🔇 Sound off' : '🔊 Sound on'); }
  if (e.code === 'Escape' || e.code === 'KeyP') { if (mode === 'play') pause(true); else if (mode === 'paused') pause(false); }
  if (e.code === 'KeyR' && mode === 'play') startLevel(current);
  if ((e.code === 'Enter' || e.code === 'Space') && mode === 'title' && !$('title').classList.contains('hidden')) { e.preventDefault(); openLevels(); }
});
addEventListener('resize', () => renderer.resize());

// --------------------------------------------- adaptive quality guard ---
const perf = {
  frames: 0, time: 0, warm: 0,
  reset() { this.frames = 0; this.time = 0; this.warm = 0; },
  sample(dt) {
    if (mode !== 'play') return;
    this.warm += dt;
    if (this.warm < 3) return; // ignore shader-compile hitches
    this.frames++; this.time += dt;
    if (this.time > 4) {
      const fps = this.frames / this.time;
      const i = QUALITY_ORDER.indexOf(renderer.quality);
      if (fps < 32 && i > 0 && !save.qualityLocked) {
        const q = QUALITY_ORDER[i - 1];
        renderer.setQuality(q);
        save.quality = q; persist();
        document.querySelectorAll('.qbtn').forEach((b) => (b.textContent = qualityLabel()));
        toast(`Graphics set to ${QUALITY[q].label}`, 'for smoother swimming (change it in the pause menu)');
      }
      this.frames = 0; this.time = 0;
    }
  },
};

// --------------------------------------------------------------- loop ---
let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  input.pollPad();
  if (input.pressed.has('pad-pause')) { if (mode === 'play') pause(true); else if (mode === 'paused') pause(false); }
  if (debug.noRender) return; // tests drive the simulation themselves
  if (!game) { input.endFrame(); return; }
  if (mode === 'play' || mode === 'title' || (mode === 'menu' && game.state === 'win')) game.update(dt);
  else input.endFrame();
  if (mode === 'play') $('timer').textContent = fmt(game.stats.time);
  game.render();
  perf.sample(dt);
}

// boot: title screen over a live orbiting shot of the first level
show('title');
startLevel(0, true);
requestAnimationFrame(frame);
// debug / test hooks
const debug = { noRender: false };
window.__blahaj = {
  get game() { return game; }, startLevel, save, get mode() { return mode; }, debug,
  // advance the simulation deterministically (used by automated tests)
  sim(seconds, step = 1 / 60) { for (let t = 0; t < seconds; t += step) { input.pollPad(); if (game && (mode === 'play' || game.state === 'win')) game.update(step); } },
};
