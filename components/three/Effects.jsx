'use client';
import { EffectComposer, Bloom, Vignette, Noise, ChromaticAberration, DepthOfField } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Vector2 } from 'three';
import { lookTarget } from './CameraRig';

const ca = new Vector2(0.0007, 0.0005);

export default function Effects({ tier }) {
  const high = tier === 'high';
  return (
    <EffectComposer multisampling={0} disableNormalPass>
      {high ? <DepthOfField target={lookTarget} focalLength={0.06} bokehScale={2.2} height={480} /> : <></>}
      <Bloom mipmapBlur intensity={0.8} luminanceThreshold={1} luminanceSmoothing={0.2} radius={0.75} />
      {high ? <ChromaticAberration offset={ca} radialModulation modulationOffset={0.4} /> : <></>}
      <Noise opacity={0.03} blendFunction={BlendFunction.OVERLAY} />
      <Vignette offset={0.35} darkness={0.35} />
    </EffectComposer>
  );
}
