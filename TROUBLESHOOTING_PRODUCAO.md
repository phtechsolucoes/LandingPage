# 🔧 Troubleshooting - Produção (Vercel/Netlify)

## ❌ Problema: Formulário não envia em produção

### Causa Provável:
**Nodemailer não funciona bem em serverless** (Vercel tem limite de 10s por função)

---

## ✅ Solução Implementada

Código atualizado com:
1. ✅ **Timeout de 8s** para e-mails
2. ✅ **Não bloqueia** se e-mail falhar
3. ✅ **Logs detalhados** para debug
4. ✅ **Lead sempre salvo** (mesmo sem e-mail)

---

## 📋 Checklist de Produção

### 1. Variáveis de Ambiente na Vercel

Acesse: https://vercel.com/seu-projeto/settings/environment-variables

Configure:
```
EMAIL_USER=phtechsolucoescontato@gmail.com
EMAIL_PASSWORD=bkef tzkf ywva gcbb
CALENDLY_URL=https://calendly.com/phtechsolucoescontato/diagnostico-estrategico-gratuito-scala-ai
```

**⚠️ IMPORTANTE**: 
- Marque todas como **Production**, **Preview** e **Development**
- Depois de adicionar, faça **Redeploy**

---

### 2. Verificar Logs na Vercel

1. Vá em: https://vercel.com/seu-projeto
2. Clique em **Deployments** → último deploy
3. Clique em **Functions**
4. Clique na function `/api/leads`
5. Veja os logs:
   - ✅ `📊 Novo lead recebido` = Lead chegou
   - ✅ `✅ E-mails enviados` = Tudo OK
   - ⚠️ `⚠️ Erro ao enviar e-mails` = Lead salvo, e-mail falhou

---

### 3. Testar em Produção

```bash
# Teste direto na API
curl -X POST https://seu-site.vercel.app/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "teste@teste.com",
    "phone": "75999999999",
    "storeUrl": "teste.com",
    "platform": "Shopify",
    "hasActiveStore": true,
    "monthlyRevenue": "R$ 100k - R$ 500k/mês",
    "teamSize": "2-4 pessoas",
    "adBudget": "R$ 5k - R$ 15k/mês",
    "hasActiveTraffic": true,
    "mainPain": "Teste",
    "growthGoal": "Teste"
  }'
```

Resposta esperada:
```json
{
  "success": true,
  "message": "Lead registrado com sucesso",
  "score": 65,
  "status": "warm",
  "calendlyUrl": "..."
}
```

---

## 🔄 Alternativas de E-mail (Recomendado para Produção)

Se e-mails continuarem falhando, use serviços especializados:

### Opção 1: SendGrid (Recomendado) ✅

**Grátis**: 100 emails/dia

1. Criar conta: https://sendgrid.com
2. Obter API Key
3. Instalar: `npm install @sendgrid/mail`
4. Configurar:

```typescript
// Substitua no route.ts
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

async function sendEmailToPedro(lead: Lead) {
  await sgMail.send({
    to: 'phtechsolucoescontato@gmail.com',
    from: 'noreply@seudominio.com',
    subject: `Novo Lead: ${lead.name}`,
    html: emailHtml
  })
}
```

### Opção 2: Resend (Mais Moderno) 🚀

**Grátis**: 3.000 emails/mês

1. Criar conta: https://resend.com
2. Obter API Key
3. Instalar: `npm install resend`
4. Configurar:

```typescript
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'Scala.AI <noreply@seudominio.com>',
  to: 'phtechsolucoescontato@gmail.com',
  subject: `Novo Lead: ${lead.name}`,
  html: emailHtml
})
```

### Opção 3: Gmail SMTP (Atual) ⚠️

**Limitações**:
- Pode dar timeout em serverless
- Gmail pode bloquear
- Não escalável

**Se quiser manter**, garanta que:
- ✅ Verificação em 2 etapas ativada
- ✅ Senha de app correta
- ✅ Variáveis de ambiente configuradas

---

## 📊 Monitoramento

### Como saber se está funcionando?

**1. Verifique os logs da Vercel**
- Lead aparece nos logs? ✅ API funcionando
- E-mail enviado? ✅ Tudo OK
- Timeout? ⚠️ Lead salvo, e-mail pode falhar

**2. Configure Webhook (Alternativa)**

Se e-mails não chegarem, use webhook:

```typescript
// Adicione no route.ts após salvar lead
await fetch('https://hooks.zapier.com/seu-webhook', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(lead)
})
```

**3. Google Sheets (Backup)**

Salve todos os leads em planilha:

```bash
npm install googleapis
```

```typescript
// Salvar em Google Sheets como backup
await appendToSheet(lead)
```

---

## 🚨 Erro Comum: "500 Internal Server Error"

### Causa:
- Variáveis de ambiente não configuradas
- Timeout de e-mail

### Solução:
1. ✅ Verifique variáveis na Vercel
2. ✅ Redeploy após adicionar variáveis
3. ✅ Veja logs em tempo real
4. ✅ Use SendGrid/Resend

---

## 📝 Debug em Produção

### Ativar logs detalhados:

```typescript
// Adicione no início do route.ts
export const runtime = 'nodejs'
export const maxDuration = 10 // segundos
```

### Ver logs ao vivo:

```bash
vercel logs --follow
```

---

## ✅ Checklist Final

- [ ] Variáveis de ambiente configuradas
- [ ] Redeploy feito após configurar
- [ ] Teste manual funcionou
- [ ] Logs mostram lead recebido
- [ ] E-mail chegou ou alternativa configurada
- [ ] Calendly abrindo corretamente

---

## 💡 Solução Rápida (Se tudo falhar)

**Webhook para Zapier/Make:**

1. Crie webhook no Zapier/Make
2. Substitua envio de e-mail:

```typescript
// Simples e confiável
await fetch(process.env.WEBHOOK_URL!, {
  method: 'POST',
  body: JSON.stringify(lead)
})
```

3. Configure no Zapier:
   - Trigger: Webhook
   - Action 1: Enviar e-mail para você
   - Action 2: Enviar e-mail para lead

**Pronto! 100% confiável em serverless**

---

## 📞 Próximos Passos

1. **Imediato**: Verificar logs na Vercel
2. **Hoje**: Migrar para SendGrid/Resend
3. **Semana 1**: Configurar Google Sheets backup
4. **Mês 1**: Implementar CRM integrado

---

**Dúvidas? Verifique os logs primeiro!** 📊
