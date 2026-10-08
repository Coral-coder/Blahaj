// The upstairs hallway at night: a long runner, the console table, a tall
// bookcase, family photos on picture ledges, the linen closet, the hamper and
// a grandfather clock ticking away.
import * as THREE from 'three';
import { Mat } from '../materials.js';
import { textTexture } from '../textures.js';
import { box, cyl, sh, hashf } from '../rooms.js';

const BOOK_COLS = [0x8f3b3f, 0x3f6aa3, 0x4f8f4a, 0xd9a441, 0x6b4f8f, 0xe8e4da, 0x2a5f8f, 0xc8282a];
const bookRow = (g, x0, x1, y, z, depth, seed) => {
  let x = x0;
  for (let i = 0; x < x1 - 0.3; i++) {
    const w = 0.22 + hashf(i, seed) * 0.2, h = 1.0 + hashf(seed, i) * 0.7;
    if (hashf(i * 3, seed) < 0.1) { x += 0.4; continue; } // a gap
    const b = box(g, w, h, depth * (0.75 + hashf(i, 7) * 0.2), Mat.book(BOOK_COLS[(i + seed) % BOOK_COLS.length]), x + w / 2, y, z, 0.02, 1);
    if (hashf(i, seed + 1) < 0.12) { b.rotation.z = 0.25; b.position.x += 0.12; }
    x += w + 0.02;
  }
};
const shelvesVis = (g, w, d, ys, mat) => {
  for (const y of ys) box(g, w, 0.25, d, mat, 0, y - 0.25, 0, 0.03, 0.5);
  for (const s of [-1, 1]) box(g, 0.24, ys[ys.length - 1], d, mat, s * (w / 2 - 0.12), 0, 0, 0.03, 0.5);
  box(g, w, ys[ys.length - 1], 0.12, mat, 0, 0, -d / 2 + 0.06, 0.02, 0.5);
  box(g, w - 0.2, 0.5, 0.1, mat, 0, 0, d / 2 - 0.1, 0.02, 1); // kick plate
};

export const HALLWAY = {
  consoleTable(p) {
    const g = new THREE.Group(), w = p.w || 5, d = p.d || 1.8, h = p.h || 3.2, wood = Mat.walnut();
    box(g, w, 0.2, d, wood, 0, h - 0.2, 0, 0.04, 0.5);
    box(g, w - 0.6, 0.5, d - 0.3, wood, 0, h - 0.7, 0, 0.03, 0.5); // a drawer apron
    for (const s of [-1, 1]) for (const t of [-1, 1]) cyl(g, 0.09, 0.07, h - 0.2, wood, s * (w / 2 - 0.25), 0, t * (d / 2 - 0.2), 8);
    const vase = cyl(g, 0.25, 0.35, 0.9, Mat.ceramic(0x3f8fd8), w / 2 - 0.8, h, 0, 18); void vase;
    for (let i = 0; i < 3; i++) { const st = cyl(g, 0.02, 0.02, 0.9 + i * 0.15, Mat.paint(0x3f7a3a), w / 2 - 0.8 + (i - 1) * 0.1, h + 0.8, 0, 5); st.rotation.z = (i - 1) * 0.25; const f = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), Mat.plastic([0xf2b632, 0xffffff, 0xd94f6b][i])); f.position.set(w / 2 - 0.8 + (i - 1) * 0.35, h + 1.75 + i * 0.12, 0); g.add(f); }
    const bowl = cyl(g, 0.4, 0.25, 0.2, Mat.ceramic(0xe8e4da), -w / 2 + 1.0, h, 0.1, 18); void bowl;
    const keys = box(g, 0.3, 0.05, 0.2, Mat.brass(), -w / 2 + 1.0, h + 0.2, 0.1, 0.02, 1); void keys;
    return g;
  },
  hamper(p) {
    const g = new THREE.Group(), w = p.w || 2.4, h = p.h || 2.6, d = p.d || 2.0;
    box(g, w, h - 0.3, d, Mat.wicker(), 0, 0, 0, 0.12, 0.6);
    // clothes heaped over the rim
    const cols = [0x3f6aa3, 0xe8e4da, 0xd94f6b, 0x4f8f4a];
    for (let i = 0; i < 6; i++) { const c = sh(new THREE.Mesh(new THREE.SphereGeometry(0.55 + hashf(i, 2) * 0.2, 12, 8), Mat.fabric(cols[i % cols.length]))); c.scale.y = 0.45; c.position.set((hashf(i, 3) - 0.5) * (w - 0.8), h - 0.25 + hashf(i, 5) * 0.15, (hashf(i, 4) - 0.5) * (d - 0.6)); g.add(c); }
    const sleeve = box(g, 0.35, 1.0, 0.2, Mat.fabric(0xd94f6b), w / 2 + 0.05, h - 1.2, 0.2, 0.08, 1); sleeve.rotation.z = 0.2;
    return g;
  },
  hallBookcase(p) {
    const g = new THREE.Group(), w = p.w || 5.6, d = p.d || 1.8, ys = p.shelves || [2.2, 4.4, 6.6, 8.8];
    shelvesVis(g, w, d, ys, Mat.whiteWood());
    let k = 0;
    for (const y of [0.5, ...ys.slice(0, -1)]) bookRow(g, -w / 2 + 0.3, w / 2 - (k % 2 ? 1.6 : 0.4), y, 0.05, d * 0.8, 11 + k++);
    // a little plant and a framed photo on top
    cyl(g, 0.35, 0.28, 0.6, Mat.ceramic(0xe8e4da), w / 2 - 0.7, ys[ys.length - 1], 0, 14);
    const leaf = sh(new THREE.Mesh(new THREE.IcosahedronGeometry(0.55, 1), Mat.paint(0x3f7a3a, 0.8))); leaf.position.set(w / 2 - 0.7, ys[ys.length - 1] + 1.0, 0); g.add(leaf);
    return g;
  },
  radiator(p) {
    const g = new THREE.Group(), w = p.w || 4.4, h = p.h || 2.4, m = Mat.paint(0xf2efe8, 0.4);
    for (let i = 0; i < Math.round(w / 0.32); i++) box(g, 0.22, h - 0.4, 0.5, m, -w / 2 + 0.16 + i * 0.32, 0.35, 0, 0.08, 1);
    box(g, w, 0.18, 0.6, m, 0, h - 0.2, 0, 0.05, 1);
    for (const s of [-1, 1]) box(g, 0.12, 0.35, 0.12, m, s * (w / 2 - 0.3), 0, -0.1, 0.02, 1);
    return g;
  },
  pictureLedge(p) {
    const g = new THREE.Group(), w = p.w || 8, y = p.top || 6.4, d = p.d || 1.0;
    box(g, w, 0.25, d, Mat.oak(), 0, y - 0.25, 0, 0.03, 0.5);
    box(g, w, 0.18, 0.06, Mat.oak(), 0, y, d / 2 - 0.03, 0.01, 1); // lip
    // family photos leaning on the ledge
    const n = Math.max(2, Math.floor(w / 2.6));
    for (let i = 0; i < n; i++) {
      const fw = 1.2 + hashf(i, w) * 0.6, fh = 1.0 + hashf(w, i) * 0.6, x = -w / 2 + (w / n) * (i + 0.5);
      const fr = box(g, fw, fh, 0.08, Mat.paint([0x1c1d20, 0xe8e4da, 0xb98a55][i % 3], 0.5), x, y, -d / 2 + 0.15, 0.02, 1); fr.rotation.x = -0.12;
      const pic = new THREE.Mesh(new THREE.PlaneGeometry(fw - 0.25, fh - 0.25), new THREE.MeshStandardMaterial({ map: textTexture([['🏖️', '🐕', '🎂', '🦈', '🏡'][(i + Math.round(w)) % 5]], { w: 128, h: 128, font: '72px sans-serif', bg: ['#cfe3f2', '#f2e3cf', '#e3f2cf', '#f2cfe3'][i % 4] }) }));
      pic.position.set(x, y + fh / 2, -d / 2 + 0.2); pic.rotation.x = -0.12; g.add(pic);
    }
    for (const s of [-1, 1]) box(g, 0.1, 0.6, d - 0.1, Mat.steel(), s * (w / 2 - 0.4), y - 0.85, -0.05, 0.02, 1); // brackets
    return g;
  },
  linenCloset(p) {
    const g = new THREE.Group(), w = p.w || 5.0, d = p.d || 2.2, ys = p.shelves || [2.2, 4.4, 6.6, 8.6];
    shelvesVis(g, w, d, ys, Mat.paint(0xf2efe8, 0.6));
    // folded towels and sheets, stacked
    const cols = [0x9cc9e8, 0xf2efe8, 0xe8b4c4, 0xc9e8b4, 0xf2d79c];
    ys.slice(0, -1).concat([0.5]).forEach((y, k) => {
      for (let i = 0; i < 3; i++) for (let j = 0; j < 2 + (i + k) % 2; j++) box(g, 1.2, 0.35, d * 0.75, Mat.fabric(cols[(i + j + k) % cols.length]), -w / 2 + 0.9 + i * 1.55, y + j * 0.37, 0.05, 0.15, 1);
    });
    // the doors stand open
    for (const s of [-1, 1]) { const door = box(g, w / 2 - 0.1, ys[ys.length - 1] - 0.2, 0.14, Mat.paint(0xf2efe8, 0.6), 0, 0.1, 0, 0.03, 0.5); door.position.set(s * (w / 2 + 0.05), (ys[ys.length - 1] - 0.2) / 2 + 0.1, d / 2 + w / 4 - 0.1); door.rotation.y = s * 1.35; }
    return g;
  },
  grandfatherClock(p) {
    const g = new THREE.Group(), h = p.h || 7.0, wood = Mat.walnut();
    box(g, 2.2, 1.0, 1.4, wood, 0, 0, 0, 0.05, 0.5);
    box(g, 1.7, h - 3.2, 1.1, wood, 0, 1.0, 0, 0.05, 0.5);
    box(g, 2.2, 2.2, 1.4, wood, 0, h - 2.2, 0, 0.06, 0.5);
    const face = new THREE.Mesh(new THREE.CircleGeometry(0.8, 32), new THREE.MeshStandardMaterial({ color: 0xf6efdc, emissive: 0x403a2c, emissiveIntensity: 0.4 }));
    face.position.set(0, h - 1.1, 0.71); g.add(face);
    for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2, t = box(g, 0.05, 0.16, 0.02, Mat.paint(0x1c1d20), Math.sin(a) * 0.66, h - 1.1 + Math.cos(a) * 0.66 - 0.08, 0.72, 0.0, 1); t.rotation.z = -a; }
    const hand = (len, w) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, len, 0.02), Mat.paint(0x1c1d20)); m.geometry.translate(0, len / 2, 0); m.position.set(0, h - 1.1, 0.74); g.add(m); return m; };
    const hr = hand(0.4, 0.07), mn = hand(0.62, 0.05); hr.rotation.z = -1.0; mn.rotation.z = 2.6;
    // a glass door with the pendulum swinging behind it
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(1.1, h - 4.0), new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.18, roughness: 0.05 })); glass.position.set(0, 1.0 + (h - 3.2) / 2, 0.56); g.add(glass);
    const pend = new THREE.Group(); pend.position.set(0, h - 2.4, 0.3); g.add(pend);
    const rod = cyl(pend, 0.03, 0.03, h - 4.6, Mat.brass(), 0, -(h - 4.6), 0, 6); void rod;
    const bob = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.08, 24), Mat.brass()); bob.rotation.x = Math.PI / 2; bob.position.y = -(h - 4.6); pend.add(bob);
    box(g, 2.5, 0.3, 1.6, wood, 0, h - 0.3, 0, 0.06, 0.5); // crown
    g.userData.tick = (t) => { pend.rotation.z = Math.sin(t * Math.PI * 0.9) * 0.22; mn.rotation.z = -t * 0.05; };
    return g;
  },
  hallChair(p) {
    const g = new THREE.Group(), wood = Mat.oak(), back = p.back || 4.4;
    box(g, 2.2, 0.25, 2.0, wood, 0, 1.8, 0, 0.05, 0.6);
    box(g, 2.0, 0.2, 1.8, Mat.fabric(0x8f3b3f), 0, 2.05, 0.05, 0.08, 1);
    box(g, 2.2, back - 2.05, 0.6, wood, 0, 2.05, -0.75, 0.06, 0.6);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) box(g, 0.2, 1.8, 0.2, wood, sx * 0.95, 0, sz * 0.85, 0.03, 1);
    return g;
  },
  hallToyBox(p) {
    const g = new THREE.Group(), w = p.w || 3.0, h = p.h || 2.4, d = p.d || 2.0;
    box(g, w, h, d, Mat.paint(0x3f8fd8, 0.6), 0, 0, 0, 0.08, 0.5);
    const lid = box(g, w + 0.1, 0.2, d + 0.1, Mat.paint(0xf2b632, 0.6), 0, 0, 0, 0.05, 0.5); lid.position.set(0, h + 0.1, 0);
    for (const [ch, c, x] of [['A', 0xe5484d, -0.8], ['B', 0x4fb06a, 0.0], ['C', 0xf2b632, 0.8]]) { const l = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.6), new THREE.MeshStandardMaterial({ map: textTexture([ch], { w: 64, h: 64, font: 'bold 52px sans-serif', bg: '#' + c.toString(16).padStart(6, '0'), color: '#ffffff' }) })); l.position.set(x, h / 2, d / 2 + 0.02); g.add(l); }
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.45, 18, 12), Mat.plastic(0xe5484d)); ball.position.set(w / 2 + 0.6, 0.45, 0.4); sh(ball); g.add(ball);
    return g;
  },
  hallRunner(p) {
    const g = new THREE.Group(), w = p.w || 5, l = p.l || 36;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, l), Mat.carpet(p.color || 0x7f3b4f)); m.rotation.x = -Math.PI / 2; m.position.y = 0.025; m.receiveShadow = true; g.add(m);
    for (const s of [-1, 1]) { const b = new THREE.Mesh(new THREE.PlaneGeometry(0.3, l), Mat.carpet(0xd9a441)); b.rotation.x = -Math.PI / 2; b.position.set(s * (w / 2 - 0.4), 0.03, 0); g.add(b); }
    return g;
  },
  doorPanel(p) {
    const g = new THREE.Group(), w = p.w || 4.2, h = p.h || 9.2;
    box(g, w + 0.6, h + 0.3, 0.15, Mat.whiteWood(), 0, 0, 0, 0.03, 0.5);
    box(g, w, h, 0.2, Mat.paint(p.color || 0xf2efe8, 0.6), 0, 0, 0.05, 0.04, 0.5);
    for (const [y, hh] of [[0.6, h * 0.42], [h * 0.55, h * 0.38]]) box(g, w - 1.0, hh, 0.06, Mat.paint(p.color || 0xf2efe8, 0.6), 0, y, 0.17, 0.03, 1);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.2, 14, 10), Mat.brass()); knob.position.set(w / 2 - 0.5, h * 0.48, 0.32); g.add(knob);
    if (p.sign) { const s = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.0), new THREE.MeshStandardMaterial({ map: textTexture([p.sign], { w: 256, h: 104, font: 'bold 34px sans-serif', bg: p.signBg || '#bfe3ff', color: '#22324a' }) })); s.position.set(0, h * 0.68, 0.24); g.add(s); }
    if (p.glowUnder) { const gl = new THREE.Mesh(new THREE.PlaneGeometry(w, 0.12), new THREE.MeshBasicMaterial({ color: 0xffd9a0 })); gl.position.set(0, 0.06, 0.3); g.add(gl); }
    return g;
  },
  pendant(p) {
    const g = new THREE.Group(), y = p.y0 || 10.4, ceil = p.ceiling || 12;
    cyl(g, 0.03, 0.03, ceil - y, Mat.paint(0x1c1d20), 0, y, 0, 4);
    const shade = sh(new THREE.Mesh(new THREE.SphereGeometry(0.8, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), Mat.paint(0xe8e4da, 0.6)), true, false);
    shade.position.y = y - 0.6; g.add(shade);
    return g;
  },
  wallFrames(p) {
    const g = new THREE.Group(), n = p.n || 3, y = p.y0 || 5.0;
    for (let i = 0; i < n; i++) {
      const fw = 1.4 + hashf(i, 9) * 0.8, fh = 1.2 + hashf(9, i) * 0.8, x = (i - (n - 1) / 2) * 2.6;
      box(g, fw, fh, 0.1, Mat.paint([0xb98a55, 0x1c1d20, 0xe8e4da][i % 3], 0.5), x, y + hashf(i, 4) * 0.8, 0, 0.02, 1);
      const pic = new THREE.Mesh(new THREE.PlaneGeometry(fw - 0.3, fh - 0.3), new THREE.MeshStandardMaterial({ map: textTexture([['🌻', '⛵', '🐚', '🌙'][(i + n) % 4]], { w: 128, h: 128, font: '70px sans-serif', bg: ['#f2e3cf', '#cfe3f2', '#e3cff2'][i % 3] }) }));
      pic.position.set(x, y + hashf(i, 4) * 0.8 + fh / 2, 0.06); g.add(pic);
    }
    return g;
  },
  petBed(p) {
    const g = new THREE.Group(), r = p.r || 1.4;
    const ring = sh(new THREE.Mesh(new THREE.TorusGeometry(r, 0.4, 12, 28), Mat.fabric(0x8f6b4f))); ring.rotation.x = Math.PI / 2; ring.position.y = 0.4; g.add(ring);
    const c = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.25, 28), Mat.fabric(0xe8d9c4)); c.position.y = 0.15; g.add(c);
    return g;
  },
};
