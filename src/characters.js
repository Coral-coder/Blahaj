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

  // duvet: a quilted sheet draped over the mattress and over Leo. It is
  // collided against his body (torso, tucked arm) so nothing pokes through,
  // and it slides under the arm whenever that arm is out on top.
  const DW = w + 2.4, DL = l * 0.8, NX = 96, NZ = 84;
  const dGeo = new THREE.PlaneGeometry(DW, DL, NX, NZ);
  dGeo.rotateX(-Math.PI / 2);
  const base = dGeo.attributes.position.array.slice();
  const dMat = Mat.quilt(0x4a6fb0).clone();
  for (const k of ['map', 'normalMap', 'roughnessMap']) { dMat[k] = dMat[k].clone(); dMat[k].repeat.set(1.85, 2.2); dMat[k].needsUpdate = true; }
  dMat.normalScale = new THREE.Vector2(0.55, 0.55);
  dMat.side = THREE.DoubleSide;
  const duvet = sh(new THREE.Mesh(dGeo, dMat));
  root.add(duvet);

  const state = { cover: 1, roll: 0, arm: 'hug', armT: 0, shiver: 0, breath: 0, t: 0, ik: null, ikW: 0, armOver: true, onTop: [], under: [] };
  const TH = 0.07; // cloth thickness
  const torsoZ = -l / 2 + 3.1;
  // top of Leo's torso (an elliptical capsule) at bed-local (x, z), or -1
  // soft = true gives the tent the cloth makes over him: wider, no cliffs
  function torsoTop(x, z, soft = false) {
    const tx = lerp(0, -0.5, state.roll), pad = soft ? 0.45 : 0;
    const dz = Math.max(0, Math.abs(z - torsoZ) - 0.6);
    if (dz >= 0.62 + pad) return -1;
    const k = Math.sqrt(Math.max(0, 1 - (dz / (0.62 + pad)) ** 2)), rx = (0.775 + pad) * k, dx = x - tx;
    if (Math.abs(dx) >= rx) return -1;
    if (soft) { // the tent: from his top, sloping away at ~50 degrees
      const rr = Math.hypot(dx, dz);
      return 0.55 + 0.465 - Math.max(0, rr - 0.25) * 1.2;
    }
    return 0.55 + 0.465 * k * Math.sqrt(1 - (dx / rx) ** 2);
  }
  // arm capsules in bed-local space, refreshed after posing
  const segs = [];
  const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3();
  function refreshArm() {
    root.updateMatrixWorld(true);
    const o = root.position;
    shoulder.getWorldPosition(_a).sub(o); elbow.getWorldPosition(_b).sub(o);
    _c.set(0, 0, 0.98).applyMatrix4(elbow.matrixWorld).sub(o);
    segs.length = 0;
    segs.push({ a: _a.clone(), b: _b.clone(), r: 0.21, far: 0.45 }, { a: _b.clone(), b: _c.clone(), r: 0.2, far: 1 });
  }
  // vertical extent of a capsule above point (x, z): [bottom, top] or null
  function capsuleSpan(sg, x, z, pad = 0) {
    const ax = sg.b.x - sg.a.x, az = sg.b.z - sg.a.z, L2 = ax * ax + az * az;
    let t = L2 > 1e-6 ? ((x - sg.a.x) * ax + (z - sg.a.z) * az) / L2 : 0;
    t = Math.max(0, Math.min(1, t));
    const px = sg.a.x + ax * t, pz = sg.a.z + az * t, d2 = (x - px) ** 2 + (z - pz) ** 2, R = sg.r + pad;
    if (d2 >= R * R) return null;
    const yc = sg.a.y + (sg.b.y - sg.a.y) * t, d = Math.sqrt(d2);
    const h = d < sg.r ? Math.sqrt(sg.r * sg.r - d2) : 0;
    return [yc - h, yc + h, t, yc, d]; // bottom, top, along, centre height, distance
  }
  // height of the duvet sheet itself at bed-local (x, z) on the mattress
  function sheetY(x, z, zTop, withArm = true) {
    const bodyX = lerp(0, -0.6, state.roll);
    const breathe = Math.sin(state.t * 1.6) * 0.04;
    let y = 0.28;
    const bx = (x - bodyX) / (0.95 + 0.25 * state.roll), bz = (z - (-l / 2 + 4.6)) / 3.2;
    y += Math.sqrt(Math.max(0, 1 - bx * bx - bz * bz)) * (0.85 + breathe);
    const kx = (x - bodyX + 0.2 * state.roll) / 0.8, kz = (z - (-l / 2 + 6.6)) / 0.9;
    y += Math.max(0, 1 - kx * kx - kz * kz) * 0.35 * (1 - state.roll * 0.4);
    y += Math.sin(x * 2.3 + z * 0.7) * 0.03 + Math.sin(z * 3.1 - x * 1.3) * 0.025;
    y += smooth(0.35, 0, z - zTop) * 0.12; // the top edge folds over a little
    // collide with his body: over the torso, and over the arm when it's tucked in
    const tt = torsoTop(x, z), ts = torsoTop(x, z, true);
    if (ts > 0) y = Math.max(y, ts + TH);
    if (tt > 0) y = Math.max(y, tt + TH);
    if (withArm) for (const sg of segs) {
      const under = !state.armOver || sg.far < 1;
      if (under) { // the cloth tents over an arm beneath it, sloping back down to the sheet
        const sp = capsuleSpan(sg, x, z, 1.0);
        if (sp && (!state.armOver || sp[2] < 0.5)) y = Math.max(y, sp[3] + sg.r + TH - Math.max(0, sp[4] - sg.r) * 1.4);
        continue;
      }
      const sp = capsuleSpan(sg, x, z);
      if (sp && sp[0] > (tt > 0 ? tt : 0.3)) y = Math.max(Math.min(y, sp[0] - 0.02), tt > 0 ? tt + TH : 0.22); // arm on top
    }
    // things tucked under the duvet (Blåhaj, at the end) lift it into a soft tent
    if (withArm) for (const o of state.under || []) {
      const d = Math.hypot(x - o.x, z - o.z);
      // a rounded drape: flat-ish over the top, rolling away softly at the sides
      const top = o.y + o.r + TH, k = d / (o.r + 0.55);
      if (k < 1) y = Math.max(y, top - (o.r + 0.4) * k * k * (1.6 - 0.6 * k));
    }
    // things lying on the duvet (Blåhaj) press it down; it never comes up through them
    if (withArm) for (const o of state.onTop || []) {
      const d2 = (x - o.x) ** 2 + (z - o.z) ** 2;
      if (d2 < o.r * o.r) y = Math.min(y, o.y - Math.sqrt(o.r * o.r - d2) - 0.015);
    }
    return y;
  }
  const zTopOf = () => lerp(-l / 2 + 4.4, -l / 2 + 2.3, state.cover);
  function drape() {
    const pos = dGeo.attributes.position;
    const zTop = zTopOf(), zEnd = l / 2 + 0.4;
    for (let i = 0; i < pos.count; i++) {
      const u = base[i * 3] / DW + 0.5, v = base[i * 3 + 2] / DL + 0.5;
      const x = (u - 0.5) * DW;
      const z = lerp(zTop, zEnd, v);
      const edge = w / 2 - 0.2;
      let y = sheetY(Math.max(-edge, Math.min(edge, x)), z, zTop);
      // roll over the mattress edge on a soft radius, then hang with lazy folds;
      // on the wall side (-x) it just tucks down into the gap
      const over = Math.abs(x) - edge;
      let xs = x;
      if (over > 0) {
        const wall = x < 0, R = wall ? 0.08 : 0.18;
        const ang = Math.min(over / R, Math.PI / 2), hang = Math.max(0, over - R * Math.PI / 2);
        const swing = wall ? 0 : (Math.sin(z * 2.2 + 0.6) * 0.07 + Math.sin(z * 4.7 + 1.3) * 0.03) * Math.min(1, hang * 1.5);
        xs = Math.sign(x) * (edge + R * Math.sin(ang) + swing);
        y -= R * (1 - Math.cos(ang)) + hang;
      }
      if (z > l / 2 - 0.15) y -= (z - (l / 2 - 0.15)) * 3.5;
      pos.setXYZ(i, xs + state.shiver * Math.sin(state.t * 40 + z) * 0.01, y, z);
    }
    pos.needsUpdate = true;
    dGeo.computeVertexNormals();
  }

  // arm: two-bone IK to a target (bed-local)

  const UA = 1.0, FA = 0.98;
  const qa = new THREE.Quaternion(), qb = new THREE.Quaternion(), m4 = new THREE.Matrix4();
  function solveIK(target, pole) {
    const S = shoulder.position;
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

  const leo = {
    group: root, state, headPivot, shoulder, elbow, duvet,
    // world position where Blåhaj sits in his arms
    hugPoint: new THREE.Vector3(bed.x + 1.15, top + 0.75, bed.z - l / 2 + 3.4),
    // a target for his hand, in world space (null = use the authored pose)
    worldToLocal: (p) => p.clone().sub(root.position),
    // top of whatever is under (x, z) in world space: duvet, Leo, pillow, mattress
    surfaceAt(wx, wz) {
      const x = wx - root.position.x, z = wz - root.position.z;
      const edge = w / 2 - 0.2;
      if (Math.abs(x) > edge || z < -l / 2 + 0.4 || z > l / 2) return null;
      let y = 0.2;
      if (z >= zTopOf()) y = sheetY(x, z, zTopOf(), false); // what Blåhaj rests on ignores Leo's arm
      else {
        const tt = torsoTop(x, z); if (tt > 0) y = Math.max(y, tt);
        const px = x / 1.6, pz = (z - (-l / 2 + 1.5)) / 0.95; // pillow
        if (px * px + pz * pz < 1) y = Math.max(y, 0.45 + 0.42 * Math.sqrt(1 - px * px - pz * pz));
        head.getWorldPosition(_a).sub(root.position);
        const hd = (x - _a.x) ** 2 + (z - _a.z) ** 2;
        if (hd < 0.25) y = Math.max(y, _a.y + Math.sqrt(0.25 - hd));
      }
      return root.position.y + y;
    },
    update(dt, s = {}) {
      Object.assign(state, s);
      state.t += dt;
      shoulder.position.x = lerp(0.75, 0.05, state.roll);
      // the arm always reaches for something: by default his hand rests tucked on
      // his chest under the covers; state.ik (bed-local) pulls it elsewhere
      const tuck = new THREE.Vector3(lerp(0.35, -0.2, state.roll), 0.62, -l / 2 + 3.35);
      const w_ = state.ik ? state.ikW : 0;
      const goal = w_ > 0 ? tuck.clone().lerp(state.ik, w_) : tuck;
      const pole = TUCK_POLE.clone().lerp(state.pole || POLE, w_).normalize();
      const [qU, qE] = solveIK(goal, pole);
      shoulder.quaternion.copy(qU); elbow.quaternion.copy(qE);
      headPivot.rotation.z = lerp(-0.15, 0.85, state.roll) + Math.sin(state.t * 0.7) * 0.02;
      headPivot.position.x = lerp(0.1, -0.35, state.roll);
      torso.position.x = lerp(0, -0.5, state.roll); torso.rotation.z = lerp(0, 0.6, state.roll);
      head.position.y = Math.sin(state.t * 1.6) * 0.01 + state.shiver * Math.sin(state.t * 47) * 0.012;
      refreshArm();
      drape();
    },
    // what lies beneath the duvet at world (x, z): the mattress, or Leo himself
    underAt(wx, wz) {
      const x = wx - root.position.x, z = wz - root.position.z;
      if (Math.abs(x) > w / 2 - 0.2 || z < -l / 2 + 0.4 || z > l / 2) return null;
      const tt = torsoTop(x, z);
      return root.position.y + Math.max(0.2, tt);
    },
    // top of his arm above (x, z) in world space, or null (things can rest on it)
    armTopAt(wx, wz) {
      const x = wx - root.position.x, z = wz - root.position.z;
      let best = null;
      for (const sg of segs) { const sp = capsuleSpan(sg, x, z); if (sp && (best === null || sp[1] > best)) best = sp[1]; }
      return best === null ? null : root.position.y + best;
    },
    // a cradle: his arm slides under whatever sits at world (x, z) and the hand
    // curls up around its far side. Returns { ik, pole } in bed-local space.
    cradle(wx, wz) {
      const x = wx - root.position.x, z = wz - root.position.z;
      return { ik: new THREE.Vector3(x + 0.62, 0.72, z + 0.4), pole: new THREE.Vector3(0.2, -1, -0.1).normalize() };
    },
    // where the edge of the duvet is right now, beside his arm (world space)
    coverEdge() {
      const z = zTopOf() + 0.12, x = 1.0;
      return new THREE.Vector3(root.position.x + x, root.position.y + sheetY(x, z, zTopOf()) + 0.12, root.position.z + z);
    },
  };
  refreshArm();
  drape();
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
      if (pose === 'walk' || pose === 'stand' || pose === 'carry' || pose === 'pickup') {
        body.position.y = 2.7 + (speed > 0 ? Math.abs(Math.sin(t * 7)) * 0.08 : 0);
        body.rotation.x += (0 - body.rotation.x) * Math.min(1, dt * 6);
        legs.forEach((L, i) => {
          const ph = (i === 0 || i === 3 ? 0 : Math.PI);
          L.hip.rotation.x = speed > 0 ? Math.sin(t * 7 + ph) * 0.5 : 0;
          L.knee.rotation.x = speed > 0 ? Math.max(0, -Math.sin(t * 7 + ph)) * 0.6 * (L.front ? -1 : 1) : 0;
        });
        const neckT = pose === 'carry' ? 0.15 : pose === 'pickup' ? 1.75 : Math.sin(t * 1.5) * 0.05;
        neck.rotation.x += (neckT - neck.rotation.x) * Math.min(1, dt * 8);
        if (pose === 'pickup') { body.rotation.x += (0.32 - body.rotation.x) * Math.min(1, dt * 6); body.position.y = 2.4; }
        jaw.rotation.x = pose === 'carry' ? 0.12 : pose === 'pickup' ? 0.4 : 0.25 + Math.sin(t * 6) * 0.08; // panting
        tongue.visible = pose !== 'carry' && pose !== 'pickup';
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
