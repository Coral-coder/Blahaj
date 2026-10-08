// Mum and Dad's room: the big bed (they're asleep in it), nightstands, the
// dresser, a tall wardrobe and tallboy, a reading chair and the ceiling fan.
import { B } from './b.js';

export const PARENTS = {
  // the king-size bed: headboard at local -z, a springy mattress you can bounce on
  kingBed: (p) => { const w = p.w || 10, l = p.l || 11;
    return [B(0, 0, 0.2, w - 0.4, 2.2, l - 0.8, { tag: 'bedFrame', surface: 'wood' }), B(0, 2.2, 0.2, w - 0.4, 1.4, l - 0.8, { tag: 'mattress', type: 'bounce', surface: 'duvet' }), // no lip to snag on
      B(0, 0, -l / 2 + 0.25, w + 0.4, p.head || 7.0, 0.5, { tag: 'headboard', surface: 'cloth' })]; },
  blanketBox: (p) => [B(0, 0, 0, p.w || 6, p.h || 2.0, p.d || 1.8, { tag: 'blanketBox', surface: 'cloth' })],
  nightstand: (p) => [B(0, 0, 0, p.w || 2.4, p.h || 3.0, p.d || 2.2, { tag: 'nightstand', surface: 'wood' })],
  parentsDresser: (p) => { const w = p.w || 7, d = p.d || 2.4, h = p.h || 4.4;
    return [B(0, 0, 0, w, h, d, { tag: 'dresser', surface: 'wood' }), B(-w / 2 + 1.4, h, 0.2, 1.6, 1.0, 1.2, { tag: 'jewelryBox', surface: 'wood' })]; },
  bigWardrobe: (p) => [B(0, 0, 0, p.w || 6, p.h || 9.6, p.d || 2.4, { tag: 'wardrobe', surface: 'wood' })],
  tallboy: (p) => [B(0, 0, 0, p.w || 3, p.h || 6.6, p.d || 2.2, { tag: 'tallboy', surface: 'wood' })],
  readingChair: () => [B(0, 0, 0.3, 3.0, 2.0, 2.6, { tag: 'chairSeat', surface: 'cloth' }), B(0, 0, -1.2, 3.0, 5.0, 0.8, { tag: 'chairBack', surface: 'cloth' }),
    B(-1.35, 2.0, 0.3, 0.3, 1.0, 2.6, { tag: 'chairArm', surface: 'cloth' }), B(1.35, 2.0, 0.3, 0.3, 1.0, 2.6, { tag: 'chairArm', surface: 'cloth' })],
  // one blade of the ceiling fan (a mover going round and round)
  fanBlade: () => [B(0, 0, 0, 1.8, 0.2, 1.8, { tag: 'fanBlade', surface: 'wood' })],
  fanHub: (p) => [B(0, (p.top || 9.4) - 0.8, 0, 1.2, 0.8, 1.2, { tag: 'fanHub', surface: 'metal' })],
  // decor
  sleepers: () => [], slippers: () => [], bedRug: () => [], curtains: () => [], zzz: () => [],
};
