'use client';

import { motion } from 'framer-motion';
import { ArrowRightLeft, TrendingUp } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const beforeItems = [
  'Sistemas isolados que não conversam entre si',
  'Decisões tomadas no feeling e sem visibilidade real',
  'Equipe ocupada com tarefas manuais que travam o crescimento',
  'Gestão reativa: corrige erro depois que o prejuízo apareceu',
];

const afterItems = [
  'Dados confiáveis para decidir com velocidade e segurança',
  'Processos conectados de ponta a ponta em um fluxo único',
  'Automação inteligente para liberar tempo do time estratégico',
  'Governança operacional com indicadores em tempo real',
];

export function PainSolution() {
  return (
    <section id="metodo" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-primary/5 via-transparent to-transparent pointer-events-none" />

      <SectionTitle
        tag="Manifesto"
        title="Não basta agregar. Precisa transformar."
        description="Esse é o nosso princípio: elevar o patamar de governança e gestão para um novo nível de maturidade."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
            className="glass-card p-8 border border-red-500/20"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">Operação sem transformação</h3>
            <ul className="space-y-4">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan-primary/10 border border-cyan-primary/30 flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.25)]">
              <ArrowRightLeft className="w-8 h-8 text-cyan-primary" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
            className="glass-card p-8 border border-cyan-primary/20 shadow-[0_0_45px_rgba(0,240,255,0.08)]"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">Operação transformada com Eteo</h3>
            <ul className="space-y-4">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-200">
                  <TrendingUp className="w-4 h-4 mt-1 text-cyan-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
