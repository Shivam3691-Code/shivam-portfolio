'use client';
import { PROJECTS } from '@/lib/data';
import { scrollToId } from '@/lib/store';
import { Reveal, SplitHeading } from '../ui/Reveal';

export default function Projects() {
  return (
    <section id="work" className="projects">
      <div className="projects__intro wrap">
        <Reveal className="label">
          <span className="label__no">02</span> Selected Work
        </Reveal>
        <SplitHeading lines={["THINGS I'VE", 'BUILT.']} className="display display--xl" />
        <Reveal delay={0.1} className="projects__lede">
          <p>Four projects. Four worlds. Hardware, AI, SaaS and community — each with its own visual identity.</p>
        </Reveal>
      </div>

      {PROJECTS.map((p, i) => (
        <article
          key={p.no}
          className={`project ${i % 2 ? 'project--right' : 'project--left'}`}
          data-station={5 + i}
          style={{ '--accent': p.accent }}
        >
          <div className="project__panel glass">
            <Reveal className="project__meta" y={20}>
              <span className="mono project__index">
                {p.no} <i>/ 04</i>
              </span>
              <span className="mono">{p.type}</span>
            </Reveal>
            <Reveal as="h3" className="project__name" delay={0.05}>
              {p.name}
            </Reveal>
            {p.fullName && (
              <Reveal className="project__full mono" delay={0.08}>
                {p.fullName}
              </Reveal>
            )}
            <Reveal delay={0.1}>
              <p className="project__summary">{p.summary}</p>
              <p className="project__body">{p.body}</p>
            </Reveal>
            <Reveal delay={0.16} className="project__cols">
              <div>
                <h4 className="mono">{p.featuresLabel || 'Features'}</h4>
                <ul className="project__list">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mono">{p.featuresLabel === 'Domains' ? 'Format' : 'Technologies'}</h4>
                <div className="chips">
                  {p.tech.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.22} className="project__foot">
              {p.status ? (
                <span className="status">
                  <i className="dot dot--live" />
                  {p.status}
                </span>
              ) : (
                <span />
              )}
              <button className="link-arrow" onClick={() => scrollToId('contact')} data-cursor="TALK">
                Discuss this project <span aria-hidden="true">→</span>
              </button>
            </Reveal>
          </div>
        </article>
      ))}
    </section>
  );
}
