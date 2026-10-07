// The story campaign. Pure data: rooms, furniture, light, pickups, enemies.
// Rule of the night: dark FLOOR feeds the nightmare. Light, rugs and anything
// you can climb onto are safe.
const line = (a, b, n) => Array.from({ length: n }, (_, i) => {
  const t = n === 1 ? 0.5 : i / (n - 1);
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
});
const arc = (a, b, n, h = 1.5) => line(a, b, n).map((p, i) => [p[0], p[1] + Math.sin((n === 1 ? 0.5 : i / (n - 1)) * Math.PI) * h, p[2]]);
const F = (...g) => [].concat(...g);

export const BEDROOM = {
  id: 'bedroom', x0: -8.2, x1: 8.2, z0: -9.5, z1: 9.5, h: 11.4, floor: 'wood', wall: 'kidsWall',
  doors: [{ wall: '+z', at: 4.6, w: 3.8, h: 9.1 }],
  windows: [{ wall: '-z', at: 3.5, w: 5.8, y0: 4.6, y1: 9.8, sill: 0.9 }],
};
const BED = { type: 'cabinBed', x: -5.45, z: -4.95, rot: 0 };
const BEDSIDE = { type: 'bedsideTable', x: -1.45, z: -8.45 };
const DESK = { type: 'desk', x: 3.75, z: -8.15, rot: 0 };
const BOOKCASE = { type: 'bookcase', x: 7.5, z: -2.2, rot: 3 };
const WALLSHELF = { type: 'wallShelf', x: 7.7, z: 0.55, rot: 3, w: 1.7, d: 1, y: 5 };
const WARDROBE = { type: 'wardrobe', x: -6.9, z: 6.6, rot: 1 };

export const CHAPTERS = [
  // ---------------------------------------------------------------------------
  {
    id: 'edge', title: 'Off the Edge', room: BEDROOM, music: 0,
    goalText: 'Climb back up to Leo',
    intro: 'prologue', outro: 'dog',
    abilities: {}, // just a hop: double jump is learned downstairs
    spawn: [0.0, 0, -5.9], spawnYaw: Math.PI / 2, camYaw: 0.95,
    drain: 0.8,
    props: [
      BED, BEDSIDE, DESK, BOOKCASE, WALLSHELF, WARDROBE,
      { type: 'chair', x: -3.4, z: 5.2, rot: 1 },
      { type: 'dresser', x: 7.3, z: 3.5, rot: 3, drawers: [{ y0: 0.2, h: 0.8, out: 2.4 }, { y0: 1.15, h: 0.85, out: 1.4 }, { y0: 2.2, h: 0.8, out: 0.6 }] },
      { type: 'toyBox', x: -1.5, z: 8.4, rot: 2 },
      { type: 'laundry', x: 2.0, z: 7.8 },
      { type: 'blocks', x: 0, z: 0, towers: [[2.4, 2.4, 1], [3.2, 3.5, 2], [2.6, -2.6, 1]] },
      { type: 'books', x: 0.9, z: -1.6, w: 1.6, h: 1.0, d: 2.0 },
      { type: 'ball', x: 6.9, z: 8.3 },                   // a bouncy way up onto the dresser
      { type: 'lego', x: 4.7, z: -1.4, w: 1.6, d: 1.6 }, { type: 'lego', x: 5.6, z: 0.6, w: 1.2, d: 1.4 },
      { type: 'lego', x: 2.4, z: 5.4, w: 1.4, d: 1.2 }, { type: 'lego', x: -0.6, z: 6.0, w: 1.2, d: 1.2 },
      { type: 'rug', x: -0.8, z: 1.6, w: 6.4, d: 5.2 },
      { type: 'toyScatter', x: 0, z: 0, seed: 1 },
    ],
    safe: [
      { x: -1.6, z: -6.4, r: 3.2 },                         // nightlight on the bedside table
      { x: 1.8, z: -5.0, r: 1.7 }, { x: 3.6, z: -5.0, r: 1.7 }, { x: 5.4, z: -4.8, r: 1.5 }, // moonlight
      { x0: -4.0, z0: -1.0, x1: 2.4, z1: 4.2 },              // the rug is cozy
    ],
    lamps: [
      { x: -1.45, y: 2.7, z: -8.45, on: true, kind: 'nightlight', safe: null },
      { x: 7.6, y: 3.6, z: 4.6, kind: 'deskLamp', safe: { x: 5.3, z: 3.6, r: 2.6 } },
    ],
    fish: F(
      line([-0.2, 0.6, -5.2], [1.4, 0.6, -5.0], 3), line([2.6, 0.6, -5.0], [4.8, 0.6, -4.6], 3),
      arc([2.6, 1.6, -2.6], [2.6, 1.6, -1.2], 2, 0.6), line([0, 0.6, 0.4], [-2.6, 0.6, 2.6], 4),
      [[2.4, 1.6, 2.4], [3.2, 2.5, 3.5]], line([4.6, 1.6, 3.5], [5.3, 2.6, 3.5], 2), [[6.0, 3.6, 3.5]],
      line([7.3, 4.4, 4.6], [7.3, 4.4, 2.2], 3), [[7.7, 5.7, 0.6]], line([7.5, 7.1, -1.0], [7.5, 7.1, -3.4], 3),
      arc([7.4, 7.0, -4.6], [4.4, 5.4, -8.6], 5, 1.4), line([-3.4, 2.5, 5.2], [-3.4, 3.3, 5.2], 2),
      line([-1.2, 2.6, 8.4], [-2.0, 2.6, 8.4], 2), [[-4.4, 2.4, 3.2]]),
    starfish: [[-1.45, 3.6, -8.45], [2.0, 5.8, 7.8], [7.5, 7.2, -3.6]],
    enemies: [
      { type: 'shadow', path: [[4.4, 0, -2.6], [5.6, 0, 1.4], [3.6, 0, 0.0]], speed: 1.4 },
      { type: 'shadow', path: [[-3.6, 0, 6.6], [0.6, 0, 6.2]], speed: 1.2 },
      { type: 'shadow', path: [[-0.4, 0, -3.0], [-0.4, 0, -1.6]], speed: 0.8 },
    ],
    bunnies: [[-3.0, 0, 4.9], [2.2, 0, -7.6], [-2.2, 0, 0.6]],
    goal: { x: -4.3, y: 4.6, z: -6.1, r: 1.8, label: 'Leo' },        // the whole climb ends back in Leo's arms…
    route: ['moon', 'blocks', 'drawer1', 'drawer2', 'drawer3', 'dresser', 'shelf', 'bookcase', 'sill'],
  },
  // ---------------------------------------------------------------------------
  {
    id: 'downstairs', title: 'Downstairs', music: 1,
    goalText: 'Find the stairs back up',
    intro: 'downstairs', newAbility: ['doubleJump', 'flop'],
    room: {
      id: 'living', x0: -13, x1: 13, z0: -12, z1: 12, h: 11.4, floor: 'woodDark', wall: 'livingWall',
      doors: [{ wall: '+x', at: 7.5, w: 4.5, h: 9.5 }],
      windows: [{ wall: '-z', at: 7.5, w: 6.5, y0: 3.4, y1: 9.6, sill: 0.7 }],
    },
    abilities: { doubleJump: true, flop: true },
    spawn: [-8.6, 0.5, -5.6], spawnYaw: 0, camYaw: 1.35,
    drain: 1.0,
    props: [
      { type: 'dogBed', x: -8.6, z: -5.6 },
      { type: 'fireplace', x: -12.1, z: 0.5, rot: 1 },
      { type: 'firewood', x: -11.6, z: 5.6 },
      { type: 'bigShelf', x: -9.0, z: -11.2, rot: 0 },
      { type: 'couch', x: 0.5, z: -9.8, rot: 0 },
      { type: 'wallShelf', x: 0.5, z: -11.4, rot: 0, w: 4, d: 1.2, y: 7.6 },
      { type: 'sideTable', x: 6.3, z: -10.4 },
      { type: 'coffeeTable', x: 0.5, z: -4.2 },
      { type: 'armchair', x: -6.2, z: 4.0, rot: 1 },
      { type: 'tvStand', x: 0.5, z: 11.1, rot: 2 },
      { type: 'ottoman', x: 5.8, z: 3.4 },
      { type: 'floorLamp', x: 10.8, z: -2.0 },
      { type: 'plant', x: -10.8, z: 10.4 }, { type: 'plant', x: 11.4, z: 11.0 },
      { type: 'rug', x: 0.5, z: -2.0, w: 11, d: 8.5, style: 'living' },
      { type: 'toyScatter', x: 0, z: 0, seed: 2, dogToys: true },
      { type: 'roomba', x: 8.5, z: 6.5, move: { path: [[8.5, 6.5], [-3.0, 6.5], [-3.0, 0.6], [8.5, 0.6]], speed: 1.9 } },
    ],
    safe: [
      { x: -9.6, z: 0.5, r: 5.0 },                                       // fireplace glow
      { x: -8.6, z: -5.6, r: 2.6 },                                      // Biscuit's warm dog bed
      { x: 6.4, z: -6.4, r: 1.8 }, { x: 8.6, z: -6.4, r: 1.8 },          // moonlight
      { x: 11.2, z: 7.5, r: 2.6 },                                       // hallway light spilling in
      { x: 0.5, z: 9.4, r: 2.0 },                                        // TV standby glow
    ],
    lamps: [
      { x: 10.8, y: 7.2, z: -2.0, kind: 'floorLamp', safe: { x: 10.4, z: -2.0, r: 3.2 } },
    ],
    fish: F(
      line([-8.6, 1.4, -3.8], [-10.0, 1.4, -1.0], 3), line([-11.0, 1.2, 1.6], [-11.4, 3.4, 5.0], 3),
      line([-11.5, 6.2, 3.4], [-11.5, 6.2, -2.6], 4), arc([-10.6, 6.2, -4.2], [-8.2, 8.8, -10.6], 4, 1.2),
      arc([-6.4, 8.0, -10.8], [-3.4, 4.6, -10.6], 3, 1.0), line([-2.6, 2.8, -9.4], [3.6, 2.8, -9.4], 6),
      [[6.3, 3.3, -10.4]], arc([6.0, 3.0, -8.0], [8.2, 1.2, -6.4], 3, 1),
      line([10.2, 1.0, -0.6], [10.6, 1.0, 3.2], 3), line([5.8, 2.8, 3.4], [5.8, 4.4, 3.4], 2),
      line([2.0, 0.9, 6.5], [-2.0, 0.9, 6.5], 3), [[0.5, 3.0, -4.2]], line([-6.2, 2.6, 4.0], [-6.2, 2.6, 2.6], 2)),
    starfish: [[0.5, 8.5, -11.4], [-9.0, 9.2, -11.2], [-6.2, 5.4, 2.6]],
    enemies: [
      { type: 'shadow', path: [[-4.0, 0, -5.0], [-4.0, 0, 2.0], [2.0, 0, 2.6]], speed: 1.5 },
      { type: 'shadow', path: [[3.6, 0, 2.4], [8.8, 0, 2.4]], speed: 1.6 },
      { type: 'shadow', path: [[-2.0, 0, 9.0], [4.0, 0, 8.6]], speed: 1.3 },
      { type: 'shadow', path: [[7.6, 0, -9.4], [9.8, 0, -4.0]], speed: 1.2 },
    ],
    sleepingDog: { x: -9.3, z: -1.0, rot: 0 },                          // curled up by the fire
    bunnies: [[-2.0, 0, -1.0], [6.0, 0, 8.4], [9.4, 0, -8.6]],
    goal: { x: 12.2, y: 0, z: 7.5, r: 2.4, label: 'hallway' },
  },
  // ---------------------------------------------------------------------------
  {
    id: 'stairs', title: 'The Big Stairs', music: 2,
    goalText: 'Climb before the dark catches you',
    intro: 'stairs', newAbility: 'dash',
    room: {
      id: 'stairwell', x0: -5, x1: 5, z0: -14, z1: 10, h: 22.8, floor: 'woodDark', wall: 'hallWall',
      doors: [{ wall: '+z', at: 2.5, w: 4, h: 9.5 }, { wall: '-z', at: 2.4, w: 3.8, h: 9.1, y0: 11.4 }],
      windows: [{ wall: '+x', at: -4, w: 4, y0: 13.5, y1: 19.5 }],
      upper: [{ x0: -5, x1: 5, z0: -14, z1: -10.2, y: 11.4 }],
    },
    abilities: { doubleJump: true, flop: true, dash: true },
    spawn: [2.5, 0, 8.0], spawnYaw: Math.PI,
    drain: 0.5,
    rising: { start: 5, speed: 0.42, from: -1.2 },
    props: [
      { type: 'stairs', x: -2.25, z: 8.0, n: 14, rise: 0.815, run: 1.3, w: 4.5 },
      { type: 'cat', x: -3.35, y: 5.705, z: -0.3, rot: 3 },  // loafing on a step, glaring at you
      { type: 'basket', x: -1.1, y: 8.965, z: -5.65, d: 1.2 },
      { type: 'books', x: -1.0, y: 11.41, z: -9.4, w: 1.6, h: 1.0, d: 1.0 },
      { type: 'babyGate', x: -2.25, y: 11.41, z: -10.15 },
      { type: 'shoeRack', x: 3.0, z: 6.0, rot: 3 },
      { type: 'hallTable', x: 3.9, z: -2.0, rot: 3 },
      { type: 'plant', x: 3.6, z: -9.0 },
    ],
    safe: [{ x: 2.5, z: 8.5, r: 2.4 }],
    lamps: [{ x: -0.5, y: 5.705, z: -1.0, kind: 'plugLight', safe: null }],
    fish: F(line([-2.0, 1.4, 7.2], [-2.0, 6.0, 1.2], 6), line([-1.4, 7.0, -0.8], [-3.2, 9.9, -4.6], 4),
      line([-3.2, 10.6, -6.0], [-3.2, 12.0, -8.0], 2), [[-1.0, 13.2, -9.5]], line([-2.2, 15.0, -10.2], [1.8, 12.6, -12.4], 3)),
    starfish: [[3.9, 4.4, -2.0], [-4.2, 7.3, -0.3], [4.0, 12.4, -12.6]],
    enemies: [{ type: 'ballSpawner', every: 4.2, x0: -4.0, x1: -0.6, z: -9.6 }],
    bunnies: [[3.2, 0, 2.8], [3.4, 11.4, -11.8]],
    goal: { x: 2.4, y: 11.4, z: -13.2, r: 2.4, label: 'bedroom door' },
  },
  // ---------------------------------------------------------------------------
  {
    id: 'bed', title: 'Back to Bed', room: BEDROOM, music: 3,
    goalText: 'Chase the nightmares away from Leo',
    intro: 'bed', newAbility: 'glide', outro: 'ending',
    abilities: { doubleJump: true, flop: true, dash: true, glide: true },
    spawn: [4.6, 0, 6.4], spawnYaw: Math.PI, camYaw: -0.7,
    drain: 1.1,
    props: [
      BED, BEDSIDE, DESK, BOOKCASE, WALLSHELF, WARDROBE,
      { type: 'chair', x: 0.6, z: -3.0, rot: 2 },
      { type: 'dresser', x: 7.3, z: 3.5, rot: 3, drawers: [{ y0: 0.2, h: 0.8, out: 2.0 }, { y0: 2.2, h: 0.8, out: 0.7 }] },
      { type: 'toyBox', x: -1.5, z: 8.4, rot: 2 },
      { type: 'laundry', x: 2.0, z: 7.8 },
      { type: 'blocks', x: 0, z: 0, towers: [[-2.0, 5.0, 2], [-3.6, 2.6, 1]] },
      { type: 'ball', x: 3.4, z: 2.6 },
      { type: 'lego', x: 2.4, z: 4.4, w: 1.4, d: 1.4 }, { type: 'lego', x: 0.2, z: 0.6, w: 1.8, d: 1.6 }, { type: 'lego', x: 4.6, z: 0.2, w: 1.6, d: 1.6 },
      { type: 'rug', x: -0.8, z: 1.6, w: 6.4, d: 5.2 },
      { type: 'toyScatter', x: 0, z: 0, seed: 4 },
    ],
    safe: [{ x: 4.6, z: 7.6, r: 2.6 }],
    lamps: [{ x: 7.6, y: 3.6, z: 4.6, kind: 'deskLamp', safe: { x: 5.3, z: 3.6, r: 2.6 } }],
    fish: F(line([4.6, 0.6, 6.6], [3.0, 1.6, 7.6], 2), arc([2.0, 3.0, 7.8], [2.0, 6.0, 7.8], 2, 0.2),
      line([5.0, 1.6, 3.5], [5.9, 3.6, 3.5], 3), line([7.3, 4.4, 4.4], [7.3, 4.4, 2.2], 3), [[7.7, 5.7, 0.6]],
      line([7.5, 7.1, -1.0], [7.5, 7.1, -3.4], 3), arc([6.2, 7.0, -2.4], [-2.0, 5.4, -3.0], 7, 1.5)),
    starfish: [[-1.45, 3.6, -8.45], [-6.9, 10.0, 6.6], [3.75, 4.4, -8.15]],
    enemies: [
      { type: 'shadow', path: [[3.0, 0, 4.0], [3.0, 0, -2.0]], speed: 1.8 },
      { type: 'shadow', path: [[-3.0, 0, 7.0], [1.0, 0, 3.0]], speed: 1.7 },
      { type: 'shadow', path: [[5.6, 0, -1.6], [2.0, 0, -6.0]], speed: 1.6 },
      { type: 'knot', at: [-5.4, 6.6, -2.4], r: 0.8 },
      { type: 'knot', at: [-4.2, 7.4, -4.8], r: 1.0 },
      { type: 'knot', at: [-6.4, 6.8, -6.8], r: 0.9 },
    ],
    bunnies: [[-3.0, 0, 5.6], [5.4, 0, -5.4]],
    goal: { x: -5.0, y: 4.5, z: -6.6, r: 2.0, label: 'Leo', needsKnots: true },
  },
];
