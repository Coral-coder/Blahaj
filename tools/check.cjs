// Quick sanity check: render 70 s of a theme offline and print the song's map
// (section, bar, chord, cadence) as the engine reports it, bar by bar.
const { chromium } = require('playwright-core');
const fs = require('fs'), path = require('path');
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--no-sandbox'] });
  const p = await b.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.setContent('<html><body></body></html>');
  await p.addScriptTag({ content: fs.readFileSync(path.join(__dirname, '..', 'dist', 'lab.js'), 'utf8') });
  const theme = process.env.THEME || 'edge';
  const r = await p.evaluate(async (theme) => {
    const { createMusic } = window.__engine; const ctx = new OfflineAudioContext(2, 22050 * 70, 22050);
    const m = createMusic(ctx, ctx.destination); const rows = [];
    m.start(theme); m.stop(); m.setLayers(5);
    // walk the song step by step through renderUntil's scheduler, logging every bar
    let lastBar = '';
    m.renderUntil(64, theme, null, (t) => { const i = m.info(); const key = i.section + i.phrase + i.bar; if (key !== lastBar && i.bar) { lastBar = key; rows.push(`${i.section.padEnd(2)} bar ${i.bar} ${i.meter} ${i.key.padEnd(9)} ${String(i.roman).padEnd(4)} ${String(i.chord).padEnd(5)} ${i.cadence}`); } return [0.5, 0, null]; });
    return rows;
  }, theme);
  console.log(r.slice(0, 40).join('\n')); console.log(errs.length ? errs.join('\n') : 'no errors');
  await b.close();
})();
