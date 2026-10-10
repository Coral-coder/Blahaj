// Kitchen furniture as collision boxes (local +z is the front). 1 unit ≈ 22 cm.
import { B } from './b.js';

export const KITCHEN = {
  // a run of base cabinets with a stone worktop (sink and hob are only drawn)
  counter: (p) => [B(0, 0, 0, p.w || 8, p.h || 4.1, p.d || 2.9, { tag: 'counter', surface: 'stone' })],
  island: (p) => [B(0, 0, 0, p.w || 6, p.h || 4.1, p.d || 3.2, { tag: 'island', surface: 'stone' })],
  // wall cupboards: you can stand on top of them (and on the open shelf under them)
  upperCabinet: (p) => [B(0, p.y0 || 6.6, 0, p.w || 6, p.h || 2.8, p.d || 1.6, { tag: 'upper', surface: 'wood' })],
  fridge: (p) => [B(0, 0, 0, p.w || 4.2, p.h || 8.6, p.d || 3.4, { tag: 'fridge', surface: 'metal' })],
  stool: (p) => [B(0, (p.h || 3.4) - 0.25, 0, 1.6, 0.25, 1.6, { tag: 'stool', surface: 'wood' }), B(0, 0, 0, 0.35, (p.h || 3.4) - 0.25, 0.35, { tag: 'stoolLeg' })],
  diningTable: (p) => {
    const w = p.w || 7.4, d = p.d || 4.4, h = p.h || 3.5;
    const legs = [[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sz]) => B(sx * (w / 2 - 0.35), 0, sz * (d / 2 - 0.35), 0.35, h - 0.25, 0.35, { tag: 'tableLeg' }));
    return [B(0, h - 0.25, 0, w, 0.25, d, { tag: 'table', surface: 'wood' }), ...legs];
  },
  toaster: () => [B(0, 0, 0, 1.4, 1.0, 0.9, { tag: 'toaster', surface: 'metal' })],
  cereal: (p) => [B(0, 0, 0, p.w || 1.3, p.h || 1.9, 0.55, { tag: 'cereal', surface: 'cardboard' })],
  jar: (p) => [B(0, 0, 0, (p.r || 0.45) * 1.8, p.h || 1.2, (p.r || 0.45) * 1.8, { tag: 'jar', surface: 'glass' })],
  // Leo's two-step stool in front of the sink
  stepStool: () => [B(0, 0, 0.5, 2.2, 1.2, 1.0, { tag: 'stepLow', surface: 'wood' }), B(0, 0, -0.5, 2.2, 2.4, 1.0, { tag: 'stepHigh', surface: 'wood' })],
  // a tall pet gate across a doorway (too tall to hop over)
  petGate: (p) => [B(0, 0, 0, p.w || 4.6, p.h || 5.2, 0.25, { tag: 'gate' })],
  // a kitchen bin with a pedal
  pedalBin: () => [B(0, 0, 0, 1.6, 3.0, 1.6, { tag: 'bin', surface: 'metal' })],
  breadBin: () => [B(0, 0, 0, 2.0, 1.2, 1.3, { tag: 'breadBin', surface: 'wood' })],
  // decor (no collision): hood, bowls, rug runner, fruit, magnets
  rangeHood: () => [], petBowls: () => [], kitchenRug: () => [], fruitBowl: () => [], wallClock: () => [], hangingPots: () => [],
};
