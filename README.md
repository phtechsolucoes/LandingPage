# Scala.AI™ by PhTech - Landing Page & Diagnóstico

Uma landing page consultiva e responsiva construída com Next.js 14, com formulário de diagnóstico multipasso, lead scoring automático e integração com Calendly.

## 🚀 Tecnologias

- **Next.js 14** (App Router + API Routes)
- **Tailwind CSS** com configuração customizada
- **Framer Motion** para animações
- **Lucide React** para ícones
- **TypeScript** para type safety
- **Nodemailer** para envio de emails
- **Lead Scoring** automático

## 🎨 Design Features

- **Glassmorphism** com cards translúcidos
- **Gradient backgrounds** e textos
- **Animações suaves** com fade-in e stagger
- **Mobile-first** design responsivo
- **Paleta personalizada**: #088d09, #1362f5, #1297f4, #14d2f5, #091638, #969ca9
- **Tipografia**: Arthaus Bold (headings) + Century Gothic/Poppins (body)

## 📦 Instalação

1. Clone ou baixe o projeto
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp env.example .env.local
   ```
   
4. Edite `.env.local` com suas credenciais:
   ```
   EMAIL_USER=seu-email@gmail.com
   EMAIL_PASSWORD=sua-senha-de-app
   CALENDLY_URL=https://calendly.com/seu-link
   ```
   
   **Importante**: Para Gmail, use uma senha de aplicativo (App Password). Acesse: https://myaccount.google.com/apppasswords

5. Execute em modo desenvolvimento:
   ```bash
   npm run dev
   ```

6. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 🏗️ Estrutura

```
src/
├── app/
│   ├── globals.css      # Estilos globais + configuração das fontes
│   ├── layout.tsx       # Layout principal com metadata
│   └── page.tsx         # Página principal
└── components/
    ├── Hero.tsx         # Seção hero com CTA principal
    ├── Problema.tsx     # Seção dos problemas
    ├── SolucaoEndToEnd.tsx # Processo visual da solução
    ├── ComoFunciona.tsx # 3 etapas: Diagnóstico, Implementação, Resultados
    ├── Beneficios.tsx   # Cards com benefícios e ícones
    ├── ProvasSociais.tsx # Depoimentos e estatísticas
    └── CTAFinal.tsx     # CTA final com urgência
```

## 🎯 Funcionalidades

### Landing Page (/)
1. **Hero** - Headline consultiva focada em visão clara de crescimento
2. **Problema** - Tom empático sobre dores do e-commerce
3. **Solução End-to-End** - Como a Scala.AI™ resolve
4. **Benefícios** - Foco em lucro real e previsibilidade
5. **Provas Sociais** - Resultados e depoimentos
6. **CTA Final** - Convite para diagnóstico gratuito

### Página de Diagnóstico (/diagnostico)
- **Formulário multipasso** (4 etapas):
  1. Sobre a loja (nome, email, plataforma, etc)
  2. Estrutura atual (faturamento, equipe)
  3. Marketing e operação (investimento em tráfego)
  4. Dores e metas (desafios e objetivos)
  
- **Lead Scoring automático**:
  - Faturamento: 10-40 pontos
  - Investimento em tráfego: 0-20 pontos
  - Tamanho da equipe: 0-10 pontos
  - Tráfego ativo: +10 pontos
  
- **Classificação**:
  - ≥ 70 pontos: Qualified (Qualificado)
  - 40-69 pontos: Warm (Aquecido)
  - < 40 pontos: Early Stage (Inicial)

### Automações
- **Email para Pedro**: Notificação com todos os dados e score do lead
- **Email para Lead**: Agradecimento + link do Calendly
- **Integração Calendly**: Link direto para agendamento após diagnóstico

## ⚙️ Configuração

### Email (Gmail)
1. Ative a verificação em 2 etapas: https://myaccount.google.com/security
2. Crie uma senha de aplicativo: https://myaccount.google.com/apppasswords
3. Use a senha de aplicativo no `.env.local`

### Calendly
1. Configure sua conta no Calendly
2. Crie um evento com os horários 17:15-18:15 e 18:15-19:15
3. Copie o link do evento para `.env.local`

### Lead Scoring
O algoritmo de pontuação está em `/src/app/api/leads/route.ts`.
Você pode ajustar os pesos conforme sua estratégia.

### Customização
- **Cores**: Edite `tailwind.config.ts` para alterar a paleta
- **Fontes**: Modifique `globals.css` para trocar tipografia
- **Animações**: Ajuste componentes individuais do Framer Motion
- **Copy**: Edite os componentes em `src/components/`

## 🚀 Deploy

Para produção:

1. Build do projeto:
   ```bash
   npm run build
   ```

2. Teste o build:
   ```bash
   npm start
   ```

3. Deploy em plataformas como Vercel, Netlify ou similares

## 📱 Responsividade

- **Mobile First** - Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid responsivo** em todas as seções
- **Tipografia adaptativa** com classes do Tailwind

## 🔧 Personalização

### Alterar Conteúdo
Edite diretamente os componentes em `src/components/` para modificar textos, dados e estrutura.

### Alterar Estilos
- **Cores globais**: `tailwind.config.ts`
- **Classes customizadas**: `globals.css`
- **Componentes específicos**: Classes Tailwind nos arquivos `.tsx`

### Adicionar Seções
1. Crie novo componente em `src/components/`
2. Importe e adicione em `src/app/page.tsx`
3. Mantenha padrão de animações Framer Motion

## 📊 Performance

- **Core Web Vitals** otimizados
- **Lazy loading** com Framer Motion
- **Fontes otimizadas** com `font-display: swap`
- **Imagens responsivas** (quando adicionadas)

## 🤝 Suporte

Para dúvidas ou customizações, consulte a documentação do Next.js e Tailwind CSS.
# LandingPage
