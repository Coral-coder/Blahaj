// The basement at night: bare wooden stairs, the furnace glowing behind its
// little window, silver ducts, the water heater, Dad's train set, the old
// sofa under a dust sheet, pipes along the ceiling and the dumbwaiter.
import * as THREE from 'three';
import { Mat } from '../materials.js';
import { softDotTexture } from '../textures.js';
import { box, cyl, sh, hashf } from '../rooms.js';

const glow = (color, size, opacity = 0.6) => {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending }));
  s.scale.setScalar(size); return s;
};
const galv = () => new THREE.MeshStandardMaterial({ color: 0xb9c0c6, metalness: 0.85, roughness: 0.45 });
const copper = () => new THREE.MeshStandardMaterial({ color: 0xc27a4a, metalness: 0.9, roughness: 0.35 });

export const BASEMENT = {
  basementStairs(p) {
    const g = new THREE.Group(), n = p.n || 10, rise = p.rise || 0.8, run = p.run || 1.3, w = p.w || 4.5, rs = p.rail || 1;
    const tread = Mat.woodBoard(), dark = Mat.woodDark();
    for (let i = 0; i < n; i++) {
      const z = -(i + 0.5) * run, top = rise * (i + 1);
      box(g, w, 0.22, run + 0.12, tread, 0, top - 0.22, z, 0.04, 0.6);       // open treads
      cyl(g, 0.08, 0.08, 3.0, Mat.whiteWood(), rs * (w / 2 + 0.12), top, z, 8); // spindles
    }
    // the stringers under the treads, and a handrail
    const len = Math.hypot(n * run, n * rise), ang = Math.atan2(n * rise, n * run);
    for (const s of [-1, 1]) { const st = box(g, 0.3, 0.9, len, dark, s * (w / 2 - 0.15), 0, 0, 0.03, 0.6); st.position.set(s * (w / 2 - 0.15), (n * rise) / 2 - 0.4, -(n * run) / 2); st.rotation.x = ang; }
    const rail = box(g, 0.24, 0.2, len, Mat.oak(), 0, 0, 0, 0.06, 1); rail.position.set(rs * (w / 2 + 0.12), (n * rise) / 2 + 3.0, -(n * run) / 2); rail.rotation.x = ang;
    // solid blocks under the stairs so they read as a staircase from the side
    box(g, w - 0.4, 0.5, run * n, Mat.concrete(0x8d8a84), 0, 0, -(n * run) / 2, 0.02, 0.5);
    return g;
  },
  furnace(p) {
    const g = new THREE.Group(), w = p.w || 5, h = p.h || 6.5, d = p.d || 3.6;
    const body = Mat.paint(0x8c949a, 0.45);
    box(g, w, h, d, body, 0, 0, 0, 0.08, 0.4);
    // the glowing burner window and vents
    const fire = new THREE.MeshStandardMaterial({ color: 0xffb060, emissive: 0xff6a1a, emissiveIntensity: 2.6 });
    box(g, 1.8, 0.9, 0.08, fire, 0, 1.4, d / 2 + 0.02, 0.06, 1);
    const fg = glow(0xff8a3a, 3.4, 0.55); fg.position.set(0, 1.85, d / 2 + 0.4); g.add(fg);
    for (let i = 0; i < 6; i++) box(g, w - 1.4, 0.08, 0.05, Mat.paint(0x3a3c40), 0, 3.0 + i * 0.32, d / 2 + 0.03, 0.01, 1);
    box(g, 1.4, 0.8, 0.12, Mat.paint(0xe8e4da, 0.6), w / 2 - 1.1, 5.2, d / 2 + 0.05, 0.03, 1); // the dial plate
    const riser = box(g, 1.8, p.riser || 3.7, 1.6, galv(), 0, h, -0.3, 0.03, 0.5); void riser;
    const light = new THREE.PointLight(0xff8a3a, 14, 12, 1.8); light.position.set(0, 1.8, d / 2 + 1.0); g.add(light);
    // flicker
    g.userData.tick = (t) => { const f = 0.85 + Math.sin(t * 7.3) * 0.08 + Math.sin(t * 13.1) * 0.06; light.intensity = 14 * f; fire.emissiveIntensity = 2.6 * f; fg.material.opacity = 0.55 * f; };
    return g;
  },
  duct(p) {
    const g = new THREE.Group(), w = p.w || 10, h = p.h || 1.0, d = p.d || 1.8, y = p.y0 || 10;
    box(g, w, h, d, galv(), 0, y, 0, 0.03, 0.5);
    for (let i = 0; i <= Math.floor(w / 2); i++) box(g, 0.08, h + 0.08, d + 0.08, galv(), -w / 2 + i * 2, y - 0.04, 0, 0.01, 1); // seams
    for (let i = 0; i <= Math.floor(w / 3); i++) cyl(g, 0.03, 0.03, (p.ceiling || 13) - y - h, Mat.steel(), -w / 2 + 0.5 + i * 3, y + h, 0, 4); // hangers
    return g;
  },
  waterHeater(p) {
    const g = new THREE.Group(), h = p.h || 8.6;
    cyl(g, 1.55, 1.55, h - 0.4, Mat.paint(0xe8e4da, 0.5), 0, 0.4, 0, 28);
    cyl(g, 1.6, 1.6, 0.4, Mat.paint(0x5a5e64), 0, 0, 0, 28);
    const cap = sh(new THREE.Mesh(new THREE.SphereGeometry(1.55, 28, 8, 0, Math.PI * 2, 0, Math.PI / 2), Mat.paint(0xe8e4da, 0.5))); cap.scale.y = 0.08; cap.position.y = h; g.add(cap);
    box(g, 0.9, 1.2, 0.2, Mat.paint(0x3a3c40), 0, 1.0, 1.55, 0.06, 1);
    const label = box(g, 0.8, 0.5, 0.05, Mat.paint(0xf2b632, 0.6), 0, 5.0, 1.56, 0.02, 1); void label;
    for (const s of [-1, 1]) cyl(g, 0.12, 0.12, 2.2, copper(), s * 0.6, h, 0, 10);
    return g;
  },
  trainTable(p) {
    const g = new THREE.Group(), w = p.w || 10, d = p.d || 6, h = p.h || 3.0, mh = p.mountain || 3.0;
    const baize = new THREE.MeshStandardMaterial({ color: 0x4f8f4a, roughness: 1 });
    box(g, w, 0.3, d, Mat.woodBoard(), 0, h - 0.3, 0, 0.03, 0.6);
    box(g, w - 0.1, 0.04, d - 0.1, baize, 0, h, 0, 0.0, 0.6);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) box(g, 0.3, h - 0.3, 0.3, Mat.woodBoard(), sx * (w / 2 - 0.3), 0, sz * (d / 2 - 0.3), 0.03, 1);
    // the oval of track the train follows (track: false when the runaway train hazard lays its own)
    const tr = p.track || [-3.8, -2.0, 3.8, 2.0]; // x0 z0 x1 z1 relative
    const rail = Mat.steel(), sleeper = Mat.woodDark();
    if (p.track !== false) for (const [x0, z0, x1, z1] of [[tr[0], tr[1], tr[2], tr[1]], [tr[2], tr[1], tr[2], tr[3]], [tr[2], tr[3], tr[0], tr[3]], [tr[0], tr[3], tr[0], tr[1]]]) {
      const len = Math.hypot(x1 - x0, z1 - z0), ax = (x1 - x0) / len, az = (z1 - z0) / len;
      for (let k = 0; k < len; k += 0.5) { const sl = box(g, 1.3, 0.06, 0.2, sleeper, x0 + ax * k, h + 0.04, z0 + az * k, 0.01, 1); sl.rotation.y = Math.atan2(ax, az) + Math.PI / 2; }
      for (const s of [-0.45, 0.45]) { const r = box(g, 0.06, 0.08, len, rail, 0, 0, 0, 0.0, 1); r.position.set((x0 + x1) / 2 - az * s, h + 0.1, (z0 + z1) / 2 + ax * s); r.rotation.y = Math.atan2(ax, az); }
    }
    // the mountain: a lumpy rock with a tunnel and snow on top
    const rock = new THREE.MeshStandardMaterial({ color: 0x8a7f72, roughness: 1, flatShading: true });
    const m = sh(new THREE.Mesh(new THREE.DodecahedronGeometry(1, 1), rock));
    const pos = m.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) { const y = pos.getY(i); pos.setXYZ(i, pos.getX(i) * (1 + hashf(i, 1) * 0.12), Math.max(-1, y), pos.getZ(i) * (1 + hashf(i, 2) * 0.12)); }
    m.geometry.computeVertexNormals();
    m.scale.set(1.75, mh, 1.35); m.position.set(0, h, 0); g.add(m);
    const flat = box(g, 3.0, 0.2, 2.2, rock, 0, h + mh - 0.2, 0, 0.1, 1); void flat; // a flat little summit you can stand on
    const snow = box(g, 2.6, 0.12, 1.8, new THREE.MeshStandardMaterial({ color: 0xf6f8fb, roughness: 0.9 }), 0, h + mh - 0.02, 0, 0.06, 1); void snow;
    const tunnel = new THREE.Mesh(new THREE.CircleGeometry(0.55, 16, 0, Math.PI), new THREE.MeshBasicMaterial({ color: 0x0c0a0a })); tunnel.position.set(-1.62, h + 0.02, 0); tunnel.rotation.y = -Math.PI / 2; g.add(tunnel);
    // tiny trees and a house, tucked into the corners where the train never goes
    for (const [sx, sz, k] of [[1, 1, 0], [1, -1, 1], [-1, 1, 2], [1, 1, 3], [-1, 1, 4]]) {
      const t = sh(new THREE.Mesh(new THREE.ConeGeometry(0.28 - k * 0.02, 0.9 - (k > 2 ? 0.25 : 0), 8), Mat.paint(0x2f6b3a, 0.8)));
      t.position.set(sx * (w / 2 - 0.5 - (k > 2 ? 0.45 : 0)), h + 0.45, sz * (d / 2 - 0.35 - (k > 2 ? 0.05 : 0))); g.add(t);
    }
    box(g, 0.7, 0.5, 0.5, Mat.paint(0xe5484d, 0.6), -w / 2 + 0.5, h, -d / 2 + 0.4, 0.04, 1);
    return g;
  },
  toyTrain() {
    const g = new THREE.Group(), red = Mat.paint(0xc8282a, 0.4), black = Mat.paint(0x1c1d20, 0.5);
    box(g, 1.1, 0.5, 1.5, red, 0, 0.2, 0, 0.08, 1);              // engine body
    box(g, 1.1, 0.5, 0.6, red, 0, 0.7, -0.45, 0.06, 1);           // cab
    cyl(g, 0.38, 0.38, 0.9, black, 0, 0.42, 0.25, 14).rotation.x = Math.PI / 2;
    cyl(g, 0.12, 0.16, 0.35, black, 0, 0.7, 0.55, 10);            // chimney
    const lamp = box(g, 0.25, 0.2, 0.06, new THREE.MeshStandardMaterial({ color: 0xfff1c8, emissive: 0xffd88a, emissiveIntensity: 2 }), 0, 0.45, 0.76, 0.02, 1); void lamp;
    for (const sx of [-1, 1]) for (const sz of [-0.45, 0.45]) { const w = cyl(g, 0.2, 0.2, 0.1, black, sx * 0.55, 0, sz, 12); w.rotation.z = Math.PI / 2; w.position.y = 0.2; }
    const gl = glow(0xffd88a, 1.2, 0.5); gl.position.set(0, 0.55, 0.9); g.add(gl);
    return g;
  },
  pingPong(p) {
    const g = new THREE.Group(), w = p.w || 8, d = p.d || 4.4, h = p.h || 3.0;
    const top = new THREE.MeshStandardMaterial({ color: 0x2a5f8f, roughness: 0.6 });
    box(g, w, 0.2, d, top, 0, h - 0.2, 0, 0.02, 0.5);
    box(g, w + 0.02, 0.01, 0.1, Mat.paint(0xffffff), 0, h, 0, 0, 1);
    for (const s of [-1, 1]) { box(g, 0.1, 0.01, d + 0.02, Mat.paint(0xffffff), s * (w / 2 - 0.05), h, 0, 0, 1); box(g, w + 0.02, 0.01, 0.1, Mat.paint(0xffffff), 0, h, s * (d / 2 - 0.05), 0, 1); }
    const net = new THREE.Mesh(new THREE.PlaneGeometry(d + 0.3, 0.5), new THREE.MeshStandardMaterial({ color: 0xf6f6f6, transparent: true, opacity: 0.65, side: THREE.DoubleSide })); net.position.set(0, h + 0.25, 0); net.rotation.y = Math.PI / 2; g.add(net);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) box(g, 0.3, h - 0.2, 0.3, Mat.paint(0x2a2c30), sx * (w / 2 - 0.5), 0, sz * (d / 2 - 0.5), 0.03, 1);
    const bat = cyl(g, 0.42, 0.42, 0.06, Mat.paint(0xc8282a, 0.6), w / 4, h, d / 4, 18); void bat;
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 8), Mat.plastic(0xffffff)); ball.position.set(-w / 4, h + 0.12, -d / 5); g.add(ball);
    return g;
  },
  sheetCouch(p) {
    const g = new THREE.Group(), w = p.w || 7, d = p.d || 3;
    const sheet = new THREE.MeshStandardMaterial(Object.assign({ color: 0xece6da, roughness: 0.95 }));
    // a draped dust sheet: soft rounded lumps for the seat, back and arms
    const seat = sh(new THREE.Mesh(new THREE.BoxGeometry(w, 1.8, d - 0.6, 12, 3, 4), sheet)); seat.position.set(0, 0.9, 0.3); g.add(seat);
    const back = sh(new THREE.Mesh(new THREE.BoxGeometry(w, 3.6, 0.8, 12, 6, 2), sheet)); back.position.set(0, 1.8, -d / 2 + 0.4); g.add(back);
    for (const m of [seat, back]) {
      const pp = m.geometry.attributes.position;
      for (let i = 0; i < pp.count; i++) {
        const x = pp.getX(i), y = pp.getY(i), z = pp.getZ(i);
        const wob = Math.sin(x * 2.1 + z * 1.3) * 0.06 + Math.sin(x * 5.3) * 0.03;
        pp.setXYZ(i, x * (1 - 0.04 * Math.max(0, y)), y + (y > 0 ? -Math.abs(x / w) * 0.25 + wob : 0), z + (y < 0 ? Math.sign(z) * 0.1 : 0));
      }
      m.geometry.computeVertexNormals();
    }
    for (const s of [-1, 1]) { const arm = sh(new THREE.Mesh(new THREE.CapsuleGeometry(0.5, d - 1.2, 6, 12), sheet)); arm.rotation.x = Math.PI / 2; arm.position.set(s * (w / 2 - 0.4), 2.2, 0); g.add(arm); }
    // the sheet hangs in folds to the floor
    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 40, 1, true), sheet); skirt.scale.set(w / 2 + 0.05, 1.0, d / 2 + 0.05); skirt.position.y = 0.5; g.add(skirt);
    return g;
  },
  pipes(p) {
    const g = new THREE.Group(), w = p.w || 20, top = p.top || 9.4, d = p.d || 1.1;
    for (const [s, m] of [[-0.27, copper()], [0.27, Mat.paint(0x6d7378, 0.5)]]) { const pp = cyl(g, 0.42, 0.42, w, m, 0, 0, s * d, 16); pp.rotation.z = Math.PI / 2; pp.position.set(0, top - 0.45, s * d); }
    for (let i = 0; i <= Math.floor(w / 3); i++) { const x = -w / 2 + 0.6 + i * 3; box(g, 0.2, 0.2, d + 0.3, Mat.steel(), x, top - 0.95, 0, 0.02, 1); cyl(g, 0.03, 0.03, (p.ceiling || 13) - top + 1, Mat.steel(), x, top - 0.95, 0, 4); }
    // a valve wheel
    const v = sh(new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.06, 8, 18), Mat.paint(0xc8282a, 0.5))); v.position.set(w / 4, top - 0.45, -d / 2 - 0.35); g.add(v);
    return g;
  },
  dumbwaiter() {
    const g = new THREE.Group(), wood = Mat.woodBoard();
    box(g, 2.4, 0.3, 2.4, wood, 0, 0, 0, 0.04, 0.6);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) box(g, 0.12, 1.4, 0.12, Mat.steel(), sx * 1.1, 0.3, sz * 1.1, 0.02, 1);
    box(g, 2.4, 0.12, 0.12, Mat.steel(), 0, 1.7, -1.1, 0.02, 1);
    const lamp = glow(0xffe2a8, 1.0, 0.7); lamp.position.set(0, 1.5, -1.1); g.add(lamp);
    return g;
  },
  liftShaft(p) {
    const g = new THREE.Group(), h = p.h || 9.6;
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) box(g, 0.2, h, 0.2, Mat.woodDark(), sx * 1.4, 0, sz * 1.4, 0.03, 1);
    const rope = cyl(g, 0.04, 0.04, h + 2, Mat.paint(0xc9ab70), 0, 0, 0, 5); void rope;
    const wheel = sh(new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.08, 8, 20), Mat.steel())); wheel.position.y = h + 1.2; g.add(wheel);
    return g;
  },
  // a timber post holding up a landing
  post(p) { const g = new THREE.Group(); box(g, 0.5, p.h || 8, 0.5, Mat.woodDark(), 0, 0, 0, 0.04, 0.6); return g; },
  bareBulb(p) {
    const g = new THREE.Group(), y = p.y0 || 11, ceil = p.ceiling || 13;
    cyl(g, 0.02, 0.02, ceil - y, Mat.paint(0x1c1d20), 0, y, 0, 4);
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.28, 14, 10), new THREE.MeshStandardMaterial({ color: 0xf4f0e6, roughness: 0.2, transparent: true, opacity: 0.8 })); b.position.y = y - 0.15; g.add(b);
    const chain = cyl(g, 0.01, 0.01, 1.6, Mat.brass(), 0.15, y - 1.6, 0, 3); void chain;
    return g;
  },
  cobweb(p) {
    const g = new THREE.Group(), r = p.r || 1.6;
    const mat = new THREE.LineBasicMaterial({ color: 0xdfe6ef, transparent: true, opacity: 0.35 });
    const pts = [];
    for (let k = 0; k < 6; k++) { const a = (k / 5) * (Math.PI / 2); pts.push(0, 0, 0, Math.cos(a) * r, -Math.sin(a) * r, 0); }
    for (let ring = 1; ring <= 4; ring++) for (let k = 0; k < 5; k++) { const a0 = (k / 5) * (Math.PI / 2), a1 = ((k + 1) / 5) * (Math.PI / 2), rr = (ring / 4) * r; pts.push(Math.cos(a0) * rr, -Math.sin(a0) * rr, 0, Math.cos(a1) * rr * 0.96, -Math.sin(a1) * rr * 0.96, 0); }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const l = new THREE.LineSegments(geo, mat); l.position.y = p.y0 || 12.6; l.rotation.y = Math.PI / 4; g.add(l);
    return g;
  },
  sumpGrate(p) {
    const g = new THREE.Group(), r = p.r || 1.0;
    const disc = new THREE.Mesh(new THREE.CircleGeometry(r, 24), Mat.paint(0x1c1d20, 0.5)); disc.rotation.x = -Math.PI / 2; disc.position.y = 0.02; g.add(disc);
    for (let i = -3; i <= 3; i++) box(g, 0.06, 0.03, Math.sqrt(Math.max(0, r * r - (i * r / 3.5) ** 2)) * 2, Mat.steel(), i * r / 3.5, 0.02, 0, 0, 1);
    return g;
  },
  hatch(p) {
    const g = new THREE.Group(), w = p.w || 3.4, h = p.h || 3.8;
    box(g, w + 0.4, h + 0.3, 0.2, Mat.woodDark(), 0, 0, 0, 0.03, 0.6);
    const open = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: 0xffd9a0 })); open.position.set(0, h / 2, 0.11); g.add(open);
    const gl = glow(0xffd9a0, 4.4, 0.4); gl.position.set(0, h / 2, 0.6); g.add(gl);
    return g;
  },
};
