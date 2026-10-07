// Verifies every level is beatable with only the abilities unlocked before it,
// and that every starfish is reachable. Uses the game's real physics numbers.
//   node tools/check-levels.js
import { CFG } from '../src/config.js';
import { LEVELS } from '../src/levels.js';
import { makeReach } from './reach.js';
const maxReach = makeReach(CFG);
const COMFORT = 0.78; // humans don't jump frame-perfectly

function abilitiesFor(i) {
  const ab = {};
  for (const [k, lvl] of Object.entries(CFG.unlocks)) if (lvl < i) ab[k] = true;
  return ab;
}
function rectGap(a, b) {
  const dx = Math.max(0, Math.abs(a.x - b.x) - (a.w + b.w) / 2);
  const dz = Math.max(0, Math.abs(a.z - b.z) - (a.d + b.d) / 2);
  return Math.hypot(dx, dz);
}
function samples(p) {
  if (!p.move) return [p];
  const out = [];
  for (let k = 0; k < 16; k++) {
    const s = Math.sin((k / 16) * Math.PI * 2);
    out.push(Object.assign({}, p, { x: p.x + (p.move.dx || 0) * s, y: p.y + (p.move.dy || 0) * s, z: p.z + (p.move.dz || 0) * s }));
  }
  return out;
}
function canJump(from, to, ab) {
  let ok = false;
  const startVys = [CFG.jump];
  if (from.type === 'bounce') startVys.push(ab.flop ? CFG.superBounce : CFG.bounce, CFG.bounce);
  if (from.air) startVys.push(0);
  for (const a of samples(from)) for (const b of samples(to)) {
    const gap = rectGap(a, b);
    const h = b.y - (from.air ? from.y1 : a.y);
    for (const vy of startVys) {
      const r = maxReach(h + 0.25, ab, vy);
      if (r > 0 && gap <= r * COMFORT) ok = true;
    }
    if (ok) return true;
  }
  return false;
}
function nodesFor(L) {
  const nodes = L.platforms.map((p, i) => Object.assign({ id: 'p' + i }, p));
  L.crates.forEach((c, i) => nodes.push({ id: 'crate' + i, x: c.x, y: c.y + 1, z: c.z, w: 1, d: 1, crate: c }));
  L.updrafts.forEach((u, i) => nodes.push({ id: 'up' + i, x: u.x, y: u.y0, y1: u.y1, z: u.z, w: u.r * 2, d: u.r * 2, air: true }));
  return nodes;
}
function reachable(L, ab) {
  const nodes = nodesFor(L);
  const spawn = nodes.find((n) => !n.air && Math.abs(n.x - L.spawn[0]) <= n.w / 2 && Math.abs(n.z - L.spawn[2]) <= n.d / 2 && Math.abs(n.y - L.spawn[1]) < 0.1);
  const seen = new Set([spawn.id]);
  const q = [spawn];
  while (q.length) {
    const a = q.shift();
    for (const b of nodes) {
      if (seen.has(b.id)) continue;
      // entering an updraft only needs you to reach its column at any height
      const target = b.air ? Object.assign({}, b, { y: Math.min(b.y, b.y1 - 3) }) : b;
      const fromAir = a.air;
      let ok;
      if (b.air) {
        // can fall into it from above, or jump into its lower part
        const g = rectGap(a, b);
        ok = (a.air ? a.y1 : a.y) >= b.y ? g <= maxReach(-0.5, ab, fromAir ? 0 : CFG.jump) * COMFORT || g <= maxReach(b.y - (a.air ? a.y1 : a.y), ab, fromAir ? 0 : CFG.jump) * COMFORT : canJump(a, target, ab);
      } else ok = canJump(a, target, ab);
      if (ok) { seen.add(b.id); q.push(b); }
    }
  }
  return { nodes, seen };
}
function pointReachable(pt, nodes, seen, ab, label) {
  // a collectible counts as a 1x1 pad you must touch, ~1 unit below its centre
  const tgt = { x: pt[0], y: pt[1] - 1.0, z: pt[2], w: 1, d: 1 };
  for (const n of nodes) {
    if (!seen.has(n.id)) continue;
    const onTop = !n.air && rectGap(n, tgt) === 0 && pt[1] - n.y <= 1.4 && pt[1] >= n.y;
    if (onTop || canJump(n, tgt, ab)) return true;
    if (n.air && rectGap(n, tgt) === 0 && pt[1] <= n.y1 + 1.5) return true;
  }
  return false;
}

let failures = 0;
LEVELS.forEach((L, i) => {
  const ab = abilitiesFor(i);
  const { nodes, seen } = reachable(L, ab);
  const goalOK = pointReachable(L.goal.map((v, k) => (k === 1 ? v + 1 : v)), nodes, seen, ab);
  const stars = [...L.stars, ...L.crates.filter((c) => c.item === 'star').map((c) => [c.x, c.y + 1, c.z])];
  const starOK = stars.map((s) => pointReachable(s, nodes, seen, ab));
  // which platforms are unreachable (informational)
  const lost = nodes.filter((n) => !seen.has(n.id)).map((n) => n.id + '(' + (n.style || (n.crate ? 'crate' : 'updraft')) + ')');
  // does the newest ability matter? check without it
  const newest = Object.entries(CFG.unlocks).find(([, lvl]) => lvl === i - 1);
  let gate = '';
  if (newest) {
    const ab2 = Object.assign({}, ab); delete ab2[newest[0]];
    const r2 = reachable(L, ab2);
    const g2 = pointReachable(L.goal.map((v, k) => (k === 1 ? v + 1 : v)), r2.nodes, r2.seen, ab2);
    gate = `  needs ${newest[0]}: ${g2 ? 'NO (goal reachable without it)' : 'yes'}`;
  }
  const ok = goalOK && starOK.every(Boolean);
  if (!ok) failures++;
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${i + 1}. ${L.name} [${Object.keys(ab).join(',') || 'basic'}] goal:${goalOK} stars:${starOK.map((s) => (s ? '★' : '✗')).join('')}${gate}${lost.length ? '  unreachable: ' + lost.join(' ') : ''}`);
});
process.exit(failures ? 1 : 0);
