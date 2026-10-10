// The back garden at night (outdoors). Local +z is the front of each prop.
import { B } from './b.js';

export const BACKYARD = {
  // a round trampoline: bouncy all over (flop it for a huge bounce)
  trampoline: (p) => { const r = p.r || 3.2; return [B(0, 0, 0, r * 1.7, p.h || 1.6, r * 1.7, { tag: 'trampoline', type: 'bounce', surface: 'rubber' })]; },
  // swing set: two A-frames joined by a top bar you can walk along
  swingFrame: (p) => {
    const w = p.w || 8, h = p.h || 8;
    return [B(0, h - 0.4, 0, w, 0.4, 0.5, { tag: 'swingBar', surface: 'metal' }),
      B(-w / 2, 0, 0, 0.3, h - 0.4, 0.3, { tag: 'swingPost' }), B(w / 2, 0, 0, 0.3, h - 0.4, 0.3, { tag: 'swingPost' })];
  },
  swingSeat: () => [B(0, 0, 0, 1.6, 0.25, 0.9, { tag: 'swing', surface: 'rubber' })],
  playhouse: (p) => [B(0, 0, 0, p.w || 5, p.h || 6, p.d || 4.4, { tag: 'playhouse', surface: 'wood' })],
  sandbox: (p) => [B(0, 0, 0, p.w || 6, 0.8, p.d || 4, { tag: 'sandbox', surface: 'sand' })],
  shed: (p) => [B(0, 0, 0, p.w || 6, p.h || 8, p.d || 5, { tag: 'shed', surface: 'wood' })],
  picnicTable: (p) => [B(0, 3.0, 0, 6, 0.3, 2.6, { tag: 'picnic', surface: 'wood' }), B(0, 1.6, 2.0, 6, 0.25, 1.0, { tag: 'bench', surface: 'wood' }), B(0, 1.6, -2.0, 6, 0.25, 1.0, { tag: 'bench', surface: 'wood' }),
    B(-2.4, 0, 0, 0.3, 3.0, 4.6, { tag: 'picnicLeg' }), B(2.4, 0, 0, 0.3, 3.0, 4.6, { tag: 'picnicLeg' })],
  bbq: () => [B(0, 0, 0, 2.6, 4.2, 1.8, { tag: 'bbq', surface: 'metal' })],
  flowerPot: (p) => { const r = p.r || 0.9; return [B(0, 0, 0, r * 1.8, p.h || 1.6, r * 1.8, { tag: 'pot', surface: 'soil' })]; },
  bush: (p) => { const r = p.r || 1.6; return [B(0, 0, 0, r * 1.7, (p.h || 2.6), r * 1.7, { tag: 'bush', surface: 'leaves' })]; },
  // the big tree: a trunk, branches you can stand on, and a treehouse deck up top
  tree: (p) => {
    const out = [B(0, 0, 0, 2.2, p.h || 14, 2.2, { tag: 'trunk', surface: 'bark' })];
    for (const [x, y, z, w, d] of p.branches || []) out.push(B(x, y - 0.5, z, w, 0.5, d, { tag: 'branch', surface: 'bark' }));
    return out;
  },
  treehouse: (p) => { const w = p.w || 7, d = p.d || 6, y = p.y0 || 10;
    return [B(0, y - 0.4, 0, w, 0.4, d, { tag: 'deck', surface: 'wood' }), B(-w / 2 + 1.5, y, -d / 2 + 1.4, 3.0, 2.85, 2.8, { tag: 'hut', surface: 'wood' })]; },
  // decor
  kiddiePool: () => [], gnome: () => [], solarLight: () => [], patio: () => [], dryerVent: () => [], litWindow: () => [], gardenHose: () => [], washingLine: () => [],
};
