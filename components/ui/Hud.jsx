'use client';
import { useEffect, useRef } from 'react';
import { NAV } from '@/lib/data';
import { state, useStore, scrollToId } from '@/lib/store';
import { STATION_COUNT } from '@/lib/world';

// Sci-fi heads-up display: live camera depth + section rail
export default function Hud() {
  const coords = useRef();
  const fill = useRef();
  const section = useStore((s) => s.section);
  const ready = useStore((s) => s.ready);

  useEffect(() => {
    let raf;
    const loop = () => {
      if (coords.current) {
        coords.current.textContent = `Z ${state.cameraZ.toFixed(1).padStart(6, ' ')}  ·  ST ${state.stationSmooth.toFixed(2)}`;
      }
      if (fill.current) fill.current.style.transform = `scaleY(${state.stationSmooth / (STATION_COUNT - 1)})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className={`hud ${ready ? 'is-ready' : ''}`} aria-hidden="true">
      <div className="hud__coords" ref={coords} />
      <div className="hud__rail">
        <div className="hud__track">
          <div className="hud__fill" ref={fill} />
        </div>
        <ul>
          {NAV.map((n) => (
            <li key={n.id} className={section === n.id ? 'is-active' : ''}>
              <button tabIndex={-1} onClick={() => scrollToId(n.id)} data-cursor={n.label.toUpperCase()}>
                <span>{n.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
