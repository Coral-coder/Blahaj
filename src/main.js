// App shell: title, story flow, cutscenes, HUD, saving, main loop.
import * as THREE from 'three';
import { CHAPTERS } from './chapters.js';
import { Audio } from './audio.js';
import { Renderer, QUALITY, QUALITY_ORDER } from './renderer.js';
import { Input } from './input.js';
import { Game } from './game.js';
import { loadBlahajModel } from './art.js';
import { ITEMS } from './features.js';
import { CINES, restingHug } from './cinematics.js';
import { pilot, routeFor, STEP } from './autopilot.js';

const $ = (id) => document.getElementById(id);
// The self-playing build (branch claude/blahaj-autoplay) flips this on: Begin
// then tells the whole story with Blåhaj playing herself.
const AUTOPLAY = false;
const SAVE_KEY = 'blahaj-big-adventure-v1';
const TOUCH = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
const ABILITIES = {
  doubleJump: { icon: '🫧', name: 'Double Jump', how: TOUCH ? 'Tap ⤴ again in the air' : 'Press Space again in the air', key: '<kbd>Space</kbd> again in the air: double jump' },
  flop: { icon: '💥', name: 'Belly Flop', how: TOUCH ? 'Tap 💥 in the air. Super-bounce off cushions and squash nightmares' : 'Press C in the air. Super-bounce off cushions and squash nightmares', key: '<kbd>C</kbd> in the air: belly flop' },
  dash: { icon: '🚀', name: 'Torpedo Dash', how: TOUCH ? 'Tap 🚀 to zoom forward' : 'Press Shift to zoom forward', key: '<kbd>Shift</kbd>: torpedo dash' },
  glide: { icon: '🪽', name: 'Fin Glide', how: TOUCH ? 'Hold ⤴ while falling' : 'Hold Space while falling', key: 'Hold <kbd>Space</kbd> falling: fin glide' },
};
// the controls you've learned so far; moves still to come stay locked until you find them
function controlsHtml(ab) {
  const rows = [
    '<div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> / arrows: move</div>',
    '<div><kbd>Space</kbd>: jump</div>',
    ...Object.entries(ABILITIES).map(([k, a]) => (ab[k] ? `<div>${a.icon} ${a.key}</div>` : '<div class="locked">🔒 a new move — you’ll learn it on the way</div>')),
    '<div>Drag mouse or <kbd>Q</kbd>/<kbd>E</kbd>: turn camera</div>',
    '<div>Scroll wheel or <kbd>+</kbd>/<kbd>−</kbd>: zoom</div>',
    '<div><kbd>Esc</kbd> pause · <kbd>Enter</kbd> skip scene</div>',
    `<div>${TOUCH ? 'Touch: stick to swim, drag to look, pinch to zoom' : 'Gamepad and touch work too'}</div>`,
  ];
  return rows.join('');
}
// every move from the chapters you've reached
function learnedAbilities() {
  const ab = {};
  CHAPTERS.forEach((c, i) => { if (unlocked(i)) Object.assign(ab, c.abilities || {}); });
  return ab;
}
// touch buttons only for moves this chapter lets you use; a new one pulses for a while
function touchButtons(ch) {
  const ab = ch.abilities || {}, fresh = [].concat(ch.newAbility || []);
  for (const [id, k] of [['tDash', 'dash'], ['tFlop', 'flop']]) {
    const el = $(id); if (!el) continue;
    el.style.display = ab[k] ? '' : 'none';
    el.classList.toggle('fresh', !!ab[k] && fresh.includes(k));
    clearTimeout(el.freshT); if (fresh.includes(k)) el.freshT = setTimeout(() => el.classList.remove('fresh'), 12000);
  }
}

function loadSave() {
  let s = null;
  try { s = JSON.parse(localStorage.getItem(SAVE_KEY)); } catch (e) { /* storage unavailable */ }
  s = s || {};
  s.completed = s.completed || [];
  s.stars = s.stars || s.teddies || [];
  delete s.teddies;
  s.best = s.best || [];
  CHAPTERS.forEach((c, i) => { s.stars[i] = s.stars[i] || [false, false, false]; });
  s.quality = s.quality || 'high';
  return s;
}
const save = loadSave();
const persist = () => { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) { /* ignore */ } };
const unlocked = (i) => i === 0 || !!save.completed[i - 1];
const fmt = (t) => (Number.isFinite(t) ? `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}` : '–');

const renderer = new Renderer($('game'));
renderer.setQuality(save.quality);
const input = new Input($('game'));
let game = null, mode = 'title', current = 0, story = false;

function show(id) {
  ['title', 'how', 'chapters', 'pause', 'complete', 'ending'].forEach((s) => $(s).classList.toggle('hidden', s !== id));
  $('hud').classList.toggle('hidden', !(id === null && mode === 'play'));
  $('touch').classList.toggle('off', !(id === null && mode === 'play'));
}

// ------------------------------------------------------------------ hooks --
let toastTimer = null, popTimer = null;
const hooks = {
  hud: updateHud,
  toast(title, sub = '', ms = 2400) {
    const t = $('toast'); t.innerHTML = `${title}${sub ? `<small>${sub}</small>` : ''}`; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), ms);
  },
  pop(text) { const c = $('combo'); c.textContent = text; c.classList.add('show'); clearTimeout(popTimer); popTimer = setTimeout(() => c.classList.remove('show'), 900); },
  hint(t) { const h = $('hint'); if (t) { h.textContent = t; h.style.opacity = 1; } else h.style.opacity = 0; },
  fade(on) { $('fade').classList.toggle('on', on); },
  star(i) { if (mode !== 'demo' && !save.stars[current][i]) { save.stars[current][i] = true; persist(); } },
  subtitle(text) { const s = $('subtitle'); if (text) { s.textContent = text; s.classList.add('show'); } else s.classList.remove('show'); },
  letterbox(on) { document.body.classList.toggle('cinema', on); },
  complete: onComplete,
};

function loading(on, text = 'Tucking in…') { $('loading').classList.toggle('hidden', !on); $('loadingText').textContent = text; }

function newGame(i, opts = {}) {
  if (game) game.dispose();
  hooks.subtitle(null); hooks.letterbox(false); $('skip').classList.add('hidden'); cineDone = null;
  current = i;
  perf.reset();
  game = new Game(renderer, input, CHAPTERS[i], i, hooks, { savedStars: save.stars[i] });
  return game;
}

// Title: a slow orbit around Leo asleep, hugging Blåhaj.
function startTitle() {
  Audio.stopRoom();
  loading(true);
  setTimeout(() => {
    mode = 'title';
    newGame(0);
    const g = game;
    let a = 0;
    g.cine = {
      ownsCamera: true, ownsPlayer: true, dream: 1, done: false,
      update(dt) {
        a += dt * 0.05;
        restingHug(g, dt); // Blåhaj in Leo's arm, on the slipped-down duvet
        g.comfort = 100;
        // sweep gently back and forth along the arc that stays inside the room (never out through a wall)
        const th = 0.7 + 0.85 * Math.sin(a * 1.3), R = g.ch.room;
        g.camera.position.set(THREE.MathUtils.clamp(-5.0 + Math.cos(th) * 7.5, R.x0 + 0.8, R.x1 - 0.8), 7.2 + Math.sin(a * 2) * 0.3, THREE.MathUtils.clamp(-5.0 + Math.sin(th) * 7.5, R.z0 + 0.8, R.z1 - 0.8));
        g.camera.lookAt(-4.9, 5.6, -6.0);
      },
    };
    loading(false);
    show('title');
  }, 30);
}

function startChapter(i, withIntro) {
  loading(true, `Chapter ${i + 1}: ${CHAPTERS[i].title}`);
  Audio.init(); Audio.resume();
  setTimeout(() => {
    const ch = CHAPTERS[i];
    newGame(i);
    loading(false);
    mode = 'play';
    show(null);
    touchButtons(ch);
    $('chapterName').textContent = `${i + 1}. ${ch.title}`;
    $('objective').textContent = ch.goalText;
    $('fishTotal').textContent = ch.fish.length;
    updateHud();
    Audio.startMusic(ch.id);
    Audio.startRoom(game); // the room's own sounds, and its nightmares'
    if (withIntro && ch.intro && CINES[ch.intro]) runCine(CINES[ch.intro](game, hooks), () => chapterTitle(i));
    else chapterTitle(i);
    $('game').focus();
  }, 40);
}

function chapterTitle(i) {
  const ch = CHAPTERS[i];
  hooks.fade(false);
  const card = $('chapterCard');
  card.innerHTML = `<small>Chapter ${i + 1}</small>${ch.title}<em>${ch.goalText}</em>`;
  card.classList.add('show');
  setTimeout(() => card.classList.remove('show'), 3000);
  [].concat(ch.newAbility || []).filter((k) => ABILITIES[k]).forEach((k, i) => { const a = ABILITIES[k]; setTimeout(() => hooks.toast(`New move: ${a.icon} ${a.name}`, a.how, 4500), 2600 + i * 5000); });
}

let cineDone = null;
function runCine(c, after) {
  game.cine = c;
  cineDone = after;
  mode = 'cine';
  show(null);
  $('skip').classList.remove('hidden');
}
function endCine() {
  if (!game || !game.cine) return;
  const c = game.cine;
  game.cine = null;
  $('skip').classList.add('hidden');
  hooks.subtitle(null); hooks.letterbox(false);
  mode = 'play';
  show(null);
  const after = cineDone; cineDone = null;
  if (after) after(c);
}
function skipCine() {
  if (!game || !game.cine || mode !== 'cine') return;
  const c = game.cine;
  if (c.finish) c.finish();
  else { c.t = c.length - 0.01; c.update(0.01, game); }
  c.done = true;
}

function updateHud() {
  if (!game) return;
  const c = Math.round(game.comfort);
  const bar = $('dreamFill');
  bar.style.width = `${c}%`;
  $('dream').classList.toggle('low', c < 30);
  $('dreamLabel').textContent = c > 66 ? 'Sweet dreams' : c > 33 ? 'Restless…' : 'Nightmare!';
  $('fish').textContent = game.stats.fish;
  const F = game.features; // things to find before the way opens
  if (F && F.collect) { const info = ITEMS[F.collect.kind] || ITEMS.key; $('objective').textContent = `${CHAPTERS[current].goalText} · ${info.icon} ${F.got}/${F.items.length}`; }
  $('stars').innerHTML = game.stars.map((st) => `<span class="${st.taken || save.stars[current][st.i] ? '' : 'off'}">⭐</span>`).join('');
}

function onComplete(r) {
  if (mode === 'demo') return; // the attract-mode demo never counts
  const i = current, ch = CHAPTERS[i];
  save.completed[i] = true;
  r.stars.forEach((t, k) => { if (t) save.stars[i][k] = true; });
  save.bestFish = save.bestFish || []; save.bestFish[i] = Math.max(save.bestFish[i] || 0, r.fish);
  save.best[i] = save.best[i] ? Math.min(save.best[i], r.time) : r.time;
  persist();
  const after = () => {
    if (ch.outro === 'ending') { Audio.stopMusic(); Audio.stopRoom(); mode = 'menu'; showEnding(r); return; }
    if (i + 1 < CHAPTERS.length) startChapter(i + 1, true);
  };
  if (ch.outro && CINES[ch.outro]) setTimeout(() => runCine(CINES[ch.outro](game, hooks), after), 250);
  else after();
}

function showEnding() {
  const total = save.stars.reduce((a, t) => a + t.filter(Boolean).length, 0);
  $('endStars').textContent = `${total} / ${CHAPTERS.length * 3}`;
  hooks.fade(false);
  show('ending');
}

function buildChapterList() {
  const grid = $('chapterGrid');
  grid.innerHTML = '';
  CHAPTERS.forEach((ch, i) => {
    const open = unlocked(i);
    const d = document.createElement('button');
    d.className = 'chap' + (open ? '' : ' locked');
    const td = save.stars[i].map((t) => `<span class="${t ? '' : 'off'}">⭐</span>`).join('') + (save.completed[i] ? ` <span style="font-size:13px">🐟 ${(save.bestFish || [])[i] || 0}/${ch.fish.length}</span>` : '');
    d.innerHTML = `<span class="num">Chapter ${i + 1}</span><span class="name">${ch.title}</span><span class="goal">${open ? ch.goalText : '🔒 Finish the chapter before'}</span><span class="td">${td}</span><span class="meta">${save.completed[i] ? '⏱ best ' + fmt(save.best[i]) : ''}</span>`;
    if (open) d.onclick = () => { Audio.init(); Audio.click(); story = false; startChapter(i, true); };
    grid.appendChild(d);
  });
}

function pause(on) {
  if (on && mode === 'play') { mode = 'paused'; $('pauseControls').innerHTML = controlsHtml(CHAPTERS[current].abilities || {}); show('pause'); }
  else if (!on && mode === 'paused') { mode = 'play'; show(null); $('game').focus(); }
}
const qualityLabel = () => `Graphics: ${QUALITY[renderer.quality].label}`;
function cycleQuality() {
  const q = QUALITY_ORDER[(QUALITY_ORDER.indexOf(renderer.quality) + 1) % QUALITY_ORDER.length];
  save.quality = q; save.qualityLocked = true; persist();
  renderer.setQuality(q);
  document.querySelectorAll('.qbtn').forEach((b) => (b.textContent = qualityLabel()));
}

// ----------------------------------------------------------------- wiring --
$('btnStart').onclick = () => { Audio.init(); Audio.click(); story = true; startChapter(AUTOPLAY || !save.completed[0] ? 0 : Math.max(0, CHAPTERS.findIndex((c, i) => !save.completed[i])), true); };
$('btnChapters').onclick = () => { Audio.init(); Audio.click(); buildChapterList(); show('chapters'); };
$('btnHow').onclick = () => { Audio.init(); Audio.click(); $('howControls').innerHTML = controlsHtml(learnedAbilities()); show('how'); };
$('btnHowBack').onclick = () => { Audio.click(); show('title'); };
$('btnChaptersBack').onclick = () => { Audio.click(); show('title'); };
$('btnResume').onclick = () => pause(false);
$('btnRestart').onclick = () => { Audio.click(); startChapter(current, false); };
$('btnQuit').onclick = () => { Audio.click(); Audio.stopMusic(); startTitle(); };
$('btnEndTitle').onclick = () => { Audio.click(); startTitle(); };
$('skip').onclick = skipCine;
if (!AUTOPLAY && save.completed[0]) $('btnStart').textContent = '▶ Continue';
$('tPause').onclick = () => pause(true);
document.querySelectorAll('.qbtn').forEach((b) => { b.textContent = qualityLabel(); b.onclick = () => { Audio.click(); cycleQuality(); }; });

addEventListener('keydown', (e) => {
  idleT = 0;
  if (mode === 'demo') { e.preventDefault(); endDemo(e.code === 'Space' || e.code === 'Enter'); return; } // space starts the game; any other key, back to the title
  if (e.code === 'KeyM') { Audio.init(); const m = Audio.toggleMute(); hooks.toast(m ? '🔇 Sound off' : '🔊 Sound on'); }
  if (mode === 'cine' && (e.code === 'Enter' || e.code === 'Escape')) { skipCine(); return; }
  if (e.code === 'Escape' || e.code === 'KeyP') { if (mode === 'play') pause(true); else if (mode === 'paused') pause(false); }
  if (e.code === 'KeyR' && mode === 'play') startChapter(current, false);
  if (e.code === 'Enter' && mode === 'title' && !$('title').classList.contains('hidden')) $('btnStart').click();
});
addEventListener('resize', () => renderer.resize());

// ------------------------------------------- adaptive quality guard ---
const perf = {
  frames: 0, time: 0, warm: 0,
  reset() { this.frames = 0; this.time = 0; this.warm = 0; },
  sample(dt) {
    if (mode !== 'play' && mode !== 'cine') { this.reset(); return; }
    this.warm += dt;
    if (this.warm < 3) return; // ignore shader-compile hitches
    this.frames++; this.time += dt;
    if (this.time > 4) {
      const fps = this.frames / this.time;
      const i = QUALITY_ORDER.indexOf(renderer.quality);
      if (fps < 30 && i > 0 && !save.qualityLocked) {
        const q = QUALITY_ORDER[i - 1];
        renderer.setQuality(q); save.quality = q; persist();
        document.querySelectorAll('.qbtn').forEach((b) => (b.textContent = qualityLabel()));
        hooks.toast(`Graphics set to ${QUALITY[q].label}`, 'for smoother play (change it in the pause menu)');
      }
      this.frames = 0; this.time = 0;
    }
  },
};

// --------------------------------------------------------------- autoplay --
// The autopilot drives Blåhaj with the same routes the playtest uses, stepping
// the game in fixed 1/60 s updates so her jumps land exactly as tuned. It plays
// the attract-mode demo; with AUTOPLAY on it plays every chapter you start too.
// If a run goes wrong she takes the chapter again from the top; after three
// misses she hands you the controls.
const auto = { on: AUTOPLAY, game: null, gen: null, idx: -1, tries: 0, check: 0, acc: 0 };
$('autoBadge').classList.toggle('hidden', !AUTOPLAY);
function autoStep() {
  if (!game) return;
  if (mode === 'demo') { if (auto.gen && auto.game === game && auto.gen.next().done) { auto.gen = null; input.keys.clear(); endDemo(false); } return; }
  if (!auto.on || mode !== 'play') return;
  if (auto.game !== game) {
    if (game.state !== 'play') return;
    if (auto.idx !== current) { auto.idx = current; auto.tries = 0; }
    auto.game = game; auto.gen = pilot(game, routeFor(game.ch, current)); auto.check = 0;
    $('autoBadge').textContent = '🤖 Autoplay';
  }
  if (auto.check > 0 && --auto.check === 0 && game.state === 'play') autoMiss('route ended without winning');
  if (!auto.gen) return;
  const r = auto.gen.next();
  if (!r.done) return;
  auto.gen = null; input.keys.clear();
  if (!r.value.ok) autoMiss(r.value.log.join('\n'));
  else if (game.state === 'play') auto.check = 180; // should be through the door any moment
}
function autoMiss(why) {
  console.log(`[autoplay] chapter ${current + 1} attempt ${auto.tries + 1} missed:\n${why}`);
  auto.gen = null; input.keys.clear();
  if (++auto.tries < 3) { hooks.toast('Whoops!', 'Blåhaj takes another run at it'); setTimeout(() => startChapter(current, false), 1200); return; }
  game.steerYaw = null;
  $('autoBadge').textContent = '🎮 Your turn';
  hooks.toast('Your turn!', 'Blåhaj needs a hand with this one', 4500);
}

// ----------------------------------------------------------- attract mode --
// Leave the title alone for two minutes and the game shows itself off, like an
// arcade cabinet: about 15 seconds of the autopilot playing a random stretch of
// a random chapter under a flashing DEMO banner, then back to the title (and the
// two-minute wait starts over). Space, a click or a tap starts the game for real.
const ATTRACT = { idle: 120, length: 15, skipMax: 25 };
let idleT = 0, demo = null;
['pointermove', 'wheel'].forEach((ev) => addEventListener(ev, () => { idleT = 0; }, { passive: true }));
addEventListener('pointerdown', () => { idleT = 0; if (mode === 'demo') endDemo(true); });
function startDemo() {
  const i = Math.floor(Math.random() * CHAPTERS.length);
  mode = 'demo'; demo = null;
  show(null);
  loading(true, 'Demo');
  setTimeout(() => {
    if (mode !== 'demo') return;
    newGame(i);
    auto.game = game; auto.gen = pilot(game, routeFor(game.ch, i)); input.keys.clear();
    demo = { t: 0, skip: 2 + Math.random() * ATTRACT.skipMax, ready: false }; // fast-forward to a random moment behind the curtain
    $('demoChapter').textContent = `Chapter ${i + 1} · ${CHAPTERS[i].title}`;
    $('demoStart').textContent = input.isTouch ? 'TAP TO START' : 'PRESS SPACE TO START';
  }, 40);
}
function endDemo(start) {
  if (mode !== 'demo') return;
  mode = 'title'; demo = null; idleT = 0;
  auto.gen = null; auto.game = null; input.keys.clear();
  $('demo').classList.add('hidden');
  if (start) $('btnStart').click(); else startTitle();
}
function demoFrame(dt) {
  if (!demo) return;
  if (!demo.ready) { // skipping ahead: run the autopilot flat out for a few ms a frame, no drawing
    const t0 = performance.now();
    while (demo && demo.skip > 0 && performance.now() - t0 < 40) { autoStep(); if (mode !== 'demo') return; game.update(STEP); demo.skip -= STEP; }
    if (demo && demo.skip <= 0) { demo.ready = true; loading(false); $('demo').classList.remove('hidden'); }
    return;
  }
  demo.t += dt;
  if (demo.t > ATTRACT.length || ['pad-jump', 'pad-pause'].some((k) => input.pressed.has(k))) endDemo(demo.t <= ATTRACT.length);
}

// ------------------------------------------------------------------- loop --
const debug = { noRender: false, freeze: false };
let last = performance.now(), beatT = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (debug.noRender) return;
  if (debug.freeze && game) { game.render(); input.endFrame(); return; }
  input.pollPad();
  if (input.pressed.has('pad-pause')) { if (mode === 'play') pause(true); else if (mode === 'paused') pause(false); }
  if (!game) { input.endFrame(); return; }
  if (mode === 'title' && !$('title').classList.contains('hidden')) { // the attract-mode countdown
    idleT = input.pressed.size ? 0 : idleT + dt;
    if (idleT >= ATTRACT.idle) startDemo();
  } else if (mode !== 'demo') idleT = 0;
  if (mode === 'demo') { demoFrame(dt); if (!demo || !demo.ready) { input.endFrame(); return; } }
  if (mode === 'paused') input.endFrame();
  else if (auto.on || mode === 'demo') { // fixed steps, snapped to the display's frames so motion stays smooth
    auto.acc += dt;
    const n = Math.min(4, Math.round(auto.acc / STEP));
    auto.acc = THREE.MathUtils.clamp(auto.acc - n * STEP, -STEP, STEP);
    for (let i = 0; i < n && game; i++) {
      if (i) input.pollPad();
      autoStep();
      game.update(STEP);
      if (mode === 'cine' && game.cine && game.cine.done) endCine();
    }
  } else game.update(dt);
  if (mode === 'cine' && game.cine && game.cine.done) endCine();
  if (mode === 'play') {
    $('timer').textContent = fmt(game.stats.time);
    updateHud();
    Audio.setDream(game.state === 'won' ? 1 : game.comfort / 100); // once you've won, the hum fades away
    Audio.setProgress(...game.progress());
    beatT -= dt;
    if (game.comfort < 25 && beatT <= 0) { Audio.heartbeat(); beatT = 0.9 + game.comfort / 40; }
  } else if (mode !== 'paused') Audio.setDream(1); // cutscene or menu: the nightmare hum fades away
  Audio.updateRoom(game.camera);
  game.render();
  perf.sample(dt);
}

loading(true);
loadBlahajModel().then(() => { startTitle(); requestAnimationFrame(frame); });

window.__blahaj = {
  get game() { return game; }, get mode() { return mode; }, save, debug, CHAPTERS, auto, startDemo, ATTRACT,
  startChapter, skipCine, startTitle,
  // the playtest: play a whole route right now, stepping the game as fast as it will go
  runRoute(route) { const it = pilot(game, route); for (;;) { const r = it.next(); if (r.done) return { ...r.value, mode }; this.sim(STEP); } },
  sim(seconds, step = 1 / 60) { for (let t = 0; t < seconds; t += step) { input.pollPad(); if (game) { game.update(step); if (mode === 'cine' && game.cine && game.cine.done) endCine(); } } },
};
void THREE;
