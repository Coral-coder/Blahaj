// Brute-force jump reach using the game's own constants.
// maxReach(h, ab, start) -> farthest horizontal centre travel that still
// lands at height h (relative to take-off), trying every ability combo.
export function makeReach(CFG) {
  const cache = new Map();
  function sim(h, ab, opt) {
    const dt = 1 / 120;
    let x = 0, y = 0, vy = opt.vy, t = 0;
    let usedDouble = false, dashLeft = 0, usedDash = false;
    let best = -Infinity;
    for (let i = 0; i < 2400; i++) {
      t += dt;
      if (ab.doubleJump && !usedDouble && opt.dj !== null && t >= opt.dj) { vy = CFG.doubleJump; usedDouble = true; }
      if (ab.dash && !usedDash && opt.dash !== null && t >= opt.dash) { dashLeft = CFG.dashTime; usedDash = true; }
      let vx = CFG.run;
      if (dashLeft > 0) { dashLeft -= dt; vx = CFG.dashSpeed; vy = 0; }
      else {
        vy -= CFG.gravity * dt;
        if (vy < -CFG.maxFall) vy = -CFG.maxFall;
        if (ab.glide && vy < -CFG.glideFall) vy = -CFG.glideFall;
      }
      const py = y;
      x += vx * dt; y += vy * dt;
      if (vy < 0 && py >= h && y < h) { best = x; break; }
      if (y < h - 40) break;
    }
    return best;
  }
  return function maxReach(h, ab, startVy = CFG.jump) {
    const key = [h.toFixed(2), +!!ab.doubleJump, +!!ab.dash, +!!ab.glide, startVy].join('|');
    if (cache.has(key)) return cache.get(key);
    const djs = ab.doubleJump ? [null] : [null];
    if (ab.doubleJump) for (let t = 0.05; t < 2; t += 0.05) djs.push(t);
    const dashes = [null];
    if (ab.dash) for (let t = 0.0; t < 2.5; t += 0.05) dashes.push(t);
    let best = -Infinity;
    for (const dj of djs) for (const dash of dashes) best = Math.max(best, sim(h, ab, { vy: startVy, dj, dash }));
    cache.set(key, best);
    return best;
  };
}

