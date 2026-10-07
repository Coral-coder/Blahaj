// Verifies every chapter's goal and starfish are reachable with the moves
// the player has in that chapter, using the game's real colliders and jump
// physics.   node tools/check-levels.js
import { CFG } from '../src/config.js';
import { CHAPTERS } from '../src/chapters.js';
import { expand, roomBoxes } from '../src/prefabs.js';
import { makeReach } from './reach.js';
const maxReach = makeReach(CFG);
const COMFORT = 0.78;
const SKIP = /^(wall|ceiling|glass|doorStop)|deskLeg|chairLeg|tv$|gate|lampPole|firePillar|fireBack|banister/;

function gap(a, b) {
  const dx = Math.max(0, a.min[0] - b.max[0], b.min[0] - a.max[0]);
  const dz = Math.max(0, a.min[2] - b.max[2], b.min[2] - a.max[2]);
  return Math.hypot(dx, dz);
}
function nodesFor(ch) {
  const boxes = [...roomBoxes(ch.room), ...ch.props.flatMap((p) => {
    const bs = expand(p);
    if (!p.move) return bs;
    // a moving prop counts at every corner of its path
    return p.move.path.flatMap(([x, z]) => bs.map((b) => {
      const dx = x - p.x, dz = z - p.z;
      return Object.assign({}, b, { min: [b.min[0] + dx, b.min[1], b.min[2] + dz], max: [b.max[0] + dx, b.max[1], b.max[2] + dz] });
    }));
  })];
  return boxes.filter((b) => !SKIP.test(b.tag) && b.type !== 'hazard').map((b, i) => Object.assign({ id: i, top: b.max[1] }, b));
}
function canJump(a, b, ab) {
  const g = gap(a, b), h = b.top - a.top;
  const vys = [CFG.jump];
  if (a.type === 'bounce') vys.push(ab.flop ? CFG.superBounce : CFG.bounce);
  return vys.some((vy) => { const r = maxReach(h + 0.25, ab, vy); return r > 0 && g <= r * COMFORT; });
}
function reach(ch, ab) {
  const nodes = nodesFor(ch);
  const [sx, sy, sz] = ch.spawn;
  const start = nodes.filter((n) => sx >= n.min[0] && sx <= n.max[0] && sz >= n.min[2] && sz <= n.max[2] && n.top <= sy + 0.9).sort((a, b) => b.top - a.top)[0];
  const seen = new Set([start.id]), q = [start];
  while (q.length) {
    const a = q.shift();
    for (const b of nodes) if (!seen.has(b.id) && canJump(a, b, ab)) { seen.add(b.id); q.push(b); }
  }
  return { nodes, seen };
}
function pointOK(pt, nodes, seen, ab) {
  const t = { min: [pt[0] - 0.5, 0, pt[2] - 0.5], max: [pt[0] + 0.5, 0, pt[2] + 0.5], top: pt[1] - 1.0 };
  return nodes.some((n) => seen.has(n.id) && ((gap(n, t) === 0 && pt[1] >= n.top && pt[1] - n.top <= 1.4) || canJump(n, t, ab)));
}
// furniture that overlaps other furniture makes the player jitter: flag it
function overlaps(ch) {
  const bs = ch.props.filter((p) => !p.move).flatMap(expand).filter((b) => b.type !== 'hazard');
  const out = [];
  for (let i = 0; i < bs.length; i++) for (let j = i + 1; j < bs.length; j++) {
    const a = bs[i], b = bs[j];
    if (a.prefab === b.prefab) continue;
    const ov = [0, 1, 2].every((k) => Math.min(a.max[k], b.max[k]) - Math.max(a.min[k], b.min[k]) > 0.05);
    if (ov) out.push(`${a.tag}(${a.prefab.type}) x ${b.tag}(${b.prefab.type})`);
  }
  return out;
}
let fails = 0;
CHAPTERS.forEach((ch, i) => {
  const ab = ch.abilities;
  const { nodes, seen } = reach(ch, ab);
  const goal = pointOK([ch.goal.x, ch.goal.y + 0.6, ch.goal.z], nodes, seen, ab);
  const ted = ch.starfish.map((t) => pointOK(t, nodes, seen, ab));
  let need = '';
  if (ch.newAbility) {
    const ab2 = Object.assign({}, ab); delete ab2[ch.newAbility];
    const r2 = reach(ch, ab2);
    const g2 = pointOK([ch.goal.x, ch.goal.y + 0.6, ch.goal.z], r2.nodes, r2.seen, ab2);
    const t2 = ch.starfish.map((t) => pointOK(t, r2.nodes, r2.seen, ab2)).filter(Boolean).length;
    need = `  without ${ch.newAbility}: goal ${g2 ? 'reachable' : 'blocked'}, starfish ${t2}/${ch.starfish.length}`;
  }
  const ov = overlaps(ch);
  if (ov.length) console.log('   overlapping furniture:', ov.join('; '));
  const ok = goal && ted.every(Boolean) && !ov.length;
  if (!ok) fails++;
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${i + 1}. ${ch.title} goal:${goal} starfish:${ted.map((x) => (x ? '⭐' : '✗')).join('')}${need}`);
});
process.exit(fails ? 1 : 0);
