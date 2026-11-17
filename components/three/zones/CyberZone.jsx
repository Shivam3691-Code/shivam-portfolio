'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { ZONES, STATIONS } from '@/lib/world';
import { state } from '@/lib/store';
import { COLORS, rng, damp } from '../shared';

const gridVert = /* glsl */ `
  varying vec3 vWorld;
  varying float vDepth;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    vec4 mv = viewMatrix * w;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;
const gridFrag = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColor;
  uniform vec3 uCenter;
  varying vec3 vWorld;
  varying float vDepth;
  float gridLine(vec2 p, float scale) {
    vec2 c = p * scale;
    vec2 g = abs(fract(c - 0.5) - 0.5) / fwidth(c);
    return 1.0 - min(min(g.x, g.y), 1.0);
  }
  void main() {
    float fine = gridLine(vWorld.xz, 1.0);
    float coarse = gridLine(vWorld.xz, 0.2);
    float d = length(vWorld.xz - uCenter.xz);
    float wave = fract(d * 0.09 - uTime * 0.22);
    float ring = smoothstep(0.0, 0.015, wave) * smoothstep(0.07, 0.015, wave);
    float fade = smoothstep(22.0, 3.0, d) * smoothstep(45.0, 8.0, vDepth);
    float a = (fine * 0.22 + coarse * 0.5 + ring * (0.25 + coarse + fine)) * fade;
    gl_FragColor = vec4(uColor * (1.0 + ring * 2.5), a);
  }
`;

function Grid() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: gridVert,
        fragmentShader: gridFrag,
        transparent: true,
        depthWrite: false,
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: new THREE.Color(COLORS.cyan) },
          uCenter: { value: new THREE.Vector3(...ZONES.cyber) },
        },
      }),
    []
  );
  useFrame((_, dt) => (material.uniforms.uTime.value += dt * (state.reducedMotion ? 0.2 : 1)));
  return (
    <mesh rotation-x={-Math.PI / 2} position={[ZONES.cyber[0] - 3, -2.6, ZONES.cyber[2]]} material={material}>
      <planeGeometry args={[60, 60]} />
    </mesh>
  );
}

function Globe() {
  const root = useRef();
  const scan = useRef();
  const dashRefs = useRef([]);
  const R = 2.3;

  const { latLong, dots, arcs } = useMemo(() => {
    // latitude/longitude wireframe
    const ll = [];
    for (let lat = -60; lat <= 60; lat += 30) {
      const y = Math.sin((lat * Math.PI) / 180) * R;
      const r = Math.cos((lat * Math.PI) / 180) * R;
      for (let i = 0; i < 64; i++) {
        const a1 = (i / 64) * Math.PI * 2;
        const a2 = ((i + 1) / 64) * Math.PI * 2;
        ll.push(Math.cos(a1) * r, y, Math.sin(a1) * r, Math.cos(a2) * r, y, Math.sin(a2) * r);
      }
    }
    for (let m = 0; m < 12; m++) {
      const a = (m / 12) * Math.PI * 2;
      for (let i = 0; i < 48; i++) {
        const t1 = (i / 48) * Math.PI - Math.PI / 2;
        const t2 = ((i + 1) / 48) * Math.PI - Math.PI / 2;
        ll.push(
          Math.cos(t1) * Math.cos(a) * R, Math.sin(t1) * R, Math.cos(t1) * Math.sin(a) * R,
          Math.cos(t2) * Math.cos(a) * R, Math.sin(t2) * R, Math.cos(t2) * Math.sin(a) * R
        );
      }
    }
    const llg = new THREE.BufferGeometry();
    llg.setAttribute('position', new THREE.Float32BufferAttribute(ll, 3));

    // fibonacci surface nodes
    const n = 700;
    const pts = [];
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = i * 2.399963;
      pts.push(new THREE.Vector3(Math.cos(th) * r, y, Math.sin(th) * r).multiplyScalar(R * 1.002));
    }
    const dg = new THREE.BufferGeometry().setFromPoints(pts);

    // network arcs between random nodes
    const rr = rng(13);
    const a = [];
    for (let i = 0; i < 16; i++) {
      const A = pts[Math.floor(rr() * n)];
      const B = pts[Math.floor(rr() * n)];
      const mid = A.clone().add(B).multiplyScalar(0.5).normalize().multiplyScalar(R * (1.25 + A.distanceTo(B) * 0.12));
      const curve = new THREE.QuadraticBezierCurve3(A, mid, B);
      a.push({ points: curve.getPoints(48), speed: 0.4 + rr() * 0.8 });
    }
    return { latLong: llg, dots: dg, arcs: a };
  }, []);

  useFrame((s, rawDt) => {
    const dt = Math.min(rawDt, 0.05);
    const t = s.clock.elapsedTime;
    const k = state.reducedMotion ? 0.1 : 1;
    root.current.rotation.y += dt * 0.12 * k;
    root.current.rotation.x = damp(root.current.rotation.x, 0.25 - state.mouse.y * 0.2, 2, dt);
    const y = Math.sin(t * 0.9 * k) * R * 0.95;
    scan.current.position.y = y;
    const rr = Math.sqrt(Math.max(0.001, R * R - y * y));
    scan.current.scale.setScalar(rr / R);
    dashRefs.current.forEach((l, i) => {
      if (l && l.material) l.material.dashOffset -= dt * arcs[i].speed * k;
    });
  });

  return (
    <group>
      <group ref={root}>
        <lineSegments geometry={latLong}>
          <lineBasicMaterial color={COLORS.blue} transparent opacity={0.45} />
        </lineSegments>
        <points geometry={dots}>
          <pointsMaterial color={[2.6, 0.12, 0.08]} size={0.035} toneMapped={false} transparent opacity={0.9} />
        </points>
        <mesh>
          <sphereGeometry args={[R * 0.985, 64, 64]} />
          <meshStandardMaterial color="#f7f4f0" metalness={0.1} roughness={0.6} transparent opacity={0.9} />
        </mesh>
        {arcs.map((a, i) => (
          <Line
            key={i}
            ref={(el) => (dashRefs.current[i] = el)}
            points={a.points}
            color={i % 3 === 0 ? COLORS.white : COLORS.cyan}
            lineWidth={1.4}
            dashed
            dashSize={0.35}
            gapSize={0.9}
            transparent
            opacity={0.95}
          />
        ))}
      </group>
      <mesh ref={scan} rotation-x={-Math.PI / 2}>
        <ringGeometry args={[R * 1.02, R * 1.08, 128]} />
        <meshBasicMaterial color={[3.2, 0.12, 0.05]} toneMapped={false} transparent opacity={0.8} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[0, -2.2, 0]}>
        <ringGeometry args={[2.8, 2.84, 6]} />
        <meshBasicMaterial color={[1.6, 0.05, 0.1]} toneMapped={false} side={THREE.DoubleSide} />
      </mesh>
      <pointLight color={COLORS.cyan} intensity={8} distance={9} position={[0, 2, 3]} />
    </group>
  );
}

/* vertical data streams behind the globe */
function DataRain() {
  const ref = useRef();
  const N = 140;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const d = useMemo(() => {
    const r = rng(31);
    return Array.from({ length: N }, () => ({ x: (r() - 0.5) * 26, z: -4 - r() * 10, s: 0.5 + r() * 1.5, p: r() * 10, h: 0.3 + r() * 1.2 }));
  }, []);
  useFrame((s) => {
    const t = s.clock.elapsedTime * (state.reducedMotion ? 0.1 : 1);
    d.forEach((o, i) => {
      dummy.position.set(o.x, 7 - ((t * o.s + o.p) % 10), o.z);
      dummy.scale.set(0.02, o.h, 0.02);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <instancedMesh ref={ref} args={[null, null, N]}>
      <boxGeometry />
      <meshBasicMaterial color={[1.8, 0.06, 0.05]} toneMapped={false} transparent opacity={0.6} />
    </instancedMesh>
  );
}

export default function CyberZone() {
  const group = useRef();
  useFrame(() => {
    group.current.visible = Math.abs(state.stationSmooth - STATIONS.cyber) < 2.2;
  });
  return (
    <group ref={group}>
      <Grid />
      <group position={ZONES.cyber}>
        <Globe />
        <DataRain />
      </group>
    </group>
  );
}
