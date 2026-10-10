// Keyboard, mouse, gamepad and touch input folded into one state object.
export class Input {
  constructor(canvas) {
    this.keys = new Set();
    this.pressed = new Set(); // edge-triggered this frame
    this.camDX = 0; this.camDY = 0;
    this.zoom = 1; // camera zoom this frame (multiplies the distance): pinch, scroll wheel or +/-
    this.touch = { x: 0, y: 0, jump: false, dash: false, flop: false };
    this.pad = null;
    this.prevPad = {};
    addEventListener('keydown', (e) => {
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
      if (!this.keys.has(e.code)) this.pressed.add(e.code);
      this.keys.add(e.code);
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    canvas.addEventListener('wheel', (e) => { e.preventDefault(); this.zoom *= Math.exp(Math.max(-60, Math.min(60, e.deltaY)) * 0.004); }, { passive: false });
    addEventListener('blur', () => this.keys.clear());
    let dragging = false, lx = 0, ly = 0;
    canvas.addEventListener('mousedown', (e) => { dragging = true; lx = e.clientX; ly = e.clientY; });
    addEventListener('mouseup', () => (dragging = false));
    addEventListener('mousemove', (e) => {
      if (document.pointerLockElement === canvas) { this.camDX += e.movementX; this.camDY += e.movementY; return; }
      if (!dragging) return;
      this.camDX += e.clientX - lx; this.camDY += e.clientY - ly;
      lx = e.clientX; ly = e.clientY;
    });
    this.setupTouch();
  }

  setupTouch() {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const ui = document.getElementById('touch');
    if (!isTouch || !ui) return;
    this.isTouch = true;
    ui.classList.remove('hidden');
    const stick = document.getElementById('stick'), knob = document.getElementById('knob');
    let stickId = null, cx = 0, cy = 0, camId = null, clx = 0, cly = 0;
    const R = 50;
    stick.addEventListener('touchstart', (e) => {
      const t = e.changedTouches[0]; stickId = t.identifier;
      const r = stick.getBoundingClientRect(); cx = r.left + r.width / 2; cy = r.top + r.height / 2;
      e.preventDefault();
    }, { passive: false });
    addEventListener('touchmove', (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === stickId) {
          let dx = t.clientX - cx, dy = t.clientY - cy;
          const l = Math.hypot(dx, dy);
          if (l > R) { dx = (dx / l) * R; dy = (dy / l) * R; }
          knob.style.transform = `translate(${dx}px, ${dy}px)`;
          this.touch.x = dx / R; this.touch.y = dy / R;
        } else if (t.identifier === camId) {
          this.camDX += (t.clientX - clx) * 1.4; this.camDY += (t.clientY - cly) * 1.4;
          clx = t.clientX; cly = t.clientY;
        }
      }
    }, { passive: true });
    const end = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === stickId) { stickId = null; this.touch.x = this.touch.y = 0; knob.style.transform = ''; }
        if (t.identifier === camId) camId = null;
      }
    };
    addEventListener('touchend', end); addEventListener('touchcancel', end);
    // fingers on the game view itself: one drags the camera round, two pinch to zoom
    const fingers = new Map();
    let pinch = 0;
    const spread = () => { const [a, b] = [...fingers.values()]; return Math.hypot(a.x - b.x, a.y - b.y); };
    const canvasEl = document.getElementById('game');
    canvasEl.addEventListener('touchstart', (e) => {
      for (const t of e.changedTouches) fingers.set(t.identifier, { x: t.clientX, y: t.clientY });
      if (fingers.size >= 2) { camId = null; pinch = spread(); return; }
      const t = e.changedTouches[0];
      if (t.clientX > innerWidth * 0.4) { camId = t.identifier; clx = t.clientX; cly = t.clientY; }
    }, { passive: true });
    canvasEl.addEventListener('touchmove', (e) => {
      e.preventDefault();
      for (const t of e.changedTouches) if (fingers.has(t.identifier)) fingers.set(t.identifier, { x: t.clientX, y: t.clientY });
      if (fingers.size >= 2 && pinch > 0) { const d = spread(); if (d > 10) { this.zoom *= pinch / d; pinch = d; } } // fingers apart: zoom in
    }, { passive: false });
    const lift = (e) => { for (const t of e.changedTouches) fingers.delete(t.identifier); if (fingers.size < 2) pinch = 0; };
    canvasEl.addEventListener('touchend', lift); canvasEl.addEventListener('touchcancel', lift);
    const btn = (id, key) => {
      const el = document.getElementById(id);
      el.addEventListener('touchstart', (e) => { e.preventDefault(); if (!this.touch[key]) this.pressed.add('touch-' + key); this.touch[key] = true; el.classList.add('down'); }, { passive: false });
      el.addEventListener('touchend', (e) => { e.preventDefault(); this.touch[key] = false; el.classList.remove('down'); }, { passive: false });
    };
    btn('tJump', 'jump'); btn('tDash', 'dash'); btn('tFlop', 'flop');
  }

  pollPad() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    const p = pads && [...pads].find((x) => x && x.connected);
    this.pad = p || null;
    if (!p) return;
    const b = (i) => !!(p.buttons[i] && p.buttons[i].pressed);
    const map = { jump: b(0), dash: b(2) || b(5) || b(7), flop: b(1) || b(4) || b(6), pause: b(9) };
    for (const k in map) { if (map[k] && !this.prevPad[k]) this.pressed.add('pad-' + k); }
    this.prevPad = map;
    const dz = (v) => (Math.abs(v) < 0.18 ? 0 : v);
    this.camDX += dz(p.axes[2] || 0) * 12;
    this.camDY += dz(p.axes[3] || 0) * 8;
  }

  // movement vector in input space: x right, y forward
  move() {
    let x = 0, y = 0;
    const k = this.keys;
    if (k.has('KeyW') || k.has('ArrowUp')) y += 1;
    if (k.has('KeyS') || k.has('ArrowDown')) y -= 1;
    if (k.has('KeyA') || k.has('ArrowLeft')) x -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) x += 1;
    x += this.touch.x; y -= this.touch.y;
    if (this.pad) {
      const ax = this.pad.axes[0] || 0, ay = this.pad.axes[1] || 0;
      if (Math.hypot(ax, ay) > 0.18) { x += ax; y -= ay; }
    }
    const l = Math.hypot(x, y);
    if (l > 1) { x /= l; y /= l; }
    return { x, y };
  }

  jumpHeld() { return this.keys.has('Space') || this.touch.jump || !!this.prevPad.jump; }
  jumpPressed() { return this.pressed.has('Space') || this.pressed.has('touch-jump') || this.pressed.has('pad-jump'); }
  dashPressed() { return this.pressed.has('ShiftLeft') || this.pressed.has('ShiftRight') || this.pressed.has('KeyK') || this.pressed.has('touch-dash') || this.pressed.has('pad-dash'); }
  flopPressed() { return this.pressed.has('KeyC') || this.pressed.has('ControlLeft') || this.pressed.has('KeyL') || this.pressed.has('touch-flop') || this.pressed.has('pad-flop'); }
  camTurn() { let t = 0; if (this.keys.has('KeyQ')) t -= 1; if (this.keys.has('KeyE')) t += 1; return t; }
  endFrame() { this.pressed.clear(); this.camDX = 0; this.camDY = 0; this.zoom = 1; }
}
