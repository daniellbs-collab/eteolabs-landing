'use client';

import { Check } from 'lucide-react';
import { PrimaryCTA, SecondaryCTA } from '@/components/ui/Buttons';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Sprint de Diagnóstico',
    price: 'Projeto enxuto',
    desc: 'Para empresas que querem clareza rápida antes da implantação completa.',
    features: ['Mapeamento de gargalos', 'Roadmap de ganhos', 'Protótipo visual da solução'],
    cta: 'Iniciar diagnóstico',
    primary: false,
  },
  {
    name: 'Transformação Operacional',
    price: 'Plano recomendado',
    desc: 'Entrega ponta a ponta com foco em governança, dados e escala comercial.',
    features: ['Arquitetura completa', 'Implantação assistida', 'Dashboards executivos', 'Rituais de performance'],
    cta: 'Quero transformar minha operação',
    primary: true,
  },
  {
    name: 'Enterprise Contínuo',
    price: 'Sob medida',
    desc: 'Para grupos com operações complexas e múltiplas unidades.',
    features: ['Squad dedicado', 'Integrações avançadas', 'SLA estratégico', 'Evolução contínua da plataforma'],
    cta: 'Falar com especialistas',
    primary: false,
  },
];

export function Pricing() {
  return (
    <section id="planos" className="py-24 relative">
      <SectionTitle
        tag="Comercial"
        title="Modelos de contratação orientados a resultado"
        description="Você escolhe o nível de aceleração. Nós cuidamos da engenharia para transformar gestão em vantagem competitiva."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div key={plan.name} className={cn('relative', plan.primary ? 'md:-mt-4 md:mb-4 z-10' : '')}>
              <GlassCard
                variant={plan.primary ? 'elevated' : 'standard'}
                className={cn(
                  'p-8 flex flex-col h-full',
                  plan.primary ? 'border-cyan-primary/30 shadow-[0_0_40px_rgba(0,240,255,0.1)]' : ''
                )}
              >
                {plan.primary && (
                  <div className="mb-5 inline-flex items-center px-4 py-1 rounded-full border border-cyan-primary/30 bg-cyan-primary/10 text-cyan-primary text-xs uppercase tracking-widest font-mono">
                    Maior potencial de ROI
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-lg text-cyan-primary mb-3">{plan.price}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{plan.desc}</p>
                </div>

                <ul className="space-y-3 my-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-200">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-cyan-primary/10 border border-cyan-primary/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-cyan-primary" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.primary ? (
                  <PrimaryCTA href="#contato" className="w-full justify-center">
                    {plan.cta}
                  </PrimaryCTA>
                ) : (
                  <SecondaryCTA href="#contato" className="w-full justify-center">
                    {plan.cta}
                  </SecondaryCTA>
                )}
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
