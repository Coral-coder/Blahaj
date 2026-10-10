// The attic: rafters and tie beams to walk along, old trunks and boxes, the
// old wardrobe, a rocking chair and a floor hatch. Home of the Moth Queen.
import { B } from './b.js';

export const ATTIC = {
  // a tie beam across the attic (long along local z), walkable on top
  tieBeam: (p) => [B(0, (p.top || 8.6) - 0.5, 0, p.w || 0.9, 0.5, p.l || 14, { tag: 'beam', surface: 'wood' })],
  // a plank laid along the beams (long along local x)
  plank: (p) => [B(0, (p.top || 8.6) - 0.2, 0, p.l || 18, 0.2, p.w || 1.0, { tag: 'plank', surface: 'wood' })],
  kingpost: (p) => [B(0, p.y0 || 8.6, 0, 0.7, (p.top || 10.8) - (p.y0 || 8.6), 0.7, { tag: 'kingpost', surface: 'wood' })],
  trunk: (p) => [B(0, p.y0 || 0, 0, p.w || 3.0, p.h || 2.2, p.d || 2.0, { tag: 'trunk', surface: 'wood' })],
  oldWardrobe: (p) => [B(0, 0, 0, p.w || 4, p.h || 6.6, p.d || 2.4, { tag: 'oldWardrobe', surface: 'wood' })],
  rockingChair: () => [B(0, 0, 0.2, 2.2, 2.0, 2.0, { tag: 'chairSeat', surface: 'wood' }), B(0, 2.0, -0.8, 2.2, 2.6, 0.4, { tag: 'chairBack', surface: 'wood' })],
  // decor
  roofSlope: () => [], floorHatch: () => [], dressForm: () => [], oldCrib: () => [], atticLamp: () => [], dustMotes: () => [], sheetedMirror: () => [],
};
