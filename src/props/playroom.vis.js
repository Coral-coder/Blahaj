// The playroom at night: towers of alphabet blocks, a ball pit, the dollhouse,
// a rocking horse, the jack-in-the-box, a teepee strung with fairy lights,
// toy cubbies and the ladder up to the attic.
import * as THREE from 'three';
import { Mat } from '../materials.js';
import { textTexture, softDotTexture } from '../textures.js';
import { box, cyl, sh, hashf } from '../rooms.js';

const TOY = [0xe5484d, 0x3f8fd8, 0xf2b632, 0x4fb06a, 0xa46ad8, 0xf28a32];
const hex = (c) => '#' + c.toString(16).padStart(6, '0');
const letterTex = new Map();
const blockFace = (ch, c) => { const k = ch + c; if (!letterTex.has(k)) letterTex.set(k, textTexture([ch], { w: 128, h: 128, font: 'bold 96px sans-serif', bg: '#f4ead2', color: hex(c) })); return letterTex.get(k); };
const glow = (color, size, opacity = 0.6) => {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending }));
  s.scale.setScalar(size); return s;
};

export const PLAYROOM = {
  blockStack(p) {
    const g = new THREE.Group(), c = p.c || 1.8, n = p.n || 1;
    for (let i = 0; i < n; i++) {
      const col = TOY[(((i + Math.round((p.x || 0) * 3)) % TOY.length) + TOY.length) % TOY.length], ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[(i * 7 + Math.round(Math.abs(p.x || 0) * 5)) % 26];
      const face = new THREE.MeshStandardMaterial({ map: blockFace(ch, col), roughness: 0.7 });
      const edge = Mat.paint(col, 0.6);
      const m = sh(new THREE.Mesh(new THREE.BoxGeometry(c - 0.04, c - 0.04, c - 0.04), [face, face, edge, edge, face, face]));
      m.position.set((hashf(i, n) - 0.5) * 0.1, i * c + c / 2, 0); m.rotation.y = (hashf(n, i) - 0.5) * 0.12; g.add(m);
    }
    return g;
  },
  ballPit(p) {
    const g = new THREE.Group(), w = p.w || 6, d = p.d || 6, h = p.h || 2.0, t = 0.35, bh = p.balls || 1.6;
    const pad = Mat.plastic(0x3f8fd8);
    box(g, w, h, t, pad, 0, 0, d / 2 - t / 2, 0.15, 0.5); box(g, w, h, t, pad, 0, 0, -d / 2 + t / 2, 0.15, 0.5);
    box(g, t, h, d - 2 * t, pad, -w / 2 + t / 2, 0, 0, 0.15, 0.5); box(g, t, h, d - 2 * t, pad, w / 2 - t / 2, 0, 0, 0.15, 0.5);
    // hundreds of balls (one instanced mesh)
    const n = 260, geo = new THREE.SphereGeometry(0.26, 10, 8), mat = new THREE.MeshStandardMaterial({ roughness: 0.35 });
    const im = new THREE.InstancedMesh(geo, mat, n), m4 = new THREE.Matrix4(), col = new THREE.Color();
    for (let i = 0; i < n; i++) {
      m4.makeTranslation((hashf(i, 1) - 0.5) * (w - 2 * t - 0.4), bh - 0.3 + hashf(i, 3) * 0.3 - (i < n / 2 ? 0.3 : 0), (hashf(i, 2) - 0.5) * (d - 2 * t - 0.4));
      im.setMatrixAt(i, m4); im.setColorAt(i, col.setHex(TOY[i % TOY.length]));
    }
    im.castShadow = false; im.receiveShadow = true; g.add(im);
    const under = new THREE.Mesh(new THREE.BoxGeometry(w - 2 * t, bh - 0.4, d - 2 * t), Mat.plastic(0x58c4ff)); under.position.y = (bh - 0.4) / 2; g.add(under);
    return g;
  },
  dollhouse(p) {
    const g = new THREE.Group(), w = p.w || 6, d = p.d || 3.2, f = p.floors || [2.4, 5.2, 8.0];
    const wall = Mat.paint(0xf6d5e0, 0.7), trim = Mat.whiteWood();
    box(g, w, f[0] - 0.25, d, Mat.paint(0xd9a0b4, 0.6), 0, 0, 0, 0.04, 0.5);
    for (const y of f) box(g, w, 0.25, d, trim, 0, y - 0.25, 0, 0.03, 0.5);
    for (const s of [-1, 1]) box(g, 0.24, f[f.length - 1], d, wall, s * (w / 2 - 0.12), 0, 0, 0.03, 0.5);
    box(g, w, f[f.length - 1], 0.24, Mat.wallpaper ? Mat.wallpaper(0xfbe3ec) : wall, 0, 0, -d / 2 + 0.12, 0.02, 0.5);
    // a pitched roof (decor, set back so the flat top stays walkable) and a chimney
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(0.01, d * 0.75, w + 0.4, 3, 1), Mat.paint(0xc8484d, 0.6)); roof.rotation.set(0, 0, Math.PI / 2); roof.scale.set(1, 1, 0.55); roof.position.set(0, f[f.length - 1] + 0.6, -d / 2 + 0.1); void roof;
    box(g, 0.7, 1.4, 0.7, Mat.brick(), w / 2 - 1.0, f[f.length - 1], -d / 2 + 0.6, 0.02, 0.5);
    // tiny furniture: a bed upstairs, a table and a lamp downstairs, pictures on the walls
    box(g, 1.6, 0.5, 1.0, Mat.paint(0xffffff, 0.6), -w / 4, f[1], -d / 2 + 0.8, 0.08, 1); box(g, 1.5, 0.15, 0.9, Mat.paint(0x3f8fd8, 0.6), -w / 4, f[1] + 0.5, -d / 2 + 0.8, 0.05, 1);
    box(g, 1.0, 0.6, 0.7, Mat.oak(), w / 4, f[0], -d / 2 + 0.8, 0.03, 1);
    const lamp = glow(0xffd9a0, 1.2, 0.7); lamp.position.set(-w / 4, f[0] + 1.0, -d / 2 + 0.6); g.add(lamp);
    for (const [y, x] of [[f[0] + 1.2, w / 4], [f[1] + 1.2, w / 6]]) { const pic = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.5), Mat.paint(0x58c4ff, 0.5)); pic.position.set(x, y, -d / 2 + 0.25); g.add(pic); }
    return g;
  },
  rockingHorse() {
    const g = new THREE.Group(), inner = new THREE.Group(); g.add(inner);
    const wood = Mat.paint(0xf2efe8, 0.5), spot = Mat.paint(0x6b4f3a, 0.6);
    for (const s of [-1, 1]) { const rocker = sh(new THREE.Mesh(new THREE.TorusGeometry(3.0, 0.12, 8, 30, 1.2), Mat.paint(0xc8484d, 0.5))); rocker.rotation.set(0, Math.PI / 2, Math.PI / 2 + 0.6 - 0.6); rocker.position.set(s * 0.55, 3.1, 0); rocker.rotation.z = Math.PI + Math.PI / 2 - 0.6; inner.add(rocker); }
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { const leg = cyl(inner, 0.12, 0.12, 1.4, wood, sx * 0.5, 0.25, sz * 1.1, 8); leg.rotation.x = sz * 0.2; }
    const body = sh(new THREE.Mesh(new THREE.CapsuleGeometry(0.7, 1.9, 8, 16), wood)); body.rotation.x = Math.PI / 2; body.position.y = 2.0; inner.add(body);
    for (let i = 0; i < 5; i++) { const sp = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), spot); sp.position.set((i % 2 ? 0.62 : -0.62), 2.0 + hashf(i, 1) * 0.4, -0.8 + i * 0.4); sp.scale.x = 0.3; inner.add(sp); }
    const neck = sh(new THREE.Mesh(new THREE.CapsuleGeometry(0.45, 1.2, 6, 12), wood)); neck.position.set(0, 3.1, 1.2); neck.rotation.x = 0.5; inner.add(neck);
    const head = sh(new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 0.9, 6, 12), wood)); head.position.set(0, 3.9, 1.6); head.rotation.x = 1.2; inner.add(head);
    const mane = sh(new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.6, 0.4), Mat.paint(0x6b4f3a, 0.8))); mane.position.set(0, 3.5, 0.9); mane.rotation.x = 0.5; inner.add(mane);
    const saddle = box(inner, 1.5, 0.15, 1.2, Mat.paint(0xc8484d, 0.5), 0, 2.6, 0, 0.06, 1); void saddle;
    for (const s of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), Mat.paint(0x111111)); e.position.set(s * 0.35, 4.1, 1.75); inner.add(e); }
    const tail = sh(new THREE.Mesh(new THREE.ConeGeometry(0.25, 1.2, 8), Mat.paint(0x6b4f3a, 0.8))); tail.position.set(0, 2.2, -1.6); tail.rotation.x = -2.4; inner.add(tail);
    g.userData.tick = (t) => { inner.rotation.x = Math.sin(t * 1.4) * 0.06; };
    return g;
  },
  jackBox(p) {
    const g = new THREE.Group(), w = p.w || 2.4, h = p.h || 2.0;
    const mats = [0, 1, 2, 3, 4, 5].map((i) => new THREE.MeshStandardMaterial({ map: textTexture([['J', '🤡', 'A', '★', 'J', 'B'][i]], { w: 128, h: 128, font: 'bold 80px sans-serif', bg: hex(TOY[i]), color: '#ffffff' }), roughness: 0.6 }));
    const m = sh(new THREE.Mesh(new THREE.BoxGeometry(w, h, w), mats)); m.position.y = h / 2; g.add(m);
    const lid = box(g, w, 0.12, w, Mat.paint(0xf2b632, 0.5), 0, h, -w / 2, 0.03, 1); lid.geometry.translate(0, 0, w / 2); lid.position.set(0, h, -w / 2); lid.rotation.x = -1.9;
    const crank = cyl(g, 0.06, 0.06, 0.8, Mat.brass(), w / 2 + 0.4, h * 0.5, 0, 8); crank.rotation.z = Math.PI / 2;
    return g;
  },
  jackClown() {
    const g = new THREE.Group();
    // the spring under him (stretches as he pops up), his ruff and a big smiley head you can stand on
    const spring = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.06, 6, 16), Mat.steel());
    const coils = [];
    for (let i = 0; i < 6; i++) { const c = spring.clone(); c.rotation.x = Math.PI / 2; g.add(c); coils.push(c); }
    const ruff = sh(new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.18, 8, 20), Mat.paint(0xffffff, 0.7))); ruff.rotation.x = Math.PI / 2; ruff.position.y = -0.1; g.add(ruff);
    const head = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.85, 0.4, 24), Mat.paint(0xf6e3d0, 0.6))); head.position.y = 0.2; g.add(head);
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 8), Mat.plastic(0xe5484d)); nose.position.set(0, 0.45, 0.55); g.add(nose);
    const hat = sh(new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.6, 12), Mat.paint(0xa46ad8, 0.6))); hat.position.set(0.5, 0.7, -0.4); g.add(hat);
    for (const s of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), Mat.paint(0x111111)); e.position.set(s * 0.3, 0.42, 0.45); g.add(e); }
    g.userData.tick = () => { const top = g.position.y, base = 2.0; coils.forEach((c, i) => { c.position.y = -((top - base) * (i + 0.5)) / 6 - 0.2; }); };
    return g;
  },
  toyCubbies(p) {
    const g = new THREE.Group(), w = p.w || 6, d = p.d || 2.0, h = p.h || 6.0, wood = Mat.whiteWood();
    box(g, w, h, d - 0.1, wood, 0, 0, -0.05, 0.04, 0.5);
    const cols = 3, rows = 3;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const x = -w / 2 + (w / cols) * (c + 0.5), y = 0.25 + r * ((h - 0.4) / rows), bw = w / cols - 0.3, bh = (h - 0.4) / rows - 0.3;
      box(g, bw, bh, 0.1, Mat.paint(TOY[(r * cols + c) % TOY.length], 0.7), x, y, d / 2 - 0.02, 0.06, 1); // fabric bins
      const handle = box(g, 0.5, 0.12, 0.06, Mat.paint(0xffffff, 0.6), x, y + bh * 0.7, d / 2 + 0.05, 0.03, 1); void handle;
    }
    // toys on top: a robot and a ball (leave space to stand)
    box(g, 0.6, 0.9, 0.5, Mat.steel(), -w / 2 + 0.6, h, -0.3, 0.06, 1);
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 10), Mat.plastic(0xe5484d)); ball.position.set(w / 2 - 0.6, h + 0.4, -0.3); sh(ball); g.add(ball);
    return g;
  },
  atticLadder(p) {
    const g = new THREE.Group(), n = p.n || 10, rise = p.rise || 1.0, run = p.run || 0.85, w = p.w || 2.4, wood = Mat.woodBoard();
    for (let i = 0; i < n; i++) box(g, w, 0.25, run * 0.9, wood, 0, rise * (i + 1) - 0.25, -(i + 0.5) * run, 0.03, 1);
    const len = Math.hypot(n * run, n * rise), ang = Math.atan2(n * run, n * rise);
    for (const s of [-1, 1]) { const rail = box(g, 0.18, len, 0.25, Mat.woodDark(), 0, 0, 0, 0.03, 1); rail.geometry.translate(0, -len / 2, 0); rail.position.set(s * (w / 2 + 0.05), n * rise, -n * run); rail.rotation.x = -ang; }
    // the open hatch above, glowing with moonlight from the attic
    const hatch = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.8, n * run * 0.5), new THREE.MeshBasicMaterial({ color: 0x9fb4e8 })); hatch.rotation.x = Math.PI / 2; hatch.position.set(0, (p.ceiling || 13) - 0.02, -n * run + n * run * 0.25); g.add(hatch);
    const gl = glow(0xbfd0ff, 5, 0.35); gl.position.set(0, (p.ceiling || 13) - 1.0, -n * run + 1.0); g.add(gl);
    return g;
  },
  toyPiano() {
    const g = new THREE.Group();
    box(g, 3.4, 1.4, 1.8, Mat.paint(0xe5484d, 0.4), 0, 0.2, 0, 0.08, 0.5);
    for (let i = 0; i < 10; i++) box(g, 0.3, 0.12, 0.7, Mat.paint(0xffffff, 0.5), -1.35 + i * 0.3, 1.6, 0.5, 0.02, 1);
    for (const i of [0, 1, 3, 4, 5, 7, 8]) box(g, 0.16, 0.12, 0.42, Mat.paint(0x111111, 0.5), -1.2 + i * 0.3, 1.7, 0.35, 0.02, 1);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) cyl(g, 0.08, 0.08, 0.2, Mat.paint(0x111111), sx * 1.5, 0, sz * 0.7, 6);
    return g;
  },
  teepee(p) {
    const g = new THREE.Group(), r = p.r || 2.4, h = p.h || 5.6;
    const canvas = new THREE.MeshStandardMaterial({ map: textTexture(['★ ☾ ★'], { w: 256, h: 128, font: 'bold 48px sans-serif', bg: '#f2e3c8', color: '#3f8fd8' }), side: THREE.DoubleSide, roughness: 0.9 });
    const cone = sh(new THREE.Mesh(new THREE.ConeGeometry(r, h, 16, 1, true, 0.5, Math.PI * 2 - 1.0), canvas)); cone.position.y = h / 2; cone.rotation.y = Math.PI / 2 + 0.5; g.add(cone);
    for (let i = 0; i < 5; i++) { const a = (i / 5) * Math.PI * 2, pole = cyl(g, 0.05, 0.05, h + 1.2, Mat.woodBoard(), 0, 0, 0, 6); pole.position.set(Math.cos(a) * r * 0.08, (h + 1.2) / 2, Math.sin(a) * r * 0.08); pole.rotation.set(Math.sin(a) * 0.4, 0, -Math.cos(a) * 0.4); }
    // a cushion and a string of little lights inside
    const cushion = sh(new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.3, 0.35, 20), Mat.fabric(0xa46ad8))); cushion.position.y = 0.18; g.add(cushion);
    for (let i = 0; i < 9; i++) { const a = (i / 9) * Math.PI * 2, s = glow([0xffd27a, 0xff9ad0, 0x9fd8ff][i % 3], 0.5, 0.9); s.position.set(Math.cos(a) * r * 0.55, h * 0.45, Math.sin(a) * r * 0.55); g.add(s); }
    return g;
  },
  playRug(p) {
    const g = new THREE.Group(), w = p.w || 12, d = p.d || 9;
    const tex = textTexture([''], { w: 256, h: 192, bg: '#7fbf6a' });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshStandardMaterial({ map: tex, roughness: 1 })); m.rotation.x = -Math.PI / 2; m.position.y = 0.025; m.receiveShadow = true; g.add(m);
    // a little town: grey roads with dashes
    for (const [x, z, rw, rd] of [[0, 0, w - 1, 1.0], [-w / 4, 0, 1.0, d - 1], [w / 4, 0, 1.0, d - 1]]) { const r = new THREE.Mesh(new THREE.PlaneGeometry(rw, rd), Mat.paint(0x5a5e64, 0.9)); r.rotation.x = -Math.PI / 2; r.position.set(x, 0.03, z); g.add(r); }
    for (let i = 0; i < 8; i++) { const dsh = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.1), Mat.paint(0xffffff, 0.8)); dsh.rotation.x = -Math.PI / 2; dsh.position.set(-w / 2 + 1 + i * (w - 2) / 8, 0.035, 0); g.add(dsh); }
    return g;
  },
  toyCars() {
    const g = new THREE.Group();
    [[0, 0, 0.3, 0xe5484d], [1.4, 0.6, -0.5, 0x3f8fd8], [-1.2, -0.8, 1.2, 0xf2b632]].forEach(([x, z, r, c]) => {
      const car = new THREE.Group(); car.position.set(x, 0, z); car.rotation.y = r; g.add(car);
      box(car, 0.6, 0.3, 1.1, Mat.plastic(c), 0, 0.12, 0, 0.08, 1); box(car, 0.5, 0.25, 0.5, Mat.plastic(c), 0, 0.42, -0.1, 0.06, 1);
      for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { const w = cyl(car, 0.12, 0.12, 0.1, Mat.paint(0x111111), sx * 0.3, 0, sz * 0.35, 10); w.rotation.z = Math.PI / 2; w.position.y = 0.12; }
    });
    return g;
  },
  starLights(p) {
    const g = new THREE.Group(), w = p.w || 20, y = p.y0 || 11;
    for (let i = 0; i < 18; i++) { const x = -w / 2 + (w * i) / 17, s = glow([0xffd27a, 0xff9ad0, 0x9fd8ff, 0xb8ff9f][i % 4], 0.6, 0.9); s.position.set(x, y - Math.sin((i / 17) * Math.PI * 3) * 0.6 - 0.4, 0); g.add(s); }
    return g;
  },
  kite(p) {
    const g = new THREE.Group();
    const k = new THREE.Mesh(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 1, 0), new THREE.Vector3(0.7, 0, 0), new THREE.Vector3(0, -1.2, 0), new THREE.Vector3(-0.7, 0, 0)]), Mat.paint(0xf28a32));
    k.geometry.setIndex([0, 1, 2, 0, 2, 3]); k.geometry.computeVertexNormals(); k.material.side = THREE.DoubleSide; k.position.y = p.y0 || 9; g.add(k);
    return g;
  },
};
