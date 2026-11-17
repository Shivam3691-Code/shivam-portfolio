'use client';
import { JOURNEY } from '@/lib/data';
import { Reveal, SplitHeading } from '../ui/Reveal';

export default function About() {
  return (
    <section id="journey" className="about">
      <div className="about__intro wrap">
        <Reveal className="label">
          <span className="label__no">01</span> My Journey
        </Reveal>
        <SplitHeading lines={['NOT JUST A DEVELOPER.', 'A BUILDER OF IDEAS.']} className="display display--xl" />
        <Reveal className="about__lede" delay={0.15}>
          <p>
            Software development, cybersecurity, AI experimentation and product building — four disciplines that
            shaped how I think. Follow the conduit through the chapters that brought me here.
          </p>
        </Reveal>
      </div>

      {JOURNEY.map((c, i) => (
        <article key={c.no} className={`chapter ${i % 2 ? 'chapter--right' : 'chapter--left'}`} data-station={1 + i}>
          <div className="chapter__panel glass">
            <Reveal className="chapter__head" y={20}>
              <span className="chapter__no">{c.no}</span>
              <span className="mono">Chapter — {c.kicker}</span>
            </Reveal>
            <Reveal as="h3" className="chapter__title" delay={0.05}>
              {c.title}
            </Reveal>
            <Reveal delay={0.12}>
              <p className="chapter__body">{c.body}</p>
            </Reveal>
            <Reveal className="chips" delay={0.2}>
              {c.tags.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </Reveal>
          </div>
        </article>
      ))}
    </section>
  );
}
