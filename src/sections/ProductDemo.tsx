'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Activity, Bot, BrainCircuit, Gauge, Layers, LineChart, Rocket, Workflow } from 'lucide-react';
import { ParticleField } from '@/components/3d/ParticleField';
import { Scene3D } from '@/components/3d/Scene3D';
import { PrimaryCTA } from '@/components/ui/Buttons';
import { SectionTitle } from '@/components/ui/SectionTitle';

const rolloutFlow = [
  {
    phase: 'Ciclo 01',
    title: 'Diagnóstico operacional',
    detail: 'Leitura de processo, fricções e gargalos que travam receita e atendimento.',
    progress: 100,
    color: '#8FD6FF',
  },
  {
    phase: 'Ciclo 02',
    title: 'Arquitetura de solução',
    detail: 'Desenho de fluxos, dados e regras de governança alinhadas ao objetivo comercial.',
    progress: 84,
    color: '#C2A1FF',
  },
  {
    phase: 'Ciclo 03',
    title: 'Automações + IA em produção',
    detail: 'Implantação dos módulos com automações críticas e inteligência aplicada no dia a dia.',
    progress: 76,
    color: '#9FE6C5',
  },
  {
    phase: 'Ciclo 04',
    title: 'Escala assistida por indicadores',
    detail: 'Rituais executivos e ajustes contínuos para manter crescimento com controle.',
    progress: 68,
    color: '#FFE3B5',
  },
];

const automationQueue = [
  { name: 'Conciliação de pedidos e pagamentos', saving: '-12h/semana', progress: 92, color: '#8FD6FF' },
  { name: 'Triagem inteligente de atendimento', saving: '-37% de tempo', progress: 79, color: '#C2A1FF' },
  { name: 'Alertas preditivos de ruptura e margem', saving: '-29% de risco', progress: 73, color: '#9FE6C5' },
  { name: 'Relatório executivo automatizado', saving: '-8h/semana', progress: 88, color: '#FFE3B5' },
];

const liveSignals = [
  { time: '09:14', event: 'Workflow comercial validado em 3 unidades', impact: 'Execução', tone: 'bg-emerald-300' },
  { time: '09:46', event: 'IA classificou 128 tickets sem intervenção manual', impact: 'Atendimento', tone: 'bg-sky-300' },
  { time: '10:12', event: 'Motor de margem acionou ajuste automático de preço', impact: 'Financeiro', tone: 'bg-violet-300' },
  { time: '11:03', event: 'Comitê aprovou ciclo de escala com governança ativa', impact: 'Direção', tone: 'bg-amber-300' },
];

const capabilities = [
  { icon: Layers, label: 'Mapeamento de processo e perdas' },
  { icon: BrainCircuit, label: 'Implementações com IA no fluxo real' },
  { icon: LineChart, label: 'Painel executivo orientado a decisão' },
  { icon: Rocket, label: 'Implantação acelerada com acompanhamento' },
];

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ProductDemo() {
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(containerRef, { margin: '300px 0px 300px 0px' });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [9, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [18, -20]);

  return (
    <section id="arquitetura" ref={containerRef} className="py-32 relative overflow-hidden">
      {!reduceMotion && isInView && (
        <Scene3D className="absolute inset-0 z-0">
          <ParticleField count={380} />
        </Scene3D>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep/40 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <SectionTitle
          tag="Método"
          title="Sala de comando da transformação"
          description="Arquitetura de execução com automações e IA para reduzir tempo de processo e liberar o time para pessoas, estratégia e crescimento."
        />

        <motion.div
          style={{ rotateX, y, transformPerspective: 1200 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="relative rounded-[30px] border border-white/10 bg-[#0C1012]/78 backdrop-blur-2xl shadow-2xl overflow-hidden">
            <div className="h-12 bg-black/45 border-b border-white/10 flex items-center px-4 gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 max-w-xl mx-auto bg-black/30 rounded-md h-6 flex items-center px-3 text-xs text-gray-500 font-mono">
                eteo-labs.com/arquitetura-de-transformacao
              </div>
            </div>

            <div className="grid xl:grid-cols-[1.25fr_1fr]">
              <div className="relative p-8 md:p-10 border-b xl:border-b-0 xl:border-r border-white/10">
                <div className="absolute -top-20 right-0 w-64 h-64 rounded-full bg-cyan-primary/12 blur-3xl pointer-events-none" />

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-primary/25 bg-cyan-primary/10 text-[11px] uppercase tracking-[0.16em] text-cyan-primary font-mono">
                  <Workflow className="w-3.5 h-3.5" />
                  Arquitetura de execução
                </span>

                <h3 className="mt-5 text-3xl md:text-4xl font-display font-bold text-white leading-tight max-w-xl">
                  Operação clara, processo automático e decisão no tempo certo.
                </h3>
                <p className="mt-4 text-gray-300 leading-relaxed max-w-2xl">
                  Cada implantação nasce conectada ao resultado de negócio, com IA aplicada em tarefas repetitivas
                  para reduzir fricção operacional e ampliar foco humano no que realmente importa.
                </p>

                <div className="mt-8 relative">
                  <div className="absolute left-4 top-2 bottom-2 w-px bg-white/12" />
                  <div className="space-y-3.5">
                    {rolloutFlow.map((step, index) => (
                      <motion.div
                        key={step.phase}
                        initial={{ opacity: 0, x: -18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-90px' }}
                        transition={{ duration: 0.45, delay: index * 0.08, ease: EASE_OUT }}
                        className="relative rounded-2xl border border-white/10 bg-black/35 px-4 py-3.5 pl-12"
                      >
                        <span className="absolute left-1.5 top-4 h-5.5 w-5.5 rounded-full border border-white/25 bg-black/70 flex items-center justify-center text-[10px] font-mono text-cyan-primary">
                          {index + 1}
                        </span>
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-xs uppercase tracking-[0.14em] text-gray-400 font-mono">{step.phase}</p>
                          <p className="text-xs text-gray-500">{step.progress}%</p>
                        </div>
                        <p className="mt-1 text-base text-white">{step.title}</p>
                        <p className="mt-1 text-xs text-gray-400 leading-relaxed">{step.detail}</p>
                        <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${step.progress}%` }}
                            viewport={{ once: true, margin: '-90px' }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: step.color }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {capabilities.map(({ icon: Icon, label }) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-black/30 px-3 py-3 flex items-start gap-2.5">
                      <Icon className="w-4 h-4 text-cyan-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-gray-200 leading-snug">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-10 bg-gradient-to-br from-cyan-primary/[0.06] via-transparent to-magenta-pop/[0.08] flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-black/35 p-3">
                    <p className="text-xs uppercase tracking-[0.14em] text-gray-500 font-mono">Eficiência</p>
                    <p className="mt-1 text-2xl text-white font-semibold">+36%</p>
                    <p className="text-xs text-gray-500 mt-1">Produtividade automatizada</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/35 p-3">
                    <p className="text-xs uppercase tracking-[0.14em] text-gray-500 font-mono">Tempo ganho</p>
                    <p className="mt-1 text-2xl text-white font-semibold">18h</p>
                    <p className="text-xs text-gray-500 mt-1">Por equipe, por semana</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/28 p-4">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-cyan-primary" />
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-primary font-mono">Fila de automações</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    {automationQueue.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-90px' }}
                        transition={{ duration: 0.35, delay: index * 0.06 }}
                      >
                        <div className="flex items-center justify-between gap-3 text-xs">
                          <p className="text-gray-200">{item.name}</p>
                          <p className="text-gray-500">{item.saving}</p>
                        </div>
                        <div className="mt-1.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.progress}%` }}
                            viewport={{ once: true, margin: '-90px' }}
                            transition={{ duration: 0.5, delay: index * 0.06 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#070A0C]/88 p-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-primary" />
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-primary font-mono">Console de execução</p>
                  </div>
                  <div className="mt-3 space-y-2.5">
                    {liveSignals.map((entry) => (
                      <div key={entry.time} className="rounded-lg border border-white/10 bg-black/35 px-3 py-2.5">
                        <div className="flex items-start gap-2.5">
                          <span className={`mt-1.5 h-2 w-2 rounded-full ${entry.tone}`} />
                          <div className="min-w-0">
                            <p className="font-mono text-[11px] text-gray-500">{entry.time}</p>
                            <p className="text-sm text-gray-200 leading-snug mt-0.5">{entry.event}</p>
                          </div>
                          <span className="ml-auto text-[10px] uppercase tracking-[0.12em] text-gray-500">{entry.impact}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-cyan-primary" />
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-primary font-mono">Governança ativa</p>
                  </div>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    Indicadores de risco, produtividade e SLA sincronizados em um único fluxo de decisão executiva.
                  </p>
                </div>

                <PrimaryCTA href="#contato" className="w-full justify-center mt-1">
                  Agendar diagnóstico estratégico
                </PrimaryCTA>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
