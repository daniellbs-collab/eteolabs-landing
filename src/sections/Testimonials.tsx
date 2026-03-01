'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';

const testimonials = [
  {
    name: 'Carlos Oliveira',
    role: 'Síndico profissional',
    quote: 'Saímos do caos de encomendas para rastreabilidade total em semanas. A equipe virou referência no condomínio.',
    rating: 5,
  },
  {
    name: 'Fernanda Lima',
    role: 'Gestora de operação em saúde',
    quote: 'A nova arquitetura de agenda e atendimento aumentou nossa produtividade sem aumentar equipe.',
    rating: 5,
  },
  {
    name: 'Rafael Tavares',
    role: 'Diretor de comércio complexo multicanal',
    quote: 'Com dashboards em tempo real, passamos a corrigir margem e estoque antes do problema virar prejuízo.',
    rating: 5,
  },
  {
    name: 'Bruno Mendes',
    role: 'CEO de rede de serviços premium',
    quote: 'Finalmente temos previsibilidade de agenda e recorrência. O sistema sustenta nosso crescimento.',
    rating: 5,
  },
];

export function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      <SectionTitle
        tag="Prova social"
        title="Resultados que sustentam o discurso"
        description="Empresas de segmentos diferentes validando o mesmo princípio: transformação real de gestão."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden" ref={carouselRef}>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} whileTap={{ cursor: 'grabbing' }} className="flex gap-6 cursor-grab active:cursor-grabbing pb-8">
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              className="min-w-[300px] md:min-w-[410px]"
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, index) => (
                      <Star key={`${item.name}-${index}`} className="w-4 h-4 text-cyan-primary fill-cyan-primary" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-cyan-primary/20 mb-4" />
                  <p className="text-gray-300 italic mb-6 leading-relaxed">&quot;{item.quote}&quot;</p>
                </div>
                <div className="mt-auto border-t border-white/10 pt-4">
                  <p className="text-white font-bold">{item.name}</p>
                  <p className="text-xs text-cyan-primary uppercase tracking-wider mt-1">{item.role}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
