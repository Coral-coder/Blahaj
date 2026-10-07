// In-engine cutscenes. Each one is a timeline that drives the camera, the
// actors and Blåhaj, while subtitles and letterboxing go through hooks.
import * as THREE from 'three';
import { Audio } from './audio.js';
import { createDog } from './characters.js';
import { createTumble, BLAHAJ_COM, blahajSpheres } from './tumble.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const ease = (t) => (t < 0 ? 0 : t > 1 ? 1 : t * t * (3 - 2 * t));
const seg = (t, a, b) => ease((t - a) / (b - a));
const lerpV = (a, b, k) => a.clone().lerp(b, k);
const yawQ = (y) => new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), y);

// Pose Blåhaj's rig from a rigid-body state: com = centre of mass in the world.
// Call after rig.update(), which writes its own wobble into the body transform.
function poseRig(game, com, q) {
  const P = game.p, rig = game.rig;
  P.pos.copy(com); P.yaw = 0;
  rig.root.position.copy(com); rig.root.rotation.y = 0;
  rig.body.quaternion.copy(q);
  rig.body.position.copy(BLAHAJ_COM).multiply(rig.body.scale).applyQuaternion(q).negate();
}

// Blåhaj lying on Leo's bed at (x, z) with rotation q: on the duvet, never in it
function restOnBed(leo, x, z, q, underCover = false) {
  let belly = 4.5;
  for (const [dx, dz] of [[0, 0], [0.3, 0], [-0.3, 0], [0, 0.85], [0, -0.85], [0.25, 0.5], [-0.25, -0.5]]) {
    const y = underCover ? leo.underAt(x + dx, z + dz) : leo.surfaceAt(x + dx, z + dz); if (y !== null) belly = Math.max(belly, y);
    const a = leo.armTopAt(x + dx, z + dz); if (a !== null) belly = Math.max(belly, a); // lying on his arm
  }
  return V(x, belly - 0.04, z).add(BLAHAJ_COM.clone().applyQuaternion(q));
}
const onTopOf = (leo, pose) => blahajSpheres(pose.com, pose.q, true).map((o) => ({ x: o.p.x - leo.group.position.x, y: o.p.y - leo.group.position.y, z: o.p.z - leo.group.position.z, r: o.r }));

// The resting hug (title screen and the start of the story): the blanket has
// slipped down, and Blåhaj lies on it in the crook of Leo's arm.
const HELD_Q = yawQ(Math.PI).multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0.3)));
// The snuggle: Leo on his side facing Blåhaj, knees drawn up; his lower arm runs
// under Blåhaj's middle (Blåhaj drapes over it, ends drooping like a pool
// noodle) and his top arm wraps over and round him. bx, bz: where Blåhaj lies.
export const SNUG_BEND = -1.0;
export function snuggle(leo, bx, bz, pose) {
  const L = leo.worldToLocal(V(bx, 0, bz));
  const ik = new THREE.Vector3(L.x + 0.6, 0.55, L.z + 0.05);
  const ikL = pose ? leo.worldToLocal(pose.com.clone().add(V(0.5, 0.3, 0.1))) : new THREE.Vector3(L.x + 0.5, 1.4, L.z + 0.2);
  return { roll: -0.85, curl: 0.7, ik, ikW: 1, pole: V(0.2, -1, -0.1).normalize(), armOver: true, ikL, ikWL: 1, poleL: V(-0.2, 1, -0.3), armOverL: true };
}
const snugX = (leo) => leo.hugPoint.x + 0.42;
const snugZ = (leo) => leo.hugPoint.z + 0.45; // against his chest, not in his face
export function restingHug(game, dt, extra = {}) {
  const leo = game.leo, t = (game._hugT = (game._hugT || 0) + dt), bx = snugX(leo), bz = snugZ(leo);
  leo.update(dt, Object.assign({ cover: 0.3, shiver: 0, onTop: game._hugPose ? onTopOf(leo, game._hugPose) : [] }, snuggle(leo, bx, bz, game._hugPose), extra));
  const com = restOnBed(leo, bx, bz, HELD_Q); com.y += Math.sin(t * 1.6) * 0.015;
  game.rig.update(dt, { speed: 0, grounded: true, vx: 0, vy: 0, vz: 0, bend: SNUG_BEND });
  poseRig(game, com, HELD_Q);
  game._hugPose = { com: com.clone(), q: HELD_Q };
  return game._hugPose;
}

// Biscuit carries Blåhaj by the snout; the body dangles along his shoulder
// and swings as he trots. Returns the rigid pose { com, q } for poseRig().
const SNOUT = new THREE.Vector3(0, 0.42, 1.05);
function carried(dog, t) {
  const m = dog.mouthPoint.getWorldPosition(V());
  const q = yawQ(dog.group.rotation.y + 0.55 + Math.sin(t * 7) * 0.08)
    .multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.75 + Math.sin(t * 9) * 0.1, 0, Math.sin(t * 8) * 0.25)));
  const com = m.sub(SNOUT.clone().sub(BLAHAJ_COM).applyQuaternion(q));
  return { com, q };
}

function camShot(game, from, to, lookFrom, lookTo, k, fov = 50) {
  game.camera.position.copy(lerpV(from, to, k));
  game.camera.lookAt(lerpV(lookFrom, lookTo, k));
  if (game.camera.fov !== fov) { game.camera.fov = fov; game.camera.updateProjectionMatrix(); }
}

function base(hooks, lines, length) {
  // lines: [[t, text], ...]
  let shown = -1;
  return {
    t: 0, length, ownsCamera: true, ownsPlayer: true, done: false,
    subtitles(t) {
      let idx = -1;
      for (let i = 0; i < lines.length; i++) if (t >= lines[i][0]) idx = i;
      if (idx !== shown) { shown = idx; hooks.subtitle(idx >= 0 ? lines[idx][1] : null); }
    },
  };
}

// --------------------------------------------------------------- prologue --
export function prologue(game, hooks) {
  const leo = game.leo, P = game.p, rig = game.rig;
  const hug = leo.hugPoint.clone();
  const floor = V(game.ch.spawn[0], 0, game.ch.spawn[2]);
  const F = (x, y, z) => V(floor.x + x, y, floor.z + z); // shots framed around the landing spot
  const lines = [
    [0.6, 'It was a cold, quiet night.'],
    [5.2, 'Leo was dreaming of Blåhaj and teddy bears.'],
    [10.2, 'But his blanket had slipped down, and Leo was getting cold…'],
    [13.8, 'He pulled his arm out from under Blåhaj to reach for it…'],
    [15.4, '…and Blåhaj tumbled right off the bed!'],
    [17.8, 'Leo tugged up the covers and rolled over. He never noticed.'],
    [21.4, 'Without Blåhaj, Leo’s dream began to change.'],
    [25.2, 'Get back to Leo before the nightmares do.'],
  ];
  const c = base(hooks, lines, 29);
  c.dream = 1;
  hooks.letterbox(true);
  let fell = false, thud = false, lastImpact = -1, lastPose = null;
  const RELEASE = 14.25, UPRIGHT = 25.5;
  // Blåhaj lies on whatever is under him (duvet, mattress), never inside it
  const heldQ = yawQ(Math.PI).multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0.3)));
  const restingCom = () => restOnBed(leo, snugX(leo), snugZ(leo), heldQ);
  const toLocal = (p) => leo.worldToLocal(p);
  let heldCom = restingCom();
  // the fall is baked when Leo rolls, against the real duvet surface
  let fall = null, nudge = V(), nudgeFrom = 1, nudgeTo = 2, restQ = null, restCom = null;
  const uprightQ = yawQ(game.ch.spawnYaw);
  const uprightCom = floor.clone().add(BLAHAJ_COM.clone().applyQuaternion(uprightQ));
  function bakeFall() {
    const body = createTumble(game.solids, { rollDrag: 3, floorDrag: 9, surface: game.softHeight });
    body.x.copy(heldCom); body.q.copy(heldQ);
    body.v.set(1.9, 1.8, -0.3); body.w.set(0.3, 0, -5.5); // his arm whipping out from under flips him
    fall = body.bake(UPRIGHT - RELEASE + 0.1);
    const last = fall.frames[fall.frames.length - 1];
    restQ = last.q.clone();
    // nudge the landing so he comes to rest exactly where play begins
    const restPivot = last.x.clone().sub(BLAHAJ_COM.clone().applyQuaternion(restQ));
    nudge = V(floor.x - restPivot.x, 0, floor.z - restPivot.z);
    const offBed = fall.frames.findIndex((f) => f.x.y < heldCom.y - 1.0);
    const landed = fall.impacts.find((e) => e.floor);
    nudgeFrom = offBed > 0 ? offBed * fall.h : 1.2; nudgeTo = landed ? landed.time + 0.25 : nudgeFrom + 0.6;
    restCom = last.x.clone().add(nudge);
    c.fallInfo = { nudge, nudgeFrom, nudgeTo, landed: landed && landed.time, offBed: offBed * fall.h, rest: restPivot };
  }
  c.update = (dt) => {
    const t = (c.t += dt);
    c.subtitles(t);
    // Leo: hugs Blåhaj, gets cold, lets go to grab the duvet's edge and pull
    // it up, then rolls over with his arm tucked under the covers
    const cover = t < 15.8 ? 0.3 : t < 17.6 ? 0.3 + seg(t, 15.8, 17.4) * 0.55 : 0.85 + seg(t, 17.6, 19.6) * 0.2; // already slipped down
    const shiver = t > 9.5 && t < 15.8 ? 1 : 0;
    // snuggled on his side with Blåhaj draped over his arm; he slides that arm
    // out to reach the duvet, pulls it up, then rolls over toward the wall
    const sn = snuggle(leo, snugX(leo), snugZ(leo), lastPose), letGo = seg(t, 14.0, 14.9), rollT = seg(t, 17.6, 19.8);
    let ik = sn.ik, ikW = 1, pole = sn.pole;
    const PULL = V(1, -0.15, 0.4).normalize(); // elbow out to the side and low, the way you tug a blanket
    if (t >= 14.0 && t < 15.8) { ik = sn.ik.clone().lerp(toLocal(leo.coverEdge()), letGo); pole = sn.pole.clone().lerp(PULL, letGo); }
    else if (t >= 15.8) { ik = toLocal(leo.coverEdge()); ikW = 1 - seg(t, 17.3, 18.2); pole = PULL; }
    const onTop = lastPose ? onTopOf(leo, lastPose) : [];
    leo.update(dt, { cover, roll: -0.85 + 1.85 * rollT, curl: 0.7 * (1 - rollT), shiver, ik, ikW, pole, armOver: t < 17.8, ikL: sn.ikL, ikWL: 1 - letGo, poleL: sn.poleL, armOverL: t < 14.9, onTop });
    // Blåhaj: snug in his arm, then (real physics) rolling off the bed
    rig.root.visible = true;
    let com, q, vel = V(), grounded = true;
    if (t < RELEASE) {
      heldCom = restingCom();
      q = heldQ; com = heldCom.clone(); com.y += Math.sin(t * 1.6) * 0.02;
    } else {
      if (!fall) bakeFall();
      const ft = t - RELEASE, i = Math.min(fall.frames.length - 1, Math.floor(ft / fall.h)), f = fall.frames[i];
      q = f.q; vel = f.v; grounded = f.contact;
      com = f.x.clone().addScaledVector(nudge, ease((ft - nudgeFrom) / (nudgeTo - nudgeFrom)));
      for (const e of fall.impacts) {
        if (e.done || e.time > ft) continue;
        e.done = true;
        if (e.time - lastImpact < 0.12) continue;
        lastImpact = e.time;
        rig.impulse(-Math.min(9, e.speed * 0.45));
        if (e.floor && !thud) {
          thud = true; Audio.land();
          game.puffs.burst(e.p.clone().addScaledVector(nudge, 1).setY(0.1), 16, { color: new THREE.Color(0xd8dcff), speed: 3, life: 0.6, size: 0.4, alpha: 0.5 });
        }
      }
      if (!fell && com.y < heldCom.y - 0.9) { fell = true; Audio.fall(); }
      if (t > UPRIGHT) { // wriggles back onto his belly, ready to go
        const k = seg(t, UPRIGHT, UPRIGHT + 1.1);
        q = restQ.clone().slerp(uprightQ, k);
        com = restCom.clone().lerp(uprightCom, k); com.y += Math.sin(k * Math.PI) * 0.6;
        vel = V(0, Math.cos(k * Math.PI) * 3, 0); grounded = k <= 0 || k >= 1;
      }
    }
    rig.update(dt, { speed: 0, grounded, vx: vel.x, vy: vel.y, vz: vel.z, bend: t < RELEASE ? SNUG_BEND : undefined });
    poseRig(game, com, q);
    c.blahaj = com; lastPose = { com: com.clone(), q: q.clone() };
    // the dream fish ripple into being once he wakes up on the floor
    for (const f of game.fish) { const k = Math.min(1, Math.max(0, (t - 25.9 - f.pos.distanceTo(floor) * 0.06) * 3)); f.m.visible = k > 0; f.m.scale.setScalar(Math.max(0.001, k)); }
    for (const e of game.enemies) { e.s.group.visible = t > 21.2; if (t > 21.2) e.s.group.scale.setScalar(Math.min(1, (t - 21.2) / 2)); }
    // the dream sours once he lets go
    c.dream = t < 16 ? 1 : 1 - seg(t, 17.5, 24) * 0.55;
    game.comfort = c.dream * 100;
    if (t > 21 && Math.random() < 0.35) game.puffs.emit({ p: floor.clone().add(V((Math.random() - 0.5) * 8, 0.1, (Math.random() - 0.5) * 8)), v: V(0, 1.2, 0), life: 1.3, size: 0.7, color: new THREE.Color(0x150924), alpha: 0.7, drag: 0.6 });
    // camera
    if (t < 5) camShot(game, V(4.5, 6.4, 8.2), V(1.8, 6.6, 1.6), V(-4.0, 4.6, -5.6), V(-4.6, 5.0, -6.2), seg(t, 0, 5), 50);
    else if (t < 10) camShot(game, V(-0.6, 7.4, -2.6), V(-1.4, 8.0, -3.4), V(-4.8, 5.4, -6.6), V(-4.65, 8.3, -7.1), seg(t, 5, 8.5), 44); // up into his dream
    else if (t < 13.8) camShot(game, V(0.4, 7.4, -1.6), V(0.0, 7.0, -2.4), V(-5.0, 4.8, -5.4), V(-4.8, 4.8, -5.8), seg(t, 10, 13.8), 46);
    else if (t < 17.0) { // follow him over the edge
      camShot(game, V(2.6, 3.2, -1.2), V(2.2, 2.4, -2.6), V(-2.6, 3.6, -5.2), F(-0.2, 1.0, 0), seg(t, 13.8, 16.6), 48);
      game.camera.lookAt(lerpV(V(-2.6, 3.6, -5.2), F(-0.2, 1.0, 0), seg(t, 13.8, 16.6)).lerp(com, 0.5));
    }
    else if (t < 25.0) camShot(game, F(2.8, 0.7, 1.3), F(2.3, 1.0, 0.8), F(0, 0.5, 0), V(-4.2, 6.4, -6.6), seg(t, 17.2, 24.2), 50); // up from the floor to Leo
    else camShot(game, F(2.3, 1.0, 0.8), F(3.2, 2.4, 2.6), V(-4.2, 6.4, -6.6), F(0, 0.6, 0), seg(t, 25.0, 26.6), 52);
    if (t >= c.length) c.finish();
  };
  c.finish = () => {
    c.done = true; hooks.subtitle(null); hooks.letterbox(false);
    for (const e of game.enemies) { e.s.group.visible = true; e.s.group.scale.setScalar(1); }
    for (const f of game.fish) { f.m.visible = true; f.m.scale.setScalar(1); }
    leo.update(0, { cover: 1.05, roll: 1, curl: 0, shiver: 0, ikW: 0, ikWL: 0, armOver: false, armOverL: false });
    rig.body.rotation.set(0, 0, 0); rig.body.position.set(0, 0, 0);
    game.p.pos.copy(floor); game.p.yaw = game.ch.spawnYaw; game.p.vel.set(0, 0, 0);
    game.comfort = 80; game.cam.yaw = game.ch.camYaw; game.cam.pitch = 0.3; // same angle as the last shot
    game.updateCamera(1, true);
  };
  return c;
}

// ------------------------------------------------------------ dog: snatch --
// Biscuit trots in and barks; Blåhaj startles off the sill (real physics),
// bounces off the desk to the floor, and Biscuit scoops him up.
export function dogSnatch(game, hooks) {
  const dog = createDog();
  game.scene.add(dog.group);
  const P = game.p, rig = game.rig;
  const r = game.ch.room;
  const sill = P.pos.clone(); // wherever Blåhaj was when Biscuit burst in
  const door = V(4.6, 0, 12);
  const faceTo = (from, to) => Math.atan2(to.x - from.x, to.z - from.z);
  // does a dog standing at p facing yaw fit, clear of all furniture?
  const furniture = game.solids.filter((s) => s.active && !s.mover && s.kind !== 'floor' && !/^(wall|ceiling|glass|doorStop)/.test(s.tag || ''));
  const fits = (p, yaw) => {
    const fx = Math.sin(yaw), fz = Math.cos(yaw);
    for (let k = -1.4; k <= 1.6; k += 0.5) {
      const x = p.x + fx * k, z = p.z + fz * k;
      if (x < r.x0 + 0.5 || x > r.x1 - 0.5 || z < r.z0 + 0.5 || z > r.z1 - 0.5) return false;
      if (furniture.some((s) => s.max.y > 0.25 && s.min.y < 2.6 && x > s.min.x - 0.45 && x < s.max.x + 0.45 && z > s.min.z - 0.45 && z < s.max.z + 0.45)) return false;
    }
    return true;
  };
  // he stops out in the room, a few steps from Blåhaj
  const toRoom = V(-sill.x, 0, -sill.z).normalize();
  let spot = null;
  for (const d of [4.8, 4.0, 5.6, 3.4]) for (const turn of [0, 0.4, -0.4, 0.8, -0.8]) {
    if (spot) break;
    const dir = toRoom.clone().applyAxisAngle(V(0, 1, 0), turn), p = sill.clone().setY(0).addScaledVector(dir, d);
    if ([0, 1, 2, 3].filter((a) => fits(p, a * Math.PI / 2)).length >= 3 && fits(p, faceTo(p, sill))) spot = p;
  }
  spot = spot || V(0.6, 0, -4.6);
  // in through the door and round the toys to the spot (and back out again)
  // (the bedroom: past the laundry, round the west side of the block towers and the books)
  const path = [door, V(4.4, 0, 7.6), V(3.6, 0, 6.2), V(1.4, 0, 5.8), V(1.3, 0, 1.6), ...(spot.x < 0.5 ? [V(-0.6, 0, 0.6)] : []), spot];
  dog.group.position.copy(door); dog.group.rotation.y = Math.PI;
  const turnTo = (want, k) => { const d = dog.group.rotation; d.y += Math.atan2(Math.sin(want - d.y), Math.cos(want - d.y)) * Math.min(1, k); };
  // bake Blåhaj's startled tumble (away from the bark, toward the room)
  const RELEASE = 3.3;
  const q0 = yawQ(P.yaw);
  const body = createTumble(game.solids, { rollDrag: 3, floorDrag: 8, surface: game.softHeight });
  body.x.copy(sill).add(BLAHAJ_COM.clone().applyQuaternion(q0)); body.q.copy(q0);
  const hop = spot.clone().sub(sill).setY(0).normalize();
  body.v.copy(hop).multiplyScalar(4.2).setY(6.2); body.w.copy(new THREE.Vector3().crossVectors(hop, V(0, 1, 0)).multiplyScalar(6)).setY(0.8);
  const fall = body.bake(7);
  const at = (t) => fall.frames[Math.max(0, Math.min(fall.frames.length - 1, Math.floor((t - RELEASE) / fall.h)))];
  const rest = fall.frames[fall.frames.length - 1];
  const restPos = rest.x.clone();
  // he grabs Blåhaj by an end, like any dog with a toy: try both ends and a
  // few angles, keep the shortest walk where he isn't standing in furniture
  const MOUTH = new THREE.Vector3(0, 0.77, 1.19);
  const axis = V(0, 0, 1).applyQuaternion(rest.q).setY(0).normalize();
  const options = [];
  for (const sg of [1, -1]) for (const turn of [0, 0.5, -0.5, 1.0, -1.0, 1.5, -1.5]) {
    const g = restPos.clone().addScaledVector(axis, sg * 0.85);
    const out = axis.clone().multiplyScalar(sg).applyAxisAngle(V(0, 1, 0), turn);
    const pk = g.clone().setY(0).addScaledVector(out, MOUTH.z);
    if (fits(pk, faceTo(pk, g))) options.push({ grab: g, pick: pk, cost: pk.distanceTo(spot) + Math.abs(turn) });
  }
  options.sort((a, b) => a.cost - b.cost);
  const { grab, pick } = options[0] || { grab: restPos.clone(), pick: restPos.clone().setY(0).addScaledVector(hop, MOUTH.z) };
  const approach = faceTo(pick, grab);
  const fwd = V(Math.sin(approach), 0, Math.cos(approach));
  const exitPath = [pick, spot, ...path.slice(1, -1).reverse(), door.clone().add(V(0, 0, 2))];
  // (for testing: does he fit everywhere along both walks?)
  const walkOK = (pts) => pts.slice(0, -1).every((a, i) => { const b = pts[i + 1], yaw = faceTo(a, b); for (let k = 0.2; k <= 0.8; k += 0.1) { const p = a.clone().lerp(b, k); if (p.z < r.z1 - 1 && !fits(p, yaw)) return false; } return true; });
  // a camera off to the side of the tumble, inside the room and clear of furniture
  const clear = (p) => p.x > r.x0 + 0.5 && p.x < r.x1 - 0.5 && p.z > r.z0 + 0.5 && p.z < r.z1 - 0.5 && !furniture.some((s) => p.x > s.min.x - 0.3 && p.x < s.max.x + 0.3 && p.y > s.min.y - 0.3 && p.y < s.max.y + 0.3 && p.z > s.min.z - 0.3 && p.z < s.max.z + 0.3);
  const side = V(-hop.z, 0, hop.x);
  const sees = (eye, at) => { for (let k = 0.1; k < 0.95; k += 0.1) if (!clear(eye.clone().lerp(at, k))) return false; return clear(eye); };
  const gside = V(-fwd.z, 0, fwd.x), gAt = grab.clone().setY(0.7);
  const pickCam = [[3.7, 1.5], [3.7, -1.5], [3.0, 0], [0.5, 3.6], [0.5, -3.6], [2.4, 2.8], [2.4, -2.8]]
    .map(([f, sd]) => grab.clone().addScaledVector(fwd, f).addScaledVector(gside, sd).setY(1.6)).find((e) => sees(e, gAt)) || grab.clone().addScaledVector(fwd, 3.7).setY(2.2);
  // ...and not behind Biscuit's head: keep him out of the line of sight
  const dogFree = (eye) => { const a = eye.clone().setY(0), b = sill.clone().setY(0), ab = b.clone().sub(a), t = THREE.MathUtils.clamp(spot.clone().sub(a).dot(ab) / ab.lengthSq(), 0, 1); return a.addScaledVector(ab, t).distanceTo(spot) > 1.6 && eye.distanceTo(spot) > 2.6; };
  const startleCam = [[4.2, 2.2], [-4.2, 2.2], [4.6, 0.8], [-4.6, 0.8], [3.2, 3.6], [-3.2, 3.6]]
    .map(([sd, f]) => sill.clone().addScaledVector(side, sd).addScaledVector(hop, f).setY(Math.max(2.6, sill.y - 1.2)))
    .find((e) => clear(e) && dogFree(e)) || sill.clone().addScaledVector(hop, 5).setY(3.4);
  const lines = [[0.4, 'Then came a jingle of collar tags…'], [2.7, 'Biscuit!'], [5.0, 'Biscuit wanted to play.']];
  const c = base(hooks, lines, 10.6);
  c.snatchInfo = { sill, rest: restPos, pick, spot, inOK: walkOK(path.slice(1)), outOK: walkOK(exitPath) };
  hooks.letterbox(true);
  for (const e of game.enemies) e.s.group.visible = false; // the nightmares hide from Biscuit
  Audio.dogBark && Audio.dogBark();
  let barked = false, hopped = false, lastImpact = -1, grabFrom = null;
  c.update = (dt) => {
    const t = (c.t += dt);
    c.subtitles(t);
    // the dream fish shrink away as the dream sours
    for (const f of game.fish) { const k = Math.max(0, 1 - t / 1.5); f.m.scale.setScalar(Math.max(0.001, k)); if (k <= 0) f.m.visible = false; }
    // --- Biscuit
    let pose = 'walk', speed = 1;
    if (t < 2.6) { // in through the door, around the blocks and the open drawer
      const k = Math.min(1, t / 2.6) * (path.length - 1), i = Math.min(path.length - 2, Math.floor(k));
      dog.group.position.copy(lerpV(path[i], path[i + 1], k - i));
      turnTo(faceTo(path[i], path[i + 1]), dt * 5);
    }
    else if (t < 3.7) { pose = t < 2.8 ? 'stand' : 'rear'; speed = 0; dog.group.position.copy(spot); turnTo(faceTo(spot, sill), dt * 8); if (!barked && t > 2.85) { barked = true; Audio.dogBark && Audio.dogBark(); } }
    else if (t < 4.7) { pose = 'stand'; speed = 0; turnTo(faceTo(spot, at(t).x), dt * 4); }
    else if (t < 5.9) { const k = seg(t, 4.7, 5.9); dog.group.position.copy(lerpV(spot, pick, k)); turnTo(k < 0.85 ? faceTo(spot, pick) : approach, dt * 8); }
    else if (t < 6.7) { pose = 'pickup'; speed = 0; dog.group.position.copy(pick); turnTo(approach, dt * 10); }
    else { // trot off with him, the long way round the open drawer
      pose = 'carry';
      const k = Math.min(1, (t - 6.7) / 3.5) * (exitPath.length - 1), i = Math.min(exitPath.length - 2, Math.floor(k));
      dog.group.position.copy(lerpV(exitPath[i], exitPath[i + 1], k - i));
      turnTo(faceTo(exitPath[i], exitPath[i + 1]), dt * 5);
    }
    dog.update(dt, pose, speed);
    dog.group.updateMatrixWorld(true);
    // --- Blåhaj
    let com, q, vel = V(), grounded = true;
    if (t < RELEASE) { q = q0; com = sill.clone().add(BLAHAJ_COM.clone().applyQuaternion(q0)); }
    else {
      const f = at(t); com = f.x.clone(); q = f.q; vel = f.v; grounded = f.contact;
      if (!hopped) { hopped = true; Audio.jump(); rig.impulse(5); }
      const ft = t - RELEASE;
      for (const e of fall.impacts) {
        if (e.done || e.time > ft) continue;
        e.done = true;
        if (e.time - lastImpact < 0.12) continue;
        lastImpact = e.time; rig.impulse(-Math.min(8, e.speed * 0.4)); Audio.land();
      }
    }
    if (t > 6.35) { // in Biscuit's mouth
      const h = carried(dog, t);
      if (!grabFrom) grabFrom = { com: com.clone(), q: q.clone() };
      const k = seg(t, 6.35, 6.65);
      com = grabFrom.com.clone().lerp(h.com, k); q = grabFrom.q.clone().slerp(h.q, k);
      vel = V(Math.sin(t * 9) * 3, Math.sin(t * 7) * 3, 0); grounded = false;
    }
    rig.update(dt, { speed: t > 6.35 ? 0.6 : 0, grounded, vx: vel.x, vy: vel.y, vz: vel.z });
    poseRig(game, com, q);
    // --- camera
    if (t < 2.6) camShot(game, V(-2.4, 8.2, -1.2), V(-2.0, 7.6, -1.6), V(4.6, 1.6, 8.0), V(3.6, 2.4, -4.6), seg(t, 0, 2.6), 54);
    else if (t < 4.8) {
      camShot(game, startleCam, startleCam.clone().add(V(0, -0.5, 0)).addScaledVector(hop, -0.4), sill.clone().add(V(0, 0.4, 0)), sill.clone().addScaledVector(hop, 2.0).setY(1.4), seg(t, 2.6, 4.8), 52);
      if (t > RELEASE) game.camera.lookAt(lerpV(sill.clone().add(V(0, 0.4, 0)), sill.clone().addScaledVector(hop, 2.0).setY(1.4), seg(t, 2.6, 4.8)).lerp(com, 0.45));
    } else if (t < 6.9) {
      // low and in front of Biscuit, so we see him come nose-down onto Blåhaj
      const eye = pickCam;
      camShot(game, eye, eye.clone().add(V(0, 0.25, 0)), grab.clone().setY(0.5).addScaledVector(fwd, -0.4), grab.clone().setY(1.0).addScaledVector(fwd, -0.9), seg(t, 4.8, 6.9), 48);
    } else { // from the foot of the bed, watch him trot off with Blåhaj
      game.camera.position.set(-5.2, 6.2, 1.6);
      const hp = dog.head.getWorldPosition(V());
      game.camera.lookAt(hp.x, hp.y - 0.7, hp.z);
      if (game.camera.fov !== 46) { game.camera.fov = 46; game.camera.updateProjectionMatrix(); }
    }
    if (t > 9.6) hooks.fade(true);
    if (t >= c.length) { c.done = true; hooks.subtitle(null); rig.body.position.set(0, 0, 0); rig.body.rotation.set(0, 0, 0); }
  };
  return c;
}

// ---------------------------------------------- downstairs: dropped off --
export function downstairs(game, hooks) {
  const dog = game.dog;
  const P = game.p, rig = game.rig;
  const bed = V(game.ch.spawn[0], game.ch.spawn[1], game.ch.spawn[2]);
  const from = V(2, 0, 4), sleep = dog.group.position.clone(), sleepRot = dog.group.rotation.y;
  const play = bed.clone().setY(0).add(V(3.0, 0, 2.6));          // where he stops to play, facing his bed
  const faceBed = Math.atan2(bed.x - play.x, bed.z - play.z);
  const uprightQ = yawQ(game.ch.spawnYaw || 0), uprightCom = bed.clone().add(BLAHAJ_COM.clone().applyQuaternion(uprightQ));
  const lines = [[0.5, 'Downstairs, Biscuit wanted to play.'], [3.4, 'Woof! A play bow, a shake…'], [5.0, '…and a big toss, right into his dog bed!'], [7.4, 'Then Biscuit yawned, and curled up by the fire.'], [10.2, 'Leo is still upstairs. Find the stairs!']];
  const c = base(hooks, lines, 13);
  c.ownsDog = true;
  hooks.letterbox(true); hooks.fade(false);
  for (const e of game.enemies) e.s.group.visible = false; // nightmares keep away from a wide-awake dog
  const TOSS = 4.7;
  let held = null, toss = null, lastImpact = -1;
  const turnTo = (want, k) => { const d = dog.group.rotation; d.y += Math.atan2(Math.sin(want - d.y), Math.cos(want - d.y)) * Math.min(1, k); };
  c.update = (dt) => {
    const t = (c.t += dt);
    c.subtitles(t);
    // Biscuit: trot in, play bow, shake, toss, yawn, pad over to the fire, flop down
    if (t < 3.0) { dog.group.position.copy(lerpV(from, play, seg(t, 0, 3.0))); turnTo(t < 2.4 ? Math.atan2(play.x - from.x, play.z - from.z) : faceBed, dt * 6); dog.update(dt, 'carry', 1); }
    else if (t < 3.9) { turnTo(faceBed, dt * 6); dog.update(dt, 'bow', 0); if (t > 3.3 && !c.barked) { c.barked = true; Audio.dogBark && Audio.dogBark(); } }
    else if (t < 4.5) dog.update(dt, 'shake', 0);
    else if (t < 5.4) dog.update(dt, 'toss', 0);
    else if (t < 6.6) dog.update(dt, 'stand', 0);
    else if (t < 7.6) dog.update(dt, 'yawn', 0);
    else {
      const k = seg(t, 7.6, 9.6);
      dog.group.position.copy(lerpV(play, sleep, k)); turnTo(k < 0.85 ? Math.atan2(sleep.x - play.x, sleep.z - play.z) : sleepRot, dt * 4);
      dog.update(dt, k < 1 ? 'walk' : 'sleep', k < 1 ? 0.6 : 0);
    }
    dog.group.updateMatrixWorld(true);
    // Blåhaj: in his mouth until the toss, then real physics into the bed
    let com, q, vel = V(), grounded = false;
    if (t < TOSS) { held = carried(dog, t); com = held.com; q = held.q; vel.set(0, Math.sin(t * 7) * 3, 0); }
    else {
      if (!toss) {
        if (!held) held = carried(dog, t); // skipped before the first frame
        const b = createTumble(game.solids, { rollDrag: 3.5, floorDrag: 8, surface: game.softHeight });
        // aim the throw so it arcs into the middle of the bed
        const tgt = bed.clone().add(V(0, 0.6, 0)), fly = 0.8;
        b.x.copy(held.com); b.q.copy(held.q);
        b.v.copy(tgt).sub(held.com).divideScalar(fly); b.v.y += 0.5 * 40 * fly; b.w.set(1.2, 5.0, 0.8);
        toss = b.bake(c.length - TOSS + 0.1); toss.t0 = t;
        const last = toss.frames[toss.frames.length - 1];
        const restPivot = last.x.clone().sub(BLAHAJ_COM.clone().applyQuaternion(last.q));
        toss.nudge = V(bed.x - restPivot.x, 0, bed.z - restPivot.z);
        toss.restQ = last.q.clone(); toss.restCom = last.x.clone().add(toss.nudge);
        Audio.jump();
      }
      const ft = t - toss.t0, f = toss.frames[Math.min(toss.frames.length - 1, Math.floor(ft / toss.h))];
      com = f.x.clone().addScaledVector(toss.nudge, ease(ft / 1.2)); q = f.q; vel = f.v; grounded = f.contact;
      for (const e of toss.impacts) {
        if (e.done || e.time > ft) continue;
        e.done = true;
        if (e.time - lastImpact < 0.12) continue;
        lastImpact = e.time; rig.impulse(-Math.min(8, e.speed * 0.4)); Audio.land();
      }
      if (t > 10.0) { // wriggles back onto his belly
        const k = seg(t, 10.0, 11.0);
        q = toss.restQ.clone().slerp(uprightQ, k);
        com = toss.restCom.clone().lerp(uprightCom, k); com.y += Math.sin(k * Math.PI) * 0.5;
        vel = V(0, Math.cos(k * Math.PI) * 3, 0); grounded = k >= 1;
      }
    }
    rig.update(dt, { speed: t < TOSS ? 0.5 : 0, grounded, vx: vel.x, vy: vel.y, vz: vel.z });
    poseRig(game, com, q);
    // cameras: in from the room, then the game of fetch, then Biscuit settling by the fire
    if (t < 3.0) camShot(game, V(4, 7.5, 6), V(-1, 6.0, 3), V(0, 1.5, 0), play.clone().setY(1.6), seg(t, 0, 3.0), 54);
    else if (t < 7.2) camShot(game, V(-1.2, 3.4, -5.6), V(-1.8, 3.0, -6.2), lerpV(play, bed, 0.4).setY(1.4), lerpV(play, bed, 0.6).setY(1.0), seg(t, 3.0, 7.2), 50);
    else if (t < 10.4) camShot(game, V(-4.6, 2.6, -7.8), V(-5.0, 2.4, -7.6), lerpV(play, sleep, 0.5).setY(1.2), sleep.clone().setY(0.9).lerp(bed, 0.4), seg(t, 7.2, 10.4), 50);
    else camShot(game, V(-5.0, 2.4, -7.6), V(-3.0, 6.0, 1.0), sleep.clone().setY(0.9).lerp(bed, 0.4), V(12, 2.0, 7.5), seg(t, 10.4, 13), 54);
    if (t >= c.length) {
      c.done = true; hooks.subtitle(null); hooks.letterbox(false);
      for (const e of game.enemies) e.s.group.visible = true;
      rig.body.position.set(0, 0, 0); rig.body.rotation.set(0, 0, 0);
      P.pos.copy(bed); P.yaw = game.ch.spawnYaw || 0; P.vel.set(0, 0, 0);
      game.cam.yaw = game.ch.camYaw; game.updateCamera(1, true);
    }
  };
  return c;
}

// ------------------------------------------------- chapter flyover intros --
export function flyover(game, hooks, shots, lines) {
  const c = base(hooks, lines, shots.reduce((a, s) => a + s.d, 0));
  hooks.letterbox(true); hooks.fade(false);
  c.ownsPlayer = false;
  c.update = (dt) => {
    const t = (c.t += dt);
    c.subtitles(t);
    let acc = 0;
    for (const s of shots) {
      if (t <= acc + s.d) { camShot(game, s.from, s.to, s.look0, s.look1, seg(t, acc, acc + s.d), s.fov || 50); break; }
      acc += s.d;
    }
    game.rig.update(dt, { speed: 0, grounded: true, vx: 0, vy: 0, vz: 0 });
    if (t >= c.length) { c.done = true; hooks.subtitle(null); hooks.letterbox(false); game.updateCamera(1, true); }
  };
  return c;
}
export function stairsIntro(game, hooks) {
  return flyover(game, hooks, [
    { d: 4.2, from: V(3.8, 1.6, 9.2), to: V(3.6, 9.5, 2.0), look0: V(-2, 3, 0), look1: V(-2.2, 11, -9), fov: 56 },
    { d: 3.4, from: V(3.6, 9.5, 2.0), to: V(3.4, 3.0, 9.0), look0: V(-2.2, 11, -9), look1: V(1.5, 0.5, 6.5), fov: 56 },
  ], [[0.4, 'The stairs. Leo’s room is all the way at the top.'], [3.0, 'A nightmare up on the landing is hurling balls down them…'], [5.4, '…and the dark is rising behind you!']]);
}
export function bedIntro(game, hooks) {
  return flyover(game, hooks, [
    { d: 4.4, from: V(4.6, 6.5, 9.0), to: V(-0.5, 7.5, 1.0), look0: V(-4, 5, -4), look1: V(-5.2, 7.0, -4.8), fov: 50 },
    { d: 3.2, from: V(-0.5, 7.5, 1.0), to: V(4.6, 3.6, 10.0), look0: V(-5.2, 7.0, -4.8), look1: V(4.6, 1.2, 6.0), fov: 54 },
  ], [[0.4, 'The nightmare has found Leo.'], [4.4, 'Climb up and chase it away!']]);
}

// ------------------------------------------------------------------ ending --
export function ending(game, hooks) {
  const leo = game.leo, P = game.p, rig = game.rig;
  const start = P.pos.clone(), hug = leo.hugPoint.clone();
  const fromQ = yawQ(P.yaw), heldQ = yawQ(Math.PI).multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0.3)));
  const startCom = start.clone().add(BLAHAJ_COM.clone().applyQuaternion(fromQ));
  const smoother = (x) => { x = THREE.MathUtils.clamp(x, 0, 1); return x * x * x * (x * (x * 6 - 15) + 10); };
  const sm = (t, a, b) => smoother((t - a) / (b - a));
  const lines = [[1.8, 'Leo stirred…'], [3.8, '…rolled over, and pulled Blåhaj close…'], [6.4, '…and snuggled down under the covers, both arms around him.'], [9.4, 'The nightmares melted away like morning mist.'], [12.6, 'Sweet dreams, Leo.']];
  const c = base(hooks, lines, 16);
  c.dream = game.comfort / 100;
  hooks.letterbox(true);
  for (const l of game.lamps) if (!l.on) l.setOn(true);
  if (game.bubble) game.bubble.trail.forEach((m) => (m.visible = false)); // keep the dream's bubbles off his face
  const bedX = hug.x - 1.15; // the middle of the bed
  let pose = { com: startCom, q: fromQ };
  c.update = (dt) => {
    const t = (c.t += dt);
    c.subtitles(t);
    // where Blåhaj lies: landed beside him, then drawn in against his chest
    const pull = sm(t, 4.4, 6.4), tuck = sm(t, 6.2, 8.0);
    const bx = bedX + lerpV(V(1.85, 0, 0), V(1.57, 0, 0), pull).x, bz = snugZ(leo);
    // Leo: rolls toward him and curls up; right arm slides underneath, left arm over the top
    const roll = 1 - 1.85 * sm(t, 2.0, 4.6), curl = 0.7 * sm(t, 2.6, 5.0);
    const sn = snuggle(leo, bx, bz, pose);
    const spheres = onTopOf(leo, pose);
    leo.update(dt, {
      cover: 0.86, roll, curl, shiver: 0,
      ik: sn.ik, ikW: sm(t, 3.8, 5.6), pole: sn.pole, armOver: tuck < 0.5,
      ikL: sn.ikL, ikWL: sm(t, 4.2, 6.0), poleL: sn.poleL, armOverL: tuck < 0.5,
      onTop: tuck < 1 ? spheres.map((o) => Object.assign({}, o, { r: o.r * (1 - tuck) })) : [],
      under: tuck > 0 ? spheres.map((o) => Object.assign({}, o, { r: o.r * tuck })) : [],
    });
    const rest = restOnBed(leo, bx, bz, heldQ).lerp(restOnBed(leo, bx, bz, heldQ, true), tuck);
    // Blåhaj hops up beside him, lands softly, then is held
    let com, q, vel = V(), grounded = true;
    if (t < 1.8) {
      const k = sm(t, 0, 1.8);
      com = startCom.clone().lerp(rest, k); com.y += Math.sin(k * Math.PI) * 1.4;
      q = fromQ.clone().slerp(heldQ, k); vel.set(0, Math.cos(k * Math.PI) * 6, 0); grounded = k > 0.97;
      if (t + dt >= 1.8 && !c.landed) { c.landed = true; rig.impulse(-6); Audio.land(); }
    } else { com = rest; q = heldQ; com.y += Math.sin(t * 1.6) * 0.015; }
    rig.update(dt, { speed: t < 1.8 ? 0.4 : 0, grounded, vx: vel.x, vy: vel.y, vz: vel.z, bend: t > 3.8 ? SNUG_BEND * sm(t, 3.8, 5.6) : undefined });
    poseRig(game, com, q);
    pose = { com: com.clone(), q: q.clone() };
    c.dream = Math.min(1, game.comfort / 100 + seg(t, 6, 10));
    game.comfort = Math.max(game.comfort, c.dream * 100);
    if (t > 5 && t < 10 && Math.random() < 0.6) game.sparks.emit({ p: hug.clone().add(V((Math.random() - 0.5) * 6, Math.random() * 4, (Math.random() - 0.5) * 6)), v: V(0, 0.8, 0), life: 2, size: 0.3, color: new THREE.Color().setHSL(0.1 + Math.random() * 0.1, 0.8, 0.75), drag: 0.3 });
    if (t < 8.4) camShot(game, V(-1.0, 7.6, -3.9), V(-1.6, 7.8, -5.0), V(-4.0, 5.0, -6.0), V(-4.4, 4.9, -6.9), sm(t, 0, 8.4), 42);
    else camShot(game, V(-1.6, 7.8, -5.0), V(5.5, 8.6, 6.5), V(-4.4, 4.9, -6.9), V(-4.2, 6.6, -5.6), sm(t, 8.4, 15.6), 48);
    if (t > 14.8) hooks.fade(true);
    if (t >= c.length) { c.done = true; hooks.subtitle(null); }
  };
  return c;
}

export const CINES = { prologue, dog: dogSnatch, downstairs, stairs: stairsIntro, bed: bedIntro, ending };
