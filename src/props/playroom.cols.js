// The playroom: alphabet-block towers, the ball pit, the dollhouse, a
// rocking horse, the jack-in-the-box, toy cubbies and the attic ladder.
import { B } from './b.js';

export const PLAYROOM = {
  // a stack of n alphabet blocks (each a cube of side c)
  blockStack: (p) => { const c = p.c || 1.8; return [B(0, 0, 0, c, c * (p.n || 1), c, { tag: 'blocks', surface: 'wood' })]; },
  // the ball pit: a padded rim and a springy sea of balls
  ballPit: (p) => { const w = p.w || 6, d = p.d || 6, h = p.h || 2.0, t = 0.35;
    return [B(0, 0, d / 2 - t / 2, w, h, t, { tag: 'pitRim', surface: 'foam' }), B(0, 0, -d / 2 + t / 2, w, h, t, { tag: 'pitRim', surface: 'foam' }),
      B(-w / 2 + t / 2, 0, 0, t, h, d - 2 * t, { tag: 'pitRim', surface: 'foam' }), B(w / 2 - t / 2, 0, 0, t, h, d - 2 * t, { tag: 'pitRim', surface: 'foam' }),
      B(0, 0, 0, w - 2 * t, p.balls || 1.6, d - 2 * t, { tag: 'balls', type: 'bounce', surface: 'plastic' })]; },
  // a dollhouse open at the front (local +z): two floors and a flat roof
  dollhouse: (p) => { const w = p.w || 6, d = p.d || 3.2, f = p.floors || [2.4, 5.2, 8.0];
    const out = f.map((y) => B(0, y - 0.25, 0, w, 0.25, d, { tag: 'dollFloor', surface: 'wood' }));
    for (const s of [-1, 1]) out.push(B(s * (w / 2 - 0.12), 0, 0, 0.24, f[f.length - 1], d, { tag: 'dollWall', surface: 'wood' }));
    out.push(B(0, 0, -d / 2 + 0.12, w, f[f.length - 1], 0.24, { tag: 'dollWall', surface: 'wood' }));
    out.push(B(0, 0, 0, w, f[0] - 0.25, d, { tag: 'dollBase', surface: 'wood' }));
    return out; },
  rockingHorse: () => [B(0, 0, 0, 1.4, 2.6, 3.6, { tag: 'horseBody', surface: 'wood' }), B(0, 2.6, 1.3, 1.2, 1.8, 1.0, { tag: 'horseHead', surface: 'wood' })],
  jackBox: (p) => [B(0, 0, 0, p.w || 2.4, p.h || 2.0, p.w || 2.4, { tag: 'jackBox', surface: 'wood' })],
  // the clown that pops out of the box (a mover, fast up and slow down)
  jackClown: () => [B(0, 0, 0, 1.8, 0.4, 1.8, { tag: 'clown', surface: 'cloth' })],
  toyCubbies: (p) => { const w = p.w || 6, d = p.d || 2.0, h = p.h || 6.0;
    return [B(0, 0, 0, w, h, d, { tag: 'cubbies', surface: 'wood' })]; },
  // a steep pull-down ladder up to the attic hatch, climbing toward local -z
  atticLadder: (p) => { const n = p.n || 10, rise = p.rise || 1.0, run = p.run || 0.85, w = p.w || 2.4, out = [];
    for (let i = 0; i < n; i++) out.push(B(0, rise * (i + 1) - 0.25, -(i + 0.5) * run, w, 0.25, run, { tag: 'rung', step: i, surface: 'wood' }));
    return out; },
  toyPiano: () => [B(0, 0, 0, 3.4, 1.6, 1.8, { tag: 'piano', surface: 'wood' })],
  // decor
  teepee: () => [], playRug: () => [], toyCars: () => [], starLights: () => [], kite: () => [],
};
