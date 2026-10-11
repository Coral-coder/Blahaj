// The Music Lab: play the engine on its own, steer it like the game would, and
// watch where the song is (section, bar, chord and cadence) as it plays.
import { createMusic, THEME_LIST, THEMES } from './music.js';

window.__engine = { createMusic, THEME_LIST, THEMES };
const TITLES = { edge: 'Off the Edge', downstairs: 'Downstairs', kitchen: 'The Kitchen', laundry: 'The Laundry Room', backyard: 'The Backyard', garage: 'The Garage', basement: 'Down in the Basement', stairs: 'The Big Stairs', hallway: 'The Hallway', bathroom: 'The Bathroom', parents: 'Mum and Dad’s Room', playroom: 'The Playroom', attic: 'The Attic', bed: 'Back to Bed' };
const $ = (id) => document.getElementById(id);
if ($('lab')) buildLab(); // (the tools load this headless, with no page to build)

function buildLab() {

  let ctx = null, out = null, m = null, playing = false, theme = 'edge';
  const sl = (id) => +$(id).value / 100;
  function ensure() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    out = ctx.createGain(); out.gain.value = 0.3;
    const lim = ctx.createDynamicsCompressor(); lim.threshold.value = -6; lim.ratio.value = 12; lim.attack.value = 0.003; lim.release.value = 0.25;
    out.connect(lim).connect(ctx.destination);
    m = createMusic(ctx, out);
  }
  function apply() {
    if (!m) return;
    m.setIntensity(sl('energy'), sl('mood')); m.setTempo(0.75 + sl('tempo') * 0.5); m.setDream(1 - sl('water') * 0.8);
    out.gain.setTargetAtTime(0.5 * sl('vol'), ctx.currentTime, 0.05);
    const L = +$('layers').value; m.setLayers(L < 0 ? null : L); $('layersOut').textContent = L < 0 ? 'follow progress' : L;
    if (L < 0) m.setProgress(sl('progress'), $('unlock').checked);
  }
  function play() { ensure(); ctx.resume(); apply(); m.start(theme); playing = true; $('play').textContent = '■ Stop'; }
  function stop() { if (m) m.stop(); playing = false; $('play').textContent = '▶ Play'; }

  // theme picker
  for (const id of THEME_LIST) { const o = document.createElement('option'); o.value = id; const t = THEMES[id]; o.textContent = `${TITLES[id]} · ${t.mode} · ${t.meter} · ${t.bpm} bpm`; $('theme').appendChild(o); }
  $('theme').onchange = (e) => { theme = e.target.value; if (playing) play(); };
  $('play').onclick = () => (playing ? stop() : play());
  for (const id of ['energy', 'mood', 'tempo', 'water', 'vol', 'layers', 'progress']) $(id).oninput = apply;
  $('unlock').onchange = apply;
  document.querySelectorAll('[data-accent]').forEach((b) => (b.onclick = () => m && m.accent(b.dataset.accent)));

  // the song map: 32 bars, AABA, lit up as it plays
  const map = $('map');
  ['A', 'A', "A'", "A'", 'B', 'B', 'A', 'A'].forEach((sec, p) => {
    const ph = document.createElement('div'); ph.className = 'phrase'; ph.innerHTML = `<span>${sec} · ${p % 2 ? 'answer' : 'question'}</span>`;
    for (let b = 0; b < 4; b++) { const c = document.createElement('i'); c.id = `bar${p * 4 + b}`; ph.appendChild(c); }
    map.appendChild(ph);
  });
  let lastCell = null;
  function frame() {
    requestAnimationFrame(frame);
    if (!m || !playing) return;
    const i = m.info(); if (!i || !i.bar) return;
    $('rKey').textContent = i.key; $('rMeter').textContent = i.meter; $('rSec').textContent = i.section;
    $('rBar').textContent = `${i.bar} / 8`; $('rBeat').textContent = i.beat;
    $('rChord').textContent = i.chord; $('rRoman').textContent = i.roman;
    $('rCad').textContent = i.cadence === 'PAC' ? 'Perfect authentic cadence (V7 → I)' : i.cadence === 'HC' ? 'Half cadence (ends on V)' : '';
    $('rLayer').textContent = i.layer; $('rEnergy').textContent = Math.round(i.energy * 100) + '%';
    const cell = $(`bar${i.phrase * 4 + ((i.bar - 1) % 4)}`);
    if (cell !== lastCell) { if (lastCell) lastCell.classList.remove('on'); cell.classList.add('on'); cell.textContent = i.roman; lastCell = cell; }
  }
  requestAnimationFrame(frame);

  // render a minute of the current settings to a WAV file
  $('wav').onclick = async () => {
    $('wav').textContent = 'Rendering…';
    const SR = 44100, secs = 64, oc = new OfflineAudioContext(2, SR * secs, SR), g = oc.createGain(); g.gain.value = 0.3; g.connect(oc.destination);
    const om = createMusic(oc, g); const L = +$('layers').value;
    om.setTempo(0.75 + sl('tempo') * 0.5); om.setDream(1 - sl('water') * 0.8); om.setLayers(L < 0 ? null : L);
    om.renderUntil(secs - 3, theme, L < 0 ? () => [sl('progress'), $('unlock').checked] : null, () => [sl('energy'), sl('mood'), null]);
    const buf = await oc.startRendering(), a = buf.getChannelData(0), b = buf.getChannelData(1), n = a.length;
    let peak = 0.01; for (let k = 0; k < n; k++) peak = Math.max(peak, Math.abs(a[k]), Math.abs(b[k]));
    const view = new DataView(new ArrayBuffer(44 + n * 4)), w = (o, s) => [...s].forEach((c, k) => view.setUint8(o + k, c.charCodeAt(0)));
    w(0, 'RIFF'); view.setUint32(4, 36 + n * 4, true); w(8, 'WAVEfmt '); view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, 2, true);
    view.setUint32(24, SR, true); view.setUint32(28, SR * 4, true); view.setUint16(32, 4, true); view.setUint16(34, 16, true); w(36, 'data'); view.setUint32(40, n * 4, true);
    for (let k = 0; k < n; k++) { view.setInt16(44 + k * 4, (a[k] / peak) * 0.9 * 32767, true); view.setInt16(46 + k * 4, (b[k] / peak) * 0.9 * 32767, true); }
    const url = URL.createObjectURL(new Blob([view], { type: 'audio/wav' })), link = document.createElement('a');
    link.href = url; link.download = `blahaj-${theme}.wav`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 5000);
    $('wav').textContent = '⬇ Save a minute as WAV';
  };
}
