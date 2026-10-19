import * as THREE from 'three';
import { ik2, limb, canvas, texFromCanvas, clamp, lerp } from './util.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const mats = new Map();
export function M(color, rough = 0.7, metal = 0, extra = {}) {
  const key = `${color}|${rough}|${metal}|${JSON.stringify(extra)}`;
  if (!mats.has(key)) mats.set(key, new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, ...extra }));
  return mats.get(key);
}
const NZ = new THREE.Vector3(0, 0, -1);
const CYL = new THREE.CylinderGeometry(1, 1, 1, 8);
const SPH = new THREE.SphereGeometry(1, 14, 10);
const BOX = new THREE.BoxGeometry(1, 1, 1);

function add(parent, geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1, shadow = true) {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.scale.set(sx, sy, sz);
  m.castShadow = shadow; parent.add(m); return m;
}
const box = (p, w, h, d, mat, x, y, z, rx = 0, ry = 0, rz = 0) => add(p, BOX, mat, x, y, z, rx, ry, rz, w, h, d);
const cylZ = (p, r, len, mat, x, y, z) => add(p, CYL, mat, x, y, z, Math.PI / 2, 0, 0, r, len, r);
const cylY = (p, r, len, mat, x, y, z) => add(p, CYL, mat, x, y, z, 0, 0, 0, r, len, r);
const cylX = (p, r, len, mat, x, y, z) => add(p, CYL, mat, x, y, z, 0, 0, Math.PI / 2, r, len, r);
const sph = (p, r, mat, x, y, z, sx = 1, sy = 1, sz = 1) => add(p, SPH, mat, x, y, z, 0, 0, 0, r * sx, r * sy, r * sz);
function tube(p, a, b, r, mat) {
  const m = new THREE.Mesh(CYL, mat); limb(m, a, b, r); m.castShadow = true; p.add(m); return m;
}
const V3 = (x, y, z) => new THREE.Vector3(x, y, z);

/** merge a static group of primitives into one vertex-coloured mesh (fewer draw calls) */
const bakedMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0.12 });
export function bake(g) {
  g.updateMatrixWorld(true);
  const geos = [];
  g.traverse((o) => {
    if (!o.isMesh) return;
    const ge = o.geometry.clone(); ge.deleteAttribute('uv'); ge.applyMatrix4(o.matrixWorld);
    const c = o.material.color || new THREE.Color(0x888888), n = ge.attributes.position.count, col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
    ge.setAttribute('color', new THREE.BufferAttribute(col, 3)); geos.push(ge);
  });
  const m = new THREE.Mesh(mergeGeometries(geos), bakedMat); m.castShadow = true; return m;
}

/* ============================================================ weapons */
const mBlack = () => M(0x1b1d20, 0.5, 0.6), mSteel = () => M(0x5a5f66, 0.4, 0.85), mWood = () => M(0x7a4a22, 0.7, 0), mOlive = () => M(0x4a5330, 0.7, 0.2);
export function makeGun(type, doBake = true) {
  const g = new THREE.Group();
  let muzzle = V3(0, 0.03, -0.8), fore = V3(0, -0.03, -0.38), shoulder = false;
  switch (type) {
    case 'ak':
      box(g, 0.05, 0.075, 0.34, mBlack(), 0, 0.03, -0.16);
      box(g, 0.056, 0.055, 0.22, mWood(), 0, 0.015, -0.4);
      cylZ(g, 0.011, 0.34, mSteel(), 0, 0.04, -0.66);
      cylZ(g, 0.008, 0.26, mSteel(), 0, 0.075, -0.52);
      cylZ(g, 0.017, 0.05, mBlack(), 0, 0.04, -0.84);
      box(g, 0.04, 0.18, 0.07, mBlack(), 0, -0.1, -0.22, -0.35);
      box(g, 0.045, 0.09, 0.26, mWood(), 0, 0.0, 0.15);
      box(g, 0.04, 0.1, 0.05, mWood(), 0, -0.08, -0.03, 0.3);
      box(g, 0.01, 0.03, 0.01, mSteel(), 0, 0.085, -0.8);
      muzzle = V3(0, 0.04, -0.87); fore = V3(0, -0.03, -0.4); break;
    case 'smg':
      box(g, 0.05, 0.085, 0.28, mBlack(), 0, 0.03, -0.12);
      box(g, 0.035, 0.2, 0.05, mBlack(), 0, -0.14, -0.1, 0.06);
      box(g, 0.04, 0.1, 0.05, mBlack(), 0, -0.06, 0.02, 0.2);
      cylZ(g, 0.02, 0.22, mBlack(), 0, 0.04, -0.38);
      box(g, 0.035, 0.05, 0.2, mBlack(), 0, 0.0, 0.2);
      box(g, 0.03, 0.03, 0.12, mSteel(), 0, 0.085, -0.1);
      muzzle = V3(0, 0.04, -0.5); fore = V3(0, -0.04, -0.28); break;
    case 'shotgun':
      box(g, 0.05, 0.075, 0.32, mBlack(), 0, 0.03, -0.14);
      cylZ(g, 0.016, 0.6, mSteel(), 0, 0.05, -0.55);
      cylZ(g, 0.02, 0.3, mBlack(), 0, 0.0, -0.45);
      box(g, 0.056, 0.05, 0.2, mWood(), 0, 0.0, -0.4);
      box(g, 0.05, 0.11, 0.3, mBlack(), 0, 0.0, 0.2, 0.15);
      box(g, 0.04, 0.1, 0.05, mBlack(), 0, -0.08, -0.02, 0.3);
      muzzle = V3(0, 0.05, -0.86); fore = V3(0, -0.02, -0.42); break;
    case 'sniper':
      box(g, 0.05, 0.08, 0.5, mBlack(), 0, 0.03, -0.2);
      cylZ(g, 0.013, 0.6, mSteel(), 0, 0.045, -0.78);
      cylZ(g, 0.02, 0.12, mBlack(), 0, 0.045, -1.12);
      cylZ(g, 0.035, 0.3, mBlack(), 0, 0.12, -0.22);
      cylZ(g, 0.045, 0.05, mSteel(), 0, 0.12, -0.4); cylZ(g, 0.04, 0.05, mSteel(), 0, 0.12, -0.06);
      box(g, 0.05, 0.12, 0.34, mOlive(), 0, 0.0, 0.3, 0.1);
      box(g, 0.035, 0.18, 0.05, mBlack(), 0, -0.1, -0.15);
      box(g, 0.01, 0.2, 0.01, mSteel(), 0.03, -0.06, -0.85, 0.3); box(g, 0.01, 0.2, 0.01, mSteel(), -0.03, -0.06, -0.85, 0.3);
      muzzle = V3(0, 0.045, -1.2); fore = V3(0, -0.04, -0.55); break;
    case 'rocket':
      shoulder = true;
      cylZ(g, 0.06, 1.0, mOlive(), 0, 0.05, -0.1);
      cylZ(g, 0.085, 0.15, mBlack(), 0, 0.05, 0.42);
      add(g, new THREE.ConeGeometry(0.075, 0.28, 10), M(0x2b2f1d, 0.6, 0.2), 0, 0.05, -0.74, -Math.PI / 2, 0, 0);
      box(g, 0.04, 0.1, 0.05, mBlack(), 0, -0.07, 0.0, 0.2);
      box(g, 0.04, 0.1, 0.05, mBlack(), 0, -0.07, -0.35, 0.1);
      box(g, 0.02, 0.06, 0.12, mSteel(), 0, 0.14, -0.1);
      muzzle = V3(0, 0.05, -0.9); fore = V3(0, -0.04, -0.35); break;
    case 'frag':
      cylZ(g, 0.04, 0.5, mBlack(), 0, 0.04, -0.4);
      cylZ(g, 0.052, 0.12, mSteel(), 0, 0.04, -0.1);
      box(g, 0.05, 0.09, 0.3, mWood(), 0, 0.0, 0.14, 0.05);
      box(g, 0.04, 0.1, 0.05, mWood(), 0, -0.08, -0.02, 0.3);
      box(g, 0.02, 0.07, 0.02, mSteel(), 0, 0.1, -0.2);
      muzzle = V3(0, 0.04, -0.66); fore = V3(0, -0.03, -0.3); break;
    case 'nuke': {
      shoulder = true;
      cylZ(g, 0.09, 0.95, M(0x2d3036, 0.5, 0.5), 0, 0.06, -0.05);
      add(g, new THREE.ConeGeometry(0.1, 0.34, 12), M(0xc8281e, 0.4, 0.3), 0, 0.06, -0.69, -Math.PI / 2, 0, 0);
      cylZ(g, 0.095, 0.08, M(0xf0c419, 0.5, 0.2), 0, 0.06, -0.38); cylZ(g, 0.095, 0.08, M(0xf0c419, 0.5, 0.2), 0, 0.06, -0.2);
      cylZ(g, 0.12, 0.14, mBlack(), 0, 0.06, 0.45);
      box(g, 0.04, 0.1, 0.05, mBlack(), 0, -0.08, 0.0, 0.2); box(g, 0.04, 0.1, 0.05, mBlack(), 0, -0.08, -0.4, 0.1);
      muzzle = V3(0, 0.06, -0.9); fore = V3(0, -0.05, -0.4); break;
    }
  }
  g.userData = { muzzle, fore, shoulder };
  if (!doBake) return g;
  const bm = bake(g); bm.userData = g.userData; return bm;
}

/* ============================================================ textures for realism */
const texCache = {};
function cv(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
function mkTex(c, rep = 1) { const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; t.repeat.set(rep, rep); return t; }
export function fabric(kind) {
  if (texCache[kind]) return texCache[kind];
  const [c, g] = cv(256, 256);
  if (kind === 'camo') {
    g.fillStyle = '#4b5532'; g.fillRect(0, 0, 256, 256);
    const cols = ['#2f3a22', '#6b6a3f', '#1f2418', '#7d7448'];
    for (const col of cols) for (let i = 0; i < 26; i++) {
      g.fillStyle = col; g.beginPath(); g.ellipse(Math.random() * 256, Math.random() * 256, 14 + Math.random() * 30, 8 + Math.random() * 16, Math.random() * 3, 0, 6.3); g.fill();
    }
  } else if (kind === 'denim') {
    g.fillStyle = '#566a8c'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(${Math.random() < 0.5 ? '255,255,255' : '10,20,40'},${Math.random() * 0.12})`; g.fillRect(Math.random() * 256, Math.random() * 256, 1, 3 + Math.random() * 4); }
  } else { // weave / grunge: neutral mid-grey with streaks (multiplies colour)
    g.fillStyle = '#d8d8d8'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 3200; i++) { const v = 140 + Math.random() * 110; g.fillStyle = `rgba(${v},${v},${v},${Math.random() * 0.35})`; g.fillRect(Math.random() * 256, Math.random() * 256, 1 + Math.random() * 2, 1 + Math.random() * 3); }
    if (kind === 'grunge') {
      for (let i = 0; i < 70; i++) { const x = Math.random() * 256, h = 30 + Math.random() * 120; const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, 'rgba(70,52,34,0.30)'); gr.addColorStop(1, 'rgba(70,52,34,0)'); g.fillStyle = gr; g.fillRect(x, Math.random() * 256, 1 + Math.random() * 5, h); }
      for (let i = 0; i < 30; i++) { g.fillStyle = `rgba(110,60,30,${0.1 + Math.random() * 0.25})`; g.beginPath(); g.ellipse(Math.random() * 256, Math.random() * 256, 3 + Math.random() * 14, 2 + Math.random() * 8, Math.random() * 3, 0, 6.3); g.fill(); }
      for (let i = 0; i < 40; i++) { g.strokeStyle = 'rgba(235,235,235,0.5)'; g.lineWidth = 0.8; g.beginPath(); const x = Math.random() * 256, y = Math.random() * 256; g.moveTo(x, y); g.lineTo(x + (Math.random() - 0.5) * 24, y + (Math.random() - 0.5) * 24); g.stroke(); }
    }
  }
  return (texCache[kind] = mkTex(c));
}
const mtCache = new Map();
/** textured / physical material cached by key */
export function MT(key, o) { if (!mtCache.has(key)) mtCache.set(key, new THREE.MeshStandardMaterial(o)); return mtCache.get(key); }
export function MP(key, o) { if (!mtCache.has(key)) mtCache.set(key, new THREE.MeshPhysicalMaterial(o)); return mtCache.get(key); }
/** weathered painted metal */
export function paint(color, rough = 0.6, metal = 0.35) { return MT(`paint${color}|${rough}`, { color, roughness: rough, metalness: metal, map: fabric('grunge'), bumpMap: fabric('grunge'), bumpScale: 0.6 }); }

/* ============================================================ humanoid */
function makeHead(type, skin) {
  const h = new THREE.Group();
  const dark = M(0x15171a, 0.9), red = MT('bandana', { color: 0xb0261f, roughness: 0.9, map: fabric('weave') }), gray = MT('wool', { color: 0x4a4f55, roughness: 1, map: fabric('weave') }), hoodC = MT('hood', { color: 0x2a2d32, roughness: 0.95, map: fabric('weave') });
  const hair = M(0x0d0b0a, 0.9), eye = M(0x0e0a08, 0.3), white = M(0xe8e2d8, 0.4);
  const face = type !== 'balaclava' && type !== 'skimask' && type !== 'helmet';
  sph(h, 0.105, skin, 0, 0.012, 0.005, 0.92, 1.12, 1.0);
  sph(h, 0.078, skin, 0, -0.07, -0.03, 1, 0.78, 1);
  for (const sx of [-1, 1]) { sph(h, 0.026, skin, sx * 0.098, -0.012, 0.012, 0.55, 1, 0.8); if (type !== 'helmet') { sph(h, 0.013, white, sx * 0.039, 0.028, -0.093, 1, 0.7, 0.6); sph(h, 0.008, eye, sx * 0.039, 0.028, -0.099); box(h, 0.05, 0.011, 0.012, hair, sx * 0.04, 0.055, -0.096, 0, 0, sx * -0.12); } }
  add(h, new THREE.ConeGeometry(0.018, 0.05, 6), skin, 0, -0.022, -0.105, -Math.PI / 2 - 0.35, 0, 0);
  box(h, 0.05, 0.008, 0.01, M(0x5a2a22, 0.6), 0, -0.088, -0.092);
  switch (type) {
    case 'balaclava':
      sph(h, 0.118, dark, 0, 0.01, 0.006, 0.93, 1.13, 1.02); sph(h, 0.088, dark, 0, -0.07, -0.024, 1, 0.8, 1);
      box(h, 0.17, 0.046, 0.03, skin, 0, 0.026, -0.094); box(h, 0.012, 0.03, 0.02, dark, 0, 0.026, -0.108);
      for (const sx of [-1, 1]) { sph(h, 0.013, white, sx * 0.04, 0.028, -0.108, 1, 0.7, 0.5); sph(h, 0.008, eye, sx * 0.04, 0.028, -0.114); }
      break;
    case 'bandana':
      add(h, new THREE.SphereGeometry(0.118, 14, 10, 0, Math.PI * 2, 0, 1.2), red, 0, 0.022, 0.006, 0, 0, 0, 0.94, 1.12, 1.0);
      box(h, 0.06, 0.09, 0.02, red, 0, -0.02, 0.122, 0.2); box(h, 0.04, 0.07, 0.015, red, 0.04, -0.06, 0.125, 0.2, 0, 0.5);
      box(h, 0.052, 0.05, 0.015, dark, 0.04, 0.03, -0.105); box(h, 0.22, 0.01, 0.01, dark, 0, 0.06, -0.06);
      add(h, new THREE.SphereGeometry(0.083, 12, 8, 0, Math.PI * 2, 1.3, 1.8), M(0x1b1411, 1), 0, -0.065, -0.03, 0, 0, 0, 1.02, 0.9, 1.04);
      cylY(h, 0.14, 0.015, MT('hat', { color: 0x3b2a1a, roughness: 0.95, map: fabric('weave') }), 0, 0.085, 0.0);
      break;
    case 'skimask':
      sph(h, 0.118, gray, 0, 0.01, 0.006, 0.93, 1.13, 1.02); sph(h, 0.088, gray, 0, -0.07, -0.024, 1, 0.8, 1);
      box(h, 0.17, 0.046, 0.03, skin, 0, 0.026, -0.094); box(h, 0.06, 0.03, 0.02, skin, 0, -0.07, -0.1);
      for (const sx of [-1, 1]) { sph(h, 0.013, white, sx * 0.04, 0.028, -0.108, 1, 0.7, 0.5); sph(h, 0.008, eye, sx * 0.04, 0.028, -0.114); }
      cylY(h, 0.03, 0.05, gray, 0, 0.125, 0);
      break;
    case 'hood':
      sph(h, 0.14, hoodC, 0, 0.015, 0.03, 1.0, 1.08, 1.08); sph(h, 0.09, M(0x0a0705, 1), 0, 0.0, -0.075, 1, 1.15, 0.9);
      box(h, 0.12, 0.05, 0.02, dark, 0, 0.03, -0.11);
      break;
    case 'helmet':
      add(h, new THREE.SphereGeometry(0.138, 18, 12), MP('helm', { color: 0x16181a, roughness: 0.22, metalness: 0.5, clearcoat: 1, clearcoatRoughness: 0.08 }), 0, 0.015, 0.012, 0, 0, 0, 1.0, 0.97, 1.12);
      box(h, 0.2, 0.065, 0.08, MP('visor', { color: 0xb8801f, roughness: 0.05, metalness: 0.9, transparent: true, opacity: 0.82 }), 0, 0.012, -0.108);
      box(h, 0.12, 0.06, 0.06, M(0x16181a, 0.4, 0.3), 0, -0.075, -0.09);
      box(h, 0.03, 0.03, 0.3, M(0x2a2d31, 0.3, 0.5), 0, 0.14, 0.0);
      break;
  }
  if (face) { add(h, new THREE.SphereGeometry(0.107, 14, 8, 0, Math.PI * 2, 0, 1.0), hair, 0, 0.018, 0.012, 0, 0, 0, 0.93, 1.12, 1.02); }
  return h;
}

const LIMB = new THREE.CylinderGeometry(1, 0.78, 1, 12);
export class Humanoid {
  constructor(o) {
    this.o = o; this.root = new THREE.Group();
    const skin = MT(`skin${o.skin ?? 0x6b4429}`, { color: o.skin ?? 0x6b4429, roughness: 0.62 });
    const cloth = (key, col, tex) => MT(`${key}${col}${tex}`, { color: tex === 'camo' ? 0xffffff : col, roughness: 0.92, map: fabric(tex || 'weave') });
    const shirt = cloth('sh', o.shirt ?? 0x30343a, o.camo ? 'camo' : 'weave'), pants = cloth('pa', o.pants ?? 0x23262b, o.camo ? 'camo' : (o.denim ? 'denim' : 'weave'));
    const gearM = MT(`gear${o.vest}`, { color: o.vest ?? 0x3b422d, roughness: 0.85, map: fabric('weave') }), glove = M(o.glove ?? 0x151515, 0.8);
    const t = this.torso = new THREE.Group(); this.root.add(t);
    sph(t, 1, shirt, 0, 0.31, 0, 0.215, 0.27, 0.135);       // chest
    sph(t, 1, shirt, 0, 0.1, 0, 0.185, 0.2, 0.12);          // abdomen
    sph(t, 1, pants, 0, -0.02, 0, 0.19, 0.14, 0.13);        // pelvis
    sph(t, 0.078, shirt, -0.225, 0.5, 0); sph(t, 0.078, shirt, 0.225, 0.5, 0);
    sph(t, 1, shirt, 0, 0.53, 0.01, 0.12, 0.055, 0.09);
    cylY(t, 0.05, 0.1, skin, 0, 0.6, 0);
    box(t, 0.4, 0.05, 0.22, M(0x1b1712, 0.7), 0, 0.045, 0);                         // belt
    box(t, 0.05, 0.045, 0.02, M(0x9a8a5a, 0.3, 0.8), 0, 0.045, -0.115);            // buckle
    if (o.vest !== null && o.vest !== undefined) {
      box(t, 0.4, 0.36, 0.215, gearM, 0, 0.34, 0.0);
      for (const sx of [-1, 0, 1]) box(t, 0.1, 0.12, 0.05, gearM, sx * 0.12, 0.27, -0.13);
      box(t, 0.12, 0.05, 0.045, M(0x1b1d20, 0.6, 0.3), -0.12, 0.4, -0.125);
      for (const sx of [-1, 1]) box(t, 0.07, 0.3, 0.215, gearM, sx * 0.13, 0.5, 0.0);
    }
    if (o.pack) { box(t, 0.32, 0.42, 0.17, MT(`pack${o.pack}`, { color: o.pack, roughness: 0.95, map: fabric('weave') }), 0, 0.3, 0.2); box(t, 0.26, 0.14, 0.04, M(0x23261c, 0.9), 0, 0.2, 0.3); }
    this.head = makeHead(o.head || 'balaclava', skin); this.head.position.set(0, 0.74, 0); t.add(this.head);
    const mk = (m) => { const x = new THREE.Mesh(LIMB, m); x.castShadow = true; this.root.add(x); return x; };
    this.L = { thL: mk(pants), shL: mk(pants), thR: mk(pants), shR: mk(pants), uaL: mk(shirt), faL: mk(shirt), uaR: mk(shirt), faR: mk(shirt) };
    const jm = (m, r) => { const x = new THREE.Mesh(SPH, m); x.scale.setScalar(r); x.castShadow = true; this.root.add(x); return x; };
    this.J = { kL: jm(pants, 0.07), kR: jm(pants, 0.07), eL: jm(shirt, 0.052), eR: jm(shirt, 0.052), hipL: jm(pants, 0.095), hipR: jm(pants, 0.095) };
    const bt = M(0x16130f, 0.75), sole = M(0x0b0b0b, 0.9);
    const boot = () => { const b = new THREE.Group(); box(b, 0.105, 0.14, 0.12, bt, 0, 0.09, 0.05); box(b, 0.105, 0.075, 0.2, bt, 0, 0.04, -0.05); sph(b, 1, bt, 0, 0.04, -0.14, 0.052, 0.04, 0.06); box(b, 0.115, 0.025, 0.3, sole, 0, 0.0, -0.04); this.root.add(b); return b; };
    this.bootL = boot(); this.bootR = boot();
    this.handL = sph(this.root, 1, glove, 0, 0, 0, 0.042, 0.048, 0.05); this.handR = sph(this.root, 1, glove, 0, 0, 0, 0.042, 0.048, 0.05);
    this.gun = makeGun(o.gun || 'ak'); this.root.add(this.gun);
    this.e = {}; for (const k of ['eL', 'eR', 'kL', 'kR', 'sL', 'sR', 'hL', 'hR']) this.e[k] = new THREE.Vector3();
    this.tmp = new THREE.Vector3(); this.tmp2 = new THREE.Vector3(); this.phase = Math.random() * 6;
    this.P = { pelvis: V3(0, 0.93, 0), footL: V3(-0.12, 0.06, 0), footR: V3(0.12, 0.06, 0) };
  }
  setGun(type) { this.root.remove(this.gun); this.gun = makeGun(type); this.root.add(this.gun); this.gunType = type; }
  setPose(P) {
    const t = this.torso, e = this.e;
    t.position.copy(P.pelvis); t.rotation.set(P.pitch || 0, P.yaw || 0, 0, 'YXZ'); t.updateMatrix();
    e.sL.set(-0.225, 0.5, 0).applyMatrix4(t.matrix); e.sR.set(0.225, 0.5, 0).applyMatrix4(t.matrix);
    const hL = this.tmp.set(P.pelvis.x - 0.1, P.pelvis.y - 0.05, P.pelvis.z), hR = this.tmp2.set(P.pelvis.x + 0.1, P.pelvis.y - 0.05, P.pelvis.z);
    const aL = P.footL.clone(); aL.y += 0.1; const aR = P.footR.clone(); aR.y += 0.1;
    ik2(hL, aL, 0.45, 0.43, P.kneePoleL || V3(-0.2, 0.1, -1), e.kL); limb(this.L.thL, hL, e.kL, 0.082); limb(this.L.shL, e.kL, aL, 0.062);
    ik2(hR, aR, 0.45, 0.43, P.kneePoleR || V3(0.2, 0.1, -1), e.kR); limb(this.L.thR, hR, e.kR, 0.082); limb(this.L.shR, e.kR, aR, 0.062);
    this.J.kL.position.copy(e.kL); this.J.kR.position.copy(e.kR); this.J.hipL.position.copy(hL); this.J.hipR.position.copy(hR);
    this.bootL.position.set(P.footL.x, P.footL.y - 0.01, P.footL.z); this.bootR.position.set(P.footR.x, P.footR.y - 0.01, P.footR.z);
    // boots follow shin direction a little
    this.bootL.rotation.x = clamp((P.footL.y - 0.06) * -1.2, -0.5, 0.5); this.bootR.rotation.x = clamp((P.footR.y - 0.06) * -1.2, -0.5, 0.5);
    let hRp, hLp;
    const gun = this.gun, ud = gun.userData;
    if (P.aim) {
      const dir = P.aim;
      const grip = V3(0, 0, 0).copy(e.sR).addScaledVector(dir, ud.shoulder ? 0.02 : 0.26); grip.y -= ud.shoulder ? -0.04 : 0.09;
      gun.position.copy(grip); gun.quaternion.setFromUnitVectors(NZ, dir);
      hRp = grip.clone(); hLp = grip.clone().addScaledVector(dir, -ud.fore.z).add(V3(0, ud.shoulder ? -0.02 : -0.04, 0));
      if (ud.shoulder) { hRp.addScaledVector(dir, -0.02); hRp.y -= 0.1; }
    } else {
      const dir = V3(0.12, -0.7, -0.7).normalize();
      const grip = V3(0, 0, 0).copy(e.sR).add(V3(0.08, -0.38, -0.2));
      gun.position.copy(grip); gun.quaternion.setFromUnitVectors(NZ, dir);
      hRp = grip.clone(); hLp = grip.clone().addScaledVector(dir, -ud.fore.z * 0.8);
    }
    if (P.handLFree) hLp = P.handLFree;
    ik2(e.sL, hLp, 0.29, 0.28, V3(-0.6, -0.5, 0.5), e.eL); limb(this.L.uaL, e.sL, e.eL, 0.056); limb(this.L.faL, e.eL, hLp, 0.046);
    ik2(e.sR, hRp, 0.29, 0.28, V3(0.6, -0.5, 0.5), e.eR); limb(this.L.uaR, e.sR, e.eR, 0.056); limb(this.L.faR, e.eR, hRp, 0.046);
    this.J.eL.position.copy(e.eL); this.J.eR.position.copy(e.eR);
    this.handL.position.copy(hLp); this.handR.position.copy(hRp);
  }
  walk(dt, aim, run, speedK = 1) {
    this.phase += dt * (run ? 11 : 7) * speedK;
    const sw = Math.sin(this.phase), cw = Math.cos(this.phase), st = run ? 0.5 : 0.32, P = this.P;
    P.pelvis.set(0, 0.93 - 0.025 * Math.abs(cw) - (run ? 0.06 : 0), 0);
    P.footL.set(-0.12, 0.06 + Math.max(0, sw) * 0.16, -sw * st); P.footR.set(0.12, 0.06 + Math.max(0, -sw) * 0.16, sw * st);
    P.pitch = run ? 0.28 : 0.1; P.yaw = aim ? clamp(Math.atan2(-aim.x, -aim.z), -0.9, 0.9) * 0.6 : Math.sin(this.phase) * 0.12; P.aim = aim;
    P.kneePoleL = null; P.kneePoleR = null; P.handLFree = null;
    this.setPose(P);
  }
  stand(t, aim, crouch = 0) {
    const P = this.P, br = Math.sin(t * 2.2) * 0.006;
    P.pelvis.set(0, 0.93 - 0.2 * crouch + br, 0);
    P.footL.set(-0.2, 0.06, 0.05 + crouch * 0.05); P.footR.set(0.2, 0.06, -0.22);
    P.pitch = 0.08 + crouch * 0.12; P.yaw = aim ? clamp(Math.atan2(-aim.x, -aim.z), -0.9, 0.9) * 0.7 : 0.2; P.aim = aim;
    P.kneePoleL = V3(-0.5, 0, -1); P.kneePoleR = V3(0.3, 0, -1); P.handLFree = null;
    this.setPose(P);
  }
}

/* ============================================================ bike */
function makeWheel(R, rubberW, spokeTex) {
  const w = new THREE.Group();
  const tire = new THREE.Mesh(new THREE.TorusGeometry(R - rubberW * 0.55, rubberW * 0.55, 12, 36), M(0x101112, 0.95)); tire.rotation.y = Math.PI / 2; tire.castShadow = true; w.add(tire);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(R - rubberW * 1.05, 0.012, 6, 36), M(0xb9bec4, 0.25, 0.95)); rim.rotation.y = Math.PI / 2; w.add(rim);
  // knobbly tread blocks
  const treads = [];
  for (let i = 0; i < 30; i++) {
    const a = (i / 30) * Math.PI * 2; const tg = new THREE.BoxGeometry(rubberW * 0.95, 0.03, 0.045);
    tg.rotateX(-a); tg.translate(0, Math.sin(a) * (R + 0.002), Math.cos(a) * (R + 0.002)); tg.deleteAttribute('uv'); treads.push(tg);
  }
  const tm = new THREE.Mesh(mergeGeometries(treads), M(0x0a0a0b, 1)); tm.castShadow = true; w.add(tm);
  const disc = new THREE.Mesh(new THREE.CircleGeometry(R - rubberW * 1.1, 28), new THREE.MeshStandardMaterial({ map: spokeTex, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.4, metalness: 0.8 }));
  disc.rotation.y = Math.PI / 2; w.add(disc);
  cylX(w, 0.05, 0.14, M(0xc5c9ce, 0.3, 0.9), 0, 0, 0);
  return w;
}
function spokeTexture() {
  const [c, g] = canvas(256, 256); g.strokeStyle = '#d6dadd'; g.lineWidth = 2.2;
  for (let i = 0; i < 36; i++) { const a = (i / 36) * Math.PI * 2, off = (i % 2 ? 1 : -1) * 0.34; g.beginPath(); g.moveTo(128 + Math.cos(a + off) * 14, 128 + Math.sin(a + off) * 14); g.lineTo(128 + Math.cos(a) * 126, 128 + Math.sin(a) * 126); g.stroke(); }
  return texFromCanvas(c, { repeat: false });
}

export function makeBike() {
  const b = new THREE.Group(), body = new THREE.Group(); b.add(body);
  const gold = M(0xc2891b, 0.28, 0.75), frameM = M(0x1b1d20, 0.45, 0.7), chrome = M(0xc9ced3, 0.18, 1), dark = M(0x151618, 0.6, 0.5), leather = M(0x4a2e1a, 0.8, 0.05), red = M(0xb01e1a, 0.4, 0.2);
  const spoke = spokeTexture();
  const R = 0.34, ay = R;
  const wF = makeWheel(R, 0.12, spoke), wR = makeWheel(R, 0.13, spoke);
  wF.position.set(0, ay, -0.74); wR.position.set(0, ay, 0.72); b.add(wF, wR);
  // fork + front end
  const head = V3(0, 1.02, -0.5);
  for (const x of [-0.1, 0.1]) { tube(body, V3(x, 1.0, -0.52), V3(x * 1.0, ay + 0.02, -0.74), 0.026, chrome); tube(body, V3(x, 0.78, -0.58), V3(x, 0.74, -0.58), 0.034, gold); }
  tube(body, V3(-0.43, 1.12, -0.36), V3(-0.14, 1.07, -0.46), 0.017, dark); tube(body, V3(0.43, 1.12, -0.36), V3(0.14, 1.07, -0.46), 0.017, dark);
  tube(body, V3(-0.14, 1.07, -0.46), V3(0.14, 1.07, -0.46), 0.017, dark);
  cylX(body, 0.022, 0.12, M(0x0c0c0c, 0.9), -0.45, 1.12, -0.36); cylX(body, 0.022, 0.12, M(0x0c0c0c, 0.9), 0.45, 1.12, -0.36);
  tube(body, V3(-0.43, 1.12, -0.36), V3(-0.5, 1.28, -0.4), 0.01, dark); tube(body, V3(0.43, 1.12, -0.36), V3(0.5, 1.28, -0.4), 0.01, dark);
  box(body, 0.1, 0.06, 0.012, chrome, -0.5, 1.3, -0.4); box(body, 0.1, 0.06, 0.012, chrome, 0.5, 1.3, -0.4);
  // headlight
  cylZ(body, 0.125, 0.12, chrome, 0, 1.0, -0.66);
  const lens = add(body, CYL, M(0xfff3c4, 0.1, 0, { emissive: 0xffe9a8, emissiveIntensity: 1.6 }), 0, 1.0, -0.725, Math.PI / 2, 0, 0, 0.105, 0.02, 0.105);
  // front fender
  const fend = new THREE.Mesh(new THREE.CylinderGeometry(0.39, 0.39, 0.1, 16, 1, true, Math.PI * 0.2, Math.PI * 0.75), M(0xc2891b, 0.28, 0.75, { side: THREE.DoubleSide }));
  fend.rotation.z = Math.PI / 2; fend.position.set(0, ay, -0.74); fend.castShadow = true; body.add(fend);
  // frame
  tube(body, head, V3(0, 0.92, 0.5), 0.028, frameM); tube(body, V3(0, 0.98, -0.45), V3(0, 0.46, -0.05), 0.03, frameM); tube(body, V3(0, 0.46, -0.05), V3(0, 0.5, 0.45), 0.03, frameM);
  tube(body, V3(0, 0.88, 0.2), V3(0, 0.5, 0.45), 0.024, frameM);
  for (const x of [-0.1, 0.1]) { tube(body, V3(x, 0.45, 0.4), V3(x, ay, 0.72), 0.026, frameM); tube(body, V3(x, 0.84, 0.35), V3(x, ay + 0.1, 0.7), 0.014, chrome); tube(body, V3(x, 0.84, 0.35), V3(x, 0.5, 0.58), 0.02, red); }
  // engine
  box(body, 0.3, 0.3, 0.42, M(0x3a3d42, 0.5, 0.8), 0, 0.5, 0.05);
  cylY(body, 0.115, 0.28, M(0x6d7278, 0.4, 0.9), 0, 0.78, -0.12);
  for (let i = 0; i < 5; i++) cylY(body, 0.135, 0.012, M(0x7e848a, 0.4, 0.9), 0, 0.68 + i * 0.045, -0.12);
  cylX(body, 0.09, 0.4, M(0x2c2f33, 0.5, 0.8), 0, 0.55, 0.22);
  box(body, 0.2, 0.08, 0.3, dark, 0, 0.32, 0.0);
  // tank + seat
  sph(body, 0.2, gold, 0, 1.02, -0.2, 1.0, 0.85, 2.05);
  box(body, 0.2, 0.02, 0.2, M(0xf3efe4, 0.4), 0, 1.12, -0.18);
  box(body, 0.15, 0.1, 0.1, leather, -0.13, 0.98, -0.18); box(body, 0.15, 0.1, 0.1, leather, 0.13, 0.98, -0.18);
  box(body, 0.3, 0.09, 0.66, leather, 0, 0.93, 0.4, 0.04);
  box(body, 0.2, 0.05, 0.3, dark, 0, 1.0, 0.3);
  // rear fender / tail
  box(body, 0.24, 0.03, 0.5, gold, 0, 0.82, 0.88, -0.35); box(body, 0.1, 0.07, 0.03, M(0x30c030, 0.5), 0, 0.64, 1.12);
  const tail = add(body, BOX, M(0xff2a20, 0.3, 0, { emissive: 0xff1a10, emissiveIntensity: 0.4 }), 0, 0.77, 1.1, 0, 0, 0, 0.12, 0.05, 0.04);
  // exhaust
  tube(body, V3(0.14, 0.62, -0.1), V3(0.2, 0.43, 0.3), 0.032, chrome); tube(body, V3(0.2, 0.43, 0.3), V3(0.23, 0.44, 0.95), 0.05, chrome);
  cylZ(body, 0.062, 0.12, dark, 0.235, 0.44, 1.0);
  // pegs & kickstand
  cylX(body, 0.016, 0.1, chrome, 0.24, 0.36, 0.12); cylX(body, 0.016, 0.1, chrome, -0.24, 0.36, 0.12);
  tube(body, V3(-0.12, 0.45, 0.1), V3(-0.3, 0.1, 0.1), 0.012, dark);
  // ground shadow blob
  const [c, g] = canvas(64, 128); const gr = g.createRadialGradient(32, 64, 4, 32, 64, 60); gr.addColorStop(0, 'rgba(0,0,0,0.55)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 128);
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 2.6), new THREE.MeshBasicMaterial({ map: texFromCanvas(c, { repeat: false }), transparent: true, depthWrite: false, fog: true }));
  blob.rotation.x = -Math.PI / 2; blob.position.set(0, 0.04, 0.0); blob.renderOrder = 2; b.add(blob);
  b.userData = { wF, wR, body, lens, tail, blob };
  return b;
}

/* ============================================================ vehicles */
function wheelMesh(r, w) {
  const g = new THREE.Group();
  cylX(g, r, w, M(0x121314, 0.95), 0, 0, 0);
  cylX(g, r * 0.55, w * 1.02, M(0x6b6f72, 0.5, 0.6), 0, 0, 0);
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; add(g, BOX, M(0x0a0a0a, 1), 0, Math.sin(a) * r, Math.cos(a) * r, -a, 0, 0, w * 1.04, 0.07, 0.12); }
  return g;
}

const vp = (c, r) => paint(c, r, 0.25);
function makeBarrier() {
  const b = new THREE.Group(), conc = paint(0x9a9a94, 0.95, 0.0), stripe = M(0xb8321f, 0.8), drum = paint(0xa04a1c, 0.6, 0.4);
  for (const z of [-7.5, 6.5]) {
    for (let x = -5.2; x <= 5.3; x += 1.75) {
      box(b, 1.6, 0.42, 0.7, conc, x, 0.21, z); box(b, 1.6, 0.5, 0.36, conc, x, 0.65, z); box(b, 1.2, 0.12, 0.38, stripe, x, 0.5, z - 0.01);
    }
    for (const x of [-3.0, 0.2, 3.4]) { cylY(b, 0.28, 0.9, drum, x, 0.45 + 0.5, z + 0.9); cylY(b, 0.29, 0.1, M(0xeeeeee, 0.7), x, 1.15, z + 0.9); }
  }
  b.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return b;
}
export function makeTruck() {
  const g = new THREE.Group(), r = new THREE.Group(); g.add(r);
  const paint = vp(0x8a6a34, 0.75), paint2 = vp(0x5f4a26, 0.8), tarp = M(0x4e5a35, 0.95), dark = M(0x16171a, 0.7, 0.4), glass = M(0x1b2630, 0.2, 0.7);
  box(r, 2.3, 0.5, 7.4, dark, 0, 0.95, 0.1);                           // chassis
  box(r, 2.4, 1.9, 1.8, paint, 0, 2.0, -2.45);                          // cab
  box(r, 2.3, 0.8, 1.2, paint, 0, 1.45, -3.55);                         // hood
  box(r, 2.1, 0.8, 0.06, glass, 0, 2.5, -3.36, -0.22);                  // windshield
  box(r, 0.06, 0.7, 1.2, glass, -1.21, 2.45, -2.45); box(r, 0.06, 0.7, 1.2, glass, 1.21, 2.45, -2.45);
  box(r, 2.6, 0.35, 0.4, dark, 0, 0.95, -4.2);                          // bumper
  for (let i = -2; i <= 2; i++) box(r, 0.07, 0.6, 0.06, dark, i * 0.35, 1.45, -4.17);
  box(r, 0.34, 0.2, 0.08, M(0xfff0c0, 0.2, 0, { emissive: 0xffe6a0, emissiveIntensity: 1.2 }), -0.85, 1.55, -4.17); box(r, 0.34, 0.2, 0.08, M(0xfff0c0, 0.2, 0, { emissive: 0xffe6a0, emissiveIntensity: 1.2 }), 0.85, 1.55, -4.17);
  // bed with plank walls + crates
  box(r, 2.4, 0.15, 5.0, paint2, 0, 1.3, 1.3);
  box(r, 0.1, 0.95, 5.0, paint2, -1.2, 1.8, 1.3); box(r, 0.1, 0.95, 5.0, paint2, 1.2, 1.8, 1.3); box(r, 2.4, 0.95, 0.1, paint2, 0, 1.8, 3.8);
  box(r, 1.0, 0.8, 1.0, M(0x6d5a35, 0.9), -0.6, 1.85, 2.7); box(r, 0.9, 0.6, 0.9, tarp, 0.6, 1.75, 3.0); box(r, 0.8, 0.5, 0.8, M(0x39422a, 0.9), 0.55, 2.25, 3.0, 0, 0.4, 0);
  box(r, 0.2, 0.2, 3.0, dark, 0, 2.95, -1.3);
  // MG mount on cab roof
  box(r, 0.15, 0.3, 0.15, dark, 0, 3.05, -1.5); const mg = makeGun('ak'); mg.scale.setScalar(1.6); mg.position.set(0, 3.25, -1.5); r.add(mg);
  // exhaust stack
  cylY(r, 0.08, 1.6, dark, 1.0, 2.5, -1.4);
  // wheels
  g.userData.wheels = [];
  for (const z of [-2.8, 1.1, 2.7]) for (const x of [-1.18, 1.18]) { const w = wheelMesh(0.62, 0.34); w.position.set(x, 0.62, z); r.add(w); g.userData.wheels.push(w); }
  for (const x of [-1.0, 1.0]) for (const z of [-0.2]) box(r, 0.1, 0.3, 1.4, dark, x, 1.2, z);
  r.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  // gunner
  const gunner = new Humanoid({ head: 'balaclava', shirt: 0x2c3028, pants: 0x25282a, vest: 0x3b3a2c, gun: 'ak' });
  gunner.root.position.set(0, 1.38, -0.8); g.add(gunner.root);
  g.userData.barrier = makeBarrier(); g.add(g.userData.barrier);
  g.userData.gunner = gunner; g.userData.mg = mg; g.userData.muzzle = V3(0, 3.3, -2.5); g.userData.height = 3.4;
  return g;
}

export function makeArmor() {
  const g = new THREE.Group();
  const hull = vp(0x4a5238, 0.7), hull2 = vp(0x3a412c, 0.75), dark = M(0x15171a, 0.7, 0.4);
  box(g, 2.5, 1.0, 5.4, hull, 0, 1.2, 0);
  box(g, 2.5, 0.9, 1.7, hull, 0, 1.45, -2.9, 0.5); box(g, 2.6, 0.5, 5.0, hull2, 0, 0.75, 0.1);
  box(g, 2.3, 0.8, 1.0, hull, 0, 1.0, -3.3, 0.2);
  box(g, 1.7, 0.08, 0.5, dark, 0, 1.85, -2.5, 0.5);
  for (const z of [-1.2, 0.4, 1.8]) { box(g, 0.05, 0.28, 0.6, dark, -1.27, 1.45, z); box(g, 0.05, 0.28, 0.6, dark, 1.27, 1.45, z); }
  box(g, 2.7, 0.2, 0.3, dark, 0, 0.55, -3.9);
  const turret = new THREE.Group(); turret.position.set(0, 1.95, 0.4); g.add(turret);
  cylY(turret, 0.95, 0.55, hull2, 0, 0.25, 0); box(turret, 0.5, 0.4, 0.6, hull, 0, 0.35, -0.8);
  cylZ(turret, 0.07, 1.6, dark, 0, 0.38, -1.7); cylZ(turret, 0.11, 0.4, dark, 0, 0.38, -1.0);
  box(turret, 0.3, 0.1, 0.4, M(0xfff0c0, 0.2, 0, { emissive: 0xffe6a0, emissiveIntensity: 0.5 }), 0.5, 0.5, -0.8);
  cylY(turret, 0.25, 0.12, dark, -0.4, 0.58, 0.2);
  box(g, 0.1, 1.2, 0.04, dark, 1.0, 3.1, 2.2).rotation.z = 0.05;
  box(g, 2.1, 0.5, 0.9, M(0x5c4f33, 0.9), 0, 1.95, 2.0, 0, 0, 0);
  g.userData.wheels = [];
  for (const z of [-2.2, -0.7, 0.9, 2.3]) for (const x of [-1.3, 1.3]) { const w = wheelMesh(0.62, 0.42); w.position.set(x, 0.62, z); g.add(w); g.userData.wheels.push(w); }
  box(g, 0.34, 0.2, 0.08, M(0xfff0c0, 0.2, 0, { emissive: 0xffe6a0, emissiveIntensity: 1.2 }), -0.9, 1.0, -3.82); box(g, 0.34, 0.2, 0.08, M(0xfff0c0, 0.2, 0, { emissive: 0xffe6a0, emissiveIntensity: 1.2 }), 0.9, 1.0, -3.82);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  g.userData.barrier = makeBarrier(); g.add(g.userData.barrier);
  g.userData.turret = turret; g.userData.muzzle = V3(0, 2.4, -2.9); g.userData.height = 2.6;
  return g;
}

export function makeChopper() {
  const g = new THREE.Group();
  const bodyM = M(0x262b2f, 0.45, 0.5), dark = M(0x131517, 0.6, 0.5), glass = M(0x1a2b3d, 0.08, 0.9, { transparent: true, opacity: 0.88 });
  sph(g, 1, bodyM, 0, 0, 0.2, 1.05, 0.95, 2.4);
  sph(g, 1, glass, 0, 0.28, -1.5, 0.82, 0.62, 1.1);
  const boom = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.36, 4.8, 8), bodyM); boom.rotation.x = Math.PI / 2; boom.position.set(0, 0.35, 4.0); boom.castShadow = true; g.add(boom);
  box(g, 0.08, 1.4, 0.95, bodyM, 0, 1.0, 6.2, -0.35); box(g, 1.7, 0.06, 0.5, bodyM, 0, 0.5, 5.8);
  box(g, 0.5, 0.18, 0.4, M(0xb01e1a, 0.5), 0, 1.5, 6.5, -0.3);
  const tr = new THREE.Group(); tr.position.set(0.2, 0.95, 6.35); g.add(tr);
  for (let i = 0; i < 2; i++) box(tr, 0.03, 1.3, 0.1, dark, 0, 0, 0, i * Math.PI / 2);
  cylY(g, 0.16, 0.55, dark, 0, 1.25, 0.2);
  const rotor = new THREE.Group(); rotor.position.set(0, 1.55, 0.2); g.add(rotor);
  for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2; box(rotor, 4.6, 0.035, 0.28, dark, Math.cos(a) * 2.65, 0, -Math.sin(a) * 2.65, 0, a, 0); }
  cylY(rotor, 0.3, 0.1, dark, 0, 0, 0);
  const disc = new THREE.Mesh(new THREE.CircleGeometry(5.0, 32), new THREE.MeshBasicMaterial({ color: 0x222222, transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false }));
  disc.rotation.x = -Math.PI / 2; disc.position.y = 1.56; disc.position.z = 0.2; g.add(disc);
  for (const x of [-0.95, 0.95]) { cylZ(g, 0.04, 3.2, dark, x, -1.2, 0.2); tube(g, V3(x, -1.2, -0.7), V3(x * 0.6, -0.55, -0.6), 0.035, dark); tube(g, V3(x, -1.2, 1.1), V3(x * 0.6, -0.55, 1.0), 0.035, dark); }
  box(g, 3.8, 0.08, 0.55, bodyM, 0, -0.1, 0.1);
  for (const x of [-1.5, 1.5]) { cylZ(g, 0.17, 1.2, M(0x3a3f45, 0.5, 0.5), x, -0.25, -0.4); cylZ(g, 0.17, 0.08, dark, x, -0.25, -1.0); }
  cylZ(g, 0.06, 0.8, dark, 0, -0.75, -1.9); cylZ(g, 0.12, 0.25, dark, 0, -0.75, -1.4);
  const nav = add(g, SPH, M(0xff2020, 0.3, 0, { emissive: 0xff0000, emissiveIntensity: 2 }), 0, -0.9, 0.5, 0, 0, 0, 0.07, 0.07, 0.07);
  g.userData = { rotor, tr, disc, muzzle: V3(0, -0.75, -2.2), nav, height: 2.4 };
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

/* ============================================================ misc props */
export function makeCrate(kind) {
  const g = new THREE.Group();
  if (kind === 'med') {
    box(g, 0.9, 0.6, 0.6, M(0xf1f1ee, 0.5), 0, 0.5, 0); box(g, 0.5, 0.14, 0.62, M(0xd02020, 0.5), 0, 0.5, 0); box(g, 0.14, 0.5, 0.62, M(0xd02020, 0.5), 0, 0.5, 0);
  } else {
    box(g, 1.1, 0.65, 0.7, M(0x55603a, 0.8), 0, 0.5, 0); box(g, 1.14, 0.1, 0.74, M(0x333a22, 0.8), 0, 0.82, 0);
    box(g, 0.5, 0.2, 0.04, M(0xf2c14e, 0.6), 0, 0.55, 0.36); box(g, 0.1, 0.35, 0.02, M(0xf2c14e, 0.6), -0.4, 0.5, 0.36);
  }
  const col = kind === 'med' ? 0x40ff90 : 0xffd34e;
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 14, 14, 1, true), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
  beam.position.y = 7; g.add(beam); g.userData.beam = beam;
  g.traverse((o) => { if (o.isMesh && o !== beam) o.castShadow = true; });
  return g;
}

export function makeArch(text, color = 0xf2c14e, finish = false) {
  const g = new THREE.Group();
  const steel = M(0x2b2f35, 0.5, 0.7);
  for (const x of [-7.6, 7.6]) { box(g, 0.5, 8, 0.5, steel, x, 4, 0); box(g, 1.1, 0.4, 1.1, M(0x555a60, 0.8), x, 0.2, 0); }
  box(g, 16.2, 1.3, 0.5, steel, 0, 8.1, 0);
  const [c, ctx] = canvas(1024, 128);
  ctx.fillStyle = '#16191d'; ctx.fillRect(0, 0, 1024, 128);
  if (finish) { for (let i = 0; i < 64; i++) for (let j = 0; j < 8; j++) if ((i + j) % 2 === 0) { ctx.fillStyle = '#e8e8e8'; ctx.fillRect(i * 16, j * 16, 16, 16); } ctx.fillStyle = 'rgba(10,10,10,0.72)'; ctx.fillRect(180, 18, 664, 92); }
  ctx.fillStyle = '#' + color.toString(16).padStart(6, '0'); ctx.font = 'bold 78px Impact, "Arial Narrow", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, 512, 70);
  const banner = new THREE.Mesh(new THREE.PlaneGeometry(15.4, 1.9), new THREE.MeshBasicMaterial({ map: texFromCanvas(c, { repeat: false }), side: THREE.DoubleSide, fog: true }));
  banner.position.set(0, 8.1, 0.28); g.add(banner);
  const b2 = banner.clone(); b2.position.z = -0.28; g.add(b2);
  const lightM = M(color, 0.3, 0, { emissive: color, emissiveIntensity: 2 });
  for (let i = 0; i < 9; i++) sph(g, 0.14, lightM, -7 + i * 1.75, 7.35, 0);
  // bunting
  const pen = new THREE.ConeGeometry(0.28, 0.7, 3);
  for (let i = 0; i < 17; i++) { const m = new THREE.Mesh(pen, M(i % 2 ? color : 0xeeeeee, 0.7)); m.position.set(-7.6 + i * 0.95, 7.2 - Math.sin(i / 16 * Math.PI) * 0.15, 0.1); m.rotation.z = Math.PI; g.add(m); }
  return g;
}

export function makeRocketMesh(kind) {
  const g = new THREE.Group();
  if (kind === 'frag') { sph(g, 0.1, M(0x35432a, 0.5, 0.4), 0, 0, 0); box(g, 0.03, 0.05, 0.03, M(0x999999, 0.4, 0.8), 0, 0.1, 0); return g; }
  const s = kind === 'nuke' ? 2.6 : 1;
  cylZ(g, 0.09 * s, 0.9 * s, kind === 'nuke' ? M(0xe6e6e6, 0.4, 0.3) : M(0x4a5330, 0.6, 0.3), 0, 0, 0);
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.09 * s, 0.35 * s, 10), M(kind === 'nuke' ? 0xc8281e : 0x2b2f1d, 0.4, 0.3)); nose.rotation.x = -Math.PI / 2; nose.position.z = -0.62 * s; g.add(nose);
  for (let i = 0; i < 4; i++) box(g, 0.01, 0.2 * s, 0.22 * s, M(0x222426, 0.6, 0.4), 0, 0, 0.4 * s, 0, 0, i * Math.PI / 2).translateY(0.1 * s);
  const fl = new THREE.Mesh(new THREE.ConeGeometry(0.1 * s, 0.9 * s, 8), new THREE.MeshBasicMaterial({ color: 0xffb040, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  fl.rotation.x = Math.PI / 2; fl.position.z = 0.9 * s; g.add(fl); g.userData.flame = fl;
  return g;
}
