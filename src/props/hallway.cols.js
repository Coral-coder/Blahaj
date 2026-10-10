// The upstairs hallway: a long runner, a console table, the bookcase, picture
// ledges high on the walls, the linen closet and the grandfather clock.
import { B } from './b.js';

const shelving = (w, d, ys, tag) => {
  const out = ys.map((y) => B(0, y - 0.25, 0, w, 0.25, d, { tag: tag + 'Shelf', surface: 'wood' }));
  for (const s of [-1, 1]) out.push(B(s * (w / 2 - 0.12), 0, 0, 0.24, ys[ys.length - 1], d, { tag: tag + 'Side', surface: 'wood' }));
  out.push(B(0, 0, -d / 2 + 0.06, w, ys[ys.length - 1], 0.12, { tag: tag + 'Back', surface: 'wood' }));
  return out;
};

export const HALLWAY = {
  consoleTable: (p) => { const w = p.w || 5, d = p.d || 1.8, h = p.h || 3.2;
    return [B(0, h - 0.2, 0, w, 0.2, d, { tag: 'console', surface: 'wood' }), B(-w / 2 + 0.2, 0, 0, 0.2, h - 0.2, d - 0.2, { tag: 'consoleLeg' }), B(w / 2 - 0.2, 0, 0, 0.2, h - 0.2, d - 0.2, { tag: 'consoleLeg' })]; },
  // a wicker laundry hamper full of clothes: bouncy on top
  hamper: (p) => [B(0, 0, 0, p.w || 2.4, p.h || 2.6, p.d || 2.0, { tag: 'hamper', type: 'bounce', surface: 'cloth' })],
  hallBookcase: (p) => shelving(p.w || 5.6, p.d || 1.8, p.shelves || [2.2, 4.4, 6.6, 8.8], 'bookcase'),
  radiator: (p) => [B(0, 0.3, 0, p.w || 4.4, (p.h || 2.4) - 0.3, 0.6, { tag: 'radiator', surface: 'metal' })],
  // a narrow picture shelf fixed high on a wall (its back against local -z)
  pictureLedge: (p) => [B(0, (p.top || 6.4) - 0.25, 0, p.w || 8, 0.25, p.d || 1.0, { tag: 'ledge', surface: 'wood' })],
  linenCloset: (p) => shelving(p.w || 5.0, p.d || 2.2, p.shelves || [2.2, 4.4, 6.6, 8.6], 'linen'),
  grandfatherClock: (p) => [B(0, 0, 0, 2.2, p.h || 7.0, 1.4, { tag: 'clock', surface: 'wood' })],
  hallChair: (p) => [B(0, 1.8, 0, 2.2, 0.25, 2.0, { tag: 'chairSeat', surface: 'cloth' }), B(0, 2.05, -0.75, 2.2, (p.back || 4.4) - 2.05, 0.6, { tag: 'chairBack', surface: 'wood' }),
    ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sz]) => B(sx * 0.95, 0, sz * 0.85, 0.2, 1.8, 0.2, { tag: 'chairLeg' }))],
  hallToyBox: (p) => [B(0, 0, 0, p.w || 3.0, p.h || 2.4, p.d || 2.0, { tag: 'toyBox', surface: 'wood' })],
  // decor
  hallRunner: () => [], doorPanel: () => [], pendant: () => [], wallFrames: () => [], petBed: () => [],
};
