'use client';
import { useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

export const COLORS = {
  // light theme — "black" is the paper background, "white" is the ink
  black: '#F3F1EE',
  charcoal: '#1B1B1F',
  blue: '#9E0016', // deep red
  cyan: '#E10600', // signal red
  white: '#1B1B1F',
  gold: '#E8590C', // red-orange (Pandit AI)
};

export const FONT_URL = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/fonts/helvetiker_bold.typeface.json`;
export function useDisplayFont() {
  return useLoader(FontLoader, FONT_URL);
}

export function makeText(font, text, { size = 1, depth = 0.3, bevel = true, curveSegments = 6 } = {}) {
  const g = new TextGeometry(text, {
    font,
    size,
    depth,
    curveSegments,
    bevelEnabled: bevel,
    bevelThickness: size * 0.03,
    bevelSize: size * 0.018,
    bevelSegments: 3,
  });
  g.computeBoundingBox();
  return g;
}

export function useText(font, text, opts) {
  return useMemo(() => {
    const g = makeText(font, text, opts);
    const b = g.boundingBox;
    g.translate(-(b.max.x + b.min.x) / 2, -(b.max.y + b.min.y) / 2, -(b.max.z + b.min.z) / 2);
    return g;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [font, text]);
}

export function damp(current, target, lambda, dt) {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * dt));
}

// Seeded random so geometry is stable between renders/reloads
export function rng(seed = 1) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

export function canvasTexture(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  draw(ctx, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return { texture: t, canvas: c, ctx };
}
