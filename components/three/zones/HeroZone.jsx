'use client';
import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, MeshReflectorMaterial, ContactShadows, SpotLight, Float } from '@react-three/drei';
import * as THREE from 'three';
import { state, setState } from '@/lib/store';
import { COLORS, useDisplayFont, makeText, damp, rng } from '../shared';

const glow = (hex, k) => {
  const c = new THREE.Color(hex);
  return [c.r * k, c.g * k, c.b * k];
};

/* ───────────────────────── The Core ───────────────────────── */
function Core() {
  const root = useRef();
  const blob = useRef();
  const mat = useRef();
  const shell = useRef();
  const r1 = useRef();
  const r2 = useRef();
  const r3 = useRef();
  const last = useRef({ x: 0, y: 0, energy: 0 });

  const shellGeo = useMemo(() => new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.85, 1)), []);
  const dotsGeo = useMemo(() => {
    const ico = new THREE.IcosahedronGeometry(1.85, 1);
    return ico;
  }, []);

  useFrame((s, rawDt) => {
    const dt = Math.min(rawDt, 0.05);
    const k = state.reducedMotion ? 0.15 : 1;
    const t = s.clock.elapsedTime;
    const L = last.current;
    const mv = Math.hypot(state.mouse.x - L.x, state.mouse.y - L.y) / Math.max(dt, 0.001);
    L.x = state.mouse.x;
    L.y = state.mouse.y;
    L.energy = damp(L.energy, Math.min(mv * 0.08, 1), 3, dt);

    const g = root.current;
    const intro = THREE.MathUtils.smoothstep(state.intro, 0.15, 0.9);
    g.scale.setScalar(damp(g.scale.x, intro, 4, dt));
    g.position.x = damp(g.position.x, state.mouse.x * 0.35, 2, dt);
    g.position.y = damp(g.position.y, 0.75 + state.mouse.y * 0.2 + Math.sin(t * 0.8) * 0.08 * k, 2, dt);
    g.rotation.x = damp(g.rotation.x, -state.mouse.y * 0.35, 2, dt);
    g.rotation.y += dt * 0.12 * k + state.mouse.x * dt * 0.2;

    if (mat.current) {
      mat.current.distort = damp(mat.current.distort, 0.28 + L.energy * 0.25, 3, dt);
      mat.current.speed = 1.2 + L.energy * 3;
    }
    shell.current.rotation.y -= dt * 0.18 * k;
    shell.current.rotation.z += dt * 0.05 * k;
    r1.current.rotation.x += dt * 0.35 * k;
    r1.current.rotation.y += dt * 0.12 * k;
    r2.current.rotation.y -= dt * 0.28 * k;
    r2.current.rotation.z += dt * 0.1 * k;
    r3.current.rotation.z += dt * 0.22 * k;
    r3.current.rotation.x -= dt * 0.08 * k;
  });

  return (
    <group ref={root} position={[0, 0.55, 0]} scale={0.001}>
      <mesh ref={blob} castShadow>
        <sphereGeometry args={[1.12, 160, 160]} />
        <MeshDistortMaterial
          ref={mat}
          color="#e8e4df"
          metalness={1}
          roughness={0.06}
          envMapIntensity={1.6}
          distort={0.3}
          speed={1.4}
        />
      </mesh>
      <group ref={shell}>
        <lineSegments geometry={shellGeo}>
          <lineBasicMaterial color={COLORS.cyan} transparent opacity={0.28} />
        </lineSegments>
        <points geometry={dotsGeo}>
          <pointsMaterial color={glow(COLORS.cyan, 3)} size={0.045} toneMapped={false} />
        </points>
      </group>
      <group ref={r1}>
        <mesh>
          <torusGeometry args={[2.35, 0.009, 8, 220]} />
          <meshBasicMaterial color={glow(COLORS.blue, 4)} toneMapped={false} />
        </mesh>
        <mesh position={[2.35, 0, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color={glow(COLORS.white, 3)} toneMapped={false} />
        </mesh>
      </group>
      <group ref={r2} rotation={[1.1, 0.4, 0]}>
        <mesh>
          <torusGeometry args={[2.7, 0.006, 8, 240]} />
          <meshBasicMaterial color={glow(COLORS.cyan, 3)} toneMapped={false} />
        </mesh>
        <mesh position={[0, 2.7, 0]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshBasicMaterial color={glow(COLORS.cyan, 4)} toneMapped={false} />
        </mesh>
      </group>
      <group ref={r3} rotation={[0.3, 1.2, 0.6]}>
        <mesh>
          <torusGeometry args={[3.05, 0.004, 8, 260]} />
          <meshBasicMaterial color={COLORS.white} transparent opacity={0.35} toneMapped={false} />
        </mesh>
      </group>
      <pointLight color={COLORS.cyan} intensity={6} distance={9} decay={2} />
    </group>
  );
}

/* ─────────────────────── Interactive name ─────────────────────── */
const NAME = ['S', 'H', 'I', null, 'V', 'A', 'M']; // null = gap where the core sits

function HeroName({ portrait }) {
  const font = useDisplayFont();
  const group = useRef();
  const hovered = useRef(-1);
  const letterRefs = useRef([]);

  const letters = useMemo(() => {
    const size = 2.7;
    const spacing = 0.22;
    const gap = 3.3;
    const out = [];
    let x = 0;
    NAME.forEach((ch, i) => {
      if (ch === null) {
        x += gap;
        return;
      }
      const g = makeText(font, ch, { size, depth: 0.7, curveSegments: 8 });
      const b = g.boundingBox;
      const w = b.max.x - b.min.x;
      g.translate(-b.min.x - w / 2, -(b.max.y + b.min.y) / 2, -(b.max.z + b.min.z) / 2);
      out.push({ ch, g, x: x + w / 2, i: out.length });
      x += w + spacing;
    });
    const total = x - spacing;
    out.forEach((l) => (l.x -= total / 2));
    return out;
  }, [font]);

  useFrame((s, rawDt) => {
    const dt = Math.min(rawDt, 0.05);
    const t = s.clock.elapsedTime;
    const k = state.reducedMotion ? 0.15 : 1;
    const g = group.current;
    g.rotation.y = damp(g.rotation.y, state.mouse.x * 0.12, 2, dt);
    g.rotation.x = damp(g.rotation.x, -state.mouse.y * 0.06, 2, dt);
    letters.forEach((l, i) => {
      const m = letterRefs.current[i];
      if (!m) return;
      const p = THREE.MathUtils.clamp(state.intro * 1.8 - i * 0.1, 0, 1);
      const e = 1 - Math.pow(1 - p, 3);
      const hov = hovered.current === i ? 1 : 0;
      m.position.y = damp(m.position.y, (1 - e) * -3.5 + Math.sin(t * 0.9 + i * 0.7) * 0.06 * k + hov * 0.35, 6, dt);
      m.position.z = damp(m.position.z, hov * 1.1, 6, dt);
      m.rotation.x = damp(m.rotation.x, (1 - e) * 1.3 + hov * -0.25, 6, dt);
      m.rotation.y = damp(m.rotation.y, hov * Math.sin(t * 2) * 0.25, 6, dt);
      m.material.opacity = e;
    });
  });

  const scale = portrait ? 0.42 : 1;
  return (
    <group ref={group} position={[0, portrait ? 2.9 : 0.6, -5]} scale={scale}>
      {letters.map((l, i) => (
        <mesh
          key={i}
          ref={(el) => (letterRefs.current[i] = el)}
          geometry={l.g}
          position={[l.x, -3.5, 0]}
          castShadow
          onPointerOver={(e) => {
            e.stopPropagation();
            hovered.current = i;
            setState({ cursorLabel: l.ch });
          }}
          onPointerOut={() => {
            hovered.current = -1;
            setState({ cursorLabel: '' });
          }}
        >
          <meshPhysicalMaterial
            color="#1d1d22"
            metalness={0.85}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.08}
            envMapIntensity={2.6}
            emissive="#000000"
            emissiveIntensity={0.6}
            transparent
            opacity={0}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ───────────────────── Floating architecture ───────────────────── */
function Architecture() {
  const pillars = useRef();
  const strips = useRef();
  const slabs = useRef();
  const data = useMemo(() => {
    const r = rng(42);
    const list = [];
    for (const side of [-1, 1]) {
      for (let i = 0; i < 13; i++) {
        const h = 5 + r() * 13;
        const w = 0.45 + r() * 0.9;
        const d = 0.45 + r() * 0.9;
        const float = r() < 0.4 ? 0.6 + r() * 2.5 : 0;
        list.push({
          x: side * (7.2 + r() * 10 + i * 0.15),
          z: 6 - i * 2.6 - r() * 2,
          y: -2.4 + h / 2 + float,
          h,
          w,
          d,
          ry: (r() - 0.5) * 0.4,
          strip: r() < 0.5,
          phase: r() * 10,
          side,
        });
      }
    }
    const sl = [];
    for (let i = 0; i < 6; i++) {
      sl.push({
        x: (r() - 0.5) * 22,
        y: 7 + r() * 4,
        z: -2 - r() * 22,
        w: 4 + r() * 6,
        d: 1.5 + r() * 3,
        rx: (r() - 0.5) * 0.3,
        ry: r() * Math.PI,
        rz: (r() - 0.5) * 0.2,
        phase: r() * 10,
      });
    }
    return { list, sl };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const stripCount = data.list.filter((p) => p.strip).length;

  const writeMatrices = (t) => {
    let si = 0;
    data.list.forEach((p, i) => {
      const bob = Math.sin(t * 0.25 + p.phase) * 0.15;
      dummy.position.set(p.x, p.y + bob, p.z);
      dummy.rotation.set(0, p.ry, 0);
      dummy.scale.set(p.w, p.h, p.d);
      dummy.updateMatrix();
      pillars.current.setMatrixAt(i, dummy.matrix);
      if (p.strip) {
        const fx = -p.side; // strip faces the corridor
        dummy.position.set(p.x + fx * (p.w / 2 + 0.01) * Math.cos(p.ry), p.y + bob, p.z - fx * (p.w / 2) * Math.sin(p.ry));
        dummy.scale.set(0.035, p.h * 0.7, 0.035);
        dummy.updateMatrix();
        strips.current.setMatrixAt(si++, dummy.matrix);
      }
    });
    pillars.current.instanceMatrix.needsUpdate = true;
    strips.current.instanceMatrix.needsUpdate = true;
    data.sl.forEach((s, i) => {
      dummy.position.set(s.x, s.y + Math.sin(t * 0.2 + s.phase) * 0.3, s.z);
      dummy.rotation.set(s.rx, s.ry + t * 0.01, s.rz);
      dummy.scale.set(s.w, 0.18, s.d);
      dummy.updateMatrix();
      slabs.current.setMatrixAt(i, dummy.matrix);
    });
    slabs.current.instanceMatrix.needsUpdate = true;
  };

  useEffect(() => writeMatrices(0));
  useFrame((s) => {
    if (state.reducedMotion) return;
    writeMatrices(s.clock.elapsedTime);
  });

  return (
    <group>
      <instancedMesh ref={pillars} args={[null, null, data.list.length]} castShadow receiveShadow>
        <boxGeometry />
        <meshStandardMaterial color="#e7e3dd" metalness={0.15} roughness={0.6} envMapIntensity={0.6} />
      </instancedMesh>
      <instancedMesh ref={strips} args={[null, null, stripCount]}>
        <boxGeometry />
        <meshBasicMaterial color={glow(COLORS.cyan, 2.2)} toneMapped={false} />
      </instancedMesh>
      <instancedMesh ref={slabs} args={[null, null, data.sl.length]}>
        <boxGeometry />
        <meshStandardMaterial color="#dcd7d0" metalness={0.2} roughness={0.55} />
      </instancedMesh>
      {/* Monumental portal frame behind the name */}
      <group position={[0, 2.6, -17]}>
        {[
          [0, 5.6, 18.4, 0.35],
          [0, -5.6, 18.4, 0.35],
          [-9.2, 0, 0.35, 11.5],
          [9.2, 0, 0.35, 11.5],
        ].map(([x, y, w, h], i) => (
          <mesh key={i} position={[x, y, 0]}>
            <boxGeometry args={[w, h, 0.6]} />
            <meshStandardMaterial color="#1d1d22" metalness={0.6} roughness={0.35} />
          </mesh>
        ))}
        <mesh position={[0, -5.38, 0.32]}>
          <boxGeometry args={[17.6, 0.02, 0.02]} />
          <meshBasicMaterial color={glow(COLORS.blue, 4)} toneMapped={false} />
        </mesh>
      </group>
      {/* Giant metallic arc */}
      <mesh position={[0, -2.4, -24]} rotation={[0, 0, 0]}>
        <torusGeometry args={[12, 0.22, 24, 200, Math.PI]} />
        <meshStandardMaterial color="#cfc9c1" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
}

/* ───────────────────── Abstract metallic objects ───────────────────── */
function Satellites() {
  const chrome = { color: '#d9d4ce', metalness: 1, roughness: 0.12, envMapIntensity: 1.8 };
  return (
    <group>
      <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.2}>
        <mesh position={[-4.6, 2.3, -1.5]} castShadow>
          <torusGeometry args={[0.45, 0.14, 32, 64]} />
          <meshStandardMaterial {...chrome} />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={1.6} floatIntensity={1.4}>
        <mesh position={[4.9, -0.6, -0.5]} castShadow>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial {...chrome} flatShading />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={0.8} floatIntensity={1}>
        <mesh position={[3.8, 3.2, -3]} rotation={[0.5, 0.2, 0.9]} castShadow>
          <capsuleGeometry args={[0.16, 0.9, 8, 24]} />
          <meshStandardMaterial {...chrome} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={1} floatIntensity={0.8}>
        <mesh position={[-3.6, -1.1, 1]} castShadow>
          <icosahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial color="#E10600" metalness={0.3} roughness={0.35} flatShading />
        </mesh>
      </Float>
    </group>
  );
}

/* ───────────────────────── Volumetric light ───────────────────────── */
function Beam({ position, color, target = [0, 0, 0], opacity = 0.12 }) {
  const ref = useRef();
  useEffect(() => {
    if (!ref.current) return;
    ref.current.target.position.set(...target);
    ref.current.target.updateMatrixWorld();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SpotLight
      ref={ref}
      position={position}
      color={color}
      intensity={60}
      distance={22}
      angle={0.32}
      penumbra={0.9}
      attenuation={14}
      anglePower={4}
      opacity={opacity}
      castShadow
      shadow-mapSize={[1024, 1024]}
      shadow-bias={-0.0004}
    />
  );
}

/* ───────────────────────────── Zone ───────────────────────────── */
export default function HeroZone({ tier, portrait }) {
  const group = useRef();
  useFrame(() => {
    group.current.visible = state.stationSmooth < 1.7;
  });
  const high = tier === 'high';
  return (
    <group ref={group}>
      <Core />
      <HeroName portrait={portrait} />
      <Architecture />
      <Satellites />
      {high && <Beam position={[-5, 10, 1]} color={COLORS.blue} target={[0, -2, -1]} />}
      {high && <Beam position={[6, 11, -4]} color={COLORS.cyan} target={[1, -2, -4]} opacity={0.25} />}
      {!high && <spotLight position={[0, 10, 2]} angle={0.5} penumbra={1} intensity={40} color={COLORS.blue} />}
      <ContactShadows position={[0, -2.38, 0]} scale={14} blur={2.6} opacity={0.45} far={6} resolution={high ? 512 : 256} color="#000" />
      {/* key light raking across the name */}
      <directionalLight position={[4, 6, 8]} intensity={1.4} color="#ffffff" />
      <mesh rotation-x={-Math.PI / 2} position={[0, -2.4, 0]}>
        <planeGeometry args={[60, 44]} />
        {high ? (
          <MeshReflectorMaterial
            blur={[400, 120]}
            resolution={1024}
            mixBlur={1}
            mixStrength={6}
            roughness={0.9}
            depthScale={1.1}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#ebe7e2"
            metalness={0.6}
            mirror={0.6}
          />
        ) : (
          <meshStandardMaterial color="#ebe7e2" metalness={0.1} roughness={0.8} />
        )}
      </mesh>
    </group>
  );
}
