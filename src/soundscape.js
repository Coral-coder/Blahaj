// The sound of each room, and of the nightmares in it: a crackling fire, the
// fridge humming, the washing machine churning, crickets, the furnace, a clock
// ticking, Dad snoring... each placed where it is in the room (3D, heard from the
// camera), plus a murmuring growl from every floor nightmare (louder when it's
// after you), fluttering moths, skittering spiders and the room's bad dream.
// Every sound is made at runtime: short procedural loops played through panners.

const SR = 22050;
const bufCache = new Map();
function buffer(ctx, kind) {
  if (bufCache.has(kind)) return bufCache.get(kind);
  const secs = { fire: 4, hum: 2, washer: 4, crickets: 6, wind: 8, drips: 6, tick: 2, snore: 5.2, fan: 2, furnace: 4, buzz: 1, tinkle: 6, chuff: 1.2, spray: 1, murmur: 4, flutter: 1, skitter: 2, boss: 2, night: 6, house: 6 }[kind] || 2;
  const n = Math.floor(SR * secs), b = ctx.createBuffer(1, n, SR), d = b.getChannelData(0);
  let lp = 0, lp2 = 0, seed = kind.length * 7919;
  const r = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296 * 2 - 1; };
  const t = (i) => i / SR, ph = (f, i) => Math.sin(2 * Math.PI * f * i / SR);
  const env = (x, a, dcy) => (x < 0 ? 0 : x < a ? x / a : Math.exp(-(x - a) / dcy));
  const events = (count) => Array.from({ length: count }, () => (r() * 0.5 + 0.5) * secs);
  const loopSafe = (i) => Math.min(1, i / (SR * 0.05), (n - i) / (SR * 0.05)); // fade the ends so loops don't click
  if (kind === 'fire') {
    const pops = events(70);
    for (let i = 0; i < n; i++) {
      lp = lp * 0.97 + r() * 0.03; lp2 = lp2 * 0.6 + r() * 0.4;
      let v = lp * 2.2 + lp2 * 0.06 * (0.6 + 0.4 * ph(0.7, i));
      for (const p of pops) { const x = t(i) - p; if (x >= 0 && x < 0.03) v += r() * env(x, 0.0005, 0.006) * (0.5 + Math.abs(Math.sin(p * 99))); }
      d[i] = v * loopSafe(i);
    }
  } else if (kind === 'hum') { for (let i = 0; i < n; i++) { lp = lp * 0.9 + r() * 0.1; d[i] = (ph(60, i) * 0.5 + ph(120, i) * 0.3 + ph(180, i) * 0.1) * 0.6 + lp * 0.15; }
  } else if (kind === 'washer') {
    for (let i = 0; i < n; i++) { lp = lp * 0.985 + r() * 0.015; const slosh = 0.5 + 0.5 * Math.sin(2 * Math.PI * t(i) * 0.5); const thump = env((t(i) % 1) - 0.05, 0.01, 0.08); d[i] = (lp * 6 * slosh + ph(55, i) * 0.6 * thump + ph(90, i) * 0.12) * loopSafe(i); }
  } else if (kind === 'crickets') {
    const chirps = events(18);
    for (let i = 0; i < n; i++) { let v = 0; for (const c of chirps) { const x = t(i) - c; if (x >= 0 && x < 0.25) v += ph(4300 + (c * 100 % 300), i) * env(x % 0.06, 0.004, 0.012) * 0.5; } d[i] = v * loopSafe(i); }
  } else if (kind === 'wind' || kind === 'night' || kind === 'house') {
    const f = kind === 'wind' ? 0.985 : kind === 'night' ? 0.993 : 0.997;
    for (let i = 0; i < n; i++) { lp = lp * f + r() * (1 - f); lp2 = lp2 * f + lp * (1 - f); const sw = 0.55 + 0.45 * Math.sin(2 * Math.PI * t(i) / secs + Math.sin(t(i) * 1.3)); d[i] = (kind === 'wind' ? lp : lp2) * sw * loopSafe(i); } // filtered twice: a soft rumble, not static
  } else if (kind === 'drips') {
    const drops = events(7);
    for (let i = 0; i < n; i++) { let v = 0; for (const p of drops) { const x = t(i) - p; if (x >= 0 && x < 0.2) v += Math.sin(2 * Math.PI * (1500 - x * 4000) * x) * env(x, 0.002, 0.04); } d[i] = v * 0.7 * loopSafe(i); }
  } else if (kind === 'tick') {
    for (let i = 0; i < n; i++) { const x = t(i) % 1, f = t(i) < 1 ? 2400 : 1900; d[i] = (ph(f, i) * 0.6 + r() * 0.4) * env(x, 0.001, 0.008); }
  } else if (kind === 'snore') {
    for (let i = 0; i < n; i++) { lp = lp * 0.9 + r() * 0.1; const x = t(i), inh = Math.sin(Math.PI * Math.min(1, x / 2.2)) * (x < 2.2 ? 1 : 0), ex = x > 2.6 && x < 4.6 ? Math.sin(Math.PI * (x - 2.6) / 2) : 0; const saw = ((x * 62) % 1) * 2 - 1; d[i] = (inh * (saw * 0.5 + lp * 1.5) * (0.7 + 0.3 * ph(30, i)) + ex * lp * 0.8) * 0.8; }
  } else if (kind === 'fan') { for (let i = 0; i < n; i++) { lp = lp * 0.95 + r() * 0.05; d[i] = lp * 3 * (0.6 + 0.4 * Math.sin(2 * Math.PI * t(i) * 2)); }
  } else if (kind === 'furnace') { for (let i = 0; i < n; i++) { lp = lp * 0.995 + r() * 0.005; d[i] = (lp * 20 + ph(50, i) * 0.25 + ph(100, i) * 0.1) * (0.8 + 0.2 * Math.sin(2 * Math.PI * t(i) / 4)) * loopSafe(i); }
  } else if (kind === 'buzz') { for (let i = 0; i < n; i++) { const s = ((t(i) * 120) % 1) * 2 - 1; d[i] = s * 0.25 + ph(240, i) * 0.2 + ph(360, i) * 0.08; }
  } else if (kind === 'tinkle') {
    const notes = events(9), sc = [0, 4, 7, 12, 16, 19];
    for (let i = 0; i < n; i++) { let v = 0; for (const p of notes) { const x = t(i) - p; if (x >= 0 && x < 1.2) v += Math.sin(2 * Math.PI * 1046 * Math.pow(2, sc[Math.floor(p * 13) % sc.length] / 12) * x) * env(x, 0.002, 0.3); } d[i] = v * 0.4 * loopSafe(i); }
  } else if (kind === 'chuff') { for (let i = 0; i < n; i++) { lp = lp * 0.7 + r() * 0.3; const x = t(i) % 0.3; d[i] = lp * env(x, 0.005, 0.07) * 1.4 + ph(70, i) * 0.15 * env(x, 0.005, 0.05); }
  } else if (kind === 'spray') { for (let i = 0; i < n; i++) { lp = lp * 0.3 + r() * 0.7; d[i] = lp * (0.4 + 0.6 * env((t(i) % 0.25), 0.01, 0.12)); }
  } else if (kind === 'murmur') { // a nightmare: a low, wobbling growl and a slow breath; no hiss in it
    let b1 = 0, b2 = 0;
    for (let i = 0; i < n; i++) {
      b1 = b1 * 0.992 + r() * 0.008; b2 = b2 * 0.992 + b1 * 0.008; // breath: noise filtered twice, down to a soft rumble
      const x = t(i), wob = 0.55 + 0.45 * Math.sin(2 * Math.PI * x / secs * 3 + Math.sin(x * 2.1));
      const f0 = 62 + 5 * Math.sin(2 * Math.PI * x / secs * 2);
      const growl = Math.sin(2 * Math.PI * f0 * x) * 0.6 + Math.sin(2 * Math.PI * f0 * 1.01 * 2 * x) * 0.22 + Math.sin(2 * Math.PI * f0 * 3 * x) * 0.07;
      const breath = Math.max(0, Math.sin(2 * Math.PI * x / secs * 2));
      d[i] = (growl * wob + b2 * 60 * breath) * loopSafe(i);
    }
  } else if (kind === 'flutter') { // moth wings: a soft, low thrum
    let b1 = 0, b2 = 0;
    for (let i = 0; i < n; i++) { b1 = b1 * 0.97 + r() * 0.03; b2 = b2 * 0.97 + b1 * 0.03; const beat = 0.5 + 0.5 * Math.sin(2 * Math.PI * t(i) * 22); d[i] = (b2 * 8 + Math.sin(2 * Math.PI * 110 * t(i)) * 0.3) * beat * beat; }
  } else if (kind === 'skitter') {
    const clicks = events(40);
    for (let i = 0; i < n; i++) { let v = 0; for (const p of clicks) { const x = t(i) - p; if (x >= 0 && x < 0.01) v += r() * env(x, 0.0003, 0.002); } d[i] = v; }
  } else if (kind === 'boss') { for (let i = 0; i < n; i++) { lp = lp * 0.93 + r() * 0.07; const x = t(i) % 0.5; d[i] = lp * 4 * env(x, 0.06, 0.15) + Math.sin(2 * Math.PI * 45 * t(i)) * 0.2; }
  }
  // normalise
  let m = 0; for (let i = 0; i < n; i++) m = Math.max(m, Math.abs(d[i]));
  if (m > 0) for (let i = 0; i < n; i++) d[i] /= m;
  bufCache.set(kind, b);
  return b;
}

// what you hear in each room: [sound, where (a prop type, or [x, y, z]), loudness]
const ROOMS = {
  edge: [['house', null, 0.05], ['tick', 'bedsideTable', 0.12]],
  downstairs: [['house', null, 0.05], ['fire', 'fireplace', 0.55], ['tick', [0.5, 6, 11.4], 0.08]],
  kitchen: [['house', null, 0.05], ['hum', 'fridge', 0.18], ['drips', 'counter', 0.25], ['tick', 'wallClock', 0.12]],
  laundry: [['house', null, 0.05], ['washer', 'washer', 0.35], ['hum', 'dryer', 0.1], ['drips', 'utilitySink', 0.2]],
  backyard: [['night', null, 0.08], ['crickets', [-12, 0.5, 10], 0.3], ['crickets', [12, 0.5, 4], 0.25], ['crickets', [6, 0.5, -10], 0.2], ['wind', [0, 10, 0], 0.12]],
  garage: [['house', null, 0.05], ['buzz', 'shopLight', 0.12], ['hum', 'locker', 0.06], ['drips', [3.4, 0, -1], 0.15]],
  basement: [['house', null, 0.06], ['furnace', 'furnace', 0.4], ['drips', 'sumpGrate', 0.25], ['hum', 'waterHeater', 0.12]],
  stairs: [['house', null, 0.05], ['tick', 'hallTable', 0.1]],
  hallway: [['house', null, 0.05], ['tick', 'grandfatherClock', 0.35], ['hum', 'radiator', 0.08]],
  bathroom: [['house', null, 0.05], ['drips', 'shower', 0.35], ['drips', 'vanity', 0.2], ['hum', 'toilet', 0.06]],
  parents: [['house', null, 0.04], ['snore', 'sleepers', 0.5], ['fan', 'fanHub', 0.18], ['tick', 'nightstand', 0.08]],
  playroom: [['house', null, 0.05], ['tinkle', 'jackBox', 0.2], ['tinkle', 'toyPiano', 0.12]],
  attic: [['wind', null, 0.14], ['wind', [0, 12, 0], 0.15], ['drips', [-14, 2, -6], 0.12]],
  bed: [['house', null, 0.05], ['tick', 'bedsideTable', 0.12]],
};

export function createSoundscape(ctx, out) {
  const bus = ctx.createGain(); bus.gain.value = 0; bus.connect(out);
  let srcs = [], game = null, follow = [];
  const panner = (x, y, z) => {
    const p = ctx.createPanner(); p.panningModel = 'equalpower'; p.distanceModel = 'inverse'; p.refDistance = 2.5; p.rolloffFactor = 1.3; p.maxDistance = 60;
    setPos(p, x, y, z); return p;
  };
  function setPos(p, x, y, z) { if (p.positionX) { p.positionX.value = x; p.positionY.value = y; p.positionZ.value = z; } else p.setPosition(x, y, z); }
  function loop(kind, vol, at, rate = 1) {
    const s = ctx.createBufferSource(); s.buffer = buffer(ctx, kind); s.loop = true; s.playbackRate.value = rate * (0.97 + Math.random() * 0.06);
    s.loopStart = 0; const g = ctx.createGain(); g.gain.value = vol;
    const cut = { murmur: 420, flutter: 900, house: 300, night: 500, furnace: 400, hum: 500 }[kind];
    if (cut) { const lpf = ctx.createBiquadFilter(); lpf.type = 'lowpass'; lpf.frequency.value = cut; lpf.Q.value = 0.5; s.connect(lpf).connect(g); } else s.connect(g); // keep the low ones free of hiss
    let p = null; if (at) { p = panner(at[0], at[1], at[2]); g.connect(p).connect(bus); } else g.connect(bus);
    s.start(ctx.currentTime + Math.random() * 0.2, Math.random() * s.buffer.duration);
    const o = { s, g, p, vol }; srcs.push(o); return o;
  }
  return {
    start(g) {
      this.stop(); game = g; follow = [];
      const ch = g.ch, list = ROOMS[ch.id] || [['house', null, 0.05]];
      for (const [kind, where, vol] of list) {
        let at = null;
        if (Array.isArray(where)) at = where;
        else if (where) { const p = ch.props.find((q) => q.type === where); if (p) at = [p.x, (p.y || 0) + 2, p.z]; else continue; }
        loop(kind, vol, at);
      }
      // the nightmares: each floor one murmurs; moths flutter, spiders skitter, the boss beats its wings
      for (const e of g.enemies) {
        const kind = e.type === 'shadow' ? 'murmur' : e.type === 'moth' ? 'flutter' : e.type === 'spider' ? 'skitter' : e.type === 'boss' ? 'boss' : null;
        if (!kind || !e.pos) continue;
        follow.push({ e, o: loop(kind, e.type === 'shadow' ? 0.22 : e.type === 'boss' ? 0.4 : 0.14, [e.pos.x, e.pos.y + 0.8, e.pos.z], e.type === 'shadow' ? 0.85 + Math.random() * 0.3 : 1) });
      }
      // the room's bad dream: the train chuffs, the sprinkler sprays, the others grumble
      const hz = g.hazard;
      if (hz) {
        const kind = hz.H.type === 'roamer' && hz.H.kind === 'train' ? 'chuff' : hz.H.kind === 'water' ? 'spray' : 'murmur';
        follow.push({ hz, o: loop(kind, kind === 'murmur' ? 0.2 : 0.3, [0, 0, 0], kind === 'murmur' ? 0.7 : 1) });
      }
      bus.gain.cancelScheduledValues(ctx.currentTime); bus.gain.setTargetAtTime(1, ctx.currentTime, 1.2);
    },
    stop() {
      const now = ctx.currentTime;
      bus.gain.cancelScheduledValues(now); bus.gain.setTargetAtTime(0, now, 0.25);
      const old = srcs; srcs = []; follow = []; game = null;
      setTimeout(() => old.forEach((o) => { try { o.s.stop(); } catch (e) { /* already stopped */ } }), 1500);
    },
    // each frame: the listener is the camera; sounds follow the things making them
    update(camera) {
      if (!game) return;
      const L = ctx.listener, p = camera.position, f = camera.getWorldDirection(camera.position.clone()), up = camera.up;
      if (L.positionX) { L.positionX.value = p.x; L.positionY.value = p.y; L.positionZ.value = p.z; L.forwardX.value = f.x; L.forwardY.value = f.y; L.forwardZ.value = f.z; L.upX.value = up.x; L.upY.value = up.y; L.upZ.value = up.z; }
      else { L.setPosition(p.x, p.y, p.z); L.setOrientation(f.x, f.y, f.z, up.x, up.y, up.z); }
      const now = ctx.currentTime;
      for (const fo of follow) {
        if (fo.e) {
          const e = fo.e;
          setPos(fo.o.p, e.pos.x, (e.pos.y || 0) + 0.8, e.pos.z);
          const want = !e.alive ? 0 : e.type === 'shadow' ? (e.chase ? 0.45 : 0.22) : fo.o.vol;
          fo.o.g.gain.setTargetAtTime(want, now, e.alive ? 0.25 : 0.15);
          if (e.type === 'shadow' && e.chase) fo.o.s.playbackRate.setTargetAtTime(1.25, now, 0.3); else if (e.type === 'shadow') fo.o.s.playbackRate.setTargetAtTime(0.95, now, 0.5);
        } else if (fo.hz) {
          const hz = fo.hz, at = hz.car ? hz.car.position : hz.arm ? hz.arm.getWorldPosition(camera.position.clone()) : hz.impHome || camera.position;
          setPos(fo.o.p, at.x, (at.y || 0) + 0.6, at.z);
          fo.o.g.gain.setTargetAtTime(hz.calm ? 0 : fo.o.vol, now, 0.3);
        }
      }
    },
  };
}

// for offline previews: a room's sounds, not placed (plus a nightmare murmuring nearby)
export function previewRoom(ctx, out, id) {
  for (const [kind, , vol] of (ROOMS[id] || []).concat([['murmur', null, 0.25]])) {
    const s = ctx.createBufferSource(); s.buffer = buffer(ctx, kind); s.loop = true;
    const g = ctx.createGain(); g.gain.value = vol * 0.6; s.connect(g).connect(out); s.start(0);
  }
}
// for tests: the raw loop for a sound
export function debugBuffer(ctx, kind) { return buffer(ctx, kind); }
