'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { PrimaryCTA } from '@/components/ui/Buttons';
import { SectionTitle } from '@/components/ui/SectionTitle';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const faqs = [
  {
    q: 'Em quanto tempo conseguimos perceber resultado?',
    a: 'Na maioria dos projetos, os primeiros ganhos aparecem nas primeiras semanas com redução de retrabalho e aumento de previsibilidade operacional.',
  },
  {
    q: 'A Eteo atende apenas um tipo de negócio?',
    a: 'Não. Atuamos com portfólio múltiplo: clínicas, varejo, barbearias, operações de condomínio e projetos sob medida para empresas em expansão.',
  },
  {
    q: 'Vocês substituem nossos sistemas atuais?',
    a: 'Depende da estratégia ideal para o seu cenário. Podemos integrar o que já existe ou redesenhar a arquitetura para simplificar sua operação.',
  },
  {
    q: 'Como funciona o suporte após a entrega?',
    a: 'Entregamos com acompanhamento de performance, rituais de evolução e suporte técnico para garantir que o resultado se sustente no tempo.',
  },
];

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => setOpen((value) => !value)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-cyan-400 transition-colors duration-300 group"
      >
        <span className="text-lg font-medium text-gray-200 group-hover:text-cyan-400">{question}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          <Plus className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: EASE_OUT }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-400 leading-relaxed text-base">{answer}</p>
      </motion.div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        tag="Objeções"
        title="Perguntas antes de fechar"
        description="Transparência total para você decidir com segurança e velocidade."
      />

      <div className="space-y-2">
        {faqs.map((faq) => (
          <AccordionItem key={faq.q} question={faq.q} answer={faq.a} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-400 mb-6">Quer validar seu cenário com nosso time estratégico?</p>
        <PrimaryCTA href="#contato">Falar com consultor</PrimaryCTA>
      </div>
    </section>
  );
}
