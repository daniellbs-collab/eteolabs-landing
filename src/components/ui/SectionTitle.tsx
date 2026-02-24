'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const directionMap = {
  up: { hidden: { y: 40 }, visible: { y: 0 } },
  down: { hidden: { y: -40 }, visible: { y: 0 } },
  left: { hidden: { x: 40 }, visible: { x: 0 } },
  right: { hidden: { x: -40 }, visible: { x: 0 } },
};

export function Reveal({ children, delay = 0, direction = 'up', className }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const dir = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dir.hidden }}
      animate={isInView ? { opacity: 1, ...dir.visible } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: EASE_OUT,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SectionTitleProps {
  tag: string;
  title: string;
  description?: string;
}

export function SectionTitle({ tag, title, description }: SectionTitleProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
      <Reveal>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-primary/10 border border-cyan-primary/20 text-cyan-primary text-xs font-mono uppercase tracking-widest mb-4">
          {tag}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-lg text-gray-400 font-light">{description}</p>
        </Reveal>
      )}
    </div>
  );
}