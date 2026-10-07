// Soft sprite particles: sparkles, puffs of dust and shadow, dream motes.
import * as THREE from 'three';
import { softDotTexture } from './textures.js';

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

