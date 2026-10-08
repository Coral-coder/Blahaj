// In-page playtest bot (injected by tools/playtest.cjs). It plays through the
// real input system: holds keys, steers the camera, jumps, glides, belly flops.
// In-page bot: plays the real game through its input system, one simulated frame at a time.
window.__bot = {
  run(route) {
    const B = window.__blahaj, g = B.game, inp = g.input, P = g.p, step = 1 / 60;
    const log = []; let minComfort = 100;
    const tick = (keys, press) => {
      inp.keys.clear(); keys.forEach((k) => inp.keys.add(k)); (press || []).forEach((k) => inp.pressed.add(k));
      B.sim(step); minComfort = Math.min(minComfort, g.comfort);
    };
    const face = (tx, tz) => { g.cam.yaw = Math.atan2(-(tx - P.pos.x), -(tz - P.pos.z)); g.cam.idle = -1e9; };
    const hd = (x, z) => Math.hypot(x - P.pos.x, z - P.pos.z);
    const f2 = (v) => +v.toFixed(2);
    const where = () => `(${f2(P.pos.x)},${f2(P.pos.y)},${f2(P.pos.z)})`;
    const stop = (n = 12) => { for (let i = 0; i < n; i++) tick([]); };
    const walk = (x, z, tol = 0.3, max = 10) => {
      for (let t = 0; t < max; t += step) { if (g.state === 'respawning') { tick([]); continue; } if (g.state !== 'play') return 'state:' + g.state; face(x, z); if (hd(x, z) < tol) { stop(); return true; } tick(['KeyW']); }
      return false;
    };
    const jump = (x, y, z, o = {}) => {
      face(x, z);
      let usedD = false, usedDash = false, holdT = o.hold ?? 0.3, flopped = false;
      tick(['KeyW', 'Space'], ['Space']);
      let tb = 0, bounced = !o.via; // via: [x, z] of something bouncy to spring off first
      for (let t = 0; t < (o.max || 5); t += step) {
        if (g.state !== 'play') return 'state:' + g.state;
        if (!bounced && P.vel.y > 12 && t > 0.1) { bounced = true; usedD = false; tb = t; } // the bounce gives the double jump back
        const [tx, tz] = !bounced ? o.via : o.pre && t < o.pre[2] ? o.pre : [x, z]; // pre: [x, z, t] step out from under a shelf first
        face(tx, tz);
        const keys = [];
        const d = hd(tx, tz);
        if (d > (o.brake ?? 0.35) && !(o.up && (o.via ? bounced && t - tb < o.up : t < o.up))) keys.push('KeyW'); // up: rise straight first (clear an overhang)
        const press = [];
        holdT -= step;
        if (holdT > 0) keys.push('Space');
        if (o.double && !usedD && P.vel.y < (o.djAt ?? 1.5) && !P.grounded) { press.push('Space'); keys.push('Space'); usedD = true; holdT = 0.25; }
        if (o.via && !bounced) keys.push('Space'); // hold jump for the big bounce
        if (o.dash && usedD && !usedDash && P.vel.y < 0.5 && d > 2.5) { press.push('ShiftLeft'); usedDash = true; }
        if (o.dashNow && !usedDash && t > (o.dashAt ?? 0.1)) { press.push('ShiftLeft'); usedDash = true; } // dash straight off the jump
        if (o.glide && usedD && P.vel.y < 0 && holdT <= 0) keys.push('Space');
        if (o.flop && !flopped && !bounced && P.vel.y < 0 && d < 0.6) { press.push('KeyC'); flopped = true; }
        tick(keys, press);
        if (o.trace && Math.round(t / step) % 5 === 0) log.push('  t' + t.toFixed(2) + ' ' + where() + ' vy' + P.vel.y.toFixed(1) + (bounced ? ' B' : ''));
        if (P.grounded && t > 0.15 && bounced) {
          stop(6);
          const ok = P.pos.y > y - 0.4 && P.pos.y < y + 1.3 && hd(x, z) < 2.6;
          return ok ? true : `landed ${where()} wanted (${x},${y},${z})`;
        }
      }
      return 'timeout ' + where();
    };
    // ride an updraft: walk into it, jump, hold jump to float up to `rise`, then glide over to the target
    const updraft = (wx, wz, x, y, z, o) => {
      const w0 = walk(wx, wz, 0.25); if (w0 !== true) return 'walk ' + w0;
      tick(['Space'], ['Space']);
      let up = true;
      for (let t = 0; t < (o.max || 8); t += step) {
        if (g.state !== 'play') return 'state:' + g.state;
        if (up && P.pos.y >= (o.rise ?? y + 1.5)) up = false; // high enough: head for the target
        const [tx, tz] = up ? [wx, wz] : [x, z];
        face(tx, tz);
        const keys = up || P.pos.y > y + 0.6 ? ['Space'] : []; // let go of jump just before landing
        if (hd(tx, tz) > (up ? 0.15 : 0.35)) keys.push('KeyW');
        tick(keys);
        if (P.grounded && t > 0.3 && !up) { stop(6); const ok = P.pos.y > y - 0.4 && P.pos.y < y + 1.3 && hd(x, z) < 2.6; return ok ? true : `landed ${where()} wanted (${x},${y},${z})`; }
      }
      return 'timeout ' + where();
    };
    const knots = () => {
      for (let attempt = 0; attempt < 14 && g.knotsLeft > 0; attempt++) {
        const k = g.enemies.find((e) => e.type === 'knot' && e.alive);
        if (!k) break;
        // stand under it, jump twice, belly flop onto it from above
        for (let t = 0; t < 3 && hd(k.pos.x, k.pos.z) > 0.5; t += step) { face(k.pos.x, k.pos.z); tick(['KeyW']); }
        stop(4);
        tick(['Space'], ['Space']);
        let usedD = false;
        for (let t = 0; t < 3; t += step) {
          face(k.pos.x, k.pos.z);
          const keys = hd(k.pos.x, k.pos.z) > 0.25 ? ['KeyW', 'Space'] : ['Space'];
          const press = [];
          if (!usedD && P.vel.y < 1.2) { press.push('Space'); usedD = true; }
          if (usedD && P.pos.y + 0.45 > k.pos.y + 0.7 && !P.pound) press.push('KeyC');
          tick(keys, press);
          if (!k.alive || (P.grounded && t > 0.2)) break;
        }
        stop(20);
      }
      return g.knotsLeft === 0 ? true : `knots left ${g.knotsLeft}`;
    };
    for (const w of route) {
      if (w.snapNow) continue;
      let r;
      if (w[0] === 'walk') r = walk(w[1], w[2], w[3]);
      else if (w[0] === 'jump') r = jump(w[1], w[2], w[3], w[4]);
      else if (w[0] === 'wait') { for (let t = 0; t < w[1]; t += step) tick([]); r = true; }
      else if (w[0] === 'knots') r = knots();
      else if (w[0] === 'updraft') r = updraft(w[1], w[2], w[3], w[4], w[5], w[6] || {});
      else if (w[0] === 'waitMover') { // ['waitMover', x, y, z, r]: until a moving platform's top centre is near (x, y, z)
        r = 'mover never came';
        for (let t = 0; t < 20; t += step) {
          const near = g.movers.some((m) => m.solids.some((s) => Math.hypot((s.min.x + s.max.x) / 2 - w[1], s.max.y - w[2], (s.min.z + s.max.z) / 2 - w[3]) < (w[4] || 0.6)));
          if (near) { r = true; break; }
          tick([]);
        }
      }
      log.push(`${r === true ? 'ok  ' : 'FAIL'} ${JSON.stringify(w)} -> ${r === true ? where() : r} comfort=${Math.round(g.comfort)}`);
      if (r === 'state:won') return { ok: true, log, minComfort, state: g.state, mode: B.mode, time: f2(g.stats.time) };
      if (r !== true) return { ok: false, log, minComfort, state: g.state };
    }
    return { ok: true, log, minComfort, state: g.state, mode: B.mode, time: f2(g.stats.time) };
  },
};
