// Furniture and rooms as collision boxes. Pure data (no THREE) so the level
// checker can use exactly what the game uses. Scale: 1 unit ≈ 22 cm, so the
// 55 cm Blåhaj is 2.5 units long and a 2.5 m ceiling is 11.4 units high.
//
// A prefab is { type, x, z, rot, ...params }. rot = quarter turns; local +z is
// the prefab's front. expand(p) returns world boxes:
//   { min:[x,y,z], max:[x,y,z], type:'solid'|'bounce'|'hazard', tag, surface }

export const U = 1 / 0.22; // units per metre

export function rotXZ(x, z, r) {
  switch (((r % 4) + 4) % 4) {
    case 0: return [x, z];
    case 1: return [z, -x];
    case 2: return [-x, -z];
    default: return [-z, x];
  }
}
const B = (x, y0, z, w, h, d, extra = {}) => Object.assign({ x, y0, z, w, h, d }, extra);

// --- local collider definitions ------------------------------------------
export const PREFABS = {
  cabinBed: (p) => {
    const w = p.w || 5.5, l = p.l || 9.1, h = p.h || 4.5;
    return [
      B(0, 0, 0, w, h, l, { tag: 'bed', surface: 'duvet' }),
      B(0, 0, -l / 2 + 0.2, w + 0.3, h + 2.1, 0.4, { tag: 'headboard' }),
    ];
  },
  bedsideTable: () => [B(0, 0, 0, 2, 2.7, 2, { tag: 'bedside' })],
  desk: (p) => {
    const w = p.w || 5.5, d = p.d || 2.7, h = p.h || 3.4;
    const legs = [[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sz]) => B(sx * (w / 2 - 0.2), 0, sz * (d / 2 - 0.2), 0.3, h - 0.25, 0.3, { tag: 'deskLeg' }));
    return [B(0, h - 0.25, 0, w, 0.25, d, { tag: 'desk', surface: 'wood' }), ...legs];
  },
  chair: () => {
    const legs = [[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sz]) => B(sx * 0.8, 0, sz * 0.8, 0.22, 1.75, 0.22, { tag: 'chairLeg' }));
    return [B(0, 1.75, 0, 2, 0.3, 2, { tag: 'chair', surface: 'wood' }), B(0, 2.05, -0.9, 2, 2.3, 0.22, { tag: 'chairBack' }), ...legs];
  },
  bookcase: (p) => [B(0, 0, 0, p.w || 3.6, p.h || 6.4, p.d || 1.4, { tag: 'bookcase', surface: 'wood' })],
  wallShelf: (p) => [B(0, -0.25, 0, p.w || 2, 0.25, p.d || 1.1, { tag: 'shelf', surface: 'wood' })], // p.y = shelf top
  // drawers: list of { y0, h, out } from bottom to top; out = how far pulled out
  dresser: (p) => {
    const w = p.w || 4, d = p.d || 1.8, h = p.h || 3.6;
    const boxes = [B(0, 0, 0, w, h, d, { tag: 'dresser', surface: 'wood' })];
    for (const dr of p.drawers || []) {
      if (dr.out > 0) boxes.push(B(0, dr.y0, d / 2 + dr.out / 2, w - 0.4, dr.h, dr.out, { tag: 'drawer', surface: 'wood' }));
    }
    return boxes;
  },
  wardrobe: (p) => [B(0, 0, 0, p.w || 3.6, p.h || 9, p.d || 2.6, { tag: 'wardrobe' })],
  toyBox: () => [B(0, 0, 0, 2.7, 1.8, 1.8, { tag: 'toybox', surface: 'toys' })],
  laundry: () => [B(0, 0, 0, 1.9, 2.0, 1.9, { tag: 'laundry' }), B(0, 2.0, 0, 1.9, 0.3, 1.9, { tag: 'laundryTop', type: 'bounce', surface: 'cloth' })],
  // stacked toy blocks: list of [x, z, n] towers of 0.9-unit cubes
  blocks: (p) => (p.towers || [[0, 0, 1]]).map(([x, z, n]) => B(x, 0, z, 0.95, 0.95 * n, 0.95, { tag: 'blocks', surface: 'toy' })),
  books: (p) => [B(0, 0, 0, p.w || 1.4, p.h || 1, p.d || 1.9, { tag: 'books' })],
  lego: (p) => [B(0, 0, 0, p.w || 1.5, 0.35, p.d || 1.5, { tag: 'lego', type: 'hazard' })],
  ball: (p) => { const s = p.r ? p.r * 1.6 : 1.1; return [B(0, 0, 0, s, s, s, { tag: 'ball', type: 'bounce', surface: 'rubber' })]; },
  pillow: (p) => [B(0, 0, 0, p.w || 2.6, p.h || 0.9, p.d || 1.7, { tag: 'pillow', type: 'bounce', surface: 'cloth' })],
  // living room
  couch: (p) => {
    const w = p.w || 9, d = p.d || 4;
    return [
      B(0, 0, 0.3, w - 2, 1.4, d - 0.6, { tag: 'couchBase' }),
      B(0, 1.4, 0.35, w - 2, 0.6, d - 1.1, { tag: 'cushion', type: 'bounce', surface: 'cloth' }),
      B(0, 0, -d / 2 + 0.55, w, 3.9, 1.1, { tag: 'couchBack', surface: 'cloth' }),
      B(-w / 2 + 0.5, 0, 0.3, 1, 2.7, d - 0.6, { tag: 'couchArm', surface: 'cloth' }),
      B(w / 2 - 0.5, 0, 0.3, 1, 2.7, d - 0.6, { tag: 'couchArm', surface: 'cloth' }),
    ];
  },
  armchair: () => [
    B(0, 0, 0.25, 2.6, 1.3, 2.6, { tag: 'armBase' }),
    B(0, 1.3, 0.3, 2.6, 0.5, 2.4, { tag: 'cushion', type: 'bounce', surface: 'cloth' }),
    B(0, 0, -1.45, 3.8, 4.3, 0.9, { tag: 'armBack', surface: 'cloth' }),
    B(-1.6, 0, 0.25, 0.6, 2.5, 2.6, { tag: 'armArm', surface: 'cloth' }),
    B(1.6, 0, 0.25, 0.6, 2.5, 2.6, { tag: 'armArm', surface: 'cloth' }),
  ],
  coffeeTable: (p) => {
    const w = p.w || 5, d = p.d || 2.7, h = p.h || 2.0;
    const legs = [[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sz]) => B(sx * (w / 2 - 0.3), 0, sz * (d / 2 - 0.3), 0.35, h - 0.25, 0.35));
    return [B(0, h - 0.25, 0, w, 0.25, d, { tag: 'coffeeTable', surface: 'wood' }), ...legs];
  },
  tvStand: (p) => [B(0, 0, 0, p.w || 7.3, 2.3, 1.8, { tag: 'tvStand', surface: 'wood' }), B(0, 2.3, -0.3, (p.w || 7.3) * 0.75, 3.6, 0.3, { tag: 'tv' })],
  sideTable: () => [B(0, 2.3, 0, 2, 0.2, 2, { tag: 'sideTable', surface: 'wood' }), B(0, 0, 0, 0.4, 2.3, 0.4)],
  floorLamp: () => [B(0, 0, 0, 1.4, 0.2, 1.4), B(0, 0, 0, 0.25, 7.2, 0.25, { tag: 'lampPole' })],
  plant: () => [B(0, 0, 0, 1.8, 2.2, 1.8, { tag: 'plantPot', surface: 'soil' })],
  fireplace: () => [
    B(0, 0, 0.4, 7.5, 0.55, 2.4, { tag: 'hearth', surface: 'stone' }),
    B(-2.75, 0.55, -0.4, 2, 4.6, 0.8, { tag: 'firePillar' }),
    B(2.75, 0.55, -0.4, 2, 4.6, 0.8, { tag: 'firePillar' }),
    B(0, 5.15, -0.1, 8.2, 0.35, 1.5, { tag: 'mantel', surface: 'wood' }),
    B(0, 0.55, -0.6, 3.5, 4.6, 0.4, { tag: 'fireBack' }),
  ],
  firewood: () => [B(0, 0, 0, 2, 2.6, 1.6, { tag: 'firewood', surface: 'wood' })],
  dogBed: () => [B(0, 0, 0, 3.8, 0.75, 3.8, { tag: 'dogBed', surface: 'cloth' })],
  ottoman: () => [B(0, 0, 0, 2.4, 1.9, 2.4, { tag: 'ottoman', type: 'bounce', surface: 'cloth' })],
  bigShelf: (p) => [B(0, 0, 0, p.w || 4.5, p.h || 8.2, p.d || 1.6, { tag: 'bigShelf', surface: 'wood' })],
  // stairwell
  stairs: (p) => {
    const n = p.n || 14, rise = p.rise || 0.815, run = p.run || 1.3, w = p.w || 4.5;
    const out = [];
    for (let i = 0; i < n; i++) {
      out.push(B(0, 0, -(i + 0.5) * run, w, rise * (i + 1), run, { tag: 'step', step: i, surface: 'carpet' }));
      out.push(B(w / 2 + 0.12, rise * (i + 1), -(i + 0.5) * run, 0.24, 3.4, run, { tag: 'banister' }));
    }
    return out;
  },
  cat: () => [B(0, 0, 0, 1.6, 1.3, 2.4, { tag: 'cat' })],
  babyGate: () => [B(0, 0, 0, 4.5, 3.2, 0.2, { tag: 'gate' })],
  roomba: () => [B(0, 0, 0, 1.6, 0.45, 1.6, { tag: 'roomba', surface: 'plastic' })],
  basket: (p) => [B(0, 0, 0, p.w || 2.2, 2.1, p.d || 1.8, { tag: 'basket', surface: 'cloth' })],
  shoeRack: () => [B(0, 0, 0, 4, 1.6, 1.3, { tag: 'shoeRack', surface: 'wood' })],
  hallTable: () => [B(0, 3.2, 0, 4, 0.25, 1.6, { tag: 'hallTable', surface: 'wood' }), B(-1.7, 0, 0, 0.3, 3.2, 1.3), B(1.7, 0, 0, 0.3, 3.2, 1.3)],
  // decorative only
  rug: () => [], window: () => [], door: () => [], picture: () => [], toyScatter: () => [], ceilingLamp: () => [], curtain: () => [],
};

export function expand(p) {
  const make = PREFABS[p.type];
  if (!make) throw new Error('unknown prefab ' + p.type);
  const r = p.rot || 0, by = p.y || 0;
  return make(p).map((b) => {
    const [cx, cz] = rotXZ(b.x, b.z, r);
    const swap = r % 2 !== 0;
    const w = swap ? b.d : b.w, d = swap ? b.w : b.d;
    const x = p.x + cx, z = p.z + cz;
    return {
      min: [x - w / 2, by + b.y0, z - d / 2], max: [x + w / 2, by + b.y0 + b.h, z + d / 2],
      type: b.type || 'solid', tag: b.tag || p.type, surface: b.surface, step: b.step, prefab: p,
    };
  });
}

// --- rooms ------------------------------------------------------------------
// room: { x0, x1, z0, z1, h, doors:[{wall, at, w, h}], windows:[{wall, at, w, y0, y1, sill}],
//         upper:[{x0,x1,z0,z1,y}] extra floors (landings) }
// walls: '-z' back, '+z' front, '-x' left, '+x' right
export function roomBoxes(room) {
  const T = 2; // wall thickness (outside the room)
  const out = [];
  const box = (x0, y0, z0, x1, y1, z1, tag, extra = {}) => out.push(Object.assign({ min: [x0, y0, z0], max: [x1, y1, z1], type: 'solid', tag }, extra));
  box(room.x0 - T, -2, room.z0 - T, room.x1 + T, 0, room.z1 + T, 'floor', { surface: room.floor || 'wood' });
  box(room.x0 - T, room.h, room.z0 - T, room.x1 + T, room.h + T, room.z1 + T, 'ceiling');
  const walls = {
    '-z': { a0: room.x0, a1: room.x1, fixed: room.z0, axis: 'x' },
    '+z': { a0: room.x0, a1: room.x1, fixed: room.z1, axis: 'x' },
    '-x': { a0: room.z0, a1: room.z1, fixed: room.x0, axis: 'z' },
    '+x': { a0: room.z0, a1: room.z1, fixed: room.x1, axis: 'z' },
  };
  for (const [name, w] of Object.entries(walls)) {
    const holes = [
      ...(room.doors || []).filter((d) => d.wall === name).map((d) => ({ a0: d.at - d.w / 2, a1: d.at + d.w / 2, y0: d.y0 || 0, h: d.h })),
      ...(room.windows || []).filter((d) => d.wall === name).map((d) => ({ a0: d.at - d.w / 2, a1: d.at + d.w / 2, y0: d.y0, h: d.y1 - d.y0 })),
    ].sort((a, b) => a.a0 - b.a0);
    // split the wall along its length around door openings
    const cuts = [w.a0 - T, ...holes.flatMap((hh) => [hh.a0, hh.a1]), w.a1 + T];
    const seg = (a0, a1, y0, y1) => {
      if (a1 - a0 < 0.01) return;
      const outer = name[0] === '-' ? w.fixed - T : w.fixed, inner = name[0] === '-' ? w.fixed : w.fixed + T;
      if (w.axis === 'x') box(a0, y0, outer, a1, y1, inner, 'wall:' + name);
      else box(outer, y0, a0, inner, y1, a1, 'wall:' + name);
    };
    for (let i = 0; i < cuts.length; i += 2) seg(cuts[i], cuts[i + 1], 0, room.h);
    for (const hh of holes) { seg(hh.a0, hh.a1, hh.y0 + hh.h, room.h); if (hh.y0 > 0) seg(hh.a0, hh.a1, 0, hh.y0); }
    for (const win of (room.windows || []).filter((x) => x.wall === name && x.sill)) {
      const s = win.sill;
      if (w.axis === 'x') {
        const zz0 = name === '-z' ? w.fixed : w.fixed - s, zz1 = name === '-z' ? w.fixed + s : w.fixed;
        box(win.at - win.w / 2 - 0.3, win.y0 - 0.3, zz0, win.at + win.w / 2 + 0.3, win.y0, zz1, 'sill', { surface: 'wood' });
      } else {
        const xx0 = name === '-x' ? w.fixed : w.fixed - s, xx1 = name === '-x' ? w.fixed + s : w.fixed;
        box(xx0, win.y0 - 0.3, win.at - win.w / 2 - 0.3, xx1, win.y0, win.at + win.w / 2 + 0.3, 'sill', { surface: 'wood' });
      }
    }
  }
  for (const u of room.upper || []) box(u.x0, u.y - 0.6, u.z0, u.x1, u.y, u.z1, 'landing', { surface: 'carpet' });
  return out;
}
