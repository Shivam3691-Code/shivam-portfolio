import { CatmullRomCurve3, Vector3 } from 'three';

// World layout — every section of the site is a physical place on a
// single camera path that travels into -Z.
export const ZONES = {
  hero: [0, 0, 0],
  journey: [
    [3, 0.2, -34],
    [-3, 0.9, -48],
    [3, 0.2, -62],
    [-3, 0.9, -76],
  ],
  projects: [
    [3.3, 0, -100],
    [-3.3, 0, -122],
    [3.3, 0, -144],
    [-3.3, 0, -166],
  ],
  skills: [3.6, 0, -192],
  cyber: [3.4, -0.4, -226],
  contact: [0, 0, -268],
};

// Station indices (must match data-station markers in the DOM)
export const STATIONS = {
  hero: 0,
  journey: [1, 2, 3, 4],
  projects: [5, 6, 7, 8],
  skills: 9,
  cyber: 10,
  contact: 11,
};
export const STATION_COUNT = 12;

function kf(at, pos, look, objX = 0) {
  return { at, pos, look, objX };
}

function keyframes() {
  const k = [];
  k.push(kf(0, [0, 0.3, 11], [0, 0.5, 0]));
  k.push(kf(0.55, [0, 6.5, -10], [0, 1, -34])); // fly over the hero
  ZONES.journey.forEach((n, i) => k.push(kf(1 + i, [0, n[1] + 1.1, n[2] + 9], [0, n[1], n[2]], n[0])));
  ZONES.projects.forEach((p, i) => k.push(kf(5 + i, [0, p[1] + 0.8, p[2] + 9.5], [0, p[1], p[2]], p[0])));
  const s = ZONES.skills;
  k.push(kf(9, [0, 1.2, s[2] + 13], [0, 0, s[2]], s[0]));
  const c = ZONES.cyber;
  k.push(kf(10, [0, 2.8, c[2] + 10.5], [0, -0.4, c[2]], c[0]));
  k.push(kf(10.5, [-2.5, 3.8, -244], [0, 0, -270]));
  const ct = ZONES.contact;
  k.push(kf(11, [0, 0.3, ct[2] + 15], [0, 0.3, ct[2] - 12]));
  return k;
}

export function buildPath(portrait) {
  const k = keyframes();
  const pos = k.map((f) => {
    const v = new Vector3(...f.pos);
    if (portrait) {
      v.x += f.objX;
      if (f.objX) v.z += 4.5;
      if (f.at === 0) v.z += 7;
    }
    return v;
  });
  const look = k.map((f) => {
    const v = new Vector3(...f.look);
    if (portrait) v.x += f.objX;
    return v;
  });
  const ats = k.map((f) => f.at);
  const posCurve = new CatmullRomCurve3(pos, false, 'centripetal');
  const lookCurve = new CatmullRomCurve3(look, false, 'centripetal');
  const n = k.length;
  function stationToU(s) {
    if (s <= ats[0]) return 0;
    for (let i = 0; i < n - 1; i++) {
      if (s <= ats[i + 1]) {
        const f = (s - ats[i]) / (ats[i + 1] - ats[i]);
        return (i + f) / (n - 1);
      }
    }
    return 1;
  }
  return { posCurve, lookCurve, stationToU };
}
