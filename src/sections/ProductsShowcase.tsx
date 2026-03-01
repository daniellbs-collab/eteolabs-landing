'use client';

import { motion } from 'framer-motion';
import { Cpu, Stethoscope, Building2, Scissors, Zap } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const products = [
    {
        id: 'dashboards',
        title: 'Dashboards Analíticos',
        subtitle: 'Visibilidade total em tempo real',
        desc: 'Integramos todas as fontes de dados da sua empresa em painéis visuais de alto impacto. Identifique gargalos, preveja tendências e tome decisões baseadas em fatos, não intuições.',
        icon: Cpu,
        color: 'text-cyan-primary',
        bgLight: 'bg-cyan-primary/10',
        borderColor: 'border-cyan-primary/30',
        tags: ['BI & Analytics', 'Integração ERP', 'Métricas C-Level'],
        colSpan: 'lg:col-span-8',
    },
    {
        id: 'health',
        title: 'Clínicas & Healthtechs',
        subtitle: 'Jornada do paciente impecável',
        desc: 'Sistemas completos para gestão de pátio, prontuários, faturamento e atendimento. Reduza faltas com IA e decole a satisfação dos pacientes.',
        icon: Stethoscope,
        color: 'text-magenta-pop',
        bgLight: 'bg-magenta-pop/10',
        borderColor: 'border-magenta-pop/30',
        tags: ['Prontuário Digital', 'Telemedicina', 'Faturamento TUSS'],
        colSpan: 'lg:col-span-4',
    },
    {
        id: 'ecommerce',
        title: 'E-commerce & Vendas Complexas',
        subtitle: 'Máquinas de conversão B2B e B2C',
        desc: 'Plataformas de venda robustas desenhadas para alta taxa de conversão. Gerencie catálogos de milhares de produtos com performance instantânea.',
        icon: Building2,
        color: 'text-emerald-400',
        bgLight: 'bg-emerald-400/10',
        borderColor: 'border-emerald-400/30',
        tags: ['Alta Performance', 'Integração Logística', 'Carrinho Otimizado'],
        colSpan: 'lg:col-span-5',
    },
    {
        id: 'barber',
        title: 'Habana Barber OS',
        subtitle: 'O sistema premium para barbearias',
        desc: 'Muito mais que agendamento. Controle completo de comissionamento, marketing automatizado via WhatsApp e recorrência de clientes.',
        icon: Scissors,
        color: 'text-violet-400',
        bgLight: 'bg-violet-400/10',
        borderColor: 'border-violet-400/30',
        tags: ['Agendamento 3D', 'Marketing IA', 'Gestão de Time'],
        colSpan: 'lg:col-span-7',
    }
];

export function ProductsShowcase() {
    return (
        <section id="portfolio" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] mist-orb opacity-30 pointer-events-none" />

            <SectionTitle
                tag="Ecossistemas Completos"
                title="Um portfólio para dominar seu mercado"
                description="Não construímos apenas sites. Desenvolvemos o motor tecnológico que vai colocar sua empresa muito à frente da concorrência."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {products.map((product, idx) => {
                        const Icon = product.icon;
                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE_OUT }}
                                className={product.colSpan}
                            >
                                <GlassCard variant="interactive" className={`h-full p-8 relative overflow-hidden border ${product.borderColor} group`}>
                                    {/* Glowing background blob built dynamically */}
                                    <div className={`absolute -top-32 -right-32 w-64 h-64 rounded-full ${product.bgLight} blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex items-start justify-between">
                                            <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center mb-6`}>
                                                <Icon className={`w-7 h-7 ${product.color}`} />
                                            </div>
                                            <div className="flex gap-2 text-xs font-mono text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <Zap className="w-4 h-4 text-cyan-primary" /> Ativo
                                            </div>
                                        </div>

                                        <p className={`text-sm tracking-widest uppercase mb-2 ${product.color} font-semibold`}>
                                            {product.subtitle}
                                        </p>
                                        <h3 className="text-3xl font-display font-bold text-white mb-4">
                                            {product.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
                                            {product.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {product.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
