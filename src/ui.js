import * as THREE from 'three';
import { G } from './state.js';
import { WEAPONS, ENEMY, MISSION_T } from './data.js';
import { clamp } from './util.js';
import { playerX, relOf, weapon } from './game.js';

const $ = (id) => document.getElementById(id);
const ICON = {
  ak: '<path d="M2 8h12l5-3h20l3-2h20v3h-7l-3 3h-8l-2 10h-6l1-10H19l-5 4H2z"/>',
  smg: '<path d="M6 7h30l3 3h10v3h-9v10h-6V13H10l-4 3z"/>',
  shotgun: '<path d="M2 11h38l2-3h20v3H44l-2 2H30l-3 3H2z"/>',
  sniper: '<path d="M2 12h14l4-3h12V6h6v3h22v3H36l-3 4h-6l-2-4H2z"/>',
  rocket: '<path d="M4 9h44l8-3v12l-8-3H4z"/>',
  frag: '<path d="M6 10h30l2-2h20v5H40l-2 3H6z"/>',
  nuke: '<circle cx="32" cy="12" r="3"/><path d="M32 9 L24 1 A11 11 0 0 1 40 1Z" transform="translate(0 2)"/><path d="M32 9 L24 1 A11 11 0 0 1 40 1Z" transform="rotate(120 32 12) translate(0 2)"/><path d="M32 9 L24 1 A11 11 0 0 1 40 1Z" transform="rotate(240 32 12) translate(0 2)"/>',
};
const MM = 280, MS = 1.4;
let cam, ctx, mm, comp, cctx, banT = 0, toastT = 0, hurtV = 0, whiteV = 0, slots = [], lockEl, actions;
const v3 = new THREE.Vector3();

export function initUI(camera, act) {
  cam = camera; actions = act; mm = $('mm').getContext('2d'); comp = $('compass'); cctx = comp.getContext('2d'); lockEl = $('lock');
  const bar = $('wbar');
  WEAPONS.forEach((w, i) => {
    const d = document.createElement('div'); d.className = 'slot';
    d.innerHTML = `<i class="num">${i + 1}</i><svg viewBox="0 0 64 24">${ICON[w.id]}</svg><span class="am"></span>`;
    d.addEventListener('pointerdown', (e) => { e.preventDefault(); actions.select(i); });
    bar.appendChild(d); slots.push(d);
  });
  const hold = (el, down, up) => {
    el.addEventListener('pointerdown', (e) => { e.preventDefault(); el.setPointerCapture?.(e.pointerId); el.classList.add('press'); down(); });
    const u = (e) => { el.classList.remove('press'); up && up(); };
    el.addEventListener('pointerup', u); el.addEventListener('pointercancel', u); el.addEventListener('lostpointercapture', u);
  };
  hold($('bShoot'), () => { G.shootHeld = true; }, () => { G.shootHeld = false; });
  const gb = $('gear'); gb.addEventListener('pointerdown', (e) => { e.preventDefault(); const r = gb.getBoundingClientRect(); (e.clientY - r.top < r.height / 2 ? actions.gearUp : actions.gearDown)(); gb.classList.add(e.clientY - r.top < r.height / 2 ? 'pu' : 'pd'); });
  const gr = () => gb.classList.remove('pu', 'pd'); gb.addEventListener('pointerup', gr); gb.addEventListener('pointercancel', gr); gb.addEventListener('pointerleave', gr);
  hold($('bLeft'), () => actions.laneLeft()); hold($('bRight'), () => actions.laneRight());
  hold($('bDown'), () => actions.dismount()); hold($('bUp'), () => actions.mount());
  $('btnView').addEventListener('pointerdown', (e) => { e.preventDefault(); actions.view(); });
  $('btnPause').addEventListener('pointerdown', (e) => { e.preventDefault(); actions.pause(); });
  window.addEventListener('contextmenu', (e) => e.preventDefault());
}

export const ui = {
  banner(t, sub = '', secs = 3) { const b = $('banner'); b.querySelector('b').textContent = t; b.querySelector('span').textContent = sub; b.classList.add('on'); banT = secs; },
  toast(t) { const e = $('toast'); e.textContent = t; e.classList.add('on'); toastT = 2; },
  feed(name) { const f = $('feed'); const d = document.createElement('div'); d.innerHTML = `<b>✕</b> ${name}`; f.appendChild(d); setTimeout(() => d.remove(), 3300); while (f.children.length > 4) f.firstChild.remove(); },
  hitmarker(kill) { const h = $('hitm'); h.classList.remove('on', 'kill'); void h.offsetWidth; h.classList.add('on'); if (kill) h.classList.add('kill'); },
  dmgPop(p, a, crit) {
    v3.set(p.x, p.y, -(p.s - G.d)).project(cam); if (v3.z > 1) return;
    const d = document.createElement('div'); d.className = 'dpop' + (crit ? ' crit' : ''); d.textContent = Math.round(a) + (crit ? '!' : '');
    d.style.left = (v3.x * 0.5 + 0.5) * innerWidth + 'px'; d.style.top = (-v3.y * 0.5 + 0.5) * innerHeight + 'px'; $('center').appendChild(d); setTimeout(() => d.remove(), 850);
  },
  flashWhite() { whiteV = 1; }, hurt(a) { hurtV = Math.min(0.9, hurtV + 0.25 + a * 0.03); },
  gearChanged() { $('gearn').textContent = G.gear ? G.gear : 'N'; document.querySelectorAll('#gearpips i').forEach((p, i) => p.classList.toggle('on', i < G.gear)); },
  weaponChanged() { slots.forEach((s, i) => s.classList.toggle('act', i === G.wi)); this.ammoChanged(); },
  ammoChanged() {
    slots.forEach((s, i) => {
      const w = G.weapons[i], r = w.reserve === Infinity ? '∞' : w.reserve;
      s.querySelector('.am').textContent = i === G.wi ? `${w.mag}/${r}` : r;
      s.classList.toggle('empty', w.mag <= 0 && w.reserve <= 0);
    });
  },
  newMission() { $('end').classList.add('hide'); this.gearChanged(); this.weaponChanged(); $('track').classList.toggle('on', false); },
  respawned() { $('end').classList.add('hide'); this.gearChanged(); this.weaponChanged(); this.banner('BACK IN THE FIGHT', `Checkpoint ${G.save.n || 'START'}`, 2.5); },
  showDead() {
    $('endTitle').textContent = 'YOU WERE TAKEN DOWN'; $('endSub').textContent = G.save.n ? `Respawn at checkpoint ${G.save.n}` : 'Restart from the beginning';
    $('endStats').innerHTML = `<div><b>${G.kills}</b>KILLS</div><div><b>${G.cpNum}</b>CHECKPOINT</div>`;
    const b = $('endBtn'); b.textContent = 'RESPAWN'; b.onclick = () => actions.respawn(); $('end').classList.remove('hide');
  },
  showWin() {
    const pct = G.total ? G.kills / G.total : 1, stars = pct >= 0.85 ? 3 : pct >= 0.6 ? 2 : 1;
    $('endTitle').textContent = 'MISSION COMPLETE'; $('endSub').textContent = '★'.repeat(stars) + '☆'.repeat(3 - stars) + '  The forest road is clear.';
    const m = Math.floor(G.clock / 60), s = Math.floor(G.clock % 60).toString().padStart(2, '0');
    $('endStats').innerHTML = `<div><b>${G.kills}/${G.total}</b>HOSTILES DOWN</div><div><b>${G.shots ? Math.round(G.hits / G.shots * 100) : 0}%</b>ACCURACY</div><div><b>${m}:${s}</b>TIME</div>`;
    const b = $('endBtn'); b.textContent = 'PLAY AGAIN'; b.onclick = () => actions.restart(); $('end').classList.remove('hide');
  },
  track(t) { const e = $('track'); e.textContent = '♪ ' + t; e.classList.add('on'); clearTimeout(this._tt); this._tt = setTimeout(() => e.classList.remove('on'), 5000); },

  update(dt) {
    if (banT > 0) { banT -= dt; if (banT <= 0) $('banner').classList.remove('on'); }
    if (toastT > 0) { toastT -= dt; if (toastT <= 0) $('toast').classList.remove('on'); }
    hurtV = Math.max(0, hurtV - dt * 1.6);
    const low = G.hp < 30 ? (0.25 + 0.2 * Math.sin(performance.now() / 180)) : 0;
    $('hurtfx').style.opacity = Math.max(hurtV, low);
    whiteV = Math.max(0, whiteV - dt * 0.8); $('whitefx').style.opacity = whiteV;
    $('alive').textContent = Math.max(0, G.total - G.kills - G.escaped); $('kills').textContent = G.kills;
    const rem = Math.max(0, MISSION_T - G.clock), tm = Math.floor(rem / 60), ts = Math.floor(rem % 60).toString().padStart(2, '0');
    $('timer').textContent = `${tm.toString().padStart(2, '0')}:${ts}`;
    $('progbar').style.width = clamp(G.clock / MISSION_T, 0, 1) * 100 + '%';
    const hp = $('hpbar'); hp.firstElementChild.style.width = clamp(G.hp / G.maxHp, 0, 1) * 100 + '%'; hp.classList.toggle('low', G.hp < 30);
    const w = weapon(), rl = $('reload'); rl.classList.toggle('on', w.reloadT > 0); if (w.reloadT > 0) rl.firstElementChild.style.width = (1 - w.reloadT / w.def.reload) * 100 + '%';
    $('bDown').classList.toggle('dis', !G.mounted); $('bUp').classList.toggle('dis', G.mounted);
    $('gear').classList.toggle('dis', !G.mounted); $('bLeft').classList.toggle('dis', !G.mounted); $('bRight').classList.toggle('dis', !G.mounted);
    $('app').classList.toggle('pointer', G.view === 1); $('app').classList.toggle('zoom', !!(G.view === 1 && w.def.zoom && G.mountT > 0.5));
    // lock-on
    const a = G.aim;
    if (a && G.state === 'play') {
      const e = a.e; v3.set(e.x, e.y + (e.cls === 'walker' ? 1.0 : e.cls === 'chopper' ? 0 : 1.8), -(e.s - G.d)).project(cam);
      if (v3.z < 1) {
        lockEl.style.display = 'block'; lockEl.style.left = (v3.x * 0.5 + 0.5) * innerWidth + 'px'; lockEl.style.top = (-v3.y * 0.5 + 0.5) * innerHeight + 'px';
        const s = clamp((e.cls === 'walker' ? 1500 : 4200) / Math.max(a.dist, 20), 34, e.cls === 'walker' ? 90 : 190); lockEl.style.setProperty('--s', s + 'px');
        $('lockname').textContent = `${e.def.name} · ${Math.round(a.dist)}m`; $('lockhp').firstElementChild.style.width = clamp(e.hp / e.maxhp, 0, 1) * 100 + '%';
        const best = e.def.best.map((id) => WEAPONS.find((x) => x.id === id).name).join(' / ');
        $('lockbest').textContent = e.cls === 'walker' ? '' : 'BEST: ' + best;
        slots.forEach((sl, i) => sl.classList.toggle('rec', e.cls !== 'walker' && e.def.best.includes(WEAPONS[i].id) && G.weapons[i].reserve > 0));
      } else lockEl.style.display = 'none';
    } else { lockEl.style.display = 'none'; slots.forEach((sl) => sl.classList.remove('rec')); }
    this.minimap(); this.compass();
  },

  minimap() {
    const c = mm; c.clearRect(0, 0, MM, MM);
    c.fillStyle = '#1b2a1c'; c.fillRect(0, 0, MM, MM);
    const bx = MM / 2, by = MM * 0.8, px = playerX();
    c.strokeStyle = 'rgba(255,255,255,.07)'; c.lineWidth = 1;
    const off = (G.d % 40) * MS; for (let y = -off; y < MM + 60; y += 40 * MS) { c.beginPath(); c.moveTo(0, by - y + 0.5); c.lineTo(MM, by - y + 0.5); c.stroke(); }
    for (let x = 0; x < MM; x += 40 * MS) { c.beginPath(); c.moveTo(x + 0.5, 0); c.lineTo(x + 0.5, MM); c.stroke(); }
    c.fillStyle = '#35523a'; for (let i = 0; i < 18; i++) { const x = ((i * 97) % 280), y = (((i * 53) % 280) + (G.d * MS) % 280) % 280; c.globalAlpha = 0.25; c.beginPath(); c.arc(x, y, 14 + (i % 3) * 6, 0, 6.3); c.fill(); } c.globalAlpha = 1;
    c.fillStyle = '#5a5d60'; c.fillRect(bx - 6 * MS, 0, 12 * MS, MM);
    c.strokeStyle = 'rgba(255,230,150,.6)'; c.setLineDash([8, 10]); c.beginPath(); c.moveTo(bx, 0); c.lineTo(bx, MM); c.stroke(); c.setLineDash([]);
    const P = (x, rel) => [bx + x * MS, by - rel * MS];
    for (const ar of G.arches) { const [, y] = P(0, ar.s - G.d); c.fillStyle = ar.kind === 'cp' ? '#f2c14e' : '#7dff9a'; c.fillRect(bx - 7 * MS, y - 2, 14 * MS, 4); }
    for (const p of G.pickups) { const [x, y] = P(p.x, p.s - G.d); c.fillStyle = p.kind === 'med' ? '#40ff90' : '#ffd34e'; c.fillRect(x - 4, y - 4, 8, 8); }
    for (const e of G.enemies) {
      if (e.dead && e.cls !== 'walker') continue; const [x, y] = P(e.x, relOf(e)); if (y < -10 || y > MM + 10) continue;
      c.fillStyle = e.dead ? '#666' : '#ff4a38';
      if (e.cls === 'walker') { c.beginPath(); c.arc(x, y, 4, 0, 6.3); c.fill(); }
      else if (e.cls === 'chopper') { c.fillStyle = '#ff9a2a'; c.beginPath(); c.moveTo(x, y - 8); c.lineTo(x + 7, y + 6); c.lineTo(x - 7, y + 6); c.closePath(); c.fill(); }
      else c.fillRect(x - 6, y - 6, 12, 12);
    }
    c.fillStyle = '#fff'; c.beginPath(); c.moveTo(bx + px * MS, by - 9); c.lineTo(bx + px * MS + 7, by + 8); c.lineTo(bx + px * MS - 7, by + 8); c.closePath(); c.fill();
    c.strokeStyle = 'rgba(0,0,0,.6)'; c.lineWidth = 3; c.strokeRect(0, 0, MM, MM);
  },

  compass() {
    const c = cctx, W = comp.width, H = comp.height; c.clearRect(0, 0, W, H);
    const k = 5; c.fillStyle = 'rgba(0,0,0,.35)'; c.fillRect(0, 10, W, 24);
    c.strokeStyle = 'rgba(255,255,255,.8)'; c.fillStyle = '#fff'; c.font = 'bold 16px sans-serif'; c.textAlign = 'center'; c.lineWidth = 2;
    for (let a = -70; a <= 70; a += 5) {
      const x = W / 2 + a * k; const maj = a % 15 === 0;
      c.beginPath(); c.moveTo(x, 34); c.lineTo(x, maj ? 24 : 29); c.stroke();
      if (a % 45 === 0 && a !== 0) { c.fillText(a > 0 ? (a === 45 ? 'NE' : 'E') : (a === -45 ? 'NW' : 'W'), x, 21); }
    }
    c.fillStyle = '#f2c14e'; c.font = 'bold 20px sans-serif'; c.fillText('N', W / 2, 21);
    c.beginPath(); c.moveTo(W / 2 - 6, 2); c.lineTo(W / 2 + 6, 2); c.lineTo(W / 2, 10); c.fill();
    const px = playerX();
    for (const e of G.enemies) {
      if (e.dead) continue; const rel = relOf(e); if (rel < 1) continue;
      const ang = Math.atan2(e.x - px, rel) * 57.3; if (Math.abs(ang) > 70) continue;
      c.fillStyle = '#ff4a38'; const x = W / 2 + ang * k; c.beginPath(); c.moveTo(x - 5, 12); c.lineTo(x + 5, 12); c.lineTo(x, 22); c.fill();
    }
  },
};
