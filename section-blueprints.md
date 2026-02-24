# Section Blueprints — Cinematic Landing Page Patterns

## Table of Contents

1. [Navbar](#scene-0--navbar)
2. [Hero](#scene-1--hero)
3. [Social Proof Bar](#scene-2--social-proof)
4. [Pain → Solution](#scene-3--pain--solution)
5. [Features Showcase](#scene-4--features-showcase)
6. [Product Demo](#scene-5--product-demo)
7. [Testimonials](#scene-6--testimonials)
8. [Pricing](#scene-7--pricing)
9. [FAQ](#scene-8--faq)
10. [Final CTA](#scene-9--final-cta)
11. [Footer](#scene-10--footer)

---

## Scene 0 — Navbar

### Purpose

Navigation + brand presence. Should feel like a HUD overlay, not a traditional nav.

### Pattern

```tsx
// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${
          scrolled
            ? 'bg-gray-900/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl'
            : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-magenta-500
                          flex items-center justify-center"
            >
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="font-display font-bold text-lg">
              ETEO <span className="text-gradient">NEXUS</span>
            </span>
          </div>

          {/* Nav Links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {['Recursos', 'Demonstração', 'Planos', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden sm:block text-sm text-gray-300 hover:text-white transition-colors"
            >
              Entrar
            </a>
            <a
              href="#planos"
              className="px-5 py-2.5 rounded-xl bg-cyan-primary/10 text-cyan-primary text-sm font-semibold
                        border border-cyan-primary/20 hover:bg-cyan-primary/20
                        hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300"
            >
              Começar Agora
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
```

### Key Rules

- Always `fixed` with `z-50`
- Glass effect only after scroll (> 50px)
- Logo uses gradient accent
- CTA button uses neon border, not solid fill
- Smooth entrance animation from top

---

## Scene 1 — Hero

### Purpose

Instant emotional impact. The visitor decides in 3 seconds whether to stay.

### Structure

```
┌────────────────────────────────────────────┐
│     [3D Scene fills entire background]      │
│                                            │
│         [Badge / Tag Line]                  │
│    [Massive Gradient Headline]              │
│    [Subtitle with typing effect]            │
│                                            │
│    [Primary CTA]  [Secondary CTA]          │
│                                            │
│    [Scroll indicator animation]            │
└────────────────────────────────────────────┘
```

### Pattern

```tsx
// sections/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { HeroScene } from '@/components/3d/HeroScene';
import { ArrowRight, Play } from 'lucide-react';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <HeroScene />
        </Canvas>
      </div>

      {/* Ambient Glow Overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-pop/5 rounded-full blur-[120px]" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                         bg-cyan-primary/10 border border-cyan-primary/20
                         text-cyan-primary text-xs font-mono uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-primary animate-pulse" />
            Novo — Gestão inteligente com IA
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter leading-[0.9]"
        >
          Gestão de
          <br />
          encomendas no
          <br />
          <span className="text-gradient">piloto automático</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed"
        >
          O sistema que transforma o caos de encomendas do seu condomínio em uma
          operação precisa, rastreável e 100% digital.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#planos"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl
                      bg-cyan-primary text-gray-900 font-semibold text-lg
                      hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]
                      transition-all duration-300"
          >
            Começar Gratuitamente
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#demo"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl
                      bg-white/5 text-white font-semibold text-lg
                      border border-white/10 hover:border-white/20
                      hover:bg-white/10 transition-all duration-300"
          >
            <Play className="w-5 h-5" />
            Ver Demonstração
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
```

### Key Rules

- 3D scene is ALWAYS present in the background (with Canvas)
- Staggered reveal animation with `delayChildren`
- Headline uses `text-gradient` on the key phrase
- Two CTAs: primary (solid cyan) + secondary (ghost)
- Badge at top with pulsing dot
- Ambient glow blobs for depth
- Scroll indicator at bottom

---

## Scene 2 — Social Proof

### Purpose

Immediate trust. Numbers and logos that make the visitor feel safe.

### Pattern

A horizontal strip with animated counters and logo cloud.

```tsx
// sections/SocialProof.tsx
const stats = [
  { value: 500, suffix: '+', label: 'Condomínios Atendidos' },
  { value: 50000, suffix: '+', label: 'Encomendas Gerenciadas' },
  { value: 99.9, suffix: '%', label: 'Uptime Garantido' },
  { value: 4.9, suffix: '/5', label: 'Avaliação dos Clientes' },
];
```

Use `useInView` from framer-motion to trigger counter animations.
Each number counts up from 0 to target over 2 seconds.
Logo cloud uses infinite horizontal scroll (CSS marquee or framer-motion).

---

## Scene 3 — Pain → Solution

### Purpose

Story arc. Show the problem dramatically, then reveal the solution.

### Pattern

Split layout: LEFT shows the "before" (chaos, manual processes, lost packages),
RIGHT shows the "after" (organized, digital, automated). Use a visual
transition — a gradient line or morphing animation that divides the two halves.

The pain side uses red/orange tints. The solution side uses cyan glow.
On scroll, the pain side fades/slides out and the solution side expands.

```
Before scroll:
┌──────────────┬──────────────┐
│   ❌ PAIN     │  ✅ SOLUTION │
│   (red tint)  │  (cyan glow) │
│   opacity: 1  │  opacity: 0.5│
└──────────────┴──────────────┘

After scroll:
┌──────────────────────────────┐
│         ✅ SOLUTION          │
│         (full cyan glow)     │
│         (expanded)           │
└──────────────────────────────┘
```

---

## Scene 4 — Features Showcase

### Purpose

Demonstrate value. Each feature is a miniature wow moment.

### Pattern: Bento Grid

```
┌──────────────┬──────────┬──────────┐
│              │          │          │
│  FEATURE 1   │ FEAT. 2  │ FEAT. 3  │
│  (2 cols)    │ (1 col)  │ (1 col)  │
│              │          │          │
├──────────┬───┴──────────┴──────────┤
│          │                         │
│ FEAT. 4  │      FEATURE 5          │
│ (1 col)  │      (2 cols)           │
│          │                         │
└──────────┴─────────────────────────┘
```

Each card is a `glass-card-interactive` with:

- Icon (Lucide) with cyan glow background
- Title (font-semibold)
- Description (text-gray-400)
- On hover: border glows cyan, subtle scale(1.02), inner glow appears

For the two "featured" cards (spanning 2 cols), include a small animated
illustration or a lottie/SVG animation inside the card.

---

## Scene 5 — Product Demo

### Purpose

Show the actual product. The "believe it when I see it" moment.

### Pattern

A large browser mockup frame with the actual product UI inside.
Floating UI elements (cards, notifications, badges) animate around
the mockup with parallax on mouse move.

```tsx
// The browser frame
<div className="relative mx-auto max-w-5xl">
  {/* Browser chrome */}
  <div
    className="rounded-t-2xl bg-gray-800/80 backdrop-blur-xl border border-white/[0.06]
                  px-4 py-3 flex items-center gap-2"
  >
    <div className="flex gap-1.5">
      <div className="w-3 h-3 rounded-full bg-red-500/60" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
      <div className="w-3 h-3 rounded-full bg-green-500/60" />
    </div>
    <div className="ml-4 flex-1 bg-gray-900/60 rounded-lg px-3 py-1 text-xs text-gray-500 font-mono">
      nexus.eteolabs.com.br
    </div>
  </div>

  {/* Screenshot / animated UI */}
  <div className="rounded-b-2xl border border-t-0 border-white/[0.06] overflow-hidden">
    <img
      src="/demo-screenshot.png"
      alt="ETEO NEXUS Dashboard"
      className="w-full"
    />
  </div>

  {/* Floating elements */}
  <motion.div
    className="absolute -top-6 -right-6 glass-card p-4"
    style={{ y: mouseY * 0.02 }}
  >
    {/* Notification card */}
  </motion.div>
</div>
```

---

## Scene 6 — Testimonials

### Purpose

Deep social proof. Real people, real results.

### Pattern

Carousel or staggered grid of glass cards, each containing:

- Profile photo (rounded-full, border with gradient)
- Name + role + company
- Star rating (5 stars in yellow)
- Quote text
- Result metric (e.g., "Reduziu 70% no tempo de entrega")

Carousel auto-scrolls, pauses on hover. Each card has a subtle
parallax tilt on hover using `framer-motion`'s `useMotionValue`.

---

## Scene 7 — Pricing

### Purpose

Conversion point. Make the decision feel easy.

### Pattern

Three glass cards in a row. The middle one (recommended) is elevated
and has a glowing border + "Mais Popular" badge.

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   BÁSICO     │  │ PROFISSIONAL│  │  ENTERPRISE  │
│              │  │  ⭐ Popular  │  │              │
│  R$ XX/mês   │  │  R$ XX/mês  │  │  Sob consulta│
│              │  │  (glow)     │  │              │
│  [features]  │  │  [features]  │  │  [features]  │
│              │  │              │  │              │
│  [CTA ghost] │  │  [CTA neon] │  │  [CTA ghost] │
└─────────────┘  └─────────────┘  └─────────────┘
```

The recommended card:

- Is scaled up: `scale-105`
- Has neon border: `border-cyan-primary/30`
- Has glow shadow: `shadow-[0_0_40px_rgba(0,240,255,0.1)]`
- Badge pulses with `animate-neon-pulse`

Feature comparison uses checkmarks (cyan) and dashes (gray-600).

---

## Scene 8 — FAQ

### Purpose

Handle objections. Remove friction.

### Pattern

Accordion with smooth height animations. Group questions by category.
Each question expands with a smooth `height: auto` animation.
The expand icon rotates 45° to become an ×.

After the last FAQ item, add a small CTA: "Ainda tem dúvidas? Fale conosco"

---

## Scene 9 — Final CTA

### Purpose

Last chance to convert. Maximum emotional impact.

### Pattern

Full-width section with:

- Subtle 3D background (particles or geometric shapes)
- Large, bold headline
- Single CTA button (neon, with pulse animation)
- Optional: countdown timer for limited offer

```tsx
<section className="relative py-32 md:py-40 overflow-hidden">
  {/* Background 3D scene or particle field */}
  <div className="absolute inset-0 z-0">
    <Canvas>
      <ParticleField />
    </Canvas>
  </div>

  {/* Ambient glows */}
  <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-cyan-primary/5 rounded-full blur-[150px]" />
  <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-magenta-pop/5 rounded-full blur-[150px]" />

  <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
    <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
      Pronto para transformar a<br />
      <span className="text-gradient">gestão do seu condomínio?</span>
    </h2>
    <p className="mt-6 text-xl text-gray-400">
      Junte-se a mais de 500 condomínios que já operam no piloto automático.
    </p>
    <a
      href="#"
      className="mt-10 inline-flex items-center gap-2 px-10 py-5 rounded-2xl
                          bg-cyan-primary text-gray-900 font-bold text-xl
                          animate-neon-pulse hover:scale-105 transition-transform duration-300"
    >
      Começar Agora — É Grátis
      <ArrowRight className="w-6 h-6" />
    </a>
  </div>
</section>
```

---

## Scene 10 — Footer

### Purpose

Professional closure. Legal, links, brand reinforcement.

### Pattern

Minimal. Dark background slightly lighter than page (bg-deep).
Four columns: Brand, Product, Company, Legal.
Social links with hover glow effects.
Bottom bar with copyright and Eteo Labs branding.
