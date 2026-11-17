'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { ZONES, STATIONS } from '@/lib/world';
import { SKILLS } from '@/lib/data';
import { state, setState, useStore } from '@/lib/store';
import { COLORS, damp, rng } from '../shared';

const HUB_COLORS = ['#E10600', '#9E0016', '#FF4D4D', '#E10600', '#9E0016', '#FF7A5C'];

// Hubs arranged on a sphere (deterministic)
function hubPositions() {
  const R = 3.1;
  const out = [];
  const n = SKILLS.length;
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const th = i * 2.399963;
    out.push(new THREE.Vector3(Math.cos(th) * r * R, y * R * 0.75, Math.sin(th) * r * R));
  }
  return out;
}

function Hub({ index, position, active, hover }) {
  const ref = useRef();
  const sats = useRef();
  const color = HUB_COLORS[index];
  const items = SKILLS[index].items;
  const satPos = useMemo(() => {
    const r = rng(index + 3);
    return items.map((_, i) => {
      const a = (i / items.length) * Math.PI * 2;
      return new THREE.Vector3(Math.cos(a) * 0.95, (r() - 0.5) * 0.7, Math.sin(a) * 0.95);
    });
  }, [index, items]);
  const satLines = useMemo(() => {
    const arr = [];
    satPos.forEach((p) => arr.push(0, 0, 0, p.x, p.y, p.z));
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3));
    return g;
  }, [satPos]);

  useFrame((s, dt) => {
    const on = active === index ? 1 : hover === index ? 0.6 : 0;
    const sc = damp(ref.current.scale.x, 1 + on * 0.55, 5, dt);
    ref.current.scale.setScalar(sc);
    ref.current.rotation.y += dt * (0.4 + on);
    ref.current.rotation.x += dt * 0.2;
    sats.current.rotation.y -= dt * (0.25 + on * 0.6);
    const sScale = damp(sats.current.scale.x, 0.6 + on * 0.7, 4, dt);
    sats.current.scale.setScalar(sScale);
    ref.current.material.emissiveIntensity = damp(ref.current.material.emissiveIntensity, 0.25 + on * 2.2, 5, dt);
  });

  return (
    <group position={position}>
      <mesh
        ref={ref}
        onPointerOver={(e) => {
          e.stopPropagation();
          setState({ hoverSkill: index, cursorLabel: 'SELECT' });
        }}
        onPointerOut={() => setState({ hoverSkill: -1, cursorLabel: '' })}
        onClick={(e) => {
          e.stopPropagation();
          setState({ activeSkill: index });
        }}
      >
        <icosahedronGeometry args={[0.38, 0]} />
        <meshStandardMaterial color="#141622" metalness={0.9} roughness={0.25} emissive={color} emissiveIntensity={0.3} flatShading />
      </mesh>
      <mesh scale={0.62}>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.18} />
      </mesh>
      <group ref={sats}>
        {satPos.map((p, i) => (
          <mesh key={i} position={p}>
            <sphereGeometry args={[0.06, 12, 12]} />
            <meshBasicMaterial color={[2.6, 0.15, 0.1]} toneMapped={false} />
          </mesh>
        ))}
        <lineSegments geometry={satLines}>
          <lineBasicMaterial color={color} transparent opacity={0.45} />
        </lineSegments>
      </group>
    </group>
  );
}

function Packets({ hubs, edges }) {
  const ref = useRef();
  const N = 70;
  const data = useMemo(() => {
    const r = rng(77);
    return Array.from({ length: N }, () => ({ e: Math.floor(r() * edges.length), s: 0.08 + r() * 0.25, p: r() }));
  }, [edges.length]);
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
    return g;
  }, []);
  useFrame((s) => {
    const t = s.clock.elapsedTime * (state.reducedMotion ? 0.1 : 1);
    const arr = geo.attributes.position.array;
    data.forEach((d, i) => {
      const [a, b] = edges[d.e];
      const f = (d.p + t * d.s) % 1;
      const A = hubs[a];
      const B = hubs[b];
      arr[i * 3] = A.x + (B.x - A.x) * f;
      arr[i * 3 + 1] = A.y + (B.y - A.y) * f;
      arr[i * 3 + 2] = A.z + (B.z - A.z) * f;
    });
    geo.attributes.position.needsUpdate = true;
  });
  return (
    <points ref={ref} geometry={geo} frustumCulled={false}>
      <pointsMaterial color={[3, 0.2, 0.12]} size={0.08} toneMapped={false} transparent depthWrite={false} />
    </points>
  );
}

export default function SkillsZone() {
  const group = useRef();
  const spin = useRef();
  const active = useStore((s) => s.activeSkill);
  const hover = useStore((s) => s.hoverSkill);
  const hubs = useMemo(hubPositions, []);
  const edges = useMemo(() => {
    const e = [];
    for (let i = 0; i < hubs.length; i++) for (let j = i + 1; j < hubs.length; j++) e.push([i, j]);
    return e;
  }, [hubs]);

  useFrame((s, dt) => {
    const st = state.stationSmooth;
    group.current.visible = Math.abs(st - STATIONS.skills) < 2.2;
    const k = state.reducedMotion ? 0.1 : 1;
    const slow = state.hoverSkill >= 0 ? 0.2 : 1;
    spin.current.rotation.y += dt * 0.08 * k * slow;
    spin.current.rotation.x = damp(spin.current.rotation.x, -state.mouse.y * 0.3, 2, dt);
    spin.current.rotation.z = damp(spin.current.rotation.z, state.mouse.x * 0.15, 2, dt);
  });

  return (
    <group ref={group} position={ZONES.skills}>
      <group ref={spin}>
        {edges.map(([a, b], i) => {
          const on = a === active || b === active;
          return (
            <Line
              key={i}
              points={[hubs[a], hubs[b]]}
              color={on ? COLORS.cyan : COLORS.blue}
              lineWidth={on ? 1.6 : 0.8}
              transparent
              opacity={on ? 0.9 : 0.22}
            />
          );
        })}
        {hubs.map((p, i) => (
          <Hub key={i} index={i} position={p} active={active} hover={hover} />
        ))}
        <Packets hubs={hubs} edges={edges} />
        {/* central nucleus */}
        <mesh>
          <sphereGeometry args={[0.55, 64, 64]} />
          <meshStandardMaterial color="#d9d4ce" metalness={1} roughness={0.08} envMapIntensity={2} />
        </mesh>
        <mesh>
          <sphereGeometry args={[4.2, 48, 48]} />
          <meshBasicMaterial color={COLORS.blue} wireframe transparent opacity={0.07} />
        </mesh>
        <pointLight color={COLORS.cyan} intensity={8} distance={10} />
      </group>
    </group>
  );
}
