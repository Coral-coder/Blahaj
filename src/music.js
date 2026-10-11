// Generative background music: mellow, underwater, a little goofy, and it grows
// as you play. Every chapter has its own theme: key, tempo, mode, a leitmotif
// (a short tune that keeps coming back, varied), its own instruments and a bit
// of ambience. The music starts sparse and builds in stages as you make
// progress through the level (setProgress 0..1); when the way out opens the key
// lifts and the theme sings out in full. Chords wander a weighted chain, the
// melody answers and varies itself, and everything plays through a slowly
// swaying low-pass ("under water") into a big generated reverb. The dream level
// murks the water and detunes it as the nightmares close in.
//
// On top of that the music plays to the action (setIntensity: energy, threat).
// Energy is how hard the game is going right now: nightmares near or chasing,
// the room's runaway nightmare, the Moth Queen, Blåhaj zooming about, poofs
// and hits. It drives the rhythm section: a pulsing bass, hats, kick and
// snare, 16th-note arpeggios and offbeat stabs, fills and crashes, a push in
// tempo and a brighter, punchier mix. Threat darkens the harmony: the theme
// turns to its minor and the chords borrow from a tense chain. When the room
// is clear and Blåhaj takes it easy, it all eases back to the calm theme.

// --- scales and chords ---------------------------------------------------------
const MODES = {
  major: [0, 2, 4, 7, 9], lydian: [0, 2, 4, 6, 7, 9, 11], dorian: [0, 2, 3, 5, 7, 9, 10],
  mixo: [0, 2, 4, 5, 7, 9, 10], minor: [0, 3, 5, 7, 10], wholetone: [0, 2, 4, 6, 8, 10],
};
const CHORDS = {
  I: [0, 4, 7, 11, 14], IV: [5, 9, 12, 16, 19], vi: [9, 12, 16, 19, 23], ii: [2, 5, 9, 12, 16],
  iii: [4, 7, 11, 14, 19], V: [7, 12, 14, 17, 21], bVII: [10, 14, 17, 21, 24], II: [2, 6, 9, 13, 16],
  i: [0, 3, 7, 10, 14], iv: [5, 8, 12, 15, 19], bVI: [8, 12, 15, 19, 22], bIII: [3, 7, 10, 14, 17],
};
const CHAINS = {
  happy: { I: { IV: 4, vi: 3, ii: 2, iii: 1, bVII: 1 }, IV: { I: 3, V: 2, ii: 2, vi: 1, bVII: 1 }, vi: { IV: 3, ii: 3, V: 1, iii: 1 }, ii: { V: 4, IV: 1, I: 1 }, iii: { vi: 3, IV: 2 }, V: { I: 5, vi: 2, IV: 1 }, bVII: { IV: 2, I: 3 } },
  dreamy: { I: { II: 3, IV: 2, iii: 2 }, II: { I: 2, IV: 2, vi: 1 }, IV: { I: 3, iii: 1, II: 1 }, iii: { IV: 2, vi: 2 }, vi: { II: 2, IV: 2 } },
  moody: { i: { iv: 3, bVI: 3, bVII: 2, bIII: 1 }, iv: { i: 3, bVII: 2, bVI: 1 }, bVI: { bVII: 3, iv: 1, bIII: 1 }, bVII: { i: 3, bIII: 2 }, bIII: { bVI: 2, iv: 2, bVII: 1 } },
  // nightmares about: borrowed minor colours with a dramatic major V
  tense: { i: { bVI: 3, iv: 2, bVII: 2, V: 1 }, bVI: { bVII: 3, iv: 1, V: 1 }, bVII: { i: 3, V: 1, bVI: 1 }, iv: { V: 2, i: 2, bVI: 1 }, V: { i: 4, bVI: 1 } },
};

// --- chapter themes --------------------------------------------------------------
// lead: who sings the leitmotif; color: extra texture instrument; amb: ambience
const THEMES = {
  edge:      { key: 0, bpm: 72, mode: 'major', chain: 'happy', start: 'I', lead: 'kalimba', color: 'musicbox', amb: 'bubbles', goof: 0.9 },
  downstairs:{ key: -3, bpm: 76, mode: 'mixo', chain: 'happy', start: 'I', lead: 'marimba', color: 'rhodes', amb: 'fire', goof: 1 },
  kitchen:   { key: 2, bpm: 86, mode: 'major', chain: 'happy', start: 'I', lead: 'marimba', color: 'pizz', amb: 'drips', goof: 1.4 },
  laundry:   { key: -2, bpm: 80, mode: 'mixo', chain: 'happy', start: 'I', lead: 'kalimba', color: 'glock', amb: 'churn', goof: 1.3 },
  backyard:  { key: 5, bpm: 70, mode: 'lydian', chain: 'dreamy', start: 'I', lead: 'flute', color: 'harp', amb: 'crickets', goof: 0.7 },
  garage:    { key: -5, bpm: 82, mode: 'dorian', chain: 'moody', start: 'i', lead: 'rhodes', color: 'pizz', amb: 'buzz', goof: 0.9 },
  basement:  { key: -7, bpm: 66, mode: 'minor', chain: 'moody', start: 'i', lead: 'celesta', color: 'harp', amb: 'chuff', goof: 0.5 },
  stairs:    { key: 0, bpm: 96, mode: 'major', chain: 'happy', start: 'I', lead: 'marimba', color: 'harp', amb: 'clock', goof: 0.6 },
  hallway:   { key: 3, bpm: 74, mode: 'lydian', chain: 'dreamy', start: 'I', lead: 'flute', color: 'musicbox', amb: 'clock', goof: 0.8 },
  bathroom:  { key: 1, bpm: 78, mode: 'major', chain: 'happy', start: 'I', lead: 'kalimba', color: 'glock', amb: 'drips', goof: 1.5 },
  parents:   { key: -1, bpm: 68, mode: 'major', chain: 'dreamy', start: 'I', lead: 'musicbox', color: 'rhodes', amb: 'snore', goof: 1.1 },
  playroom:  { key: 4, bpm: 90, mode: 'major', chain: 'happy', start: 'I', lead: 'glock', color: 'pizz', amb: 'toys', goof: 1.6 },
  attic:     { key: -4, bpm: 70, mode: 'dorian', chain: 'moody', start: 'i', lead: 'celesta', color: 'strings', amb: 'wind', goof: 0.4 },
  bed:       { key: 0, bpm: 64, mode: 'major', chain: 'dreamy', start: 'I', lead: 'musicbox', color: 'harp', amb: 'bubbles', goof: 0.6 },
};
const THEME_LIST = Object.keys(THEMES);

// 16-step rhythms, lazy to chatty
const RHYTHMS = [
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
];
const BASS = [[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]];

const pick = (w, r) => { let s = 0; for (const k in w) s += w[k]; let x = r() * s; for (const k in w) { x -= w[k]; if (x <= 0) return k; } return Object.keys(w)[0]; };
const mkRng = (seed) => () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

export function createMusic(ctx, out) {
  const rnd = mkRng((Math.random() * 1e9) | 0);

  // --- the bus: instruments -> underwater low-pass (swaying) -> dry + reverb -> out
  const bus = ctx.createGain(); bus.gain.value = 1;
  const water = ctx.createBiquadFilter(); water.type = 'lowpass'; water.frequency.value = 2100; water.Q.value = 0.6;
  const sway = ctx.createOscillator(); sway.frequency.value = 0.11;
  const swayAmt = ctx.createGain(); swayAmt.gain.value = 420; sway.connect(swayAmt).connect(water.frequency); sway.start();
  const verb = ctx.createConvolver(); verb.buffer = impulse(ctx, 4.2);
  const wet = ctx.createGain(); wet.gain.value = 0.55;
  const dry = ctx.createGain(); dry.gain.value = 0.72;
  bus.connect(water); water.connect(dry).connect(out); water.connect(verb).connect(wet).connect(out);
  // drums: their own bus, only a little reverb, so the beat stays tight and punchy
  const drums = ctx.createGain(); drums.gain.value = 0.9; const drumLp = ctx.createBiquadFilter(); drumLp.type = 'lowpass'; drumLp.frequency.value = 9000;
  const drumVerb = ctx.createGain(); drumVerb.gain.value = 0.12; drums.connect(drumLp).connect(out); drumLp.connect(drumVerb).connect(verb);
  // a gentle stereo echo for the lead, so phrases trail off and flow into each other
  const echoIn = ctx.createGain(); echoIn.gain.value = 0.32;
  const echo = ctx.createDelay(2); const fb = ctx.createGain(); fb.gain.value = 0.38; const echoLp = ctx.createBiquadFilter(); echoLp.type = 'lowpass'; echoLp.frequency.value = 1600;
  echoIn.connect(echo); echo.connect(echoLp).connect(fb).connect(echo); echoLp.connect(bus);

  const S = { th: THEMES.edge, step: 0, next: 0, chord: 'I', motif: null, theme: null, phrase: 0, density: 1, dream: 1, timer: null,
    progress: 0, stage: 0, unlocked: false, lift: 0, tension: 0, energy: 0, eWant: 0, threat: 0, tWant: 0, accents: [] };
  const keyOff = () => S.th.key + S.lift;
  const hz = (semi) => 261.63 * Math.pow(2, (semi + keyOff()) / 12) * (1 + (1 - S.dream) * (rnd() - 0.5) * 0.05);
  const stepDur = () => 60 / (S.th.bpm * (1 + S.stage * 0.025 + S.energy * 0.14)) / 4 * (S.dream < 0.4 ? 1.08 : 1); // the action pushes the tempo
  const dark = () => S.threat > 0.5; // under threat: the theme turns minor

  // --- instruments -----------------------------------------------------------------
  const env = (g, t, a, peak, d) => { g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0008, t + a + d); };
  function osc(type, f, t, end, dest) { const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(f, t); o.connect(dest); o.start(t); o.stop(end + 0.05); return o; }
  function voice(dest, pan = 0) { // a gain into the bus, optionally panned
    const g = ctx.createGain();
    if (pan && ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = pan; g.connect(p).connect(dest); } else g.connect(dest);
    return g;
  }
  function pad(semis, t, dur, bright = 0) { // warm, slow, a little detuned, with a slow filter swell
    for (const s of semis) {
      const g = voice(bus, (rnd() - 0.5) * 0.6), f = ctx.createBiquadFilter(); f.type = 'lowpass';
      f.frequency.setValueAtTime(600 + bright * 300, t); f.frequency.linearRampToValueAtTime(1100 + bright * 700, t + dur * 0.5); f.frequency.linearRampToValueAtTime(700, t + dur + 1);
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.024, t + dur * 0.35); g.gain.linearRampToValueAtTime(0.018, t + dur * 0.8); g.gain.linearRampToValueAtTime(0, t + dur + 1.4);
      f.connect(g);
      for (const det of [-7, 6]) { const o = osc('triangle', hz(s), t, t + dur + 1.5, f); o.detune.value = det; }
    }
  }
  function strings(semis, t, dur) { // soft bowed swell for the later stages
    for (const s of semis) {
      const g = voice(bus, (rnd() - 0.5) * 0.8), f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1300; f.Q.value = 0.4;
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.012, t + dur * 0.5); g.gain.linearRampToValueAtTime(0, t + dur + 0.8);
      f.connect(g);
      for (const det of [-9, 0, 8]) { const o = osc('sawtooth', hz(s), t, t + dur + 0.9, f); o.detune.value = det; }
    }
  }
  const PLUCKS = { // [partials [ratio, level, decay]], body decay, peak
    kalimba: [[[1, 1, 0.9], [4.02, 0.25, 0.18]], 0.09],
    marimba: [[[1, 1, 0.55], [3.93, 0.3, 0.08], [9.2, 0.08, 0.03]], 0.1],
    glock: [[[1, 0.8, 1.2], [2.76, 0.35, 0.4], [5.4, 0.18, 0.15]], 0.06],
    musicbox: [[[1, 0.9, 1.4], [3.0, 0.25, 0.3], [6.1, 0.12, 0.12]], 0.06],
    celesta: [[[1, 1, 1.0], [2.0, 0.3, 0.5], [4.0, 0.12, 0.2]], 0.075],
    rhodes: [[[1, 1, 1.3], [2.0, 0.25, 0.6], [7.0, 0.06, 0.08]], 0.08],
    harp: [[[1, 1, 1.1], [2.0, 0.35, 0.5], [3.0, 0.12, 0.25]], 0.06],
    pizz: [[[1, 1, 0.22], [2.0, 0.3, 0.1]], 0.08],
  };
  function pluck(kind, semi, t, vol = 1, opt = {}) {
    const [parts, peak] = PLUCKS[kind] || PLUCKS.kalimba, f = hz(semi), dest = opt.echo ? echoIn : null;
    for (const [ratio, lvl, dec] of parts) {
      const g = voice(bus, opt.pan || 0); env(g, t, 0.004, peak * lvl * vol, dec * (opt.long || 1));
      if (dest) g.connect(dest);
      const o = osc(kind === 'rhodes' && ratio === 1 ? 'triangle' : 'sine', (opt.scoop && ratio === 1 ? f * 0.89 : f) * ratio, t, t + dec * (opt.long || 1) + 0.2, g);
      if (opt.scoop && ratio === 1) o.frequency.exponentialRampToValueAtTime(f, t + 0.09); // a goofy little scoop up into the note
      if (kind === 'rhodes' && ratio === 1) { const tr = ctx.createOscillator(), ta = ctx.createGain(); tr.frequency.value = 4.5; ta.gain.value = peak * vol * 0.3; tr.connect(ta).connect(g.gain); tr.start(t); tr.stop(t + dec + 0.2); }
    }
  }
  let fluteO = null, fluteG = null, fluteEnd = 0;
  function flute(semi, t, dur, vol = 1) { // legato: one voice that glides from note to note, with a breathy vibrato
    const f = hz(semi + 12);
    if (!fluteO || t > fluteEnd - 0.02) {
      fluteG = voice(bus, 0.15); fluteG.connect(echoIn);
      fluteO = osc('sine', f, t, t + 30, fluteG);
      const o2 = osc('triangle', f, t, t + 30, fluteG); o2.detune.value = 4; fluteO.partner = o2;
      const vib = ctx.createOscillator(), va = ctx.createGain(); vib.frequency.value = 5; va.gain.setValueAtTime(0, t); va.gain.linearRampToValueAtTime(f * 0.012, t + 0.6); vib.connect(va); va.connect(fluteO.frequency); va.connect(o2.frequency); vib.start(t); vib.stop(t + 30);
      fluteO.vib = vib; fluteG.gain.setValueAtTime(0, t);
    }
    fluteO.frequency.setTargetAtTime(f, t, 0.04); fluteO.partner.frequency.setTargetAtTime(f, t, 0.04);
    fluteG.gain.setTargetAtTime(0.05 * vol, t, 0.05);
    fluteG.gain.setTargetAtTime(0.0, t + dur, 0.12);
    fluteEnd = t + dur + 0.6;
    const o = fluteO, gg = fluteG; // stop this voice once it's been quiet a while
    setTimeout(() => { if (fluteO === o && ctx.currentTime > fluteEnd) { try { o.stop(); o.partner.stop(); o.vib.stop(); } catch (e) { /* stopped */ } fluteO = null; void gg; } }, Math.max(0, (fluteEnd - ctx.currentTime) * 1000 + 800));
  }
  function boop(semi, t, vol = 1, len = 0.45) { // round, bouncy bass with a little pitch drop
    const f = hz(semi - 24), g = voice(bus), lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420 + S.energy * 380;
    env(g, t, 0.01, 0.19 * vol, len); lp.connect(g);
    const o = osc('sine', f * 1.5, t, t + 0.6, lp); o.frequency.exponentialRampToValueAtTime(f, t + 0.06);
    const o2 = osc('triangle', f, t, t + 0.6, lp); o2.detune.value = 3;
  }
  function noiseHit(t, dur, freq, vol, type = 'highpass', pan = 0, dest = bus) {
    const len = Math.max(1, Math.floor(ctx.sampleRate * dur)), buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2);
    const src = ctx.createBufferSource(); src.buffer = buf; const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq;
    const g = voice(dest, pan); g.gain.value = vol; src.connect(f).connect(g); src.start(t);
  }
  const shaker = (t, v) => noiseHit(t, 0.06, 6000, 0.05 * v, 'highpass', 0.3);
  function woodblock(t, v) { const g = voice(bus, -0.3); env(g, t, 0.002, 0.06 * v, 0.06); osc('sine', 820, t, t + 0.1, g); }
  function softKick(t) { const g = voice(bus); env(g, t, 0.004, 0.16, 0.22); const o = osc('sine', 120, t, t + 0.3, g); o.frequency.exponentialRampToValueAtTime(48, t + 0.15); }
  // --- the rhythm section the action brings in -----------------------------------
  function kick(t, v = 1) { const g = voice(drums); env(g, t, 0.002, 0.42 * v, 0.28); const o = osc('sine', 165, t, t + 0.35, g); o.frequency.exponentialRampToValueAtTime(44, t + 0.12); noiseHit(t, 0.012, 2500, 0.05 * v, 'highpass', 0, drums); }
  function snare(t, v = 1) { noiseHit(t, 0.16, 1700, 0.16 * v, 'bandpass', 0.05, drums); const g = voice(drums); env(g, t, 0.002, 0.09 * v, 0.09); osc('triangle', 196, t, t + 0.12, g); }
  function hat(t, v = 1, open = false) { noiseHit(t, open ? 0.22 : 0.035, 7500, (open ? 0.06 : 0.07) * v, 'highpass', 0.35, drums); }
  function tom(t, semi, v = 1) { const g = voice(drums, (semi - 6) / 20); env(g, t, 0.003, 0.22 * v, 0.24); const o = osc('sine', hz(semi - 12), t, t + 0.3, g); o.frequency.exponentialRampToValueAtTime(hz(semi - 17), t + 0.2); }
  function crash(t, v = 1) { noiseHit(t, 1.6, 5200, 0.07 * v, 'highpass', -0.2, drums); }
  function stab(semis, t, v = 1) { // a short bright chord on the offbeat
    for (const s of semis) { const g = voice(bus, (rnd() - 0.5) * 0.7), f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 2400; env(g, t, 0.003, 0.03 * v, 0.14); f.connect(g); for (const det of [-8, 7]) { const o = osc('sawtooth', hz(s), t, t + 0.2, f); o.detune.value = det; } }
  }
  function bubbles(t) {
    const n = 1 + Math.floor(rnd() * 4);
    for (let i = 0; i < n; i++) {
      const tt = t + i * (0.06 + rnd() * 0.09), f = 500 + rnd() * 900, g = voice(bus, (rnd() - 0.5) * 1.2);
      env(g, tt, 0.003, 0.03 + rnd() * 0.03, 0.09);
      const o = osc('sine', f, tt, tt + 0.12, g); o.frequency.exponentialRampToValueAtTime(f * (1.6 + rnd() * 0.8), tt + 0.09);
    }
  }
  // a bit of the room in the music, in time with it
  function ambience(t, step, chord) {
    const a = S.th.amb, p = (rnd() - 0.5) * 1.4, inBar = step % 16, sd = stepDur();
    if (a === 'bubbles' && rnd() < 0.035) bubbles(t);
    else if (a === 'drips' && inBar % 2 === 1 && rnd() < 0.14) { // drips, tuned to the chord
      const f = hz(chord[Math.floor(rnd() * 4)] + 24), g = voice(bus, p); env(g, t, 0.002, 0.05, 0.14);
      const o = osc('sine', f * 1.5, t, t + 0.18, g); o.frequency.exponentialRampToValueAtTime(f, t + 0.05);
    } else if (a === 'crickets' && (inBar === 4 || inBar === 12) && rnd() < 0.7) { // chirps on the backbeat
      const f = hz(chord[2] + 36); for (let i = 0; i < 3; i++) { const g = voice(bus, p), tt = t + i * 0.055; env(g, tt, 0.004, 0.012, 0.03); osc('sine', f, tt, tt + 0.05, g); }
    } else if (a === 'fire') { // crackles on the off-beats, and a soft whoomph every two bars
      if (inBar % 2 === 1 && rnd() < 0.35) noiseHit(t + rnd() * sd * 0.3, 0.02 + rnd() * 0.02, 1800 + rnd() * 2500, 0.05, 'bandpass', p);
      if (step % 32 === 0) { const g = voice(bus); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.02, t + 0.8); g.gain.linearRampToValueAtTime(0, t + 2.4); const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 260; lp.connect(g); noiseHit(t, 0.001, 200, 0, 'lowpass'); osc('sawtooth', hz(chord[0] - 36), t, t + 2.5, lp); }
    } else if (a === 'clock' && inBar % 4 === 0) { const g = voice(bus, -0.4); env(g, t, 0.001, 0.05, 0.03); osc('sine', inBar % 8 === 0 ? 2300 : 1800, t, t + 0.06, g); } // tick... tock
    else if (a === 'churn' && inBar % 4 === 0) { noiseHit(t, 0.18, 500, 0.05, 'lowpass', p); if (inBar === 0) { const g = voice(bus); env(g, t, 0.005, 0.1, 0.15); osc('sine', hz(chord[0] - 36), t, t + 0.2, g); } } // the washing machine's rhythm
    else if (a === 'buzz' && step % 64 === 0) { const g = voice(bus), lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 700; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.008, t + 1); g.gain.linearRampToValueAtTime(0, t + sd * 64); lp.connect(g); osc('sawtooth', hz(chord[0] - 24), t, t + sd * 64 + 0.1, lp); } // the strip light, humming in key
    else if (a === 'chuff' && inBar % 2 === 0) noiseHit(t, 0.07, 900, inBar % 4 === 0 ? 0.04 : 0.025, 'bandpass', 0.2); // a toy train chuffing along
    else if (a === 'snore' && step % 64 === 0) { // Dad's snore, in key (and a bit silly)
      const g = voice(bus), lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 400; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.03, t + 0.9); g.gain.linearRampToValueAtTime(0, t + 1.8); lp.connect(g);
      const o = osc('sawtooth', hz(chord[0] - 24), t, t + 1.9, lp); o.frequency.linearRampToValueAtTime(hz(chord[0] - 22), t + 1.6);
    } else if (a === 'toys' && inBar >= 12 && rnd() < 0.6) woodblock(t, 0.25); // a wind-up toy's ratchet at the end of the bar
    else if (a === 'wind' && step % 64 === 0) noiseHit(t, 3.5, 500, 0.02, 'bandpass', p);
    else if (a === 'hum' && step % 64 === 0) { const g = voice(bus); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.008, t + 1); g.gain.linearRampToValueAtTime(0, t + 5); osc('sine', 120, t, t + 5.2, g); }
  }
  function slideWhistle(t, up = true) {
    const g = voice(bus, 0.2), f0 = hz(up ? 12 : 31), f1 = hz(up ? 31 : 12);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.04, t + 0.05); g.gain.linearRampToValueAtTime(0, t + 0.55);
    const o = osc('sine', f0, t, t + 0.6, g); o.frequency.exponentialRampToValueAtTime(f1, t + 0.5);
    const vib = ctx.createOscillator(), va = ctx.createGain(); vib.frequency.value = 7; va.gain.value = 9; vib.connect(va).connect(o.frequency); vib.start(t); vib.stop(t + 0.6);
  }
  function boing(t) {
    const g = voice(bus); env(g, t, 0.005, 0.11, 0.5);
    const o = osc('sine', hz(-12), t, t + 0.6, g); o.frequency.exponentialRampToValueAtTime(hz(-5), t + 0.08); o.frequency.exponentialRampToValueAtTime(hz(-14), t + 0.5);
    const w = ctx.createOscillator(), wa = ctx.createGain(); w.frequency.value = 14; wa.gain.value = 18; w.connect(wa).connect(o.frequency); w.start(t); w.stop(t + 0.6);
  }
  function chime(t) { // the way out opens: a little rising sparkle
    [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => pluck('glock', s + 12, t + i * 0.07, 0.8, { pan: (i / 6 - 0.5) }));
  }

  // --- composition -----------------------------------------------------------------
  const scale = () => MODES[dark() && ['major', 'lydian', 'mixo'].includes(S.th.mode) ? 'minor' : S.th.mode];
  const degSemi = (d) => { const sc = scale(), n = sc.length; return sc[((d % n) + n) % n] + 12 * Math.floor(d / n); };
  function makeMotif(r) { // a 2-bar tune: rhythm + a wandering line
    const rA = RHYTHMS[Math.floor(r() * RHYTHMS.length)], rB = RHYTHMS[Math.floor(r() * RHYTHMS.length)], n = scale().length;
    let deg = n + Math.floor(r() * n); const notes = [];
    for (let i = 0; i < 32; i++) {
      if (!(i < 16 ? rA[i] : rB[i - 16])) { notes.push(null); continue; }
      deg = Math.max(2, Math.min(n * 2 + 2, deg + [-2, -1, -1, 0, 1, 1, 2][Math.floor(r() * 7)]));
      notes.push(deg);
    }
    return notes;
  }
  const vary = (m) => m.map((d) => (d === null ? (rnd() < 0.08 ? scale().length + 2 : null) : rnd() < 0.3 ? Math.max(2, d + (rnd() < 0.5 ? 1 : -1)) : d));
  const nearChord = (semi, chord) => { const c = chord.map((x) => ((x % 12) + 12) % 12), pc = ((semi % 12) + 12) % 12; if (c.includes(pc)) return semi; for (const d of [1, -1, 2, -2]) if (c.includes((((semi + d) % 12) + 12) % 12)) return semi + d; return semi; };

  // busier phrasing: fill some rests with repeated or neighbouring notes, more as the energy rises
  const drive = (m, E) => m.map((d, i) => (d !== null ? d : i % 2 === 0 && rnd() < (E - 0.4) * 0.8 ? (m[(i + 31) % 32] ?? m[(i + 30) % 32] ?? scale().length + 2) : null));
  function playAccent(k, t, chord) {
    if (k === 'poof') [0, 2, 4, 7].forEach((d, i) => pluck(S.th.lead === 'flute' ? 'glock' : S.th.lead, chord[i % 4] + 12 + (i === 3 ? 12 : 0), t + i * 0.055, 0.7, { pan: (i / 3 - 0.5) * 0.6 }));
    else if (k === 'hit') { stab([chord[0] - 12, chord[0] - 11, chord[0] - 6], t, 1.2); kick(t, 0.8); }
    else if (k === 'boss') { kick(t, 1.2); crash(t, 1.2); stab(chord.slice(0, 4), t, 1.6); [0, 7, 12].forEach((s, i) => boop(chord[0] + s, t + i * 0.08, 1.1, 0.3)); }
    else if (k === 'rage') { strings([chord[0], chord[0] + 1, chord[0] + 6].map((s) => s + 12), t, 1.6); tom(t, 0, 1.2); tom(t + 0.12, 0, 1); tom(t + 0.24, -2, 1.2); }
    else if (k === 'triumph') { crash(t, 1); chime(t); [0, 4, 7, 12].forEach((s, i) => pluck('harp', s + 12, t + i * 0.09, 0.9)); }
  }

  // stages: 0 pad + ambience, 1 + melody, 2 + bass and color, 3 + counter-melody and rolling arpeggios,
  // 4 + light percussion and strings; unlocked: key lifts a step and the theme plays out in full
  function scheduleStep(t, step) {
    const inBar = step % 16, bar = Math.floor(step / 16), sd = stepDur(), st = S.stage, th = S.th;
    // follow the action: energy rises fast and settles slowly, the darkness likewise
    S.energy += (S.eWant - S.energy) * (S.eWant > S.energy ? 0.2 : 0.02);
    S.threat += (S.tWant - S.threat) * (S.tWant > S.threat ? 0.15 : 0.02);
    const E = S.energy;
    if (step % 16 === 0 && step % 32 !== 0 && E > 0.6) { // when it's busy the chords move every bar
      const ch = dark() ? CHAINS.tense : CHAINS[th.chain]; S.chord = pick(ch[S.chord] || ch[dark() ? 'i' : th.start], rnd);
      pad(CHORDS[S.chord].slice(0, 4).map((s) => s - 12), t, sd * 16, st / 5 + E);
    }
    if (step % 32 === 0) {
      const chain = dark() ? CHAINS.tense : CHAINS[th.chain];
      if (bar > 0 || dark()) S.chord = pick(chain[S.chord] || chain[dark() ? 'i' : th.start], rnd);
      if (!dark() && !CHAINS[th.chain][S.chord]) S.chord = th.start; // back to the theme's own chords
      if (bar % 8 === 0) {
        S.density = bar === 0 ? 0.6 : [0.55, 1, 0.8, 1, 0.65][Math.floor(rnd() * 5)];
        if (bar > 0 && rnd() < 0.4 * th.goof) boing(t);
      }
      if (S.pendingStage !== undefined && S.pendingStage !== S.stage) { S.stage = S.pendingStage; if (S.stage >= 2) chime(t); }
      const chordSemis = CHORDS[S.chord].slice(0, 4).map((s) => s - 12);
      if (E <= 0.6) pad(chordSemis, t, sd * 32, st / 5 + E); else pad(chordSemis, t, sd * 16, st / 5 + E);
      if (st >= 4 || (th.color === 'strings' && st >= 2)) strings(CHORDS[S.chord].slice(1, 4), t, sd * 32);
      // phrases: the leitmotif (A), its variations, and free answers (B)
      const ph = S.phrase++ % 4;
      S.cur = ph === 0 || (st >= 5 && ph === 2) ? S.theme : ph === 2 ? (S.motif = rnd() < 0.6 ? makeMotif(rnd) : S.motif || makeMotif(rnd)) : vary(S.theme);
      S.restPhrase = st >= 1 && rnd() < (1 - S.density) * 0.6 * (1 - E);
      if (E > 0.5) S.cur = drive(S.cur, E); // busier, more rhythmic phrasing when the action is up
      S.counter = st >= 3 ? vary(S.cur.map((d) => (d === null ? null : d - 2))) : null;
    }
    const chord = CHORDS[S.chord];
    // the leitmotif / melody
    const n = S.cur && S.cur[step % 32];
    if ((st >= 1 || E > 0.35) && n !== null && n !== undefined && !S.restPhrase) {
      let semi = degSemi(n); if (inBar % 8 === 0) semi = nearChord(semi, chord);
      const lead = st >= 5 && th.lead !== 'flute' && rnd() < 0.5 ? 'flute' : th.lead;
      if (lead === 'flute') { let len = 1; while (len < 6 && S.cur[(step + len) % 32] === null) len++; flute(semi, t, sd * len * 0.95, 0.9 + st * 0.05); }
      else pluck(lead, semi, t, (0.75 + rnd() * 0.3) * (1 + E * 0.35 * (inBar % 4 === 0 ? 1.4 : 0.6)), { scoop: rnd() < 0.1 * th.goof * (1 - E), echo: E < 0.7, pan: (rnd() - 0.5) * 0.4, long: 1 - E * 0.45 });
      if (E > 0.75 && inBar % 4 === 0) pluck(lead, semi + 12, t, 0.35, { pan: -0.25 }); // doubled up an octave when it's wild
      if (st >= 5 && lead !== th.lead) pluck(th.lead, semi + 12, t, 0.45, { pan: 0.3 });
    }
    // counter-melody, a sixth below on the color instrument, offset by an eighth
    if (S.counter && st >= 3 && inBar % 2 === 1) { const c = S.counter[(step + 31) % 32]; if (c !== null && c !== undefined && th.color !== 'strings') pluck(th.color, nearChord(degSemi(c) - 12 + 12, chord), t, 0.5, { pan: -0.35 }); }
    // rolling arpeggio across two octaves (harp-like), flowing on every eighth in the later stages;
    // when the action is up it runs in 16ths, staccato, on the lead
    if (E > 0.55) {
      const tones = chord.slice(0, 4), k = step % 8, idx = [0, 1, 2, 3, 2, 1, 2, 3][k] , oct = k >= 4 ? 12 : 0;
      if (rnd() < 0.5 + E * 0.5) pluck(th.lead === 'flute' ? 'harp' : th.lead, tones[idx] + oct, t, 0.22 + (k === 0 ? 0.15 : 0), { pan: (k / 7 - 0.5) * 0.9, long: 0.35 });
    } else if (st >= 3 && inBar % 2 === 0 && rnd() < 0.85) {
      const tones = chord.slice(0, 4), k = (step / 2) % 8, oct = k < 4 ? 0 : 12, idx = k < 4 ? k : 7 - k;
      pluck(th.color === 'strings' || th.color === 'pizz' ? 'harp' : th.color, tones[idx] + oct, t, 0.35, { pan: (k / 7 - 0.5) * 0.8 });
    }
    // bass: a driving eighth-note pulse once the action is up, otherwise the lazy bounce
    if (E > 0.22) {
      if (inBar % 2 === 0) { const pat = [0, 0, 7, 0, 12, 0, 7, 10], s = chord[0] + (pat[(inBar / 2) | 0] === 10 ? (dark() ? 10 : 7) : pat[(inBar / 2) | 0]); boop(s, t, 0.7 + E * 0.5 + (inBar % 8 === 0 ? 0.25 : 0), 0.18 + (1 - E) * 0.2); }
      else if (E > 0.8 && rnd() < 0.3) boop(chord[0] + 12, t, 0.5, 0.1);
    } else if (st >= 2 && S.density > 0.5) { const bp = BASS[Math.floor(bar / 2) % BASS.length]; if (bp[inBar]) boop(inBar === 0 ? chord[0] : rnd() < 0.5 ? chord[0] : chord[2] - 12, t); }
    // the beat: hats, then kick and snare, then 16ths, ghost notes, fills and crashes
    if (E > 0.3) {
      if (inBar % 2 === 0) hat(t, (inBar % 4 === 2 ? 1 : 0.6) * (0.6 + E * 0.6), E > 0.5 && inBar === 14);
      else if (E > 0.65 && rnd() < E) hat(t, 0.35 + rnd() * 0.2);
    }
    const fillBar = E > 0.72 && bar % 4 === 3 && inBar >= 12;
    if (E > 0.45 && !fillBar) {
      if (inBar === 0 || inBar === 8 || (inBar === 6 && E > 0.6) || (inBar === 11 && rnd() < E * 0.6)) kick(t, 0.7 + E * 0.4);
      if (inBar === 4 || inBar === 12) snare(t, 0.6 + E * 0.5);
      else if (E > 0.7 && (inBar === 7 || inBar === 14) && rnd() < 0.5) snare(t, 0.25); // ghost notes
    }
    if (fillBar) tom(t, [9, 7, 4, 0][inBar - 12], 0.8 + E * 0.3);
    if (E > 0.72 && bar % 4 === 0 && inBar === 0 && bar > 0) crash(t, 0.6 + E * 0.4);
    if (E > 0.6 && (inBar === 2 || inBar === 10 || (inBar === 7 && E > 0.8))) stab(chord.slice(1, 4), t, 0.6 + E * 0.5); // offbeat stabs
    // accents asked for by the game (a poof, a hit, the Queen), on the next step
    while (S.accents.length) playAccent(S.accents.shift(), t, chord);
    // percussion: soft and loose (the calm theme's own)
    if (st >= 4 && E < 0.45) {
      if (inBar % 2 === 0 && rnd() < 0.7) shaker(t, inBar % 4 === 2 ? 1 : 0.5);
      if ((inBar === 6 || inBar === 14) && rnd() < 0.7) woodblock(t, 0.8);
      if (st >= 5 && (inBar === 0 || inBar === 10)) softKick(t);
    }
    ambience(t, step, chord);
    if (inBar === 12 && step % 32 >= 16 && rnd() < 0.06 * th.goof) slideWhistle(t, rnd() < 0.6);
  }

  return {
    start(theme = 'edge') {
      this.stop();
      const id = typeof theme === 'number' ? THEME_LIST[theme % THEME_LIST.length] : theme;
      S.th = THEMES[id] || THEMES.edge;
      const tr = mkRng(Array.from(id).reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7)); // the leitmotif is the same every time you play the chapter
      S.theme = makeMotif(tr); S.motif = null;
      S.step = 0; S.chord = S.th.start; S.phrase = 0; S.stage = 0; S.pendingStage = 0; S.progress = 0; S.unlocked = false; S.lift = 0;
      S.energy = S.eWant = 0; S.threat = S.tWant = 0; S.accents.length = 0;
      S.next = ctx.currentTime + 0.15;
      const tick = () => { while (S.next < ctx.currentTime + 0.5) { scheduleStep(S.next, S.step++); S.next += stepDur(); } };
      tick(); S.timer = setInterval(tick, 120);
    },
    stop() { if (S.timer) clearInterval(S.timer); S.timer = null; },
    // how far through the level you are (0..1), and whether the way out is open
    setProgress(p, unlocked = false) {
      S.progress = Math.max(S.progress, p);
      const want = unlocked ? 5 : Math.min(4, 1 + Math.floor(S.progress * 3.6 + (S.step > 64 ? 0.4 : 0)));
      S.pendingStage = Math.max(S.pendingStage ?? 0, S.step < 32 ? Math.min(want, 1) : want);
      if (unlocked && !S.unlocked) { S.unlocked = true; S.lift = 2; } // the key lifts a step for the finale
    },
    // how intense the game is right now (energy 0..1) and how threatening (0..1)
    setIntensity(energy, threat = energy) {
      S.eWant = Math.max(0, Math.min(1, energy)); S.tWant = Math.max(0, Math.min(1, threat));
      const t = ctx.currentTime, E = S.energy;
      wet.gain.setTargetAtTime(0.55 - E * 0.22, t, 0.8); dry.gain.setTargetAtTime(0.72 + E * 0.12, t, 0.8); // punchier, less washy when it's busy
      water.frequency.setTargetAtTime(700 + S.dream * 1400 + E * 1100, t, 0.6);
    },
    accent(kind) { if (S.timer && S.accents.length < 3) S.accents.push(kind); },
    // 1 = sweet dream, 0 = nightmare: the water gets murky and the tuning wobbles
    setDream(d) {
      S.dream = d;
      const t = ctx.currentTime;
      water.frequency.setTargetAtTime(700 + d * 1400 + S.energy * 1100, t, 0.6);
      swayAmt.gain.setTargetAtTime(200 + d * 260, t, 0.6);
    },
    // for offline previews/tests: schedule everything up to time T, with progress following fn(t)
    renderUntil(T, theme = 'edge', progressAt = null, intensityAt = null) {
      this.start(theme); this.stop();
      S.next = 0.1;
      while (S.next < T) {
        if (progressAt) { const [p, u] = progressAt(S.next); this.setProgress(p, u); }
        if (intensityAt) { const [e, th, acc] = intensityAt(S.next); S.eWant = e; S.tWant = th; if (acc) S.accents.push(acc); }
        scheduleStep(S.next, S.step++); S.next += stepDur();
      }
    },
  };
}

function impulse(ctx, secs) { // a soft, dark hall: decaying noise, a touch longer on the right
  const len = Math.floor(ctx.sampleRate * secs), buf = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch); let lp = 0;
    for (let i = 0; i < len; i++) { lp = lp * 0.6 + (Math.random() * 2 - 1) * 0.4; d[i] = lp * Math.pow(1 - i / len, 2.6 + ch * 0.2); }
  }
  return buf;
}
