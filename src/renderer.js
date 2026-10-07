// Renderer + post-processing pipeline with quality presets.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { setMaxAnisotropy } from './textures.js';

export const QUALITY = {
  ultra: { label: 'Ultra', pr: 2, shadow: 4096, ao: true, bloom: true, msaa: 4 },
  high: { label: 'High', pr: 1.5, shadow: 4096, ao: true, bloom: true, msaa: 4 },
  medium: { label: 'Medium', pr: 1, shadow: 2048, ao: false, bloom: true, msaa: 2 },
  low: { label: 'Low', pr: 0.8, shadow: 1024, ao: false, bloom: false, msaa: 0 },
};
export const QUALITY_ORDER = ['low', 'medium', 'high', 'ultra'];

// vignette + gentle filmic grade + a whisper of grain (runs after tone mapping)
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, time: { value: 0 }, vignette: { value: 0.32 }, warmth: { value: 0.03 }, saturation: { value: 1.08 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float time; uniform float vignette; uniform float warmth; uniform float saturation; varying vec2 vUv;
  float rnd(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)) + time) * 43758.5453); }
  void main(){
    vec4 c = texture2D(tDiffuse, vUv);
    float l = dot(c.rgb, vec3(0.299,0.587,0.114));
    c.rgb = mix(vec3(l), c.rgb, saturation);
    c.rgb += vec3(warmth, warmth*0.4, -warmth*0.6) * (1.0 - l);
    vec2 d = vUv - 0.5;
    c.rgb *= 1.0 - vignette * smoothstep(0.25, 0.85, dot(d,d) * 2.2);
    c.rgb += (rnd(vUv * 731.0) - 0.5) * 0.018;
    gl_FragColor = c;
  }`,
};

export class Renderer {
  constructor(canvas) {
    this.r = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
    this.r.outputColorSpace = THREE.SRGBColorSpace;
    this.r.toneMapping = THREE.ACESFilmicToneMapping;
    this.r.toneMappingExposure = 1.0;
    this.r.shadowMap.enabled = true;
    this.r.shadowMap.type = THREE.PCFShadowMap;
    setMaxAnisotropy(this.r.capabilities.getMaxAnisotropy());
    this.quality = 'high';
    this.composer = null;
    this.scene = null; this.camera = null;
  }

  setQuality(q) {
    this.quality = QUALITY[q] ? q : 'high';
    if (this.scene) this.build(this.scene, this.camera, this.look);
  }

  // look: { bloom, threshold, exposure }
  build(scene, camera, look = {}) {
    this.scene = scene; this.camera = camera; this.look = look;
    const Q = QUALITY[this.quality];
    const w = window.innerWidth, h = window.innerHeight;
    this.r.setPixelRatio(Math.min(window.devicePixelRatio || 1, Q.pr));
    this.r.setSize(w, h, false);
    this.r.toneMappingExposure = look.exposure || 1;
    if (this.composer) { this.composer.dispose(); this.composer = null; }
    const pr = this.r.getPixelRatio();
    const rt = new THREE.WebGLRenderTarget(w * pr, h * pr, { type: THREE.HalfFloatType, samples: Q.msaa });
    const c = new EffectComposer(this.r, rt);
    c.setPixelRatio(pr);
    c.setSize(w, h);
    c.addPass(new RenderPass(scene, camera));
    this.ao = null;
    if (Q.ao) {
      const ao = new GTAOPass(scene, camera, w, h);
      // sprites, particles and other transparent effects must not cast AO
      const baseRender = ao.render.bind(ao);
      ao.render = (...args) => {
        const hidden = [];
        scene.traverseVisible((o) => { if (o.userData.noAO || o.isSprite || o.isPoints || (o.material && o.material.transparent)) hidden.push(o); });
        hidden.forEach((o) => (o.visible = false));
        baseRender(...args);
        hidden.forEach((o) => (o.visible = true));
      };
      ao.updateGtaoMaterial({ radius: 0.9, distanceExponent: 1.4, thickness: 1.5, scale: 1.1, samples: 16, distanceFallOff: 1 });
      ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 16 });
      ao.blendIntensity = 0.9;
      c.addPass(ao);
      this.ao = ao;
    }
    this.bloom = null;
    if (Q.bloom) {
      this.bloom = new UnrealBloomPass(new THREE.Vector2(w, h), look.bloom ?? 0.3, 0.6, look.threshold ?? 1.0);
      c.addPass(this.bloom);
    }
    c.addPass(new OutputPass());
    this.grade = new ShaderPass(GradeShader);
    if (look.vignette !== undefined) this.grade.uniforms.vignette.value = look.vignette;
    if (look.warmth !== undefined) this.grade.uniforms.warmth.value = look.warmth;
    c.addPass(this.grade);
    this.composer = c;
  }

  shadowSize() { return QUALITY[this.quality].shadow; }

  resize() {
    if (!this.camera) return;
    const w = window.innerWidth, h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.r.setSize(w, h, false);
    if (this.composer) this.composer.setSize(w, h);
  }

  render(t) {
    if (this.grade) this.grade.uniforms.time.value = t % 100;
    if (this.composer) this.composer.render();
    else if (this.scene) this.r.render(this.scene, this.camera);
  }
}
