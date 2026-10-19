import * as THREE from 'three';
import { G } from './state.js';
import { canvas, rand, clamp, lerp, noise2 } from './util.js';

const VS = `attribute float aSize; attribute vec4 aColor; varying vec4 vC; uniform float uScale;
void main(){ vC=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_Position=projectionMatrix*mv; gl_PointSize=aSize*uScale/max(-mv.z,0.1); }`;
const FS = `uniform sampler2D map; varying vec4 vC;
void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vC.rgb*t.rgb, vC.a*t.a); }`;

function softTex(kind) {
  const [c, g] = canvas(64, 64);
  if (kind === 'soft') {
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.35, 'rgba(255,255,255,0.65)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  } else {
    for (let i = 0; i < 14; i++) {
      const x = 32 + (Math.random() - 0.5) * 22, y = 32 + (Math.random() - 0.5) * 22, r = 10 + Math.random() * 14;
      const gr = g.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, 'rgba(255,255,255,0.5)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    }
    // vignette to avoid hard square edges
    const m = g.createRadialGradient(32, 32, 14, 32, 32, 32);
    m.addColorStop(0, 'rgba(0,0,0,0)'); m.addColorStop(1, 'rgba(0,0,0,1)');
    g.globalCompositeOperation = 'destination-out'; g.fillStyle = m; g.fillRect(0, 0, 64, 64);
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

class PSet {
  constructor(scene, cap, additive, tex) {
    this.cap = cap; this.i = 0;
    this.px = new Float32Array(cap); this.py = new Float32Array(cap); this.ps = new Float32Array(cap);
    this.vx = new Float32Array(cap); this.vy = new Float32Array(cap); this.vs = new Float32Array(cap);
    this.life = new Float32Array(cap); this.max = new Float32Array(cap);
    this.s0 = new Float32Array(cap); this.s1 = new Float32Array(cap);
    this.col = new Float32Array(cap * 3); this.a = new Float32Array(cap); this.grav = new Float32Array(cap); this.drag = new Float32Array(cap);
    const geo = new THREE.BufferGeometry();
    this.apos = new THREE.BufferAttribute(new Float32Array(cap * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.asize = new THREE.BufferAttribute(new Float32Array(cap), 1).setUsage(THREE.DynamicDrawUsage);
    this.acol = new THREE.BufferAttribute(new Float32Array(cap * 4), 4).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', this.apos); geo.setAttribute('aSize', this.asize); geo.setAttribute('aColor', this.acol);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: tex }, uScale: { value: 500 } }, vertexShader: VS, fragmentShader: FS,
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.pts = new THREE.Points(geo, this.mat); this.pts.frustumCulled = false; this.pts.renderOrder = additive ? 6 : 5;
    scene.add(this.pts);
  }
  emit(x, y, s, vx, vy, vs, s0, s1, life, r, g, b, a, grav = 0, drag = 0) {
    const i = this.i; this.i = (this.i + 1) % this.cap;
    this.px[i] = x; this.py[i] = y; this.ps[i] = s; this.vx[i] = vx; this.vy[i] = vy; this.vs[i] = vs;
    this.life[i] = this.max[i] = life; this.s0[i] = s0; this.s1[i] = s1;
    this.col[i * 3] = r; this.col[i * 3 + 1] = g; this.col[i * 3 + 2] = b; this.a[i] = a; this.grav[i] = grav; this.drag[i] = drag;
  }
  update(dt, d, scale) {
    this.mat.uniforms.uScale.value = scale;
    const P = this.apos.array, S = this.asize.array, C = this.acol.array;
    for (let i = 0; i < this.cap; i++) {
      if (this.life[i] <= 0) { S[i] = 0; continue; }
      this.life[i] -= dt;
      const k = this.drag[i] > 0 ? Math.exp(-this.drag[i] * dt) : 1;
      this.vx[i] *= k; this.vy[i] = this.vy[i] * k - this.grav[i] * dt; this.vs[i] *= k;
      this.px[i] += this.vx[i] * dt; this.py[i] += this.vy[i] * dt; this.ps[i] += this.vs[i] * dt;
      if (this.py[i] < 0.05 && this.grav[i] > 0) { this.py[i] = 0.05; this.vy[i] *= -0.3; this.vx[i] *= 0.6; this.vs[i] *= 0.6; }
      const t = 1 - this.life[i] / this.max[i];
      P[i * 3] = this.px[i]; P[i * 3 + 1] = this.py[i]; P[i * 3 + 2] = -(this.ps[i] - d);
      S[i] = lerp(this.s0[i], this.s1[i], t);
      const fade = t < 0.08 ? t / 0.08 : 1 - (t - 0.08) / 0.92;
      C[i * 4] = this.col[i * 3]; C[i * 4 + 1] = this.col[i * 3 + 1]; C[i * 4 + 2] = this.col[i * 3 + 2]; C[i * 4 + 3] = this.a[i] * fade * fade * (3 - 2 * fade) * 1.0 + this.a[i] * fade * 0.0;
    }
    this.apos.needsUpdate = this.asize.needsUpdate = this.acol.needsUpdate = true;
  }
}

export class FX {
  constructor(scene) {
    this.scene = scene;
    const soft = softTex('soft'), puff = softTex('puff');
    this.smoke = new PSet(scene, 700, false, puff);
    this.fire = new PSet(scene, 700, true, soft);
    // tracers
    this.tracers = [];
    const geo = new THREE.BoxGeometry(1, 1, 1);
    this.tMats = { p: new THREE.MeshBasicMaterial({ color: 0xffe9a0, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }),
      e: new THREE.MeshBasicMaterial({ color: 0xff6a3a, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }) };
    for (let i = 0; i < 48; i++) {
      const m = new THREE.Mesh(geo, this.tMats.p); m.visible = false; m.frustumCulled = false; scene.add(m);
      this.tracers.push({ m, on: false, a: [0, 0, 0], b: [0, 0, 0], t: 0, dur: 0, len: 5, w: 0.05 });
    }
    // nuke
    this.nukes = [];
    this.domeMat = new THREE.MeshBasicMaterial({ color: 0xffa040, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(1, 28, 18), this.domeMat); this.dome.visible = false; this.dome.frustumCulled = false; scene.add(this.dome);
    this.ringMat = new THREE.MeshBasicMaterial({ color: 0xfff0c0, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.92, 1, 64), this.ringMat); this.ring.rotation.x = -Math.PI / 2; this.ring.visible = false; this.ring.frustumCulled = false; scene.add(this.ring);
  }

  clear() {
    this.smoke.life.fill(0); this.fire.life.fill(0);
    for (const t of this.tracers) { t.on = false; t.m.visible = false; }
    this.nukes.length = 0; this.dome.visible = false; this.ring.visible = false;
  }

  /* ----- emitters ----- */
  flash(x, y, s, size = 1) {
    this.fire.emit(x, y, s, 0, 0, 0, 0.12 * size, 0.4 * size, 0.06, 1, 0.8, 0.45, 0.9);
  }
  puff(x, y, s, n = 3, c = 0.55) {
    for (let i = 0; i < n; i++) this.smoke.emit(x + rand(-.2, .2), y, s + rand(-.2, .2), rand(-1, 1), rand(0.5, 2), rand(-1, 1), 0.3, 1.2, rand(0.5, 0.9), c * 1.1, c, c * 0.85, 0.5, 0, 1);
  }
  sparks(x, y, s, n = 6) {
    for (let i = 0; i < n; i++) this.fire.emit(x, y, s, rand(-4, 4), rand(1, 5), rand(-4, 4), 0.14, 0.05, rand(0.2, 0.5), 1, rand(0.6, 0.9), 0.3, 1, 14, 0.5);
  }
  dust(x, y, s, vs, n = 1) {
    for (let i = 0; i < n; i++) this.smoke.emit(x + rand(-.3, .3), y + 0.1, s, rand(-.6, .6), rand(.3, 1.2), -vs * 0.15 + rand(-1, 1), 0.4, 1.9, rand(0.7, 1.2), 0.62, 0.55, 0.42, 0.42, 0, 0.8);
  }
  fireAt(x, y, s, k = 1) {
    this.fire.emit(x + rand(-.4, .4) * k, y, s + rand(-.4, .4) * k, rand(-.3, .3), rand(1.8, 3.4), rand(-.3, .3), 0.9 * k, 0.15, rand(0.45, 0.8), 1, rand(0.4, 0.62), 0.12, 0.95, -1.5, 0.3);
  }
  smokeAt(x, y, s, k = 1, dark = 0.2) {
    this.smoke.emit(x + rand(-.4, .4), y, s + rand(-.4, .4), rand(-.5, .5) + 0.8, rand(1.8, 3.2), rand(-.5, .5), 0.9 * k, 4.5 * k, rand(2.4, 3.8), dark, dark, dark * 1.05, 0.7, -0.3, 0.2);
  }
  explode(x, y, s, size = 1) {
    this.fire.emit(x, y + 0.5 * size, s, 0, 0, 0, 3 * size, 11 * size, 0.18, 1, 0.9, 0.6, 1);
    const n = Math.floor(11 * size + 4);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * 6.28, e = Math.random() * 1.2, sp = rand(2, 9) * size;
      this.fire.emit(x, y + 0.4, s, Math.cos(a) * sp * Math.cos(e), Math.sin(e) * sp * 0.9 + 1.5, Math.sin(a) * sp * Math.cos(e), rand(1.5, 3) * size, rand(3, 6) * size, rand(0.45, 0.95), 1, rand(0.45, 0.7), 0.14, 0.95, -1.2, 1.6);
    }
    for (let i = 0; i < Math.floor(8 * size + 3); i++) {
      const a = Math.random() * 6.28, sp = rand(1, 5) * size;
      this.smoke.emit(x, y + 0.6, s, Math.cos(a) * sp, rand(1.5, 5) * size * 0.8, Math.sin(a) * sp, rand(1.5, 2.5) * size, rand(5, 9) * size, rand(1.8, 3.4), 0.13, 0.12, 0.12, 0.85, -0.4, 0.8);
    }
    this.sparks(x, y + 0.5, s, Math.floor(10 * size));
    for (let i = 0; i < Math.floor(5 * size); i++) {
      const a = Math.random() * 6.28, sp = rand(3, 11) * size;
      this.smoke.emit(x, y + 0.4, s, Math.cos(a) * sp, rand(3, 10) * size, Math.sin(a) * sp, 0.2, 0.2, rand(0.8, 1.6), 0.1, 0.09, 0.08, 1, 16, 0);
    }
  }
  nuke(x, y, s) {
    this.nukes.push({ x, y, s, t: 0 });
    this.explode(x, y, s, 3.5);
  }

  tracer(a, b, kind = 'p', speed = 520, len = 7, w = 0.05) {
    for (const t of this.tracers) if (!t.on) {
      t.on = true; t.m.visible = true; t.m.material = this.tMats[kind]; t.a = [a.x, a.y, a.s]; t.b = [b.x, b.y, b.s];
      const dist = Math.hypot(b.x - a.x, b.y - a.y, b.s - a.s); t.dur = Math.max(dist / speed, 0.04); t.t = 0; t.len = Math.min(len, dist); t.w = w; t.distv = dist; return;
    }
  }

  update(dt, d, camera, renderer) {
    const scale = renderer.domElement.height / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2));
    this.smoke.update(dt, d, scale); this.fire.update(dt, d, scale);
    // tracers
    for (const t of this.tracers) {
      if (!t.on) continue;
      t.t += dt;
      const k = t.t / t.dur;
      if (k >= 1.15) { t.on = false; t.m.visible = false; continue; }
      const kh = clamp(k, 0, 1), kt = clamp(k - t.len / Math.max(t.distv, 0.1), 0, 1);
      const hx = lerp(t.a[0], t.b[0], kh), hy = lerp(t.a[1], t.b[1], kh), hs = lerp(t.a[2], t.b[2], kh);
      const tx = lerp(t.a[0], t.b[0], kt), ty = lerp(t.a[1], t.b[1], kt), ts = lerp(t.a[2], t.b[2], kt);
      const m = t.m;
      m.position.set((hx + tx) / 2, (hy + ty) / 2, -((hs + ts) / 2 - d));
      const len = Math.max(Math.hypot(hx - tx, hy - ty, hs - ts), 0.2);
      m.scale.set(t.w, t.w, len);
      m.lookAt(hx, hy, -(hs - d));
    }
    // nukes
    if (this.nukes.length) {
      const n = this.nukes[0]; n.t += dt;
      const T = n.t;
      this.dome.visible = T < 2.2; this.ring.visible = T < 1.8;
      const r = 58 * (1 - Math.pow(1 - Math.min(T / 1.1, 1), 3));
      this.dome.position.set(n.x, n.y + r * 0.35, -(n.s - d)); this.dome.scale.set(r, r * 0.8, r);
      this.domeMat.opacity = clamp(1 - T / 2.1, 0, 1) * 0.85; this.domeMat.color.setHSL(0.08 - T * 0.02, 1, 0.45 + 0.25 * (1 - clamp(T / 1.2, 0, 1)));
      const rr = 100 * (1 - Math.pow(1 - Math.min(T / 1.6, 1), 2));
      this.ring.position.set(n.x, 0.3, -(n.s - d)); this.ring.scale.set(rr, rr, rr); this.ringMat.opacity = clamp(1 - T / 1.7, 0, 1) * 0.7;
      if (T < 3.6) { // rising column + cap
        for (let i = 0; i < 6; i++) {
          const h = (T * 18) * Math.random();
          this.smoke.emit(n.x + rand(-5, 5), n.y + h, n.s + rand(-5, 5), rand(-1.5, 1.5), rand(4, 9), rand(-1.5, 1.5), 8, 26, rand(3, 5), 0.2, 0.17, 0.15, 0.7, 0, 0.3);
          if (T < 2) this.fire.emit(n.x + rand(-6, 6), n.y + h * 0.7, n.s + rand(-6, 6), 0, rand(3, 8), 0, 8, 20, rand(0.6, 1.2), 1, 0.5, 0.15, 0.7, 0, 0.4);
        }
      }
      if (T > 3.8) { this.nukes.shift(); this.dome.visible = false; this.ring.visible = false; }
    }
  }
}
