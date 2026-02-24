'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Loader2, Mail } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Falha ao enviar mensagem');
      }

      setStatus('success');
      setFormState({ name: '', email: '', company: '', message: '' });
    } catch (error: unknown) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Erro inesperado');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] bg-cyan-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <SectionTitle
        tag="Fechamento"
        title="Vamos desenhar sua transformacao"
        description="Compartilhe seu cenario. Em seguida montamos um plano de evolucao com metas, prazos e impacto esperado."
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <GlassCard className="p-8 md:p-12">
          {status === 'success' ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Mensagem recebida</h3>
              <p className="text-gray-400">Nosso time entra em contato para estruturar o proximo passo do seu projeto.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 text-cyan-primary hover:text-cyan-300 transition-colors text-sm font-medium"
              >
                Enviar nova mensagem
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-950/50 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-primary/50 focus:ring-1 focus:ring-cyan-primary/50 transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-300">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-950/50 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-primary/50 focus:ring-1 focus:ring-cyan-primary/50 transition-all"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email corporativo
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-950/50 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-primary/50 focus:ring-1 focus:ring-cyan-primary/50 transition-all"
                    placeholder="voce@empresa.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Descreva o desafio
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-950/50 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-primary/50 focus:ring-1 focus:ring-cyan-primary/50 transition-all resize-none"
                  placeholder="Qual gargalo operacional voce quer resolver primeiro?"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-950/30 p-3 rounded-lg border border-red-500/20">
                  <AlertCircle className="w-4 h-4" />
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full group inline-flex justify-center items-center gap-2 px-8 py-4 rounded-2xl bg-cyan-primary text-gray-900 font-semibold text-lg shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Solicitar diagnostico estrategico'
                )}
              </button>
            </form>
          )}
        </GlassCard>
      </div>
    </section>
  );
}