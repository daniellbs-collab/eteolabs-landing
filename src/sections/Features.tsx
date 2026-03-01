'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  Building2,
  Scissors,
  Shield,
  Stethoscope,
  Store,
  TrendingUp,
} from 'lucide-react';
import {
  MetricPill,
  ProgressRing,
  SegmentBars,
  SignalGrid,
  SparklineChart,
  VerticalBars,
} from '@/components/ui/CinematicCharts';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const operationalSeries = [28, 32, 30, 39, 44, 52, 50, 61, 67, 73, 78];
const liquiditySeries = [26, 40, 52, 68, 59, 74, 86];

const segments = [
  { label: 'Vendas', value: 34, color: '#8FD6FF' },
  { label: 'Operação', value: 28, color: '#C2A1FF' },
  { label: 'Suporte', value: 21, color: '#FFAA78' },
  { label: 'Gestão', value: 17, color: '#CFE7DA' },
];

const iconAccent = ['text-sky-300', 'text-violet-300', 'text-amber-300', 'text-emerald-300'];

const segmentCards = [
  {
    icon: Stethoscope,
    title: 'Empresas da área da saúde',
    desc: 'Atendimento, operação e financeiro conectados em uma jornada assistencial previsível.',
  },
  {
    icon: Store,
    title: 'Comércios complexos',
    desc: 'Margem, estoque, sell-out e execução comercial em leitura unificada e acionável.',
  },
  {
    icon: Scissors,
    title: 'Redes de serviços premium',
    desc: 'Recorrência, padrão de atendimento e controle de unidade para escalar com qualidade.',
  },
  {
    icon: Shield,
    title: 'Condomínios e operações sensíveis',
    desc: 'Rastreabilidade e governança com padrão premium para decisões rápidas.',
  },
];

export function Features() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[72vw] h-[420px] mist-orb opacity-40 pointer-events-none" />

      <SectionTitle
        tag="Portfólio vivo"
        title="Gráficos com cor, contexto e leitura instantânea"
        description="Visual elegante não é enfeite: é clareza para decidir rápido e executar melhor."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, ease: EASE_OUT }}
            className="lg:col-span-7"
          >
            <GlassCard variant="interactive" className="h-full p-7 md:p-8 relative overflow-hidden border-white/15">
              <div className="absolute -top-20 -right-12 w-56 h-56 rounded-full bg-cyan-primary/15 blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center mb-5">
                  <BarChart3 className="w-6 h-6 text-cyan-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                  Central de performance operacional
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-2xl">
                  Um painel que consolida métricas comerciais e operacionais para times que precisam de leitura rápida,
                  sem abrir mão de profundidade analítica.
                </p>

                <SparklineChart values={operationalSeries} palette="ocean" label="Crescimento semanal" className="mt-6" />

                <div className="mt-5 grid sm:grid-cols-3 gap-3">
                  <MetricPill title="Eficiência" value="+42%" detail="Ganhos em ciclos de execução" tone="positive" />
                  <MetricPill title="SLA interno" value="98.4%" detail="Cumprimento de processos críticos" tone="info" />
                  <MetricPill title="Decisão" value="-31%" detail="Tempo médio para agir no problema" tone="warning" />
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, delay: 0.06, ease: EASE_OUT }}
            className="lg:col-span-5 grid grid-cols-1 gap-6"
          >
            <ProgressRing
              label="Maturidade de governança"
              value={91}
              subtitle="Processos versionados, rastreados e acompanhados por indicadores executivos."
              className="h-full"
              palette="violet"
            />
            <VerticalBars bars={liquiditySeries} palette="sunset" title="Liquidez por frente" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE_OUT }}
            className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <SegmentBars title="Distribuição de impacto" segments={segments} />
            <SignalGrid title="Mapa de sinais em tempo real" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.16, ease: EASE_OUT }}
            className="lg:col-span-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {segmentCards.map(({ icon: Icon, title, desc }, index) => (
                <GlassCard key={title} variant="interactive" className="p-5 border-white/12">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/20 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${iconAccent[index % iconAccent.length]}`} />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-white">{title}</h4>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">{desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs text-cyan-primary uppercase tracking-wider">
                    <TrendingUp className="w-3 h-3" />
                    Pronto para escalar
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.55, delay: 0.2, ease: EASE_OUT }}
            className="lg:col-span-12"
          >
            <GlassCard className="p-5 border-white/10">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-cyan-primary mt-0.5" />
                <p className="text-sm text-gray-300 leading-relaxed">
                  Também desenhamos arquiteturas sob medida para empresas com processos complexos, integrações
                  legadas e necessidade de governança multiunidade.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
