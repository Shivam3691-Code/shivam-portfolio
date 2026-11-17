'use client';
import { useEffect, useRef, useState } from 'react';
import { PROJECTS, SKILLS, PROFILE } from '@/lib/data';
import { scrollToId, state } from '@/lib/store';

const BOOT = [
  { c: 'whoami', o: ['shivam — builder · researcher · creative technologist'] },
  { c: 'cat ./mindset.txt', o: ['> think like a builder.', '> understand like a hacker.'] },
  { c: 'scan --target ./lab-app --scope authorised', o: ['[+] mapping attack surface ........ done', '[+] auth flows · input validation · access control', '[✓] findings → fed back into design'] },
];

const HELP = [
  'available commands:',
  '  whoami     who is behind this',
  '  skills     list skill categories',
  '  projects   list things I have built',
  '  stack      security toolkit',
  '  contact    jump to contact',
  '  clear      clear the screen',
];

function run(cmd) {
  const c = cmd.trim().toLowerCase();
  switch (c) {
    case '':
      return [];
    case 'help':
      return HELP;
    case 'whoami':
      return [`shivam — ${PROFILE.roles.join(' · ').toLowerCase()}`];
    case 'skills':
      return SKILLS.map((s, i) => `  0${i + 1}  ${s.name.padEnd(24, ' ')} ${s.items.length} nodes`);
    case 'projects':
      return PROJECTS.map((p) => `  ${p.no}  ${p.name.padEnd(16, ' ')} ${p.summary}`);
    case 'stack':
      return ['  ethical hacking · web application security', '  bug hunting · burp suite · security research'];
    case 'contact':
      setTimeout(() => scrollToId('contact'), 400);
      return ['opening secure channel → contact ...'];
    case 'sudo':
    case 'sudo su':
    case 'rm -rf /':
      return ['nice try. permission denied. ;)'];
    case 'ls':
      return ['journey/  work/  skills/  security/  contact/'];
    default:
      return [`command not found: ${c}. type "help".`];
  }
}

export default function Terminal() {
  const [lines, setLines] = useState([]);
  const [typing, setTyping] = useState('');
  const [booted, setBooted] = useState(false);
  const [input, setInput] = useState('');
  const body = useRef();
  const inputRef = useRef();
  const started = useRef(false);
  const root = useRef();

  // auto-type the boot sequence once the terminal enters the viewport
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || started.current) return;
        started.current = true;
        const fast = state.reducedMotion;
        let cancelled = false;
        (async () => {
          const wait = (ms) => new Promise((r) => setTimeout(r, fast ? 0 : ms));
          for (const step of BOOT) {
            for (let i = 1; i <= step.c.length; i++) {
              if (cancelled) return;
              setTyping(step.c.slice(0, i));
              await wait(28 + Math.random() * 40);
            }
            await wait(250);
            setTyping('');
            setLines((l) => [...l, { t: 'cmd', v: step.c }]);
            for (const o of step.o) {
              await wait(160);
              setLines((l) => [...l, { t: 'out', v: o }]);
            }
            await wait(450);
          }
          setLines((l) => [...l, { t: 'sys', v: 'interactive mode — type "help"' }]);
          setBooted(true);
        })();
        return () => (cancelled = true);
      },
      { threshold: 0.4 }
    );
    io.observe(root.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (body.current) body.current.scrollTop = body.current.scrollHeight;
  }, [lines, typing]);

  const submit = (e) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === 'clear') {
      setLines([]);
      setInput('');
      return;
    }
    const out = run(input);
    setLines((l) => [...l, { t: 'cmd', v: input }, ...out.map((v) => ({ t: 'out', v }))]);
    setInput('');
  };

  return (
    <div className="term glass" ref={root} onClick={() => inputRef.current?.focus()} data-cursor="TYPE">
      <div className="term__bar">
        <span className="term__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="mono">shivam@lab: ~/security</span>
        <span className="mono term__status">
          <i className="dot dot--live" /> SECURE
        </span>
      </div>
      <div className="term__body" ref={body} data-lenis-prevent>
        {lines.map((l, i) => (
          <div key={i} className={`term__line term__line--${l.t}`}>
            {l.t === 'cmd' && <span className="term__prompt">❯</span>}
            {l.v}
          </div>
        ))}
        {!booted && (
          <div className="term__line term__line--cmd">
            <span className="term__prompt">❯</span>
            {typing}
            <span className="term__caret" />
          </div>
        )}
        {booted && (
          <form onSubmit={submit} className="term__line term__line--cmd term__form">
            <label htmlFor="term-input" className="term__prompt">
              ❯
            </label>
            <input
              id="term-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
              spellCheck="false"
              aria-label="Terminal command"
              placeholder="type help"
            />
          </form>
        )}
      </div>
    </div>
  );
}
