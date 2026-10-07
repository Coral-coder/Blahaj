// Builds the visual world for a level: sky, lighting, floor, platform
// meshes, decor, grass, particles. Gameplay lives in game.js.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { Mat, worldUV } from './materials.js';
import { Tex, softDotTexture, bokehTexture } from './textures.js';
import * as Art from './art.js';

const shadow = (m, cast = true, recv = true) => { m.castShadow = cast; m.receiveShadow = recv; return m; };
const rbox = (w, h, d, r = 0.12, seg = 3) => new RoundedBoxGeometry(w, h, d, seg, Math.min(r, w / 2 - 0.01, h / 2 - 0.01, d / 2 - 0.01));
const hashf = (a, b = 0) => { const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453; return s - Math.floor(s); };

// --------------------------------------------------------------- sky ------
const skyVert = `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position.z = gl_Position.w; }`;
const skyFrag = `
uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; uniform float night; uniform float time;
varying vec3 vDir;
float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,37.719)))*43758.5453); }
float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  float a=h(vec3(i,0.)), b=h(vec3(i+vec2(1,0),0.)), c=h(vec3(i+vec2(0,1),0.)), d=h(vec3(i+vec2(1,1),0.));
  return mix(mix(a,b,f.x),mix(c,d,f.x),f.y); }
float fbm(vec2 p){ float s=0., a=.5; for(int i=0;i<5;i++){ s+=a*noise(p); p*=2.03; a*=.5; } return s; }
void main(){
  vec3 d = normalize(vDir);
  float y = d.y;
  vec3 col = y > 0. ? mix(horizon, top, pow(clamp(y,0.,1.), 0.6)) : mix(horizon, bottom, pow(clamp(-y,0.,1.), 0.5));
  float sd = max(dot(d, normalize(sunDir)), 0.);
  col += sunColor * (pow(sd, 900.) * 6. + pow(sd, 18.) * 0.35 + pow(sd, 3.) * 0.12);
  // soft high clouds
  if (y > 0.) {
    vec2 uv = d.xz / (y + 0.25) * 1.6 + vec2(time * 0.004, 0.);
    float c = smoothstep(0.5, 0.85, fbm(uv));
    col = mix(col, mix(vec3(1.), horizon, 0.35 + night * 0.4) * (1. - night * 0.6), c * 0.55 * smoothstep(0., 0.25, y));
  }
  // stars at night
  if (night > 0.) {
    vec3 sp = floor(d * 260.);
    float s = h(sp);
    float tw = 0.6 + 0.4 * sin(time * 2. + s * 50.);
    col += vec3(1.0, 0.95, 0.9) * step(0.9975, s) * tw * night * smoothstep(-0.05, 0.2, y) * 2.5;
    float neb = fbm(d.xz * 3. + d.y);
    col += vec3(0.5, 0.3, 0.8) * pow(neb, 3.) * 0.25 * night * max(y, 0.);
  }
  gl_FragColor = vec4(col, 1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

export function createSky(L) {
  const c = (s) => new THREE.Color(s);
  const top = c(L.sky[0]), horizon = c(L.sky[1]);
  const bottom = horizon.clone().lerp(new THREE.Color(L.floor.color), 0.5);
  const sunDir = L.night ? new THREE.Vector3(-0.5, 0.45, -0.6) : new THREE.Vector3(0.45, 0.55, -0.7);
  const mat = new THREE.ShaderMaterial({
    vertexShader: skyVert, fragmentShader: skyFrag, side: THREE.BackSide, depthWrite: false,
    uniforms: {
      top: { value: top }, horizon: { value: horizon }, bottom: { value: bottom }, sunDir: { value: sunDir.clone().normalize() },
      sunColor: { value: L.night ? new THREE.Color(0x9fb8ff) : new THREE.Color(0xfff0d0) }, night: { value: L.night ? 1 : 0 }, time: { value: 0 },
    },
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(500, 48, 24), mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -10;
  return { mesh, sunDir: sunDir.normalize(), top, horizon };
}

// image based lighting from the sky (+ a few soft "bounce" panels)
export function createEnvironment(renderer, sky, L) {
  const scene = new THREE.Scene();
  const s = sky.mesh.clone();
  s.material = sky.mesh.material.clone();
  s.material.uniforms = THREE.UniformsUtils.clone(sky.mesh.material.uniforms);
  s.scale.setScalar(0.1);
  scene.add(s);
  const panel = (color, intensity, pos, size) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity), side: THREE.DoubleSide }));
    m.position.copy(pos);
    m.lookAt(0, 0, 0);
    scene.add(m);
  };
  panel(L.night ? 0x8fa8ff : 0xfff4e0, L.night ? 1.5 : 2.5, sky.sunDir.clone().multiplyScalar(30), 10);
  panel(L.floor.color, 0.6, new THREE.Vector3(0, -30, 0), 60);
  const pm = new THREE.PMREMGenerator(renderer);
  const rt = pm.fromScene(scene, 0.03);
  pm.dispose();
  return rt.texture;
}

// ------------------------------------------------------------- floor -----
export function createFloor(L) {
  const g = new THREE.Group();
  const f = L.floor;
  const geo = new THREE.PlaneGeometry(900, 900, 1, 1);
  geo.rotateX(-Math.PI / 2);
  const upd = [];
  if (f.kind === 'goo' || f.kind === 'sea') {
    const set = Tex.water();
    const n1 = set.normalMap.clone(), n2 = set.normalMap.clone();
    n1.repeat.set(60, 60); n2.repeat.set(90, 90);
    n1.needsUpdate = n2.needsUpdate = true;
    const goo = f.kind === 'goo';
    const mat = new THREE.MeshPhysicalMaterial({
      color: f.color, roughness: goo ? 0.5 : 0.12, metalness: 0, clearcoat: goo ? 0.25 : 1, clearcoatRoughness: goo ? 0.55 : 0.08, specularIntensity: goo ? 0.35 : 0.6,
      normalMap: n1, clearcoatNormalMap: n2, normalScale: new THREE.Vector2(goo ? 0.9 : 0.4, goo ? 0.9 : 0.4),
      emissive: f.color, emissiveIntensity: goo ? 0.5 : 0.25,
    });
    const m = new THREE.Mesh(geo, mat);
    m.receiveShadow = true;
    m.position.y = f.y;
    g.add(m);
    upd.push((t) => {
      n1.offset.set(t * 0.004, t * 0.006);
      n2.offset.set(-t * 0.005, t * 0.003);
      mat.emissiveIntensity = (goo ? 0.5 : 0.22) + Math.sin(t * 1.3) * 0.06;
    });
    // bubbles popping up from the goo
    if (goo) {
      const bubbleMat = new THREE.MeshPhysicalMaterial({ color: f.color, roughness: 0.2, clearcoat: 0.6, emissive: f.color, emissiveIntensity: 0.9 });
      const bubbles = [];
      for (let i = 0; i < 26; i++) {
        const b = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14), bubbleMat);
        b.userData = { x: (hashf(i, 1) - 0.5) * 50, z: 10 - hashf(i, 2) * 110, p: hashf(i, 3) * 4, s: 0.3 + hashf(i, 4) * 0.7 };
        g.add(b);
        bubbles.push(b);
      }
      upd.push((t) => bubbles.forEach((b) => {
        const u = b.userData, ph = ((t * 0.5 + u.p) % 4) / 4;
        const sc = Math.sin(ph * Math.PI) * u.s;
        b.scale.set(sc, sc * 0.6, sc);
        b.position.set(u.x, f.y + sc * 0.2, u.z);
      }));
    }
  } else if (f.kind === 'clouds') {
    const base = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, emissive: 0xffd9e0, emissiveIntensity: 0.25 }));
    base.position.y = f.y - 1.5;
    base.receiveShadow = true;
    g.add(base);
    // a sea of instanced cloud puffs
    const puffGeo = new THREE.IcosahedronGeometry(1, 3);
    const count = 900;
    const inst = new THREE.InstancedMesh(puffGeo, Mat.cloud(), count);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3();
    for (let i = 0; i < count; i++) {
      const r = 2 + hashf(i, 9) * 5;
      p.set((hashf(i, 1) - 0.5) * 160, f.y - 1 + hashf(i, 3) * 1.5, 30 - hashf(i, 2) * 170);
      s.set(r, r * 0.55, r);
      m4.compose(p, q, s);
      inst.setMatrixAt(i, m4);
    }
    inst.receiveShadow = true;
    g.add(inst);
    upd.push((t) => { inst.position.x = Math.sin(t * 0.05) * 3; });
  }
  return { group: g, update: (t) => upd.forEach((u) => u(t)) };
}

// ---------------------------------------------------------- platforms -----
const BOOK_COLORS = [0xd9534f, 0x5b8fd6, 0xf0ad4e, 0x5cb85c, 0x9b6bd6, 0xe57fa8, 0x3fb7a8, 0xf3d36b];
const BLOCK_COLORS = [0xff9f43, 0x6fc3df, 0x9fd86b, 0xff7fa3, 0xffd166, 0xa78bfa];

function addBox(g, w, h, d, mat, x = 0, y = 0, z = 0, r = 0.08, uvScale = 0.5) {
  const geo = worldUV(rbox(w, h, d, r), uvScale);
  const m = shadow(new THREE.Mesh(geo, mat));
  m.position.set(x, y, z);
  g.add(m);
  return m;
}

// Returns { group, collideH } with group origin at the platform's top centre.
export function createPlatformVisual(p, L, quality) {
  const g = new THREE.Group();
  const { w, d } = p;
  const floorY = L.floor.y;
  const grounded = !p.move;
  const depthToFloor = Math.max(1, p.y - floorY + 0.5);
  let collideH = p.h || 1;
  const seed = hashf(p.x * 3.1 + p.z * 1.7, p.y);

  switch (p.style) {
    case 'rug': {
      addBox(g, w + 0.3, 0.16, d + 0.3, Mat.knit(0xf6a5c0), 0, -0.08, 0, 0.07, 0.6);
      const baseH = grounded ? depthToFloor : 1.2;
      addBox(g, w, baseH, d, Mat.woodBirch(), 0, -0.16 - baseH / 2, 0, 0.12, 0.35);
      collideH = baseH + 0.16;
      break;
    }
    case 'books': {
      const total = grounded ? depthToFloor : 1.2;
      let y = 0;
      let i = 0;
      while (y < total) {
        const bh = 0.32 + hashf(seed * 10 + i) * 0.25;
        const col = BOOK_COLORS[Math.floor(hashf(seed * 20 + i) * BOOK_COLORS.length)];
        const ox = (hashf(seed * 30 + i) - 0.5) * 0.3, oz = (hashf(seed * 40 + i) - 0.5) * 0.3;
        const bw = w * (0.98 + hashf(i, seed) * 0.06), bd = d * (0.98 + hashf(seed, i) * 0.06);
        const book = new THREE.Group();
        addBox(book, bw, bh, bd, Mat.linen(col), 0, 0, 0, 0.05, 0.7);
        // cream pages inset on three sides
        addBox(book, bw - 0.12, bh * 0.78, bd + 0.02 - 0.12, Mat.linen(0xfdf3dc), 0.07, 0, 0, 0.02, 3);
        book.position.set(i === 0 ? 0 : ox, -y - bh / 2, i === 0 ? 0 : oz);
        book.rotation.y = i === 0 ? 0 : (hashf(seed, i * 3) - 0.5) * 0.12;
        g.add(book);
        y += bh;
        i++;
      }
      collideH = total;
      break;
    }
    case 'block': {
      const total = grounded ? depthToFloor : 1.5;
      const size = Math.min(w, d);
      let y = 0, i = 0;
      while (y < total) {
        const col = BLOCK_COLORS[Math.floor(hashf(seed * 7 + i) * BLOCK_COLORS.length)];
        const bh = Math.min(size, 2.2);
        addBox(g, w, bh, d, Mat.painted(col), 0, -y - bh / 2, 0, 0.14, 0.35);
        y += bh; i++;
      }
      collideH = total;
      break;
    }
    case 'wood': {
      addBox(g, w, 0.35, d, Mat.woodLight(), 0, -0.175, 0, 0.06, 0.4);
      if (p.move) {
        // toy car wheels under the moving plank
        [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([sx, sz]) => {
          const wheel = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.22, 28), Mat.glossy(0x2b2f3a)));
          wheel.rotation.z = Math.PI / 2;
          wheel.position.set(sx * (w / 2 - 0.1), -0.45, sz * (d / 2 - 0.45));
          g.add(wheel);
        });
      } else {
        // trestle legs down into the goo
        const legH = depthToFloor;
        [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([sx, sz]) => {
          addBox(g, 0.25, legH, 0.25, Mat.woodLight(), sx * (w / 2 - 0.2), -0.35 - legH / 2, sz * (d / 2 - 0.3), 0.05, 0.5);
        });
      }
      collideH = 0.35;
      break;
    }
    case 'bed': {
      addBox(g, w, 0.5, d, Mat.quilt(0xbfd9ff), 0, -0.25, 0, 0.22, 0.35);
      addBox(g, w + 0.1, 0.6, d + 0.1, Mat.quilt(0xffffff), 0, -0.75, 0, 0.2, 0.35);
      addBox(g, w + 0.5, 0.5, d + 0.5, Mat.woodBirch(), 0, -1.3, 0, 0.1, 0.4);
      const legH = depthToFloor - 1.5;
      [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([sx, sz]) => addBox(g, 0.5, legH, 0.5, Mat.woodBirch(), sx * (w / 2), -1.55 - legH / 2, sz * (d / 2), 0.08, 0.5));
      // headboard behind
      addBox(g, w + 0.5, 4.2, 0.5, Mat.woodBirch(), 0, 0.8, -d / 2 - 0.25, 0.25, 0.3);
      collideH = 1.55;
      break;
    }
    case 'cushion': {
      const geo = new THREE.SphereGeometry(1, 40, 24);
      const ps = geo.attributes.position;
      for (let i = 0; i < ps.count; i++) {
        const x = ps.getX(i), y = ps.getY(i), z = ps.getZ(i);
        const k = 1 + 0.35 * Math.abs(x * z);
        ps.setXYZ(i, x * k * w * 0.55, y * 0.75, z * k * d * 0.55);
      }
      geo.computeVertexNormals();
      const m = shadow(new THREE.Mesh(geo, Mat.quilt(0xffb3c6)));
      m.position.y = -0.75;
      g.add(m);
      collideH = 1.5;
      break;
    }
    case 'counter': {
      addBox(g, w + 0.3, 0.35, d + 0.3, Mat.marble(), 0, -0.175, 0, 0.06, 0.25);
      const cabH = grounded ? depthToFloor : 1.5;
      addBox(g, w, cabH, d, Mat.woodBirch(), 0, -0.35 - cabH / 2, 0, 0.08, 0.35);
      // drawer handles
      const brass = new THREE.MeshStandardMaterial({ color: 0xd8b26a, metalness: 1, roughness: 0.3 });
      for (let i = 0; i < Math.min(4, Math.floor(cabH / 1.5)); i++) {
        [1, -1].forEach((s) => {
          const hnd = shadow(new THREE.Mesh(new THREE.CapsuleGeometry(0.05, 0.6, 4, 8), brass));
          hnd.rotation.z = Math.PI / 2;
          hnd.position.set(0, -0.9 - i * 1.6, s * (d / 2 + 0.06));
          g.add(hnd);
        });
      }
      collideH = 0.35 + cabH;
      break;
    }
    case 'board': {
      addBox(g, w, 0.28, d, Mat.woodBoard(), 0, -0.14, 0, 0.12, 0.35);
      if (grounded) {
        const jarH = depthToFloor - 0.28;
        const jar = shadow(new THREE.Mesh(new THREE.CylinderGeometry(Math.min(w, d) * 0.38, Math.min(w, d) * 0.38, jarH, 40), Mat.ceramic(0xe8f1f8)));
        jar.position.y = -0.28 - jarH / 2;
        g.add(jar);
      } else {
        // knife-slot handle so it reads as a chopping board
        const hole = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.05, 8, 20), Mat.woodDark());
        hole.rotation.x = Math.PI / 2;
        hole.position.set(0, 0.0, -d / 2 + 0.3);
        g.add(hole);
      }
      collideH = 0.28;
      break;
    }
    case 'mug': {
      const r = Math.max(w, d) * 0.58;
      const mh = grounded ? depthToFloor : 2.5;
      const colors = [0x6fc3df, 0xff9f43, 0xffb3c6, 0xa78bfa, 0x9fd86b];
      const m = Mat.ceramic(colors[Math.floor(seed * colors.length)]);
      const cup = shadow(new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.92, mh, 48), m));
      cup.position.y = -mh / 2;
      g.add(cup);
      const rim = shadow(new THREE.Mesh(new THREE.TorusGeometry(r - 0.06, 0.07, 12, 48), m));
      rim.rotation.x = Math.PI / 2;
      g.add(rim);
      const foam = new THREE.Mesh(new THREE.CircleGeometry(r - 0.08, 40), new THREE.MeshPhysicalMaterial({ color: 0xe9cfa6, roughness: 0.6, sheen: 0.6, sheenColor: 0xffffff }));
      foam.rotation.x = -Math.PI / 2;
      foam.position.y = -0.02;
      foam.receiveShadow = true;
      g.add(foam);
      // latte-art heart
      const heart = Art.createHeart();
      heart.material = new THREE.MeshStandardMaterial({ color: 0xfff6ea, roughness: 0.7 });
      heart.scale.set(r * 0.9, r * 0.9, 0.05);
      heart.rotation.x = -Math.PI / 2;
      heart.position.y = 0.0;
      heart.castShadow = false;
      g.add(heart);
      const handle = shadow(new THREE.Mesh(new THREE.TorusGeometry(r * 0.45, 0.14, 16, 32), m));
      handle.position.set(r + 0.1, -Math.min(1.5, mh * 0.4), 0);
      g.add(handle);
      collideH = mh;
      break;
    }
    case 'sponge': {
      addBox(g, w, 0.3, d, Mat.scrubber(), 0, -0.15, 0, 0.08, 0.6);
      addBox(g, w, 0.9, d, Mat.sponge(), 0, -0.75, 0, 0.18, 0.5);
      g.userData.squish = true;
      collideH = 1.2;
      break;
    }
    case 'cookie': {
      const r = Math.min(w, d) * 0.62;
      const geo = new THREE.CylinderGeometry(r, r * 0.97, 0.45, 48, 2);
      const ps = geo.attributes.position;
      for (let i = 0; i < ps.count; i++) {
        const x = ps.getX(i), z = ps.getZ(i), a = Math.atan2(z, x);
        const k = 1 + Math.sin(a * 7 + seed * 10) * 0.025 + Math.sin(a * 13) * 0.015;
        ps.setX(i, x * k); ps.setZ(i, z * k);
      }
      geo.computeVertexNormals();
      worldUV(geo, 0.6);
      const m = shadow(new THREE.Mesh(geo, Mat.cookie()));
      m.position.y = -0.225;
      g.add(m);
      collideH = 0.45;
      break;
    }
    case 'shelf': {
      addBox(g, w, 0.4, d, Mat.woodBirch(), 0, -0.2, 0, 0.05, 0.35);
      const steel = new THREE.MeshStandardMaterial({ color: 0xe8e8ee, metalness: 1, roughness: 0.25 });
      [-1, 1].forEach((s) => {
        const br = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.4, 0.12), steel));
        br.position.set(s * (w / 2 - 0.6), -1.1, -d / 2 + 0.3);
        g.add(br);
        const arm = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, d - 0.4), steel));
        arm.position.set(s * (w / 2 - 0.6), -0.46, 0);
        g.add(arm);
      });
      collideH = 0.4;
      break;
    }
    case 'roof': {
      addBox(g, w + 0.5, 0.45, d + 0.5, Mat.roof(), 0, -0.225, 0, 0.08, 0.35);
      const houseH = grounded ? depthToFloor : 4;
      const wallCol = [0xfff1de, 0xffe0e6, 0xe2f0ff, 0xfff6c7][Math.floor(seed * 4)];
      addBox(g, w, houseH, d, Mat.stucco(wallCol), 0, -0.45 - houseH / 2, 0, 0.1, 0.3);
      // warm lit windows
      const winMat = Mat.emissive(0xffb466, 1.4);
      const frameMat = Mat.painted(0xffffff);
      const rows = Math.min(3, Math.floor(houseH / 2.6));
      for (let r = 0; r < rows; r++) {
        for (const side of [1, -1]) {
          const nW = Math.max(1, Math.floor(w / 2.4));
          for (let c = 0; c < nW; c++) {
            const x = -w / 2 + (c + 0.5) * (w / nW);
            const lit = hashf(seed * 50 + r, c + side) > 0.35;
            const fr = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.25, 0.1), frameMat);
            fr.position.set(x, -1.8 - r * 2.6, side * (d / 2 + 0.03));
            g.add(fr);
            const glass = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.05), lit ? winMat : Mat.glossy(0x30405a));
            glass.position.set(x, -1.8 - r * 2.6, side * (d / 2 + 0.085));
            if (side < 0) glass.rotation.y = Math.PI;
            g.add(glass);
          }
        }
      }
      collideH = 0.45 + houseH;
      break;
    }
    case 'chimney': {
      const ch = grounded ? depthToFloor : 4;
      addBox(g, w + 0.3, 0.35, d + 0.3, Mat.brick(), 0, -0.175, 0, 0.05, 0.6);
      addBox(g, w, ch, d, Mat.brick(), 0, -0.35 - ch / 2, 0, 0.05, 0.6);
      collideH = ch + 0.35;
      break;
    }
    case 'cloud': {
      const c = Art.createCloud(seed);
      c.scale.set(w / 4.5, 0.9, d / 2.2);
      c.position.y = -0.7;
      g.add(c);
      collideH = 1;
      break;
    }
    case 'balloon': {
      addBox(g, w, 0.9, d, Mat.wicker(), 0, -0.45, 0, 0.15, 0.6);
      const b = Art.createBalloon();
      b.scale.setScalar(0.9);
      b.position.y = 0.2;
      // keep the balloon out of the way of jumps: lift it high
      b.children.forEach((ch) => { if (ch.geometry && ch.geometry.type === 'SphereGeometry') ch.position.y = 6.2; });
      g.add(b);
      collideH = 0.9;
      break;
    }
    case 'island': {
      addBox(g, w, 0.6, d, Mat.grass(), 0, -0.3, 0, 0.25, 0.3);
      const rockH = Math.max(w, d) * 0.9;
      const geo = new THREE.ConeGeometry(Math.max(w, d) * 0.6, rockH, 9, 6);
      geo.rotateX(Math.PI);
      const ps = geo.attributes.position;
      for (let i = 0; i < ps.count; i++) {
        const x = ps.getX(i), y = ps.getY(i), z = ps.getZ(i);
        const n = hashf(Math.round(x * 3), Math.round(z * 3 + y * 5));
        ps.setXYZ(i, x * (w / Math.max(w, d)) * (0.9 + n * 0.25), y, z * (d / Math.max(w, d)) * (0.9 + n * 0.25));
      }
      geo.computeVertexNormals();
      worldUV(geo, 0.25);
      const rock = shadow(new THREE.Mesh(geo, Mat.rock()));
      rock.position.y = -0.55 - rockH / 2;
      g.add(rock);
      addGrass(g, w - 0.4, d - 0.4, quality, seed, L.night);
      collideH = 0.6;
      break;
    }
    case 'crystal': {
      const m = shadow(new THREE.Mesh(rbox(w, 0.7, d, 0.18, 4), Mat.crystal(L.night ? 0x9fe8ff : 0xb8f0ff)), true, true);
      m.position.y = -0.35;
      g.add(m);
      for (let i = 0; i < 3; i++) {
        const shard = shadow(new THREE.Mesh(new THREE.OctahedronGeometry(0.5 + i * 0.15, 0), Mat.crystal(0xc4a8ff)), true, false);
        shard.scale.set(0.6, 1.6, 0.6);
        shard.position.set((hashf(seed, i) - 0.5) * w * 0.6, -1.4 - i * 0.6, (hashf(i, seed) - 0.5) * d * 0.6);
        shard.rotation.y = i;
        g.add(shard);
      }
      collideH = 0.7;
      break;
    }
    case 'bubble': {
      const m = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), Mat.bubble());
      m.scale.set(w * 0.62, 0.55, d * 0.62);
      m.position.y = -0.4;
      g.add(m);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(w * 0.5, 0.06, 10, 48), Mat.emissive(0x9fe8ff, 1.2));
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -0.05;
      g.add(ring);
      collideH = 0.8;
      break;
    }
    default: {
      addBox(g, w, collideH, d, Mat.painted(0xdddddd), 0, -collideH / 2, 0);
    }
  }
  return { group: g, collideH };
}

// ---------------------------------------------------------------- grass ---
let grassMat = null;
const grassUniforms = { time: { value: 0 } };
export function grassTime(t) { grassUniforms.time.value = t; }
function addGrass(g, w, d, quality, seed, night) {
  const density = { ultra: 70, high: 45, medium: 18, low: 0 }[quality] || 0;
  const count = Math.floor(w * d * density);
  if (!count) return;
  if (!grassMat) {
    grassMat = new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.7 });
    grassMat.onBeforeCompile = (sh) => {
      sh.uniforms.time = grassUniforms.time;
      sh.vertexShader = 'uniform float time;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
        vec4 wp = instanceMatrix * vec4(0.,0.,0.,1.);
        float bend = position.y * position.y;
        transformed.x += sin(time * 1.8 + wp.x * 0.7 + wp.z * 0.5) * 0.12 * bend;
        transformed.z += cos(time * 1.4 + wp.z * 0.8) * 0.08 * bend;`);
    };
  }
  const blade = new THREE.PlaneGeometry(0.07, 0.42, 1, 4);
  const bp = blade.attributes.position;
  const cols = new Float32Array(bp.count * 3);
  const base = new THREE.Color(night ? 0x1f5a4a : 0x2f6b2a), tip = new THREE.Color(night ? 0x7fe0c7 : 0xb5e86a);
  const c = new THREE.Color();
  for (let i = 0; i < bp.count; i++) {
    const y = bp.getY(i) + 0.21;
    bp.setX(i, bp.getX(i) * (1 - y / 0.42));
    bp.setY(i, y);
    c.copy(base).lerp(tip, y / 0.42);
    cols[i * 3] = c.r; cols[i * 3 + 1] = c.g; cols[i * 3 + 2] = c.b;
  }
  blade.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  const inst = new THREE.InstancedMesh(blade, grassMat, count);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), s = new THREE.Vector3();
  for (let i = 0; i < count; i++) {
    p.set((hashf(i, seed) - 0.5) * w, 0, (hashf(seed, i) - 0.5) * d);
    e.set((hashf(i, 3) - 0.5) * 0.4, hashf(i, 4) * Math.PI, (hashf(i, 5) - 0.5) * 0.4);
    q.setFromEuler(e);
    const k = 0.6 + hashf(i, 6) * 0.8;
    s.set(k, k, k);
    m4.compose(p, q, s);
    inst.setMatrixAt(i, m4);
  }
  inst.receiveShadow = true;
  g.add(inst);
  // a few flowers
  const petal = new THREE.MeshPhysicalMaterial({ color: night ? 0x9fe8ff : 0xffffff, emissive: night ? 0x5fb8ff : 0x000000, emissiveIntensity: night ? 1.2 : 0, roughness: 0.5, sheen: 0.5 });
  const centre = Mat.matte(0xffd166, 0.6);
  for (let i = 0; i < Math.floor(w * d * 0.25); i++) {
    const f = new THREE.Group();
    for (let k = 0; k < 5; k++) {
      const pt = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), petal);
      pt.scale.set(1, 0.4, 1.6);
      pt.position.set(Math.cos(k * 1.256) * 0.08, 0, Math.sin(k * 1.256) * 0.08);
      pt.rotation.y = -k * 1.256;
      f.add(pt);
    }
    const ctr = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), centre);
    f.add(ctr);
    f.position.set((hashf(i, seed * 9) - 0.5) * w, 0.22, (hashf(seed * 9, i) - 0.5) * d);
    g.add(f);
  }
}

// ------------------------------------------------------------ particles ---
const ptVert = `attribute float size; attribute vec4 pcolor; varying vec4 vColor;
void main(){ vColor = pcolor; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * (420.0 / -mv.z); gl_Position = projectionMatrix * mv; }`;
const ptFrag = `uniform sampler2D map; varying vec4 vColor;
void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vColor.rgb, vColor.a * t.a); if (gl_FragColor.a < 0.003) discard; }`;

export class Particles {
  constructor(max = 600, additive = true) {
    this.max = max;
    this.items = [];
    const geo = new THREE.BufferGeometry();
    this.pos = new Float32Array(max * 3);
    this.col = new Float32Array(max * 4);
    this.size = new Float32Array(max);
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('pcolor', new THREE.BufferAttribute(this.col, 4));
    geo.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    this.mat = new THREE.ShaderMaterial({
      vertexShader: ptVert, fragmentShader: ptFrag, uniforms: { map: { value: softDotTexture() } },
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(geo, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
  }
  emit(o) {
    if (this.items.length >= this.max) this.items.shift();
    this.items.push(Object.assign({ life: 1, max: 1, size: 0.3, grow: 0, drag: 1.5, grav: 0, color: new THREE.Color(1, 1, 1), alpha: 1 }, o, { max: o.life || 1 }));
  }
  burst(p, n, opts = {}) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, u = Math.random() * 2 - 1, s = (opts.speed || 4) * (0.4 + Math.random() * 0.6);
      const r = Math.sqrt(1 - u * u);
      this.emit(Object.assign({}, opts, {
        p: p.clone().add(new THREE.Vector3((Math.random() - 0.5) * (opts.spread || 0.3), (Math.random() - 0.5) * (opts.spread || 0.3), (Math.random() - 0.5) * (opts.spread || 0.3))),
        v: new THREE.Vector3(Math.cos(a) * r * s, (opts.up ? Math.abs(u) : u) * s + (opts.lift || 0), Math.sin(a) * r * s),
        life: (opts.life || 0.8) * (0.6 + Math.random() * 0.4),
        size: (opts.size || 0.3) * (0.6 + Math.random() * 0.8),
      }));
    }
  }
  update(dt) {
    const it = this.items;
    for (let i = it.length - 1; i >= 0; i--) {
      const q = it[i];
      q.life -= dt;
      if (q.life <= 0) { it.splice(i, 1); continue; }
      q.v.multiplyScalar(Math.max(0, 1 - q.drag * dt));
      q.v.y -= q.grav * dt;
      q.p.addScaledVector(q.v, dt);
    }
    for (let i = 0; i < this.max; i++) {
      const q = it[i];
      if (!q) { this.size[i] = 0; continue; }
      const k = q.life / q.max;
      this.pos[i * 3] = q.p.x; this.pos[i * 3 + 1] = q.p.y; this.pos[i * 3 + 2] = q.p.z;
      this.col[i * 4] = q.color.r; this.col[i * 4 + 1] = q.color.g; this.col[i * 4 + 2] = q.color.b;
      this.col[i * 4 + 3] = q.alpha * Math.min(1, k * 3) * Math.min(1, (1 - k) * 12 + 0.2);
      this.size[i] = q.size * (1 + q.grow * (1 - k));
    }
    const g = this.points.geometry;
    g.attributes.position.needsUpdate = g.attributes.pcolor.needsUpdate = g.attributes.size.needsUpdate = true;
  }
}

// floating motes / fireflies that hang around the camera
export function createAmbient(L, quality) {
  const n = { ultra: 260, high: 180, medium: 90, low: 40 }[quality] || 60;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(n * 3), col = new Float32Array(n * 4), size = new Float32Array(n);
  const seeds = [];
  const tint = L.night ? [new THREE.Color(0x9fffe0), new THREE.Color(0xffe38a), new THREE.Color(0xb79fff)] : [new THREE.Color(0xfff2d0), new THREE.Color(0xffffff), new THREE.Color(0xffd6e8)];
  for (let i = 0; i < n; i++) {
    seeds.push([Math.random() * 60 - 30, Math.random() * 24 - 6, Math.random() * 60 - 30, Math.random() * 10]);
    const c = tint[i % tint.length];
    col[i * 4] = c.r; col[i * 4 + 1] = c.g; col[i * 4 + 2] = c.b; col[i * 4 + 3] = L.night ? 0.9 : 0.45;
    size[i] = (L.night ? 0.22 : 0.12) * (0.5 + Math.random());
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('pcolor', new THREE.BufferAttribute(col, 4));
  geo.setAttribute('size', new THREE.BufferAttribute(size, 1));
  const mat = new THREE.ShaderMaterial({ vertexShader: ptVert, fragmentShader: ptFrag, uniforms: { map: { value: softDotTexture() } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  const update = (t, center) => {
    for (let i = 0; i < n; i++) {
      const s = seeds[i];
      const wrap = (v, c) => c + ((((v - c) % 60) + 90) % 60) - 30;
      const x = s[0] + Math.sin(t * 0.3 + s[3]) * 1.5 + t * 0.2, z = s[2] + Math.cos(t * 0.25 + s[3]) * 1.5;
      pos[i * 3] = wrap(x, center.x);
      pos[i * 3 + 1] = center.y + s[1] + Math.sin(t * 0.5 + s[3] * 2) * 0.8;
      pos[i * 3 + 2] = wrap(z, center.z);
      if (L.night) col[i * 4 + 3] = 0.5 + 0.5 * Math.sin(t * 2 + s[3] * 3);
    }
    geo.attributes.position.needsUpdate = true;
    if (L.night) geo.attributes.pcolor.needsUpdate = true;
  };
  return { points: pts, update };
}

// large out-of-focus light orbs in the distance: a cheap "lens" look
export function createBokeh(L) {
  const g = new THREE.Group();
  const palettes = {
    bedroom: [0xffd6a0, 0xffb3c6, 0xfff0c0], kitchen: [0xffe08a, 0xffc4a0, 0xffffff], shelf: [0xd9b8ff, 0xffb3e0, 0xfff0d0],
    rooftops: [0xffc48a, 0xff9fb3, 0xfff0c0], dreamsea: [0x9fb8ff, 0xd9a8ff, 0x7fe0ff], lagoon: [0x7fffe0, 0x9fb8ff, 0xfff0a0],
  };
  const pal = palettes[L.theme] || [0xffffff];
  for (let i = 0; i < 46; i++) {
    const m = new THREE.SpriteMaterial({ map: bokehTexture(), color: pal[i % pal.length], transparent: true, opacity: 0.12 + hashf(i, 2) * 0.16, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
    const s = new THREE.Sprite(m);
    const a = hashf(i, 1) * Math.PI * 2, r = 110 + hashf(i, 3) * 80;
    s.position.set(Math.cos(a) * r, -10 + hashf(i, 4) * 60, Math.sin(a) * r - 50);
    const k = 6 + hashf(i, 5) * 16;
    s.scale.set(k, k, 1);
    g.add(s);
  }
  return g;
}

// ---------------------------------------------------------------- decor ---
export function createDecor(dec) {
  let o;
  switch (dec.type) {
    case 'plant': o = Art.createPlant(); break;
    case 'mug': o = Art.createMug(dec.color || 0x6fc3df); break;
    case 'block': o = Art.createBlock(dec.color || 0xff9f43, dec.letter); break;
    case 'cloud': o = Art.createCloud(hashf(dec.x, dec.z)); break;
    case 'coral': o = Art.createCoral(dec.color || 0xff7fa3); break;
    default: o = new THREE.Group();
  }
  o.position.set(dec.x, dec.y, dec.z);
  o.scale.setScalar(dec.s || 1);
  o.rotation.y = dec.ry !== undefined ? dec.ry : hashf(dec.x, dec.z) * Math.PI * 2;
  return o;
}
