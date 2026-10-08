// Hand-authored routes through each chapter, used by tools/playtest.cjs.
const stairsRoute = () => {
  const r = [['walk', 2.0, 9.0], ['walk', -1.2, 9.2]];
  for (let i = 0; i < 13; i++) {
    const lane = i >= 9 ? -3.4 : -1.2;
    r.push(['jump', lane, +(0.815 * (i + 1)).toFixed(3), +(8 - 1.3 * (i + 0.5)).toFixed(2), { hold: 0.2, brake: 0.25 }]);
  }
  r.push(['jump', -1.0, 12.41, -9.4, { hold: 0.3 }]);
  r.push(['jump', -1.0, 11.4, -11.6, { double: true, hold: 0.35 }]);
  r.push(['walk', 2.4, -13.0]);
  return r;
};
const ROUTES = {
  edge: [['walk', 0.6, -4.8], ['walk', 2.6, -4.0], ['jump', 2.6, 0.95, -2.6], ['jump', 2.4, 0, -0.6], ['walk', 2.0, 1.4], ['jump', 2.4, 0.95, 2.4], ['jump', 3.2, 1.9, 3.5], ['jump', 4.6, 1.0, 3.5],
      ['jump', 5.4, 2.0, 3.5], ['jump', 6.1, 3.0, 3.5], ['jump', 7.1, 3.6, 3.4], ['walk', 7.4, 4.2], ['walk', 7.4, 1.9], ['snap'],
      ['jump', 7.7, 5.0, 0.6], ['jump', 7.5, 6.4, -1.4], ['snap'], ['walk', 7.5, -3.5], ['jump', 5.0, 4.6, -9.0, { hold: 0.4 }]],
  downstairs: [['walk', -7.2, -2.6], ['walk', -6.0, 0.6], ['walk', 2.0, 1.4], ['snap'], ['walk', 9.0, 4.6], ['walk', 12.2, 7.5]],
  kitchen: [['walk', -6.0, -3.6], ['walk', -5.0, 0.0], ['jump', -5.0, 2.05, 1.9, { double: true, hold: 0.3 }], ['jump', -5.4, 3.5, 4.8], ['walk', -7.2, 6.0],
    ['jump', -2.2, 0, 5.6], ['walk', -3.0, -3.4], ['walk', -4.0, -5.4], ['jump', -4.0, 1.2, -6.5], ['jump', -4.0, 2.4, -7.5], ['jump', -3.0, 4.1, -9.0],
    ['jump', -4.0, 5.4, -10.3], ['jump', -4.6, 4.1, -8.4], ['walk', -5.2, -8.3], ['jump', -6.4, 6.0, -8.7, { brake: 0.15 }], ['jump', -6.5, 8.6, -10.2, { double: true, hold: 0.35 }],
    ['jump', -8.6, 4.1, -8.8], ['walk', -7.4, -9.7], ['walk', -5.0, -9.7], ['walk', 0.6, -8.8], ['jump', 4.0, 4.1, -8.8], ['jump', 4.6, 6.7, -10.4, { double: true }],
    ['jump', 9.8, 8.6, -9.4, { double: true, hold: 0.35 }], ['walk', 11.0, -9.6], ['wait', 0.5],
    ['jump', 9.4, 0, -5.8], ['walk', 11.2, -5.2], ['jump', 12.6, 3.0, -5.6, { double: true }], ['jump', 9.6, 0, -2.0], ['walk', 3.3, 5.0], ['jump', 3.3, 3.4, 3.3, { double: true, up: 0.3 }], ['jump', 5.6, 0, 5.0], ['walk', 10.0, 4.0], ['walk', 13.2, 6.0]],
  laundry: [['walk', -4.0, 2.2], ['jump', -3.0, 3.2, 4.5, { double: true, up: 0.15 }], ['walk', -0.8, 4.5], ['jump', 3.0, 3.3, 6.2],
    ['jump', 2.0, 0, 2.6], ['walk', -6.6, -6.0], ['jump', -6.6, 2.6, -8.6, { double: true }], ['jump', -3.4, 4.0, -8.0], ['jump', -1.2, 7.2, -9.3, { double: true, up: 0.3 }],
    ['walk', -3.6, -9.4], ['jump', -6.0, 0, -6.0], ['walk', -9.4, -4.6], ['waitMover', -6.0, 7.5, 0, 0.3],
    ['jump', -6.0, 7.5, 0, { via: [-7.0, -3.4], flop: true, double: true, max: 6 }], ['jump', -10.8, 9.6, 2.6, { double: true, hold: 0.35 }], ['walk', -11.0, 4.0],
    ['walk', -10.6, 2.2], ['waitMover', -6.0, 7.5, 0, 0.3], ['jump', -6.0, 7.5, 0, { dashNow: true, brake: 0.6 }], ['waitMover', 6.6, 7.5, 0, 0.3],
    ['jump', 11.2, 7.4, -1.4, { double: true }], ['walk', 11.4, -2.6], ['wait', 0.6], ['jump', 9.0, 0, 1.0], ['walk', 11.4, 5.0]],
  backyard: [['walk', -10.4, -11.2], ['jump', -9.2, 1.8, -12.7], ['jump', -6.6, 4.2, -12.4, { double: true }], ['wait', 0.3],
    ['jump', -4.0, 0, -9.0], ['walk', -4.3, 1.0], ['jump', 2.8, 0, 0.4, { via: [-1.0, 1.0], double: true, up: 0.75, max: 7 }], ['jump', 2.8, 3.0, -2.8, { double: true, up: 0.2 }],
    ['jump', 6.4, 5.8, -0.6, { double: true }], ['jump', 9.2, 8.4, -3.6, { double: true }],
    ['jump', 8.4, 11.2, -7.0, { double: true }], ['walk', 9.0, -6.4], ['jump', 12.2, 8.0, 9.6, { double: true, glide: true, max: 9 }],
    ['jump', 7.4, 0, 7.0], ['walk', 0.0, 7.6], ['walk', -5.0, 6.6], ['jump', -5.0, 1.85, 8.6], ['jump', -5.0, 3.3, 10.6, { double: true }],
    ['jump', -9.8, 6.0, 10.4, { double: true }], ['jump', -10.0, 8.0, 6.0, { double: true }], ['jump', -10.0, 0, 2.0],
    ['walk', -6.0, -4.6], ['walk', 3.0, -6.6], ['walk', 11.0, -7.4], ['walk', 14.6, -9.0]],
  garage: [['walk', -8.6, 3.4], ['jump', -8.6, 1.6, 0.6], ['jump', -5.0, 3.0, 0.4], ['jump', -4.0, 5.2, -3.8, { double: true }], ['walk', -4.0, -4.3],
    ['walk', -5.6, -3.8], ['jump', -13.8, 7.6, -4.0, { double: true, glide: true, max: 6 }], ['wait', 0.3],
    ['jump', -9.0, 0, 4.0], ['walk', -2.6, 7.6], ['jump', -1.0, 1.8, 9.6], ['jump', 1.4, 4.0, 9.0, { double: true }], ['walk', 2.0, 8.6],
    ['jump', 2.0, 7.2, 10.3, { double: true, up: 0.25 }], ['walk', 9.0, 10.3],
    ['jump', 13.6, 9.0, 2.0, { double: true, glide: true, dash: true, max: 7 }], ['walk', 13.9, 1.6], ['wait', 0.6],
    ['jump', 10.8, 10.6, -6.4, { double: true, glide: true, max: 6 }], ['walk', 10.4, -7.5],
    ['jump', 13.0, 5.4, -9.2, { max: 6 }], ['jump', 9.0, 0, -4.0], ['walk', 11.0, 5.0], ['walk', 14.4, 6.5]],
  basement: [['updraft', -2.0, -6.6, -1.0, 10.8, -9.0, { rise: 11.4 }], ['walk', 8.8, -9.0], ['jump', 11.6, 8.6, -9.6], ['wait', 0.2],
    ['jump', 13.3, 7.6, -3.6], ['walk', 13.6, -3.2], ['jump', 11.6, 9.4, -3.2, { double: true, up: 0.15 }], ['walk', -4.0, -3.2], ['walk', 5.0, -3.2],
    ['jump', 5.0, 6.0, 1.4, { max: 6 }], ['wait', 0.2], ['jump', 7.0, 0, 6.6, { max: 6 }], ['walk', 9.0, 7.6],
    ['waitMover', 9.0, 0.3, 9.8, 0.3], ['walk', 9.0, 9.8, 0.4], ['waitMover', 9.0, 9.0, 9.8, 0.2], ['walk', 12.6, 9.8]],
  stairs: stairsRoute(),
  hallway: [['walk', 3.0, 16.6], ['jump', 2.4, 0, 12.6, { via: [6.0, 16.6], flop: true, up: 0.8, max: 7 }],
    ['walk', -3.2, 7.4], ['jump', -6.0, 2.8, 7.6, { double: true }], ['jump', -6.0, 5.6, 4.6, { double: true, up: 0.2 }],
    ['jump', -6.0, 8.4, 1.4, { double: true, up: 0.2 }], ['walk', -5.6, 0.6],
    ['jump', 6.4, 6.4, -2.4, { double: true, glide: true, max: 7 }], ['walk', 6.5, -3.4], ['walk', 6.5, -5.4], ['jump', 6.5, 8.0, -9.0, { double: true }], ['walk', 6.5, -13.6],
    ['jump', 5.9, 8.6, -16.6], ['walk', 5.9, -17.2], ['walk', 5.2, -15.0], ['jump', -6.0, 7.0, -10.0, { double: true, glide: true, max: 7 }], ['walk', -6.2, -10.0],
    ['jump', -2.0, 0, -16.0], ['walk', 0, -20.6]],
  bathroom: [['walk', 7.6, -3.4], ['jump', 7.9, 3.0, -5.7, { double: true }], ['walk', 7.9, -7.6], ['walk', 7.9, -5.7], ['walk', 4.0, -5.7],
    ['waitMover', 4.0, 3.6, -7.0, 0.3], ['jump', 4.0, 3.6, -7.0], ['waitMover', 4.0, 9.4, -7.0, 0.3], ['wait', 0.3],
    ['jump', 11.05, 7.6, 0.6, { double: true, glide: true, max: 7 }], ['walk', 11.0, 1.0], ['jump', 7.6, 0, 4.0],
    ['walk', -6.6, 5.6], ['jump', -9.6, 2.2, 5.6, { double: true }], ['jump', -11.2, 4.0, 5.6], ['jump', -11.4, 7.0, 3.0, { double: true, up: 0.2 }], ['wait', 0.2],
    ['jump', -7.0, 0, 0.0], ['walk', -7.0, -2.4], ['walk', -7.0, -5.0], ['updraft', -9.6, -7.6, -4.0, 0, -1.0, { rise: 9.9 }], ['walk', -11.0, -0.8]],
  parents: [['walk', 7.6, 7.4], ['jump', 10.0, 2.0, 7.4, { double: true }], ['jump', 11.8, 5.0, 7.4, { double: true, up: 0.2 }], ['wait', 0.2],
    ['jump', 7.1, 5.4, 10.4, { double: true }], ['jump', 3.0, 0, 6.0], ['walk', 0.0, 3.2], ['jump', 0.0, 1.7, 0.2],
    ['jump', 0.0, 9.4, 4.0, { via: [0.0, -2.4], flop: true, up: 0.3, glide: true, double: true, djAt: -1, max: 7 }], ['wait', 0.2],
    ['waitMover', 3.0, 8.8, 4.0, 0.7], ['jump', 3.2, 8.8, 4.0, { max: 6 }], ['jump', 0.0, 1.7, 0.4, { max: 6 }], ['jump', -6.4, 0, 1.6], ['walk', -6.6, -7.2], ['jump', -6.6, 3.0, -10.4, { double: true }],
    ['jump', 6.6, 3.0, -10.6, { via: [0.0, -10.9], flop: true, up: 1.0, max: 8 }], ['wait', 0.3], ['updraft', 2.3, -8.8, -7.4, 0, -3.0, { noWalk: true, rise: 10.4 }],
    ['walk', -7.6, 6.0], ['jump', -12.8, 6.6, 8.0, { via: [-9.8, 8.0], flop: true, max: 7 }], ['jump', -12.8, 9.6, 4.6, { double: true }], ['walk', -12.8, 3.0],
    ['jump', -10.6, 0, -4.0, { glide: true, double: true, max: 7 }], ['walk', -13.0, -6.0]],
  bed: [['walk', 4.0, 4.6], ['jump', 4.9, 1.0, 4.0], ['jump', 6.0, 3.0, 4.0, { double: true }], ['jump', 7.2, 3.6, 3.6], ['walk', 7.4, 4.2], ['walk', 7.4, 1.9],
      ['jump', 7.7, 5.0, 0.6], ['jump', 7.5, 6.4, -1.6], ['walk', 7.6, -1.6], ['snap'], ['jump', -3.6, 4.5, -2.4, { double: true, glide: true, dash: true, hold: 0.35, max: 8 }], ['snap'], ['knots'], ['snap'], ['walk', -5.0, -6.6]],
};
module.exports = ROUTES;
