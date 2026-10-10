// The laundry room: a washer mid-spin, a warm dryer, steel shelving, the
// ironing board, a clothes horse, and a basket riding the clothesline.
import * as THREE from 'three';
import { Mat } from '../materials.js';
import { textTexture } from '../textures.js';
import { box, cyl, sh, hashf } from '../rooms.js';

const CLOTH = [0xe8a0b4, 0x8fb8de, 0xf2e3b8, 0xffffff, 0xa8d5a2, 0x6d7fa8, 0xf2b632];
function machine(p, kind) {
  const g = new THREE.Group();
  const white = new THREE.MeshPhysicalMaterial({ color: 0xf3f4f2, roughness: 0.3, clearcoat: 0.7, clearcoatRoughness: 0.25 });
  box(g, 3.0, 4.0, 3.0, white, 0, 0, 0, 0.15, 0.5);
  box(g, 2.9, 0.55, 0.1, Mat.paint(0xd9dcdd, 0.5), 0, 3.35, 1.48, 0.04, 1); // control panel
  for (let i = 0; i < 3; i++) cyl(g, 0.13, 0.13, 0.1, Mat.plastic([0x3f8fd8, 0x9aa0a4, 0x9aa0a4][i]), -0.9 + i * 0.45, 3.5, 1.55, 16).rotation.x = Math.PI / 2;
  const disp = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.25), new THREE.MeshBasicMaterial({ map: textTexture([kind === 'dryer' ? '0:42' : '1:13'], { w: 128, h: 48, font: '700 34px monospace', color: kind === 'dryer' ? '#ffb86a' : '#6ad0ff', bg: '#101418' }) }));
  disp.position.set(0.85, 3.6, 1.56); g.add(disp);
  // round door: chrome ring, glass, and laundry tumbling inside
  const ring = sh(new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.14, 12, 40), Mat.steel())); ring.position.set(0, 1.75, 1.55); g.add(ring);
  const inside = new THREE.Mesh(new THREE.CircleGeometry(0.92, 36), new THREE.MeshStandardMaterial({ color: kind === 'dryer' ? 0x3a2a20 : 0x1c2a36, emissive: kind === 'dryer' ? 0x5a2e10 : 0x0a2030, emissiveIntensity: 0.8 }));
  inside.position.set(0, 1.75, 1.42); g.add(inside);
  const drum = new THREE.Group(); drum.position.set(0, 1.75, 1.3); g.add(drum);
  for (let i = 0; i < 7; i++) { const c = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 8), Mat.fabric(CLOTH[i], 2)); const a = (i / 7) * Math.PI * 2; c.position.set(Math.cos(a) * 0.5, Math.sin(a) * 0.5, 0); c.scale.set(1.2, 0.8, 0.5); drum.add(c); }
  const glass = new THREE.Mesh(new THREE.CircleGeometry(0.92, 36), new THREE.MeshPhysicalMaterial({ color: 0xcfe6ff, roughness: 0.05, transparent: true, opacity: 0.25 }));
  glass.position.set(0, 1.75, 1.6); g.add(glass);
  if (kind === 'dryer') { const L = new THREE.PointLight(0xffa860, 3, 5, 2); L.position.set(0, 1.75, 2.3); g.add(L); }
  const speed = kind === 'dryer' ? 1.6 : 4.2;
  g.userData.tick = (t) => { drum.rotation.z = -t * speed; g.position.x = (p.x || 0) + Math.sin(t * 40) * (kind === 'washer' ? 0.008 : 0.003); };
  return g;
}

export const LAUNDRY = {
  washer: (p) => machine(p, 'washer'),
  dryer: (p) => machine(p, 'dryer'),
  utilitySink(p) {
    const g = new THREE.Group();
    box(g, 3.0, 3.3, 2.4, Mat.paint(0xd5dadb, 0.5), 0, 0, 0, 0.1, 0.5);
    box(g, 3.1, 0.3, 2.5, Mat.steel(), 0, 3.3, 0, 0.08, 1);
    box(g, 2.5, 0.05, 1.9, Mat.paint(0x6d7378, 0.3), 0, 3.58, 0.1, 0.05, 1);
    const tap = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.06, 8, 18, Math.PI), Mat.steel()); tap.position.set(0, 4.5, -0.7); tap.rotation.y = Math.PI / 2; sh(tap); g.add(tap);
    cyl(g, 0.07, 0.09, 0.9, Mat.steel(), 0, 3.6, -1.1, 10);
    return g;
  },
  utilityShelf(p) {
    const g = new THREE.Group(), w = p.w || 4.4, d = p.d || 1.8, ys = p.shelves || [2.4, 4.8, 7.2, 9.6];
    const metal = Mat.paint(0x8a9298, 0.45);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) box(g, 0.16, ys[ys.length - 1], 0.16, metal, sx * (w / 2 - 0.1), 0, sz * (d / 2 - 0.1), 0.03, 1);
    ys.forEach((y, i) => {
      box(g, w, 0.18, d, metal, 0, y - 0.2, 0, 0.03, 1);
      if (i === ys.length - 1) return;
      // things kept on each shelf, leaving room to stand
      for (let k = 0; k < 2; k++) {
        const x = (k ? 1 : -1) * (w / 2 - 0.7), kind = hashf(i, k) > 0.5;
        if (kind) { const b = box(g, 1.0, 0.9, 1.1, Mat.cardboard(), x, y, -0.2, 0.04, 1); b.rotation.y = hashf(k, i) * 0.3; }
        else { cyl(g, 0.3, 0.32, 1.1, Mat.plastic(CLOTH[(i * 2 + k) % CLOTH.length]), x, y, -0.3, 14); cyl(g, 0.12, 0.12, 0.25, Mat.plastic(0xffffff), x, y + 1.1, -0.3, 10); }
      }
    });
    return g;
  },
  ironingBoard(p) {
    const g = new THREE.Group(), h = p.h || 3.8;
    const top = new THREE.Mesh(new THREE.CapsuleGeometry(0.75, 3.9, 6, 16), Mat.fabric(0x9fc3e6, 2)); top.rotation.z = Math.PI / 2; top.scale.set(1, 1, 0.12); top.position.y = h - 0.08; sh(top); g.add(top);
    for (const s of [-1, 1]) { const leg = cyl(g, 0.06, 0.06, h * 1.15, Mat.steel(), 0, 0, 0, 8); leg.position.set(-0.6 + s * 0.0, h / 2, 0); leg.rotation.z = s * 0.35; leg.scale.y = 1; leg.position.y = (h - 0.2) / 2 - h * 0.075; }
    const iron = new THREE.Group(); iron.position.set(2.0, h, 0); g.add(iron);
    const ib = sh(new THREE.Mesh(new THREE.ConeGeometry(0.4, 1.0, 4), Mat.plastic(0x3f8fd8))); ib.rotation.set(0, Math.PI / 4, Math.PI / 2); ib.scale.set(1, 1, 0.5); ib.position.y = 0.2; iron.add(ib);
    return g;
  },
  dryingRack(p) {
    const g = new THREE.Group(), h = p.h || 4.2, white = Mat.paint(0xf2efe6, 0.5);
    for (const s of [-1, 1]) for (const t of [-1, 1]) { const leg = cyl(g, 0.05, 0.05, h * 1.05, white, s * 1.6, 0, t * 0.5, 8); leg.rotation.x = t * 0.18; }
    for (let i = 0; i < 5; i++) box(g, 3.6, 0.06, 0.06, white, 0, h - 0.1, -0.7 + i * 0.35, 0.02, 1);
    // towels and a t-shirt drying over the rails
    [[0, 0xf2b632, -0.35], [1.1, 0x8fb8de, 0.35], [-1.1, 0xe8a0b4, 0.0]].forEach(([x, c, z]) => {
      const t = box(g, 0.95, 1.8, 0.06, Mat.fabric(c, 2), x, h - 1.85, z, 0.02, 1);
      t.position.y = h - 0.9;
    });
    return g;
  },
  stepLadder() {
    const g = new THREE.Group(), al = Mat.steel();
    for (const [z, h] of [[0.8, 1.2], [0, 2.4], [-0.8, 3.6]]) box(g, 2.0, 0.12, 0.8, Mat.paint(0x3a3f44, 0.6), 0, h - 0.12, z, 0.03, 1);
    for (const s of [-1, 1]) { const rail = box(g, 0.1, 3.9, 0.1, al, s * 0.95, 0, 0, 0.02, 1); rail.rotation.x = 0.38; rail.position.z = 0.1; }
    return g;
  },
  lineBasket() {
    const g = new THREE.Group();
    const b = cyl(g, 1.05, 0.9, 0.9, Mat.wicker(), 0, 0, 0, 24); b.scale.set(1, 1, 0.75);
    for (let i = 0; i < 4; i++) { const c = new THREE.Mesh(new THREE.SphereGeometry(0.42, 12, 8), Mat.fabric(CLOTH[i], 2)); c.scale.set(1.1, 0.4, 0.8); c.position.set(-0.4 + i * 0.28, 0.85, (i % 2) * 0.2 - 0.1); g.add(c); }
    // the ropes up to the line
    for (const s of [-1, 1]) { const r = cyl(g, 0.02, 0.02, 2.1, Mat.paint(0xf2efe6), s * 0.9, 0.9, 0, 6); r.rotation.z = -s * 0.3; }
    const hook = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.03, 6, 12), Mat.steel()); hook.position.y = 2.95; g.add(hook);
    return g;
  },
  clothesline(p) {
    const g = new THREE.Group(), y = p.y0 || 9.6, len = p.len || 22;
    const line = cyl(g, 0.025, 0.025, len, Mat.paint(0xf2efe6), 0, y, 0, 6); line.rotation.z = Math.PI / 2; line.position.y = y;
    // a few things pegged out to dry
    for (let i = 0; i < 6; i++) {
      const x = -len / 2 + 2 + i * ((len - 4) / 5); if (Math.abs(x) < 1.5) continue;
      const c = box(g, 1.1, 1.5, 0.05, Mat.fabric(CLOTH[i], 2), x, y - 1.5, 0, 0.02, 1); c.rotation.y = hashf(i, 2) * 0.3;
      for (const s of [-1, 1]) box(g, 0.08, 0.25, 0.1, Mat.plastic([0xe5484d, 0x3f8fd8, 0xf2b632][i % 3]), x + s * 0.4, y - 0.1, 0, 0.02, 1);
    }
    return g;
  },
  clothesPile() {
    const g = new THREE.Group();
    for (let i = 0; i < 14; i++) {
      const a = hashf(i, 1) * Math.PI * 2, r = Math.sqrt(hashf(i, 2)) * 1.0;
      const c = new THREE.Mesh(new THREE.SphereGeometry(0.62, 14, 10), Mat.fabric(CLOTH[i % CLOTH.length], 2));
      c.scale.set(1.25, 0.42, 0.9); c.position.set(Math.cos(a) * r, 0.25 + (1 - r) * 0.45 + (i % 3) * 0.08, Math.sin(a) * r); c.rotation.y = a;
      sh(c); g.add(c);
    }
    const sock = sh(new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.6, 6, 10), Mat.fabric(0xe5484d, 3))); sock.position.set(1.1, 0.25, 0.6); sock.rotation.set(Math.PI / 2, 0, 0.6); g.add(sock);
    return g;
  },
  mopBucket() {
    const g = new THREE.Group();
    cyl(g, 0.8, 0.7, 1.6, Mat.plastic(0xf2b632), 0, 0, 0, 22);
    cyl(g, 0.7, 0.7, 0.04, Mat.glass(), 0, 1.4, 0, 20);
    const mop = cyl(g, 0.06, 0.06, 6.0, Mat.woodBoard(), 0.3, 0.6, 0, 8); mop.rotation.z = -0.25;
    return g;
  },
  dogFood() {
    const g = new THREE.Group();
    const bag = sh(new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.6, 1.4, 4, 4, 2), new THREE.MeshStandardMaterial({ map: textTexture(['BISCUIT\'S', 'CRUNCH'], { w: 256, h: 320, font: '800 46px Nunito, sans-serif', color: '#fff', bg: '#c8642a' }), roughness: 0.8 })));
    const pa = bag.geometry.attributes.position;
    for (let i = 0; i < pa.count; i++) { const y = pa.getY(i); pa.setX(i, pa.getX(i) * (1 - Math.max(0, y) * 0.08)); pa.setZ(i, pa.getZ(i) * (1 - Math.max(0, y) * 0.25)); }
    bag.geometry.computeVertexNormals(); bag.position.y = 1.3; g.add(bag);
    return g;
  },
  backDoor(p) {
    const g = new THREE.Group(), w = p.w || 4.4, h = p.h || 9.4;
    box(g, w, h, 0.3, Mat.whiteWood(), 0, 0, 0, 0.05, 0.4);
    for (const [y, hh] of [[0.6, 3.6], [4.8, 3.9]]) box(g, w - 1.0, hh, 0.06, Mat.whiteWood(), 0, y, 0.17, 0.05, 1);
    // a pet flap at the bottom, and a round knob
    box(g, 1.6, 1.6, 0.08, Mat.plastic(0x9aa0a4), 0, 0.4, 0.2, 0.15, 1);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.2, 14, 10), Mat.brass()); knob.position.set(w / 2 - 0.6, 4.4, 0.35); g.add(knob);
    return g;
  },
  detergent(p) {
    const g = new THREE.Group();
    [[0, 0xe5484d, 1.2], [0.7, 0x3f8fd8, 1.0], [1.4, 0x4fb06a, 1.3]].forEach(([x, c, h]) => { box(g, 0.55, h, 0.4, Mat.plastic(c), x, 0, 0, 0.12, 1); cyl(g, 0.12, 0.12, 0.2, Mat.plastic(0xffffff), x, h, 0, 10); });
    void p; return g;
  },
  laundryRug(p) {
    const g = new THREE.Group(), w = p.w || 5, d = p.d || 3;
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.05, d), Mat.carpet(0x7fa3b8)); m.position.y = 0.025; m.receiveShadow = true; g.add(m);
    return g;
  },
};
