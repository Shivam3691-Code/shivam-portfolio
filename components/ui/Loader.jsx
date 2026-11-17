'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { state, setState, useStore } from '@/lib/store';

const INTRO = 'EXTREME DEVELOPER';
const NAME = 'SHIVAM';
const MIN_TIME = 3000;

const chars = (text, cls) =>
  text.split('').map((c, i) => (
    <span className="loader__mask" key={i}>
      <span className={`loader__char ${cls}`}>{c === ' ' ? ' ' : c}</span>
    </span>
  ));

// Opening: "EXTREME DEVELOPER" rises in, slides away, then "SHIVAM" rises in.
// Once the 3D scene has rendered, the name slides out and the site appears.
export default function Loader() {
  const sceneReady = useStore((s) => s.sceneReady);
  const [timedOut, setTimedOut] = useState(false);
  const [gone, setGone] = useState(false);
  const root = useRef();
  const line = useRef();
  const started = useRef(0);
  const done = useRef(false);

  useEffect(() => {
    started.current = performance.now();
    const d = (v) => (state.reducedMotion ? 0.01 : v);
    const tl = gsap.timeline();
    tl.fromTo('.loader__char--intro', { y: 0, yPercent: 110 }, { yPercent: 0, duration: d(0.8), ease: 'expo.out', stagger: d(0.03) })
      .to('.loader__char--intro', { yPercent: -110, duration: d(0.6), ease: 'expo.in', stagger: d(0.015) }, `+=${d(0.5)}`)
      .fromTo('.loader__char--name', { y: 0, yPercent: 110 }, { yPercent: 0, duration: d(1), ease: 'expo.out', stagger: d(0.07) }, '-=0.1');
    gsap.to(line.current, { scaleX: 0.85, duration: MIN_TIME / 1000, ease: 'power2.out' });
    // safety net: never block the site if the scene stalls
    const id = setTimeout(() => setTimedOut(true), 12000);
    return () => {
      clearTimeout(id);
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (done.current || (!sceneReady && !timedOut)) return;
    const wait = Math.max(0, MIN_TIME - (performance.now() - started.current));
    const id = setTimeout(() => {
      if (done.current) return;
      done.current = true;
      const d = (v) => (state.reducedMotion ? 0.01 : v);
      gsap
        .timeline({ onComplete: () => setGone(true) })
        .to(line.current, { scaleX: 1, duration: d(0.4), ease: 'power2.inOut' })
        .to('.loader__char--name', { yPercent: -110, duration: d(0.7), ease: 'expo.in', stagger: 0.04 }, `+=${d(0.3)}`)
        .to(line.current, { opacity: 0, duration: d(0.3) }, '<0.2')
        .to(root.current, { opacity: 0, duration: d(0.8), ease: 'power2.out' })
        .add(() => setState({ ready: true }), '<');
      gsap.to(state, { intro: 1, duration: d(3), ease: 'expo.out', delay: d(1.6) });
    }, wait);
    return () => clearTimeout(id);
  }, [sceneReady, timedOut]);

  if (gone) return null;
  return (
    <div className="loader" ref={root} role="status" aria-label="Loading">
      <div className="loader__stage" aria-hidden="true">
        <div className="loader__row loader__row--intro">{chars(INTRO, 'loader__char--intro')}</div>
        <div className="loader__row loader__row--name">{chars(NAME, 'loader__char--name')}</div>
      </div>
      <div className="loader__track">
        <div className="loader__line" ref={line} />
      </div>
    </div>
  );
}
