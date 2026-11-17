'use client';
import { useEffect, useRef } from 'react';
import { SECURITY_METHOD } from '@/lib/data';
import { state } from '@/lib/store';
import { Reveal, SplitHeading } from '../ui/Reveal';
import Terminal from './Terminal';

function HexStream() {
  const ref = useRef();
  useEffect(() => {
    let id;
    const hex = () =>
      Array.from({ length: 8 }, () => Math.floor(Math.random() * 65536).toString(16).padStart(4, '0')).join(' ');
    const tick = () => {
      if (ref.current) {
        const rows = ref.current.children;
        for (let i = rows.length - 1; i > 0; i--) rows[i].textContent = rows[i - 1].textContent;
        rows[0].textContent = `0x${(Math.random() * 0xffff | 0).toString(16).padStart(4, '0')}  ${hex()}`;
      }
      id = setTimeout(tick, state.reducedMotion ? 2000 : 140);
    };
    tick();
    return () => clearTimeout(id);
  }, []);
  return (
    <div className="hexstream mono" ref={ref} aria-hidden="true">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i}>&nbsp;</div>
      ))}
    </div>
  );
}

export default function Cyber() {
  return (
    <section id="security" className="cyber" data-station="10">
      <div className="sticky">
        <div className="cyber__scan" aria-hidden="true" />
        <div className="cyber__inner wrap">
          <div className="cyber__left">
            <Reveal className="label label--cyan">
              <span className="label__no">04</span> Cybersecurity
            </Reveal>
            <SplitHeading lines={['THINK LIKE A BUILDER.', 'UNDERSTAND LIKE A HACKER.']} className="display display--lg" />
            <Terminal />
          </div>
          <div className="cyber__right">
            <ol className="method">
              {SECURITY_METHOD.map((m, i) => (
                <Reveal as="li" key={m.k} delay={i * 0.08} className="method__item">
                  <span className="mono method__k">
                    {String(i + 1).padStart(2, '0')} · {m.k}
                  </span>
                  <strong>{m.t}</strong>
                  <span className="method__d">{m.d}</span>
                </Reveal>
              ))}
            </ol>
            <HexStream />
          </div>
        </div>
      </div>
    </section>
  );
}
