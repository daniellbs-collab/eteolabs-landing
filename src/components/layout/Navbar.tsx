'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const navItems = [
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Método', href: '#metodo' },
  { label: 'Arquitetura', href: '#arquitetura' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isNexusPage = pathname.startsWith('/nexus');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: EASE_OUT }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-900/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/eteo-labs-logo.png"
              alt="Eteo Labs"
              width={282}
              height={223}
              priority
              className="h-10 w-auto object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {isNexusPage ? (
              <a
                href="https://eteolabs.com.br"
                className="hidden sm:block text-sm text-gray-300 hover:text-white transition-colors"
              >
                Voltar para ETEO LABS
              </a>
            ) : (
              <a href="#contato" className="hidden sm:block text-sm text-gray-300 hover:text-white transition-colors">
                Diagnóstico
              </a>
            )}
            <a
              href={isNexusPage ? 'https://eteolabs.com.br#contato' : 'https://nexus.eteolabs.com.br'}
              className="px-5 py-2.5 rounded-xl bg-cyan-primary/10 text-cyan-primary text-sm font-semibold border border-cyan-primary/20 hover:bg-cyan-primary/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300"
            >
              {isNexusPage ? 'Solicitar demo' : 'Ir para ETEO NEXUS'}
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
