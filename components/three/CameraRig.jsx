'use client';
import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { buildPath } from '@/lib/world';
import { state } from '@/lib/store';
import { damp } from './shared';

export const lookTarget = new THREE.Vector3();

export default function CameraRig() {
  const { camera, size } = useThree();
  const portrait = size.width / size.height < 0.9;
  const path = useMemo(() => buildPath(portrait), [portrait]);
  const p = useRef(new THREE.Vector3()).current;
  const l = useRef(new THREE.Vector3()).current;
  const look = useRef(new THREE.Vector3(0, 0.5, 0)).current;
  const m = useRef({ x: 0, y: 0 }).current;

  useFrame((_, rawDt) => {
    const dt = Math.min(rawDt, 0.05);
    const rm = state.reducedMotion;
    state.stationSmooth = damp(state.stationSmooth, state.station, rm ? 12 : 3.2, dt);
    const u = path.stationToU(state.stationSmooth);
    path.posCurve.getPoint(u, p);
    path.lookCurve.getPoint(u, l);

    // mouse parallax (damped)
    const amp = rm ? 0.2 : 1;
    m.x = damp(m.x, state.mouse.x, 2.5, dt);
    m.y = damp(m.y, state.mouse.y, 2.5, dt);
    p.x += m.x * 0.7 * amp;
    p.y += m.y * 0.4 * amp;

    // cinematic intro: pull back & rise
    const intro = 1 - state.intro;
    const e = intro * intro;
    p.z += e * 14;
    p.y += e * 3.5;

    camera.position.lerp(p, 1 - Math.exp(-(rm ? 20 : 6) * dt));
    look.lerp(l, 1 - Math.exp(-(rm ? 20 : 6) * dt));
    camera.lookAt(look);
    // subtle roll from horizontal mouse
    camera.rotation.z += -m.x * 0.015 * amp;
    lookTarget.copy(look);
    state.cameraZ = camera.position.z;
  });
  return null;
}
