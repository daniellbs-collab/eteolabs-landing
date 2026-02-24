import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Zap } from 'lucide-react';

export default function NexusPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-40 opacity-20 pointer-events-none" />
      <div className="absolute -top-20 right-0 w-[540px] h-[540px] rounded-full bg-cyan-primary/10 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-[540px] h-[540px] rounded-full bg-magenta-pop/10 blur-[130px] pointer-events-none" />

      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <a
          href="https://eteolabs.com.br"
          className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para ETEO LABS
        </a>

        <div className="mt-8 max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-primary/10 border border-cyan-primary/20 text-cyan-primary text-xs font-mono uppercase tracking-widest">
            ETEO NEXUS
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-display font-extrabold tracking-tighter leading-[0.92]">
            Gestao inteligente de encomendas e operacao condominial.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Rastreabilidade completa, automacao de rotinas e visibilidade operacional em tempo real.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://eteolabs.com.br#contato"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-cyan-primary text-gray-900 font-semibold text-lg shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-shadow duration-300"
          >
            Solicitar demo do NEXUS
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="https://eteolabs.com.br"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 text-white font-semibold text-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            Conhecer a ETEO LABS
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-card p-5">
            <ShieldCheck className="w-5 h-5 text-cyan-primary" />
            <h3 className="mt-3 text-lg font-bold">Rastreabilidade total</h3>
            <p className="mt-2 text-sm text-gray-300">Fluxo completo do recebimento ate a entrega com auditoria.</p>
          </div>
          <div className="glass-card p-5">
            <Zap className="w-5 h-5 text-cyan-primary" />
            <h3 className="mt-3 text-lg font-bold">Operacao automatizada</h3>
            <p className="mt-2 text-sm text-gray-300">Reduza tarefas manuais e aumente velocidade da equipe.</p>
          </div>
          <div className="glass-card p-5">
            <Sparkles className="w-5 h-5 text-cyan-primary" />
            <h3 className="mt-3 text-lg font-bold">Experiencia premium</h3>
            <p className="mt-2 text-sm text-gray-300">Comunicacao clara para moradores e gestao profissional.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
