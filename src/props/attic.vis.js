// The attic at night: the underside of the roof, tie beams and planks, old
// trunks, a wardrobe, a rocking chair, a dress form and dust in the moonlight.
import * as THREE from 'three';
import { Mat } from '../materials.js';
import { softDotTexture } from '../textures.js';
import { box, cyl, sh, hashf } from '../rooms.js';

const oldWood = () => Mat.woodDark();
const glow = (color, size, opacity = 0.6) => {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending }));
  s.scale.setScalar(size); return s;
};

export const ATTIC = {
  tieBeam(p) {
    const g = new THREE.Group(), top = p.top || 8.6, w = p.w || 0.9, l = p.l || 14;
    box(g, w, 0.5, l, oldWood(), 0, top - 0.5, 0, 0.04, 0.5);
    // the rafters it ties together, rising from the knee walls to the ridge
    const Z0 = l / 2 + 2.6, dy = (p.ridge || 14) - top, len = Math.hypot(Z0, dy);
    for (const s of [-1, 1]) { const r = box(g, w * 0.8, 0.45, len, oldWood(), 0, 0, 0, 0.04, 0.5); r.position.set(0, top + dy / 2 - 0.2, s * Z0 / 2); r.rotation.x = s * Math.atan2(dy, Z0); }
    return g;
  },
  plank(p) {
    const g = new THREE.Group(), top = p.top || 8.6, l = p.l || 18, w = p.w || 1.0;
    box(g, l, 0.2, w, Mat.woodBoard(), 0, top - 0.2, 0, 0.02, 0.6);
    for (let i = 0; i < 6; i++) { const n = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.03, 6), Mat.steel()); n.position.set(-l / 2 + 0.6 + i * (l - 1.2) / 5, top + 0.01, 0); g.add(n); }
    return g;
  },
  kingpost(p) { const g = new THREE.Group(), y0 = p.y0 || 8.6, top = p.top || 10.8; box(g, 0.7, (p.ridge || 14) - y0, 0.7, oldWood(), 0, y0, 0, 0.04, 0.5); box(g, 1.4, 0.2, 1.4, Mat.woodBoard(), 0, top - 0.2, 0, 0.02, 1); return g; },
  trunk(p) {
    const g = new THREE.Group(), w = p.w || 3.0, h = p.h || 2.2, d = p.d || 2.0, y = p.y0 || 0;
    const leather = Mat.paint(p.color || 0x6b3f2a, 0.7);
    box(g, w, h - 0.5, d, leather, 0, y, 0, 0.06, 0.5);
    const lid = sh(new THREE.Mesh(new THREE.CylinderGeometry(d / 2, d / 2, w, 20, 1, false, 0, Math.PI), leather)); lid.rotation.set(0, 0, Math.PI / 2); lid.rotation.y = Math.PI / 2; lid.scale.set(1, 1, 0.5); lid.position.set(0, y + h - 0.5, 0); g.add(lid);
    for (const s of [-1, 1]) { box(g, 0.18, h - 0.4, d + 0.06, Mat.brass(), s * (w / 2 - 0.5), y, 0, 0.02, 1); }
    box(g, 0.4, 0.4, 0.08, Mat.brass(), 0, y + h - 0.85, d / 2 + 0.03, 0.04, 1);
    if (p.label) { const st = new THREE.Mesh(new THREE.CircleGeometry(0.35, 16), Mat.paint(0xe8d9a8, 0.8)); st.position.set(w / 4, y + 0.8, d / 2 + 0.02); g.add(st); }
    return g;
  },
  oldWardrobe(p) {
    const g = new THREE.Group(), w = p.w || 4, h = p.h || 6.6, d = p.d || 2.4, wood = Mat.walnut();
    box(g, w, h - 0.3, d, wood, 0, 0, 0, 0.05, 0.5); box(g, w + 0.3, 0.3, d + 0.2, wood, 0, h - 0.3, 0, 0.05, 0.5);
    for (const s of [-1, 1]) { const door = box(g, w / 2 - 0.2, h - 1.0, 0.1, wood, s * w / 4, 0.4, d / 2 + 0.03, 0.04, 0.5); void door; const k = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), Mat.brass()); k.position.set(s * 0.25, h * 0.5, d / 2 + 0.15); g.add(k); }
    // a mirror on one door, cracked a little
    const mir = new THREE.Mesh(new THREE.PlaneGeometry(w / 2 - 0.6, h * 0.5), new THREE.MeshStandardMaterial({ color: 0xaab8c4, metalness: 1, roughness: 0.15 })); mir.position.set(-w / 4, h * 0.55, d / 2 + 0.09); g.add(mir);
    return g;
  },
  rockingChair() {
    const g = new THREE.Group(), inner = new THREE.Group(); g.add(inner);
    const wood = Mat.woodDark();
    box(inner, 2.2, 0.2, 2.0, wood, 0, 1.8, 0.2, 0.05, 1);
    for (let i = 0; i < 6; i++) box(inner, 0.12, 2.6, 0.12, wood, -0.9 + i * 0.36, 2.0, -0.85, 0.02, 1);
    box(inner, 2.4, 0.25, 0.3, wood, 0, 4.4, -0.85, 0.05, 1);
    for (const s of [-1, 1]) { for (const z of [-0.7, 0.9]) box(inner, 0.14, 1.8, 0.14, wood, s * 1.0, 0.15, z, 0.02, 1); const rk = sh(new THREE.Mesh(new THREE.TorusGeometry(3, 0.1, 6, 24, 0.8), wood)); rk.rotation.y = Math.PI / 2; rk.rotation.z = -Math.PI / 2 - 0.4; rk.position.set(s * 1.0, 3.1, 0.1); inner.add(rk); }
    const cushion = box(inner, 1.8, 0.25, 1.6, Mat.quilt(0x9a6a5a), 0, 2.0, 0.2, 0.1, 1); void cushion;
    g.userData.tick = (t) => { inner.rotation.x = Math.sin(t * 0.8) * 0.05; }; // creak… creak…
    return g;
  },
  // the underside of the pitched roof: two slopes of boards from the knee walls up to the ridge
  roofSlope(p) {
    const g = new THREE.Group(), L = p.l || 32, knee = p.knee || 9, ridge = p.ridge || 14, half = p.half || 10;
    const dy = ridge - knee, len = Math.hypot(half, dy);
    for (const s of [-1, 1]) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(L, len), Mat.woodBoard()); m.material.side = THREE.DoubleSide; m.receiveShadow = true;
      m.position.set(0, (knee + ridge) / 2, s * half / 2); m.rotation.x = Math.atan2(-s * half, dy);
      g.add(m);
    }
    const ridgeBeam = box(g, L, 0.6, 0.8, Mat.woodDark(), 0, ridge - 0.6, 0, 0.04, 0.5); void ridgeBeam;
    return g;
  },
  floorHatch(p) {
    const g = new THREE.Group(), w = p.w || 3.2, d = p.d || 3.2;
    box(g, w + 0.4, 0.08, d + 0.4, Mat.woodDark(), 0, 0, 0, 0.02, 1);
    const hole = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshBasicMaterial({ color: 0x9a7a52 })); hole.rotation.x = -Math.PI / 2; hole.position.y = 0.09; g.add(hole);
    const lid = box(g, w, 0.15, d, Mat.woodBoard(), 0, 0, 0, 0.02, 0.6); lid.geometry.translate(0, 0, -d / 2); lid.position.set(0, 0.1, -d / 2); lid.rotation.x = -1.8;
    const gl = glow(0xffd9a0, 4, 0.18); gl.position.y = 0.8; g.add(gl);
    return g;
  },
  dressForm(p) {
    const g = new THREE.Group();
    cyl(g, 0.6, 0.7, 0.15, Mat.woodDark(), 0, 0, 0, 16); cyl(g, 0.08, 0.08, 2.4, Mat.woodDark(), 0, 0.15, 0, 8);
    const torso = sh(new THREE.Mesh(new THREE.CapsuleGeometry(0.7, 1.4, 8, 16), Mat.linen(0xe8d9c4))); torso.position.y = 3.4; torso.scale.set(1, 1, 0.7); g.add(torso);
    const skirt = sh(new THREE.Mesh(new THREE.ConeGeometry(1.2, 1.8, 20, 1, true), Mat.fabric(p.color || 0x8f3b4f))); skirt.material.side = THREE.DoubleSide; skirt.position.y = 2.2; g.add(skirt);
    const hat = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.08, 20), Mat.fabric(0x2a2c30))); hat.position.y = 4.85; g.add(hat);
    cyl(g, 0.45, 0.5, 0.5, Mat.fabric(0x2a2c30), 0, 4.85, 0, 16);
    return g;
  },
  oldCrib(p) {
    const g = new THREE.Group(), wood = Mat.whiteWood(), w = 3.2, d = 2.0, h = 2.8;
    box(g, w, 0.2, d, wood, 0, 1.0, 0, 0.02, 1);
    for (const s of [-1, 1]) { for (let i = 0; i < 10; i++) cyl(g, 0.05, 0.05, h - 1.0, wood, -w / 2 + 0.15 + i * (w - 0.3) / 9, 1.2, s * d / 2, 6); box(g, w, 0.12, 0.12, wood, 0, h, s * d / 2, 0.02, 1); }
    for (const s of [-1, 1]) box(g, 0.15, h, d, wood, s * w / 2, 0, 0, 0.02, 1);
    const bear = sh(new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 8), Mat.plush ? Mat.plush(0xb98a55) : Mat.fabric(0xb98a55))); bear.position.set(0.6, 1.55, 0); g.add(bear);
    void p; return g;
  },
  atticLamp(p) {
    const g = new THREE.Group(), y = p.y0 || 11.6, ceil = p.ceiling || 14;
    cyl(g, 0.02, 0.02, ceil - y, Mat.paint(0x1c1d20), 0, y, 0, 4);
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 10), new THREE.MeshStandardMaterial({ color: 0xf4f0e6, emissive: 0x30281c, emissiveIntensity: 0.6, transparent: true, opacity: 0.85 })); b.position.y = y - 0.15; g.add(b);
    return g;
  },
  // dust drifting in the moonbeam from the window
  dustMotes(p) {
    const g = new THREE.Group(), n = 70, pts = new Float32Array(n * 3), w = p.w || 6, h = p.h || 6, d = p.d || 3;
    for (let i = 0; i < n; i++) { pts[i * 3] = (hashf(i, 1) - 0.5) * w; pts[i * 3 + 1] = hashf(i, 2) * h; pts[i * 3 + 2] = (hashf(i, 3) - 0.5) * d; }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pts, 3));
    const mat = new THREE.PointsMaterial({ map: softDotTexture(), color: 0xdfe8ff, size: 0.18, transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending });
    const P = new THREE.Points(geo, mat); P.position.y = p.y0 || 1; g.add(P);
    g.userData.tick = (t) => { const a = geo.attributes.position; for (let i = 0; i < n; i++) a.setY(i, ((hashf(i, 2) * h + t * 0.15 * (0.5 + hashf(i, 4))) % h)); a.needsUpdate = true; };
    return g;
  },
  sheetedMirror() {
    const g = new THREE.Group(), sheet = new THREE.MeshStandardMaterial({ color: 0xe8e4da, roughness: 0.95 });
    // a tall mirror on a stand, a dust sheet thrown over it and hanging in folds
    const m = sh(new THREE.Mesh(new THREE.BoxGeometry(2.6, 4.8, 0.7, 10, 10, 2), sheet));
    const pp = m.geometry.attributes.position;
    for (let i = 0; i < pp.count; i++) { const x = pp.getX(i), y = pp.getY(i), z = pp.getZ(i); pp.setXYZ(i, x * (1 + Math.max(0, -y) * 0.06) + Math.sin(y * 3 + x) * 0.04, y, z + Math.sin(x * 4) * 0.06 * (z > 0 ? 1 : -1)); }
    m.geometry.computeVertexNormals(); m.position.y = 2.4; g.add(m);
    const top = sh(new THREE.Mesh(new THREE.SphereGeometry(1.3, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), sheet)); top.scale.set(1, 0.25, 0.3); top.position.y = 4.8; g.add(top);
    return g;
  },
};
