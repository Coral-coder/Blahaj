// A small rigid-body solver for Blåhaj in cutscenes: a chain of spheres
// (snout to tail, plus the two fins) with gravity, restitution, Coulomb
// friction and rolling resistance against the level's collision boxes.
// It runs at a fixed step, so a trajectory baked ahead of time is identical
// on every machine and can be nudged to land exactly where gameplay starts.
import * as THREE from 'three';

const V = () => new THREE.Vector3();
// sphere chain in the rig's body space (belly on y = 0, snout toward +z)
export const BLAHAJ_SPHERES = [
  [0, 0.36, 0.9, 0.3], [0, 0.4, 0.4, 0.38], [0, 0.38, -0.1, 0.36], [0, 0.34, -0.55, 0.27], [0, 0.36, -0.95, 0.2],
  [0.34, 0.2, 0.3, 0.09], [-0.34, 0.2, 0.3, 0.09], // pectoral fins (the dorsal fin is too floppy to matter)
];
export const BLAHAJ_COM = new THREE.Vector3(0, 0.37, 0.12);
// Blåhaj's collision spheres in the world for a rigid pose (centre of mass + rotation)
// cloth = true: the shape a duvet drapes over (fins included, a little padding)
const CLOTH_EXTRA = [[0.15, 0.76, 0.2, 0.16], [-0.1, 0.55, -1.1, 0.18], [0, 0.3, -1.25, 0.16]]; // slumped fins
export function blahajSpheres(com, q, cloth = false) {
  const list = cloth ? BLAHAJ_SPHERES.concat(CLOTH_EXTRA) : BLAHAJ_SPHERES;
  return list.map(([x, y, z, r]) => ({ p: new THREE.Vector3(x, y, z).sub(BLAHAJ_COM).applyQuaternion(q).add(com), r: r + (cloth ? 0.06 : 0) }));
}

// surface(x, z) -> y | null adds a soft heightfield (a duvet, a cushion) to collide with.
export function createTumble(solids, { gravity = 40, restitution = 0.32, friction = 0.55, rollDrag = 2.2, floorDrag = rollDrag, spheres = BLAHAJ_SPHERES, com = BLAHAJ_COM, surface = null } = {}) {
  const boxes = solids.filter((s) => s.active !== false && !s.mover);
  const local = spheres.map(([x, y, z, r]) => ({ p: new THREE.Vector3(x, y, z).sub(com), r }));
  // inertia of a plush capsule ~2.4 long, ~0.38 thick (mass 1): easy to roll, hard to tumble end over end
  const invI = new THREE.Vector3(1 / 0.52, 1 / 0.52, 1 / 0.09);
  const b = { x: V(), v: V(), q: new THREE.Quaternion(), w: V(), contact: false, impacts: [] };
  const tmp = V(), tq = new THREE.Quaternion();
  const applyInvI = (vec, out) => {
    tq.copy(b.q).invert();
    out.copy(vec).applyQuaternion(tq).multiply(invI).applyQuaternion(b.q);
    return out;
  };
  const c = V(), cp = V(), n = V(), rp = V(), vr = V(), t = V(), a = V(), bb = V(), J = V();
  const effMass = (dir) => { a.crossVectors(rp, dir); applyInvI(a, bb); bb.cross(rp); return 1 + dir.dot(bb); };
  function contactSphere(center, r, box) {
    cp.set(Math.max(box.min.x, Math.min(center.x, box.max.x)), Math.max(box.min.y, Math.min(center.y, box.max.y)), Math.max(box.min.z, Math.min(center.z, box.max.z)));
    n.subVectors(center, cp);
    let d = n.length();
    if (d >= r) return -1;
    if (d < 1e-6) { // centre inside the box: push out the shallowest way
      const o = [center.x - box.min.x, box.max.x - center.x, center.y - box.min.y, box.max.y - center.y, center.z - box.min.z, box.max.z - center.z];
      const i = o.indexOf(Math.min(...o));
      n.set(i === 0 ? -1 : i === 1 ? 1 : 0, i === 2 ? -1 : i === 3 ? 1 : 0, i === 4 ? -1 : i === 5 ? 1 : 0);
      return r + o[i];
    }
    n.divideScalar(d);
    return r - d;
  }
  // one sphere touching something along normal n (already set), penetrating by pen
  function resolve(r, pen, floor, time) {
    b.contact = true; if (floor) b.onFloor = true;
    rp.copy(c).addScaledVector(n, -r).sub(b.x);
    vr.crossVectors(b.w, rp).add(b.v);
    const vn = vr.dot(n);
    if (vn < 0) {
      const e = vn < -2.5 ? restitution : 0;
      const j = (-(1 + e) * vn) / effMass(n);
      if (vn < -2.5) b.impacts.push({ time, speed: -vn, floor, p: c.clone().addScaledVector(n, -r) });
      J.copy(n).multiplyScalar(j); b.v.add(J); b.w.add(applyInvI(a.crossVectors(rp, J), bb));
      // friction, capped by the normal impulse
      vr.crossVectors(b.w, rp).add(b.v);
      t.copy(vr).addScaledVector(n, -vr.dot(n));
      const vt = t.length();
      if (vt > 1e-5) {
        t.divideScalar(vt);
        const jt = Math.min(vt / effMass(t), friction * j);
        J.copy(t).multiplyScalar(-jt); b.v.add(J); b.w.add(applyInvI(a.crossVectors(rp, J), bb));
      }
    }
    b.x.addScaledVector(n, pen * 0.6);
    c.addScaledVector(n, pen * 0.6);
  }
  b.step = (h, time = 0) => {
    b.v.y -= gravity * h;
    b.x.addScaledVector(b.v, h);
    tq.set(b.w.x * h * 0.5, b.w.y * h * 0.5, b.w.z * h * 0.5, 0).multiply(b.q);
    b.q.set(b.q.x + tq.x, b.q.y + tq.y, b.q.z + tq.z, b.q.w + tq.w).normalize();
    b.contact = false; b.onFloor = false;
    for (const s of local) {
      c.copy(s.p).applyQuaternion(b.q).add(b.x);
      for (const box of boxes) {
        if (c.x < box.min.x - s.r || c.x > box.max.x + s.r || c.y < box.min.y - s.r || c.y > box.max.y + s.r || c.z < box.min.z - s.r || c.z > box.max.z + s.r) continue;
        const pen = contactSphere(c, s.r, box);
        if (pen >= 0) resolve(s.r, pen, box.max.y <= 0.01, time);
      }
      if (surface) { // soft heightfield: normal from the local slope
        const h = surface(c.x, c.z);
        if (h !== null && c.y - s.r < h) {
          const e = 0.06, hx = surface(c.x + e, c.z), hz = surface(c.x, c.z + e);
          n.set(-((hx === null ? h : hx) - h) / e, 1, -((hz === null ? h : hz) - h) / e).normalize();
          resolve(s.r, (h - (c.y - s.r)) * n.y, false, time);
        }
      }
    }
    if (b.contact) { // plush doesn't roll far: soft fabric on a hard floor grabs
      const d = b.onFloor ? floorDrag : rollDrag;
      b.w.multiplyScalar(Math.max(0, 1 - d * h)); b.v.multiplyScalar(Math.max(0, 1 - (b.onFloor ? d * 0.4 : 0.6) * h));
    }
  };
  // run ahead and keep every state: [{x, q, v, contact}], plus impact events
  b.bake = (seconds, h = 1 / 240) => {
    const frames = [];
    for (let i = 0, n_ = Math.round(seconds / h); i <= n_; i++) {
      frames.push({ x: b.x.clone(), q: b.q.clone(), v: b.v.clone(), contact: b.contact });
      b.step(h, i * h);
    }
    return { frames, h, impacts: b.impacts.slice() };
  };
  return b;
}
