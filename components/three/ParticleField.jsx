'use client';
import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { state } from '@/lib/store';
import { rng, damp } from './shared';

const vert = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uSize;
  attribute float aScale;
  attribute float aSeed;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec3 p = position;
    float t = uTime * 0.25;
    p.x += sin(t + aSeed * 31.0) * 0.35;
    p.y += cos(t * 0.8 + aSeed * 17.0) * 0.45;
    p.z += sin(t * 0.6 + aSeed * 7.0) * 0.3;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * aScale * uPixelRatio * (1.0 / -mv.z);
    float twinkle = 0.55 + 0.45 * sin(uTime * (0.8 + aSeed * 2.0) + aSeed * 60.0);
    float depthFade = smoothstep(52.0, 10.0, -mv.z) * smoothstep(0.4, 2.5, -mv.z);
    vAlpha = twinkle * depthFade;
    vColor = aColor;
  }
`;
const frag = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    a = pow(a, 2.2);
    gl_FragColor = vec4(vColor, a * vAlpha * 0.75);
  }
`;

export default function ParticleField({ count = 5000 }) {
  const ref = useRef();
  const { gl } = useThree();
  const { geometry, material } = useMemo(() => {
    const r = rng(7);
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const scale = new Float32Array(count);
    const seed = new Float32Array(count);
    const palette = [new THREE.Color('#E10600'), new THREE.Color('#9E0016'), new THREE.Color('#1B1B1F'), new THREE.Color('#8a8a90')];
    for (let i = 0; i < count; i++) {
      // concentrate particles in a tube around the camera path
      const z = 24 - r() * 330;
      const ang = r() * Math.PI * 2;
      const rad = 2.5 + Math.pow(r(), 0.7) * 26;
      pos[i * 3] = Math.cos(ang) * rad;
      pos[i * 3 + 1] = Math.sin(ang) * rad * 0.55 + 1;
      pos[i * 3 + 2] = z;
      const c = palette[Math.floor(r() * (r() < 0.35 ? 4 : 2))];
      col.set([c.r, c.g, c.b], i * 3);
      scale[i] = 0.4 + Math.pow(r(), 3) * 2.4;
      seed[i] = r();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    g.setAttribute('aScale', new THREE.BufferAttribute(scale, 1));
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    const m = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(gl.getPixelRatio(), 2) },
        uSize: { value: 70 },
      },
    });
    return { geometry: g, material: m };
  }, [count, gl]);

  useFrame((s, dt) => {
    material.uniforms.uTime.value += dt * (state.reducedMotion ? 0.2 : 1);
    if (ref.current) {
      ref.current.rotation.z = damp(ref.current.rotation.z, state.mouse.x * 0.04, 1.5, dt);
    }
  });

  return <points ref={ref} geometry={geometry} material={material} frustumCulled={false} />;
}
