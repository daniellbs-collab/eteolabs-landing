'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MouseEventHandler, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CTAProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

export function PrimaryCTA({ children, href = '#', className = '', onClick }: CTAProps) {
  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-cyan-primary text-gray-900 font-semibold text-lg shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-shadow duration-300',
          className
        )}
      >
        {children}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-cyan-primary text-gray-900 font-semibold text-lg shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-shadow duration-300',
        className
      )}
    >
      {children}
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
    </motion.button>
  );
}

export function SecondaryCTA({ children, href = '#', className = '', onClick }: CTAProps) {
  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 text-white font-semibold text-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300',
          className
        )}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 text-white font-semibold text-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.button>
  );
}