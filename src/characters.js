// People, pets and things that go bump in the night.
import * as THREE from 'three';
import { Mat } from './materials.js';
import { Tex, softDotTexture } from './textures.js';
import { createBlahaj } from './art.js';

const sh = (m, c = true, r = true) => { m.castShadow = c; m.receiveShadow = r; return m; };
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

function furMat(color, sheenColor) {
  const fz = Tex.plush();
  const n = fz.normalMap.clone(); n.repeat.set(4, 4); n.needsUpdate = true;
  return new THREE.MeshPhysicalMaterial({ color, roughness: 0.95, sheen: 1, sheenRoughness: 0.55, sheenColor: new THREE.Color(sheenColor), normalMap: n, normalScale: new THREE.Vector2(0.6, 0.6) });
}
function part(geo, mat, parent, x, y, z) { const m = sh(new THREE.Mesh(geo, mat)); m.position.set(x, y, z); parent.add(m); return m; }

// ------------------------------------------------------------------ Leo --
// Lies in the cabin bed. Bed-local frame: origin at the mattress top centre,
// +z toward the foot of the bed, +x toward the open (room) side.
export function createLeo(bed) {
  const w = bed.w || 5.5, l = bed.l || 9.1, top = (bed.h || 4.5) - 0.2;
  const root = new THREE.Group();
  root.position.set(bed.x, top, bed.z);
  const skin = new THREE.MeshPhysicalMaterial({ color: 0xf1c3a1, roughness: 0.55, sheen: 0.4, sheenColor: new THREE.Color(0xffd9c4) });
  const hairMat = furMat(0x6a4126, 0xb07a4a);
  const dark = new THREE.MeshStandardMaterial({ color: 0x3a2418, roughness: 0.6 });
  const pjCanvas = document.createElement('canvas'); pjCanvas.width = 64; pjCanvas.height = 64;
  const pc = pjCanvas.getContext('2d');
  for (let i = 0; i < 8; i++) { pc.fillStyle = i % 2 ? '#f4f1ea' : '#8fb8de'; pc.fillRect(0, i * 8, 64, 8); }
  const pjTex = new THREE.CanvasTexture(pjCanvas); pjTex.colorSpace = THREE.SRGBColorSpace; pjTex.wrapS = pjTex.wrapT = THREE.RepeatWrapping; pjTex.repeat.set(2, 2);
  const pj = new THREE.MeshPhysicalMaterial({ map: pjTex, roughness: 0.9, sheen: 0.5, sheenColor: new THREE.Color(0xffffff) });

  // pillow
  const pillowGeo = new THREE.SphereGeometry(1, 32, 16);
  const pp = pillowGeo.attributes.position;
  for (let i = 0; i < pp.count; i++) { const x = pp.getX(i), y = pp.getY(i), z = pp.getZ(i); const k = 1 + 0.25 * Math.abs(x * z); pp.setXYZ(i, x * k * 1.6, y * 0.42, z * k * 0.95); }
  pillowGeo.computeVertexNormals();
  const pillow = part(pillowGeo, Mat.quilt(0xf4f6fb), root, 0, 0.45, -l / 2 + 1.5);

  // head (turns when he rolls over)
  const headPivot = new THREE.Group(); headPivot.position.set(0.1, 0.95, -l / 2 + 1.9); root.add(headPivot);
  const head = new THREE.Group(); headPivot.add(head);
  head.rotation.x = -1.2; // lying back on the pillow, face up toward the ceiling
  const skull = part(new THREE.SphereGeometry(0.5, 32, 24), skin, head, 0, 0, 0); skull.scale.set(1, 1.05, 0.95);
  const hairGeo = new THREE.SphereGeometry(0.55, 32, 20, 0, Math.PI * 2, 0, Math.PI * 0.58);
  const hp = hairGeo.attributes.position;
  for (let i = 0; i < hp.count; i++) { const v = new THREE.Vector3().fromBufferAttribute(hp, i); const n = Math.sin(v.x * 18) * Math.cos(v.z * 15) * 0.03 + Math.sin(v.y * 25 + v.x * 9) * 0.02; v.multiplyScalar(1 + n); hp.setXYZ(i, v.x, v.y, v.z); }
  hairGeo.computeVertexNormals();
  const hair = part(hairGeo, hairMat, head, 0, 0.06, -0.06); hair.rotation.x = -0.35;
  for (const s of [-1, 1]) {
    part(new THREE.SphereGeometry(0.12, 12, 10), skin, head, s * 0.49, -0.02, -0.02).scale.set(0.5, 1, 0.8);
    const lid = part(new THREE.TorusGeometry(0.07, 0.014, 6, 16, Math.PI), dark, head, s * 0.18, 0.03, 0.44); lid.rotation.z = Math.PI; lid.castShadow = false;
    const brow = part(new THREE.CapsuleGeometry(0.018, 0.12, 4, 6), hairMat, head, s * 0.18, 0.17, 0.43); brow.rotation.z = Math.PI / 2 + s * 0.15; brow.castShadow = false;
    const blush = new THREE.Mesh(new THREE.CircleGeometry(0.08, 16), new THREE.MeshBasicMaterial({ color: 0xff9a9a, transparent: true, opacity: 0.35, depthWrite: false }));
    blush.position.set(s * 0.3, -0.1, 0.4); blush.lookAt(s * 0.9, -0.2, 1.5); head.add(blush);
  }
  part(new THREE.SphereGeometry(0.06, 12, 8), skin, head, 0, -0.06, 0.5);
  const mouth = part(new THREE.TorusGeometry(0.06, 0.012, 6, 12, Math.PI), new THREE.MeshStandardMaterial({ color: 0xa8584e }), head, 0, -0.22, 0.45); mouth.rotation.z = Math.PI; mouth.castShadow = false;

  // shoulders peeking out of the duvet
  const torso = part(new THREE.CapsuleGeometry(0.62, 1.2, 8, 16), pj, root, 0, 0.55, -l / 2 + 3.1); torso.rotation.x = Math.PI / 2; torso.scale.set(1.25, 1, 0.75);

  // the hugging arm: shoulder pivot -> upper arm -> elbow -> forearm -> hand
  const shoulder = new THREE.Group(); shoulder.position.set(0.75, 0.75, -l / 2 + 2.65); root.add(shoulder);
  const upper = part(new THREE.CapsuleGeometry(0.2, 0.75, 6, 12), pj, shoulder, 0, 0, 0.5); upper.rotation.x = Math.PI / 2;
  const elbow = new THREE.Group(); elbow.position.set(0, 0, 1.0); shoulder.add(elbow);
  const fore = part(new THREE.CapsuleGeometry(0.17, 0.7, 6, 12), pj, elbow, 0, 0, 0.45); fore.rotation.x = Math.PI / 2;
  const hand = part(new THREE.SphereGeometry(0.2, 16, 12), skin, elbow, 0, 0, 0.98); hand.scale.set(1, 0.7, 1.2);

  // duvet: a deforming quilted sheet draped over him and the mattress
  const DW = w + 1.4, DL = l * 0.8, NX = 46, NZ = 52;
  const dGeo = new THREE.PlaneGeometry(DW, DL, NX, NZ);
  dGeo.rotateX(-Math.PI / 2);
  const base = dGeo.attributes.position.array.slice();
  const dMat = Mat.quilt(0x4a6fb0).clone();
  dMat.map = dMat.map.clone(); dMat.map.repeat.set(1.6, 2.2); dMat.map.needsUpdate = true;
  dMat.normalMap = dMat.normalMap.clone(); dMat.normalMap.repeat.set(1.6, 2.2); dMat.normalMap.needsUpdate = true;
  dMat.normalScale = new THREE.Vector2(0.55, 0.55);
  dMat.side = THREE.DoubleSide;
  const duvet = sh(new THREE.Mesh(dGeo, dMat));
  root.add(duvet);

  const state = { cover: 1, roll: 0, arm: 'hug', armT: 0, shiver: 0, breath: 0, t: 0 };
  function drape() {
    const pos = dGeo.attributes.position;
    const zTop = lerp(-l / 2 + 4.4, -l / 2 + 2.3, state.cover); // where the top edge of the duvet sits
    const zEnd = l / 2 + 0.4;
    const bodyX = lerp(0, -0.6, state.roll);
    const breathe = Math.sin(state.t * 1.6) * 0.04;
    for (let i = 0; i < pos.count; i++) {
      const u = base[i * 3] / DW + 0.5, v = base[i * 3 + 2] / DL + 0.5;
      const x = (u - 0.5) * DW;
      const z = lerp(zTop, zEnd, v);
      let y = 0.28;
      // his body under the covers
      const bx = (x - bodyX) / (0.95 + 0.25 * state.roll), bz = (z - (-l / 2 + 4.6)) / 3.2;
      const body = Math.max(0, 1 - bx * bx - bz * bz);
      y += Math.sqrt(body) * (0.85 + breathe) ;
      // knees
      const kx = (x - bodyX + 0.2 * state.roll) / 0.8, kz = (z - (-l / 2 + 6.6)) / 0.9;
      y += Math.max(0, 1 - kx * kx - kz * kz) * 0.35 * (1 - state.roll * 0.4);
      // drape over the mattress edges
      const over = Math.abs(x) - (w / 2 - 0.2);
      if (over > 0) y -= Math.min(over * 3.2, 1.25) + Math.max(0, over - 0.4) * 0.6;
      if (z > l / 2 - 0.15) y -= (z - (l / 2 - 0.15)) * 3.5;
      // soft wrinkles
      y += Math.sin(x * 2.3 + z * 0.7) * 0.03 + Math.sin(z * 3.1 - x * 1.3) * 0.025;
      // the top edge folds over a little
      const fold = smooth(0.35, 0, z - zTop);
      y += fold * 0.12;
      const xs = over > 0 ? Math.sign(x) * (w / 2 - 0.2 + Math.min(over, 0.45)) : x;
      pos.setXYZ(i, xs + state.shiver * Math.sin(state.t * 40 + z) * 0.01, y, z);
    }
    pos.needsUpdate = true;
    dGeo.computeVertexNormals();
  }
  drape();

  // arm poses
  const POSES = {
    hug: { sh: [0.15, -0.55, -0.25], el: [0, 0.9, 0] },
    reach: { sh: [-0.1, 0.35, -0.95], el: [0, 0.15, 0] },
    tucked: { sh: [0.3, 0.6, 0.6], el: [0, 1.6, 0] },
  };
  const leo = {
    group: root, state, headPivot, shoulder, elbow, duvet,
    // world position where Blåhaj sits in his arms
    hugPoint: new THREE.Vector3(bed.x + 1.15, top + 0.75, bed.z - l / 2 + 3.4),
    update(dt, s = {}) {
      Object.assign(state, s);
      state.t += dt;
      const target = POSES[state.arm] || POSES.hug;
      const prev = POSES[state.prevArm || state.arm] || target;
      const k = smooth(0, 1, state.armT);
      shoulder.rotation.set(lerp(prev.sh[0], target.sh[0], k), lerp(prev.sh[1], target.sh[1], k), lerp(prev.sh[2], target.sh[2], k));
      elbow.rotation.set(lerp(prev.el[0], target.el[0], k), lerp(prev.el[1], target.el[1], k), lerp(prev.el[2], target.el[2], k));
      shoulder.position.x = lerp(0.75, 0.05, state.roll);
      headPivot.rotation.z = lerp(-0.15, 0.85, state.roll) + Math.sin(state.t * 0.7) * 0.02;
      headPivot.position.x = lerp(0.1, -0.35, state.roll);
      torso.position.x = lerp(0, -0.5, state.roll); torso.rotation.z = lerp(0, 0.6, state.roll);
      head.position.y = Math.sin(state.t * 1.6) * 0.01 + state.shiver * Math.sin(state.t * 47) * 0.012;
      drape();
    },
  };
  return leo;
}

// ------------------------------------------------------------ dream bubble --
export function createDreamBubble(at) {
  const g = new THREE.Group();
  g.position.copy(at);
  const bubbleMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.1, transmission: 0.9, thickness: 0.3, transparent: true, opacity: 0.32, emissive: 0xfff0d8, emissiveIntensity: 0.1, iridescence: 0.8 });
  bubbleMat.depthWrite = false;
  const cloud = new THREE.Group(); g.add(cloud);
  [[0, 0, 0, 1.8], [1.4, -0.3, 0.2, 1.2], [-1.5, -0.2, -0.1, 1.25], [0.6, 0.9, -0.2, 1.1], [-0.7, 0.8, 0.3, 1.0]].forEach(([x, y, z, r]) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 20), bubbleMat); m.position.set(x, y, z); m.renderOrder = 6; cloud.add(m);
  });
  const trail = [];
  [[0.9, -2.4, 0.3, 0.32], [0.5, -3.3, 0.5, 0.22], [0.2, -3.9, 0.6, 0.14]].forEach(([x, y, z, r]) => { const m = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), bubbleMat); m.position.set(x, y, z); g.add(m); trail.push(m); });
  const light = new THREE.PointLight(0xffd59a, 5, 7, 2); g.add(light);
  // inside the dream: a little Blåhaj and teddy bears
  const mini = createBlahaj(); mini.root.scale.setScalar(0.42); mini.blob.visible = false; cloud.add(mini.root);
  const teddies = [0, 1, 2].map((i) => { const t = createTeddy(0.35); cloud.add(t.group); return t; });
  const nightmares = [0, 1, 2].map(() => { const s = createShadow(0.38); s.group.visible = false; cloud.add(s.group); return s; });
  const bubble = {
    group: g, dream: 1,
    update(dt, t, dream) {
      bubble.dream += (dream - bubble.dream) * Math.min(1, dt * 2);
      const d = bubble.dream;
      cloud.rotation.y = Math.sin(t * 0.3) * 0.2;
      cloud.position.y = Math.sin(t * 0.9) * 0.1 + (1 - d) * Math.sin(t * 13) * 0.03;
      bubbleMat.emissive.setRGB(lerp(0.35, 1.0, d), lerp(0.08, 0.94, d), lerp(0.45, 0.85, d));
      bubbleMat.emissiveIntensity = lerp(0.25, 0.1, d);
      light.color.setRGB(lerp(0.6, 1.0, d), lerp(0.2, 0.83, d), lerp(0.9, 0.6, d));
      light.intensity = lerp(3, 5, d);
      mini.root.position.set(Math.sin(t * 0.8) * 0.4, Math.sin(t * 1.3) * 0.15, 0.2);
      mini.root.rotation.y = t * 0.8;
      mini.update(dt, { speed: 0.4, grounded: false, vx: 0, vy: 0, vz: 0, glide: true });
      teddies.forEach((td, i) => {
        const a = t * 0.9 + (i * Math.PI * 2) / 3;
        td.group.position.set(Math.cos(a) * 1.25, Math.sin(a * 1.3) * 0.3 - 0.1, Math.sin(a) * 0.6);
        td.group.rotation.y = -a;
        const show = d > (i + 1) * 0.22;
        td.group.visible = show; nightmares[i].group.visible = !show;
        nightmares[i].group.position.copy(td.group.position);
        nightmares[i].update(dt, t + i);
      });
      trail.forEach((m, i) => { m.position.x = 0.9 - i * 0.35 + Math.sin(t * 2 + i) * 0.05; });
    },
  };
  return bubble;
}

// ------------------------------------------------------------- teddy bear --
export function createTeddy(scale = 1, color = 0xa8784e) {
  const g = new THREE.Group();
  const fur = furMat(color, 0xe8c19a);
  const muzzleM = furMat(0xe8c9a4, 0xffffff);
  fur.emissive = new THREE.Color(0x5a3418); fur.emissiveIntensity = 0.55;
  muzzleM.emissive = new THREE.Color(0x6a5040); muzzleM.emissiveIntensity = 0.5;
  const eye = Mat.eye();
  const body = part(new THREE.SphereGeometry(0.55, 24, 18), fur, g, 0, 0.62, 0); body.scale.set(1, 1.1, 0.9);
  const belly = part(new THREE.SphereGeometry(0.36, 18, 12), muzzleM, g, 0, 0.58, 0.28); belly.scale.set(1, 1.1, 0.45);
  const head = new THREE.Group(); head.position.y = 1.45; g.add(head);
  part(new THREE.SphereGeometry(0.48, 24, 18), fur, head, 0, 0, 0);
  for (const s of [-1, 1]) {
    part(new THREE.SphereGeometry(0.18, 14, 10), fur, head, s * 0.36, 0.36, -0.02).scale.set(1, 1, 0.6);
    part(new THREE.SphereGeometry(0.1, 12, 8), muzzleM, head, s * 0.36, 0.36, 0.06).scale.set(1, 1, 0.4);
    part(new THREE.SphereGeometry(0.06, 12, 8), eye, head, s * 0.17, 0.08, 0.42);
    const arm = part(new THREE.CapsuleGeometry(0.15, 0.4, 6, 10), fur, g, s * 0.58, 0.82, 0.08); arm.rotation.z = s * 0.7;
    const leg = part(new THREE.CapsuleGeometry(0.18, 0.3, 6, 10), fur, g, s * 0.3, 0.2, 0.25); leg.rotation.x = Math.PI / 2 - 0.3;
  }
  part(new THREE.SphereGeometry(0.2, 16, 12), muzzleM, head, 0, -0.1, 0.38).scale.set(1, 0.8, 0.8);
  part(new THREE.SphereGeometry(0.07, 12, 8), new THREE.MeshPhysicalMaterial({ color: 0x2a1a12, roughness: 0.2, clearcoat: 1 }), head, 0, -0.02, 0.55);
  const bow = new THREE.Group(); bow.position.set(0, -0.42, 0.28); head.add(bow);
  for (const s of [-1, 1]) { const b = part(new THREE.ConeGeometry(0.12, 0.22, 10), new THREE.MeshPhysicalMaterial({ color: 0xd9384a, roughness: 0.4, sheen: 0.6 }), bow, s * 0.12, 0, 0); b.rotation.z = s * Math.PI / 2; }
  g.scale.setScalar(scale);
  return { group: g, head };
}

// ---------------------------------------------------------- shadow beasts --
const shadowUniforms = { time: { value: 0 } };
let shadowMat = null;
function getShadowMat() {
  if (shadowMat) return shadowMat;
  shadowMat = new THREE.MeshStandardMaterial({ color: 0x050208, roughness: 1, emissive: 0x14061f, emissiveIntensity: 0.6, transparent: true, opacity: 0.94 });
  shadowMat.onBeforeCompile = (s) => {
    s.uniforms.time = shadowUniforms.time;
    s.vertexShader = 'uniform float time;\n' + s.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      float w = sin(position.x * 7.0 + time * 3.1) * sin(position.y * 6.0 - time * 2.3) * sin(position.z * 8.0 + time * 1.7);
      transformed += normal * w * 0.18;
      transformed.y += max(0.0, -position.y) * sin(time * 4.0 + position.x * 5.0) * 0.12;`);
    s.fragmentShader = s.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      float fres = pow(1.0 - abs(dot(normalize(vViewPosition), normal)), 2.0);
      totalEmissiveRadiance += vec3(0.35, 0.1, 0.6) * fres * 0.75;`);
  };
  return shadowMat;
}
export function updateShadowTime(t) { shadowUniforms.time.value = t; }

export function createShadow(scale = 1) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.IcosahedronGeometry(0.75, 4), getShadowMat());
  body.scale.set(1, 1.15, 1); body.position.y = 0.8; body.castShadow = false;
  g.add(body);
  const eyes = [];
  for (const s of [-1, 1]) {
    const e = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color: 0xff4a3a, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    e.scale.set(0.32, 0.22, 1); e.position.set(s * 0.25, 1.0, 0.68); g.add(e); eyes.push(e);
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffd0a0 }));
    core.position.copy(e.position).add(new THREE.Vector3(0, 0, 0.02)); g.add(core); eyes.push(core);
  }
  g.scale.setScalar(scale);
  let blink = Math.random() * 3;
  return {
    group: g, body, eyes,
    update(dt, t) {
      blink -= dt;
      const open = blink < 0 ? (blink < -0.15 ? (blink = 2 + Math.random() * 3, 1) : 0.1) : 1;
      eyes.forEach((e) => (e.scale.y = (e.isSprite ? 0.22 : 1) * open));
      body.rotation.y = t * 0.6;
    },
  };
}

export function createKnot(r = 1) {
  const g = new THREE.Group();
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 4), getShadowMat());
  g.add(core);
  const spikes = [];
  for (let i = 0; i < 14; i++) {
    const sp = new THREE.Mesh(new THREE.ConeGeometry(r * 0.22, r * 1.1, 8), getShadowMat());
    const dir = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    sp.position.copy(dir.clone().multiplyScalar(r * 0.95));
    sp.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    g.add(sp); spikes.push(sp);
  }
  const eye = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color: 0xff3030, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  eye.scale.set(r * 1.1, r * 0.5, 1); eye.position.z = r * 0.9; g.add(eye);
  const glow = new THREE.PointLight(0x8a2be2, 5, 7, 2); g.add(glow);
  return {
    group: g,
    update(dt, t) {
      g.rotation.y = t * 0.8; g.rotation.x = Math.sin(t * 0.7) * 0.3;
      const p = 1 + Math.sin(t * 3) * 0.08;
      core.scale.setScalar(p);
      spikes.forEach((s, i) => s.scale.setScalar(0.8 + Math.sin(t * 4 + i) * 0.25));
      glow.intensity = 4 + Math.sin(t * 5) * 1.5;
    },
  };
}

// ------------------------------------------------------------------ dog --
export function createDog() {
  const g = new THREE.Group();
  const fur = furMat(0xe4ae66, 0xffe6b8);
  const light = furMat(0xf2d2a0, 0xfff4e0);
  fur.emissive = new THREE.Color(0x3a2410); fur.emissiveIntensity = 0.35; light.emissive = new THREE.Color(0x3a2a18); light.emissiveIntensity = 0.35;
  const nose = new THREE.MeshPhysicalMaterial({ color: 0x1a1210, roughness: 0.25, clearcoat: 1 });
  const body = new THREE.Group(); body.position.y = 2.7; g.add(body);
  const torso = part(new THREE.CapsuleGeometry(0.85, 2.6, 10, 20), fur, body, 0, 0, 0); torso.rotation.x = Math.PI / 2;
  part(new THREE.SphereGeometry(0.95, 24, 16), light, body, 0, -0.1, 1.35).scale.set(0.95, 1, 0.8);
  // neck + head
  const neck = new THREE.Group(); neck.position.set(0, 0.55, 1.75); body.add(neck);
  const neckM = part(new THREE.CapsuleGeometry(0.55, 0.9, 8, 16), fur, neck, 0, 0.5, 0.2); neckM.rotation.x = -0.6;
  const head = new THREE.Group(); head.position.set(0, 1.25, 0.55); neck.add(head);
  part(new THREE.SphereGeometry(0.7, 28, 20), fur, head, 0, 0, 0).scale.set(0.95, 0.9, 1);
  const muzzle = part(new THREE.CapsuleGeometry(0.34, 0.55, 8, 14), light, head, 0, -0.25, 0.7); muzzle.rotation.x = Math.PI / 2;
  part(new THREE.SphereGeometry(0.17, 14, 10), nose, head, 0, -0.12, 1.22).scale.set(1.2, 0.8, 0.9);
  const jaw = new THREE.Group(); jaw.position.set(0, -0.45, 0.45); head.add(jaw);
  const jawM = part(new THREE.CapsuleGeometry(0.24, 0.45, 6, 12), light, jaw, 0, -0.05, 0.3); jawM.rotation.x = Math.PI / 2;
  const tongue = part(new THREE.CapsuleGeometry(0.13, 0.3, 6, 10), new THREE.MeshPhysicalMaterial({ color: 0xe36d7a, roughness: 0.35, clearcoat: 0.6 }), jaw, 0, -0.12, 0.55); tongue.rotation.x = Math.PI / 2 + 0.5;
  const eyes = [];
  for (const s of [-1, 1]) {
    eyes.push(part(new THREE.SphereGeometry(0.1, 14, 10), Mat.eye(), head, s * 0.3, 0.18, 0.55));
    const ear = new THREE.Group(); ear.position.set(s * 0.55, 0.25, -0.05); head.add(ear);
    const em = part(new THREE.SphereGeometry(0.42, 16, 12), fur, ear, s * 0.08, -0.45, 0); em.scale.set(0.35, 1, 0.75);
    ear.rotation.z = s * 0.2;
  }
  // legs: hips/shoulders pivot, two segments each
  const legs = [];
  for (const [x, z] of [[-0.5, 1.2], [0.5, 1.2], [-0.5, -1.25], [0.5, -1.25]]) {
    const hip = new THREE.Group(); hip.position.set(x, -0.35, z); body.add(hip);
    const up = part(new THREE.CapsuleGeometry(0.28, 0.9, 6, 12), fur, hip, 0, -0.6, 0);
    const knee = new THREE.Group(); knee.position.set(0, -1.15, 0); hip.add(knee);
    part(new THREE.CapsuleGeometry(0.2, 0.75, 6, 12), fur, knee, 0, -0.5, 0);
    part(new THREE.SphereGeometry(0.26, 14, 10), light, knee, 0, -1.0, 0.1).scale.set(1, 0.6, 1.3);
    legs.push({ hip, knee, front: z > 0, up });
  }
  const tail = new THREE.Group(); tail.position.set(0, 0.35, -1.95); body.add(tail);
  const tm = part(new THREE.CapsuleGeometry(0.2, 1.4, 6, 12), fur, tail, 0, 0.6, -0.3); tm.rotation.x = -0.6;
  const zzz = new THREE.Group(); g.add(zzz);
  const dog = {
    group: g, body, head, neck, jaw, tail, legs, mouthPoint: new THREE.Object3D(),
    pose: 'stand', t: 0,
    update(dt, pose = dog.pose, speed = 0) {
      dog.pose = pose; dog.t += dt;
      const t = dog.t;
      tail.rotation.y = Math.sin(t * (pose === 'sleep' ? 1.2 : 9)) * (pose === 'sleep' ? 0.1 : 0.6);
      if (pose === 'walk' || pose === 'stand' || pose === 'carry') {
        body.position.y = 2.7 + (speed > 0 ? Math.abs(Math.sin(t * 7)) * 0.08 : 0);
        body.rotation.x += (0 - body.rotation.x) * Math.min(1, dt * 6);
        legs.forEach((L, i) => {
          const ph = (i === 0 || i === 3 ? 0 : Math.PI);
          L.hip.rotation.x = speed > 0 ? Math.sin(t * 7 + ph) * 0.5 : 0;
          L.knee.rotation.x = speed > 0 ? Math.max(0, -Math.sin(t * 7 + ph)) * 0.6 * (L.front ? -1 : 1) : 0;
        });
        neck.rotation.x = pose === 'carry' ? 0.15 : Math.sin(t * 1.5) * 0.05;
        jaw.rotation.x = pose === 'carry' ? 0.12 : 0.25 + Math.sin(t * 6) * 0.08; // panting
        tongue.visible = pose !== 'carry';
      } else if (pose === 'rear') {
        body.rotation.x += (-0.95 - body.rotation.x) * Math.min(1, dt * 5);
        body.position.y = 3.3;
        legs.forEach((L) => { L.hip.rotation.x = L.front ? 0.9 : 0.95; L.knee.rotation.x = L.front ? -0.6 : -0.3; });
        neck.rotation.x = 0.9; jaw.rotation.x = 0.45;
      } else if (pose === 'sleep') {
        body.position.y = 1.05 + Math.sin(t * 1.4) * 0.04;
        body.rotation.set(0, 0, 0.08);
        legs.forEach((L) => {
          if (L.front) { L.hip.rotation.x = -1.45; L.knee.rotation.x = 0.15; }
          else { L.hip.rotation.x = -1.2; L.knee.rotation.x = 2.3; }
        });
        neck.rotation.x = 1.0; jaw.rotation.x = 0.0; tongue.visible = false;
        tail.rotation.x = 1.9; tail.rotation.z = 0.6;
        eyes.forEach((e) => (e.scale.y = 0.12));
      }
    },
  };
  jaw.add(dog.mouthPoint); dog.mouthPoint.position.set(0, -0.15, 0.55);
  return dog;
}

// ------------------------------------------------------------------ cat --
export function createCat() {
  const g = new THREE.Group();
  const fur = furMat(0x8d8a8a, 0xd8d4d0);
  const body = part(new THREE.SphereGeometry(0.75, 24, 16), fur, g, 0, 0.62, 0); body.scale.set(1.25, 0.8, 1.05);
  const head = new THREE.Group(); head.position.set(0.85, 0.65, 0.35); g.add(head);
  part(new THREE.SphereGeometry(0.42, 22, 16), fur, head, 0, 0, 0);
  for (const s of [-1, 1]) {
    const ear = part(new THREE.ConeGeometry(0.15, 0.3, 8), fur, head, 0.05, 0.38, s * 0.22); ear.rotation.x = s * 0.25;
    const lid = part(new THREE.TorusGeometry(0.06, 0.012, 6, 12, Math.PI), new THREE.MeshStandardMaterial({ color: 0x222222 }), head, 0.38, 0.06, s * 0.15); lid.rotation.set(0, Math.PI / 2, Math.PI);
  }
  part(new THREE.SphereGeometry(0.05, 10, 8), new THREE.MeshStandardMaterial({ color: 0xd98a8a }), head, 0.42, -0.05, 0);
  const tail = part(new THREE.TorusGeometry(0.7, 0.13, 10, 24, Math.PI * 1.1), fur, g, 0, 0.18, 0); tail.rotation.x = Math.PI / 2;
  const paw = new THREE.Group(); paw.position.set(0.6, 0.35, -0.5); g.add(paw);
  part(new THREE.CapsuleGeometry(0.12, 0.5, 6, 10), fur, paw, 0.25, 0, 0).rotation.z = Math.PI / 2;
  return {
    group: g, head, paw, swipe: 0, t: 0,
    update(dt) {
      this.t += dt;
      body.scale.y = 0.8 + Math.sin(this.t * 1.6) * 0.02;
      if (this.swipe > 0) { this.swipe = Math.max(0, this.swipe - dt * 2.5); paw.rotation.y = Math.sin(this.swipe * Math.PI) * 1.4; head.rotation.z = 0.3 * this.swipe; } else paw.rotation.y *= 0.9;
    },
  };
}
