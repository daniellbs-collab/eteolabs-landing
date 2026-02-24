# Eteo Labs — Brand System Reference

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Glass & Surface System](#glass--surface-system)
5. [Neon & Glow System](#neon--glow-system)
6. [Tailwind Configuration](#tailwind-configuration)

---

## Color System

### Core Palette

```
Background Hierarchy (darkest → lightest):
──────────────────────────────────────────
bg-void:       #030712   — Page background (near-black navy)
bg-deep:       #0A0F1E   — Section alternate background
bg-surface:    #111827   — Card/container backgrounds
bg-elevated:   #1F2937   — Elevated elements, hover states
bg-overlay:    #374151   — Overlays, disabled states

Accent Colors (the neon soul):
──────────────────────────────
cyan-primary:  #00F0FF   — Primary actions, CTAs, links
cyan-glow:     #00F0FF40 — Glow effects (25% opacity)
cyan-soft:     #00F0FF15 — Subtle backgrounds (8% opacity)

magenta-pop:   #FF00E5   — Highlights, badges, urgency
magenta-glow:  #FF00E540 — Glow effects
magenta-soft:  #FF00E515 — Subtle backgrounds

Text Hierarchy:
───────────────
text-primary:  #F9FAFB   — Headlines, primary content (gray-50)
text-secondary:#D1D5DB   — Body text, descriptions (gray-300)
text-muted:    #6B7280   — Captions, labels, metadata (gray-500)
text-accent:   #00F0FF   — Links, highlighted text

Status Colors:
──────────────
success:       #10B981   — Positive states, confirmations
warning:       #F59E0B   — Attention states, alerts
danger:        #EF4444   — Critical states, errors
info:          #3B82F6   — Informational states
```

### Gradient Recipes

```css
/* Hero headline gradient */
.gradient-headline {
  background: linear-gradient(135deg, #00f0ff 0%, #ff00e5 50%, #00f0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: gradient-shift 8s ease infinite;
}

/* Card border gradient */
.gradient-border {
  background: linear-gradient(135deg, #00f0ff20, #ff00e520, #00f0ff20);
}

/* Section divider */
.gradient-divider {
  background: linear-gradient(
    90deg,
    transparent,
    #00f0ff40,
    #ff00e540,
    transparent
  );
  height: 1px;
}

/* Background ambient glow */
.ambient-glow-cyan {
  background: radial-gradient(
    ellipse at 20% 50%,
    #00f0ff08 0%,
    transparent 50%
  );
}
.ambient-glow-magenta {
  background: radial-gradient(
    ellipse at 80% 50%,
    #ff00e508 0%,
    transparent 50%
  );
}
```

---

## Typography

### Font Stack

```
Display / Headlines:  "Outfit", sans-serif     — Weight: 700, 800
                      alt: "Sora", sans-serif

Body / Descriptions:  "Outfit", sans-serif     — Weight: 300, 400, 500
                      alt: "Space Grotesk"

Code / Mono / Tags:   "JetBrains Mono", monospace — Weight: 400, 500
```

### Type Scale

```
Hero Headline:     text-5xl md:text-7xl lg:text-8xl  — font-extrabold, tracking-tighter
Section Title:     text-3xl md:text-5xl lg:text-6xl  — font-bold, tracking-tight
Subsection Title:  text-2xl md:text-3xl              — font-semibold
Card Title:        text-xl md:text-2xl               — font-semibold
Body Large:        text-lg md:text-xl                — font-light, leading-relaxed
Body:              text-base                          — font-normal, leading-relaxed
Caption:           text-sm                            — font-normal, text-muted
Tag / Badge:       text-xs                            — font-mono, uppercase, tracking-widest
```

### Google Fonts Import

```html
<link
  href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
  rel="stylesheet"
/>
```

---

## Spacing & Layout

### Section Spacing

```
Section padding:     py-24 md:py-32 lg:py-40
Section max-width:   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Section gap:         space-y-16 md:space-y-24

Card padding:        p-6 md:p-8
Card gap:            gap-4 md:gap-6
Card border-radius:  rounded-2xl md:rounded-3xl
```

### Grid System

```
Features (bento):    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
Pricing:             grid grid-cols-1 md:grid-cols-3 gap-8
Testimonials:        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
Stats:               grid grid-cols-2 md:grid-cols-4 gap-8
```

---

## Glass & Surface System

### Glassmorphism Tokens

```css
/* Standard glass card */
.glass-card {
  background: rgba(17, 24, 39, 0.6); /* bg-surface at 60% */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1.5rem; /* rounded-3xl */
}

/* Elevated glass (navbar, modals) */
.glass-elevated {
  background: rgba(17, 24, 39, 0.8);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Subtle glass (tags, badges) */
.glass-subtle {
  background: rgba(17, 24, 39, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

/* Interactive glass (hover state) */
.glass-card:hover {
  background: rgba(17, 24, 39, 0.75);
  border-color: rgba(0, 240, 255, 0.15);
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.05);
}
```

### Tailwind Utility Classes

```html
<!-- Glass card -->
<div
  class="bg-gray-900/60 backdrop-blur-xl border border-white/[0.06] rounded-3xl"
>
  <!-- Elevated glass -->
  <div
    class="bg-gray-900/80 backdrop-blur-2xl border border-white/[0.08] rounded-2xl"
  >
    <!-- Interactive glass -->
    <div
      class="bg-gray-900/60 backdrop-blur-xl border border-white/[0.06] rounded-3xl
            hover:bg-gray-900/75 hover:border-cyan-400/15 hover:shadow-[0_0_30px_rgba(0,240,255,0.05)]
            transition-all duration-500"
    ></div>
  </div>
</div>
```

---

## Neon & Glow System

### Glow Effects

```css
/* Primary CTA glow */
.neon-cta {
  box-shadow:
    0 0 15px rgba(0, 240, 255, 0.3),
    0 0 30px rgba(0, 240, 255, 0.15),
    0 0 60px rgba(0, 240, 255, 0.05);
}

/* Accent badge glow */
.neon-badge {
  box-shadow:
    0 0 10px rgba(255, 0, 229, 0.3),
    0 0 20px rgba(255, 0, 229, 0.15);
}

/* Text glow */
.text-glow-cyan {
  text-shadow:
    0 0 10px rgba(0, 240, 255, 0.5),
    0 0 20px rgba(0, 240, 255, 0.3);
}

/* Subtle pulse animation for CTAs */
@keyframes neon-pulse {
  0%,
  100% {
    box-shadow:
      0 0 15px rgba(0, 240, 255, 0.3),
      0 0 30px rgba(0, 240, 255, 0.15);
  }
  50% {
    box-shadow:
      0 0 20px rgba(0, 240, 255, 0.5),
      0 0 40px rgba(0, 240, 255, 0.25);
  }
}
```

### Neon Line / Accent

```css
/* Horizontal neon line accent */
.neon-line {
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    #00f0ff,
    #ff00e5,
    transparent
  );
  box-shadow: 0 0 8px rgba(0, 240, 255, 0.4);
}

/* Neon dot indicator */
.neon-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00f0ff;
  box-shadow:
    0 0 8px #00f0ff,
    0 0 16px rgba(0, 240, 255, 0.4);
}
```

---

## Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#030712',
        deep: '#0A0F1E',
        surface: '#111827',
        elevated: '#1F2937',
        cyan: {
          primary: '#00F0FF',
          glow: 'rgba(0, 240, 255, 0.25)',
          soft: 'rgba(0, 240, 255, 0.08)',
        },
        magenta: {
          pop: '#FF00E5',
          glow: 'rgba(255, 0, 229, 0.25)',
          soft: 'rgba(255, 0, 229, 0.08)',
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'neon-pulse': 'neon-pulse 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'glow-breathe': 'glow-breathe 4s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '200% center' },
        },
        'neon-pulse': {
          '0%, 100%': {
            boxShadow:
              '0 0 15px rgba(0,240,255,0.3), 0 0 30px rgba(0,240,255,0.15)',
          },
          '50%': {
            boxShadow:
              '0 0 20px rgba(0,240,255,0.5), 0 0 40px rgba(0,240,255,0.25)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-breathe': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-40': '40px 40px',
      },
    },
  },
  plugins: [],
};

export default config;
```

### Global CSS Additions

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-void text-gray-50 font-body antialiased;
  }

  ::selection {
    @apply bg-cyan-primary/20 text-cyan-primary;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #030712;
  }
  ::-webkit-scrollbar-thumb {
    background: #1f2937;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #374151;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-clip-text text-transparent;
    background-image: linear-gradient(
      135deg,
      #00f0ff 0%,
      #ff00e5 50%,
      #00f0ff 100%
    );
    background-size: 200% auto;
    animation: gradient-shift 8s ease infinite;
  }

  .glass-card {
    @apply bg-gray-900/60 backdrop-blur-xl border border-white/[0.06] rounded-3xl;
  }

  .glass-card-interactive {
    @apply glass-card hover:bg-gray-900/75 hover:border-cyan-400/15 transition-all duration-500;
  }

  .neon-glow {
    box-shadow:
      0 0 15px rgba(0, 240, 255, 0.3),
      0 0 30px rgba(0, 240, 255, 0.15),
      0 0 60px rgba(0, 240, 255, 0.05);
  }
}
```
