// Mum and Dad's room at night: the big bed with the two of them fast asleep
// (Dad snoring), nightstands, a dresser and mirror, the wardrobe and tallboy,
// a reading chair heaped with clothes and a slowly turning ceiling fan.
import * as THREE from 'three';
import { Mat } from '../materials.js';
import { textTexture } from '../textures.js';
import { box, cyl, sh, hashf } from '../rooms.js';

const knob = (g, x, y, z) => { const k = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), Mat.brass()); k.position.set(x, y, z); g.add(k); return k; };
const drawers = (g, w, h, d, rows, cols, mat) => {
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const dw = w / cols - 0.2, dh = (h - 0.6) / rows - 0.15, x = -w / 2 + (w / cols) * (c + 0.5), y = 0.35 + r * ((h - 0.6) / rows);
    box(g, dw, dh, 0.08, mat, x, y, d / 2 + 0.02, 0.03, 1);
    knob(g, x, y + dh / 2, d / 2 + 0.12);
  }
};

export const PARENTS = {
  kingBed(p) {
    const g = new THREE.Group(), w = p.w || 10, l = p.l || 11, head = p.head || 7.0;
    const wood = Mat.walnut();
    box(g, w, 1.6, l, wood, 0, 0.6, 0, 0.08, 0.5);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) box(g, 0.45, 0.6, 0.45, wood, sx * (w / 2 - 0.3), 0, sz * (l / 2 - 0.3), 0.04, 1);
    box(g, w - 0.4, 1.3, l - 0.8, Mat.linen(0xf4f1ea), 0, 2.2, 0.2, 0.25, 0.5); // mattress
    // the duvet, thrown over two sleepers
    const duvet = new THREE.Mesh(new THREE.BoxGeometry(w + 0.3, 0.5, l - 3.2, 24, 2, 24), Mat.quilt(p.color || 0x6f8fb8));
    const pp = duvet.geometry.attributes.position;
    for (let i = 0; i < pp.count; i++) {
      const x = pp.getX(i), y = pp.getY(i), z = pp.getZ(i);
      const lump = (cx) => Math.exp(-((x - cx) ** 2) / 2.2 - ((z + 0.8) ** 2) / 14) * 0.9; // the two of them under it
      if (y > 0) pp.setY(i, y + lump(-2.3) + lump(2.3) * 1.15);
      if (Math.abs(x) > w / 2 - 0.1 && y < 0) pp.setY(i, y - 0.6); // hangs over the sides
    }
    duvet.geometry.computeVertexNormals(); sh(duvet); duvet.position.set(0, 3.55, 1.7); g.add(duvet);
    // pillows and the headboard (button-tufted)
    for (const s of [-1, 1]) { const pl = sh(new THREE.Mesh(new THREE.CapsuleGeometry(0.55, 2.4, 6, 14), Mat.linen(0xffffff))); pl.rotation.z = Math.PI / 2; pl.scale.set(1, 1, 0.75); pl.position.set(s * 2.3, 3.95, -l / 2 + 1.5); g.add(pl); }
    box(g, w + 0.4, head, 0.5, Mat.fabric(0x8a9bb0), 0, 0, -l / 2 + 0.25, 0.2, 0.4);
    for (let i = 0; i < 7; i++) for (let j = 0; j < 3; j++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), Mat.fabric(0x6f8090)); b.position.set(-w / 2 + 1.0 + i * ((w - 2) / 6), 4.6 + j * 0.8, -l / 2 + 0.52); g.add(b); }
    return g;
  },
  // Mum and Dad's sleeping heads on the pillows (they breathe; Dad's beard twitches when he snores)
  sleepers(p) {
    const g = new THREE.Group(), skin = Mat.matte ? Mat.matte(0xe8b896) : Mat.paint(0xe8b896, 0.8);
    const mk = (x, hair, beard) => {
      const h = new THREE.Group(); h.position.set(x, 0, 0); g.add(h);
      const head = sh(new THREE.Mesh(new THREE.SphereGeometry(0.75, 20, 14), skin)); head.scale.set(1, 0.95, 1.05); h.add(head);
      const hr = sh(new THREE.Mesh(new THREE.SphereGeometry(0.8, 20, 14, 0, Math.PI * 2, 0, Math.PI * 0.55), Mat.paint(hair, 0.9))); hr.rotation.x = -0.6; hr.position.set(0, 0.08, -0.12); h.add(hr);
      if (!beard) { const long = sh(new THREE.Mesh(new THREE.CapsuleGeometry(0.55, 0.9, 6, 12), Mat.paint(hair, 0.9))); long.rotation.x = Math.PI / 2 - 0.2; long.position.set(0, 0.1, -0.8); h.add(long); }
      else { const bd = sh(new THREE.Mesh(new THREE.SphereGeometry(0.55, 14, 10), Mat.paint(hair, 0.9))); bd.scale.set(1, 0.7, 0.8); bd.position.set(0, -0.45, 0.35); h.add(bd); }
      for (const s of [-0.25, 0.25]) { const e = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.03, 0.02), Mat.paint(0x3a2a24)); e.position.set(s, 0.1, 0.78); h.add(e); }
      return h;
    };
    const mum = mk(-2.3, 0x8a5a3a, false), dad = mk(2.3, 0x4a3a2c, true);
    mum.rotation.z = 0.2; dad.rotation.z = -0.15;
    g.userData.tick = (t) => { mum.position.y = Math.sin(t * 1.3) * 0.04; dad.position.y = Math.sin(t * 0.9) * 0.07; dad.rotation.x = Math.max(0, Math.sin(t * 0.9)) * 0.08; };
    return g;
  },
  zzz(p) {
    const g = new THREE.Group(), mats = [0, 1, 2].map(() => new THREE.SpriteMaterial({ map: textTexture(['Z'], { w: 64, h: 64, font: 'bold 52px sans-serif', color: '#dfe9ff' }), transparent: true, opacity: 0.8, depthWrite: false }));
    const zs = mats.map((m, i) => { const s = new THREE.Sprite(m); s.scale.setScalar(0.7 + i * 0.25); g.add(s); return s; });
    const top = (p.top || 11) - (p.y || 0);
    g.userData.tick = (t) => zs.forEach((s, i) => { const k = ((t * 0.35 + i / 3) % 1); s.position.set(Math.sin(k * 6 + i) * 0.5, k * top, Math.cos(k * 5) * 0.3); s.material.opacity = 0.85 * Math.sin(k * Math.PI); });
    return g;
  },
  // an upholstered chest at the foot of the bed (a step up onto it)
  blanketBox(p) {
    const g = new THREE.Group(), w = p.w || 6, h = p.h || 2.0, d = p.d || 1.8;
    box(g, w, h - 0.4, d, Mat.walnut(), 0, 0.2, 0, 0.05, 0.5);
    box(g, w + 0.1, 0.45, d + 0.1, Mat.fabric(0x8a9bb0), 0, h - 0.45, 0, 0.18, 0.5);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) cyl(g, 0.12, 0.09, 0.2, Mat.walnut(), sx * (w / 2 - 0.3), 0, sz * (d / 2 - 0.25), 8);
    const throwBlanket = box(g, 1.6, 0.25, d + 0.3, Mat.knit ? Mat.knit(0xe8b4c4) : Mat.fabric(0xe8b4c4), w / 4, h - 0.05, 0, 0.1, 1); void throwBlanket;
    return g;
  },
  nightstand(p) {
    const g = new THREE.Group(), w = p.w || 2.4, h = p.h || 3.0, d = p.d || 2.2, wood = Mat.walnut();
    box(g, w, h - 0.2, d, wood, 0, 0, 0, 0.05, 0.5); box(g, w + 0.1, 0.2, d + 0.1, wood, 0, h - 0.2, 0, 0.04, 0.5);
    drawers(g, w, h - 0.2, d, 2, 1, wood);
    const book = box(g, 1.0, 0.25, 0.7, Mat.book(0x8f3b3f), -w / 2 + 0.6, h, 0.3, 0.02, 1); book.rotation.y = 0.3;
    const glass = cyl(g, 0.16, 0.14, 0.45, Mat.glass(), w / 2 - 0.4, h, 0.5, 12); void glass;
    return g;
  },
  parentsDresser(p) {
    const g = new THREE.Group(), w = p.w || 7, d = p.d || 2.4, h = p.h || 4.4, wood = Mat.oak();
    box(g, w, h - 0.25, d, wood, 0, 0, 0, 0.05, 0.5); box(g, w + 0.15, 0.25, d + 0.15, wood, 0, h - 0.25, 0, 0.05, 0.5);
    drawers(g, w, h - 0.25, d, 3, 2, wood);
    // the mirror and a jewellery box; perfume bottles
    box(g, 4.0, 3.2, 0.25, wood, 0.8, h, -d / 2 + 0.2, 0.08, 0.6);
    const mirror = new THREE.Mesh(new THREE.PlaneGeometry(3.5, 2.7), new THREE.MeshStandardMaterial({ color: 0xc9d8e2, metalness: 1, roughness: 0.05 })); mirror.position.set(0.8, h + 1.6, -d / 2 + 0.34); g.add(mirror);
    box(g, 1.6, 1.0, 1.2, Mat.paint(0x8f3b3f, 0.4), -w / 2 + 1.4, h, 0.2, 0.08, 1);
    box(g, 1.7, 0.12, 1.3, Mat.brass(), -w / 2 + 1.4, h + 1.0, 0.2, 0.03, 1);
    [[0xffb3d1, 2.3], [0xbfe3ff, 2.9]].forEach(([c, x]) => { cyl(g, 0.22, 0.25, 0.6, new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.05, transmission: 0.4, transparent: true, opacity: 0.8 }), x, h, 0.4, 14); cyl(g, 0.08, 0.08, 0.2, Mat.brass(), x, h + 0.6, 0.4, 8); });
    // the sewing tin, spilling buttons
    cyl(g, 0.5, 0.5, 0.35, Mat.paint(0x3f8fd8, 0.4), w / 2 - 0.9, h, 0.6, 20);
    return g;
  },
  bigWardrobe(p) {
    const g = new THREE.Group(), w = p.w || 6, h = p.h || 9.6, d = p.d || 2.4, wood = Mat.oak();
    box(g, w, h - 0.4, d, wood, 0, 0.2, 0, 0.05, 0.5);
    box(g, w + 0.3, 0.4, d + 0.2, wood, 0, h - 0.4, 0, 0.05, 0.5); box(g, w + 0.1, 0.3, d, wood, 0, 0, 0, 0.03, 0.5);
    for (const s of [-1, 1]) { box(g, w / 2 - 0.2, h - 1.2, 0.1, wood, s * w / 4, 0.5, d / 2 + 0.03, 0.04, 0.5); box(g, 0.1, 1.2, 0.12, Mat.brass(), s * 0.3, h * 0.48, d / 2 + 0.12, 0.03, 1); }
    // a suitcase and hat box on top
    box(g, 3.0, 1.0, 1.8, Mat.paint(0x8f6b4f, 0.6), -w / 2 + 1.8, h, 0, 0.12, 0.6);
    cyl(g, 0.7, 0.7, 0.8, Mat.paint(0xe8b4c4, 0.6), w / 2 - 0.9, h, 0.2, 18);
    return g;
  },
  tallboy(p) {
    const g = new THREE.Group(), w = p.w || 3, h = p.h || 6.6, d = p.d || 2.2, wood = Mat.walnut();
    box(g, w, h - 0.2, d, wood, 0, 0, 0, 0.05, 0.5); box(g, w + 0.1, 0.2, d + 0.1, wood, 0, h - 0.2, 0, 0.04, 0.5);
    drawers(g, w, h - 0.2, d, 5, 1, wood);
    return g;
  },
  readingChair() {
    const g = new THREE.Group(), fab = Mat.fabric(0x9a6a5a);
    box(g, 3.0, 1.4, 2.6, fab, 0, 0.6, 0.3, 0.3, 0.5);
    box(g, 3.0, 4.4, 0.8, fab, 0, 0.6, -1.2, 0.35, 0.5);
    for (const s of [-1, 1]) box(g, 0.3, 1.6, 2.6, fab, s * 1.35, 1.4, 0.3, 0.12, 0.5);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) cyl(g, 0.1, 0.08, 0.6, Mat.walnut(), sx * 1.2, 0, sz * 1.2, 8);
    // a heap of Dad's clothes thrown over it
    const cols = [0x3f6aa3, 0x4a4a4a, 0xe8e4da];
    for (let i = 0; i < 3; i++) { const c = sh(new THREE.Mesh(new THREE.SphereGeometry(0.7, 12, 8), Mat.fabric(cols[i]))); c.scale.set(1.2, 0.35, 1); c.position.set(-0.6 + i * 0.6, 2.15 + i * 0.06, 0.2 + (i % 2) * 0.4); g.add(c); }
    const sleeve = box(g, 0.4, 1.6, 0.25, Mat.fabric(0x3f6aa3), 1.5, 0.6, 0.6, 0.1, 1); sleeve.rotation.z = -0.2;
    return g;
  },
  fanBlade() {
    const g = new THREE.Group();
    const blade = box(g, 3.2, 0.12, 1.1, Mat.oak(), 0, 0.08, 0, 0.05, 0.6); void blade; // long axis across the direction it travels
    box(g, 0.6, 0.1, 0.4, Mat.brass(), -1.4, 0.18, 0, 0.02, 1);
    return g;
  },
  fanHub(p) {
    const g = new THREE.Group(), top = p.top || 9.4, ceil = p.ceiling || 12;
    cyl(g, 0.6, 0.7, 0.8, Mat.brass(), 0, top - 0.8, 0, 20);
    cyl(g, 0.08, 0.08, ceil - top, Mat.brass(), 0, top, 0, 8);
    const bowl = sh(new THREE.Mesh(new THREE.SphereGeometry(0.55, 18, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xfff4dc, emissive: 0x5a4a30, emissiveIntensity: 0.5, transparent: true, opacity: 0.9 })));
    bowl.position.y = top - 0.8; g.add(bowl);
    cyl(g, 0.02, 0.02, 1.4, Mat.brass(), 0.3, top - 2.2, 0, 4);
    return g;
  },
  slippers(p) {
    const g = new THREE.Group();
    for (const [x, c, r] of [[0, p.color || 0xe8b4c4, 0.2], [0.8, p.color || 0xe8b4c4, -0.15]]) { const s = box(g, 0.6, 0.35, 1.3, Mat.fabric(c), x, 0, 0, 0.2, 1); s.rotation.y = r; }
    return g;
  },
  bedRug(p) {
    const g = new THREE.Group();
    const m = new THREE.Mesh(new THREE.PlaneGeometry(p.w || 14, p.d || 14), Mat.carpet(p.color || 0xb8a58a)); m.rotation.x = -Math.PI / 2; m.position.y = 0.025; m.receiveShadow = true; g.add(m);
    const border = new THREE.Mesh(new THREE.RingGeometry(0.1, 0.4, 4, 1), Mat.carpet(0x8f3b3f)); void border;
    return g;
  },
  curtains(p) {
    const g = new THREE.Group(), w = p.w || 6, h = p.h || 7, y = p.y0 || 3;
    const rod = cyl(g, 0.06, 0.06, w + 1.2, Mat.brass(), 0, 0, 0, 8); rod.rotation.z = Math.PI / 2; rod.position.y = y + h + 0.2;
    for (const s of [-1, 1]) {
      const c = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.35, h, 12, 1), Mat.fabric(p.color || 0x6f8fb8));
      const pp = c.geometry.attributes.position; for (let i = 0; i < pp.count; i++) pp.setZ(i, Math.sin(pp.getX(i) * 7) * 0.12);
      c.geometry.computeVertexNormals(); c.position.set(s * (w / 2 - w * 0.12), y + h / 2, 0.15); g.add(c);
    }
    return g;
  },
};
void hashf;
