'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BrainCircuit, Layers, LineChart, Rocket } from 'lucide-react';
import { ParticleField } from '@/components/3d/ParticleField';
import { Scene3D } from '@/components/3d/Scene3D';
import { PrimaryCTA } from '@/components/ui/Buttons';
import { SectionTitle } from '@/components/ui/SectionTitle';

const pillars = [
  { icon: Layers, text: 'Mapeamento do processo e pontos de perda' },
  { icon: BrainCircuit, text: 'Desenho de sistema com IA aplicada ao negócio' },
  { icon: LineChart, text: 'Indicadores de governança para decisão executiva' },
  { icon: Rocket, text: 'Implantação rápida com acompanhamento de performance' },
];

export function ProductDemo() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [12, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section id="arquitetura" ref={containerRef} className="py-32 relative overflow-hidden">
      <Scene3D className="absolute inset-0 z-0">
        <ParticleField count={900} />
      </Scene3D>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep/30 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <SectionTitle
          tag="Método"
          title="Do briefing ao painel executivo"
          description="Nossa entrega combina estratégia comercial, design de produto e engenharia para gerar ganho operacional mensurável."
        />

        <motion.div
          style={{ rotateX, y, transformPerspective: 1100 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="relative rounded-3xl border border-white/10 bg-gray-900/55 backdrop-blur-2xl shadow-2xl overflow-hidden">
            <div className="h-12 bg-gray-900/80 border-b border-white/5 flex items-center px-4 gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 max-w-xl mx-auto bg-gray-950/60 rounded-md h-6 flex items-center px-3 text-xs text-gray-500 font-mono">
                eteo-labs.com/arquitetura-de-transformacao
              </div>
            </div>

            <div className="grid lg:grid-cols-[1.35fr_1fr] gap-0">
              <div className="relative p-8 md:p-10 min-h-[360px] border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="absolute -top-24 -right-20 w-56 h-56 rounded-full bg-cyan-primary/20 blur-3xl pointer-events-none" />
                <h3 className="relative text-3xl md:text-4xl font-display font-bold text-white leading-tight max-w-md">
                  Operação visualmente clara. Decisão comercial mais rápida.
                </h3>
                <p className="relative mt-4 text-gray-300 max-w-lg leading-relaxed">
                  Cada módulo nasce conectado a resultado de negócio: margem, produtividade,
                  recorrência e satisfação do cliente final.
                </p>

                <div className="relative mt-8 grid sm:grid-cols-2 gap-3">
                  {pillars.map(({ icon: Icon, text }) => (
                    <div key={text} className="glass-card p-3 flex items-start gap-3">
                      <Icon className="w-4 h-4 text-cyan-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-gray-200">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-cyan-primary/10 via-transparent to-magenta-pop/10">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-primary font-mono">Roadmap comercial</p>
                  <div className="mt-5 space-y-3">
                    <div className="glass-card p-4">
                      <p className="text-sm text-white">Semana 1</p>
                      <p className="text-xs text-gray-400 mt-1">Diagnóstico e desenho da arquitetura</p>
                    </div>
                    <div className="glass-card p-4">
                      <p className="text-sm text-white">Semana 2</p>
                      <p className="text-xs text-gray-400 mt-1">Protótipo funcional e validação com o time</p>
                    </div>
                    <div className="glass-card p-4">
                      <p className="text-sm text-white">Semana 3+</p>
                      <p className="text-xs text-gray-400 mt-1">Implantação assistida com indicadores ativos</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <PrimaryCTA href="#contato" className="w-full justify-center">
                    Agendar diagnóstico estratégico
                  </PrimaryCTA>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
