# 👋 Bem-vindo à Scala.AI™ - Comece Aqui!

Este documento é seu ponto de partida. Leia-o primeiro para entender o que foi feito e como usar.

---

## 🎯 O Que Foi Feito?

Transformamos sua landing page em uma **máquina de conversão consultiva** que:

1. ✅ **Atrai** leads qualificados com copy humanizada
2. ✅ **Qualifica** automaticamente usando lead scoring
3. ✅ **Converte** em calls agendadas via Calendly
4. ✅ **Notifica** você por e-mail em tempo real

**Objetivo**: Converter visitantes em leads de R$ 20k+ e agendar calls de diagnóstico.

---

## 📚 Documentação - Onde Encontrar o Quê?

### 1. **INICIO_AQUI.md** (este arquivo)
👉 **Leia primeiro** - Visão geral e roadmap

### 2. **RESUMO_IMPLEMENTACAO.md**
📊 O que foi implementado, linha por linha  
👉 Leia se quiser entender **todas as mudanças**

### 3. **SETUP.md**
⚙️ Guia passo a passo de configuração  
👉 Leia quando for **configurar o projeto**

### 4. **CHECKLIST.md**
✅ Lista de verificação para garantir que tudo funciona  
👉 Use para **não esquecer nenhuma etapa**

### 5. **COMMITS.md**
📝 Como fazer commits seguindo boas práticas  
👉 Use quando for **commitar código**

### 6. **README.md**
📖 Documentação técnica completa  
👉 Referência para **desenvolvimento**

---

## 🚀 Começando em 3 Passos

### Passo 1: Configurar E-mail e Calendly (10 min)
Siga o **SETUP.md** para:
- Criar senha de app no Gmail
- Configurar evento no Calendly
- Preencher `.env.local`

### Passo 2: Testar Localmente (5 min)
```bash
npm install
npm run dev
```
Acesse http://localhost:3000 e teste o formulário

### Passo 3: Deploy (5 min)
Siga o **CHECKLIST.md** para fazer deploy na Vercel

---

## 📁 Estrutura de Arquivos

```
LandingPage/
├── 📄 INICIO_AQUI.md          ← Você está aqui
├── 📄 RESUMO_IMPLEMENTACAO.md ← O que mudou
├── 📄 SETUP.md                ← Como configurar
├── 📄 CHECKLIST.md            ← Lista de verificação
├── 📄 COMMITS.md              ← Guia de commits
├── 📄 README.md               ← Docs técnicas
│
├── src/
│   ├── app/
│   │   ├── page.tsx           ← Página inicial
│   │   ├── diagnostico/       ← Página de diagnóstico
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── leads/
│   │           └── route.ts   ← API com lead scoring
│   │
│   ├── components/
│   │   ├── Hero.tsx           ← "Tenha uma visão clara..."
│   │   ├── Problema.tsx       ← "Sua loja vende, mas não cresce"
│   │   ├── Beneficios.tsx     ← Benefícios tangíveis
│   │   ├── CTAFinal.tsx       ← "Faça um diagnóstico gratuito"
│   │   └── DiagnosticoForm.tsx ← Formulário multipasso
│   │
│   └── types/
│       └── lead.ts            ← Tipos TypeScript
│
├── .env.local                 ← Suas configurações
└── package.json
```

---

## 🎨 O Que Mudou na Copy?

### Antes (Técnico e Frio)
> "Transforme o WhatsApp em uma Máquina de Vendas com IA"

### Depois (Humano e Consultivo)
> "Tenha uma visão clara de como sua loja pode escalar com IA"

### Princípios:
- ✅ Fala como **pessoa**, não como empresa
- ✅ Foca em **crescimento real**, não em tecnologia
- ✅ Usa tom **empático**, não agressivo
- ✅ Oferece **consultoria**, não produto

---

## 📊 Lead Scoring - Como Funciona?

Cada lead recebe uma pontuação de 0 a 100 baseada em:

| Critério | Peso |
|----------|------|
| Faturamento | 10-40 pontos |
| Investimento em tráfego | 0-20 pontos |
| Tamanho da equipe | 0-10 pontos |
| Tráfego ativo | +10 pontos |

**Classificação automática**:
- 🔥 **Qualified** (≥70): Prioridade máxima
- 🌡️ **Warm** (40-69): Potencial médio
- 🌱 **Early Stage** (<40): Nutrir

Você recebe um e-mail com o score e classificação de cada lead!

---

## 📧 Como Funcionam os E-mails?

### 1. Lead preenche o formulário
### 2. Sistema calcula o score automaticamente
### 3. Dois e-mails são enviados:

**E-mail para você (Pedro)**:
- Todos os dados do lead
- Score e classificação
- Dores e metas descritas

**E-mail para o lead**:
- Agradecimento personalizado
- Link do Calendly para agendar

### 4. Lead agenda a call pelo Calendly

---

## 🎯 Métricas de Sucesso

Acompanhe estas métricas:

1. **Total de diagnósticos** preenchidos
2. **Leads qualificados** (score ≥70)
3. **Taxa de conversão**: diagnóstico → call agendada
4. **Taxa de conclusão** do formulário

**Meta inicial**: +15% de conversão em leads qualificados

---

## ❓ FAQ Rápido

### Preciso alterar o design?
**Não!** O design foi mantido. Só mudamos a copy e funcionalidades.

### Onde fica o formulário?
**Rota**: `/diagnostico`  
**Acesso**: Clicando em qualquer botão "Fazer Diagnóstico Gratuito"

### Como sei quando chega um lead?
Você recebe um **e-mail automático** em phtechsolucoescontato@gmail.com

### Posso ajustar os pesos do scoring?
**Sim!** Edite `src/app/api/leads/route.ts` função `calculateLeadScore`

### Como alterar os textos?
Edite os componentes em `src/components/`:
- Hero.tsx
- Problema.tsx
- Beneficios.tsx
- CTAFinal.tsx

---

## 🔄 Próximo Passo

👉 **Agora leia o SETUP.md** para configurar e rodar o projeto!

---

## 📞 Precisa de Ajuda?

1. Consulte o **README.md** para dúvidas técnicas
2. Use o **CHECKLIST.md** para não esquecer nada
3. Siga o **COMMITS.md** para versionar corretamente

---

## ✨ Resultado Final

Uma landing page que:

✅ Converte visitantes em leads qualificados  
✅ Prioriza automaticamente quem tem maior potencial  
✅ Facilita agendamento de calls  
✅ Notifica você em tempo real  

Tudo com **tom humano, empático e consultivo**.

---

**Pronto para começar?**

👉 **Próximo arquivo**: SETUP.md

Boa sorte! 🚀
