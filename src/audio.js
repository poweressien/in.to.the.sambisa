import { clamp } from './util.js';

const TRACKS = [
  { src: 'audio/hit_em_up.mp3', title: "Hit 'Em Up" },
  { src: 'audio/like_toy_soldier.mp3', title: 'Like Toy Soldiers' },
];

export class Sound {
  constructor() { this.ctx = null; this.musicVol = 0.55; this.sfxOn = true; this.musicOn = true; this.cur = -1; this.onTrack = null; this.heli = 0; }

  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    const c = this.ctx = new AC();
    this.master = c.createGain(); this.master.gain.value = 0.85;
    const comp = c.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 6;
    this.master.connect(comp); comp.connect(c.destination);
    const len = c.sampleRate * 2, buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.noise = buf;
    // engine
    this.eg = c.createGain(); this.eg.gain.value = 0; const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 520; this.elp = lp;
    this.o1 = c.createOscillator(); this.o1.type = 'sawtooth'; this.o2 = c.createOscillator(); this.o2.type = 'square';
    this.o1.connect(lp); this.o2.connect(lp); lp.connect(this.eg); this.eg.connect(this.master); this.o1.start(); this.o2.start();
    // rotor
    this.hg = c.createGain(); this.hg.gain.value = 0; const hs = c.createBufferSource(); hs.buffer = buf; hs.loop = true;
    const hf = c.createBiquadFilter(); hf.type = 'lowpass'; hf.frequency.value = 220;
    const am = c.createGain(); am.gain.value = 0.5; const lfo = c.createOscillator(); lfo.frequency.value = 19; const lg = c.createGain(); lg.gain.value = 0.5;
    lfo.connect(lg); lg.connect(am.gain); hs.connect(hf); hf.connect(am); am.connect(this.hg); this.hg.connect(this.master); hs.start(); lfo.start();
    this.startMusic();
  }

  startMusic() {
    this.tracks = TRACKS.map((t) => { const a = new Audio(t.src); a.preload = 'auto'; a.loop = true; a.volume = 0; return a; });
    this.pick();
  }
  /** pick ONE random track; it loops until the next mission starts */
  pick() {
    if (!this.tracks) return;
    for (const a of this.tracks) { a.pause(); a.volume = 0; }
    this.cur = Math.floor(Math.random() * this.tracks.length);
    const a = this.tracks[this.cur]; a.currentTime = 0; a.loop = true; a.volume = this.musicOn ? this.musicVol : 0;
    a.play().catch(() => {});
    if (this.onTrack) this.onTrack(TRACKS[this.cur].title);
  }
  setMusic(on, vol) { if (on !== undefined) this.musicOn = on; if (vol !== undefined) this.musicVol = vol; if (this.tracks) for (const a of this.tracks) a.volume = this.musicOn ? this.musicVol : 0; }
  duck(v, ms) { if (!this.tracks || !this.musicOn) return; const a = this.tracks[this.cur]; a.volume = this.musicVol * v; setTimeout(() => { a.volume = this.musicVol; }, ms); }
  /** app sent to background / foreground (Android WebView) */
  suspend(s) { try { if (s) { this.ctx && this.ctx.suspend(); if (this.tracks) this.tracks[this.cur].pause(); } else { this.ctx && this.ctx.resume(); } } catch (e) {} }
  pauseMusic(p) { if (!this.tracks) return; const a = this.tracks[this.cur]; if (p) a.pause(); else a.play().catch(() => {}); }

  /* ---- helpers ---- */
  _noise(t, dur, type, f, q, gain, decay, pan = 0, f2) {
    const c = this.ctx; const s = c.createBufferSource(); s.buffer = this.noise; s.playbackRate.value = 0.8 + Math.random() * 0.4;
    const fl = c.createBiquadFilter(); fl.type = type; fl.frequency.setValueAtTime(f, t); if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t + dur); fl.Q.value = q;
    const g = c.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.001, t + decay);
    s.connect(fl); fl.connect(g);
    if (c.createStereoPanner) { const p = c.createStereoPanner(); p.pan.value = clamp(pan, -1, 1); g.connect(p); p.connect(this.master); } else g.connect(this.master);
    s.start(t); s.stop(t + dur + 0.05);
  }
  _tone(t, f0, f1, dur, type, gain) {
    const c = this.ctx, o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(f1, 1), t + dur);
    const g = c.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur); o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur + 0.02);
  }
  _vol(dist) { return 1 / (1 + dist / 45); }

  shot(id, dist = 0, pan = 0) {
    if (!this.ctx || !this.sfxOn) return; const t = this.ctx.currentTime, v = this._vol(dist);
    switch (id) {
      case 'ak': this._noise(t, 0.12, 'bandpass', 1800, 0.7, 0.55 * v, 0.12, pan); this._tone(t, 160, 50, 0.1, 'triangle', 0.45 * v); break;
      case 'smg': this._noise(t, 0.08, 'bandpass', 2600, 0.8, 0.4 * v, 0.07, pan); this._tone(t, 220, 80, 0.06, 'triangle', 0.28 * v); break;
      case 'shotgun': this._noise(t, 0.3, 'lowpass', 2400, 0.5, 0.9 * v, 0.28, pan, 300); this._tone(t, 110, 35, 0.2, 'sine', 0.7 * v); break;
      case 'sniper': this._noise(t, 0.6, 'lowpass', 3200, 0.6, 1 * v, 0.55, pan, 200); this._tone(t, 90, 28, 0.35, 'sine', 0.85 * v); break;
      case 'rocket': this._noise(t, 0.7, 'bandpass', 700, 0.5, 0.8 * v, 0.7, pan, 2400); this._tone(t, 140, 40, 0.3, 'sine', 0.6 * v); break;
      case 'frag': this._tone(t, 220, 60, 0.18, 'square', 0.35 * v); this._noise(t, 0.2, 'lowpass', 900, 0.5, 0.5 * v, 0.2, pan); break;
      case 'nuke': this._noise(t, 1.2, 'bandpass', 500, 0.4, 0.8, 1.2, pan, 3000); this._tone(t, 90, 30, 0.8, 'sawtooth', 0.4); break;
      case 'enemy': this._noise(t, 0.1, 'bandpass', 1500, 0.7, 0.3 * v, 0.1, pan); break;
      case 'mg': this._noise(t, 0.09, 'bandpass', 1100, 0.7, 0.4 * v, 0.09, pan); this._tone(t, 120, 40, 0.08, 'triangle', 0.3 * v); break;
    }
  }
  explosion(size = 1, dist = 0, pan = 0) {
    if (!this.ctx || !this.sfxOn) return; const t = this.ctx.currentTime, v = this._vol(dist * 0.6) * Math.min(size, 1.6);
    this._noise(t, 1.8 * size, 'lowpass', 1400, 0.4, 1.1 * v, 1.6 * size, pan, 80); this._tone(t, 90, 22, 0.9 * size, 'sine', 0.9 * v);
    this._noise(t + 0.05, 0.4, 'highpass', 2500, 0.5, 0.3 * v, 0.35, pan);
  }
  nuke() {
    if (!this.ctx || !this.sfxOn) return; const t = this.ctx.currentTime;
    this._noise(t, 5, 'lowpass', 900, 0.4, 1.5, 4.6, 0, 50); this._tone(t, 60, 14, 3, 'sine', 1.2); this._noise(t, 1, 'highpass', 1800, 0.5, 0.6, 0.8);
    this.duck(0.15, 4500);
  }
  hit() { if (!this.ctx || !this.sfxOn) return; this._tone(this.ctx.currentTime, 1500, 900, 0.05, 'square', 0.08); }
  hurt() { if (!this.ctx || !this.sfxOn) return; const t = this.ctx.currentTime; this._tone(t, 180, 70, 0.18, 'sawtooth', 0.35); this._noise(t, 0.1, 'lowpass', 700, 0.5, 0.4, 0.1); }
  pickup() { if (!this.ctx || !this.sfxOn) return; const t = this.ctx.currentTime; this._tone(t, 660, 660, 0.08, 'triangle', 0.25); this._tone(t + 0.08, 990, 990, 0.14, 'triangle', 0.25); }
  checkpoint() { if (!this.ctx || !this.sfxOn) return; const t = this.ctx.currentTime; [523, 659, 784, 1046].forEach((f, i) => this._tone(t + i * 0.09, f, f, 0.22, 'triangle', 0.28)); }
  click() { if (!this.ctx || !this.sfxOn) return; this._tone(this.ctx.currentTime, 900, 600, 0.04, 'square', 0.1); }
  gear() { if (!this.ctx || !this.sfxOn) return; const t = this.ctx.currentTime; this._tone(t, 240, 120, 0.07, 'square', 0.12); this._noise(t, 0.05, 'bandpass', 1200, 1, 0.15, 0.05); }
  empty() { if (!this.ctx || !this.sfxOn) return; this._tone(this.ctx.currentTime, 400, 380, 0.04, 'square', 0.08); }
  reload() { if (!this.ctx || !this.sfxOn) return; const t = this.ctx.currentTime; this._tone(t, 500, 300, 0.05, 'square', 0.1); this._tone(t + 0.25, 700, 500, 0.05, 'square', 0.1); }
  crash() { if (!this.ctx || !this.sfxOn) return; const t = this.ctx.currentTime; this._noise(t, 0.5, 'lowpass', 1500, 0.5, 1, 0.5, 0, 200); this._tone(t, 120, 40, 0.3, 'sawtooth', 0.6); }

  engine(speed, gear, mounted, on) {
    if (!this.ctx) return; const t = this.ctx.currentTime;
    const f = 34 + speed * 2.6 + (mounted ? 6 : 0) + (gear ? (gear % 2) * 2 : 0);
    this.o1.frequency.setTargetAtTime(f, t, 0.08); this.o2.frequency.setTargetAtTime(f * 0.5, t, 0.08);
    this.elp.frequency.setTargetAtTime(380 + speed * 22, t, 0.1);
    this.eg.gain.setTargetAtTime(on && this.sfxOn ? (mounted ? 0.11 : 0.05) : 0, t, 0.15);
  }
  setHeli(near) { if (!this.ctx) return; this.hg.gain.setTargetAtTime(this.sfxOn ? clamp(near, 0, 1) * 0.55 : 0, this.ctx.currentTime, 0.2); }
  muteSfx(m) { this.sfxOn = !m; }
}
