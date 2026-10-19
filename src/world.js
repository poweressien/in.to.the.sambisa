import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { G } from './state.js';
import { fbm, noise2, rng, lerp, clamp, smooth, canvas, tileDraw, texFromCanvas } from './util.js';
import { LANE_X } from './data.js';

export const CH = 60, NCH = 9;
export const FOG_COL = 0xb4c4c0;
const SUN_DIR = new THREE.Vector3(-0.42, 0.47, -0.78).normalize();

/* ------------------------------------------------------------ terrain */
export function groundY(x, s) {
  const ax = Math.abs(x);
  if (ax < 6.8) return 0;
  if (ax < 9) return -0.12 * (ax - 6.8) / 2.2;
  const m = smooth(9, 48, ax);
  const n = fbm(x * 0.03 + 11.3, s * 0.03, 3);
  const small = (noise2(x * 0.22, s * 0.22) - 0.5) * 0.55 * smooth(9, 16, ax);
  return -0.12 + m * (n * 15 - 2.0) + small;
}

/* ------------------------------------------------------------ textures */
function makeRoadTexture() {
  const W = 1024, H = 614; // 20 m wide x 12 m long
  const [c, g] = canvas(W, H);
  const pxm = W / 20;
  g.clearRect(0, 0, W, H);
  // shoulders (gravel / dust) : alpha fades out
  const grd = g.createLinearGradient(0, 0, W, 0);
  const a0 = 0, a1 = 0.12, a2 = 0.28, a3 = 0.72, a4 = 0.88, a5 = 1;
  grd.addColorStop(a0, 'rgba(120,98,66,0)'); grd.addColorStop(a1, 'rgba(120,98,66,0.85)'); grd.addColorStop(a2, 'rgba(96,82,60,1)');
  grd.addColorStop(a3, 'rgba(96,82,60,1)'); grd.addColorStop(a4, 'rgba(120,98,66,0.85)'); grd.addColorStop(a5, 'rgba(120,98,66,0)');
  g.fillStyle = grd; g.fillRect(0, 0, W, H);
  // asphalt body
  const x0 = (10 - 6.2) * pxm, x1 = (10 + 6.2) * pxm;
  g.fillStyle = '#3b3c3e'; g.fillRect(x0, 0, x1 - x0, H);
  tileDraw(g, W, H, () => {
    // patches
    for (let i = 0; i < 12; i++) {
      g.fillStyle = `rgba(${40 + Math.random() * 30},${40 + Math.random() * 30},${42 + Math.random() * 30},0.45)`;
      g.fillRect(x0 + Math.random() * (x1 - x0 - 120), Math.random() * H, 60 + Math.random() * 200, 20 + Math.random() * 90);
    }
    // tyre wear
    for (const cx of [-3.1, -1.5, 1.5, 3.1]) {
      g.fillStyle = 'rgba(22,22,24,0.22)'; g.fillRect((10 + cx - 0.35) * pxm, 0, 0.7 * pxm, H);
    }
    // cracks
    g.strokeStyle = 'rgba(15,15,16,0.7)'; g.lineWidth = 1.2;
    for (let i = 0; i < 14; i++) {
      let x = x0 + Math.random() * (x1 - x0), y = Math.random() * H; g.beginPath(); g.moveTo(x, y);
      for (let k = 0; k < 7; k++) { x += (Math.random() - 0.5) * 40; y += Math.random() * 38; g.lineTo(x, y); }
      g.stroke();
    }
    // oil stains & potholes
    for (let i = 0; i < 5; i++) {
      g.fillStyle = 'rgba(12,12,14,0.35)';
      g.beginPath(); g.ellipse(x0 + Math.random() * (x1 - x0), Math.random() * H, 10 + Math.random() * 28, 6 + Math.random() * 14, Math.random(), 0, 6.3); g.fill();
    }
    // sand / dust encroaching from edges
    for (const side of [0, 1]) {
      for (let i = 0; i < 90; i++) {
        const ex = side ? x1 - Math.random() * 70 : x0 + Math.random() * 70;
        g.fillStyle = `rgba(150,124,86,${Math.random() * 0.25})`;
        g.beginPath(); g.ellipse(ex, Math.random() * H, 3 + Math.random() * 14, 2 + Math.random() * 6, 0, 0, 6.3); g.fill();
      }
    }
  }, false, true);
  // grain
  const img = g.getImageData(x0, 0, x1 - x0, H);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 26;
    img.data[i] += n; img.data[i + 1] += n; img.data[i + 2] += n;
  }
  g.putImageData(img, x0, 0);
  // lane markings
  g.fillStyle = '#d9d6c4';
  g.fillRect((10 - 5.65) * pxm, 0, 0.16 * pxm, H); // left edge line
  g.fillRect((10 + 5.5) * pxm, 0, 0.16 * pxm, H);  // right edge line
  g.fillStyle = '#e7d58a'; // centre dashes: 3 m dash, 3 m gap (period 6 m)
  for (let i = 0; i < 2; i++) g.fillRect((10 - 0.08) * pxm, i * 6 * pxm + 0.0 * pxm, 0.16 * pxm, 3 * pxm * (H / (12 * pxm)));
  // wear on the paint
  g.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 260; i++) {
    g.fillStyle = `rgba(0,0,0,${Math.random() * 0.5})`;
    g.fillRect(Math.random() * W, Math.random() * H, 2 + Math.random() * 10, 1 + Math.random() * 6);
  }
  g.globalCompositeOperation = 'source-over';
  const t = texFromCanvas(c, { aniso: 8 });
  t.wrapS = THREE.ClampToEdgeWrapping;
  return t;
}

function makeGroundTexture() {
  const S = 512; const [c, g] = canvas(S, S);
  g.fillStyle = '#4c6a2c'; g.fillRect(0, 0, S, S);
  tileDraw(g, S, S, () => {
    for (let i = 0; i < 260; i++) {
      const r = 8 + Math.random() * 40, l = 28 + Math.random() * 14;
      g.fillStyle = `hsla(${78 + Math.random() * 30},${35 + Math.random() * 25}%,${l}%,${0.12 + Math.random() * 0.18})`;
      g.beginPath(); g.arc(Math.random() * S, Math.random() * S, r, 0, 6.3); g.fill();
    }
    for (let i = 0; i < 18; i++) {
      g.fillStyle = `rgba(${96 + Math.random() * 30},${72 + Math.random() * 20},${44},${0.12 + Math.random() * 0.2})`;
      g.beginPath(); g.ellipse(Math.random() * S, Math.random() * S, 10 + Math.random() * 40, 6 + Math.random() * 20, Math.random() * 3, 0, 6.3); g.fill();
    }
    for (let i = 0; i < 1500; i++) {
      const x = Math.random() * S, y = Math.random() * S;
      g.strokeStyle = `hsla(${70 + Math.random() * 50},${40 + Math.random() * 30}%,${20 + Math.random() * 30}%,0.55)`;
      g.lineWidth = 1; g.beginPath(); g.moveTo(x, y); g.lineTo(x + (Math.random() - 0.5) * 5, y - 3 - Math.random() * 7); g.stroke();
    }
  });
  return texFromCanvas(c, { aniso: 8 });
}

function makeBladeTexture() {
  const [c, g] = canvas(128, 128);
  for (let i = 0; i < 26; i++) {
    const x = 14 + Math.random() * 100, h = 50 + Math.random() * 74, lean = (Math.random() - 0.5) * 50;
    const grad = g.createLinearGradient(0, 128, 0, 128 - h);
    grad.addColorStop(0, '#2c4a18'); grad.addColorStop(1, `hsl(${85 + Math.random() * 25},55%,${38 + Math.random() * 14}%)`);
    g.fillStyle = grad;
    g.beginPath(); g.moveTo(x - 3, 128); g.quadraticCurveTo(x + lean * 0.3, 128 - h * 0.55, x + lean, 128 - h); g.quadraticCurveTo(x + lean * 0.3 + 3, 128 - h * 0.5, x + 3, 128); g.fill();
  }
  return texFromCanvas(c, { repeat: false });
}

function makeCloudTexture() {
  const [c, g] = canvas(256, 128);
  for (let i = 0; i < 40; i++) {
    const x = 40 + Math.random() * 176, y = 50 + Math.random() * 40, r = 18 + Math.random() * 34;
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, 'rgba(255,255,255,0.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 256, 128);
  }
  return texFromCanvas(c, { repeat: false });
}

/* ------------------------------------------------------------ geometry builders */
const prep = (g) => {
  g.deleteAttribute('uv'); g.deleteAttribute('normal');
  g = mergeVertices(g);
  g.computeVertexNormals();
  return g;
};
function paint(g, base, varAmt = 0.15, y0 = 0, y1 = 1, dark = 0.75, light = 1.15) {
  const pos = g.attributes.position; const col = new Float32Array(pos.count * 3);
  const c = new THREE.Color(base);
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const n = 1 + (noise2(pos.getX(i) * 3.1 + pos.getZ(i) * 1.7, y * 2.9) - 0.5) * varAmt * 2;
    const k = n * lerp(dark, light, clamp((y - y0) / (y1 - y0), 0, 1));
    col[i * 3] = c.r * k; col[i * 3 + 1] = c.g * k; col[i * 3 + 2] = c.b * k;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}
function blob(radius, detail, sy, seed, base, varAmt = 0.14) {
  let g = new THREE.IcosahedronGeometry(radius, detail);
  g.deleteAttribute('uv'); g.deleteAttribute('normal'); g = mergeVertices(g);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const k = 1 + (noise2(x * 1.7 + seed, z * 1.7 + y * 1.3) - 0.5) * 0.55;
    p.setXYZ(i, x * k, y * k * sy, z * k);
  }
  g.computeVertexNormals();
  return paint(g, base, varAmt, -radius, radius, 0.7, 1.2);
}

/* ---- leaf / needle atlases: top part = foliage, bottom-left 16px patch = opaque white (used by trunks etc.) ---- */
function makeLeafTexture() {
  const [c, g] = canvas(256, 256);
  const leaf = (x, y, a, L, W, h, s, l) => {
    g.save(); g.translate(x, y); g.rotate(a);
    const gr = g.createLinearGradient(0, -W, 0, W); gr.addColorStop(0, `hsl(${h},${s}%,${l + 10}%)`); gr.addColorStop(1, `hsl(${h + 4},${s}%,${l - 8}%)`);
    g.fillStyle = gr; g.beginPath(); g.moveTo(0, 0); g.quadraticCurveTo(L * 0.5, -W, L, 0); g.quadraticCurveTo(L * 0.5, W, 0, 0); g.fill();
    g.strokeStyle = `hsla(${h - 8},${s - 10}%,${l + 22}%,.55)`; g.lineWidth = 0.9; g.beginPath(); g.moveTo(0, 0); g.lineTo(L * 0.92, 0); g.stroke();
    g.restore();
  };
  for (let i = 0; i < 160; i++) leaf(Math.random() * 256, Math.random() * 232, Math.random() * 6.28, 26 + Math.random() * 14, 7 + Math.random() * 5, 100 + Math.random() * 18, 40 + Math.random() * 18, 14 + Math.random() * 8);
  for (let i = 0; i < 260; i++) leaf(Math.random() * 256, Math.random() * 232, Math.random() * 6.28, 24 + Math.random() * 14, 7 + Math.random() * 5, 92 + Math.random() * 30, 42 + Math.random() * 22, 24 + Math.random() * 20);
  g.fillStyle = '#fff'; g.fillRect(0, 240, 16, 16);
  g.clearRect(0, 232, 256, 8);
  return texFromCanvas(c, { aniso: 4 });
}
function makeNeedleTexture() {
  const [c, g] = canvas(256, 256);
  g.strokeStyle = '#4a3523'; g.lineWidth = 3; g.beginPath(); g.moveTo(128, 232); g.lineTo(128, 4); g.stroke();
  for (let y = 228; y > 6; y -= 2.2) {
    const k = 0.35 + 0.65 * (y / 232);
    for (const sd of [-1, 1]) {
      const L = (46 + Math.random() * 26) * k, a = (0.5 + Math.random() * 0.35);
      const x0 = 128, x1 = x0 + sd * Math.sin(a + 0.4) * L, y1 = y + Math.cos(a) * L * 0.55 - 6;
      g.strokeStyle = `hsl(${112 + Math.random() * 20},${34 + Math.random() * 16}%,${15 + Math.random() * 12}%)`; g.lineWidth = 1.7;
      g.beginPath(); g.moveTo(x0, y); g.lineTo(x1, y1); g.stroke();
      if (Math.random() < 0.35) { g.strokeStyle = `hsl(${95 + Math.random() * 15},45%,${30 + Math.random() * 8}%)`; g.beginPath(); g.moveTo(x1 - sd * 6, y1 - 2); g.lineTo(x1, y1); g.stroke(); }
    }
  }
  g.fillStyle = '#fff'; g.fillRect(0, 240, 16, 16); g.clearRect(0, 232, 256, 8);
  return texFromCanvas(c, { aniso: 4 });
}
const WHITE = 0.03;
function setUV(g, u, v) { const n = g.attributes.position.count, a = new Float32Array(n * 2); for (let i = 0; i < n; i++) { a[i * 2] = u; a[i * 2 + 1] = v; } g.setAttribute('uv', new THREE.BufferAttribute(a, 2)); return g; }
const solid = (g) => setUV(g, WHITE, WHITE);

/** cluster of leaf cards inside an ellipsoid, normals point away from the centre (soft volumetric light) */
function crownCards(count, c, rad, size, seed, base, varAmt = 0.18) {
  const r = rng(seed), parts = [], col = new THREE.Color();
  for (let i = 0; i < count; i++) {
    let x, y, z; do { x = r() * 2 - 1; y = r() * 2 - 1; z = r() * 2 - 1; } while (x * x + y * y + z * z > 1 || x * x + y * y + z * z < 0.18);
    const g = new THREE.PlaneGeometry(size * (0.8 + r() * 0.5), size * (0.8 + r() * 0.5));
    g.rotateZ(r() * 6.28); g.rotateX((r() - 0.5) * 2.6); g.rotateY(r() * 6.28);
    const px = c[0] + x * rad[0], py = c[1] + y * rad[1], pz = c[2] + z * rad[2]; g.translate(px, py, pz);
    const p = g.attributes.position, n = g.attributes.normal, uv = g.attributes.uv, cl = new Float32Array(p.count * 3);
    const shade = 0.72 + 0.5 * clamp((y + 1) / 2, 0, 1) * (0.7 + r() * 0.6), hue = (r() - 0.5) * varAmt;
    col.set(base);
    for (let k = 0; k < p.count; k++) {
      const nx = p.getX(k) - c[0], ny = p.getY(k) - (c[1] - rad[1] * 0.35), nz = p.getZ(k) - c[2], l = Math.hypot(nx, ny, nz) || 1;
      n.setXYZ(k, nx / l, ny / l, nz / l);
      uv.setXY(k, uv.getX(k), 0.1 + uv.getY(k) * 0.88);
      cl[k * 3] = col.r * shade * (1 + hue); cl[k * 3 + 1] = col.g * shade; cl[k * 3 + 2] = col.b * shade * (1 - hue);
    }
    g.setAttribute('color', new THREE.BufferAttribute(cl, 3)); parts.push(g);
  }
  return parts;
}

function pineGeo() {
  const parts = [], r = rng(77);
  const trunk = new THREE.CylinderGeometry(0.11, 0.3, 11, 7, 1, true); trunk.translate(0, 5.5, 0);
  parts.push(solid(paint(prep(trunk), 0x4b3626, 0.14, 0, 11, 0.7, 1)));
  const core = new THREE.ConeGeometry(1.3, 8.4, 8, 1, true); core.translate(0, 6.2, 0);
  parts.push(solid(paint(prep(core), 0x1d3318, 0.1, 2, 10, 0.55, 0.8)));
  const col = new THREE.Color();
  for (let L = 0; L < 11; L++) {
    const t = L / 10, y0 = 1.9 + t * 8.2, rad = 2.7 * Math.pow(1 - t, 0.85) + 0.55, n = L > 7 ? 5 : 7;
    for (let k = 0; k < n; k++) {
      const yaw = (k / n) * Math.PI * 2 + L * 0.9 + (r() - 0.5) * 0.5, len = rad * (0.95 + r() * 0.25), w = 1.5 * (0.8 + 0.4 * (1 - t));
      const g = new THREE.PlaneGeometry(w, len, 1, 3), p = g.attributes.position, nn = g.attributes.normal, uv = g.attributes.uv, cl = new Float32Array(p.count * 3);
      const sh = 0.8 + r() * 0.35 + (1 - t) * 0.05; col.set(0xffffff);
      for (let i = 0; i < p.count; i++) {
        const u = p.getX(i), tt = clamp((p.getY(i) + len / 2) / len, 0, 1);
        p.setXYZ(i, u * (1 - 0.25 * tt), -tt * len * 0.32 - tt * tt * 0.25, tt * len);
        uv.setXY(i, uv.getX(i), 0.1 + tt * 0.88);
        const ox = u, oz = tt * len; // outward direction before yaw is +z
        nn.setXYZ(i, ox * 0.15, 0.75, 0.55 + 0.0 * oz);
        const b = sh * (0.7 + 0.45 * (1 - tt * 0.5)) * (0.85 + t * 0.2);
        cl[i * 3] = b; cl[i * 3 + 1] = b; cl[i * 3 + 2] = b;
      }
      g.rotateY(yaw); g.translate(0, y0 + (r() - 0.5) * 0.25, 0);
      g.setAttribute('color', new THREE.BufferAttribute(cl, 3)); parts.push(g);
    }
  }
  return mergeGeometries(parts);
}
function broadGeo() {
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.2, 0.46, 4.6, 8, 2, true); trunk.translate(0, 2.3, 0);
  { const p = trunk.attributes.position; for (let i = 0; i < p.count; i++) { const a = Math.atan2(p.getZ(i), p.getX(i)), k = 1 + Math.sin(a * 5 + p.getY(i)) * 0.07 + (p.getY(i) < 0.5 ? 0.25 * (0.5 - p.getY(i)) : 0); p.setX(i, p.getX(i) * k); p.setZ(i, p.getZ(i) * k); } }
  parts.push(solid(paint(prep(trunk), 0x5a4533, 0.2, 0, 4.6, 0.6, 1)));
  for (const [ang, ln] of [[0.9, 2.4], [-0.8, 2.2], [0.2, 2.0]]) {
    const arm = new THREE.CylinderGeometry(0.09, 0.2, ln, 6, 1, true); arm.translate(0, ln / 2, 0); arm.rotateZ(-ang); arm.rotateY(ang * 4); arm.translate(0, 4.0, 0);
    parts.push(solid(paint(prep(arm), 0x4f3d2c, 0.1, 3.4, 6.4, 0.8, 1)));
  }
  parts.push(...[[0, 6.3, 0, 2.2], [0, 6.0, 0, 1.7]].map(([x, y, z, rr]) => solid(blob(rr, 1, 0.85, 3.3, 0x1f4219, 0.1)).translate(x, y, z)));
  parts.push(...crownCards(54, [0, 6.4, 0], [3.1, 2.5, 3.1], 2.5, 5, 0x6a9a3a, 0.2));
  return mergeGeometries(parts);
}
function palmGeo() {
  const parts = [];
  const H = 7.2, bend = 1.1, N = 8;
  const pt = (t) => new THREE.Vector3(bend * t * t, t * H, 0);
  for (let i = 0; i < N; i++) {
    const a = pt(i / N), b = pt((i + 1) / N);
    const dir = b.clone().sub(a); const len = dir.length();
    const g = new THREE.CylinderGeometry(0.15 - i * 0.006, 0.19 - i * 0.006, len * 1.04, 6, 1, true);
    g.translate(0, len / 2, 0);
    g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize()));
    g.translate(a.x, a.y, a.z);
    parts.push(paint(prep(g), i % 2 ? 0x77695a : 0x8a7b68, 0.1, 0, H, 0.8, 1));
  }
  const top = pt(1);
  for (let f = 0; f < 11; f++) {
    const yaw = (f / 11) * Math.PI * 2 + (f % 2) * 0.2;
    const L = 3.6 + (f % 3) * 0.4;
    const g = new THREE.PlaneGeometry(1, L, 3, 9);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const u = p.getX(i), t = clamp((p.getY(i) + L / 2) / L, 0, 1); // 0..1
      const w = Math.pow(1 - t, 0.55) * 0.55 + 0.04;
      const out = t * L * 0.92;
      const h = Math.sin(t * Math.PI * 0.55) * 1.1 - t * t * 1.5 + Math.abs(u) * w * 0.4;
      p.setXYZ(i, u * w * 2, h, out);
    }
    g.deleteAttribute('uv'); g.deleteAttribute('normal');
    const q = mergeVertices(g); q.computeVertexNormals();
    { const n = q.attributes.normal; for (let i = 0; i < n.count; i++) { const y = Math.abs(n.getY(i)) + 0.9, x = n.getX(i), z = n.getZ(i); const l = Math.hypot(x, y, z); n.setXYZ(i, x / l, y / l, z / l); } }
    q.rotateY(yaw); q.translate(top.x, top.y, 0);
    parts.push(paint(q, f % 2 ? 0x3f7a2a : 0x2f6a22, 0.15, 0, 2, 0.7, 1.2));
  }
  return mergeGeometries(parts);
}
function bushGeo() {
  const parts = [solid(blob(0.55, 1, 0.8, 2, 0x1d3d17, 0.1)).translate(0, 0.35, 0)];
  parts.push(...crownCards(20, [0, 0.55, 0], [0.9, 0.55, 0.9], 0.95, 21, 0x6a9a3a, 0.25));
  return mergeGeometries(parts);
}
function rockGeo() {
  let g = new THREE.IcosahedronGeometry(0.8, 1); g.deleteAttribute('uv'); g.deleteAttribute('normal'); g = mergeVertices(g);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const k = 1 + (noise2(p.getX(i) * 2.2 + 4, p.getZ(i) * 2.2 + p.getY(i)) - 0.5) * 0.7;
    p.setXYZ(i, p.getX(i) * k * 1.2, p.getY(i) * k * 0.7, p.getZ(i) * k);
  }
  g.computeVertexNormals();
  return paint(g, 0x7b786d, 0.2, -0.6, 0.6, 0.75, 1.15);
}
function fernGeo() {
  const parts = [];
  for (let i = 0; i < 3; i++) {
    const g = new THREE.PlaneGeometry(1.5, 1.2); g.translate(0, 0.6, 0); g.rotateY(i * Math.PI / 3);
    parts.push(g);
  }
  return mergeGeometries(parts);
}
function poleGeo() {
  const parts = [];
  const p = new THREE.CylinderGeometry(0.11, 0.16, 8.2, 6, 1, true); p.translate(0, 4.1, 0); parts.push(paint(prep(p), 0x57452f, 0.12, 0, 8, 0.8, 1));
  const a = new THREE.BoxGeometry(2.2, 0.12, 0.12); a.translate(0, 7.6, 0); parts.push(paint(prep(a.toNonIndexed()), 0x4a3a28, 0.05, 7, 8, 1, 1));
  for (const x of [-0.9, 0, 0.9]) { const i = new THREE.CylinderGeometry(0.04, 0.05, 0.2, 5, 1, true); i.translate(x, 7.78, 0); parts.push(paint(prep(i), 0x8a98a0, 0.05, 7, 8, 1, 1)); }
  return mergeGeometries(parts);
}

/* ------------------------------------------------------------ world */
const xsHalf = [9.2, 11, 14, 18, 23, 29, 37, 48, 64, 86, 115, 160];
const COLX = [...xsHalf.slice().reverse().map((x) => -x), -7.6, -6.8, -3.4, 0, 3.4, 6.8, 7.6, ...xsHalf];
const ROWS = 15;

export class World {
  constructor(scene, renderer, camera) {
    this.scene = scene; this.renderer = renderer; this.camera = camera;
    this.chunks = [];
    scene.fog = new THREE.Fog(FOG_COL, 30, 320);
    this.bg = new THREE.Scene();
    this.buildSky();
    this.buildLights();
    this.buildMaterials();
    for (let i = 0; i < NCH; i++) this.chunks.push(new Chunk(this, i - 1));
    this.fireCooldown = 0;
  }

  buildLights() {
    const hemi = new THREE.HemisphereLight(0xcfe3ff, 0x3f4d26, 0.85);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xfff0d2, 2.7);
    sun.position.copy(SUN_DIR).multiplyScalar(90).add(new THREE.Vector3(LANE_X, 0, 0));
    sun.target.position.set(LANE_X, 0, -15);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera; sc.left = -34; sc.right = 34; sc.top = 40; sc.bottom = -40; sc.near = 20; sc.far = 220;
    sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.05;
    this.scene.add(sun, sun.target);
    const fill = new THREE.DirectionalLight(0xe4ecff, 0.45); fill.position.set(-12, 24, 60); this.scene.add(fill);
    this.sun = sun; this.hemi = hemi;
  }

  buildSky() {
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { sunDir: { value: SUN_DIR }, top: { value: new THREE.Color(0x3d72b8) }, mid: { value: new THREE.Color(0x8fb4d8) }, hor: { value: new THREE.Color(FOG_COL) } },
      vertexShader: 'varying vec3 vP; void main(){ vP=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
      fragmentShader: `varying vec3 vP; uniform vec3 sunDir,top,mid,hor;
        void main(){ float h=clamp(vP.y,0.0,1.0);
          vec3 c=mix(hor,mid,smoothstep(0.0,0.22,h)); c=mix(c,top,smoothstep(0.2,0.75,h));
          float s=max(dot(normalize(vP),sunDir),0.0);
          c+=vec3(1.0,0.86,0.62)*(pow(s,420.0)*2.2+pow(s,24.0)*0.35+pow(s,5.0)*0.12);
          c=mix(c,hor,smoothstep(0.02,-0.1,vP.y)); c=mix(c,vec3(0.22,0.32,0.18),smoothstep(-0.05,-0.5,vP.y)); gl_FragColor=vec4(c,1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(640, 32, 16), mat);
    this.sky.renderOrder = -10; this.sky.frustumCulled = false;
    this.bg.add(this.sky);

    // clouds
    this.clouds = new THREE.Group();
    const ct = makeCloudTexture();
    for (let i = 0; i < 16; i++) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: ct, transparent: true, opacity: 0.55, fog: false, depthWrite: false }));
      const a = (i / 16) * Math.PI * 2 + Math.random() * 0.3, r = 600;
      sp.position.set(Math.sin(a) * r, 130 + Math.random() * 130, -Math.cos(a) * r);
      sp.scale.set(300 + Math.random() * 260, 110 + Math.random() * 60, 1);
      sp.renderOrder = -9; this.clouds.add(sp);
    }
    this.bg.add(this.clouds);

    // distant ridges
    this.ridges = [];
    const ridge = (R, H, col, seed, trees) => {
      const [c, g] = canvas(2048, 256);
      const grd = g.createLinearGradient(0, 0, 0, 256);
      grd.addColorStop(0, col); grd.addColorStop(1, '#' + new THREE.Color(FOG_COL).getHexString());
      g.fillStyle = grd; g.beginPath(); g.moveTo(0, 256);
      for (let x = 0; x <= 2048; x += 4) {
        const nx = x / 2048 * 10;
        let y = 150 - (fbm(nx + seed, seed, 4) - 0.2) * 170;
        if (trees) y -= (noise2(x * 0.35, seed) > 0.4 ? 1 : 0) * (6 + noise2(x * 0.7, 3) * 10);
        g.lineTo(x, y);
      }
      g.lineTo(2048, 256); g.fill();
      const t = texFromCanvas(c, { repeat: false }); t.wrapS = THREE.RepeatWrapping;
      const m = new THREE.Mesh(new THREE.CylinderGeometry(R, R, H, 48, 1, true), new THREE.MeshBasicMaterial({ map: t, transparent: true, side: THREE.BackSide, fog: false, depthWrite: false }));
      m.renderOrder = -8; m.frustumCulled = false; m.position.y = H / 2 - 12;
      this.bg.add(m); this.ridges.push(m);
    };
    ridge(560, 150, '#8fa8a6', 3.7, false);
    ridge(500, 120, '#6f8c82', 9.1, true);
    ridge(430, 90, '#557564', 15.3, true);
  }

  buildMaterials() {
    const sw = (m, amp, f) => {
      const prevC = m.onBeforeCompile;
      m.onBeforeCompile = (sh) => {
        prevC && prevC.call(m, sh);
        sh.uniforms.uTime = G.timeU;
        sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>',
          `#include <begin_vertex>
          #ifdef USE_INSTANCING
            float ph = instanceMatrix[3].x*0.21 + instanceMatrix[3].z*0.17;
          #else
            float ph = 0.0;
          #endif
          float hh = max(transformed.y, 0.0);
          transformed.x += sin(uTime*${f.toFixed(2)} + ph)*hh*${amp};
          transformed.z += cos(uTime*${(f * 0.8).toFixed(2)} + ph*1.3)*hh*${(amp * 0.7).toFixed(4)};`);
      };
      return m;
    };
    this.leafTex = makeLeafTexture(); this.needleTex = makeNeedleTexture();
    // double-sided foliage keeps its authored (outward) normals on both faces
    const fol = (m) => { const prev = m.onBeforeCompile; m.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>', THREE.ShaderChunk.normal_fragment_begin.replace('normal *= faceDirection;', '')); }; m.userData.fol = true; return m; };
    this.mats = {
      tree: sw(fol(new THREE.MeshStandardMaterial({ map: this.leafTex, vertexColors: true, alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.85 })), 0.005, 1.3),
      pine: sw(fol(new THREE.MeshStandardMaterial({ map: this.needleTex, vertexColors: true, alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.9 })), 0.004, 1.2),
      palm: sw(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, side: THREE.DoubleSide }), 0.008, 1.7),
      bush: sw(fol(new THREE.MeshStandardMaterial({ map: this.leafTex, vertexColors: true, alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.9 })), 0.025, 1.9),
      fern: sw(new THREE.MeshStandardMaterial({ map: makeBladeTexture(), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 1 }), 0.09, 2.4),
      rock: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 }),
      pole: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }),
      ground: (() => { const t = makeGroundTexture(); return new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 2.2, vertexColors: true, roughness: 1 }); })(),
      road: new THREE.MeshStandardMaterial({ map: makeRoadTexture(), roughness: 0.92, transparent: true, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2, depthWrite: false }),
      wire: new THREE.LineBasicMaterial({ color: 0x15181a }),
    };
    this.geos = { pine: pineGeo(), broad: broadGeo(), palm: palmGeo(), bush: bushGeo(), rock: rockGeo(), fern: fernGeo(), pole: poleGeo() };
    // wires (shared; chunk-local coords)
    const pts = [];
    for (const off of [-0.9, 0, 0.9]) {
      for (let span = 0; span < 2; span++) {
        const z0 = -span * 30; let prev = null;
        for (let i = 0; i <= 10; i++) {
          const t = i / 10; const y = 7.78 - Math.sin(t * Math.PI) * 0.9;
          const cur = new THREE.Vector3(-9.2 + off, y + 0.12, z0 - t * 30);
          if (prev) pts.push(prev, cur); prev = cur;
        }
      }
    }
    this.wireGeo = new THREE.BufferGeometry().setFromPoints(pts);
    this.wreckGeo = null;
  }

  setQuality(q) {
    G.quality = q; G.density = [0.5, 0.65, 0.85, 1][q];
    const pr = [0.75, 1, 1.25, Math.min(window.devicePixelRatio || 1, 2)][q];
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.renderer.shadowMap.enabled = q >= 2;
    this.sun.castShadow = q >= 2;
    this.sun.shadow.mapSize.set(q === 3 ? 2048 : 1024, q === 3 ? 2048 : 1024);
    if (this.sun.shadow.map) { this.sun.shadow.map.dispose(); this.sun.shadow.map = null; }
    this.scene.fog.far = q === 0 ? 220 : 300;
    this.scene.traverse((o) => { if (o.material) o.material.needsUpdate = true; });
  }

  update(dt, d, camPos) {
    G.timeU.value += dt;
    // recycle chunks
    const kmin = Math.floor((d - CH * 1.6) / CH);
    for (const c of this.chunks) {
      if (c.k < kmin) {
        let maxk = -1e9; for (const o of this.chunks) maxk = Math.max(maxk, o.k);
        c.build(maxk + 1);
      }
    }
    for (const c of this.chunks) {
      const rel = c.k * CH - d;
      c.group.position.z = -rel;
      c.group.visible = rel < 340;
      // burning wrecks
      if (c.wreck.visible && rel > -40 && rel < 150) c.fireT -= dt;
    }
    this.sky.position.copy(camPos);
    this.clouds.position.set(camPos.x, 0, camPos.z);
    this.clouds.rotation.y += dt * 0.003;
    for (const r of this.ridges) { r.position.x = camPos.x; r.position.z = camPos.z; }
  }

  /** world-space burning positions for fx */
  fires() {
    const out = [];
    for (const c of this.chunks) if (c.wreck.visible && c.fireS !== undefined) {
      const rel = c.fireS - G.d; if (rel > -30 && rel < 160) out.push(c);
    }
    return out;
  }
}

class Chunk {
  constructor(world, k) {
    this.w = world; this.k = k - 99999;
    this.group = new THREE.Group(); world.scene.add(this.group);
    const g = new THREE.BufferGeometry();
    const C = COLX.length, R = ROWS;
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(C * (R + 1) * 3), 3));
    g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(C * (R + 1) * 3), 3));
    g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(C * (R + 1) * 2), 2));
    g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(C * (R + 1) * 3), 3));
    const idx = [];
    for (let j = 0; j < R; j++) for (let i = 0; i < C - 1; i++) {
      const a = j * C + i, b = a + 1, c = a + C, d = c + 1; idx.push(a, b, c, b, d, c);
    }
    g.setIndex(idx);
    this.ground = new THREE.Mesh(g, world.mats.ground); this.ground.receiveShadow = true; this.ground.frustumCulled = false;
    this.group.add(this.ground);

    const rg = new THREE.PlaneGeometry(20, CH); rg.rotateX(-Math.PI / 2); rg.translate(0, 0.02, -CH / 2);
    const uv = rg.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setY(i, uv.getY(i) * (CH / 12));
    this.road = new THREE.Mesh(rg, world.mats.road); this.road.receiveShadow = true; this.road.renderOrder = 1; this.group.add(this.road);

    const mk = (geo, mat, n, shadow = true) => {
      const m = new THREE.InstancedMesh(geo, mat, n); m.castShadow = shadow; m.receiveShadow = false; m.frustumCulled = false;
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); m.count = 0;
      m.setColorAt(0, new THREE.Color(1, 1, 1));
      this.group.add(m); return m;
    };
    const gs = world.geos, ms = world.mats;
    this.pine = mk(gs.pine, ms.pine, 30); this.broad = mk(gs.broad, ms.tree, 30); this.palm = mk(gs.palm, ms.palm, 7);
    this.bush = mk(gs.bush, ms.bush, 100); this.fern = mk(gs.fern, ms.fern, 170, false); this.rock = mk(gs.rock, ms.rock, 8);
    this.poles = mk(gs.pole, ms.pole, 2);
    const wires = new THREE.LineSegments(world.wireGeo, ms.wire); wires.frustumCulled = false; this.group.add(wires);
    // burning wreck
    this.wreck = new THREE.Group(); this.wreck.visible = false;
    const body = new THREE.MeshStandardMaterial({ color: 0x2a2320, roughness: 0.9, metalness: 0.3 });
    const b1 = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.7, 4.2), body); b1.position.y = 0.6; b1.castShadow = true;
    const b2 = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.6, 2.0), body); b2.position.set(0, 1.2, 0.2); b2.castShadow = true;
    const glassM = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.4 });
    const wl = new THREE.CylinderGeometry(0.34, 0.34, 0.24, 10); wl.rotateZ(Math.PI / 2);
    this.wreck.add(b1, b2);
    for (const [x, z] of [[-0.9, -1.3], [0.9, -1.3], [-0.9, 1.3], [0.9, 1.3]]) { const w = new THREE.Mesh(wl, glassM); w.position.set(x, 0.34, z); this.wreck.add(w); }
    this.group.add(this.wreck);
    this.fireS = undefined;
    this.col = new THREE.Color(); this.dummy = new THREE.Object3D();
    this.build(k);
  }

  build(k) {
    this.k = k;
    const r = rng(k * 7919 + 13);
    const C = COLX.length, R = ROWS;
    const pos = this.ground.geometry.attributes.position, nor = this.ground.geometry.attributes.normal, uv = this.ground.geometry.attributes.uv, col = this.ground.geometry.attributes.color;
    const s0 = k * CH, e = 0.6;
    const c = new THREE.Color();
    for (let j = 0; j <= R; j++) {
      const sl = (j / R) * CH, s = s0 + sl;
      for (let i = 0; i < C; i++) {
        const x = COLX[i], v = j * C + i;
        const y = groundY(x, s);
        pos.setXYZ(v, x, y, -sl);
        const hx = (groundY(x + e, s) - groundY(x - e, s)) / (2 * e), hs = (groundY(x, s + e) - groundY(x, s - e)) / (2 * e);
        const n = new THREE.Vector3(-hx, 1, hs).normalize(); nor.setXYZ(v, n.x, n.y, n.z);
        uv.setXY(v, x / 9, s / 9);
        const ax = Math.abs(x);
        const f = fbm(x * 0.05 + 3, s * 0.05, 3);
        const dirt = smooth(11, 7.2, ax) * 0.7;
        c.setRGB(lerp(0.78, 1.15, f) + dirt * 0.25, lerp(0.8, 1.12, f) - dirt * 0.08, lerp(0.7, 0.95, f) - dirt * 0.25);
        col.setXYZ(v, c.r, c.g, c.b);
      }
    }
    pos.needsUpdate = nor.needsUpdate = uv.needsUpdate = col.needsUpdate = true;

    const d = this.dummy, cc = this.col;
    const fill = (im, n, fn) => {
      let cnt = 0; n = Math.floor(n * (G.density || 1));
      for (let i = 0; i < n; i++) {
        const o = fn(); if (!o) continue;
        const sl = r() * CH; const x = o.x;
        d.position.set(x, groundY(x, s0 + sl) + (o.dy || 0), -sl);
        d.rotation.set(o.rx || 0, r() * 6.283, o.rz || 0);
        d.scale.set(o.sx, o.sy, o.sz); d.updateMatrix(); im.setMatrixAt(cnt, d.matrix);
        const b = o.b || (0.78 + r() * 0.42), dh = (r() - 0.5) * 0.26;
        cc.setRGB(b * (1 + dh), b, b * (1 - dh)); im.setColorAt(cnt, cc); cnt++;
      }
      im.count = cnt; im.instanceMatrix.needsUpdate = true; if (im.instanceColor) im.instanceColor.needsUpdate = true;
    };
    const side = () => (r() < 0.5 ? -1 : 1);
    fill(this.pine, 30, () => { const sc = 0.8 + r() * 0.95; return { x: side() * (10 + Math.pow(r(), 1.3) * 80), sx: sc * (0.9 + r() * 0.3), sy: sc, sz: sc * (0.9 + r() * 0.3) }; });
    fill(this.broad, 30, () => { const sc = 0.85 + r() * 0.75; return { x: side() * (9.6 + Math.pow(r(), 1.3) * 60), sx: sc, sy: sc * (0.9 + r() * 0.3), sz: sc }; });
    fill(this.palm, 7, () => { const sc = 0.8 + r() * 0.6; return { x: side() * (10 + r() * 38), sx: sc, sy: sc, sz: sc, rz: (r() - 0.5) * 0.08 }; });
    fill(this.bush, 100, () => { const sc = 0.7 + r() * 1.5; return { x: side() * (7.8 + Math.pow(r(), 1.7) * 40), sx: sc, sy: sc * (0.8 + r() * 0.5), sz: sc * (0.8 + r() * 0.5) }; });
    fill(this.fern, 170, () => { const sc = 0.6 + r() * 1.1; return { x: side() * (7.2 + Math.pow(r(), 1.6) * 26), sx: sc, sy: sc * (0.8 + r() * 0.6), sz: sc, b: 0.8 + r() * 0.4 }; });
    fill(this.rock, 8, () => { const sc = 0.5 + Math.pow(r(), 2) * 2.4; return { x: side() * (8.2 + r() * 40), sx: sc, sy: sc, sz: sc, dy: -0.1, b: 0.8 + r() * 0.4 }; });
    // poles every 30 m
    for (let i = 0; i < 2; i++) { d.position.set(-9.2, groundY(-9.2, s0 + i * 30), -i * 30); d.rotation.set(0, 0, 0); d.scale.set(1, 1, 1); d.updateMatrix(); this.poles.setMatrixAt(i, d.matrix); cc.setRGB(1, 1, 1); this.poles.setColorAt(i, cc); }
    this.poles.count = 2; this.poles.instanceMatrix.needsUpdate = true; if (this.poles.instanceColor) this.poles.instanceColor.needsUpdate = true;
    // wreck
    const hasWreck = r() < 0.17 && k > 1;
    this.wreck.visible = hasWreck; this.fireS = undefined;
    if (hasWreck) {
      const sl = 8 + r() * 44, sx = (r() < 0.5 ? -1 : 1) * (8.8 + r() * 1.2);
      this.wreck.position.set(sx, groundY(sx, s0 + sl), -sl); this.wreck.rotation.set((r() - 0.5) * 0.2, r() * 6.28, (r() - 0.5) * 0.15);
      this.fireS = s0 + sl; this.fireX = sx; this.fireY = this.wreck.position.y + 1.1;
    }
  }
}
