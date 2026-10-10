// The basement: open wooden stairs, the furnace and its ducts, the water
// heater, the train-set table, pipes under the ceiling and the old dumbwaiter.
import { B } from './b.js';

export const BASEMENT = {
  // open wooden stairs climbing toward local -z; rail: which side the banister is on
  basementStairs: (p) => {
    const n = p.n || 10, rise = p.rise || 0.8, run = p.run || 1.3, w = p.w || 4.5, rs = p.rail || 1, out = [];
    for (let i = 0; i < n; i++) {
      out.push(B(0, 0, -(i + 0.5) * run, w, rise * (i + 1), run, { tag: 'step', step: i, surface: 'wood' }));
      out.push(B(rs * (w / 2 + 0.12), rise * (i + 1), -(i + 0.5) * run, 0.24, 3.0, run, { tag: 'banister' }));
    }
    return out;
  },
  furnace: (p) => [B(0, 0, 0, p.w || 5, p.h || 6.5, p.d || 3.6, { tag: 'furnace', surface: 'metal' }), B(0, p.h || 6.5, -0.3, 1.8, (p.riser || 3.7), 1.6, { tag: 'riser', surface: 'metal' })],
  duct: (p) => [B(0, p.y0 || 10, 0, p.w || 10, p.h || 1.0, p.d || 1.8, { tag: 'duct', surface: 'metal' })],
  waterHeater: (p) => [B(0, 0, 0, 3.2, p.h || 8.6, 3.2, { tag: 'heater', surface: 'metal' })],
  // the train table with a papier-mâché mountain in the middle
  trainTable: (p) => { const w = p.w || 10, d = p.d || 6, h = p.h || 3.0;
    return [B(0, h - 0.3, 0, w, 0.3, d, { tag: 'trainTable', surface: 'cloth' }), B(0, h, 0, 3.2, p.mountain || 3.0, 2.4, { tag: 'mountain', surface: 'rock' }),
      ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sz]) => B(sx * (w / 2 - 0.3), 0, sz * (d / 2 - 0.3), 0.3, h - 0.3, 0.3, { tag: 'tableLeg' }))]; },
  // the toy train: a little engine that chugs round the table (a mover you can ride)
  toyTrain: () => [B(0, 0, 0, 1.6, 0.9, 1.6, { tag: 'train', surface: 'metal' })],
  pingPong: (p) => { const w = p.w || 8, d = p.d || 4.4, h = p.h || 3.0;
    return [B(0, h - 0.2, 0, w, 0.2, d, { tag: 'pingPong', surface: 'wood' }), B(0, h, 0, 0.1, 0.5, d + 0.3, { tag: 'net' }),
      ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sz]) => B(sx * (w / 2 - 0.5), 0, sz * (d / 2 - 0.5), 0.3, h - 0.2, 0.3, { tag: 'tableLeg' }))]; },
  // an old sofa under a dust sheet: springy seat, back along local -z
  sheetCouch: (p) => { const w = p.w || 7, d = p.d || 3;
    return [B(0, 0, 0.3, w, 1.8, d - 0.6, { tag: 'couchSeat', type: 'bounce', surface: 'cloth' }), B(0, 0, -d / 2 + 0.4, w, 3.6, 0.8, { tag: 'couchBack', surface: 'cloth' })]; },
  // two pipes side by side under the ceiling, wide enough to tightrope along
  pipes: (p) => [B(0, (p.top || 9.4) - 0.9, 0, p.w || 20, 0.9, p.d || 1.1, { tag: 'pipes', surface: 'metal' })],
  // the dumbwaiter's little lift (a mover going up and down its shaft)
  dumbwaiter: () => [B(0, 0, 0, 2.4, 0.3, 2.4, { tag: 'lift', surface: 'wood' })],
  // decor
  liftShaft: () => [], post: () => [], bareBulb: () => [], cobweb: () => [], sumpGrate: () => [], hatch: () => [],
};
