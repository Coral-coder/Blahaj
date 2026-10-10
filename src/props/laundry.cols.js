// Laundry room furniture as collision boxes (local +z is the front).
import { B } from './b.js';

export const LAUNDRY = {
  washer: () => [B(0, 0, 0, 3.0, 4.0, 3.0, { tag: 'washer', surface: 'metal' })],
  dryer: () => [B(0, 0, 0, 3.0, 4.0, 3.0, { tag: 'dryer', surface: 'metal' })],
  utilitySink: () => [B(0, 0, 0, 3.0, 3.6, 2.4, { tag: 'sink', surface: 'metal' })],
  // metal shelving: corner posts and four shelves; climb it from the front
  utilityShelf: (p) => {
    const w = p.w || 4.4, d = p.d || 1.8, ys = p.shelves || [2.4, 4.8, 7.2, 9.6];
    const out = ys.map((y) => B(0, y - 0.2, 0, w, 0.2, d, { tag: 'shelfBoard', surface: 'metal' }));
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) out.push(B(sx * (w / 2 - 0.1), 0, sz * (d / 2 - 0.1), 0.18, ys[ys.length - 1], 0.18, { tag: 'shelfPost' }));
    return out;
  },
  ironingBoard: (p) => [B(0, (p.h || 3.8) - 0.15, 0, 5.4, 0.15, 1.5, { tag: 'ironing', surface: 'cloth' }), B(-0.6, 0, 0, 0.2, (p.h || 3.8) - 0.15, 1.2, { tag: 'ironLeg' })],
  dryingRack: (p) => [B(0, (p.h || 4.2) - 0.15, 0, 3.6, 0.15, 1.6, { tag: 'rack', surface: 'cloth' })],
  stepLadder: () => [B(0, 0, 0.8, 2.0, 1.2, 0.8, { tag: 'ladder1', surface: 'metal' }), B(0, 0, 0, 2.0, 2.4, 0.8, { tag: 'ladder2', surface: 'metal' }), B(0, 0, -0.8, 2.0, 3.6, 0.8, { tag: 'ladder3', surface: 'metal' })],
  // a laundry basket hanging off the clothesline: rides back and forth (a mover)
  lineBasket: () => [B(0, 0, 0, 2.2, 0.9, 1.6, { tag: 'lineBasket', surface: 'wicker' })],
  // a soft heap of clothes on the floor: bouncy (belly flop it for a super bounce)
  clothesPile: () => [B(0, 0, 0, 2.8, 1.0, 2.8, { tag: 'clothesPile', type: 'bounce', surface: 'cloth' })],
  mopBucket: () => [B(0, 0, 0, 1.6, 1.6, 1.6, { tag: 'bucket', surface: 'plastic' })],
  dogFood: () => [B(0, 0, 0, 2.2, 2.6, 1.4, { tag: 'dogFood', surface: 'cloth' })],
  backDoor: (p) => [B(0, 0, 0, p.w || 4.4, p.h || 9.4, 0.3, { tag: 'gate' })],
  // decor
  clothesline: () => [], detergent: () => [], laundryRug: () => [],
};
