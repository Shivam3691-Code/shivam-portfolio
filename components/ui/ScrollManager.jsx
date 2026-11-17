'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { state, setState, runtime } from '@/lib/store';

const SECTION_OF = (s) =>
  s < 0.5 ? 'hero' : s < 4.5 ? 'journey' : s < 8.5 ? 'work' : s < 9.5 ? 'skills' : s < 10.5 ? 'security' : 'contact';

// Maps native scroll position → continuous "station" value that drives the camera.
export default function ScrollManager() {
  useEffect(() => {
    const reduced = state.reducedMotion;
    let anchors = [];

    const measure = () => {
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      const markers = [...document.querySelectorAll('[data-station]')].sort(
        (a, b) => Number(a.dataset.station) - Number(b.dataset.station)
      );
      let prev = -1;
      anchors = markers.map((el, i) => {
        const r = el.getBoundingClientRect();
        let a = i === 0 ? 0 : r.top + window.scrollY + r.height / 2 - vh / 2;
        a = Math.min(Math.max(a, prev + 1), max);
        prev = a;
        return a;
      });
    };

    const update = (y) => {
      state.scrollY = y;
      if (anchors.length < 2) return;
      let s = anchors.length - 1;
      for (let i = 0; i < anchors.length - 1; i++) {
        if (y < anchors[i + 1]) {
          let f = (y - anchors[i]) / (anchors[i + 1] - anchors[i]);
          f = Math.min(Math.max(f, 0), 1);
          // dwell at each station, travel in between
          f = Math.min(Math.max((f - 0.12) / 0.76, 0), 1);
          f = f * f * (3 - 2 * f);
          s = i + f;
          break;
        }
      }
      state.station = s;
      setState({ section: SECTION_OF(s) });
    };

    let lenis = null;
    if (!reduced) {
      lenis = new Lenis({ duration: 1.35, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
      runtime.lenis = lenis;
      if (process.env.NODE_ENV !== 'production') window.__lenis = lenis;
      lenis.on('scroll', ({ scroll, velocity }) => {
        state.velocity = velocity;
        update(scroll);
      });
    }
    let raf;
    const loop = (t) => {
      lenis?.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onNative = () => !lenis && update(window.scrollY);
    const onResize = () => {
      measure();
      update(window.scrollY);
    };
    const onMouse = (e) => {
      state.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      state.mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    const onTouch = (e) => {
      const t = e.touches[0];
      if (!t) return;
      state.mouse.x = ((t.clientX / window.innerWidth) * 2 - 1) * 0.5;
      state.mouse.y = -((t.clientY / window.innerHeight) * 2 - 1) * 0.5;
    };

    measure();
    update(window.scrollY);
    const ro = new ResizeObserver(onResize);
    ro.observe(document.body);
    window.addEventListener('scroll', onNative, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onMouse, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });

    // lock scroll while the loader is up
    lenis?.stop();
    const unlock = setInterval(() => {
      if (state.ready) {
        lenis?.start();
        document.documentElement.classList.remove('is-loading');
        clearInterval(unlock);
      }
    }, 100);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(unlock);
      ro.disconnect();
      window.removeEventListener('scroll', onNative);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMouse);
      window.removeEventListener('touchmove', onTouch);
      lenis?.destroy();
      runtime.lenis = null;
    };
  }, []);
  return null;
}
