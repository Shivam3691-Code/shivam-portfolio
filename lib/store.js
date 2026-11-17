'use client';
import { useSyncExternalStore } from 'react';

// Mutable, frame-friendly state. Continuous values (scroll, mouse, station)
// are mutated directly and read inside useFrame / rAF loops. Discrete values
// that React UI depends on go through setState() so subscribers re-render.
export const state = {
  scrollY: 0,
  station: 0, // target station, derived from scroll position
  stationSmooth: 0, // damped station used by the camera
  velocity: 0,
  mouse: { x: 0, y: 0 }, // normalised -1..1
  intro: 0, // 0 → 1 cinematic entrance
  cameraZ: 0,

  // discrete (subscribe-able)
  ready: false,
  sceneReady: false,
  reducedMotion: false,
  tier: 'high',
  section: 'hero',
  activeSkill: 0,
  hoverSkill: -1,
  cursorLabel: '',
  menuOpen: false,
};

export const runtime = { lenis: null };

const listeners = new Set();
export function setState(patch) {
  let changed = false;
  for (const k in patch) {
    if (state[k] !== patch[k]) {
      state[k] = patch[k];
      changed = true;
    }
  }
  if (changed) listeners.forEach((l) => l());
}
function subscribe(l) {
  listeners.add(l);
  return () => listeners.delete(l);
}
export function useStore(selector) {
  return useSyncExternalStore(subscribe, () => selector(state), () => selector(state));
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  setState({ menuOpen: false });
  if (runtime.lenis) runtime.lenis.scrollTo(el, { duration: state.reducedMotion ? 0 : 2.2 });
  else el.scrollIntoView({ behavior: state.reducedMotion ? 'auto' : 'smooth' });
}

// Proximity of the camera to a station: 1 at the station, 0 one station away.
export function near(station, range = 1) {
  return Math.max(0, 1 - Math.abs(state.stationSmooth - station) / range);
}
