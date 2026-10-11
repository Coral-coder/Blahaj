// The music box: play with Blåhaj's dream music yourself, or let it dream on its own.
// Sliders set the energy (calm to wild), mood (bright to dark), tempo, how many
// layers play and how deep under water it sounds. Auto lets every slider drift
// on its own slow tide and, every minute or so, blends into another chapter's
// theme: the new one swells in while the old one fades out.
import { createMusic, THEME_LIST } from './music.js';
import { Audio } from './audio.js';

const BLEND = 8; // seconds to crossfade from one theme into the next

export function createMusicBox({ titles, onChange }) {
  const P = { energy: 0.35, mood: 0.2, tempo: 0.5, layers: 3, water: 0.25 }; // all 0..1 except layers (0..5)
  const players = []; // { m, gain }: the one playing now is last
  let theme = 0, timer = null, auto = false, t0 = 0, nextBlend = 0, last = 0;
  const hold = {}; // a slider you just touched stays where you put it a while, even in Auto
  const seed = Math.random() * 100;

  const apply = (m) => {
    m.setIntensity(P.energy, P.mood); m.setTempo(0.78 + P.tempo * 0.5); m.setLayers(P.layers); m.setDream(1 - P.water * 0.75);
  };
  function play(i, blend) {
    const ctx = Audio.ctx, now = ctx.currentTime;
    theme = (i + THEME_LIST.length) % THEME_LIST.length;
    const gain = ctx.createGain(); gain.connect(Audio.musicVolume);
    const m = createMusic(ctx, gain);
    apply(m); m.start(THEME_LIST[theme]);
    gain.gain.setValueAtTime(blend ? 0 : 1, now);
    if (blend) gain.gain.linearRampToValueAtTime(1, now + BLEND);
    for (const p of players) { // the old ones fade out, then stop
      p.gain.gain.cancelScheduledValues(now); p.gain.gain.setValueAtTime(p.gain.gain.value, now);
      p.gain.gain.linearRampToValueAtTime(0, now + (blend ? BLEND : 0.6));
      const old = p; setTimeout(() => { old.m.stop(); old.gain.disconnect(); }, (blend ? BLEND : 0.6) * 1000 + 300);
    }
    players.length = 0; players.push({ m, gain });
    nextBlend = now + 50 + Math.random() * 25;
    onChange && onChange();
  }
  // a slow, wandering tide for each slider (a few sines that never quite line up)
  const tide = (k, t) => 0.5 + 0.5 * (Math.sin(t * 0.031 + k * 1.7 + seed) * 0.55 + Math.sin(t * 0.077 + k * 2.9) * 0.3 + Math.sin(t * 0.013 + k * 4.1) * 0.15);
  function tick() {
    const ctx = Audio.ctx; if (!ctx) return;
    const now = ctx.currentTime, dt = Math.min(0.5, now - last); last = now;
    if (auto) {
      const t = now - t0, ease = Math.min(1, dt * 0.35); let moved = false;
      const drift = (key, k, lo, hi) => { if ((hold[key] || 0) > now) return; const want = lo + (hi - lo) * tide(k, t); if (Math.abs(want - P[key]) > 1e-3) { P[key] += (want - P[key]) * ease; moved = true; } };
      drift('energy', 1, 0.05, 0.95); drift('mood', 2, 0, 0.85); drift('tempo', 3, 0.15, 0.85); drift('water', 4, 0.05, 0.75);
      if ((hold.layers || 0) <= now) { const want = Math.round(1 + tide(5, t) * 4); if (want !== P.layers) { P.layers = want; moved = true; } }
      if (moved) { for (const p of players) apply(p.m); onChange && onChange(); }
      if (now >= nextBlend) { // drift on to another chapter's theme
        let n = theme; while (n === theme) n = Math.floor(Math.random() * THEME_LIST.length);
        play(n, true);
      }
    }
  }
  return {
    get params() { return P; }, get auto() { return auto; }, get title() { return titles[THEME_LIST[theme]] || THEME_LIST[theme]; },
    open(startTheme) {
      Audio.init(); Audio.resume(); if (!Audio.ctx) return;
      Audio.duckMusic(true);
      const i = Math.max(0, THEME_LIST.indexOf(startTheme));
      last = Audio.ctx.currentTime; t0 = last;
      play(i, false);
      clearInterval(timer); timer = setInterval(tick, 100);
    },
    close() {
      clearInterval(timer); timer = null;
      if (!Audio.ctx) return;
      const now = Audio.ctx.currentTime;
      for (const p of players) { p.gain.gain.cancelScheduledValues(now); p.gain.gain.setValueAtTime(p.gain.gain.value, now); p.gain.gain.linearRampToValueAtTime(0, now + 0.8); const old = p; setTimeout(() => { old.m.stop(); old.gain.disconnect(); }, 1100); }
      players.length = 0;
      Audio.duckMusic(false);
    },
    step(d) { play(theme + d, true); },
    set(key, v) { P[key] = v; hold[key] = (Audio.ctx ? Audio.ctx.currentTime : 0) + 20; for (const p of players) apply(p.m); },
    toggleAuto() { auto = !auto; if (auto && Audio.ctx) { t0 = Audio.ctx.currentTime - Math.random() * 200; nextBlend = Audio.ctx.currentTime + 40; } onChange && onChange(); return auto; },
  };
}
