import * as THREE from 'three';
import { G } from './state.js';
import { LANE_X, LANES, WEAPONS, ENEMY, GEARS, MISSION_T, CP_INT, buildTimeline } from './data.js';
import { Humanoid, makeTruck, makeArmor, makeChopper, makeCrate, makeArch, makeRocketMesh, M } from './models.js';
import { clamp, lerp, rand, pick, damp } from './util.js';

const LOOKS = {
  terrorist: { head: 'balaclava', shirt: 0x23262b, pants: 0x2a2d25, vest: 0x3b422d, gun: 'ak', pack: 0x2b2f23 },
  pirate: { head: 'bandana', shirt: 0x6b4a2a, pants: 0x384056, vest: null, gun: 'shotgun', skin: 0x8a5a3c },
  kidnapper: { head: 'skimask', shirt: 0x2a3a58, pants: 0x1e2024, vest: null, gun: 'smg', glove: 0x222222 },
  gunman: { head: 'hood', shirt: 0x3a3d42, pants: 0x1b1c1f, vest: null, gun: 'ak' },
};
const CENTER_Y = { walker: 1.1, truck: 1.9, armor: 1.5, chopper: 0 };
const char = new THREE.MeshStandardMaterial({ color: 0x0f0e0d, roughness: 1 });

export const playerX = () => lerp(G.bx - 1.7, G.bx, G.mountT * G.mountT * (3 - 2 * G.mountT));
const rndLane = () => LANES[Math.floor(Math.random() * LANES.length)];
export const relOf = (e) => e.s - G.d;
const ctr = (e) => ({ x: e.x, y: e.y + (CENTER_Y[e.cls] || 1), s: e.s });

/* ------------------------------------------------------------ weapons */
export function initWeapons() {
  G.weapons = WEAPONS.map((def) => ({ def, mag: def.mag, reserve: def.reserve, reloadT: 0 }));
  G.wi = 0; G.fireCd = 0;
}
export const weapon = () => G.weapons[G.wi];
export function selectWeapon(i) {
  if (i < 0) i = G.weapons.length - 1; if (i >= G.weapons.length) i = 0;
  if (i === G.wi) return; G.wi = i; G.fireCd = 0.25; G.snd.click(); G.ui.weaponChanged();
}
function startReload(w) { if (w.reloadT > 0 || w.reserve <= 0 || w.mag >= w.def.mag) return; w.reloadT = w.def.reload; G.snd.reload(); }

/* ------------------------------------------------------------ enemies */
function add(e) { e.obj.userData.e = e; G.root.add(e.obj); G.enemies.push(e); return e; }

function spawnWalker(kind, rel, x) {
  const def = ENEMY[kind];
  const hum = new Humanoid(LOOKS[kind]); hum.root.rotation.y = Math.PI;
  const e = {
    kind, def, cls: 'walker', x, y: 0, s: G.d + rel, hp: def.hp, maxhp: def.hp, r: def.r, hum, obj: hum.root,
    standoff: rand(def.standoff[0], def.standoff[1]), fireT: rand(0.5, 1.4), t: Math.random() * 6, x0: x, dead: false, deadT: 0, flinch: 0, burst: 0, final: false,
  };
  e.rate = def.rate; hum.stand(0, null);
  return add(e);
}
function spawnTruck(o) {
  const obj = makeTruck(); const rel = 205;
  const e = { kind: 'truck', def: ENEMY.truck, cls: 'truck', x: rand(-0.6, 0.6), y: 0, s: G.d + rel, hp: 1200, maxhp: 1200, r: 2.2, obj, yaw: rand(0.2, 0.4) * (Math.random() < 0.5 ? -1 : 1), halfLen: 4, dead: false, deadT: 0, fireT: 1, burst: 0, t: 0, flinch: 0, final: !!o.final, state: 'park', gunner: obj.userData.gunner };
  obj.rotation.y = Math.PI + e.yaw; obj.userData.gunner.stand(0, null);
  add(e);
  for (let i = 0; i < (o.guards || 0); i++) spawnWalker(pick(['terrorist', 'pirate', 'gunman']), rel - 6 - Math.random() * 8, rand(-6, 6));
  if (G.weapons[6].reserve < 1) G.weapons[6].reserve = 1;
  if (G.weapons[4].reserve < 3) G.weapons[4].reserve = 3;
  spawnPickup('crate', 120);
  return e;
}
function spawnArmor(o) {
  const obj = makeArmor();
  const e = { kind: 'armor', def: ENEMY.armor, cls: 'armor', x: rand(-1.5, 0.5), y: 0, s: G.d + 215, hp: 1500, maxhp: 1500, r: 1.9, obj, yaw: rand(0.15, 0.35) * (Math.random() < 0.5 ? -1 : 1), halfLen: 2.9, dead: false, deadT: 0, fireT: 1.5, burst: 0, t: 0, flinch: 0, final: !!o.final, state: 'drive', speed: 12 };
  obj.rotation.y = Math.PI + e.yaw;
  if (G.weapons[4].reserve < 3) G.weapons[4].reserve = 3;
  return add(e);
}
function spawnChopper(o) {
  const obj = makeChopper();
  const e = { kind: 'chopper', def: ENEMY.chopper, cls: 'chopper', x: 0, y: 32, s: G.d + 260, hp: 700, maxhp: 700, r: 2.4, obj, dead: false, deadT: 0, fireT: 3, burst: 0, rocketT: 6, t: Math.random() * 10, rel: 260, flinch: 0, final: !!o.final, state: 'fly', vy: 0, spin: 0, px: 0 };
  obj.rotation.y = Math.PI;
  if (G.weapons[3].reserve < 4) G.weapons[3].reserve = 4;
  return add(e);
}
export function spawnPickup(kind, rel) {
  const obj = makeCrate(kind); G.root.add(obj);
  G.pickups.push({ kind, x: rndLane(), s: G.d + rel, obj });
}

function spawnEvent(ev) {
  switch (ev.type) {
    case 'msg': G.ui.banner(ev.text, ev.sub, ev.time || 4); break;
    case 'group': {
      for (let i = 0; i < ev.n; i++) {
        const kind = ev.kinds[i % ev.kinds.length];
        const x = kind === 'gunman' ? pick([-1, 1]) * rand(8, 11) : kind === 'terrorist' ? rand(-5.5, 5.5) : rand(-6, 6);
        spawnWalker(kind, 150 + i * 9 + Math.random() * 14, x);
      }
      break;
    }
    case 'truck': spawnTruck(ev); if (ev.msg) G.ui.banner('ROADBLOCK AHEAD', 'Best weapon: NUKE / RPG', 4); break;
    case 'armor': spawnArmor(ev); G.ui.banner('ARMORED CAR', 'Best weapon: RPG / NUKE', 3.5); break;
    case 'chopper': spawnChopper(ev); G.ui.banner('ATTACK CHOPPER', 'Best weapon: SNIPER / RPG / FRAG', 3.5); break;
    case 'crate': spawnPickup('crate', 130); break;
    case 'med': spawnPickup('med', 130); break;
  }
}

/* ------------------------------------------------------------ damage */
function popPos(e) { const c = ctr(e); return { x: c.x, y: c.y + (e.cls === 'walker' ? 0.9 : 2), s: c.s }; }
export function damageEnemy(e, a, crit = false, fromPlayer = true) {
  if (e.dead || a <= 0) return;
  e.hp -= a; e.flinch = 0.14;
  if (fromPlayer) { G.ui.hitmarker(e.hp <= 0); G.snd.hit(); G.ui.dmgPop(popPos(e), a, crit); }
  if (e.hp <= 0) killEnemy(e);
}
function killEnemy(e) {
  e.dead = true; e.deadT = 0; G.kills++; G.ui.feed(e.def.name);
  const c = ctr(e), rel = relOf(e);
  if (e.cls === 'walker') { G.fx.puff(e.x, 0.8, e.s, 4, 0.4); if (Math.random() < 0.12) { G.pickups.push({ kind: 'crate', x: rndLane(), s: e.s, obj: (() => { const o = makeCrate('crate'); G.root.add(o); return o; })() }); } }
  else {
    const size = e.cls === 'truck' ? 2.4 : e.cls === 'armor' ? 2.1 : 2.0;
    G.fx.explode(c.x, c.y, c.s, size); G.snd.explosion(size, Math.abs(rel), clamp((c.x - G.bx) / 40, -1, 1)); G.shake = Math.max(G.shake, clamp(1 - Math.abs(rel) / 120, 0.2, 1));
    if (e.cls === 'chopper') { e.state = 'falling'; e.vy = 0; e.spin = rand(4, 8) * (Math.random() < 0.5 ? 1 : -1); }
    else { e.obj.traverse((o) => { if (o.isMesh) o.material = char; }); if (e.gunner) { e.gunner.root.visible = false; } if (e.obj.userData.barrier) e.obj.userData.barrier.visible = false; if (Math.random() < 0.7) G.pickups.push({ kind: 'crate', x: rndLane(), s: e.s - 8, obj: (() => { const o = makeCrate('crate'); G.root.add(o); return o; })() }); }
  }
}

/* ------------------------------------------------------------ explosions */
export function blast(x, y, s, w, owner) {
  const def = w.def || w; const aoe = def.aoe || 8;
  const isNuke = def.id === 'nuke';
  if (isNuke) { G.fx.nuke(x, y, s); G.snd.nuke(); G.ui.flashWhite(); G.shake = 1.6; G.slow = 0.35; setTimeout(() => { G.slow = 1; }, 900); }
  else { G.fx.explode(x, y, s, def.id === 'frag' ? 0.8 : 1.1); G.snd.explosion(1, Math.abs(s - G.d), clamp((x - G.bx) / 40, -1, 1)); G.shake = Math.max(G.shake, clamp(1 - Math.abs(s - G.d) / 90, 0, 0.8)); }
  if (owner === 'p') {
    for (const e of G.enemies) {
      if (e.dead) continue; const c = ctr(e);
      const dist = Math.hypot(c.x - x, c.y - y, c.s - s) - e.r * 0.6;
      if (dist < aoe) damageEnemy(e, def.dmg[e.cls] * (isNuke ? 1 : clamp(1 - dist / aoe * 0.55, 0.3, 1)), false, true);
    }
  }
  const px = playerX(), pd = Math.hypot(px - x, 1.2 - y, G.d - s);
  if (pd < aoe * (isNuke ? 0.9 : 0.7)) hurt(owner === 'p' ? 18 * (1 - pd / aoe) * (isNuke ? 5 : 1) : 24, true);
}
export function hurt(a, silent) {
  if (G.state !== 'play') return;
  G.hp -= a; G.ui.hurt(a); if (!silent) G.snd.hurt(); G.shake = Math.max(G.shake, 0.25);
  if (G.hp <= 0) { G.hp = 0; G.state = 'dead'; G.ui.showDead(); }
}

/* ------------------------------------------------------------ player combat */
function muzzlePos() { return { x: playerX() + 0.15, y: G.mounted || G.mountT > 0.5 ? 1.45 : 1.55, s: G.d - 0.6 }; }
export function updateAim() {
  const w = weapon(), def = w.def, px = playerX();
  let best = null, bs = 1e9;
  for (const e of G.enemies) {
    if (e.dead) continue;
    const c = ctr(e), rel = c.s - G.d; if (rel < -2) continue;
    const dist = Math.hypot(rel, c.x - px, c.y - 1.4);
    if (dist > def.range) continue;
    if (Math.atan2(Math.abs(c.x - px), Math.max(rel, 0.01)) > 1.35) continue;
    if (def.minRange && dist < def.minRange) continue;
    const eff = Math.min((def.dmg[e.cls] || 1) / e.maxhp, 1.5);
    const score = dist / (0.25 + eff) * (e.cls === 'chopper' ? 0.7 : 1);
    if (score < bs) { bs = score; best = { e, dist, rel }; }
  }
  G.aim = best;
}
export function tryFire(dt) {
  const w = weapon(), def = w.def;
  if (G.fireCd > 0) return;
  if (G.mountT > 0 && G.mountT < 1) return;
  if (w.reloadT > 0) return;
  if (w.mag <= 0) { if (w.reserve > 0) startReload(w); else { G.snd.empty(); G.fireCd = 0.3; G.ui.toast('OUT OF AMMO — SWITCH WEAPON'); } return; }
  if (def.id === 'nuke') {
    const tgt = G.aim; if (!tgt) { G.ui.toast(`NO TARGET — NUKE NEEDS 85 m+ DISTANCE`); G.fireCd = 0.6; return; }
  }
  const m = muzzlePos(), tgt = G.aim?.e, px = playerX();
  w.mag--; if (w.reserve !== Infinity && w.mag === 0) { /* reserve is consumed on reload */ }
  G.fireCd = def.rate; G.shots++; G.recoil = 1;
  G.snd.shot(def.id);
  G.ui.ammoChanged();
  if (def.kind === 'bullet') {
    const pellets = def.pellets || 1;
    const k = G.mounted ? 1 + G.speed * 0.03 : 0.45;
    G.fx.flash(m.x, m.y, m.s - 0.5, def.id === 'sniper' ? 1.8 : 1);
    G.fx.smoke.emit(m.x, m.y, m.s - 0.4, 0, 0.3, 1, 0.2, 0.7, 0.4, 0.7, 0.7, 0.7, 0.25, 0, 2);
    let anyHit = false;
    for (let i = 0; i < pellets; i++) {
      let end, hit = false;
      if (tgt) {
        const c = ctr(tgt), dist = Math.hypot(c.s - m.s, c.x - m.x, c.y - m.y), sg = def.spread * k * dist;
        const ex = (Math.random() + Math.random() - 1) * sg * 1.6, ey = (Math.random() + Math.random() - 1) * sg * 1.6;
        const rr = tgt.cls === 'walker' ? tgt.r * 0.95 : tgt.r * 1.5;
        const tY = tgt.cls === 'walker' ? c.y + 0.1 : c.y;
        hit = Math.hypot(ex, ey) < rr;
        end = { x: c.x + ex, y: tY + ey, s: c.s };
        if (hit) {
          const crit = tgt.cls === 'walker' && def.id !== 'shotgun' && Math.random() < 0.14;
          damageEnemy(tgt, def.dmg[tgt.cls] * (crit ? 2 : 1), crit, true); G.hits++; anyHit = true;
          if (tgt.cls !== 'walker') G.fx.sparks(end.x, end.y, end.s - 0.5, 4); else G.fx.puff(end.x, end.y, end.s, 1, 0.5);
        } else { const d2 = 1 + 30 / dist; end = { x: m.x + (end.x - m.x) * d2, y: m.y + (end.y - m.y) * d2, s: m.s + (end.s - m.s) * d2 }; }
      } else {
        const sg = def.spread * k * 140; end = { x: m.x + (Math.random() - 0.5) * sg, y: 1.2 + (Math.random() - 0.5) * sg, s: m.s + 140 };
      }
      G.fx.tracer(m, end, 'p', def.id === 'sniper' ? 900 : 560, def.id === 'sniper' ? 14 : 8, def.id === 'sniper' ? 0.08 : 0.045);
    }
    if (w.mag <= 0) startReload(w);
  } else {
    const dir = tgt ? (() => { const c = ctr(tgt); return new THREE.Vector3(c.x - m.x, c.y - m.y, c.s - m.s).normalize(); })() : new THREE.Vector3(0, 0.04, 1);
    G.fx.flash(m.x, m.y, m.s - 0.9, 2.2); G.fx.puff(m.x, m.y - 0.2, m.s + 0.6, 4, 0.8);
    const mesh = makeRocketMesh(def.kind); G.root.add(mesh);
    const sp = def.speed; const p = { owner: 'p', def, kind: def.kind, x: m.x, y: m.y, s: m.s, vx: dir.x * sp, vy: dir.y * sp + (def.kind === 'frag' ? 7 : 0), vs: dir.z * sp + G.speed, target: tgt, mesh, t: 0, spd: sp };
    G.projs.push(p);
    if (w.mag <= 0) startReload(w);
  }
}

export function updateReload(dt) {
  for (const w of G.weapons) {
    if (w.reloadT > 0) { w.reloadT -= dt; if (w.reloadT <= 0) { const n = Math.min(w.def.mag - w.mag, w.reserve); w.mag += n; if (w.reserve !== Infinity) w.reserve -= n; G.ui.ammoChanged(); } }
  }
  // auto-reload when switching to an empty mag
  const w = weapon(); if (w.mag <= 0 && w.reloadT <= 0 && w.reserve > 0) startReload(w);
}

/* ------------------------------------------------------------ projectiles */
function updateProjs(dt) {
  for (let i = G.projs.length - 1; i >= 0; i--) {
    const p = G.projs[i]; p.t += dt;
    let tx, ty, ts, tr = 1.5;
    if (p.owner === 'p') {
      if (p.target && !p.target.dead) { const c = ctr(p.target); tx = c.x; ty = c.y; ts = c.s; tr = Math.max(p.target.r, 1.8); }
      else if (p.target && p.target.dead && p.target.state === 'falling') { tx = p.target.x; ty = p.target.y; ts = p.target.s; }
    } else { tx = playerX(); ty = 1.2; ts = G.d; }
    if (tx !== undefined) {
      const dx = tx - p.x, dy = ty - p.y, ds = ts - p.s, L = Math.hypot(dx, dy, ds) || 1;
      const vl = Math.hypot(p.vx, p.vy, p.vs) || 1, k = 1 - Math.exp(-(p.owner === 'e' ? 0.5 : p.kind === 'frag' ? 3 : p.kind === 'nuke' ? 3.5 : 6) * dt);
      let nx = lerp(p.vx / vl, dx / L, k), ny = lerp(p.vy / vl, dy / L, k), ns = lerp(p.vs / vl, ds / L, k);
      const nl = Math.hypot(nx, ny, ns) || 1; const sp = Math.max(p.spd, p.owner === 'p' ? vl * 0.98 : p.spd);
      p.vx = nx / nl * sp; p.vy = ny / nl * sp; p.vs = ns / nl * sp;
    }
    if (p.kind === 'frag') p.vy -= 3.5 * dt;
    p.x += p.vx * dt; p.y += p.vy * dt; p.s += p.vs * dt;
    // trail
    const trailK = p.kind === 'nuke' ? 2.5 : 1;
    G.fx.smoke.emit(p.x, p.y, p.s, 0, 0, -p.vs * 0.05, 0.25 * trailK, 1.2 * trailK, 0.8, 0.8, 0.8, 0.78, 0.45, 0, 1);
    if (p.kind !== 'frag') G.fx.fire.emit(p.x, p.y, p.s - p.vs * 0.015, 0, 0, 0, 0.5 * trailK, 0.1, 0.12, 1, 0.7, 0.3, 0.9);
    // placement
    p.mesh.position.set(p.x, p.y, -(p.s - G.d));
    p.mesh.lookAt(p.x + p.vx, p.y + p.vy, -(p.s + p.vs - G.d));
    if (p.kind === 'frag') p.mesh.rotation.x += p.t * 10;
    if (p.mesh.userData.flame) p.mesh.userData.flame.scale.set(1, 0.7 + Math.random() * 0.6, 1);
    let boom = false;
    if (p.owner === 'p') {
      for (const e of G.enemies) {
        if (e.dead) continue; const c = ctr(e);
        if (Math.hypot(c.x - p.x, c.y - p.y, c.s - p.s) < Math.max(e.r + 0.6, 1.8) + (p.kind === 'nuke' ? 1 : 0)) { boom = true; break; }
      }
      if (p.y <= 0.15) boom = true;
      if (p.t > 6) boom = true;
    } else {
      if (Math.hypot(tx - p.x, ty - p.y, ts - p.s) < 2.0 || p.s < G.d - 5 || p.y <= 0.1) boom = true;
    }
    if (boom) {
      G.projs.splice(i, 1); G.root.remove(p.mesh);
      blast(p.x, Math.max(p.y, 0.4), p.s, p.owner === 'p' ? p.def : { id: 'erocket', aoe: 3.6, dmg: {} }, p.owner);
    }
  }
}

/* ------------------------------------------------------------ enemy AI */
const _v = new THREE.Vector3();
function enemyShoot(e, from, dmg, hitBase, kind = 'enemy', snd = 'enemy') {
  const px = playerX(), rel = relOf(e);
  const f = clamp(1.25 - Math.abs(rel) / 150, 0.2, 1), ev = (G.mounted ? 1 - Math.min(0.7, G.speed / 55) : 1) * (1 - Math.min(0.55, Math.abs(G.bvx || 0) * 0.14));
  const hit = Math.random() < hitBase * f * ev;
  const tx = px + (hit ? 0 : rand(-2.5, 2.5)), ty = 1.2 + (hit ? 0 : rand(-1.2, 1.2));
  G.fx.tracer(from, { x: tx + (hit ? 0 : 0), y: ty, s: G.d + (hit ? 0 : rand(-2, 6)) }, 'e', 300, 6, 0.04);
  G.fx.flash(from.x, from.y, from.s, 0.7);
  G.snd.shot(snd, Math.abs(rel), clamp((e.x - px) / 40, -1, 1));
  if (hit) { hurt(dmg); G.fx.sparks(tx, ty, G.d - 0.6, 2); }
}

function updateWalker(e, dt) {
  const def = e.def, rel = relOf(e), px = playerX();
  e.t += dt;
  if (e.dead) {
    e.deadT += dt; const k = clamp(e.deadT / 0.5, 0, 1);
    e.obj.rotation.x = k * Math.PI / 2 * 0.98; e.obj.position.y = 0.12 * k;
    return e.deadT > 4;
  }
  let moving = false;
  const desired = e.standoff;
  if (rel > desired) { e.s -= def.speed * dt; moving = true; }
  else if (e.kind === 'gunman') { e.x = clamp(e.x0 + Math.sin(e.t * 0.9 + e.x0) * 2.2, -11, 11); }
  // if the bike has passed, keep running/chasing a bit
  if (rel < -30) { G.escaped++; return true; }
  e.obj.position.set(e.x, e.y, -(e.s - G.d)); e.obj.rotation.y = Math.PI;
  // aim (analytic: model faces +z render)
  const r2 = relOf(e);
  const behind = r2 < 1;
  let aim = null;
  if (!behind) { aim = _v.set(-(px - e.x), 1.35 - 1.45, -r2).normalize().clone(); }
  if (moving && e.kind !== 'terrorist') e.hum.walk(dt, rel < def.range ? aim : null, e.kind === 'kidnapper');
  else if (moving) e.hum.walk(dt, rel < def.range + 15 ? aim : null, false);
  else e.hum.stand(e.t, aim, e.kind === 'terrorist' ? 0.3 : 0.1);
  if (e.flinch > 0) { e.flinch -= dt; e.obj.position.z += e.flinch * 1.2; }
  // fire
  if (!behind && rel < def.range) {
    e.fireT -= dt;
    if (e.fireT <= 0) {
      e.fireT = rand(def.rate[0], def.rate[1]);
      if (e.kind === 'kidnapper' || e.kind === 'terrorist') { e.burst++; if (e.burst > (e.kind === 'kidnapper' ? 10 : 5)) { e.burst = 0; e.fireT = rand(1.0, 2.0); } }
      const from = { x: e.x + (px - e.x) * 0.02, y: 1.4, s: e.s - 0.7 };
      const pump = e.kind === 'pirate' ? (rel < 28 ? 1.6 : 0.5) : 1;
      enemyShoot(e, from, def.dmg, 0.34 * pump, 'enemy', e.kind === 'pirate' ? 'shotgun' : e.kind === 'kidnapper' ? 'smg' : 'enemy');
    }
  }
  return false;
}

function updateVehicle(e, dt) {
  const rel = relOf(e), px = playerX(), c = e.obj;
  e.t += dt;
  if (e.dead) {
    e.deadT += dt;
    if (Math.random() < dt * 14) G.fx.fireAt(e.x, e.cls === 'truck' ? 2.4 : 1.8, e.s, 1.4);
    if (Math.random() < dt * 8) G.fx.smokeAt(e.x, 2.2, e.s, 1.6, 0.12);
    c.position.set(e.x, 0, -(rel)); return rel < -70;
  }
  if (e.cls === 'armor' && e.state === 'drive') {
    e.s -= e.speed * dt; if (rel < 50) e.state = 'hold';
    for (const w of c.userData.wheels) w.rotation.x += e.speed * dt / 0.62;
  }
  c.position.set(e.x, 0, -(rel));
  if (e.flinch > 0) { e.flinch -= dt; c.position.y = Math.sin(e.t * 60) * 0.02; }
  // damaged
  const hpk = e.hp / e.maxhp;
  if (hpk < 0.55 && Math.random() < dt * 8) G.fx.smokeAt(e.x + (e.cls === 'truck' ? 0 : 0), 2.0, e.s - 3, 1, 0.25);
  if (hpk < 0.25 && Math.random() < dt * 10) G.fx.fireAt(e.x, 2.0, e.s - 3, 1);
  // turret tracks the player
  if (e.cls === 'armor') { const tu = c.userData.turret; tu.rotation.y = clamp(Math.atan2(-(px - e.x) * 1, -rel) * 0, -1, 1); }
  if (e.cls === 'truck') {
    const g = e.gunner; _v.set(-(px - e.x), 1.2 - 3.1, -rel).normalize(); g.stand(e.t, _v.clone(), 0);
    c.userData.mg.visible = false; g.gun.scale.setScalar(1.5);
  }
  // crash with the bike
  if (G.mounted && G.speed > 1.5 && Math.abs(rel) < e.halfLen + 0.8 && Math.abs(px - e.x) < 6.4) {
    G.d -= 9; G.speed = 0; G.gear = 0; G.ui.gearChanged(); G.shake = 1.2; G.snd.crash(); hurt(30); G.fx.sparks(px, 0.8, G.d + 2, 14); G.ui.toast('CRASH! DESTROY THE ROADBLOCK');
  }
  // gunfire
  const range = e.cls === 'truck' ? 125 : 130;
  if (rel < range && rel > 0) {
    e.fireT -= dt;
    if (e.fireT <= 0) {
      e.burst++; e.fireT = 0.13;
      if (e.burst > 9) { e.burst = 0; e.fireT = rand(1.4, 2.4); }
      const m = { x: e.x + (e.cls === 'armor' ? 0 : 0), y: e.cls === 'truck' ? 3.2 : 2.4, s: e.s - 3 };
      enemyShoot(e, m, e.cls === 'truck' ? 4.2 : 5, 0.26, 'enemy', 'mg');
    }
  }
  if (rel < -60) { G.escaped++; return true; }
  return false;
}

function updateChopper(e, dt) {
  const c = e.obj, px = playerX(); e.t += dt;
  const ud = c.userData; ud.rotor.rotation.y += dt * 38; ud.tr.rotation.x += dt * 50;
  ud.nav.visible = Math.floor(e.t * 2) % 2 === 0;
  if (e.state === 'falling') {
    e.vy -= 16 * dt; e.y += e.vy * dt; e.s += (G.speed * 0.6) * dt; c.rotation.z += e.spin * dt; c.rotation.y += e.spin * 0.2 * dt;
    if (Math.random() < dt * 40) G.fx.fireAt(e.x, e.y, e.s, 1.6); if (Math.random() < dt * 40) G.fx.smokeAt(e.x, e.y, e.s, 1.5, 0.1);
    c.position.set(e.x, e.y, -relOf(e));
    if (e.y < 1.2) { G.fx.explode(e.x, 1, e.s, 2.6); G.snd.explosion(2, Math.abs(relOf(e))); G.shake = Math.max(G.shake, 0.6); return true; }
    return false;
  }
  // hover around 75 m ahead
  const target = e.final ? 60 + Math.sin(e.t * 0.5) * 20 : 78 + Math.sin(e.t * 0.45 + e.px) * 26;
  e.rel = e.rel + clamp(target - e.rel, -34 * dt, 34 * dt); // closing speed vs bike
  const tx = Math.sin(e.t * 0.35 + e.px) * 9 + G.bx * 0.5;
  const ox = e.x; e.x = damp(e.x, tx, 1.0, dt);
  e.y = damp(e.y, 15 + Math.sin(e.t * 0.7) * 3, 1.2, dt);
  e.s = G.d + e.rel;
  c.position.set(e.x, e.y, -e.rel);
  c.rotation.y = Math.PI; c.rotation.x = clamp((target - e.rel) * -0.004, -0.2, 0.2) + 0.06; c.rotation.z = clamp((e.x - ox) / dt * 0.03, -0.35, 0.35);
  if (e.flinch > 0) { e.flinch -= dt; c.rotation.z += Math.sin(e.t * 50) * 0.03; }
  if (Math.random() < dt * 8 && e.hp / e.maxhp < 0.5) G.fx.smokeAt(e.x, e.y, e.s + 2, 0.7, 0.2);
  // minigun burst
  e.fireT -= dt;
  if (e.fireT <= 0 && e.rel < 140) {
    e.burst++; e.fireT = 0.07;
    if (e.burst > 14) { e.burst = 0; e.fireT = rand(2, 3.2); }
    enemyShoot(e, { x: e.x, y: e.y - 0.75, s: e.s - 2.2 }, 3.2, 0.2, 'enemy', 'mg');
  }
  e.rocketT -= dt;
  if (e.rocketT <= 0 && e.rel < 130) {
    e.rocketT = rand(6, 9);
    const mesh = makeRocketMesh('rocket'); G.root.add(mesh);
    const dx = px - (e.x + 1.5), dy = 1.2 - e.y, ds = G.d - e.s, L = Math.hypot(dx, dy, ds), sp = 62;
    G.projs.push({ owner: 'e', kind: 'rocket', x: e.x + 1.5, y: e.y - 0.25, s: e.s - 1.2, vx: dx / L * sp, vy: dy / L * sp, vs: ds / L * sp, target: null, mesh, t: 0, spd: sp });
    G.snd.shot('rocket', e.rel);
  }
}

export function updateEnemies(dt) {
  for (let i = G.enemies.length - 1; i >= 0; i--) {
    const e = G.enemies[i]; let rm = false;
    if (e.cls === 'walker') rm = updateWalker(e, dt);
    else if (e.cls === 'chopper') rm = updateChopper(e, dt);
    else rm = updateVehicle(e, dt);
    if (rm) { G.root.remove(e.obj); G.enemies.splice(i, 1); }
  }
  updateProjs(dt);
  // pickups
  for (let i = G.pickups.length - 1; i >= 0; i--) {
    const p = G.pickups[i], rel = p.s - G.d;
    p.obj.position.set(p.x, 0, -rel); p.obj.rotation.y += dt * 1.5; p.obj.userData.beam.rotation.y = 0;
    if (Math.abs(rel) < 3 && Math.abs(p.x - G.bx) < (G.mountT > 0.9 ? 1.5 : 3.2)) {
      G.root.remove(p.obj); G.pickups.splice(i, 1); G.snd.pickup();
      if (p.kind === 'med') { G.hp = Math.min(G.maxHp, G.hp + 40); G.ui.toast('+40 HEALTH'); }
      else { resupply(1); G.ui.toast('AMMO RESUPPLY'); }
      G.ui.ammoChanged();
    } else if (rel < -25) { G.root.remove(p.obj); G.pickups.splice(i, 1); }
  }
}
function resupply(k) {
  const add = { shotgun: 8, sniper: 5, rocket: 3, frag: 4, nuke: 0 };
  for (const w of G.weapons) { const a = add[w.def.id]; if (a) w.reserve = Math.min(w.def.max, w.reserve + a * k); }
  if (Math.random() < 0.3 && G.weapons[6].reserve < 2) G.weapons[6].reserve++;
}

/* ------------------------------------------------------------ mission flow */
export function resetMission() {
  for (const e of G.enemies) G.root.remove(e.obj); G.enemies.length = 0;
  for (const p of G.projs) G.root.remove(p.mesh); G.projs.length = 0;
  for (const p of G.pickups) G.root.remove(p.obj); G.pickups.length = 0;
  for (const a of G.arches) G.root.remove(a.obj); G.arches.length = 0;
  G.fx.clear();
}
export function newMission() {
  const { ev, total } = buildTimeline();
  G.timeline = ev; G.total = total; G.evIdx = 0;
  resetMission();
  G.d = 0; G.speed = 0; G.gear = 0; G.mounted = true; G.mountT = 1; G.wantDismount = false; G.lane = 2; G.bx = LANES[2]; G.bvx = 0;
  G.snd.pick && G.snd.pick();
  G.clock = 0; G.hp = G.maxHp; G.kills = 0; G.escaped = 0; G.shots = 0; G.hits = 0;
  G.nextCp = 1; G.cpSpawned = false; G.finishSpawned = false; G.cpNum = 0;
  initWeapons();
  G.save = { clock: 0, d: 0, evIdx: 0, kills: 0, escaped: 0, hp: G.hp, n: 0, ammo: G.weapons.map((w) => [w.mag, w.reserve]) };
  G.state = 'play'; G.ui.newMission();
}
export function respawn() {
  resetMission();
  const s = G.save;
  G.d = s.d + 4; G.speed = 0; G.gear = 0; G.lane = 2; G.bx = LANES[2]; G.bvx = 0; G.mounted = true; G.mountT = 1; G.wantDismount = false;
  G.clock = s.clock; G.evIdx = s.evIdx; G.kills = s.kills; G.escaped = s.escaped; G.hp = G.maxHp;
  G.weapons.forEach((w, i) => { w.mag = s.ammo[i][0]; w.reserve = s.ammo[i][1]; w.reloadT = 0; });
  G.nextCp = s.n + 1; G.cpSpawned = false; G.finishSpawned = false;
  G.state = 'play'; G.ui.respawned(); G.ui.ammoChanged();
}
function countFinals() { let n = 0; for (const e of G.enemies) if (e.final && !(e.dead && e.cls !== 'chopper')) { if (!e.dead) n++; } return n; }

export function updateMission(dt) {
  G.clock += dt;
  while (G.evIdx < G.timeline.length && G.timeline[G.evIdx].t <= G.clock) spawnEvent(G.timeline[G.evIdx++]);
  // checkpoint arch
  if (G.nextCp <= 6 && !G.cpSpawned && G.clock >= G.nextCp * CP_INT - 4) {
    G.cpSpawned = true;
    const obj = makeArch(`CHECKPOINT ${G.nextCp}`, 0xf2c14e); G.root.add(obj);
    G.arches.push({ kind: 'cp', n: G.nextCp, s: G.d + clamp(G.speed * 4, 45, 170), obj });
  }
  if (!G.finishSpawned && G.clock >= MISSION_T - 8 && G.evIdx >= G.timeline.length && countFinals() === 0) {
    G.finishSpawned = true;
    const obj = makeArch('MISSION COMPLETE', 0x7dff9a, true); G.root.add(obj);
    G.arches.push({ kind: 'finish', s: G.d + clamp(G.speed * 4, 60, 180), obj });
    G.ui.banner('ROUTE CLEAR', 'Ride through the finish gate', 4);
  }
  for (let i = G.arches.length - 1; i >= 0; i--) {
    const a = G.arches[i], rel = a.s - G.d; a.obj.position.set(0, 0, -rel);
    if (rel <= 0 && G.mountT > 0.9) {
      if (a.kind === 'cp') {
        G.cpNum = a.n; G.nextCp = a.n + 1; G.cpSpawned = false;
        G.hp = Math.min(G.maxHp, G.hp + 60);
        const floor = { shotgun: 16, sniper: 10, rocket: 5, frag: 6, nuke: 1 };
        for (const w of G.weapons) { const f = floor[w.def.id]; if (f && w.reserve < f) w.reserve = f; }
        G.save = { clock: G.clock, d: a.s, evIdx: G.evIdx, kills: G.kills, escaped: G.escaped, hp: G.hp, n: a.n, ammo: G.weapons.map((w) => [w.mag, w.reserve]) };
        G.snd.checkpoint(); G.ui.banner(`CHECKPOINT ${a.n} SAVED`, 'Health & ammo resupplied', 3); G.ui.ammoChanged();
      } else { G.state = 'win'; G.ui.showWin(); }
      G.root.remove(a.obj); G.arches.splice(i, 1);
    } else if (rel < -40) { G.root.remove(a.obj); G.arches.splice(i, 1); if (a.kind === 'cp') { G.cpSpawned = false; G.nextCp = a.n + 1; } }
  }
}
