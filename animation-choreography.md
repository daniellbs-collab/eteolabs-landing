# Animation Choreography — Motion Design System

## Table of Contents

1. [Core Easing](#core-easing)
2. [Scroll-Triggered Reveals](#scroll-triggered-reveals)
3. [Stagger Patterns](#stagger-patterns)
4. [Micro-Interactions](#micro-interactions)
5. [Page Transitions](#page-transitions)
6. [Performance Rules](#performance-rules)

---

## Core Easing

Every animation in the Eteo landing page system uses one of these timing curves:

```typescript
// Framer Motion easing presets
const EASE = {
  // Cinematic entrance — slow start, smooth finish
  cinematic: [0.22, 1, 0.36, 1],

  // Elastic bounce — for playful elements (badges, notifications)
  elastic: [0.68, -0.55, 0.265, 1.55],

  // Smooth decel — for exits and collapses
  smooth: [0.25, 0.46, 0.45, 0.94],

  // Snappy — for micro-interactions (buttons, toggles)
  snappy: [0.4, 0, 0.2, 1],

  // Dramatic — for hero entrance, key moments
  dramatic: [0.16, 1, 0.3, 1],
};
```

### Duration Guidelines

| Element Type       | Duration  | Easing                 |
| ------------------ | --------- | ---------------------- |
| Hero entrance      | 0.8–1.2s  | dramatic               |
| Section reveal     | 0.6–0.8s  | cinematic              |
| Card entrance      | 0.5–0.7s  | cinematic              |
| Button hover       | 0.2–0.3s  | snappy                 |
| Tooltip / popover  | 0.15–0.2s | snappy                 |
| Page transition    | 0.4–0.6s  | smooth                 |
| Counter animation  | 1.5–2.0s  | cinematic              |
| 3D object rotation | 20–40s    | linear (continuous)    |
| Floating animation | 4–8s      | easeInOut (continuous) |

---

## Scroll-Triggered Reveals

### Base Reveal Component

Use this as the foundation for all scroll-triggered animations:

```tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const directionMap = {
  up: { hidden: { y: 40 }, visible: { y: 0 } },
  down: { hidden: { y: -40 }, visible: { y: 0 } },
  left: { hidden: { x: 40 }, visible: { x: 0 } },
  right: { hidden: { x: -40 }, visible: { x: 0 } },
};

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const dir = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dir.hidden }}
      animate={isInView ? { opacity: 1, ...dir.visible } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### Section Title Reveal

Section titles use a special two-phase reveal:

1. A horizontal line expands from center
2. Text fades up from below

```tsx
export function SectionTitle({ tag, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
      <Reveal>
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                       bg-cyan-primary/10 border border-cyan-primary/20
                       text-cyan-primary text-xs font-mono uppercase tracking-widest mb-4"
        >
          {tag}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-lg text-gray-400 font-light">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
```

---

## Stagger Patterns

### Grid Stagger (for feature cards, pricing, etc.)

```tsx
const gridContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const gridItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Usage
<motion.div
  variants={gridContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
  className="grid grid-cols-1 md:grid-cols-3 gap-6"
>
  {features.map((f) => (
    <motion.div
      key={f.id}
      variants={gridItem}
      className="glass-card-interactive p-8"
    >
      {/* card content */}
    </motion.div>
  ))}
</motion.div>;
```

### List Stagger (for stats, testimonials strip)

```tsx
const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
```

### Counter Animation

```tsx
import { useMotionValue, useTransform, animate } from 'framer-motion';

function AnimatedCounter({
  target,
  duration = 2,
}: {
  target: number;
  duration?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, target, {
        duration,
        ease: [0.22, 1, 0.36, 1],
      });
    }
  }, [isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
```

---

## Micro-Interactions

### Button Hover Effects

```tsx
// Neon CTA button
<motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  className="..."
>
  {children}
</motion.button>
```

### Card Tilt on Hover

```tsx
function TiltCard({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="glass-card-interactive p-8"
    >
      {children}
    </motion.div>
  );
}
```

### Magnetic Button (CTA attraction)

```tsx
function MagneticButton({ children, ...props }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.15);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.15);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
```

### Accordion (FAQ)

```tsx
function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between text-left
                   hover:text-cyan-400 transition-colors duration-300"
      >
        <span className="text-lg font-medium">{question}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}
```

---

## Page Transitions

### Smooth Scroll Setup

```tsx
// app/layout.tsx or a provider component
// Use CSS scroll-behavior or Lenis for butter-smooth scrolling

// Option 1: CSS (simple)
// html { scroll-behavior: smooth; }

// Option 2: Lenis (premium feel)
// npm install @studio-freight/lenis
import Lenis from '@studio-freight/lenis';

useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return () => lenis.destroy();
}, []);
```

---

## Performance Rules

1. **Use `transform` and `opacity` only** — Never animate `width`, `height`, `top`, `left`, `margin`, or `padding`. These cause layout reflow.

2. **`will-change: transform`** — Add to elements with continuous animations (floating, rotating). Remove after animation completes for one-shot animations.

3. **Reduce motion** — Always respect `prefers-reduced-motion`:

   ```css
   @media (prefers-reduced-motion: reduce) {
     *,
     *::before,
     *::after {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

4. **Lazy load 3D** — React Three Fiber Canvas should use `React.lazy()` and `Suspense` for scenes below the fold.

5. **Intersection Observer** — Use `viewport={{ once: true }}` on all scroll animations to prevent re-triggering.

6. **GPU layers** — `translateZ(0)` or `translate3d(0,0,0)` to promote elements to GPU compositing when needed. Don't overdo it.
