# Conversion Architecture — Persuasion & CTA Framework

## Table of Contents

1. [Copywriting Frameworks](#copywriting-frameworks)
2. [CTA Design System](#cta-design-system)
3. [Urgency & Scarcity Patterns](#urgency--scarcity)
4. [Trust Signals](#trust-signals)
5. [Psychological Triggers](#psychological-triggers)
6. [Copy Templates per Product](#copy-templates)

---

## Copywriting Frameworks

Choose ONE framework per page and execute it across all sections:

### AIDA — Attention, Interest, Desire, Action

Best for: New products, cold audiences, awareness campaigns.

```
HERO  (Attention):  Bold, provocative headline that names the pain
PROOF (Interest):   Stats and logos that validate the claim
STORY (Desire):     Before/after transformation narrative
CTA   (Action):     Clear, single action with benefit-focused text
```

### PAS — Problem, Agitate, Solution

Best for: Products solving painful problems (NEXUS, GUARD).

```
HERO  (Problem):    "Cansado de perder encomendas no condomínio?"
PAIN  (Agitate):    "Cada pacote perdido é uma reclamação, uma briga, uma dor de cabeça"
FEAT  (Solution):   "O ETEO NEXUS resolve tudo com rastreamento inteligente"
```

### BAB — Before, After, Bridge

Best for: Products with dramatic before/after (BARBER, HEALTH).

```
HERO  (Before):     The current messy reality
DEMO  (After):      The beautiful organized future
FEAT  (Bridge):     The product features that make it happen
```

---

## CTA Design System

### CTA Hierarchy

| Level         | Usage                  | Style                                |
| ------------- | ---------------------- | ------------------------------------ |
| **Primary**   | Main conversion action | Solid cyan, glow, large, rounded-2xl |
| **Secondary** | Alternative action     | Ghost (border only), white text      |
| **Tertiary**  | Low-commitment action  | Text link with arrow, no border      |

### Primary CTA Component

```tsx
function PrimaryCTA({ children, href = '#', className = '' }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex items-center gap-2 px-8 py-4 rounded-2xl
                bg-cyan-primary text-gray-900 font-semibold text-lg
                shadow-[0_0_20px_rgba(0,240,255,0.3)]
                hover:shadow-[0_0_40px_rgba(0,240,255,0.5)]
                transition-shadow duration-300 ${className}`}
    >
      {children}
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
    </motion.a>
  );
}
```

### CTA Text Formulas

Write CTA text that includes the BENEFIT, not just the action:

```
❌ Bad:   "Clique aqui"
❌ Bad:   "Saiba mais"
❌ Bad:   "Cadastre-se"

✅ Good:  "Começar Gratuitamente"
✅ Good:  "Automatizar Minha Portaria"
✅ Good:  "Ver Planos — Sem Compromisso"
✅ Good:  "Testar por 14 Dias Grátis"
✅ Good:  "Quero Organizar Minhas Encomendas"
```

### CTA Placement Strategy

```
Hero:        2 CTAs (primary + secondary video/demo)
Features:    1 tertiary CTA at section end
Demo:        1 primary CTA below mockup
Pricing:     1 CTA per tier (primary on recommended)
FAQ:         1 tertiary CTA after last question
Final CTA:   1 primary CTA (the biggest, boldest one)

Total: 7-9 conversion opportunities per page
```

---

## Urgency & Scarcity

### Patterns (use sparingly and honestly)

#### Limited Time Badge

```tsx
<span
  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
              bg-magenta-pop/10 border border-magenta-pop/20 text-magenta-pop text-xs font-mono"
>
  <Clock className="w-3 h-3" />
  Oferta válida até {date}
</span>
```

#### Active Users Counter

```tsx
<div className="flex items-center gap-2 text-sm text-gray-400">
  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
  <span>
    <strong className="text-white">127</strong> pessoas estão vendo esta página
    agora
  </span>
</div>
```

#### Free Trial Emphasis

```tsx
// Instead of countdown timers (which feel spammy), emphasize risk-free:
<p className="mt-3 text-sm text-gray-500">
  Sem cartão de crédito · Cancele quando quiser · Setup em 5 minutos
</p>
```

---

## Trust Signals

### Types and Placement

| Signal                 | Placement                       | Example                |
| ---------------------- | ------------------------------- | ---------------------- |
| Client count           | Social proof bar                | "500+ condomínios"     |
| Star rating            | Social proof bar + testimonials | "4.9/5 estrelas"       |
| Uptime                 | Social proof bar                | "99.9% uptime"         |
| Security badge         | Footer + pricing                | "Dados criptografados" |
| Money-back guarantee   | Pricing                         | "30 dias de garantia"  |
| Response time          | Below CTA                       | "Suporte em até 2h"    |
| Industry certification | Footer                          | "LGPD Compliant"       |

### Trust Strip Component

```tsx
function TrustStrip() {
  const signals = [
    { icon: Shield, text: 'Dados 100% seguros' },
    { icon: Clock, text: 'Suporte em até 2h' },
    { icon: CreditCard, text: 'Sem cartão para testar' },
    { icon: RefreshCw, text: '30 dias de garantia' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-6">
      {signals.map(({ icon: Icon, text }) => (
        <div
          key={text}
          className="flex items-center gap-2 text-sm text-gray-400"
        >
          <Icon className="w-4 h-4 text-cyan-primary" />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}
```

---

## Psychological Triggers

### 1. Social Proof

Show that others are already using and loving the product.
Numbers, logos, testimonials, case studies.

### 2. Authority

Position Eteo Labs as the expert. Use professional design,
technical language, and industry-specific knowledge.

### 3. Loss Aversion

Frame the cost of NOT using the product, not just the benefit of using it.
"Quanto custa perder uma encomenda por semana?" > "Economize tempo"

### 4. Anchoring

Show the most expensive plan first (or a "value" comparison to manual costs)
to make the actual price feel like a bargain.

### 5. Reciprocity

Offer something free first (trial, demo, free tier) before asking for payment.
The free tier should be genuinely useful, not a crippled version.

### 6. Specificity

Use exact numbers instead of vague claims:
"Reduz 73% do tempo de conferência" > "Economiza tempo"
"162 encomendas gerenciadas em um único painel" > "Gerencie muitas encomendas"

---

## Copy Templates

### ETEO NEXUS (Package Management)

```
Headline options:
- "Gestão de encomendas no piloto automático"
- "Nunca mais perca uma encomenda no condomínio"
- "O sistema que sua portaria precisa para funcionar como um relógio"
- "De {X} reclamações por mês a zero. Em 30 dias."

Subheadline:
- "Receba, confira e entregue encomendas com rastreamento completo,
   notificações automáticas e inteligência artificial."

Pain points to address:
- Encomendas perdidas ou entregues para o morador errado
- Portaria sobrecarregada sem controle
- Moradores reclamando por falta de informação
- Conferência manual demorada e propensa a erros
- Responsabilidade legal por extravios

Feature highlights:
- Mapa 3D de encomendas (unique to NEXUS)
- Conferência com foto e assinatura digital
- Notificação automática para moradores
- Dashboard de produtividade da equipe
- BI & Analytics com métricas em tempo real
- Sistema de gamificação para equipe (XP, rankings)
```

### ETEO BARBER (Barbershop Management)

```
Headline options:
- "Sua barbearia merece mais que uma planilha"
- "Agendamento inteligente que enche sua agenda"
- "A tecnologia que faz sua barbearia lucrar mais"

Pain points:
- Clientes desmarcando sem aviso
- Agenda desorganizada, horários perdidos
- Sem controle financeiro real
- Dificuldade em fidelizar clientes
```

### ETEO GUARD (Access Control)

```
Headline options:
- "Controle de acesso que pensa por você"
- "Segurança digital para o condomínio do futuro"
- "Saiba quem entra e sai. Em tempo real."

Pain points:
- Visitantes sem identificação
- Portaria vulnerável a engenharia social
- Sem registro histórico de acessos
- Processos manuais lentos e inseguros
```

### Generic Software Product

```
Headline formula:
"[Resultado desejado] sem [principal dor do cliente]"

Subheadline formula:
"[Produto] [ação principal] com [diferencial 1], [diferencial 2] e [diferencial 3]."
```
