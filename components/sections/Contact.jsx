'use client';
import { useState } from 'react';
import { CONTACT } from '@/lib/data';
import { scrollToId } from '@/lib/store';
import { Reveal, SplitHeading } from '../ui/Reveal';

function Row({ label, value, href, i }) {
  const placeholder = !href;
  const inner = (
    <>
      <span className="mono contact__idx">0{i + 1}</span>
      <span className="contact__label">{label}</span>
      <span className="contact__value">{value}</span>
      {placeholder ? <span className="chip chip--muted">placeholder</span> : <span className="contact__arrow">↗</span>}
    </>
  );
  return placeholder ? (
    <div className="contact__row is-placeholder" title="Add your link in lib/data.js">
      {inner}
    </div>
  ) : (
    <a className="contact__row" href={href} target="_blank" rel="noreferrer" data-cursor="OPEN">
      {inner}
    </a>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = CONTACT.email;
  const hasEmail = !!email.href;
  const copy = async () => {
    if (!hasEmail) return;
    try {
      await navigator.clipboard.writeText(email.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };
  return (
    <section id="contact" className="contact" data-station="11">
      <div className="contact__inner wrap">
        <Reveal className="label label--center">
          <span className="label__no">05</span> Contact
        </Reveal>
        <SplitHeading lines={['HAVE AN IDEA?', "LET'S BUILD IT."]} className="display display--xxl contact__title" />
        <Reveal delay={0.15} className="contact__actions">
          {hasEmail ? (
            <a className="btn-primary" href={email.href} data-cursor="MAIL">
              <span>Start a conversation</span>
              <span aria-hidden="true">→</span>
            </a>
          ) : (
            <span className="btn-primary is-disabled" title="Add your email in lib/data.js">
              <span>Start a conversation</span>
              <span className="chip chip--muted">email placeholder</span>
            </span>
          )}
          <button className="btn-ghost" onClick={copy} disabled={!hasEmail} data-cursor={hasEmail ? 'COPY' : undefined}>
            {copied ? 'Copied ✓' : email.value}
          </button>
        </Reveal>
        <Reveal delay={0.25} className="contact__list">
          <Row label={email.label} value={email.value} href={email.href} i={0} />
          {CONTACT.links.map((l, i) => (
            <Row key={l.label} {...l} i={i + 1} />
          ))}
        </Reveal>
      </div>
      <footer className="footer wrap">
        <span className="mono">© {new Date().getFullYear()} Shivam</span>
        <span className="mono">Designed &amp; engineered in real-time 3D</span>
        <button className="mono link-arrow" onClick={() => scrollToId('top')} data-cursor="TOP">
          Back to top ↑
        </button>
      </footer>
    </section>
  );
}
