// Physically based materials built on the procedural textures.
import * as THREE from 'three';
import { Tex } from './textures.js';

const cache = new Map();
const memo = (key, make) => {
  if (!cache.has(key)) cache.set(key, make());
  return cache.get(key);
};

// clone a texture set with its own repeat (textures share GPU data)
function rep(set, r) {
  const out = {};
  for (const k of ['map', 'normalMap', 'roughnessMap']) {
    if (!set[k]) continue;
    const t = set[k].clone();
    t.repeat.set(r, r);
    t.needsUpdate = true;
    out[k] = t;
  }
  return out;
}

// Re-map UVs to world units with box projection so textures keep a
// consistent scale on platforms of any size. `scale` = texture tiles per unit.
export function worldUV(geo, scale = 0.5) {
  const pos = geo.attributes.position, nrm = geo.attributes.normal;
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const ax = Math.abs(nrm.getX(i)), ay = Math.abs(nrm.getY(i)), az = Math.abs(nrm.getZ(i));
    let u, v;
    if (ay >= ax && ay >= az) { u = x; v = z; } else if (ax >= az) { u = z; v = y; } else { u = x; v = y; }
    uv[i * 2] = u * scale; uv[i * 2 + 1] = v * scale;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geo;
}

export const Mat = {
  plush(color, key = 'plush' + color) {
    return memo(key, () => new THREE.MeshPhysicalMaterial(Object.assign({
      color, roughness: 1, sheen: 1, sheenRoughness: 0.45, sheenColor: new THREE.Color(0xffffff).lerp(new THREE.Color(color), 0.4),
      normalScale: new THREE.Vector2(0.6, 0.6),
    }, rep(Tex.plush(), 3))));
  },
  knit(color) {
    return memo('knit' + color, () => new THREE.MeshPhysicalMaterial(Object.assign({ color, sheen: 0.8, sheenRoughness: 0.6, sheenColor: 0xffffff, normalScale: new THREE.Vector2(1.2, 1.2) }, rep(Tex.knit(), 1))));
  },
  quilt(color) {
    return memo('quilt' + color, () => new THREE.MeshPhysicalMaterial(Object.assign({ color, sheen: 0.7, sheenRoughness: 0.5, sheenColor: 0xffffff, normalScale: new THREE.Vector2(1.4, 1.4) }, rep(Tex.quilt(), 1))));
  },
  linen(color) {
    return memo('linen' + color, () => new THREE.MeshStandardMaterial(Object.assign({ color }, rep(Tex.linen(), 1))));
  },
  painted(color) {
    return memo('painted' + color, () => new THREE.MeshPhysicalMaterial(Object.assign({ color, clearcoat: 0.35, clearcoatRoughness: 0.45, specularIntensity: 0.6 }, rep(Tex.painted(), 1))));
  },
  ceramic(color) {
    return memo('ceramic' + color, () => new THREE.MeshPhysicalMaterial(Object.assign({ color, clearcoat: 1, clearcoatRoughness: 0.08 }, rep(Tex.ceramic(), 1))));
  },
  woodLight() { return memo('woodLight', () => new THREE.MeshStandardMaterial(Object.assign({}, rep(Tex.wood('light', 0xe8c99a, 0xb88a58, true), 1)))); },
  woodBirch() { return memo('woodBirch', () => new THREE.MeshStandardMaterial(Object.assign({}, rep(Tex.wood('birch', 0xf1dfc0, 0xd2b48a, true, 0.6), 1)))); },
  woodBoard() { return memo('woodBoard', () => new THREE.MeshPhysicalMaterial(Object.assign({ clearcoat: 0.3, clearcoatRoughness: 0.4 }, rep(Tex.wood('board', 0xd9a86c, 0x9c6a3a, false, 0.5), 1)))); },
  woodDark() { return memo('woodDark', () => new THREE.MeshStandardMaterial(Object.assign({}, rep(Tex.wood('dark', 0x8a5a3a, 0x4f2f1c, true), 1)))); },
  marble() { return memo('marble', () => new THREE.MeshPhysicalMaterial(Object.assign({ clearcoat: 0.8, clearcoatRoughness: 0.1 }, rep(Tex.marble(), 1)))); },
  sponge() { return memo('sponge', () => new THREE.MeshStandardMaterial(Object.assign({ normalScale: new THREE.Vector2(1.5, 1.5) }, rep(Tex.sponge(), 1)))); },
  scrubber() { return memo('scrubber', () => new THREE.MeshStandardMaterial(Object.assign({ normalScale: new THREE.Vector2(1.5, 1.5) }, rep(Tex.scrubber(), 1)))); },
  cookie() { return memo('cookie', () => new THREE.MeshStandardMaterial(Object.assign({ normalScale: new THREE.Vector2(1.6, 1.6) }, rep(Tex.cookie(), 1)))); },
  roof() { return memo('roof', () => new THREE.MeshStandardMaterial(Object.assign({}, rep(Tex.roof(), 1)))); },
  brick() { return memo('brick', () => new THREE.MeshStandardMaterial(Object.assign({}, rep(Tex.brick(), 1)))); },
  stucco(color = 0xfff1de) { return memo('stucco' + color, () => new THREE.MeshStandardMaterial(Object.assign({ color, normalScale: new THREE.Vector2(0.8, 0.8) }, rep(Tex.cloud(), 1)))); },
  cardboard() { return memo('cardboard', () => new THREE.MeshStandardMaterial(Object.assign({}, rep(Tex.cardboard(), 1)))); },
  grass() { return memo('grass', () => new THREE.MeshStandardMaterial(Object.assign({}, rep(Tex.grass(), 1)))); },
  rock() { return memo('rock', () => new THREE.MeshStandardMaterial(Object.assign({ normalScale: new THREE.Vector2(1.4, 1.4) }, rep(Tex.rock(), 1)))); },
  wicker() { return memo('wicker', () => new THREE.MeshStandardMaterial(Object.assign({}, rep(Tex.wicker(), 1)))); },
  cloud() {
    return memo('cloudMat', () => new THREE.MeshPhysicalMaterial(Object.assign({ color: 0xffffff, roughness: 1, sheen: 1, sheenColor: 0xffe6f0, sheenRoughness: 0.8, emissive: 0x30283a, normalScale: new THREE.Vector2(0.5, 0.5) }, rep(Tex.cloud(), 1))));
  },
  crystal(color = 0x9fe8ff) {
    return memo('crystal' + color, () => new THREE.MeshPhysicalMaterial({
      color, metalness: 0, roughness: 0.08, transmission: 0.85, thickness: 1.2, ior: 1.5,
      iridescence: 0.6, iridescenceIOR: 1.3, emissive: color, emissiveIntensity: 0.18, attenuationColor: color, attenuationDistance: 3,
    }));
  },
  bubble() {
    return memo('bubble', () => new THREE.MeshPhysicalMaterial({
      color: 0xdff6ff, roughness: 0.02, transmission: 0.92, thickness: 0.3, ior: 1.2, iridescence: 1, iridescenceIOR: 1.6,
      iridescenceThicknessRange: [200, 700], emissive: 0x2a6fa8, emissiveIntensity: 0.15,
    }));
  },
  glossy(color, emissive = 0x000000, ei = 0) {
    return memo('glossy' + color + '_' + emissive + '_' + ei, () => new THREE.MeshPhysicalMaterial({ color, roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.05, emissive, emissiveIntensity: ei }));
  },
  gold(color = 0xffc23a, ei = 0.35) {
    return memo('gold' + color + ei, () => new THREE.MeshPhysicalMaterial({ color, metalness: 0.85, roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.05, emissive: color, emissiveIntensity: ei }));
  },
  eye() {
    return memo('eye', () => new THREE.MeshPhysicalMaterial({ color: 0x0b0d14, roughness: 0.05, clearcoat: 1, clearcoatRoughness: 0 }));
  },
  emissive(color, intensity = 2) {
    return memo('emi' + color + intensity, () => new THREE.MeshStandardMaterial({ color: 0x000000, emissive: color, emissiveIntensity: intensity }));
  },
  matte(color, rough = 0.8) {
    return memo('matte' + color + rough, () => new THREE.MeshStandardMaterial({ color, roughness: rough }));
  },
};
