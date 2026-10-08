// The bathroom: a bubble bath, the vanity and mirror cabinet, the loo, the
// shower stall full of steam, and soap bubbles big enough to ride.
import { B } from './b.js';

export const BATHROOM = {
  // the bath: four rims you can walk along, filled with springy bubble-bath foam
  bathtub: (p) => { const w = p.w || 9, d = p.d || 4.2, h = p.h || 3.0, t = 0.4;
    return [B(0, 0, d / 2 - t / 2, w, h, t, { tag: 'tubRim', surface: 'ceramic' }), B(0, 0, -d / 2 + t / 2, w, h, t, { tag: 'tubRim', surface: 'ceramic' }),
      B(-w / 2 + t / 2, 0, 0, t, h, d - 2 * t, { tag: 'tubRim', surface: 'ceramic' }), B(w / 2 - t / 2, 0, 0, t, h, d - 2 * t, { tag: 'tubRim', surface: 'ceramic' }),
      B(0, 0, 0, w - 2 * t, p.foam || 2.2, d - 2 * t, { tag: 'foam', type: 'bounce', surface: 'foam' })]; },
  // a soap bubble big enough to stand on (a mover that drifts up and down)
  soapBubble: () => [B(0, 0, 0, 1.8, 1.2, 1.8, { tag: 'bubble', surface: 'bubble' })],
  vanity: (p) => { const w = p.w || 6, d = p.d || 2.6, h = p.h || 4.2, sh = p.shelf || 7.6;
    return [B(0, 0, 0, w, h, d, { tag: 'vanity', surface: 'ceramic' }), B(0, sh - 0.2, -d / 2 + 0.7, w * 0.8, 0.2, 1.4, { tag: 'mirrorShelf', surface: 'glass' }),
      B(0, sh + 0.4, -d / 2 + 0.25, w * 0.8, 2.6, 0.5, { tag: 'mirrorCabinet', surface: 'wood' }),
      B(-w / 2 + 0.8, h, 0, 0.8, 1.0, 0.8, { tag: 'toothCup', surface: 'ceramic' })]; }, // the toothbrush cup is a step up to the shelf
  toilet: () => [B(0, 0, 0.4, 2.0, 2.2, 2.4, { tag: 'toiletSeat', surface: 'ceramic' }), B(0, 0, -1.0, 2.4, 4.0, 1.0, { tag: 'cistern', surface: 'ceramic' })],
  // a shower stall: glass on two sides (with a gap to walk in) and a caddy of shelves
  shower: (p) => { const w = p.w || 6.4, d = p.d || 6.4, h = p.h || 8.0, gap = p.gap || 2.6;
    return [B(w / 2 - 0.1, 0, 0, 0.2, h, d, { tag: 'glass' }), B(-gap / 2, 0, d / 2 - 0.1, w - gap, h, 0.2, { tag: 'glass' }),
      B(-w / 2 + 0.5, 3.2, -1.2, 1.0, 0.2, 2.4, { tag: 'caddy', surface: 'metal' }), B(-w / 2 + 0.5, 5.8, -1.2, 1.0, 0.2, 2.4, { tag: 'caddy', surface: 'metal' })]; },
  towelShelf: (p) => [B(0, (p.top || 7.0) - 0.25, 0, p.w || 4, 0.25, p.d || 1.2, { tag: 'towelShelf', surface: 'wood' })],
  toiletRolls: () => [B(0, 0, 0, 1.4, 1.8, 1.4, { tag: 'rolls', surface: 'paper' })],
  // decor
  bathMat: () => [], bathScale: () => [], bathPlant: () => [], duckFamily: () => [],
};
