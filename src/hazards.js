// Every room has its own bad dream causing trouble: a nightmare tied to the room
// that keeps up a moving obstacle while you hunt the others. Four kinds:
//   lobber  - flings things that bounce and roll across the floor (cushions, oranges, tyres, ducks)
//   sweeper - an arm or spray that turns round a point, or a pendulum that swings, low over the floor
//   rings   - waves that ripple out across the floor: hop over them
//   roamer  - something that zooms round a loop on the floor (a toy train, a wind-up car)
// The nightmare behind it lunges when it acts, and once every floor nightmare in the
// room is poofed it gives up and poofs away too. Described in chapters.js as ch.hazard.
import * as THREE from 'three';
import { createShadow } from './characters.js';
import { Mat } from './materials.js';
import { softDotTexture } from './textures.js';
import { Audio } from './audio.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const G = 30; // gravity for flung things

export function buildHazard(game, ch, scene) {
  const H = ch.hazard; if (!H) return null;
  const hz = { H, t: H.delay ?? 3, act: 0, items: [], rings: [], angle: H.phase || 0, clock: 0, calm: false, hinted: false, group: new THREE.Group() };
  scene.add(hz.group);
  // the nightmare behind it
  if (H.imp) {
    hz.imp = createShadow(H.impScale || 1); hz.imp.group.position.set(...H.imp); hz.group.add(hz.imp.group);
    hz.impHome = V(...H.imp);
  }
  if (H.type === 'sweeper') buildSweeper(hz, H);
  if (H.type === 'roamer') buildRoamer(hz, H);
  if (H.type === 'rings') hz.ringMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(H.color || 0x6a3cc0).lerp(new THREE.Color(0xffffff), 0.35), transparent: true, opacity: 0.75, depthWrite: false, side: THREE.DoubleSide });
  return hz;
}

export function updateHazard(game, dt) {
  const hz = game.hazard; if (!hz) return;
  const H = hz.H, P = game.p, c = P.pos.clone().add(V(0, 0.45, 0));
  hz.clock += dt;
  const hit = (from, msg) => { if (!hz.calm && P.invuln <= 0 && game.state === 'play') game.hurt(from, H.dmg || 10, msg || H.msg || 'A bad dream!'); };
  // all the floor nightmares are poofed: this one gives up too
  if (!hz.calm && game.enemies.some((e) => e.type === 'shadow') && game.shadowsLeft() === 0) {
    hz.calm = true;
    if (hz.imp) { game.sparks.burst(hz.imp.group.getWorldPosition(V()).add(V(0, 0.8, 0)), 30, { color: new THREE.Color(0xffe2a8), speed: 6, life: 1, size: 0.35 }); hz.imp.group.visible = false; }
    if (hz.arm) hz.fade = 1;
  }
  if (hz.fade !== undefined) { hz.fade = Math.max(0, hz.fade - dt); if (hz.arm) { hz.arm.scale.setScalar(Math.max(0.001, hz.fade)); if (hz.fade <= 0) hz.arm.visible = false; } }
  // first time it acts, say what it is
  const announce = () => { if (!hz.hinted && H.title) { hz.hinted = true; game.hooks.toast(H.title, H.hint || ''); } };
  // the nightmare bobs about and lunges when it acts
  hz.act = Math.max(0, hz.act - dt);
  if (hz.imp && !hz.calm) {
    hz.imp.update(dt, game.clock);
    const l = Math.sin(hz.act * Math.PI * 2);
    hz.imp.group.position.copy(hz.impHome).add(V(0, Math.sin(game.clock * 3) * 0.08 + l * 0.3, 0));
    hz.imp.group.lookAt(P.pos.x, hz.impHome.y, P.pos.z);
    hz.imp.group.rotateX(-l * 0.4);
  }

  if (H.type === 'lobber') {
    hz.t -= dt;
    if (!hz.calm && hz.t <= 0 && hz.items.length < (H.max || 4)) {
      hz.t = H.every * (0.8 + Math.random() * 0.4); hz.act = 0.5; announce();
      const from = V(...H.from), r = game.ch.room, s = H.spread ?? 2.5;
      const to = V(THREE.MathUtils.clamp(P.pos.x + (Math.random() - 0.5) * s * 2, r.x0 + 1, r.x1 - 1), 0, THREE.MathUtils.clamp(P.pos.z + (Math.random() - 0.5) * s * 2, r.z0 + 1, r.z1 - 1));
      const d = Math.hypot(to.x - from.x, to.z - from.z), tf = THREE.MathUtils.clamp(d / (H.speed || 9), 0.7, 1.7);
      const vel = V((to.x - from.x) / tf, (to.y - from.y) / tf + 0.5 * G * tf, (to.z - from.z) / tf);
      const mesh = makeThing(H.kind); hz.group.add(mesh);
      hz.items.push({ mesh, pos: from.clone(), vel, life: H.life || 6, r: H.radius || 0.5, spin: V((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6) });
      Audio.tone && Audio.tone(260, { type: 'triangle', dur: 0.18, slide: 240, vol: 0.1 });
    }
    for (let i = hz.items.length - 1; i >= 0; i--) {
      const b = hz.items[i];
      b.life -= dt;
      b.vel.y -= G * dt;
      b.pos.addScaledVector(b.vel, dt);
      // land on the floor or on the top of whatever it's over; glance off the sides of things
      let gy = 0;
      for (const s of game.solids) {
        if (s.room || s.active === false) continue;
        if (b.pos.x > s.min.x && b.pos.x < s.max.x && b.pos.z > s.min.z && b.pos.z < s.max.z) {
          if (s.max.y <= b.pos.y - b.r + 0.35) gy = Math.max(gy, s.max.y);
          else if (b.pos.y - b.r < s.max.y && b.pos.y + b.r > s.min.y) { // inside it: push out the shortest way and bounce off
            const pens = [[b.pos.x - s.min.x, 'x', -1], [s.max.x - b.pos.x, 'x', 1], [b.pos.z - s.min.z, 'z', -1], [s.max.z - b.pos.z, 'z', 1]].sort((a, b_) => a[0] - b_[0])[0];
            b.pos[pens[1]] += pens[2] * (pens[0] + 0.02); b.vel[pens[1]] = pens[2] * Math.abs(b.vel[pens[1]]) * 0.5;
          }
        }
      }
      if (b.pos.y - b.r < gy) {
        b.pos.y = gy + b.r;
        if (b.vel.y < -3) { b.vel.y = -b.vel.y * (H.bounce ?? 0.45); Audio.land && b.vel.y > 4 && Math.random() < 0.5 && Audio.tone(140 + Math.random() * 60, { type: 'sine', dur: 0.08, vol: 0.08 }); } else b.vel.y = 0;
        const fr = Math.exp(-dt * (H.friction ?? 0.6)); b.vel.x *= fr; b.vel.z *= fr;
      }
      const r = game.ch.room;
      if (b.pos.x < r.x0 + b.r || b.pos.x > r.x1 - b.r) { b.vel.x *= -0.5; b.pos.x = THREE.MathUtils.clamp(b.pos.x, r.x0 + b.r, r.x1 - b.r); }
      if (b.pos.z < r.z0 + b.r || b.pos.z > r.z1 - b.r) { b.vel.z *= -0.5; b.pos.z = THREE.MathUtils.clamp(b.pos.z, r.z0 + b.r, r.z1 - b.r); }
      b.mesh.position.copy(b.pos);
      if (H.kind === 'tire') { // rolls upright along its way
        const hv = Math.hypot(b.vel.x, b.vel.z);
        if (hv > 0.3) b.mesh.rotation.y = Math.atan2(b.vel.x, b.vel.z);
        b.roll = (b.roll || 0) + hv * dt / b.r; b.mesh.children[0].rotation.x = b.roll;
      } else { b.mesh.rotation.x += b.spin.x * dt; b.mesh.rotation.y += b.spin.y * dt; b.mesh.rotation.z += b.spin.z * dt; b.spin.multiplyScalar(Math.exp(-dt * 0.8)); }
      const k = Math.min(1, b.life / 0.5); b.mesh.scale.setScalar(Math.max(0.01, k));
      if (b.pos.distanceTo(c) < b.r + 0.55) { hit(b.pos, H.msg); }
      if (b.life <= 0) { hz.group.remove(b.mesh); hz.items.splice(i, 1); }
    }
  }

  if (H.type === 'rings') {
    hz.t -= dt;
    if (!hz.calm && hz.t <= 0) {
      hz.t = H.every; hz.act = 0.5; announce();
      // a wave: a bright crest with a soft glow either side, always the same width however far it's spread
      const m = new THREE.Mesh(new THREE.RingGeometry(1, 1.1, 96), hz.ringMat.clone()); m.rotation.x = -Math.PI / 2; m.position.set(H.at[0], H.at[1] + 0.1, H.at[2]); hz.group.add(m);
      const glow = new THREE.Mesh(new THREE.RingGeometry(1, 1.1, 96), new THREE.MeshBasicMaterial({ color: H.color || 0x6a3cc0, transparent: true, opacity: 0.25, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
      glow.rotation.x = -Math.PI / 2; glow.position.copy(m.position).y -= 0.03; hz.group.add(glow);
      hz.rings.push({ m, glow, r: H.r0 || 1.2 });
      if (H.sound === 'snore') Audio.tone(90, { type: 'sawtooth', dur: 0.6, slide: -20, vol: 0.06 }); else Audio.tone(110, { type: 'sine', dur: 0.25, slide: -40, vol: 0.12 });
    }
    for (let i = hz.rings.length - 1; i >= 0; i--) {
      const g = hz.rings[i];
      g.r += (H.speed || 4) * dt;
      const k = 1 - g.r / H.maxR;
      g.m.geometry.dispose(); g.m.geometry = new THREE.RingGeometry(Math.max(0.01, g.r - 0.12), g.r + 0.12, 96);
      g.glow.geometry.dispose(); g.glow.geometry = new THREE.RingGeometry(Math.max(0.01, g.r - 0.5), g.r + 0.5, 96);
      g.m.material.opacity = 0.75 * Math.min(1, k * 3); g.glow.material.opacity = 0.3 * Math.min(1, k * 3);
      const d = Math.hypot(P.pos.x - H.at[0], P.pos.z - H.at[2]);
      if (Math.abs(d - g.r) < 0.45 && P.pos.y < H.at[1] + (H.hitH || 0.6) && P.pos.y > H.at[1] - 1) hit(V(H.at[0], 0, H.at[2]), H.msg);
      if (g.r >= H.maxR) { hz.group.remove(g.m); hz.group.remove(g.glow); hz.rings.splice(i, 1); }
    }
  }

  if (H.type === 'sweeper') {
    if (hz.calm) { /* stops where it is */ }
    else if (H.swing) {
      const a = H.swing.amp * Math.sin((hz.clock / H.swing.period) * Math.PI * 2 + (H.phase || 0));
      const piv = V(...H.swing.pivot), dir = V(Math.cos(H.swing.dir), 0, Math.sin(H.swing.dir));
      const bob = piv.clone().addScaledVector(dir, Math.sin(a) * H.swing.len).add(V(0, -Math.cos(a) * H.swing.len, 0));
      hz.arm.position.copy(piv); hz.arm.quaternion.setFromAxisAngle(V(-dir.z, 0, dir.x), -a);
      if (Math.abs(a) < 0.12 && !hz.ticked) { hz.ticked = true; Audio.tone(700, { type: 'sine', dur: 0.06, vol: 0.06 }); hz.act = 0.3; announce(); } else if (Math.abs(a) > 0.3) hz.ticked = false;
      if (bob.distanceTo(c) < (H.swing.bobR || 1.0) + 0.5) hit(bob, H.msg);
    } else {
      hz.angle += (H.speed || 1) * dt;
      hz.arm.rotation.y = -hz.angle;
      if (hz.clock > 1 && !hz.hinted) announce();
      const ax = Math.cos(hz.angle), az = Math.sin(hz.angle), dx = P.pos.x - H.at[0], dz = P.pos.z - H.at[2];
      const along = dx * ax + dz * az, across = Math.abs(-dx * az + dz * ax);
      if (along > 0.3 && along < H.len && across < (H.width || 0.5) + 0.3 && P.pos.y < (H.at[1] || 0) + (H.hitH || 0.8)) hit(V(H.at[0], 0, H.at[2]), H.msg);
      if (H.kind === 'water') { // spray: droplets along the jet
        for (let k = 0; k < 3; k++) { const u = Math.random(); game.sparks.emit({ p: V(H.at[0] + ax * u * H.len, 0.25 + Math.sin(u * Math.PI) * 1.1, H.at[2] + az * u * H.len), v: V(ax * 2, -0.5, az * 2), life: 0.35, size: 0.16, color: new THREE.Color(0xbfe4ff), alpha: 0.7, drag: 1 }); }
      }
      if (hz.wiggle) hz.wiggle(hz.clock);
    }
  }

  if (H.type === 'roamer') {
    if (!hz.calm) {
      hz.dist += (H.speed || 4) * dt;
      const [x, z, hd] = loopPoint(hz.loop, hz.dist);
      hz.car.position.set(x, 0, z); hz.car.rotation.y = hd;
      if (hz.carTick) hz.carTick(hz.clock);
      const d = Math.hypot(P.pos.x - x, P.pos.z - z);
      if (hz.clock > 1.5) announce();
      if (d < (H.radius || 1.2) + 0.3 && P.pos.y < (H.top || 1.2)) {
        if (P.vel.y < 0 && P.pos.y > (H.top || 1.2) - 0.6) { P.vel.y = 13; Audio.bounce(); } // landed on it: boing
        else hit(V(x, 0, z), H.msg);
      }
    }
  }
}

// ------------------------------------------------------------------ things --
function makeThing(kind) {
  const g = new THREE.Group();
  if (kind === 'orange') {
    const o = new THREE.Mesh(new THREE.SphereGeometry(0.42, 18, 14), new THREE.MeshPhysicalMaterial({ color: 0xf28a1e, roughness: 0.55, clearcoat: 0.3 })); o.castShadow = true; g.add(o);
    const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), Mat.paint(0x3f8a3a, 0.6)); leaf.scale.set(1, 0.3, 0.6); leaf.position.y = 0.42; g.add(leaf);
  } else if (kind === 'cushion') {
    const geo = new THREE.SphereGeometry(0.6, 20, 12); geo.scale(1.1, 0.42, 1.1);
    const o = new THREE.Mesh(geo, Mat.fabric([0xe8a0b4, 0x8fb8de, 0xf2e3b8][Math.floor(Math.random() * 3)], 2)); o.castShadow = true; g.add(o);
  } else if (kind === 'duck') {
    const y = Mat.plastic(0xffd23a);
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 12), y); b.scale.set(1, 0.8, 1.25); b.castShadow = true; g.add(b);
    const h = new THREE.Mesh(new THREE.SphereGeometry(0.25, 14, 10), y); h.position.set(0, 0.38, 0.28); g.add(h);
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.22, 10), Mat.plastic(0xf2862e)); beak.rotation.x = Math.PI / 2; beak.position.set(0, 0.34, 0.56); g.add(beak);
  } else if (kind === 'tire') {
    const w = new THREE.Group(); g.add(w);
    const t = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.24, 12, 24), new THREE.MeshStandardMaterial({ color: 0x18181a, roughness: 0.9 })); t.rotation.y = Math.PI / 2; t.castShadow = true; w.add(t);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.3, 14), Mat.steel()); hub.rotation.z = Math.PI / 2; w.add(hub);
  } else {
    const o = new THREE.Mesh(new THREE.SphereGeometry(0.45, 18, 14), Mat.plastic(0xe5484d)); o.castShadow = true; g.add(o);
  }
  return g;
}

function darkMat() { return new THREE.MeshStandardMaterial({ color: 0x140a24, roughness: 0.6, emissive: 0x3a1670, emissiveIntensity: 0.6 }); }

function buildSweeper(hz, H) {
  const arm = new THREE.Group(); hz.arm = arm; hz.group.add(arm);
  if (H.swing) { // a shadowy pendulum hanging from high up, swinging across the floor
    const S = H.swing, rod = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, S.len, 8), darkMat()); rod.position.y = -S.len / 2; arm.add(rod);
    const bob = new THREE.Mesh(new THREE.CylinderGeometry(S.bobR || 1, S.bobR || 1, 0.25, 28), new THREE.MeshPhysicalMaterial({ color: 0x8a6a2a, metalness: 0.8, roughness: 0.3, emissive: 0x2a1240, emissiveIntensity: 0.5 }));
    bob.rotation.x = Math.PI / 2; bob.rotation.z = S.dir; bob.position.y = -S.len; bob.castShadow = true; arm.add(bob);
    const face = createShadow(0.45); face.group.position.y = -S.len; arm.add(face.group);
    arm.position.set(...S.pivot);
    return;
  }
  arm.position.set(H.at[0], H.at[1] || 0, H.at[2]);
  if (H.kind === 'water') { // a garden sprinkler: base, spinning head, and a long arc of water
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 0.25, 16), Mat.plastic(0x3a9a4a)); base.position.y = 0.12; hz.group.add(base); base.position.x = H.at[0]; base.position.z = H.at[2];
    const head = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.5, 8), Mat.steel()); head.position.y = 0.45; arm.add(head);
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.6, 8), Mat.steel()); nozzle.rotation.z = Math.PI / 2; nozzle.position.set(0.3, 0.65, 0); arm.add(nozzle);
    const pts = []; for (let i = 0; i <= 16; i++) { const u = i / 16; pts.push(V(0.6 + u * (H.len - 0.6), 0.65 + Math.sin(u * Math.PI) * 1.2 - u * 0.6, 0)); }
    const jet = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 32, 0.1, 6), new THREE.MeshBasicMaterial({ color: 0xcfeeff, transparent: true, opacity: 0.75, depthWrite: false, blending: THREE.AdditiveBlending }));
    arm.add(jet);
    const splash = new THREE.Mesh(new THREE.CircleGeometry(0.7, 20), new THREE.MeshBasicMaterial({ map: softDotTexture(), color: 0xbfe4ff, transparent: true, opacity: 0.4, depthWrite: false })); splash.rotation.x = -Math.PI / 2; splash.position.set(H.len, 0.05, 0); arm.add(splash);
  } else { // a long shadowy arm reaching low across the floor, fingers grasping
    const segs = [], n = 9;
    for (let i = 0; i < n; i++) { const u = i / (n - 1), r = 0.45 - u * 0.25; const s = new THREE.Mesh(new THREE.SphereGeometry(r, 14, 10), darkMat()); s.position.set(0.4 + u * (H.len - 0.6), 0.4, 0); s.scale.set(1.6, 1, 1); arm.add(s); segs.push(s); }
    for (let f = 0; f < 3; f++) { const fg = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.6, 8), darkMat()); fg.rotation.z = -Math.PI / 2; fg.position.set(H.len + 0.15, 0.35, (f - 1) * 0.22); arm.add(fg); segs.push(fg); }
    const eye = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color: 0xff3040, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); eye.scale.set(0.5, 0.3, 1); eye.position.set(0.5, 0.9, 0); arm.add(eye);
    hz.wiggle = (t) => segs.forEach((s, i) => { s.position.z = Math.sin(t * 4 - i * 0.6) * 0.18 * (i / segs.length); });
  }
}

function buildRoamer(hz, H) {
  // a squoval loop (a rounded square: |x/rx|^n + |z/rz|^n = 1), or a list of points
  const pts = H.squoval ? Array.from({ length: 48 }, (_, i) => {
    const a = (i / 48) * Math.PI * 2, c = Math.cos(a), s_ = Math.sin(a), Q = H.squoval, e = 2 / Q.n;
    return [Q.x + Q.rx * Math.sign(c) * Math.pow(Math.abs(c), e), Q.z + Q.rz * Math.sign(s_) * Math.pow(Math.abs(s_), e)];
  }) : H.path;
  const loop = pts.map(([x, z]) => V(x, 0, z)); let L = 0; const segs = [];
  for (let i = 0; i < loop.length; i++) { const a = loop[i], b = loop[(i + 1) % loop.length], l = a.distanceTo(b); segs.push({ a, b, l, s: L }); L += l; }
  hz.loop = { segs, L }; hz.dist = 0;
  if (H.track) { // toy track under it: two rails on sleepers, following the loop
    const rail = Mat.steel(), wood = Mat.paint(0x6a4a2e, 0.8);
    for (const sg of segs) {
      const mid = sg.a.clone().add(sg.b).multiplyScalar(0.5), ang = Math.atan2(sg.b.x - sg.a.x, sg.b.z - sg.a.z);
      for (const off of [-0.45, 0.45]) { const r = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, sg.l + 0.06), rail); r.position.set(mid.x + Math.cos(ang) * off, 0.1, mid.z - Math.sin(ang) * off); r.rotation.y = ang; r.receiveShadow = true; hz.group.add(r); }
      const sl = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.06, 0.22), wood); sl.position.set(mid.x, 0.04, mid.z); sl.rotation.y = ang; sl.receiveShadow = true; hz.group.add(sl);
    }
  }
  const car = new THREE.Group(); hz.car = car; hz.group.add(car);
  if (H.kind === 'train') { // a runaway toy steam engine with a nightmare at the controls
    const red = Mat.paint(0xc8323a, 0.4), blk = Mat.paint(0x1c1d20, 0.5), gold = Mat.brass();
    const boiler = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 1.6, 18), red); boiler.rotation.x = Math.PI / 2; boiler.position.set(0, 0.75, 0.3); boiler.castShadow = true; car.add(boiler);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.0, 0.8), red); cab.position.set(0, 0.95, -0.75); cab.castShadow = true; car.add(cab);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.12, 1.0), blk); roof.position.set(0, 1.5, -0.75); car.add(roof);
    const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.12, 0.6, 12), blk); stack.position.set(0, 1.35, 0.8); car.add(stack);
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.04, 6, 18), gold); band.position.set(0, 0.75, 0.6); car.add(band);
    const wheels = [];
    for (const s of [-1, 1]) for (const z of [-0.7, 0, 0.6]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.12, 14), blk); w.rotation.z = Math.PI / 2; w.position.set(s * 0.5, 0.28, z); car.add(w); wheels.push(w); }
    const driver = createShadow(0.38); driver.group.position.set(0, 1.0, -0.75); car.add(driver.group);
    const lamp = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color: 0xffe0a0, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); lamp.scale.setScalar(1.1); lamp.position.set(0, 0.85, 1.15); car.add(lamp);
    car.scale.setScalar(1.45);
    hz.carTick = (t) => { wheels.forEach((w) => (w.rotation.x = t * 9)); driver.update(1 / 60, t); };
  } else { // a wind-up toy car, key turning, a nightmare grinning on the bonnet
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.5, 1.7), Mat.plastic(0x3f8fd8)); body.position.y = 0.45; body.castShadow = true; car.add(body);
    const top = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.4, 0.8), Mat.plastic(0xf2b632)); top.position.set(0, 0.88, -0.15); car.add(top);
    const key = new THREE.Group(); key.position.set(0, 0.95, -0.95); car.add(key);
    const k1 = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.05, 6, 14), Mat.brass()); k1.position.y = 0.2; key.add(k1);
    const wheels = [];
    for (const s of [-1, 1]) for (const z of [-0.55, 0.55]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.16, 14), Mat.paint(0x1c1d20, 0.6)); w.rotation.z = Math.PI / 2; w.position.set(s * 0.58, 0.24, z); car.add(w); wheels.push(w); }
    const imp = createShadow(0.34); imp.group.position.set(0, 1.0, 0.55); car.add(imp.group);
    for (const sx of [-0.35, 0.35]) { const l = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color: 0xfff0b0, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); l.scale.setScalar(0.6); l.position.set(sx, 0.5, 0.9); car.add(l); }
    car.scale.setScalar(1.35);
    hz.carTick = (t) => { key.rotation.z = t * 4; wheels.forEach((w) => (w.rotation.x = t * 12)); imp.update(1 / 60, t); };
  }
}

function loopPoint(loop, dist) {
  let s = ((dist % loop.L) + loop.L) % loop.L;
  for (const g of loop.segs) { if (s <= g.l) { const k = s / g.l; return [g.a.x + (g.b.x - g.a.x) * k, g.a.z + (g.b.z - g.a.z) * k, Math.atan2(g.b.x - g.a.x, g.b.z - g.a.z)]; } s -= g.l; }
  const g = loop.segs[0]; return [g.a.x, g.a.z, 0];
}
