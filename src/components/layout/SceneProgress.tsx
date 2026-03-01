'use client';

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

const scenes = [
  { id: 'hero', label: 'Abertura' },
  { id: 'metodo', label: 'Manifesto' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'arquitetura', label: 'Arquitetura' },
  { id: 'depoimentos', label: 'Prova' },
  { id: 'planos', label: 'Planos' },
  { id: 'contato', label: 'Fechamento' },
];

export function SceneProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const railOpacityRaw = useTransform(scrollYProgress, [0, 0.04, 0.1], [0, 0, 1]);
  const railOpacity = useSpring(railOpacityRaw, {
    stiffness: 220,
    damping: 34,
    mass: 0.25,
  });
  const lineScaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.25,
  });
  const [activeId, setActiveId] = useState('hero');

  const sceneIds = useMemo(() => scenes.map((scene) => scene.id), []);

  useEffect(() => {
    const targets = sceneIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-38% 0px -44% 0px',
        threshold: [0.15, 0.35, 0.6, 0.9],
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [sceneIds]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[70] origin-left bg-gradient-to-r from-[#8FA398] via-[#D3E5DC] to-[#F5FAF7]"
        style={{ scaleX: lineScaleX }}
      />

      <motion.div
        style={{ opacity: railOpacity }}
        className={cn(
          'fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md p-3',
          reduceMotion && 'hidden'
        )}
      >
        {scenes.map((scene) => {
          const isActive = scene.id === activeId;
          return (
            <a
              key={scene.id}
              href={`#${scene.id}`}
              className="group flex items-center gap-3 px-2 py-1 rounded-lg transition-colors"
            >
              <span
                className={cn(
                  'h-2.5 w-2.5 rounded-full border transition-all duration-300',
                  isActive
                    ? 'bg-cyan-primary border-cyan-primary shadow-[0_0_12px_rgba(211,229,220,0.8)]'
                    : 'bg-white/10 border-white/20 group-hover:bg-white/25'
                )}
              />
              <span
                className={cn(
                  'text-[11px] tracking-[0.14em] uppercase transition-colors',
                  isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                )}
              >
                {scene.label}
              </span>
            </a>
          );
        })}
      </motion.div>
    </>
  );
}
