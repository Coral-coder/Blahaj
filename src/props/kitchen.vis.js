// The kitchen at night: cabinets, worktops, the fridge (door ajar, its light
// spilling out), the island and stools, the table, and the little things on
// the counters you can hop across.
import * as THREE from 'three';
import { Mat } from '../materials.js';
import { textTexture, softDotTexture } from '../textures.js';
import { box, cyl, sh, hashf } from '../rooms.js';

const knobBar = (g, x, y, z, w = 0.7) => { const m = box(g, w, 0.09, 0.09, Mat.steel(), x, y, z, 0.04, 1); return m; };
const cabinetFronts = (g, w, h, d, cols, doorMat) => {
  const cw = w / cols;
  for (let i = 0; i < cols; i++) {
    const x = -w / 2 + cw * (i + 0.5);
    box(g, cw - 0.12, 0.85, 0.1, doorMat, x, h - 1.25, d / 2 + 0.02, 0.04, 1);            // drawer
    box(g, cw - 0.12, h - 1.65, 0.1, doorMat, x, 0.35, d / 2 + 0.02, 0.04, 1);           // door
    knobBar(g, x, h - 0.85, d / 2 + 0.12, Math.min(0.9, cw * 0.4));
    knobBar(g, x + cw * 0.3, h - 2.2, d / 2 + 0.12, 0.09).scale.set(1, 6, 1);
  }
  box(g, w - 0.1, 0.3, d - 0.3, Mat.paint(0x2a2a2e), 0, 0, -0.1, 0.02, 1); // kick plate
};

export const KITCHEN = {
  counter(p) {
    const g = new THREE.Group(), w = p.w || 8, h = p.h || 4.1, d = p.d || 2.9;
    const body = Mat.paint(p.color || 0xe8ecef, 0.6);
    box(g, w - 0.1, h - 0.3, d - 0.15, body, 0, 0, -0.07, 0.04, 0.5);
    cabinetFronts(g, w, h - 0.3, d - 0.15, Math.max(1, Math.round(w / 2.2)), body);
    box(g, w + 0.1, 0.3, d + 0.15, Mat.marble(), 0, h - 0.3, 0.05, 0.05, 0.3);
    if (p.splash !== false) box(g, w + 0.1, 2.0, 0.06, Mat.tiles(0xe9efe9, 6, 1), 0, h, -d / 2 + 0.03, 0.01, 0.5); // tiled splashback
    for (const sx of p.sink ? [p.sink] : []) { // a steel basin and a tall tap
      box(g, 2.4, 0.06, 1.7, Mat.steel(), sx, h - 0.02, 0.15, 0.1, 1);
      box(g, 2.1, 0.05, 1.4, Mat.paint(0x6d7378, 0.3), sx, h - 0.0, 0.15, 0.1, 1);
      // a low swan-neck tap that tucks in under the windowsill
      const tap = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.06, 10, 20, Math.PI), Mat.steel()); tap.position.set(sx, h + 0.6, -0.9); tap.rotation.y = Math.PI / 2; sh(tap); g.add(tap);
      cyl(g, 0.07, 0.1, 0.6, Mat.steel(), sx, h, -1.2, 12);
      for (const s of [-1, 1]) cyl(g, 0.12, 0.12, 0.18, Mat.steel(), sx + s * 0.5, h, -1.2, 12);
      const drip = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), Mat.glass()); drip.position.set(sx, h + 0.4, -0.6); g.add(drip);
    }
    for (const sx of p.stove ? [p.stove] : []) { // black glass hob, rings, knobs, an oven door
      box(g, 3.0, 0.06, 2.3, new THREE.MeshPhysicalMaterial({ color: 0x0c0c10, roughness: 0.1, clearcoat: 1 }), sx, h, 0.05, 0.05, 1);
      for (const [x, z] of [[-0.7, -0.5], [0.7, -0.5], [-0.7, 0.55], [0.7, 0.55]]) {
        const ring = new THREE.Mesh(new THREE.RingGeometry(0.32, 0.4, 32), new THREE.MeshBasicMaterial({ color: 0x55555e })); ring.rotation.x = -Math.PI / 2; ring.position.set(sx + x, h + 0.07, z + 0.05); g.add(ring);
      }
      box(g, 2.8, h - 1.4, 0.12, new THREE.MeshPhysicalMaterial({ color: 0x1a1a20, roughness: 0.15, clearcoat: 1 }), sx, 0.45, d / 2 + 0.05, 0.05, 1);
      knobBar(g, sx, h - 1.15, d / 2 + 0.2, 2.2);
      for (let i = 0; i < 4; i++) cyl(g, 0.12, 0.12, 0.12, Mat.steel(), sx - 0.9 + i * 0.6, h - 0.6, d / 2 + 0.1, 12).rotation.x = Math.PI / 2;
      // a clock glowing on the oven
      const clock = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.25), new THREE.MeshBasicMaterial({ map: textTexture(['3:21'], { w: 128, h: 64, font: '700 44px monospace', color: '#4dd0ff' }), transparent: true }));
      clock.position.set(sx, h - 0.6, d / 2 + 0.13); g.add(clock);
    }
    return g;
  },
  island(p) {
    const g = new THREE.Group(), w = p.w || 6, h = p.h || 4.1, d = p.d || 3.2;
    const body = Mat.paint(0x3f5f7a, 0.6);
    box(g, w - 0.4, h - 0.3, d - 0.6, body, 0, 0, 0, 0.05, 0.5);
    for (let i = 0; i < 3; i++) { const x = -w / 2 + 0.2 + (w - 0.4) * (i + 0.5) / 3; box(g, (w - 0.4) / 3 - 0.12, h - 0.7, 0.1, body, x, 0.3, d / 2 - 0.27, 0.04, 1); knobBar(g, x, h - 0.9, d / 2 - 0.15, 0.6); }
    box(g, w, 0.3, d, Mat.woodBoard(), 0, h - 0.3, 0, 0.05, 0.4);
    return g;
  },
  upperCabinet(p) {
    const g = new THREE.Group(), w = p.w || 6, h = p.h || 2.8, d = p.d || 1.6, y0 = p.y0 || 6.6;
    const body = Mat.paint(p.color || 0xe8ecef, 0.6);
    box(g, w, h, d, body, 0, y0, 0, 0.04, 0.5);
    const n = Math.max(1, Math.round(w / 1.8)), cw = w / n;
    for (let i = 0; i < n; i++) {
      const x = -w / 2 + cw * (i + 0.5);
      box(g, cw - 0.1, h - 0.14, 0.08, body, x, y0 + 0.07, d / 2 + 0.03, 0.03, 1);
      knobBar(g, x + (i % 2 ? -1 : 1) * cw * 0.32, y0 + 0.5, d / 2 + 0.12, 0.08).scale.set(1, 5, 1);
    }
    // a warm under-cabinet light strip
    const strip = new THREE.Mesh(new THREE.BoxGeometry(w - 0.4, 0.04, 0.12), new THREE.MeshBasicMaterial({ color: p.lit ? 0xffe2a8 : 0x6a6a6a })); strip.position.set(0, y0 - 0.03, d / 2 - 0.3); g.add(strip);
    return g;
  },
  fridge(p) {
    const g = new THREE.Group(), w = p.w || 4.2, h = p.h || 8.6, d = p.d || 3.4;
    const white = new THREE.MeshPhysicalMaterial({ color: 0xf4f6f6, roughness: 0.25, clearcoat: 0.8, clearcoatRoughness: 0.2 });
    box(g, w, h, d - 0.2, white, 0, 0, -0.1, 0.25, 0.5);
    box(g, w - 0.06, 0.06, 0.06, Mat.paint(0x9aa0a4), 0, h * 0.62, d / 2 - 0.15, 0.02, 1);
    for (const y of [h * 0.3, h * 0.78]) box(g, 0.14, 1.8, 0.14, Mat.steel(), w / 2 - 0.45, y, d / 2 + 0.05, 0.06, 1);
    // the freezer door's ajar at the bottom: a sliver of cold light
    const door = box(g, w - 0.1, h * 0.6, 0.25, white, 0, 0.1, 0, 0.2, 0.5);
    door.geometry.translate(w / 2 - 0.05, 0, 0); door.position.set(-w / 2 + 0.05, 0.1 + h * 0.3, d / 2 - 0.05); door.rotation.y = -0.45;
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.4, h * 0.55), new THREE.MeshBasicMaterial({ color: 0x9fc4dc, transparent: true, opacity: 0.45 })); glow.position.set(-w / 2 + 0.45, 0.1 + h * 0.3, d / 2 - 0.1); glow.rotation.y = Math.PI / 2 - 0.1; g.add(glow);
    const L = new THREE.PointLight(0xcfeeff, 4.5, 9, 2); L.position.set(-w / 2 + 0.1, h * 0.35, d / 2 + 0.6); g.add(L);
    // drawings and magnets on the door
    const art = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.0), new THREE.MeshStandardMaterial({ map: textTexture(['🦈 + 🧒', '❤️'], { w: 256, h: 192, font: '64px sans-serif', color: '#333', bg: '#fbf8f0' }), roughness: 0.95 }));
    art.position.set(0.5, h * 0.8, d / 2 + 0.01); art.rotation.z = 0.06; g.add(art);
    for (let i = 0; i < 5; i++) { const m = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.08, 14), Mat.plastic([0xe5484d, 0x3f8fd8, 0xf2b632, 0x4fb06a, 0xa46ad8][i])); m.rotation.x = Math.PI / 2; m.position.set(-1.2 + hashf(i, 1) * 2.4, h * 0.66 + hashf(i, 2) * 2.4, d / 2 + 0.04); g.add(m); }
    return g;
  },
  stool(p) {
    const g = new THREE.Group(), h = p.h || 3.4;
    cyl(g, 0.85, 0.8, 0.25, Mat.woodBoard(), 0, h - 0.25, 0, 28);
    for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + Math.PI / 4, leg = cyl(g, 0.06, 0.08, h - 0.2, Mat.paint(0x2a2a2e, 0.4), Math.cos(a) * 0.45, 0, Math.sin(a) * 0.45, 8); leg.rotation.set(Math.sin(a) * 0.12, 0, -Math.cos(a) * 0.12); }
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.04, 6, 24), Mat.paint(0x2a2a2e, 0.4)); ring.rotation.x = Math.PI / 2; ring.position.y = h * 0.35; sh(ring); g.add(ring);
    return g;
  },
  diningTable(p) {
    const g = new THREE.Group(), w = p.w || 7.4, d = p.d || 4.4, h = p.h || 3.5;
    box(g, w, 0.25, d, Mat.oak(), 0, h - 0.25, 0, 0.08, 0.4);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) box(g, 0.32, h - 0.25, 0.32, Mat.oak(), sx * (w / 2 - 0.35), 0, sz * (d / 2 - 0.35), 0.05, 1);
    // a placemat, a cup and a crayon drawing left out
    box(g, 1.6, 0.03, 1.1, Mat.fabric(0xd9584a, 2), -1.5, h, 0.6, 0.01, 1);
    cyl(g, 0.28, 0.24, 0.6, Mat.plastic(0x4fb06a), -1.2, h, 0.4, 16);
    const draw = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.0), new THREE.MeshStandardMaterial({ map: textTexture(['🐕 🦈 🌙'], { w: 256, h: 192, font: '60px sans-serif', color: '#333', bg: '#fbf8f0' }), roughness: 0.95 }));
    draw.rotation.set(-Math.PI / 2, 0, 0.4); draw.position.set(1.4, h + 0.02, -0.3); g.add(draw);
    return g;
  },
  toaster() {
    const g = new THREE.Group();
    box(g, 1.4, 1.0, 0.9, Mat.steel(), 0, 0, 0, 0.2, 1);
    for (const s of [-1, 1]) box(g, 0.9, 0.05, 0.16, Mat.paint(0x111111), 0, 1.0, s * 0.18, 0.02, 1);
    box(g, 0.12, 0.25, 0.14, Mat.plastic(0x222222), 0.75, 0.55, 0, 0.03, 1);
    return g;
  },
  cereal(p) {
    const g = new THREE.Group(), w = p.w || 1.3, h = p.h || 1.9;
    const label = new THREE.MeshStandardMaterial({ map: textTexture([p.label || 'STAR', 'O\'s'], { w: 256, h: 384, font: '800 70px Nunito, sans-serif', color: '#fff', bg: p.color || '#e5484d' }), roughness: 0.8 });
    const side = Mat.paint(p.color ? 0xffffff : 0xe5484d, 0.8);
    const m = sh(new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.55), [side, side, side, side, label, label])); m.position.y = h / 2; g.add(m);
    return g;
  },
  jar(p) {
    const g = new THREE.Group(), r = p.r || 0.45, h = p.h || 1.2;
    const glass = new THREE.MeshPhysicalMaterial({ color: 0xeaf6ff, roughness: 0.05, transmission: 0.7, thickness: 0.2, transparent: true, opacity: 0.6 });
    cyl(g, r, r, h, glass, 0, 0, 0, 20);
    cyl(g, r * 0.95, r * 0.95, h * 0.6, Mat.paint(p.fill || 0xd8b07a, 0.9), 0, 0.02, 0, 16); // pasta, sugar, cookies
    cyl(g, r * 1.05, r * 1.05, 0.2, Mat.woodBoard(), 0, h, 0, 20);
    return g;
  },
  breadBin() {
    const g = new THREE.Group();
    box(g, 2.0, 1.0, 1.3, Mat.woodBoard(), 0, 0, 0, 0.1, 0.6);
    const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 2.0, 20, 1, false, 0, Math.PI), Mat.woodBoard()); lid.rotation.z = Math.PI / 2; lid.position.y = 1.0; sh(lid); g.add(lid);
    return g;
  },
  stepStool() {
    const g = new THREE.Group(), paint = Mat.paint(0x6fb8a8, 0.6);
    box(g, 2.2, 1.2, 1.0, paint, 0, 0, 0.5, 0.06, 0.6);
    box(g, 2.2, 2.4, 1.0, paint, 0, 0, -0.5, 0.06, 0.6);
    for (const [y, z] of [[1.2, 0.5], [2.4, -0.5]]) box(g, 2.25, 0.08, 1.02, Mat.paint(0xf2efe6, 0.8), 0, y - 0.06, z, 0.02, 1);
    const tag = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.5), new THREE.MeshBasicMaterial({ map: textTexture(['LEO'], { w: 256, h: 96, font: '800 72px Nunito, sans-serif', color: '#ffffff' }), transparent: true }));
    tag.position.set(0, 0.65, 1.01); g.add(tag);
    return g;
  },
  petGate(p) {
    const g = new THREE.Group(), w = p.w || 4.6, h = p.h || 5.2, white = Mat.paint(0xf2efe6, 0.5);
    box(g, w, 0.2, 0.22, white, 0, 0.1, 0, 0.05, 1); box(g, w, 0.2, 0.22, white, 0, h - 0.2, 0, 0.05, 1);
    for (const s of [-1, 1]) box(g, 0.22, h, 0.25, white, s * (w / 2 - 0.11), 0, 0, 0.05, 1);
    for (let i = 1; i < 12; i++) cyl(g, 0.05, 0.05, h - 0.4, white, -w / 2 + (w * i) / 12, 0.2, 0, 8);
    box(g, 0.5, 0.35, 0.4, Mat.plastic(0x3f8fd8), w / 2 - 0.6, h * 0.55, 0.1, 0.08, 1); // the latch
    return g;
  },
  pedalBin() {
    const g = new THREE.Group();
    cyl(g, 0.78, 0.72, 2.85, Mat.steel(), 0, 0, 0, 28);
    const lid = cyl(g, 0.8, 0.8, 0.15, Mat.steel(), 0, 2.85, 0, 28); lid.scale.set(1, 1, 1);
    box(g, 0.6, 0.1, 0.4, Mat.paint(0x2a2a2e), 0, 0.05, 0.85, 0.03, 1);
    return g;
  },
  rangeHood(p) {
    const g = new THREE.Group(), y = p.y0 || 8.2;
    box(g, 3.4, 0.6, 2.0, Mat.steel(), 0, y, 0, 0.05, 1);
    box(g, 1.2, 11.4 - y - 0.6, 1.0, Mat.steel(), 0, y + 0.6, -0.4, 0.03, 1);
    return g;
  },
  petBowls() {
    const g = new THREE.Group();
    for (const [x, c] of [[-0.6, 0x3f8fd8], [0.6, 0xe5484d]]) {
      cyl(g, 0.5, 0.38, 0.3, Mat.plastic(c), x, 0, 0, 24);
      cyl(g, 0.4, 0.4, 0.02, x < 0 ? Mat.glass() : Mat.paint(0x8a5a3a, 0.9), x, 0.24, 0, 20);
    }
    const tag = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.35), new THREE.MeshBasicMaterial({ map: textTexture(['BISCUIT'], { w: 256, h: 64, font: '800 44px Nunito, sans-serif', color: '#8a5a3a' }), transparent: true }));
    tag.rotation.x = -Math.PI / 2; tag.position.set(0, 0.01, 0.6); g.add(tag);
    return g;
  },
  kitchenRug(p) {
    const g = new THREE.Group(), w = p.w || 6, d = p.d || 2.2;
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.05, d), Mat.fabric(0x5c7a9a, 3)); m.position.y = 0.025; m.receiveShadow = true; g.add(m);
    for (const s of [-1, 1]) { const f = new THREE.Mesh(new THREE.BoxGeometry(w, 0.06, 0.2), Mat.fabric(0xf2e3b8, 3)); f.position.set(0, 0.03, s * (d / 2 - 0.25)); g.add(f); }
    return g;
  },
  fruitBowl() {
    const g = new THREE.Group();
    const bowl = new THREE.Mesh(new THREE.SphereGeometry(0.75, 24, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), Mat.ceramic ? Mat.ceramic(0xf2efe6) : Mat.paint(0xf2efe6)); bowl.position.y = 0.75; bowl.material.side = THREE.DoubleSide; sh(bowl); g.add(bowl);
    const fruit = [[0, 0.75, 0, 0xff8a2a, 0.3], [0.3, 0.7, 0.2, 0xe5484d, 0.26], [-0.3, 0.72, 0.15, 0x9fd86b, 0.27], [0.05, 0.95, -0.2, 0xffd23a, 0.24]];
    for (const [x, y, z, c, r] of fruit) { const f = sh(new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), Mat.plastic(c))); f.position.set(x, y, z); g.add(f); }
    return g;
  },
  wallClock(p) {
    const g = new THREE.Group(), y = p.y0 || 8;
    const face = new THREE.Mesh(new THREE.CircleGeometry(0.9, 40), new THREE.MeshStandardMaterial({ map: textTexture(['12', '9      3', '6'], { w: 256, h: 256, font: '700 40px Nunito, sans-serif', color: '#333', bg: '#fbf8f0' }), roughness: 0.6 }));
    face.position.set(0, y, 0.08); g.add(face);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.92, 0.08, 10, 40), Mat.paint(0xe5484d, 0.5)); rim.position.set(0, y, 0.08); sh(rim); g.add(rim);
    for (const [len, a] of [[0.45, 0.4], [0.7, 2.3]]) { const hnd = new THREE.Mesh(new THREE.BoxGeometry(0.05, len, 0.02), new THREE.MeshBasicMaterial({ color: 0x222222 })); hnd.geometry.translate(0, len / 2, 0); hnd.position.set(0, y, 0.12); hnd.rotation.z = -a; g.add(hnd); }
    return g;
  },
  hangingPots(p) {
    const g = new THREE.Group(), y = p.y0 || 9.6;
    box(g, 4.4, 0.12, 0.12, Mat.steel(), 0, y, 0, 0.05, 1);
    for (let i = 0; i < 4; i++) {
      const x = -1.6 + i * 1.05, r = 0.45 + hashf(i, 3) * 0.2;
      cyl(g, 0.02, 0.02, 0.5, Mat.steel(), x, y - 0.5, 0, 6);
      const pot = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.9, 0.5, 20, 1, true), Mat.paint([0xc8642a, 0x8a8f96, 0xc8642a, 0x3f5f7a][i], 0.4)); pot.material.side = THREE.DoubleSide;
      pot.rotation.x = Math.PI / 2; pot.position.set(x, y - 0.5 - r, 0); sh(pot); g.add(pot);
    }
    return g;
  },
};
void softDotTexture;
