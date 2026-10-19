import * as THREE from 'three';

/** shared mutable game state — world coordinates: x lateral, y up, s forward along the road */
export const G = {
  d: 0, speed: 0, gear: 0, mounted: true, mountT: 1, mountDir: 0,
  clock: 0, hp: 100, maxHp: 100,
  kills: 0, escaped: 0, total: 0, shots: 0, hits: 0,
  view: 0,
  enemies: [], projs: [], pickups: [], arches: [],
  scene: null, camera: null, renderer: null,
  timeU: { value: 0 },
  quality: 3,
  state: 'title', // title | play | pause | dead | win
  shake: 0,
  slow: 1,
  aim: null,
  lastEnemyHitT: 0,
};

export const V = {
  toRender(p, out) { // world (x,y,s) -> render coords
    return out.set(p.x, p.y, -(p.s - G.d));
  },
};
export const tmpV = new THREE.Vector3();
