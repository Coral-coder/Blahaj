# Blåhaj music engine

The generative music for *Blåhaj: Back to Bed*, on its own so we can work on it.
`src/music.js` is the engine (the same API the game uses), `index.html` + `src/lab.js`
is the Music Lab, and `tools/` renders and checks it offline.

    npm run build                     # builds dist/lab.js
    npm run serve                     # then open http://localhost:8080
    THEME=attic SECS=90 npm run render  # a WAV of a theme as a level plays out

## How a theme is written

**Form: 32-bar AABA**, then round again.

| Section | Bars | What happens |
|---|---|---|
| A  | 1–4 | the *question* (antecedent), ends on a **half cadence** (V) |
| A  | 5–8 | the *answer* (consequent): starts like the question, ends on a **perfect authentic cadence** (ii/IV – V7 – I, tune lands on the tonic) |
| A′ | 9–16 | the same period again, with grace-note turns |
| B  | 17–24 | the bridge: subdominant and relative-minor colours, smoother rhythm, ends on V/V7 |
| A  | 25–32 | home |

**Harmony.** Scale-degree chords from functional templates (tonic → pre-dominant →
dominant → tonic). Minor keys raise the leading tone for V and vii°. The pad voices
each chord as close as possible to the last one (smooth voice leading); the bass takes roots.

**Rhythm.** Everything sits on a grid in the theme's meter: 4/4, 3/4 (waltz) or 6/8.
The tune is built from a one-bar rhythmic motif that repeats on bars 1 and 3 with an
answering bar 2 and a long note at the cadence. Bass, accompaniment (Alberti in 4/4,
oom-pah-pah in 3/4, rocking broken chords in 6/8) and drums are fixed patterns that
repeat every bar. Fills only happen in the last bar of a phrase; crashes only on the
downbeat after.

**Melody.** Strong beats take chord tones, weak beats step between them (passing and
neighbour notes). Each phrase arches up and back down to its cadence note: scale
degree 2 or 5 over the half cadence, 1 over the authentic cadence.

## How the game steers it

| Call | Musical effect |
|---|---|
| `setProgress(p, open)` | layers build (pad → tune → bass → accompaniment → drums → strings); when the way out opens it modulates up a whole step at the top of the next song |
| `setIntensity(energy, threat)` | energy adds layers and rhythmic density (8ths → 16ths, driving bass, backbeat, fills); threat switches to the parallel minor, only at a phrase boundary |
| `accent(kind)` | poof / hit / boss / rage / triumph, quantized to the next beat |
| `setTempo(m)` | applied at the next phrase so the groove never stumbles |
| `setDream(d)` | the underwater filter and a touch of detune as the dream sours |
| `info()` | where the song is: section, bar, beat, chord, roman numeral, cadence, key |

## Themes

Defined in `THEMES` in `src/music.js`: key, mode, meter, tempo, lead instrument,
accompaniment colour, a little in-time room ambience, and how goofy.
