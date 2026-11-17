'use client';
import { Environment, Lightformer } from '@react-three/drei';
import { COLORS } from './shared';

// Global lighting + atmosphere. The environment is built from
// procedural light panels (no external HDR download) so metallic
// surfaces get studio-grade reflections.
export default function Atmosphere() {
  return (
    <>
      <color attach="background" args={[COLORS.black]} />
      <fog attach="fog" args={[COLORS.black, 12, 50]} />
      <ambientLight intensity={0.55} />
      <hemisphereLight args={['#ffffff', '#d9d3cb', 0.9]} />
      <Environment resolution={256} frames={1} environmentIntensity={1}>
        {/* studio strip lights → crisp, readable reflections on chrome */}
        {[-6, -3, 0, 3, 6].map((y, i) => (
          <Lightformer key={i} form="rect" intensity={i === 2 ? 4 : 1.6} color="#ffffff" position={[0, y, -9]} scale={[24, 0.35, 1]} />
        ))}
        <Lightformer form="rect" intensity={3} color="#ffffff" position={[0, 8, 0]} scale={[16, 2, 1]} rotation-x={Math.PI / 2} />
        <Lightformer form="rect" intensity={3.2} color={COLORS.blue} position={[-9, 0, 0]} scale={[3, 14, 1]} rotation-y={Math.PI / 2} />
        <Lightformer form="rect" intensity={3.2} color={COLORS.cyan} position={[9, 0, 0]} scale={[3, 14, 1]} rotation-y={-Math.PI / 2} />
        <Lightformer form="ring" intensity={2.5} color="#ffffff" position={[3, 3, 9]} scale={2.5} />
        <Lightformer form="rect" intensity={1.2} color="#ffd2c8" position={[-4, -2, 9]} scale={[6, 1, 1]} />
      </Environment>
    </>
  );
}
