'use client';

import { motion } from 'framer-motion';
import { Building2, Cpu, Scissors, Stethoscope } from 'lucide-react';
import { HeroScene } from '@/components/3d/HeroScene';
import { Scene3D } from '@/components/3d/Scene3D';
import { PrimaryCTA, SecondaryCTA } from '@/components/ui/Buttons';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';

const EASE_HERO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_HERO },
  },
};

const sectors = [
  { icon: Cpu, label: 'Dashboards inteligentes' },
  { icon: Stethoscope, label: 'Sistemas para clinicas' },
  { icon: Building2, label: 'Operacoes de varejo e notebooks' },
  { icon: Scissors, label: 'Gestao premium para barbearias' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Scene3D className="absolute inset-0 z-0">
        <HeroScene />
      </Scene3D>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-pop/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-40 opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/30 to-void pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32"
      >
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-primary/10 border border-cyan-primary/20 text-cyan-primary text-xs font-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-primary animate-pulse" />
            Eteo Labs: engenharia comercial orientada a resultado
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter leading-[0.92]"
        >
          <span className="text-gradient">Sistemas que transformam negocios.</span>
          <br className="hidden md:block" /> Governanca, gestao e execucao em outro nivel.
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
          Nao entregamos software para &quot;agregar&quot;. Entregamos arquitetura de negocio para escalar
          operacao, reduzir friccao e dar visibilidade total ao que move sua receita.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
          <PrimaryCTA href="#contato">Quero elevar minha operacao</PrimaryCTA>
          <SecondaryCTA href="https://nexus.eteolabs.com.br">Acessar ETEO NEXUS</SecondaryCTA>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3 text-xs text-gray-300 font-mono">
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Setup consultivo</span>
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Time senior</span>
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Roadmap de ROI</span>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl">
          {sectors.map(({ icon: Icon, label }) => (
            <div key={label} className="glass-card p-4 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-primary/10 border border-cyan-primary/20 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-cyan-primary" />
              </div>
              <p className="text-sm text-gray-200 leading-snug">{label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
