'use client';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export function Reveal({ children, delay = 0, y = 40, className, as = 'div', amount = 0.35 }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount }}
      transition={{ duration: 1.1, ease, delay }}
    >
      {children}
    </M>
  );
}

// Masked line-by-line headline reveal. The observer sits on the heading
// itself — the inner spans start clipped by their mask, so they can never
// report as "in view" on their own.
const lineVariants = {
  hidden: { y: '110%', rotate: 4 },
  show: (d) => ({ y: '0%', rotate: 0, transition: { duration: 1.2, ease, delay: d } }),
};

export function SplitHeading({ lines, as = 'h2', className = '', delay = 0, animate }) {
  const Tag = motion[as];
  const trigger =
    animate !== undefined
      ? { animate: animate ? 'show' : 'hidden' }
      : { whileInView: 'show', viewport: { once: false, amount: 0.3 } };
  return (
    <Tag className={`split ${className}`} aria-label={lines.join(' ')} initial="hidden" {...trigger}>
      {lines.map((l, i) => (
        <span className="split__line" key={i} aria-hidden="true">
          <motion.span className="split__inner" variants={lineVariants} custom={delay + i * 0.1}>
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
