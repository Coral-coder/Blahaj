// In-engine cutscenes. Each one is a timeline that drives the camera, the
// actors and Blåhaj, while subtitles and letterboxing go through hooks.
import * as THREE from 'three';
import { Audio } from './audio.js';
import { createDog } from './characters.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const ease = (t) => (t < 0 ? 0 : t > 1 ? 1 : t * t * (3 - 2 * t));
const seg = (t, a, b) => ease((t - a) / (b - a));
const lerpV = (a, b, k) => a.clone().lerp(b, k);

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
  const edge = V(-2.55, 4.55, hug.z + 0.3);
  const floor = V(game.ch.spawn[0], 0, game.ch.spawn[2]);
  const lines = [
    [0.6, 'It was a cold, quiet night.'],
    [5.2, 'Leo was dreaming of Blåhaj and teddy bears.'],
    [10.2, 'But the blanket had slipped, and Leo was cold…'],
    [14.4, 'He reached down to pull it back up…'],
    [17.6, '…rolled over…'],
    [19.0, '…and let go of Blåhaj.'],
    [21.4, 'Without Blåhaj, Leo’s dream began to change.'],
    [25.2, 'Get back to Leo before the nightmares do.'],
  ];
  const c = base(hooks, lines, 29);
  c.dream = 1;
  hooks.letterbox(true);
  let fell = false, thud = false;
  c.update = (dt) => {
    const t = (c.t += dt);
    c.subtitles(t);
    // Leo
    const cover = t < 10 ? 1 : t < 12.5 ? 1 - seg(t, 10, 12.5) * 0.7 : t < 17.6 ? 0.3 : 0.3 + seg(t, 17.6, 19.6) * 0.75;
    const roll = seg(t, 17.6, 19.8);
    const shiver = t > 10.5 && t < 17.6 ? 1 : 0;
    let arm = 'hug', prevArm = 'hug', armT = 1;
    if (t >= 14.2 && t < 17.6) { arm = 'reach'; prevArm = 'hug'; armT = seg(t, 14.2, 15.8); }
    else if (t >= 17.6) { arm = 'tucked'; prevArm = 'reach'; armT = seg(t, 17.6, 19.2); }
    leo.update(dt, { cover, roll, shiver, arm, prevArm, armT });
    // Blåhaj: snug in his arm, then sliding, rolling, falling
    rig.root.visible = true;
    if (t < 16.4) {
      P.pos.copy(hug).setY(hug.y - 0.4); P.yaw = Math.PI; rig.body.rotation.set(0, 0, 0.5);
    } else if (t < 19.4) {
      const k = seg(t, 16.4, 19.4);
      P.pos.copy(lerpV(hug.clone().setY(hug.y - 0.4), edge, k)); P.yaw = Math.PI;
      rig.body.rotation.set(0, 0, 0.5 - k * 2.4);
    } else if (t < 20.3) {
      const k = (t - 19.4) / 0.9;
      P.pos.set(edge.x + (floor.x - edge.x) * k, edge.y * (1 - k * k) + 0.0, edge.z + (floor.z - edge.z) * k);
      rig.body.rotation.set(0, 0, -1.9 - k * 3.0);
      if (!fell) { fell = true; Audio.fall(); }
    } else {
      const k = seg(t, 20.3, 21.2);
      P.pos.copy(floor).setY(Math.abs(Math.sin(k * Math.PI)) * 0.25 * (1 - k));
      rig.body.rotation.set(0, 0, (-4.9 - 1.38 * k) % (Math.PI * 2) * (1 - k));
      P.yaw = Math.PI / 2;
      if (!thud) { thud = true; Audio.land(); game.puffs.burst(floor.clone().add(V(0, 0.1, 0)), 14, { color: new THREE.Color(0xd8dcff), speed: 3, life: 0.6, size: 0.4, alpha: 0.5 }); }
    }
    rig.body.position.y = 0.0;
    rig.update(dt, { speed: 0, grounded: t > 20.5 || t < 16.4, vx: 0, vy: 0, vz: 0 });
    for (const e of game.enemies) { e.s.group.visible = t > 21.2; if (t > 21.2) e.s.group.scale.setScalar(Math.min(1, (t - 21.2) / 2)); }
    // the dream sours once he lets go
    c.dream = t < 19 ? 1 : 1 - seg(t, 20.5, 25) * 0.55;
    game.comfort = c.dream * 100;
    if (t > 21 && Math.random() < 0.35) game.puffs.emit({ p: floor.clone().add(V((Math.random() - 0.5) * 8, 0.1, (Math.random() - 0.5) * 8)), v: V(0, 1.2, 0), life: 1.3, size: 0.7, color: new THREE.Color(0x150924), alpha: 0.7, drag: 0.6 });
    // camera
    if (t < 5) camShot(game, V(4.5, 6.4, 8.2), V(1.8, 6.6, 1.6), V(-4.0, 4.6, -5.6), V(-4.6, 5.0, -6.2), seg(t, 0, 5), 50);
    else if (t < 10) camShot(game, V(-0.8, 6.9, -3.0), V(-1.6, 6.6, -4.2), V(-4.8, 5.4, -6.6), V(-4.6, 6.4, -6.4), seg(t, 5, 10), 42);
    else if (t < 17.6) camShot(game, V(0.4, 7.4, -1.6), V(0.0, 7.0, -2.4), V(-5.0, 4.8, -5.4), V(-4.8, 4.8, -5.8), seg(t, 10, 17.6), 46);
    else if (t < 21.4) camShot(game, V(2.6, 3.2, -1.2), V(2.2, 2.4, -2.6), V(-2.6, 3.6, -5.2), V(-1.8, 1.0, -5.2), seg(t, 17.6, 21.0), 48);
    else if (t < 25.0) camShot(game, V(1.2, 0.7, -3.9), V(0.8, 0.9, -4.3), V(-1.6, 0.5, -5.2), V(-3.8, 5.4, -6.4), seg(t, 21.6, 24.6), 50);
    else camShot(game, V(0.8, 0.9, -4.3), V(1.6, 2.4, -2.6), V(-3.8, 5.4, -6.4), V(-1.6, 0.6, -5.2), seg(t, 25.0, 26.6), 52);
    if (t >= c.length) c.finish();
  };
  c.finish = () => {
    c.done = true; hooks.subtitle(null); hooks.letterbox(false);
    for (const e of game.enemies) { e.s.group.visible = true; e.s.group.scale.setScalar(1); }
    leo.update(0, { cover: 1.05, roll: 1, shiver: 0, arm: 'tucked', prevArm: 'tucked', armT: 1 });
    rig.body.rotation.set(0, 0, 0);
    game.p.pos.copy(floor); game.p.yaw = game.ch.spawnYaw; game.p.vel.set(0, 0, 0);
    game.comfort = 80; game.cam.yaw = Math.PI / 2 + Math.PI; game.cam.pitch = 0.3;
    game.updateCamera(1, true);
  };
  return c;
}

// ------------------------------------------------------------ dog: snatch --
export function dogSnatch(game, hooks) {
  const dog = createDog();
  game.scene.add(dog.group);
  const P = game.p, rig = game.rig;
  const door = V(4.6, 0, 12), desk = V(3.6, 0, -5.4), sill = P.pos.clone();
  const lines = [[0.4, 'Then came a jingle of collar tags…'], [3.6, 'Biscuit!'], [6.0, 'Biscuit wanted to play.']];
  const c = base(hooks, lines, 9.2);
  hooks.letterbox(true);
  Audio.dogBark && Audio.dogBark();
  let barked = false;
  c.update = (dt) => {
    const t = (c.t += dt);
    c.subtitles(t);
    let pose = 'walk', speed = 1;
    if (t < 3) { dog.group.position.copy(lerpV(door, desk, seg(t, 0, 3))); dog.group.rotation.y = Math.PI; }
    else if (t < 5.4) { pose = 'rear'; speed = 0; dog.group.position.copy(desk); if (!barked && t > 3.4) { barked = true; Audio.dogBark && Audio.dogBark(); } }
    else { pose = 'carry'; const k = seg(t, 5.4, 9.0); dog.group.position.copy(lerpV(desk, door.clone().add(V(0, 0, 2)), k)); dog.group.rotation.y = k < 0.1 ? Math.PI - k * 30 : 0; }
    dog.update(dt, pose, speed);
    dog.group.updateMatrixWorld(true);
    if (t > 4.6) {
      const m = dog.mouthPoint.getWorldPosition(V());
      P.pos.copy(m).add(V(0, -0.45, 0)); P.yaw = dog.group.rotation.y + Math.PI / 2;
      rig.body.rotation.set(0, 0, Math.sin(t * 8) * 0.15);
      rig.update(dt, { speed: 0.6, grounded: false, vx: Math.sin(t * 9) * 3, vy: Math.sin(t * 7) * 3, vz: 0 });
    } else { P.pos.copy(sill); rig.update(dt, { speed: 0, grounded: true, vx: 0, vy: 0, vz: 0 }); }
    if (t < 3) camShot(game, V(-2.4, 8.2, -1.2), V(-2.0, 7.6, -1.6), V(4.6, 1.6, 8.0), V(3.6, 2.4, -4.6), seg(t, 0, 3), 54);
    else if (t < 5.4) camShot(game, V(-4.6, 3.2, -3.6), V(-4.2, 3.4, -4.0), V(3.2, 3.8, -7.0), V(3.2, 4.4, -7.6), seg(t, 3, 5.4), 50);
    else { // from the doorway, watch him trot off with her
      game.camera.position.set(2.0, 4.4, 8.0);
      const hp = dog.head.getWorldPosition(V());
      game.camera.lookAt(hp.x, hp.y - 0.8, hp.z);
      if (game.camera.fov !== 50) { game.camera.fov = 50; game.camera.updateProjectionMatrix(); }
    }
    if (t > 8.2) hooks.fade(true);
    if (t >= c.length) { c.done = true; hooks.subtitle(null); }
  };
  return c;
}

// ---------------------------------------------- downstairs: dropped off --
export function downstairs(game, hooks) {
  const dog = game.dog;
  const P = game.p, rig = game.rig;
  const bed = V(game.ch.spawn[0], 0, game.ch.spawn[2]);
  const from = V(2, 0, 4), sleep = dog.group.position.clone(), sleepRot = dog.group.rotation.y;
  const lines = [[0.5, 'Downstairs, Biscuit dropped Blåhaj in his dog bed…'], [4.4, '…and fell fast asleep.'], [7.2, 'Leo is still upstairs. Find the stairs!']];
  const c = base(hooks, lines, 10);
  hooks.letterbox(true); hooks.fade(false);
  c.update = (dt) => {
    const t = (c.t += dt);
    c.subtitles(t);
    if (t < 3.2) {
      const k = seg(t, 0, 3.2);
      dog.group.position.copy(lerpV(from, bed.clone().add(V(0.5, 0, 2.6)), k)); dog.group.rotation.y = Math.atan2(bed.x - from.x, bed.z - from.z);
      dog.update(dt, 'carry', 1);
      dog.group.updateMatrixWorld(true);
      P.pos.copy(dog.mouthPoint.getWorldPosition(V())).add(V(0, -0.45, 0)); P.yaw = dog.group.rotation.y + Math.PI / 2;
      rig.update(dt, { speed: 0.5, grounded: false, vx: 0, vy: Math.sin(t * 7) * 3, vz: 0 });
    } else if (t < 4.0) {
      const k = seg(t, 3.2, 4.0);
      dog.update(dt, 'stand', 0);
      P.pos.copy(bed).setY(game.ch.spawn[1] + (1 - k) * 1.6); rig.update(dt, { speed: 0, grounded: k > 0.95, vx: 0, vy: -8 * (1 - k), vz: 0 });
    } else {
      const k = seg(t, 4.0, 5.6);
      dog.group.position.copy(lerpV(bed.clone().add(V(0.5, 0, 2.6)), sleep, k));
      dog.group.rotation.y = sleepRot;
      dog.update(dt, k < 1 ? 'walk' : 'sleep', k < 1 ? 1 : 0);
      P.pos.copy(bed).setY(game.ch.spawn[1]);
      rig.update(dt, { speed: 0, grounded: true, vx: 0, vy: 0, vz: 0 });
    }
    if (t < 4.4) camShot(game, V(4, 7.5, 6), V(-2, 6.5, 3), V(0, 1.5, 0), V(-8.8, 1.0, -4.0), seg(t, 0, 4.4), 54);
    else if (t < 7.2) camShot(game, V(-4.5, 3.6, -1.5), V(-5.2, 3.0, -2.6), V(-8.8, 1.0, -4.5), V(-8.8, 0.9, -4.8), seg(t, 4.4, 7.2), 46);
    else camShot(game, V(-5.2, 3.0, -2.6), V(-3.0, 6.0, 4.0), V(-8.8, 0.9, -4.8), V(12, 2.0, 7.5), seg(t, 7.2, 10), 54);
    if (t >= c.length) { c.done = true; hooks.subtitle(null); hooks.letterbox(false); P.pos.copy(bed).setY(game.ch.spawn[1]); game.cam.yaw = Math.PI * 0.75; game.updateCamera(1, true); }
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
  ], [[0.4, 'The stairs. Leo’s room is all the way at the top.'], [4.0, 'And the dark is rising behind you…']]);
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
  const start = P.pos.clone(), hug = leo.hugPoint.clone().setY(leo.hugPoint.y - 0.4);
  const lines = [[1.8, 'Leo stirred…'], [4.4, '…and pulled Blåhaj close.'], [7.6, 'The nightmares melted away like morning mist.'], [11.0, 'Sweet dreams, Leo.']];
  const c = base(hooks, lines, 15);
  c.dream = game.comfort / 100;
  hooks.letterbox(true);
  for (const l of game.lamps) if (!l.on) l.setOn(true);
  c.update = (dt) => {
    const t = (c.t += dt);
    c.subtitles(t);
    if (t < 1.6) {
      const k = seg(t, 0, 1.6);
      P.pos.copy(lerpV(start, hug, k)); P.pos.y += Math.sin(k * Math.PI) * 1.2; P.yaw = Math.PI;
      rig.update(dt, { speed: 0.4, grounded: k > 0.95, vx: 0, vy: (0.5 - k) * 10, vz: 0 });
    } else { P.pos.copy(hug); P.yaw = Math.PI; rig.body.rotation.z += (0.5 - rig.body.rotation.z) * Math.min(1, dt * 3); rig.update(dt, { speed: 0, grounded: true, vx: 0, vy: 0, vz: 0 }); }
    const roll = 1 - seg(t, 2.0, 4.0);
    const armT = seg(t, 3.4, 5.2);
    leo.update(dt, { cover: 1.0, roll, shiver: 0, arm: 'hug', prevArm: 'tucked', armT });
    c.dream = Math.min(1, game.comfort / 100 + seg(t, 5, 9));
    game.comfort = Math.max(game.comfort, c.dream * 100);
    if (t > 5 && t < 10 && Math.random() < 0.6) game.sparks.emit({ p: hug.clone().add(V((Math.random() - 0.5) * 6, Math.random() * 4, (Math.random() - 0.5) * 6)), v: V(0, 0.8, 0), life: 2, size: 0.3, color: new THREE.Color().setHSL(0.1 + Math.random() * 0.1, 0.8, 0.75), drag: 0.3 });
    if (t < 7) camShot(game, V(-1.2, 7.0, -3.2), V(-1.8, 6.6, -4.0), V(-4.6, 5.2, -6.0), V(-4.8, 5.0, -6.2), seg(t, 0, 7), 40);
    else camShot(game, V(-1.8, 6.6, -4.0), V(5.5, 8.6, 6.5), V(-4.8, 5.0, -6.2), V(-4.2, 6.6, -5.6), seg(t, 7, 14.5), 48);
    if (t > 13.6) hooks.fade(true);
    if (t >= c.length) { c.done = true; hooks.subtitle(null); }
  };
  return c;
}

export const CINES = { prologue, dog: dogSnatch, downstairs, stairs: stairsIntro, bed: bedIntro, ending };
