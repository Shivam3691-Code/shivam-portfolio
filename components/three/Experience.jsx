'use client';
import { Suspense, useRef, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { PerformanceMonitor, Preload } from '@react-three/drei';
import { NeutralToneMapping } from 'three';
import { useStore, setState } from '@/lib/store';
import CameraRig from './CameraRig';
import Atmosphere from './Atmosphere';
import ParticleField from './ParticleField';
import Effects from './Effects';
import HeroZone from './zones/HeroZone';
import JourneyZone from './zones/JourneyZone';
import ProjectsZone from './zones/ProjectsZone';
import SkillsZone from './zones/SkillsZone';
import CyberZone from './zones/CyberZone';
import ContactZone from './zones/ContactZone';

// Tells the loader the scene has actually drawn (shaders compiled, frames flowing)
function FirstFrames() {
  const n = useRef(0);
  useFrame(() => {
    if (++n.current === 4) setState({ sceneReady: true });
  });
  return null;
}

function World({ tier }) {
  const size = useThree((s) => s.size);
  const portrait = size.width / size.height < 0.9;
  return (
    <>
      <Atmosphere />
      <CameraRig />
      <ParticleField count={tier === 'high' ? 5200 : 2200} />
      <HeroZone tier={tier} portrait={portrait} />
      <JourneyZone />
      <ProjectsZone />
      <SkillsZone />
      <CyberZone />
      <ContactZone />
      <Effects tier={tier} />
      <Preload all />
      <FirstFrames />
    </>
  );
}

export default function Experience({ eventSource }) {
  const initialTier = useStore((s) => s.tier);
  const [tier, setTier] = useState(initialTier);
  const [dpr, setDpr] = useState(initialTier === 'high' ? 1.6 : 1.2);

  return (
    <div className="webgl" aria-hidden="true">
      <Canvas
        eventSource={eventSource}
        eventPrefix="client"
        shadows
        dpr={dpr}
        camera={{ fov: 40, near: 0.1, far: 140, position: [0, 3, 25] }}
        gl={{ antialias: false, powerPreference: 'high-performance', alpha: false, stencil: false, toneMapping: NeutralToneMapping, toneMappingExposure: 1 }}
      >
        <PerformanceMonitor
          onDecline={() => {
            setDpr(1);
            setTier('low');
          }}
          onIncline={() => setDpr((d) => Math.min(d + 0.2, initialTier === 'high' ? 1.75 : 1.3))}
          flipflops={3}
        >
          <Suspense fallback={null}>
            <World tier={tier} />
          </Suspense>
        </PerformanceMonitor>
      </Canvas>
    </div>
  );
}
