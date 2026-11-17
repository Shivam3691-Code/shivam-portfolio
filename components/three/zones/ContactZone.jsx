'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ZONES, STATIONS } from '@/lib/world';
import { state } from '@/lib/store';
import { COLORS, damp } from '../shared';

const horizonFrag = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vec2 p = vUv - 0.5;
    float d = length(p);
    float core = smoothstep(0.5, 0.0, d);
    float rays = 0.5 + 0.5 * sin(atan(p.y, p.x) * 18.0 + uTime * 0.4);
    vec3 a = vec3(0.62, 0.0, 0.08);
    vec3 b = vec3(0.95, 0.05, 0.0);
    vec3 col = mix(a, b, smoothstep(0.35, 0.0, d) + rays * 0.15);
    float alpha = pow(core, 1.6) * 0.9;
    col = mix(col, vec3(1.0, 0.85, 0.8), pow(smoothstep(0.1, 0.0, d), 2.0));
    gl_FragColor = vec4(col, alpha);
  }
`;
const horizonVert = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;

export default function ContactZone() {
  const group = useRef();
  const tunnel = useRef();
  const rings = 18;
  const horizon = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: horizonVert,
        fragmentShader: horizonFrag,
        transparent: true,
        depthWrite: false,
        blending: THREE.NormalBlending,
        uniforms: { uTime: { value: 0 } },
      }),
    []
  );

  useFrame((s, rawDt) => {
    const dt = Math.min(rawDt, 0.05);
    const t = s.clock.elapsedTime;
    const k = state.reducedMotion ? 0.1 : 1;
    group.current.visible = state.stationSmooth > STATIONS.contact - 2.2;
    horizon.uniforms.uTime.value = t * k;
    tunnel.current.children.forEach((r, i) => {
      // the tunnel bends toward the pointer
      const f = i / rings;
      r.position.x = damp(r.position.x, state.mouse.x * f * f * 4, 2, dt);
      r.position.y = damp(r.position.y, 0.3 + state.mouse.y * f * f * 2.5, 2, dt);
      r.rotation.z += dt * (i % 2 ? 0.05 : -0.04) * k;
      const pulse = 0.5 + 0.5 * Math.sin(t * 1.6 * k - i * 0.5);
      r.children[0].material.color.setRGB(0.6 + pulse * 2.4, 0.02, 0.03);
    });
  });

  const z0 = ZONES.contact[2];
  return (
    <group ref={group}>
      <group ref={tunnel}>
        {Array.from({ length: rings }).map((_, i) => (
          <group key={i} position={[0, 0.3, z0 + 6 - i * 3.4]}>
            <mesh>
              <torusGeometry args={[3.8 + Math.sin(i) * 0.15, 0.018, 8, i % 3 === 0 ? 6 : 128]} />
              <meshBasicMaterial toneMapped={false} />
            </mesh>
            {i % 3 === 0 && (
              <mesh rotation-z={Math.PI / 6}>
                <torusGeometry args={[4.4, 0.06, 8, 6]} />
                <meshStandardMaterial color="#1d1d22" metalness={0.6} roughness={0.3} />
              </mesh>
            )}
          </group>
        ))}
      </group>
      <mesh position={[0, 0.3, z0 - 62]} material={horizon}>
        <planeGeometry args={[60, 60]} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[0, -3.2, z0 - 20]}>
        <planeGeometry args={[30, 80]} />
        <meshStandardMaterial color="#e6e1da" metalness={0.2} roughness={0.6} />
      </mesh>
      <pointLight position={[0, 1, z0 - 8]} color={COLORS.cyan} intensity={20} distance={20} />
    </group>
  );
}
