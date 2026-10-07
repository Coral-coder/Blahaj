// Characters, collectibles and props, all procedural.
import * as THREE from 'three';
import { Mat } from './materials.js';
import { textTexture, softDotTexture, vnoise } from './textures.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

const shadow = (m, cast = true, recv = true) => { m.castShadow = cast; m.receiveShadow = recv; return m; };
const smoothstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export const BLAHAJ_BLUE = 0x4f86c6;

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
export function createBlahaj() {
  const blue = Mat.plush(BLAHAJ_BLUE);
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  // lathe-turned body: tail (t=0) to snout (t=1) along +Z
  const pts = [];
  const N = 48;
  const radius = (t) => {
    const base = Math.pow(Math.sin(Math.PI * Math.pow(t, 0.72)), 0.75) * 0.5;
    return Math.max(base, t < 0.5 ? 0.13 * (1 - t * 2) + base : 0);
  };
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    pts.push(new THREE.Vector2(Math.max(0.0001, radius(t)), (t - 0.5) * 1.8));
  }
  const bodyGeo = new THREE.LatheGeometry(pts, 64);
  bodyGeo.rotateX(Math.PI / 2); // lathe axis Y -> Z
  bodyGeo.rotateZ(Math.PI / 2); // put the lathe seam underneath
  // flatten a touch and paint the belly with vertex colours
  const pos = bodyGeo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const cBlue = new THREE.Color(BLAHAJ_BLUE), cWhite = new THREE.Color(0xf4f6fb), cSeam = new THREE.Color(0x9aa9c4);
  const tmp = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const t = z / 1.8 + 0.5;
    const r = Math.hypot(x, y) || 1e-6;
    const c = y / r; // +1 top, -1 bottom
    // lower jaw: snout tip droops slightly
    y *= 0.84;
    if (t > 0.82) y -= (t - 0.82) * 0.12;
    pos.setXYZ(i, x * 0.98, y, z);
    // belly boundary rises toward the mouth
    const thr = -0.22 + 0.3 * smoothstep(0.78, 1.0, t) - 0.12 * smoothstep(0.4, 0.05, t);
    const w = smoothstep(thr + 0.03, thr - 0.03, c);
    tmp.copy(cBlue).lerp(cWhite, w);
    const seam = 1 - smoothstep(0, 0.035, Math.abs(c - thr));
    tmp.lerp(cSeam, seam * 0.45);
    colors[i * 3] = tmp.r; colors[i * 3 + 1] = tmp.g; colors[i * 3 + 2] = tmp.b;
  }
  bodyGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  bodyGeo.computeVertexNormals();
  const bodyMat = Mat.plush(0xffffff, 'plushBody').clone();
  bodyMat.vertexColors = true;
  bodyMat.sheenColor = new THREE.Color(0xcfe2ff);
  const bodyMesh = shadow(new THREE.Mesh(bodyGeo, bodyMat));
  body.add(bodyMesh);

  // mouth: dark smile with a row of soft white teeth
  const mouthMat = Mat.plush(0x2a3550, 'mouth');
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.028, 10, 32, Math.PI * 0.9), mouthMat);
  smile.position.set(0, -0.15, 0.66);
  smile.rotation.set(Math.PI * 0.62, 0, Math.PI * 1.05);
  smile.scale.set(1.15, 1, 1);
  body.add(smile);
  const toothMat = Mat.plush(0xffffff, 'tooth');
  for (let i = 0; i < 7; i++) {
    const a = -0.85 + i * (1.7 / 6);
    const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.028, 0.065, 8), toothMat);
    tooth.position.set(Math.sin(a) * 0.22, -0.13, 0.62 + Math.cos(a) * 0.08);
    tooth.rotation.x = Math.PI;
    body.add(tooth);
  }

  // eyes: glossy black buttons with a tiny catch-light
  const eyes = [];
  [-1, 1].forEach((s) => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.06, 24, 16), Mat.eye());
    eye.position.set(s * 0.255, 0.07, 0.5);
    eye.scale.set(1, 1, 0.6);
    eye.lookAt(s * 1.2, 0.2, 1.4);
    const shine = new THREE.Mesh(new THREE.SphereGeometry(0.016, 8, 6), Mat.emissive(0xffffff, 1.5));
    shine.position.set(0.018, 0.022, 0.045);
    eye.add(shine);
    body.add(eye);
    eyes.push(eye);
  });

  // gills: three soft stitched arcs per side
  const gillMat = Mat.plush(0x34507a, 'gill');
  [-1, 1].forEach((s) => {
    for (let i = 0; i < 3; i++) {
      const gill = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.01, 6, 16, Math.PI * 0.9), gillMat);
      gill.position.set(s * 0.395, 0.0, 0.25 - i * 0.085);
      gill.rotation.set(0, s * Math.PI / 2, Math.PI / 2);
      body.add(gill);
    }
  });

  // dorsal fin
  const dorsal = puffyShape([[0.12, 0], [-0.12, 0.46], [-0.24, 0.42], [-0.42, 0.0]], 0.06, blue, 0.045);
  dorsal.rotation.y = -Math.PI / 2;
  dorsal.position.set(0, 0.3, -0.05);
  body.add(dorsal);

  // pectoral fins (right built, left mirrored)
  const finR = new THREE.Group();
  const finMesh = puffyShape([[0, 0.08], [0.55, 0.26], [0.5, 0.08], [0.25, -0.1], [0, -0.1]], 0.04, blue, 0.04);
  finMesh.rotation.x = -Math.PI / 2;
  finR.add(finMesh);
  finR.position.set(0.28, -0.14, 0.2);
  finR.rotation.set(0, 0.35, -0.35);
  body.add(finR);
  const mirror = new THREE.Group();
  mirror.scale.x = -1;
  const finL = finR.clone();
  mirror.add(finL);
  body.add(mirror);
  const fins = [finR, finL];

  // little pelvic fins + anal fin
  [-1, 1].forEach((s) => {
    const pf = puffyShape([[0, 0.05], [0.2, -0.05], [0.14, -0.14], [0, -0.06]], 0.03, blue, 0.025);
    pf.position.set(s * 0.15, -0.3, -0.35);
    pf.rotation.set(0, s > 0 ? -1.2 : Math.PI + 1.2, 0.6 * s);
    body.add(pf);
  });

  // tail on a pivot
  const tail = new THREE.Group();
  tail.position.set(0, 0.02, -0.82);
  body.add(tail);
  const stalk = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.16, 20, 14), blue));
  stalk.scale.set(0.75, 0.8, 1.6);
  stalk.position.z = -0.08;
  tail.add(stalk);
  const caudal = puffyShape([[0.14, 0.02], [-0.18, 0.5], [-0.32, 0.48], [-0.2, 0.06], [-0.3, -0.3], [-0.18, -0.32]], 0.05, blue, 0.04);
  caudal.rotation.y = -Math.PI / 2;
  caudal.position.set(0, 0.02, -0.18);
  tail.add(caudal);

  // the famous little care tag
  const tagTex = textTexture(['BLÅHAJ'], { w: 256, h: 128, font: '800 52px Nunito, sans-serif', color: '#2f5fa0', bg: '#ffffff' });
  const tag = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.2), new THREE.MeshStandardMaterial({ map: tagTex, side: THREE.DoubleSide, roughness: 0.9 }));
  tag.geometry.translate(0, -0.1, 0);
  tagTex.center.set(0.5, 0.5); tagTex.rotation = Math.PI / 2;
  tag.position.set(0.1, -0.33, -0.55);
  tag.rotation.y = Math.PI / 2;
  tag.castShadow = true;
  body.add(tag);

  // soft contact shadow blob (the shadow map does the rest)
  const blob = new THREE.Mesh(new THREE.CircleGeometry(0.6, 32), new THREE.MeshBasicMaterial({ map: softDotTexture(), color: 0x0a1020, transparent: true, opacity: 0.35, depthWrite: false }));
  blob.rotation.x = -Math.PI / 2;
  blob.renderOrder = 2;
  root.add(blob);

  const rig = { root, body, tail, eyes, fins, blob, tag, t: Math.random() * 10, blinkT: 2, squash: 1, squashVel: 0, spin: 0 };

  rig.update = (dt, st) => {
    rig.t += dt;
    const wag = 4 + st.speed * 11;
    tail.rotation.y = Math.sin(rig.t * wag) * (0.15 + st.speed * 0.45);
    body.rotation.y = -Math.sin(rig.t * wag - 0.6) * st.speed * 0.08;
    const flap = -0.35 + Math.sin(rig.t * (st.glide ? 14 : 6)) * (st.glide ? 0.12 : 0.08) - st.speed * 0.25 + (st.grounded ? 0 : st.glide ? 0.55 : -0.3);
    fins[0].rotation.z = flap; fins[1].rotation.z = flap;
    tag.rotation.x = Math.sin(rig.t * 5) * 0.25 + st.speed * 0.5;
    body.position.y = (st.grounded ? Math.sin(rig.t * 2.2) * 0.025 : 0) + 0.4;
    const targetPitch = st.grounded ? 0 : st.pound ? 0.9 : THREE.MathUtils.clamp(-st.vy * 0.05, -0.45, 0.45);
    body.rotation.x += (targetPitch - body.rotation.x) * Math.min(1, dt * 10);
    // roll for dash spin
    if (rig.spin > 0) { rig.spin = Math.max(0, rig.spin - dt * 18); body.rotation.z = rig.spin; } else body.rotation.z *= 0.8;
    // squash & stretch spring
    const acc = -170 * (rig.squash - 1) - 12 * rig.squashVel;
    rig.squashVel += acc * dt;
    rig.squash += rig.squashVel * dt;
    const s = rig.squash;
    body.scale.set(1 / Math.sqrt(s), s, 1 / Math.sqrt(s));
    rig.blinkT -= dt;
    let blink = 1;
    if (rig.blinkT < 0) { blink = 0.1; if (rig.blinkT < -0.12) rig.blinkT = 2 + Math.random() * 3; }
    if (st.happy) blink = 0.35;
    eyes.forEach((e) => (e.scale.y = blink));
  };
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
