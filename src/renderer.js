// Renderer + post-processing pipeline with quality presets.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { setMaxAnisotropy, setTextureDetail } from './textures.js';

export const QUALITY = {
  ultra: { label: 'Ultra', pr: 2, shadow: 4096, ao: true, bloom: true, msaa: 4 },
  high: { label: 'High', pr: 1.5, shadow: 4096, ao: true, bloom: true, msaa: 4 },
  medium: { label: 'Medium', pr: 1, shadow: 2048, ao: false, bloom: true, msaa: 2 },
  low: { label: 'Low', pr: 0.8, shadow: 1024, ao: false, bloom: false, msaa: 0 },
};
export const QUALITY_ORDER = ['low', 'medium', 'high', 'ultra'];

// vignette + gentle filmic grade + a whisper of grain (runs after tone mapping)
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, time: { value: 0 }, vignette: { value: 0.32 }, warmth: { value: 0.03 }, saturation: { value: 1.08 }, nightmare: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float time; uniform float vignette; uniform float warmth; uniform float saturation; uniform float nightmare; varying vec2 vUv;
  float rnd(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)) + time) * 43758.5453); }
  void main(){
    float nm = clamp(nightmare, 0.0, 1.0);
    float deep = smoothstep(0.55, 1.0, nm);
    vec2 d = vUv - 0.5;
    // as the dream sours: colour fringing, a slow throb, a cold violet cast
    float ca = 0.004 * deep * (1.0 + 0.5 * sin(time * 2.6));
    vec4 c;
    c.r = texture2D(tDiffuse, vUv + d * ca).r;
    c.g = texture2D(tDiffuse, vUv).g;
    c.b = texture2D(tDiffuse, vUv - d * ca).b;
    c.a = 1.0;
    float l = dot(c.rgb, vec3(0.299,0.587,0.114));
    c.rgb = mix(vec3(l), c.rgb, mix(saturation, 0.55, nm));
    c.rgb += vec3(warmth, warmth*0.4, -warmth*0.6) * (1.0 - l) * (1.0 - nm);
    c.rgb = mix(c.rgb, c.rgb * vec3(0.82, 0.78, 1.12), nm * 0.8);
    float beat = pow(max(0.0, sin(time * 5.2)), 12.0) * deep;
    float v = vignette + nm * 0.35 + beat * 0.25;
    c.rgb *= 1.0 - v * smoothstep(0.2, 0.85, dot(d,d) * 2.2);
    c.rgb += vec3(0.25, 0.0, 0.08) * deep * smoothstep(0.35, 0.9, dot(d,d) * 2.2) * (0.6 + beat);
    c.rgb += (rnd(vUv * 731.0) - 0.5) * (0.016 + nm * 0.02);
    gl_FragColor = c;
  }`,
};

// Paint white (no occlusion) into the denoised AO target over the visible pixels of each root.
// Meshes opt in with userData.aoMask (a plain material that bends like the real one); the
// fragment is dropped if it's behind the scene depth the AO was computed from.
const aoMaskU = { aoDepth: { value: null }, aoRes: { value: new THREE.Vector2(1, 1) } };
function paintAoMask(renderer, target, ao, camera, roots) {
  aoMaskU.aoDepth.value = ao.depthTexture; aoMaskU.aoRes.value.set(target.width, target.height);
  const prevT = renderer.getRenderTarget(), prevAC = renderer.autoClear;
  renderer.setRenderTarget(target); renderer.autoClear = false;
  for (const root of roots) {
    let has = false; root.traverse((o) => { if (o.isMesh && o.userData.aoMask) has = true; });
    if (!has) continue; // only things that opted in (Blåhaj); never the dark floor or other overlays
    const saved = [];
    root.traverse((o) => {
      if (!o.isMesh) return;
      saved.push([o, o.material, o.visible]);
      const m = o.userData.aoMask;
      if (!m || !o.visible) { o.visible = false; return; }
      if (!m.userData.aoWrapped) {
        m.userData.aoWrapped = true;
        const prev = m.onBeforeCompile, key = m.customProgramCacheKey.bind(m);
        m.onBeforeCompile = (sh, r) => {
          prev.call(m, sh, r);
          Object.assign(sh.uniforms, aoMaskU);
          sh.fragmentShader = 'uniform sampler2D aoDepth;\nuniform vec2 aoRes;\n' + sh.fragmentShader.replace('void main() {', 'void main() {\n  if (gl_FragCoord.z > texture2D(aoDepth, gl_FragCoord.xy / aoRes).x + 2e-5) discard;');
        };
        m.customProgramCacheKey = () => key() + '|aoMask';
      }
      o.material = m;
    });
    const rv = root.visible; root.visible = true;
    renderer.render(root, camera);
    root.visible = rv;
    for (const [o, mat, vis] of saved) { o.material = mat; o.visible = vis; }
  }
  renderer.setRenderTarget(prevT); renderer.autoClear = prevAC;
}

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
    setTextureDetail(this.quality === 'high' || this.quality === 'ultra' ? 2 : 1);
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
      // Objects marked noAO (Blåhaj) cast no AO, so they don't leave a dark halo on the floor.
      // But then their pixels would pick up the AO of whatever is behind them and look
      // see-through, so once the AO is computed we paint "no occlusion" wherever they're visible.
      const baseRenderPass = ao._renderPass.bind(ao);
      let maskRoots = [];
      ao._renderPass = (renderer, mat, target, ...rest) => {
        baseRenderPass(renderer, mat, target, ...rest);
        if (mat === ao.pdMaterial && maskRoots.length) paintAoMask(renderer, target, ao, camera, maskRoots);
      };
      ao.render = (...args) => {
        const hidden = [];
        maskRoots = [];
        scene.traverseVisible((o) => { if (o.userData.noAO) maskRoots.push(o); if (o.userData.noAO || o.isSprite || o.isPoints || (o.material && o.material.transparent)) hidden.push(o); });
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
