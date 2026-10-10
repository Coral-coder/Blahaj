// People, pets and things that go bump in the night.
import * as THREE from 'three';
import { Mat } from './materials.js';
import { Tex, softDotTexture } from './textures.js';
import { createBlahaj } from './art.js';
import { createCloth } from './cloth.js';

const sh = (m, c = true, r = true) => { m.castShadow = c; m.receiveShadow = r; return m; };
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;
const V3 = (x, y, z) => new THREE.Vector3(x, y, z);

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

  // his body, chest to hips: a rounded torso (broad at the shoulders, narrower
  // at the waist) that rolls about its long axis when he turns onto his side.
  // Body frame: x across his shoulders (+x his right), y out of his chest, z to his feet.
  const TA = 0.7, TB = 0.42; // half shoulder width, half chest depth
  const torsoProfile = (s) => lerp(1.0, 0.86, smooth(-0.55, 0.45, s)) + 0.05 * smooth(0.6, 1.1, s);
  const torsoGeo = new THREE.CapsuleGeometry(1, 2, 10, 24);
  { const tp = torsoGeo.attributes.position;
    for (let i = 0; i < tp.count; i++) { const zz = tp.getY(i) * 0.62, pr = torsoProfile(zz); tp.setXYZ(i, tp.getX(i) * TA * pr, -tp.getZ(i) * TB * pr, zz); }
    torsoGeo.computeVertexNormals(); }
  const torsoPivot = new THREE.Group(); torsoPivot.position.set(0, 0.55, -l / 2 + 3.1); root.add(torsoPivot);
  const torso = part(torsoGeo, pj, torsoPivot, 0, 0, 0);

  // two arms: shoulder pivot -> upper arm -> elbow -> forearm -> hand (+x is his right)
  function buildArm(side) {
    const shoulder = new THREE.Group(); shoulder.position.set(side * 0.75, 0.75, -l / 2 + 2.65); root.add(shoulder);
    part(new THREE.SphereGeometry(0.25, 16, 12), pj, shoulder, 0, 0, 0); // the round of his shoulder
    const upper = part(new THREE.CapsuleGeometry(0.2, 0.75, 6, 12), pj, shoulder, 0, 0, 0.5); upper.rotation.x = Math.PI / 2;
    const elbow = new THREE.Group(); elbow.position.set(0, 0, 1.0); shoulder.add(elbow);
    const fore = part(new THREE.CapsuleGeometry(0.17, 0.7, 6, 12), pj, elbow, 0, 0, 0.45); fore.rotation.x = Math.PI / 2;
    const hand = part(new THREE.SphereGeometry(0.2, 16, 12), skin, elbow, 0, 0, 0.98); hand.scale.set(1, 0.7, 1.2);
    return { shoulder, elbow, side };
  }
  const armR = buildArm(1), armL = buildArm(-1);
  const shoulder = armR.shoulder, elbow = armR.elbow;

  // legs: thigh -> knee -> shin -> foot. Usually under the covers, but real, so
  // the blanket drapes over them and they're there when it's lifted
  function buildLeg() {
    const hip = new THREE.Group(); root.add(hip);
    part(new THREE.CapsuleGeometry(0.27, 1.15, 6, 12), pj, hip, 0, 0, 0.72).rotation.x = Math.PI / 2;
    const knee = new THREE.Group(); knee.position.set(0, 0, 1.45); hip.add(knee);
    part(new THREE.SphereGeometry(0.26, 12, 10), pj, knee, 0, 0, 0);
    part(new THREE.CapsuleGeometry(0.22, 1.0, 6, 12), pj, knee, 0, 0, 0.65).rotation.x = Math.PI / 2;
    part(new THREE.SphereGeometry(0.24, 12, 10), skin, knee, 0, 0, 1.38).scale.set(0.95, 0.85, 1.3);
    return { hip, knee };
  }
  const legR = buildLeg(), legL = buildLeg();
  const pelvis = part(new THREE.SphereGeometry(0.5, 16, 12), pj, root, 0, 0.5, 0); pelvis.scale.set(1.15, 0.9, 1);

  // duvet: a real cloth (see cloth.js) on a quilted mesh. It falls onto the
  // mattress, the pillow, Leo (body, legs, arms) and Blåhaj, hangs over the
  // sides, folds without passing through itself, and his hands can grab it.
  const DW = w + 2.2, DL = l * 0.82, CNX = 40, CNZ = 38;
  const cloth = createCloth({ nx: CNX, nz: CNZ, width: DW, length: DL, thickness: 0.075, iterations: 5, gravity: 24, damping: 0.982, friction: 0.6, bend: 0.4 });
  // drawn at twice the simulation's resolution (smooth Catmull-Rom in between), so folds read as fabric
  const RNX = CNX * 2 - 1, RNZ = CNZ * 2 - 1;
  const dGeo = new THREE.PlaneGeometry(DW, DL, RNX - 1, RNZ - 1);
  dGeo.rotateX(-Math.PI / 2);
  const dMat = Mat.quilt(0x4a6fb0).clone();
  for (const k of ['map', 'normalMap', 'roughnessMap']) { dMat[k] = dMat[k].clone(); dMat[k].repeat.set(1.85, 2.2); dMat[k].needsUpdate = true; }
  dMat.normalScale = new THREE.Vector2(0.55, 0.55);
  dMat.side = THREE.DoubleSide;
  const duvet = sh(new THREE.Mesh(dGeo, dMat));
  duvet.frustumCulled = false;
  root.add(duvet);

  const state = { cover: 1, roll: 0, curl: 0, shiver: 0, t: 0, ik: null, ikW: 0, ikL: null, ikWL: 0, grabR: false, grabL: false, blahaj: [], armOver: false, armOverL: false };
  const torsoZ = -l / 2 + 3.1;
  // where his torso is: centre (cx, cy) in the bed's cross-section, rolled by a
  const torsoFrame = () => {
    const a = THREE.MathUtils.clamp(state.roll, -1, 1) * 1.35, c = Math.cos(a), s = Math.sin(a);
    const hy = Math.sqrt(TA * TA * s * s + TB * TB * c * c); // half his height as he lies
    return { a, c, s, cx: -0.5 * state.roll, cy: 0.1 + hy };
  };
  const zTopOf = (cover) => lerp(-l / 2 + 4.4, -l / 2 + 2.3, cover);
  // the mattress (rounded), the bed frame and drawers under it, the headboard
  const MAT = { x: (w - 0.25) / 2, z0: -l / 2 + 0.35, z1: l / 2 + 0.35 };
  const fixed = [
    { t: 'r', v: [-MAT.x, -0.8, MAT.z0, MAT.x, 0, MAT.z1, 0.2], mu: 0.75 },
    { t: 'r', v: [-w / 2, -top, -l / 2, w / 2 + 0.14, -0.8, l / 2, 0.04] },
    { t: 'r', v: [-w / 2 - 0.15, -top, -l / 2, w / 2 + 0.15, 2.3, -l / 2 + 0.4, 0.1] },
    { t: 'E', v: [0, 0.45, -l / 2 + 1.5, 1.65, 0.42, 1.0], mu: 0.7 }, // pillow
  ];
  let obstacles = []; // walls, floor, the bedside table (from the level)

  // ---- posing ----
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const _a = V(0, 0, 0), _b = V(0, 0, 0), _c = V(0, 0, 0), _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), Zax = V(0, 0, 1);
  const legPts = []; // [hip, knee, ankle] per leg
  function poseLegs(tf) {
    const cu = state.curl || 0, X = V(tf.c, tf.s, 0), N_ = V(-tf.s, tf.c, 0);
    const hipZ = torsoZ + 1.05, pts = [];
    for (const sx of [1, -1]) {
      const H = V(tf.cx, tf.cy, hipZ).addScaledVector(X, sx * 0.25).addScaledVector(N_, -0.08);
      const topLeg = sx * tf.s > 0.05;
      const t1 = cu * (1.15 + (topLeg ? 0.2 : 0)), t2 = t1 - cu * 1.95;
      const K_ = H.clone().addScaledVector(Zax, Math.cos(t1) * 1.45).addScaledVector(N_, Math.sin(t1) * 1.45);
      const A_ = K_.clone().addScaledVector(Zax, Math.cos(t2) * 1.3).addScaledVector(N_, Math.sin(t2) * 1.3);
      pts.push([H, K_, A_]);
    }
    // they rest on the mattress, not above it
    let drop = 99;
    for (const [H, K_, A_] of pts) drop = Math.min(drop, H.y - 0.3, K_.y - 0.27, A_.y - 0.25);
    if (drop > 0) for (const pp of pts) for (const v of pp) v.y -= drop;
    pts.forEach(([H, K_, A_], i) => {
      const L = i === 0 ? legR : legL;
      L.hip.position.copy(H);
      L.hip.quaternion.setFromUnitVectors(Zax, _a.subVectors(K_, H).normalize());
      _q.copy(L.hip.quaternion).invert();
      L.knee.quaternion.copy(_q).multiply(_q2.setFromUnitVectors(Zax, _b.subVectors(A_, K_).normalize()));
    });
    pelvis.position.set(0, 0, 0).add(pts[0][0]).add(pts[1][0]).multiplyScalar(0.5).addScaledVector(Zax, -0.15);
    pelvis.rotation.z = tf.a;
    legPts.length = 0; legPts.push(...pts);
  }

  // arm capsules in bed-local space, refreshed after posing
  const segs = [];
  const hands = { R: V(0, 0, 0), L: V(0, 0, 0) };
  function refreshArm() {
    root.updateMatrixWorld(true);
    const o = root.position;
    segs.length = 0;
    for (const arm of [armR, armL]) {
      const tag = arm === armR ? 'R' : 'L';
      arm.shoulder.getWorldPosition(_a).sub(o); arm.elbow.getWorldPosition(_b).sub(o);
      _c.set(0, 0, 0.98).applyMatrix4(arm.elbow.matrixWorld).sub(o); hands[tag].copy(_c);
      const wrist = V(0, 0, 0.7).applyMatrix4(arm.elbow.matrixWorld).sub(o);
      segs.push({ a: _a.clone(), b: _b.clone(), r: 0.21, tag }, { a: _b.clone(), b: wrist, r: 0.18, tag }, { a: wrist, b: _c.clone(), r: 0.22, tag });
    }
  }
  // vertical extent of a capsule above point (x, z): [bottom, top] or null
  function capsuleSpan(sg, x, z) {
    const ax = sg.b.x - sg.a.x, az = sg.b.z - sg.a.z, L2 = ax * ax + az * az;
    let t = L2 > 1e-6 ? ((x - sg.a.x) * ax + (z - sg.a.z) * az) / L2 : 0;
    t = Math.max(0, Math.min(1, t));
    const px = sg.a.x + ax * t, pz = sg.a.z + az * t, d2 = (x - px) ** 2 + (z - pz) ** 2;
    if (d2 >= sg.r * sg.r) return null;
    const yc = sg.a.y + (sg.b.y - sg.a.y) * t, h = Math.sqrt(sg.r * sg.r - d2);
    return [yc - h, yc + h];
  }

  // ---- colliders for the cloth ----
  const sphereC = (p, r, mu) => ({ t: 's', v: [p.x, p.y, p.z, r], mu });
  const capC = (a, b, r) => ({ t: 'c', v: [a.x, a.y, a.z, b.x, b.y, b.z, r] });
  function bodyColliders(withArms = true, withBlahaj = true, armsFilter = null) {
    const tf = torsoFrame(), list = [];
    head.getWorldPosition(_a).sub(root.position);
    list.push(sphereC(_a, 0.55));
    list.push({ t: 'T', v: [torsoPivot.position.x, torsoPivot.position.y, torsoZ, tf.a, TA, TB, 0.62, 0.62], f: torsoProfile });
    list.push({ t: 's', v: [pelvis.position.x, pelvis.position.y, pelvis.position.z, 0.5] });
    for (const [H, K_, A_] of legPts) { list.push(capC(H, K_, 0.28)); list.push(capC(K_, A_, 0.24)); list.push(sphereC(A_.clone().addScaledVector(_c.subVectors(A_, K_).normalize(), 0.1), 0.28)); }
    if (legPts.length === 2) { // fill the gap between his legs: under a blanket they're one lump
      const [[H1, K1, A1], [H2, K2, A2]] = legPts, mid = (a, b) => a.clone().add(b).multiplyScalar(0.5);
      const Hm = mid(H1, H2), Km = mid(K1, K2), Am = mid(A1, A2);
      list.push(capC(Hm, Km, 0.2 + 0.5 * H1.distanceTo(H2) / 2 + 0.5 * K1.distanceTo(K2) / 2));
      list.push(capC(Km, Am, 0.18 + 0.5 * K1.distanceTo(K2) / 2 + 0.5 * A1.distanceTo(A2) / 2));
    }
    if (withArms) for (const sg of segs) if (!armsFilter || armsFilter(sg.tag)) list.push(capC(sg.a, sg.b, sg.r + 0.02));
    if (withBlahaj) for (const b of state.blahaj || []) list.push({ t: 's', v: [b.x, b.y, b.z, b.r], mu: b.mu !== undefined ? b.mu : 0.5 });
    return list;
  }
  const bbOf = (c) => {
    const v = c.v, P_ = 0.7;
    switch (c.t) {
      case 's': return [v[0] - v[3] - P_, v[1] - v[3] - P_, v[2] - v[3] - P_, v[0] + v[3] + P_, v[1] + v[3] + P_, v[2] + v[3] + P_];
      case 'c': return [Math.min(v[0], v[3]) - v[6] - P_, Math.min(v[1], v[4]) - v[6] - P_, Math.min(v[2], v[5]) - v[6] - P_, Math.max(v[0], v[3]) + v[6] + P_, Math.max(v[1], v[4]) + v[6] + P_, Math.max(v[2], v[5]) + v[6] + P_];
      case 'E': return [v[0] - v[3] - P_, v[1] - v[4] - P_, v[2] - v[5] - P_, v[0] + v[3] + P_, v[1] + v[4] + P_, v[2] + v[5] + P_];
      case 'T': return [v[0] - 1.6, v[1] - 1.6, v[2] - 2.0, v[0] + 1.6, v[1] + 1.6, v[2] + 2.0];
      case 'r': return [v[0] - P_, v[1] - P_, v[2] - P_, v[3] + P_, v[4] + P_, v[5] + P_];
    }
    return null;
  };
  const allColliders = () => {
    const list = fixed.concat(obstacles, bodyColliders());
    for (const c of list) c.bb = bbOf(c);
    return list;
  };
  // is (x, y, z) inside anything (used to lay the sheet out and to find surfaces)
  const probeOut = [0, 0, 0, 0, 0, 0];
  function insideAny(list, x, y, z, m = 0) {
    for (const c of list) if (cloth.collideTest(c, x, y, z, m)) return true;
    return false;
  }
  // top of the solid stuff at bed-local (x, z), probing down from above
  function topOf(list, x, z, from = 2.8) {
    let y = from;
    while (y > -0.05 && !insideAny(list, x, y, z)) y -= 0.08;
    if (y <= -0.05) return 0;
    let lo = y, hi = y + 0.08;
    for (let i = 0; i < 5; i++) { const mid = (lo + hi) / 2; if (insideAny(list, x, mid, z)) lo = mid; else hi = mid; }
    return lo;
  }

  // ---- hands grabbing the cloth ----
  const grabs = { R: null, L: null }; // { list: [[p, ox, oy, oz]], from: Vector3 }
  // a pinch: the bit of the edge nearest his hand (two weave points wide, two deep);
  // the rest of the blanket hangs from it in its own folds
  function grab(tag) {
    const h = hands[tag];
    let bi = 0, bd = 1e9;
    for (let i = 0; i < CNX; i++) { const p = cloth.idx(i, 0), d = Math.hypot(cloth.P[p * 3] - h.x, cloth.P[p * 3 + 1] - h.y, cloth.P[p * 3 + 2] - h.z); if (d < bd) { bd = d; bi = i; } }
    const list = [];
    for (const i of [bi - 1, bi, bi + 1]) for (const k of [0, 1]) {
      if (i < 0 || i >= CNX) continue;
      const p = cloth.idx(i, k), o = V(cloth.P[p * 3] - h.x, cloth.P[p * 3 + 1] - h.y, cloth.P[p * 3 + 2] - h.z);
      const goal = o.clone().setLength(Math.min(o.length(), 0.12 + 0.1 * Math.abs(i - bi) + 0.08 * k)); // gathered into the fist
      list.push([p, o, goal]);
    }
    grabs[tag] = { list, age: 0 };
    for (const [p] of list) cloth.W[p] = 0;
  }
  function release(tag) {
    for (const [p] of grabs[tag].list) { cloth.W[p] = 1; cloth.pins.delete(p); }
    grabs[tag] = null;
  }

  // keep the top edge where the covers are meant to be (unless a hand has it)
  let coverZ = zTopOf(state.cover);
  // anchors (in play): every point is gently held where the blanket last settled,
  // firmer where it hangs over the sides and foot (tucked in), so walking around on
  // the bed dents it but never drags it off
  const anchor = new Float32Array(cloth.N * 3), anchorK = new Float32Array(cloth.N);
  function setAnchors() {
    anchor.set(cloth.P);
    for (let p = 0; p < cloth.N; p++) anchorK[p] = anchor[p * 3 + 1] < -0.05 ? 0.08 : 0.012;
  }
  cloth.guide = (P, W) => {
    if (state.anchor > 0) for (let p = 0; p < cloth.N; p++) {
      if (W[p] === 0) continue;
      const k = anchorK[p] * state.anchor;
      P[p * 3] += (anchor[p * 3] - P[p * 3]) * k; P[p * 3 + 1] += (anchor[p * 3 + 1] - P[p * 3 + 1]) * k; P[p * 3 + 2] += (anchor[p * 3 + 2] - P[p * 3 + 2]) * k;
    }
    if (state.cover === null || state.cover === undefined) return;
    for (let i = 0; i < CNX; i++) {
      const p = cloth.idx(i, 0);
      if (W[p] === 0) continue;
      P[p * 3 + 2] += (coverZ - P[p * 3 + 2]) * 0.25;
    }
  };

  // lay the sheet out over whatever is under it, then let it settle
  function layOut() {
    const tf = torsoFrame();
    const under = fixed.concat(bodyColliders(true, false, (tag) => !(tag === 'R' ? state.armOver : state.armOverL)));
    const zTop = zTopOf(state.cover ?? 0.6), e = MAT.x + 0.08;
    const tops = new Float32Array(CNX * CNZ);
    cloth.reset((i, k) => {
      const xs = -DW / 2 + i * cloth.dx, zs = zTop + k * cloth.dz;
      const cx = Math.max(-MAT.x + 0.05, Math.min(MAT.x - 0.05, xs)), cz = Math.min(MAT.z1 - 0.05, zs);
      const yTop = topOf(under, cx, cz) + 0.1;
      let x = xs, y = yTop, z = zs;
      const ox = Math.abs(xs) - e;
      if (ox > 0) {
        const wall = xs < 0, out_ = wall ? 0.02 : 0.35;
        if (ox < out_) x = Math.sign(xs) * (e + ox); else { x = Math.sign(xs) * (e + out_); y -= ox - out_; }
      }
      const oz = zs - (MAT.z1 + 0.08);
      if (oz > 0) { if (oz < 0.1) z = MAT.z1 + 0.08 + oz; else { z = MAT.z1 + 0.18; y -= oz - 0.1; } }
      return [x, y, z];
    });
    void tf; void tops;
  }

  let awake = 120, lastSig = 0, acc = 0, prevHands = { R: V(0, 0, 0), L: V(0, 0, 0) }, folding = 0;
  const H = 1 / 90;
  cloth.opts.collideIters = 2;
  function simulate(dt, force = false) {
    const cols = allColliders();
    // wake when anything touching the cloth moves (or a hand holds it)
    let sig = 0; for (const c of cols) for (let i = 0; i < c.v.length; i++) sig += c.v[i] * (i + 1.37);
    if (Math.abs(sig - lastSig) > 1e-4 || grabs.R || grabs.L || state.cover !== undefined && Math.abs(zTopOf(state.cover ?? 0) - coverZ) > 1e-4) awake = 60;
    lastSig = sig;
    coverZ = zTopOf(state.cover ?? 0.6);
    cloth.setColliders(cols);
    if (!force && awake <= 0) return false;
    acc = Math.min(acc + dt, H * 3);
    // the fabric only folds over itself while a hand is moving it (and as it falls after)
    if (grabs.R || grabs.L) folding = 1.5; else folding = Math.max(0, folding - dt);
    cloth.opts.self = folding > 0;
    const n = force ? 1 : Math.floor(acc / H);
    acc -= n * H;
    for (let j = 0; j < n; j++) {
      const a0 = j / n, a1 = (j + 1) / n;
      for (const tag of ['R', 'L']) if (grabs[tag]) {
        const hp = prevHands[tag].clone().lerp(hands[tag], a1);
        const g = grabs[tag], e = Math.min(1, (g.age += H) / 0.4), k = e * e * (3 - 2 * e); // the fist closes, no snap
        for (const [p, o, goal] of g.list) { const ox = o.x + (goal.x - o.x) * k, oy = o.y + (goal.y - o.y) * k, oz = o.z + (goal.z - o.z) * k; cloth.pins.set(p, [hp.x + ox, hp.y + oy, hp.z + oz]); }
      }
      cloth.step(H, a0, a1);
    }
    if (n > 0 && !(grabs.R || grabs.L) && cloth.speed() < 4e-4) awake--;
    else if (n > 0) awake = Math.max(awake, 20);
    return n > 0;
  }
  const RA = new Float32Array(RNX * CNZ * 3); // rows of the sim, columns doubled
  const cr = (a, b, c, d) => (-a + 9 * b + 9 * c - d) / 16; // Catmull-Rom midpoint
  function writeMesh() {
    const pos = dGeo.attributes.position.array, P = cloth.P;
    const sp = (i, k, c) => P[(k * CNX + Math.max(0, Math.min(CNX - 1, i))) * 3 + c];
    for (let k = 0; k < CNZ; k++) for (let u = 0; u < RNX; u++) for (let c = 0; c < 3; c++) {
      const i = u >> 1;
      RA[(k * RNX + u) * 3 + c] = u & 1 ? cr(sp(i - 1, k, c), sp(i, k, c), sp(i + 1, k, c), sp(i + 2, k, c)) : sp(i, k, c);
    }
    const ra = (u, k, c) => RA[(Math.max(0, Math.min(CNZ - 1, k)) * RNX + u) * 3 + c];
    const sh_ = state.shiver * 0.008;
    for (let v = 0; v < RNZ; v++) for (let u = 0; u < RNX; u++) {
      const k = v >> 1, o = (v * RNX + u) * 3;
      for (let c = 0; c < 3; c++) pos[o + c] = v & 1 ? cr(ra(u, k - 1, c), ra(u, k, c), ra(u, k + 1, c), ra(u, k + 2, c)) : ra(u, k, c);
      if (sh_) pos[o] += Math.sin(state.t * 40 + pos[o + 2]) * sh_;
    }
    dGeo.attributes.position.needsUpdate = true;
    dGeo.computeVertexNormals();
  }

  // arm: two-bone IK to a target (bed-local)
  const UA = 1.0, FA = 0.98;
  const m4 = new THREE.Matrix4();
  function solveIK(S, target, pole) {
    const d = target.clone().sub(S);
    const dist = Math.min(UA + FA - 1e-3, Math.max(0.3, d.length()));
    const z1 = d.normalize();
    const y1 = pole.clone().addScaledVector(z1, -pole.dot(z1)).normalize();
    const x1 = new THREE.Vector3().crossVectors(y1, z1);
    const alpha = Math.acos(THREE.MathUtils.clamp((UA * UA + dist * dist - FA * FA) / (2 * UA * dist), -1, 1));
    const up = z1.clone().multiplyScalar(Math.cos(alpha)).addScaledVector(y1, Math.sin(alpha));
    const E = up.clone().multiplyScalar(UA);
    const fore = z1.clone().multiplyScalar(dist).sub(E).normalize();
    const qU = new THREE.Quaternion().setFromRotationMatrix(m4.makeBasis(x1, new THREE.Vector3().crossVectors(up, x1), up));
    const qF = new THREE.Quaternion().setFromRotationMatrix(m4.makeBasis(x1, new THREE.Vector3().crossVectors(fore, x1), fore));
    return [qU, qU.clone().invert().multiply(qF)];
  }
  const POLE = new THREE.Vector3(0.75, 1, 0.35).normalize(); // elbow out and up, over whatever he hugs
  const TUCK_POLE = new THREE.Vector3(1, 0.2, 0.5).normalize(); // elbow down by his side
  const POLE_L = new THREE.Vector3(-0.2, 1, -0.3).normalize();  // the other arm reaches over the top

  function pose(dt) {
    state.t += dt;
    // roll > 0: over toward the wall; roll < 0: onto his right side, facing the room
    const rp = Math.max(0, state.roll), rn = Math.max(0, -state.roll);
    const tf = torsoFrame();
    const shake = state.shiver * Math.sin(state.t * 47) * 0.012;
    torsoPivot.position.set(tf.cx + shake, tf.cy, torsoZ); torsoPivot.rotation.z = tf.a;
    for (const [arm, sx] of [[armR, 0.6], [armL, -0.6]]) arm.shoulder.position.set(tf.cx + sx * tf.c - 0.12 * tf.s + shake, tf.cy + sx * tf.s + 0.12 * tf.c, -l / 2 + 2.65);
    // each arm always reaches for something: by default the hand rests tucked on
    // his chest under the covers; state.ik / state.ikL (bed-local) pull it elsewhere
    const arms = [
      [armR, V(0.35 - 0.55 * rp + 0.45 * rn, 0.62, -l / 2 + 3.35), TUCK_POLE, state.ik, state.ikW, state.pole || POLE],
      [armL, V(-0.35 - 0.2 * rp, 0.62, -l / 2 + 3.35).lerp(V(0.45, 0.95, -l / 2 + 4.3), rn), V(-1 + 1.6 * rn, -0.3, 0.5 - 0.8 * rn).normalize(), state.ikL, state.ikWL, state.poleL || POLE_L],
    ];
    for (const [arm, tuck, tpole, ik, ikW, ipole] of arms) {
      const w_ = ik ? ikW : 0;
      const goal = w_ > 0 ? tuck.clone().lerp(ik, w_) : tuck;
      const pole = tpole.clone().lerp(ipole, w_).normalize();
      const [qU, qE] = solveIK(arm.shoulder.position, goal, pole);
      arm.shoulder.quaternion.copy(qU); arm.elbow.quaternion.copy(qE);
    }
    headPivot.rotation.z = -0.15 + state.roll + Math.sin(state.t * 0.7) * 0.02;
    headPivot.position.x = 0.1 - 0.45 * state.roll;
    head.position.y = Math.sin(state.t * 1.6) * 0.01 + shake;
    poseLegs(tf);
    prevHands.R.copy(hands.R); prevHands.L.copy(hands.L);
    refreshArm();
  }

  const leo = {
    group: root, state, headPivot, shoulder, elbow, duvet, cloth,
    // world position where Blåhaj sits in his arms
    hugPoint: new THREE.Vector3(bed.x + 1.15, top + 0.75, bed.z - l / 2 + 3.4),
    worldToLocal: (p) => p.clone().sub(root.position),
    // the level's boxes near the bed (walls, floor, the bedside table) block the cloth too
    setObstacles(boxes) {
      const o = root.position;
      obstacles = boxes.map((b) => ({ t: 'r', v: [b.min.x - o.x, b.min.y - o.y, b.min.z - o.z, b.max.x - o.x, b.max.y - o.y, b.max.z - o.z, 0.02], m: 0.01 }));
    },
    // top of the duvet (or the bare mattress, the pillow, Leo) at world (x, z):
    // what Blåhaj walks and rests on. Built from the solid shapes, so it doesn't
    // twitch with the fabric.
    surfaceAt(wx, wz) {
      const x = wx - root.position.x, z = wz - root.position.z;
      if (Math.abs(x) > MAT.x || z < MAT.z0 + 0.05 || z > MAT.z1) return null;
      const y = topOf(fixed.concat(bodyColliders(false, false)), x, z);
      return root.position.y + y + (z > coverZ - 0.1 ? 0.12 : 0);
    },
    // what lies beneath the duvet at world (x, z): the mattress, or Leo himself
    underAt(wx, wz) {
      const x = wx - root.position.x, z = wz - root.position.z;
      if (Math.abs(x) > MAT.x || z < MAT.z0 + 0.05 || z > MAT.z1) return null;
      return root.position.y + topOf(fixed.concat(bodyColliders(false, false)), x, z);
    },
    // top of his arm above (x, z) in world space, or null (things can rest on it)
    armTopAt(wx, wz, arm = 'R') {
      const x = wx - root.position.x, z = wz - root.position.z;
      let best = null;
      for (const sg of segs) { if (sg.tag !== arm) continue; const sp = capsuleSpan(sg, x, z); if (sp && (best === null || sp[1] > best)) best = sp[1]; }
      return best === null ? null : root.position.y + best;
    },
    // the duvet's top edge right now, nearest bed-local x (world space)
    edgePoint(xLocal) {
      let best = 0, bd = 1e9;
      for (let i = 0; i < CNX; i++) { const p = cloth.idx(i, 0), d = Math.abs(cloth.P[p * 3] - xLocal); if (d < bd) { bd = d; best = p; } }
      return V(cloth.P[best * 3], cloth.P[best * 3 + 1], cloth.P[best * 3 + 2]).add(root.position);
    },
    handAt(tag) { return hands[tag].clone().add(root.position); },
    update(dt, s = {}) {
      Object.assign(state, s);
      state.anchor = s.anchor || 0; // only while you play (cutscenes move it freely)
      pose(dt);
      for (const tag of ['R', 'L']) {
        const want = tag === 'R' ? state.grabR : state.grabL;
        if (want && !grabs[tag]) grab(tag); else if (!want && grabs[tag]) release(tag);
      }
      if (simulate(dt) || state.shiver) writeMesh(); // (a resting blanket isn't redrawn)
    },
    // jump the cloth to a fresh drape for the current pose (after a cut)
    settle(seconds = 2.5) {
      for (const tag of ['R', 'L']) if (grabs[tag]) release(tag);
      pose(0); coverZ = zTopOf(state.cover ?? 0.6);
      layOut();
      cloth.setColliders(allColliders()); cloth.setColliders(allColliders());
      cloth.opts.self = true;
      for (let i = 0, n = Math.round(seconds / H); i < n; i++) cloth.step(H, 1, 1);
      awake = 30; writeMesh(); setAnchors();
    },
  };
  void probeOut;
  leo.settle(0.5);
  return leo;
}

// ------------------------------------------------------------ dream bubble --
export function createDreamBubble(at) {
  const g = new THREE.Group();
  g.position.copy(at);
  // a soft, see-through cloud (no refraction, so the dream inside reads clearly)
  const bubbleMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.3, transparent: true, opacity: 0.16, emissive: 0xfff0d8, emissiveIntensity: 0.1, iridescence: 0.8, side: THREE.FrontSide });
  bubbleMat.depthWrite = false;
  const cloud = new THREE.Group(); g.add(cloud);
  [[0, 0, 0, 1.8], [1.4, -0.3, 0.2, 1.2], [-1.5, -0.2, -0.1, 1.25], [0.6, 0.9, -0.2, 1.1], [-0.7, 0.8, 0.3, 1.0]].forEach(([x, y, z, r]) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 20), bubbleMat); m.position.set(x, y, z); m.renderOrder = 6; cloud.add(m);
  });
  const trail = [];
  [[0.9, -2.4, 0.3, 0.32], [0.5, -3.3, 0.5, 0.22], [0.2, -3.9, 0.6, 0.14]].forEach(([x, y, z, r]) => { const m = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), bubbleMat); m.position.set(x, y, z); g.add(m); trail.push(m); });
  const light = new THREE.PointLight(0xffd59a, 5, 7, 2); g.add(light);
  // inside the dream: Blåhaj swimming loops round a ring of teddy bears dancing on a
  // little moonlit hill, with twinkling stars and a crescent moon
  const mini = createBlahaj(); mini.root.scale.setScalar(0.62); mini.blob.visible = false; cloud.add(mini.root);
  const teddies = [0, 1, 2].map((i) => { const t = createTeddy(0.55, [0xa8784e, 0xd9a066, 0x8a6a8f][i]); cloud.add(t.group); return t; });
  const nightmares = [0, 1, 2].map(() => { const s = createShadow(0.5); s.group.visible = false; cloud.add(s.group); return s; });
  const hill = new THREE.Mesh(new THREE.SphereGeometry(1.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x8fd18a, emissive: 0x2f6a3a, emissiveIntensity: 0.5, roughness: 0.9 }));
  hill.scale.set(1.2, 0.3, 0.8); hill.position.y = -0.95; cloud.add(hill);
  const moon = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.1, 10, 24, Math.PI * 1.25), new THREE.MeshStandardMaterial({ color: 0xfff1b0, emissive: 0xffd86a, emissiveIntensity: 1.4 }));
  moon.position.set(-1.1, 0.95, -0.2); moon.rotation.z = 2.2; cloud.add(moon);
  const twinkles = [];
  for (let i = 0; i < 9; i++) {
    const st = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color: 0xfff3c0, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    st.position.set((Math.random() - 0.5) * 3.2, 0.2 + Math.random() * 1.0, (Math.random() - 0.5) * 1.2); st.userData.ph = Math.random() * 6; cloud.add(st); twinkles.push(st);
  }
  const bubble = {
    group: g, dream: 1, trail,
    update(dt, t, dream) {
      bubble.dream += (dream - bubble.dream) * Math.min(1, dt * 2);
      const d = bubble.dream;
      cloud.rotation.y = Math.sin(t * 0.3) * 0.2;
      cloud.position.y = Math.sin(t * 0.9) * 0.1 + (1 - d) * Math.sin(t * 13) * 0.03;
      bubbleMat.emissive.setRGB(lerp(0.35, 1.0, d), lerp(0.08, 0.94, d), lerp(0.45, 0.85, d));
      bubbleMat.emissiveIntensity = lerp(0.25, 0.1, d);
      light.color.setRGB(lerp(0.6, 1.0, d), lerp(0.2, 0.83, d), lerp(0.9, 0.6, d));
      light.intensity = lerp(3, 5, d);
      mini.root.position.set(Math.cos(t * 0.8) * 1.1, 0.45 + Math.sin(t * 1.6) * 0.18, Math.sin(t * 0.8) * 0.55);
      mini.root.rotation.y = -t * 0.8;
      twinkles.forEach((st) => { const k = 0.5 + 0.5 * Math.sin(t * 3 + st.userData.ph); st.scale.setScalar(0.12 + 0.14 * k * d); st.material.opacity = (0.4 + 0.6 * k) * d; });
      moon.material.emissiveIntensity = 1.4 * d + 0.2;
      hill.material.color.setRGB(lerp(0.25, 0.56, d), lerp(0.2, 0.82, d), lerp(0.35, 0.54, d));
      mini.update(dt, { speed: 0.4, grounded: false, vx: 0, vy: 0, vz: 0, glide: true });
      teddies.forEach((td, i) => {
        const a = t * 0.9 + (i * Math.PI * 2) / 3;
        td.group.position.set(Math.cos(a) * 0.75, -0.72 + Math.abs(Math.sin(t * 3 + i)) * 0.15, Math.sin(a) * 0.4); // dancing on the hill
        td.group.rotation.y = -a + Math.PI / 2;
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
export function getShadowMat() {
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
// Biscuit is a golden retriever: ~57 cm at the shoulder, about as long as
// Blåhaj is from nose to tail-tip twice over. Modelled at 1/0.68 and scaled.
export const DOG_SCALE = 0.68;
export function createDog() {
  const g = new THREE.Group();
  g.scale.setScalar(DOG_SCALE);
  const fur = furMat(0xe4ae66, 0xffe6b8);
  const light = furMat(0xf2d2a0, 0xfff4e0);
  fur.emissive = new THREE.Color(0x3a2410); fur.emissiveIntensity = 0.35; light.emissive = new THREE.Color(0x3a2a18); light.emissiveIntensity = 0.35;
  const nose = new THREE.MeshPhysicalMaterial({ color: 0x1a1210, roughness: 0.25, clearcoat: 1 });
  const body = new THREE.Group(); body.position.y = 2.7; g.add(body);
  const torso = part(new THREE.CapsuleGeometry(0.85, 2.6, 10, 20), fur, body, 0, 0, 0); torso.rotation.x = Math.PI / 2;
  part(new THREE.SphereGeometry(0.95, 24, 16), light, body, 0, -0.1, 1.35).scale.set(0.95, 1, 0.8);
  part(new THREE.SphereGeometry(0.9, 22, 16), fur, body, 0, 0.05, -1.3).scale.set(1, 0.95, 1); // rump
  // neck: a thick tapered column from the shoulders up into the back of the skull,
  // rounded off at both ends so it flows into the body and head, with a pale chest ruff
  const neck = new THREE.Group(); neck.position.set(0, 0.45, 1.6); body.add(neck);
  const NECK_TO = new THREE.Vector3(0, 1.3, 0.62), neckLen = NECK_TO.length();
  const neckM = part(new THREE.CylinderGeometry(0.5, 0.74, neckLen, 20, 1, true), fur, neck, 0, 0, 0);
  neckM.position.copy(NECK_TO).multiplyScalar(0.5); neckM.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), NECK_TO.clone().normalize());
  part(new THREE.SphereGeometry(0.74, 20, 14), fur, neck, 0, 0, 0).scale.set(1, 0.9, 1.05);
  part(new THREE.SphereGeometry(0.62, 18, 12), light, neck, 0, 0.05, 0.42).scale.set(1.05, 1.25, 0.75); // chest ruff
  const head = new THREE.Group(); head.position.copy(NECK_TO); neck.add(head);
  part(new THREE.SphereGeometry(0.52, 18, 12), fur, head, 0, -0.08, -0.32); // where the neck meets the skull
  part(new THREE.SphereGeometry(0.7, 28, 20), fur, head, 0, 0, 0).scale.set(0.95, 0.9, 1);
  const muzzle = part(new THREE.CylinderGeometry(0.27, 0.37, 0.8, 18), light, head, 0, -0.25, 0.68); muzzle.rotation.x = Math.PI / 2;
  part(new THREE.SphereGeometry(0.27, 16, 12), light, head, 0, -0.25, 1.08).scale.set(1, 0.95, 0.8); // rounded snout end
  part(new THREE.SphereGeometry(0.17, 14, 10), nose, head, 0, -0.14, 1.27).scale.set(1.2, 0.8, 0.9);
  const jaw = new THREE.Group(); jaw.position.set(0, -0.45, 0.45); head.add(jaw);
  const jawM = part(new THREE.CapsuleGeometry(0.24, 0.45, 6, 12), light, jaw, 0, -0.05, 0.3); jawM.rotation.x = Math.PI / 2;
  const tongue = part(new THREE.CapsuleGeometry(0.13, 0.3, 6, 10), new THREE.MeshPhysicalMaterial({ color: 0xe36d7a, roughness: 0.35, clearcoat: 0.6 }), jaw, 0, -0.12, 0.55); tongue.rotation.x = Math.PI / 2 + 0.5;
  const eyes = [], ears = [];
  for (const s of [-1, 1]) {
    eyes.push(part(new THREE.SphereGeometry(0.1, 14, 10), Mat.eye(), head, s * 0.3, 0.18, 0.55));
    part(new THREE.SphereGeometry(0.12, 10, 8), fur, head, s * 0.3, 0.3, 0.5).scale.set(1.2, 0.5, 0.8); // brows
    const ear = new THREE.Group(); ear.position.set(s * 0.55, 0.25, -0.05); head.add(ear);
    const em = part(new THREE.SphereGeometry(0.42, 16, 12), fur, ear, s * 0.08, -0.45, 0); em.scale.set(0.35, 1, 0.75);
    ear.rotation.z = s * 0.2; ears.push(ear);
  }
  // legs: hips/shoulders pivot, two segments each; sturdier upper legs, thigh muscle on the back legs
  const legs = [];
  for (const [x, z] of [[-0.5, 1.2], [0.5, 1.2], [-0.5, -1.25], [0.5, -1.25]]) {
    const front = z > 0;
    const hip = new THREE.Group(); hip.position.set(x, -0.35, z); body.add(hip);
    const up = part(new THREE.CapsuleGeometry(front ? 0.3 : 0.33, 0.85, 6, 12), fur, hip, 0, -0.6, 0);
    if (!front) part(new THREE.SphereGeometry(0.55, 16, 12), fur, hip, x * 0.1, -0.15, -0.05).scale.set(0.8, 1.1, 1.05); // thigh
    else part(new THREE.SphereGeometry(0.3, 12, 10), light, hip, 0, -0.65, -0.2).scale.set(0.7, 1.4, 0.6); // feathering
    const knee = new THREE.Group(); knee.position.set(0, -1.15, 0); hip.add(knee);
    part(new THREE.CapsuleGeometry(0.21, 0.75, 6, 12), fur, knee, 0, -0.5, 0);
    part(new THREE.SphereGeometry(0.27, 14, 10), light, knee, 0, -1.0, 0.1).scale.set(1, 0.6, 1.3);
    legs.push({ hip, knee, front, up, low: x < 0 });
  }
  // tail: sticks out behind him (along -z) from the top of his rump, with a
  // slight upward curl at the tip. rotation.x lifts it; rotation.y wags it side
  // to side (Euler XYZ: the wag happens first, then the lift tilts its plane),
  // so it sweeps behind him and never over his back.
  const tail = new THREE.Group(); tail.position.set(0, 0.45, -2.05); body.add(tail);
  part(new THREE.SphereGeometry(0.24, 12, 10), fur, tail, 0, 0, 0);
  part(new THREE.CapsuleGeometry(0.2, 0.9, 6, 12), fur, tail, 0, 0, -0.6).rotation.x = Math.PI / 2;
  const tailTip = new THREE.Group(); tailTip.position.set(0, 0, -1.1); tailTip.rotation.x = 0.35; tail.add(tailTip);
  part(new THREE.CapsuleGeometry(0.16, 0.6, 6, 12), fur, tailTip, 0, 0, -0.4).rotation.x = Math.PI / 2;
  const TAIL = { // pose -> [lift, sideways, wag amount, wag speed]
    stand: [0.35, 0, 0.55, 9], walk: [0.22, 0, 0.45, 9], carry: [0.4, 0, 0.6, 10], pickup: [0.35, 0, 0.5, 9],
    bow: [0.7, 0, 0.75, 14], shake: [0.7, 0, 0.7, 14], toss: [0.75, 0, 0.6, 12], yawn: [0.25, 0, 0.15, 3],
    rear: [-0.2, 0, 0.3, 8], sleep: [-0.15, 0.35, 0.04, 1.0],
  };
  const zzz = new THREE.Group(); g.add(zzz);
  // lying down, keyframed: [progress, body height, pitch, roll, front hip, front knee, rear hip, rear knee,
  //   lower legs out, upper legs out, neck pitch, neck tilt]
  const LIE = [
    [0.00, 2.7, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.05, 0.0],
    [0.22, 2.25, -0.42, 0.0, 0.42, 0.0, -1.3, 2.25, 0.0, 0.0, -0.15, 0.0],  // sits back on his haunches
    [0.5, 1.0, 0.0, 0.0, -1.45, 0.15, -1.2, 2.3, 0.0, 0.0, 0.25, 0.0],      // walks his paws out: a sphinx
    [0.66, 1.0, 0.0, 0.0, -1.45, 0.15, -1.2, 2.3, 0.0, 0.0, 0.45, 0.0],     // a last look round
    [1.0, 0.95, 0.0, 1.25, -0.2, 0.55, 0.4, 0.6, 0.32, 0.05, 1.2, 0.25],    // and flops onto his side
  ];
  const dog = {
    group: g, body, head, neck, jaw, tail, legs, mouthPoint: new THREE.Object3D(),
    pose: 'stand', t: 0,
    update(dt, pose = dog.pose, speed = 0) {
      dog.pose = pose; dog.t += dt;
      const t = dog.t;
      const [lift, side, wag, wagHz] = TAIL[pose] || TAIL.stand, ease = Math.min(1, dt * 6);
      tail.rotation.x += (lift - tail.rotation.x) * ease; tail.rotation.z += (0 - tail.rotation.z) * ease;
      dog.tailSide = (dog.tailSide || 0) + (side - (dog.tailSide || 0)) * ease;
      tail.rotation.y = dog.tailSide + Math.sin(t * wagHz) * wag;
      tailTip.rotation.y = Math.sin(t * wagHz - 0.9) * wag * 0.5; // the tip follows through
      if (pose !== 'sleep') { // getting up: undo the roll and the sprawl
        dog.sleepK = 0;
        body.rotation.z += (0 - body.rotation.z) * ease; neck.rotation.z += (0 - neck.rotation.z) * ease;
        legs.forEach((L) => (L.hip.rotation.z += (0 - L.hip.rotation.z) * ease));
        torso.scale.set(1, 1, 1);
      }
      if (pose === 'walk' || pose === 'stand' || pose === 'carry' || pose === 'pickup') {
        body.position.y = 2.7 + (speed > 0 ? Math.abs(Math.sin(t * 7)) * 0.08 : 0);
        body.rotation.x += (0 - body.rotation.x) * Math.min(1, dt * 6);
        legs.forEach((L, i) => {
          const ph = (i === 0 || i === 3 ? 0 : Math.PI);
          L.hip.rotation.x = speed > 0 ? Math.sin(t * 7 + ph) * 0.5 : 0;
          L.knee.rotation.x = speed > 0 ? Math.max(0, -Math.sin(t * 7 + ph)) * 0.6 * (L.front ? -1 : 1) : 0;
        });
        neck.rotation.y *= 0.85;
        const neckT = pose === 'carry' ? 0.15 : pose === 'pickup' ? 1.75 : Math.sin(t * 1.5) * 0.05;
        neck.rotation.x += (neckT - neck.rotation.x) * Math.min(1, dt * 8);
        if (pose === 'pickup') { body.rotation.x += (0.32 - body.rotation.x) * Math.min(1, dt * 6); body.position.y = 2.4; }
        jaw.rotation.x = pose === 'carry' ? 0.12 : pose === 'pickup' ? 0.4 : 0.25 + Math.sin(t * 6) * 0.08; // panting
        tongue.visible = pose !== 'carry' && pose !== 'pickup';
      } else if (pose === 'bow' || pose === 'shake' || pose === 'toss' || pose === 'yawn') {
        // play bow: chest down, bum up, tail going; shake: whip the toy side to side;
        // toss: fling the head up; yawn: a big sleepy stretch of the jaw
        const pitch = pose === 'bow' ? 0.32 : pose === 'toss' ? -0.25 : 0;
        body.rotation.x += (pitch - body.rotation.x) * Math.min(1, dt * 7);
        body.position.y = 2.7 - (pose === 'bow' ? 0.35 : 0);
        legs.forEach((L) => { L.hip.rotation.x = pose === 'bow' && L.front ? -0.7 : 0; L.knee.rotation.x = pose === 'bow' && L.front ? 1.2 : 0; });
        const neckT = pose === 'bow' ? -0.45 : pose === 'toss' ? -0.9 : pose === 'yawn' ? -0.55 : 0.1;
        neck.rotation.x += (neckT - neck.rotation.x) * Math.min(1, dt * (pose === 'toss' ? 14 : 7));
        neck.rotation.y = pose === 'shake' ? Math.sin(t * 22) * 0.45 : neck.rotation.y * 0.85;
        jaw.rotation.x = pose === 'yawn' ? 0.75 : pose === 'toss' ? 0.5 : 0.12;
        tongue.visible = pose === 'yawn';
      } else if (pose === 'rear') {
        body.rotation.x += (-0.95 - body.rotation.x) * Math.min(1, dt * 5);
        body.position.y = 3.3;
        legs.forEach((L) => { L.hip.rotation.x = L.front ? 0.9 : 0.95; L.knee.rotation.x = L.front ? -0.6 : -0.3; });
        neck.rotation.x = 0.9; jaw.rotation.x = 0.45;
      } else if (pose === 'sleep') {
        // lying down like a real dog: sit, walk the front paws out into a sphinx, look round,
        // then flop over onto his side with a sigh. dt 0 (placed asleep) skips straight to the end.
        dog.sleepK = dt === 0 ? 1 : Math.min(1, (dog.sleepK || 0) + dt / 2.8);
        const k = dog.sleepK;
        let i = 0; while (i < LIE.length - 2 && k > LIE[i + 1][0]) i++;
        const A = LIE[i], Bk = LIE[i + 1], u = Math.min(1, Math.max(0, (k - A[0]) / (Bk[0] - A[0]))), e = u * u * (3 - 2 * u);
        const v = (j) => A[j] + (Bk[j] - A[j]) * e;
        const settled = k >= 1, br = settled ? Math.sin(t * 1.3) : 0; // slow sleepy breathing
        body.position.y = v(1) + br * 0.025;
        body.rotation.set(v(2), 0, v(3));
        torso.scale.set(1 + br * 0.03, 1, 1 + br * 0.03);
        legs.forEach((L) => {
          L.hip.rotation.x = L.front ? v(4) : v(6);
          L.knee.rotation.x = L.front ? v(5) : v(7);
          L.hip.rotation.z = L.low ? v(8) : v(9);
        });
        neck.rotation.x = v(10) + br * 0.02; neck.rotation.z = v(11); neck.rotation.y *= 0.9;
        jaw.rotation.x = k > 0.8 && k < 0.95 ? 0.18 : 0.0; // the big sigh as he flops over
        tongue.visible = false;
        const shut = k > 0.82;
        eyes.forEach((ey) => (ey.scale.y = shut ? 0.12 : 1));
        if (settled) { // the odd ear twitch in a dream
          dog.twitch = (dog.twitch ?? 3) - dt;
          if (dog.twitch < 0) { dog.twitch = 3 + Math.random() * 5; dog.twitchT = 0.35; }
          dog.twitchT = Math.max(0, (dog.twitchT || 0) - dt);
          ears[1].rotation.x = Math.sin(dog.twitchT * 40) * 0.25 * (dog.twitchT > 0 ? 1 : 0);
        }
      }
    },
  };
  jaw.add(dog.mouthPoint); dog.mouthPoint.position.set(0, -0.15, 0.55);
  return dog;
}

// ------------------------------------------------------------------ cat --
// A grey tabby loafing on the stairs, grumpy about being disturbed.
// Local frame: +x is where she faces, y up.
let tabbyTex = null;
function tabbyTexture() {
  if (tabbyTex) return tabbyTex;
  const W = 512, H = 256, c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#8f8a86'; g.fillRect(0, 0, W, H);
  // soft mottling
  for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(${Math.random() < 0.5 ? '60,55,52' : '190,184,178'},${0.05 + Math.random() * 0.08})`; g.beginPath(); g.arc(Math.random() * W, Math.random() * H, 2 + Math.random() * 6, 0, 7); g.fill(); }
  // mackerel stripes running round the body (u wraps around a sphere)
  g.lineCap = 'round';
  for (let i = 0; i < 18; i++) { // broken, feathery stripes rather than hard bands
    const x0 = (i + 0.5) * W / 18;
    for (let y = 24; y < H - 24; y += 6) {
      if (Math.sin(y * 0.09 + i * 1.7) > 0.55) continue;
      const x = x0 + Math.sin(y * 0.05 + i) * 6 + Math.sin(y * 0.19) * 2;
      g.strokeStyle = `rgba(58,52,48,${0.35 + Math.random() * 0.25})`; g.lineWidth = 3 + Math.random() * 4;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + (Math.random() - 0.5) * 3, y + 7); g.stroke();
    }
  }
  // fine fur grain
  for (let i = 0; i < 5000; i++) { g.fillStyle = `rgba(${Math.random() < 0.5 ? '40,36,34' : '220,214,206'},0.12)`; g.fillRect(Math.random() * W, Math.random() * H, 1, 3); }
  tabbyTex = new THREE.CanvasTexture(c); tabbyTex.colorSpace = THREE.SRGBColorSpace; tabbyTex.wrapS = tabbyTex.wrapT = THREE.RepeatWrapping;
  return tabbyTex;
}
export function createCat() {
  const g = new THREE.Group();
  const fz = Tex.plush(), fn = fz.normalMap.clone(); fn.repeat.set(6, 6); fn.needsUpdate = true;
  const fur = new THREE.MeshPhysicalMaterial({ map: tabbyTexture(), color: 0xffffff, roughness: 0.95, sheen: 1, sheenRoughness: 0.5, sheenColor: new THREE.Color(0xd8d2cc), normalMap: fn, normalScale: new THREE.Vector2(0.5, 0.5) });
  const white = new THREE.MeshPhysicalMaterial({ color: 0xf3eee8, roughness: 0.95, sheen: 1, sheenColor: new THREE.Color(0xffffff), normalMap: fn, normalScale: new THREE.Vector2(0.4, 0.4) });
  const pink = new THREE.MeshStandardMaterial({ color: 0xe7a3a3, roughness: 0.6 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x1b1716, roughness: 0.5 });
  const iris = new THREE.MeshPhysicalMaterial({ color: 0x9ccf5a, roughness: 0.15, clearcoat: 1, emissive: 0x2d4a10, emissiveIntensity: 0.6 });
  // body: a loaf, haunches at the back, white bib at the front
  const body = new THREE.Group(); g.add(body);
  const loaf = part(new THREE.CapsuleGeometry(0.52, 1.0, 12, 28), fur, body, -0.25, 0.56, 0); loaf.rotation.z = Math.PI / 2; loaf.scale.set(1.05, 1, 1.22);
  part(new THREE.SphereGeometry(0.4, 20, 16), white, body, 0.6, 0.48, 0).scale.set(0.7, 1.0, 1.25);
  // tucked front paws, one ready to swat
  for (const sd of [-1, 1]) part(new THREE.SphereGeometry(0.13, 14, 10), white, body, 0.82, 0.12, sd * 0.22).scale.set(1.5, 0.75, 1);
  const paw = new THREE.Group(); paw.position.set(0.6, 0.3, -0.42); g.add(paw);
  const leg = part(new THREE.CapsuleGeometry(0.1, 0.42, 6, 12), fur, paw, 0.2, 0, 0); leg.rotation.z = Math.PI / 2;
  part(new THREE.SphereGeometry(0.13, 14, 10), white, paw, 0.48, 0, 0).scale.set(1.3, 0.75, 1);
  // head
  const head = new THREE.Group(); head.position.set(0.88, 1.0, 0.0); g.add(head);
  part(new THREE.SphereGeometry(0.4, 32, 24), fur, head, 0, 0, 0).scale.set(0.95, 0.88, 1.05);
  for (const sd of [-1, 1]) part(new THREE.SphereGeometry(0.2, 16, 12), fur, head, 0.18, -0.12, sd * 0.2).scale.set(0.9, 0.8, 1); // cheeks
  part(new THREE.SphereGeometry(0.15, 16, 12), white, head, 0.32, -0.14, 0).scale.set(0.8, 0.7, 1.2);                       // muzzle
  part(new THREE.SphereGeometry(0.16, 16, 12), white, head, 0.22, -0.22, 0).scale.set(1.0, 0.6, 1.1);                        // chin
  const headFur = new THREE.MeshPhysicalMaterial({ map: tabbyTexture(), color: 0xd9d4ce, roughness: 0.95, sheen: 1, sheenColor: new THREE.Color(0xffffff), normalMap: fn, normalScale: new THREE.Vector2(0.4, 0.4) });
  head.children[0].material = headFur;
  const nose = part(new THREE.SphereGeometry(0.045, 10, 8), pink, head, 0.44, -0.07, 0); nose.scale.set(0.8, 0.7, 1.3);
  const mouth = part(new THREE.TorusGeometry(0.04, 0.008, 6, 12, Math.PI), dark, head, 0.43, -0.17, 0); mouth.rotation.set(0, Math.PI / 2, Math.PI);
  const eyes = [];
  for (const sd of [-1, 1]) {
    const e = part(new THREE.SphereGeometry(0.075, 18, 14), iris, head, 0.31, 0.06, sd * 0.15); e.scale.set(0.6, 0.75, 1.1);
    const pupil = part(new THREE.CapsuleGeometry(0.012, 0.07, 4, 8), dark, head, 0.355, 0.06, sd * 0.15); pupil.castShadow = false;
    const lid = part(new THREE.SphereGeometry(0.085, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.42), fur, head, 0.3, 0.075, sd * 0.15); lid.rotation.z = -0.5; lid.scale.set(0.65, 0.8, 1.15); // grumpy half-lids
    eyes.push(e);
    // ears: fur outside, pink inside
    const ear = new THREE.Group(); ear.position.set(-0.02, 0.3, sd * 0.2); ear.rotation.set(sd * 0.35, 0, sd * 0.1); head.add(ear);
    part(new THREE.ConeGeometry(0.15, 0.3, 4, 1), fur, ear, 0, 0.12, 0).scale.set(0.55, 1, 1);
    part(new THREE.ConeGeometry(0.1, 0.22, 4, 1), pink, ear, 0.04, 0.1, 0).scale.set(0.35, 1, 1);
    // whiskers
    const pts = [];
    for (let k = 0; k < 3; k++) { const y = -0.12 + k * 0.035; pts.push(new THREE.Vector3(0.42, y, sd * 0.1), new THREE.Vector3(0.48, y - 0.04 + k * 0.03, sd * (0.48 + k * 0.03))); }
    head.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0xf6f2ec, transparent: true, opacity: 0.8 })));
  }
  // tail: wraps round her side; the tip flicks when she's cross
  const tailCurve = new THREE.CatmullRomCurve3([V3(-1.05, 0.35, 0), V3(-1.05, 0.2, 0.55), V3(-0.5, 0.15, 0.82), V3(0.15, 0.14, 0.8)]);
  const tail = part(new THREE.TubeGeometry(tailCurve, 24, 0.11, 10), fur, g, 0, 0, 0);
  const tip = new THREE.Group(); tip.position.set(0.15, 0.14, 0.8); g.add(tip);
  part(new THREE.CapsuleGeometry(0.1, 0.3, 6, 10), new THREE.MeshPhysicalMaterial({ color: 0x3d3835, roughness: 0.95, sheen: 1, sheenColor: new THREE.Color(0x8d8884) }), tip, 0.2, 0.02, 0).rotation.z = Math.PI / 2;
  void tail;
  return {
    group: g, head, paw, swipe: 0, t: Math.random() * 10,
    update(dt) {
      this.t += dt;
      const t = this.t;
      body.scale.y = 1 + Math.sin(t * 1.6) * 0.02;                       // breathing
      head.rotation.z = Math.sin(t * 0.5) * 0.05; head.rotation.y = Math.sin(t * 0.31) * 0.15;
      tip.rotation.y = Math.sin(t * (this.swipe > 0 ? 9 : 2.2)) * (this.swipe > 0 ? 0.8 : 0.35);
      if (this.swipe > 0) { this.swipe = Math.max(0, this.swipe - dt * 2.5); paw.rotation.y = Math.sin(this.swipe * Math.PI) * 1.4; paw.rotation.z = Math.sin(this.swipe * Math.PI) * 0.5; head.rotation.z = 0.3 * this.swipe; }
      else { paw.rotation.y *= 0.9; paw.rotation.z *= 0.9; }
      eyes.forEach((e) => (e.scale.y = 0.75 * (Math.sin(t * 0.7) > 0.985 ? 0.15 : 1))); // the odd slow blink
    },
  };
}
