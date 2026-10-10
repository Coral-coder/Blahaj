// The story campaign. Pure data: rooms, furniture, light, pickups, enemies.
// Rule of the night: the dark FLOOR feeds the nightmare; light, rugs and anything you
// can climb onto are safe. The nightmares on the floor must all be poofed to open the way on.
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

// the ceiling fan in Mum and Dad's room: blades go round this circle

export const CHAPTERS = [
  // ---------------------------------------------------------------------------
  {
    id: 'edge', title: 'Off the Edge', room: BEDROOM, music: 0,
    hazard: { type: 'rings', at: [-5.4, 0, 6.6], imp: [-5.6, 0, 4.6], every: 4.6, speed: 3.2, maxR: 12, color: 0x5a2aa8, dmg: 8, title: 'The wardrobe is breathing out bad dreams!', hint: 'Hop over the waves of dark', msg: 'A wave of bad dream!' },
    goalText: 'Climb back up to Leo',
    intro: 'prologue', outro: 'dog',
    abilities: {}, // just a hop: double jump is learned downstairs
    spawn: [-1.1, 0, -5.8], spawnYaw: Math.PI / 2, camYaw: 0.95,
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
      { x: 6.9, y: 3.6, z: 4.6, kind: 'deskLamp', safe: { x: 5.3, z: 3.6, r: 2.6 } },
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
    goal: { x: 3.5, y: 4.6, z: -9.0, r: 3.0, label: 'windowsill' }, // so close to Leo… and then Biscuit bursts in
    route: ['moon', 'blocks', 'drawer1', 'drawer2', 'drawer3', 'dresser', 'shelf', 'bookcase', 'sill'],
  },
  // ---------------------------------------------------------------------------
  {
    id: 'downstairs', title: 'Downstairs', music: 1,
    gloom: 2.8, trails: 0, // small pools and no trails yet: the gloom is new here
    hazard: { type: 'lobber', kind: 'cushion', imp: [0.5, 2.3, -9.7], from: [0.5, 3.2, -8.8], every: 5.5, speed: 9, spread: 2.5, bounce: 0.3, friction: 2.5, life: 5, radius: 0.55, dmg: 6, title: 'A nightmare on the sofa is throwing cushions!', hint: 'Keep moving!', msg: 'Flumph! A cushion!' },
    goalText: 'Sneak out to the kitchen',
    intro: 'downstairs', newAbility: ['doubleJump', 'flop'],
    room: {
      id: 'living', x0: -13, x1: 13, z0: -12, z1: 12, h: 11.4, floor: 'woodDark', wall: 'livingWall',
      doors: [{ wall: '+x', at: 7.5, w: 4.5, h: 9.5 }],
      windows: [{ wall: '-z', at: 7.5, w: 6.5, y0: 3.4, y1: 9.6, sill: 0.7 }],
    },
    abilities: { doubleJump: true, flop: true },
    spawn: [-8.6, 0.5, -5.6], spawnYaw: 0, camYaw: 1.35,
    drain: 0.6,
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
    goal: { x: 12.2, y: 0, z: 7.5, r: 2.4, label: 'kitchen' },
  },
  // ---------------------------------------------------------------------------
  {
    id: 'kitchen', title: 'Midnight Kitchen', music: 2,
    hazard: { type: 'lobber', kind: 'orange', imp: [11.0, 0, -7.0], from: [11.0, 2.6, -7.3], every: 2.6, speed: 10, spread: 2.2, bounce: 0.55, friction: 0.4, max: 5, life: 6, radius: 0.45, title: 'The fridge nightmare is chucking oranges!', hint: 'They bounce and roll — dodge or jump them', msg: 'Bonk! An orange!' },
    goalText: 'Gather Leo’s fridge magnets, then open the pet gate',
    intro: 'kitchen', newAbility: 'dash',
    room: {
      id: 'kitchen', x0: -14, x1: 14, z0: -11, z1: 11, h: 11.4, floor: 'checker', wall: 'kitchenWall',
      doors: [{ wall: '-x', at: 6, w: 4.5, h: 9.5 }, { wall: '+x', at: 6, w: 4.5, h: 9.5 }],
      windows: [{ wall: '-z', at: -4.0, w: 5.6, y0: 5.4, y1: 9.8, sill: 1.2 }],
    },
    abilities: { doubleJump: true, flop: true, dash: true },
    spawn: [-8.6, 0, -6.2], spawnYaw: Math.PI / 2, camYaw: -1.25,
    drain: 0.85,
    props: [
      { type: 'counter', x: -9.5, z: -9.55, w: 8.6, stove: 0 },
      { type: 'counter', x: -2.0, z: -9.55, w: 6.4, sink: -2.0 },
      { type: 'counter', x: 6.0, z: -9.55, w: 5.2 },
      { type: 'fridge', x: 11.0, z: -9.3 },
      { type: 'upperCabinet', x: -12.5, z: -10.2, w: 2.6, y0: 6.0, h: 2.6 },
      { type: 'upperCabinet', x: -6.5, z: -10.2, w: 2.6, y0: 6.0, h: 2.6 },
      { type: 'rangeHood', x: -9.5, z: -10.0, y0: 7.6 },
      { type: 'wallShelf', x: 4.6, z: -10.35, w: 2.6, d: 1.3, y: 6.7 },
      { type: 'jar', x: 3.7, y: 6.7, z: -10.5, r: 0.35, h: 0.9, fill: 0xe0b26a },
      { type: 'cereal', x: -6.5, y: 4.1, z: -8.7 },
      { type: 'breadBin', x: -12.6, y: 4.1, z: -8.75 },
      { type: 'toaster', x: 5.0, y: 4.1, z: -8.9 },
      { type: 'jar', x: 7.6, y: 4.1, z: -10.2, r: 0.45, h: 1.3, fill: 0xf2efe6 },
      { type: 'stepStool', x: -4.0, z: -7.05 },
      { type: 'island', x: 1.0, z: 0.5, w: 7, d: 3.4 },
      { type: 'fruitBowl', x: 0.2, y: 4.1, z: 0.4 },
      { type: 'hangingPots', x: 1.0, z: 0.5, y0: 9.6 },
      { type: 'stool', x: -1.3, z: 3.2 }, { type: 'stool', x: 1.0, z: 3.2 }, { type: 'stool', x: 3.3, z: 3.2 },
      { type: 'diningTable', x: -7.2, z: 6.0 },
      { type: 'chair', x: -8.8, z: 2.6, rot: 0 }, { type: 'chair', x: -5.2, z: 2.0, rot: 1 }, // one pulled out sideways
      { type: 'chair', x: -8.8, z: 9.4, rot: 2 }, { type: 'chair', x: -5.6, z: 9.4, rot: 2 },
      { type: 'pedalBin', x: 12.8, z: -5.6 },
      { type: 'petBowls', x: -12.4, z: -4.8 },
      { type: 'kitchenRug', x: -5.0, z: -6.2, w: 10, d: 2.2 },
      { type: 'wallClock', x: 13.95, z: -1.5, rot: 3, y0: 7.6 },
      { type: 'petGate', x: 12.6, z: 6.0, rot: 1, gate: 'g1', gateMove: [0, 0, 4.4] },
      { type: 'plant', x: 12.6, z: 10.0 },
    ],
    safe: [
      { x0: -10, z0: -7.3, x1: 0, z1: -5.1 },        // the rug runner
      { x: 9.4, z: -6.2, r: 2.4 },                    // light from the fridge door
      { x: -4.0, z: -4.4, r: 1.6 },                   // moonlight under the window
    ],
    lamps: [
      { x: -13.7, y: 0.4, z: 1.2, kind: 'plugLight', safe: { x: -12.6, z: 1.2, r: 2.4 } },
      { x: 6.9, y: 4.1, z: -10.6, kind: 'plugLight', safe: null },
    ],
    collect: { kind: 'letter', label: 'fridge magnets', hint: 'They got knocked all over the kitchen', done: 'L · E · O ♥ ♥ — all back!', items: [
      { at: [-7.2, 4.3, 6.0], ch: 'L' }, { at: [-4.0, 6.2, -10.3], ch: 'E' }, { at: [-6.5, 9.4, -10.2], ch: 'O' },
      { at: [3.3, 4.2, 3.2], ch: '♥' }, { at: [12.8, 3.8, -5.6], ch: '♥' },
    ] },
    switches: [{ at: [11.0, 8.6, -9.6], gate: 'g1', color: 0x3f8fd8, toast: 'Click! The pet gate swings open', hint: 'Now out through the far door' }],
    fish: F(
      line([-11.6, 0.6, 1.6], [-11.6, 0.6, 4.4], 2), line([-7.2, 0.6, -6.2], [-1.6, 0.6, -6.2], 4), [[-4.0, 3.2, -6.6]],
      line([-1.6, 4.9, -9.0], [0.8, 4.9, -9.0], 3), arc([1.4, 5.0, -9.0], [3.6, 5.0, -9.0], 3, 1.0), line([4.2, 7.5, -10.3], [5.4, 7.5, -10.3], 2),
      arc([6.4, 7.6, -10.0], [9.6, 9.4, -9.4], 3, 1.0), line([-11.4, 4.9, -9.0], [-8.0, 4.9, -9.0], 3),
      line([-1.3, 4.2, 3.2], [3.3, 4.2, 3.2], 3), line([-1.2, 4.9, 0.5], [3.6, 4.9, 0.5], 3), line([-8.8, 2.8, 2.6], [-5.2, 2.8, 2.0], 2),
      line([2.0, 0.6, 7.0], [9.0, 0.6, 7.0], 4)),
    starfish: [[-12.5, 9.4, -10.2], [4.0, 5.6, -4.4], [-7.2, 0.9, 6.0]],
    enemies: [
      { type: 'shadow', path: [[-2.0, 0, 6.6], [7.0, 0, 6.6]], speed: 1.4 },
      { type: 'shadow', path: [[8.0, 0, -3.6], [8.0, 0, 3.6]], speed: 1.5 },
      { type: 'shadow', path: [[-11.0, 0, -2.6], [-3.0, 0, -2.6]], speed: 1.3 },
      { type: 'shadow', path: [[11.4, 0, 1.6], [11.4, 0, 9.6]], speed: 1.2 },
    ],
    bunnies: [[0.0, 0, 7.6], [6.6, 0, -5.6]],
    goal: { x: 13.2, y: 0, z: 6.0, r: 2.0, label: 'laundry room' },
  },
  // ---------------------------------------------------------------------------
  {
    id: 'laundry', title: 'The Laundry Room', music: 0,
    hazard: { type: 'rings', at: [-3.0, 0, -7.0], imp: [-3.0, 3.5, -8.3], every: 2.8, speed: 4.6, maxR: 16, color: 0x8fcaf2, title: 'The washing machine is thumping!', hint: 'Jump the sudsy shockwaves', msg: 'Splosh! A soapy wave!' },
    goalText: 'Find the five lost socks, then open the back door',
    intro: 'laundry',
    room: {
      id: 'laundry', x0: -12, x1: 12, z0: -10, z1: 10, h: 11.4, floor: 'tile', wall: 'laundryWall', ambient: 1.6,
      doors: [{ wall: '-x', at: -5, w: 4.5, h: 9.5 }, { wall: '+x', at: 5, w: 4.5, h: 9.5 }],
      windows: [{ wall: '-z', at: 4.6, w: 4.4, y0: 5.6, y1: 9.4, sill: 0.8 }],
    },
    abilities: { doubleJump: true, flop: true, dash: true },
    spawn: [-8.6, 0, -4.4], spawnYaw: Math.PI / 2, camYaw: -0.25,
    drain: 1.05,
    props: [
      { type: 'washer', x: -3.0, z: -8.5 }, { type: 'dryer', x: 0.4, z: -8.5 },
      { type: 'wallShelf', x: -1.3, z: -9.4, w: 6.6, d: 1.2, y: 7.2 },
      { type: 'detergent', x: -4.2, y: 7.2, z: -9.5 },
      { type: 'utilitySink', x: 4.6, z: -8.8 },
      { type: 'stepLadder', x: 8.2, z: -7.4, rot: 2 },
      { type: 'dogFood', x: -6.6, z: -8.8 }, // a step up onto the washer
      { type: 'utilityShelf', x: -11.0, z: 4.0, rot: 1 },
      { type: 'laundry', x: -6.6, z: 7.6 }, { type: 'laundry', x: 4.2, z: 0.8 }, { type: 'clothesPile', x: -7.0, z: -3.4 }, // flop it to reach the basket
      { type: 'ironingBoard', x: -3.0, z: 4.5, h: 3.2 },
      { type: 'dryingRack', x: 3.6, z: 6.2, h: 3.3 },
      { type: 'clothesline', x: 0, z: 0, y0: 9.6, len: 23.6 },
      { type: 'lineBasket', x: -6.0, y: 6.6, z: 0, move: { path3: [[-6.0, 6.6, 0], [6.6, 6.6, 0]], speed: 1.5, wait: 1.4, noTurn: true } },
      { type: 'wallShelf', x: 11.4, z: -2.0, w: 3.2, d: 1.2, y: 7.4, rot: 3 },
      { type: 'mopBucket', x: 9.2, z: 8.6 },
      { type: 'laundryRug', x: -8.6, z: -4.6, w: 5, d: 3.4 },
      { type: 'backDoor', x: 11.85, z: 5.0, rot: 1, gate: 'door', gateMove: [0, 0, -4.4] },
    ],
    safe: [
      { x0: -11.1, z0: -6.3, x1: -6.1, z1: -2.9 },     // the bath mat by the door
      { x: 0.4, z: -5.8, r: 1.8 },                      // the dryer's warm glow
      { x: 4.6, z: -5.6, r: 1.6 },                      // moonlight over the sink
    ],
    lamps: [
      { x: -11.7, y: 0.4, z: -8.4, kind: 'plugLight', safe: null },
      { x: -2.2, y: 4.0, z: -8.6, kind: 'deskLamp', safe: { x: -2.8, z: -5.6, r: 2.0 } },
    ],
    collect: { kind: 'sock', label: 'lost socks', hint: 'Socks always go missing in the wash', done: 'Five socks! (Still no pairs.)', items: [
      [-3.0, 4.0, 4.5], [-11.0, 10.4, 4.0], [-3.6, 8.0, -9.4], [3.6, 4.1, 6.2], [0.4, 8.6, 0.0],
    ] },
    switches: [{ at: [11.4, 7.4, -2.6], gate: 'door', color: 0x4fb06a, toast: 'Click! The back door swings open', hint: 'Out into the garden' }],
    fish: F(
      line([-7.2, 0.6, -4.4], [-4.8, 0.6, -6.0], 3), [[-3.0, 4.8, -7.6], [0.4, 4.8, -7.6]], arc([0.6, 5.0, -7.6], [-0.4, 8.0, -9.2], 2, 0.5),
      line([-2.6, 8.0, -9.4], [0.8, 8.0, -9.4], 3), line([-8.6, 4.8, 4.0], [-9.4, 7.4, 4.0], 2), arc([-9.0, 10.4, 3.0], [-6.0, 7.6, 0.0], 3, 0.8),
      line([-3.4, 7.6, 0.0], [3.4, 7.6, 0.0], 4), arc([7.0, 7.8, 0.0], [10.6, 8.2, -1.6], 3, 1.0),
      line([-5.0, 4.0, 4.5], [-1.0, 4.0, 4.5], 3), line([2.4, 4.1, 6.2], [4.8, 4.1, 6.2], 2), line([6.0, 0.6, 3.0], [9.6, 0.6, 3.0], 3)),
    starfish: [[1.4, 8.0, -9.4], [-11.0, 5.6, 4.0], [9.2, 3.4, 8.6]],
    enemies: [
      { type: 'shadow', path: [[-5.0, 0, -3.0], [6.0, 0, -3.0]], speed: 1.5 },
      { type: 'shadow', path: [[6.4, 0, 3.0], [6.4, 0, 8.8]], speed: 1.4 },
      { type: 'shadow', path: [[-8.4, 0, 1.6], [-8.4, 0, 8.4]], speed: 1.3 },
      { type: 'shadow', path: [[9.8, 0, -5.0], [9.8, 0, 2.4]], speed: 1.6 },
      { type: 'shadow', path: [[-1.0, 0, 8.6], [-5.0, 0, 2.0]], speed: 1.2 },
    ],
    bunnies: [[0.6, 0, 4.0], [-1.6, 0, 8.4]],
    goal: { x: 11.4, y: 0, z: 5.0, r: 2.0, label: 'garden' },
  },
  // ---------------------------------------------------------------------------
  {
    id: 'backyard', title: 'The Back Garden', music: 1,
    hazard: { type: 'sweeper', kind: 'water', at: [-1.5, 0, -6.5], len: 5.6, width: 0.45, speed: 1.0, imp: [-3.6, 0, -9.0], hitH: 0.9, title: 'A nightmare turned the sprinkler on!', hint: 'Jump the jet as it swings round', msg: 'Splash! Soaked!' },
    goalText: 'Catch six fireflies to light the way to the garage',
    intro: 'backyard', newAbility: 'glide',
    room: {
      id: 'garden', x0: -16, x1: 16, z0: -14, z1: 14, h: 30, floor: 'grass', wall: 'fence', outdoor: true, fenceH: 5.5, ambient: 1.25,
      skins: { '-z': 'brick', '+x': 'brick' },
      doors: [{ wall: '-z', at: -11, w: 4.5, h: 9.5 }, { wall: '+x', at: -9, w: 4.5, h: 9.5 }],
    },
    abilities: { doubleJump: true, flop: true, dash: true, glide: true },
    spawn: [-10.6, 0, -9.4], spawnYaw: 0.9, camYaw: -2.2,
    drain: 1.0,
    props: [
      { type: 'patio', x: -11, z: -11, w: 10, d: 6 },
      { type: 'bbq', x: -6.6, z: -12.4 },
      { type: 'flowerPot', x: -9.2, z: -12.7, r: 0.8, h: 1.8 },  // a step up to the grill
      { type: 'dryerVent', x: -2.0, z: -13.75, y0: 1.8 },
      { type: 'litWindow', x: 4.0, z: -13.95, w: 3.4, h: 3.6, y0: 4.2 },
      { type: 'litWindow', x: 15.95, z: 2.0, rot: 3, w: 3.0, h: 2.4, y0: 5.0, color: 0xbfd6ff },
      { type: 'trampoline', x: -1.0, z: 1.0 },
      { type: 'tree', x: 6.0, z: -4.0, branches: [[-3.2, 3.0, 1.2, 2.6, 2.2], [0.4, 5.8, 3.4, 2.6, 2.4], [3.2, 8.4, 0.4, 2.4, 2.4]] },
      { type: 'treehouse', x: 6.0, z: -8.2, w: 7, d: 4.4, y0: 11.2 },
      { type: 'swingFrame', x: -10.0, z: 6.0 },
      { type: 'swingSeat', x: -11.6, y: 2.0, z: 4.0, top: 8, pivotZ: 6.0, move: { path3: [[-11.6, 2.0, 4.0], [-11.6, 2.0, 8.0]], speed: 2.6, noTurn: true } },
      { type: 'swingSeat', x: -8.4, y: 2.0, z: 8.0, top: 8, pivotZ: 6.0, move: { path3: [[-8.4, 2.0, 8.0], [-8.4, 2.0, 4.0]], speed: 2.6, noTurn: true } },
      { type: 'playhouse', x: -12.0, z: 11.2, rot: 2 },
      { type: 'picnicTable', x: -5.0, z: 10.6 },
      { type: 'sandbox', x: 1.0, z: 10.4 },
      { type: 'kiddiePool', x: 6.6, z: 9.6 },
      { type: 'shed', x: 12.2, z: 10.6 },
      { type: 'bush', x: -14.4, z: 0.0 }, { type: 'bush', x: 14.2, z: -1.6, r: 1.4 }, { type: 'bush', x: 14.0, z: 5.2, r: 1.5 },
      { type: 'flowerPot', x: -14.6, z: -5.0 }, { type: 'flowerPot', x: -14.6, z: -3.0, r: 0.7, h: 1.2 }, { type: 'flowerPot', x: 7.8, z: 13.0, r: 0.7, h: 1.3 },
      { type: 'gnome', x: 3.6, z: 13.0, rot: 2 },
      { type: 'solarLight', x: -4.4, z: -5.4 }, { type: 'solarLight', x: 2.6, z: -8.4 }, { type: 'solarLight', x: 10.6, z: -11.4 }, { type: 'solarLight', x: -7.4, z: 4.0 }, { type: 'solarLight', x: 4.4, z: 5.4 },
      { type: 'gardenHose', x: 13.6, z: -12.4 },
    ],
    wind: [{ x: -2.0, z: -12.6, r: 1.6, y0: 0, y1: 13.5, color: 0xffe6c8 }], // warm air from the dryer vent
    safe: [
      { x0: -16, z0: -14, x1: -6, z1: -8 },              // the patio under the porch light
      { x: 4.0, z: -12.0, r: 2.2 },                       // light from the kitchen window
      { x: 14.0, z: 2.0, r: 1.8 },                        // the neighbour's window
      { x: -4.4, z: -5.4, r: 1.5 }, { x: 2.6, z: -8.4, r: 1.5 }, { x: 10.6, z: -11.4, r: 1.5 }, { x: -7.4, z: 4.0, r: 1.5 }, { x: 4.4, z: 5.4, r: 1.5 }, // solar path lights
    ],
    lamps: [
      { x: -13.6, y: 5.6, z: -13.6, kind: 'porch', on: true, safe: null },
      { x: -5.0, y: 3.3, z: 10.6, kind: 'plugLight', safe: { x: -5.0, z: 8.4, r: 2.4 } },
      { x: 9.0, y: 11.2, z: -9.6, kind: 'plugLight', safe: null },
    ],
    collect: { kind: 'firefly', label: 'fireflies', hint: 'Look up — they love high places', done: 'Six fireflies! They light the way to the garage', items: [
      [-1.0, 7.0, 1.0], [6.4, 6.9, -0.6], [8.4, 12.2, -7.0], [12.2, 9.0, 10.6], [-10.0, 9.0, 6.0], [-6.6, 5.2, -12.4],
    ] },
    fish: F(
      line([-11.0, 0.6, -9.6], [-11.0, 0.6, -7.6], 2), line([-6.0, 0.6, -6.0], [-2.6, 0.6, -2.0], 3), arc([-1.0, 2.6, -1.0], [-1.0, 5.6, 1.0], 2, 0.6),
      [[2.8, 3.8, -2.8]], arc([3.4, 4.0, -2.0], [6.4, 6.6, -0.6], 3, 1.0), arc([7.0, 6.8, -1.2], [9.2, 9.2, -3.6], 3, 1.0), line([4.0, 12.0, -7.0], [8.0, 12.0, -7.0], 3),
      line([10.0, 11.0, -4.0], [12.0, 9.6, 6.0], 4), line([-5.0, 4.2, 10.6], [-5.0, 4.2, 9.0], 2), line([-12.0, 6.8, 10.0], [-11.0, 8.6, 6.4], 2),
      line([-2.0, 2.0, -12.6], [-2.0, 10.0, -12.6], 4), line([1.0, 1.4, 10.4], [5.0, 1.0, 9.6], 3)),
    starfish: [[10.2, 9.2, -3.6], [15.0, 0.9, 13.2], [-2.0, 12.6, -11.8]],
    enemies: [
      { type: 'moth', path: [[-12.0, 4.2, -5.6], [-8.0, 5.2, -6.0], [-7.4, 5.6, -2.4], [-12.0, 4.6, -1.6]], speed: 1.6 },
      { type: 'moth', path: [[6.4, 12.8, -9.8], [9.6, 13.2, -9.8], [9.6, 12.8, -6.4], [6.4, 13.2, -6.4]], speed: 1.2, phase: 2 },
      { type: 'moth', path: [[1.0, 6.0, 7.0], [6.0, 7.0, 8.6], [9.4, 5.6, 4.4], [4.0, 6.0, 5.0]], speed: 1.8 },
      { type: 'shadow', path: [[-6.0, 0, -4.0], [2.0, 0, -6.0]], speed: 1.5 },
      { type: 'shadow', path: [[8.0, 0, 2.0], [8.0, 0, 7.0]], speed: 1.5 },
      { type: 'shadow', path: [[-13.0, 0, -3.0], [-8.0, 0, 2.0]], speed: 1.4 },
      { type: 'shadow', path: [[12.0, 0, -6.0], [12.0, 0, -12.0]], speed: 1.3 },
    ],
    bunnies: [[3.0, 0, 6.0], [-8.0, 0, -2.0]],
    goal: { x: 14.8, y: 0, z: -9.0, r: 2.2, label: 'garage' },
  },
  // ---------------------------------------------------------------------------
  {
    id: 'garage', title: 'The Garage', music: 2,
    hazard: { type: 'lobber', kind: 'tire', imp: [-8.6, 1.65, 0.6], from: [-7.6, 2.4, 0.6], every: 3.0, speed: 8, spread: 1.8, bounce: 0.25, friction: 0.12, life: 6, radius: 0.6, title: 'A nightmare is rolling tyres off the stack!', hint: 'Jump over them as they roll by', msg: 'Thud! A tyre!' },
    goalText: 'Find five batteries, then hit the switch to open the basement door',
    intro: 'garage',
    room: {
      id: 'garage', x0: -15, x1: 15, z0: -11, z1: 11, h: 16, floor: 'concrete', wall: 'garageWall', ambient: 1.7,
      doors: [{ wall: '-x', at: 7, w: 4.5, h: 9.5 }, { wall: '+x', at: 6.5, w: 4.5, h: 9.5 }],
    },
    abilities: { doubleJump: true, flop: true, dash: true, glide: true },
    spawn: [-10.4, 0, 5.6], spawnYaw: 2.3, camYaw: -0.86,
    drain: 1.0,
    props: [
      { type: 'garageDoor', x: -3.0, z: -10.85, w: 14, h: 9 },
      { type: 'car', x: -4.0, z: -3.6 },
      { type: 'tireStack', x: -8.6, z: 0.6, n: 2 },
      { type: 'oilStain', x: 3.4, z: -1.0, r: 1.2 },
      { type: 'workbench', x: 5.0, z: 9.7, rot: 2 },
      { type: 'locker', x: 13.9, z: 1.6, rot: 3 },
      { type: 'backDoor', x: 14.85, z: 6.5, rot: 1, gate: 'door', gateMove: [0, 0, 4.4] },
      { type: 'utilityShelf', x: -14.0, z: -4.0, rot: 1, shelves: [2.6, 5.1, 7.6] },
      { type: 'paintCans', x: -14.2, z: -5.6, rot: 1, y0: 2.4, n: 4 }, { type: 'paintCans', x: -14.2, z: -5.6, rot: 1, y0: 5.1, n: 3, seed: 2 },
      { type: 'wallBike', x: -7.0, z: 10.8, rot: 2, y0: 6.2 }, { type: 'wallBike', x: -1.6, z: 10.8, rot: 2, y0: 6.6, color: 0xe5484d },
      { type: 'lawnmower', x: -11.0, z: -9.0 },
      { type: 'cardboardBox', x: -1.0, z: 9.6, w: 2.2, d: 2.2, label: 'GARDEN' },
      { type: 'cardboardBox', x: 12.8, z: -9.4, label: 'TOYS' },
      { type: 'cardboardBox', x: 12.8, z: -9.4, y0: 1.8, w: 2.2, d: 2.2, label: 'XMAS' },
      { type: 'cardboardBox', x: 12.8, z: -9.4, y0: 3.6, w: 2.0, d: 2.0 },
      { type: 'cardboardBox', x: 10.3, z: -9.6, w: 2.2, d: 2.2, h: 1.8, label: 'LEO BABY' },
      { type: 'ceilingRack', x: 8.0, z: -7.5, w: 8, d: 4.2, top: 10.6, ceiling: 16 },
      { type: 'leafBlower', x: 2.4, z: -7.5 },
      { type: 'shopLight', x: -4.0, z: -3.0, y0: 13.6, ceiling: 16 }, { type: 'shopLight', x: 6.0, z: 2.0, y0: 13.6, ceiling: 16, on: true },
      { type: 'toolCart', x: 0.0, z: 4.6, move: { path3: [[0.0, 0, 4.6], [9.0, 0, 4.6]], speed: 1.1, wait: 2.0, noTurn: true } },
    ],
    wind: [{ x: 2.4, z: -7.5, r: 1.3, y0: 0, y1: 13.0, color: 0xd6ecff }], // the leaf blower, pointing straight up
    safe: [
      { x: -11.8, z: 6.4, r: 2.8 },     // the garden light through the side door
      { x: -4.0, z: 4.4, r: 2.6 },      // the car's headlights
    ],
    lamps: [
      { x: 8.4, y: 4.0, z: 9.4, kind: 'deskLamp', safe: { x: 8.0, z: 7.2, r: 2.2 } },
      { x: 14.7, y: 1.2, z: 9.6, kind: 'plugLight', safe: { x: 12.8, z: 9.4, r: 2.0 } },
    ],
    collect: { kind: 'battery', label: 'batteries', hint: 'The switch needs power — look up high', done: 'All five batteries! Now find the switch', items: [
      [-4.0, 6.2, -4.2], [2.0, 8.2, 10.3], [-14.0, 8.6, -4.0], [10.4, 11.6, -7.5], [12.8, 6.4, -9.4],
    ] },
    switches: [{ at: [13.9, 9.0, 1.6], gate: 'door', color: 0xf2b632, toast: 'Click! The basement door creaks open', hint: 'Down to the basement' }],
    fish: F(
      line([-11.0, 0.6, 7.0], [-6.0, 0.6, 6.0], 3), line([-8.6, 2.2, 0.6], [-5.0, 3.6, -0.6], 2), line([-4.0, 5.8, -2.4], [-4.0, 5.8, -6.0], 3),
      line([-1.0, 0.6, 4.6], [8.0, 0.6, 4.6], 4), line([1.0, 4.6, 8.8], [9.0, 4.6, 8.8], 4), line([1.0, 7.8, 10.3], [8.0, 7.8, 10.3], 3),
      line([-12.6, 3.4, -5.6], [-12.6, 6.4, -2.4], 3), line([2.4, 2.0, -7.5], [2.4, 9.6, -7.5], 4), line([5.0, 11.2, -7.5], [9.0, 11.2, -7.5], 3),
      line([12.0, 10.4, -3.0], [13.4, 9.6, 0.0], 2), line([10.3, 2.4, -9.6], [12.8, 4.6, -9.4], 2)),
    starfish: [[-4.0, 0.9, -10.0], [13.9, 12.0, 1.6], [2.4, 13.2, -7.5]],
    enemies: [
      { type: 'spider', at: [-4.0, 13.6, -2.4], drop: 6.0, period: 4.5 },
      { type: 'spider', at: [4.0, 13.0, 8.8], drop: 7.6, period: 4.0, phase: 1.5 },
      { type: 'spider', at: [-11.6, 14.0, -4.0], drop: 5.0, period: 5.0, phase: 3.0 },
      { type: 'spider', at: [14.0, 14.6, -3.2], drop: 3.4, period: 3.6, phase: 0.8 },
      { type: 'moth', path: [[0.2, 9.6, -9.8], [4.0, 10.4, -10.0], [4.0, 11.0, -4.4], [0.2, 10.2, -4.8]], speed: 1.3 },
      { type: 'shadow', path: [[-0.6, 0, -7.0], [-0.6, 0, 2.0]], speed: 1.4 },
      { type: 'shadow', path: [[3.0, 0, 0.0], [10.0, 0, -2.4]], speed: 1.5 },
      { type: 'shadow', path: [[-12.0, 0, -8.0], [-9.4, 0, 3.0]], speed: 1.3 },
    ],
    bunnies: [[0.0, 0, 7.6]],
    goal: { x: 14.4, y: 0, z: 6.5, r: 2.0, label: 'basement' },
  },
  // ---------------------------------------------------------------------------
  {
    id: 'basement', title: 'Down in the Basement', music: 1,
    hazard: { type: 'roamer', kind: 'train', squoval: { x: -7.3, z: 0.4, rx: 2.4, rz: 3.6, n: 4 }, track: true, speed: 4.6, radius: 1.1, top: 1.6, title: 'A runaway toy train, with a nightmare driving!', hint: 'Jump over it, or bounce off its roof', msg: 'Choo-choo! Run over by the train!' },
    goalText: 'Find four light bulbs, then ride the dumbwaiter up',
    intro: 'basement',
    room: {
      id: 'basement', x0: -14, x1: 14, z0: -12, z1: 12, h: 14, floor: 'concrete', wall: 'concreteWall', ambient: 1.85, landing: 'wood',
      upper: [{ x0: -14, x1: -9.5, z0: 6, z1: 12, y: 8.0 }, { x0: 10.6, x1: 14, z0: 7.6, z1: 12, y: 9.0 }],
      doors: [{ wall: '-x', at: 9.0, w: 4.0, h: 4.6, y0: 8.0 }],
    },
    abilities: { doubleJump: true, flop: true, dash: true, glide: true },
    spawn: [-5.0, 0, -5.4], spawnYaw: 0.78, camYaw: -2.36,
    drain: 1.05,
    props: [
      { type: 'basementStairs', x: -11.75, z: -7.0, rot: 2, n: 10, rise: 0.8, run: 1.3, w: 4.5, rail: -1 },
      { type: 'furnace', x: -2.0, z: -9.8, riser: 3.3 },
      { type: 'duct', x: 2.6, z: -9.0, w: 13.6, y0: 9.8, ceiling: 14 },
      { type: 'waterHeater', x: 11.6, z: -9.6 },
      { type: 'trainTable', x: 5.0, z: 1.4, mountain: 3.0 },
      { type: 'toyTrain', x: 1.2, y: 3.0, z: -0.6, move: { path3: [[1.2, 3.0, -0.6], [8.8, 3.0, -0.6], [8.8, 3.0, 3.4], [1.2, 3.0, 3.4]], loop: true, linear: true, speed: 1.6 } },
      { type: 'cardboardBox', x: -1.4, z: 2.0, w: 2.4, d: 2.4, h: 1.8, label: 'TRAINS' },
      { type: 'utilityShelf', x: 13.1, z: -3.2, rot: 3, shelves: [2.6, 5.1, 7.6] },
      { type: 'paintCans', x: 13.2, z: -4.6, rot: 3, y0: 2.6, n: 4, seed: 1 },
      { type: 'pipes', x: 2.0, z: -3.2, w: 21, top: 9.4, ceiling: 14 },
      { type: 'pingPong', x: -3.4, z: 6.8 },
      { type: 'sheetCouch', x: 4.2, z: 10.4, rot: 2, w: 6.4 },
      { type: 'liftShaft', x: 9.0, z: 9.8, h: 9.6 },
      { type: 'post', x: -9.75, z: 6.25, h: 7.4 }, { type: 'post', x: 10.85, z: 7.85, h: 8.4 },
      { type: 'dumbwaiter', x: 9.0, y: 0, z: 9.8, move: { path3: [[9.0, 0, 9.8], [9.0, 8.7, 9.8]], speed: 1.8, wait: 1.8, noTurn: true } },
      { type: 'hatch', x: 13.95, z: 9.8, rot: 3, y0: 9.0, w: 3.4, h: 3.8 },
      { type: 'cardboardBox', x: 7.0, z: -10.4, w: 2.6, d: 2.2, h: 2.0, label: 'XMAS' },
      { type: 'cardboardBox', x: -6.6, z: -10.6, w: 2.4, d: 2.2, h: 1.8, label: 'OLD TOYS' },
      { type: 'bareBulb', x: -4.0, z: 0.0, y0: 12.2, ceiling: 14 }, { type: 'bareBulb', x: 6.0, z: 6.0, y0: 12.2, ceiling: 14 },
      { type: 'cobweb', x: 13.9, z: 11.9, y0: 13.9 }, { type: 'cobweb', x: -13.9, z: -11.9, y0: 13.9, rot: 2 },
      { type: 'sumpGrate', x: -8.0, z: 0.0 },
    ],
    wind: [{ x: -2.0, z: -6.6, r: 1.4, y0: 0, y1: 12.0, color: 0xffd2a0 }], // hot air from the furnace grate
    safe: [
      { x: -3.4, z: -6.0, r: 2.8 },     // the furnace's warm glow
      { x: 12.3, z: 9.8, r: 1.6 },      // the hatch at the top (on the landing)
      { x: 9.0, z: 8.6, r: 2.0 },       // the dumbwaiter's little lamp
    ],
    lamps: [
      { x: 9.4, y: 3.0, z: 4.0, kind: 'deskLamp', safe: { x: 9.4, z: 6.4, r: 2.2 } },
      { x: -13.8, y: 1.2, z: -2.0, kind: 'plugLight', safe: { x: -12.2, z: -2.0, r: 2.0 } },
    ],
    collect: { kind: 'bulb', label: 'light bulbs', hint: 'Try the warm air, the train set and the pipes', done: 'Four bulbs! The dumbwaiter hatch lights up', items: [
      [11.6, 9.6, -9.6], [-2.0, 10.0, -6.6], [5.0, 7.0, 1.4], [-4.0, 10.4, -3.2],
    ] },
    fish: F(
      line([-5.0, 0.6, -3.0], [-5.0, 0.6, 3.0], 3), line([-2.0, 2.0, -6.6], [-2.0, 8.0, -6.6], 3), line([-2.0, 11.4, -9.0], [8.6, 11.4, -9.0], 4),
      line([1.2, 3.6, -0.6], [8.8, 3.6, -0.6], 4), line([8.8, 3.6, 3.4], [1.2, 3.6, 3.4], 3), line([12.6, 8.4, -3.2], [6.0, 9.9, -3.2], 3), line([2.0, 9.9, -3.2], [-6.0, 9.9, -3.2], 3),
      line([-6.4, 3.6, 6.8], [-0.4, 3.6, 6.8], 3), line([9.0, 1.4, 7.6], [9.0, 7.0, 7.6], 3)),
    starfish: [[-3.4, 0.9, 6.8], [4.2, 7.6, 10.0], [9.0, 12.4, -9.0]],
    enemies: [
      { type: 'spider', at: [8.0, 13.6, 3.4], drop: 7.4, period: 4.2 },
      { type: 'spider', at: [4.0, 13.8, -7.4], drop: 2.6, period: 3.2, phase: 1.0 },
      { type: 'spider', at: [11.2, 13.6, -1.2], drop: 5.4, period: 3.8, phase: 2.2 },
      { type: 'moth', path: [[5.0, 6.0, 7.6], [11.0, 6.4, 7.0], [11.0, 6.0, 5.0], [5.0, 6.4, 5.6]], speed: 1.3 },
      { type: 'shadow', path: [[-8.0, 0, -3.0], [-8.0, 0, 4.0]], speed: 1.4 },
      { type: 'shadow', path: [[0.0, 0, -6.0], [10.0, 0, -6.0]], speed: 1.5 },
      { type: 'shadow', path: [[1.6, 0, 6.2], [6.4, 0, 6.2]], speed: 1.3 },
      { type: 'shadow', path: [[12.0, 0, 0.0], [12.0, 0, 6.0]], speed: 1.2 },
    ],
    bunnies: [[-6.0, 0, 2.0]],
    goal: { x: 12.6, y: 9.0, z: 9.8, r: 1.8, label: 'dumbwaiter' },
  },
  // ---------------------------------------------------------------------------
  {
    id: 'stairs', title: 'The Big Stairs', music: 2,
    goalText: 'Climb before the dark catches you',
    intro: 'stairs',
    room: {
      id: 'stairwell', x0: -5, x1: 5, z0: -14, z1: 10, h: 22.8, floor: 'woodDark', wall: 'hallWall',
      doors: [{ wall: '+z', at: 2.5, w: 4, h: 9.5 }, { wall: '-z', at: 2.4, w: 3.8, h: 9.1, y0: 11.4 }],
      windows: [{ wall: '+x', at: -4, w: 4, y0: 13.5, y1: 19.5 }],
      upper: [{ x0: -5, x1: 5, z0: -14, z1: -10.2, y: 11.4 }],
    },
    abilities: { doubleJump: true, flop: true, dash: true, glide: true },
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
    goal: { x: 2.4, y: 11.4, z: -13.2, r: 2.4, label: 'upstairs' },
  },
  // ---------------------------------------------------------------------------
  {
    id: 'hallway', title: 'The Upstairs Hallway', music: 1,
    hazard: { type: 'sweeper', swing: { pivot: [0, 11.6, -10.0], len: 10.4, amp: 0.62, period: 3.4, dir: 0, bobR: 1.0 }, imp: [-6.2, 8.6, -10.0], title: 'The grandfather clock\'s pendulum has come loose!', hint: 'Time your run past it', msg: 'Tock! Knocked by the pendulum!' },
    goalText: 'Gather Leo’s five lost marbles, then slip into the bathroom',
    intro: 'hallway',
    room: {
      id: 'hallway', x0: -7, x1: 7, z0: -22, z1: 22, h: 12, floor: 'wood', wall: 'hallWall', ambient: 1.6,
      doors: [{ wall: '+z', at: 0, w: 4.5, h: 9.5 }, { wall: '-z', at: 0, w: 4.5, h: 9.5 }],
      windows: [{ wall: '+x', at: 9.0, w: 5, y0: 3.6, y1: 8.6 }],
    },
    abilities: { doubleJump: true, flop: true, dash: true, glide: true },
    spawn: [0, 0, 15.4], spawnYaw: Math.PI,
    drain: 1.0,
    props: [
      { type: 'hallRunner', x: 0, z: 0, w: 5, l: 40 },
      { type: 'consoleTable', x: -6.1, z: 13.0, rot: 1 },
      { type: 'hamper', x: 6.0, z: 16.6, rot: 3 },
      { type: 'radiator', x: 6.65, z: 9.0, rot: 3 },
      { type: 'hallBookcase', x: -6.1, z: 7.4, rot: 1, w: 2.4, shelves: [1.4, 2.8] },
      { type: 'hallBookcase', x: -6.1, z: 4.6, rot: 1, w: 3.2, shelves: [1.9, 3.8, 5.6] },
      { type: 'hallBookcase', x: -6.1, z: 1.4, rot: 1, w: 3.2, shelves: [2.1, 4.2, 6.3, 8.4] },
      { type: 'pictureLedge', x: 6.5, z: -2.0, rot: 3, w: 8, top: 6.4 },
      { type: 'pictureLedge', x: 6.5, z: -11.0, rot: 3, w: 6, top: 8.0 },
      { type: 'linenCloset', x: 5.9, z: -17.0, rot: 3 },
      { type: 'grandfatherClock', x: -6.2, z: -10.0, rot: 1 },
      { type: 'hallChair', x: -5.8, z: -6.6, rot: 1 },
      { type: 'hallToyBox', x: -5.6, z: -15.5, rot: 1 },
      { type: 'petBed', x: 3.4, z: -6.0 },
      { type: 'doorPanel', x: -6.9, z: -2.4, rot: 1, w: 3.8, h: 9.0, sign: 'LEO 🦈', glowUnder: true },
      { type: 'doorPanel', x: 6.9, z: 13.2, rot: 3, w: 3.6, h: 9.0 },
      { type: 'doorPanel', x: -6.9, z: 18.6, rot: 1, w: 3.6, h: 9.0, sign: 'PLAYROOM', signBg: '#ffe2a8' },
      { type: 'wallFrames', x: -6.95, z: -19.4, rot: 1, n: 1, y0: 5.0 }, { type: 'wallFrames', x: 6.95, z: -16.0, rot: 3, n: 1, y0: 10.4 },
      { type: 'pendant', x: 0, z: 12.0, y0: 10.4, ceiling: 12 }, { type: 'pendant', x: 0, z: 0.0, y0: 10.4, ceiling: 12 }, { type: 'pendant', x: 0, z: -12.0, y0: 10.4, ceiling: 12 },
      { type: 'roomba', x: -2.0, z: 8.0, move: { path: [[-2.0, 8.0], [2.0, 8.0], [2.0, -8.0], [-2.0, -8.0]], speed: 1.8 } },
    ],
    safe: [
      { x: 0, z: 17.6, r: 2.8 },     // light from the stairwell
      { x: 0, z: -20.0, r: 2.2 },    // the bathroom nightlight under the door
    ],
    lamps: [
      { x: -6.1, y: 3.2, z: 14.6, kind: 'deskLamp', safe: { x: -4.0, z: 13.0, r: 2.4 } },
      { x: -6.8, y: 1.2, z: -4.4, kind: 'plugLight', safe: { x: -5.0, z: -4.4, r: 2.0 } },
      { x: 6.8, y: 1.2, z: -6.8, kind: 'plugLight', safe: { x: 5.0, z: -6.8, r: 2.0 } },
    ],
    collect: { kind: 'marble', label: 'marbles', hint: 'Leo’s marbles rolled everywhere — look high', done: 'All five marbles! Now, the bathroom', items: [
      [6.0, 7.0, 16.6], [-6.1, 9.4, 1.4], [6.5, 7.4, -3.0], [5.9, 9.6, -17.0], [-6.2, 8.0, -10.0],
    ] },
    fish: F(
      line([0, 0.6, 13.0], [0, 0.6, 6.0], 4), arc([4.0, 0.6, 16.6], [6.0, 5.0, 16.6], 3, 1.0), line([-4.4, 3.4, 7.4], [-4.4, 8.6, 1.4], 3),
      arc([-4.6, 10.0, 3.0], [5.6, 7.2, -1.0], 5, 1.4), line([6.5, 7.4, 1.4], [6.5, 7.4, -5.6], 3), line([6.5, 9.0, -8.6], [6.5, 9.0, -13.4], 3),
      line([-5.8, 2.8, -6.0], [-5.8, 5.2, -7.4], 2), line([0, 0.6, -2.0], [0, 0.6, -16.0], 5), line([-5.6, 3.2, -14.2], [-5.6, 3.2, -16.8], 2)),
    starfish: [[-6.1, 0.9, 13.0], [0.0, 9.2, 0.6], [5.9, 0.9, -17.0]],
    enemies: [
      { type: 'moth', path: [[-2.0, 5.0, -12.0], [2.0, 5.6, -12.0], [2.0, 5.0, -16.0], [-2.0, 5.6, -16.0]], speed: 1.4 },
      { type: 'moth', path: [[-2.4, 4.6, 12.0], [2.4, 5.2, 12.0], [2.4, 4.6, 8.0], [-2.4, 5.2, 8.0]], speed: 1.2, phase: 1.5 },
      { type: 'spider', at: [-4.4, 11.6, -10.0], drop: 3.2, period: 4.0 },
      { type: 'spider', at: [3.4, 11.6, -17.0], drop: 2.8, period: 3.6, phase: 1.6 },
      { type: 'shadow', path: [[0.0, 0, 10.0], [0.0, 0, 2.0]], speed: 1.4 },
      { type: 'shadow', path: [[-3.0, 0, -2.0], [3.0, 0, -4.0]], speed: 1.5 },
      { type: 'shadow', path: [[0.0, 0, -9.0], [0.0, 0, -16.0]], speed: 1.4 },
      { type: 'shadow', path: [[3.4, 0, 12.0], [-1.0, 0, 15.0]], speed: 1.2 },
    ],
    bunnies: [[-3.6, 0, -18.6]],
    goal: { x: 0, y: 0, z: -20.6, r: 2.0, label: 'bathroom' },
  },
  // ---------------------------------------------------------------------------
  {
    id: 'bathroom', title: 'Bubble Bath', music: 2,
    hazard: { type: 'lobber', kind: 'duck', imp: [3.6, 1.7, -7.6], from: [3.6, 2.8, -6.6], every: 2.8, speed: 9, spread: 2.4, bounce: 0.5, friction: 1.2, life: 5.5, radius: 0.5, title: 'A nightmare in the bath is flinging rubber ducks!', hint: 'Quack! Dodge them', msg: 'Squeak! A rubber duck!' },
    goalText: 'Rescue Leo’s five rubber ducks',
    intro: 'bathroom',
    room: {
      id: 'bathroom', x0: -12, x1: 12, z0: -10, z1: 10, h: 12, floor: 'tile', wall: 'bathWall', ambient: 1.7,
      doors: [{ wall: '+z', at: -1, w: 4.5, h: 9.5 }, { wall: '-x', at: -0.8, w: 4.0, h: 9.2 }],
      windows: [{ wall: '-z', at: 4.0, w: 4, y0: 5.6, y1: 9.4 }],
    },
    abilities: { doubleJump: true, flop: true, dash: true, glide: true },
    spawn: [-1.0, 0, 5.0], spawnYaw: 2.61, camYaw: -0.53,
    drain: 1.0,
    props: [
      { type: 'bathtub', x: 3.6, z: -7.6 },
      { type: 'soapBubble', x: 1.4, y: 2.4, z: -7.6, move: { path3: [[1.4, 2.4, -7.6], [1.4, 8.2, -7.6]], speed: 1.2, wait: 1.0, noTurn: true } },
      { type: 'soapBubble', x: 4.0, y: 8.2, z: -7.0, move: { path3: [[4.0, 8.2, -7.0], [4.0, 2.4, -7.0]], speed: 1.0, wait: 1.0, noTurn: true } },
      { type: 'soapBubble', x: 6.6, y: 2.4, z: -7.6, move: { path3: [[6.6, 2.4, -7.6], [6.6, 8.2, -7.6]], speed: 1.5, wait: 0.6, noTurn: true } },
      { type: 'bathMat', x: 3.6, z: -4.2, w: 4.4, d: 2.0 },
      { type: 'duckFamily', x: -0.4, y: 3.0, z: -5.75, n: 3 },
      { type: 'vanity', x: 10.7, z: 1.0, rot: 3 },
      { type: 'stepStool', x: 8.2, z: 1.0, rot: 3 },
      { type: 'toilet', x: -10.2, z: 5.6, rot: 1 },
      { type: 'towelShelf', x: -11.4, z: 2.9, rot: 1, w: 2.6, top: 7.0 },
      { type: 'toiletRolls', x: -7.6, z: 8.4 },
      { type: 'shower', x: -8.8, z: -6.8 },
      { type: 'hamper', x: -3.6, z: 8.4 },
      { type: 'bathScale', x: -4.0, z: -1.6 },
      { type: 'bathPlant', x: 10.8, z: 8.6 },
      { type: 'bathMat', x: 9.4, z: 1.0, w: 2.0, d: 4.0, color: 0xe8b4c4 },
    ],
    wind: [{ x: -9.6, z: -7.6, r: 1.6, y0: 0, y1: 10.8, color: 0xf2f8ff }], // steam from the hot shower
    safe: [
      { x: -1.0, z: 7.4, r: 2.6 },     // the hall light under the door
      { x: 3.6, z: -4.2, r: 2.0 },     // the bath mat in the window's moonlight
    ],
    lamps: [
      { x: 11.8, y: 1.2, z: 6.2, kind: 'plugLight', safe: { x: 10.0, z: 6.2, r: 2.0 } },
      { x: -11.8, y: 1.2, z: -2.6, kind: 'plugLight', safe: { x: -10.2, z: -1.8, r: 2.0 } },
    ],
    collect: { kind: 'duck', label: 'rubber ducks', hint: 'Bounce on the bubble bath — and ride the bubbles!', done: 'Quack! All five ducks are safe', items: [
      [4.0, 10.6, -7.0], [11.0, 8.6, 1.0], [-11.4, 8.0, 2.9], [-9.6, 10.2, -7.6], [7.9, 4.0, -7.6],
    ] },
    fish: F(
      line([-1.0, 0.6, 3.0], [3.0, 0.6, -3.0], 3), line([-0.6, 3.6, -7.6], [7.6, 3.6, -7.6], 4), line([1.4, 6.0, -7.6], [6.6, 9.4, -7.6], 4),
      line([8.2, 3.0, 1.0], [10.0, 5.2, 1.0], 2), line([10.6, 8.6, -1.2], [10.6, 8.6, 3.2], 3), line([-9.0, 2.8, 5.6], [-11.0, 5.0, 5.6], 2),
      line([-9.6, 2.0, -7.6], [-9.6, 8.6, -7.6], 4), line([-6.0, 0.6, -2.0], [-6.0, 0.6, 3.0], 3), line([-3.6, 3.6, 8.4], [-3.6, 6.6, 8.4], 2)),
    starfish: [[-11.3, 0.9, -9.3], [8.4, 10.8, -9.2], [-3.6, 8.8, 8.4]],
    enemies: [
      { type: 'moth', path: [[0.0, 10.6, -4.6], [8.0, 10.9, -4.6], [8.0, 10.6, -3.0], [0.0, 10.9, -3.0]], speed: 1.3 },
      { type: 'moth', path: [[-8.0, 6.0, 7.0], [-6.0, 6.6, 3.0], [-8.0, 6.0, 0.0], [-9.0, 6.6, 4.0]], speed: 1.2, phase: 2 },
      { type: 'spider', at: [9.4, 11.6, 4.6], drop: 3.2, period: 3.8 },
      { type: 'shadow', path: [[-4.0, 0, 2.0], [4.0, 0, 3.0]], speed: 1.4 },
      { type: 'shadow', path: [[6.0, 0, -3.0], [6.0, 0, 6.0]], speed: 1.3 },
      { type: 'shadow', path: [[-8.0, 0, -2.0], [-4.0, 0, -4.0]], speed: 1.5 },
      { type: 'shadow', path: [[-1.0, 0, -3.0], [-1.0, 0, 1.0]], speed: 1.2 },
    ],
    bunnies: [[1.0, 0, 7.0]],
    goal: { x: -11.0, y: 0, z: -0.8, r: 2.0, label: 'Mum & Dad’s room' },
  },
  // ---------------------------------------------------------------------------
  {
    id: 'parents', title: 'Mum and Dad’s Room', music: 1,
    hazard: { type: 'rings', at: [0, 0, -6.4], r0: 3.6, imp: [0, 5.0, -11.0], every: 3.2, speed: 4.0, maxR: 18, color: 0xb9a8ff, sound: 'snore', title: 'Dad\'s snoring is shaking the floor!', hint: 'Hop over the snore waves', msg: 'SNNRRK! Bowled over by a snore!' },
    goalText: 'Find Mum’s six sewing buttons — without waking anyone',
    intro: 'parents',
    room: {
      id: 'parents', x0: -14, x1: 14, z0: -12, z1: 12, h: 12, floor: 'woodDark', wall: 'parentsWall', ambient: 1.6,
      doors: [{ wall: '+x', at: -1.0, w: 4.0, h: 9.2 }, { wall: '-x', at: -6.0, w: 4.2, h: 9.2 }],
      windows: [{ wall: '+z', at: -5.0, w: 5, y0: 3.6, y1: 9.0 }],
    },
    abilities: { doubleJump: true, flop: true, dash: true, glide: true },
    spawn: [9.6, 0, -1.0], spawnYaw: -2.5, camYaw: 0.64,
    drain: 1.0,
    props: [
      { type: 'bedRug', x: 0, z: -2.0, w: 16, d: 14, color: 0xb8a58a },
      { type: 'kingBed', x: 0, z: -6.4 },
      { type: 'blanketBox', x: 0, z: 0.0, h: 1.7 },
      { type: 'sleepers', x: 0, y: 4.25, z: -9.85 },
      { type: 'zzz', x: 2.3, y: 5.2, z: -9.2, top: 11.0 },
      { type: 'nightstand', x: -6.6, z: -10.6 }, { type: 'nightstand', x: 6.6, z: -10.6 },
      { type: 'parentsDresser', x: 5.0, z: 10.6, rot: 2 },
      { type: 'curtains', x: -5.0, z: 11.85, rot: 2, w: 5, h: 5.4, y0: 3.6 },
      { type: 'bigWardrobe', x: -12.7, z: 3.0, rot: 1 },
      { type: 'tallboy', x: -12.8, z: 8.0, rot: 1 },
      { type: 'hamper', x: -9.8, z: 8.0, rot: 1 },
      { type: 'readingChair', x: 10.6, z: 7.4, rot: 3 },
      { type: 'slippers', x: -4.2, z: 0.8, rot: 0.3 }, { type: 'slippers', x: 4.0, z: 0.6, color: 0x6f8fb8 },
      { type: 'fanHub', x: 0, z: 4.0, top: 9.4, ceiling: 12 },
      { type: 'fanBlade', x: 3.0, y: 8.6, z: 4.0, move: { orbit: { x: 0, z: 4.0, r: 3.0, speed: 0.53, phase: 0.0 } } },
      { type: 'fanBlade', x: 3.0, y: 8.6, z: 4.0, move: { orbit: { x: 0, z: 4.0, r: 3.0, speed: 0.53, phase: 1.5708 } } },
      { type: 'fanBlade', x: 3.0, y: 8.6, z: 4.0, move: { orbit: { x: 0, z: 4.0, r: 3.0, speed: 0.53, phase: 3.1416 } } },
      { type: 'fanBlade', x: 3.0, y: 8.6, z: 4.0, move: { orbit: { x: 0, z: 4.0, r: 3.0, speed: 0.53, phase: 4.7124 } } },
    ],
    wind: [{ x: 2.3, z: -8.8, r: 1.3, y0: 3.6, y1: 11.0, color: 0xdfe9ff }], // Dad's snores (they really are that loud)
    safe: [
      { x: 11.4, z: -1.0, r: 2.6 },     // the bathroom light
    ],
    lamps: [
      { x: -6.6, y: 3.0, z: -11.0, kind: 'deskLamp', safe: { x: -6.6, z: -8.2, r: 2.2 } },
      { x: 6.6, y: 3.0, z: -11.0, kind: 'deskLamp', safe: { x: 6.6, z: -8.2, r: 2.2 } },
      { x: -13.8, y: 1.2, z: -2.0, kind: 'plugLight', safe: { x: -12.2, z: -2.0, r: 2.0 } },
    ],
    collect: { kind: 'button', label: 'sewing buttons', hint: 'Bounce on the bed… and ride the fan!', done: 'All six buttons! Mum will be so pleased', items: [
      [0, 8.2, -11.65], [-12.8, 10.6, 3.0], [3.0, 9.8, 4.0], [7.1, 6.4, 10.4], [2.3, 10.6, -8.8], [11.8, 6.0, 7.4],
    ] },
    fish: F(
      line([8.0, 0.6, -1.0], [4.0, 0.6, 1.0], 3), line([-3.6, 4.4, -2.0], [-3.6, 4.4, -8.0], 3), line([-2.0, 7.4, -3.0], [-2.0, 7.4, -9.0], 3),
      line([2.3, 5.0, -8.8], [2.3, 9.0, -8.8], 3), line([1.5, 9.8, 4.0], [-1.5, 9.8, 4.0], 2), line([-9.8, 3.6, 8.0], [-9.8, 6.0, 8.0], 2),
      line([-12.8, 7.6, 8.0], [-12.8, 10.6, 5.6], 2), line([2.0, 5.4, 10.4], [6.0, 5.4, 10.4], 3), line([10.6, 2.8, 7.4], [10.6, 2.8, 5.0], 2)),
    starfish: [[0, 10.4, 4.0], [-13.0, 0.9, 11.2], [3.0, 8.4, 11.0]],
    enemies: [
      { type: 'moth', path: [[-10.0, 10.2, -1.0], [-8.0, 10.6, 4.0], [-10.0, 10.2, 8.0], [-8.4, 10.6, 3.0]], speed: 1.2 },
      { type: 'moth', path: [[6.0, 6.4, 6.0], [10.0, 6.8, 4.0], [12.0, 6.4, 0.0], [8.0, 6.8, 2.0]], speed: 1.3, phase: 1.4 },
      { type: 'spider', at: [5.0, 11.6, 8.6], drop: 3.0, period: 3.8 },
      { type: 'spider', at: [9.6, 11.6, 5.0], drop: 3.6, period: 4.2, phase: 1.8 },
      { type: 'shadow', path: [[11.0, 0, -5.0], [11.0, 0, -9.6]], speed: 1.3 },
      { type: 'shadow', path: [[-8.0, 0, -8.0], [-8.0, 0, 0.0]], speed: 1.4 },
      { type: 'shadow', path: [[-6.0, 0, 6.0], [2.0, 0, 8.6]], speed: 1.4 },
      { type: 'shadow', path: [[-2.0, 0, 2.2], [4.0, 0, 2.2]], speed: 1.2 },
    ],
    bunnies: [[-4.0, 0, 9.0]],
    goal: { x: -13.0, y: 0, z: -6.0, r: 2.0, label: 'playroom' },
  },
  // ---------------------------------------------------------------------------
  {
    id: 'playroom', title: 'The Playroom', music: 2,
    hazard: { type: 'roamer', kind: 'car', path: [[6.0, -4.5], [5.0, -3.0], [2.5, -2.3], [-0.5, -2.3], [-3.0, -3.0], [-4.0, -4.5], [-3.0, -6.0], [-0.5, -6.7], [2.5, -6.7], [5.0, -6.0]], speed: 5.5, radius: 1.0, top: 1.3, title: 'A wind-up car is zooming round the rug!', hint: 'Jump it, or bounce off the roof', msg: 'Vroom! Run over!' },
    goalText: 'Find six puzzle pieces, then climb up to the attic',
    intro: 'playroom',
    room: {
      id: 'playroom', x0: -14, x1: 14, z0: -12, z1: 12, h: 13, floor: 'carpetGreen', wall: 'playWall', ambient: 1.7,
      doors: [{ wall: '+x', at: -6.0, w: 4.2, h: 9.2 }],
      windows: [{ wall: '+z', at: -7.0, w: 5, y0: 4.0, y1: 9.0 }],
    },
    abilities: { doubleJump: true, flop: true, dash: true, glide: true },
    spawn: [10.6, 0, -6.0], spawnYaw: -0.64, camYaw: 2.5,
    drain: 1.0,
    props: [
      { type: 'playRug', x: 2.0, z: -4.0, w: 12, d: 9 },
      { type: 'toyCars', x: 6.0, z: -6.4 },
      { type: 'blockStack', x: -9.8, z: -10.9, n: 1 }, { type: 'blockStack', x: -8.0, z: -10.9, n: 2 }, { type: 'blockStack', x: -6.2, z: -10.9, n: 3 },
      { type: 'blockStack', x: -4.4, z: -10.9, n: 4 }, { type: 'blockStack', x: -2.6, z: -10.9, n: 5 },
      { type: 'blockStack', x: 2.4, z: -8.6, n: 1 }, { type: 'blockStack', x: 3.0, z: -1.4, n: 1, c: 1.4 },
      { type: 'ballPit', x: 4.0, z: 3.0 },
      { type: 'dollhouse', x: -12.4, z: 4.0, rot: 1 },
      { type: 'rockingHorse', x: -8.0, z: 4.0, rot: 3 },
      { type: 'jackBox', x: 10.4, z: 8.6 },
      { type: 'jackClown', x: 10.4, y: 2.0, z: 8.6, move: { path3: [[10.4, 2.0, 8.6], [10.4, 7.0, 8.6]], speed: 3.2, wait: 2.0, noTurn: true } },
      { type: 'toyCubbies', x: 12.9, z: 1.0, rot: 3 },
      { type: 'atticLadder', x: -12.8, z: -1.0, ceiling: 13 },
      { type: 'toyPiano', x: 3.6, z: 10.6, rot: 2 },
      { type: 'teepee', x: -1.0, z: 9.0 },
      { type: 'starLights', x: 0, z: 11.9, rot: 2, w: 24, y0: 11.6 },
    ],
    safe: [
      { x: 12.2, z: -6.0, r: 2.4 },     // light from Mum and Dad's room
      { x: -1.0, z: 9.0, r: 2.4 },      // the fairy lights in the teepee
    ],
    lamps: [
      { x: -13.8, y: 1.2, z: 0.4, kind: 'plugLight', safe: { x: -10.0, z: 0.0, r: 1.8 } },
      { x: 13.8, y: 1.2, z: 6.0, kind: 'plugLight', safe: { x: 12.4, z: 6.0, r: 1.8 } },
    ],
    collect: { kind: 'puzzle', label: 'puzzle pieces', hint: 'Climb the blocks, belly-flop the ball pit, wind the jack-in-the-box', done: 'The puzzle’s complete! Up the ladder to the attic', items: [
      [4.0, 7.8, 3.0], [-2.6, 10.0, -10.9], [-12.6, 6.2, 4.0], [10.4, 8.6, 8.6], [12.9, 7.0, 0.0], [-9.3, 5.4, 4.0],
    ] },
    fish: F(
      line([9.0, 0.6, -6.0], [4.0, 0.6, -4.0], 3), line([-9.8, 2.6, -10.9], [-2.6, 9.8, -10.9], 5), line([2.0, 2.4, 3.0], [6.0, 6.4, 3.0], 3),
      line([-8.0, 3.4, 5.6], [-8.0, 3.4, 2.4], 2), line([-12.4, 3.2, 2.0], [-12.4, 3.2, 6.0], 2), line([10.4, 3.0, 8.6], [10.4, 6.6, 8.6], 3),
      line([12.9, 6.6, 3.0], [12.9, 6.6, -1.6], 2), line([-12.8, 2.0, -2.0], [-12.8, 8.0, -7.4], 4), line([0.0, 0.6, 6.0], [-4.0, 0.6, 2.0], 3)),
    starfish: [[-1.0, 0.9, 9.0], [-12.4, 9.0, 4.0], [10.4, 10.0, 8.6]],
    enemies: [
      { type: 'moth', path: [[-8.0, 10.6, -7.0], [-2.0, 10.8, -7.0], [-2.0, 10.6, -4.0], [-8.0, 10.8, -4.0]], speed: 1.3 },
      { type: 'moth', path: [[8.0, 9.6, 2.0], [12.0, 9.8, 5.0], [8.0, 9.6, 6.0], [6.0, 9.8, 3.0]], speed: 1.2, phase: 2 },
      { type: 'spider', at: [-10.0, 12.6, 2.0], drop: 4.0, period: 4.0 },
      { type: 'spider', at: [-5.3, 12.6, -10.9], drop: 4.4, period: 3.6, phase: 1.2 },
      { type: 'shadow', path: [[6.0, 0, -9.0], [0.0, 0, -6.0]], speed: 1.4 },
      { type: 'shadow', path: [[-6.0, 0, -6.0], [-6.0, 0, 0.0]], speed: 1.4 },
      { type: 'shadow', path: [[8.0, 0, 0.0], [8.0, 0, 6.0]], speed: 1.3 },
      { type: 'shadow', path: [[-4.0, 0, 7.0], [2.0, 0, 7.4]], speed: 1.2 },
    ],
    bunnies: [[0.0, 0, -2.0]],
    goal: { x: -12.8, y: 10.0, z: -9.1, r: 1.6, label: 'attic' },
  },
  // ---------------------------------------------------------------------------
  {
    id: 'attic', title: 'The Attic', music: 2,
    gloom: 2.8, // how far each floor nightmare's gloom spreads
    goalText: 'Defeat the Nightmare Moth Queen — belly-flop her from the rafters!',
    intro: 'attic',
    room: {
      id: 'attic', x0: -16, x1: 16, z0: -10, z1: 10, h: 14, floor: 'attic', wall: 'atticWall', ambient: 1.95,
      doors: [{ wall: '+x', at: -6.0, w: 4.0, h: 8.0 }],
      windows: [{ wall: '+x', at: 2.6, w: 4, y0: 6.0, y1: 10.0 }],
    },
    abilities: { doubleJump: true, flop: true, dash: true, glide: true },
    spawn: [-11.6, 0, 6.4], spawnYaw: 2.21, camYaw: -0.93,
    drain: 0.6,
    props: [
      { type: 'roofSlope', x: 0, z: 0, l: 32, knee: 9, ridge: 14, half: 10 },
      { type: 'tieBeam', x: -10.0, z: 0, top: 8.6, l: 14 }, { type: 'tieBeam', x: -4.0, z: 0, top: 8.6, l: 14 },
      { type: 'tieBeam', x: 2.0, z: 0, top: 8.6, l: 14 }, { type: 'tieBeam', x: 8.0, z: 0, top: 8.6, l: 14 },
      { type: 'plank', x: -1.0, z: 0, top: 8.8, l: 18.9 },
      { type: 'kingpost', x: -1.0, z: 1.3, y0: 8.6, top: 11.0 },
      { type: 'trunk', x: -14.0, z: -6.0, label: true },
      { type: 'trunk', x: -14.0, z: -3.4, color: 0x3f5a6b }, { type: 'trunk', x: -14.0, z: -3.4, y0: 2.2, w: 2.8, d: 1.9, color: 0x6b5a3f },
      { type: 'oldWardrobe', x: -14.4, z: 0.4, rot: 1 },
      { type: 'cardboardBox', x: 13.8, z: 6.6, label: 'XMAS' },
      { type: 'cardboardBox', x: 13.8, z: 4.2 }, { type: 'cardboardBox', x: 13.8, z: 4.2, y0: 1.8, w: 2.2, d: 2.2, label: 'BABY' },
      { type: 'cardboardBox', x: 11.4, z: 4.2, label: 'LEO' }, { type: 'cardboardBox', x: 11.4, z: 4.2, y0: 1.8, w: 2.2, d: 2.2 }, { type: 'cardboardBox', x: 11.4, z: 4.2, y0: 3.6, w: 2.0, d: 2.0, label: 'TOYS' },
      { type: 'rockingChair', x: -6.0, z: 8.0, rot: 2 },
      { type: 'trunk', x: 3.0, z: 8.6, color: 0x8f3b3f },
      { type: 'dressForm', x: 6.0, z: -8.2 },
      { type: 'oldCrib', x: -6.0, z: -8.4 },
      { type: 'sheetedMirror', x: 11.8, z: -8.6 },
      { type: 'floorHatch', x: -11.6, z: 6.4 },
      { type: 'dustMotes', x: 13.0, z: 2.6, y0: 1.0, w: 3, h: 8, d: 5 },
      { type: 'atticLamp', x: -6.0, z: 0.0, y0: 11.6, ceiling: 14 }, { type: 'atticLamp', x: 6.0, z: 0.0, y0: 11.6, ceiling: 14 },
      { type: 'cobweb', x: 15.9, z: -9.9, y0: 9.0 }, { type: 'cobweb', x: -15.9, z: 9.9, y0: 9.0, rot: 2 },
    ],
    safe: [
      { x: -11.6, z: 6.4, r: 2.6 },     // light up through the hatch
      { x: 13.4, z: 2.6, r: 2.2 },      // the moonbeam from the round window
    ],
    lamps: [
      { x: -15.8, y: 1.2, z: 4.0, kind: 'plugLight', safe: { x: -14.2, z: 4.0, r: 1.8 } },
      { x: 15.8, y: 1.2, z: 8.0, kind: 'plugLight', safe: { x: 14.2, z: 8.0, r: 1.8 } },
    ],
    fish: F(
      line([-10.0, 0.6, 5.0], [-12.0, 0.6, -6.0], 4), line([-14.0, 3.0, -6.0], [-14.0, 5.2, -3.4], 2), line([-14.4, 7.4, 1.6], [-10.0, 9.4, 0.4], 3),
      line([-10.0, 9.2, -6.0], [-10.0, 9.2, 6.0], 4), line([-9.0, 9.2, 0.0], [7.0, 9.2, 0.0], 6), line([2.0, 9.2, -6.0], [2.0, 9.2, 6.0], 4),
      line([8.0, 9.2, 6.0], [8.0, 9.2, -6.0], 4), line([13.6, 2.4, 6.4], [11.4, 6.2, 4.2], 3), line([-4.0, 9.2, -6.0], [-4.0, 9.2, 6.0], 4)),
    starfish: [[-1.0, 12.0, 1.3], [-15.0, 0.9, -8.8], [8.0, 10.2, -6.6]],
    enemies: [
      { type: 'boss', path: [[-11.0, 5.0, -4.0], [-4.0, 5.4, -5.5], [3.0, 5.0, -4.0], [9.0, 5.4, -1.0], [9.0, 5.0, 3.0], [3.0, 5.4, 5.5], [-4.0, 5.0, 4.0], [-11.0, 5.4, 1.0]], speed: 2.8, hp: 3, scale: 3 },
      { type: 'spider', at: [12.6, 12.6, 6.0], drop: 4.0, period: 4.0 },
      { type: 'shadow', path: [[-8.0, 0, -6.0], [-8.0, 0, 4.0]], speed: 1.3 },
      { type: 'shadow', path: [[4.0, 0, -6.0], [4.0, 0, 6.0]], speed: 1.4 },
      { type: 'shadow', path: [[8.0, 0, 7.0], [14.0, 0, -2.0]], speed: 1.2 },
    ],
    bunnies: [],
    goal: { x: 14.6, y: 0, z: -6.0, r: 2.0, label: 'Leo’s room', needsKnots: true },
  },
  // ---------------------------------------------------------------------------
  {
    id: 'bed', title: 'Back to Bed', room: BEDROOM, music: 3,
    hazard: { type: 'sweeper', at: [0.4, 0, 2.0], len: 5.2, width: 0.5, speed: 0.75, imp: [0.4, 0, 2.0], impScale: 0.8, title: 'A long shadowy arm is sweeping the floor!', hint: 'Jump it as it comes round', msg: 'Grabbed by the shadow arm!' },
    goalText: 'Chase the nightmares away from Leo',
    intro: 'bed', outro: 'ending',
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
    lamps: [{ x: 6.9, y: 3.6, z: 4.6, kind: 'deskLamp', safe: { x: 5.3, z: 3.6, r: 2.6 } }],
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
