// Procedural PBR textures. Every surface in the game gets a tileable
// colour map, a normal map (derived from a height field) and a roughness
// map, all generated at load time so the game ships with no image files.
import * as THREE from 'three';

// ---------------------------------------------------------------- noise --
function hash(x, y, seed) {
  let h = Math.imul(x | 0, 374761393) ^ Math.imul(y | 0, 668265263) ^ Math.imul(seed | 0, 1442695041);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
}
const mod = (a, n) => ((a % n) + n) % n;
const smooth = (t) => t * t * (3 - 2 * t);
const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

// tileable value noise with integer period P
export function vnoise(x, y, P, seed = 0) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const u = smooth(x - xi), v = smooth(y - yi);
  const x0 = mod(xi, P), x1 = mod(xi + 1, P), y0 = mod(yi, P), y1 = mod(yi + 1, P);
  return lerp(lerp(hash(x0, y0, seed), hash(x1, y0, seed), u), lerp(hash(x0, y1, seed), hash(x1, y1, seed), u), v);
}
// value noise with separate integer periods per axis (for stretched grain)
export function vnoise2(x, y, Px, Py, seed = 0) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const u = smooth(x - xi), v = smooth(y - yi);
  const x0 = mod(xi, Px), x1 = mod(xi + 1, Px), y0 = mod(yi, Py), y1 = mod(yi + 1, Py);
  return lerp(lerp(hash(x0, y0, seed), hash(x1, y0, seed), u), lerp(hash(x0, y1, seed), hash(x1, y1, seed), u), v);
}
export function fbm2(x, y, Px, Py, oct = 4, seed = 0) {
  let a = 0.5, f = 1, s = 0, n = 0;
  for (let o = 0; o < oct; o++) {
    s += a * vnoise2(x * f, y * f, Px * f, Py * f, seed + o * 17);
    n += a; a *= 0.5; f *= 2;
  }
  return s / n;
}
const sstep = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
export function fbm(x, y, P, oct = 4, seed = 0) {
  let a = 0.5, f = 1, s = 0, n = 0;
  for (let o = 0; o < oct; o++) {
    s += a * vnoise(x * f, y * f, P * f, seed + o * 17);
    n += a; a *= 0.5; f *= 2;
  }
  return s / n;
}
// tileable worley noise: returns [f1, f2, cellId]
export function worley(x, y, P, seed = 0) {
  const xi = Math.floor(x), yi = Math.floor(y);
  let f1 = 9, f2 = 9, id = 0;
  for (let j = -1; j <= 1; j++) for (let i = -1; i <= 1; i++) {
    const cx = xi + i, cy = yi + j;
    const wx = mod(cx, P), wy = mod(cy, P);
    const px = cx + hash(wx, wy, seed), py = cy + hash(wx, wy, seed + 99);
    const d = Math.hypot(px - x, py - y);
    if (d < f1) { f2 = f1; f1 = d; id = hash(wx, wy, seed + 7); } else if (d < f2) f2 = d;
  }
  return [f1, f2, id];
}

// ------------------------------------------------------------- builder --
const cache = new Map();
let maxAniso = 8;
export function setMaxAnisotropy(a) { maxAniso = Math.min(16, a); }
// High/Ultra build hero textures (wood, paint, bedding, upholstery) at twice the base resolution.
let detail = 1;
export function setTextureDetail(d) { detail = d; }

function dataTex(data, size, srgb) {
  const t = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.anisotropy = maxAniso;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.userData.shared = true;
  t.needsUpdate = true;
  return t;
}

/**
 * fn(u, v) -> [r, g, b, height, roughness]  (all 0..1, u/v in 0..1)
 * Returns { map, normalMap, roughnessMap }.
 */
export function makeSet(key, size, strength, fn, hi = false) {
  const full = hi ? Math.min(1024, size * detail) : size; // only hero surfaces get the extra resolution
  strength *= full / size; // same bump per texel distance at any resolution
  size = full;
  key += '@' + size;
  if (cache.has(key)) return cache.get(key);
  const n = size * size;
  const col = new Uint8Array(n * 4), nrm = new Uint8Array(n * 4), rgh = new Uint8Array(n * 4);
  const h = new Float32Array(n);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const i = y * size + x;
    const s = fn(x / size, y / size);
    col[i * 4] = clamp01(s[0]) * 255; col[i * 4 + 1] = clamp01(s[1]) * 255; col[i * 4 + 2] = clamp01(s[2]) * 255; col[i * 4 + 3] = 255;
    h[i] = s[3];
    const r = clamp01(s[4]) * 255;
    rgh[i * 4] = 255; rgh[i * 4 + 1] = r; rgh[i * 4 + 2] = 0; rgh[i * 4 + 3] = 255;
  }
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const i = y * size + x;
    const hl = h[y * size + mod(x - 1, size)], hr = h[y * size + mod(x + 1, size)];
    const hd = h[mod(y - 1, size) * size + x], hu = h[mod(y + 1, size) * size + x];
    let nx = (hl - hr) * strength, ny = (hd - hu) * strength, nz = 1;
    const len = Math.hypot(nx, ny, nz);
    nx /= len; ny /= len; nz /= len;
    nrm[i * 4] = (nx * 0.5 + 0.5) * 255; nrm[i * 4 + 1] = (ny * 0.5 + 0.5) * 255; nrm[i * 4 + 2] = (nz * 0.5 + 0.5) * 255; nrm[i * 4 + 3] = 255;
  }
  const set = { map: dataTex(col, size, true), normalMap: dataTex(nrm, size, false), roughnessMap: dataTex(rgh, size, false) };
  cache.set(key, set);
  return set;
}

const hex = (c) => [((c >> 16) & 255) / 255, ((c >> 8) & 255) / 255, (c & 255) / 255];
const mix3 = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
const mul3 = (a, k) => [a[0] * k, a[1] * k, a[2] * k];

// -------------------------------------------------------------- library --
export const Tex = {
  // soft minky plush (Blåhaj, bunnies, pillows). Greyscale; tinted by material/vertex colour.
  plush() {
    return makeSet('plush', 512, 5, (u, v) => {
      const fuzz = fbm(u * 64, v * 64, 64, 3, 1);
      const fibre = vnoise(u * 256, v * 24, 256, 5) * 0.5 + vnoise(u * 24, v * 256, 24, 6) * 0.5;
      const clump = fbm(u * 12, v * 12, 12, 3, 9);
      const hgt = fuzz * 0.5 + fibre * 0.3 + clump * 0.2;
      const shade = 0.88 + fuzz * 0.1 + clump * 0.04;
      return [shade, shade, shade, hgt, 0.85 + fuzz * 0.15];
    });
  },
  // chunky knitted rug
  knit() {
    return makeSet('knit', 512, 9, (u, v) => {
      const cx = u * 16, cy = v * 22;
      const fx = cx - Math.floor(cx) - 0.5, fy = cy - Math.floor(cy);
      // each stitch is a "V": two slanted lobes
      const lobe = Math.abs(Math.abs(fx) - 0.25 - (fy - 0.5) * 0.25);
      const st = clamp01(1 - lobe * 4.2) * Math.sin(fy * Math.PI);
      const yarn = vnoise(u * 300, v * 300, 300, 3) * 0.15;
      const hgt = st * 0.85 + yarn;
      const s = 0.62 + st * 0.38 + yarn * 0.4;
      return [s, s, s, hgt, 0.95];
    });
  },
  // fine linen weave (book covers, sign boards)
  // fine linen weave (book covers, sign boards)
  linen() {
    return makeSet('linen', 512, 3, (u, v) => {
      const T = 96;
      const a = Math.sin(u * Math.PI * 2 * T) * 0.5 + 0.5, b = Math.sin(v * Math.PI * 2 * T) * 0.5 + 0.5;
      const n = fbm(u * 16, v * 16, 16, 3, 3);
      const slub = vnoise2(u * 6, v * 192, 6, 192, 4) * 0.5 + vnoise2(u * 192, v * 6, 192, 6, 5) * 0.5;
      const hgt = (((Math.floor(u * T) + Math.floor(v * T)) & 1) ? a : b) * 0.55 + n * 0.3 + slub * 0.15;
      const s = 0.8 + hgt * 0.16 + slub * 0.04;
      return [s, s, s, hgt, 0.8 + n * 0.15];
    });
  },
  // wood: base / grain colours; planks=true adds plank seams
  // Wood: grain runs along v. Fine latewood lines, open pores, a lazy figure,
  // and (planks=true) boards with seams and staggered end joints.
  wood(key, base, dark, planks = false, ringScale = 1) {
    const A = hex(base), B = hex(dark);
    const lines = Math.max(6, Math.round(22 * ringScale));
    return makeSet('wood' + key, 512, 3, (u, v) => {
      let shift = 0, tint = 0, seam = 1;
      if (planks) {
        const N = 4, pi = Math.floor(u * N), fu = u * N - pi;
        const vv = v * 2 + hash(pi, 0, 5), bi = mod(Math.floor(vv), 2), fv = vv - Math.floor(vv);
        const du = Math.min(fu, 1 - fu) / N, dv = Math.min(fv, 1 - fv) / 2;
        seam = sstep(0.0008, 0.0026, Math.min(du, dv));
        shift = hash(pi, bi, 3) * 9; tint = (hash(pi, bi, 4) - 0.5) * 0.16;
      }
      const warp = fbm2(u * 3, v * 2, 3, 2, 4, 11) * 4.2 + vnoise2(u * 24, v * 3, 24, 3, 12) * 0.3;
      const x = u * lines + warp + shift;
      const f = x - Math.floor(x);
      const late = sstep(0.5, 0.92, f) * (1 - sstep(0.94, 1, f));
      const streak = vnoise2(u * 256, v * 6, 256, 6, 13);
      const poreN = vnoise2(u * 384, v * 20, 384, 20, 14);
      const pore = sstep(0.68, 0.9, poreN) * (0.4 + late * 0.6);
      const figure = fbm2(u * 3, v * 3, 3, 3, 3, 15);
      const t = clamp01(late * 0.32 + streak * 0.2 + pore * 0.3 + (figure - 0.5) * 0.45 + 0.08);
      const c = mul3(mix3(A, B, t), (1 + tint + (figure - 0.5) * 0.1) * (0.55 + 0.45 * seam));
      const hgt = seam * 0.6 + (1 - late) * 0.12 - pore * 0.25 + streak * 0.05;
      return [c[0], c[1], c[2], hgt, 0.5 + pore * 0.25 + late * 0.08 + (1 - seam) * 0.3];
    }, true);
  },
  // glossy painted wood for toy blocks (greyscale, tinted)
  // satin paint over wood: faint grain shows through, soft brush marks
  painted() {
    return makeSet('painted', 512, 1.6, (u, v) => {
      const warp = fbm2(u * 4, v * 2, 4, 2, 3, 23) * 2.4;
      const x = u * 32 + warp, f = x - Math.floor(x);
      const grain = sstep(0.6, 0.9, f) * (1 - sstep(0.92, 1, f));
      const n = fbm(u * 8, v * 8, 8, 4, 21);
      const brush = vnoise2(u * 160, v * 4, 160, 4, 22);
      const s = 0.93 + n * 0.04 + brush * 0.02 - grain * 0.012;
      return [s, s, s, n * 0.35 + brush * 0.3 - grain * 0.35, 0.34 + brush * 0.1 + n * 0.06];
    }, true);
  },
  marble() {
    return makeSet('marble', 512, 1.5, (u, v) => {
      const w = fbm(u * 4, v * 4, 4, 5, 31);
      const vein = Math.pow(1 - Math.abs(Math.sin((u * 3 + v * 2 + w * 3) * Math.PI)), 12);
      const speck = hash(Math.floor(u * 512), Math.floor(v * 512), 8) > 0.985 ? 0.25 : 0;
      const c = mix3([0.96, 0.95, 0.93], [0.62, 0.64, 0.7], vein * 0.7 + speck);
      return [c[0], c[1], c[2], w * 0.2, 0.12 + vein * 0.1];
    });
  },
  sponge() {
    return makeSet('sponge', 512, 10, (u, v) => {
      const [f1] = worley(u * 28, v * 28, 28, 41);
      const [g1] = worley(u * 70, v * 70, 70, 42);
      const pore = clamp01(f1 * 1.6) * 0.7 + clamp01(g1 * 1.6) * 0.3;
      const c = mix3([0.78, 0.56, 0.08], [1.0, 0.86, 0.3], pore);
      return [c[0], c[1], c[2], pore, 0.95];
    });
  },
  scrubber() {
    return makeSet('scrubber', 256, 8, (u, v) => {
      const a = vnoise(u * 90, v * 30, 90, 51), b = vnoise(u * 30, v * 90, 30, 52);
      const f = Math.max(a, b);
      const c = mix3([0.08, 0.38, 0.18], [0.3, 0.75, 0.4], f);
      return [c[0], c[1], c[2], f, 0.9];
    });
  },
  cookie() {
    return makeSet('cookie', 512, 7, (u, v) => {
      const bump = fbm(u * 10, v * 10, 10, 5, 61);
      const [f1, , id] = worley(u * 7, v * 7, 7, 62);
      const chip = id > 0.55 && f1 < 0.22 ? 1 : 0;
      const crumb = vnoise(u * 160, v * 160, 160, 63);
      let c = mix3([0.7, 0.45, 0.2], [0.93, 0.72, 0.42], bump * 0.8 + crumb * 0.2);
      if (chip) c = [0.25, 0.13, 0.07];
      return [c[0], c[1], c[2], bump * 0.7 + crumb * 0.2 + chip * 0.4, chip ? 0.35 : 0.85];
    });
  },
  roof() {
    return makeSet('roof', 512, 6, (u, v) => {
      const rows = 6, cols = 6;
      const ry = v * rows, row = Math.floor(ry);
      const rx = u * cols + (row & 1) * 0.5;
      const fx = rx - Math.floor(rx) - 0.5, fy = ry - row;
      // scalloped tiles: rounded bottom edge
      const edge = fy - (1 - Math.sqrt(Math.max(0, 0.25 - fx * fx)) * 0.9);
      const tile = clamp01(edge * 12);
      const id = hash(Math.floor(rx), row, 71);
      const n = fbm(u * 24, v * 24, 24, 3, 72);
      const c = mul3(mix3([0.78, 0.33, 0.24], [0.93, 0.5, 0.35], id * 0.7 + n * 0.3), 0.55 + 0.45 * tile);
      return [c[0], c[1], c[2], tile * 0.7 + fy * 0.3 + n * 0.1, 0.6 + n * 0.2];
    });
  },
  brick() {
    return makeSet('brick', 512, 6, (u, v) => {
      const ry = v * 8, row = Math.floor(ry);
      const rx = u * 4 + (row & 1) * 0.5;
      const fx = rx - Math.floor(rx), fy = ry - row;
      const mortar = Math.min(fx, 1 - fx) * 4 < 0.12 || Math.min(fy, 1 - fy) < 0.08;
      const n = fbm(u * 32, v * 32, 32, 4, 81);
      const id = hash(Math.floor(rx), row, 82);
      const c = mortar ? [0.85, 0.82, 0.76] : mix3([0.62, 0.25, 0.2], [0.85, 0.42, 0.3], id * 0.6 + n * 0.4);
      return [c[0], c[1], c[2], mortar ? 0.1 : 0.7 + n * 0.3, 0.85];
    });
  },
  cardboard() {
    return makeSet('cardboard', 512, 3, (u, v) => {
      const n = fbm(u * 20, v * 20, 20, 4, 91);
      const corr = Math.sin(u * Math.PI * 2 * 40) * 0.5 + 0.5;
      const tape = Math.abs(v - 0.5) < 0.09;
      let c = mix3([0.66, 0.48, 0.3], [0.8, 0.63, 0.42], n);
      if (tape) c = mix3([0.85, 0.72, 0.52], [0.95, 0.85, 0.65], n);
      // little printed fragile glass icon area -> just darker print stripe
      if (!tape && u > 0.08 && u < 0.32 && v > 0.12 && v < 0.2) c = mul3(c, 0.55);
      return [c[0], c[1], c[2], tape ? 0.6 : corr * 0.3 + n * 0.4, tape ? 0.3 : 0.9];
    });
  },
  // quilted cotton: soft domed diamonds, stitched seams with thread dashes,
  // a twill weave you can see up close and a sprinkle of printed stars
  quilt() {
    return makeSet('quilt', 512, 7, (u, v) => {
      const a = (u + v) * 6, b = (u - v) * 6;
      const ia = Math.floor(a), ib = Math.floor(b), fa = a - ia, fb = b - ib;
      const puff = Math.pow(Math.sin(fa * Math.PI) * Math.sin(fb * Math.PI), 0.45);
      const da = Math.min(fa, 1 - fa), db = Math.min(fb, 1 - fb);
      const along = da < db ? fb : fa;
      const dash = (along * 10 - Math.floor(along * 10)) < 0.62 ? 1 : 0.35;
      const stitch = (1 - sstep(0.0, 0.03, Math.min(da, db))) * dash;
      const tw = u * 160 + v * 160, twill = Math.sin((tw - Math.floor(tw)) * Math.PI);
      const n = fbm(u * 32, v * 32, 32, 3, 101);
      // printed star in some diamonds (cells counted mod 6 so it tiles)
      let star = 0;
      if (hash(mod(ia, 6), mod(ib, 6), 77) > 0.55) {
        const px = (fa - 0.5) * 0.7071 + (fb - 0.5) * 0.7071, py = (fa - 0.5) * 0.7071 - (fb - 0.5) * 0.7071;
        const ang = Math.atan2(py, px) + hash(mod(ia, 6), mod(ib, 6), 78) * 6.28, r = Math.hypot(px, py);
        star = 1 - sstep(0.105, 0.125, r / (0.62 + 0.38 * Math.cos(5 * ang)) * 0.62);
      }
      const s = 0.74 + puff * 0.16 - stitch * 0.16 + twill * 0.03 + n * 0.04 + star * 0.22;
      return [s, s, s, puff * 0.85 - stitch * 0.25 + twill * 0.03 + n * 0.05, 0.9 - star * 0.15];
    }, true);
  },
  grass() {
    return makeSet('grass', 512, 4, (u, v) => {
      const n = fbm(u * 16, v * 16, 16, 5, 111);
      const blades = vnoise(u * 200, v * 200, 200, 112);
      const c = mix3([0.16, 0.42, 0.2], [0.45, 0.78, 0.36], n * 0.7 + blades * 0.3);
      return [c[0], c[1], c[2], n * 0.5 + blades * 0.5, 0.85];
    });
  },
  rock() {
    return makeSet('rock', 512, 8, (u, v) => {
      const n = fbm(u * 8, v * 8, 8, 6, 121);
      const [f1, f2] = worley(u * 6, v * 6, 6, 122);
      const crack = clamp01((f2 - f1) * 6);
      const c = mul3(mix3([0.42, 0.38, 0.5], [0.72, 0.68, 0.78], n), 0.6 + 0.4 * crack);
      return [c[0], c[1], c[2], n * 0.6 + crack * 0.4, 0.8];
    });
  },
  ceramic() {
    return makeSet('ceramic', 256, 1, (u, v) => {
      const n = fbm(u * 6, v * 6, 6, 3, 131);
      const speck = hash(Math.floor(u * 256), Math.floor(v * 256), 132) > 0.992 ? 0.6 : 1;
      const s = (0.95 + n * 0.05) * speck;
      return [s, s, s, n * 0.3, 0.12];
    });
  },
  water() {
    return makeSet('water', 512, 6, (u, v) => {
      const n = fbm(u * 8, v * 8, 8, 5, 141);
      const r = fbm(u * 3 + n, v * 3, 3, 3, 142);
      const hgt = n * 0.6 + r * 0.4;
      return [1, 1, 1, hgt, 0.05];
    });
  },
  cloud() {
    return makeSet('cloud', 256, 2, (u, v) => {
      const n = fbm(u * 6, v * 6, 6, 4, 151);
      const s = 0.92 + n * 0.08;
      return [s, s, s, n, 1];
    });
  },
  wicker() {
    return makeSet('wicker', 256, 8, (u, v) => {
      const a = Math.sin(u * Math.PI * 2 * 16) * 0.5 + 0.5, b = Math.sin(v * Math.PI * 2 * 16) * 0.5 + 0.5;
      const over = ((Math.floor(u * 16) + Math.floor(v * 16)) & 1) ? a : b;
      const n = vnoise(u * 128, v * 128, 128, 161);
      const c = mix3([0.55, 0.36, 0.18], [0.86, 0.66, 0.4], over * 0.7 + n * 0.3);
      return [c[0], c[1], c[2], over, 0.8];
    });
  },
};


// ------------------------------------------------------------ interiors --
Object.assign(Tex, {
  // matte painted plaster, greyscale (tinted by material colour)
  plaster() {
    return makeSet('plaster', 512, 1.2, (u, v) => {
      const n = fbm(u * 6, v * 6, 6, 5, 201), f = vnoise(u * 90, v * 90, 90, 202);
      const s = 0.94 + n * 0.05 + f * 0.01;
      return [s, s, s, n * 0.7 + f * 0.3, 0.9];
    });
  },
  // kids' wallpaper: tiny stars and moons on a soft ground (greyscale motif in R, tinted later)
  wallpaper() {
    return makeSet('wallpaper', 1024, 0.8, (u, v) => {
      const n = fbm(u * 8, v * 8, 8, 4, 211);
      const cx = u * 8, cy = v * 8 + (Math.floor(u * 8) & 1) * 0.5;
      const fx = cx - Math.floor(cx) - 0.5, fy = cy - Math.floor(cy) - 0.5;
      // five-point star
      const a = Math.atan2(fy, fx), r = Math.hypot(fx, fy);
      const star = r < 0.11 * (0.62 + 0.38 * Math.cos(5 * a)) ? 1 : 0;
      const dot = Math.hypot(fx - 0.33, fy - 0.3) < 0.035 ? 1 : 0;
      const base = 0.93 + n * 0.04;
      const k = Math.max(star, dot);
      const c = [base - k * 0.12, base - k * 0.05, base + k * 0.04];
      return [c[0], c[1], c[2], n * 0.5 + k * 0.3, 0.88 - k * 0.2];
    });
  },
  // woven upholstery
  // woven upholstery / mattress ticking
  weave() {
    return makeSet('weave', 512, 4, (u, v) => {
      const T = 128;
      const a = Math.sin(u * Math.PI * 2 * T) * 0.5 + 0.5, b = Math.sin(v * Math.PI * 2 * T) * 0.5 + 0.5;
      const over = ((Math.floor(u * T) + Math.floor(v * T)) & 1) ? a : b;
      const n = fbm(u * 24, v * 24, 24, 3, 221);
      const sl = vnoise2(u * 512, v * 32, 512, 32, 222) * 0.6 + vnoise2(u * 32, v * 512, 32, 512, 223) * 0.4;
      const s = 0.8 + over * 0.11 + n * 0.06 + sl * 0.05;
      return [s, s, s, over * 0.65 + n * 0.25 + sl * 0.1, 0.95];
    }, true);
  },
  // cut-pile carpet: individual tufts with a little colour drift
  carpet() {
    return makeSet('carpet', 512, 6, (u, v) => {
      const [f1, , id] = worley(u * 120, v * 120, 120, 231);
      const tuft = clamp01(1 - f1 * 1.5);
      const drift = fbm(u * 12, v * 12, 12, 3, 232);
      const fib = vnoise(u * 480, v * 480, 480, 233);
      const s = 0.74 + tuft * 0.14 + (id - 0.5) * 0.08 + drift * 0.08 + fib * 0.04;
      return [s, s, s, tuft * 0.7 + fib * 0.2 + drift * 0.1, 1];
    });
  },
  // brushed/leathery grain for book covers, toy plastic, etc.
  grainy() {
    return makeSet('grainy', 256, 1.5, (u, v) => {
      const n = vnoise(u * 160, v * 160, 160, 241) * 0.5 + fbm(u * 8, v * 8, 8, 3, 242) * 0.5;
      const s = 0.9 + n * 0.1;
      return [s, s, s, n, 0.7];
    });
  },
});

// a moonlit night seen through a window: sky gradient, stars, moon, rooftops
let nightSkyTex = null;
export function nightSkyTexture() {
  if (nightSkyTex) return nightSkyTex;
  const W = 1024, H = 768;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 0, H);
  grd.addColorStop(0, '#0b1230'); grd.addColorStop(0.6, '#1f2f63'); grd.addColorStop(1, '#3a4a86');
  g.fillStyle = grd; g.fillRect(0, 0, W, H);
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 260; i++) {
    const x = rnd() * W, y = rnd() * H * 0.75, r = rnd() * 1.4 + 0.3;
    g.fillStyle = `rgba(255,255,240,${0.4 + rnd() * 0.6})`;
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  // moon with a soft halo
  const mx = W * 0.68, my = H * 0.24;
  const halo = g.createRadialGradient(mx, my, 10, mx, my, 160);
  halo.addColorStop(0, 'rgba(220,230,255,0.55)'); halo.addColorStop(1, 'rgba(220,230,255,0)');
  g.fillStyle = halo; g.fillRect(0, 0, W, H);
  g.fillStyle = '#f3f1e6'; g.beginPath(); g.arc(mx, my, 46, 0, Math.PI * 2); g.fill();
  g.fillStyle = 'rgba(180,180,170,0.35)';
  [[-12, -8, 9], [14, 10, 7], [6, -18, 5], [-6, 16, 6]].forEach(([dx, dy, r]) => { g.beginPath(); g.arc(mx + dx, my + dy, r, 0, Math.PI * 2); g.fill(); });
  // rooftops and a tree line, a few warm windows
  g.fillStyle = '#0a0f22';
  g.beginPath(); g.moveTo(0, H);
  let x = 0;
  while (x < W) {
    const w = 80 + rnd() * 120, h = 120 + rnd() * 140;
    g.lineTo(x, H - h); g.lineTo(x + w * 0.5, H - h - 60 - rnd() * 40); g.lineTo(x + w, H - h);
    x += w;
  }
  g.lineTo(W, H); g.closePath(); g.fill();
  for (let i = 0; i < 9; i++) { g.fillStyle = rnd() > 0.5 ? '#ffcf7a' : '#ffb35c'; g.fillRect(rnd() * W, H - 60 - rnd() * 140, 10, 14); }
  nightSkyTex = new THREE.CanvasTexture(c);
  nightSkyTex.userData.shared = true;
  nightSkyTex.colorSpace = THREE.SRGBColorSpace;
  return nightSkyTex;
}

// soft round sprite used by all particles and background bokeh
let softDot = null;
export function softDotTexture() {
  if (softDot) return softDot;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.35, 'rgba(255,255,255,0.65)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  softDot = new THREE.CanvasTexture(c);
  softDot.userData.shared = true;
  softDot.colorSpace = THREE.SRGBColorSpace;
  return softDot;
}

// soft bokeh disc: flat-ish with a slightly bright rim, like a lens highlight
let bokeh = null;
export function bokehTexture() {
  if (bokeh) return bokeh;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 62);
  grd.addColorStop(0, 'rgba(255,255,255,0.55)');
  grd.addColorStop(0.8, 'rgba(255,255,255,0.7)');
  grd.addColorStop(0.92, 'rgba(255,255,255,0.9)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.beginPath(); g.arc(64, 64, 62, 0, Math.PI * 2); g.fill();
  bokeh = new THREE.CanvasTexture(c);
  bokeh.userData.shared = true;
  bokeh.colorSpace = THREE.SRGBColorSpace;
  return bokeh;
}

export function textTexture(lines, { w = 512, h = 256, font = '700 54px Nunito, "Segoe UI", sans-serif', color = '#4a3424', bg = null } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  if (bg) { g.fillStyle = bg; g.fillRect(0, 0, w, h); }
  g.fillStyle = color;
  g.font = font;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  const lh = parseInt(font.match(/(\d+)px/)[1], 10) * 1.25;
  lines.forEach((l, i) => g.fillText(l, w / 2, h / 2 + (i - (lines.length - 1) / 2) * lh));
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = maxAniso;
  return t;
}
