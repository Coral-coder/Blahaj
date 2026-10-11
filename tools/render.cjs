// Render a theme offline to a WAV, with the energy rising and falling the way a level does:
//   THEME=attic SECS=90 OUT=attic.wav npm run render
const { chromium } = require('playwright-core');
const fs = require('fs'), path = require('path');
(async () => {
  const theme = process.env.THEME || 'edge', secs = +(process.env.SECS || 90), out = process.env.OUT || `${theme}.wav`;
  const b = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--no-sandbox'] });
  const p = await b.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.setContent('<html><body></body></html>');
  await p.addScriptTag({ content: fs.readFileSync(path.join(__dirname, '..', 'dist', 'lab.js'), 'utf8') });
  const b64 = await p.evaluate(async ([theme, secs]) => {
    const { createMusic } = window.__engine, SR = 32000, ctx = new OfflineAudioContext(2, SR * secs, SR), g = ctx.createGain(); g.gain.value = 0.3; g.connect(ctx.destination);
    const m = createMusic(ctx, g);
    // calm -> exploring -> action -> boss -> cleared (and the way out opens two-thirds in)
    const E = (t) => { const k = t / secs; return k < 0.2 ? 0.1 : k < 0.4 ? 0.35 : k < 0.6 ? 0.65 : k < 0.8 ? 0.92 : 0.15; };
    const T = (t) => { const k = t / secs; return k >= 0.6 && k < 0.8 ? 0.8 : 0; };
    m.renderUntil(secs - 3, theme, (t) => [Math.min(1, t / secs * 1.4), t > secs * 0.7], (t) => [E(t), T(t), null]);
    const buf = await ctx.startRendering(), L = buf.getChannelData(0), R = buf.getChannelData(1), n = L.length;
    let peak = 0.01; for (let i = 0; i < n; i++) peak = Math.max(peak, Math.abs(L[i]), Math.abs(R[i]));
    const pcm = new Int16Array(n * 2); for (let i = 0; i < n; i++) { pcm[i * 2] = (L[i] / peak) * 0.9 * 32767; pcm[i * 2 + 1] = (R[i] / peak) * 0.9 * 32767; }
    const by = new Uint8Array(pcm.buffer); let s = ''; for (let i = 0; i < by.length; i += 0x8000) s += String.fromCharCode.apply(null, by.subarray(i, i + 0x8000));
    return btoa(s);
  }, [theme, secs]);
  const data = Buffer.from(b64, 'base64'), h = Buffer.alloc(44);
  h.write('RIFF', 0); h.writeUInt32LE(36 + data.length, 4); h.write('WAVEfmt ', 8); h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(2, 22);
  h.writeUInt32LE(32000, 24); h.writeUInt32LE(128000, 28); h.writeUInt16LE(4, 32); h.writeUInt16LE(16, 34); h.write('data', 36); h.writeUInt32LE(data.length, 40);
  fs.writeFileSync(out, Buffer.concat([h, data]));
  console.log(`wrote ${out} (${secs}s)`, errs.length ? errs.join('\n') : '');
  await b.close();
})();
