// The garage: the family car, the workbench, shelves, boxes and the junk up on
// the ceiling rack. Local +z is the front of each prop.
import { B } from './b.js';

export const GARAGE = {
  // the minivan: climb the bonnet, then the long roof (its front is local +z)
  car: (p) => { const L = p.l || 10.4, W = p.w || 4.8;
    return [B(0, 0, 0, W, 3.0, L, { tag: 'carBody', surface: 'metal' }), B(0, 3.0, -(L / 2 - 0.65 - 1.0) / 2, W - 0.6, 2.35, L / 2 - 0.65 + 1.0, { tag: 'carRoof', surface: 'metal' })]; },
  // a long workbench with a shelf above the pegboard
  workbench: (p) => { const w = p.w || 9, d = p.d || 2.6, h = p.h || 4.0, sy = p.shelf || 7.2;
    return [B(0, h - 0.3, 0, w, 0.3, d, { tag: 'bench', surface: 'wood' }), B(-w / 2 + 0.2, 0, 0, 0.3, h - 0.3, d - 0.3, { tag: 'benchLeg' }), B(w / 2 - 0.2, 0, 0, 0.3, h - 0.3, d - 0.3, { tag: 'benchLeg' }),
      B(0, sy - 0.2, -d / 2 + 0.7, w, 0.2, 1.4, { tag: 'benchShelf', surface: 'wood' })]; },
  locker: (p) => [B(0, 0, 0, p.w || 3.0, p.h || 9.0, p.d || 2.0, { tag: 'locker', surface: 'metal' })],
  cardboardBox: (p) => [B(0, p.y0 || 0, 0, p.w || 2.4, p.h || 1.8, p.d || 2.4, { tag: 'box', surface: 'cardboard' })],
  // a storage rack hung from the ceiling joists
  ceilingRack: (p) => [B(0, (p.top || 10.6) - 0.25, 0, p.w || 8, 0.25, p.d || 4.2, { tag: 'storageRack', surface: 'metal' })],
  lawnmower: () => [B(0, 0, 0, 2.6, 2.0, 3.0, { tag: 'mower', surface: 'metal' })],
  tireStack: (p) => [B(0, 0, 0, 2.6, (p.n || 2) * 0.8, 2.6, { tag: 'tires', surface: 'rubber' })],
  // the toy chest of drawers on castors: rolls back and forth (a mover)
  toolCart: () => [B(0, 0, 0, 2.2, 3.2, 1.4, { tag: 'toolCart', surface: 'metal' })],
  // decor
  garageDoor: () => [], leafBlower: () => [], wallBike: () => [], paintCans: () => [], oilStain: () => [], shopLight: () => [], pegboard: () => [],
};
