'use client';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { MotionConfig } from 'framer-motion';
import { setState } from '@/lib/store';
import ScrollManager from './ui/ScrollManager';
import Loader from './ui/Loader';
import Cursor from './ui/Cursor';
import Nav from './ui/Nav';
import Hud from './ui/Hud';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Cyber from './sections/Cyber';
import Contact from './sections/Contact';

const Experience = dynamic(() => import('./three/Experience'), { ssr: false });

function detectTier() {
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const small = Math.min(window.innerWidth, window.innerHeight) < 700;
  const cores = navigator.hardwareConcurrency || 4;
  return coarse || small || cores <= 4 ? 'low' : 'high';
}

export default function App() {
  const wrapper = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    setState({ reducedMotion: rm.matches, tier: detectTier() });
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    setMounted(true);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div ref={wrapper} className="app">
        {mounted && <Experience eventSource={wrapper} />}
        <Loader />
        <Cursor />
        <Nav />
        <Hud />
        <main className="content">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Cyber />
          <Contact />
        </main>
        {mounted && <ScrollManager />}
      </div>
    </MotionConfig>
  );
}
