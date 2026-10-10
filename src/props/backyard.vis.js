// The back garden at night: trampoline, swings, a big old tree with a
// treehouse, the shed, the playhouse, and the little things kids leave out.
import * as THREE from 'three';
import { Mat } from '../materials.js';
import { textTexture, softDotTexture } from '../textures.js';
import { box, cyl, sh, hashf } from '../rooms.js';

const bark = () => Mat.woodDark();
// leaves catch a little moonlight so the tree reads against the night sky
const leafMat = () => { const m = Mat.hedge(); if (!m.userData.lit) { m.userData.lit = true; m.emissive = new THREE.Color(0x1d3a24); m.emissiveIntensity = 0.55; } return m; };

// one little flower: stem, a leaf, a ring of petals and a yellow middle (shared geometry keeps it cheap)
const FG = {};
function flower(g, x, y, z, stem, color, seed = 0) {
  FG.stem ||= new THREE.CylinderGeometry(0.025, 0.035, 1, 5).translate(0, 0.5, 0);
  FG.petal ||= new THREE.SphereGeometry(0.1, 8, 6).scale(1, 0.32, 0.55).translate(0.1, 0, 0);
  FG.mid ||= new THREE.SphereGeometry(0.065, 8, 6).scale(1, 0.6, 1);
  FG.leaf ||= new THREE.SphereGeometry(0.12, 6, 4).scale(1, 0.15, 0.45).translate(0.12, 0, 0);
  const green = Mat.paint(0x3f7a3a, 0.8), pm = Mat.plastic(color);
  const f = new THREE.Group(); f.position.set(x, y, z); f.rotation.set((hashf(seed, 7) - 0.5) * 0.25, hashf(seed, 8) * 6.28, (hashf(seed, 9) - 0.5) * 0.25); g.add(f);
  const st = new THREE.Mesh(FG.stem, green); st.scale.y = stem; f.add(st);
  const lf = new THREE.Mesh(FG.leaf, green); lf.position.y = stem * 0.4; lf.rotation.z = 0.5; f.add(lf);
  const head = new THREE.Group(); head.position.y = stem; head.rotation.z = 0.25; f.add(head);
  const n = 5 + Math.floor(hashf(seed, 5) * 2);
  for (let i = 0; i < n; i++) { const pe = new THREE.Mesh(FG.petal, pm); pe.rotation.set(0, (i / n) * Math.PI * 2, 0.18); head.add(pe); }
  const mid = new THREE.Mesh(FG.mid, Mat.plastic(0xf2c230)); mid.position.y = 0.03; head.add(mid);
  return f;
}

export const BACKYARD = {
  trampoline(p) {
    const g = new THREE.Group(), r = p.r || 3.2, h = p.h || 1.6;
    const mat = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.86, r * 0.86, 0.08, 40), new THREE.MeshStandardMaterial({ color: 0x1a1d24, roughness: 0.9 })); mat.position.y = h - 0.1; mat.receiveShadow = true; g.add(mat);
    const pad = sh(new THREE.Mesh(new THREE.TorusGeometry(r * 0.93, 0.22, 10, 48), Mat.plastic(0x3f8fd8))); pad.rotation.x = Math.PI / 2; pad.position.y = h - 0.05; g.add(pad);
    for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; const leg = cyl(g, 0.08, 0.08, h, Mat.steel(), Math.cos(a) * r * 0.9, 0, Math.sin(a) * r * 0.9, 8); leg.rotation.z = 0; }
    // the safety net poles curving up and a sagging net
    for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2 + 0.26; cyl(g, 0.07, 0.07, 3.0, Mat.plastic(0x3f8fd8), Math.cos(a) * r * 0.97, h, Math.sin(a) * r * 0.97, 8); }
    const net = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.97, r * 0.97, 2.8, 32, 1, true), new THREE.MeshBasicMaterial({ color: 0x223040, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false }));
    net.position.y = h + 1.4; g.add(net);
    void p; return g;
  },
  swingFrame(p) {
    const g = new THREE.Group(), w = p.w || 8, h = p.h || 8, red = Mat.paint(0xd9584a, 0.5);
    box(g, w + 0.6, 0.4, 0.4, red, 0, h - 0.4, 0, 0.1, 1);
    for (const s of [-1, 1]) for (const t of [-1, 1]) { const leg = cyl(g, 0.13, 0.13, h * 1.05, red, s * w / 2, 0, t * 1.3, 10); leg.rotation.x = -t * 0.17; leg.position.z = t * 0.65; }
    return g;
  },
  swingSeat(p) {
    const g = new THREE.Group(), barY = (p.top || 8) - 0.3;
    const seat = box(g, 1.6, 0.25, 0.9, Mat.plastic(0xf2b632), 0, 0, 0, 0.08, 1);
    // the chains hang from the bar: a frame pivoting at the seat that always points up at the hook
    const hang = new THREE.Group(); g.add(hang);
    const chains = [];
    for (const s of [-1, 1]) {
      const ch = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1, 6), Mat.steel()); ch.geometry.translate(0, 0.5, 0); ch.position.set(s * 0.7, 0.2, 0); ch.castShadow = true; hang.add(ch); chains.push(ch);
      const hook = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.03, 6, 12), Mat.steel()); hook.position.set(s * 0.7, 0.2, 0); hook.rotation.y = Math.PI / 2; hang.add(hook);
    }
    const aim = () => {
      const dz = (p.pivotZ !== undefined ? p.pivotZ : g.position.z) - g.position.z, dy = barY - g.position.y - 0.2;
      const th = Math.atan2(dz, dy), L = Math.hypot(dz, dy);
      hang.rotation.x = th; for (const c of chains) c.scale.y = L;
      seat.rotation.x = th * 0.35; // the seat rocks a little with the chains
    };
    g.position.set(p.x, p.y || 0, p.z); aim();
    g.userData.tick = aim;
    return g;
  },
  playhouse(p) {
    const g = new THREE.Group(), w = p.w || 5, h = p.h || 6, d = p.d || 4.4;
    box(g, w, h - 0.35, d, Mat.paint(0xf2e3b8, 0.8), 0, 0, 0, 0.08, 0.4);
    // a flat red roof you can stand on, with a little picket rail, shutters, a door and a window box
    box(g, w + 0.4, 0.35, d + 0.4, Mat.paint(0xd9584a, 0.6), 0, h - 0.35, 0, 0.06, 0.5);
    for (const s of [-1, 1]) {
      box(g, w + 0.2, 0.12, 0.12, Mat.paint(0xffffff, 0.6), 0, h + 0.75, s * (d / 2 + 0.05), 0.02, 1);
      box(g, 0.12, 0.12, d + 0.2, Mat.paint(0xffffff, 0.6), s * (w / 2 + 0.05), h + 0.75, 0, 0.02, 1);
      for (let i = 0; i <= 6; i++) { box(g, 0.1, 0.8, 0.1, Mat.paint(0xffffff, 0.6), -w / 2 + (w * i) / 6, h, s * (d / 2 + 0.05), 0.02, 1); box(g, 0.1, 0.8, 0.1, Mat.paint(0xffffff, 0.6), s * (w / 2 + 0.05), h, -d / 2 + (d * i) / 6, 0.02, 1); }
    }
    box(g, 1.4, 2.6, 0.08, Mat.paint(0x3f8fd8, 0.6), -0.8, 0, d / 2 + 0.02, 0.04, 1);
    const win = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.0), new THREE.MeshBasicMaterial({ color: 0xffd69a })); win.position.set(1.3, 2.4, d / 2 + 0.03); g.add(win);
    for (const s of [-1, 1]) box(g, 0.35, 1.1, 0.06, Mat.paint(0x4fb06a, 0.6), 1.3 + s * 0.8, 1.85, d / 2 + 0.04, 0.02, 1);
    box(g, 1.5, 0.3, 0.35, Mat.paint(0x4fb06a, 0.6), 1.3, 1.62, d / 2 + 0.2, 0.03, 1); // window box
    for (let i = 0; i < 4; i++) flower(g, 0.82 + i * 0.32, 1.9, d / 2 + 0.2, 0.32 + hashf(i, 2) * 0.12, [0xe5484d, 0xf2b632, 0xd94f6b, 0xa46ad8][i], i + 40);
    return g;
  },
  sandbox(p) {
    const g = new THREE.Group(), w = p.w || 6, d = p.d || 4;
    for (const [x, z, ww, dd] of [[0, d / 2 - 0.2, w, 0.4], [0, -d / 2 + 0.2, w, 0.4], [w / 2 - 0.2, 0, 0.4, d], [-w / 2 + 0.2, 0, 0.4, d]]) box(g, ww, 0.8, dd, Mat.woodBoard(), x, 0, z, 0.05, 1);
    const sand = new THREE.Mesh(new THREE.BoxGeometry(w - 0.8, 0.7, d - 0.8), new THREE.MeshStandardMaterial({ color: 0xd9c08a, roughness: 1 })); sand.position.y = 0.35; sand.receiveShadow = true; g.add(sand);
    const bucket = cyl(g, 0.35, 0.28, 0.6, Mat.plastic(0xe5484d), 1.4, 0.7, 0.5, 16); bucket.rotation.z = 0.3;
    const spade = box(g, 0.25, 0.05, 0.9, Mat.plastic(0x3f8fd8), -1.2, 0.72, -0.4, 0.02, 1); spade.rotation.y = 0.6;
    const castle = cyl(g, 0.45, 0.55, 0.6, new THREE.MeshStandardMaterial({ color: 0xc9ab70, roughness: 1 }), -0.4, 0.7, 0.6, 12); void castle;
    return g;
  },
  shed(p) {
    const g = new THREE.Group(), w = p.w || 6, h = p.h || 8, d = p.d || 5;
    box(g, w, h - 1.2, d, Mat.fence(), 0, 0, 0, 0.05, 0.25);
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(0.01, (d / 2 + 0.6) * 1.15, w + 0.6, 4, 1), Mat.roof()); // a shallow pitched roof
    roof.rotation.set(0, 0, Math.PI / 2); roof.scale.set(1, 1, 0.35); roof.position.y = h - 1.2; void roof;
    box(g, w + 0.6, 1.2, d + 0.6, Mat.roof(), 0, h - 1.2, 0, 0.1, 0.4); // flat felt roof you can stand on
    box(g, 2.2, 4.6, 0.1, Mat.paint(0x6d8f5a, 0.7), 0, 0, d / 2 + 0.02, 0.04, 1);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), Mat.brass()); knob.position.set(0.7, 2.4, d / 2 + 0.15); g.add(knob);
    const win = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.0), new THREE.MeshBasicMaterial({ color: 0x1a2030 })); win.position.set(w / 2 + 0.01, 4.4, 0); win.rotation.y = Math.PI / 2; g.add(win);
    return g;
  },
  picnicTable() {
    const g = new THREE.Group(), wood = Mat.woodBoard();
    box(g, 6, 0.3, 2.6, wood, 0, 3.0, 0, 0.05, 0.6);
    for (const s of [-1, 1]) box(g, 6, 0.25, 1.0, wood, 0, 1.6, s * 2.0, 0.05, 0.6);
    for (const s of [-1, 1]) for (const t of [-1, 1]) { const leg = box(g, 0.3, 3.4, 0.3, wood, s * 2.4, -0.1, t * 0.9, 0.04, 1); leg.rotation.x = t * 0.42; }
    // a lantern and a forgotten juice box
    cyl(g, 0.22, 0.22, 0.6, Mat.glass(), 1.4, 3.3, 0.2, 12);
    box(g, 0.4, 0.6, 0.25, Mat.plastic(0x4fb06a), -1.6, 3.3, -0.3, 0.03, 1);
    return g;
  },
  bbq() {
    const g = new THREE.Group(), black = Mat.paint(0x1c1d20, 0.4);
    for (const [x, z] of [[-1, -0.7], [1, -0.7], [-1, 0.7], [1, 0.7]]) cyl(g, 0.07, 0.07, 2.4, Mat.steel(), x, 0, z, 8);
    const bowl = new THREE.Mesh(new THREE.SphereGeometry(1.3, 24, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), black); bowl.scale.set(1, 0.7, 0.75); bowl.position.y = 3.3; sh(bowl); g.add(bowl);
    const lid = new THREE.Mesh(new THREE.SphereGeometry(1.3, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), black); lid.scale.set(1, 0.6, 0.75); lid.position.y = 3.3; sh(lid); g.add(lid);
    cyl(g, 0.1, 0.1, 0.3, Mat.steel(), 0, 4.0, 0, 8);
    return g;
  },
  flowerPot(p) {
    const g = new THREE.Group(), r = p.r || 0.9, h = p.h || 1.6;
    cyl(g, r, r * 0.78, h, Mat.paint(0xc06a3a, 0.9), 0, 0, 0, 20);
    const soil = new THREE.Mesh(new THREE.CircleGeometry(r * 0.92, 20), Mat.paint(0x3a2618, 1)); soil.rotation.x = -Math.PI / 2; soil.position.y = h - 0.05; g.add(soil);
    const cols = [0xe5484d, 0xf2b632, 0xd94f6b, 0xa46ad8, 0xffffff];
    for (let i = 0; i < 7; i++) {
      const a = hashf(i, r) * Math.PI * 2, rr = hashf(r, i) * r * 0.6, stem = 0.6 + hashf(i, 3) * 0.7;
      flower(g, Math.cos(a) * rr, h - 0.05, Math.sin(a) * rr, stem, cols[(i + Math.round(r * 10)) % cols.length], i + r * 10);
    }
    return g;
  },
  bush(p) {
    const g = new THREE.Group(), r = p.r || 1.6, h = p.h || 2.6;
    for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2, s = sh(new THREE.Mesh(new THREE.IcosahedronGeometry(r * (0.55 + hashf(i, 9) * 0.15), 2), leafMat())); s.position.set(Math.cos(a) * r * 0.4, h * 0.5 + hashf(i, 4) * 0.4, Math.sin(a) * r * 0.4); g.add(s); }
    const top = sh(new THREE.Mesh(new THREE.IcosahedronGeometry(r * 0.75, 2), leafMat())); top.position.y = h * 0.7; top.scale.y = 0.75; g.add(top);
    return g;
  },
  tree(p) {
    const g = new THREE.Group(), h = p.h || 14;
    const trunk = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.4, h, 18, 8), bark()));
    const tp = trunk.geometry.attributes.position;
    for (let i = 0; i < tp.count; i++) { const y = tp.getY(i); tp.setX(i, tp.getX(i) + Math.sin(y * 0.4) * 0.15); tp.setZ(i, tp.getZ(i) + Math.cos(y * 0.3) * 0.12); }
    trunk.geometry.computeVertexNormals(); trunk.position.y = h / 2; g.add(trunk);
    for (const [x, y, z, w, d] of p.branches || []) { // each branch: a thick limb out to its platform, leaves around it
      const len = Math.hypot(x, z), limb = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.45, len + 0.8, 10), bark()));
      limb.position.set(x / 2, y - 0.35, z / 2); limb.rotation.set(0, Math.atan2(x, z), 0); limb.rotateX(Math.PI / 2); g.add(limb);
      const plat = box(g, w, 0.5, d, bark(), x, y - 0.5, z, 0.2, 0.5); plat.scale.set(1, 1, 1);
      for (let i = 0; i < 3; i++) { const lf = sh(new THREE.Mesh(new THREE.IcosahedronGeometry(1.0 + hashf(i, x) * 0.5, 1), leafMat())); lf.position.set(x + (hashf(i, z) - 0.5) * w, y + 1.6 + hashf(z, i) * 0.6, z + (hashf(y, i) - 0.5) * d * 1.4); g.add(lf); }
    }
    for (let i = 0; i < 9; i++) { // the crown
      const a = (i / 9) * Math.PI * 2, c = sh(new THREE.Mesh(new THREE.IcosahedronGeometry(3 + hashf(i, 1) * 1.2, 2), leafMat()));
      c.position.set(Math.cos(a) * 3.6, h + 1.5 + hashf(i, 2) * 2, Math.sin(a) * 3.6); g.add(c);
    }
    const crown = sh(new THREE.Mesh(new THREE.IcosahedronGeometry(4.6, 2), leafMat())); crown.position.y = h + 3.6; g.add(crown);
    return g;
  },
  treehouse(p) {
    const g = new THREE.Group(), w = p.w || 7, d = p.d || 6, y = p.y0 || 10, wood = Mat.woodBoard();
    for (let i = 0; i < Math.round(w / 0.7); i++) box(g, 0.66, 0.4, d, wood, -w / 2 + 0.35 + i * 0.7, y - 0.4, 0, 0.03, 0.6);
    for (const s of [-1, 1]) { box(g, w, 0.15, 0.15, wood, 0, y + 1.1, s * (d / 2 - 0.1), 0.03, 1); for (let i = 0; i <= 6; i++) box(g, 0.12, 1.1, 0.12, wood, -w / 2 + (w * i) / 6, y, s * (d / 2 - 0.1), 0.02, 1); }
    // a little hut in one corner with a flag
    box(g, 2.6, 2.6, 2.4, Mat.paint(0xf2e3b8, 0.8), -w / 2 + 1.5, y, -d / 2 + 1.4, 0.05, 0.5);
    box(g, 3.0, 0.25, 2.8, Mat.paint(0xd9584a, 0.6), -w / 2 + 1.5, y + 2.6, -d / 2 + 1.4, 0.05, 0.5);
    cyl(g, 0.05, 0.05, 2.4, Mat.steel(), -w / 2 + 2.6, y + 2.8, -d / 2 + 0.5, 6);
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.6), new THREE.MeshStandardMaterial({ map: textTexture(['🦈'], { w: 128, h: 80, font: '56px sans-serif', bg: '#3f8fd8' }), side: THREE.DoubleSide })); flag.position.set(-w / 2 + 3.1, y + 4.8, -d / 2 + 0.5); g.add(flag);
    // a rope ladder hanging down
    for (let i = 0; i < 10; i++) box(g, 1.2, 0.08, 0.15, wood, w / 2 - 1.0, y - 1.0 - i * 0.9, d / 2 + 0.2, 0.02, 1);
    for (const s of [-1, 1]) cyl(g, 0.03, 0.03, 9.6, Mat.paint(0xc9ab70), w / 2 - 1.0 + s * 0.6, y - 9.6, d / 2 + 0.2, 5);
    return g;
  },
  kiddiePool(p) {
    const g = new THREE.Group(), r = p.r || 2.4;
    const ring = sh(new THREE.Mesh(new THREE.TorusGeometry(r, 0.35, 12, 40), Mat.plastic(0x58c4ff))); ring.rotation.x = Math.PI / 2; ring.position.y = 0.35; g.add(ring);
    const water = new THREE.Mesh(new THREE.CircleGeometry(r, 40), new THREE.MeshPhysicalMaterial({ color: 0x3a8fc8, roughness: 0.05, transparent: true, opacity: 0.75, clearcoat: 1 }));
    water.rotation.x = -Math.PI / 2; water.position.y = 0.4; g.add(water);
    const duck = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 10), Mat.plastic(0xffd23a)); duck.position.set(0.6, 0.55, 0.3); duck.scale.set(1, 0.8, 1.2); g.add(duck);
    g.userData.tick = (t) => { duck.position.y = 0.55 + Math.sin(t * 1.4) * 0.04; duck.rotation.y = Math.sin(t * 0.3) * 0.8; };
    return g;
  },
  // a little solar path light: a stake with a glowing cap (its pool of light is a safe spot)
  solarLight() {
    const g = new THREE.Group();
    cyl(g, 0.05, 0.05, 0.9, Mat.paint(0x2a2c30, 0.5), 0, 0, 0, 8);
    cyl(g, 0.2, 0.16, 0.25, new THREE.MeshStandardMaterial({ color: 0xfff1c8, emissive: 0xffd88a, emissiveIntensity: 2.2 }), 0, 0.9, 0, 14);
    cyl(g, 0.24, 0.24, 0.06, Mat.paint(0x2a2c30, 0.5), 0, 1.15, 0, 14);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color: 0xffd88a, transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending }));
    glow.position.y = 1.0; glow.scale.setScalar(1.3); g.add(glow);
    return g;
  },
  gnome() {
    const g = new THREE.Group();
    cyl(g, 0.45, 0.55, 0.9, Mat.plastic(0x3f8fd8), 0, 0, 0, 16);
    const face = new THREE.Mesh(new THREE.SphereGeometry(0.32, 14, 10), Mat.plastic(0xf1c3a1)); face.position.y = 1.1; g.add(face);
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.6, 14), Mat.plastic(0xffffff)); beard.position.set(0, 0.85, 0.12); beard.rotation.x = Math.PI; g.add(beard);
    const hat = new THREE.Mesh(new THREE.ConeGeometry(0.38, 1.0, 16), Mat.plastic(0xe5484d)); hat.position.y = 1.75; hat.rotation.z = 0.15; sh(hat); g.add(hat);
    return g;
  },
  patio(p) {
    const g = new THREE.Group(), w = p.w || 10, d = p.d || 6;
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.06, d), Mat.tiles(0xb8b0a2, 2, 1)); m.position.y = 0.03; m.receiveShadow = true; g.add(m);
    return g;
  },
  dryerVent(p) {
    const g = new THREE.Group(), y = p.y0 || 2;
    box(g, 1.2, 1.2, 0.5, Mat.steel(), 0, y, 0, 0.1, 1);
    for (let i = 0; i < 3; i++) { const f = box(g, 1.1, 0.06, 0.4, Mat.steel(), 0, y + 0.25 + i * 0.32, 0.3, 0.01, 1); f.rotation.x = 0.5; }
    return g;
  },
  litWindow(p) {
    const g = new THREE.Group(), w = p.w || 3, h = p.h || 4, y = p.y0 || 4;
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: p.color || 0xffc27a }));
    glow.position.set(0, y + h / 2, 0.05); g.add(glow);
    box(g, w + 0.5, 0.3, 0.4, Mat.whiteWood(), 0, y - 0.3, 0.1, 0.04, 1);
    for (const s of [-1, 1]) box(g, 0.2, h, 0.2, Mat.whiteWood(), s * (w / 2 + 0.1), y, 0.08, 0.02, 1);
    box(g, w + 0.4, 0.2, 0.2, Mat.whiteWood(), 0, y + h, 0.08, 0.02, 1);
    box(g, 0.12, h, 0.12, Mat.whiteWood(), 0, y, 0.1, 0.02, 1);
    const L = new THREE.PointLight(p.color || 0xffc27a, 6, 10, 2); L.position.set(0, y + h / 2, 1.5); g.add(L);
    return g;
  },
  gardenHose() {
    const g = new THREE.Group();
    const reel = cyl(g, 0.7, 0.7, 0.6, Mat.plastic(0x4fb06a), 0, 0.7, 0, 20); reel.rotation.x = Math.PI / 2;
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.12, 8, 24), Mat.plastic(0x3a8f3a)); coil.position.y = 0.7; g.add(coil);
    return g;
  },
  washingLine() { return new THREE.Group(); },
};
void softDotTexture;
