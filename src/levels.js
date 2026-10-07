// Level data. Pure data (no THREE) so tools/check-levels.js can verify
// every level is beatable with the abilities the player has at that point.
//
// Platforms: { x, y, z, w, d, h?, style, type?, move? }
//   y is the TOP surface. type: 'solid' | 'bounce' | 'crumble'
//   move: { dx, dy, dz, period, phase } oscillates around the start point
// Positions are [x, y, z]. The level flows toward -Z.

  const P = (x, y, z, w, d, style, extra = {}) => Object.assign({ x, y, z, w, d, style }, extra);
  const line = (a, b, n) => {
    const out = [];
    for (let i = 0; i < n; i++) {
      const t = n === 1 ? 0.5 : i / (n - 1);
      out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]);
    }
    return out;
  };
  // arc of fish over a jump: rises `h` in the middle
  const arc = (a, b, n, h = 2) => line(a, b, n).map((p, i) => {
    const t = n === 1 ? 0.5 : i / (n - 1);
    return [p[0], p[1] + Math.sin(t * Math.PI) * h, p[2]];
  });
  const ring = (c, r, n) => {
    const out = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      out.push([c[0] + Math.cos(a) * r, c[1], c[2] + Math.sin(a) * r]);
    }
    return out;
  };
  const col = (c, n, step = 1) => line(c, [c[0], c[1] + step * (n - 1), c[2]], n);
  const F = (...groups) => [].concat(...groups);

export const LEVELS = [
    // ------------------------------------------------------------------
    {
      id: 'bedroom',
      name: 'Cozy Bedroom',
      blurb: 'The floor is lava! Hop across the toys to bedtime.',
      theme: 'bedroom', music: 0,
      sky: ['#bfe3ff', '#ffe9f2'], fog: 0xffe9f2, fogFar: 140,
      floor: { y: -6, kind: 'goo', color: 0xff3d8f },
      spawn: [0, 0, 1.5],
      goal: [0, 5, -65.5],
      platforms: [
        P(0, 0, 0, 8, 8, 'rug'),
        P(0, 0, -8, 4, 4, 'books'),
        P(0, 1, -13, 4, 4, 'block'),
        P(0, 2, -18, 4, 4, 'block'),
        P(6, 3, -18, 2, 2, 'block'),
        P(0, 2, -25, 2, 8, 'wood'),
        P(0, 2, -34, 8, 6, 'rug'),
        P(0, 2, -41, 3, 3, 'wood', { move: { dx: 4, period: 4.5 } }),
        P(0, 2, -47, 4, 4, 'books'),
        P(-6, 0.5, -52, 3, 3, 'block'),
        P(0, 3, -52, 3, 3, 'block'),
        P(0, 4.5, -56, 3, 3, 'block'),
        P(0, 5, -63, 10, 8, 'bed'),
        P(4, 6.5, -60.5, 2, 2, 'cushion'),
      ],
      fish: F(line([0, 0.6, -1.5], [0, 0.6, -3.5], 3), arc([0, 0.6, -4.5], [0, 0.6, -6.5], 3, 1),
        arc([0, 0.6, -9], [0, 1.6, -12], 3, 1.2), arc([0, 1.6, -14], [0, 2.6, -17], 3, 1.2),
        line([0, 2.6, -22], [0, 2.6, -28], 5), ring([0, 2.6, -34], 2, 6),
        line([0, 2.6, -46], [0, 2.6, -48], 2), arc([0, 3.6, -52.5], [0, 5.1, -56], 3, 1.5),
        line([-3, 5.6, -61], [3, 5.6, -61], 4), [[-6, 1.1, -50.8], [-6, 1.1, -53.2]]),
      stars: [[6, 4, -18], [-6, 1.5, -52], [4, 7.6, -60.5]],
      hearts: [[3, 2.8, -32]],
      enemies: [{ type: 'bunny', x: -2.5, y: 2, z: -35, dx: 5, speed: 1.4 }],
      hazards: [{ x: 1.2, y: 2, z: -48.2, w: 1.2, d: 1.2 }],
      checkpoints: [[3, 2, -36]],
      signs: [
        { x: -2.6, y: 0, z: -2, text: 'WASD / arrows to swim\nSpace to jump!' },
        { x: 2.6, y: 0, z: -2.5, text: 'Hold Space to\njump higher' },
        { x: -3, y: 2, z: -32, text: 'Land on dust bunnies\nto bop them!' },
        { x: -1.6, y: 5, z: -60, text: 'Snuggle the pillow\nto finish!' },
      ],
      decor: [
        { type: 'plant', x: -8, y: -6, z: -14, s: 4 }, { type: 'block', x: 9, y: -6, z: -30, s: 4, color: 0xff9f43, letter: 'B' },
        { type: 'block', x: -10, y: -6, z: -40, s: 5, color: 0x6fc3df, letter: 'L' }, { type: 'block', x: 10, y: -6, z: -50, s: 3.5, color: 0x9fd86b, letter: 'Å' },
        { type: 'mug', x: 9, y: -6, z: -8, s: 3, color: 0xffd166 },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'kitchen',
      name: 'Kitchen Counter',
      blurb: 'Sponges, mugs and sliding chopping boards.',
      theme: 'kitchen', music: 1,
      sky: ['#ffe8a3', '#fff6e9'], fog: 0xfff6e9, fogFar: 150,
      floor: { y: -8, kind: 'goo', color: 0xe8352f },
      spawn: [0, 0, 1.5],
      goal: [0, 5, -82],
      platforms: [
        P(0, 0, 0, 8, 8, 'counter'),
        P(0, 0, -11, 4, 4, 'board'),
        P(8, -3, -11, 3, 3, 'sponge', { type: 'bounce' }),
        P(0, 2.5, -16, 2.5, 2.5, 'mug'),
        P(0, 2.5, -22, 6, 6, 'counter'),
        P(0, 2.5, -29, 3, 3, 'sponge', { type: 'bounce' }),
        P(0, 7, -34, 6, 4, 'shelf'),
        P(0, 7, -40, 3, 3, 'board', { move: { dx: 4, period: 3.5 } }),
        P(0, 7, -46.5, 3, 3, 'board', { move: { dx: 4, period: 3.5, phase: 0.5 } }),
        P(0, 7, -54, 6, 6, 'counter'),
        P(0, 4, -62, 4, 4, 'mug'),
        P(-8, 4, -62, 3, 3, 'sponge', { type: 'bounce' }),
        P(-8, 9, -66, 3, 3, 'shelf'),
        P(0, 4, -72, 4, 4, 'board'),
        P(0, 5, -80, 8, 8, 'counter'),
      ],
      fish: F(arc([0, 0.6, -4.5], [0, 0.6, -8.5], 5, 2.2), arc([0, 0.6, -13], [0, 3.1, -15], 3, 1.8),
        line([-2, 3.1, -20], [2, 3.1, -24], 4), col([0, 4, -29], 4, 1.2),
        arc([0, 7.6, -36.5], [0, 7.6, -52], 7, 1.5), ring([0, 7.6, -54], 2, 6),
        arc([0, 7.6, -57.5], [0, 4.6, -60.5], 3, 1.2), arc([0, 4.6, -64.5], [0, 4.6, -69.5], 5, 2.6),
        line([-2, 5.6, -78], [2, 5.6, -78], 3), col([8, -1, -11], 3, 1.2)),
      stars: [[8, 1.6, -11], [-8, 10, -66], [5.5, 9.5, -54]],
      hearts: [[0, 7.8, -56]],
      enemies: [
        { type: 'bunny', x: -2, y: 2.5, z: -22, dx: 4, speed: 1.6 },
        { type: 'bunny', x: 2, y: 7, z: -52.5, dx: -4, speed: 1.8 },
      ],
      hazards: [{ x: 2.2, y: 2.5, z: -24.2, w: 1.2, d: 1.2 }, { x: -2.2, y: 7, z: -56, w: 1.2, d: 1.2 }],
      checkpoints: [[2, 7, -34], [3, 5, -78]],
      signs: [
        { x: -2.6, y: 0, z: -2.5, text: 'NEW: Double jump!\nSpace again in the air' },
        { x: -2.2, y: 2.5, z: -26, text: 'Sponges are\nsuper bouncy!' },
      ],
      decor: [
        { type: 'mug', x: 10, y: -8, z: -20, s: 5, color: 0x6fc3df }, { type: 'mug', x: -11, y: -8, z: -45, s: 6, color: 0xff9f43 },
        { type: 'plant', x: 11, y: -8, z: -70, s: 5 }, { type: 'mug', x: -10, y: -8, z: -5, s: 4, color: 0xffb3c6 },
      ],
      extraPlatforms: [P(5.5, 8, -54, 2, 2, 'mug')],
    },
    // ------------------------------------------------------------------
    {
      id: 'shelf',
      name: 'Bookshelf Climb',
      blurb: 'Crumbly cookies, robo-vacuums and a long way up.',
      theme: 'shelf', music: 2,
      sky: ['#c9b6ff', '#ffe0f0'], fog: 0xf1dcff, fogFar: 150,
      floor: { y: -6, kind: 'goo', color: 0x9b3dff },
      spawn: [0, 0, 1.5],
      goal: [0, 16, -67],
      platforms: [
        P(0, 0, 0, 8, 8, 'shelf'),
        P(0, 1.5, -7, 4, 4, 'books'),
        P(0, 2.5, -12, 2.5, 2.5, 'cookie', { type: 'crumble' }),
        P(0, 3.5, -16.5, 2.5, 2.5, 'cookie', { type: 'crumble' }),
        P(0, 4.5, -21, 2.5, 2.5, 'cookie', { type: 'crumble' }),
        P(0, 5, -27, 8, 5, 'shelf'),
        P(-7, 5, -27, 2.5, 2.5, 'sponge', { type: 'bounce' }),
        P(0, 5, -33, 3, 3, 'sponge', { type: 'bounce' }),
        P(0, 12, -38, 8, 5, 'shelf'),
        P(0, 12, -46, 3, 3, 'books'),
        P(6, 9, -46, 3, 3, 'books'),
        P(0, 12, -52, 3, 3, 'books', { move: { dy: 2, period: 4 } }),
        P(0, 16, -58, 6, 6, 'shelf'),
        P(0, 16, -66, 8, 6, 'shelf'),
      ],
      crates: [{ x: 2.5, y: 5, z: -28.5, item: 'star' }, { x: 6, y: 9, z: -46, item: 'star' }, { x: -2.5, y: 12, z: -39.5, item: 'heart' }, { x: 1, y: 1.5, z: -7.5, item: 'fish' }],
      fish: F(arc([0, 2.1, -10], [0, 3.1, -12], 2, 1), arc([0, 3.1, -14], [0, 4.1, -16.5], 2, 1), arc([0, 4.1, -18.5], [0, 5.1, -21], 2, 1),
        line([-3, 5.6, -25.5], [3, 5.6, -25.5], 5), col([0, 7, -33], 6, 1.4), line([-3, 12.6, -37], [3, 12.6, -37], 4),
        line([0, 12.6, -44], [0, 12.6, -47.5], 3), col([0, 14, -52], 3, 1.2), ring([0, 16.6, -58], 2, 6), col([-7, 7, -27], 4, 1.5)),
      stars: [[-7, 13.5, -27]],
      hearts: [],
      enemies: [
        { type: 'roomba', x: -2.5, y: 5, z: -27, dx: 5, speed: 1.6 },
        { type: 'roomba', x: 2.5, y: 12, z: -38, dx: -5, speed: 1.8 },
        { type: 'bunny', x: -2, y: 16, z: -58, dx: 4, speed: 1.8 },
      ],
      hazards: [{ x: -2.8, y: 0, z: -2.8, w: 1.2, d: 1.2 }],
      checkpoints: [[3, 5, -29], [-3, 16, -59.5]],
      signs: [
        { x: -2.4, y: 0, z: -2, text: 'NEW: Belly flop!\nPress C in the air' },
        { x: 2.6, y: 0, z: -2.2, text: 'Flop on crates\nto crack them' },
        { x: -2.4, y: 5, z: -30, text: 'Flop on a sponge\nfor a SUPER bounce!' },
        { x: 3, y: 1.5, z: -5.5, text: 'Cookies crumble!\nKeep moving' },
      ],
      decor: [
        { type: 'block', x: 10, y: -6, z: -20, s: 6, color: 0xff7fa3, letter: 'H' }, { type: 'plant', x: -11, y: -6, z: -8, s: 5 },
        { type: 'block', x: -12, y: -6, z: -50, s: 7, color: 0x6fc3df, letter: 'A' }, { type: 'block', x: 12, y: -6, z: -60, s: 5, color: 0xffd166, letter: 'J' },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'rooftops',
      name: 'Rooftop Breeze',
      blurb: 'Big gaps above the clouds. Time to dash!',
      theme: 'rooftops', music: 3,
      sky: ['#ff9fb3', '#ffd9a0'], fog: 0xffd2b0, fogFar: 170,
      floor: { y: -10, kind: 'clouds', color: 0xffffff },
      spawn: [0, 0, 1.5],
      goal: [0, 11, -90],
      platforms: [
        P(0, 0, 0, 8, 8, 'roof'),
        P(0, 0, -14, 4, 4, 'roof'),
        P(0, 2, -19, 2.5, 2.5, 'chimney'),
        P(0, 4, -24, 2.5, 2.5, 'chimney'),
        P(0, 4, -32, 8, 6, 'roof'),
        P(15.5, 4, -32, 3, 3, 'cloud'),
        P(-7, 4, -32, 2.5, 2.5, 'sponge', { type: 'bounce' }),
        P(0, 4, -42, 3, 3, 'balloon', { move: { dx: 5, period: 5 } }),
        P(0, 5, -52, 3, 3, 'balloon', { move: { dx: 5, period: 5, phase: 0.5 } }),
        P(0, 5, -62, 6, 6, 'roof'),
        P(0, 5, -69, 3, 3, 'sponge', { type: 'bounce' }),
        P(0, 11, -75, 8, 6, 'roof'),
        P(0, 11, -89, 6, 6, 'roof'),
      ],
      crates: [{ x: 2.5, y: 11, z: -76.5, item: 'star' }, { x: -1.5, y: 5, z: -63.5, item: 'heart' }, { x: 2.5, y: 4, z: -33.5, item: 'fish' }],
      fish: F(line([0, 1.5, -5], [0, 1.5, -11], 6), arc([0, 0.6, -16], [0, 2.6, -18.5], 2, 1), arc([0, 2.6, -20.5], [0, 4.6, -23.5], 2, 1),
        ring([0, 4.6, -32], 2.2, 6), line([4.5, 5, -32], [13.5, 5, -32], 6), line([0, 5.6, -45], [0, 5.6, -49], 3),
        line([0, 5.6, -55.5], [0, 5.6, -59], 3), col([0, 7, -69], 4, 1.4), line([0, 12.5, -79], [0, 12.5, -85], 5)),
      stars: [[15.5, 5, -32], [-7, 12, -32]],
      hearts: [],
      enemies: [
        { type: 'bunny', x: -2.5, y: 4, z: -30.5, dx: 5, speed: 2 },
        { type: 'bunny', x: 2.5, y: 4, z: -33.5, dx: -5, speed: 2 },
        { type: 'roomba', x: -2, y: 11, z: -74, dx: 4, speed: 2 },
      ],
      hazards: [{ x: 2, y: 5, z: -61, w: 1.2, d: 1.2 }],
      checkpoints: [[-3, 4, -34], [-2, 5, -64]],
      signs: [
        { x: -2.5, y: 0, z: -2.5, text: 'NEW: Torpedo dash!\nPress Shift' },
        { x: 2.6, y: 0, z: -2.5, text: 'Jump, double jump,\nTHEN dash far!' },
      ],
      decor: [
        { type: 'cloud', x: 20, y: -4, z: -20, s: 2.5 }, { type: 'cloud', x: -22, y: 2, z: -50, s: 3 }, { type: 'cloud', x: 18, y: 6, z: -80, s: 2.5 },
        { type: 'cloud', x: -18, y: -6, z: -10, s: 2 }, { type: 'cloud', x: -5, y: 18, z: -110, s: 4 },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'dreamsea',
      name: 'Dream Sea',
      blurb: 'Glide over a sleepy, starry ocean.',
      theme: 'dreamsea', music: 4,
      sky: ['#1b1f4a', '#5a4b9c'], fog: 0x3b3a7a, fogFar: 160, night: true,
      floor: { y: -12, kind: 'sea', color: 0x123a7a },
      spawn: [0, 10, 1.5],
      goal: [0, 15, -110],
      platforms: [
        P(0, 10, 0, 8, 8, 'island'),
        P(0, 4, -22, 6, 6, 'island'),
        P(16, 8, -32, 3, 3, 'crystal'),
        P(0, 12, -40, 6, 6, 'island'),
        P(0, 12, -48, 3, 3, 'bubble', { move: { dy: 3, period: 5, phase: 0.25 } }),
        P(0, 18, -56, 6, 6, 'island'),
        P(0, 8, -82, 6, 6, 'island'),
        P(0, 8, -94, 4, 4, 'crystal', { move: { dx: 3, period: 4 } }),
        P(0, 8, -100, 3, 3, 'sponge', { type: 'bounce' }),
        P(0, 15, -108, 8, 8, 'island'),
      ],
      updrafts: [{ x: 0, z: -32, r: 1.8, y0: 2, y1: 14 }, { x: -9, z: -56, r: 1.6, y0: 12, y1: 26 }],
      crates: [{ x: 2, y: 4, z: -23.5, item: 'star' }, { x: -2, y: 18, z: -57.5, item: 'heart' }],
      fish: F(arc([0, 10.6, -4.5], [0, 5, -18.5], 8, 1.5), col([0, 5, -32], 6, 1.8), arc([0, 12.6, -42], [0, 13, -48], 3, 1.5),
        arc([0, 18.6, -59.5], [0, 9, -78.5], 9, 2), line([0, 8.6, -86], [0, 8.6, -92], 4), col([0, 10, -100], 4, 1.6),
        line([2.5, 9, -32], [13.5, 9, -32], 5), col([-9, 14, -56], 5, 2.4)),
      stars: [[16, 9, -32], [-9, 27, -56]],
      hearts: [[0, 8.8, -80]],
      enemies: [
        { type: 'bunny', x: -2, y: 12, z: -40, dx: 4, speed: 2 },
        { type: 'roomba', x: 2, y: 8, z: -81, dx: -4, speed: 2 },
        { type: 'bunny', x: -3, y: 15, z: -107, dx: 6, speed: 2.2 },
      ],
      hazards: [],
      checkpoints: [[2.5, 12, -41.5], [-2.5, 18, -54], [2.5, 8, -83.5]],
      signs: [
        { x: -2.5, y: 10, z: -2.5, text: 'NEW: Fin glide!\nHold Space while falling' },
        { x: 2.5, y: 4, z: -20, text: 'Ride the bubble\ncolumns up!' },
      ],
      decor: [
        { type: 'coral', x: -14, y: -12, z: -20, s: 6, color: 0xff7fa3 }, { type: 'coral', x: 14, y: -12, z: -60, s: 7, color: 0x7fe0c7 },
        { type: 'coral', x: -16, y: -12, z: -95, s: 6, color: 0xffd166 }, { type: 'cloud', x: 25, y: 20, z: -50, s: 3 },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'lagoon',
      name: 'Starlight Lagoon',
      blurb: 'Bonus! The ultimate shark obstacle course.',
      bonus: true,
      theme: 'lagoon', music: 2,
      sky: ['#0d3b66', '#36c5b8'], fog: 0x2c8c99, fogFar: 160, night: true,
      floor: { y: -10, kind: 'sea', color: 0x0d6b72 },
      spawn: [0, 0, 1.5],
      goal: [0, 18, -108],
      platforms: [
        P(0, 0, 0, 6, 6, 'island'),
        P(0, 1, -7, 2, 2, 'cookie', { type: 'crumble' }),
        P(3, 2, -11, 2, 2, 'cookie', { type: 'crumble' }),
        P(0, 3, -15, 2, 2, 'cookie', { type: 'crumble' }),
        P(-3, 4, -19, 2, 2, 'cookie', { type: 'crumble' }),
        P(0, 4, -27, 4, 4, 'crystal'),
        P(0, 4, -40, 3, 3, 'crystal'),
        P(0, 6, -48, 2.5, 2.5, 'bubble', { move: { dx: 5, period: 2.6 } }),
        P(0, 8, -55, 2.5, 2.5, 'bubble', { move: { dy: 3, period: 3 } }),
        P(0, 8, -62, 2.5, 2.5, 'sponge', { type: 'bounce' }),
        P(0, 15, -67, 4, 4, 'crystal'),
        P(0, 6, -90, 4, 4, 'island'),
        P(0, 18, -106, 6, 6, 'island'),
      ],
      updrafts: [{ x: 0, z: -97, r: 1.6, y0: 4, y1: 20 }],
      crates: [{ x: 1, y: 6, z: -91, item: 'heart' }],
      fish: F(arc([0, 0.6, -3], [0, 1.6, -7], 3, 1), arc([0, 1.6, -7], [3, 2.6, -11], 3, 1), arc([3, 2.6, -11], [0, 3.6, -15], 3, 1),
        arc([0, 3.6, -15], [-3, 4.6, -19], 3, 1), arc([-3, 4.6, -19], [0, 4.6, -27], 4, 1.5), line([0, 6, -30], [0, 6, -37], 5),
        line([-4, 6.6, -48], [4, 6.6, -48], 4), col([0, 10, -62], 4, 1.5), arc([0, 15.6, -69], [0, 7, -88], 8, 2), col([0, 7, -97], 6, 2.4),
        ring([0, 18.6, -106], 2.2, 8)),
      stars: [[-3, 6.5, -19], [0, 6, -33.5], [10, 11, -80]],
      hearts: [[0, 4.8, -27]],
      enemies: [
        { type: 'roomba', x: -1, y: 4, z: -27, dx: 2, speed: 1.4 },
        { type: 'bunny', x: -1.5, y: 6, z: -91, dx: 3, speed: 2.4 },
        { type: 'roomba', x: -2.5, y: 18, z: -104, dx: 5, speed: 2.4 },
      ],
      hazards: [{ x: 1.4, y: 15, z: -68.4, w: 1, d: 1 }, { x: -1.4, y: 4, z: -25.6, w: 1, d: 1 }],
      checkpoints: [[1.4, 4, -28.4], [-1.4, 15, -65.6], [-1.4, 6, -88.6]],
      signs: [{ x: 0, y: 0, z: -2.4, text: 'Bonus level!\nGood luck, brave shark' }],
      decor: [
        { type: 'coral', x: -12, y: -10, z: -30, s: 6, color: 0xff7fa3 }, { type: 'coral', x: 13, y: -10, z: -70, s: 7, color: 0xffd166 },
        { type: 'coral', x: -14, y: -10, z: -100, s: 6, color: 0x9f7fff },
      ],
    },
  ];

  // fold any extra platforms into the main list
  LEVELS.forEach((L) => {
    if (L.extraPlatforms) L.platforms = L.platforms.concat(L.extraPlatforms);
    L.crates = L.crates || [];
    L.updrafts = L.updrafts || [];
    L.hearts = L.hearts || [];
    L.hazards = L.hazards || [];
  });



