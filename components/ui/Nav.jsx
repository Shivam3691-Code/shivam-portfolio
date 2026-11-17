'use client';
import { NAV } from '@/lib/data';
import { scrollToId, setState, useStore } from '@/lib/store';

export default function Nav() {
  const section = useStore((s) => s.section);
  const open = useStore((s) => s.menuOpen);
  const ready = useStore((s) => s.ready);
  return (
    <>
      <header className={`nav ${ready ? 'is-ready' : ''}`}>
        <button className="nav__logo" onClick={() => scrollToId('top')} data-cursor="TOP" aria-label="Back to top">
          <span className="nav__mark" aria-hidden="true" />
          SHIVAM
          <em>/ Creative Technologist</em>
        </button>
        <nav className="nav__links" aria-label="Primary">
          {NAV.map((n, i) => (
            <button
              key={n.id}
              className={`nav__link ${section === n.id ? 'is-active' : ''}`}
              onClick={() => scrollToId(n.id)}
              aria-current={section === n.id ? 'true' : undefined}
            >
              <span className="nav__idx">0{i + 1}</span>
              {n.label}
            </button>
          ))}
        </nav>
        <button className="nav__cta" onClick={() => scrollToId('contact')} data-cursor="HELLO">
          <span className="nav__pulse" aria-hidden="true" />
          Let&apos;s build
        </button>
        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setState({ menuOpen: !open })}
        >
          <span />
          <span />
        </button>
      </header>
      <div className={`menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav className="menu__links">
          {NAV.map((n, i) => (
            <button key={n.id} onClick={() => scrollToId(n.id)} tabIndex={open ? 0 : -1} style={{ transitionDelay: `${open ? 0.08 * i + 0.15 : 0}s` }}>
              <span>0{i + 1}</span>
              {n.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
