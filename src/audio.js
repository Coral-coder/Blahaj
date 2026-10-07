// Tiny Web Audio synth: all sound effects and the background tune are
// generated at runtime, so the game needs no audio files.

export const Audio = {
    ctx: null,
    master: null,
    musicGain: null,
    muted: false,
    musicTimer: null,
    _nextBar: 0,
    _barIndex: 0,

    init() {
      if (this.ctx) return;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.5;
      this.master.connect(this.ctx.destination);
      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = 0.35;
      this.musicGain.connect(this.master);
      try { localStorage.getItem('blahaj-muted') === '1' && this.setMuted(true); } catch (e) {}
    },

    resume() {
      if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
    },

    setMuted(m) {
      this.muted = m;
      if (this.master) this.master.gain.value = m ? 0 : 0.5;
      try { localStorage.setItem('blahaj-muted', m ? '1' : '0'); } catch (e) {}
    },

    toggleMute() { this.setMuted(!this.muted); return this.muted; },

    // --- primitive: a short enveloped oscillator -------------------------
    tone(freq, { type = 'sine', dur = 0.15, vol = 0.3, slide = 0, delay = 0, attack = 0.005 } = {}) {
      if (!this.ctx) return;
      const t0 = this.ctx.currentTime + delay;
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(freq, t0);
      if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t0 + dur);
      g.gain.setValueAtTime(0, t0);
      g.gain.linearRampToValueAtTime(vol, t0 + attack);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
      o.connect(g).connect(this.master);
      o.start(t0);
      o.stop(t0 + dur + 0.05);
    },

    noise({ dur = 0.2, vol = 0.2, delay = 0, freq = 800 } = {}) {
      if (!this.ctx) return;
      const t0 = this.ctx.currentTime + delay;
      const len = Math.floor(this.ctx.sampleRate * dur);
      const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
      const src = this.ctx.createBufferSource();
      src.buffer = buf;
      const f = this.ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = freq;
      const g = this.ctx.createGain();
      g.gain.value = vol;
      src.connect(f).connect(g).connect(this.master);
      src.start(t0);
    },

    // --- game sounds -----------------------------------------------------
    jump() { this.tone(300, { type: 'triangle', dur: 0.18, slide: 320, vol: 0.25 }); },
    doubleJump() { this.tone(420, { type: 'triangle', dur: 0.12, slide: 300, vol: 0.22 }); this.tone(640, { type: 'triangle', dur: 0.14, slide: 300, vol: 0.2, delay: 0.07 }); },
    land() { this.noise({ dur: 0.08, vol: 0.12, freq: 500 }); },
    collect(combo = 0) {
      const base = 660 * Math.pow(1.0595, Math.min(combo, 12));
      this.tone(base, { type: 'sine', dur: 0.1, vol: 0.2 });
      this.tone(base * 1.5, { type: 'sine', dur: 0.14, vol: 0.18, delay: 0.06 });
    },
    star() { [523, 659, 784, 1047, 1319].forEach((f, i) => this.tone(f, { type: 'triangle', dur: 0.28, vol: 0.22, delay: i * 0.08 })); },
    heart() { [392, 523, 659].forEach((f, i) => this.tone(f, { type: 'sine', dur: 0.25, vol: 0.2, delay: i * 0.09 })); },
    hurt() { this.tone(220, { type: 'square', dur: 0.25, slide: -150, vol: 0.12 }); this.noise({ dur: 0.15, vol: 0.1, freq: 400 }); },
    fall() { this.tone(500, { type: 'sine', dur: 0.6, slide: -420, vol: 0.18 }); },
    stomp() { this.tone(180, { type: 'square', dur: 0.12, slide: -100, vol: 0.12 }); this.tone(500, { type: 'triangle', dur: 0.15, slide: 300, vol: 0.18, delay: 0.05 }); },
    bounce() { this.tone(200, { type: 'sine', dur: 0.25, slide: 500, vol: 0.25 }); },
    dash() { this.noise({ dur: 0.22, vol: 0.15, freq: 1800 }); this.tone(700, { type: 'sawtooth', dur: 0.18, slide: -400, vol: 0.05 }); },
    pound() { this.tone(120, { type: 'square', dur: 0.3, slide: -60, vol: 0.18 }); this.noise({ dur: 0.3, vol: 0.25, freq: 300 }); },
    checkpoint() { [659, 880].forEach((f, i) => this.tone(f, { type: 'triangle', dur: 0.2, vol: 0.2, delay: i * 0.1 })); },
    crumble() { this.noise({ dur: 0.3, vol: 0.12, freq: 900 }); },
    win() { [523, 659, 784, 1047, 784, 1047, 1319].forEach((f, i) => this.tone(f, { type: 'triangle', dur: 0.35, vol: 0.22, delay: i * 0.12 })); },
    unlock() { [392, 494, 587, 784, 988].forEach((f, i) => this.tone(f, { type: 'sine', dur: 0.4, vol: 0.2, delay: i * 0.1 })); },
    click() { this.tone(900, { type: 'sine', dur: 0.05, vol: 0.12 }); },
    dogBark() { [0, 0.22].forEach((d) => { this.tone(330, { type: 'sawtooth', dur: 0.14, slide: -140, vol: 0.12, delay: d }); this.noise({ dur: 0.12, vol: 0.18, freq: 1200, delay: d }); }); },
    heartbeat() { this.tone(70, { type: 'sine', dur: 0.12, vol: 0.35 }); this.tone(60, { type: 'sine', dur: 0.14, vol: 0.3, delay: 0.22 }); },
    // 1 = sweet dream, 0 = full nightmare: the lullaby detunes and a drone creeps in
    setDream(d) {
      if (!this.ctx) return;
      this.dream = d;
      if (!this.drone) {
        this.drone = this.ctx.createOscillator(); this.drone.type = 'sawtooth'; this.drone.frequency.value = 55;
        const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 220;
        this.droneGain = this.ctx.createGain(); this.droneGain.gain.value = 0;
        this.drone.connect(f).connect(this.droneGain).connect(this.master); this.drone.start();
      }
      const t = this.ctx.currentTime;
      this.droneGain.gain.setTargetAtTime(Math.max(0, 0.6 - d) * 0.22, t, 0.5);
      this.drone.frequency.setTargetAtTime(55 + (1 - d) * 4, t, 0.5);
      if (this.musicGain) this.musicGain.gain.setTargetAtTime(0.12 + d * 0.23, t, 0.5);
    },

    // --- background music -------------------------------------------------
    // A gentle looping tune built from a chord progression; each level
    // can pick a different "mood" (tempo + scale offset).
    startMusic(mood = 0) {
      if (!this.ctx) return;
      this.stopMusic();
      this.mood = mood;
      this._barIndex = 0;
      this._nextBar = this.ctx.currentTime + 0.1;
      const tick = () => {
        while (this._nextBar < this.ctx.currentTime + 0.6) {
          this._scheduleBar(this._nextBar, this._barIndex++);
          this._nextBar += this._barLen();
        }
      };
      tick();
      this.musicTimer = setInterval(tick, 200);
    },

    stopMusic() {
      if (this.musicTimer) clearInterval(this.musicTimer);
      this.musicTimer = null;
    },

    _barLen() { return [3.0, 2.8, 2.4, 3.2, 3.0][this.mood % 5] * (this.dream !== undefined && this.dream < 0.4 ? 1.15 : 1); },

    _note(freq, t, dur, vol, type) {
      const d = this.dream === undefined ? 1 : this.dream;
      freq *= 1 + (1 - d) * (Math.random() - 0.5) * 0.06;
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = type;
      o.frequency.value = freq;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vol, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      o.connect(g).connect(this.musicGain);
      o.start(t);
      o.stop(t + dur + 0.05);
    },

    _scheduleBar(t, bar) {
      // chord progression in C major-ish; mood shifts the root.
      const roots = [[0, 4, 7, 11], [5, 9, 12, 16], [7, 11, 14, 17], [9, 12, 16, 19]];
      const chord = roots[bar % 4];
      const shift = [0, -2, 3, -5, 2][this.mood % 5];
      const len = this._barLen();
      const f = (semi) => 261.63 * Math.pow(2, (semi + shift) / 12);
      // bass
      this._note(f(chord[0] - 12), t, len * 0.9, 0.16, 'triangle');
      // arpeggio
      const steps = 8;
      for (let i = 0; i < steps; i++) {
        const semi = chord[[0, 1, 2, 3, 2, 1, 3, 1][i]];
        this._note(f(semi + 12), t + (i * len) / steps, len / steps * 0.9, 0.07, 'sine');
      }
      // little melody on every other bar
      if (bar % 2 === 1) {
        const mel = [chord[3] + 12, chord[2] + 12, chord[1] + 12];
        mel.forEach((semi, i) => this._note(f(semi), t + len * (0.5 + i * 0.16), 0.3, 0.06, 'triangle'));
      }
    },
  };


