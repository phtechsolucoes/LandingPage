# Landing Page - Solução End-to-End

Uma landing page moderna e responsiva construída com Next.js 14, Tailwind CSS e Framer Motion para conversão de leads.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **Tailwind CSS** com configuração customizada
- **Framer Motion** para animações
- **Lucide React** para ícones
- **TypeScript** para type safety

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
   
4. Edite `.env.local` com sua URL do formulário N8N:
   ```
   NEXT_PUBLIC_N8N_FORM_URL=https://sua-instancia-n8n.com/webhook/seu-form-id
   ```

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

## 🎯 Seções da Landing Page

1. **Hero** - Headline impactante + subheadline + CTA
2. **Problema** - Por que empresas perdem leads/vendas
3. **Solução End-to-End** - Fluxo visual do processo
4. **Como Funciona** - 3 etapas detalhadas
5. **Benefícios** - Cards com ícones dos benefícios
6. **Provas Sociais** - Depoimentos e estatísticas
7. **CTA Final** - Urgência e fechamento

## ⚙️ Configuração

### CTA Buttons
Todos os botões de CTA redirecionam para `process.env.NEXT_PUBLIC_N8N_FORM_URL`

### Customização
- **Cores**: Edite `tailwind.config.ts` para alterar a paleta
- **Fontes**: Modifique `globals.css` para trocar tipografia
- **Animações**: Ajuste componentes individuais do Framer Motion

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
