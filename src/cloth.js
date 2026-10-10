// A position-based cloth sheet (a duvet): a grid of particles held together by
// stretch, shear and bend constraints, falling under gravity onto kinematic
// colliders (spheres, capsules, ellipsoids, boxes, Leo's rolled torso), with
// friction and self-collision so folds never pass through each other.
// Kinematic colliders are interpolated across substeps, so a moving arm
// pushes the fabric instead of tunnelling through it. Hands can grab
// particles and carry them. Everything runs at a fixed step: deterministic.

const EPS = 1e-9;

export function createCloth({ nx, nz, width, length, thickness = 0.07, iterations = 6, gravity = 22, damping = 0.985, friction = 0.55, staticFriction = 0.9, bend = 0.35 }) {
  const N = nx * nz;
  const P = new Float32Array(N * 3), Q = new Float32Array(N * 3), W = new Float32Array(N).fill(1);
  const dx = width / (nx - 1), dz = length / (nz - 1);
  const idx = (i, k) => k * nx + i;
  // constraints
  const ca = [], cb = [], cr = [], ck = [];
  const add = (a, b, r, k) => { ca.push(a); cb.push(b); cr.push(r); ck.push(k); };
  for (let k = 0; k < nz; k++) for (let i = 0; i < nx; i++) {
    if (i + 1 < nx) add(idx(i, k), idx(i + 1, k), dx, 1);
    if (k + 1 < nz) add(idx(i, k), idx(i, k + 1), dz, 1);
    if (i + 1 < nx && k + 1 < nz) { const d = Math.hypot(dx, dz); add(idx(i, k), idx(i + 1, k + 1), d, 0.6); add(idx(i + 1, k), idx(i, k + 1), d, 0.6); }
    if (i + 2 < nx) add(idx(i, k), idx(i + 2, k), dx * 2, bend);
    if (k + 2 < nz) add(idx(i, k), idx(i, k + 2), dz * 2, bend);
  }
  const A = Int32Array.from(ca), B = Int32Array.from(cb), R = Float32Array.from(cr), K = Float32Array.from(ck);
  const M = A.length;

  // colliders: { t, v } where v holds the shape's numbers; prev/cur are lerped per substep
  let cur = [], prev = [];
  const work = [];
  const pins = new Map(); // particle -> [x, y, z] target (set by grabs)
  const contact = new Uint8Array(N);

  // push point (x,y,z) out of a collider; returns null or [nx,ny,nz,newx,newy,newz]
  const out = [0, 0, 0, 0, 0, 0];
  function collide(c, x, y, z, m) {
    const v = c.v;
    switch (c.t) {
      case 's': { // sphere: cx cy cz r
        const ex = x - v[0], ey = y - v[1], ez = z - v[2], d2 = ex * ex + ey * ey + ez * ez, r = v[3] + m;
        if (d2 >= r * r) return false;
        const d = Math.sqrt(d2) + EPS;
        out[0] = ex / d; out[1] = ey / d; out[2] = ez / d; out[3] = v[0] + out[0] * r; out[4] = v[1] + out[1] * r; out[5] = v[2] + out[2] * r;
        return true;
      }
      case 'c': { // capsule: ax ay az bx by bz r
        const abx = v[3] - v[0], aby = v[4] - v[1], abz = v[5] - v[2], L2 = abx * abx + aby * aby + abz * abz;
        let t = L2 > EPS ? ((x - v[0]) * abx + (y - v[1]) * aby + (z - v[2]) * abz) / L2 : 0;
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        const px = v[0] + abx * t, py = v[1] + aby * t, pz = v[2] + abz * t;
        const ex = x - px, ey = y - py, ez = z - pz, d2 = ex * ex + ey * ey + ez * ez, r = v[6] + m;
        if (d2 >= r * r) return false;
        const d = Math.sqrt(d2) + EPS;
        out[0] = ex / d; out[1] = ey / d; out[2] = ez / d; out[3] = px + out[0] * r; out[4] = py + out[1] * r; out[5] = pz + out[2] * r;
        return true;
      }
      case 'E': { // axis-aligned ellipsoid: cx cy cz rx ry rz
        const rx = v[3] + m, ry = v[4] + m, rz = v[5] + m;
        const ux = (x - v[0]) / rx, uy = (y - v[1]) / ry, uz = (z - v[2]) / rz, q = Math.sqrt(ux * ux + uy * uy + uz * uz);
        if (q >= 1) return false;
        const s = 1 / (q + EPS);
        out[3] = v[0] + ux * s * rx; out[4] = v[1] + uy * s * ry; out[5] = v[2] + uz * s * rz;
        let gx = ux / rx, gy = uy / ry, gz = uz / rz; const gl = Math.hypot(gx, gy, gz) + EPS;
        out[0] = gx / gl; out[1] = gy / gl; out[2] = gz / gl;
        return true;
      }
      case 'T': { // Leo's torso: centre cx cy cz, roll angle a, half axes Aa Bb, half length h, cap radius cr, profile fn on c.f
        const ca_ = Math.cos(v[3]), sa = Math.sin(v[3]);
        const ox = x - v[0], oy = y - v[1], dzz = z - v[2];
        const u = ox * ca_ + oy * sa, w = -ox * sa + oy * ca_; // into the torso's frame
        const s = Math.max(-v[6], Math.min(v[6], dzz)), ez = (dzz - s) / (v[7] + m);
        const pr = c.f ? c.f(dzz) : 1, Aa = v[4] * pr + m, Bb = v[5] * pr + m;
        const q = Math.sqrt((u / Aa) ** 2 + (w / Bb) ** 2 + ez * ez);
        if (q >= 1) return false;
        const k = 1 / (q + EPS), nu = u * k, nw = w * k, nz_ = ez * k;
        out[3] = v[0] + nu * ca_ - nw * sa; out[4] = v[1] + nu * sa + nw * ca_; out[5] = v[2] + s + nz_ * (v[7] + m);
        const gu = u / (Aa * Aa), gw = w / (Bb * Bb), gz = ez / (v[7] + m);
        let gx = gu * ca_ - gw * sa, gy = gu * sa + gw * ca_; const gl = Math.hypot(gx, gy, gz) + EPS;
        out[0] = gx / gl; out[1] = gy / gl; out[2] = gz / gl;
        return true;
      }
      case 'r': { // rounded box: minx miny minz maxx maxy maxz radius
        const rr = v[6];
        const cx = (v[0] + v[3]) / 2, cy = (v[1] + v[4]) / 2, cz = (v[2] + v[5]) / 2;
        const hx = (v[3] - v[0]) / 2 - rr, hy = (v[4] - v[1]) / 2 - rr, hz = (v[5] - v[2]) / 2 - rr;
        const qx = Math.abs(x - cx) - hx, qy = Math.abs(y - cy) - hy, qz = Math.abs(z - cz) - hz;
        const mx = Math.max(qx, 0), my = Math.max(qy, 0), mz = Math.max(qz, 0), ol = Math.hypot(mx, my, mz);
        const inner = Math.min(Math.max(qx, qy, qz), 0), d = ol + inner - rr - m;
        if (d >= 0) return false;
        let gx, gy, gz;
        if (ol > EPS) { gx = mx / ol; gy = my / ol; gz = mz / ol; }
        else { gx = qx >= qy && qx >= qz ? 1 : 0; gy = gx ? 0 : qy >= qz ? 1 : 0; gz = gx || gy ? 0 : 1; }
        gx *= Math.sign(x - cx) || 1; gy *= Math.sign(y - cy) || 1; gz *= Math.sign(z - cz) || 1;
        out[0] = gx; out[1] = gy; out[2] = gz; out[3] = x - gx * d; out[4] = y - gy * d; out[5] = z - gz * d;
        return true;
      }
      default: return false;
    }
  }

  // self-collision: a spatial hash rebuilt each substep
  const CELL = 0.13, SELF = 0.11, HS = 4096;
  const head = new Int32Array(HS), next = new Int32Array(N);
  const hash = (a, b, c) => (((a * 73856093) ^ (b * 19349663) ^ (c * 83492791)) >>> 0) % HS;
  function selfCollide() {
    head.fill(-1);
    for (let p = 0; p < N; p++) {
      const h = hash(Math.floor(P[p * 3] / CELL), Math.floor(P[p * 3 + 1] / CELL), Math.floor(P[p * 3 + 2] / CELL));
      next[p] = head[h]; head[h] = p;
    }
    for (let p = 0; p < N; p++) {
      if (W[p] === 0) continue;
      const pi = p % nx, pk = (p / nx) | 0;
      const gx = Math.floor(P[p * 3] / CELL), gy = Math.floor(P[p * 3 + 1] / CELL), gz = Math.floor(P[p * 3 + 2] / CELL);
      for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (let c = -1; c <= 1; c++) {
        for (let o = head[hash(gx + a, gy + b, gz + c)]; o >= 0; o = next[o]) {
          if (o <= p) continue;
          const oi = o % nx, ok = (o / nx) | 0;
          if (Math.abs(oi - pi) <= 2 && Math.abs(ok - pk) <= 2) continue; // neighbours in the weave
          const ex = P[o * 3] - P[p * 3], ey = P[o * 3 + 1] - P[p * 3 + 1], ez = P[o * 3 + 2] - P[p * 3 + 2], d2 = ex * ex + ey * ey + ez * ez;
          if (d2 >= SELF * SELF || d2 < EPS) continue;
          const d = Math.sqrt(d2), wsum = W[p] + W[o];
          if (wsum === 0) continue;
          const corr = (SELF - d) / d / wsum * 0.5;
          P[p * 3] -= ex * corr * W[p]; P[p * 3 + 1] -= ey * corr * W[p]; P[p * 3 + 2] -= ez * corr * W[p];
          P[o * 3] += ex * corr * W[o]; P[o * 3 + 1] += ey * corr * W[o]; P[o * 3 + 2] += ez * corr * W[o];
        }
      }
    }
  }

  function collideAll(cols, final) {
    for (let p = 0; p < N; p++) {
      if (W[p] === 0) continue;
      let x = P[p * 3], y = P[p * 3 + 1], z = P[p * 3 + 2];
      for (let j = 0; j < cols.length; j++) {
        const c = cols[j];
        if (c.bb && (x < c.bb[0] || x > c.bb[3] || y < c.bb[1] || y > c.bb[4] || z < c.bb[2] || z > c.bb[5])) continue;
        if (!collide(c, x, y, z, c.m !== undefined ? c.m : thickness)) continue;
        const depth = Math.hypot(out[3] - x, out[4] - y, out[5] - z); // how hard it's pressed into the surface
        x = out[3]; y = out[4]; z = out[5];
        if (final) { // friction (Coulomb): stick if the slide is small next to how hard it's pressed, else drag
          contact[p] = 1;
          const vx = x - Q[p * 3], vy = y - Q[p * 3 + 1], vz = z - Q[p * 3 + 2];
          const vn = vx * out[0] + vy * out[1] + vz * out[2];
          const tx = vx - vn * out[0], ty = vy - vn * out[1], tz = vz - vn * out[2];
          const f = c.mu !== undefined ? c.mu : friction, slide = Math.hypot(tx, ty, tz);
          const k = slide <= (c.mus !== undefined ? c.mus : staticFriction) * depth + 1e-5 ? 1 : f; // static: it doesn't move at all
          x -= tx * k; y -= ty * k; z -= tz * k;
        }
      }
      P[p * 3] = x; P[p * 3 + 1] = y; P[p * 3 + 2] = z;
    }
  }

  function lerpColliders(a) {
    for (let j = 0; j < cur.length; j++) {
      const c = cur[j], p0 = prev[j], wv = work[j] || (work[j] = { t: c.t, v: new Float64Array(c.v.length) });
      wv.t = c.t; wv.f = c.f; wv.mu = c.mu;
      if (wv.v.length !== c.v.length) wv.v = new Float64Array(c.v.length);
      const same = p0 && p0.t === c.t && p0.v.length === c.v.length;
      for (let i = 0; i < c.v.length; i++) wv.v[i] = same ? p0.v[i] + (c.v[i] - p0.v[i]) * a : c.v[i];
      wv.bb = c.bb; // bounding boxes are padded generously, no need to lerp
    }
    work.length = cur.length;
    return work;
  }

  const cloth = {
    P, W, nx, nz, N, dx, dz, idx, contact,
    // replace the collider set for this frame (shapes in the same order frame to frame)
    setColliders(list) { prev = cur; cur = list; },
    // particles held by a hand: map index -> target position
    pins,
    guide: null, // (p, P) => optional soft target per particle, applied each substep
    opts: { self: true, collideIters: iterations, tethers: true },
    step(h, alpha0 = 0, alpha1 = 1) {
      const g = gravity * h * h;
      for (let p = 0; p < N; p++) {
        const x = P[p * 3], y = P[p * 3 + 1], z = P[p * 3 + 2];
        if (W[p] === 0) { Q[p * 3] = x; Q[p * 3 + 1] = y; Q[p * 3 + 2] = z; continue; }
        const vx = (x - Q[p * 3]) * damping, vy = (y - Q[p * 3 + 1]) * damping, vz = (z - Q[p * 3 + 2]) * damping;
        Q[p * 3] = x; Q[p * 3 + 1] = y; Q[p * 3 + 2] = z;
        P[p * 3] = x + vx; P[p * 3 + 1] = y + vy - g; P[p * 3 + 2] = z + vz;
      }
      for (const [p, t] of pins) { P[p * 3] = t[0]; P[p * 3 + 1] = t[1]; P[p * 3 + 2] = t[2]; }
      if (cloth.guide) cloth.guide(P, W);
      contact.fill(0);
      for (let it = 0; it < iterations; it++) {
        const cols = lerpColliders(alpha0 + (alpha1 - alpha0) * ((it + 1) / iterations));
        for (let c = 0; c < M; c++) {
          const a = A[c], b = B[c], wa = W[a], wb = W[b], ws = wa + wb;
          if (ws === 0) continue;
          const ex = P[b * 3] - P[a * 3], ey = P[b * 3 + 1] - P[a * 3 + 1], ez = P[b * 3 + 2] - P[a * 3 + 2];
          const d = Math.sqrt(ex * ex + ey * ey + ez * ez) + EPS;
          let diff = (d - R[c]) / d;
          if (K[c] < 1 && diff < 0) diff *= 0.15; // bending resists folding more than bunching
          const s = diff * K[c] / ws;
          P[a * 3] += ex * s * wa; P[a * 3 + 1] += ey * s * wa; P[a * 3 + 2] += ez * s * wa;
          P[b * 3] -= ex * s * wb; P[b * 3 + 1] -= ey * s * wb; P[b * 3 + 2] -= ez * s * wb;
        }
        // long-range tethers: nothing gets further from the top edge (down its own
        // column) than the fabric between them is long, so the sheet never stretches
        if (cloth.opts.tethers) for (let k = 1; k < nz; k++) {
          const maxD = k * dz * 1.01;
          for (let i = 0; i < nx; i++) {
            const p = idx(i, k), a = idx(i, 0);
            if (W[p] === 0) continue;
            const ex = P[p * 3] - P[a * 3], ey = P[p * 3 + 1] - P[a * 3 + 1], ez = P[p * 3 + 2] - P[a * 3 + 2];
            const d = Math.sqrt(ex * ex + ey * ey + ez * ez);
            if (d <= maxD) continue;
            const f = (d - maxD) / d;
            P[p * 3] -= ex * f; P[p * 3 + 1] -= ey * f; P[p * 3 + 2] -= ez * f;
          }
        }
        if (it === iterations - 1 && cloth.opts.self) selfCollide();
        if (it >= iterations - cloth.opts.collideIters) collideAll(cols, it === iterations - 1);
      }
    },
    // lay the sheet out with a function (i, k) -> [x, y, z]
    reset(fn) {
      for (let k = 0; k < nz; k++) for (let i = 0; i < nx; i++) {
        const p = idx(i, k), q = fn(i, k);
        P[p * 3] = Q[p * 3] = q[0]; P[p * 3 + 1] = Q[p * 3 + 1] = q[1]; P[p * 3 + 2] = Q[p * 3 + 2] = q[2];
      }
      prev = cur;
    },
    collideTest(c, x, y, z, m = 0) { return collide(c, x, y, z, m); },
    speed() { let m = 0; for (let p = 0; p < N * 3; p++) { const d = Math.abs(P[p] - Q[p]); if (d > m) m = d; } return m; },
  };
  return cloth;
}
