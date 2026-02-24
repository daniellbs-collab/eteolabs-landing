'use client';

import { motion } from 'framer-motion';
import { Clock3, ShieldCheck, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedCounter } from './AnimatedCounter';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stats = [
  { value: 40, suffix: '+', label: 'Projetos em segmentos diferentes' },
  { value: 7, suffix: ' dias', label: 'Primeiras automações em produção' },
  { value: 32, suffix: '%', label: 'Redução média de retrabalho operacional' },
  { value: 96, suffix: '%', label: 'Clientes renovando após 12 meses' },
];

const trustItems = [
  { icon: ShieldCheck, text: 'Arquitetura alinhada com LGPD' },
  { icon: Clock3, text: 'Time de implantação com resposta rápida' },
  { icon: Sparkles, text: 'Entrega visual premium sem sacrificar performance' },
];

export function SocialProofStrip({ className }: { className?: string }) {
  return (
    <section className={cn('py-12 border-y border-white/[0.06] bg-deep/50', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <span className="text-sm text-gray-400 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="mt-8 pt-8 border-t border-white/10 grid gap-4 md:grid-cols-3">
          {trustItems.map(({ icon: Icon, text }) => (
            <div key={text} className="glass-card p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-primary/10 border border-cyan-primary/20 flex items-center justify-center">
                <Icon className="w-4 h-4 text-cyan-primary" />
              </div>
              <p className="text-sm text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
