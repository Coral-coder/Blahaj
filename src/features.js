// Chapter features beyond "reach the light": things to collect before the way
// opens, toy buttons that open gates, warm-air updrafts to glide on, and the
// flying and dangling nightmares (moths, spiders). Everything is described in
// the chapter data (chapters.js) and driven from game.js.
import * as THREE from 'three';
import { CFG } from './config.js';
import { Audio } from './audio.js';
import { Mat } from './materials.js';
import { softDotTexture } from './textures.js';
import { getShadowMat } from './characters.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const sh = (m) => { m.castShadow = true; m.receiveShadow = true; return m; };

// ----------------------------------------------------------- collectibles --
export const ITEMS = {
  letter: { icon: '🔤', name: 'fridge magnets' },
  sock: { icon: '🧦', name: 'lost socks' },
  firefly: { icon: '✨', name: 'fireflies' },
  battery: { icon: '🔋', name: 'batteries' },
  bulb: { icon: '💡', name: 'light bulbs' },
  puzzle: { icon: '🧩', name: 'puzzle pieces' },
  duck: { icon: '🦆', name: 'rubber ducks' },
  button: { icon: '🔘', name: 'buttons' },
  marble: { icon: '🔮', name: 'marbles' },
  key: { icon: '🗝️', name: 'dream keys' },
};
const LETTER_COLORS = { L: 0xe5484d, E: 0x3f8fd8, O: 0xf2b632, '♥': 0xf06292 };
function letterMesh(ch) {
  const g = new THREE.Group(), mat = Mat.plastic(LETTER_COLORS[ch] || 0x4fb06a);
  const bar = (w, h, x, y) => { const m = sh(new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.18), mat)); m.position.set(x, y, 0); g.add(m); };
  if (ch === '♥') {
    const hs = new THREE.Shape(); hs.moveTo(0, -0.32); hs.bezierCurveTo(-0.5, 0.02, -0.32, 0.4, 0, 0.18); hs.bezierCurveTo(0.32, 0.4, 0.5, 0.02, 0, -0.32);
    const geo = new THREE.ExtrudeGeometry(hs, { depth: 0.14, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 3 }); geo.center();
    g.add(sh(new THREE.Mesh(geo, Mat.plastic(0xf06292))));
  } else if (ch === 'O') { const m = sh(new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.1, 12, 24), mat)); m.scale.set(0.85, 1.1, 1.6); g.add(m); }
  else if (ch === 'L') { bar(0.17, 0.75, -0.15, 0); bar(0.5, 0.17, 0.02, -0.29); }
  else { bar(0.17, 0.75, -0.18, 0); for (const y of [0.29, 0, -0.29]) bar(y === 0 ? 0.36 : 0.48, 0.15, 0.02, y); }
  return g;
}
function stripeTexture(a, b) {
  const c = document.createElement('canvas'); c.width = 16; c.height = 64;
  const x = c.getContext('2d');
  for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? a : b; x.fillRect(0, i * 8, 16, 8); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
const SOCKS = [['#e5484d', '#ffffff'], ['#3f8fd8', '#ffe066'], ['#4fb06a', '#f4f1ea'], ['#a46ad8', '#ffb3d1']];
export function createItem(kind, opt = {}) {
  const g = new THREE.Group(), inner = new THREE.Group(); g.add(inner);
  let glowColor = 0xfff1c0;
  switch (kind) {
    case 'letter': inner.add(letterMesh(opt.ch || 'L')); glowColor = LETTER_COLORS[opt.ch] || 0xffffff; break;
    case 'sock': {
      const [a, b] = SOCKS[(opt.i || 0) % SOCKS.length];
      const mat = new THREE.MeshPhysicalMaterial({ map: stripeTexture(a, b), roughness: 0.9, sheen: 0.8, sheenColor: new THREE.Color(0xffffff) });
      const leg = sh(new THREE.Mesh(new THREE.CapsuleGeometry(0.17, 0.5, 6, 14), mat)); leg.position.y = 0.15; inner.add(leg);
      const foot = sh(new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.32, 6, 14), mat)); foot.rotation.z = Math.PI / 2; foot.position.set(0.18, -0.2, 0); inner.add(foot);
      inner.rotation.z = 0.25; glowColor = 0xffffff; break;
    }
    case 'firefly': {
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.13, 14, 10), new THREE.MeshStandardMaterial({ color: 0x2a2a1a, roughness: 0.6 })); body.scale.set(1, 1, 1.6); inner.add(body);
      const tail = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 10), new THREE.MeshStandardMaterial({ color: 0xd9ff6a, emissive: 0xc8ff40, emissiveIntensity: 3 })); tail.position.z = -0.18; inner.add(tail);
      const wingMat = new THREE.MeshBasicMaterial({ color: 0xe8f4ff, transparent: true, opacity: 0.45, side: THREE.DoubleSide, depthWrite: false });
      for (const s of [-1, 1]) { const w = new THREE.Mesh(new THREE.CircleGeometry(0.16, 12), wingMat); w.scale.set(0.6, 1, 1); w.position.set(s * 0.12, 0.08, 0); w.rotation.set(-Math.PI / 2, 0, s * 0.5); w.userData.wing = s; inner.add(w); }
      glowColor = 0xd9ff6a; break;
    }
    case 'battery': {
      const body = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.75, 20), Mat.plastic(opt.color || 0x2f6fd0))); inner.add(body);
      const band = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.205, 0.205, 0.28, 20), Mat.plastic(0x1a1a1a))); band.position.y = 0.2; inner.add(band);
      const nub = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.08, 12), Mat.brass())); nub.position.y = 0.41; inner.add(nub);
      inner.rotation.z = 0.5; glowColor = 0x9fd0ff; break;
    }
    case 'bulb': {
      const glass = new THREE.Mesh(new THREE.SphereGeometry(0.26, 20, 14), new THREE.MeshStandardMaterial({ color: 0xfff6d8, emissive: 0xffd27a, emissiveIntensity: 1.2, transparent: true, opacity: 0.85 }));
      glass.scale.set(1, 1.15, 1); glass.position.y = 0.12; inner.add(glass);
      const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.16, 0.16, 16), glass.material); neck.position.y = -0.12; inner.add(neck);
      const base = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.1, 0.2, 16), Mat.steel())); base.position.y = -0.27; inner.add(base);
      glowColor = 0xffd27a; break;
    }
    case 'puzzle': {
      const s = new THREE.Shape(), k = 0.11;
      s.moveTo(-0.3, -0.3); s.lineTo(-0.05, -0.3); s.absarc(0, -0.3, k * 0.5, Math.PI, 0, true); s.lineTo(0.3, -0.3); s.lineTo(0.3, -0.05);
      s.absarc(0.3 + k * 0.6, 0, k, Math.PI * 1.2, Math.PI * 0.8, false); s.lineTo(0.3, 0.3); s.lineTo(0.05, 0.3); s.absarc(0, 0.3 + k * 0.6, k, -Math.PI * 0.2, Math.PI * 1.2, false);
      s.lineTo(-0.3, 0.3); s.lineTo(-0.3, -0.3);
      const geo = new THREE.ExtrudeGeometry(s, { depth: 0.1, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 2 }); geo.center();
      inner.add(sh(new THREE.Mesh(geo, Mat.plastic(opt.color || [0xe5484d, 0x3f8fd8, 0xf2b632, 0x4fb06a][(opt.i || 0) % 4]))));
      glowColor = 0xffffff; break;
    }
    case 'duck': {
      const y = Mat.plastic(0xffd23a);
      const body = sh(new THREE.Mesh(new THREE.SphereGeometry(0.3, 20, 14), y)); body.scale.set(1, 0.75, 1.25); inner.add(body);
      const head = sh(new THREE.Mesh(new THREE.SphereGeometry(0.19, 18, 12), y)); head.position.set(0, 0.28, 0.2); inner.add(head);
      const beak = sh(new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.18, 12), Mat.plastic(0xff7a2a))); beak.rotation.x = Math.PI / 2; beak.position.set(0, 0.25, 0.42); inner.add(beak);
      const tail = sh(new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.2, 10), y)); tail.rotation.x = -2.2; tail.position.set(0, 0.12, -0.38); inner.add(tail);
      for (const s of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), new THREE.MeshBasicMaterial({ color: 0x111111 })); e.position.set(s * 0.09, 0.33, 0.35); inner.add(e); }
      glowColor = 0xffe066; break;
    }
    case 'button': {
      const mat = Mat.plastic(opt.color || [0xd94f6b, 0x3f8fd8, 0x4fb06a][(opt.i || 0) % 3]);
      const disk = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.1, 28), mat)); disk.rotation.x = Math.PI / 2; inner.add(disk);
      const rim = sh(new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.04, 8, 28), mat)); rim.position.z = 0.04; inner.add(rim);
      for (const [x, y] of [[-0.08, 0.08], [0.08, 0.08], [-0.08, -0.08], [0.08, -0.08]]) { const h = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.12, 8), new THREE.MeshBasicMaterial({ color: 0x221a16 })); h.rotation.x = Math.PI / 2; h.position.set(x, y, 0.01); inner.add(h); }
      glowColor = 0xffc0d0; break;
    }
    case 'marble': {
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.24, 24, 16), new THREE.MeshPhysicalMaterial({ color: opt.color || [0x58c4ff, 0xff6b9a, 0x7dff9a][(opt.i || 0) % 3], roughness: 0.05, transmission: 0.6, thickness: 0.4, clearcoat: 1, emissive: 0x112233, emissiveIntensity: 0.3 }));
      inner.add(m); glowColor = 0xbfe8ff; break;
    }
    default: { // dream key
      const gold = Mat.gold ? Mat.gold() : Mat.brass();
      const ring = sh(new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.05, 10, 24), gold)); ring.position.y = 0.25; inner.add(ring);
      const shaft = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.55, 10), gold)); shaft.position.y = -0.12; inner.add(shaft);
      for (const y of [-0.3, -0.18]) { const t = sh(new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.06, 0.05), gold)); t.position.set(0.08, y, 0); inner.add(t); }
      glowColor = 0xffe08a;
    }
  }
  // collectibles glow faintly from within so they read in the dark
  inner.traverse((o) => {
    if (!o.isMesh || !o.material.color || !o.material.emissive || o.material.userData.lit) return;
    o.material = o.material.clone(); o.material.userData.lit = true;
    if (o.material.emissive.getHex() === 0) { o.material.emissive.copy(o.material.color).multiplyScalar(0.4); o.material.emissiveIntensity = 1; }
  });
  inner.scale.setScalar(1.25);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color: glowColor, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.scale.setScalar(kind === 'firefly' ? 1.3 : 1.5); g.add(glow);
  g.userData = { inner, glow };
  return g;
}

// ------------------------------------------------------------- gate button --
function createButton(color = 0xe5484d) {
  const g = new THREE.Group();
  const base = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.85, 0.22, 32), Mat.plastic(0xf2efe6))); base.position.y = 0.11; g.add(base);
  const cap = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.56, 0.22, 32), Mat.plastic(color))); cap.position.y = 0.3; g.add(cap);
  const shine = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color, transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending }));
  shine.scale.setScalar(1.6); shine.position.y = 0.5; g.add(shine);
  return { group: g, cap, shine };
}

// ---------------------------------------------------------------- nightmares --
function wingTexture() {
  const c = document.createElement('canvas'); c.width = 64; c.height = 64;
  const x = c.getContext('2d'), gr = x.createRadialGradient(20, 32, 2, 32, 32, 32);
  gr.addColorStop(0, 'rgba(120,60,200,0.95)'); gr.addColorStop(0.55, 'rgba(40,12,70,0.9)'); gr.addColorStop(1, 'rgba(10,4,20,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
  x.fillStyle = 'rgba(255,200,90,0.8)'; x.beginPath(); x.arc(30, 30, 5, 0, Math.PI * 2); x.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
let WING = null;
export function createMoth(scale = 1) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.6, 6, 12), getShadowMat()); body.rotation.x = Math.PI / 2; g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 10), getShadowMat()); head.position.z = 0.55; g.add(head);
  WING = WING || wingTexture();
  const wm = new THREE.MeshBasicMaterial({ map: WING, transparent: true, side: THREE.DoubleSide, depthWrite: false });
  const wings = [];
  for (const s of [-1, 1]) for (const f of [0, 1]) {
    const pivot = new THREE.Group(); pivot.position.set(s * 0.15, 0.1, f ? -0.15 : 0.2); g.add(pivot);
    const w = new THREE.Mesh(new THREE.PlaneGeometry(f ? 0.9 : 1.2, f ? 0.7 : 0.9), wm); w.rotation.x = -Math.PI / 2; w.position.x = s * (f ? 0.45 : 0.6); pivot.add(w);
    wings.push({ pivot, s, f });
  }
  for (const s of [-1, 1]) {
    const e = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color: 0xffb02a, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    e.scale.set(0.26, 0.2, 1); e.position.set(s * 0.14, 0.12, 0.8); g.add(e);
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.5, 4), getShadowMat()); ant.position.set(s * 0.12, 0.35, 0.75); ant.rotation.set(0.6, 0, s * 0.4); g.add(ant);
  }
  g.scale.setScalar(scale);
  return { group: g, update(dt, t) { for (const w of wings) w.pivot.rotation.z = w.s * (Math.sin(t * 18 + w.f) * 0.7 + 0.2); } };
}
export function createSpider(scale = 1) {
  const g = new THREE.Group();
  const thread = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 1, 4), new THREE.MeshBasicMaterial({ color: 0xbfc8e8, transparent: true, opacity: 0.5 }));
  g.add(thread);
  const body = new THREE.Group(); g.add(body);
  const abd = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 12), getShadowMat()); abd.scale.set(1, 0.9, 1.15); abd.position.z = -0.25; body.add(abd);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.26, 14, 10), getShadowMat()); head.position.z = 0.3; body.add(head);
  const legs = [];
  for (const s of [-1, 1]) for (let i = 0; i < 4; i++) {
    const pv = new THREE.Group(); pv.position.set(s * 0.2, 0, 0.2 - i * 0.16); body.add(pv);
    const a = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.03, 0.55, 5), getShadowMat()); a.position.set(s * 0.25, 0.12, 0); a.rotation.z = s * 1.1; pv.add(a);
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.02, 0.6, 5), getShadowMat()); b.position.set(s * 0.58, -0.08, 0); b.rotation.z = -s * 0.5; pv.add(b);
    legs.push({ pv, s, i });
  }
  for (const s of [-1, 1]) for (const k of [0, 1]) {
    const e = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color: 0xff4a3a, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    e.scale.setScalar(k ? 0.12 : 0.18); e.position.set(s * (k ? 0.08 : 0.12), k ? 0.18 : 0.1, 0.52); body.add(e);
  }
  g.scale.setScalar(scale);
  return {
    group: g, body, thread,
    setThread(len) { thread.scale.y = Math.max(0.01, len); thread.position.y = len / 2; },
    update(dt, t) { for (const L of legs) L.pv.rotation.y = Math.sin(t * 6 + L.i * 1.3) * 0.15 * L.s; },
  };
}

// 3D platform paths: a list of points, travelled back and forth (or round in a
// loop) at `speed`, pausing `wait` seconds at each end/point
export function pathPoint3(mv, t) {
  if (!mv._legs) {
    const pts = mv.path3, legs = [], seq = mv.loop ? pts.concat([pts[0]]) : pts.concat(pts.slice(0, -1).reverse());
    for (let i = 0; i + 1 < seq.length; i++) {
      const a = seq[i], b = seq[i + 1], L = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      legs.push({ a, b, T: L / (mv.speed || 1) });
      if (mv.wait) legs.push({ a: b, b, T: mv.wait });
    }
    mv._legs = legs; mv._T = legs.reduce((s, l) => s + l.T, 0);
  }
  let u = ((t + (mv.phase || 0)) % mv._T + mv._T) % mv._T;
  for (const l of mv._legs) {
    if (u <= l.T) {
      const k0 = l.T > 0 ? u / l.T : 1, k = k0 * k0 * (3 - 2 * k0); // ease in and out
      return [l.a[0] + (l.b[0] - l.a[0]) * k, l.a[1] + (l.b[1] - l.a[1]) * k, l.a[2] + (l.b[2] - l.a[2]) * k, Math.atan2(l.b[0] - l.a[0], l.b[2] - l.a[2])];
    }
    u -= l.T;
  }
  const p = mv.path3[0]; return [p[0], p[1], p[2], 0];
}

// ------------------------------------------------------------------ setup --
export function buildFeatures(game, ch, scene) {
  const F = { items: [], buttons: [], gates: {}, wind: ch.wind || [], collect: ch.collect || null, got: 0, windT: 0 };
  // collectibles
  if (F.collect) {
    F.collect.items.forEach((it, i) => {
      const at = Array.isArray(it) ? it : it.at;
      const m = createItem(F.collect.kind, Object.assign({ i }, Array.isArray(it) ? {} : it));
      m.position.set(...at); scene.add(m);
      F.items.push({ m, pos: V(...at), taken: false, out: 0, ph: i * 1.3 });
    });
  }
  // gates: any prop with gate: 'id' is removed when a button with that id is pressed
  for (const s of game.solids) if (s.prefab && s.prefab.gate) (F.gates[s.prefab.gate] = F.gates[s.prefab.gate] || { solids: [], props: new Set(), open: 0 }).solids.push(s);
  for (const p of ch.props) if (p.gate && F.gates[p.gate]) F.gates[p.gate].props.add(p);
  for (const sw of ch.switches || []) {
    const b = createButton(sw.color);
    b.group.position.set(...sw.at); scene.add(b.group);
    const solid = { min: V(sw.at[0] - 0.6, sw.at[1], sw.at[2] - 0.6), max: V(sw.at[0] + 0.6, sw.at[1] + 0.3, sw.at[2] + 0.6), active: true, kind: 'solid', tag: 'button', type: 'solid', delta: V() };
    game.solids.push(solid);
    F.buttons.push({ sw, b, solid, pressed: false, k: 0 });
  }
  // updrafts: wisps rising from vents and fans
  F.windFx = F.wind.map((w) => ({ w }));
  // moths and spiders join the regular enemy list (so defeat() and the fade-out work)
  for (const e of ch.enemies) {
    if (e.type === 'moth') {
      const s = createMoth(e.scale || 1); scene.add(s.group);
      game.enemies.push({ e, s, type: 'moth', pos: V(...e.path[0]), alive: true, deadT: 0, t: e.phase || 0, hitCool: 0, heading: 0, mv: { path3: e.path, loop: true, speed: e.speed || 1.6 } });
    } else if (e.type === 'spider') {
      const s = createSpider(e.scale || 1); scene.add(s.group);
      game.enemies.push({ e, s, type: 'spider', pos: V(...e.at), alive: true, deadT: 0, t: e.phase || 0, hitCool: 0 });
    }
  }
  return F;
}

export function collectLeft(F) { return F.collect ? F.items.length - F.got : 0; }

// physics-side: inside an updraft, warm air lifts you (a lot while gliding)
export function applyWind(game, dt) {
  const P = game.p, F = game.features;
  P.inWind = false;
  for (const w of F.wind) {
    const dx = P.pos.x - w.x, dz = P.pos.z - w.z;
    if (dx * dx + dz * dz > w.r * w.r || P.pos.y < w.y0 - 0.5 || P.pos.y > w.y1) continue;
    P.inWind = true;
    if (P.grounded && !P.glide) continue;
    const max = P.glide ? CFG.updraftMax : 2.5, acc = P.glide ? CFG.updraft : 18;
    if (P.vel.y < max) P.vel.y = Math.min(max, P.vel.y + acc * dt);
  }
}

export function stepFeatures(game, dt) {
  const F = game.features, P = game.p, c = P.pos.clone().add(V(0, CFG.height / 2, 0));
  // collectibles
  for (const it of F.items) {
    if (it.taken || it.pos.distanceToSquared(c) > 1.1) continue;
    it.taken = true; it.out = 0.001; F.got++;
    const left = F.items.length - F.got, info = ITEMS[F.collect.kind] || ITEMS.key;
    Audio.star(); game.addComfort(8);
    game.sparks.burst(it.pos, 30, { color: new THREE.Color(0xfff1c0), speed: 6, life: 0.8, size: 0.3 });
    if (left) game.hooks.toast(`${info.icon} ${F.got} of ${F.items.length} ${F.collect.label || info.name}`, F.collect.hint || 'Keep looking!');
    else { game.hooks.toast(F.collect.done || 'You found them all!', 'The way is open'); Audio.checkpoint(); }
    game.hudDirty = true;
  }
  // buttons: stand (or flop) on one
  for (const bt of F.buttons) {
    if (bt.pressed) continue;
    const s = bt.solid;
    if (P.grounded && P.ground === s) {
      bt.pressed = true; Audio.pound(); Audio.checkpoint(); game.cam.shake = 0.2;
      const gt = F.gates[bt.sw.gate];
      if (gt) { gt.opening = true; for (const so of gt.solids) so.active = false; }
      game.hooks.toast(bt.sw.toast || 'Click!', bt.sw.hint || 'Something opened…');
      game.sparks.burst(V(s.min.x + 0.6, s.max.y + 0.3, s.min.z + 0.6), 24, { color: new THREE.Color(0xffe2a8), speed: 5, life: 0.7, size: 0.3 });
    }
  }
  // moths: drift along a loop in the air; stomp them from above or dash through
  for (const e of game.enemies) {
    if (!e.alive || (e.type !== 'moth' && e.type !== 'spider')) continue;
    e.hitCool -= dt; e.t += dt;
    if (e.type === 'moth') {
      const [x, y, z, h] = pathPoint3(e.mv, e.t);
      e.pos.set(x, y + Math.sin(e.t * 3) * 0.25, z); e.heading = h;
    } else {
      const e_ = e.e, period = e_.period || 4, k = (e.t % period) / period;
      // hangs, drops fast, waits, climbs back slowly
      const d = k < 0.35 ? 0 : k < 0.45 ? (k - 0.35) / 0.1 : k < 0.65 ? 1 : 1 - (k - 0.65) / 0.35;
      e.drop = d * (e_.drop || 3);
      e.pos.set(e_.at[0], e_.at[1] - e.drop, e_.at[2]);
    }
    const ec = e.pos.clone().add(V(0, e.type === 'spider' ? -0.2 : 0, 0)), d = ec.distanceTo(c), rr = (e.e.scale || 1) * 0.95;
    if (d < rr + 0.45) {
      if (P.pound || (P.vel.y < -0.5 && c.y > ec.y + 0.15) || P.dashT > 0) { game.defeat(e); P.vel.y = CFG.stompBounce; P.pound = 0; P.canDouble = !!game.ab.doubleJump; P.dashUsed = false; }
      else if (e.hitCool <= 0) { e.hitCool = 1; game.hurt(e.pos, 12, e.type === 'moth' ? 'A nightmare moth!' : 'Eek! A dream spider!'); }
    }
  }
}

export function visualFeatures(game, dt) {
  const F = game.features, t = game.clock, P = game.p;
  for (const it of F.items) {
    const ud = it.m.userData;
    if (it.out) { it.out += dt; const k = Math.max(0, 1 - it.out * 3); it.m.position.lerp(P.pos.clone().add(V(0, 0.8, 0)), Math.min(1, dt * 10)); it.m.scale.setScalar(Math.max(0.001, k * (1 + it.out))); if (k <= 0) it.m.visible = false; continue; }
    ud.inner.rotation.y = t * 1.8 + it.ph;
    it.m.position.y = it.pos.y + Math.sin(t * 2.4 + it.ph) * 0.14;
    ud.glow.material.opacity = 0.45 + Math.sin(t * 3 + it.ph) * 0.15;
    if (F.collect.kind === 'firefly') { it.m.position.x = it.pos.x + Math.sin(t * 1.3 + it.ph) * 0.3; ud.inner.children.forEach((w) => { if (w.userData.wing) w.rotation.y = Math.sin(t * 40) * 0.6 * w.userData.wing; }); }
  }
  for (const bt of F.buttons) {
    bt.k += ((bt.pressed ? 1 : 0) - bt.k) * Math.min(1, dt * 12);
    bt.b.cap.position.y = 0.3 - bt.k * 0.16;
    bt.b.shine.material.opacity = bt.pressed ? 0.15 : 0.4 + Math.sin(t * 4) * 0.2;
  }
  for (const id in F.gates) {
    const gt = F.gates[id];
    if (!gt.opening || gt.open >= 1) continue;
    gt.open = Math.min(1, gt.open + dt * 1.2);
    const e = gt.open * gt.open;
    for (const p of gt.props) if (p._visual) {
      if (!p._base) { p._base = p._visual.position.clone(); p._visual.traverse((o) => { o.matrixAutoUpdate = true; }); }
      const mv = p.gateMove || [0, -4, 0]; // slide aside into the wall (or drop away)
      p._visual.position.set(p._base.x + mv[0] * e, p._base.y + mv[1] * e, p._base.z + mv[2] * e);
    }
  }
  // updraft wisps
  F.windT += dt;
  for (const w of F.wind) {
    if (Math.random() < dt * 30 * (w.r / 1.5)) {
      const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * w.r;
      game.sparks.emit({ p: V(w.x + Math.cos(a) * r, w.y0 + 0.2, w.z + Math.sin(a) * r), v: V(0, 3 + Math.random() * 2.5, 0), life: (w.y1 - w.y0) / 4.5, size: 0.14 + Math.random() * 0.12, color: new THREE.Color(w.color || 0xd6ecff), alpha: 0.45, drag: 0 });
    }
  }
  for (const e of game.enemies) {
    if (!e.alive) continue;
    if (e.type === 'moth') e.s.group.rotation.y = e.heading;
    if (e.type === 'spider') { e.s.setThread(e.drop + 0.3); e.s.thread.position.y = (e.drop + 0.3) / 2; e.s.body.position.y = 0; e.s.group.position.copy(e.pos); }
  }
}
