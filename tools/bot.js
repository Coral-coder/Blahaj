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
      if (!o.noWalk) { const w0 = walk(wx, wz, 0.25); if (w0 !== true) return 'walk ' + w0; } // noWalk: jump in from where you stand
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
    // the Moth Queen: wait on a rafter at (sx, sz); when she passes underneath, drop and belly-flop her; bounce back up
    const bossStomp = (sx, sz, o) => {
      for (let t = 0; t < (o.max || 60); t += step) {
        const b = g.enemies.find((e) => e.type === 'boss' && e.alive);
        if (!b) { stop(); return true; }
        if (g.state !== 'play') return 'state:' + g.state;
        const bh = Math.hypot(b.pos.x - P.pos.x, b.pos.z - P.pos.z);
        if (P.grounded && b.inv <= 0 && bh < (o.trigger || 3.4) && b.pos.y < P.pos.y - 1.5) {
          const hp0 = b.hp; tick(['Space', 'KeyW'], ['Space']);
          for (let k = 0; k < 3; k += step) {
            face(b.pos.x, b.pos.z);
            const press = (hd(b.pos.x, b.pos.z) < 1.4 && P.vel.y < 0 && !P.pound) ? ['KeyC'] : [];
            tick(hd(b.pos.x, b.pos.z) > 0.3 ? ['KeyW'] : [], press);
            if (b.hp < hp0 || P.grounded) break;
          }
          let usedD = false;
          for (let k = 0; k < 4 && b.hp < hp0; k += step) { // bounced off her: glide back to the rafter
            face(sx, sz);
            const keys = hd(sx, sz) > 0.25 ? ['KeyW'] : []; const press = [];
            if (!usedD && P.vel.y < 0 && P.pos.y < 9.6) { press.push('Space'); usedD = true; }
            if (usedD && P.vel.y < 0) keys.push('Space');
            tick(keys, press);
            if (P.grounded && k > 0.2) break;
          }
          if (!b.alive) { stop(); return true; }
          if (P.pos.y < 2) return 'fell, hp left ' + b.hp + ' ' + where();
        } else { face(sx, sz); tick(hd(sx, sz) > 0.3 ? ['KeyW'] : []); }
      }
      return 'timeout';
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
    // breadth-first search over open floor (8-way, 0.5 grid); returns the next waypoint toward (tx, tz)
    const R = g.ch.room, S = 0.5, NX = Math.ceil((R.x1 - R.x0) / S), NZ = Math.ceil((R.z1 - R.z0) / S);
    const freeC = new Map(), cx = (x) => Math.max(0, Math.min(NX - 1, Math.floor((x - R.x0) / S))), cz = (z) => Math.max(0, Math.min(NZ - 1, Math.floor((z - R.z0) / S)));
    const isFree = (i, j) => { const k = i * NZ + j; if (!freeC.has(k)) freeC.set(k, g.floorFree(R.x0 + (i + 0.5) * S, R.z0 + (j + 0.5) * S, 0.5)); return freeC.get(k); };
    const nextStep = (tx, tz) => {
      const si = cx(P.pos.x), sj = cz(P.pos.z), gi = cx(tx), gj = cz(tz);
      const prev = new Int32Array(NX * NZ).fill(-1), q = [si * NZ + sj]; prev[q[0]] = q[0];
      let found = -1;
      for (let h = 0; h < q.length; h++) {
        const k = q[h], i = (k / NZ) | 0, j = k % NZ;
        if (Math.abs(i - gi) <= 1 && Math.abs(j - gj) <= 1) { found = k; break; }
        for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]) {
          const a = i + di, b = j + dj; if (a < 0 || b < 0 || a >= NX || b >= NZ) continue;
          const n = a * NZ + b; if (prev[n] !== -1 || !isFree(a, b)) continue;
          if (di && dj && (!isFree(i + di, j) || !isFree(i, j + dj))) continue; // no corner cutting
          prev[n] = k; q.push(n);
        }
      }
      if (found < 0) return [tx, tz];
      let k = found, steps = 0; const path = [];
      while (prev[k] !== k && steps++ < 4000) { path.push(k); k = prev[k]; }
      const w = path[Math.max(0, path.length - 3)] ?? found; // a couple of cells ahead
      return path.length < 3 ? [tx, tz] : [R.x0 + (((w / NZ) | 0) + 0.5) * S, R.z0 + ((w % NZ) + 0.5) * S];
    };
    // walk somewhere over open floor, finding a way round furniture
    const go = (x, z, tol = 0.35, max = 15) => {
      for (let t = 0; t < max; t += step) {
        if (g.state === 'respawning') { tick([]); continue; }
        if (g.state !== 'play') return 'state:' + g.state;
        if (hd(x, z) < tol) { stop(); return true; }
        const [wx, wz] = nextStep(x, z); face(wx, wz); tick(['KeyW']);
      }
      return 'go timeout ' + where();
    };
    // hunt down every nightmare on the floor: close in, jump, and come down on it (belly flop if we can)
    const poof = (o = {}) => {
      const left = () => g.enemies.filter((e) => e.type === 'shadow' && e.alive && e.doomT === undefined);
      if (!left().length) return true; // nothing on the floor here
      const x0 = P.pos.x, z0 = P.pos.z, y0 = P.pos.y;
      const back = () => { // then find our way back to where the hunt started
        for (let t = 0; t < 15 && hd(x0, z0) > (y0 > 0.3 ? 1.6 : 0.4); t += step) {
          if (g.state !== 'play') return 'state:' + g.state;
          const [wx, wz] = nextStep(x0, z0); face(wx, wz); tick(['KeyW']);
        }
        stop();
        if (y0 > 0.3) jump(x0, y0, z0, { double: !!g.ab.doubleJump });
        return hd(x0, z0) < 1.2 ? true : 'back ' + where();
      };
      let lastD = 1e9, stuckT = 0;
      for (let t = 0; t < (o.max || 60); t += step) {
        if (g.state === 'respawning') { tick([]); continue; }
        if (g.state !== 'play') return 'state:' + g.state;
        const all = left();
        if (!all.length) { for (let k = 0; k < 2.5 && g.enemies.some((e) => e.alive && e.doomT !== undefined); k += step) tick([]); stop(); return back(); }
        const e = all.sort((a, b) => hd(a.pos.x, a.pos.z) - hd(b.pos.x, b.pos.z))[0];
        const d = hd(e.pos.x, e.pos.z);
        stuckT = d > lastD - 0.004 ? stuckT + step : 0; lastD = d;
        if (P.grounded && (d < 2.6 || stuckT > 1.5)) {
          // leap at it and steer onto it on the way down
          stuckT = 0; lastD = 1e9;
          tick(['KeyW', 'Space'], ['Space']);
          let usedD = false, flopped = false;
          for (let k = 0; k < 3; k += step) {
            if (g.state !== 'play' || !e.alive) break;
            face(e.pos.x, e.pos.z);
            const dd = hd(e.pos.x, e.pos.z), keys = dd > 0.25 ? ['KeyW'] : [], press = [];
            if (k < 0.25) keys.push('Space');
            if (g.ab.doubleJump && !usedD && P.vel.y < 1.0 && dd > 1.2) { press.push('Space'); usedD = true; }
            if (g.ab.flop && !flopped && P.vel.y < 0 && dd < 2.0) { press.push('KeyC'); flopped = true; }
            tick(keys, press);
            if (P.grounded && k > 0.15) break;
          }
          stop(4);
          if (o.trace !== false) log.push(`  leap at ${f2(e.pos.x)},${f2(e.pos.z)} -> ${e.alive ? 'missed' : 'poof'} ${where()} comfort=${Math.round(g.comfort)} left=${left().length}`);
          continue;
        }
        const [wx, wz] = nextStep(e.pos.x, e.pos.z); face(wx, wz); tick(['KeyW']);
      }
      return `${left().length} nightmares left ${where()}`;
    };
    for (const w of route) {
      if (w.snapNow) continue;
      let r;
      if (w[0] === 'walk') r = walk(w[1], w[2], w[3]);
      else if (w[0] === 'jump') r = jump(w[1], w[2], w[3], w[4]);
      else if (w[0] === 'wait') { for (let t = 0; t < w[1]; t += step) tick([]); r = true; }
      else if (w[0] === 'knots') r = knots();
      else if (w[0] === 'poof') r = poof(w[1] || {});
      else if (w[0] === 'go') r = go(w[1], w[2], w[3]);
      else if (w[0] === 'boss') r = bossStomp(w[1], w[2], w[3] || {});
      else if (w[0] === 'updraft') r = updraft(w[1], w[2], w[3], w[4], w[5], w[6] || {});
      else if (w[0] === 'waitClear') { // ['waitClear', x, y, z, r]: until no nightmare is within r of the point (time a spider)
        r = 'never clear';
        let clearT = 0;
        for (let t = 0; t < 12; t += step) {
          const near = g.enemies.some((e) => e.alive && e.pos && Math.hypot(e.pos.x - w[1], e.pos.y - w[2], e.pos.z - w[3]) < w[4]);
          clearT = near ? 0 : clearT + step;
          if (clearT > (w[5] || 0.15) && !near) { r = true; break; }
          tick([]);
        }
      }
      else if (w[0] === 'waitMover') { // ['waitMover', x, y, z, r]: until a moving platform's top centre is near (x, y, z)
        r = 'mover never came';
        for (let t = 0; t < 20; t += step) {
          const near = g.movers.some((m) => m.solids.some((s) => Math.hypot((s.min.x + s.max.x) / 2 - w[1], s.max.y - w[2], (s.min.z + s.max.z) / 2 - w[3]) < (w[4] || 0.6)));
          if (near) { r = true; break; }
          tick([]);
        }
      }
      log.push(`${r === true ? 'ok  ' : r === 'state:won' ? 'won ' : 'FAIL'} ${JSON.stringify(w)} -> ${r === true ? where() : r} comfort=${Math.round(g.comfort)}`);
      if (r === 'state:won') return { ok: true, log, minComfort, state: g.state, mode: B.mode, time: f2(g.stats.time) };
      if (r !== true) return { ok: false, log, minComfort, state: g.state };
    }
    return { ok: true, log, minComfort, state: g.state, mode: B.mode, time: f2(g.stats.time) };
  },
};
