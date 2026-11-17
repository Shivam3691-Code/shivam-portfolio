'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ZONES, STATIONS } from '@/lib/world';
import { state, near } from '@/lib/store';
import { COLORS, useDisplayFont, useText, damp, rng } from '../shared';

const glow = (hex, k) => {
  const c = new THREE.Color(hex);
  return [c.r * k, c.g * k, c.b * k];
};

/* Energy conduit: a tube whose light flows along the timeline */
const tubeVert = /* glsl */ `
  varying vec2 vUv;
  varying float vDepth;
  void main() {
    vUv = uv;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;
const tubeFrag = /* glsl */ `
  uniform float uTime;
  uniform float uProgress;
  uniform vec3 uA;
  uniform vec3 uB;
  varying vec2 vUv;
  varying float vDepth;
  void main() {
    float t = fract(vUv.x * 5.0 - uTime * 0.12);
    float pulse = pow(1.0 - t, 14.0);
    float lit = smoothstep(uProgress + 0.02, uProgress - 0.02, vUv.x);
    vec3 col = mix(uA, uB, vUv.x);
    float intensity = 0.18 + lit * 0.9 + pulse * 2.6;
    float fade = smoothstep(55.0, 6.0, vDepth);
    gl_FragColor = vec4(col * (0.7 + pulse * 1.6), min(1.0, (0.2 + lit * 0.75 + pulse) * fade));
  }
`;

function Conduit() {
  const { geometry, material } = useMemo(() => {
    const nodes = ZONES.journey;
    const pts = [
      new THREE.Vector3(0, -1.5, -14),
      new THREE.Vector3(1.5, -0.4, -24),
      ...nodes.map((n) => new THREE.Vector3(n[0], n[1] - 1.3, n[2])),
      new THREE.Vector3(0, -1, -86),
    ];
    const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
    const g = new THREE.TubeGeometry(curve, 400, 0.05, 8, false);
    const m = new THREE.ShaderMaterial({
      vertexShader: tubeVert,
      fragmentShader: tubeFrag,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      uniforms: {
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uA: { value: new THREE.Color(COLORS.blue) },
        uB: { value: new THREE.Color(COLORS.cyan) },
      },
    });
    return { geometry: g, material: m };
  }, []);
  useFrame((_, dt) => {
    material.uniforms.uTime.value += dt * (state.reducedMotion ? 0.2 : 1);
    // light up the conduit as the visitor progresses through the chapters
    const p = THREE.MathUtils.clamp((state.stationSmooth - 0.5) / 4.2, 0, 1);
    material.uniforms.uProgress.value = damp(material.uniforms.uProgress.value, 0.12 + p * 0.85, 3, dt);
  });
  return <mesh geometry={geometry} material={material} frustumCulled={false} />;
}

/* Chapter glyphs — each milestone has its own form */
function FoundationGlyph({ active }) {
  const g = useRef();
  useFrame((s, dt) => {
    const t = s.clock.elapsedTime;
    g.current.children.forEach((c, i) => {
      c.position.y = damp(c.position.y, (i - 1) * (0.45 + active.current * 0.35), 4, dt);
      c.rotation.y = t * 0.2 * (i % 2 ? -1 : 1) + i * 0.4;
    });
  });
  return (
    <group ref={g}>
      {[0, 1, 2].map((i) => (
        <group key={i}>
          <mesh castShadow>
            <boxGeometry args={[1.9 - i * 0.35, 0.12, 1.9 - i * 0.35]} />
            <meshStandardMaterial color="#12131b" metalness={0.95} roughness={0.25} />
          </mesh>
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(1.9 - i * 0.35, 0.12, 1.9 - i * 0.35)]} />
            <lineBasicMaterial color={glow(COLORS.cyan, 2)} toneMapped={false} />
          </lineSegments>
        </group>
      ))}
    </group>
  );
}

function SecurityGlyph({ active }) {
  const g = useRef();
  const scan = useRef();
  useFrame((s, dt) => {
    const t = s.clock.elapsedTime;
    g.current.rotation.y += dt * 0.3;
    scan.current.position.y = Math.sin(t * 1.4) * 1.1;
    scan.current.scale.setScalar(Math.sqrt(Math.max(0.01, 1 - Math.pow(scan.current.position.y / 1.25, 2))) * (1 + active.current * 0.1));
  });
  return (
    <group>
      <group ref={g}>
        <mesh castShadow>
          <octahedronGeometry args={[0.85, 0]} />
          <meshStandardMaterial color="#111219" metalness={1} roughness={0.2} flatShading />
        </mesh>
        <lineSegments>
          <edgesGeometry args={[new THREE.OctahedronGeometry(1.25, 0)]} />
          <lineBasicMaterial color={glow(COLORS.cyan, 2.5)} toneMapped={false} />
        </lineSegments>
      </group>
      <mesh ref={scan} rotation-x={-Math.PI / 2}>
        <ringGeometry args={[1.15, 1.2, 64]} />
        <meshBasicMaterial color={glow(COLORS.cyan, 4)} toneMapped={false} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function NeuralGlyph({ active }) {
  const g = useRef();
  const { pts, lines } = useMemo(() => {
    const r = rng(11);
    const p = [];
    for (let i = 0; i < 46; i++) {
      const v = new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5).normalize().multiplyScalar(0.6 + r() * 0.7);
      p.push(v);
    }
    const l = [];
    p.forEach((a, i) =>
      p.forEach((b, j) => {
        if (j > i && a.distanceTo(b) < 0.62) l.push(a.x, a.y, a.z, b.x, b.y, b.z);
      })
    );
    const pg = new THREE.BufferGeometry().setFromPoints(p);
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.Float32BufferAttribute(l, 3));
    return { pts: pg, lines: lg };
  }, []);
  useFrame((s, dt) => {
    g.current.rotation.y += dt * 0.25;
    g.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.3) * 0.3;
    const sc = 1 + active.current * 0.25 + Math.sin(s.clock.elapsedTime * 2) * 0.03;
    g.current.scale.setScalar(sc);
  });
  return (
    <group ref={g}>
      <points geometry={pts}>
        <pointsMaterial color={glow(COLORS.white, 3)} size={0.07} toneMapped={false} />
      </points>
      <lineSegments geometry={lines}>
        <lineBasicMaterial color={COLORS.cyan} transparent opacity={0.6} />
      </lineSegments>
      <mesh>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshStandardMaterial color="#d9d4ce" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
}

function BuildGlyph({ active }) {
  const ref = useRef();
  const N = 27;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const seeds = useMemo(() => {
    const r = rng(5);
    return Array.from({ length: N }, () => new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5).multiplyScalar(5));
  }, []);
  useFrame((s, dt) => {
    const t = s.clock.elapsedTime;
    const a = active.current; // assemble as the visitor arrives
    let i = 0;
    for (let x = -1; x <= 1; x++)
      for (let y = -1; y <= 1; y++)
        for (let z = -1; z <= 1; z++) {
          const home = new THREE.Vector3(x * 0.52, y * 0.52, z * 0.52);
          dummy.position.lerpVectors(seeds[i], home, a);
          dummy.rotation.set(t * 0.3 * (1 - a) + i, t * 0.2 * (1 - a), 0);
          dummy.scale.setScalar(0.46);
          dummy.updateMatrix();
          ref.current.setMatrixAt(i++, dummy.matrix);
        }
    ref.current.instanceMatrix.needsUpdate = true;
    ref.current.parent.rotation.y += dt * 0.2;
  });
  return (
    <group>
      <instancedMesh ref={ref} args={[null, null, N]} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="#1a1c2a" metalness={1} roughness={0.22} emissive={COLORS.blue} emissiveIntensity={0.08} />
      </instancedMesh>
    </group>
  );
}

const GLYPHS = [FoundationGlyph, SecurityGlyph, NeuralGlyph, BuildGlyph];

function Milestone({ index, pos, font }) {
  const active = useRef(0);
  const Glyph = GLYPHS[index];
  const numeral = useText(font, `0${index + 1}`, { size: 2.6, depth: 0.25 });
  const halo = useRef();
  const num = useRef();
  useFrame((s, dt) => {
    const a = near(STATIONS.journey[index], 1.2);
    active.current = damp(active.current, a, 3, dt);
    halo.current.scale.setScalar(1 + active.current * 0.4);
    halo.current.material.opacity = 0.15 + active.current * 0.6;
    num.current.position.y = damp(num.current.position.y, 0.6 + active.current * 0.4, 3, dt);
  });
  const side = Math.sign(pos[0]);
  return (
    <group position={pos}>
      <Glyph active={active} />
      <mesh ref={halo} rotation-x={-Math.PI / 2} position={[0, -1.3, 0]}>
        <ringGeometry args={[1.6, 1.64, 96]} />
        <meshBasicMaterial color={glow(COLORS.blue, 3)} toneMapped={false} transparent side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={num} geometry={numeral} position={[side * 2.4, 0.6, -2.8]} rotation-y={-side * 0.35}>
        <meshPhysicalMaterial color="#14151d" metalness={1} roughness={0.3} clearcoat={1} envMapIntensity={1.2} />
      </mesh>
      <pointLight color={index % 2 ? COLORS.cyan : COLORS.blue} intensity={5} distance={7} position={[0, 1.5, 1.5]} />
    </group>
  );
}

export default function JourneyZone() {
  const font = useDisplayFont();
  const group = useRef();
  useFrame(() => {
    const s = state.stationSmooth;
    group.current.visible = s > 0.2 && s < 5.8;
  });
  return (
    <group ref={group}>
      <Conduit />
      {ZONES.journey.map((p, i) => (
        <Milestone key={i} index={i} pos={p} font={font} />
      ))}
    </group>
  );
}
