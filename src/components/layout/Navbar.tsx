'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

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
  const [activeHref, setActiveHref] = useState(navItems[0].href);
  const pathname = usePathname();
  const isNexusPage = pathname.startsWith('/nexus');
  const { scrollY } = useScroll();

  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace('#', '')),
    []
  );

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    if (isNexusPage) return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        threshold: [0.2, 0.4, 0.7],
        rootMargin: '-36% 0px -52% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isNexusPage, sectionIds]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: EASE_OUT }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#0F1316]/78 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_15px_50px_rgba(0,0,0,0.45)]'
          : 'bg-transparent'
      )}
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

          <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-black/35 backdrop-blur-md px-2 py-1">
            {navItems.map((item) => {
              const isActive = !isNexusPage && activeHref === item.href;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-1.5 text-sm rounded-full transition-colors duration-300"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                      transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                    />
                  )}
                  <span className={cn('relative', isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200')}>
                    {item.label}
                  </span>
                </a>
              );
            })}
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
              className="px-5 py-2.5 rounded-xl bg-cyan-primary/15 text-cyan-primary text-sm font-semibold border border-cyan-primary/30 hover:bg-cyan-primary/22 hover:shadow-[0_0_20px_rgba(211,229,220,0.2)] transition-all duration-300"
            >
              {isNexusPage ? 'Solicitar demo' : 'Ir para ETEO NEXUS'}
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}