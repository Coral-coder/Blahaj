// Generative background music: mellow, underwater, a little goofy.
// Nothing loops: chords wander along a weighted chain, the kalimba makes up
// short phrases (then answers and varies them), bubbles blip, and the
// arrangement thins out and builds back up section by section. Everything
// plays through a soft low-pass that sways slowly, like hearing it under water,
// into a big generated reverb. The dream level murks the water and detunes it.

const SCALE = [0, 2, 4, 7, 9]; // major pentatonic: can't play a wrong note
// chords as semitones above the key; next-chord weights make a gentle, happy chain
const CHORDS = {
  I: [0, 4, 7, 11, 14], IV: [5, 9, 12, 16, 19], vi: [9, 12, 16, 19, 23], ii: [2, 5, 9, 12, 16],
  iii: [4, 7, 11, 14, 19], V: [7, 12, 14, 17, 21], bVII: [10, 14, 17, 21, 24],
};
const NEXT = {
  I: { IV: 4, vi: 3, ii: 2, iii: 1, bVII: 1 }, IV: { I: 3, V: 2, ii: 2, vi: 1, bVII: 1 }, vi: { IV: 3, ii: 3, V: 1, iii: 1 },
  ii: { V: 4, IV: 1, I: 1 }, iii: { vi: 3, IV: 2 }, V: { I: 5, vi: 2, IV: 1 }, bVII: { IV: 2, I: 3 },
};
// per chapter mood: tempo, key (semitones from C), and how much goofiness
const MOODS = [
  { bpm: 74, key: 0, goof: 1 }, { bpm: 70, key: -2, goof: 0.8 }, { bpm: 82, key: 3, goof: 1.2 },
  { bpm: 66, key: -5, goof: 0.6 }, { bpm: 78, key: 2, goof: 1 },
];
// 16-step rhythms for the kalimba (1 = play), from lazy to chatty
const RHYTHMS = [
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
];
const BASS = [[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]];

const pick = (w, r) => { let s = 0; for (const k in w) s += w[k]; let x = r() * s; for (const k in w) { x -= w[k]; if (x <= 0) return k; } return Object.keys(w)[0]; };

export function createMusic(ctx, out) {
  let seed = (Math.random() * 1e9) | 0;
  const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

  // --- the bus: instruments -> underwater low-pass (swaying) -> dry + reverb -> out
  const bus = ctx.createGain(); bus.gain.value = 1;
  const water = ctx.createBiquadFilter(); water.type = 'lowpass'; water.frequency.value = 1900; water.Q.value = 0.7;
  const sway = ctx.createOscillator(); sway.frequency.value = 0.11;
  const swayAmt = ctx.createGain(); swayAmt.gain.value = 420; sway.connect(swayAmt).connect(water.frequency); sway.start();
  const verb = ctx.createConvolver(); verb.buffer = impulse(ctx, 3.6);
  const wet = ctx.createGain(); wet.gain.value = 0.5;
  const dry = ctx.createGain(); dry.gain.value = 0.75;
  bus.connect(water); water.connect(dry).connect(out); water.connect(verb).connect(wet).connect(out);

  const S = { mood: MOODS[0], step: 0, next: 0, chord: 'I', motif: null, phrase: 0, section: 0, density: 1, dream: 1, timer: null, nodes: [] };
  const hz = (semi) => 261.63 * Math.pow(2, (semi + S.mood.key) / 12) * (1 + (1 - S.dream) * (rnd() - 0.5) * 0.05);
  const stepDur = () => 60 / S.mood.bpm / 4 * (S.dream < 0.4 ? 1.12 : 1);

  // --- instruments
  const env = (g, t, a, peak, d) => { g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0008, t + a + d); };
  function osc(type, f, t, end, dest) { const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(f, t); o.connect(dest); o.start(t); o.stop(end + 0.05); return o; }

  function pad(semis, t, dur) { // warm, slow, a little detuned
    for (const s of semis) {
      const g = ctx.createGain(), f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 900;
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.028, t + dur * 0.35); g.gain.linearRampToValueAtTime(0.02, t + dur * 0.8); g.gain.linearRampToValueAtTime(0, t + dur + 1.2);
      f.connect(g).connect(bus);
      for (const det of [-6, 5]) { const o = osc('triangle', hz(s), t, t + dur + 1.3, f); o.detune.value = det; }
    }
  }
  function kalimba(semi, t, vol = 0.09, scoop = false) { // plucky tine: fundamental + a glassy overtone, quick decay
    const f = hz(semi), g = ctx.createGain(); env(g, t, 0.004, vol, 0.9); g.connect(bus);
    const o = osc('sine', scoop ? f * 0.89 : f, t, t + 1.0, g); if (scoop) o.frequency.exponentialRampToValueAtTime(f, t + 0.09); // goofy little scoop up into the note
    const g2 = ctx.createGain(); env(g2, t, 0.002, vol * 0.25, 0.18); g2.connect(bus); osc('sine', f * 4.02, t, t + 0.25, g2);
  }
  function boop(semi, t) { // round, bouncy bass: a little pitch drop on each note
    const f = hz(semi - 24), g = ctx.createGain(), lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420;
    env(g, t, 0.01, 0.2, 0.45); lp.connect(g).connect(bus);
    const o = osc('sine', f * 1.5, t, t + 0.6, lp); o.frequency.exponentialRampToValueAtTime(f, t + 0.06);
    const o2 = osc('triangle', f, t, t + 0.6, lp); o2.detune.value = 3;
  }
  function bubbles(t) { // a few blips rising like bubbles
    const n = 1 + Math.floor(rnd() * 4);
    for (let i = 0; i < n; i++) {
      const tt = t + i * (0.06 + rnd() * 0.09), f = 500 + rnd() * 900, g = ctx.createGain();
      env(g, tt, 0.003, 0.035 + rnd() * 0.03, 0.09); g.connect(bus);
      const o = osc('sine', f, tt, tt + 0.12, g); o.frequency.exponentialRampToValueAtTime(f * (1.6 + rnd() * 0.8), tt + 0.09);
    }
  }
  function slideWhistle(t, up = true) { // the occasional silly slide
    const g = ctx.createGain(), f0 = hz(up ? 12 : 31), f1 = hz(up ? 31 : 12);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.045, t + 0.05); g.gain.linearRampToValueAtTime(0, t + 0.55); g.connect(bus);
    const o = osc('sine', f0, t, t + 0.6, g); o.frequency.exponentialRampToValueAtTime(f1, t + 0.5);
    const vib = ctx.createOscillator(), va = ctx.createGain(); vib.frequency.value = 7; va.gain.value = 9; vib.connect(va).connect(o.frequency); vib.start(t); vib.stop(t + 0.6);
  }
  function boing(t) { // a soft cartoon boing in the bass
    const g = ctx.createGain(); env(g, t, 0.005, 0.12, 0.5); g.connect(bus);
    const o = osc('sine', hz(-12), t, t + 0.6, g); o.frequency.setValueAtTime(hz(-12), t); o.frequency.exponentialRampToValueAtTime(hz(-5), t + 0.08); o.frequency.exponentialRampToValueAtTime(hz(-14), t + 0.5);
    const w = ctx.createOscillator(), wa = ctx.createGain(); w.frequency.value = 14; wa.gain.value = 18; w.connect(wa).connect(o.frequency); w.start(t); w.stop(t + 0.6);
  }

  // --- composition
  function newMotif() { // a 2-bar phrase: rhythm + a wandering line in the pentatonic
    const rA = RHYTHMS[Math.floor(rnd() * RHYTHMS.length)], rB = RHYTHMS[Math.floor(rnd() * RHYTHMS.length)];
    let deg = 5 + Math.floor(rnd() * 4); const notes = [];
    for (let i = 0; i < 32; i++) {
      if (!(i < 16 ? rA[i] : rB[i - 16])) { notes.push(null); continue; }
      deg = Math.max(2, Math.min(11, deg + [-2, -1, -1, 0, 1, 1, 2][Math.floor(rnd() * 7)]));
      notes.push(deg);
    }
    return notes;
  }
  const degSemi = (d) => SCALE[((d % 5) + 5) % 5] + 12 * Math.floor(d / 5);
  function vary(m) { return m.map((d) => (d === null ? (rnd() < 0.08 ? 7 : null) : rnd() < 0.3 ? Math.max(2, d + (rnd() < 0.5 ? 1 : -1)) : d)); }

  function scheduleStep(t, step) {
    const inBar = step % 16, bar = Math.floor(step / 16), sd = stepDur();
    // every 2 bars: next chord, and maybe a new section
    if (step % 32 === 0) {
      if (bar > 0) S.chord = pick(NEXT[S.chord], rnd);
      if (bar % 16 === 0) { // sections: sparse ↔ full, so the texture keeps changing
        S.section++;
        S.density = bar === 0 ? 0.35 : [0.45, 1, 0.75, 1, 0.3][Math.floor(rnd() * 5)];
        if (bar > 0 && rnd() < 0.5 * S.mood.goof) boing(t);
      }
      pad(CHORDS[S.chord].slice(0, 4).map((s) => s - 12), t, sd * 32);
      // phrases: A, A', B, A'' ... each 2 bars, sometimes a rest
      const ph = S.phrase++ % 4;
      if (!S.motif || ph === 2 && rnd() < 0.7 || rnd() < 0.15) S.motif = newMotif();
      S.cur = ph === 0 || rnd() < 0.25 ? S.motif : vary(S.motif);
      S.restPhrase = rnd() < (1 - S.density) * 0.8;
    }
    const chord = CHORDS[S.chord];
    // kalimba line
    const n = S.cur && S.cur[step % 32];
    if (n !== null && n !== undefined && !S.restPhrase) {
      let semi = degSemi(n);
      if (inBar % 8 === 0) { const c = chord.map((x) => x % 12); const pc = ((semi % 12) + 12) % 12; if (!c.includes(pc)) semi += [1, -1, 2, -2].find((d) => c.includes((((semi + d) % 12) + 12) % 12)) || 0; } // land on chord tones on the strong beats
      kalimba(semi, t, 0.07 + rnd() * 0.04, rnd() < 0.12 * S.mood.goof);
      if (rnd() < 0.18) kalimba(semi + 12, t + sd * 0.5, 0.03); // a sparkle of an octave echo
    }
    // bass
    if (S.density > 0.4) { const bp = BASS[Math.floor(bar / 2) % BASS.length]; if (bp[inBar]) boop(inBar === 0 ? chord[0] : rnd() < 0.5 ? chord[0] : chord[2] - 12, t); }
    // bubbles drift up now and then; the odd slide whistle at a phrase end
    if (rnd() < 0.035) bubbles(t);
    if (inBar === 12 && step % 32 >= 16 && rnd() < 0.07 * S.mood.goof) slideWhistle(t, rnd() < 0.6);
  }

  return {
    start(mood = 0) {
      this.stop();
      S.mood = MOODS[((mood % MOODS.length) + MOODS.length) % MOODS.length];
      S.step = 0; S.chord = 'I'; S.motif = null; S.phrase = 0; S.next = ctx.currentTime + 0.15;
      const tick = () => { while (S.next < ctx.currentTime + 0.5) { scheduleStep(S.next, S.step++); S.next += stepDur(); } };
      tick(); S.timer = setInterval(tick, 120);
    },
    stop() { if (S.timer) clearInterval(S.timer); S.timer = null; },
    // 1 = sweet dream, 0 = nightmare: the water gets murky and the tuning wobbles
    setDream(d) {
      S.dream = d;
      const t = ctx.currentTime;
      water.frequency.setTargetAtTime(650 + d * 1300, t, 0.6);
      swayAmt.gain.setTargetAtTime(200 + d * 260, t, 0.6);
    },
    // for offline rendering (previews/tests): schedule everything up to time T
    renderUntil(T, mood = 0) {
      S.mood = MOODS[mood % MOODS.length]; S.step = 0; S.next = 0.1;
      while (S.next < T) { scheduleStep(S.next, S.step++); S.next += stepDur(); }
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
