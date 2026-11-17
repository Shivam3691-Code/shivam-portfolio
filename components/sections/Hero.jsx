'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '@/lib/data';
import { useStore, scrollToId } from '@/lib/store';
import { SplitHeading } from '../ui/Reveal';

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const ready = useStore((s) => s.ready);
  const [role, setRole] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRole((r) => (r + 1) % PROFILE.roles.length), 2600);
    return () => clearInterval(id);
  }, []);
  const fade = (d) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 1.2, ease, delay: d },
  });

  return (
    <section id="top" className="hero" data-station="0">

      <div className="hero__bottom">
        <div className="hero__title">
          <SplitHeading as="h1" lines={PROFILE.headline} className="display hero__h1" animate={ready} delay={1.25} />
        </div>
        <motion.div className="hero__side" {...fade(1.8)}>
          <p className="hero__sub">{PROFILE.sub}</p>
          <div className="hero__roles" aria-live="polite">
            <span className="mono">Currently</span>
            <span className="hero__role-window">
              <motion.span key={role} initial={{ y: '100%', opacity: 0 }} animate={{ y: '0%', opacity: 1 }} transition={{ duration: 0.7, ease }}>
                {PROFILE.roles[role]}
              </motion.span>
            </span>
          </div>
        </motion.div>
      </div>

      <motion.button className="hero__scroll" onClick={() => scrollToId('journey')} {...fade(2.1)} data-cursor="ENTER">
        <span className="mono">Scroll to enter</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </motion.button>
    </section>
  );
}
