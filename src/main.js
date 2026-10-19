import * as THREE from 'three';
import { G } from './state.js';
import { LANE_X, LANES, GEARS, WEAPONS } from './data.js';
import { World } from './world.js';
import { FX } from './fx.js';
import { Sound } from './audio.js';
import { makeBike, Humanoid, makeGun } from './models.js';
import { initUI, ui } from './ui.js';
import * as game from './game.js';
import { clamp, lerp, damp } from './util.js';

const $ = (id) => document.getElementById(id);
const isMobile = matchMedia('(pointer:coarse)').matches || /Android|iPhone|iPad/i.test(navigator.userAgent);

/* ---------------------------------------------------------------- renderer */
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isMobile, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.95; renderer.autoClear = false; renderer.setClearColor(0xb4c4c0, 1);
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.25, 700);
scene.add(camera);
G.scene = scene; G.camera = camera; G.renderer = renderer;
G.root = new THREE.Group(); scene.add(G.root);
G.density = isMobile ? 0.6 : 1;
const world = new World(scene, renderer, camera);
{ const pm = new THREE.PMREMGenerator(renderer); scene.environment = pm.fromScene(world.bg, 0.03, 1, 2000).texture; scene.environmentIntensity = 0.55; pm.dispose(); }
G.fx = new FX(scene); G.snd = new Sound(); G.ui = ui;
G.snd.onTrack = (t) => ui.track(t);
world.setQuality(isMobile ? 1 : 3);

/* ---------------------------------------------------------------- player rig */
const player = new THREE.Group(); player.position.x = LANES[2]; G.lane = 2; G.bx = LANES[2]; G.bvx = 0; G.root.add(player);
const bike = makeBike(); player.add(bike);
const rider = new Humanoid({ head: 'helmet', shirt: 0xa3322a, pants: 0x5a4a35, vest: null, pack: 0x3b4128, glove: 0x4a3320, gun: 'ak', skin: 0x7a4e30 });
player.add(rider.root);
const backGun = makeGun('ak'); backGun.position.set(0.02, 0.32, 0.34); backGun.rotation.set(0.1, 0, 0.8); backGun.scale.setScalar(0.95); rider.torso.add(backGun);
let vm = null, vmType = '';
function setViewmodel() {
  const id = game.weapon().def.id; if (id === vmType) return; vmType = id;
  if (vm) camera.remove(vm); vm = makeGun(id); vm.scale.setScalar(1.15);
  vm.position.set(0.2, -0.2, -0.45); vm.userData.base = vm.position.clone(); camera.add(vm);
  rider.setGun(id);
}

/* ---------------------------------------------------------------- input / actions */
const keys = {};
const actions = {
  gearUp() { if (G.state !== 'play' || !G.mounted || G.mountT < 0.9) return; G.wantDismount = false; if (G.gear < 5) { G.gear++; G.snd.gear(); ui.gearChanged(); } },
  gearDown() { if (G.state !== 'play' || !G.mounted || G.mountT < 0.9) return; if (G.gear > 0) { G.gear--; G.snd.gear(); ui.gearChanged(); } },
  laneLeft() { if (G.state !== 'play' || !G.mounted || G.mountT < 0.9) return; if (G.lane > 0) { G.lane--; G.snd.gear(); } },
  laneRight() { if (G.state !== 'play' || !G.mounted || G.mountT < 0.9) return; if (G.lane < LANES.length - 1) { G.lane++; G.snd.gear(); } },
  dismount() { if (G.state !== 'play' || !G.mounted) return; G.gear = 0; G.wantDismount = true; ui.gearChanged(); ui.toast('BRAKING…'); },
  mount() { if (G.state !== 'play' || G.mounted) return; G.mounted = true; G.wantDismount = false; },
  select(i) { if (G.state === 'play') game.selectWeapon(i); },
  view() { G.view = 1 - G.view; G.snd.click(); },
  pause() { if (G.state === 'play') { G.state = 'pause'; $('pause').classList.remove('hide'); G.snd.pauseMusic(true); } else if (G.state === 'pause') resume(); },
  respawn() { game.respawn(); },
  restart() { game.newMission(); setViewmodel(); },
};
initUI(camera, actions);
function resume() { G.state = 'play'; $('pause').classList.add('hide'); G.snd.pauseMusic(false); }
addEventListener('keydown', (e) => {
  if (e.repeat) return; keys[e.code] = true;
  switch (e.code) {
    case 'KeyW': case 'ArrowUp': actions.gearUp(); break; case 'KeyS': case 'ArrowDown': actions.gearDown(); break;
    case 'KeyA': case 'ArrowLeft': actions.laneLeft(); break; case 'KeyD': case 'ArrowRight': actions.laneRight(); break;
    case 'Space': case 'KeyJ': G.shootHeld = true; e.preventDefault(); break;
    case 'KeyQ': actions.select(G.wi - 1); break; case 'KeyE': actions.select(G.wi + 1); break;
    case 'KeyC': actions.view(); break; case 'KeyF': G.mounted ? actions.dismount() : actions.mount(); break;
    case 'KeyP': case 'Escape': actions.pause(); break;
    default: if (e.code.startsWith('Digit')) { const n = +e.code.slice(5) - 1; if (n >= 0 && n < 7) actions.select(n); }
  }
});
addEventListener('keyup', (e) => { keys[e.code] = false; if (e.code === 'Space' || e.code === 'KeyJ') G.shootHeld = false; });
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { if (G.state === 'play') actions.pause(); G.snd.suspend && G.snd.suspend(true); }
  else { G.snd.suspend && G.snd.suspend(false); if (G.state === 'pause') G.snd.pauseMusic(true); }
});
document.addEventListener('pause', () => { if (G.state === 'play') actions.pause(); G.snd.suspend && G.snd.suspend(true); });
document.addEventListener('resume', () => { G.snd.suspend && G.snd.suspend(false); });
addEventListener('resize', () => { renderer.setSize(innerWidth, innerHeight, false); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); });

/* menus */
$('btnStart').addEventListener('click', async () => {
  G.snd.init();
  try { const el = document.documentElement; if (el.requestFullscreen) await el.requestFullscreen(); if (screen.orientation?.lock) await screen.orientation.lock('landscape'); } catch (e) { }
  $('title').classList.add('hide'); $('app').classList.remove('menu'); game.newMission(); setViewmodel();
});
$('pResume').addEventListener('click', resume);
$('pRestart').addEventListener('click', () => { resume(); game.newMission(); setViewmodel(); });
$('pMusic').addEventListener('click', (e) => { G.snd.setMusic(!G.snd.musicOn); e.target.textContent = 'MUSIC: ' + (G.snd.musicOn ? 'ON' : 'OFF'); });
$('pSfx').addEventListener('click', (e) => { G.snd.muteSfx(G.snd.sfxOn); e.target.textContent = 'SFX: ' + (G.snd.sfxOn ? 'ON' : 'OFF'); });
const QN = ['LOW', 'MEDIUM', 'HIGH', 'ULTRA'];
$('pQual').addEventListener('click', (e) => { auto.locked = true; world.setQuality((G.quality + 1) % 4); e.target.textContent = 'GRAPHICS: ' + QN[G.quality]; });
$('pQual').textContent = 'GRAPHICS: ' + QN[G.quality];

/* ---------------------------------------------------------------- per-frame helpers */
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3(0, 1.3, -20), tmpV = new THREE.Vector3(), tmpQ = new THREE.Quaternion(), tmpM = new THREE.Matrix4();
const aimV = new THREE.Vector3(0.0, 0.0, -1);
let lastWheel = 0, prevSpeed = 0, vmKick = 0, lastWi = -1, riderYawS = 0, fov = 60;
const sstep = (t) => t * t * (3 - 2 * t);

const M_PELVIS = new THREE.Vector3(0, 0.84, 0.3), S_PELVIS = new THREE.Vector3(-1.7, 0.93, 0.0);
const M_FL = new THREE.Vector3(-0.25, 0.4, 0.1), M_FR = new THREE.Vector3(0.25, 0.4, 0.1), S_FL = new THREE.Vector3(-1.9, 0.06, 0.05), S_FR = new THREE.Vector3(-1.5, 0.06, -0.25);
const BAR_L = new THREE.Vector3(-0.43, 1.1, -0.36), BAR_R = new THREE.Vector3(0.43, 1.1, -0.36);
const P = { pelvis: new THREE.Vector3(), footL: new THREE.Vector3(), footR: new THREE.Vector3() };

function animateRider(dt, t) {
  const e = sstep(G.mountT), arc = Math.sin(Math.PI * G.mountT);
  P.pelvis.lerpVectors(S_PELVIS, M_PELVIS, e); P.pelvis.y += arc * 0.3;
  P.footL.lerpVectors(S_FL, M_FL, e); P.footL.y += arc * 0.35 * (G.mountDir ? 1 : 1); P.footR.lerpVectors(S_FR, M_FR, e); P.footR.y += arc * 0.2;
  const crouch = e < 0.5 ? 0.25 * (1 - e * 2) : 0;
  // aim direction in player-local space
  let dir;
  const a = G.aim;
  if (a) {
    const ec = { x: a.e.x, y: a.e.y + (a.e.cls === 'walker' ? 1.1 : a.e.cls === 'chopper' ? 0 : 1.9), s: a.e.s };
    dir = tmpV.set(ec.x - G.bx - P.pelvis.x, ec.y - 1.45, -(ec.s - G.d)).normalize();
  } else dir = tmpV.set(0.05, -0.12, -1).normalize();
  aimV.lerp(dir, 1 - Math.exp(-14 * dt)).normalize();
  const ry = Math.atan2(-aimV.x, -aimV.z);
  riderYawS = damp(riderYawS, clamp(ry, -1.1, 1.1) * 0.55, 10, dt);
  P.pelvis.y -= crouch * 0.2;
  const pit = lerp(0.1, 0.42, e) + (G.recoil || 0) * 0.04 + (G.mounted ? 0 : crouch * 0.1);
  Object.assign(P, { yaw: riderYawS, pitch: pit, aim: aimV, kneePoleL: new THREE.Vector3(-0.35, 0.1, -1), kneePoleR: new THREE.Vector3(0.35, 0.1, -1), handLFree: e > 0.6 ? BAR_L : null });
  if (e < 0.6) { P.kneePoleL.set(-0.5, 0, -1); P.kneePoleR.set(0.3, 0, -1); }
  rider.setPose(P);
  rider.root.visible = !(G.view === 1 && G.mountT > 0.5);
}

function updateCamera(dt, t) {
  const px = game.playerX();
  const sh = G.shake; const shx = (Math.random() - 0.5) * sh * 0.12, shy = (Math.random() - 0.5) * sh * 0.12;
  const e = sstep(G.mountT);
  const chaseP = tmpV.set(lerp(px + 0.55, G.bx * 0.92, e), lerp(1.8, 1.85, e), lerp(3.4, 4.1 + G.speed * 0.02, e));
  const lookP = new THREE.Vector3(lerp(px, G.bx, e) * 0.9, 1.25, -16);
  let wantFov = 60 + G.speed * 0.22;
  if (G.view === 0) {
    camPos.lerp(chaseP, 1 - Math.exp(-6 * dt)); camLook.lerp(lookP, 1 - Math.exp(-7 * dt));
    camera.position.set(camPos.x + shx, camPos.y + shy, camPos.z); camera.lookAt(camLook.x, camLook.y, camLook.z);
    camera.position.y += Math.sin(t * 9) * 0.006 * Math.min(G.speed / 20, 1);
  } else {
    const head = new THREE.Vector3(game.playerX() + (G.mounted ? 0.0 : 0), lerp(1.7, 1.52, e), lerp(-0.1, -0.12, e));
    camPos.lerp(head, 1 - Math.exp(-14 * dt));
    camera.position.set(camPos.x + shx, camPos.y + shy, camPos.z);
    const look = tmpV.copy(aimV).multiplyScalar(30).add(camera.position).setY(camera.position.y + aimV.y * 30);
    tmpM.lookAt(camera.position, new THREE.Vector3(camera.position.x + aimV.x * 30, camera.position.y + aimV.y * 30 + 0.0, camera.position.z + aimV.z * 30), new THREE.Vector3(0, 1, 0));
    tmpQ.setFromRotationMatrix(tmpM); camera.quaternion.slerp(tmpQ, 1 - Math.exp(-12 * dt));
    camLook.set(camera.position.x, 1.3, camera.position.z - 20);
    const w = game.weapon().def; wantFov = w.zoom ? 20 : 68;
  }
  fov = damp(fov, wantFov, 9, dt); camera.fov = fov; camera.updateProjectionMatrix();
  // viewmodel
  if (vm) {
    const show = G.view === 1 && G.mountT > 0.5 && !(game.weapon().def.zoom);
    vm.visible = show; vmKick = damp(vmKick, 0, 12, dt);
    if (G.recoil) vmKick = Math.max(vmKick, G.recoil * 0.07);
    vm.position.set(vm.userData.base.x, vm.userData.base.y + vmKick * 0.4 + Math.sin(t * 2) * 0.002, vm.userData.base.z + vmKick);
    vm.rotation.x = vmKick * 1.4;
  }
}

/* ---------------------------------------------------------------- main update */
const auto = { acc: 0, n: 0, locked: false };
let last = performance.now(), T = 0, titleClock = 0;
function frame(now) {
  requestAnimationFrame(frame);
  let rdt = Math.min((now - last) / 1000, window.__dtCap || 0.06); last = now;
  // adaptive quality
  if (!auto.locked && rdt > 0) { auto.acc += rdt; auto.n++; if (auto.acc > 3) { const fps = auto.n / auto.acc; if (fps < 38 && G.quality > 0) { world.setQuality(G.quality - 1); $('pQual').textContent = 'GRAPHICS: ' + QN[G.quality]; } else if (fps > 58 && G.quality < 2 && !isMobile) { /* keep */ } auto.acc = 0; auto.n = 0; } }
  update(rdt);
  renderer.clear(); renderer.render(world.bg, camera); renderer.clearDepth(); renderer.render(scene, camera);
}
function update(rdt) {
  const dt = rdt * (G.state === 'play' ? G.slow : 1);
  T += dt;
  const playing = G.state === 'play', title = G.state === 'title';

  if (G.state === 'play' || G.state === 'dead' || G.state === 'win') {
    if (playing) { game.updateMission(dt); }
    // speed
    const wantMount = G.mounted && G.mountT > 0.95;
    const target = G.state === 'dead' ? 0 : wantMount ? GEARS[G.gear] : 0;
    const acc = target > G.speed ? 6.5 : 15;
    prevSpeed = G.speed; G.speed += clamp(target - G.speed, -acc * dt, acc * dt);
    if (G.state === 'win') G.speed = Math.max(G.speed, 14);
    if (G.wantDismount && G.speed < 1.2 && G.mounted) { G.mounted = false; G.wantDismount = false; }
    G.d += G.speed * dt;
    { const tx = LANES[G.lane], ox = G.bx; G.bx += clamp(tx - G.bx, -7.5 * dt, 7.5 * dt); G.bvx = (G.bx - ox) / Math.max(dt, 1e-3); }
    // mount blend
    const dm = (G.mounted ? 1 : 0) - G.mountT; G.mountT = clamp(G.mountT + Math.sign(dm) * Math.min(Math.abs(dm), dt * 1.5), 0, 1);
    if (playing) {
      game.updateAim(); if (G.shootHeld) game.tryFire(dt);
      G.fireCd = Math.max(0, G.fireCd - dt); game.updateReload(dt); game.updateEnemies(dt);
    } else if (G.state !== 'win') { game.updateAim(); } else { game.updateEnemies(dt); }
  } else if (title) {
    titleClock += dt; G.speed = 13; G.d += G.speed * dt; G.mountT = 1; G.aim = null;
  }
  G.recoil = Math.max(0, (G.recoil || 0) - dt * 8);
  if (G.state !== 'pause') {
    if (game.weapon().def.id !== lastWi) { lastWi = game.weapon().def.id; setViewmodel(); }
    // bike
    const ud = bike.userData, dtw = G.speed * dt / 0.34;
    ud.wF.rotation.x -= dtw; ud.wR.rotation.x -= dtw;
    const bob = Math.sin(T * 14) * 0.006 * Math.min(G.speed / 12, 1) + Math.sin(T * 5.3) * 0.004 * Math.min(G.speed / 20, 1);
    player.position.x = G.bx; player.position.y = bob; player.rotation.z = damp(player.rotation.z, clamp(-G.bvx * 0.035, -0.28, 0.28), 10, dt); player.rotation.y = clamp(-G.bvx * 0.012, -0.12, 0.12); const acc = (G.speed - prevSpeed) / Math.max(dt, 1e-3);
    bike.rotation.x = damp(bike.rotation.x, clamp(-acc * 0.004, -0.06, 0.05), 6, dt);
    ud.tail.material.emissiveIntensity = acc < -3 ? 3 : 0.4;
    if (G.speed > 4 && Math.random() < dt * 26) G.fx.dust(G.bx + (Math.random() - 0.5) * 0.4, 0.05, G.d + 0.8, G.speed);
    animateRider(dt, T);
    updateCamera(dt, T);
    G.shake = Math.max(0, G.shake - dt * 2.8);
    for (const c of world.fires()) { if (Math.random() < dt * 22) { G.fx.fireAt(c.fireX, c.fireY, c.fireS, 1); } if (Math.random() < dt * 9) G.fx.smokeAt(c.fireX, c.fireY + 0.4, c.fireS, 1.2, 0.18); }
    world.update(dt, G.d, camera.position);
    // chopper rotor sound
    let heli = 0; for (const e of G.enemies) if (e.cls === 'chopper' && !e.dead) heli = Math.max(heli, 1 - clamp(Math.abs(e.s - G.d) / 220, 0, 1));
    G.snd.setHeli(heli); G.snd.engine(G.speed, G.gear, G.mounted, G.state !== 'pause' && G.state !== 'dead');
    G.fx.update(dt, G.d, camera, renderer);
    if (!title) ui.update(rdt);
  }
}
camera.position.set(LANES[2], 2, 5); camPos.copy(camera.position);
game.initWeapons(); G.ui.ammoChanged = ui.ammoChanged.bind(ui);
ui.gearChanged();
requestAnimationFrame(frame);
window.__sim = (n, dt = 0.05) => { for (let i = 0; i < n; i++) update(dt); };
window.__G = G; window.__world = world; window.__game = game;
