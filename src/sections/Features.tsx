'use client';

import { motion } from 'framer-motion';
import { BarChart3, Building2, Scissors, Shield, Stethoscope, Store } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const portfolio = [
  {
    icon: BarChart3,
    title: 'Dashboards Inteligentes',
    desc: 'Visao de ponta a ponta da operacao com metas, alertas e analise em tempo real.',
    tone: 'from-cyan-primary/15 to-cyan-primary/0',
    size: 'md:col-span-2',
  },
  {
    icon: Stethoscope,
    title: 'Clinicas e Consultorios',
    desc: 'Agenda, atendimento e financeiro em um fluxo claro para gestao medica moderna.',
    tone: 'from-magenta-pop/15 to-magenta-pop/0',
    size: 'md:col-span-1',
  },
  {
    icon: Store,
    title: 'Varejo de Notebooks',
    desc: 'Gestao comercial e pos-venda com controle de estoque, margem e performance de equipe.',
    tone: 'from-cyan-primary/15 to-magenta-pop/0',
    size: 'md:col-span-1',
  },
  {
    icon: Scissors,
    title: 'Barbearias de Alta Performance',
    desc: 'Agenda inteligente, recorrencia e previsibilidade de caixa para operar com escala.',
    tone: 'from-magenta-pop/15 to-cyan-primary/0',
    size: 'md:col-span-1',
  },
  {
    icon: Shield,
    title: 'Condominios e Controle Operacional',
    desc: 'Fluxo seguro para acesso, encomendas e rastreabilidade com padrao premium.',
    tone: 'from-cyan-primary/15 to-magenta-pop/0',
    size: 'md:col-span-1',
  },
  {
    icon: Building2,
    title: 'Projetos Sob Medida para Empresas',
    desc: 'Arquitetura personalizada para processos especificos, integracao e governanca executiva.',
    tone: 'from-cyan-primary/15 to-cyan-primary/0',
    size: 'md:col-span-2',
  },
];

export function Features() {
  return (
    <section id="portfolio" className="py-24 relative">
      <SectionTitle
        tag="Portfolio"
        title="Projetos que elevam o nivel da operacao"
        description="Cada entrega nasce de uma estrategia comercial, nao de um template generico."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: EASE_OUT }}
              className={item.size}
            >
              <GlassCard variant="interactive" className="h-full p-7 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.tone} opacity-70 pointer-events-none`} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-cyan-primary/10 border border-cyan-primary/20 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-cyan-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}