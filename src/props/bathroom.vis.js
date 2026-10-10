// The bathroom at night: a deep bubble bath, rainbow soap bubbles drifting
// up to the ceiling, the vanity with its mirror cabinet, the loo, and a steamy
// glass shower.
import * as THREE from 'three';
import { Mat } from '../materials.js';
import { softDotTexture } from '../textures.js';
import { box, cyl, sh, hashf } from '../rooms.js';

const porcelain = () => new THREE.MeshPhysicalMaterial({ color: 0xf8f8f6, roughness: 0.18, clearcoat: 0.8, clearcoatRoughness: 0.1 });
const chrome = () => new THREE.MeshStandardMaterial({ color: 0xe8ecf0, metalness: 1, roughness: 0.12 });
const foamMat = () => new THREE.MeshStandardMaterial({ color: 0xf6fbff, roughness: 0.65, emissive: 0x24303c, emissiveIntensity: 0.25 });
const glow = (color, size, opacity = 0.6) => {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending }));
  s.scale.setScalar(size); return s;
};

export const BATHROOM = {
  bathtub(p) {
    const g = new THREE.Group(), w = p.w || 9, d = p.d || 4.2, h = p.h || 3.0, t = 0.4, foamH = p.foam || 2.2;
    const shell = porcelain();
    box(g, w, h - 0.2, d, shell, 0, 0.2, 0, 0.35, 0.5);           // the outside of the tub
    box(g, w + 0.15, 0.25, d + 0.15, shell, 0, h - 0.25, 0, 0.12, 0.5); // a rolled rim
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 8), Mat.brass()); f.scale.y = 0.8; f.position.set(sx * (w / 2 - 0.5), 0.15, sz * (d / 2 - 0.4)); g.add(f); } // claw feet
    // the foam: a heap of bubbles mounded over the water
    const inner = new THREE.Mesh(new THREE.BoxGeometry(w - 2 * t, 0.1, d - 2 * t), new THREE.MeshStandardMaterial({ color: 0x9fd4ee, roughness: 0.1, metalness: 0.1 })); inner.position.y = foamH - 0.5; g.add(inner);
    const fm = foamMat();
    for (let i = 0; i < 46; i++) {
      const r = 0.35 + hashf(i, 3) * 0.45, x = (hashf(i, 1) - 0.5) * (w - 2 * t - 0.6), z = (hashf(i, 2) - 0.5) * (d - 2 * t - 0.5);
      const b = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 8), fm); b.position.set(x, foamH - 0.35 + hashf(i, 4) * 0.2, z); b.scale.y = 0.7; g.add(b);
    }
    // the taps at the foot end
    const spout = cyl(g, 0.12, 0.12, 0.9, chrome(), w / 2 - 0.35, h, 0, 12); spout.rotation.z = Math.PI / 2; spout.position.set(w / 2 - 0.7, h + 0.55, 0);
    cyl(g, 0.1, 0.12, 0.6, chrome(), w / 2 - 0.25, h, 0, 12);
    for (const s of [-1, 1]) { cyl(g, 0.08, 0.08, 0.35, chrome(), w / 2 - 0.25, h, s * 0.6, 10); const k = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), Mat.plastic(s < 0 ? 0xe5484d : 0x3f8fd8)); k.position.set(w / 2 - 0.25, h + 0.42, s * 0.6); g.add(k); }
    return g;
  },
  soapBubble(p) {
    const g = new THREE.Group();
    const m = new THREE.MeshPhysicalMaterial({ color: 0xd8f0ff, roughness: 0.05, metalness: 0.1, iridescence: 1, iridescenceIOR: 1.35, iridescenceThicknessRange: [180, 620], transparent: true, opacity: 0.42, clearcoat: 1, emissive: 0x3a5a78, emissiveIntensity: 0.6, depthWrite: false });
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.95, 32, 20), m); b.position.y = 0.6; b.scale.y = 0.72; g.add(b);
    const hl = glow(0xcfe9ff, 1.4, 0.35); hl.position.set(-0.3, 1.0, 0.3); g.add(hl);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.93, 0.03, 8, 40), new THREE.MeshBasicMaterial({ color: 0xbfe6ff, transparent: true, opacity: 0.5 })); rim.rotation.x = Math.PI / 2; rim.position.y = 0.6; g.add(rim); // a shimmer round its middle
    const ph = p.x * 1.7 + p.z;
    g.userData.tick = (t) => { const s = 1 + Math.sin(t * 2.2 + ph) * 0.04; b.scale.set(s, 0.72 / s, s); };
    return g;
  },
  vanity(p) {
    const g = new THREE.Group(), w = p.w || 6, d = p.d || 2.6, h = p.h || 4.2, shelfY = p.shelf || 7.6;
    const body = Mat.paint(0x6f9aa8, 0.5);
    box(g, w, h - 0.3, d, body, 0, 0, 0, 0.05, 0.5);
    for (let i = 0; i < 2; i++) { box(g, w / 2 - 0.2, h - 0.9, 0.08, body, (i - 0.5) * (w / 2), 0.3, d / 2 + 0.02, 0.03, 1); box(g, 0.08, 0.6, 0.1, chrome(), (i - 0.5) * (w / 2) + (i ? -0.6 : 0.6), h * 0.55, d / 2 + 0.1, 0.02, 1); }
    box(g, w + 0.1, 0.3, d + 0.1, Mat.marble(), 0, h - 0.3, 0, 0.04, 0.4);
    const basin = cyl(g, 0.9, 0.7, 0.12, porcelain(), 0, h, 0.2, 24); void basin;
    const tap = cyl(g, 0.08, 0.08, 0.7, chrome(), 0, h, -0.75, 10); void tap;
    const tapArm = cyl(g, 0.06, 0.06, 0.5, chrome(), 0, 0, 0, 10); tapArm.rotation.x = Math.PI / 2; tapArm.position.set(0, h + 0.65, -0.55);
    // a cup of toothbrushes and a soap pump: little steps up to the mirror shelf
    cyl(g, 0.35, 0.3, 1.0, Mat.ceramic(0xf2b632), -w / 2 + 0.8, h, 0.0, 16);
    for (const [c, a] of [[0xe5484d, -0.2], [0x3f8fd8, 0.2], [0x4fb06a, 0.0]]) { const tb = cyl(g, 0.05, 0.05, 1.1, Mat.plastic(c), -w / 2 + 0.8 + a * 0.5, h + 0.6, 0.0, 6); tb.rotation.z = a; }
    cyl(g, 0.3, 0.3, 0.9, Mat.plastic(0xd94f6b), w / 2 - 0.8, h, 0.1, 14); cyl(g, 0.06, 0.06, 0.4, chrome(), w / 2 - 0.8, h + 0.9, 0.1, 8);
    // the glass shelf, the mirror cabinet and a strip light
    box(g, w * 0.8, 0.2, 1.4, new THREE.MeshPhysicalMaterial({ color: 0xdff4f2, roughness: 0.05, transmission: 0.5, transparent: true, opacity: 0.7 }), 0, shelfY - 0.2, -d / 2 + 0.7, 0.02, 1);
    box(g, w * 0.8, 2.6, 0.5, Mat.whiteWood(), 0, shelfY + 0.4, -d / 2 + 0.25, 0.04, 0.5);
    const mirror = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.8 - 0.3, 2.3), new THREE.MeshStandardMaterial({ color: 0xc9d8e2, metalness: 1, roughness: 0.04 })); mirror.position.set(0, shelfY + 1.7, -d / 2 + 0.51); g.add(mirror);
    const strip = box(g, w * 0.7, 0.12, 0.12, new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff0d8, emissiveIntensity: 1.4 }), 0, shelfY + 3.05, -d / 2 + 0.4, 0.02, 1); void strip;
    // a little sponge and a rubber duck already on the shelf
    box(g, 0.6, 0.3, 0.4, Mat.sponge ? Mat.sponge() : Mat.plastic(0xf2d34a), w * 0.3, shelfY, -d / 2 + 0.9, 0.08, 1);
    return g;
  },
  toilet() {
    const g = new THREE.Group(), pc = porcelain();
    const bowl = cyl(g, 0.95, 0.65, 2.0, pc, 0, 0, 0.4, 24); bowl.scale.z = 1.25;
    const seat = sh(new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.14, 10, 28), Mat.whiteWood())); seat.rotation.x = Math.PI / 2; seat.scale.y = 1.25; seat.position.set(0, 2.08, 0.4); g.add(seat);
    const lid = box(g, 1.8, 0.12, 2.1, Mat.whiteWood(), 0, 2.1, 0.45, 0.4, 1); void lid;
    box(g, 2.4, 2.4, 1.0, pc, 0, 1.6, -1.0, 0.15, 0.5);       // cistern
    box(g, 2.5, 0.15, 1.1, pc, 0, 3.85, -1.0, 0.06, 0.5);
    cyl(g, 0.12, 0.12, 0.12, chrome(), 0.6, 4.0, -1.0, 12);  // flush button
    return g;
  },
  shower(p) {
    const g = new THREE.Group(), w = p.w || 6.4, d = p.d || 6.4, h = p.h || 8.0, gap = p.gap || 2.6;
    const glass = new THREE.MeshPhysicalMaterial({ color: 0xe8f6ff, roughness: 0.06, transmission: 0.85, thickness: 0.1, transparent: true, opacity: 0.28, side: THREE.DoubleSide, depthWrite: false });
    const g1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, h, d), glass); g1.position.set(w / 2 - 0.1, h / 2, 0); g.add(g1);
    const g2 = new THREE.Mesh(new THREE.BoxGeometry(w - gap, h, 0.1), glass); g2.position.set(-gap / 2, h / 2, d / 2 - 0.1); g.add(g2);
    for (const [x, z] of [[w / 2 - 0.1, d / 2 - 0.1], [w / 2 - 0.1, -d / 2 + 0.05], [-w / 2 + (w - gap) - gap / 2 + gap / 2 - 0.05, d / 2 - 0.1]]) box(g, 0.14, h, 0.14, chrome(), x, 0, z, 0.02, 1);
    box(g, w - gap, 0.12, 0.14, chrome(), -gap / 2, h - 0.06, d / 2 - 0.1, 0.02, 1);
    box(g, 0.14, 0.12, d, chrome(), w / 2 - 0.1, h - 0.06, 0, 0.02, 1);
    // tray, drain, shower head and a steamy glow
    box(g, w - 0.2, 0.15, d - 0.2, Mat.tiles(0xdfeaf0, 6), 0, 0, 0, 0.02, 1);
    const drain = new THREE.Mesh(new THREE.CircleGeometry(0.3, 16), chrome()); drain.rotation.x = -Math.PI / 2; drain.position.set(-0.4, 0.17, -0.4); g.add(drain);
    const pipe = cyl(g, 0.06, 0.06, h + 1.4, chrome(), -w / 2 + 0.2, 0, -d / 2 + 0.6, 8); void pipe;
    const head = cyl(g, 0.55, 0.3, 0.2, chrome(), -w / 2 + 1.2, h + 1.2, -d / 2 + 1.2, 20); void head;
    const arm = cyl(g, 0.05, 0.05, 1.3, chrome(), 0, 0, 0, 8); arm.rotation.z = Math.PI / 2; arm.position.set(-w / 2 + 0.7, h + 1.45, -d / 2 + 0.9);
    // the caddy shelves with bottles
    for (const y of [3.2, 5.8]) {
      box(g, 1.0, 0.12, 2.4, chrome(), -w / 2 + 0.5, y + 0.08, -1.2, 0.02, 1);
      [[0xf2b632, 0.9], [0x58c4ff, 1.2], [0xd94f6b, 0.8]].forEach(([c, hh], i) => box(g, 0.4, hh, 0.35, Mat.plastic(c), -w / 2 + 0.5, y + 0.2, -2.0 + i * 0.6, 0.12, 1));
    }
    return g;
  },
  towelShelf(p) {
    const g = new THREE.Group(), w = p.w || 4, top = p.top || 7.0, d = p.d || 1.2;
    box(g, w, 0.25, d, Mat.whiteWood(), 0, top - 0.25, 0, 0.03, 0.5);
    for (const s of [-1, 1]) box(g, 0.12, 0.7, d - 0.2, Mat.whiteWood(), s * (w / 2 - 0.4), top - 0.95, -0.05, 0.02, 1);
    // a rail of hanging towels under it
    const rail = cyl(g, 0.05, 0.05, w - 0.4, chrome(), 0, 0, 0, 8); rail.rotation.z = Math.PI / 2; rail.position.set(0, top - 1.1, d / 2 - 0.2);
    [[0x9cc9e8, -0.9], [0xf2efe8, 0.4]].forEach(([c, x]) => box(g, 1.2, 2.2, 0.12, Mat.fabric(c), x, top - 3.2, d / 2 - 0.2, 0.05, 1));
    // rolled towels on top (leave room to stand)
    for (let i = 0; i < 2; i++) { const t = cyl(g, 0.3, 0.3, d - 0.2, Mat.fabric([0xe8b4c4, 0xc9e8b4][i]), -w / 2 + 0.5 + i * 0.65, top, 0, 14); t.rotation.x = Math.PI / 2; t.position.y = top + 0.3; }
    return g;
  },
  toiletRolls() {
    const g = new THREE.Group(), paper = new THREE.MeshStandardMaterial({ color: 0xfbfbf6, roughness: 0.95 });
    for (let i = 0; i < 3; i++) for (let j = 0; j < (i === 2 ? 1 : 2); j++) { const r = cyl(g, 0.34, 0.34, 0.58, paper, (j - (i === 2 ? 0 : 0.5)) * 0.72, i * 0.6, 0, 18); void r; }
    return g;
  },
  bathMat(p) {
    const g = new THREE.Group();
    const m = new THREE.Mesh(new THREE.PlaneGeometry(p.w || 4, p.d || 2.4), Mat.carpet(p.color || 0x9cc9e8)); m.rotation.x = -Math.PI / 2; m.position.y = 0.03; m.receiveShadow = true; g.add(m);
    return g;
  },
  bathScale() {
    const g = new THREE.Group();
    box(g, 1.6, 0.2, 1.6, Mat.paint(0xf2efe8, 0.4), 0, 0, 0, 0.1, 1);
    const dial = new THREE.Mesh(new THREE.CircleGeometry(0.35, 20), Mat.paint(0x1c1d20, 0.4)); dial.rotation.x = -Math.PI / 2; dial.position.set(0, 0.21, 0.35); g.add(dial);
    return g;
  },
  bathPlant() {
    const g = new THREE.Group();
    cyl(g, 0.5, 0.4, 1.0, Mat.ceramic(0xf2efe8), 0, 0, 0, 16);
    for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2, l = box(g, 0.18, 1.8 + hashf(i, 1), 0.06, Mat.paint(0x3f7a3a, 0.7), Math.cos(a) * 0.2, 0.9, Math.sin(a) * 0.2, 0.03, 1); l.rotation.set(Math.sin(a) * 0.3, a, Math.cos(a) * 0.3); }
    return g;
  },
  duckFamily(p) {
    const g = new THREE.Group();
    for (let i = 0; i < (p.n || 3); i++) {
      const s = 0.5 - i * 0.1, d = new THREE.Group(); d.position.set(i * 0.7, 0, 0); g.add(d);
      const yel = new THREE.MeshStandardMaterial({ color: 0xffd23a, roughness: 0.35, emissive: 0x6a5208, emissiveIntensity: 0.6 });
      const body = new THREE.Mesh(new THREE.SphereGeometry(s, 14, 10), yel); body.scale.set(1.2, 0.8, 1); body.position.y = s * 0.8; d.add(body);
      const head = new THREE.Mesh(new THREE.SphereGeometry(s * 0.6, 12, 8), yel); head.position.set(s * 0.6, s * 1.5, 0); d.add(head);
      const beak = new THREE.Mesh(new THREE.ConeGeometry(s * 0.2, s * 0.5, 8), Mat.plastic(0xf28a32)); beak.rotation.z = -Math.PI / 2; beak.position.set(s * 1.2, s * 1.45, 0); d.add(beak);
    }
    return g;
  },
};
