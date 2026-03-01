'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Building2, Cpu, Scissors, Stethoscope } from 'lucide-react';
import { useRef } from 'react';
import { HeroScene } from '@/components/3d/HeroScene';
import { Scene3D } from '@/components/3d/Scene3D';
import { PrimaryCTA, SecondaryCTA } from '@/components/ui/Buttons';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';

const EASE_HERO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_HERO },
  },
};

const sectors = [
  { icon: Cpu, label: 'Dashboards Analíticos' },
  { icon: Stethoscope, label: 'Clínicas & Healthtechs' },
  { icon: Building2, label: 'Plataformas de E-commerce' },
  { icon: Scissors, label: 'Franquias & Redes Premium' },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: '220px 0px 220px 0px' });

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
      <div className="absolute inset-[10px] md:inset-6 rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.03] via-transparent to-white/[0.02] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-40 opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_18%,rgba(226,238,232,0.26),transparent_62%),radial-gradient(38%_45%_at_18%_72%,rgba(160,180,170,0.22),transparent_68%),radial-gradient(40%_44%_at_82%_72%,rgba(160,180,170,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-deep/30 to-void pointer-events-none" />

      {!reduceMotion && isInView && (
        <Scene3D className="absolute inset-0 z-0 opacity-95" camera={{ position: [0, 0.15, 5.25], fov: 42 }}>
          <HeroScene />
        </Scene3D>
      )}

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-5rem)] flex flex-col justify-center pt-16 md:pt-20 pb-10"
      >
        <div className="relative max-w-4xl mx-auto text-center lg:-translate-y-2">
          {/* Radial gradient background that "sinks" behind the text. Scales down on mobile. */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[100vw] sm:w-[800px] sm:h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.55)_0%,transparent_70%)] pointer-events-none -z-10" />

          <motion.div variants={fadeUp} className="mb-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/35 border border-white/20 text-cyan-primary text-xs font-mono uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-primary animate-pulse" />
              Eteo Labs: Engenharia de Software Orientada a Lucro
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tighter leading-[0.94]"
          >
            <span className="text-gradient">Tecnologia Premium para negócios que lideram.</span>
            <br className="hidden md:block" /> Ecossistemas que multiplicam resultados.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Dashboards em tempo real, sistemas de saúde, e-commerces e redes premium. Transformamos a complexidade da sua operação em uma máquina escalável.
          </motion.p>

          <motion.p variants={fadeUp} className="mt-3 text-sm md:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Automações com IA, governança absoluta e um impressionante design <em>Absolute Cinema</em> para encantar seus clientes e alavancar suas vendas.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
            <PrimaryCTA href="#contato">Criar Minha Plataforma</PrimaryCTA>
            <SecondaryCTA
              href="#portfolio"
              className="border-white/30 bg-white/10 text-gray-100 hover:border-cyan-primary/45 hover:bg-white/16 shadow-[0_0_24px_rgba(210,230,222,0.12)]"
            >
              Explorar Nosso Portfólio
            </SecondaryCTA>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {sectors.map(({ icon: Icon, label }) => (
            <div key={label} className="glass-card p-4 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/20 flex items-center justify-center shrink-0">
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
