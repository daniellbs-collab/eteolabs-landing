'use client';

import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function AnimatedCounter({
  target,
  duration = 2,
  suffix = '',
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, target, {
        duration,
        ease: EASE_OUT,
      });
    }
  }, [isInView, target, duration, count]);

  return (
    <span className="inline-flex">
      <motion.span ref={ref}>{rounded}</motion.span>
      {suffix}
    </span>
  );
}