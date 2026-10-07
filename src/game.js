// Gameplay: physics, player abilities, entities, camera. One Game per level.
import * as THREE from 'three';
import { CFG } from './config.js';
import { Audio } from './audio.js';
import * as Art from './art.js';
import * as World from './world.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const EPS = 0.001;
const angDiff = (a, b) => { let d = b - a; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; };

export class Game {
  constructor(renderer, input, level, levelIndex, abilities, savedStars, hooks) {
    this.R = renderer; this.input = input; this.L = level; this.index = levelIndex;
    this.ab = abilities; this.hooks = hooks;
    this.savedStars = savedStars.slice();
    this.time = 0; this.clock = 0; this.state = 'play';
    this.stats = { fish: 0, bops: 0, falls: 0, time: 0 };
    this.build();
  }

  // ------------------------------------------------------------- build --
  build() {
    const L = this.L;
    const q = this.R.quality;
    const scene = (this.scene = new THREE.Scene());
    this.camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 900);

    // sky, fog, environment lighting
    this.sky = World.createSky(L);
    scene.add(this.sky.mesh);
    scene.fog = new THREE.Fog(L.fog, 70, (L.fogFar || 150) * 1.4);
    scene.environment = World.createEnvironment(this.R.r, this.sky, L);
    scene.environmentIntensity = L.night ? 0.75 : 0.6;

    const hemi = new THREE.HemisphereLight(this.sky.top, new THREE.Color(L.floor.color), L.night ? 0.55 : 0.35);
    scene.add(hemi);
    const sun = (this.sun = new THREE.DirectionalLight(L.night ? 0xaabfff : 0xfff1dc, L.night ? 2.6 : 3.6));
    sun.castShadow = true;
    const ss = this.R.shadowSize();
    sun.shadow.mapSize.set(ss, ss);
    const sc = sun.shadow.camera;
    sc.left = -24; sc.right = 24; sc.top = 24; sc.bottom = -24; sc.near = 1; sc.far = 140;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.03;
    sun.shadow.radius = 4;
    scene.add(sun, sun.target);
    // a soft rim light from behind for that "hero" outline
    const rim = new THREE.DirectionalLight(L.night ? 0x9f8fff : 0xffd0e0, L.night ? 0.9 : 0.8);
    rim.position.set(-20, 15, 30);
    scene.add(rim);

    this.floor = World.createFloor(L);
    scene.add(this.floor.group);
    this.ambient = World.createAmbient(L, q);
    scene.add(this.ambient.points);
    scene.add(World.createBokeh(L));
    this.sparks = new World.Particles(700, true);
    this.puffs = new World.Particles(400, false);
    scene.add(this.sparks.points, this.puffs.points);

    // platforms -> solids
    this.solids = [];
    this.platforms = L.platforms.map((p) => {
      const vis = World.createPlatformVisual(p, L, q);
      vis.group.position.set(p.x, p.y, p.z);
      scene.add(vis.group);
      const solid = { min: V(), max: V(), active: true, kind: 'platform', delta: V(), plat: null };
      const pl = { p, vis, solid, base: V(p.x, p.y, p.z), h: vis.collideH, cur: V(p.x, p.y, p.z), crumble: 0, crumbleT: 0, squish: 0 };
      solid.plat = pl;
      this.setSolid(pl);
      this.solids.push(solid);
      return pl;
    });

    // crates
    this.crates = L.crates.map((c) => {
      const mesh = Art.createCrate();
      mesh.position.set(c.x, c.y, c.z);
      mesh.rotation.y = (c.x * 7 + c.z) % 0.3;
      scene.add(mesh);
      const solid = { min: V(c.x - 0.5, c.y, c.z - 0.5), max: V(c.x + 0.5, c.y + 1, c.z + 0.5), active: true, kind: 'crate', delta: V() };
      const cr = { c, mesh, solid, broken: false };
      solid.crate = cr;
      this.solids.push(solid);
      return cr;
    });

    // collectibles
    this.fish = L.fish.map((f, i) => {
      const m = Art.createFish();
      m.position.set(f[0], f[1], f[2]);
      scene.add(m);
      return { m, pos: V(...f), taken: false, ph: i * 0.37, out: 0 };
    });
    const starPts = L.stars.map((s) => ({ pos: V(...s) }));
    this.crates.forEach((cr) => { if (cr.c.item === 'star') { cr.starIndex = starPts.length; starPts.push({ pos: V(cr.c.x, cr.c.y + 1, cr.c.z), hidden: true }); } });
    this.stars = starPts.map((s, i) => {
      const m = Art.createStar();
      m.position.copy(s.pos);
      if (this.savedStars[i]) m.traverse((o) => { if (o.material) { o.material = o.material.clone(); o.material.transparent = true; o.material.opacity = 0.4; } });
      m.visible = !s.hidden;
      scene.add(m);
      return { m, pos: s.pos.clone(), taken: false, hidden: !!s.hidden, i, out: 0 };
    });
    this.runStars = this.stars.map(() => false);
    this.heartsPick = L.hearts.map((h) => {
      const m = Art.createHeart();
      m.position.set(...h);
      scene.add(m);
      return { m, pos: V(...h), taken: false };
    });

    // enemies
    this.enemies = (L.enemies || []).map((e, i) => {
      const m = e.type === 'roomba' ? Art.createRoomba() : Art.createBunny();
      m.position.set(e.x, e.y, e.z);
      scene.add(m);
      return { e, m, type: e.type, start: V(e.x, e.y, e.z), pos: V(e.x, e.y, e.z), t: i * 1.3, dir: 1, alive: true, deadT: 0, stun: 0, chase: false, u: 0 };
    });

    this.hazards = L.hazards.map((h) => {
      const m = Art.createLego(h.w, h.d);
      m.position.set(h.x, h.y, h.z);
      scene.add(m);
      return { h, min: V(h.x - h.w / 2, h.y, h.z - h.d / 2), max: V(h.x + h.w / 2, h.y + 0.55, h.z + h.d / 2) };
    });

    this.checkpoints = L.checkpoints.map((c) => {
      const m = Art.createLamp();
      m.position.set(...c);
      scene.add(m);
      return { m, pos: V(...c), on: false };
    });

    this.signs = L.signs.map((s) => {
      const m = Art.createSign(s.text);
      m.position.set(s.x, s.y, s.z);
      m.rotation.y = s.ry || 0;
      scene.add(m);
      return { m, pos: V(s.x, s.y, s.z), text: s.text };
    });

    this.updrafts = L.updrafts.map((u) => {
      const g = new THREE.Group();
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xbff4ff, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false });
      const rings = [];
      for (let i = 0; i < 6; i++) {
        const r = new THREE.Mesh(new THREE.TorusGeometry(u.r, 0.04, 8, 48), ringMat);
        r.rotation.x = Math.PI / 2;
        g.add(r);
        rings.push(r);
      }
      const base = new THREE.Mesh(new THREE.TorusGeometry(u.r * 0.85, 0.16, 16, 48), new THREE.MeshPhysicalMaterial({ color: 0x9fe8ff, roughness: 0.15, clearcoat: 1, emissive: 0x3fb8ff, emissiveIntensity: 1.6 }));
      base.rotation.x = Math.PI / 2;
      base.position.y = u.y0 - 0.2;
      g.add(base);
      g.position.set(u.x, 0, u.z);
      scene.add(g);
      return { u, g, rings };
    });

    (L.decor || []).forEach((d) => scene.add(World.createDecor(d)));

    this.goal = Art.createGoal();
    this.goal.position.set(...L.goal);
    scene.add(this.goal);

    // player
    this.rig = Art.createBlahaj();
    scene.add(this.rig.root);
    this.p = {
      pos: V(...L.spawn), vel: V(), yaw: Math.PI, grounded: false, ground: null, coyote: 0, buffer: 0,
      canDouble: false, dashT: 0, dashCD: 0, dashUsed: false, dashDir: V(), pound: 0, poundHang: 0,
      invuln: 0, hearts: CFG.maxHearts, jumpHeld: false, glide: false, lastSafe: V(...L.spawn), inUpdraft: false,
    };
    this.respawn = V(...L.spawn);
    this.cam = { yaw: 0, pitch: 0.38, dist: 8.5, target: V(...L.spawn), idle: 0, fov: 55 };
    this.combo = 0; this.comboT = 0;
    this.R.build(scene, this.camera, { bloom: L.night ? 0.6 : 0.35, threshold: L.night ? 0.8 : 1.05, exposure: L.night ? 1.0 : 0.9, warmth: L.night ? -0.01 : 0.03 });
    this.updateCamera(1, true);
  }

  setSolid(pl) {
    const { p, cur, h } = pl;
    pl.solid.min.set(cur.x - p.w / 2, cur.y - h, cur.z - p.d / 2);
    pl.solid.max.set(cur.x + p.w / 2, cur.y, cur.z + p.d / 2);
  }

  dispose() {
    this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    if (this.scene.environment) this.scene.environment.dispose();
  }

  // ------------------------------------------------------------ helpers --
  overlap(x, y, z, s) {
    const r = CFG.radius;
    return x + r > s.min.x + EPS && x - r < s.max.x - EPS && y + CFG.height > s.min.y + EPS && y < s.max.y - EPS && z + r > s.min.z + EPS && z - r < s.max.z - EPS;
  }

  breakCrate(cr) {
    if (cr.broken) return;
    cr.broken = true;
    cr.solid.active = false;
    Audio.crumble();
    Audio.stomp();
    const c = V(cr.c.x, cr.c.y + 0.5, cr.c.z);
    this.puffs.burst(c, 22, { color: new THREE.Color(0xc79a68), speed: 6, life: 0.9, size: 0.35, grav: 14, drag: 1, alpha: 1, up: true, lift: 3 });
    this.sparks.burst(c, 14, { color: new THREE.Color(0xffe2a8), speed: 5, life: 0.6, size: 0.25 });
    cr.mesh.userData.breakT = 0.001;
    if (cr.c.item === 'star') { const s = this.stars[cr.starIndex]; s.hidden = false; s.m.visible = true; s.pop = 1; }
    else if (cr.c.item === 'heart') {
      const m = Art.createHeart(); m.position.copy(c).add(V(0, 0.6, 0)); this.scene.add(m);
      this.heartsPick.push({ m, pos: m.position.clone(), taken: false });
    } else {
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        const pos = c.clone().add(V(Math.cos(a) * 1.1, 0.4, Math.sin(a) * 1.1));
        const m = Art.createFish(); m.position.copy(pos); this.scene.add(m);
        this.fish.push({ m, pos, taken: false, ph: i, out: 0, bonus: true });
      }
    }
  }

  hurt(from) {
    const P = this.p;
    if (P.invuln > 0 || this.state !== 'play') return;
    P.hearts--;
    P.invuln = 1.6;
    Audio.hurt();
    const away = P.pos.clone().sub(from).setY(0);
    if (away.lengthSq() < 0.01) away.set(0, 0, 1);
    away.normalize().multiplyScalar(7);
    P.vel.set(away.x, 8, away.z);
    P.dashT = 0; P.pound = 0; P.grounded = false;
    this.rig.impulse(-6);
    this.sparks.burst(P.pos.clone().add(V(0, 0.6, 0)), 12, { color: new THREE.Color(0xff8fab), speed: 5, life: 0.6, size: 0.3 });
    if (P.hearts <= 0) this.fall(true);
    this.hudDirty = true;
  }

  fall(fromHurt = false) {
    if (this.state !== 'play') return;
    this.state = 'respawning';
    this.stats.falls++;
    if (!fromHurt) {
      Audio.fall();
      this.puffs.burst(this.p.pos.clone(), 26, { color: new THREE.Color(this.L.floor.color).lerp(new THREE.Color(0xffffff), 0.4), speed: 7, life: 1, size: 0.45, grav: 16, up: true, lift: 4 });
      this.p.hearts--;
    }
    this.hooks.fade(true);
    this.respawnT = 0.55; // seconds of game time before we pop back at the lamp
  }

  finishRespawn() {
    const P = this.p;
    if (P.hearts <= 0) { P.hearts = CFG.maxHearts; this.hooks.toast('Blåhaj needs a cuddle!', 'Hearts refilled at the last lamp'); }
    P.pos.copy(this.respawn); P.vel.set(0, 0, 0);
    P.dashT = 0; P.pound = 0; P.invuln = 1; P.grounded = false;
    this.cam.target.copy(P.pos);
    this.updateCamera(1, true);
    this.state = 'play';
    this.hudDirty = true;
    this.hooks.fade(false);
  }

  // ------------------------------------------------------------- update --
  update(dt) {
    this.clock += dt;
    if (this.attract) {
      // title-screen mode: everything idles while the camera orbits
      this.time += dt;
      this.cam.yaw += dt * 0.12;
      this.cam.pitch = 0.22;
      this.cam.dist = 6.5;
      this.visuals(dt);
      this.input.endFrame();
      return;
    }
    if (this.state === 'play' || this.state === 'respawning') {
      this.acc = (this.acc || 0) + Math.min(dt, 0.1);
      // latch button presses so exactly one physics step consumes each one
      const inp = this.input;
      const e = (this.edge = this.edge || { jump: false, dash: false, flop: false });
      e.jump = e.jump || inp.jumpPressed(); e.dash = e.dash || inp.dashPressed(); e.flop = e.flop || inp.flopPressed();
      while (this.acc >= CFG.dt) { this.step(CFG.dt); this.acc -= CFG.dt; e.jump = e.dash = e.flop = false; }
    } else if (this.state === 'win') {
      this.winT += dt;
      const P = this.p;
      P.pos.lerp(V(this.L.goal[0], this.L.goal[1] + 0.75, this.L.goal[2]), Math.min(1, dt * 4));
      this.p.yaw += dt * 2.5;
      if (Math.random() < 0.5) this.sparks.emit({ p: this.goal.position.clone().add(V((Math.random() - 0.5) * 4, 3 + Math.random() * 2, (Math.random() - 0.5) * 4)), v: V((Math.random() - 0.5) * 2, -1.5, (Math.random() - 0.5) * 2), life: 2, size: 0.35, color: new THREE.Color().setHSL(Math.random(), 0.8, 0.7), drag: 0.2 });
      if (this.winT > 2.4 && !this.winSent) { this.winSent = true; this.hooks.complete(this.result()); }
    }
    this.visuals(dt);
    this.input.endFrame();
  }

  step(dt) {
    const P = this.p, inp = this.input, L = this.L;
    this.time += dt;
    if (this.state === 'play') this.stats.time += dt;
    if (this.state === 'respawning') { this.respawnT -= dt; if (this.respawnT <= 0) this.finishRespawn(); }

    // --- platforms move first so we can carry the player
    for (const pl of this.platforms) {
      const old = pl.cur.clone();
      const m = pl.p.move;
      if (m) {
        const s = Math.sin(((this.time / m.period) + (m.phase || 0)) * Math.PI * 2);
        pl.cur.set(pl.base.x + (m.dx || 0) * s, pl.base.y + (m.dy || 0) * s, pl.base.z + (m.dz || 0) * s);
      }
      if (pl.p.type === 'crumble') {
        if (pl.crumble === 1) { pl.crumbleT -= dt; if (pl.crumbleT <= 0) { pl.crumble = 2; pl.crumbleT = 3; pl.solid.active = false; Audio.crumble(); this.puffs.burst(pl.cur.clone(), 16, { color: new THREE.Color(0xc89060), speed: 4, life: 0.8, size: 0.3, grav: 12 }); } }
        else if (pl.crumble === 2) { pl.crumbleT -= dt; if (pl.crumbleT <= 0) { pl.crumble = 0; pl.solid.active = true; pl.respawnFx = 1; } }
      }
      pl.solid.delta.subVectors(pl.cur, old);
      this.setSolid(pl);
    }
    if (P.grounded && P.ground && P.ground.active) P.pos.add(P.ground.delta);

    if (this.state !== 'play') return;

    // --- input relative to camera
    const mv = inp.move();
    const fwd = V(-Math.sin(this.cam.yaw), 0, -Math.cos(this.cam.yaw));
    const right = V(Math.cos(this.cam.yaw), 0, -Math.sin(this.cam.yaw));
    const wish = fwd.multiplyScalar(mv.y).add(right.multiplyScalar(mv.x));
    const wishLen = Math.min(1, wish.length());

    P.coyote = P.grounded ? CFG.coyote : P.coyote - dt;
    P.buffer = this.edge.jump ? CFG.jumpBuffer : P.buffer - dt;
    P.dashCD -= dt; P.invuln -= dt;

    // --- belly flop
    if (this.edge.flop && !P.grounded && this.ab.flop && !P.pound && P.dashT <= 0) {
      P.pound = 1; P.poundHang = CFG.poundHang; P.vel.set(0, 0, 0);
      this.rig.spin = Math.PI * 2;
      Audio.dash();
    }
    // --- dash
    if (this.edge.dash && this.ab.dash && P.dashCD <= 0 && !P.dashUsed && !P.pound) {
      const dir = wishLen > 0.2 ? wish.clone().normalize() : V(Math.sin(P.yaw), 0, Math.cos(P.yaw));
      P.dashDir.copy(dir); P.dashT = CFG.dashTime; P.dashCD = CFG.dashCooldown;
      if (!P.grounded) P.dashUsed = true;
      this.rig.spin = Math.PI * 2;
      Audio.dash();
      this.cam.fovKick = 8;
    }

    // --- horizontal velocity
    if (P.dashT > 0) {
      P.dashT -= dt;
      P.vel.x = P.dashDir.x * CFG.dashSpeed; P.vel.z = P.dashDir.z * CFG.dashSpeed; P.vel.y = 0;
      if (Math.random() < 0.7) this.sparks.emit({ p: P.pos.clone().add(V(0, 0.45, 0)), v: V(0, 0, 0), life: 0.35, size: 0.4, color: new THREE.Color(0xbfe0ff), alpha: 0.7 });
      if (P.dashT <= 0) { P.vel.x *= 0.45; P.vel.z *= 0.45; }
    } else if (P.pound) {
      P.vel.x = 0; P.vel.z = 0;
      if (P.poundHang > 0) { P.poundHang -= dt; P.vel.y = 0; } else P.vel.y = -CFG.poundSpeed;
    } else {
      const target = wish.clone().setLength(wishLen * CFG.run);
      const acc = P.grounded ? CFG.groundAccel : CFG.airAccel;
      const hv = V(P.vel.x, 0, P.vel.z);
      const diff = target.clone().sub(hv);
      const maxStep = acc * dt;
      if (diff.length() > maxStep) diff.setLength(maxStep);
      hv.add(diff);
      if (P.grounded && wishLen < 0.05) hv.multiplyScalar(Math.max(0, 1 - CFG.groundFriction * dt));
      P.vel.x = hv.x; P.vel.z = hv.z;

      // jumps
      if (P.buffer > 0 && P.coyote > 0) {
        P.vel.y = CFG.jump; P.grounded = false; P.coyote = 0; P.buffer = 0; P.jumpHeld = true;
        P.canDouble = this.ab.doubleJump;
        Audio.jump(); this.rig.impulse(4);
        this.puffs.burst(P.pos.clone(), 6, { color: new THREE.Color(0xffffff), speed: 2.5, life: 0.5, size: 0.35, alpha: 0.6 });
      } else if (P.buffer > 0 && !P.grounded && P.canDouble) {
        P.vel.y = CFG.doubleJump; P.canDouble = false; P.buffer = 0; P.jumpHeld = true;
        Audio.doubleJump(); this.rig.impulse(5); this.rig.spin = Math.PI * 2;
        this.sparks.burst(P.pos.clone().add(V(0, 0.2, 0)), 14, { color: new THREE.Color(0xcfe6ff), speed: 4, life: 0.5, size: 0.28 });
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

    // --- updrafts
    P.inUpdraft = false;
    for (const u of this.updrafts) {
      const d = Math.hypot(P.pos.x - u.u.x, P.pos.z - u.u.z);
      if (d < u.u.r && P.pos.y > u.u.y0 - 0.5 && P.pos.y < u.u.y1 + 0.5) {
        P.inUpdraft = true;
        const top = P.pos.y > u.u.y1 - 1.5 ? 0.35 : 1;
        P.vel.y = Math.min(CFG.updraftMax * top + 1.5, P.vel.y + CFG.updraft * dt);
        P.canDouble = this.ab.doubleJump; P.dashUsed = false; P.pound = 0;
      }
    }

    // --- move & collide, axis by axis
    const wasGrounded = P.grounded;
    const fallSpeed = -P.vel.y;
    const active = this.solids.filter((s) => s.active);
    for (const axis of ['x', 'z']) {
      const nv = P.pos[axis] + P.vel[axis] * dt;
      const test = P.pos.clone(); test[axis] = nv;
      for (const s of active) {
        if (!this.overlap(test.x, test.y, test.z, s)) continue;
        if (this.overlap(P.pos.x, P.pos.y, P.pos.z, s)) continue; // embedded: resolved below
        if (s.kind === 'crate' && P.dashT > 0) { this.breakCrate(s.crate); continue; }
        // step up small ledges
        const rise = s.max.y - test.y;
        if (P.grounded && rise > 0 && rise <= 0.4 && !active.some((o) => o !== s && this.overlap(test.x, s.max.y + EPS, test.z, o))) { test.y = s.max.y + EPS; continue; }
        test[axis] = P.vel[axis] > 0 ? s.min[axis] - CFG.radius - EPS * 2 : s.max[axis] + CFG.radius + EPS * 2;
        P.vel[axis] = 0;
        if (P.dashT > 0) { P.dashT = 0; this.rig.impulse(-3); }
      }
      P.pos.copy(test);
    }
    let ny = P.pos.y + P.vel.y * dt;
    P.grounded = false;
    let landed = null;
    for (const s of active) {
      if (!this.overlap(P.pos.x, ny, P.pos.z, s)) continue;
      if (this.overlap(P.pos.x, P.pos.y, P.pos.z, s)) continue;
      if (P.vel.y <= 0) {
        if (s.kind === 'crate' && P.pound) { this.breakCrate(s.crate); continue; }
        ny = s.max.y; landed = s;
      } else {
        if (s.kind === 'crate') this.breakCrate(s.crate);
        ny = s.min.y - CFG.height - EPS; P.vel.y = 0;
      }
    }
    P.pos.y = ny;
    if (landed) {
      P.grounded = true; P.ground = landed; P.canDouble = false; P.dashUsed = false;
      const pl = landed.plat;
      const sup = !!P.pound; // read before onLand clears the flop
      if (!wasGrounded) this.onLand(fallSpeed, landed);
      if (pl && pl.p.type === 'bounce') {
        P.vel.y = sup ? CFG.superBounce : (inp.jumpHeld() ? CFG.bounce : CFG.bounce * 0.85);
        P.grounded = false; P.pound = 0; P.canDouble = this.ab.doubleJump; P.jumpHeld = false;
        pl.squish = 1;
        Audio.bounce(); if (sup) Audio.star();
        this.rig.impulse(sup ? 9 : 6);
        this.sparks.burst(P.pos.clone(), sup ? 30 : 12, { color: new THREE.Color(sup ? 0xffe066 : 0xfff3b0), speed: sup ? 9 : 5, life: 0.7, size: 0.3 });
      } else {
        P.vel.y = 0;
        if (pl && pl.p.type === 'crumble' && pl.crumble === 0) { pl.crumble = 1; pl.crumbleT = 0.55; }
        if (!pl || !pl.p.move) P.lastSafe.copy(P.pos);
      }
    }

    // --- push out if a moving platform shoved into us
    for (const s of active) {
      if (!this.overlap(P.pos.x, P.pos.y, P.pos.z, s)) continue;
      const pens = [
        ['x', s.max.x - (P.pos.x - CFG.radius), 1], ['x', (P.pos.x + CFG.radius) - s.min.x, -1],
        ['z', s.max.z - (P.pos.z - CFG.radius), 1], ['z', (P.pos.z + CFG.radius) - s.min.z, -1],
        ['y', s.max.y - P.pos.y, 1], ['y', (P.pos.y + CFG.height) - s.min.y, -1],
      ].sort((a, b) => a[1] - b[1]);
      const [ax, d, sign] = pens[0];
      P.pos[ax] += (d + EPS * 2) * sign;
      if (ax === 'y' && sign > 0) { P.grounded = true; P.ground = s; P.vel.y = Math.max(0, P.vel.y); }
    }

    // --- facing
    const hs = Math.hypot(P.vel.x, P.vel.z);
    if (hs > 0.5 && !P.pound) P.yaw += angDiff(P.yaw, Math.atan2(P.vel.x, P.vel.z)) * Math.min(1, dt * 14);

    this.interact(dt);
    if (P.pos.y < L.floor.y + 0.3) this.fall();
  }

  onLand(fallSpeed, s) {
    const P = this.p;
    this.rig.impulse(-Math.min(8, fallSpeed * 0.35));
    if (P.pound) {
      P.pound = 0;
      Audio.pound();
      this.cam.shake = 0.35;
      this.puffs.burst(P.pos.clone().add(V(0, 0.1, 0)), 26, { color: new THREE.Color(0xffffff), speed: 8, life: 0.6, size: 0.45, alpha: 0.7, drag: 3 });
      // shockwave
      for (const e of this.enemies) if (e.alive && e.pos.distanceTo(P.pos) < 2.6) this.defeat(e);
    } else if (fallSpeed > 6) {
      Audio.land();
      this.puffs.burst(P.pos.clone().add(V(0, 0.05, 0)), 8, { color: new THREE.Color(0xffffff), speed: 3, life: 0.45, size: 0.35, alpha: 0.5, drag: 4 });
    }
  }

  defeat(e) {
    if (!e.alive) return;
    e.alive = false; e.deadT = 0;
    this.stats.bops++;
    Audio.stomp();
    this.sparks.burst(e.pos.clone().add(V(0, 0.5, 0)), 20, { color: new THREE.Color(0xffffff), speed: 6, life: 0.7, size: 0.35 });
    this.puffs.burst(e.pos.clone().add(V(0, 0.5, 0)), 14, { color: new THREE.Color(0xc9c3d8), speed: 4, life: 0.8, size: 0.5, alpha: 0.8 });
    this.hooks.pop(e.type === 'roomba' ? 'Vroom… zzz' : 'Bop!');
    // reward: a fish pops out
    const m = Art.createFish(); const pos = e.pos.clone().add(V(0, 1.2, 0)); m.position.copy(pos); this.scene.add(m);
    this.fish.push({ m, pos, taken: false, ph: 0, out: 0, bonus: true });
  }

  interact(dt) {
    const P = this.p;
    const c = P.pos.clone().add(V(0, CFG.height / 2, 0));
    // fish
    this.comboT -= dt;
    if (this.comboT <= 0) this.combo = 0;
    for (const f of this.fish) {
      if (f.taken) continue;
      if (f.pos.distanceToSquared(c) < 0.95) {
        f.taken = true; f.out = 0.001;
        this.stats.fish++;
        this.combo++; this.comboT = 0.9;
        Audio.collect(this.combo);
        this.sparks.burst(f.pos, 8, { color: new THREE.Color(0xffc56b), speed: 3, life: 0.45, size: 0.22 });
        if (this.stats.fish % 30 === 0 && P.hearts < CFG.maxHearts) { P.hearts++; Audio.heart(); this.hooks.pop('+1 💙'); }
        this.hudDirty = true;
      }
    }
    for (const s of this.stars) {
      if (s.taken || s.hidden) continue;
      if (s.pos.distanceToSquared(c) < 1.3) {
        s.taken = true; s.out = 0.001;
        this.runStars[s.i] = true;
        Audio.star();
        this.sparks.burst(s.pos, 40, { color: new THREE.Color(0xffd84a), speed: 7, life: 1, size: 0.35 });
        const n = this.stars.filter((x) => x.taken || this.savedStars[x.i]).length;
        this.hooks.star(s.i);
        this.hooks.toast(this.savedStars[s.i] ? 'Starfish again!' : 'Starfish found!', `${n} / ${this.stars.length} in this level`);
        this.hudDirty = true;
      }
    }
    for (const h of this.heartsPick) {
      if (h.taken) continue;
      if (h.pos.distanceToSquared(c) < 1.1) {
        h.taken = true; h.m.visible = false;
        P.hearts = Math.min(CFG.maxHearts, P.hearts + 1);
        Audio.heart();
        this.sparks.burst(h.pos, 16, { color: new THREE.Color(0xff8fb0), speed: 4, life: 0.6, size: 0.3 });
        this.hudDirty = true;
      }
    }
    for (const cp of this.checkpoints) {
      if (cp.on) continue;
      if (Math.hypot(cp.pos.x - P.pos.x, cp.pos.z - P.pos.z) < 1.8 && Math.abs(cp.pos.y - P.pos.y) < 1.5) {
        this.checkpoints.forEach((o) => { if (o !== cp && o.on) o.on = 'old'; });
        cp.on = true; cp.m.userData.activate();
        this.respawn.set(cp.pos.x, cp.pos.y + 0.05, cp.pos.z + 0.01);
        // respawn next to the lamp, not inside it
        this.respawn.x += cp.pos.x > 0 ? -1.2 : 1.2;
        Audio.checkpoint();
        this.sparks.burst(cp.pos.clone().add(V(0, 1.5, 0)), 24, { color: new THREE.Color(0xffd27a), speed: 4, life: 0.9, size: 0.3 });
        this.hooks.toast('Lamp lit!', 'You\'ll come back here if you tumble');
      }
    }
    for (const hz of this.hazards) {
      const r = CFG.radius;
      if (P.pos.x + r > hz.min.x && P.pos.x - r < hz.max.x && P.pos.z + r > hz.min.z && P.pos.z - r < hz.max.z && P.pos.y < hz.max.y && P.pos.y + CFG.height > hz.min.y) {
        if (P.invuln <= 0) { this.hooks.pop('Ouch! Toy brick!'); this.hurt(V((hz.min.x + hz.max.x) / 2, hz.min.y, (hz.min.z + hz.max.z) / 2)); P.vel.y = 9; }
      }
    }
    // enemies
    for (const e of this.enemies) {
      if (!e.alive) continue;
      const isR = e.type === 'roomba';
      const er = isR ? 0.75 : 0.5, eh = isR ? 0.45 : 1.0;
      const dx = P.pos.x - e.pos.x, dz = P.pos.z - e.pos.z;
      const hd = Math.hypot(dx, dz);
      if (hd > er + CFG.radius || P.pos.y > e.pos.y + eh + 0.05 || P.pos.y + CFG.height < e.pos.y) continue;
      const fromAbove = P.vel.y < 0 && P.pos.y > e.pos.y + eh * 0.45;
      if (P.pound) { this.defeat(e); continue; }
      if (fromAbove) {
        if (isR && e.stun <= 0) {
          e.stun = 2; Audio.bounce(); this.hooks.pop('Boing! (try a belly flop)');
          P.vel.y = CFG.stompBounce * 1.1; P.pos.y = e.pos.y + eh + 0.02; P.canDouble = this.ab.doubleJump;
        } else if (isR) {
          P.vel.y = CFG.stompBounce; P.pos.y = e.pos.y + eh + 0.02; Audio.bounce();
        } else {
          this.defeat(e);
          P.vel.y = this.input.jumpHeld() ? CFG.jump * 1.05 : CFG.stompBounce;
          P.pos.y = e.pos.y + eh + 0.02; P.canDouble = this.ab.doubleJump; P.dashUsed = false;
          this.rig.impulse(5);
        }
        continue;
      }
      if (P.dashT > 0 && !isR) { this.defeat(e); continue; }
      if (isR && e.stun > 0) { // stunned vacuums are harmless: just nudge
        const push = V(dx, 0, dz).normalize().multiplyScalar(0.05); P.pos.add(push); continue;
      }
      this.hurt(e.pos);
    }
    // signs -> hint
    let hint = null;
    for (const s of this.signs) if (s.pos.distanceTo(P.pos) < 3.2) hint = s.text.replace('\n', ' · ');
    this.hooks.hint(hint);
    // goal
    const g = this.goal.position;
    if (Math.hypot(g.x - P.pos.x, g.z - P.pos.z) < 2 && Math.abs(g.y - P.pos.y) < 1.6) this.win();
  }

  win() {
    if (this.state !== 'play') return;
    this.state = 'win'; this.winT = 0;
    Audio.win();
    this.hooks.hint(null);
    this.sparks.burst(this.goal.position.clone().add(V(0, 2, 0)), 70, { color: new THREE.Color(0xffb3d0), speed: 9, life: 1.4, size: 0.4 });
  }

  result() {
    return {
      fish: this.stats.fish, fishTotal: this.L.fish.length, time: this.stats.time, bops: this.stats.bops, falls: this.stats.falls,
      stars: this.runStars.slice(),
    };
  }

  // ---------------------------------------------------------- visuals --
  visuals(dt) {
    const t = this.clock;
    const P = this.p;
    // enemies
    for (const e of this.enemies) {
      e.t += dt;
      if (!e.alive) {
        e.deadT += dt;
        const k = Math.max(0, 1 - e.deadT * 2.5);
        e.m.scale.set(1 + (1 - k) * 0.6, k, 1 + (1 - k) * 0.6);
        if (k <= 0) e.m.visible = false;
        continue;
      }
      const isR = e.type === 'roomba';
      e.stun -= dt;
      const ex = e.e.dx || 0, ez = e.e.dz || 0;
      const len = Math.hypot(ex, ez) || 1;
      if (e.stun > 0) {
        e.m.userData.inner.rotation.y += dt * 12;
      } else {
        // roombas chase you when you're on their level, inside their patrol lane
        let targetU = null;
        if (isR && Math.abs(P.pos.y - e.pos.y) < 1.2) {
          const rel = (P.pos.x - e.start.x) * ex / len + (P.pos.z - e.start.z) * ez / len;
          const lat = Math.abs((P.pos.x - e.start.x) * ez / len - (P.pos.z - e.start.z) * ex / len);
          if (lat < 3.5 && rel > -1 && rel < len + 1) targetU = Math.max(0, Math.min(1, rel / len));
        }
        e.chase = targetU !== null;
        const sp = (e.e.speed || 1.5) * (e.chase ? 1.5 : 1) / len;
        if (e.chase) e.u += Math.sign(targetU - e.u) * Math.min(Math.abs(targetU - e.u), sp * dt);
        else { e.u += e.dir * sp * dt; if (e.u > 1) { e.u = 1; e.dir = -1; } if (e.u < 0) { e.u = 0; e.dir = 1; } }
        const nx = e.start.x + ex * e.u, nz = e.start.z + ez * e.u;
        const mdx = nx - e.pos.x, mdz = nz - e.pos.z;
        if (Math.abs(mdx) + Math.abs(mdz) > 1e-4) e.m.rotation.y += angDiff(e.m.rotation.y, Math.atan2(mdx, mdz)) * Math.min(1, dt * 8);
        e.pos.x = nx; e.pos.z = nz;
        e.m.userData.inner.rotation.y *= 0.9;
      }
      const inner = e.m.userData.inner;
      if (isR) {
        e.m.userData.brush.rotation.y += dt * 20;
        inner.position.y = Math.abs(Math.sin(e.t * 20)) * 0.01;
      } else {
        const hop = Math.abs(Math.sin(e.t * 5));
        inner.position.y = hop * 0.35;
        inner.scale.set(1 + (1 - hop) * 0.12, 0.88 + hop * 0.15, 1 + (1 - hop) * 0.12);
      }
      e.m.position.copy(e.pos);
    }
    // platforms
    for (const pl of this.platforms) {
      const g = pl.vis.group;
      g.position.copy(pl.cur);
      if (pl.p.type === 'crumble') {
        if (pl.crumble === 1) { g.position.x += (Math.random() - 0.5) * 0.08; g.position.z += (Math.random() - 0.5) * 0.08; }
        if (pl.crumble === 2) { g.position.y -= (3 - pl.crumbleT) * (3 - pl.crumbleT) * 3; g.visible = pl.crumbleT > 1.2; }
        else g.visible = true;
        if (pl.respawnFx) { pl.respawnFx = Math.max(0, pl.respawnFx - dt * 3); g.scale.setScalar(1 - pl.respawnFx * 0.6); }
      }
      if (pl.squish > 0) { pl.squish = Math.max(0, pl.squish - dt * 3); const k = Math.sin(pl.squish * Math.PI * 3) * pl.squish * 0.25; g.scale.set(1 + k * 0.5, 1 - k, 1 + k * 0.5); }
    }
    // crates
    for (const cr of this.crates) {
      if (cr.mesh.userData.breakT) {
        cr.mesh.userData.breakT += dt;
        const k = Math.max(0, 1 - cr.mesh.userData.breakT * 5);
        cr.mesh.scale.set(1 + (1 - k), k, 1 + (1 - k));
        if (k <= 0) cr.mesh.visible = false;
      }
    }
    // collectibles
    for (const f of this.fish) {
      if (f.out) {
        f.out += dt;
        const k = Math.max(0, 1 - f.out * 4);
        f.m.position.lerp(P.pos.clone().add(V(0, 0.6, 0)), Math.min(1, dt * 14));
        f.m.scale.setScalar(k);
        if (k <= 0) f.m.visible = false;
        continue;
      }
      f.m.rotation.y = t * 2.5 + f.ph;
      f.m.position.y = f.pos.y + Math.sin(t * 3 + f.ph) * 0.12;
    }
    for (const s of this.stars) {
      if (s.pop) { s.pop = Math.max(0, s.pop - dt * 2); s.m.position.y = s.pos.y + Math.sin((1 - s.pop) * Math.PI) * 1.2; }
      if (s.out) {
        s.out += dt;
        s.m.scale.setScalar(1 + s.out * 2);
        s.m.position.y += dt * 3;
        s.m.rotation.y += dt * 20;
        if (s.out > 0.5) s.m.visible = false;
        continue;
      }
      s.m.rotation.y = t * 1.6;
      if (!s.pop) s.m.position.y = s.pos.y + Math.sin(t * 2) * 0.15;
      if (Math.random() < 0.08 && !s.hidden) this.sparks.emit({ p: s.pos.clone().add(V((Math.random() - 0.5), (Math.random() - 0.5), (Math.random() - 0.5))), v: V(0, 0.6, 0), life: 0.9, size: 0.18, color: new THREE.Color(0xffe38a) });
    }
    for (const h of this.heartsPick) { h.m.rotation.y = t * 2; h.m.position.y = h.pos.y + Math.sin(t * 3) * 0.12; }
    this.goal.userData.heart.rotation.y = t * 1.5;
    this.goal.userData.heart.position.y = 2.1 + Math.sin(t * 2) * 0.15;
    for (const u of this.updrafts) {
      u.rings.forEach((r, i) => {
        const k = ((t * 0.35 + i / u.rings.length) % 1);
        r.position.y = u.u.y0 + k * (u.u.y1 - u.u.y0);
        r.scale.setScalar(0.6 + k * 0.5);
        r.material.opacity = 0.35;
      });
      if (Math.random() < 0.6) this.sparks.emit({ p: V(u.u.x + (Math.random() - 0.5) * u.u.r * 1.6, u.u.y0, u.u.z + (Math.random() - 0.5) * u.u.r * 1.6), v: V(0, 6 + Math.random() * 3, 0), life: (u.u.y1 - u.u.y0) / 8, size: 0.2 + Math.random() * 0.2, color: new THREE.Color(0xcff6ff), drag: 0, alpha: 0.7 });
    }

    // player
    P.pos && this.rig.root.position.copy(P.pos);
    this.rig.root.rotation.y = P.yaw;
    const sp = Math.min(1, Math.hypot(P.vel.x, P.vel.z) / CFG.run);
    this.rig.update(dt, { speed: sp, grounded: P.grounded, vx: P.vel.x, vy: P.vel.y, vz: P.vel.z, pound: !!P.pound, glide: P.glide, happy: this.state === 'win' });
    this.rig.root.visible = !(P.invuln > 0 && this.state === 'play' && Math.floor(t * 20) % 2 === 0);
    // blob shadow sits on whatever is below
    let groundY = this.L.floor.y;
    for (const s of this.solids) if (s.active && P.pos.x > s.min.x && P.pos.x < s.max.x && P.pos.z > s.min.z && P.pos.z < s.max.z && s.max.y <= P.pos.y + 0.05) groundY = Math.max(groundY, s.max.y);
    this.rig.blob.position.y = groundY - P.pos.y + 0.03;
    const hgt = P.pos.y - groundY;
    this.rig.blob.material.opacity = Math.max(0, 0.4 - hgt * 0.05);
    this.rig.blob.scale.setScalar(Math.max(0.4, 1 - hgt * 0.06));
    if (P.glide && Math.random() < 0.5) this.sparks.emit({ p: P.pos.clone().add(V((Math.random() - 0.5) * 1.4, 0.3, (Math.random() - 0.5) * 1.4)), v: V(0, -0.5, 0), life: 0.6, size: 0.15, color: new THREE.Color(0xdff1ff), alpha: 0.7 });

    this.sparks.update(dt);
    this.puffs.update(dt);
    this.floor.update(t);
    this.sky.mesh.material.uniforms.time.value = t;
    World.grassTime(t);
    this.ambient.update(t, this.camera.position);
    this.updateCamera(dt);

    if (this.hudDirty) { this.hudDirty = false; this.hooks.hud(); }
  }

  updateCamera(dt, snap = false) {
    const C = this.cam, P = this.p, inp = this.input;
    const manual = inp.camDX !== 0 || inp.camDY !== 0 || inp.camTurn() !== 0;
    C.yaw -= inp.camDX * 0.005 + inp.camTurn() * dt * 2.4;
    C.pitch = THREE.MathUtils.clamp(C.pitch + inp.camDY * 0.003, 0.05, 1.15);
    C.idle = manual ? 0 : C.idle + dt;
    const hs = Math.hypot(P.vel.x, P.vel.z);
    if (C.idle > 1.2 && hs > 2 && this.state === 'play') {
      const behind = Math.atan2(P.vel.x, P.vel.z) + Math.PI;
      const d = angDiff(C.yaw, behind);
      if (Math.abs(d) < 2.0) C.yaw += d * Math.min(1, dt * 0.9) * (hs / CFG.run);
    }
    if (this.state === 'win') C.yaw += dt * 0.5;
    // vertical follow is lazier while airborne so jumps feel big
    const ty = P.grounded || P.pos.y < C.target.y - 1.5 || P.inUpdraft ? P.pos.y : C.target.y + (P.pos.y - C.target.y) * 0.25;
    const goal = V(P.pos.x, ty, P.pos.z);
    if (snap) C.target.copy(goal);
    else {
      C.target.x += (goal.x - C.target.x) * Math.min(1, dt * 10);
      C.target.z += (goal.z - C.target.z) * Math.min(1, dt * 10);
      C.target.y += (goal.y - C.target.y) * Math.min(1, dt * (P.grounded ? 6 : 3));
    }
    const look = C.target.clone().add(V(0, 1.1, 0));
    const dist = C.dist * (this.state === 'win' ? 0.8 : 1);
    const off = V(Math.sin(C.yaw) * Math.cos(C.pitch), Math.sin(C.pitch), Math.cos(C.yaw) * Math.cos(C.pitch)).multiplyScalar(dist);
    this.camera.position.copy(look).add(off);
    if (C.shake) { C.shake = Math.max(0, C.shake - dt); this.camera.position.add(V((Math.random() - 0.5), (Math.random() - 0.5), (Math.random() - 0.5)).multiplyScalar(C.shake * 0.6)); }
    this.camera.lookAt(look);
    C.fovKick = Math.max(0, (C.fovKick || 0) - dt * 30);
    const fov = 55 + (C.fovKick || 0);
    if (Math.abs(this.camera.fov - fov) > 0.01) { this.camera.fov = fov; this.camera.updateProjectionMatrix(); }
    // shadow camera follows the player, snapped to texels to avoid shimmer
    const sd = this.sky.sunDir;
    const tgt = P.pos.clone();
    const texel = 48 / this.R.shadowSize();
    tgt.x = Math.round(tgt.x / texel) * texel; tgt.z = Math.round(tgt.z / texel) * texel;
    this.sun.target.position.copy(tgt);
    this.sun.position.copy(tgt).addScaledVector(sd, 60);
  }

  render() { this.R.render(this.clock); }
}
