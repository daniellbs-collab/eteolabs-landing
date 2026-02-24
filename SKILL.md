---
name: eteo-landing-page
description: >
  Create devastatingly beautiful, conversion-optimized landing pages for Eteo Labs software products.
  Use this skill whenever the user asks to build a landing page, marketing page, product page,
  sales page, or any public-facing promotional website for Eteo Labs products (NEXUS, BARBER, GUARD,
  HEALTH, OPS, or new products). Also trigger when the user mentions "landing page", "página de vendas",
  "site comercial", "site de conversão", "LP", or wants to showcase any Eteo Labs product to potential
  customers. This skill produces Next.js/React pages with 3D elements (React Three Fiber), cinematic
  animations (Framer Motion), glassmorphism, neon accents, and dark premium aesthetics matching the
  Eteo Labs brand identity. Even if the user just says "create a site for product X", use this skill.
---

# ETEO Landing Page — Absolute Cinema Skill

Build landing pages that feel like cinematic experiences. Not websites — visual spectacles that
convert visitors into customers through awe, trust, and desire.

## Before You Start

1. Read `references/brand-system.md` for the complete Eteo Labs visual identity system
2. Read `references/section-blueprints.md` for the cinematic section patterns
3. Read `references/animation-choreography.md` for the motion design system
4. Read `references/3d-scenes.md` for React Three Fiber scene implementations
5. Read `references/conversion-architecture.md` for the persuasion and CTA framework

## Core Philosophy

Every Eteo Labs landing page follows three principles:

### 1. Absolute Cinema

Every scroll event is a scene transition. Every section tells a chapter of the story.
The page isn't read — it's experienced. Think movie trailer, not brochure.

### 2. Premium Dark Aesthetic

The Eteo Labs brand lives in darkness illuminated by technology. Deep navy/slate backgrounds
with cyan and magenta neon light cutting through. Glass surfaces catching light. 3D objects
floating in space. This is the visual language of software that feels expensive.

### 3. Conversion Through Awe

We don't push — we pull. The visitor is so impressed by the experience that paying
for the product feels like joining an exclusive club. Every visual element serves conversion.

## Tech Stack

| Layer           | Technology                                                     | Purpose                            |
| --------------- | -------------------------------------------------------------- | ---------------------------------- |
| Framework       | Next.js 14+ (App Router)                                       | SSR, performance, SEO              |
| 3D Engine       | React Three Fiber + Drei                                       | Immersive 3D hero scenes           |
| Animation       | Framer Motion                                                  | Cinematic scroll/reveal animations |
| Styling         | Tailwind CSS                                                   | Utility-first, dark theme tokens   |
| Fonts           | Google Fonts (Outfit + Space Grotesk or Sora + JetBrains Mono) | Brand typography                   |
| Icons           | Lucide React                                                   | Consistent iconography             |
| Post-Processing | @react-three/postprocessing                                    | Bloom, chromatic aberration        |

## Page Architecture

Every landing page follows this cinematic structure. Each section is a "scene":

```
┌─────────────────────────────────────────────┐
│  SCENE 0 — NAVBAR (floating glass, sticky)  │
├─────────────────────────────────────────────┤
│  SCENE 1 — HERO (3D scene + headline)       │
│  ├── Animated 3D product representation     │
│  ├── Headline with gradient text             │
│  ├── Subheadline with typing effect          │
│  └── Dual CTA (primary neon + ghost)         │
├─────────────────────────────────────────────┤
│  SCENE 2 — SOCIAL PROOF (trust bar)          │
│  ├── Animated counters                       │
│  ├── Client logos / badges                   │
│  └── Micro-testimonial strip                 │
├─────────────────────────────────────────────┤
│  SCENE 3 — PAIN → SOLUTION (story arc)       │
│  ├── Problem statement with dramatic reveal   │
│  ├── Visual transition (pain → relief)        │
│  └── Solution introduction                   │
├─────────────────────────────────────────────┤
│  SCENE 4 — FEATURES SHOWCASE (interactive)   │
│  ├── Bento grid with glass cards             │
│  ├── Hover-activated 3D micro-scenes         │
│  ├── Animated feature demonstrations         │
│  └── Each card: icon + title + description   │
├─────────────────────────────────────────────┤
│  SCENE 5 — PRODUCT DEMO (the wow moment)     │
│  ├── Browser mockup with animated UI         │
│  ├── Floating UI elements with parallax      │
│  ├── Interactive hotspots                    │
│  └── "See it in action" scroll reveal        │
├─────────────────────────────────────────────┤
│  SCENE 6 — TESTIMONIALS (social proof deep)  │
│  ├── Carousel with glass cards               │
│  ├── Star ratings + photos                   │
│  ├── Video testimonial embeds (optional)     │
│  └── Results/metrics highlights              │
├─────────────────────────────────────────────┤
│  SCENE 7 — PRICING (conversion point)        │
│  ├── Tiered glass cards with glow effects    │
│  ├── Feature comparison matrix               │
│  ├── "Most popular" badge with pulse         │
│  └── CTA with urgency element               │
├─────────────────────────────────────────────┤
│  SCENE 8 — FAQ (objection handling)          │
│  ├── Accordion with smooth animations        │
│  ├── Grouped by concern category             │
│  └── Final CTA after last question           │
├─────────────────────────────────────────────┤
│  SCENE 9 — FINAL CTA (closing scene)         │
│  ├── Full-width 3D background scene          │
│  ├── Bold closing headline                   │
│  ├── Single focused CTA                      │
│  └── Urgency/scarcity element               │
├─────────────────────────────────────────────┤
│  SCENE 10 — FOOTER (minimal, elegant)        │
│  ├── Logo + tagline                          │
│  ├── Navigation links                        │
│  ├── Social links                            │
│  └── Legal / copyright                       │
└─────────────────────────────────────────────┘
```

## Implementation Workflow

### Step 1: Understand the Product

Ask the user (or determine from context):

- Which Eteo Labs product is this for?
- Target audience (condomínios, barbearias, etc.)
- Key differentiators / selling points
- Pricing tiers (if applicable)
- Existing copy or copywriting framework preference (AIDA, PAS, BAB)

### Step 2: Scaffold the Project

```bash
npx create-next-app@latest [product-name]-landing --typescript --tailwind --app --src-dir
cd [product-name]-landing
npm install three @react-three/fiber @react-three/drei @react-three/postprocessing framer-motion lucide-react
```

### Step 3: Establish the Design System

Create the Tailwind config with the Eteo brand tokens. Read `references/brand-system.md`
for the complete color/typography/spacing system.

### Step 4: Build Scenes Sequentially

Build each scene as an independent component. Read `references/section-blueprints.md`
for the exact patterns. Each scene should:

- Have its own scroll-triggered entrance animation
- Contain at least one "wow" moment (3D, particle, glow, morph)
- Connect narratively to the next scene
- Serve a specific conversion purpose

### Step 5: Choreograph Animations

Connect all scenes with the animation choreography system.
Read `references/animation-choreography.md` for timing, easing, and scroll-sync details.

### Step 6: Add 3D Scenes

Implement React Three Fiber scenes for hero and key sections.
Read `references/3d-scenes.md` for pre-built scene configurations per product type.

### Step 7: Optimize for Conversion

Apply the conversion architecture patterns.
Read `references/conversion-architecture.md` for CTA placement, urgency patterns,
and psychological triggers.

### Step 8: Performance & SEO

- Lazy load 3D scenes below the fold
- Use `next/image` for all images
- Implement proper meta tags and Open Graph
- Ensure Core Web Vitals pass (LCP < 2.5s)
- Add structured data (JSON-LD)
- Provide fallback for devices that can't render WebGL

## Critical Rules

1. **NEVER use white or light backgrounds** — Eteo Labs lives in the dark
2. **NEVER use generic stock photos** — Use 3D elements, abstract visuals, or product screenshots
3. **NEVER create flat, static sections** — Everything animates, everything breathes
4. **NEVER use standard button styles** — CTAs glow, pulse, or have particle effects
5. **NEVER ignore mobile** — Every 3D scene has a 2D fallback, every animation is GPU-friendly
6. **ALWAYS use the neon accent system** — Cyan (#00F0FF) for primary actions, Magenta (#FF00E5) for highlights
7. **ALWAYS add glassmorphism** — Cards, navbars, and overlays use backdrop-blur with subtle borders
8. **ALWAYS choreograph scroll** — Sections reveal on scroll with staggered children
9. **ALWAYS include at least one 3D scene** — The hero must have a Three.js element
10. **ALWAYS write copy in Portuguese (BR)** unless the user specifies otherwise
