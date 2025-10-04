# ✅ Checklist de Implementação - Scala.AI™

Use este checklist para garantir que tudo está configurado corretamente.

---

## 📋 Antes de Começar

- [ ] Ler o `RESUMO_IMPLEMENTACAO.md` para entender todas as mudanças
- [ ] Ler o `SETUP.md` para configuração detalhada
- [ ] Ter acesso ao Gmail (phtechsolucoescontato@gmail.com)
- [ ] Ter ou criar conta no Calendly

---

## ⚙️ Configuração do Gmail

- [ ] Acessar Google Account: https://myaccount.google.com/security
- [ ] Ativar **Verificação em 2 etapas**
- [ ] Acessar: https://myaccount.google.com/apppasswords
- [ ] Criar senha de aplicativo com nome "Scala.AI"
- [ ] Copiar a senha de 16 caracteres gerada
- [ ] Colar no `.env.local` na variável `EMAIL_PASSWORD`

**Status**: ⬜ Pendente | ✅ Concluído

---

## 📅 Configuração do Calendly

- [ ] Criar conta no Calendly: https://calendly.com
- [ ] Criar novo tipo de evento:
  - [ ] Nome: "Diagnóstico Scala.AI™"
  - [ ] Duração: 60 minutos
  - [ ] Horários: 17:15-18:15 e 18:15-19:15 (UTC-3)
  - [ ] Descrição: "Diagnóstico gratuito para e-commerce"
- [ ] Copiar o link do evento
- [ ] Colar no `.env.local` na variável `CALENDLY_URL`

**Status**: ⬜ Pendente | ✅ Concluído

---

## 🗂️ Arquivo .env.local

- [ ] Verificar se o arquivo `.env.local` existe na raiz do projeto
- [ ] Conferir se contém as 3 variáveis:
  - [ ] `EMAIL_USER=phtechsolucoescontato@gmail.com`
  - [ ] `EMAIL_PASSWORD=sua-senha-de-16-caracteres`
  - [ ] `CALENDLY_URL=seu-link-do-calendly`
- [ ] Salvar o arquivo

**Exemplo**:
```env
EMAIL_USER=phtechsolucoescontato@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
CALENDLY_URL=https://calendly.com/scala-ai/diagnostico
```

**Status**: ⬜ Pendente | ✅ Concluído

---

## 📦 Instalação e Execução

- [ ] Abrir terminal na pasta do projeto
- [ ] Rodar: `npm install`
- [ ] Aguardar instalação das dependências
- [ ] Rodar: `npm run dev`
- [ ] Verificar se aparece: "Ready on http://localhost:3000"

**Status**: ⬜ Pendente | ✅ Concluído

---

## 🧪 Testes Funcionais

### Teste 1: Página Inicial
- [ ] Acessar: http://localhost:3000
- [ ] Verificar se o Hero mostra: "Tenha uma visão clara..."
- [ ] Clicar em "Fazer Diagnóstico Gratuito"
- [ ] Verificar se redireciona para `/diagnostico`

**Status**: ⬜ Pendente | ✅ Concluído

### Teste 2: Formulário de Diagnóstico
- [ ] Acessar: http://localhost:3000/diagnostico
- [ ] **Etapa 1**: Preencher dados da loja
  - [ ] Nome completo
  - [ ] E-mail (use seu e-mail pessoal para teste)
  - [ ] WhatsApp
  - [ ] URL da loja
  - [ ] Plataforma
  - [ ] Clicar em "Próximo"
- [ ] **Etapa 2**: Preencher estrutura
  - [ ] Faturamento mensal
  - [ ] Tamanho da equipe
  - [ ] Clicar em "Próximo"
- [ ] **Etapa 3**: Preencher marketing
  - [ ] Investimento em tráfego
  - [ ] Marcar checkbox de tráfego ativo
  - [ ] Clicar em "Próximo"
- [ ] **Etapa 4**: Preencher dores e metas
  - [ ] Maior dor
  - [ ] Meta de crescimento
  - [ ] Clicar em "Finalizar Diagnóstico"

**Status**: ⬜ Pendente | ✅ Concluído

### Teste 3: E-mails
- [ ] Verificar inbox de phtechsolucoescontato@gmail.com
- [ ] Confirmar recebimento de e-mail com:
  - [ ] Assunto: "Novo Diagnóstico Scala.AI™ — [Nome]"
  - [ ] Score calculado
  - [ ] Todos os dados do lead
  - [ ] Classificação (Qualificado/Aquecido/Inicial)
- [ ] Verificar inbox do e-mail de teste usado
- [ ] Confirmar recebimento de e-mail com:
  - [ ] Assunto: "Diagnóstico Scala.AI™ confirmado 🚀"
  - [ ] Nome personalizado
  - [ ] Botão "Agendar no Calendly"

**Status**: ⬜ Pendente | ✅ Concluído

### Teste 4: Calendly
- [ ] Na tela de sucesso, clicar em "Agendar Call"
- [ ] Verificar se abre o Calendly corretamente
- [ ] Verificar se mostra os horários corretos (17:15 e 18:15)

**Status**: ⬜ Pendente | ✅ Concluído

---

## 🎨 Customizações (Opcional)

- [ ] Ajustar cores em `tailwind.config.ts`
- [ ] Personalizar textos nos componentes
- [ ] Ajustar pesos do lead scoring em `src/app/api/leads/route.ts`
- [ ] Adicionar logo da Scala.AI™

**Status**: ⬜ Pendente | ✅ Concluído

---

## 🚀 Deploy em Produção

### Vercel (Recomendado)
- [ ] Criar conta no Vercel: https://vercel.com
- [ ] Conectar repositório GitHub
- [ ] Configurar variáveis de ambiente no dashboard:
  - [ ] `EMAIL_USER`
  - [ ] `EMAIL_PASSWORD`
  - [ ] `CALENDLY_URL`
- [ ] Fazer deploy
- [ ] Testar URL de produção

**Status**: ⬜ Pendente | ✅ Concluído

---

## 📊 Monitoramento (Pós-Deploy)

### Primeiros 7 dias:
- [ ] Monitorar inbox para verificar leads recebidos
- [ ] Verificar scores dos leads (priorizar qualified)
- [ ] Acompanhar taxa de agendamento via Calendly
- [ ] Ajustar copy se necessário

### Métricas a acompanhar:
- [ ] Total de diagnósticos preenchidos
- [ ] Leads por classificação:
  - [ ] Qualified (≥70)
  - [ ] Warm (40-69)
  - [ ] Early Stage (<40)
- [ ] Taxa de conversão: diagnóstico → call agendada
- [ ] Taxa de conclusão do formulário

**Status**: ⬜ Pendente | ✅ Concluído

---

## 🔧 Troubleshooting

### E-mails não chegam
- [ ] Verificar se usou senha de app (não senha normal)
- [ ] Verificar se verificação em 2 etapas está ativa
- [ ] Verificar logs do servidor (`npm run dev`)
- [ ] Testar envio manual de e-mail pelo Gmail

### Formulário não envia
- [ ] Abrir console do navegador (F12)
- [ ] Verificar erros JavaScript
- [ ] Verificar se `.env.local` está na raiz
- [ ] Reiniciar servidor (`Ctrl+C` e `npm run dev`)

### Link Calendly não funciona
- [ ] Verificar variável `CALENDLY_URL` no `.env.local`
- [ ] Testar link do Calendly manualmente
- [ ] Verificar se evento está ativo no Calendly

---

## 📞 Suporte e Documentação

- [ ] `README.md` - Documentação geral
- [ ] `SETUP.md` - Guia de configuração
- [ ] `RESUMO_IMPLEMENTACAO.md` - O que foi implementado
- [ ] `COMMITS.md` - Como fazer commits

---

## ✅ Tudo Pronto!

Quando todos os itens acima estiverem marcados:

1. **Fazer commits** seguindo `COMMITS.md`
2. **Push para GitHub**
3. **Deploy em produção**
4. **Começar a receber leads qualificados!**

---

## 🎯 Resultado Esperado

Após a implementação completa:

✅ Site com copy consultiva e humana  
✅ Formulário de diagnóstico funcionando  
✅ Leads pontuados automaticamente  
✅ E-mails automáticos enviados  
✅ Agendamentos via Calendly  
✅ **Meta: +15% de conversão em leads qualificados**

---

**Data de início**: _________  
**Data de conclusão**: _________  
**Status geral**: ⬜ Pendente | 🔄 Em andamento | ✅ Concluído
