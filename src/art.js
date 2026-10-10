// Characters, collectibles and props, all procedural.
import * as THREE from 'three';
import { Mat } from './materials.js';
import { Tex, textTexture, softDotTexture, vnoise } from './textures.js';
import { mergeVertices, mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import blahajGlb from '../assets/blahaj.glb';
import blahajColorUrl from '../assets/blahaj_color.jpg';
import blahajRoughUrl from '../assets/blahaj_rough.jpg';

const shadow = (m, cast = true, recv = true) => { m.castShadow = cast; m.receiveShadow = recv; return m; };
const smoothstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };


function puffyShape(points, depth, mat, bevel = 0.05) {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    // smooth corners with quadratic curves through midpoints
    const p = points[i], n = points[(i + 1) % points.length];
    shape.quadraticCurveTo(p[0], p[1], (p[0] + n[0]) / 2, (p[1] + n[1]) / 2);
  }
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 5, curveSegments: 10 });
  geo.translate(0, 0, -depth / 2);
  geo.computeVertexNormals();
  return shadow(new THREE.Mesh(geo, mat));
}

// ---------------------------------------------------------------- Blåhaj --
// Modelled on the real 100 cm IKEA BLÅHAJ (a blue shark): long slender body,
// pointed snout, darker blue back fading lighter down the sides, white belly
// and lower jaw joined by a seam, an open mouth under the snout with soft
// fabric teeth, flat embroidered eyes, long swept-back pectoral fins (blue
// on top, white underneath), a tall dorsal fin, small second dorsal, pelvic
// and anal fins, a shark tail with a long upper lobe, and a white care tag.
export const BLAHAJ_BLUE = 0x4f7fb8;

const BH = {
  z0: -0.86, len: 1.86,           // body tube runs from z0 (tail end) to z0+len (snout tip)
  n: 2.4,                         // superellipse exponent: a slightly squarish plush cross-section
  tMouth: 0.795,                  // where the mouth sits along the body
};
const lerp = (a, b, t) => a + (b - a) * t;
function bhProfile(t) {
  let w;
  if (t < 0.6) { const k = t / 0.6; w = 0.055 + 0.19 * Math.pow(Math.sin((k * Math.PI) / 2), 1.25); }
  else { const k = (t - 0.6) / 0.4; w = 0.245 * Math.pow(Math.max(0, 1 - Math.pow(k, 2.3)), 0.5); }
  return { w, ht: w * 1.02, hb: w * 0.8 };
}
const se = (a, n) => Math.sign(a) * Math.pow(Math.abs(a), 2 / n);
function bhPoint(t, phi, out) {
  const { w, ht, hb } = bhProfile(t);
  const c = Math.cos(phi), s = Math.sin(phi);
  out.x = w * se(c, BH.n);
  out.y = (s > 0 ? ht : hb) * se(s, BH.n);
  out.z = BH.z0 + t * BH.len;
  return out;
}
// the open mouth: a U-shaped band under the snout (apex forward)
function bhMouth(x, z) {
  const tm = BH.tMouth, w = bhProfile(tm).w;
  const zApex = BH.z0 + tm * BH.len;
  const xw = w * 0.82;
  const zc = zApex - 0.15 * (x / xw) * (x / xw);
  const edge = Math.max(0, 1 - (x / xw) * (x / xw));
  const gap = 0.032 * Math.pow(edge, 0.55) + 0.002;
  return { zc, gap, inside: Math.abs(x) < xw && Math.abs(z - zc) < gap, xw };
}
function bhBellyThreshold(t) {
  let th = -0.3;
  th += 0.2 * smoothstep(0.55, 0.78, t);   // white rises toward the lower jaw
  th -= 0.5 * smoothstep(0.28, 0.02, t);   // and narrows toward the tail
  return th;
}

let bhTexCache = null;
function blahajBodyTexture() {
  if (bhTexCache) return bhTexCache;
  const W = 2048, H = 2048;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const img = g.createImageData(W, H);
  const d = img.data;
  const C = (h) => [((h >> 16) & 255), ((h >> 8) & 255), (h & 255)];
  const deep = C(0x355f97), side = C(0x6b97cd), white = C(0xf4f6fa), seam = C(0x9fb0c9), mouth = C(0x2a2c45), tooth = C(0xfbf6f4), eye = C(0x0c0e15);
  const mix = (a, b, k) => [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k];
  const P = { x: 0, y: 0, z: 0 };
  // embroidered eyes, a little above and behind the mouth corners
  const eyes = [0.16, Math.PI - 0.16].map((phi) => bhPoint(0.825, phi, { x: 0, y: 0, z: 0 }));
  const eyeR = 0.03;
  for (let j = 0; j < H; j++) {
    const t = (j + 0.5) / H;
    const th = bhBellyThreshold(t);
    for (let i = 0; i < W; i++) {
      const phi = ((i + 0.5) / W) * Math.PI * 2;
      const s = Math.sin(phi);
      bhPoint(t, phi, P);
      // blue: deep along the back, lighter down the sides
      let col = mix(deep, side, smoothstep(0.95, th + 0.15, s));
      // white belly (only behind the mouth: the snout tip stays blue)
      const m = bhMouth(P.x, P.z);
      const behindMouth = P.z < m.zc - m.gap + 0.004 || Math.abs(P.x) > m.xw;
      const belly = smoothstep(th + 0.012, th - 0.012, s) * (behindMouth ? 1 : 0);
      // front edge of the white lower jaw is a soft curve following the mouth
      col = mix(col, white, belly);
      // stitched seam where blue meets white
      if (behindMouth && Math.abs(s - th) < 0.009 && s < 0) {
        const stitch = (Math.sin(P.z * 260) > -0.2) ? 1 : 0.35;
        col = mix(col, seam, 0.55 * stitch);
      }
      // the open mouth with soft teeth along both jaws
      if (s < -0.15 && m.inside) {
        col = mouth;
        const tw = 0.032; // tooth spacing
        const q = ((P.x + m.xw) / tw) % 1;
        const tri = 1 - Math.abs(q * 2 - 1);
        const fromFront = (m.zc + m.gap) - P.z, fromBack = P.z - (m.zc - m.gap);
        if (fromFront < 0.024 * tri * Math.min(1, m.gap / 0.02)) col = tooth;
        else if (fromBack < 0.016 * tri * Math.min(1, m.gap / 0.02)) col = tooth;
      }
      // embroidered eyes: satin-stitch black ovals
      for (const e of eyes) {
        const dx = P.x - e.x, dy = (P.y - e.y) / 1.15, dz = P.z - e.z;
        const dd = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dd < eyeR) {
          const satin = 0.85 + 0.15 * Math.sin((P.y + P.z * 0.3) * 900);
          col = mix(eye, [40, 44, 60], (1 - satin) * 0.8);
        }
      }
      const k = (j * W + i) * 4;
      d[k] = col[0]; d[k + 1] = col[1]; d[k + 2] = col[2]; d[k + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.anisotropy = 8;
  bhTexCache = tex;
  return tex;
}

function blahajBodyGeometry() {
  const NT = 170, NP = 112;
  const pos = [], uv = [], uv1 = [], idx = [];
  const P = { x: 0, y: 0, z: 0 };
  const tAt = (k) => { const u = k / NT; return u; };
  for (let a = 0; a <= NT; a++) {
    const t = Math.min(0.9995, tAt(a));
    for (let b = 0; b <= NP; b++) {
      const phi = (b / NP) * Math.PI * 2;
      bhPoint(t, phi, P);
      // recess the open mouth a little so it reads as a real opening
      if (Math.sin(phi) < -0.15) {
        const m = bhMouth(P.x, P.z);
        if (m.inside) { const k = 1 - Math.abs(P.z - m.zc) / m.gap; P.y += 0.035 * Math.sqrt(k); }
      }
      pos.push(P.x, P.y, P.z);
      uv.push(b / NP, t);
      const circ = bhProfile(t).w * 5.2;
      uv1.push((b / NP) * circ * 3, P.z * 3);
    }
  }
  for (let a = 0; a < NT; a++) for (let b = 0; b < NP; b++) {
    const i0 = a * (NP + 1) + b, i1 = i0 + 1, i2 = i0 + NP + 1, i3 = i2 + 1;
    idx.push(i0, i2, i1, i1, i2, i3);
  }
  // caps: snout tip and tail end
  const tipIndex = pos.length / 3;
  pos.push(0, 0, BH.z0 + BH.len); uv.push(0.5, 1); uv1.push(0, 0);
  const lastRing = NT * (NP + 1);
  for (let b = 0; b < NP; b++) idx.push(lastRing + b, tipIndex, lastRing + b + 1);
  const tailIndex = pos.length / 3;
  const pw = bhProfile(0);
  pos.push(0, (pw.ht - pw.hb) * 0.5 * 0, BH.z0); uv.push(0.5, 0); uv1.push(0, 0);
  for (let b = 0; b < NP; b++) idx.push(b + 1, tailIndex, b);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setAttribute('uv1', new THREE.Float32BufferAttribute(uv1, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

// plush fin from a 2D outline; caps facing +z get `top`, -z get `bottom`
function plushFin(points, depth, bevel, top, bottom, mat) {
  const shape = new THREE.Shape();
  const n = points.length;
  const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const m0 = mid(points[n - 1], points[0]);
  shape.moveTo(m0[0], m0[1]);
  for (let i = 0; i < n; i++) {
    const p = points[i], q = mid(p, points[(i + 1) % n]);
    shape.quadraticCurveTo(p[0], p[1], q[0], q[1]);
  }
  const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel * 0.9, bevelSegments: 6, curveSegments: 12 });
  geo.translate(0, 0, -depth / 2);
  geo.computeVertexNormals();
  const nrm = geo.attributes.normal, cols = new Float32Array(nrm.count * 3);
  const A = new THREE.Color(top), B = new THREE.Color(bottom), tmp = new THREE.Color();
  for (let i = 0; i < nrm.count; i++) {
    tmp.copy(A).lerp(B, smoothstep(0.35, -0.35, nrm.getZ(i)));
    cols[i * 3] = tmp.r; cols[i * 3 + 1] = tmp.g; cols[i * 3 + 2] = tmp.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  return shadow(new THREE.Mesh(geo, mat));
}

export function createProceduralBlahaj() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const SIDE = 0x5f8cc3, TOP = 0x3d679f, WHITE = 0xf4f6fa;

  // fabric: colour baked into the body texture, fuzz from the plush normal map
  const fuzz = Tex.plush();
  const fuzzN = fuzz.normalMap.clone(); fuzzN.channel = 1; fuzzN.needsUpdate = true;
  const fuzzR = fuzz.roughnessMap.clone(); fuzzR.channel = 1; fuzzR.needsUpdate = true;
  const bodyMat = new THREE.MeshPhysicalMaterial({
    map: blahajBodyTexture(), normalMap: fuzzN, roughnessMap: fuzzR, normalScale: new THREE.Vector2(0.55, 0.55),
    roughness: 1, sheen: 1, sheenRoughness: 0.45, sheenColor: new THREE.Color(0xc9dcff),
  });
  const bodyMesh = shadow(new THREE.Mesh(blahajBodyGeometry(), bodyMat));
  body.add(bodyMesh);

  const finN = fuzz.normalMap.clone(); finN.repeat.set(3, 3); finN.needsUpdate = true;
  const finMat = new THREE.MeshPhysicalMaterial({
    vertexColors: true, normalMap: finN, normalScale: new THREE.Vector2(0.5, 0.5),
    roughness: 1, sheen: 1, sheenRoughness: 0.45, sheenColor: new THREE.Color(0xc9dcff),
  });
  const P = { x: 0, y: 0, z: 0 };

  // tall dorsal fin, swept back (outline: x = forward, y = up)
  const dorsal = plushFin([[0.15, -0.02], [0.02, 0.16], [-0.08, 0.29], [-0.14, 0.3], [-0.14, 0.17], [-0.2, 0.04], [-0.24, -0.02]], 0.035, 0.03, TOP, TOP, finMat);
  dorsal.rotation.y = -Math.PI / 2;
  bhPoint(0.5, Math.PI / 2, P);
  dorsal.position.set(0, P.y - 0.035, P.z);
  body.add(dorsal);
  // small second dorsal fin
  const dorsal2 = plushFin([[0.05, -0.01], [-0.02, 0.07], [-0.06, 0.075], [-0.07, -0.01]], 0.02, 0.018, TOP, TOP, finMat);
  dorsal2.rotation.y = -Math.PI / 2;
  bhPoint(0.17, Math.PI / 2, P);
  dorsal2.position.set(0, P.y - 0.02, P.z);
  body.add(dorsal2);
  // anal fin (underneath, mirror of the second dorsal)
  const anal = plushFin([[0.05, 0.01], [-0.02, -0.065], [-0.06, -0.07], [-0.07, 0.01]], 0.02, 0.018, SIDE, SIDE, finMat);
  anal.rotation.y = -Math.PI / 2;
  bhPoint(0.15, -Math.PI / 2, P);
  anal.position.set(0, P.y + 0.02, P.z);
  body.add(anal);

  // long pectoral fins: blue on top, white underneath (outline: x = out, y = backward)
  const fins = [];
  const pecShape = [[-0.02, -0.11], [0.12, -0.08], [0.3, 0.06], [0.44, 0.24], [0.43, 0.3], [0.3, 0.24], [0.14, 0.15], [-0.02, 0.1]];
  [1, -1].forEach((side) => {
    const pivot = new THREE.Group();
    const fin = plushFin(pecShape, 0.03, 0.028, SIDE, WHITE, finMat);
    fin.rotation.x = -Math.PI / 2; // outline y -> world -z (backward), extrusion -> world y
    pivot.add(fin);
    bhPoint(0.64, side > 0 ? -0.55 : Math.PI + 0.55, P);
    pivot.position.set(P.x * 0.92, P.y + 0.02, P.z);
    pivot.rotation.set(0, 0, -0.42);
    if (side < 0) { pivot.scale.x = -1; pivot.rotation.z = 0.42; }
    body.add(pivot);
    fins.push(pivot);
  });
  // little pelvic fins
  [1, -1].forEach((side) => {
    const pv = new THREE.Group();
    const f = plushFin([[0, -0.05], [0.06, -0.03], [0.12, 0.06], [0.1, 0.08], [0.0, 0.05]], 0.018, 0.016, SIDE, WHITE, finMat);
    f.rotation.x = -Math.PI / 2;
    pv.add(f);
    bhPoint(0.33, side > 0 ? -1.0 : Math.PI + 1.0, P);
    pv.position.set(P.x * 0.9, P.y + 0.01, P.z);
    pv.rotation.z = -0.5;
    if (side < 0) { pv.scale.x = -1; pv.rotation.z = 0.5; }
    body.add(pv);
  });

  // shark tail on a pivot: long upper lobe, short lower lobe
  const tail = new THREE.Group();
  tail.position.set(0, 0, BH.z0 + 0.06);
  body.add(tail);
  const caudal = plushFin([[0.08, 0.05], [-0.06, 0.16], [-0.24, 0.36], [-0.33, 0.43], [-0.33, 0.36], [-0.2, 0.12], [-0.16, 0.0], [-0.22, -0.17], [-0.2, -0.22], [-0.08, -0.1], [0.08, -0.04]], 0.04, 0.03, TOP, TOP, finMat);
  caudal.rotation.y = -Math.PI / 2;
  tail.add(caudal);

  // the white care tag stitched into the belly seam near the tail
  const tagTex = textTexture(['BLÅHAJ', '100 cm'], { w: 256, h: 192, font: '800 40px Nunito, sans-serif', color: '#2f5fa0', bg: '#ffffff' });
  tagTex.center.set(0.5, 0.5); tagTex.rotation = Math.PI / 2;
  const tag = new THREE.Mesh(new THREE.PlaneGeometry(0.075, 0.13), new THREE.MeshStandardMaterial({ map: tagTex, side: THREE.DoubleSide, roughness: 0.95 }));
  tag.geometry.translate(0, -0.065, 0);
  bhPoint(0.13, -0.5, P);
  tag.position.set(P.x + 0.004, P.y, P.z);
  tag.rotation.y = Math.PI / 2;
  tag.castShadow = true;
  body.add(tag);

  // soft contact shadow blob (the shadow map does the rest)
  const blob = new THREE.Mesh(new THREE.CircleGeometry(0.6, 32), new THREE.MeshBasicMaterial({ map: softDotTexture(), color: 0x0a1020, transparent: true, opacity: 0.35, depthWrite: false }));
  blob.rotation.x = -Math.PI / 2;
  blob.scale.set(0.8, 1.6, 1);
  blob.renderOrder = 2;
  root.add(blob);

  // the toy is a bit bigger than the collision box suggests: it's a 1 m shark!
  body.scale.setScalar(1.25);
  const restY = bhProfile(0.6).hb * 1.25 + 0.01;

  const rig = { root, body, tail, eyes: [], fins, blob, tag, t: Math.random() * 10, squash: 1, squashVel: 0, spin: 0 };
  rig.update = (dt, st) => {
    rig.t += dt;
    const wag = 4 + st.speed * 11;
    tail.rotation.y = Math.sin(rig.t * wag) * (0.18 + st.speed * 0.42);
    body.rotation.y = -Math.sin(rig.t * wag - 0.6) * st.speed * 0.07;
    const flap = Math.sin(rig.t * (st.glide ? 14 : 5)) * (st.glide ? 0.12 : 0.06) + (st.grounded ? 0 : st.glide ? 0.4 : -0.25);
    fins[0].rotation.z = -0.42 + flap; fins[1].rotation.z = 0.42 - flap;
    tag.rotation.x = Math.sin(rig.t * 5) * 0.25 + st.speed * 0.5;
    body.position.y = restY + (st.grounded ? Math.sin(rig.t * 2.2) * 0.015 : 0.05);
    const targetPitch = st.grounded ? 0 : st.pound ? 0.9 : THREE.MathUtils.clamp(-st.vy * 0.05, -0.45, 0.45);
    body.rotation.x += (targetPitch - body.rotation.x) * Math.min(1, dt * 10);
    if (rig.spin > 0) { rig.spin = Math.max(0, rig.spin - dt * 18); body.rotation.z = rig.spin; } else body.rotation.z *= 0.8;
    const acc = -170 * (rig.squash - 1) - 12 * rig.squashVel;
    rig.squashVel += acc * dt;
    rig.squash += rig.squashVel * dt;
    const s = rig.squash;
    body.scale.set(1.25 / Math.sqrt(s), 1.25 * s, 1.25 / Math.sqrt(s));
  };
  rig.impulse = (v) => { rig.squashVel += v; };
  return rig;
}

// ------------------------------------------------- imported Blåhaj model --
// "Blahaj" by Kaine_G (https://sketchfab.com/Kaine_G), CC BY 4.0
// https://sketchfab.com/3d-models/blahaj-ce981de49111488c81ea646067abe1ec
// Modified: re-materialled with a plush sheen and animated in the vertex
// shader (tail wag, fin flaps). The mesh has no skeleton, so we bend it.
let blahajModel = null;

// The fins are low-poly plates; split their triangles (twice) so the floppy
// fin deform can curl them smoothly. Attributes are interpolated linearly.
const isFin = (x, y, z) => (x > -1.6 && x < 0.7 && y > 0.85) || (x > 2.1 && y > 0.4) || (Math.abs(z) > 0.75 && y < 0.8 && x > -1.7 && x < 1.0);
function subdivideFins(geo, passes = 2) {
  let g = geo.index ? geo.toNonIndexed() : geo;
  for (let pass = 0; pass < passes; pass++) {
    const names = Object.keys(g.attributes), src = names.map((n) => g.attributes[n]);
    const out = names.map(() => []);
    const P = g.attributes.position, n = P.count;
    const vert = (k, i) => { const a = src[k]; const r = []; for (let c = 0; c < a.itemSize; c++) r.push(a.array[i * a.itemSize + c]); return r; };
    const mid = (a, b) => a.map((v, i) => (v + b[i]) / 2);
    for (let t = 0; t < n; t += 3) {
      const cx = (P.getX(t) + P.getX(t + 1) + P.getX(t + 2)) / 3, cy = (P.getY(t) + P.getY(t + 1) + P.getY(t + 2)) / 3, cz = (P.getZ(t) + P.getZ(t + 1) + P.getZ(t + 2)) / 3;
      const split = isFin(cx, cy, cz);
      names.forEach((_, k) => {
        const a = vert(k, t), b = vert(k, t + 1), c = vert(k, t + 2);
        if (!split) { out[k].push(...a, ...b, ...c); return; }
        const ab = mid(a, b), bc = mid(b, c), ca = mid(c, a);
        out[k].push(...a, ...ab, ...ca, ...ab, ...b, ...bc, ...ca, ...bc, ...c, ...ab, ...bc, ...ca);
      });
    }
    const ng = new THREE.BufferGeometry();
    names.forEach((nm, k) => ng.setAttribute(nm, new THREE.BufferAttribute(new Float32Array(out[k]), src[k].itemSize)));
    g = ng;
  }
  g.computeBoundingSphere();
  return g;
}
let blahajMaps = null;
// Textures are embedded as data: images (not blob: URLs) so strict viewers,
// like the Claude artifact frame, can still load them.
function loadTex(url, srgb) {
  return new Promise((resolve) => {
    new THREE.TextureLoader().load(url, (t) => {
      t.flipY = false; // glTF UV convention
      if (srgb) t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 8;
      resolve(t);
    }, undefined, () => resolve(null));
  });
}
export function loadBlahajModel() {
  const maps = Promise.all([loadTex(blahajColorUrl, true), loadTex(blahajRoughUrl, false)]).then(([map, rough]) => { blahajMaps = { map, rough }; });
  const geo = new Promise((resolve) => {
    try {
      const buf = blahajGlb.buffer.slice(blahajGlb.byteOffset, blahajGlb.byteOffset + blahajGlb.byteLength);
      new GLTFLoader().parse(buf, '', (gltf) => {
        const meshes = [];
        gltf.scene.traverse((o) => { if (o.isMesh) meshes.push(o); });
        const bodyPos = meshes.filter((m) => m.material.name !== 'teef').map((m) => m.geometry.attributes.position);
        blahajModel = meshes.map((m) => ({ name: m.name, geometry: m.material.name === 'teef' ? proceduralTeeth(m.geometry, bodyPos) : subdivideFins(m.geometry), material: m.material }));
        resolve(true);
      }, (err) => { console.warn('Blåhaj model failed to load, using the procedural one', err); resolve(false); });
    } catch (err) { console.warn('Blåhaj model failed to load, using the procedural one', err); resolve(false); }
  });
  return Promise.all([geo, maps]).then(([ok]) => ok && !!(blahajMaps && blahajMaps.map));
}

// The model's teeth are 16 flat cards (their cut-out texture was lost). Each card
// becomes a real little tooth: a flattened cone rooted on the gum edge of its card,
// pointing out of the mouth (down from the top jaw, up from the bottom one), and
// leaning forward or back by up to 45 degrees, so the smile is crooked tooth
// by tooth but the same every time.
function proceduralTeeth(geo, bodyPos = []) {
  const pos = geo.attributes.position, idx = geo.index ? geo.index.array : [...Array(pos.count).keys()];
  const parent = [...Array(pos.count).keys()], find = (a) => (parent[a] === a ? a : (parent[a] = find(parent[a])));
  for (let i = 0; i < idx.length; i += 3) for (const j of [1, 2]) parent[find(idx[i + j])] = find(idx[i]);
  const groups = new Map();
  for (let i = 0; i < pos.count; i++) { const r = find(i); if (!groups.has(r)) groups.set(r, []); groups.get(r).push(new THREE.Vector3().fromBufferAttribute(pos, i)); }
  const cards = [...groups.values()].filter((g) => g.length >= 3).map((vs) => ({ vs, c: vs.reduce((a, v) => a.add(v), new THREE.Vector3()).divideScalar(vs.length) }));
  const ys = cards.map((k) => k.c.y).sort((a, b) => a - b), midY = (ys[0] + ys[ys.length - 1]) / 2;
  let seed = 1234567; const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const parts = [];
  cards.forEach((k) => {
    // the gum side is whichever edge of the card actually sits against Blåhaj's body: the tooth's wide base goes there
    const surf = (v) => { let m = Infinity; for (const P of bodyPos) for (let i = 0; i < P.count; i++) { const dx = P.getX(i) - v.x, dy = P.getY(i) - v.y, dz = P.getZ(i) - v.z, d = dx * dx + dy * dy + dz * dz; if (d < m) m = d; } return m; };
    const upper = k.c.y > midY;
    const vs = bodyPos.length ? k.vs.map((v) => [v, surf(v)]).sort((a, b) => a[1] - b[1]).map((e) => e[0]) : k.vs.slice().sort((a, b) => (upper ? b.y - a.y : a.y - b.y));
    const base = vs[0].clone().add(vs[1]).multiplyScalar(0.5), tipMid = vs.slice(2).reduce((a, v) => a.add(v), new THREE.Vector3()).divideScalar(vs.length - 2);
    const dir = tipMid.clone().sub(base); const h = dir.length() * 0.95; dir.normalize(); // from the gum out to the tip
    const w = vs[0].distanceTo(vs[1]);
    const n = new THREE.Vector3().subVectors(vs[1], vs[0]).cross(new THREE.Vector3().subVectors(tipMid, vs[0])).normalize();
    n.addScaledVector(dir, -n.dot(dir)).normalize();
    // crooked: each leans forward or back (out of the mouth or in), up to 45 degrees, never sideways
    const ax = new THREE.Vector3().crossVectors(dir, n).normalize();
    const tilt = (rnd() * 2 - 1) * (Math.PI / 4);
    const q = new THREE.Quaternion().setFromAxisAngle(ax, tilt);
    const y = dir.clone().applyQuaternion(q), z = n.clone().applyQuaternion(q), x = new THREE.Vector3().crossVectors(y, z).normalize();
    const tri = new THREE.Shape(); tri.moveTo(-w / 2, 0); tri.quadraticCurveTo(-w * 0.2, h * 0.5, 0, h); tri.quadraticCurveTo(w * 0.2, h * 0.5, w / 2, 0); tri.closePath();
    const th = w * 0.16, g = new THREE.ExtrudeGeometry(tri, { depth: th, bevelEnabled: true, bevelThickness: th * 0.3, bevelSize: th * 0.25, bevelSegments: 2, curveSegments: 6 });
    g.translate(0, 0, -th / 2); // flat, with just enough thickness to see edge-on
    g.applyMatrix4(new THREE.Matrix4().makeBasis(x, y, z).setPosition(base));
    parts.push(g.index ? g.toNonIndexed() : g);
  });
  const out = mergeGeometries(parts);
  out.computeVertexNormals();
  return out;
}

// mesh space: snout toward -x, dorsal fin +y, pectoral fins toward ±z
const MODEL = { length: 7.37, bottom: -1.18, worldLength: 2.5 };

function plushModelMaterial(src, uni, deform) {
  const isTeeth = src.name === 'teef';
  const fuzz = Tex.plush();
  const fuzzN = fuzz.normalMap.clone(); fuzzN.repeat.set(14, 14); fuzzN.needsUpdate = true;
  const m = new THREE.MeshPhysicalMaterial(isTeeth ? {
    color: 0xfbf7f4, side: THREE.DoubleSide,
    roughness: 0.85, sheen: 0.6, sheenColor: new THREE.Color(0xffffff),
  } : {
    map: blahajMaps && blahajMaps.map, roughnessMap: blahajMaps && blahajMaps.rough, normalMap: fuzzN, normalScale: new THREE.Vector2(0.45, 0.45),
    roughness: 1, metalness: 0, side: THREE.DoubleSide,
    sheen: 0.45, sheenRoughness: 0.55, sheenColor: new THREE.Color(0x8fb0e0),
  });
  if (deform) addBlahajDeform(m, uni, src.name === 'teef');
  return m;
}

// Vertex-shader rig. Mesh space: snout -x, tail +x, up +y, right +z.
//  bendV/bendH: pool-noodle flex; both ends swing together around the middle
//  wag: tail swish; flap: pectoral fin tips (not applied to the teeth)
const BLAHAJ_DEFORM = `
  float nu = (position.x - 0.15) / 3.7;
  float nu2 = nu * nu;
  transformed.y += bendV * nu2;
  transformed.z += bendH * nu2;
  float tk = smoothstep(0.2, 3.9, position.x);
  transformed.z += wag * tk * tk * 2.2;
#ifndef BLAHAJ_TEETH
  float fz = abs(position.z);
  float fk = smoothstep(0.8, 1.3, fz) * (1.0 - smoothstep(0.2, 0.7, position.y)) * step(-1.5, position.x) * step(position.x, 0.8);
  transformed.y += (position.z > 0.0 ? flapR : flapL) * fk * (fz - 0.8) * 1.6; // each side fin on its own spring
  // well-loved fins: years of cuddles have squashed the stuffing out of them.
  // The side fins droop, and the dorsal fin and top of the tail slump over and
  // curl (more toward the tip), swinging a little as he moves.
  transformed.y -= fk * (fz - 0.8) * 0.6;
  float dm = smoothstep(-1.5, -1.2, position.x) * (1.0 - smoothstep(0.3, 0.55, position.x));
  float dh = max(0.0, position.y - 0.92) * dm;
  transformed.z -= position.z * 0.45 * smoothstep(0.0, 0.25, dh); // squashed thin
  transformed.y -= fk * (position.y - 0.25) * 0.4;                  // side fins flattened
  float kd = finFlop + bendH * 0.9 + dorsal;
  if (abs(kd) < 0.05) kd = 0.05;
  transformed.y += sin(kd * dh) / kd - dh;
  transformed.z += (1.0 - cos(kd * dh)) / kd;
  float th = max(0.0, position.y - 0.5) * smoothstep(2.2, 2.7, position.x);
  float kt = finFlop * 0.75 - wag * 2.0 + tailFlop;
  if (abs(kt) < 0.05) kt = 0.05;
  transformed.y += sin(kt * th) / kt - th;
  transformed.z -= (1.0 - cos(kt * th)) / kt;
#endif
`;
function addBlahajDeform(m, uni, teeth) {
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uni);
    sh.vertexShader = (teeth ? '#define BLAHAJ_TEETH\n' : '') + 'uniform float wag;\nuniform float flapL;\nuniform float flapR;\nuniform float dorsal;\nuniform float tailFlop;\nuniform float bendV;\nuniform float bendH;\nuniform float finFlop;\n' +
      sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n' + BLAHAJ_DEFORM);
  };
  m.customProgramCacheKey = () => (teeth ? 'blahajDeformTeeth' : 'blahajDeform');
  return m;
}

export function createBlahaj() {
  if (!blahajModel || !blahajMaps || !blahajMaps.map) return createProceduralBlahaj();
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const uni = { wag: { value: 0 }, flapL: { value: 0 }, flapR: { value: 0 }, dorsal: { value: 0 }, tailFlop: { value: 0 }, bendV: { value: 0 }, bendH: { value: 0 }, finFlop: { value: 2.5 } };
  const S = MODEL.worldLength / MODEL.length;
  const holder = new THREE.Group();
  holder.rotation.y = Math.PI / 2;      // snout (-x) -> forward (+z)
  holder.scale.setScalar(S);
  holder.position.y = -MODEL.bottom * S;
  body.add(holder);
  for (const part of blahajModel) {
    const isShark = part.material.name !== 'teef';
    const mesh = new THREE.Mesh(part.geometry, plushModelMaterial(part.material, uni, true));
    mesh.castShadow = isShark; mesh.receiveShadow = true;
    if (isShark) mesh.customDepthMaterial = addBlahajDeform(new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking }), uni, false);
    mesh.userData.aoMask = addBlahajDeform(new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide }), uni, !isShark); // keeps her solid in the AO pass
    holder.add(mesh);
  }
  const blob = new THREE.Mesh(new THREE.CircleGeometry(0.6, 32), new THREE.MeshBasicMaterial({ map: softDotTexture(), color: 0x0a1020, transparent: true, opacity: 0.35, depthWrite: false }));
  blob.rotation.x = -Math.PI / 2;
  blob.scale.set(0.9, 1.7, 1);
  blob.renderOrder = 2;
  root.add(blob);

  const rig = { root, body, eyes: [], blob, t: Math.random() * 10, squash: 1, squashVel: 0, spin: 0 };
  // pool-noodle flex: two damped springs driven by how hard the body accelerates.
  // The ends lag behind (inertia) and wobble back. Free fall doesn't bend it.
  const noodle = { v: 0, vVel: 0, h: 0, hVel: 0, lastV: new THREE.Vector3(), primed: false };
  const NOODLE = { k: 60, damp: 2.4, gainV: 0.62, gainH: 0.62, max: 1.3, gravity: 32 };
  // the fins are floppy too: each one is a loose, under-damped spring that lags the body and wobbles back
  const fins = { L: 0, Lv: 0, R: 0, Rv: 0, d: 0, dv: 0, tl: 0, tlv: 0, lastYaw: null };
  const spring = (x, v, target, force, k, damp, max, dt) => {
    v += (force - k * (x - target) - damp * v) * dt;
    x += v * dt;
    if (x > max) { x = max; v = Math.min(0, v); } else if (x < -max) { x = -max; v = Math.max(0, v); }
    return [x, v];
  };
  const vNow = new THREE.Vector3(), accel = new THREE.Vector3();
  rig.update = (dt, st) => {
    rig.t += dt;
    const step = Math.max(dt, 1e-3);
    vNow.set(st.vx || 0, st.vy || 0, st.vz || 0);
    if (!noodle.primed) { noodle.lastV.copy(vNow); noodle.primed = true; }
    accel.subVectors(vNow, noodle.lastV).divideScalar(step);
    noodle.lastV.copy(vNow);
    if (accel.length() > 2000) accel.set(0, 0, 0); // teleports / respawns
    const ay = accel.y + (st.grounded ? 0 : NOODLE.gravity);
    const yaw = root.rotation.y;
    const aRight = accel.x * Math.cos(yaw) - accel.z * Math.sin(yaw);
    const swayTarget = Math.sin(rig.t * 3.1) * 0.12 * st.speed;
    noodle.vVel += (-ay * NOODLE.gainV - NOODLE.k * noodle.v - NOODLE.damp * noodle.vVel) * step;
    noodle.hVel += (-aRight * NOODLE.gainH - NOODLE.k * (noodle.h - swayTarget) - NOODLE.damp * noodle.hVel) * step;
    noodle.v = THREE.MathUtils.clamp(noodle.v + noodle.vVel * step, -NOODLE.max, NOODLE.max);
    noodle.h = THREE.MathUtils.clamp(noodle.h + noodle.hVel * step, -NOODLE.max, NOODLE.max);
    if (st.bend !== undefined) { noodle.v = st.bend; noodle.vVel = 0; } // held in a bend (draped over something)
    uni.bendV.value = noodle.v;
    uni.bendH.value = noodle.h;

    const wag = 4 + st.speed * 10;
    uni.wag.value = Math.sin(rig.t * wag) * (0.08 + st.speed * 0.16);
    body.rotation.y = -Math.sin(rig.t * wag - 0.6) * st.speed * 0.06;
    // fins: pushed around by how the body accelerates and turns, then left to flop
    const yawRate = fins.lastYaw === null ? 0 : Math.atan2(Math.sin(yaw - fins.lastYaw), Math.cos(yaw - fins.lastYaw)) / step;
    fins.lastYaw = yaw;
    const turn = THREE.MathUtils.clamp(yawRate, -12, 12) * Math.hypot(vNow.x, vNow.z) * 0.6 - aRight; // sideways "g-force" on the fins
    const pecRest = st.glide ? 0.4 + Math.sin(rig.t * 13) * 0.16 : st.grounded ? Math.sin(rig.t * 3) * 0.03 : 0.12;
    [fins.L, fins.Lv] = spring(fins.L, fins.Lv, pecRest, -ay * 0.3 - turn * 0.08, 60, 2.6, 1.1, step);
    [fins.R, fins.Rv] = spring(fins.R, fins.Rv, pecRest, -ay * 0.3 + turn * 0.08, 60, 2.6, 1.1, step);
    [fins.d, fins.dv] = spring(fins.d, fins.dv, Math.sin(rig.t * 2.3) * 0.08, turn * 1.1 - ay * 0.12, 34, 2.0, 1.9, step);
    [fins.tl, fins.tlv] = spring(fins.tl, fins.tlv, 0, -ay * 0.18 + turn * 0.3, 40, 2.4, 0.95, step);
    uni.flapL.value = fins.L; uni.flapR.value = fins.R; uni.dorsal.value = fins.d; uni.tailFlop.value = fins.tl;
    // keep the belly on the floor when the ends droop
    // on the floor, drooping ends can't sink in: the middle humps up instead
    body.position.y = st.grounded ? Math.sin(rig.t * 2.2) * 0.012 + Math.max(0, -noodle.v) * S : 0.04;
    const targetPitch = st.grounded ? 0 : st.pound ? 0.9 : THREE.MathUtils.clamp(-st.vy * 0.04, -0.4, 0.4);
    body.rotation.x += (targetPitch - body.rotation.x) * Math.min(1, dt * 10);
    if (rig.spin > 0) { rig.spin = Math.max(0, rig.spin - dt * 18); body.rotation.z = rig.spin; } else body.rotation.z *= 0.8;
    const acc = -130 * (rig.squash - 1) - 8.5 * rig.squashVel;
    rig.squashVel += acc * dt;
    rig.squash += rig.squashVel * dt;
    const s = rig.squash;
    body.scale.set(1 / Math.sqrt(s), s, 1 / Math.sqrt(s));
  };
  rig.noodle = noodle;
  rig.fins = fins;
  rig.impulse = (v) => { rig.squashVel += v; };
  return rig;
}

// ------------------------------------------------------------ collectibles --
export function createFish() {
  const g = new THREE.Group();
  const m = Mat.gold(0xff9a3c, 0.45);
  const b = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.2, 24, 16), m), true, false);
  b.scale.set(0.6, 0.85, 1.2);
  g.add(b);
  const tail = puffyShape([[0, 0], [-0.2, 0.16], [-0.2, -0.16]], 0.03, m, 0.02);
  tail.rotation.y = -Math.PI / 2;
  tail.position.z = -0.24;
  g.add(tail);
  [-1, 1].forEach((s) => {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), Mat.eye());
    e.position.set(s * 0.09, 0.05, 0.13);
    g.add(e);
  });
  return g;
}

export function createStar() {
  const g = new THREE.Group();
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? 0.46 : 0.22;
    const a = (i / 10) * Math.PI * 2 + Math.PI / 2;
    pts.push([Math.cos(a) * r, Math.sin(a) * r]);
  }
  const shape = new THREE.Shape();
  shape.moveTo(pts[0][0], pts[0][1]);
  pts.slice(1).forEach((p) => shape.lineTo(p[0], p[1]));
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.1, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.06, bevelSegments: 6 });
  geo.translate(0, 0, -0.05);
  g.add(shadow(new THREE.Mesh(geo, Mat.gold(0xffc83d, 0.6)), true, false));
  [-1, 1].forEach((s) => {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), Mat.eye());
    e.position.set(s * 0.08, 0.03, 0.14);
    g.add(e);
  });
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.012, 6, 16, Math.PI), Mat.eye());
  smile.position.set(0, -0.05, 0.14);
  smile.rotation.z = Math.PI;
  g.add(smile);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color: 0xffd36b, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.scale.set(2.2, 2.2, 1);
  g.add(halo);
  return g;
}

export function createHeart() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0.15);
  shape.bezierCurveTo(0, 0.25, -0.3, 0.25, -0.3, 0);
  shape.bezierCurveTo(-0.3, -0.2, 0, -0.3, 0, -0.4);
  shape.bezierCurveTo(0, -0.3, 0.3, -0.2, 0.3, 0);
  shape.bezierCurveTo(0.3, 0.25, 0, 0.25, 0, 0.15);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.1, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.06, bevelSegments: 8, curveSegments: 24 });
  geo.translate(0, 0.1, -0.05);
  return shadow(new THREE.Mesh(geo, Mat.glossy(0xff5c8a, 0xff2d6f, 0.35)), true, false);
}

// ------------------------------------------------------------------ props --
export function createLamp() {
  const g = new THREE.Group();
  const base = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.42, 0.14, 32), Mat.woodDark()));
  base.position.y = 0.07;
  g.add(base);
  const brass = new THREE.MeshStandardMaterial({ color: 0xd8b26a, metalness: 1, roughness: 0.28 });
  const pole = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.35, 12), brass));
  pole.position.y = 0.8;
  g.add(pole);
  const shadeMat = Mat.linen(0xfff0d0).clone();
  shadeMat.side = THREE.DoubleSide;
  shadeMat.emissive = new THREE.Color(0x000000);
  const shade = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.48, 0.55, 32, 1, true), shadeMat));
  shade.position.y = 1.62;
  g.add(shade);
  const bulbMat = new THREE.MeshStandardMaterial({ color: 0xbbbbbb, emissive: 0x000000, roughness: 0.3 });
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.11, 16, 12), bulbMat);
  bulb.position.y = 1.45;
  g.add(bulb);
  const light = new THREE.PointLight(0xffc477, 0, 7, 1.6);
  light.position.y = 1.4;
  g.add(light);
  g.userData.activate = () => {
    shadeMat.emissive.setHex(0xffa040); shadeMat.emissiveIntensity = 0.9;
    bulbMat.emissive.setHex(0xfff0c0); bulbMat.emissiveIntensity = 6;
    light.intensity = 6;
  };
  return g;
}

function fluffGeometry(r, detail, amp, seed) {
  let geo = new THREE.IcosahedronGeometry(r, detail);
  geo.deleteAttribute('normal'); geo.deleteAttribute('uv');
  geo = mergeVertices(geo);
  const p = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = v.clone().normalize();
    const u = Math.atan2(n.z, n.x) / (Math.PI * 2) + 0.5, w = Math.acos(n.y) / Math.PI;
    const k = vnoise(u * 16, w * 8, 16, seed) * 0.7 + vnoise(u * 48, w * 24, 48, seed + 1) * 0.3;
    v.addScaledVector(n, (k - 0.5) * amp * 2);
    p.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

export function createBunny() {
  const g = new THREE.Group();
  const inner = new THREE.Group();
  g.add(inner);
  const fluff = Mat.plush(0xc9c3d8, 'bunnyFluff');
  const core = shadow(new THREE.Mesh(fluffGeometry(0.45, 5, 0.06, 7), fluff));
  core.position.y = 0.45;
  core.scale.set(1, 0.92, 1);
  inner.add(core);
  [-1, 1].forEach((s) => {
    const ear = shadow(new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.36, 6, 12), fluff));
    ear.position.set(s * 0.17, 0.98, -0.02);
    ear.rotation.z = -s * 0.3;
    inner.add(ear);
    const innerEar = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.26, 4, 10), Mat.plush(0xffb3c6, 'earPink'));
    innerEar.position.set(0, 0, 0.05);
    ear.add(innerEar);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.065, 16, 12), Mat.eye());
    eye.position.set(s * 0.16, 0.52, 0.39);
    inner.add(eye);
    const blush = new THREE.Mesh(new THREE.CircleGeometry(0.07, 20), new THREE.MeshBasicMaterial({ color: 0xff8fab, transparent: true, opacity: 0.6, depthWrite: false }));
    blush.position.set(s * 0.26, 0.4, 0.37);
    blush.lookAt(s * 0.7, 0.4, 1.4);
    inner.add(blush);
  });
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 8), Mat.glossy(0xff7f9f));
  nose.position.set(0, 0.42, 0.44);
  inner.add(nose);
  g.userData.inner = inner;
  return g;
}

export function createRoomba() {
  const g = new THREE.Group();
  const inner = new THREE.Group();
  g.add(inner);
  const shell = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.72, 0.28, 48), Mat.glossy(0x2c3140)));
  shell.position.y = 0.2;
  inner.add(shell);
  const top = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.6, 0.06, 48), new THREE.MeshPhysicalMaterial({ color: 0x8e96a8, metalness: 0.6, roughness: 0.35, clearcoat: 1 })));
  top.position.y = 0.36;
  inner.add(top);
  const bumper = new THREE.Mesh(new THREE.TorusGeometry(0.71, 0.05, 10, 48, Math.PI), Mat.matte(0x555b6b, 0.5));
  bumper.rotation.set(Math.PI / 2, 0, 0);
  bumper.position.y = 0.16;
  inner.add(bumper);
  const leds = [];
  [-1, 1].forEach((s) => {
    const led = new THREE.Mesh(new THREE.CapsuleGeometry(0.04, 0.06, 4, 8), Mat.emissive(0x58f5ff, 4));
    led.rotation.z = Math.PI / 2;
    led.position.set(s * 0.16, 0.35, 0.52);
    inner.add(led);
    leds.push(led);
  });
  const brush = new THREE.Group();
  for (let i = 0; i < 3; i++) {
    const bristle = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.02, 0.04), Mat.matte(0xff7fa3));
    bristle.rotation.y = (i / 3) * Math.PI;
    brush.add(bristle);
  }
  brush.position.set(0.45, 0.06, 0.4);
  inner.add(brush);
  g.userData.inner = inner;
  g.userData.brush = brush;
  return g;
}

export function createGoal() {
  const g = new THREE.Group();
  const pillowGeo = new THREE.SphereGeometry(1, 48, 32);
  const p = pillowGeo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    // squarish pillow: push toward a rounded box
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const k = 1 + 0.25 * (Math.abs(x) * Math.abs(z));
    p.setXYZ(i, x * k * 1.6, y * 0.42, z * k * 1.25);
  }
  pillowGeo.computeVertexNormals();
  const pillowMat = Mat.quilt(0xffe0ea).clone();
  pillowMat.map = pillowMat.map.clone(); pillowMat.map.repeat.set(2, 2);
  pillowMat.normalMap = pillowMat.normalMap.clone(); pillowMat.normalMap.repeat.set(2, 2);
  const pillow = shadow(new THREE.Mesh(pillowGeo, pillowMat));
  pillow.position.y = 0.42;
  g.add(pillow);
  const heart = createHeart();
  heart.material = Mat.glossy(0xff5c8a, 0xff3a7a, 0.9);
  heart.position.y = 2.1;
  heart.scale.setScalar(1.5);
  g.add(heart);
  g.userData.heart = heart;
  const glow = new THREE.PointLight(0xff8fb8, 8, 9, 1.6);
  glow.position.y = 2;
  g.add(glow);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: softDotTexture(), color: 0xff9fc4, transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.scale.set(4, 4, 1);
  halo.position.y = 2.1;
  g.add(halo);
  return g;
}

export function createSign(text) {
  const g = new THREE.Group();
  const wood = Mat.woodLight();
  const post = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 1.4, 12), wood));
  post.position.y = 0.7;
  g.add(post);
  const board = shadow(new THREE.Mesh(new THREE.BoxGeometry(2.3, 1.05, 0.1), wood));
  board.position.y = 1.65;
  g.add(board);
  const tex = textTexture(text.split('\n'), { w: 768, h: 352, font: '800 64px Nunito, "Segoe UI", sans-serif', color: '#4a2f1c' });
  const face = new THREE.Mesh(new THREE.PlaneGeometry(2.15, 0.98), new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.9 }));
  face.position.set(0, 1.65, 0.052);
  g.add(face);
  return g;
}

export function createCrate() {
  const g = new THREE.Group();
  const box = shadow(new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1, 1, 1, 1), Mat.cardboard()));
  box.position.y = 0.5;
  g.add(box);
  // printed little shark logo on the side, like a flat-pack box
  const logo = textTexture(['🦈'], { w: 128, h: 128, font: '88px sans-serif', color: '#3a2a1a' });
  const decal = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.35), new THREE.MeshStandardMaterial({ map: logo, transparent: true, opacity: 0.75, roughness: 1 }));
  decal.position.set(0.25, 0.3, 0.502);
  g.add(decal);
  return g;
}

export function createLego(w, d) {
  const g = new THREE.Group();
  const colors = [0xe3242b, 0xffcd00, 0x0aa5e0, 0x3fb34f];
  const mat = Mat.glossy(colors[Math.floor((w * 7 + d * 13) % colors.length)]);
  const box = shadow(new THREE.Mesh(new THREE.BoxGeometry(w, 0.38, d), mat));
  box.position.y = 0.19;
  g.add(box);
  const nx = Math.max(1, Math.round(w / 0.45)), nz = Math.max(1, Math.round(d / 0.45));
  const stud = new THREE.CylinderGeometry(0.12, 0.12, 0.12, 20);
  for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++) {
    const s = shadow(new THREE.Mesh(stud, mat));
    s.position.set(-w / 2 + (i + 0.5) * (w / nx), 0.44, -d / 2 + (j + 0.5) * (d / nz));
    g.add(s);
  }
  return g;
}

export function createPlant() {
  const g = new THREE.Group();
  const pot = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.38, 0.7, 32), Mat.ceramic(0xe9876a)));
  pot.position.y = 0.35;
  g.add(pot);
  const soil = new THREE.Mesh(new THREE.CircleGeometry(0.46, 24), Mat.matte(0x3b2a20, 1));
  soil.rotation.x = -Math.PI / 2;
  soil.position.y = 0.66;
  g.add(soil);
  const leafMat = new THREE.MeshPhysicalMaterial({ color: 0x4f9f5a, roughness: 0.45, sheen: 0.4, sheenColor: 0xbfffcf, side: THREE.DoubleSide });
  const leafShape = new THREE.Shape();
  leafShape.moveTo(0, 0);
  leafShape.quadraticCurveTo(0.22, 0.35, 0, 0.8);
  leafShape.quadraticCurveTo(-0.22, 0.35, 0, 0);
  const leafGeo = new THREE.ShapeGeometry(leafShape, 12);
  for (let i = 0; i < 11; i++) {
    const leaf = shadow(new THREE.Mesh(leafGeo, leafMat));
    const a = (i / 11) * Math.PI * 2;
    leaf.position.set(Math.cos(a) * 0.1, 0.65, Math.sin(a) * 0.1);
    leaf.rotation.set(0, -a + Math.PI / 2, 0);
    leaf.rotateX(-0.35 - (i % 3) * 0.2);
    leaf.scale.setScalar(0.9 + (i % 4) * 0.15);
    g.add(leaf);
  }
  return g;
}

export function createMug(color) {
  const g = new THREE.Group();
  const m = Mat.ceramic(color);
  const cup = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.45, 1, 40, 1, true), m));
  cup.material = m.clone(); cup.material.side = THREE.DoubleSide;
  cup.position.y = 0.5;
  g.add(cup);
  const bottom = new THREE.Mesh(new THREE.CircleGeometry(0.45, 32), m);
  bottom.rotation.x = -Math.PI / 2; bottom.position.y = 0.02;
  g.add(bottom);
  const coffee = new THREE.Mesh(new THREE.CircleGeometry(0.47, 32), new THREE.MeshPhysicalMaterial({ color: 0x3a1f10, roughness: 0.05, clearcoat: 1 }));
  coffee.rotation.x = -Math.PI / 2; coffee.position.y = 0.85;
  g.add(coffee);
  const handle = shadow(new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.065, 16, 32), m));
  handle.position.set(0.55, 0.5, 0);
  g.add(handle);
  return g;
}

export function createBlock(color, letter) {
  const g = new THREE.Group();
  const box = shadow(new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), Mat.painted(color)));
  box.position.y = 0.5;
  g.add(box);
  if (letter) {
    const tex = textTexture([letter], { w: 256, h: 256, font: '900 190px Nunito, sans-serif', color: '#ffffff' });
    const m = new THREE.MeshPhysicalMaterial({ map: tex, transparent: true, clearcoat: 1, roughness: 0.3 });
    [[0, 0.501, 0], [Math.PI / 2, 0, 0.501], [-Math.PI / 2, 0, -0.501], [Math.PI, -0.501, 0]].forEach(([ry, x, z], i) => {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 0.72), m);
      if (i === 0) p.position.set(0, 0.5, 0.501);
      else if (i === 1) { p.position.set(0.501, 0.5, 0); p.rotation.y = Math.PI / 2; }
      else if (i === 2) { p.position.set(-0.501, 0.5, 0); p.rotation.y = -Math.PI / 2; }
      else { p.position.set(0, 0.5, -0.501); p.rotation.y = Math.PI; }
      g.add(p);
    });
  }
  return g;
}

export function createCloud(seed = Math.random()) {
  const g = new THREE.Group();
  const m = Mat.cloud();
  const n = 6 + Math.floor(seed * 4);
  for (let i = 0; i < n; i++) {
    const r = 0.8 + ((seed * 997 * (i + 1)) % 1) * 0.9;
    const s = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 4), m);
    s.position.set((i - n / 2) * 0.9, ((seed * 31 * (i + 3)) % 1) * 0.6 - (Math.abs(i - n / 2) * 0.12), ((seed * 71 * (i + 7)) % 1 - 0.5) * 1.2);
    s.castShadow = true;
    g.add(s);
  }
  return g;
}

export function createCoral(color) {
  const g = new THREE.Group();
  const m = new THREE.MeshPhysicalMaterial({ color, roughness: 0.6, sheen: 0.6, sheenColor: 0xffffff, emissive: color, emissiveIntensity: 0.25 });
  const tip = Mat.emissive(color, 2.2);
  let seed = 1;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  function branch(parent, len, rad, depth) {
    const seg = shadow(new THREE.Mesh(new THREE.CapsuleGeometry(rad, len, 6, 12), m));
    seg.position.y = len / 2;
    parent.add(seg);
    const end = new THREE.Group();
    end.position.y = len;
    parent.add(end);
    if (depth === 0) {
      const t = new THREE.Mesh(new THREE.SphereGeometry(rad * 1.25, 12, 10), tip);
      end.add(t);
      return;
    }
    const kids = 2 + (rnd() > 0.6 ? 1 : 0);
    for (let i = 0; i < kids; i++) {
      const pivot = new THREE.Group();
      pivot.rotation.set((rnd() - 0.5) * 1.1, rnd() * Math.PI * 2, (rnd() - 0.5) * 1.1);
      end.add(pivot);
      branch(pivot, len * 0.72, rad * 0.75, depth - 1);
    }
  }
  branch(g, 0.9, 0.13, 3);
  return g;
}

export function createBalloon() {
  const g = new THREE.Group();
  const colors = [0xff7fa3, 0x6fc3df, 0xffd166];
  const bm = new THREE.MeshPhysicalMaterial({ color: colors[Math.floor(Math.random() * 3)], roughness: 0.35, clearcoat: 1, clearcoatRoughness: 0.1, sheen: 0.3 });
  const balloon = shadow(new THREE.Mesh(new THREE.SphereGeometry(1.1, 40, 28), bm), true, false);
  balloon.scale.set(1, 1.15, 1);
  balloon.position.y = 4.4;
  g.add(balloon);
  const ropeMat = Mat.matte(0x8a6a4a, 1);
  [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([x, z]) => {
    const a = new THREE.Vector3(x * 1.2, 0.4, z * 1.2), b = new THREE.Vector3(x * 0.4, 3.4, z * 0.4);
    const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, a.distanceTo(b), 4), ropeMat);
    rope.position.copy(a).add(b).multiplyScalar(0.5);
    rope.lookAt(b); rope.rotateX(Math.PI / 2);
    g.add(rope);
  });
  return g;
}
