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
// THE TWO STATES. While the room still has nightmares in it ("hunt"), the theme
// plays as a lively adventure from the first bar: a moving bass, a light beat,
// syncopated rhythms, heroic chords. Once they're all poofed and the way out
// opens ("awake"), it modulates up a step at the next phrase with a little
// fanfare and plays out bright and upbeat: the full groove, a touch faster.
// Lullaby colours (music box, harp, soft pads) stay in the accompaniment, so it
// stays a dream, an action-adventure dream.
//
// DANGER. Moderate threat brings in the borrowed "adventure" chords (bVI and
// bVII, so phrases can cadence bVI - bVII - I); only real, close danger turns the
// theme to its minor. Both switch at phrase boundaries.
//
// The game steers it: setProgress (layers build; unlocked = the nightmares are
// gone: awake), setIntensity (energy -> rhythmic density and drums; threat ->
// adventure chords, then minor), accent (a quantized musical hit), setDream.

// --- theory ---------------------------------------------------------------------
const SCALES = { major: [0, 2, 4, 5, 7, 9, 11], minor: [0, 2, 3, 5, 7, 8, 10] };
const NOTE = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];
// roman numeral -> [scale-degree root (0-6), seventh?]; quality comes from the scale
// roman numeral -> [scale-degree root, seventh?, exact semitones (borrowed / secondary chords)]
const ROMAN = {
  I: [0], ii: [1], iii: [2], IV: [3], V: [4], V7: [4, 1], vi: [5], 'vii°': [6],
  II: [1, 0, [2, 6, 9]],      // V/V: the bright major II that leans into V
  bVI: [5, 0, [8, 12, 15]],   // borrowed from the parallel minor: the heroic "adventure" chords
  bVII: [6, 0, [10, 14, 17]],
};
const BORROWED = new Set(['bVI', 'bVII']);
const MINOR_NAME = { I: 'i', ii: 'ii°', iii: 'III', IV: 'iv', V: 'V', V7: 'V7', vi: 'VI', 'vii°': 'vii°', II: 'II', bVI: 'VI', bVII: 'VII' };

// phrase templates, one entry per bar; two chords in a bar split it in half
// bright, mostly primary chords (I, IV, V, V/V); the minor ones mostly wait for the bridge
const ANTECEDENT = [ // ends on a half cadence (V)
  [['I'], ['IV'], ['I'], ['V']], [['I'], ['V'], ['IV'], ['V']],
  [['I'], ['IV'], ['II'], ['V']], [['I'], ['bVII'], ['IV'], ['V']],
];
const CONSEQUENT = [ // ends on a perfect authentic cadence (V7 - I), or the heroic bVI - bVII - I
  [['I'], ['IV'], ['ii', 'V7'], ['I']], [['I'], ['II'], ['IV', 'V7'], ['I']],
  [['IV'], ['I'], ['II', 'V7'], ['I']], [['I'], ['IV'], ['bVI', 'bVII'], ['I']],
];
const BRIDGE = [ // eight bars away from home, ending on the dominant
  [['IV'], ['V'], ['iii'], ['vi'], ['ii'], ['V'], ['I'], ['V7']],
  [['bVI'], ['bVII'], ['I'], ['I'], ['bVI'], ['bVII'], ['IV'], ['V7']],
  [['vi'], ['IV'], ['I'], ['V'], ['vi'], ['IV'], ['II'], ['V7']],
];
// under threat, swap in the adventure colours (only off the cadences)
const HEROIC = { vi: 'bVI', iii: 'bVII', ii: 'IV' };
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
    a: [[1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0], [1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0]],
    b: [[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0], [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0]],
    cad: [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]],
    smooth: [[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0]],
  },
  '3/4': {
    a: [[1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0], [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0], [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0]],
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
const THEMES = { // leads: ocarina, horn, piano, synth (a soft dreamy lead), flute, marimba, musicbox...
  // the main theme, written by hand: a horn-call opening (sol - do - mi) that climbs, answered, then home
  edge:      { key: 0, mode: 'major', meter: '4/4', bpm: 96, lead: 'ocarina', color: 'musicbox', amb: 'bubbles', goof: 0.6, tune: {
    ant: [['I'], ['IV'], ['I'], ['V']], cons: [['I'], ['IV'], ['ii', 'V7'], ['I']],
    antMel: [[0, 6, 4], [6, 2, 7], [8, 4, 9], [12, 2, 8], [14, 2, 7], //   G.  C | E  D C   (I)
      [16, 6, 5], [22, 2, 7], [24, 4, 10], [28, 2, 9], [30, 2, 8], //      A.  C | F  E D   (IV)
      [32, 6, 9], [38, 2, 10], [40, 4, 11], [44, 2, 10], [46, 2, 9], //    E.  F | G  F E   (I)
      [48, 12, 8], [60, 4, 6]], //                                          D . . .  B         (V: half cadence)
    consMel: [[0, 6, 4], [6, 2, 7], [8, 4, 9], [12, 2, 8], [14, 2, 7],
      [16, 6, 5], [22, 2, 7], [24, 4, 10], [28, 2, 9], [30, 2, 8],
      [32, 4, 10], [36, 4, 12], [40, 4, 11], [44, 2, 10], [46, 2, 8], //   F  A | G  F D    (ii - V7)
      [48, 16, 7]], //                                                      C . . .            (I: home)
  } },
  downstairs:{ key: -3, mode: 'major', meter: '4/4', bpm: 100, lead: 'piano', color: 'rhodes', amb: 'fire', goof: 0.8 },
  kitchen:   { key: 2, mode: 'major', meter: '4/4', bpm: 112, lead: 'marimba', color: 'pizz', amb: 'drips', goof: 1.1 },
  laundry:   { key: -2, mode: 'major', meter: '6/8', bpm: 72, lead: 'synth', color: 'glock', amb: 'churn', goof: 1 },
  backyard:  { key: 5, mode: 'major', meter: '6/8', bpm: 66, lead: 'flute', color: 'harp', amb: 'crickets', goof: 0.5 },
  garage:    { key: -5, mode: 'major', meter: '4/4', bpm: 108, lead: 'horn', color: 'pizz', amb: 'buzz', goof: 0.8 },
  basement:  { key: -7, mode: 'minor', meter: '6/8', bpm: 66, lead: 'horn', color: 'harp', amb: 'chuff', goof: 0.3 },
  stairs:    { key: 0, mode: 'major', meter: '4/4', bpm: 120, lead: 'horn', color: 'strings', amb: 'clock', goof: 0.4 },
  hallway:   { key: 3, mode: 'major', meter: '3/4', bpm: 108, lead: 'ocarina', color: 'musicbox', amb: 'clock', goof: 0.6 },
  bathroom:  { key: 1, mode: 'major', meter: '4/4', bpm: 104, lead: 'marimba', color: 'glock', amb: 'drips', goof: 1.2 },
  parents:   { key: -1, mode: 'major', meter: '3/4', bpm: 92, lead: 'piano', color: 'musicbox', amb: 'snore', goof: 0.9 },
  playroom:  { key: 4, mode: 'major', meter: '4/4', bpm: 116, lead: 'synth', color: 'pizz', amb: 'toys', goof: 1.3 },
  attic:     { key: -4, mode: 'minor', meter: '4/4', bpm: 100, lead: 'horn', color: 'strings', amb: 'wind', goof: 0.2 },
  bed:       { key: 0, mode: 'major', meter: '3/4', bpm: 84, lead: 'musicbox', color: 'harp', amb: 'bubbles', goof: 0.4 },
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
    energy: 0, eWant: 0, threat: 0, tWant: 0, minor: false, heroic: false, accents: [], awake: false, pendingAwake: false,
    song: null, loop: 0, voicing: null, info: {},
  };
  const stepDur = () => 60 / (S.th.bpm * S.tempoMul * (S.awake ? 1.05 : 1)) / S.meter.spb; // awake: a touch quicker
  const barSteps = () => S.meter.beats * S.meter.spb;
  const mode = () => (S.minor ? 'minor' : 'major'); // S.minor already knows the theme's own mode, the danger and whether you're awake
  const keyOff = () => S.th.key + S.lift;
  const hz = (semi) => 261.63 * Math.pow(2, (semi + keyOff()) / 12) * (S.dream < 0.3 ? 1 + (0.3 - S.dream) * (rnd() - 0.5) * 0.03 : 1); // in tune; only a deep nightmare wobbles it

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
  const chordSemis = (roman) => ROMAN[roman][2] ? ROMAN[roman][2].slice() : chordDegs(roman).map((d) => degSemi(d, isDominant(roman)));
  // a melody note against the chord sounding: borrowed chords borrow the minor scale's notes,
  // V/V raises the 4th, and a strong-beat note that isn't in the chord slides to the nearest chord tone
  function fitNote(deg, chord, strong) {
    let s = BORROWED.has(chord) && mode() === 'major' ? (() => { const sc = SCALES.minor, n = Math.floor(deg / 7), i = ((deg % 7) + 7) % 7; return sc[i] + 12 * n; })() : degSemi(deg, isDominant(chord));
    const pc = ((s % 12) + 12) % 12;
    if (chord === 'II' && mode() === 'major' && pc === 5) s += 1;
    if (strong) { const pcs = chordSemis(chord).map((x) => ((x % 12) + 12) % 12), p2 = ((s % 12) + 12) % 12; if (!pcs.includes(p2)) for (const d of [-1, 1, -2, 2]) if (pcs.includes((((p2 + d) % 12) + 12) % 12)) { s += d; break; } }
    return s;
  }
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
  // A one-bar motif as a contour in scale steps. 'call': a leap up off the first note (a 3rd to
  // a 5th), then mostly steps back down, the shape of a call. 'answer': mostly falling steps.
  function makeContour(cell, r, kind) {
    const n = cell.filter(Boolean).length, c = [0];
    for (let i = 1; i < n; i++) {
      if (kind === 'call') c.push(i === 1 ? 2 + Math.floor(r() * 3) : c[i - 1] + (i === n - 1 ? -1 : r() < 0.72 ? -1 : 1));
      else c.push(c[i - 1] + (r() < 0.78 ? -1 : 1) * (i === 1 && r() < 0.35 ? 2 : 1));
    }
    return c;
  }
  // the chord tone (as a scale degree, any octave) nearest to d
  function chordToneNear(d, chord) {
    let best = d, bd = 1e9;
    for (const c of chordDegs(chord)) for (const o of [-14, -7, 0, 7, 14]) { const x = c + o, dd = Math.abs(x - d); if (dd < bd) { bd = dd; best = x; } }
    return best;
  }
  // A phrase the way a songwriter builds one: the motif, an answer, the motif again a step or
  // two higher (a sequence) - or, in a consequent, a line driving down to the cadence - then
  // the cadence bar. Strong beats snap to chord tones, so the motif bends to the harmony.
  function composePhrase(chords, rhythm, cadenceNote, r, start, motif, answer, drive = null) {
    const bs = barSteps(), M = S.meter, notes = [];
    const chordAt = (b, st) => { const bar = chords[b]; return bar.length > 1 && st >= bs / 2 ? bar[1] : bar[0]; };
    const strongAt = (st) => M.strong.includes(st) || M.medium.includes(st);
    const lift = 1 + Math.floor(r() * 2);
    let last = start;
    for (let b = 0; b < 4; b++) {
      const cell = rhythm[b], onsets = []; for (let i = 0; i < bs; i++) if (cell[i]) onsets.push(i);
      let contour, base;
      if (b === 0) { contour = motif; base = chordToneNear(start, chordAt(0, 0)); }
      else if (b === 1) { contour = answer; base = last + (r() < 0.5 ? 1 : 0); }
      else if (b === 2 && drive) { contour = drive; base = last + 2; }
      else if (b === 2) { contour = motif; base = chordToneNear(start + lift, chordAt(2, 0)); }
      onsets.forEach((st, k) => {
        const ch = chordAt(b, st), strong = strongAt(st);
        let d;
        if (b === 3) d = k <= 1 ? cadenceNote : cadenceNote + (k % 2 ? 2 : 0); // land and stay home
        else { d = base + (contour[k] ?? contour[contour.length - 1] - (k - contour.length + 1)); if (strong) d = chordToneNear(d, ch); }
        while (d > 14) d -= 7; while (d < 3) d += 7; // keep it singable (F4 .. C6)
        notes.push({ step: b * bs + st, len: (onsets[k + 1] ?? bs) - st, deg: d, chord: ch, strong });
        last = d;
      });
    }
    // smoothing: no leap wider than a sixth, and never the same note three times running
    for (let i = 1; i < notes.length; i++) {
      const n = notes[i], p = notes[i - 1].deg; if (n.step >= 3 * bs) break;
      while (n.deg - p > 5) n.deg -= 7; while (p - n.deg > 5) n.deg += 7;
      if (i >= 2 && n.deg === p && notes[i - 2].deg === p) {
        const nx = notes[i + 1], dir = nx && nx.deg < p ? -1 : 1;
        n.deg = n.strong ? chordToneNear(p + dir * 2, n.chord) : p + dir;
        if (n.deg === p) n.deg = p + dir;
      }
    }
    // the note before the cadence steps into it: from the leading tone below (rising home) or from above
    const pre = notes.filter((n) => n.step < 3 * bs).pop();
    if (pre) pre.deg = cadenceNote + (cadenceNote % 7 === 0 && r() < 0.5 ? -1 : 1);
    return notes;
  }
  // a hand-written tune: [step in the phrase, length in steps, scale degree (7 = the tonic an octave up)]
  function fromTune(list, chords) {
    const bs = barSteps(), M = S.meter;
    return list.map(([step, len, deg]) => { const b = Math.floor(step / bs), st = step % bs, bar = chords[b]; return { step, len, deg, chord: bar.length > 1 && st >= bs / 2 ? bar[1] : bar[0], strong: M.strong.includes(st) || M.medium.includes(st) }; });
  }
  function compose(id) {
    const r = mkRng(hashStr(id) * 7 + S.loop * 101);
    const rTheme = mkRng(hashStr(id)); // the A tune is the theme's own: the same every time
    const C = S.cells, T = S.th.tune;
    let ant, cons, antMel, consMel;
    if (T) { // a theme with its own hand-written tune
      ant = T.ant; cons = T.cons; antMel = fromTune(T.antMel, ant); consMel = fromTune(T.consMel, cons);
    } else {
      ant = pickOf(ANTECEDENT, rTheme); cons = pickOf(CONSEQUENT, rTheme);
      const cellA = pickOf(C.a, rTheme), cellB = pickOf(C.b, rTheme), cellC = pickOf(C.b, rTheme), cad = pickOf(C.cad, rTheme), cad2 = pickOf(C.cad, rTheme);
      const motif = makeContour(cellA, rTheme, 'call'), answer = makeContour(cellB, rTheme, 'answer'), drive = makeContour(cellC, rTheme, 'answer');
      const start = rTheme() < 0.5 ? 4 : 7; // start on 5 below the tonic, or on the tonic
      const hcNote = rTheme() < 0.5 ? 8 : 4 + 7; // half cadence: scale degree 2 or 5
      antMel = composePhrase(ant, [cellA, cellB, cellA, cad], hcNote, rTheme, start, motif, answer);
      // the consequent starts the same (a parallel period), then drives home to 1
      consMel = composePhrase(cons, [cellA, cellB, cellC, cad2], 7, mkRng(hashStr(id) + 3), start, motif, answer, drive);
    }
    // the bridge: new chords, its own smoother motif, a step higher
    const br = pickOf(BRIDGE, r), sm = C.smooth, bm = pickOf(sm, r), bn = pickOf(sm, r);
    const bMotif = makeContour(bm, r, 'call'), bAnswer = makeContour(bn, r, 'answer');
    const bA = composePhrase(br.slice(0, 4), [bm, bn, bm, pickOf(sm, r)], 9 + (r() < 0.5 ? 0 : 2), r, 9, bMotif, bAnswer);
    const bB = composePhrase(br.slice(4), [bm, bn, bm, pickOf(C.cad, r)], 8, r, 9, bMotif, bAnswer);
    const section = (name, chords, mel, cadence) => ({ name, chords, mel, cadence });
    return [
      section('A', ant, antMel, 'HC'), section('A', cons, consMel, 'PAC'),
      section("A'", ant, antMel, 'HC'), section("A'", cons, consMel, 'PAC'), // (A' adds grace notes live)
      section('B', br.slice(0, 4), bA, '—'), section('B', br.slice(4), bB, 'HC'),
      section('A', ant, antMel, 'HC'), section('A', cons, consMel, 'PAC'),
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
    piano: [[[1, 1, 1.5], [2.0, 0.45, 0.8], [3.0, 0.2, 0.35], [4.0, 0.1, 0.18]], 0.085],
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
  function horn(semi, t, dur, vol = 1) { // a soft heroic horn: two detuned saws, the filter opening as it speaks
    const f = hz(semi), g = voice(bus, 0.08), lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = 1.1;
    lp.frequency.setValueAtTime(350, t); lp.frequency.linearRampToValueAtTime(1500 + S.energy * 900, t + 0.07); lp.frequency.linearRampToValueAtTime(900, t + dur + 0.1);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.04 * vol, t + 0.04); g.gain.setValueAtTime(0.034 * vol, t + Math.max(0.05, dur - 0.04)); g.gain.linearRampToValueAtTime(0, t + dur + 0.14);
    lp.connect(g); g.connect(echoIn);
    const os = [-7, 7].map((det) => { const o = osc('sawtooth', f, t, t + dur + 0.2, lp); o.detune.value = det; return o; });
    if (dur > 0.35) { const vib = ctx.createOscillator(), va = ctx.createGain(); vib.frequency.value = 5.2; va.gain.setValueAtTime(0, t); va.gain.linearRampToValueAtTime(f * 0.008, t + Math.min(0.5, dur)); vib.connect(va); os.forEach((o) => va.connect(o.frequency)); vib.start(t); vib.stop(t + dur + 0.2); }
  }
  function ocarina(semi, t, dur, vol = 1) { // round and airy, with a breath at the start
    const f = hz(semi + 12), g = voice(bus, 0.12); g.connect(echoIn);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.055 * vol, t + 0.03); g.gain.setValueAtTime(0.05 * vol, t + Math.max(0.04, dur - 0.05)); g.gain.linearRampToValueAtTime(0, t + dur + 0.07);
    const o = osc('sine', f, t, t + dur + 0.1, g), o3 = osc('triangle', f * 2, t, t + dur + 0.1, voice(g)); void o3;
    noiseHit(t, 0.05, 2500, 0.025 * vol, 'bandpass', 0.12);
    if (dur > 0.3) { const vib = ctx.createOscillator(), va = ctx.createGain(); vib.frequency.value = 5.5; va.gain.setValueAtTime(0, t); va.gain.linearRampToValueAtTime(f * 0.009, t + Math.min(0.45, dur)); vib.connect(va).connect(o.frequency); vib.start(t); vib.stop(t + dur + 0.1); }
  }
  function synthLead(semi, t, dur, vol = 1) { // a soft square-and-triangle dream lead
    const f = hz(semi + 12), g = voice(bus, -0.05), lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1800 + S.energy * 1200; lp.Q.value = 0.7;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.028 * vol, t + 0.012); g.gain.setValueAtTime(0.022 * vol, t + Math.max(0.03, dur - 0.04)); g.gain.linearRampToValueAtTime(0, t + dur + 0.08);
    lp.connect(g); g.connect(echoIn);
    osc('square', f, t, t + dur + 0.1, lp); const o2 = osc('triangle', f, t, t + dur + 0.1, lp); o2.detune.value = 9;
  }
  function lead(semi, t, dur, vol, echo = true) {
    const L = S.th.lead;
    if (L === 'flute') flute(semi, t, dur * 0.95, vol);
    else if (L === 'horn') horn(semi, t, dur * 0.95, vol);
    else if (L === 'ocarina') ocarina(semi, t, dur * 0.95, vol);
    else if (L === 'synth') synthLead(semi, t, dur * 0.9, vol);
    else { pluck(L, semi, t, vol, { echo, pan: 0.05, long: Math.min(1.6, 0.7 + dur * 0.8) }); if (L === 'piano') noiseHit(t, 0.012, 3000, 0.012 * vol, 'highpass', 0.05); }
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
      if (phraseIdx === 0) { S.song = compose(S.id); S.loop++; } // the top of the song: compose it (the A tune is always the theme's own)
      if (S.pendingAwake !== S.awake) { // the nightmares are gone: up a step, a fanfare, and the bright groove
        S.awake = S.pendingAwake; S.lift = S.awake ? 2 : 0; S.voicing = null;
        if (S.awake) S.accents.push('triumph');
      }
      const wantMinor = (S.th.mode === 'minor' && !S.awake) || S.threat > 0.8; // real, close danger (and a minor theme brightens to major once you're awake)
      if (wantMinor !== S.minor) { S.minor = wantMinor; S.voicing = null; }
      S.heroic = !S.minor && S.threat > 0.45; // danger about: the adventure chords
      if (S.pendingStage !== S.stage) S.stage = S.pendingStage;
      S.tempoMul = S.pendingTempo;
    }
    // following the game: lively from the first bar while there are nightmares, upbeat once they're gone
    const following = S.manualStage === null, hunt = following && !S.awake;
    const E = Math.max(S.energy, following ? (S.awake ? 0.58 : 0.42) : 0);
    const layer = Math.max(S.stage, following ? (S.awake ? 5 : 4) : 0, E > 0.75 ? 5 : E > 0.5 ? 4 : E > 0.3 ? 3 : E > 0.15 ? 2 : 1);
    const ph = S.song[phraseIdx], bar = ph.chords[barInPhrase];
    const isCad = barInPhrase === 3 || (barInPhrase === 2 && bar.length > 1 && st >= bs / 2);
    const sounding = (c) => (S.heroic && !isCad && HEROIC[c] ? HEROIC[c] : c);
    const chord = sounding(bar.length > 1 && st >= bs / 2 ? bar[1] : bar[0]);
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
        const semi = fitNote(n.deg, sounding(n.chord), n.strong);
        const accent = st === 0 ? 1.15 : M.strong.includes(st) ? 1.05 : 0.85;
        lead(semi, t, n.len * sd, (0.8 + E * 0.25) * accent);
        if (layer >= 5 && n.strong) pluck(S.th.color === 'strings' ? 'harp' : S.th.color, semi + 12, t, 0.3, { pan: -0.3 }); // doubled up an octave
        // A': a grace-note turn into the strong notes (ornament)
        if (ph.name === "A'" && n.strong && n.len >= beat && rnd() < 0.5) pluck('harp', fitNote(n.deg + 1, sounding(n.chord), false), t - sd * 0.5, 0.3, { long: 0.3 });
      }
      // counter-line (layer 3+): a third below the tune on its long strong notes
      if (layer >= 3) for (const n of ph.mel) if (n.step === barInPhrase * bs + st && n.strong && n.len >= beat) pluck(S.th.color === 'strings' ? 'celesta' : S.th.color, fitNote(n.deg - 2, sounding(n.chord), true), t, 0.3, { pan: -0.35 });
    }
    // bass (layer 2+): roots, fixed per meter; driving eighths when the energy's up
    if (layer >= 2) {
      const nextChord = (() => { const nb = ph.chords[barInPhrase + 1]; return nb ? nb[0] : (S.song[(phraseIdx + 1) % 8].chords[0][0]); })();
      if (S.th.meter === '4/4') {
        const nextRoot = chordSemis(sounding(nextChord))[0];
        if (E > 0.55) { if (st % 2 === 0) bass(st % 8 === 4 ? root + 12 : root, t, sd * 1.6, st % beat === 0 ? 1 : 0.7); } // pumping eighths, bouncing the octave
        else if (hunt || E > 0.4) { // an adventure bass: root, a push on the 'and' of 2, the fifth, then a step into the next chord
          if (st === 0) bass(root, t, sd * 5, 1); else if (st === 6) bass(root, t, sd * 2, 0.75); else if (st === 8) bass(semis[2] - 12, t, sd * 4, 0.9);
          else if (st === 12) bass(isCadenceBar ? semis[2] - 12 : nextRoot + (nextRoot > root ? -1 : 1), t, sd * 3, 0.75);
        } else if (st === 0 || st === 8) bass(st === 0 ? root : semis[2] - 12, t, sd * 7, 1);
      } else if (S.th.meter === '3/4') { if (st === 0) bass(root, t, sd * 4, 1); if (E > 0.45 && st === 8) bass(semis[2] - 12, t, sd * 3, 0.7); }
      else { if (st === 0 || st === 6) bass(st === 0 ? root : semis[2] - 12, t, sd * 5, st === 0 ? 1 : 0.75); if (st === 10 && E > 0.4 && !isCadenceBar) bass(semis[1] - 12, t, sd * 2, 0.6); } // 6/8: the two big beats, and a pickup
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
          else { if (st === 0 || (hunt && st === 10)) kick(t, 0.55); if (st === 4 || st === 12) rim(t, 0.6); } // hunting: a kick that pushes on the 'and' of 3
          if (S.awake && following && (st === 6 || st === 14)) hat(t, 0.6, true); // awake: open hats lifting the offbeats
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
      S.step = 0; S.loop = 0; S.voicing = null; S.lift = S.pendingLift = 0; S.unlocked = false; S.progress = 0; S.awake = S.pendingAwake = false; S.heroic = false;
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
      if (unlocked && !S.unlocked) { S.unlocked = true; S.pendingAwake = true; } // the nightmares are gone: awake at the next phrase
    },
    setIntensity(energy, threat = energy) { S.eWant = Math.max(0, Math.min(1, energy)); S.tWant = Math.max(0, Math.min(1, threat)); const t = ctx.currentTime; wet.gain.setTargetAtTime(0.38 - S.energy * 0.14, t, 0.8); water.frequency.setTargetAtTime(1300 + S.dream * 1500 + S.energy * 1000, t, 0.6); },
    accent(kind) { if (S.timer && S.accents.length < 3) S.accents.push(kind); },
    setTempo(m) { S.pendingTempo = Math.max(0.5, Math.min(1.6, m)); }, // applied at the next phrase, so the groove never stumbles
    setLayers(n) { S.manualStage = n; if (n !== null) S.pendingStage = Math.max(0, Math.min(5, Math.round(n))); },
    setDream(d) { S.dream = d; const t = ctx.currentTime; water.frequency.setTargetAtTime(1300 + d * 1500 + S.energy * 1000, t, 0.6); swayAmt.gain.setTargetAtTime(160 + d * 240, t, 0.6); },
    debugSong() { return S.song; }, // the composed song (for the tools)
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
