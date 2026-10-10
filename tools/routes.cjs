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
  0: [['walk', 0.6, -4.8], ['walk', 2.6, -4.0], ['jump', 2.6, 0.95, -2.6], ['jump', 2.4, 0, -0.6], ['walk', 2.0, 1.4], ['jump', 2.4, 0.95, 2.4], ['jump', 3.2, 1.9, 3.5], ['jump', 4.6, 1.0, 3.5],
      ['jump', 5.4, 2.0, 3.5], ['jump', 6.1, 3.0, 3.5], ['jump', 7.1, 3.6, 3.4], ['walk', 7.4, 4.2], ['walk', 7.4, 1.9], ['snap'],
      ['jump', 7.7, 5.0, 0.6], ['jump', 7.5, 6.4, -1.4], ['snap'], ['walk', 7.5, -3.5], ['jump', 5.0, 4.6, -9.0, { hold: 0.4 }]],
  1: [['walk', -7.2, -2.6], ['walk', -6.0, 0.6], ['walk', 2.0, 1.4], ['snap'], ['go', 9.0, 4.6], ['walk', 12.2, 7.5]],
  2: stairsRoute(),
  3: [['walk', 4.0, 4.6], ['jump', 4.9, 1.0, 4.0], ['jump', 6.0, 3.0, 4.0, { double: true }], ['jump', 7.2, 3.6, 3.6], ['walk', 7.4, 4.2], ['walk', 7.4, 1.9],
      ['jump', 7.7, 5.0, 0.6], ['jump', 7.5, 6.4, -1.6], ['walk', 7.6, -1.6], ['snap'], ['jump', -3.6, 4.5, -2.4, { double: true, glide: true, dash: true, hold: 0.35, max: 8 }], ['snap'], ['knots'], ['snap'], ['walk', -5.0, -6.6]],
};
// every chapter starts by hunting down the nightmares on the floor (the way out stays shut until they're poofed)
for (const k in ROUTES) ROUTES[k].unshift(['poof']);
module.exports = ROUTES;
