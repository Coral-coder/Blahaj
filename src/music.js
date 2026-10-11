// Blåhaj music engine (v3): generative, but written the way a songwriter would.
//
// FORM. Every theme plays a 32-bar AABA song, then round again:
//   A  - an 8-bar period. Antecedent (bars 1-4) asks a question and ends on a
//        half cadence (on V); the consequent (bars 5-8) starts the same way and
//        answers with a perfect authentic cadence (ii/IV - V7 - I, melody home on
//        the tonic).
//   A' - the same tune again, a little more ornamented.
//   B  - the bridge: new harmony (subdominant and relative-minor colours), a
//        smoother tune, ending on V7 so the return feels inevitable.
//   A  - home again; the last time round it can close with a plagal "amen" (IV - I).
//
// HARMONY. Chords are scale-degree triads (and V7) chosen from functional
// templates: tonic -> pre-dominant -> dominant -> tonic. Minor keys borrow the
// raised leading tone for V and vii°. The pad moves to whichever voicing of the
// next chord is closest (smooth voice leading); the bass takes the roots.
//
// RHYTHM. Everything sits on a grid in the theme's meter (4/4, 3/4 or 6/8). The
// melody is built from a one-bar rhythmic motif that repeats (bars 1, 3, 5, 7)
// with an answering bar between, and long notes at cadences. Bass, arpeggio
// (Alberti / broken chords) and drums are fixed patterns that repeat every bar;
// fills happen only in the last bar of a phrase, crashes only on its downbeat.
//
// MELODY. Strong beats take chord tones, weak beats step between them (passing
// and neighbour notes from the scale). Each phrase arches up and comes back down
// to its cadence note: scale degree 2 or 5 over the half cadence, 1 over the
// authentic cadence (approached by step from 2 or 7).
//
// The game steers it: setProgress (layers build as you play), setIntensity
// (energy -> rhythmic density and drums; threat -> the parallel minor, switched
// at phrase boundaries), accent (a quantized musical hit), setDream (the water).

// --- theory ---------------------------------------------------------------------
const SCALES = { major: [0, 2, 4, 5, 7, 9, 11], minor: [0, 2, 3, 5, 7, 8, 10] };
const NOTE = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];
// roman numeral -> [scale-degree root (0-6), seventh?]; quality comes from the scale
const ROMAN = { I: [0], ii: [1], iii: [2], IV: [3], V: [4], V7: [4, 1], vi: [5], 'vii°': [6] };
const MINOR_NAME = { I: 'i', ii: 'ii°', iii: 'III', IV: 'iv', V: 'V', V7: 'V7', vi: 'VI', 'vii°': 'vii°' };

// phrase templates, one entry per bar; two chords in a bar split it in half
const ANTECEDENT = [ // ends on a half cadence (V)
  [['I'], ['IV'], ['ii'], ['V']], [['I'], ['vi'], ['IV'], ['V']],
  [['I'], ['V'], ['vi'], ['V']], [['I'], ['ii'], ['I'], ['V']],
];
const CONSEQUENT = [ // ends on a perfect authentic cadence (V7 - I)
  [['I'], ['vi'], ['ii', 'V7'], ['I']], [['I'], ['IV'], ['ii', 'V7'], ['I']],
  [['I'], ['iii'], ['IV', 'V7'], ['I']], [['vi'], ['IV'], ['ii', 'V7'], ['I']],
];
const BRIDGE = [ // eight bars away from home, ending on the dominant
  [['IV'], ['I'], ['IV'], ['I'], ['vi'], ['ii'], ['IV'], ['V7']],
  [['vi'], ['iii'], ['IV'], ['I'], ['ii'], ['vi'], ['IV'], ['V']],
  [['IV'], ['V'], ['iii'], ['vi'], ['ii'], ['V'], ['I'], ['V7']],
];
const AMEN = [['I'], ['IV'], ['IV'], ['I']]; // a plagal tag to finish

// meters: beats per bar, grid steps per beat (16ths; 6/8 counts dotted-quarter beats)
const METERS = {
  '4/4': { beats: 4, spb: 4, strong: [0, 8], medium: [4, 12] },
  '3/4': { beats: 3, spb: 4, strong: [0], medium: [4, 8] },
  '6/8': { beats: 2, spb: 6, strong: [0], medium: [6] },
};
// one-bar melodic rhythm cells (1 = a note starts here); 'cad' is the cadence bar
const CELLS = {
  '4/4': {
    a: [[1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0], [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0]],
    b: [[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0], [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0]],
    cad: [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]],
    smooth: [[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0]],
  },
  '3/4': {
    a: [[1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0]],
    b: [[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0]],
    cad: [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    smooth: [[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0]],
  },
  '6/8': {
    a: [[1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0], [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0]],
    b: [[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0]],
    cad: [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0]],
    smooth: [[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]],
  },
};

// --- chapter themes ---------------------------------------------------------------
// key: tonic (semitones from C), mode, meter, tempo, who sings the tune, the
// accompaniment colour, a little of the room in time with it, and how goofy
const THEMES = {
  edge:      { key: 0, mode: 'major', meter: '4/4', bpm: 76, lead: 'kalimba', color: 'musicbox', amb: 'bubbles', goof: 0.8 },
  downstairs:{ key: -3, mode: 'major', meter: '4/4', bpm: 84, lead: 'marimba', color: 'rhodes', amb: 'fire', goof: 1 },
  kitchen:   { key: 2, mode: 'major', meter: '4/4', bpm: 96, lead: 'marimba', color: 'pizz', amb: 'drips', goof: 1.3 },
  laundry:   { key: -2, mode: 'major', meter: '6/8', bpm: 62, lead: 'kalimba', color: 'glock', amb: 'churn', goof: 1.2 },
  backyard:  { key: 5, mode: 'major', meter: '6/8', bpm: 54, lead: 'flute', color: 'harp', amb: 'crickets', goof: 0.6 },
  garage:    { key: -5, mode: 'minor', meter: '4/4', bpm: 88, lead: 'rhodes', color: 'pizz', amb: 'buzz', goof: 0.8 },
  basement:  { key: -7, mode: 'minor', meter: '6/8', bpm: 52, lead: 'celesta', color: 'harp', amb: 'chuff', goof: 0.4 },
  stairs:    { key: 0, mode: 'major', meter: '4/4', bpm: 104, lead: 'marimba', color: 'harp', amb: 'clock', goof: 0.5 },
  hallway:   { key: 3, mode: 'major', meter: '3/4', bpm: 96, lead: 'flute', color: 'musicbox', amb: 'clock', goof: 0.7 },
  bathroom:  { key: 1, mode: 'major', meter: '4/4', bpm: 88, lead: 'kalimba', color: 'glock', amb: 'drips', goof: 1.4 },
  parents:   { key: -1, mode: 'major', meter: '3/4', bpm: 84, lead: 'musicbox', color: 'rhodes', amb: 'snore', goof: 1 },
  playroom:  { key: 4, mode: 'major', meter: '4/4', bpm: 100, lead: 'glock', color: 'pizz', amb: 'toys', goof: 1.5 },
  attic:     { key: -4, mode: 'minor', meter: '4/4', bpm: 78, lead: 'celesta', color: 'strings', amb: 'wind', goof: 0.3 },
  bed:       { key: 0, mode: 'major', meter: '3/4', bpm: 72, lead: 'musicbox', color: 'harp', amb: 'bubbles', goof: 0.5 },
};
export const THEME_LIST = Object.keys(THEMES);
export { THEMES };

const mkRng = (seed) => () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
const hashStr = (s) => Array.from(s).reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7);
const pickOf = (arr, r) => arr[Math.floor(r() * arr.length)];

export function createMusic(ctx, out) {
  const rnd = mkRng((Math.random() * 1e9) | 0);

  // --- the bus: instruments -> underwater low-pass (swaying) -> dry + reverb -> out
  const bus = ctx.createGain(); bus.gain.value = 1;
  const water = ctx.createBiquadFilter(); water.type = 'lowpass'; water.frequency.value = 2400; water.Q.value = 0.6;
  const sway = ctx.createOscillator(); sway.frequency.value = 0.11;
  const swayAmt = ctx.createGain(); swayAmt.gain.value = 380; sway.connect(swayAmt).connect(water.frequency); sway.start();
  const verb = ctx.createConvolver(); verb.buffer = impulse(ctx, 3.6);
  const wet = ctx.createGain(); wet.gain.value = 0.42;
  const dry = ctx.createGain(); dry.gain.value = 0.8;
  bus.connect(water); water.connect(dry).connect(out); water.connect(verb).connect(wet).connect(out);
  const drums = ctx.createGain(); drums.gain.value = 0.85; const drumVerb = ctx.createGain(); drumVerb.gain.value = 0.1;
  drums.connect(out); drums.connect(drumVerb).connect(verb);
  const echoIn = ctx.createGain(); echoIn.gain.value = 0.25; // a tempo-synced echo for the tune (set per theme)
  const echo = ctx.createDelay(2); const fb = ctx.createGain(); fb.gain.value = 0.3; const echoLp = ctx.createBiquadFilter(); echoLp.type = 'lowpass'; echoLp.frequency.value = 1700;
  echoIn.connect(echo); echo.connect(echoLp).connect(fb).connect(echo); echoLp.connect(bus);

  const S = {
    th: THEMES.edge, id: 'edge', meter: METERS['4/4'], cells: CELLS['4/4'],
    next: 0, step: 0, timer: null, dream: 1, tempoMul: 1, pendingTempo: 1,
    stage: 0, pendingStage: 0, manualStage: null, progress: 0, unlocked: false, lift: 0, pendingLift: 0,
    energy: 0, eWant: 0, threat: 0, tWant: 0, minor: false, accents: [],
    song: null, loop: 0, voicing: null, info: {},
  };
  const stepDur = () => 60 / (S.th.bpm * S.tempoMul) / S.meter.spb;
  const barSteps = () => S.meter.beats * S.meter.spb;
  const mode = () => (S.minor ? 'minor' : S.th.mode);
  const keyOff = () => S.th.key + S.lift;
  const hz = (semi) => 261.63 * Math.pow(2, (semi + keyOff()) / 12) * (1 + (1 - S.dream) * (rnd() - 0.5) * 0.04);

  // --- theory helpers -----------------------------------------------------------------
  // a scale degree (any integer; 7 = the octave) -> semitones above the tonic
  function degSemi(d, leading = false) {
    const sc = SCALES[mode()], n = Math.floor(d / 7), i = ((d % 7) + 7) % 7;
    let s = sc[i] + 12 * n;
    if (leading && mode() === 'minor' && i === 6) s += 1; // the raised leading tone
    return s;
  }
  // the chord's tones as scale degrees (root, third, fifth[, seventh])
  function chordDegs(roman) { const [r, sev] = ROMAN[roman]; const d = [r, r + 2, r + 4]; if (sev) d.push(r + 6); return d; }
  const isDominant = (roman) => roman === 'V' || roman === 'V7' || roman === 'vii°';
  const chordSemis = (roman) => chordDegs(roman).map((d) => degSemi(d, isDominant(roman)));
  function chordName(roman) {
    const semis = chordSemis(roman), root = ((semis[0] % 12) + 12) % 12, third = semis[1] - semis[0], fifth = semis[2] - semis[0];
    const q = fifth === 6 ? '°' : third === 3 ? 'm' : '';
    return NOTE[(root + keyOff() + 1200) % 12] + q + (ROMAN[roman][1] ? '7' : '');
  }
  const romanLabel = (roman) => (mode() === 'minor' ? MINOR_NAME[roman] : roman);
  // smooth voice leading: three upper voices (C4..A5), as close as possible to the last chord
  function voiceChord(roman) {
    const pcs = chordSemis(roman).slice(0, 3).map((s) => ((s % 12) + 12) % 12);
    const opts = [];
    for (const pcA of pcs) for (const pcB of pcs) for (const pcC of pcs) {
      if (new Set([pcA, pcB, pcC]).size < 3) continue;
      for (const oa of [0, 12]) for (const ob of [0, 12]) for (const oc of [0, 12, 24]) {
        const v = [pcA + oa, pcB + ob, pcC + oc].sort((a, b) => a - b);
        if (v[0] < 0 || v[2] > 21 || v[2] - v[0] > 14) continue;
        opts.push(v);
      }
    }
    const prev = S.voicing || [4, 7, 12];
    let best = opts[0], bd = 1e9;
    for (const v of opts) { const d = Math.abs(v[0] - prev[0]) + Math.abs(v[1] - prev[1]) + Math.abs(v[2] - prev[2]) + (v[1] - 10) * (v[1] - 10) * 0.02; if (d < bd) { bd = d; best = v; } }
    S.voicing = best;
    return best;
  }

  // --- composing the song -----------------------------------------------------------------
  // a melody for one phrase (4 bars) over its chords: rhythm from cells, pitches by
  // chord tones on strong beats, steps between them, arching to the cadence note
  function composePhrase(chords, rhythm, cadenceNote, r, start, peak) {
    const bs = barSteps(), M = S.meter, notes = [];
    let last = start;
    for (let b = 0; b < 4; b++) {
      const cell = rhythm[b], bar = chords[b];
      const onsets = []; for (let i = 0; i < bs; i++) if (cell[i]) onsets.push(i);
      onsets.forEach((st, k) => {
        const chordAt = bar.length > 1 && st >= bs / 2 ? bar[1] : bar[0];
        const prog = (b * bs + st) / (4 * bs); // where we are in the phrase, 0..1
        const target = prog < 0.55 ? start + (peak - start) * (prog / 0.55) : peak + (cadenceNote - peak) * ((prog - 0.55) / 0.45);
        const strong = M.strong.includes(st) || M.medium.includes(st);
        let d;
        if (b === 3 && k === 0) d = cadenceNote; // land the cadence
        else if (strong) { // nearest chord tone to where the arch wants us, not too far from the last note
          const cands = []; for (const c of chordDegs(chordAt)) for (const o of [-7, 0, 7, 14]) cands.push(c + o);
          d = cands.reduce((a, c) => (Math.abs(c - target) + Math.abs(c - last) * 0.5 < Math.abs(a - target) + Math.abs(a - last) * 0.5 ? c : a), cands[0]);
        } else d = last + (target > last + 0.5 ? 1 : target < last - 0.5 ? -1 : r() < 0.5 ? 1 : -1); // passing / neighbour step
        if (b === 3 && k === 1) d = cadenceNote; // a cadence bar's second note stays home
        // how long it rings: until the next onset (or the end of the bar)
        const nextSt = onsets[k + 1] ?? bs;
        notes.push({ step: b * bs + st, len: nextSt - st, deg: d, chord: chordAt, strong });
        last = d;
      });
    }
    return notes;
  }
  // approach the cadence by step: 2 or 7 before 1
  function compose(id) {
    const r = mkRng(hashStr(id) * 7 + S.loop * 101);
    const rTheme = mkRng(hashStr(id)); // the A tune is the theme's own: the same every time
    const C = S.cells;
    const ant = pickOf(ANTECEDENT, rTheme), cons = pickOf(CONSEQUENT, rTheme);
    const cellA = pickOf(C.a, rTheme), cellB = pickOf(C.b, rTheme), cad = pickOf(C.cad, rTheme), cad2 = pickOf(C.cad, rTheme);
    const start = 7 + Math.floor(rTheme() * 3) * 2; // start on 1, 3 or 5 (an octave up)
    const peak = start + 3 + Math.floor(rTheme() * 3);
    const hcNote = rTheme() < 0.5 ? 8 : 4 + 7; // half cadence: scale degree 2 or 5
    const antMel = composePhrase(ant, [cellA, cellB, cellA, cad], hcNote, rTheme, start, peak);
    // the consequent starts like the antecedent (a parallel period), then heads home to 1
    const consMel = composePhrase(cons, [cellA, cellB, pickOf(C.a, rTheme), cad2], 7, rTheme, start, peak - 1);
    for (let i = 0; i < antMel.length && antMel[i].step < barSteps() * 2; i++) if (consMel[i] && consMel[i].step === antMel[i].step) consMel[i].deg = antMel[i].deg;
    // the bridge: new chords, smoother rhythm, a different register
    const br = pickOf(BRIDGE, r), sm = C.smooth;
    const bA = composePhrase(br.slice(0, 4), [pickOf(sm, r), pickOf(sm, r), pickOf(sm, r), pickOf(sm, r)], 9 + (r() < 0.5 ? 0 : 2), r, start + 2, peak + 1);
    const bB = composePhrase(br.slice(4), [pickOf(sm, r), pickOf(C.b, r), pickOf(sm, r), cad], 8, r, start + 2, peak);
    const section = (name, chords, mel, cadence) => ({ name, chords, mel, cadence });
    const ornament = (mel) => mel.map((n) => n); // A' is the same tune; ornaments are added live (see play())
    return [
      section('A', ant, antMel, 'HC'), section('A', cons, consMel, 'PAC'),
      section("A'", ant, ornament(antMel), 'HC'), section("A'", cons, ornament(consMel), 'PAC'),
      section('B', br.slice(0, 4), bA, '—'), section('B', br.slice(4), bB, 'HC'),
      section('A', ant, antMel, 'HC'), section('A', cons, consMel, S.loop % 2 ? 'PAC' : 'PAC'),
    ];
  }

  // --- instruments ------------------------------------------------------------------------
  const env = (g, t, a, peak, d) => { g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0008, t + a + d); };
  function osc(type, f, t, end, dest) { const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(Math.min(f, 18000), t); o.connect(dest); o.start(t); o.stop(end + 0.05); return o; }
  function voice(dest, pan = 0) {
    const g = ctx.createGain();
    if (pan && ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = pan; g.connect(p).connect(dest); } else g.connect(dest);
    return g;
  }
  function pad(semis, t, dur, bright = 0) {
    for (const s of semis) {
      const g = voice(bus, ((s % 12) / 12 - 0.5) * 0.6), f = ctx.createBiquadFilter(); f.type = 'lowpass';
      f.frequency.setValueAtTime(700 + bright * 400, t); f.frequency.linearRampToValueAtTime(1100 + bright * 700, t + dur * 0.5); f.frequency.linearRampToValueAtTime(800, t + dur + 0.6);
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.02, t + Math.min(0.4, dur * 0.3)); g.gain.setValueAtTime(0.02, t + dur * 0.85); g.gain.linearRampToValueAtTime(0, t + dur + 0.5);
      f.connect(g);
      for (const det of [-6, 6]) { const o = osc('triangle', hz(s), t, t + dur + 0.6, f); o.detune.value = det; }
    }
  }
  function strings(semis, t, dur) {
    for (const s of semis) {
      const g = voice(bus, ((s % 12) / 12 - 0.5) * 0.8), f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1400; f.Q.value = 0.4;
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.011, t + dur * 0.4); g.gain.setValueAtTime(0.011, t + dur * 0.85); g.gain.linearRampToValueAtTime(0, t + dur + 0.4);
      f.connect(g);
      for (const det of [-9, 0, 8]) { const o = osc('sawtooth', hz(s), t, t + dur + 0.5, f); o.detune.value = det; }
    }
  }
  const PLUCKS = {
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
    const [parts, peak] = PLUCKS[kind] || PLUCKS.kalimba, f = hz(semi);
    for (const [ratio, lvl, dec] of parts) {
      const g = voice(bus, opt.pan || 0); env(g, t, 0.004, peak * lvl * vol, dec * (opt.long || 1));
      if (opt.echo) g.connect(echoIn);
      const o = osc(kind === 'rhodes' && ratio === 1 ? 'triangle' : 'sine', f * ratio, t, t + dec * (opt.long || 1) + 0.2, g);
      if (kind === 'rhodes' && ratio === 1) { const tr = ctx.createOscillator(), ta = ctx.createGain(); tr.frequency.value = 4.5; ta.gain.value = peak * vol * 0.3; tr.connect(ta).connect(g.gain); tr.start(t); tr.stop(t + dec + 0.2); }
    }
  }
  function flute(semi, t, dur, vol = 1) { // a breathy sine with vibrato that grows into the note
    const f = hz(semi + 12), g = voice(bus, 0.15); g.connect(echoIn);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.05 * vol, t + 0.06); g.gain.setValueAtTime(0.05 * vol, t + Math.max(0.07, dur - 0.06)); g.gain.linearRampToValueAtTime(0, t + dur + 0.08);
    const o = osc('sine', f, t, t + dur + 0.1, g), o2 = osc('triangle', f, t, t + dur + 0.1, g); o2.detune.value = 4;
    if (dur > 0.3) { const vib = ctx.createOscillator(), va = ctx.createGain(); vib.frequency.value = 5; va.gain.setValueAtTime(0, t); va.gain.linearRampToValueAtTime(f * 0.01, t + Math.min(0.5, dur)); vib.connect(va); va.connect(o.frequency); va.connect(o2.frequency); vib.start(t); vib.stop(t + dur + 0.1); }
  }
  function lead(semi, t, dur, vol, echo = true) {
    if (S.th.lead === 'flute') flute(semi, t, dur * 0.95, vol);
    else pluck(S.th.lead, semi, t, vol, { echo, pan: 0.05, long: Math.min(1.6, 0.7 + dur * 0.8) });
  }
  function bass(semi, t, dur, vol = 1) {
    const f = hz(semi - 24), g = voice(bus), lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 480 + S.energy * 400;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.17 * vol, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0008, t + Math.max(0.12, dur));
    lp.connect(g); const o = osc('sine', f, t, t + dur + 0.1, lp); const o2 = osc('triangle', f, t, t + dur + 0.1, lp); o2.detune.value = 3; void o;
  }
  function noiseHit(t, dur, freq, vol, type = 'highpass', pan = 0, dest = bus) {
    const len = Math.max(1, Math.floor(ctx.sampleRate * dur)), buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2);
    const src = ctx.createBufferSource(); src.buffer = buf; const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq;
    const g = voice(dest, pan); g.gain.value = vol; src.connect(f).connect(g); src.start(t);
  }
  const kick = (t, v = 1) => { const g = voice(drums); env(g, t, 0.002, 0.4 * v, 0.26); const o = osc('sine', 160, t, t + 0.32, g); o.frequency.exponentialRampToValueAtTime(45, t + 0.11); };
  const snare = (t, v = 1) => { noiseHit(t, 0.15, 1800, 0.14 * v, 'bandpass', 0.05, drums); const g = voice(drums); env(g, t, 0.002, 0.08 * v, 0.08); osc('triangle', 196, t, t + 0.1, g); };
  const rim = (t, v = 1) => { const g = voice(drums, -0.2); env(g, t, 0.001, 0.07 * v, 0.04); osc('square', 1700, t, t + 0.05, g); };
  const hat = (t, v = 1, open = false) => noiseHit(t, open ? 0.2 : 0.03, 7500, (open ? 0.05 : 0.065) * v, 'highpass', 0.3, drums);
  const shaker = (t, v = 1) => noiseHit(t, 0.05, 6000, 0.04 * v, 'highpass', 0.35, drums);
  const tom = (t, semi, v = 1) => { const g = voice(drums, semi / 24); env(g, t, 0.003, 0.2 * v, 0.22); const o = osc('sine', hz(semi - 12), t, t + 0.28, g); o.frequency.exponentialRampToValueAtTime(hz(semi - 17), t + 0.2); };
  const crash = (t, v = 1) => noiseHit(t, 1.5, 5200, 0.06 * v, 'highpass', -0.2, drums);

  // a little of the room, locked to the beat
  function ambience(t, st, chordSemis) {
    const a = S.th.amb, bs = barSteps(), beat = S.meter.spb;
    if (a === 'bubbles' && st % beat === 0 && rnd() < 0.08) { for (let i = 0; i < 3; i++) { const tt = t + i * stepDur(), f = hz(chordSemis[i % 3] + 24), g = voice(bus, (rnd() - 0.5)); env(g, tt, 0.003, 0.025, 0.08); const o = osc('sine', f, tt, tt + 0.1, g); o.frequency.exponentialRampToValueAtTime(f * 1.5, tt + 0.08); } }
    else if (a === 'drips' && st % (beat / 2) === 0 && st % beat !== 0 && rnd() < 0.12) { const f = hz(chordSemis[Math.floor(rnd() * 3)] + 24), g = voice(bus, rnd() - 0.5); env(g, t, 0.002, 0.04, 0.12); const o = osc('sine', f * 1.5, t, t + 0.15, g); o.frequency.exponentialRampToValueAtTime(f, t + 0.04); }
    else if (a === 'crickets' && st === bs / 2) { const f = hz(chordSemis[2] + 36); for (let i = 0; i < 3; i++) { const g = voice(bus, 0.4), tt = t + i * stepDur() * 0.5; env(g, tt, 0.004, 0.01, 0.03); osc('sine', f, tt, tt + 0.05, g); } }
    else if (a === 'fire' && st % 2 === 1 && rnd() < 0.25) noiseHit(t, 0.02, 2200, 0.04, 'bandpass', rnd() - 0.5);
    else if (a === 'clock' && st % beat === 0) { const g = voice(bus, -0.4); env(g, t, 0.001, 0.035, 0.03); osc('sine', st === 0 ? 2300 : 1800, t, t + 0.05, g); }
    else if (a === 'churn' && st % beat === 0) noiseHit(t, 0.16, 500, 0.04, 'lowpass', 0.2);
    else if (a === 'chuff' && st % (beat / 2) === 0) noiseHit(t, 0.06, 900, st % beat === 0 ? 0.035 : 0.02, 'bandpass', 0.2);
    else if (a === 'wind' && st === 0 && S.info.bar === 1) noiseHit(t, 3.5, 500, 0.018, 'bandpass', 0);
    else if (a === 'toys' && st === bs - beat && rnd() < 0.5) rim(t, 0.4);
  }

  // --- playing one grid step -------------------------------------------------------------
  function scheduleStep(t) {
    const bs = barSteps(), M = S.meter, beat = M.spb, sd = stepDur();
    const st = S.step % bs, barN = Math.floor(S.step / bs), phraseIdx = Math.floor(barN / 4) % 8, barInPhrase = barN % 4;
    // follow the game: energy rises quickly and settles slowly
    S.energy += (S.eWant - S.energy) * (S.eWant > S.energy ? 0.15 : 0.012);
    S.threat += (S.tWant - S.threat) * (S.tWant > S.threat ? 0.15 : 0.015);
    // phrase boundaries: where the song may change key, mode, tempo or density
    if (st === 0 && barInPhrase === 0) {
      if (phraseIdx === 0) { // the top of the song: compose it (the A tune is always the theme's own)
        if (S.pendingLift !== S.lift) { S.lift = S.pendingLift; S.voicing = null; }
        S.song = compose(S.id); S.loop++;
      }
      const wantMinor = S.th.mode === 'minor' || S.threat > 0.5;
      if (wantMinor !== S.minor) { S.minor = wantMinor; S.voicing = null; }
      if (S.pendingStage !== S.stage) S.stage = S.pendingStage;
      S.tempoMul = S.pendingTempo;
    }
    const E = S.energy, layer = Math.max(S.stage, E > 0.75 ? 5 : E > 0.5 ? 4 : E > 0.3 ? 3 : E > 0.15 ? 2 : 1);
    const ph = S.song[phraseIdx], bar = ph.chords[barInPhrase];
    const chord = bar.length > 1 && st >= bs / 2 ? bar[1] : bar[0];
    const chordStart = st === 0 || (bar.length > 1 && st === bs / 2);
    const semis = chordSemis(chord), root = semis[0];
    const isCadenceBar = barInPhrase === 3, lastPhrase = phraseIdx === 7;
    S.info = { section: ph.name, phrase: phraseIdx, bar: barInPhrase + 1 + (phraseIdx % 2) * 4, beat: Math.floor(st / beat) + 1, roman: romanLabel(chord), chord: chordName(chord), cadence: isCadenceBar ? ph.cadence : '', key: NOTE[(keyOff() + 1200) % 12] + (mode() === 'minor' ? ' minor' : ' major'), meter: S.th.meter, layer, energy: E };

    // harmony: a pad on each chord change, voiced smoothly
    if (chordStart) {
      const len = bar.length > 1 ? bs / 2 : bs, v = voiceChord(chord);
      pad(v, t, sd * len, layer / 6 + E * 0.5);
      if (layer >= 5 || (S.th.color === 'strings' && layer >= 3)) strings(v.map((s) => s + 12), t, sd * len);
    }
    // melody (layer 1+): the composed tune, exactly on the grid
    if (layer >= 1) {
      for (const n of ph.mel) {
        if (n.step !== barInPhrase * bs + st) continue;
        const leading = isDominant(n.chord), semi = degSemi(n.deg, leading);
        const accent = st === 0 ? 1.15 : M.strong.includes(st) ? 1.05 : 0.85;
        lead(semi, t, n.len * sd, (0.8 + E * 0.25) * accent);
        if (layer >= 5 && n.strong) pluck(S.th.color === 'strings' ? 'harp' : S.th.color, semi + 12, t, 0.3, { pan: -0.3 }); // doubled up an octave
        // A': a grace-note turn into the strong notes (ornament)
        if (ph.name === "A'" && n.strong && n.len >= beat && rnd() < 0.5) pluck(S.th.lead === 'flute' ? 'harp' : S.th.lead, degSemi(n.deg + 1, leading), t - sd * 0.5, 0.35, { long: 0.3 });
      }
      // counter-line (layer 3+): a third below the tune on its long strong notes
      if (layer >= 3) for (const n of ph.mel) if (n.step === barInPhrase * bs + st && n.strong && n.len >= beat) pluck(S.th.color === 'strings' ? 'celesta' : S.th.color, degSemi(n.deg - 2, isDominant(n.chord)), t, 0.32, { pan: -0.35 });
    }
    // bass (layer 2+): roots, fixed per meter; driving eighths when the energy's up
    if (layer >= 2) {
      const nextChord = (() => { const nb = ph.chords[barInPhrase + 1]; return nb ? nb[0] : (S.song[(phraseIdx + 1) % 8].chords[0][0]); })();
      if (S.th.meter === '4/4') {
        if (E > 0.55) { if (st % 2 === 0) bass(st % 8 === 4 ? root + 12 : root, t, sd * 1.6, st % beat === 0 ? 1 : 0.7); }
        else if (st === 0 || st === 8) bass(st === 0 ? root : semis[2] - 12, t, sd * 7, 1);
        else if (st === 12 && E > 0.3 && !isCadenceBar) bass(degSemi(chordDegs(nextChord)[0]) + (degSemi(chordDegs(nextChord)[0]) > root ? -1 : 1), t, sd * 3, 0.7); // walking approach note
      } else if (S.th.meter === '3/4') { if (st === 0) bass(root, t, sd * 4, 1); }
      else if (st === 0 || st === 6) bass(st === 0 ? root : semis[2] - 12, t, sd * 5, st === 0 ? 1 : 0.75); // 6/8: the two big beats
    }
    // accompaniment (layer 3+): Alberti in 4/4, oom-pah-pah in 3/4, a rocking broken chord in 6/8
    if (layer >= 3) {
      const v = S.voicing || [4, 7, 12], col = S.th.color === 'strings' ? 'harp' : S.th.color;
      if (S.th.meter === '4/4') {
        const sub = E > 0.6 ? 1 : 2; // eighths, or sixteenths when it's busy
        if (st % sub === 0) { const k = (st / sub) % 4; pluck(col, [v[0], v[2], v[1], v[2]][k] - 12, t, k === 0 ? 0.32 : 0.24, { pan: -0.2 + k * 0.1, long: 0.6 }); }
      } else if (S.th.meter === '3/4') {
        if (st === 4 || st === 8) for (const s of v) pluck(col, s - 12, t, 0.16, { pan: 0.2, long: 0.5 }); // pah-pah
        if (E > 0.6 && st % 2 === 0 && st !== 0) pluck(col, v[(st / 2) % 3], t, 0.14, { long: 0.4 });
      } else if (st % 2 === 0) { const k = (st / 2) % 6; pluck(col, [v[0], v[2], v[1] + 12, v[2], v[1], v[2]][k] - 12, t, k % 3 === 0 ? 0.3 : 0.22, { pan: -0.3 + k * 0.1, long: 0.6 }); }
    }
    // percussion (layer 4+): patterns per meter; fills only at the end of a phrase
    if (layer >= 4) {
      const fill = E > 0.7 && isCadenceBar && phraseIdx % 2 === 1;
      if (S.th.meter === '4/4') {
        if (!fill || st < bs / 2) {
          if (E > 0.45) { if (st === 0 || st === 8 || (E > 0.7 && st === 10)) kick(t, 0.7 + E * 0.4); if (st === 4 || st === 12) snare(t, 0.5 + E * 0.5); }
          else { if (st === 0) kick(t, 0.5); if (st === 4 || st === 12) rim(t, 0.6); }
          if (E > 0.7 ? st % 1 === 0 && rnd() < 0.85 : st % 2 === 0) hat(t, st % 4 === 0 ? 0.9 : 0.5, st === 14 && E > 0.5);
        } else tom(t, [9, 7, 5, 4, 2, 0, -1, -3][st - bs / 2] ?? 0, 0.8 + E * 0.3);
      } else if (S.th.meter === '3/4') {
        if (st === 0) kick(t, 0.5 + E * 0.4); if (st === 4 || st === 8) (E > 0.5 ? snare : rim)(t, 0.4 + E * 0.3);
        if (st % 2 === 0) shaker(t, st % 4 === 0 ? 0.8 : 0.4);
        if (fill && st >= 8 && st % 2 === 0) tom(t, [5, 2][(st - 8) / 2] ?? 0, 0.8);
      } else {
        if (st === 0) kick(t, 0.5 + E * 0.4); if (st === 6) (E > 0.5 ? snare : rim)(t, 0.4 + E * 0.4);
        if (st % 2 === 0) shaker(t, st % 6 === 0 ? 0.8 : 0.45);
        if (fill && st >= 6 && st % 2 === 0) tom(t, [7, 4, 0][(st - 6) / 2] ?? 0, 0.8);
      }
      if (st === 0 && barInPhrase === 0 && phraseIdx % 2 === 0 && E > 0.7 && S.loop + phraseIdx > 1) crash(t, 0.5 + E * 0.4); // a crash on the downbeat after a fill
    }
    // accents asked for by the game land on the next beat
    if (st % beat === 0) while (S.accents.length) playAccent(S.accents.shift(), t, semis);
    ambience(t, st, semis);
  }
  function playAccent(k, t, semis) {
    const sd = stepDur();
    if (k === 'poof') [0, 1, 2].forEach((i) => pluck('glock', semis[i] + 12, t + i * sd, 0.6, { pan: (i - 1) * 0.3 }));
    else if (k === 'hit') { kick(t, 0.8); pad([semis[0] - 12, semis[0] - 11], t, sd * 3, 1); }
    else if (k === 'boss') { kick(t, 1.2); crash(t, 1.1); [0, 1, 2].forEach((i) => bass(semis[0] + [0, 7, 12][i], t + i * sd * 2, sd * 2, 1)); }
    else if (k === 'rage') { [0, 1, 2, 3].forEach((i) => tom(t + i * sd, 6 - i * 2, 1)); }
    else if (k === 'triumph') { crash(t, 0.8); [0, 4, 7, 12].forEach((s, i) => pluck('harp', s + 12, t + i * sd, 0.8)); }
  }

  return {
    start(theme = 'edge') {
      this.stop();
      const id = typeof theme === 'number' ? THEME_LIST[theme % THEME_LIST.length] : theme;
      S.id = THEMES[id] ? id : 'edge'; S.th = THEMES[S.id]; S.meter = METERS[S.th.meter]; S.cells = CELLS[S.th.meter];
      S.step = 0; S.loop = 0; S.voicing = null; S.lift = S.pendingLift = 0; S.unlocked = false; S.progress = 0;
      S.minor = S.th.mode === 'minor'; S.energy = S.eWant; S.threat = S.tWant; S.accents.length = 0;
      if (S.manualStage === null) S.stage = S.pendingStage = 0; else S.stage = S.pendingStage;
      S.tempoMul = S.pendingTempo;
      echo.delayTime.value = Math.min(1.9, (60 / S.th.bpm) * (S.th.meter === '6/8' ? 1.5 : 0.75)); // the echo repeats in time
      S.next = ctx.currentTime + 0.15;
      const tick = () => { while (S.next < ctx.currentTime + 0.4) { scheduleStep(S.next); S.step++; S.next += stepDur(); } };
      tick(); S.timer = setInterval(tick, 100);
    },
    stop() { if (S.timer) clearInterval(S.timer); S.timer = null; },
    // how far through the level (0..1) and whether the way out is open: layers build, and on unlock it modulates up a step (at the top of the next song)
    setProgress(p, unlocked = false) {
      if (S.manualStage !== null) return;
      S.progress = Math.max(S.progress, p);
      const want = unlocked ? 5 : Math.min(4, 1 + Math.floor(S.progress * 3.6));
      S.pendingStage = Math.max(S.pendingStage, want);
      if (unlocked && !S.unlocked) { S.unlocked = true; S.pendingLift = 2; }
    },
    setIntensity(energy, threat = energy) { S.eWant = Math.max(0, Math.min(1, energy)); S.tWant = Math.max(0, Math.min(1, threat)); const t = ctx.currentTime; wet.gain.setTargetAtTime(0.42 - S.energy * 0.15, t, 0.8); water.frequency.setTargetAtTime(800 + S.dream * 1600 + S.energy * 900, t, 0.6); },
    accent(kind) { if (S.timer && S.accents.length < 3) S.accents.push(kind); },
    setTempo(m) { S.pendingTempo = Math.max(0.5, Math.min(1.6, m)); }, // applied at the next phrase, so the groove never stumbles
    setLayers(n) { S.manualStage = n; if (n !== null) S.pendingStage = Math.max(0, Math.min(5, Math.round(n))); },
    setDream(d) { S.dream = d; const t = ctx.currentTime; water.frequency.setTargetAtTime(800 + d * 1600 + S.energy * 900, t, 0.6); swayAmt.gain.setTargetAtTime(160 + d * 240, t, 0.6); },
    info() { return S.info; }, // where the song is: section, bar, beat, chord (and its roman numeral), cadence, key
    renderUntil(T, theme = 'edge', progressAt = null, intensityAt = null) {
      this.start(theme); this.stop();
      S.next = 0.1;
      while (S.next < T) {
        if (progressAt) { const [p, u] = progressAt(S.next); this.setProgress(p, u); }
        if (intensityAt) { const [e, th, acc] = intensityAt(S.next); S.eWant = e; S.tWant = th; if (acc) S.accents.push(acc); }
        scheduleStep(S.next); S.step++; S.next += stepDur();
      }
    },
  };
}

function impulse(ctx, secs) { // a soft, dark hall
  const len = Math.floor(ctx.sampleRate * secs), buf = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch); let lp = 0;
    for (let i = 0; i < len; i++) { lp = lp * 0.6 + (Math.random() * 2 - 1) * 0.4; d[i] = lp * Math.pow(1 - i / len, 2.8 + ch * 0.2); }
  }
  return buf;
}
