# 🚀 Guia Rápido de Setup - Scala.AI™

## Passo 1: Configurar E-mail (Gmail)

1. Acesse sua conta Google: https://myaccount.google.com
2. Vá em **Segurança** → Ative **Verificação em 2 etapas**
3. Depois, vá em **Senhas de app**: https://myaccount.google.com/apppasswords
4. Crie uma nova senha de app com nome "Scala.AI"
5. Copie a senha gerada (sem espaços)

## Passo 2: Configurar Calendly

1. Crie uma conta no Calendly: https://calendly.com
2. Crie um novo tipo de evento:
   - Nome: "Diagnóstico Scala.AI™"
   - Duração: 60 minutos
   - Horários disponíveis: 17:15-18:15 e 18:15-19:15 (UTC-3 Brasil)
3. Copie o link do seu evento (algo como: https://calendly.com/seu-nome/diagnostico)

## Passo 3: Criar arquivo .env.local

Crie o arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

```env
# Email Configuration
EMAIL_USER=phtechsolucoescontato@gmail.com
EMAIL_PASSWORD=sua-senha-de-app-aqui

# Calendly URL
CALENDLY_URL=https://calendly.com/seu-link-aqui
```

**⚠️ Importante**: 
- Substitua `sua-senha-de-app-aqui` pela senha de app do Gmail (16 caracteres)
- Substitua `seu-link-aqui` pelo link do seu evento no Calendly

## Passo 4: Instalar e Rodar

```bash
# Instalar dependências (se ainda não instalou)
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse: http://localhost:3000

## 🧪 Testando

1. Acesse a home: http://localhost:3000
2. Clique em "Fazer Diagnóstico Gratuito"
3. Preencha o formulário de 4 etapas
4. Verifique se:
   - ✅ Você (Pedro) recebeu o email com os dados do lead
   - ✅ O lead recebeu o email de confirmação
   - ✅ A tela de sucesso aparece com o botão do Calendly

## 📊 Lead Scoring

O sistema pontua automaticamente cada lead:

- **Faturamento**:
  - Mais de R$ 500k/mês: 40 pontos
  - R$ 100k - R$ 500k/mês: 30 pontos
  - R$ 50k - R$ 100k/mês: 20 pontos
  - Menos de R$ 50k/mês: 10 pontos

- **Investimento em Tráfego**:
  - Mais de R$ 15k/mês: 20 pontos
  - R$ 5k - R$ 15k/mês: 10 pontos
  - Menos de R$ 5k/mês: 0 pontos

- **Tamanho da Equipe**:
  - 5 ou mais pessoas: 10 pontos
  - 2-4 pessoas: 5 pontos
  - Só eu: 0 pontos

- **Tráfego Ativo**: +10 pontos

**Classificação**:
- ≥ 70 pontos: **Qualified** 🔥 (Lead qualificado)
- 40-69 pontos: **Warm** 🌡️ (Lead aquecido)
- < 40 pontos: **Early Stage** 🌱 (Lead inicial)

## 🎨 Customização

### Ajustar Horários do Calendly
Edite em: `src/components/CTAFinal.tsx` linha 35

### Ajustar Lead Scoring
Edite em: `src/app/api/leads/route.ts` função `calculateLeadScore`

### Alterar Copy
Edite os componentes em `src/components/`:
- `Hero.tsx` - Seção inicial
- `Problema.tsx` - Dores do cliente
- `Beneficios.tsx` - Benefícios
- `CTAFinal.tsx` - CTA final

## 🚀 Deploy em Produção

### Vercel (Recomendado)

1. Crie conta no Vercel: https://vercel.com
2. Conecte seu repositório GitHub
3. Configure as variáveis de ambiente no dashboard:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `CALENDLY_URL`
4. Deploy automático!

### Outras Plataformas

```bash
# Build
npm run build

# Rodar em produção
npm start
```

## 🆘 Problemas Comuns

### E-mails não estão sendo enviados
- ✅ Verifique se usou senha de app (não a senha normal)
- ✅ Verifique se ativou verificação em 2 etapas no Gmail
- ✅ Confira se o arquivo `.env.local` está na raiz do projeto

### Formulário não envia
- ✅ Verifique o console do navegador (F12)
- ✅ Certifique-se que o servidor está rodando (`npm run dev`)

### Link do Calendly não aparece
- ✅ Verifique se a variável `CALENDLY_URL` está no `.env.local`
- ✅ Teste o link do Calendly manualmente no navegador

## 📞 Suporte

Qualquer dúvida, consulte a documentação completa em `README.md`.
