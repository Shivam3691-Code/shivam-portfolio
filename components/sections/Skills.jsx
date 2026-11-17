'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { SKILLS } from '@/lib/data';
import { setState, useStore } from '@/lib/store';
import { Reveal, SplitHeading } from '../ui/Reveal';

const ease = [0.16, 1, 0.3, 1];

export default function Skills() {
  const active = useStore((s) => s.activeSkill);
  const hover = useStore((s) => s.hoverSkill);
  const cur = SKILLS[active];
  return (
    <section id="skills" className="skills" data-station="9">
      <div className="sticky">
        <div className="skills__inner wrap">
          <div className="skills__left">
            <Reveal className="label">
              <span className="label__no">03</span> Skills Universe
            </Reveal>
            <SplitHeading lines={['A CONNECTED', 'SKILL SYSTEM.']} className="display display--lg" />
            <p className="skills__hint mono">Select a node — in the list or in the constellation.</p>
            <ul className="skills__list" role="tablist" aria-label="Skill categories">
              {SKILLS.map((s, i) => (
                <li key={s.key}>
                  <button
                    role="tab"
                    aria-selected={active === i}
                    className={`skills__tab ${active === i ? 'is-active' : ''} ${hover === i ? 'is-hover' : ''}`}
                    onClick={() => setState({ activeSkill: i })}
                    onMouseEnter={() => setState({ hoverSkill: i })}
                    onMouseLeave={() => setState({ hoverSkill: -1 })}
                    data-cursor="SELECT"
                  >
                    <span className="mono">0{i + 1}</span>
                    <span className="skills__tab-name">{s.name}</span>
                    <span className="skills__tab-count mono">{s.items.length}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="skills__detail glass" role="tabpanel" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={cur.key}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
                transition={{ duration: 0.6, ease }}
              >
                <span className="mono skills__node">NODE · {cur.short.toUpperCase()}</span>
                <h3>{cur.name}</h3>
                <p>{cur.blurb}</p>
                <ul>
                  {cur.items.map((it, i) => (
                    <motion.li key={it} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease }}>
                      <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                      {it}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
