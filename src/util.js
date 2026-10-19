import * as THREE from 'three';

export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, k, dt) => lerp(a, b, 1 - Math.exp(-k * dt));
export const rand = (a, b) => a + Math.random() * (b - a);
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash2(x, y) {
  let h = Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}
export function noise2(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi), b = hash2(xi + 1, yi), c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1);
  return lerp(lerp(a, b, u), lerp(c, d, u), v);
}
export function fbm(x, y, o = 4) {
  let s = 0, a = 0.5, f = 1;
  for (let i = 0; i < o; i++) { s += a * noise2(x * f, y * f); f *= 2; a *= 0.5; }
  return s;
}

/* ---------- two-bone IK ---------- */
const _d = new THREE.Vector3(), _dir = new THREE.Vector3(), _p = new THREE.Vector3(), _t = new THREE.Vector3();
export function ik2(root, target, l1, l2, pole, out) {
  _d.subVectors(target, root);
  let dist = _d.length();
  const maxd = l1 + l2 - 0.002;
  if (dist > maxd) { _d.multiplyScalar(maxd / dist); dist = maxd; }
  if (dist < 0.05) dist = 0.05;
  _dir.copy(_d).normalize();
  const a = (l1 * l1 - l2 * l2 + dist * dist) / (2 * dist);
  const h = Math.sqrt(Math.max(0, l1 * l1 - a * a));
  _p.copy(pole); _p.addScaledVector(_dir, -_p.dot(_dir));
  if (_p.lengthSq() < 1e-6) _p.set(0, 0, 1);
  _p.normalize();
  out.copy(root).addScaledVector(_dir, a).addScaledVector(_p, h);
  return out;
}

const UP = new THREE.Vector3(0, 1, 0);
/** place a unit cylinder (height 1 along Y) between a and b */
export function limb(mesh, a, b, r) {
  _t.subVectors(b, a);
  const len = _t.length();
  mesh.position.copy(a).addScaledVector(_t, 0.5);
  if (len > 1e-5) mesh.quaternion.setFromUnitVectors(UP, _t.multiplyScalar(1 / len));
  mesh.scale.set(r, len, r);
}

/* ---------- canvas helpers ---------- */
export function canvas(w, h) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}
export function tileDraw(ctx, W, H, fn, wrapX = true, wrapY = true) {
  for (let ox = wrapX ? -1 : 0; ox <= (wrapX ? 1 : 0); ox++)
    for (let oy = wrapY ? -1 : 0; oy <= (wrapY ? 1 : 0); oy++) {
      ctx.save(); ctx.translate(ox * W, oy * H); fn(); ctx.restore();
    }
}
export function texFromCanvas(c, { repeat = true, srgb = true, aniso = 4 } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  return t;
}
export const hex = (n) => '#' + n.toString(16).padStart(6, '0');
