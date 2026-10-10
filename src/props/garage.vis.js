// The garage at night: the family car (headlights left on), the workbench and
// pegboard, a tall locker, boxes, the ceiling rack, bikes on the wall.
import * as THREE from 'three';
import { Mat } from '../materials.js';
import { textTexture, softDotTexture } from '../textures.js';
import { box, cyl, sh, hashf, rb } from '../rooms.js';

const glow = (color, size, opacity = 0.6) => {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending }));
  s.scale.setScalar(size); return s;
};
const tinted = () => new THREE.MeshPhysicalMaterial({ color: 0x1b2430, roughness: 0.08, metalness: 0.2, clearcoat: 1 });

export const GARAGE = {
  car(p) {
    const g = new THREE.Group(), L = p.l || 10.4, W = p.w || 4.8, hl2 = L / 2;
    const paint = new THREE.MeshPhysicalMaterial({ color: p.color || 0x7cc4ad, roughness: 0.32, metalness: 0.25, clearcoat: 1, clearcoatRoughness: 0.08 });
    const dark = Mat.paint(0x1c1d20, 0.6), trim = Mat.paint(0x2a2c30, 0.45), chrome = Mat.steel();
    const WZ = hl2 - 1.75, AR = 1.18; // wheel centres (local z) and arch radius
    // side profile (local z across, y up) extruded across the width: z -> shape x
    const extrude = (pts, width, bevel, mat) => {
      const sh_ = new THREE.Shape(); pts.forEach(([z, y], i) => (i ? sh_.lineTo(z, y) : sh_.moveTo(z, y)));
      const geo = new THREE.ExtrudeGeometry(sh_, { depth: width - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel * 0.8, bevelSegments: 4, curveSegments: 16 });
      geo.rotateY(-Math.PI / 2); geo.translate(width / 2 - bevel, 0, 0); geo.computeVertexNormals();
      const m = sh(new THREE.Mesh(geo, mat)); g.add(m); return m;
    };
    const arc = (cz, cy, r, a0, a1, n = 10) => Array.from({ length: n + 1 }, (_, i) => { const a = a0 + (a1 - a0) * (i / n); return [cz + Math.cos(a) * r, cy + Math.sin(a) * r]; });
    // a family minivan: stubby rounded nose, short sloping bonnet, one long tall cabin, upright tailgate
    const BELT = 3.2, ROOF = 5.35, WS = 3.05, RR = -hl2 + 0.2;
    const body = [
      [hl2 - 0.15, 0.75], [hl2 + 0.05, 1.3], [hl2 + 0.05, 2.0], ...arc(hl2 - 0.6, 2.05, 0.65, 0, Math.PI * 0.45, 6),
      [hl2 - 1.2, 2.85], [WS, BELT - 0.05], [RR, BELT], [-hl2 + 0.02, 2.6],
      [-hl2 - 0.06, 1.3], [-hl2 + 0.15, 0.75],
      ...arc(-WZ, 0.95, AR, Math.PI, 0, 14).map(([z, y]) => [z, Math.max(0.75, y)]),
      ...arc(WZ, 0.95, AR, Math.PI, 0, 14).map(([z, y]) => [z, Math.max(0.75, y)]),
    ];
    extrude(body, W, 0.32, paint);
    // the glasshouse: dark glass all round, a steep raked windscreen and a near-upright tailgate window
    const glassPts = [[WS + 0.05, BELT - 0.06], [1.45, ROOF - 0.25], ...arc(1.05, ROOF - 0.45, 0.45, Math.PI / 3, Math.PI / 2, 4), [RR + 0.45, ROOF], ...arc(RR + 0.45, ROOF - 0.45, 0.45, Math.PI / 2, Math.PI * 0.85, 4), [RR - 0.05, BELT]];
    extrude(glassPts, W - 0.6, 0.24, tinted());
    // body-coloured roof over the glass, with roof rails
    extrude([[1.55, ROOF - 0.22], ...arc(1.05, ROOF - 0.42, 0.47, Math.PI / 3, Math.PI / 2, 4), [RR + 0.45, ROOF + 0.03], ...arc(RR + 0.45, ROOF - 0.42, 0.47, Math.PI / 2, Math.PI * 0.8, 4), [RR, ROOF - 0.3], [1.55, ROOF - 0.3]], W - 0.5, 0.2, paint);
    for (const s of [-1, 1]) {
      const rail = box(g, 0.12, 0.12, 5.4, trim, s * (W / 2 - 0.55), ROOF + 0.02, (1.0 + RR) / 2, 0.04, 1); void rail;
      const xs = s * ((W - 0.6) / 2 + 0.02);
      const pillar = (z0, y0, z1, y1, w) => { const len = Math.hypot(z1 - z0, y1 - y0); const b = box(g, 0.08, len, w, paint, xs, 0, (z0 + z1) / 2, 0.03, 1); b.position.y = (y0 + y1) / 2; b.rotation.x = Math.atan2(z1 - z0, y1 - y0); };
      pillar(WS, BELT, 1.45, ROOF - 0.25, 0.3);     // A pillar
      pillar(0.75, BELT, 0.75, ROOF - 0.05, 0.28);  // B pillar
      pillar(-2.6, BELT, -2.6, ROOF - 0.05, 0.3);   // C pillar
      pillar(RR - 0.02, BELT, RR + 0.2, ROOF - 0.2, 0.45); // D pillar
      box(g, 0.06, 0.08, hl2 * 2 - 2.6, Mat.steel(), xs, BELT + 0.02, (WS + RR) / 2, 0.02, 1); // chrome beltline
      // door seams (front door, the sliding door and its track), handles and the mirror
      const sx = s * (W / 2 + 0.005);
      for (const z of [2.75, 0.75, -2.6]) box(g, 0.02, BELT - 0.95, 0.04, dark, sx, 0.95, z, 0.01, 1);
      box(g, 0.03, 0.06, 3.4, dark, sx, 2.15, -0.95, 0.01, 1); // sliding-door track
      for (const z of [1.0, -0.85]) box(g, 0.08, 0.12, 0.5, Mat.steel(), s * (W / 2 + 0.03), 2.6, z, 0.04, 1);
      const mir = sh(new THREE.Mesh(rb(0.5, 0.42, 0.28, 0.12), paint)); mir.position.set(s * (W / 2 + 0.22), 3.45, 2.75); g.add(mir);
      box(g, 0.06, 0.22, hl2 * 2 - 4.6, trim, s * (W / 2 + 0.01), 0.82, 0, 0.03, 1); // side skirt
    }
    // wheels: tyres with sidewalls, five-spoke rims and a hub cap
    const tyre = new THREE.MeshStandardMaterial({ color: 0x141416, roughness: 0.92 });
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const wg = new THREE.Group(); wg.position.set(sx * (W / 2 - 0.42), 0.95, sz * WZ); g.add(wg);
      const t = sh(new THREE.Mesh(new THREE.TorusGeometry(0.68, 0.27, 12, 28), tyre)); t.rotation.y = Math.PI / 2; t.scale.set(1, 1, 1.25); wg.add(t);
      const tread = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.93, 0.93, 0.5, 28, 1, true), tyre)); tread.rotation.z = Math.PI / 2; wg.add(tread);
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.14, 24), chrome); rim.rotation.z = Math.PI / 2; rim.position.x = sx * 0.12; wg.add(rim);
      const well = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.15, 20), Mat.paint(0x3a3d42, 0.5)); well.rotation.z = Math.PI / 2; well.position.x = sx * 0.15; wg.add(well);
      for (let k = 0; k < 5; k++) { const sp = box(wg, 0.08, 0.1, 0.5, chrome, sx * 0.2, 0, 0, 0.02, 1); sp.position.set(sx * 0.21, Math.cos((k / 5) * Math.PI * 2) * 0.27, Math.sin((k / 5) * Math.PI * 2) * 0.27); sp.rotation.x = (k / 5) * Math.PI * 2; }
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 8), chrome); cap.scale.x = 0.4; cap.position.x = sx * 0.24; wg.add(cap);
    }
    // the dark underside you see through the arches, and the bumpers
    box(g, W - 1.4, 0.8, L - 1.0, dark, 0, 0.45, 0, 0.05, 1);
    for (const s of [-1, 1]) { const bump = sh(new THREE.Mesh(rb(W - 0.2, 0.55, 0.45, 0.2), trim)); bump.position.set(0, 1.05, s * (hl2 - 0.05)); g.add(bump); }
    // headlights left on (that's the bright pool in front of the car), grille, tail lights and plates
    const hl = new THREE.MeshStandardMaterial({ color: 0xfff6e0, emissive: 0xfff0c8, emissiveIntensity: 2.4 });
    for (const s of [-1, 1]) {
      const lamp = sh(new THREE.Mesh(rb(1.1, 0.42, 0.2, 0.16), hl), false, false); lamp.position.set(s * (W / 2 - 0.85), 2.3, hl2 - 0.12); lamp.rotation.y = s * 0.12; g.add(lamp);
      const gl = glow(0xfff0c8, 2.2, 0.55); gl.position.set(s * (W / 2 - 0.85), 2.3, hl2 + 0.25); g.add(gl);
      const tail = sh(new THREE.Mesh(rb(1.0, 0.4, 0.16, 0.14), new THREE.MeshStandardMaterial({ color: 0xc8282a, emissive: 0x801010, emissiveIntensity: 0.9 })), false, false); tail.position.set(s * (W / 2 - 0.2), 3.0, -hl2 - 0.02); tail.scale.set(0.35, 3.2, 1); g.add(tail);
    }
    const grille = sh(new THREE.Mesh(rb(W - 2.8, 0.5, 0.12, 0.18), dark), false, false); grille.position.set(0, 1.85, hl2 + 0.04); g.add(grille);
    for (let i = 0; i < 3; i++) box(g, W - 3.0, 0.04, 0.04, chrome, 0, 1.68 + i * 0.13, hl2 + 0.1, 0.01, 1);
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.4), new THREE.MeshStandardMaterial({ map: textTexture(['LEO 1'], { w: 256, h: 72, font: 'bold 48px sans-serif', bg: '#f4f1e8', color: '#22324a' }) }));
    plate.position.set(0, 1.08, hl2 + 0.2); g.add(plate);
    const plate2 = plate.clone(); plate2.position.set(0, 1.75, -hl2 - 0.1); plate2.rotation.y = Math.PI; g.add(plate2);
    // a light beam on the floor in front
    const beam = new THREE.Mesh(new THREE.CircleGeometry(2.6, 32), new THREE.MeshBasicMaterial({ color: 0xfff0c8, transparent: true, opacity: 0.12, depthWrite: false, blending: THREE.AdditiveBlending }));
    beam.rotation.x = -Math.PI / 2; beam.scale.set(1, 1.4, 1); beam.position.set(0, 0.03, hl2 + 2.6); g.add(beam);
    const light = new THREE.SpotLight(0xfff0c8, 40, 14, 0.7, 0.6, 1.6); light.position.set(0, 2.2, hl2); light.target.position.set(0, 0, hl2 + 6); g.add(light, light.target);
    return g;
  },
  workbench(p) {
    const g = new THREE.Group(), w = p.w || 9, d = p.d || 2.6, h = p.h || 4.0, sy = p.shelf || 7.2, wood = Mat.woodBoard();
    box(g, w, 0.3, d, Mat.oak(), 0, h - 0.3, 0, 0.04, 0.5);
    for (const s of [-1, 1]) for (const t of [-1, 1]) box(g, 0.3, h - 0.3, 0.3, wood, s * (w / 2 - 0.2), 0, t * (d / 2 - 0.25), 0.03, 1);
    box(g, w - 0.4, 0.2, d - 0.4, wood, 0, 1.0, 0, 0.03, 0.5); // lower shelf
    // pegboard with tools
    const peg = box(g, w, sy - h - 0.4, 0.12, Mat.cardboard(), 0, h, -d / 2 + 0.06, 0.02, 0.4); void peg;
    const toolCols = [0xe5484d, 0x3f8fd8, 0xf2b632, 0x2a2c30];
    for (let i = 0; i < 7; i++) {
      const x = -w / 2 + 0.9 + i * ((w - 1.8) / 6), c = toolCols[i % toolCols.length];
      const handle = box(g, 0.22, 0.9, 0.12, Mat.plastic(c), x, h + 0.9 + (i % 2) * 0.5, -d / 2 + 0.2, 0.05, 1); void handle;
      const head = box(g, i % 3 === 0 ? 0.7 : 0.12, i % 3 === 0 ? 0.22 : 0.9, 0.1, Mat.steel(), x, h + 1.8 + (i % 2) * 0.5, -d / 2 + 0.2, 0.03, 1); void head;
    }
    // the shelf on brackets with paint tins on it
    box(g, w, 0.2, 1.4, wood, 0, sy - 0.2, -d / 2 + 0.7, 0.03, 0.5);
    for (const s of [-1, 0, 1]) box(g, 0.12, 0.8, 1.1, Mat.steel(), s * (w / 2 - 0.6), sy - 1.0, -d / 2 + 0.6, 0.02, 1);
    // a vice, a work lamp sits on the bench separately; a radio and some screws
    box(g, 0.9, 0.5, 0.7, Mat.paint(0x3a6fb0, 0.5), w / 2 - 1.2, h, d / 2 - 0.4, 0.06, 1);
    box(g, 1.2, 0.8, 0.6, Mat.plastic(0x2a2c30), -w / 2 + 1.4, h, -0.2, 0.1, 1);
    const dial = new THREE.Mesh(new THREE.CircleGeometry(0.22, 18), Mat.plastic(0xf2b632)); dial.position.set(-w / 2 + 1.7, h + 0.4, 0.11); g.add(dial);
    return g;
  },
  locker(p) {
    const g = new THREE.Group(), w = p.w || 3.0, h = p.h || 9.0, d = p.d || 2.0, m = Mat.paint(p.color || 0x6f8f86, 0.45);
    box(g, w, h, d, m, 0, 0, 0, 0.05, 0.4);
    for (const s of [-1, 1]) {
      box(g, w / 2 - 0.12, h - 0.4, 0.06, m, s * w / 4, 0.2, d / 2 + 0.02, 0.03, 1);
      for (let i = 0; i < 5; i++) box(g, w / 2 - 0.6, 0.06, 0.04, Mat.paint(0x2a2c30), s * w / 4, h - 1.0 - i * 0.22, d / 2 + 0.06, 0.01, 1); // vents
      box(g, 0.1, 0.6, 0.08, Mat.steel(), s * 0.25, h / 2, d / 2 + 0.08, 0.02, 1);
    }
    return g;
  },
  cardboardBox(p) {
    const g = new THREE.Group(), w = p.w || 2.4, h = p.h || 1.8, d = p.d || 2.4, y = p.y0 || 0;
    box(g, w, h, d, Mat.cardboard(), 0, y, 0, 0.03, 0.6);
    box(g, w + 0.01, 0.04, 0.4, Mat.paint(0xc9a46a, 0.4), 0, y + h - 0.02, 0, 0.0, 1); // tape
    if (p.label) { const l = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(w - 0.4, 1.6), 0.5), new THREE.MeshStandardMaterial({ map: textTexture([p.label], { w: 256, h: 80, font: 'bold 40px sans-serif', bg: '#d9bf8a', color: '#3a2a1a' }), transparent: true })); l.position.set(0, y + h / 2, d / 2 + 0.02); g.add(l); }
    return g;
  },
  ceilingRack(p) {
    const g = new THREE.Group(), w = p.w || 8, d = p.d || 4.2, top = p.top || 10.6, ceil = p.ceiling || 16;
    box(g, w, 0.12, d, Mat.steel(), 0, top - 0.12, 0, 0.02, 1);
    for (const s of [-1, 1]) for (const t of [-1, 1]) cyl(g, 0.06, 0.06, ceil - top + 0.25, Mat.steel(), s * (w / 2 - 0.15), top - 0.25, t * (d / 2 - 0.15), 6);
    for (let i = 0; i <= 8; i++) box(g, 0.05, 0.13, d, Mat.steel(), -w / 2 + (w * i) / 8, top - 0.25, 0, 0.0, 1);
    // stored stuff up top: a camping box and a rolled sleeping bag
    box(g, 2.4, 1.4, 1.8, Mat.plastic(0x3f8fd8), -w / 2 + 1.6, top, -d / 2 + 1.1, 0.12, 1);
    const bag = cyl(g, 0.55, 0.55, 2.0, Mat.fabric(0x4fb06a), w / 2 - 1.2, top + 0.55, -d / 2 + 0.8, 16); bag.rotation.z = Math.PI / 2; bag.position.y = top + 0.55;
    return g;
  },
  lawnmower() {
    const g = new THREE.Group(), red = Mat.paint(0xc8282a, 0.4);
    box(g, 2.4, 1.0, 2.8, red, 0, 0.4, 0, 0.3, 0.6);
    box(g, 1.2, 0.7, 1.2, Mat.paint(0x2a2c30), 0, 1.4, 0.4, 0.15, 1);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const w = cyl(g, 0.4, 0.4, 0.3, Mat.paint(0x18181a, 0.9), sx * 1.2, 0, sz * 1.1, 16); w.rotation.z = Math.PI / 2; w.position.y = 0.4; }
    for (const s of [-1, 1]) { const h = cyl(g, 0.05, 0.05, 3.0, Mat.steel(), s * 0.8, 0, -1.4, 8); h.rotation.x = -0.55; h.position.set(s * 0.8, 1.6, -2.1); }
    const grip = cyl(g, 0.07, 0.07, 1.8, Mat.plastic(0x2a2c30), 0, 0, -2.85, 8); grip.rotation.z = Math.PI / 2; grip.position.y = 2.85;
    return g;
  },
  tireStack(p) {
    const g = new THREE.Group(), n = p.n || 2;
    for (let i = 0; i < n; i++) { const t = sh(new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.38, 14, 32), Mat.paint(0x18181a, 0.85))); t.rotation.x = Math.PI / 2; t.position.y = 0.4 + i * 0.8; g.add(t); }
    const cap = new THREE.Mesh(new THREE.CircleGeometry(0.62, 24), Mat.paint(0x2a2c30, 0.9)); cap.rotation.x = -Math.PI / 2; cap.position.y = n * 0.8 - 0.05; g.add(cap);
    return g;
  },
  toolCart() {
    const g = new THREE.Group(), red = Mat.paint(0xc8282a, 0.4);
    box(g, 2.2, 2.8, 1.4, red, 0, 0.4, 0, 0.06, 0.5);
    for (let i = 0; i < 4; i++) { box(g, 2.0, 0.6, 0.06, red, 0, 0.6 + i * 0.65, 0.72, 0.03, 1); box(g, 1.2, 0.08, 0.08, Mat.steel(), 0, 0.95 + i * 0.65, 0.78, 0.02, 1); }
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) cyl(g, 0.18, 0.18, 0.4, Mat.paint(0x18181a), sx * 0.9, 0, sz * 0.5, 10);
    return g;
  },
  garageDoor(p) {
    const g = new THREE.Group(), w = p.w || 14, h = p.h || 9;
    const m = Mat.paint(0xe8e4da, 0.7);
    for (let i = 0; i < 5; i++) {
      box(g, w, h / 5 - 0.06, 0.25, m, 0, i * (h / 5), 0, 0.04, 0.4);
      for (let j = 0; j < 4; j++) box(g, w / 4 - 0.6, h / 5 - 0.6, 0.06, m, -w / 2 + (w / 4) * (j + 0.5), i * (h / 5) + 0.27, 0.14, 0.03, 1);
    }
    for (let j = 0; j < 4; j++) { const win = new THREE.Mesh(new THREE.PlaneGeometry(w / 4 - 0.9, 0.9), new THREE.MeshBasicMaterial({ color: 0x5a6aa0 })); win.position.set(-w / 2 + (w / 4) * (j + 0.5), h * 0.8 + 0.35, 0.2); g.add(win); }
    for (const s of [-1, 1]) box(g, 0.25, h + 0.4, 0.4, Mat.steel(), s * (w / 2 + 0.15), 0, 0, 0.03, 1); // rails
    return g;
  },
  leafBlower() {
    const g = new THREE.Group(), o = Mat.paint(0xf28a32, 0.4);
    box(g, 1.3, 1.1, 1.6, o, 0, 0, 0, 0.3, 0.6);
    const tube = cyl(g, 0.32, 0.4, 1.0, Mat.plastic(0x2a2c30), 0, 1.0, 0, 16); void tube; // pointing straight up
    const ring = sh(new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.06, 8, 20), o)); ring.rotation.x = Math.PI / 2; ring.position.y = 2.0; g.add(ring);
    return g;
  },
  wallBike(p) {
    const outer = new THREE.Group(), g = new THREE.Group(), frame = Mat.paint(p.color || 0x2fa3a0, 0.4), tire = Mat.paint(0x18181a, 0.9);
    for (const s of [-1, 1]) { const w = sh(new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.1, 10, 32), tire)); w.position.set(s * 1.6, 0, 0); g.add(w); }
    const bar = (x0, y0, x1, y1) => { const len = Math.hypot(x1 - x0, y1 - y0), m = cyl(g, 0.07, 0.07, len, frame, 0, 0, 0, 8); m.position.set((x0 + x1) / 2, (y0 + y1) / 2, 0); m.rotation.z = Math.atan2(x0 - x1, y1 - y0); return m; };
    bar(-1.6, 0, 0, 0.1); bar(0, 0.1, 1.6, 0); bar(0, 0.1, -0.5, 1.2); bar(-0.5, 1.2, 1.2, 1.2); bar(1.2, 1.2, 1.6, 0); bar(-1.6, 0, -0.5, 1.2);
    box(g, 0.7, 0.15, 0.3, Mat.plastic(0x2a2c30), -0.5, 1.3, 0, 0.05, 1);
    bar(1.2, 1.2, 1.3, 1.7); box(g, 0.1, 0.1, 1.0, Mat.plastic(0x2a2c30), 1.3, 1.7, 0, 0.03, 1);
    for (const x of [-1.6, 1.6]) box(g, 0.1, 0.6, 0.3, Mat.steel(), x, 1.1, -0.15, 0.02, 1); // wall hooks
    g.position.y = p.y0 || 6; outer.add(g); // hung up on the wall (the builder places the outer group)
    return outer;
  },
  paintCans(p) {
    const g = new THREE.Group(), cols = [0xe5484d, 0x3f8fd8, 0xf2b632, 0xffffff, 0x4fb06a];
    for (let i = 0; i < (p.n || 3); i++) { const c = cyl(g, 0.4, 0.4, 0.8, Mat.steel(), i * 0.95, p.y0 || 0, 0, 18); void c; const lab = cyl(g, 0.41, 0.41, 0.45, Mat.paint(cols[(i + (p.seed || 0)) % cols.length], 0.6), i * 0.95, (p.y0 || 0) + 0.15, 0, 18); void lab; }
    return g;
  },
  oilStain(p) {
    const m = new THREE.Mesh(new THREE.CircleGeometry(p.r || 1.4, 28), new THREE.MeshStandardMaterial({ color: 0x1c1a18, roughness: 0.2, transparent: true, opacity: 0.45, depthWrite: false }));
    m.rotation.x = -Math.PI / 2; m.position.y = 0.02; m.scale.set(1, 0.7, 1);
    const g = new THREE.Group(); g.add(m); return g;
  },
  // a buzzing fluorescent tube hung from the ceiling (decor; it doesn't light the floor)
  shopLight(p) {
    const g = new THREE.Group(), y = p.y0 || 14;
    box(g, 4.4, 0.2, 0.5, Mat.paint(0xe8e4da, 0.6), 0, y, 0, 0.03, 1);
    const tube = cyl(g, 0.1, 0.1, 4.0, new THREE.MeshStandardMaterial({ color: 0xeef6ff, emissive: 0xcfe4ff, emissiveIntensity: p.on ? 1.6 : 0.15 }), 0, 0, 0, 10);
    tube.rotation.z = Math.PI / 2; tube.position.y = y - 0.12;
    for (const s of [-1, 1]) cyl(g, 0.02, 0.02, (p.ceiling || 16) - y, Mat.steel(), s * 1.8, y + 0.2, 0, 4);
    if (p.on) { const l = new THREE.PointLight(0xdfeaff, 30, 22, 1.6); l.position.y = y - 0.6; g.add(l); }
    return g;
  },
  pegboard() { return new THREE.Group(); },
};
void hashf;
