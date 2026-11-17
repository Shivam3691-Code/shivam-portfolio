'use client';
import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { ZONES, STATIONS } from '@/lib/world';
import { state, near } from '@/lib/store';
import { COLORS, useDisplayFont, useText, damp, rng, canvasTexture } from '../shared';

const glow = (hex, k) => {
  const c = new THREE.Color(hex);
  return [c.r * k, c.g * k, c.b * k];
};

function useProximity(station) {
  const v = useRef(0);
  useFrame((_, dt) => {
    v.current = damp(v.current, near(station, 1.1), 3, dt);
  });
  return v;
}

/* Shared plinth + backdrop that gives each artifact a "stage" */
function Stage({ color, children, radius = 3.2 }) {
  return (
    <group>
      {children}
      <mesh position={[0, -2.25, 0]} receiveShadow>
        <cylinderGeometry args={[radius, radius + 0.15, 0.22, 96]} />
        <meshStandardMaterial color="#e2ddd6" metalness={0.2} roughness={0.5} />
      </mesh>
      <mesh position={[0, -2.13, 0]} rotation-x={-Math.PI / 2}>
        <ringGeometry args={[radius - 0.06, radius - 0.02, 128]} />
        <meshBasicMaterial color={glow(color, 3)} toneMapped={false} />
      </mesh>
      <spotLight position={[0, 7, 3]} angle={0.55} penumbra={1} intensity={60} distance={16} color={color} castShadow />
      <pointLight position={[-3, 1, 3]} intensity={6} distance={9} color="#ffffff" />
    </group>
  );
}

/* ───────────────────── 01 · HACKRONIX handheld ───────────────────── */
function Hackronix({ station }) {
  const prox = useProximity(station);
  const root = useRef();
  const front = useRef();
  const pcb = useRef();
  const back = useRef();
  const frame = useRef(0);

  const screen = useMemo(
    () =>
      canvasTexture(320, 200, (ctx, w, h) => {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, w, h);
      }),
    []
  );
  const pcbTex = useMemo(
    () =>
      canvasTexture(512, 768, (ctx, w, h) => {
        ctx.fillStyle = '#06121c';
        ctx.fillRect(0, 0, w, h);
        const r = rng(3);
        ctx.lineWidth = 3;
        for (let i = 0; i < 70; i++) {
          ctx.strokeStyle = r() < 0.7 ? 'rgba(255,42,26,0.55)' : 'rgba(179,0,27,0.7)';
          let x = Math.round((r() * w) / 16) * 16;
          let y = Math.round((r() * h) / 16) * 16;
          ctx.beginPath();
          ctx.moveTo(x, y);
          for (let s = 0; s < 4; s++) {
            if (r() < 0.5) x += (r() - 0.5) * 220;
            else y += (r() - 0.5) * 220;
            ctx.lineTo(x, y);
          }
          ctx.stroke();
          ctx.fillStyle = '#ffb3a8';
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, Math.PI * 2);
          ctx.fill();
        }
        // central MCU footprint
        ctx.fillStyle = '#0a0a0f';
        ctx.fillRect(w / 2 - 70, h / 2 - 70, 140, 140);
        ctx.strokeStyle = '#FF2A1A';
        ctx.lineWidth = 2;
        ctx.strokeRect(w / 2 - 70, h / 2 - 70, 140, 140);
        ctx.fillStyle = '#FF2A1A';
        ctx.font = 'bold 22px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('ESP32-C3', w / 2, h / 2 + 8);
      }),
    []
  );

  const boot = useMemo(
    () => ['> HACKRONIX', '> init oled ..... ok', '> core: esp32-c3', '> mode: learn', '> explore. build.'],
    []
  );

  useFrame((s, rawDt) => {
    const dt = Math.min(rawDt, 0.05);
    const t = s.clock.elapsedTime;
    const p = prox.current;
    // exploded view as the visitor arrives
    front.current.position.z = damp(front.current.position.z, 0.12 + p * 0.55, 4, dt);
    pcb.current.position.z = damp(pcb.current.position.z, -0.05, 4, dt);
    back.current.position.z = damp(back.current.position.z, -0.22 - p * 0.6, 4, dt);
    root.current.rotation.y = damp(root.current.rotation.y, -0.55 + state.mouse.x * 0.4 + Math.sin(t * 0.4) * 0.08, 2, dt);
    root.current.rotation.x = damp(root.current.rotation.x, 0.08 - state.mouse.y * 0.2, 2, dt);

    // OLED animation ~20fps, only when near
    if (p > 0.05 && s.clock.elapsedTime - frame.current > 0.05) {
      frame.current = s.clock.elapsedTime;
      const { ctx, canvas } = screen;
      const w = canvas.width;
      const h = canvas.height;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, w, h);
      ctx.font = 'bold 18px monospace';
      ctx.fillStyle = '#FF2A1A';
      const shown = Math.floor((t * 1.6) % (boot.length + 3));
      boot.slice(0, Math.min(shown + 1, boot.length)).forEach((l, i) => ctx.fillText(l, 14, 30 + i * 28));
      // progress bar
      const prog = (t * 0.25) % 1;
      ctx.strokeStyle = '#FF2A1A';
      ctx.strokeRect(14, h - 30, w - 28, 12);
      ctx.fillRect(16, h - 28, (w - 32) * prog, 8);
      if (Math.floor(t * 2) % 2) ctx.fillRect(14 + ctx.measureText(boot[Math.min(shown, boot.length - 1)]).width + 4, 14 + Math.min(shown, boot.length - 1) * 28, 10, 20);
      // scanline
      ctx.fillStyle = 'rgba(255,42,26,0.08)';
      ctx.fillRect(0, (t * 120) % h, w, 3);
      screen.texture.needsUpdate = true;
    }
  });

  const body = { color: '#101118', metalness: 0.75, roughness: 0.32, envMapIntensity: 1.2 };
  return (
    <Stage color={COLORS.cyan}>
      <group ref={root} position={[0, 0.2, 0]}>
        {/* front shell */}
        <group ref={front}>
          <RoundedBox args={[2.3, 3.7, 0.28]} radius={0.14} smoothness={6} castShadow>
            <meshStandardMaterial {...body} />
          </RoundedBox>
          <mesh position={[0, 0.75, 0.145]}>
            <planeGeometry args={[1.8, 1.12]} />
            <meshBasicMaterial map={screen.texture} toneMapped={false} />
          </mesh>
          <mesh position={[0, 0.75, 0.141]}>
            <planeGeometry args={[1.95, 1.27]} />
            <meshStandardMaterial color="#050507" metalness={0.2} roughness={0.1} />
          </mesh>
          {/* d-pad */}
          <group position={[-0.5, -0.8, 0.17]}>
            <RoundedBox args={[0.6, 0.18, 0.08]} radius={0.03}>
              <meshStandardMaterial color="#1c1e2a" metalness={0.6} roughness={0.4} />
            </RoundedBox>
            <RoundedBox args={[0.18, 0.6, 0.08]} radius={0.03}>
              <meshStandardMaterial color="#1c1e2a" metalness={0.6} roughness={0.4} />
            </RoundedBox>
          </group>
          {[
            [0.42, -0.62],
            [0.72, -0.92],
          ].map(([x, y], i) => (
            <mesh key={i} position={[x, y, 0.17]} rotation-x={Math.PI / 2}>
              <cylinderGeometry args={[0.13, 0.13, 0.08, 32]} />
              <meshStandardMaterial color={i ? COLORS.blue : COLORS.cyan} emissive={i ? COLORS.blue : COLORS.cyan} emissiveIntensity={0.9} />
            </mesh>
          ))}
          <mesh position={[0, -1.5, 0.15]}>
            <boxGeometry args={[0.9, 0.02, 0.01]} />
            <meshBasicMaterial color={glow(COLORS.cyan, 2)} toneMapped={false} />
          </mesh>
        </group>
        {/* PCB layer */}
        <mesh ref={pcb}>
          <boxGeometry args={[2.05, 3.4, 0.04]} />
          <meshStandardMaterial map={pcbTex.texture} emissiveMap={pcbTex.texture} emissive="#ffffff" emissiveIntensity={0.9} metalness={0.3} roughness={0.6} />
        </mesh>
        {/* back shell + antenna */}
        <group ref={back}>
          <RoundedBox args={[2.3, 3.7, 0.2]} radius={0.12} smoothness={6} castShadow>
            <meshStandardMaterial {...body} color="#0b0c12" />
          </RoundedBox>
          <mesh position={[0.85, 2.15, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.7, 16]} />
            <meshStandardMaterial color="#c8cde0" metalness={1} roughness={0.2} />
          </mesh>
        </group>
      </group>
      <Sparkles count={40} scale={[6, 5, 4]} size={2} speed={0.3} color={COLORS.cyan} />
    </Stage>
  );
}

/* ───────────────────── 02 · PANDIT AI astrolabe ───────────────────── */
function PanditAI({ station }) {
  const prox = useProximity(station);
  const rings = useRef([]);
  const planets = useRef();
  const kundli = useRef();
  const gold = COLORS.gold;

  const ticks = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      arr.push({ a, major: true });
    }
    for (let i = 0; i < 108; i++) arr.push({ a: (i / 108) * Math.PI * 2, major: false });
    return arr;
  }, []);

  // North-Indian Kundli chart: square, diagonals and inner diamond
  const kundliGeo = useMemo(() => {
    const s = 2.1;
    const P = (x, y) => [x * s, y * s, 0];
    const seg = [
      [P(-1, -1), P(1, -1)],
      [P(1, -1), P(1, 1)],
      [P(1, 1), P(-1, 1)],
      [P(-1, 1), P(-1, -1)],
      [P(-1, -1), P(1, 1)],
      [P(-1, 1), P(1, -1)],
      [P(0, -1), P(1, 0)],
      [P(1, 0), P(0, 1)],
      [P(0, 1), P(-1, 0)],
      [P(-1, 0), P(0, -1)],
    ];
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(seg.flat(2), 3));
    return g;
  }, []);

  const grahas = useMemo(() => {
    const r = rng(9);
    return Array.from({ length: 9 }, (_, i) => ({
      radius: 0.75 + i * 0.2,
      speed: 0.15 + r() * 0.5,
      phase: r() * Math.PI * 2,
      tilt: (r() - 0.5) * 0.5,
      size: 0.05 + r() * 0.06,
    }));
  }, []);

  useFrame((s, rawDt) => {
    const dt = Math.min(rawDt, 0.05);
    const t = s.clock.elapsedTime;
    const k = state.reducedMotion ? 0.15 : 1;
    const p = prox.current;
    rings.current.forEach((r, i) => {
      if (!r) return;
      r.rotation.z += dt * (0.05 + i * 0.07) * (i % 2 ? -1 : 1) * k;
      r.rotation.x = damp(r.rotation.x, (1 - p) * (0.8 + i * 0.3) + Math.PI / 2 - (i === 0 ? 0 : 0.35 * i), 2, dt);
    });
    planets.current.children.forEach((pl, i) => {
      const g = grahas[i];
      const a = g.phase + t * g.speed * k;
      pl.position.set(Math.cos(a) * g.radius, Math.sin(a * 0.7) * g.tilt, Math.sin(a) * g.radius);
    });
    kundli.current.material.opacity = 0.15 + p * 0.65;
    kundli.current.rotation.z = damp(kundli.current.rotation.z, (1 - p) * 0.8, 2, dt);
  });

  return (
    <Stage color={gold}>
      <group position={[0, 0.3, 0]} rotation={[0.25, -0.35, 0]}>
        {/* outer zodiac ring with ticks */}
        <group ref={(el) => (rings.current[0] = el)}>
          <mesh>
            <torusGeometry args={[2.35, 0.05, 16, 200]} />
            <meshStandardMaterial color="#d8b27a" metalness={1} roughness={0.22} />
          </mesh>
          {ticks.map((tk, i) => (
            <mesh key={i} position={[Math.cos(tk.a) * 2.18, Math.sin(tk.a) * 2.18, 0]} rotation-z={tk.a}>
              <boxGeometry args={[tk.major ? 0.28 : 0.1, tk.major ? 0.03 : 0.012, 0.02]} />
              <meshBasicMaterial color={tk.major ? glow(gold, 2.5) : gold} toneMapped={!tk.major} />
            </mesh>
          ))}
        </group>
        <group ref={(el) => (rings.current[1] = el)}>
          <mesh>
            <torusGeometry args={[1.85, 0.025, 12, 180]} />
            <meshStandardMaterial color="#cfc9c1" metalness={1} roughness={0.15} />
          </mesh>
        </group>
        <group ref={(el) => (rings.current[2] = el)}>
          <mesh>
            <torusGeometry args={[1.4, 0.018, 12, 160]} />
            <meshBasicMaterial color={glow(gold, 2)} toneMapped={false} />
          </mesh>
        </group>
        {/* sun */}
        <mesh>
          <sphereGeometry args={[0.32, 48, 48]} />
          <meshBasicMaterial color={glow(gold, 3.2)} toneMapped={false} />
        </mesh>
        <pointLight color={gold} intensity={10} distance={6} />
        {/* nine grahas */}
        <group ref={planets}>
          {grahas.map((g, i) => (
            <mesh key={i}>
              <sphereGeometry args={[g.size, 20, 20]} />
              <meshStandardMaterial color={i % 3 === 0 ? '#ffd0b0' : '#1d1d22'} metalness={0.6} roughness={0.3} emissive={i % 3 === 0 ? gold : COLORS.blue} emissiveIntensity={0.6} />
            </mesh>
          ))}
        </group>
      </group>
      <lineSegments ref={kundli} geometry={kundliGeo} position={[0, 0.3, -1.8]} rotation={[0, -0.35, 0]}>
        <lineBasicMaterial color={glow(gold, 1.6)} transparent opacity={0.3} toneMapped={false} />
      </lineSegments>
      <Sparkles count={50} scale={[6, 5, 5]} size={2.2} speed={0.25} color={gold} />
    </Stage>
  );
}

/* ───────────────────── 03 · EPC data architecture ───────────────────── */
function EPC({ station }) {
  const prox = useProximity(station);
  const layers = useRef([]);
  const packets = useRef();
  const panels = useRef();
  const N = 90;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const pk = useMemo(() => {
    const r = rng(21);
    return Array.from({ length: N }, () => ({
      x: (r() - 0.5) * 2.6,
      z: (r() - 0.5) * 1.8,
      speed: 0.25 + r() * 0.6,
      phase: r(),
    }));
  }, []);

  const panelTex = useMemo(
    () =>
      canvasTexture(256, 160, (ctx, w, h) => {
        ctx.fillStyle = 'rgba(12,14,24,0.92)';
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = 'rgba(179,0,27,0.9)';
        ctx.lineWidth = 2;
        ctx.strokeRect(1, 1, w - 2, h - 2);
        ctx.fillStyle = '#B3001B';
        ctx.fillRect(12, 12, 60, 8);
        ctx.fillStyle = 'rgba(245,245,245,0.35)';
        for (let i = 0; i < 4; i++) ctx.fillRect(12, 34 + i * 16, 110 - i * 14, 6);
        const r = rng(4);
        ctx.fillStyle = '#FF2A1A';
        for (let i = 0; i < 7; i++) {
          const bh = 20 + r() * 60;
          ctx.fillRect(140 + i * 14, h - 16 - bh, 8, bh);
        }
      }),
    []
  );

  const labels = ['ROLES', 'FINANCE', 'ADMISSIONS', 'RECORDS'];

  useFrame((s, rawDt) => {
    const dt = Math.min(rawDt, 0.05);
    const t = s.clock.elapsedTime * (state.reducedMotion ? 0.15 : 1);
    const p = prox.current;
    layers.current.forEach((l, i) => {
      if (!l) return;
      const target = (i - 1.5) * (0.55 + p * 0.45);
      l.position.y = damp(l.position.y, target, 3, dt);
      l.rotation.y = damp(l.rotation.y, -0.5 + Math.sin(t * 0.3 + i) * 0.06 + state.mouse.x * 0.2, 2, dt);
    });
    const span = 2 * (0.55 + p * 0.45) * 1.5 + 0.6;
    pk.forEach((d, i) => {
      const f = (d.phase + t * d.speed * 0.25) % 1;
      dummy.position.set(d.x, -span / 2 + f * span, d.z);
      dummy.scale.setScalar(0.06 * Math.sin(f * Math.PI));
      dummy.updateMatrix();
      packets.current.setMatrixAt(i, dummy.matrix);
    });
    packets.current.instanceMatrix.needsUpdate = true;
    panels.current.rotation.y = -t * 0.15;
  });

  return (
    <Stage color={COLORS.blue}>
      <group position={[0, 0.3, 0]}>
        {labels.map((l, i) => (
          <group key={l} ref={(el) => (layers.current[i] = el)}>
            <mesh>
              <boxGeometry args={[3.2, 0.06, 2.2]} />
              <meshPhysicalMaterial
                color={i === 3 ? '#ffffff' : '#fff4f2'}
                metalness={0.2}
                roughness={0.08}
                transparent
                opacity={0.38}
                clearcoat={1}
                envMapIntensity={2}
              />
            </mesh>
            <lineSegments>
              <edgesGeometry args={[new THREE.BoxGeometry(3.2, 0.06, 2.2)]} />
              <lineBasicMaterial color={glow(i % 2 ? COLORS.cyan : COLORS.blue, 2.2)} toneMapped={false} />
            </lineSegments>
          </group>
        ))}
        <instancedMesh ref={packets} args={[null, null, N]}>
          <boxGeometry />
          <meshBasicMaterial color={glow(COLORS.cyan, 3)} toneMapped={false} />
        </instancedMesh>
        <mesh>
          <cylinderGeometry args={[0.04, 0.04, 4.2, 12]} />
          <meshBasicMaterial color={glow(COLORS.blue, 3)} toneMapped={false} />
        </mesh>
        <group ref={panels}>
          {[0, 1, 2].map((i) => {
            const a = (i / 3) * Math.PI * 2;
            return (
              <mesh key={i} position={[Math.cos(a) * 2.6, 0.4 + i * 0.35, Math.sin(a) * 2.6]} rotation-y={-a + Math.PI / 2}>
                <planeGeometry args={[1.2, 0.75]} />
                <meshBasicMaterial map={panelTex.texture} transparent side={THREE.DoubleSide} toneMapped={false} />
              </mesh>
            );
          })}
        </group>
      </group>
    </Stage>
  );
}

/* ───────────────────── 04 · TECH BUILD 2026 arena ───────────────────── */
function TechBuild({ station, font }) {
  const prox = useProximity(station);
  const pillars = useRef([]);
  const rings = useRef([]);
  const beam = useRef();
  const year = useText(font, '2026', { size: 0.62, depth: 0.12 });
  const domains = 5;

  useFrame((s, rawDt) => {
    const dt = Math.min(rawDt, 0.05);
    const t = s.clock.elapsedTime * (state.reducedMotion ? 0.15 : 1);
    const p = prox.current;
    pillars.current.forEach((pl, i) => {
      if (!pl) return;
      const h = 0.4 + p * (0.9 + i * 0.35);
      pl.scale.y = damp(pl.scale.y, h, 3, dt);
      pl.position.y = -2.1 + (pl.scale.y * 1) / 2;
    });
    rings.current.forEach((r, i) => {
      if (!r) return;
      const f = (t * 0.18 + i / 3) % 1;
      r.position.y = -1.8 + f * 4.4;
      r.scale.setScalar(1.6 - f * 0.9);
      r.material.opacity = Math.sin(f * Math.PI) * 0.9;
    });
    beam.current.material.opacity = 0.18 + p * 0.25 + Math.sin(t * 3) * 0.04;
  });

  return (
    <Stage color="#FF4D4D" radius={3.4}>
      <group position={[0, 0, 0]} rotation-y={0.3}>
        {/* hex platform */}
        <mesh position={[0, -2.0, 0]}>
          <cylinderGeometry args={[1.3, 1.4, 0.18, 6]} />
          <meshStandardMaterial color="#141622" metalness={1} roughness={0.25} />
        </mesh>
        {/* domain pillars */}
        {Array.from({ length: domains }).map((_, i) => {
          const a = (i / domains) * Math.PI * 2;
          return (
            <group key={i} position={[Math.cos(a) * 2.35, 0, Math.sin(a) * 2.35]}>
              <mesh ref={(el) => (pillars.current[i] = el)} position={[0, -1.9, 0]} castShadow>
                <cylinderGeometry args={[0.32, 0.32, 1, 6]} />
                <meshStandardMaterial color="#161826" metalness={1} roughness={0.2} emissive={i % 2 ? COLORS.cyan : COLORS.blue} emissiveIntensity={0.12} />
              </mesh>
            </group>
          );
        })}
        {/* level rings rising */}
        {[0, 1, 2].map((i) => (
          <mesh key={i} ref={(el) => (rings.current[i] = el)} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[1.0, 1.04, 6]} />
            <meshBasicMaterial color={glow(COLORS.cyan, 3)} toneMapped={false} transparent side={THREE.DoubleSide} />
          </mesh>
        ))}
        <mesh ref={beam} position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.35, 0.9, 4.6, 6, 1, true]} />
          <meshBasicMaterial color={glow(COLORS.blue, 2)} toneMapped={false} transparent opacity={0.25} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
        <mesh geometry={year} position={[0, 1.15, 0]} rotation-y={-0.3}>
          <meshPhysicalMaterial color="#1d1d22" metalness={1} roughness={0.15} clearcoat={1} envMapIntensity={2} />
        </mesh>
        <pointLight color={COLORS.blue} intensity={10} distance={7} position={[0, 0.5, 0]} />
      </group>
      <Sparkles count={60} scale={[7, 6, 6]} size={2} speed={0.5} color="#FF4D4D" />
    </Stage>
  );
}

export default function ProjectsZone() {
  const font = useDisplayFont();
  const refs = useRef([]);
  useFrame(() => {
    refs.current.forEach((g, i) => {
      if (g) g.visible = Math.abs(state.stationSmooth - STATIONS.projects[i]) < 2.2;
    });
  });
  const Comps = [Hackronix, PanditAI, EPC, TechBuild];
  return (
    <group>
      {ZONES.projects.map((p, i) => {
        const C = Comps[i];
        return (
          <group key={i} ref={(el) => (refs.current[i] = el)} position={p}>
            <C station={STATIONS.projects[i]} font={font} />
          </group>
        );
      })}
    </group>
  );
}
