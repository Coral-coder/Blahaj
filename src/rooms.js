// Realistic room interiors at night: shells, furniture, lights, moonbeams,
// and the creeping dark on the floor. Collision boxes come from prefabs.js;
// this file only builds what you see.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { Mat, worldUV } from './materials.js';
import { nightSkyTexture, softDotTexture, textTexture, vnoise } from './textures.js';
import { expand, roomBoxes } from './prefabs.js';
import * as Art from './art.js';
import { VIS } from './props/vis.js';

const sh = (m, c = true, r = true) => { m.castShadow = c; m.receiveShadow = r; return m; };
const hashf = (a, b = 0) => { const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453; return s - Math.floor(s); };
function rb(w, h, d, r = 0.05, seg = 2) {
  r = Math.max(0.002, Math.min(r, w / 2 - 0.004, h / 2 - 0.004, d / 2 - 0.004));
  return new RoundedBoxGeometry(w, h, d, seg, r);
}
function box(g, w, h, d, mat, x = 0, y0 = 0, z = 0, r = 0.04, uv = 0.5, shadow = true) {
  const m = new THREE.Mesh(worldUV(rb(w, h, d, r), uv), mat);
  sh(m, shadow, true);
  m.position.set(x, y0 + h / 2, z);
  g.add(m);
  return m;
}
function cyl(g, rt, rb_, h, mat, x = 0, y0 = 0, z = 0, seg = 24) {
  const m = sh(new THREE.Mesh(new THREE.CylinderGeometry(rt, rb_, h, seg), mat));
  m.position.set(x, y0 + h / 2, z);
  g.add(m);
  return m;
}
function knob(g, x, y, z, color = 0xd2ad66) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 8), color === 0xd2ad66 ? Mat.brass() : Mat.plastic(color));
  m.position.set(x, y, z);
  g.add(m);
}
const BOOKS = [0xb5473a, 0x3f6aa3, 0xe0a83a, 0x4f8f5c, 0x7a5aa8, 0xd97a8f, 0x2f8f8a, 0xf0d26b, 0x8a5a3a, 0x293b5f];

// ---------------------------------------------------------------- props --
function rowOfBooks(g, x0, x1, y, z, depth, maxH, seed) {
  let x = x0, i = 0;
  while (x < x1 - 0.15) {
    const w = 0.14 + hashf(seed, i) * 0.16, h = maxH * (0.6 + hashf(i, seed) * 0.38);
    if (x + w > x1) break;
    const lean = hashf(seed + 3, i) > 0.92 ? 0.25 : 0;
    const b = box(g, w, h, depth * (0.75 + hashf(i, 9) * 0.2), Mat.book(BOOKS[Math.floor(hashf(seed, i * 7) * BOOKS.length)]), x + w / 2, y, z, 0.015, 2);
    b.rotation.z = lean;
    x += w + 0.01; i++;
  }
}

// A licking flame: noise scrolls upward through a tapered teardrop and the
// colour runs white-yellow at the base to orange to a deep red tip.
function flameMaterial(seed) {
  return new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 }, seed: { value: seed } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `uniform float time; uniform float seed; varying vec2 vUv;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
      float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * noise(p); p *= 2.03; a *= 0.5; } return s; }
      void main(){
        float t = time * 1.7 + seed * 13.0;
        float n = fbm(vec2(vUv.x * 3.0 + seed * 7.0, vUv.y * 2.6 - t * 1.9));
        float x = (vUv.x - 0.5) * 2.0 + (n - 0.5) * 0.9 * vUv.y;
        float h = vUv.y + (n - 0.5) * 0.35;
        float width = (1.0 - h) * 0.85 + 0.05;
        float body = (1.0 - smoothstep(width * 0.45, width, abs(x))) * (1.0 - smoothstep(0.5, 0.98, h)) * smoothstep(0.0, 0.1, vUv.y);
        vec3 col = mix(vec3(1.0, 0.92, 0.65), vec3(1.0, 0.5, 0.1), smoothstep(0.05, 0.42, h));
        col = mix(col, vec3(0.75, 0.15, 0.04), smoothstep(0.42, 0.85, h));
        float a = clamp(body * (0.8 + 0.4 * n), 0.0, 1.0);
        gl_FragColor = vec4(col * a * 1.5, a);
      }`,
  });
}

const V = {
  cabinBed(p) {
    const g = new THREE.Group();
    const w = p.w || 5.5, l = p.l || 9.1, h = p.h || 4.5;
    box(g, w, h - 1.0, l, Mat.whiteWood(), 0, 0, 0, 0.08, 0.4);
    for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) {
      const dz = -l / 2 + 1.0 + c * ((l - 2.0) / 3) + (l - 2.0) / 6, dy = 0.35 + r * 1.55;
      box(g, 0.14, 1.35, (l - 2.6) / 3, Mat.oak(), w / 2 + 0.05, dy, dz, 0.05, 0.5);
      knob(g, w / 2 + 0.16, dy + 0.68, dz, 0x9fc3e6);
    }
    box(g, w - 0.25, 0.8, l - 0.5, Mat.fabric(0xf5f2ec, 2), 0, h - 1.0, 0.1, 0.25, 0.6);
    const hb = box(g, w + 0.3, h + 2.1, 0.4, Mat.oak(), 0, 0, -l / 2 + 0.2, 0.18, 0.4);
    hb.geometry = worldUV(rb(w + 0.3, h + 2.1, 0.4, 0.18), 0.4);
    // little star cut-out decals on the headboard
    for (let i = 0; i < 3; i++) {
      const s = Art.createStar(); s.scale.setScalar(0.5); s.position.set(-1.4 + i * 1.4, h + 1.3, -l / 2 + 0.42);
      s.children.forEach((c) => { if (c.isSprite) c.visible = false; });
      g.add(s);
    }
    return g;
  },
  bedsideTable() {
    const g = new THREE.Group();
    box(g, 2, 2.7, 2, Mat.whiteWood(), 0, 0, 0, 0.06, 0.5);
    box(g, 1.7, 0.8, 0.08, Mat.oak(), 0, 1.6, 1.02, 0.03, 0.6);
    knob(g, 0, 2.0, 1.1);
    // alarm clock with glowing digits
    const clock = box(g, 0.8, 0.5, 0.35, Mat.plastic(0x2b2f3a), 0.45, 2.7, 0.35, 0.08, 1);
    const digits = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.3), new THREE.MeshBasicMaterial({ map: textTexture(['2:13'], { w: 256, h: 128, font: '700 88px monospace', color: '#ff6b4a' }), transparent: true }));
    digits.position.set(0.45, 2.95, 0.53); g.add(digits);
    box(g, 0.9, 0.18, 1.2, Mat.book(0x3f6aa3), -0.3, 2.7, -0.3, 0.02, 2);
    return g;
  },
  desk(p) {
    const g = new THREE.Group();
    const w = p.w || 5.5, d = p.d || 2.7, h = p.h || 3.4;
    box(g, w, 0.25, d, Mat.oak(), 0, h - 0.25, 0, 0.05, 0.4);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) box(g, 0.3, h - 0.25, 0.3, Mat.whiteWood(), sx * (w / 2 - 0.2), 0, sz * (d / 2 - 0.2), 0.05, 1);
    box(g, 1.6, 0.9, d - 0.3, Mat.whiteWood(), w / 2 - 1.0, h - 1.15, 0, 0.04, 1);
    // drawings, pencil cup, a globe
    const draw = textTexture(['🦈 ☀️', '🌙 ⭐'], { w: 256, h: 192, font: '72px sans-serif', color: '#333', bg: '#fbf8f0' });
    const paper = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.75), new THREE.MeshStandardMaterial({ map: draw, roughness: 0.95 }));
    paper.rotation.set(-Math.PI / 2, 0, 0.3); paper.position.set(-1.2, h + 0.01, 0.4); g.add(paper);
    cyl(g, 0.22, 0.2, 0.55, Mat.plastic(0xe06c5a), 1.9, h, -0.7);
    for (let i = 0; i < 4; i++) { const c = cyl(g, 0.04, 0.04, 0.9, Mat.plastic([0xf0d26b, 0x3f6aa3, 0x4f8f5c, 0xd97a8f][i]), 1.9 + (i - 1.5) * 0.06, h + 0.2, -0.7, 8); c.rotation.z = (i - 1.5) * 0.12; }
    const globe = new THREE.Mesh(new THREE.SphereGeometry(0.45, 24, 16), Mat.plastic(0x4f8fbf)); globe.position.set(-2.1, h + 0.75, -0.8); sh(globe); g.add(globe);
    cyl(g, 0.25, 0.35, 0.25, Mat.walnut(), -2.1, h, -0.8);
    return g;
  },
  chair() {
    const g = new THREE.Group();
    const paint = Mat.paint(0x7fb3d5, 0.6);
    box(g, 2, 0.3, 2, paint, 0, 1.75, 0, 0.08, 0.6);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) box(g, 0.22, 1.75, 0.22, paint, sx * 0.8, 0, sz * 0.8, 0.05, 1);
    for (let i = 0; i < 3; i++) box(g, 0.2, 2.1, 0.18, paint, -0.6 + i * 0.6, 2.05, -0.9, 0.05, 1);
    box(g, 2, 0.4, 0.22, paint, 0, 4.0, -0.9, 0.08, 1);
    return g;
  },
  bookcase(p) {
    const g = new THREE.Group();
    const w = p.w || 3.6, h = p.h || 6.4, d = p.d || 1.4;
    const wood = Mat.whiteWood();
    box(g, 0.15, h, d, wood, -w / 2 + 0.075, 0, 0, 0.03, 1); box(g, 0.15, h, d, wood, w / 2 - 0.075, 0, 0, 0.03, 1);
    box(g, w, 0.15, d, wood, 0, h - 0.15, 0, 0.03, 1); box(g, w, 0.3, d, wood, 0, 0, 0, 0.03, 1);
    box(g, w, h, 0.08, wood, 0, 0, -d / 2 + 0.04, 0.02, 1);
    const shelves = [1.6, 3.2, 4.8];
    for (const y of shelves) box(g, w - 0.3, 0.12, d - 0.1, wood, 0, y, 0.03, 0.02, 1);
    [0.3, 1.72, 3.32, 4.92].forEach((y, i) => rowOfBooks(g, -w / 2 + 0.2, w / 2 - 0.2, y, 0.05, d - 0.25, i === 3 ? 1.3 : 1.25, 31 + i * 5));
    return g;
  },
  wallShelf(p) {
    const g = new THREE.Group();
    const w = p.w || 2, d = p.d || 1.1;
    box(g, w, 0.25, d, Mat.oak(), 0, -0.25, 0, 0.04, 0.6);
    for (const s of [-1, 1]) box(g, 0.12, 0.6, d * 0.8, Mat.steel(), s * (w / 2 - 0.3), -0.85, -0.05, 0.02, 1);
    return g;
  },
  dresser(p) {
    const g = new THREE.Group();
    const w = p.w || 4, d = p.d || 1.8, h = p.h || 3.6;
    box(g, w, h, d, Mat.whiteWood(), 0, 0, 0, 0.06, 0.5);
    box(g, w + 0.15, 0.15, d + 0.1, Mat.oak(), 0, h - 0.15, 0.02, 0.04, 0.5);
    const knobsC = [0xf2a7b8, 0x9fc3e6, 0xf5d77a];
    (p.drawers || []).forEach((dr, i) => {
      const out = dr.out || 0;
      const zf = d / 2 + out;
      box(g, w - 0.2, dr.h, 0.12, Mat.whiteWood(), 0, dr.y0, zf + 0.02, 0.04, 1);
      knob(g, -w / 4, dr.y0 + dr.h / 2, zf + 0.14, knobsC[i % 3]); knob(g, w / 4, dr.y0 + dr.h / 2, zf + 0.14, knobsC[i % 3]);
      if (out > 0.05) {
        box(g, 0.08, dr.h, out, Mat.oak(), -w / 2 + 0.24, dr.y0, d / 2 + out / 2, 0.02, 1);
        box(g, 0.08, dr.h, out, Mat.oak(), w / 2 - 0.24, dr.y0, d / 2 + out / 2, 0.02, 1);
        box(g, w - 0.4, 0.08, out, Mat.oak(), 0, dr.y0, d / 2 + out / 2, 0.02, 1);
        // folded clothes poking out of open drawers
        for (let k = 0; k < 4; k++) {
          const c = new THREE.Mesh(new THREE.SphereGeometry(0.5, 14, 10), Mat.fabric([0xe8a0b4, 0x8fb8de, 0xf2e3b8, 0xa8d5a2][(k + i) % 4], 2));
          c.scale.set(1.0, 0.35, 0.75); c.position.set(-w / 2 + 0.75 + k * ((w - 1.5) / 3), dr.y0 + dr.h - 0.12, d / 2 + out / 2);
          sh(c); g.add(c);
        }
      }
    });
    if (!(p.drawers || []).length) for (let i = 0; i < 3; i++) { box(g, w - 0.2, 0.95, 0.1, Mat.whiteWood(), 0, 0.25 + i * 1.1, d / 2 + 0.03, 0.04, 1); knob(g, 0, 0.72 + i * 1.1, d / 2 + 0.14, knobsC[i]); }
    // photo frame
    const fr = box(g, 0.9, 1.1, 0.12, Mat.oak(), -1.2, h, -0.3, 0.03, 1); fr.rotation.x = -0.15;
    return g;
  },
  wardrobe(p) {
    const g = new THREE.Group();
    const w = p.w || 3.6, h = p.h || 9, d = p.d || 2.6;
    box(g, w, h, d, Mat.whiteWood(), 0, 0, 0, 0.06, 0.4);
    box(g, 0.04, h - 0.6, 0.04, Mat.paint(0xbdb6aa), 0, 0.3, d / 2 + 0.01, 0.01, 1);
    for (const s of [-1, 1]) box(g, 0.08, 1.4, 0.12, Mat.brass(), s * 0.3, 4.2, d / 2 + 0.06, 0.03, 1);
    box(g, 2.2, 0.9, 1.6, Mat.paint(0xd7c6a5, 0.9), -0.3, h, 0, 0.04, 0.6); // a box on top
    return g;
  },
  toyBox() {
    const g = new THREE.Group();
    const paint = Mat.paint(0xd9584a, 0.55);
    box(g, 2.7, 1.8, 1.8, paint, 0, 0, 0, 0.08, 0.6);
    box(g, 2.5, 0.08, 1.6, Mat.paint(0x3a2a2a), 0, 1.72, 0, 0.02, 1);
    const lid = box(g, 2.75, 0.15, 1.85, Mat.paint(0xf0c24b, 0.55), 0, 0, 0, 0.06, 0.6);
    lid.position.set(0, 2.5, -1.05); lid.rotation.x = -1.25;
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.4, 20, 14), Mat.plastic(0x4f8fbf)); ball.position.set(0.6, 1.9, 0.2); sh(ball); g.add(ball);
    const b1 = Art.createBlock(0x9fd86b, 'A'); b1.scale.setScalar(0.55); b1.position.set(-0.6, 1.62, 0.1); b1.rotation.set(0.3, 0.5, 0.2); g.add(b1);
    return g;
  },
  laundry() {
    const g = new THREE.Group();
    cyl(g, 1.0, 0.85, 2.0, Mat.wicker(), 0, 0, 0, 28);
    const cols = [0xe8a0b4, 0x8fb8de, 0xf2e3b8, 0xffffff, 0xa8d5a2, 0x6d7fa8];
    for (let i = 0; i < 9; i++) {
      const c = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 12), Mat.fabric(cols[i % cols.length], 2));
      const a = (i / 9) * Math.PI * 2;
      c.scale.set(1.1, 0.45, 0.8); c.position.set(Math.cos(a) * 0.5 * (i % 2), 2.05 + (i % 3) * 0.12, Math.sin(a) * 0.5 * (i % 2)); c.rotation.y = a;
      sh(c); g.add(c);
    }
    // a sock dangling over the edge
    const sock = sh(new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.7, 6, 10), Mat.fabric(0xf2e3b8, 3))); sock.position.set(0.95, 1.6, 0.2); sock.rotation.z = 0.3; g.add(sock);
    return g;
  },
  blocks(p) {
    const g = new THREE.Group();
    const cols = [0xff9f43, 0x6fc3df, 0x9fd86b, 0xff7fa3, 0xffd166, 0xa78bfa];
    const letters = 'BLÅHAJ';
    (p.towers || []).forEach(([x, z, n], ti) => {
      for (let k = 0; k < n; k++) {
        const b = Art.createBlock(cols[(ti * 3 + k) % cols.length], letters[(ti + k) % letters.length]);
        b.scale.setScalar(0.95); b.position.set(x, k * 0.95, z); b.rotation.y = (hashf(ti, k) - 0.5) * 0.25;
        g.add(b);
      }
    });
    return g;
  },
  books(p) {
    const g = new THREE.Group();
    const h = p.h || 1, n = Math.max(2, Math.round(h / 0.32));
    for (let i = 0; i < n; i++) {
      const b = box(g, (p.w || 1.4) * (0.92 + hashf(i, 1) * 0.08), h / n, (p.d || 1.9) * (0.92 + hashf(i, 2) * 0.08), Mat.book(BOOKS[i % BOOKS.length]), 0, i * (h / n), 0, 0.02, 2);
      b.rotation.y = (hashf(i, 3) - 0.5) * 0.25;
    }
    return g;
  },
  ball() {
    const g = new THREE.Group();
    const c = document.createElement('canvas'); c.width = 256; c.height = 128;
    const x = c.getContext('2d');
    ['#e5484d', '#ffffff', '#3f6aa3', '#ffffff', '#f5c542', '#ffffff'].forEach((col, i) => { x.fillStyle = col; x.fillRect(i * 256 / 6, 0, 256 / 6 + 1, 128); });
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
    const m = sh(new THREE.Mesh(new THREE.SphereGeometry(0.58, 32, 20), new THREE.MeshPhysicalMaterial({ map: t, roughness: 0.4, clearcoat: 0.8 })));
    m.position.y = 0.56; m.rotation.z = 0.4; g.add(m);
    return g;
  },
  lego(p) {
    const g = new THREE.Group();
    const w = p.w || 1.5, d = p.d || 1.5;
    for (let i = 0; i < 7; i++) {
      const b = Art.createLego(0.36 + (i % 2) * 0.36, 0.36);
      b.scale.setScalar(0.85);
      b.position.set((hashf(i, w) - 0.5) * (w - 0.4), 0, (hashf(d, i) - 0.5) * (d - 0.4));
      b.rotation.y = hashf(i, 5) * Math.PI;
      g.add(b);
    }
    return g;
  },
  rug(p) {
    const g = new THREE.Group();
    const w = p.w || 6, d = p.d || 5;
    const living = p.style === 'living';
    const m = new THREE.Mesh(worldUV(rb(w, 0.07, d, 0.03), 0.6), Mat.knit(living ? 0xb9a58e : 0xf3d9de));
    m.position.y = 0.035; m.receiveShadow = true; g.add(m);
    const border = new THREE.Mesh(worldUV(rb(w + 0.3, 0.05, d + 0.3, 0.03), 0.6), Mat.knit(living ? 0x7c5b46 : 0x9fc3e6));
    border.position.y = 0.025; border.receiveShadow = true; g.add(border);
    return g;
  },
  toyScatter(p) {
    // small floor clutter: socks, crayons, puzzle pieces, toy cars, marbles
    const g = new THREE.Group();
    const seed = p.seed || 1;
    const spots = p.dogToys ? [[-6, 1], [3, 6], [-2, 9], [7, -3], [9, 9], [-4, -8]] : [[-0.5, -3.6], [5.8, -6.4], [-3.4, 4.8], [0.8, 6.0], [-6.2, 0.6], [5.4, 7.2], [3.4, -0.4], [-2.6, -2.2]];
    spots.forEach(([x, z], i) => {
      const k = Math.floor(hashf(seed, i) * 4);
      let o;
      if (p.dogToys) {
        o = new THREE.Group();
        const bone = sh(new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.9, 6, 12), Mat.plastic(0xf2e3b8))); bone.rotation.z = Math.PI / 2; bone.position.y = 0.16; o.add(bone);
        if (i % 2) { const tb = sh(new THREE.Mesh(new THREE.SphereGeometry(0.3, 18, 12), Mat.fabric(0xc8e34b, 4))); tb.position.set(0.6, 0.3, 0.3); o.add(tb); }
      } else if (k === 0) {
        o = sh(new THREE.Mesh(new THREE.CapsuleGeometry(0.14, 0.6, 6, 10), Mat.fabric([0xe8a0b4, 0x8fb8de, 0xffffff][i % 3], 3)));
        o.rotation.z = Math.PI / 2; o.position.y = 0.14;
      } else if (k === 1) {
        o = new THREE.Group();
        for (let c = 0; c < 4; c++) { const cr = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.75, 8), Mat.plastic(BOOKS[(c + i) % BOOKS.length]))); cr.rotation.set(Math.PI / 2, 0, c * 0.4); cr.position.set(c * 0.15, 0.05, 0); o.add(cr); }
      } else if (k === 2) {
        o = new THREE.Group();
        const body = box(o, 0.9, 0.35, 0.5, Mat.plastic([0xe5484d, 0x3f6aa3, 0xf5c542][i % 3]), 0, 0.12, 0, 0.1, 1);
        box(o, 0.5, 0.25, 0.45, Mat.glass(), -0.05, 0.47, 0, 0.08, 1);
        for (const [wx, wz] of [[-0.3, -0.27], [0.3, -0.27], [-0.3, 0.27], [0.3, 0.27]]) { const wh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.08, 14), Mat.plastic(0x222222)); wh.rotation.x = Math.PI / 2; wh.position.set(wx, 0.12, wz); o.add(wh); }
        void body;
      } else {
        o = new THREE.Group();
        for (let c = 0; c < 5; c++) { const mb = sh(new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 8), new THREE.MeshPhysicalMaterial({ color: BOOKS[c % BOOKS.length], transmission: 0.5, roughness: 0.05, thickness: 0.2 }))); mb.position.set((hashf(c, i) - 0.5) * 0.9, 0.09, (hashf(i, c) - 0.5) * 0.9); o.add(mb); }
      }
      o.position.set(x, 0, z); o.rotation.y = hashf(i, seed + 2) * Math.PI * 2;
      g.add(o);
    });
    return g;
  },
  couch(p) {
    const g = new THREE.Group();
    const w = p.w || 9, d = p.d || 4;
    const fab = Mat.fabric(0x7f9a86, 1.2);
    box(g, w - 2, 1.4, d - 0.6, fab, 0, 0.3, 0.3, 0.15, 0.6);
    for (let i = 0; i < 3; i++) box(g, (w - 2) / 3 - 0.06, 0.6, d - 1.1, fab, -((w - 2) / 3) + i * ((w - 2) / 3), 1.4, 0.35, 0.25, 0.6);
    box(g, w, 3.4, 1.1, fab, 0, 0.5, -d / 2 + 0.55, 0.3, 0.6);
    for (let i = 0; i < 3; i++) { const c = box(g, (w - 2) / 3 - 0.1, 1.9, 0.6, fab, -((w - 2) / 3) + i * ((w - 2) / 3), 2.0, -d / 2 + 1.3, 0.28, 0.6); c.rotation.x = -0.12; }
    for (const s of [-1, 1]) box(g, 1, 2.2, d - 0.6, fab, s * (w / 2 - 0.5), 0.5, 0.3, 0.35, 0.6);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) cyl(g, 0.12, 0.08, 0.5, Mat.walnut(), sx * (w / 2 - 0.4), 0, sz * (d / 2 - 0.4), 10);
    for (const [x, c] of [[-2.6, 0xe0a83a], [2.6, 0xd97a8f]]) { const pl = box(g, 1.3, 1.3, 0.45, Mat.fabric(c, 2), x, 2.0, -d / 2 + 1.75, 0.3, 0.6); pl.rotation.set(-0.2, x > 0 ? -0.2 : 0.2, 0); }
    // a folded blanket over the arm
    box(g, 1.2, 0.25, 2.4, Mat.knit(0xd9c7b0), w / 2 - 0.5, 2.7, 0.4, 0.1, 0.6);
    return g;
  },
  armchair() {
    const g = new THREE.Group();
    const fab = Mat.fabric(0xc99a3c, 1.2);
    box(g, 2.6, 1.0, 2.6, fab, 0, 0.3, 0.25, 0.15, 0.6);
    box(g, 2.6, 0.5, 2.4, fab, 0, 1.3, 0.3, 0.2, 0.6);
    box(g, 3.8, 3.8, 0.9, fab, 0, 0.5, -1.45, 0.3, 0.6);
    for (const s of [-1, 1]) box(g, 0.6, 2.0, 2.6, fab, s * 1.6, 0.5, 0.25, 0.25, 0.6);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) cyl(g, 0.1, 0.07, 0.5, Mat.walnut(), sx * 1.6, 0, sz * 1.4 - 0.4, 10);
    return g;
  },
  coffeeTable(p) {
    const g = new THREE.Group();
    const w = p.w || 5, d = p.d || 2.7, h = p.h || 2.0;
    box(g, w, 0.25, d, Mat.walnut(), 0, h - 0.25, 0, 0.08, 0.5);
    box(g, w - 0.6, 0.15, d - 0.6, Mat.walnut(), 0, 0.5, 0, 0.04, 0.5);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) box(g, 0.35, h - 0.25, 0.35, Mat.walnut(), sx * (w / 2 - 0.3), 0, sz * (d / 2 - 0.3), 0.05, 1);
    box(g, 1.4, 0.1, 1.0, Mat.book(0xd97a8f), -1.2, h, 0.2, 0.02, 2).rotation.y = 0.2;
    cyl(g, 0.28, 0.25, 0.5, Mat.ceramic(0xf2efe8), 1.4, h, -0.3, 20);
    box(g, 0.8, 0.12, 0.3, Mat.plastic(0x222222), 0.4, h, 0.6, 0.05, 1).rotation.y = -0.4;
    return g;
  },
  tvStand(p) {
    const g = new THREE.Group();
    const w = p.w || 7.3;
    box(g, w, 2.3, 1.8, Mat.walnut(), 0, 0, 0, 0.06, 0.5);
    for (let i = 0; i < 3; i++) box(g, w / 3 - 0.15, 1.8, 0.08, Mat.walnut(), -w / 3 + i * (w / 3), 0.25, 0.92, 0.03, 0.6);
    const tw = w * 0.75;
    box(g, tw, 3.6, 0.3, Mat.plastic(0x111215), 0, 2.4, -0.3, 0.05, 1);
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(tw - 0.2, 3.4), new THREE.MeshPhysicalMaterial({ color: 0x05070c, roughness: 0.08, clearcoat: 1, emissive: 0x0a1630, emissiveIntensity: 0.6 }));
    screen.position.set(0, 4.2, -0.14); g.add(screen);
    const led = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), Mat.emissive(0xff3030, 4)); led.position.set(tw / 2 - 0.3, 2.55, -0.13); g.add(led);
    cyl(g, 0.4, 0.5, 0.25, Mat.walnut(), 0, 2.3, -0.3);
    return g;
  },
  sideTable() {
    const g = new THREE.Group();
    cyl(g, 1.0, 1.0, 0.2, Mat.walnut(), 0, 2.3, 0, 32);
    cyl(g, 0.15, 0.2, 2.3, Mat.walnut(), 0, 0, 0, 12);
    cyl(g, 0.7, 0.7, 0.1, Mat.walnut(), 0, 0, 0, 24);
    const vase = cyl(g, 0.25, 0.35, 0.9, Mat.ceramic(0x9fc3e6), 0.3, 2.5, 0.2, 20); void vase;
    return g;
  },
  floorLamp() {
    const g = new THREE.Group();
    cyl(g, 0.7, 0.75, 0.15, Mat.brass(), 0, 0, 0, 28);
    cyl(g, 0.08, 0.08, 6.6, Mat.brass(), 0, 0.15, 0, 10);
    return g;
  },
  plant() {
    const g = Art.createPlant();
    g.scale.set(2.6, 2.6, 2.6);
    return g;
  },
  fireplace() {
    const g = new THREE.Group();
    const stone = Mat.brick();
    box(g, 7.5, 0.55, 2.4, Mat.paint(0x8f8a85, 0.8), 0, 0, 0.4, 0.05, 0.5);
    for (const s of [-1, 1]) box(g, 2, 4.6, 0.8, stone, s * 2.75, 0.55, -0.4, 0.04, 0.4);
    box(g, 3.5, 1.0, 0.8, stone, 0, 4.15, -0.4, 0.04, 0.4);
    box(g, 3.5, 4.6, 0.4, Mat.paint(0x1a1514, 1), 0, 0.55, -0.6, 0.02, 1);
    box(g, 8.2, 0.35, 1.5, Mat.walnut(), 0, 5.15, -0.1, 0.05, 0.5);
    // logs and embers
    const ember = new THREE.MeshStandardMaterial({ color: 0x1a0a05, emissive: 0xff5a1a, emissiveIntensity: 2.2, roughness: 0.8 });
    for (let i = 0; i < 3; i++) { const lg = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.25, 2.4, 12), i === 1 ? ember : Mat.walnut())); lg.rotation.set(0, (i - 1) * 0.3, Math.PI / 2); lg.position.set(0, 0.8 + (i === 1 ? 0.35 : 0), -0.25 + (i - 1) * 0.3); g.add(lg); }
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.9), new THREE.MeshBasicMaterial({ map: softDotTexture(), color: 0xff7a2a, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }));
    glow.position.set(0, 0.9, 0.0); g.add(glow);
    g.userData.ember = ember; g.userData.glow = glow;
    // flames: crossed sheets with a scrolling-noise flame shader, plus rising embers
    g.userData.flames = [];
    [[0, 0, 1.5, 2.2, 0.0], [-0.55, 0.55, 1.1, 1.7, 0.37], [0.6, -0.5, 1.1, 1.8, 0.71], [0.1, 1.2, 1.2, 1.9, 0.53], [-0.2, -1.1, 1.0, 1.5, 0.19]].forEach(([x, rot, w, h, seed]) => {
      const m = flameMaterial(seed);
      const f = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m);
      f.position.set(x, 0.92 + h / 2, -0.22); f.rotation.y = rot; f.renderOrder = 5;
      g.add(f); g.userData.flames.push(m);
    });
    const N = 36, eg = new THREE.BufferGeometry(), ep = new Float32Array(N * 3), seeds = [];
    for (let i = 0; i < N; i++) seeds.push({ x: (Math.random() - 0.5) * 1.6, z: (Math.random() - 0.5) * 0.5 - 0.2, t: Math.random() * 2, sp: 0.8 + Math.random() * 1.2, w: Math.random() * 6 });
    eg.setAttribute('position', new THREE.BufferAttribute(ep, 3));
    const embers = new THREE.Points(eg, new THREE.PointsMaterial({ map: softDotTexture(), color: 0xffa040, size: 0.09, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    embers.frustumCulled = false; g.add(embers);
    g.userData.updateEmbers = (t) => {
      seeds.forEach((e, i) => {
        const life = ((t * e.sp * 0.35 + e.t) % 2) / 2; // 0..1
        ep[i * 3] = e.x * (1 - life * 0.4) + Math.sin(t * 3 + e.w) * 0.12 * life;
        ep[i * 3 + 1] = 1.0 + life * 3.4;
        ep[i * 3 + 2] = e.z + Math.cos(t * 2.3 + e.w) * 0.08 * life;
      });
      eg.attributes.position.needsUpdate = true;
    };
    // things on the mantel
    for (let i = 0; i < 3; i++) { const fr = box(g, 0.9, 1.2 - i * 0.15, 0.12, Mat.oak(), -2.8 + i * 1.3, 5.5, -0.4, 0.03, 1); fr.rotation.y = (i - 1) * 0.1; }
    for (let i = 0; i < 3; i++) cyl(g, 0.15, 0.15, 0.6 + i * 0.25, Mat.paint(0xf6efe0, 0.7), 2.2 + i * 0.4, 5.5, -0.3, 14);
    return g;
  },
  firewood() {
    const g = new THREE.Group();
    box(g, 2, 1.8, 1.6, Mat.wicker(), 0, 0, 0, 0.15, 0.6);
    for (let i = 0; i < 6; i++) { const lg = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 1.8, 10), Mat.walnut())); lg.rotation.set(Math.PI / 2, 0, (i % 2) * 0.2); lg.position.set(-0.6 + (i % 3) * 0.6, 1.9 + Math.floor(i / 3) * 0.38, 0); g.add(lg); }
    return g;
  },
  dogBed() {
    const g = new THREE.Group();
    const fab = Mat.fabric(0x8a6a52, 1.5);
    const rim = sh(new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.45, 16, 40), fab)); rim.rotation.x = Math.PI / 2; rim.position.y = 0.45; g.add(rim);
    const cush = cyl(g, 1.35, 1.4, 0.45, Mat.fabric(0xe9dcc8, 1.5), 0, 0.15, 0, 32); void cush;
    return g;
  },
  ottoman() {
    const g = new THREE.Group();
    const m = cyl(g, 1.2, 1.2, 1.9, Mat.knit(0xd9c7b0), 0, 0, 0, 32);
    m.geometry = worldUV(m.geometry, 0.6);
    return g;
  },
  bigShelf(p) {
    const g = new THREE.Group();
    const w = p.w || 4.5, h = p.h || 8.2, d = p.d || 1.6;
    const wood = Mat.walnut();
    box(g, w, h, 0.1, wood, 0, 0, -d / 2 + 0.05, 0.02, 0.5);
    for (const s of [-1, 1]) box(g, 0.18, h, d, wood, s * (w / 2 - 0.09), 0, 0, 0.03, 0.5);
    [0, 2.0, 4.0, 6.0, h - 0.18].forEach((y) => box(g, w, 0.18, d, wood, 0, y, 0, 0.03, 0.5));
    [0.18, 2.18, 4.18].forEach((y, i) => rowOfBooks(g, -w / 2 + 0.25, i === 1 ? 0.6 : w / 2 - 0.25, y, 0.05, d - 0.3, 1.6, 71 + i));
    const pl = Art.createPlant(); pl.scale.setScalar(1.1); pl.position.set(1.4, 2.18, 0); g.add(pl);
    box(g, 1.3, 1.0, 1.1, Mat.wicker(), -1.0, 6.18, 0.1, 0.1, 0.6);
    return g;
  },
  roomba() {
    const g = new THREE.Group();
    const r = Art.createRoomba(); r.scale.setScalar(1.12); g.add(r);
    g.userData.roomba = r;
    return g;
  },
  stairs(p) {
    const g = new THREE.Group();
    const n = p.n || 14, rise = p.rise || 0.815, run = p.run || 1.3, w = p.w || 4.5;
    const runner = Mat.carpet(0x8f3b3f);
    for (let i = 0; i < n; i++) {
      const z = -(i + 0.5) * run, top = rise * (i + 1);
      box(g, w, top - 0.12, run, Mat.paint(0xf2efe8, 0.6), 0, 0, z, 0.02, 0.5);
      box(g, w + 0.1, 0.16, run + 0.1, Mat.oak(), 0, top - 0.16, z + 0.04, 0.05, 0.6);
      box(g, w * 0.62, 0.05, run, runner, -0.15, top, z, 0.02, 0.8);
      // balusters + newel posts on the open side
      cyl(g, 0.07, 0.07, 3.2, Mat.whiteWood(), w / 2 + 0.12, top, z - run * 0.25, 8);
      cyl(g, 0.07, 0.07, 3.2, Mat.whiteWood(), w / 2 + 0.12, top, z + run * 0.25, 8);
    }
    for (const [i, zz] of [[0, -0.1], [n - 1, -(n - 0.1) * run]]) box(g, 0.45, rise * (i + 1) + 3.8, 0.45, Mat.oak(), w / 2 + 0.12, 0, zz, 0.06, 1);
    // handrail along the slope, from the bottom newel post to the top one
    const r0 = new THREE.Vector3(w / 2 + 0.12, rise + 3.3, -0.1), r1 = new THREE.Vector3(w / 2 + 0.12, rise * n + 3.3, -(n - 0.1) * run);
    const rail = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, r0.distanceTo(r1), 12), Mat.oak()));
    rail.position.copy(r0).add(r1).multiplyScalar(0.5);
    rail.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), r1.clone().sub(r0).normalize());
    g.add(rail);
    return g;
  },
  basket(p) {
    const g = new THREE.Group();
    box(g, p.w || 2.2, 1.9, p.d || 1.8, Mat.plastic(0xf2efe8), 0, 0, 0, 0.15, 1);
    for (let i = 0; i < 5; i++) { const c = sh(new THREE.Mesh(new THREE.SphereGeometry(0.55, 14, 10), Mat.fabric([0x6d7fa8, 0xe8a0b4, 0xffffff, 0xf2e3b8, 0x8a5a3a][i], 2))); c.scale.set(1.1, 0.45, 0.8); c.position.set(-0.6 + (i % 3) * 0.6, 1.95 + (i % 2) * 0.15, (i % 2) * 0.3 - 0.15); g.add(c); }
    return g;
  },
  babyGate() {
    const g = new THREE.Group();
    const white = Mat.whiteWood();
    box(g, 4.5, 0.2, 0.2, white, 0, 3.0, 0, 0.05, 1); box(g, 4.5, 0.2, 0.2, white, 0, 0.0, 0, 0.05, 1);
    for (let i = 0; i < 14; i++) cyl(g, 0.05, 0.05, 3.0, white, -2.1 + i * 0.32, 0.1, 0, 8);
    return g;
  },
  shoeRack() {
    const g = new THREE.Group();
    box(g, 4, 0.12, 1.3, Mat.oak(), 0, 1.48, 0, 0.03, 0.6); box(g, 4, 0.12, 1.3, Mat.oak(), 0, 0.5, 0, 0.03, 0.6);
    for (const s of [-1, 1]) box(g, 0.12, 1.6, 1.3, Mat.oak(), s * 1.94, 0, 0, 0.03, 0.6);
    for (let i = 0; i < 4; i++) { const sh_ = box(g, 0.7, 0.45, 1.1, Mat.fabric([0x3f6aa3, 0xe5484d, 0x2b2f3a, 0xf5c542][i], 3), -1.4 + i * 0.95, 1.6, 0, 0.18, 1); sh_.rotation.y = 0.1 * i; }
    return g;
  },
  hallTable() {
    const g = new THREE.Group();
    box(g, 4, 0.25, 1.6, Mat.walnut(), 0, 3.2, 0, 0.05, 0.5);
    for (const s of [-1, 1]) box(g, 0.3, 3.2, 1.3, Mat.walnut(), s * 1.7, 0, 0, 0.04, 0.5);
    cyl(g, 0.6, 0.4, 0.3, Mat.ceramic(0x6fa3c9), 0.8, 3.45, 0, 24);
    return g;
  },
  cat() { return new THREE.Group(); }, // the cat is a character (see characters.js)
  pillow() { return new THREE.Group(); },
  window() { return new THREE.Group(); }, door() { return new THREE.Group(); }, picture() { return new THREE.Group(); },
  ceilingLamp() { return new THREE.Group(); }, curtain() { return new THREE.Group(); },
};

Object.assign(V, VIS); // furniture for the other rooms of the house (src/props/*)

export function propVisual(p) {
  const make = V[p.type];
  const g = make ? make(p) : new THREE.Group();
  g.position.set(p.x, p.y || 0, p.z);
  g.rotation.y = (p.rot || 0) * Math.PI / 2;
  return g;
}

// ------------------------------------------------------------- room shell --
const WALLS = {
  kidsWall: () => Mat.wallpaper(0xc9d8ee),
  livingWall: () => Mat.paint(0xd8c9b4),
  hallWall: () => Mat.paint(0xd7dccb),
  kitchenWall: () => Mat.paint(0xe7dcc6),
  laundryWall: () => Mat.paint(0xc6dde3),
  bathWall: () => Mat.tiles(0xcfe5ef, 5, 1),
  garageWall: () => Mat.paint(0xc9c4b6, 0.95),
  concreteWall: () => Mat.concrete(0xa7a39a),
  atticWall: () => Mat.woodBoard(),
  nurseryWall: () => Mat.wallpaper(0xf2d3e2),
  parentsWall: () => Mat.paint(0xc5d1c0),
  playWall: () => Mat.wallpaper(0xf6e3ad),
  fence: () => Mat.fence(),
  hedge: () => Mat.hedge(),
  brick: () => Mat.brick(),
};
const FLOORS = {
  wood: [() => Mat.oakFloor(), 0.42], woodDark: [() => Mat.walnutFloor(), 0.42],
  checker: [() => Mat.checker(), 0.2], tile: [() => Mat.tiles(0xe2e6e8, 4), 0.25], concrete: [() => Mat.concrete(), 0.12],
  grass: [() => Mat.grass(), 0.18], carpet: [() => Mat.carpet(0x7f93bf), 0.6], carpetPink: [() => Mat.carpet(0xd59ab4), 0.6],
  carpetGreen: [() => Mat.carpet(0x7fa37a), 0.6], attic: [() => Mat.woodBoard(), 0.3],
};

function buildShell(room, scene) {
  const g = new THREE.Group();
  const boxes = roomBoxes(room);
  const wallMat = (WALLS[room.wall] || WALLS.livingWall)();
  const [floorMk, floorUV] = FLOORS[room.floor] || FLOORS.wood, floorMat = floorMk();
  for (const b of boxes) {
    let w = b.max[0] - b.min[0], h = b.max[1] - b.min[1], d = b.max[2] - b.min[2];
    let mat = wallMat, uv = 0.22, cy = (b.min[1] + b.max[1]) / 2;
    const skin = b.tag.startsWith('wall:') && room.skins && room.skins[b.tag.slice(5)];
    if (skin) mat = WALLS[skin]();
    if (room.outdoor && b.tag === 'ceiling') continue; // open sky
    if (room.outdoor && b.tag.startsWith('wall:') && !(skin === 'brick')) { // a garden fence, not a wall to the sky
      const top = Math.min(b.max[1], room.fenceH || 5.5);
      if (b.min[1] >= top) continue;
      h = top - b.min[1]; cy = b.min[1] + h / 2;
    }
    if (b.tag === 'floor') { // only under the room itself: when the camera looks in from outside, there's no floor sticking out past the walls
      mat = floorMat; uv = floorUV;
      if (!room.outdoor) { w = room.x1 - room.x0 + 0.6; d = room.z1 - room.z0 + 0.6; }
    }
    else if (b.tag === 'ceiling') { mat = room.wall === 'atticWall' ? Mat.woodBoard() : Mat.paint(0xf4f1ea, 0.95); uv = 0.15; }
    else if (b.tag === 'sill') { mat = Mat.whiteWood(); uv = 0.6; }
    else if (b.tag === 'landing') { mat = room.landing === 'wood' ? Mat.woodBoard() : Mat.carpet(0x8f3b3f); uv = 0.6; }
    const m = new THREE.Mesh(worldUV(new THREE.BoxGeometry(w, h, d), uv), mat);
    m.position.set(b.tag === 'floor' && !room.outdoor ? (room.x0 + room.x1) / 2 : (b.min[0] + b.max[0]) / 2, cy, b.tag === 'floor' && !room.outdoor ? (room.z0 + room.z1) / 2 : (b.min[2] + b.max[2]) / 2);
    m.receiveShadow = true;
    m.castShadow = b.tag !== 'floor';
    g.add(m);
  }
  // white skirting boards along the walls (skipping door gaps)
  const skirt = Mat.whiteWood();
  for (const b of boxes) {
    if (room.outdoor || room.noSkirting || !b.tag.startsWith('wall:') || b.min[1] > 0.01) continue;
    const name = b.tag.slice(5);
    const alongX = name === '-z' || name === '+z';
    const len = alongX ? Math.min(b.max[0], room.x1) - Math.max(b.min[0], room.x0) : Math.min(b.max[2], room.z1) - Math.max(b.min[2], room.z0);
    if (len <= 0.05) continue;
    const mid = alongX ? (Math.min(b.max[0], room.x1) + Math.max(b.min[0], room.x0)) / 2 : (Math.min(b.max[2], room.z1) + Math.max(b.min[2], room.z0)) / 2;
    const s = new THREE.Mesh(worldUV(rb(alongX ? len : 0.14, 0.5, alongX ? 0.14 : len, 0.03), 1), skirt);
    if (name === '-z') s.position.set(mid, 0.25, room.z0 + 0.07);
    if (name === '+z') s.position.set(mid, 0.25, room.z1 - 0.07);
    if (name === '-x') s.position.set(room.x0 + 0.07, 0.25, mid);
    if (name === '+x') s.position.set(room.x1 - 0.07, 0.25, mid);
    s.receiveShadow = true; g.add(s);
  }
  // door frames, open doors and window glazing
  for (const d of room.doors || []) addDoor(g, room, d);
  for (const w of room.windows || []) addWindow(g, room, w);
  scene.add(g);
  return g;
}

function wallFrame(room, wall, at, y) {
  // returns position on the inner wall face + inward normal
  if (wall === '-z') return { p: new THREE.Vector3(at, y, room.z0), n: new THREE.Vector3(0, 0, 1), ry: 0 };
  if (wall === '+z') return { p: new THREE.Vector3(at, y, room.z1), n: new THREE.Vector3(0, 0, -1), ry: Math.PI };
  if (wall === '-x') return { p: new THREE.Vector3(room.x0, y, at), n: new THREE.Vector3(1, 0, 0), ry: Math.PI / 2 };
  return { p: new THREE.Vector3(room.x1, y, at), n: new THREE.Vector3(-1, 0, 0), ry: -Math.PI / 2 };
}

function addDoor(g, room, d) {
  const f = wallFrame(room, d.wall, d.at, d.y0 || 0);
  const grp = new THREE.Group();
  grp.position.copy(f.p); grp.rotation.y = f.ry;
  const trim = Mat.whiteWood();
  box(grp, 0.35, d.h + 0.35, 0.3, trim, -d.w / 2 - 0.17, 0, 0.1, 0.03, 1);
  box(grp, 0.35, d.h + 0.35, 0.3, trim, d.w / 2 + 0.17, 0, 0.1, 0.03, 1);
  box(grp, d.w + 0.7, 0.35, 0.3, trim, 0, d.h, 0.1, 0.03, 1);
  // the door itself, swung open into the room
  const leaf = new THREE.Group();
  leaf.position.set(-d.w / 2, 0, 0.1);
  box(leaf, d.w - 0.1, d.h - 0.1, 0.22, Mat.whiteWood(), (d.w - 0.1) / 2, 0, 0, 0.03, 0.5);
  const handle = cyl(leaf, 0.12, 0.12, 0.3, Mat.brass(), d.w - 0.5, 4.0, 0.2, 12); handle.rotation.x = Math.PI / 2;
  leaf.position.z = -0.1;
  leaf.rotation.y = 1.9; // swung open, away from the room
  grp.add(leaf);
  // warm light from the next room
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(d.w * 3, d.h * 1.4), new THREE.MeshBasicMaterial({ color: 0xffc98a, transparent: true, opacity: 0.5 }));
  glow.position.set(0, d.h / 2, -6);
  grp.add(glow);
  g.add(grp);
}

function addWindow(g, room, w) {
  const f = wallFrame(room, w.wall, w.at, w.y0);
  const grp = new THREE.Group();
  grp.position.copy(f.p); grp.rotation.y = f.ry;
  const h = w.y1 - w.y0;
  const trim = Mat.whiteWood();
  for (const s of [-1, 1]) box(grp, 0.25, h, 0.5, trim, s * (w.w / 2 - 0.12), 0, -1.0, 0.02, 1);
  box(grp, w.w, 0.25, 0.5, trim, 0, h - 0.25, -1.0, 0.02, 1);
  box(grp, 0.16, h, 0.3, trim, 0, 0, -1.0, 0.02, 1);
  box(grp, w.w, 0.16, 0.3, trim, 0, h * 0.55, -1.0, 0.02, 1);
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(w.w, h), Mat.glass());
  glass.position.set(0, h / 2, -1.05); grp.add(glass);
  // what's outside: a moonlit street
  const sky = new THREE.Mesh(new THREE.PlaneGeometry(w.w * 3.2, h * 2.6), new THREE.MeshBasicMaterial({ map: nightSkyTexture(), toneMapped: true }));
  sky.position.set(0, h / 2, -9); grp.add(sky);
  // curtains: soft folds pulled to each side
  for (const s of [-1, 1]) {
    const geo = new THREE.PlaneGeometry(1.8, h + 1.6, 24, 10);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) { const x = pos.getX(i); pos.setZ(i, Math.sin(x * 9) * 0.18 + Math.sin(x * 23) * 0.04); }
    geo.computeVertexNormals();
    const c = sh(new THREE.Mesh(geo, Mat.fabric(room.id === 'bedroom' ? 0x6b8fcf : 0xb98c63, 1.5).clone()));
    c.material.side = THREE.DoubleSide;
    c.position.set(s * (w.w / 2 + 0.6), h / 2 + 0.3, 0.35);
    c.userData.softBlock = true; // Blåhaj's nose shouldn't vanish into it
    grp.add(c);
  }
  box(grp, w.w + 4.2, 0.18, 0.18, Mat.brass(), 0, h + 0.9, 0.35, 0.05, 1);
  g.add(grp);
}

// ------------------------------------------------------------- moonbeam --
function moonbeam(room, win, dir) {
  // a soft volumetric shaft from the window opening down to the floor
  const f = wallFrame(room, win.wall, win.at, 0);
  const right = new THREE.Vector3(f.n.z, 0, -f.n.x);
  const corners = [[-win.w / 2, win.y0], [win.w / 2, win.y0], [win.w / 2, win.y1], [-win.w / 2, win.y1]].map(([a, y]) => f.p.clone().addScaledVector(right, a).setY(y));
  const proj = corners.map((c) => { const t = c.y / -dir.y; return c.clone().addScaledVector(dir, t * 0.98); });
  const pos = [], uv = [];
  const quad = (a, b, c, d, ua, ub) => { pos.push(...a.toArray(), ...b.toArray(), ...c.toArray(), ...a.toArray(), ...c.toArray(), ...d.toArray()); uv.push(ua, 0, ub, 0, ub, 1, ua, 0, ub, 1, ua, 1); };
  for (let i = 0; i < 4; i++) { const j = (i + 1) % 4; quad(corners[i], corners[j], proj[j], proj[i], i / 4, (i + 1) / 4); }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
    uniforms: { time: { value: 0 }, strength: { value: 1 } },
    vertexShader: 'varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vW = (modelMatrix*vec4(position,1.)).xyz; gl_Position = projectionMatrix*viewMatrix*vec4(vW,1.); }',
    fragmentShader: `varying vec2 vUv; varying vec3 vW; uniform float time; uniform float strength;
      float h(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
      void main(){
        float along = vUv.y;
        float fade = (1.0 - along) * 0.85 + 0.15;
        float dust = 0.75 + 0.25 * n(vW.xz * 0.6 + vW.y * 0.3 + time * 0.05);
        gl_FragColor = vec4(vec3(0.55, 0.66, 1.0) * 0.07 * fade * dust * strength, 1.0);
      }`,
  });
  const m = new THREE.Mesh(geo, mat);
  m.userData.noAO = true;
  m.renderOrder = 4;
  return m;
}

// ------------------------------------------------------------- the dark --
// The nightmare pools on the floor wherever there is no light.
export function createDarkFloor(room) {
  const w = room.x1 - room.x0 + 0.2, d = room.z1 - room.z0 + 0.2;
  const geo = new THREE.PlaneGeometry(w, d, 1, 1);
  geo.rotateX(-Math.PI / 2);
  const MAXC = 16, MAXR = 6;
  const uniforms = {
    time: { value: 0 }, comfort: { value: 1 },
    circles: { value: Array.from({ length: MAXC }, () => new THREE.Vector3(0, 0, -1)) },
    rects: { value: Array.from({ length: MAXR }, () => new THREE.Vector4(0, 0, -1, -1)) },
  };
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, uniforms,
    vertexShader: 'varying vec3 vW; void main(){ vW = (modelMatrix*vec4(position,1.)).xyz; gl_Position = projectionMatrix*viewMatrix*vec4(vW,1.); }',
    fragmentShader: `varying vec3 vW; uniform float time; uniform float comfort;
      uniform vec3 circles[${MAXC}]; uniform vec4 rects[${MAXR}];
      float h(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
      float fbm(vec2 p){ float s=0., a=.5; for(int i=0;i<5;i++){ s+=a*n(p); p=p*2.03+vec2(1.7,9.2); a*=.5; } return s; }
      void main(){
        vec2 p = vW.xz;
        float d = 1e5;
        for (int i = 0; i < ${MAXC}; i++) { if (circles[i].z > 0.) d = min(d, length(p - circles[i].xy) - circles[i].z); }
        for (int i = 0; i < ${MAXR}; i++) { if (rects[i].z > rects[i].x) { vec2 c = (rects[i].xy + rects[i].zw) * .5, e = (rects[i].zw - rects[i].xy) * .5; vec2 q = abs(p - c) - e; d = min(d, length(max(q, 0.)) + min(max(q.x, q.y), 0.)); } }
        float smoke = fbm(p * 0.45 + vec2(time * 0.04, -time * 0.03));
        float wisps = fbm(p * 1.3 - vec2(time * 0.09, time * 0.05));
        float edge = d + (smoke - 0.5) * 0.9;
        float dark = smoothstep(-0.15, 0.6, edge);
        float a = dark * (0.38 + 0.32 * smoke + 0.14 * wisps) * mix(1.0, 0.62, comfort);
        vec3 col = mix(vec3(0.01, 0.005, 0.03), vec3(0.06, 0.02, 0.11), wisps);
        col += vec3(0.3, 0.1, 0.55) * smoothstep(0.6, 0.0, abs(edge - 0.15)) * 0.22;   // faint violet rim where light meets dark
        gl_FragColor = vec4(col, clamp(a, 0., 0.93));
      }`,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set((room.x0 + room.x1) / 2, 0.06, (room.z0 + room.z1) / 2);
  mesh.renderOrder = 3;
  mesh.userData.noAO = true;
  return {
    mesh,
    setSafe(list) {
      let ci = 0, ri = 0;
      for (const s of list) {
        if (s.r && ci < MAXC) uniforms.circles.value[ci++].set(s.x, s.z, s.r);
        else if (s.x0 !== undefined && ri < MAXR) uniforms.rects.value[ri++].set(s.x0, s.z0, s.x1, s.z1);
      }
      for (; ci < MAXC; ci++) uniforms.circles.value[ci].set(0, 0, -1);
      for (; ri < MAXR; ri++) uniforms.rects.value[ri].set(0, 0, -1, -1);
    },
    update(t, comfort) { uniforms.time.value = t; uniforms.comfort.value = comfort; },
  };
}

// rising darkness for the stairs: an inky volume that climbs
export function createRisingDark(room) {
  const g = new THREE.Group();
  const w = room.x1 - room.x0, d = room.z1 - room.z0;
  const top = createDarkFloor({ x0: room.x0, x1: room.x1, z0: room.z0, z1: room.z1 });
  top.mesh.material.uniforms.circles.value.forEach((c) => c.set(0, 0, -1));
  g.add(top.mesh);
  const body = new THREE.Mesh(new THREE.BoxGeometry(w + 0.2, 1, d + 0.2), new THREE.MeshBasicMaterial({ color: 0x07020d, transparent: true, opacity: 0.88, depthWrite: false }));
  body.userData.noAO = true;
  g.add(body);
  return {
    group: g,
    setLevel(y) {
      top.mesh.position.y = y;
      const hgt = Math.max(0.01, y + 1);
      body.scale.y = hgt; body.position.set((room.x0 + room.x1) / 2, y - hgt / 2, (room.z0 + room.z1) / 2);
    },
    update(t, c) { top.update(t, c); },
  };
}

// ------------------------------------------------------------ lamps --------
export function createLamp(l) {
  const g = new THREE.Group();
  g.position.set(l.x, l.y, l.z);
  const shadeMat = new THREE.MeshStandardMaterial({ color: 0xfff1d6, roughness: 0.9, emissive: 0x000000, side: THREE.DoubleSide });
  let lightY = 1.2, range = 11, power = 22;
  if (l.kind === 'nightlight') {
    cyl(g, 0.12, 0.18, 0.5, Mat.whiteWood(), -0.4, 0, -0.3, 14);
    const cap = sh(new THREE.Mesh(new THREE.SphereGeometry(0.55, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), shadeMat), true, false);
    cap.position.set(-0.4, 0.45, -0.3); g.add(cap);
    lightY = 0.6; range = 10; power = 9;
  } else if (l.kind === 'deskLamp') {
    cyl(g, 0.4, 0.45, 0.12, Mat.plastic(0xf2a7b8), 0, 0, 0, 20);
    const arm = cyl(g, 0.06, 0.06, 1.6, Mat.plastic(0xf2a7b8), 0, 0.1, 0, 8); arm.rotation.z = 0.25;
    const shade = sh(new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.7, 24, 1, true), shadeMat), true, false);
    shade.position.set(-0.3, 1.75, 0); shade.rotation.z = -0.4; g.add(shade);
    lightY = 1.6; range = 12; power = 9;
  } else if (l.kind === 'floorLamp') {
    const shade = sh(new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.1, 1.3, 28, 1, true), shadeMat), true, false);
    shade.position.y = -0.35; g.add(shade);
    lightY = -0.5; range = 16; power = 26;
  } else if (l.kind === 'porch') { // a lantern on the outside wall
    box(g, 0.5, 0.15, 0.5, Mat.paint(0x1c1d20, 0.4), 0, 0, 0, 0.03, 1);
    const glassL = sh(new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.9, 0.6), shadeMat), false, false); glassL.position.y = 0.6; g.add(glassL);
    box(g, 0.8, 0.15, 0.8, Mat.paint(0x1c1d20, 0.4), 0, 1.05, 0, 0.03, 1);
    lightY = 0.6; range = 18; power = 26;
  } else if (l.kind === 'plugLight') {
    box(g, 0.5, 0.5, 0.2, Mat.whiteWood(), 0, 0.6, 0, 0.08, 1);
    const moon = sh(new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 10), shadeMat), false, false);
    moon.position.set(0, 0.85, 0.12); g.add(moon);
    lightY = 0.9; range = 9; power = 7;
  }
  const light = new THREE.PointLight(0xffb76b, 0, range, 2);
  light.position.y = lightY;
  g.add(light);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color: 0xffc27a, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.position.y = lightY; halo.scale.set(1.8, 1.8, 1); g.add(halo);
  const lamp = {
    group: g, on: false, def: l,
    setOn(on) {
      lamp.on = on;
      light.intensity = on ? power : 0;
      shadeMat.emissive.setHex(on ? 0xffa64a : 0x000000);
      shadeMat.emissiveIntensity = on ? 0.8 : 0;
      halo.material.opacity = on ? 0.3 : 0;
    },
    update(t) { if (lamp.on) light.intensity = power * (0.97 + Math.sin(t * 13) * 0.015 + Math.sin(t * 7.3) * 0.015); },
  };
  lamp.setOn(!!l.on);
  return lamp;
}

// --------------------------------------------------------------- lighting --
export function buildRoom(scene, ch, quality) {
  const room = ch.room;
  const shell = buildShell(room, scene);
  const propGroup = new THREE.Group();
  for (const p of ch.props) {
    const v = propVisual(p);
    p._visual = v;
    propGroup.add(v);
  }
  scene.add(propGroup);
  const upd = [];
  for (const p of ch.props) if (p._visual.userData.tick) upd.push((t) => p._visual.userData.tick(t)); // spinning drums and the like

  // night fill: cool and dim, so silhouettes still read
  const hemi = new THREE.HemisphereLight(0x3a4a80, 0x1a1420, 1.6 * (room.ambient || 1));
  scene.add(hemi);
  // moonlight through the first window
  const win = (room.windows || [])[0];
  let moon = null;
  if (win) {
    const f = wallFrame(room, win.wall, win.at, 0);
    const dir = f.n.clone().multiplyScalar(0.55).add(new THREE.Vector3(0, -0.8, 0)).add(new THREE.Vector3(f.n.z, 0, -f.n.x).multiplyScalar(0.18)).normalize();
    moon = new THREE.DirectionalLight(0x9fb4ff, 2.4);
    const target = new THREE.Vector3((room.x0 + room.x1) / 2, 0, (room.z0 + room.z1) / 2);
    moon.target.position.copy(target);
    moon.position.copy(target).addScaledVector(dir, -60);
    moon.castShadow = true;
    const sz = Math.max(room.x1 - room.x0, room.z1 - room.z0) * 0.75 + 4;
    const cam = moon.shadow.camera;
    cam.left = -sz; cam.right = sz; cam.top = sz; cam.bottom = -sz; cam.near = 5; cam.far = 140;
    const ms = { ultra: 4096, high: 4096, medium: 2048, low: 1024 }[quality] || 2048;
    moon.shadow.mapSize.set(ms, ms);
    moon.shadow.bias = -0.0005; moon.shadow.normalBias = 0.04;
    scene.add(moon, moon.target);
    const beam = moonbeam(room, win, dir);
    scene.add(beam);
    upd.push((t, c) => { beam.material.uniforms.time.value = t; beam.material.uniforms.strength.value = 0.6 + c * 0.6; });
    // dust motes drifting in the beam
    const n = 140, pts = new Float32Array(n * 3), seeds = [];
    const ff = wallFrame(room, win.wall, win.at, 0), right = new THREE.Vector3(ff.n.z, 0, -ff.n.x);
    for (let i = 0; i < n; i++) seeds.push([Math.random(), Math.random(), Math.random() * 6.28]);
    const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pts, 3));
    const pm = new THREE.PointsMaterial({ size: 0.06, map: softDotTexture(), color: 0xcfdcff, transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending });
    const dust = new THREE.Points(pg, pm); dust.frustumCulled = false; dust.userData.noAO = true;
    scene.add(dust);
    upd.push((t) => {
      for (let i = 0; i < n; i++) {
        const [a, b, ph] = seeds[i];
        const y = win.y0 + (win.y1 - win.y0) * ((b + t * 0.01) % 1);
        const along = ((a + t * 0.004) % 1);
        const p = ff.p.clone().addScaledVector(right, (Math.sin(ph + t * 0.2) * 0.5 + (a - 0.5)) * win.w).setY(y).addScaledVector(dir, (y / -dir.y) * along);
        pts[i * 3] = p.x; pts[i * 3 + 1] = p.y + Math.sin(t * 0.5 + ph) * 0.1; pts[i * 3 + 2] = p.z;
      }
      pg.attributes.position.needsUpdate = true;
    });
  }
  // outdoors: a starry sky dome, a moon, and the moonlight that comes with it
  if (room.outdoor) {
    const sky = new THREE.Mesh(new THREE.SphereGeometry(140, 32, 16), new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: 'varying vec3 vP; void main(){ float h = clamp(vP.y, 0.0, 1.0); vec3 c = mix(vec3(0.16,0.12,0.30), vec3(0.02,0.03,0.10), pow(h, 0.5)); gl_FragColor = vec4(c, 1.0); }',
    }));
    sky.position.set((room.x0 + room.x1) / 2, 0, (room.z0 + room.z1) / 2); sky.userData.noAO = true; scene.add(sky);
    const n = 900, sp = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { const a = hashf(i, 1) * Math.PI * 2, e = 0.12 + hashf(i, 2) * 1.35, r = 130; sp[i * 3] = sky.position.x + Math.cos(a) * Math.cos(e) * r; sp[i * 3 + 1] = Math.sin(e) * r; sp[i * 3 + 2] = sky.position.z + Math.sin(a) * Math.cos(e) * r; }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    const stars = new THREE.Points(sg, new THREE.PointsMaterial({ size: 0.9, map: softDotTexture(), color: 0xe8eeff, transparent: true, depthWrite: false, fog: false, sizeAttenuation: true }));
    stars.userData.noAO = true; scene.add(stars);
    const md = new THREE.Vector3(-0.45, 0.62, -0.64).normalize();
    const moonDisc = new THREE.Mesh(new THREE.SphereGeometry(5, 32, 16), new THREE.MeshBasicMaterial({ color: 0xfff6dc, fog: false }));
    moonDisc.position.copy(sky.position).addScaledVector(md, 120); scene.add(moonDisc);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color: 0xcdd8ff, transparent: true, opacity: 0.5, depthWrite: false, fog: false, blending: THREE.AdditiveBlending }));
    halo.scale.setScalar(40); halo.position.copy(moonDisc.position); scene.add(halo);
    if (!moon) {
      moon = new THREE.DirectionalLight(0xa9bcff, 2.6);
      const target = sky.position.clone(); moon.target.position.copy(target); moon.position.copy(target).addScaledVector(md, 60);
      moon.castShadow = true;
      const sz = Math.max(room.x1 - room.x0, room.z1 - room.z0) * 0.6 + 4, cam = moon.shadow.camera;
      cam.left = -sz; cam.right = sz; cam.top = sz; cam.bottom = -sz; cam.near = 5; cam.far = 160;
      const ms = { ultra: 4096, high: 4096, medium: 2048, low: 1024 }[quality] || 2048;
      moon.shadow.mapSize.set(ms, ms); moon.shadow.bias = -0.0005; moon.shadow.normalBias = 0.04;
      scene.add(moon, moon.target);
    }
  }
  // the fireplace glows and flickers
  for (const p of ch.props) if (p.type === 'fireplace') {
    const fire = new THREE.PointLight(0xff7a2a, 30, 22, 2);
    const v = p._visual;
    fire.position.copy(v.localToWorld(new THREE.Vector3(0, 1.4, 1.2)));
    const base = fire.position.clone();
    scene.add(fire);
    upd.push((t) => {
      const f = 0.8 + Math.sin(t * 9.1) * 0.08 + Math.sin(t * 15.7) * 0.06 + Math.sin(t * 3.3) * 0.06;
      fire.intensity = 30 * f;
      v.userData.ember.emissiveIntensity = 2.2 * f; v.userData.glow.material.opacity = 0.7 * f;
      for (const m of v.userData.flames) m.uniforms.time.value = t;
      v.userData.updateEmbers(t);
      fire.position.x = base.x + Math.sin(t * 7.3) * 0.08; fire.position.y = base.y + Math.sin(t * 5.1) * 0.06;
    });
  }
  // TV standby glow and hallway spill
  for (const p of ch.props) if (p.type === 'tvStand') {
    const tv = new THREE.PointLight(0x4a6aff, 4, 9, 2);
    tv.position.copy(p._visual.localToWorld(new THREE.Vector3(0, 4.2, 1.2)));
    scene.add(tv);
  }
  for (const d of room.doors || []) {
    const f = wallFrame(room, d.wall, d.at, (d.y0 || 0));
    const spill = new THREE.SpotLight(0xffc27a, 60, 26, 0.75, 0.6, 1.6);
    spill.position.copy(f.p).addScaledVector(f.n, -2.5).setY((d.y0 || 0) + d.h * 0.9);
    spill.target.position.copy(f.p).addScaledVector(f.n, 4).setY(d.y0 || 0);
    scene.add(spill, spill.target);
  }
  // glow-in-the-dark stars on a kid's ceiling
  if (room.wall === 'kidsWall') {
    const starMat = new THREE.MeshBasicMaterial({ color: 0xc8ffb8, transparent: true, opacity: 0.75 });
    const shape = new THREE.Shape();
    for (let i = 0; i < 10; i++) { const r = i % 2 ? 0.14 : 0.32, a = (i / 10) * Math.PI * 2; i ? shape.lineTo(Math.cos(a) * r, Math.sin(a) * r) : shape.moveTo(r, 0); }
    const sg = new THREE.ShapeGeometry(shape);
    for (let i = 0; i < 40; i++) {
      const s = new THREE.Mesh(sg, starMat);
      s.rotation.x = Math.PI / 2; s.rotation.z = hashf(i, 3) * 6;
      s.position.set(room.x0 + 1 + hashf(i, 1) * (room.x1 - room.x0 - 2), room.h - 0.02, room.z0 + 1 + hashf(1, i) * (room.z1 - room.z0 - 2));
      s.scale.setScalar(0.6 + hashf(i, 7) * 0.8);
      scene.add(s);
    }
  }
  return { shell, props: propGroup, moon, update: (t, c) => upd.forEach((u) => u(t, c)) };
}

export { hashf, box, cyl, rb, sh };
