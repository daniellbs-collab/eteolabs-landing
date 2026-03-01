'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { cn } from '@/lib/utils';

export function SceneBlock({
  children,
  className,
  intensity = 26,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [intensity, 0, -intensity * 0.7]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    reduceMotion ? [1, 1, 1, 1] : [0.72, 1, 1, 0.9]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.85, 1],
    reduceMotion ? [1, 1, 1, 1] : [0.987, 1, 1, 0.994]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className={cn('relative will-change-transform', className)}
    >
      {children}
    </motion.div>
  );
}
