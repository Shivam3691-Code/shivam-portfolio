'use client';
import { useEffect, useRef } from 'react';
import { useStore } from '@/lib/store';

export default function Cursor() {
  const dot = useRef();
  const ring = useRef();
  const label = useRef();
  const sceneLabel = useStore((s) => s.cursorLabel);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    document.documentElement.classList.add('has-cursor');
    const pos = { x: innerWidth / 2, y: innerHeight / 2 };
    const r = { x: pos.x, y: pos.y };
    let raf;
    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      const el = e.target.closest?.('a, button, [data-cursor], input');
      const txt = el?.dataset?.cursor || '';
      ring.current.classList.toggle('is-hover', !!el);
      label.current.dataset.dom = txt;
      label.current.textContent = txt || label.current.dataset.scene || '';
    };
    const down = () => ring.current.classList.add('is-down');
    const up = () => ring.current.classList.remove('is-down');
    const leave = () => ring.current.classList.add('is-hidden');
    const enter = () => ring.current.classList.remove('is-hidden');
    const loop = () => {
      r.x += (pos.x - r.x) * 0.16;
      r.y += (pos.y - r.y) * 0.16;
      dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      ring.current.style.transform = `translate3d(${r.x}px, ${r.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
      document.documentElement.classList.remove('has-cursor');
    };
  }, []);

  useEffect(() => {
    if (!label.current) return;
    label.current.dataset.scene = sceneLabel;
    if (!label.current.dataset.dom) label.current.textContent = sceneLabel;
    ring.current?.classList.toggle('is-scene', !!sceneLabel);
  }, [sceneLabel]);

  return (
    <>
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
      <div className="cursor-ring" ref={ring} aria-hidden="true">
        <span ref={label} className="cursor-ring__label" />
      </div>
    </>
  );
}
