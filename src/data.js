import { rand, pick } from './util.js';

export const LANE_X = 1.4;
export const LANES = [-4.2, -1.4, 1.4, 4.2];
export const GEARS = [0, 9, 17, 26, 35, 44];       // m/s per gear (N,1..5)
export const MISSION_T = 330;                      // seconds (5:30)
export const CP_INT = 50;                          // checkpoint every 50 s

/* damage by target class */
export const WEAPONS = [
  { id: 'ak', name: 'AK-47', mag: 30, reserve: Infinity, max: Infinity, rate: 0.1, range: 130, spread: 0.014, reload: 1.5, kind: 'bullet', auto: true,
    dmg: { walker: 34, truck: 5, armor: 4, chopper: 12 } },
  { id: 'smg', name: 'VECTOR SMG', mag: 35, reserve: Infinity, max: Infinity, rate: 0.065, range: 75, spread: 0.022, reload: 1.3, kind: 'bullet', auto: true,
    dmg: { walker: 22, truck: 3, armor: 2, chopper: 8 } },
  { id: 'shotgun', name: 'SPAS-12', mag: 6, reserve: 24, max: 48, rate: 0.75, range: 48, spread: 0.055, pellets: 8, reload: 1.9, kind: 'bullet', auto: false,
    dmg: { walker: 22, truck: 2, armor: 1.5, chopper: 3 } },
  { id: 'sniper', name: 'AWM SNIPER', mag: 5, reserve: 15, max: 30, rate: 1.05, range: 280, spread: 0.0025, reload: 2.2, kind: 'bullet', auto: false, zoom: true,
    dmg: { walker: 170, truck: 30, armor: 24, chopper: 230 } },
  { id: 'rocket', name: 'RPG-7', mag: 1, reserve: 6, max: 14, rate: 1.4, range: 190, aoe: 8, reload: 1.6, kind: 'rocket', auto: false, speed: 115,
    dmg: { walker: 220, truck: 340, armor: 380, chopper: 390 } },
  { id: 'frag', name: 'M79 FRAG', mag: 1, reserve: 8, max: 16, rate: 1.0, range: 110, aoe: 10, reload: 1.3, kind: 'frag', auto: false, speed: 62,
    dmg: { walker: 170, truck: 130, armor: 110, chopper: 300 } },
  { id: 'nuke', name: 'TACTICAL NUKE', mag: 1, reserve: 1, max: 2, rate: 3.0, range: 300, aoe: 58, reload: 3.0, kind: 'nuke', auto: false, speed: 95, minRange: 85,
    dmg: { walker: 99999, truck: 3000, armor: 3000, chopper: 3000 } },
];

export const ENEMY = {
  terrorist: { cls: 'walker', name: 'TERRORIST', hp: 100, r: 0.55, speed: 2.4, range: 85, standoff: [38, 62], dmg: 5, rate: [0.32, 0.6], gun: 'ak', best: ['sniper', 'ak'] },
  pirate:    { cls: 'walker', name: 'ROAD PIRATE', hp: 110, r: 0.55, speed: 3.4, range: 40, standoff: [18, 30], dmg: 11, rate: [1.1, 1.7], gun: 'shotgun', best: ['shotgun', 'ak'] },
  kidnapper: { cls: 'walker', name: 'KIDNAPPER', hp: 90, r: 0.55, speed: 6.0, range: 34, standoff: [7, 13], dmg: 3.2, rate: [0.13, 0.22], gun: 'smg', best: ['smg', 'ak'] },
  gunman:    { cls: 'walker', name: 'UNKNOWN GUNMAN', hp: 100, r: 0.55, speed: 2.8, range: 65, standoff: [28, 48], dmg: 5.5, rate: [0.4, 0.8], gun: 'ak', best: ['sniper', 'ak'] },
  truck:     { cls: 'truck', name: 'ENEMY TRUCK', hp: 1200, r: 2.1, best: ['nuke', 'rocket'] },
  armor:     { cls: 'armor', name: 'ARMORED CAR', hp: 1500, r: 1.9, best: ['rocket', 'nuke'] },
  chopper:   { cls: 'chopper', name: 'ATTACK CHOPPER', hp: 700, r: 2.2, best: ['sniper', 'rocket', 'frag'] },
};

/* ---------------- mission timeline (330 s) ---------------- */
export function buildTimeline() {
  const ev = [];
  const add = (t, type, o = {}) => ev.push({ t, type, ...o });
  const grp = (t, kinds, n) => add(t, 'group', { kinds, n });

  add(1, 'msg', { text: 'SHIFT GEAR UP TO START RIDING', sub: 'Use ◀ ▶ to change lanes and dodge · aim is automatic', time: 5 });
  // ---- 0–50  warm-up
  grp(9, ['terrorist'], 3);
  add(14, 'crate');
  grp(24, ['terrorist', 'gunman'], 4);
  grp(37, ['kidnapper'], 3);
  grp(44, ['terrorist'], 3);
  // ---- 50–100  pirates & first roadblock
  grp(55, ['pirate'], 4);
  add(61, 'med');
  add(67, 'truck', { guards: 2, msg: 'ROADBLOCK AHEAD — USE NUKE OR ROCKETS' });
  add(82, 'crate');
  grp(86, ['gunman'], 4);
  grp(95, ['terrorist', 'pirate'], 4);
  // ---- 100–150  armor & first chopper
  add(103, 'armor');
  grp(108, ['terrorist'], 3);
  add(118, 'chopper', { msg: 'ATTACK CHOPPER — SNIPER / ROCKET / FRAG' });
  add(124, 'crate');
  grp(134, ['kidnapper', 'pirate'], 4);
  add(142, 'med');
  // ---- 150–200
  add(153, 'truck', { guards: 3 });
  grp(160, ['gunman', 'terrorist'], 4);
  add(170, 'chopper');
  add(176, 'crate');
  grp(184, ['kidnapper'], 5);
  add(192, 'armor');
  // ---- 200–250
  grp(204, ['terrorist', 'pirate', 'gunman'], 5);
  add(212, 'med');
  add(216, 'truck', { guards: 2 });
  grp(228, ['kidnapper', 'gunman'], 5);
  add(233, 'crate');
  add(238, 'chopper');
  grp(246, ['pirate', 'terrorist'], 4);
  // ---- 250–300
  grp(255, ['terrorist', 'gunman', 'kidnapper'], 6);
  add(258, 'armor');
  add(266, 'crate');
  add(272, 'chopper');
  add(277, 'chopper');
  grp(284, ['pirate', 'gunman'], 5);
  add(288, 'truck', { guards: 3 });
  add(294, 'med');
  // ---- 300–330  warlord convoy
  add(303, 'crate');
  add(305, 'msg', { text: 'WARLORD CONVOY INBOUND', sub: 'Destroy them all to finish the mission', time: 5 });
  add(309, 'truck', { guards: 2, final: true });
  add(312, 'armor', { final: true });
  grp(314, ['terrorist', 'kidnapper', 'gunman', 'pirate'], 6);
  add(318, 'chopper', { final: true });
  ev.sort((a, b) => a.t - b.t);
  let total = 0;
  for (const e of ev) {
    if (e.type === 'group') total += e.n;
    else if (e.type === 'truck' || e.type === 'armor' || e.type === 'chopper') total += 1;
  }
  return { ev, total };
}
