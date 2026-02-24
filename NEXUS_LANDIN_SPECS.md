# PROJETO: Landing Institucional Eteo Labs

## CONTEXTO

Sou Daniel, fundador da Eteo Labs. Preciso criar a landing page institucional da empresa (eteolabs.com.br) que apresentará nosso portfólio de produtos e será a porta de entrada para o Portal do Parceiro.

Já temos o produto NEXUS em produção (nexus.eteolabs.com.br) e planejamos expandir para ETEO BARBER, ETEO GUARD, ETEO HEALTH e ETEO OPS.

## STACK TÉCNICA

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- React Three Fiber (para animações 3D)
- PostgreSQL + Prisma (para leads/contatos do formulário)
- Deploy: Railway
- DNS: Registro.br

## IDENTIDADE VISUAL

- **Tema**: Dark mode com efeitos glass/glassmorphism
- **Cores principais**: Cyan (#00D9FF) e Magenta (#FF00E5)
- **Estilo**: Moderno, premium, tech, neon accents
- **Animações**: Suaves, profissionais, 3D quando apropriado
- **Inspiração**: Landing pages de SaaS premium e big techs

## ESTRUTURA DA LANDING

### 1. HERO SECTION

- Headline impactante: "Transforme Seu Negócio com Inteligência Artificial"
- Subheadline: Apresentar a proposta de valor da Eteo Labs
- CTA principal: "Conheça Nossas Soluções"
- CTA secundário: "Seja um Parceiro"
- Elemento visual 3D animado (representando tecnologia/AI)

### 2. SOBRE A ETEO LABS

- Missão: Integrar IA em software de gestão empresarial
- Diferenciais: Automação, eficiência, tecnologia de ponta
- Credibilidade: Números, clientes (se houver)

### 3. NOSSOS PRODUTOS (Cards)

Cada produto deve ter card com:

- Ícone/ilustração
- Nome do produto
- Descrição resumida
- Status: "Disponível" ou "Em breve"
- Link "Saiba mais" (produtos disponíveis) ou "Notifique-me" (futuros)

**Produtos:**

- **ETEO NEXUS** (Disponível): Gestão inteligente de encomendas para condomínios
- **ETEO BARBER** (Em breve): Sistema completo para barbearias
- **ETEO GUARD** (Em breve): Controle de acesso inteligente
- **ETEO HEALTH** (Em breve): Gestão para clínicas e consultórios
- **ETEO OPS** (Em breve): Gestão operacional empresarial

### 4. SEJA UM PARCEIRO

- Headline: "Cresça Conosco"
- Benefícios de ser parceiro:
  - Comissões atrativas (30-50%)
  - Transparência total
  - Suporte completo
  - Portal exclusivo com métricas em tempo real
- CTA: "Quero Ser Parceiro" → Link para portal.eteolabs.com.br/cadastro

### 5. CONTATO/LEADS

- Formulário simples: Nome, Email, Empresa, Mensagem
- Salvar no PostgreSQL para follow-up
- Envio de email de confirmação (opcional neste momento)

### 6. FOOTER

- Links: Produtos, Parceiros, Contato
- Redes sociais (se houver)
- Login do Portal do Parceiro
- Copyright Eteo Labs

## REQUISITOS TÉCNICOS

### Responsividade

- Mobile-first
- Breakpoints: sm, md, lg, xl, 2xl
- Testar em todos os tamanhos

### Performance

- Lazy loading de imagens
- Otimização de 3D (usar Suspense)
- Next.js Image optimization
- Code splitting automático

### SEO

- Metadata completo
- Open Graph tags
- Sitemap
- robots.txt

### Formulário de Contato

- Validação com Zod
- Prisma para salvar no banco
- Loading states
- Mensagens de sucesso/erro

## ARQUITETURA DO PROJETO

```
eteolabs-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (landing page)
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Products.tsx
│   │   ├── Partners.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ui/ (componentes reutilizáveis)
│   ├── lib/
│   │   └── prisma.ts
│   └── styles/
│       └── globals.css
├── prisma/
│   └── schema.prisma
├── public/
│   └── (assets, imagens, etc)
└── package.json
```

## SCHEMA PRISMA (inicial)

```prisma
model Lead {
  id        String   @id @default(cuid())
  name      String
  email     String
  company   String?
  message   String
  source    String   @default("landing") // landing, nexus, etc
  createdAt DateTime @default(now())
}
```

## COPYWRITING

Use frameworks AIDA ou PAS para headlines e CTAs.
Tom de voz: profissional, confiante, inovador, acessível.

## ANIMAÇÕES 3D

Para o Hero, criar uma cena 3D abstrata representando:

- Conexões (networking/integração)
- Dados fluindo
- Geometria moderna
- Cores da marca (cyan/magenta)

Use React Three Fiber com Drei helpers.

## DEPLOYMENT

- Configurar para Railway
- Variáveis de ambiente: DATABASE_URL
- Build command: `npm run build`
- Start command: `npm start`

## ENTREGÁVEIS ESPERADOS

1. Projeto Next.js completo e funcional
2. Design responsivo e premium
3. Formulário de contato funcionando
4. Animações suaves e profissionais
5. README.md com instruções de setup
6. Pronto para deploy no Railway

## OBSERVAÇÕES IMPORTANTES

- Usar TypeScript com tipagem rigorosa
- Comentários em código quando necessário
- Código limpo e modular
- Seguir convenções Next.js 14+
- Glass effects e neon devem ser sutis, não exagerados
- Priorizar UX e conversão

---

INICIE O PROJETO criando a estrutura base, configurando Tailwind com o tema customizado (dark + cyan/magenta), e depois vamos construir seção por seção começando pelo Hero.
