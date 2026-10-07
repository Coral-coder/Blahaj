// Gameplay for one chapter: physics, the comfort/nightmare system, pickups,
// creatures, the indoor camera. Cutscenes drive the same scene via `cine`.
import * as THREE from 'three';
import { CFG } from './config.js';
import { Audio } from './audio.js';
import * as Art from './art.js';
import { Particles } from './particles.js';
import { expand, roomBoxes } from './prefabs.js';
import { buildRoom, createDarkFloor, createRisingDark, createLamp } from './rooms.js';
import { createLeo, createDreamBubble, createShadow, createKnot, createDog, createCat, updateShadowTime } from './characters.js';
import { softDotTexture } from './textures.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const SOFT_GROUND = { kind: 'soft', active: true, type: 'solid', tag: 'soft' };
const EPS = 0.001;
const angDiff = (a, b) => { let d = b - a; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; };
const COMFORT = { fish: 4, starfish: 25, bunny: 3, stomp: 6, knot: 15, hit: 18, lego: 10, ball: 7, cat: 6, lampMin: 70, respawn: 60, darkDrain: 9, risingDrain: 26 };

function pathPoint(path, dist) {
  // position along a closed polyline at arc length `dist`
  let total = 0;
  const segs = path.map((p, i) => { const q = path[(i + 1) % path.length]; const l = Math.hypot(q[0] - p[0], q[1] - p[1]); total += l; return l; });
  let d = ((dist % total) + total) % total;
  for (let i = 0; i < path.length; i++) {
    if (d <= segs[i]) { const p = path[i], q = path[(i + 1) % path.length], t = segs[i] ? d / segs[i] : 0; return [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t, Math.atan2(q[0] - p[0], q[1] - p[1])]; }
    d -= segs[i];
  }
  return [path[0][0], path[0][1], 0];
}
function inSafe(list, x, z) {
  for (const s of list) {
    if (s.r && (x - s.x) ** 2 + (z - s.z) ** 2 < s.r * s.r) return true;
    if (s.x0 !== undefined && x > s.x0 && x < s.x1 && z > s.z0 && z < s.z1) return true;
  }
  return false;
}

export class Game {
  constructor(renderer, input, chapter, index, hooks, opts = {}) {
    this.R = renderer; this.input = input; this.ch = chapter; this.index = index; this.hooks = hooks;
    this.ab = chapter.abilities;
    this.savedStars = (opts.savedStars || []).slice();
    this.clock = 0; this.time = 0; this.state = 'play';
    this.stats = { fish: 0, starfish: 0, nightmares: 0, bunnyHops: 0, time: 0, scares: 0 };
    this.comfort = 100;
    this.build();
  }

  // ------------------------------------------------------------------ build --
  build() {
    const ch = this.ch, q = this.R.quality;
    const scene = (this.scene = new THREE.Scene());
    scene.background = new THREE.Color(0x05060c);
    scene.fog = new THREE.Fog(0x0a0c18, 30, 70);
    this.camera = new THREE.PerspectiveCamera(58, innerWidth / innerHeight, 0.05, 300);
    this.roomFx = buildRoom(scene, ch, q);
    const movingVis = new Set(ch.props.filter((p) => p.move).map((p) => p._visual));
    for (const grp of [this.roomFx.shell, this.roomFx.props]) grp.traverse((o) => { let n = o, moving = false; while (n) { if (movingVis.has(n)) { moving = true; break; } n = n.parent; } if (!moving) { o.updateMatrix(); o.matrixAutoUpdate = false; } });
    scene.environmentIntensity = 0.25;

    // collision
    this.solids = [];
    const addBox = (b, mover) => {
      const s = { min: V(...b.min), max: V(...b.max), active: true, kind: b.tag === 'floor' ? 'floor' : 'solid', tag: b.tag, type: b.type, delta: V(), mover };
      if (b.type === 'hazard') { (this.hazards = this.hazards || []).push(s); return; }
      this.solids.push(s);
      return s;
    };
    for (const b of roomBoxes(ch.room)) addBox(b);
    this.movers = [];
    for (const p of ch.props) {
      if (p.move) {
        const m = { p, solids: [], base: V(p.x, 0, p.z), dist: 0, visual: p._visual, last: V(p.x, 0, p.z) };
        for (const b of expand(p)) { const s = addBox(b, m); if (s) { s.base0 = s.min.clone(); s.base1 = s.max.clone(); m.solids.push(s); } }
        this.movers.push(m);
      } else for (const b of expand(p)) addBox(b);
    }
    this.hazards = this.hazards || [];

    // the dark
    this.safe = ch.safe.slice();
    if (ch.rising) {
      this.rising = createRisingDark(ch.room); scene.add(this.rising.group);
      this.darkLevel = ch.rising.from; this.rising.setLevel(this.darkLevel);
    } else {
      this.darkFloor = createDarkFloor(ch.room); scene.add(this.darkFloor.mesh);
      this.darkFloor.setSafe(this.safe);
    }

    // particles
    this.sparks = new Particles(700, true);
    this.puffs = new Particles(500, false);
    scene.add(this.sparks.points, this.puffs.points);

    // lamps (checkpoints)
    this.lamps = ch.lamps.map((l) => { const lamp = createLamp(l); scene.add(lamp.group); if (l.on && l.safe) this.safe.push(l.safe); return lamp; });

    // Leo and his dream, in the bedroom
    if (ch.room.id === 'bedroom') {
      const bed = ch.props.find((p) => p.type === 'cabinBed');
      this.leo = createLeo(bed); scene.add(this.leo.group);
      this.leo.update(0, { cover: 0.55, roll: 1, ikW: 0, armOver: false });
      this.bubble = createDreamBubble(V(bed.x + 0.8, 8.5, bed.z - 2.2)); scene.add(this.bubble.group);
    }
    if (ch.sleepingDog) {
      this.dog = createDog(); const d = ch.sleepingDog;
      this.dog.group.position.set(d.x, 0, d.z); this.dog.group.rotation.y = d.rot || 0;
      this.dog.update(0, 'sleep'); scene.add(this.dog.group);
      // he's solid: hop up onto him, don't walk through him (body runs along his facing)
      const fx = Math.abs(Math.sin(this.dog.group.rotation.y)) > 0.7, cx = d.x + Math.sin(this.dog.group.rotation.y) * 0.2, cz = d.z + Math.cos(this.dog.group.rotation.y) * 0.2;
      const hx = fx ? 1.4 : 0.7, hz = fx ? 0.7 : 1.4;
      this.solids.push({ min: V(cx - hx, 0, cz - hz), max: V(cx + hx, 0.95, cz + hz), active: true, kind: 'solid', tag: 'dog', type: 'solid', delta: V() });
      this.zzz = new Particles(40, true); scene.add(this.zzz.points);
    }
    // soft surfaces that aren't boxes: the duvet over Leo (and Leo under it),
    // and the sunken cushion and rolled rim of the dog bed
    this.fields = [];
    if (this.leo) this.fields.push({ h: (x, z) => this.leo.surfaceAt(x, z) });
    if (this.dog) { // you can clamber over a sleeping dog, not through him
      const d = this.dog.group, fx = Math.sin(d.rotation.y), fz = Math.cos(d.rotation.y);
      this.fields.push({ h: (x, z) => {
        if (this.dog.pose !== 'sleep') return null;
        const dx = x - d.position.x, dz = z - d.position.z, u = (dx * fx + dz * fz - 0.3) / 1.6, v = (dx * fz - dz * fx) / 0.75;
        const e = u * u + v * v;
        return e < 1 ? 1.25 * Math.sqrt(1 - e) : null;
      } });
    }
    for (const p of ch.props) if (p.type === 'dogBed') this.fields.push({ h: (x, z) => {
      const r = Math.hypot(x - p.x, z - p.z);
      if (r < 1.32) return 0.5;
      if (r < 1.95) return 0.45 + Math.sqrt(Math.max(0, 0.2025 - (r - 1.5) ** 2));
      return null;
    } });
    this.softHeight = (x, z) => { let best = null; for (const f of this.fields) { const h = f.h(x, z); if (h !== null && (best === null || h > best)) best = h; } return best; };
    this.cats = [];
    for (const p of ch.props) if (p.type === 'cat') {
      const c = createCat(); c.group.position.set(p.x, p.y || 0, p.z); c.group.rotation.y = (p.rot || 0) * Math.PI / 2 + Math.PI / 2;
      scene.add(c.group); this.cats.push({ c, p, cool: 0 });
    }

    // fish: the little golden fish from the first build, they keep the dream sweet
    this.fish = ch.fish.map((f, i) => {
      const m = Art.createFish(); m.position.set(...f); scene.add(m);
      return { m, pos: V(...f), taken: false, ph: i * 0.37, out: 0 };
    });
    // three hidden starfish per chapter
    this.stars = ch.starfish.map((t, i) => {
      const m = Art.createStar(); m.position.set(...t); scene.add(m);
      if (this.savedStars[i]) m.traverse((o) => { if (o.material && !o.isSprite) { o.material = o.material.clone(); o.material.transparent = true; o.material.opacity = 0.45; } });
      return { m, pos: V(...t), taken: false, i, out: 0 };
    });
    this.runStars = this.stars.map(() => false);
    // friendly dust bunnies: soft, giggly, and very bouncy
    this.bunnies = (ch.bunnies || []).map((b, i) => {
      const m = Art.createBunny(); m.position.set(...b); scene.add(m);
      return { m, home: V(...b), pos: V(...b), vel: V(), t: i * 1.7, wander: V(...b), cool: 0, squish: 0, ph: i };
    });

    // creatures
    this.enemies = [];
    this.balls = [];
    for (const e of ch.enemies) {
      if (e.type === 'shadow') {
        const s = createShadow(1); scene.add(s.group);
        this.enemies.push({ e, s, type: 'shadow', pos: V(...e.path[0]), home: 0, dist: 0, alive: true, deadT: 0, chase: false, hitCool: 0 });
      } else if (e.type === 'knot') {
        const k = createKnot(e.r || 1); scene.add(k.group);
        this.enemies.push({ e, s: k, type: 'knot', pos: V(...e.at), base: V(...e.at), alive: true, deadT: 0, ph: Math.random() * 6 });
      } else if (e.type === 'ballSpawner') {
        // the balls come from somewhere: a nightmare on the landing, rummaging in a
        // tipped-over toy basket and lobbing them over the baby gate
        const src = new THREE.Group(), sx = e.sx ?? -3.0, sz = e.sz ?? -12.0, sy = e.sy ?? 11.41;
        src.position.set(sx, sy, sz); scene.add(src);
        const wick = new THREE.MeshStandardMaterial({ color: 0xb98a55, roughness: 0.9 });
        const bk = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.7, 1.4, 20, 1, true), wick); bk.material.side = THREE.DoubleSide;
        bk.rotation.x = Math.PI / 2 - 0.15; bk.position.set(0, 0.8, -0.2); bk.castShadow = true; src.add(bk);
        const bottom = new THREE.Mesh(new THREE.CircleGeometry(0.7, 20), wick); bottom.position.set(0, 0.85, -0.9); src.add(bottom);
        const cols = [0xc8e34b, 0xe5484d, 0x3f6aa3];
        [[-0.3, 0.5, 0.1], [0.3, 0.55, -0.2], [0.05, 1.0, -0.4], [0.7, 0.5, 0.75]].forEach(([x, y, z], i) => { const b = new THREE.Mesh(new THREE.SphereGeometry(0.42, 18, 12), new THREE.MeshPhysicalMaterial({ color: cols[i % 3], roughness: 0.6, sheen: 0.6 })); b.position.set(x, y, z); b.castShadow = true; src.add(b); });
        const imp = createShadow(1.05); imp.group.position.set(1.4, 0, -0.3); src.add(imp.group);
        this.ballSpawner = { e, t: 2, src, imp, throwT: 0, sx, sy, sz };
      }
    }
    this.knotsLeft = this.enemies.filter((x) => x.type === 'knot').length;

    // goal marker: a soft shaft of light that fades upward, with rising sparkles
    const gc = document.createElement('canvas'); gc.width = 4; gc.height = 128;
    const gg = gc.getContext('2d'); const grd = gg.createLinearGradient(0, 0, 0, 128);
    grd.addColorStop(0, 'rgba(255,255,255,0)'); grd.addColorStop(0.7, 'rgba(255,255,255,0.5)'); grd.addColorStop(1, 'rgba(255,255,255,1)');
    gg.fillStyle = grd; gg.fillRect(0, 0, 4, 128);
    const gm = new THREE.Mesh(new THREE.CylinderGeometry(ch.goal.r * 0.45, ch.goal.r * 0.55, 5, 32, 1, true), new THREE.MeshBasicMaterial({ color: 0xffd9a0, alphaMap: new THREE.CanvasTexture(gc), transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    gm.position.set(ch.goal.x, ch.goal.y + 2.5, ch.goal.z); gm.userData.noAO = true;
    this.goalMarker = gm; scene.add(gm);

    // the player
    this.rig = Art.createBlahaj();
    scene.add(this.rig.root);
    const [sx, sy, sz] = ch.spawn;
    this.p = {
      pos: V(sx, sy, sz), vel: V(), yaw: ch.spawnYaw || 0, grounded: false, ground: null, coyote: 0, buffer: 0,
      canDouble: false, dashT: 0, dashCD: 0, dashUsed: false, dashDir: V(), pound: 0, poundHang: 0,
      invuln: 0, jumpHeld: false, glide: false, inDark: false,
    };
    this.respawn = { pos: V(sx, sy, sz), dark: ch.rising ? ch.rising.from : 0 };
    this.fill = new THREE.PointLight(0xfff0e0, 2.6, 7, 2); scene.add(this.fill);
    this.cam = { yaw: ch.camYaw !== undefined ? ch.camYaw : angDiff(0, (ch.spawnYaw || 0) + Math.PI), pitch: 0.36, dist: 8.8, target: V(sx, sy, sz), idle: 0, fovKick: 0, shake: 0 };
    this.R.build(scene, this.camera, { bloom: 0.55, threshold: 0.85, exposure: 1.05, vignette: 0.42, warmth: 0.02 });
    this.updateCamera(1, true);
  }

  dispose() {
    // free this chapter's own GPU resources; shared textures and materials stay cached
    const mats = new Set();
    this.scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      const m = o.material;
      if (m) (Array.isArray(m) ? m : [m]).forEach((x) => mats.add(x));
    });
    for (const m of mats) {
      if (m.userData && m.userData.shared) continue;
      for (const k of ['map', 'normalMap', 'roughnessMap', 'alphaMap', 'emissiveMap']) { const t = m[k]; if (t && !(t.userData && t.userData.shared) && t !== this.keepTex) t.dispose(); }
      m.dispose();
    }
  }

  // ---------------------------------------------------------------- helpers --
  overlap(x, y, z, s) {
    const r = CFG.radius;
    return x + r > s.min.x + EPS && x - r < s.max.x - EPS && y + CFG.height > s.min.y + EPS && y < s.max.y - EPS && z + r > s.min.z + EPS && z - r < s.max.z - EPS;
  }
  addComfort(v, why) {
    const before = this.comfort;
    this.comfort = Math.max(0, Math.min(100, this.comfort + v));
    if (v < 0 && why) this.hooks.pop(why);
    if (this.comfort <= 0 && before > 0) this.nightmare();
    this.hudDirty = true;
  }
  knock(from, power = 7, up = 8) {
    const P = this.p;
    const away = P.pos.clone().sub(from).setY(0);
    if (away.lengthSq() < 0.01) away.set(0, 0, 1);
    away.normalize().multiplyScalar(power);
    P.vel.set(away.x, up, away.z);
    P.dashT = 0; P.pound = 0; P.grounded = false;
    this.rig.impulse(-6);
  }
  hurt(from, amount, why) {
    const P = this.p;
    if (P.invuln > 0 || this.state !== 'play') return;
    P.invuln = 1.3;
    Audio.hurt();
    this.stats.scares++;
    this.knock(from);
    this.sparks.burst(P.pos.clone().add(V(0, 0.6, 0)), 14, { color: new THREE.Color(0x9a5cff), speed: 5, life: 0.6, size: 0.3 });
    this.cam.shake = 0.25;
    this.addComfort(-amount, why);
  }
  nightmare() {
    if (this.state !== 'play') return;
    this.state = 'respawning';
    Audio.fall();
    this.hooks.fade(true);
    this.hooks.toast('The nightmare grows…', 'Back to the last light you found');
    this.respawnT = 1.1;
  }
  finishRespawn() {
    const P = this.p;
    P.pos.copy(this.respawn.pos); P.vel.set(0, 0, 0);
    P.dashT = 0; P.pound = 0; P.invuln = 1.2; P.grounded = false;
    this.comfort = Math.max(this.comfort, COMFORT.respawn);
    if (this.rising) { this.darkLevel = Math.min(this.darkLevel, this.respawn.pos.y - 4); this.rising.setLevel(this.darkLevel); this.risingDelay = 3; }
    this.cam.target.copy(P.pos);
    this.updateCamera(1, true);
    this.state = 'play';
    this.hudDirty = true;
    this.hooks.fade(false);
  }

  // ----------------------------------------------------------------- update --
  update(dt) {
    this.clock += dt;
    if (this.cine) { if (!this.cine.done) this.cine.update(dt, this); this.visuals(dt); this.input.endFrame(); return; }
    if (this.attract) { this.time += dt; this.cam.yaw += dt * 0.08; this.visuals(dt); this.input.endFrame(); return; }
    if (this.state === 'play' || this.state === 'respawning') {
      this.acc = (this.acc || 0) + Math.min(dt, 0.1);
      const inp = this.input;
      const e = (this.edge = this.edge || { jump: false, dash: false, flop: false });
      e.jump = e.jump || inp.jumpPressed(); e.dash = e.dash || inp.dashPressed(); e.flop = e.flop || inp.flopPressed();
      while (this.acc >= CFG.dt) { this.step(CFG.dt); this.acc -= CFG.dt; e.jump = e.dash = e.flop = false; }
    }
    this.visuals(dt);
    this.input.endFrame();
  }

  step(dt) {
    const P = this.p, inp = this.input, ch = this.ch;
    this.time += dt;
    if (this.state === 'play') this.stats.time += dt;
    if (this.state === 'respawning') { this.respawnT -= dt; if (this.respawnT <= 0) this.finishRespawn(); }

    // moving props (the robo-vacuum)
    for (const m of this.movers) {
      m.dist += m.p.move.speed * dt;
      const [x, z, heading] = pathPoint(m.p.move.path, m.dist);
      const dx = x - m.p.x, dz = z - m.p.z;
      for (const s of m.solids) {
        const px = s.min.x, pz = s.min.z;
        s.min.set(s.base0.x + dx, s.base0.y, s.base0.z + dz); s.max.set(s.base1.x + dx, s.base1.y, s.base1.z + dz);
        s.delta.set(s.min.x - px, 0, s.min.z - pz);
      }
      m.heading = heading;
      if (m.visual) { m.visual.position.set(x, 0, z); m.visual.rotation.y = heading; }
    }
    if (P.grounded && P.ground && P.ground.active && P.ground.mover) P.pos.add(P.ground.delta);

    // rising darkness (the stairs)
    if (this.rising && this.state === 'play') {
      if (this.risingDelay === undefined) this.risingDelay = ch.rising.start;
      this.risingDelay -= dt;
      if (this.risingDelay < 0) { this.darkLevel += ch.rising.speed * dt; this.rising.setLevel(this.darkLevel); }
    }
    if (this.state !== 'play') return;

    // the dream slowly fades on its own; the dark floor eats it fast
    let drain = ch.drain;
    const onFloor = P.grounded && P.ground && P.ground.kind === 'floor';
    P.inDark = false;
    if (this.darkFloor && (onFloor || P.pos.y < 0.5) && !inSafe(this.safe, P.pos.x, P.pos.z)) { P.inDark = true; drain += COMFORT.darkDrain; }
    if (this.rising && P.pos.y < this.darkLevel + 0.2) { P.inDark = true; drain += COMFORT.risingDrain; }
    this.addComfort(-drain * dt);
    if (this.state !== 'play') return;

    // --- input relative to camera
    const mv = inp.move();
    const fwd = V(-Math.sin(this.cam.yaw), 0, -Math.cos(this.cam.yaw));
    const right = V(Math.cos(this.cam.yaw), 0, -Math.sin(this.cam.yaw));
    const wish = fwd.multiplyScalar(mv.y).add(right.multiplyScalar(mv.x));
    const wishLen = Math.min(1, wish.length());
    const E = this.edge;
    P.coyote = P.grounded ? CFG.coyote : P.coyote - dt;
    P.buffer = E.jump ? CFG.jumpBuffer : P.buffer - dt;
    P.dashCD -= dt; P.invuln -= dt;

    if (E.flop && !P.grounded && this.ab.flop && !P.pound && P.dashT <= 0) {
      P.pound = 1; P.poundHang = CFG.poundHang; P.vel.set(0, 0, 0); this.rig.spin = Math.PI * 2; Audio.dash();
    }
    if (E.dash && this.ab.dash && P.dashCD <= 0 && !P.dashUsed && !P.pound) {
      const dir = wishLen > 0.2 ? wish.clone().normalize() : V(Math.sin(P.yaw), 0, Math.cos(P.yaw));
      P.dashDir.copy(dir); P.dashT = CFG.dashTime; P.dashCD = CFG.dashCooldown;
      if (!P.grounded) P.dashUsed = true;
      this.rig.spin = Math.PI * 2; Audio.dash(); this.cam.fovKick = 8;
    }
    if (P.dashT > 0) {
      P.dashT -= dt;
      P.vel.x = P.dashDir.x * CFG.dashSpeed; P.vel.z = P.dashDir.z * CFG.dashSpeed; P.vel.y = 0;
      if (Math.random() < 0.7) this.sparks.emit({ p: P.pos.clone().add(V(0, 0.45, 0)), v: V(), life: 0.35, size: 0.4, color: new THREE.Color(0xbfe0ff), alpha: 0.6 });
      if (P.dashT <= 0) { P.vel.x *= 0.45; P.vel.z *= 0.45; }
    } else if (P.pound) {
      P.vel.x = 0; P.vel.z = 0;
      if (P.poundHang > 0) { P.poundHang -= dt; P.vel.y = 0; } else P.vel.y = -CFG.poundSpeed;
    } else {
      const target = wish.clone().setLength(wishLen * CFG.run);
      const acc = P.grounded ? CFG.groundAccel : CFG.airAccel;
      const hv = V(P.vel.x, 0, P.vel.z);
      const diff = target.clone().sub(hv);
      if (diff.length() > acc * dt) diff.setLength(acc * dt);
      hv.add(diff);
      if (P.grounded && wishLen < 0.05) hv.multiplyScalar(Math.max(0, 1 - CFG.groundFriction * dt));
      P.vel.x = hv.x; P.vel.z = hv.z;
      if (P.buffer > 0 && P.coyote > 0) {
        P.vel.y = CFG.jump; P.grounded = false; P.coyote = 0; P.buffer = 0; P.jumpHeld = true; P.canDouble = !!this.ab.doubleJump;
        Audio.jump(); this.rig.impulse(4);
        this.puffs.burst(P.pos.clone(), 6, { color: new THREE.Color(0xd8dcff), speed: 2.5, life: 0.5, size: 0.3, alpha: 0.4 });
      } else if (P.buffer > 0 && !P.grounded && P.canDouble) {
        P.vel.y = CFG.doubleJump; P.canDouble = false; P.buffer = 0; P.jumpHeld = true;
        Audio.doubleJump(); this.rig.impulse(5); this.rig.spin = Math.PI * 2;
        this.sparks.burst(P.pos.clone().add(V(0, 0.2, 0)), 14, { color: new THREE.Color(0xffe2a8), speed: 4, life: 0.5, size: 0.25 });
      }
      if (P.jumpHeld && !inp.jumpHeld()) { if (P.vel.y > 0) P.vel.y *= CFG.jumpCut; P.jumpHeld = false; }
      if (P.vel.y <= 0) P.jumpHeld = false;
      P.vel.y -= CFG.gravity * dt;
      if (P.vel.y < -CFG.maxFall) P.vel.y = -CFG.maxFall;
      P.glide = false;
      if (this.ab.glide && !P.grounded && P.vel.y < 0 && inp.jumpHeld() && !P.jumpHeld) {
        if (P.vel.y < -CFG.glideFall) P.vel.y += (-CFG.glideFall - P.vel.y) * Math.min(1, dt * 14);
        P.glide = true;
      }
    }

    // --- move & collide
    const wasGrounded = P.grounded, fallSpeed = -P.vel.y;
    const active = this.solids.filter((s) => s.active);
    for (const axis of ['x', 'z']) {
      const test = P.pos.clone(); test[axis] += P.vel[axis] * dt;
      for (const s of active) {
        if (!this.overlap(test.x, test.y, test.z, s) || this.overlap(P.pos.x, P.pos.y, P.pos.z, s)) continue;
        const rise = s.max.y - test.y;
        if (P.grounded && rise > 0 && rise <= 0.42 && !active.some((o) => o !== s && this.overlap(test.x, s.max.y + EPS, test.z, o))) { test.y = s.max.y + EPS; continue; }
        test[axis] = P.vel[axis] > 0 ? s.min[axis] - CFG.radius - EPS * 2 : s.max[axis] + CFG.radius + EPS * 2;
        P.vel[axis] = 0;
        if (P.dashT > 0) { P.dashT = 0; this.rig.impulse(-3); }
      }
      P.pos.copy(test);
    }
    let ny = P.pos.y + P.vel.y * dt, landed = null;
    P.grounded = false;
    for (const s of active) {
      if (!this.overlap(P.pos.x, ny, P.pos.z, s) || this.overlap(P.pos.x, P.pos.y, P.pos.z, s)) continue;
      if (P.vel.y <= 0) { ny = s.max.y; if (!landed || s.max.y > landed.max.y) landed = s; }
      else { ny = s.min.y - CFG.height - EPS; P.vel.y = 0; }
    }
    P.pos.y = ny;
    if (landed) {
      P.grounded = true; P.ground = landed; P.canDouble = false; P.dashUsed = false;
      const sup = !!P.pound;
      if (!wasGrounded) this.onLand(fallSpeed, landed);
      if (landed.type === 'bounce') {
        P.vel.y = sup ? CFG.superBounce : (inp.jumpHeld() ? CFG.bounce : CFG.bounce * 0.82);
        P.grounded = false; P.pound = 0; P.canDouble = !!this.ab.doubleJump; P.jumpHeld = false;
        Audio.bounce(); if (sup) Audio.star();
        this.rig.impulse(sup ? 9 : 6);
        this.sparks.burst(P.pos.clone(), sup ? 26 : 10, { color: new THREE.Color(sup ? 0xffe066 : 0xfff3b0), speed: sup ? 8 : 4, life: 0.6, size: 0.25 });
      } else P.vel.y = 0;
    }
    // soft surfaces: stand on whatever is really there
    for (const f of this.fields) {
      const h = f.h(P.pos.x, P.pos.z);
      if (h === null || P.pos.y >= h || P.pos.y < h - 0.9 || P.vel.y > 0.5) continue;
      if (!wasGrounded && !P.grounded) this.onLand(fallSpeed);
      P.pos.y = h; P.vel.y = 0;
      P.grounded = true; P.ground = SOFT_GROUND; P.canDouble = false; P.dashUsed = false; P.pound = 0;
    }
    // push out if a mover shoved into us
    for (const s of active) {
      if (!this.overlap(P.pos.x, P.pos.y, P.pos.z, s)) continue;
      const pens = [['x', s.max.x - (P.pos.x - CFG.radius), 1], ['x', (P.pos.x + CFG.radius) - s.min.x, -1], ['z', s.max.z - (P.pos.z - CFG.radius), 1], ['z', (P.pos.z + CFG.radius) - s.min.z, -1], ['y', s.max.y - P.pos.y, 1], ['y', (P.pos.y + CFG.height) - s.min.y, -1]].sort((a, b) => a[1] - b[1]);
      const [ax, d, sign] = pens[0];
      P.pos[ax] += (d + EPS * 2) * sign;
      if (ax === 'y' && sign > 0) { P.grounded = true; P.ground = s; P.vel.y = Math.max(0, P.vel.y); }
    }
    const hs = Math.hypot(P.vel.x, P.vel.z);
    if (hs > 0.5 && !P.pound) P.yaw += angDiff(P.yaw, Math.atan2(P.vel.x, P.vel.z)) * Math.min(1, dt * 14);
    this.interact(dt);
    if (P.pos.y < -6) { this.addComfort(-30); if (this.state === 'play') this.nightmare(); }
  }

  onLand(fallSpeed) {
    const P = this.p;
    this.rig.impulse(-Math.min(8, fallSpeed * 0.35));
    if (P.pound) {
      P.pound = 0; Audio.pound(); this.cam.shake = 0.3;
      this.puffs.burst(P.pos.clone().add(V(0, 0.1, 0)), 24, { color: new THREE.Color(0xe8e4ff), speed: 8, life: 0.6, size: 0.4, alpha: 0.55, drag: 3 });
      for (const e of this.enemies) if (e.alive && e.type === 'shadow' && e.pos.distanceTo(P.pos) < 3.2) this.defeat(e);
    } else if (fallSpeed > 6) {
      Audio.land();
      this.puffs.burst(P.pos.clone().add(V(0, 0.05, 0)), 8, { color: new THREE.Color(0xd8dcff), speed: 3, life: 0.45, size: 0.3, alpha: 0.35, drag: 4 });
    }
  }

  defeat(e) {
    if (!e.alive) return;
    e.alive = false; e.deadT = 0;
    this.stats.nightmares++;
    Audio.stomp();
    const at = e.pos.clone().add(V(0, e.type === 'knot' ? 0 : 0.8, 0));
    this.sparks.burst(at, e.type === 'knot' ? 60 : 26, { color: new THREE.Color(0xffe2a8), speed: e.type === 'knot' ? 9 : 6, life: 0.9, size: 0.35 });
    this.puffs.burst(at, 20, { color: new THREE.Color(0x2a1340), speed: 5, life: 1, size: 0.6, alpha: 0.7 });
    if (e.type === 'knot') {
      this.knotsLeft--;
      this.addComfort(COMFORT.knot);
      this.hooks.pop(this.knotsLeft ? `Nightmare broken! ${this.knotsLeft} left` : 'Leo is safe… go to him!');
    } else { this.addComfort(COMFORT.stomp); this.hooks.pop('Poof!'); }
  }

  interact(dt) {
    const P = this.p, ch = this.ch;
    const c = P.pos.clone().add(V(0, CFG.height / 2, 0));
    for (const f of this.fish) {
      if (f.taken || f.pos.distanceToSquared(c) > 0.95) continue;
      f.taken = true; f.out = 0.001; this.stats.fish++;
      this.addComfort(COMFORT.fish);
      Audio.collect(this.stats.fish % 12);
      this.sparks.burst(f.pos, 8, { color: new THREE.Color(0xffc56b), speed: 3, life: 0.45, size: 0.22 });
    }
    for (const st of this.stars) {
      if (st.taken || st.pos.distanceToSquared(c) > 1.3) continue;
      st.taken = true; st.out = 0.001; this.runStars[st.i] = true; this.stats.starfish++;
      this.addComfort(COMFORT.starfish);
      Audio.star();
      this.sparks.burst(st.pos, 40, { color: new THREE.Color(0xffd84a), speed: 7, life: 1, size: 0.35 });
      this.hooks.star(st.i);
      const n = this.stars.filter((x) => x.taken || this.savedStars[x.i]).length;
      this.hooks.toast(this.savedStars[st.i] ? 'Starfish again!' : 'Starfish found!', `${n} of ${this.stars.length} in this chapter`);
    }
    // dust bunnies: land on one for a giggly bounce; bump one and it hops aside. Nobody gets hurt.
    for (const b of this.bunnies) {
      b.cool -= dt;
      const dx = P.pos.x - b.pos.x, dz = P.pos.z - b.pos.z, d = Math.hypot(dx, dz);
      if (d > 1.0 || P.pos.y > b.pos.y + 1.25 || P.pos.y + CFG.height < b.pos.y) continue;
      if (P.vel.y < 0 && P.pos.y > b.pos.y + 0.5) {
        P.vel.y = this.input.jumpHeld() ? CFG.bounce : CFG.bounce * 0.85; P.pos.y = b.pos.y + 1.25;
        P.grounded = false; P.pound = 0; P.canDouble = !!this.ab.doubleJump; P.dashUsed = false;
        b.squish = 1; this.rig.impulse(6);
        Audio.bounce(); Audio.tone(880, { type: 'sine', dur: 0.12, vol: 0.12, delay: 0.05 }); Audio.tone(1175, { type: 'sine', dur: 0.14, vol: 0.1, delay: 0.12 });
        this.sparks.burst(b.pos.clone().add(V(0, 1.1, 0)), 12, { color: new THREE.Color(0xff9fbf), speed: 3.5, life: 0.7, size: 0.28 });
        if (b.cool <= 0) { b.cool = 1.2; this.stats.bunnyHops++; this.addComfort(COMFORT.bunny); this.hooks.pop(['Boing! 💕', 'Hee hee!', 'Wheee!'][this.stats.bunnyHops % 3]); }
      } else if (d > 0.01) {
        b.vel.set((-dx / d) * 4, 3.5, (-dz / d) * 4); // giggle and hop out of the way
        if (b.cool <= 0) { b.cool = 1; Audio.tone(990, { type: 'sine', dur: 0.1, vol: 0.08 }); }
      }
    }
    for (const lamp of this.lamps) {
      if (lamp.on && lamp.def.on) continue;
      const lp = lamp.group.position;
      if (Math.hypot(lp.x - P.pos.x, lp.z - P.pos.z) < 2.4 && Math.abs(lp.y - P.pos.y) < 2.2 && !lamp.lit) {
        lamp.lit = true; lamp.setOn(true);
        if (lamp.def.safe) { this.safe.push(lamp.def.safe); if (this.darkFloor) this.darkFloor.setSafe(this.safe); }
        this.respawn.pos.set(lp.x + (lp.x > 0 ? -1.2 : 1.2), lp.y, lp.z);
        this.comfort = Math.max(this.comfort, COMFORT.lampMin);
        Audio.checkpoint();
        this.sparks.burst(lp.clone().add(V(0, 1.2, 0)), 30, { color: new THREE.Color(0xffd27a), speed: 4, life: 0.9, size: 0.3 });
        this.hooks.toast('Light on!', 'The dark can’t follow you here');
        this.hudDirty = true;
      }
    }
    for (const hz of this.hazards) {
      const r = CFG.radius;
      if (P.pos.x + r > hz.min.x && P.pos.x - r < hz.max.x && P.pos.z + r > hz.min.z && P.pos.z - r < hz.max.z && P.pos.y < hz.max.y && P.invuln <= 0) {
        this.hurt(V((hz.min.x + hz.max.x) / 2, 0, (hz.min.z + hz.max.z) / 2), COMFORT.lego, 'Ouch! Toy bricks!');
        P.vel.y = 9;
      }
    }
    // shadows: patrol the dark floor, chase you if you're down there with them
    for (const e of this.enemies) {
      if (!e.alive) continue;
      if (e.type === 'shadow') {
        e.hitCool -= dt;
        const playerLow = P.pos.y < 1.6;
        const near = Math.hypot(P.pos.x - e.pos.x, P.pos.z - e.pos.z);
        e.chase = playerLow && near < 6.5 && !inSafe(this.safe, P.pos.x, P.pos.z);
        let tx, tz;
        if (e.chase) { tx = P.pos.x; tz = P.pos.z; }
        else {
          const path = e.e.path.map((p) => [p[0], p[2]]);
          e.dist += (e.e.speed || 1.4) * dt;
          if (path.length === 2) { const L = Math.hypot(path[1][0] - path[0][0], path[1][1] - path[0][1]); const k = Math.abs(((e.dist / L) % 2) - 1); [tx, tz] = [path[1][0] + (path[0][0] - path[1][0]) * k, path[1][1] + (path[0][1] - path[1][1]) * k]; }
          else [tx, tz] = pathPoint(path, e.dist);
        }
        const dx = tx - e.pos.x, dz = tz - e.pos.z, dl = Math.hypot(dx, dz);
        const sp = (e.chase ? 2.6 : 1.4) * (1 + (1 - this.comfort / 100) * 0.7) * dt;
        if (dl > 0.01) {
          const nx = e.pos.x + (dx / dl) * Math.min(sp, dl), nz = e.pos.z + (dz / dl) * Math.min(sp, dl);
          if (!inSafe(this.safe, nx, nz)) { e.pos.x = nx; e.pos.z = nz; } // light holds them back
        }
        // contact
        const hd = Math.hypot(P.pos.x - e.pos.x, P.pos.z - e.pos.z);
        if (hd < 1.0 && P.pos.y < 1.9) {
          if (P.pound || (P.vel.y < 0 && P.pos.y > 0.9)) { this.defeat(e); P.vel.y = CFG.stompBounce; P.canDouble = !!this.ab.doubleJump; continue; }
          if (P.dashT > 0) { this.defeat(e); continue; }
          if (e.hitCool <= 0) { e.hitCool = 1; this.hurt(e.pos, COMFORT.hit, 'A nightmare grabbed you!'); }
        }
      } else if (e.type === 'knot') {
        const t = this.clock + e.ph;
        e.pos.set(e.base.x + Math.sin(t * 0.7) * 1.2, e.base.y + Math.sin(t * 1.1) * 0.5, e.base.z + Math.cos(t * 0.6) * 1.0);
        const d = e.pos.distanceTo(c), rr = (e.e.r || 1) + 0.6;
        if (d < rr) {
          if (P.pound || (P.vel.y < -0.5 && c.y > e.pos.y + 0.2) || P.dashT > 0) { this.defeat(e); P.vel.y = CFG.stompBounce * 1.1; P.pound = 0; P.canDouble = !!this.ab.doubleJump; P.dashUsed = false; }
          else this.hurt(e.pos, 12, 'The nightmare pushes you back!');
        }
      }
    }
    // stairs: rolling balls and a grumpy cat
    if (this.ballSpawner) {
      const bs = this.ballSpawner;
      bs.t -= dt;
      if (bs.t <= 0 && this.balls.length < 4) {
        bs.t = bs.e.every;
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.55, 24, 16), new THREE.MeshPhysicalMaterial({ color: [0xc8e34b, 0xe5484d, 0x3f6aa3][Math.floor(Math.random() * 3)], roughness: 0.6, sheen: 0.6 }));
        mesh.castShadow = true; this.scene.add(mesh);
        // lobbed out of the basket, up over the gate
        this.balls.push({ mesh, pos: V(bs.sx + (Math.random() - 0.5) * 0.8, bs.sy + 0.6, bs.sz + 0.5), vz: 4.4, vy: 15 });
        bs.throwT = 0.5;
      }
      // the nightmare bobs about and lunges when it throws
      bs.throwT = Math.max(0, bs.throwT - dt);
      bs.imp.update(dt, this.clock);
      bs.imp.group.position.y = Math.sin(this.clock * 3) * 0.08 + Math.sin(bs.throwT * Math.PI * 2) * 0.4;
      bs.imp.group.rotation.x = -Math.sin(bs.throwT * Math.PI * 2) * 0.5;
      bs.imp.group.lookAt(bs.src.position.x + 0.0, bs.src.position.y, bs.src.position.z + 6);
      for (let i = this.balls.length - 1; i >= 0; i--) {
        const b = this.balls[i];
        b.vz = Math.min(7, b.vz + dt * (b.vy > 0 ? 0 : 3)); b.vy -= CFG.gravity * dt;
        b.pos.z += b.vz * dt; b.pos.y += b.vy * dt;
        // ground under the ball = top of the step it's over
        let gy = 0;
        for (const s of this.solids) if ((s.tag === 'step' || s.tag === 'landing' || s.tag === 'floor') && b.pos.x > s.min.x && b.pos.x < s.max.x && b.pos.z > s.min.z && b.pos.z < s.max.z) gy = Math.max(gy, s.max.y);
        if (b.pos.y < gy + 0.55) { b.pos.y = gy + 0.55; b.vy = Math.abs(b.vy) * 0.45 + 2.2; }
        b.mesh.position.copy(b.pos); b.mesh.rotation.x += b.vz * dt / 0.55;
        if (b.pos.distanceTo(c) < 1.05 && P.invuln <= 0) { this.hurt(b.pos, COMFORT.ball, 'Bonk!'); P.vel.z = 6; }
        if (b.pos.z > 9) { this.scene.remove(b.mesh); this.balls.splice(i, 1); }
      }
    }
    for (const cat of this.cats) {
      cat.cool -= dt;
      const cp = cat.c.group.position;
      if (cat.cool <= 0 && Math.hypot(P.pos.x - cp.x, P.pos.z - cp.z) < 2.6 && Math.abs(P.pos.y - cp.y) < 1.4) {
        cat.cool = 1.6; cat.c.swipe = 1; Audio.hurt();
        this.hurt(cp, COMFORT.cat, 'Hiss! The cat swats you!');
      }
    }
    // the goal
    const g = ch.goal;
    if (Math.hypot(g.x - P.pos.x, g.z - P.pos.z) < g.r && Math.abs(g.y - P.pos.y) < 2.0) {
      if (g.needsKnots && this.knotsLeft > 0) { if (!this.knotHintT || this.clock - this.knotHintT > 3) { this.knotHintT = this.clock; this.hooks.toast('Break the nightmares first!', 'Jump on them, or belly flop'); } }
      else this.win();
    }
  }

  win() {
    if (this.state !== 'play') return;
    this.state = 'won';
    this.hooks.hint(null);
    Audio.win();
    this.hooks.complete(this.result());
  }
  result() { return { time: this.stats.time, fish: this.stats.fish, fishTotal: this.ch.fish.length, nightmares: this.stats.nightmares, scares: this.stats.scares, stars: this.runStars.slice(), comfort: this.comfort }; }

  // ---------------------------------------------------------------- visuals --
  visuals(dt) {
    const t = this.clock, P = this.p;
    const c01 = this.comfort / 100;
    updateShadowTime(t);
    for (const e of this.enemies) {
      if (!e.alive) {
        e.deadT += dt;
        const k = Math.max(0, 1 - e.deadT * 2.5);
        e.s.group.scale.setScalar(Math.max(0.001, k)); if (k <= 0) e.s.group.visible = false;
        continue;
      }
      e.s.update(dt, t);
      if (e.type === 'shadow') {
        e.s.group.position.set(e.pos.x, Math.sin(t * 2 + e.dist) * 0.08, e.pos.z);
        const look = e.chase ? Math.atan2(P.pos.x - e.pos.x, P.pos.z - e.pos.z) : e.s.group.rotation.y;
        e.s.group.rotation.y += angDiff(e.s.group.rotation.y, look) * Math.min(1, dt * 5);
        if (Math.random() < 0.2) this.puffs.emit({ p: e.pos.clone().add(V((Math.random() - 0.5) * 1.2, 0.3, (Math.random() - 0.5) * 1.2)), v: V(0, 0.8, 0), life: 0.9, size: 0.5, color: new THREE.Color(0x14081f), alpha: 0.5, drag: 1 });
      } else e.s.group.position.copy(e.pos);
    }
    for (const f of this.fish) {
      if (f.out) { f.out += dt; const k = Math.max(0, 1 - f.out * 4); f.m.position.lerp(P.pos.clone().add(V(0, 0.6, 0)), Math.min(1, dt * 14)); f.m.scale.setScalar(Math.max(0.001, k)); if (k <= 0) f.m.visible = false; continue; }
      f.m.rotation.y = t * 2.5 + f.ph;
      f.m.position.y = f.pos.y + Math.sin(t * 3 + f.ph) * 0.12;
    }
    for (const st of this.stars) {
      if (st.out) { st.out += dt; st.m.scale.setScalar(1 + st.out * 2); st.m.position.y += dt * 3; st.m.rotation.y += dt * 20; if (st.out > 0.5) st.m.visible = false; continue; }
      st.m.rotation.y = t * 1.6; st.m.position.y = st.pos.y + Math.sin(t * 2) * 0.15;
      if (Math.random() < 0.08) this.sparks.emit({ p: st.pos.clone().add(V(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)), v: V(0, 0.6, 0), life: 0.9, size: 0.18, color: new THREE.Color(0xffe38a) });
    }
    for (const b of this.bunnies) {
      b.t += dt;
      // wander around home, hop when moving, never wander into the furniture
      if (b.vel.lengthSq() > 0.01) { b.pos.addScaledVector(b.vel, dt); b.vel.y -= 14 * dt; if (b.pos.y < b.home.y) { b.pos.y = b.home.y; b.vel.set(0, 0, 0); } }
      else {
        if (b.wander.distanceTo(b.pos) < 0.1 || Math.random() < 0.003) { const a = Math.random() * Math.PI * 2, r = Math.random() * 1.4; b.wander.set(b.home.x + Math.cos(a) * r, b.home.y, b.home.z + Math.sin(a) * r); }
        const w = b.wander.clone().sub(b.pos).setY(0);
        if (w.length() > 0.05) { b.pos.addScaledVector(w.normalize(), dt * 0.9); b.m.rotation.y += angDiff(b.m.rotation.y, Math.atan2(w.x, w.z)) * Math.min(1, dt * 5); }
      }
      const off = b.pos.clone().sub(b.home).setY(0);
      if (off.length() > 2.2) b.pos.copy(b.home).add(off.setLength(2.2)).setY(b.pos.y);
      for (const s_ of this.solids) if (s_.kind !== 'floor' && s_.active && b.pos.x > s_.min.x - 0.4 && b.pos.x < s_.max.x + 0.4 && b.pos.z > s_.min.z - 0.4 && b.pos.z < s_.max.z + 0.4 && s_.max.y > b.pos.y + 0.2 && s_.min.y < b.pos.y + 1) { b.pos.x = b.home.x; b.pos.z = b.home.z; }
      b.squish = Math.max(0, b.squish - dt * 2.5);
      const inner = b.m.userData.inner;
      const hop = Math.abs(Math.sin(b.t * 5 + b.ph));
      inner.position.y = (b.vel.lengthSq() > 0.01 ? 0 : hop * 0.18);
      const sq = Math.sin(b.squish * Math.PI * 2) * b.squish * 0.35;
      inner.scale.set(1 + sq * 0.6, 1 - sq, 1 + sq * 0.6);
      b.m.position.copy(b.pos);
      if (b.cool > 0.6 && Math.random() < 0.15) this.sparks.emit({ p: b.pos.clone().add(V((Math.random() - 0.5) * 0.6, 1.3, (Math.random() - 0.5) * 0.6)), v: V(0, 1, 0), life: 0.8, size: 0.2, color: new THREE.Color(0xff9fbf) });
    }
    for (const l of this.lamps) l.update(t);
    for (const cat of this.cats) cat.c.update(dt);
    if (this.dog && !(this.cine && this.cine.ownsDog)) {
      this.dog.update(dt, 'sleep');
      if (Math.random() < 0.02) this.zzz.emit({ p: this.dog.head.getWorldPosition(V()).add(V(0, 0.8, 0)), v: V(0.2, 0.9, 0), life: 2.2, size: 0.35, color: new THREE.Color(0xcfd8ff), drag: 0.1 });
      this.zzz.update(dt);
    }
    if (this.leo && !this.cine) this.leo.update(dt, {});
    if (this.bubble) {
      this.bubble.update(dt, t, this.cine && this.cine.dream !== undefined ? this.cine.dream : c01);
      // in play, don't let Leo's dream cloud get between the camera and Blåhaj
      if (!this.cine) {
        const c = this.bubble.group.position, cam = this.camera.position, d = P.pos.clone().add(V(0, 0.5, 0)).sub(cam);
        const L = d.length(); d.divideScalar(L);
        const tc = Math.max(0, Math.min(L, c.clone().sub(cam).dot(d)));
        this.bubble.group.visible = cam.clone().addScaledVector(d, tc).distanceTo(c) > 3.4;
      } else this.bubble.group.visible = true;
    }
    this.goalMarker.visible = !this.cine;
    const goalReady = !(this.ch.goal.needsKnots && this.knotsLeft > 0);
    this.goalMarker.material.opacity = goalReady ? 0.13 + Math.sin(t * 2) * 0.04 : 0.03;
    if (goalReady && !this.cine && Math.random() < 0.3) { const g = this.ch.goal; this.sparks.emit({ p: V(g.x + (Math.random() - 0.5) * g.r, g.y + 0.2, g.z + (Math.random() - 0.5) * g.r), v: V(0, 1.2, 0), life: 1.6, size: 0.16, color: new THREE.Color(0xffe2a8), drag: 0.2, alpha: 0.8 }); }

    // player
    this.rig.root.position.copy(P.pos);
    this.rig.root.rotation.y = P.yaw;
    if (!this.cine || !this.cine.ownsPlayer) {
      const sp = Math.min(1, Math.hypot(P.vel.x, P.vel.z) / CFG.run);
      this.rig.update(dt, { speed: sp, grounded: P.grounded, vx: P.vel.x, vy: P.vel.y, vz: P.vel.z, pound: !!P.pound, glide: P.glide });
      this.rig.root.visible = !(P.invuln > 0 && this.state === 'play' && Math.floor(t * 20) % 2 === 0);
    }
    let groundY = -2;
    for (const s of this.solids) if (s.active && P.pos.x > s.min.x && P.pos.x < s.max.x && P.pos.z > s.min.z && P.pos.z < s.max.z && s.max.y <= P.pos.y + 0.05) groundY = Math.max(groundY, s.max.y);
    const soft = this.softHeight(P.pos.x, P.pos.z);
    if (soft !== null && soft <= P.pos.y + 0.05) groundY = Math.max(groundY, soft);
    this.rig.blob.position.y = groundY - P.pos.y + 0.03;
    const hgt = P.pos.y - groundY;
    this.rig.blob.material.opacity = Math.max(0, 0.4 - hgt * 0.05);
    this.fill.position.copy(P.pos).add(V(0, 2.2, 0)).addScaledVector(V(Math.sin(this.cam.yaw), 0, Math.cos(this.cam.yaw)), 1.6);
    if (P.inDark && Math.random() < 0.5) this.puffs.emit({ p: P.pos.clone().add(V((Math.random() - 0.5) * 1.6, 0.05, (Math.random() - 0.5) * 1.6)), v: V(0, 1.2, 0), life: 0.8, size: 0.4, color: new THREE.Color(0x150924), alpha: 0.7, drag: 1 });
    if (P.glide && Math.random() < 0.5) this.sparks.emit({ p: P.pos.clone().add(V((Math.random() - 0.5) * 1.4, 0.3, (Math.random() - 0.5) * 1.4)), v: V(0, -0.5, 0), life: 0.6, size: 0.15, color: new THREE.Color(0xdff1ff), alpha: 0.6 });

    this.sparks.update(dt); this.puffs.update(dt);
    this.roomFx.update(t, c01);
    if (this.darkFloor) this.darkFloor.update(t, c01);
    if (this.rising) this.rising.update(t, c01);
    if (this.R.grade) this.R.grade.uniforms.nightmare.value += ((1 - c01) - this.R.grade.uniforms.nightmare.value) * Math.min(1, dt * 2);
    if (!this.cine || !this.cine.ownsCamera) this.updateCamera(dt);
    if (this.hudDirty) { this.hudDirty = false; this.hooks.hud(); }
  }

  // camera ray vs boxes (slab test); returns nearest hit distance
  rayHit(o, d, maxD) {
    let best = maxD;
    for (const s of this.solids) {
      if (!s.active || s.mover) continue;
      if ((s.max.x - s.min.x) < 0.5 && (s.max.z - s.min.z) < 0.5) continue; // thin legs/posts don't block the view
      let t0 = 0, t1 = best;
      let ok = true;
      for (const ax of ['x', 'y', 'z']) {
        const inv = 1 / (d[ax] || 1e-9);
        let a = (s.min[ax] - 0.25 - o[ax]) * inv, b = (s.max[ax] + 0.25 - o[ax]) * inv;
        if (a > b) [a, b] = [b, a];
        t0 = Math.max(t0, a); t1 = Math.min(t1, b);
        if (t0 > t1) { ok = false; break; }
      }
      if (ok && t0 > 0.05 && t0 < best) best = t0;
    }
    return best;
  }

  updateCamera(dt, snap = false) {
    const C = this.cam, P = this.p, inp = this.input;
    const manual = inp.camDX !== 0 || inp.camDY !== 0 || inp.camTurn() !== 0;
    C.yaw -= inp.camDX * 0.005 + inp.camTurn() * dt * 2.4;
    C.pitch = THREE.MathUtils.clamp(C.pitch + inp.camDY * 0.003, -0.05, 1.2);
    C.idle = manual ? 0 : C.idle + dt;
    const hs = Math.hypot(P.vel.x, P.vel.z);
    if (C.idle > 1.2 && hs > 2 && this.state === 'play') {
      const behind = Math.atan2(P.vel.x, P.vel.z) + Math.PI;
      const d = angDiff(C.yaw, behind);
      if (Math.abs(d) < 2.0) C.yaw += d * Math.min(1, dt * 0.8) * (hs / CFG.run);
    }
    const ty = P.grounded || P.pos.y < C.target.y - 1.5 ? P.pos.y : C.target.y + (P.pos.y - C.target.y) * 0.3;
    const goal = V(P.pos.x, ty, P.pos.z);
    if (snap) C.target.copy(goal);
    else {
      C.target.x += (goal.x - C.target.x) * Math.min(1, dt * 10);
      C.target.z += (goal.z - C.target.z) * Math.min(1, dt * 10);
      C.target.y += (goal.y - C.target.y) * Math.min(1, dt * (P.grounded ? 6 : 3));
    }
    const look = C.target.clone().add(V(0, 1.0, 0));
    // when something solid is right behind Blåhaj, swing the camera up and look down instead
    const probe = V(Math.sin(C.yaw) * Math.cos(C.pitch), Math.sin(C.pitch), Math.cos(C.yaw) * Math.cos(C.pitch));
    const blocked = this.rayHit(look, probe, C.dist) < C.dist * 0.6;
    C.lift = (C.lift || 0) + ((blocked ? 0.75 : 0) - (C.lift || 0)) * Math.min(1, dt * (snap ? 60 : 2.5));
    const pitch = Math.min(1.25, C.pitch + C.lift);
    const dir = V(Math.sin(C.yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(C.yaw) * Math.cos(pitch));
    const hit = this.rayHit(look, dir, C.dist);
    const want = Math.max(2.4, hit - 0.3);
    C.cur = snap || C.cur === undefined ? want : (want < C.cur ? want : C.cur + (want - C.cur) * Math.min(1, dt * 3));
    this.camera.position.copy(look).addScaledVector(dir, C.cur);
    // never leave the room (e.g. out through a window)
    const r = this.ch.room;
    this.camera.position.x = THREE.MathUtils.clamp(this.camera.position.x, r.x0 + 0.35, r.x1 - 0.35);
    this.camera.position.z = THREE.MathUtils.clamp(this.camera.position.z, r.z0 + 0.35, r.z1 - 0.35);
    this.camera.position.y = THREE.MathUtils.clamp(this.camera.position.y, 0.4, r.h - 0.35);
    if (C.shake) { C.shake = Math.max(0, C.shake - dt); this.camera.position.add(V(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(C.shake * 0.5)); }
    this.camera.lookAt(look);
    C.fovKick = Math.max(0, (C.fovKick || 0) - dt * 30);
    const fov = 58 + C.fovKick;
    if (Math.abs(this.camera.fov - fov) > 0.01) { this.camera.fov = fov; this.camera.updateProjectionMatrix(); }
  }

  render() { this.R.render(this.clock); }
}
