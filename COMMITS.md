# 📝 Commits Recomendados

Use estes comandos para fazer commits seguindo as boas práticas:

## 1. Copy Consultiva

```bash
git add src/components/Hero.tsx src/components/Problema.tsx src/components/Beneficios.tsx src/components/CTAFinal.tsx src/components/SolucaoEndToEnd.tsx src/app/layout.tsx
git commit -m "feat(copy): refatora narrativa consultiva Scala.AI™

- Hero: foco em 'visão clara de crescimento'
- Problema: tom empático sobre dores do e-commerce
- Benefícios: lucro real e previsibilidade
- CTA: convite para diagnóstico premium
- SEO: atualiza metadata para consultoria"
```

## 2. Formulário Multipasso

```bash
git add src/types/lead.ts src/components/DiagnosticoForm.tsx src/app/diagnostico/
git commit -m "feat(form): adiciona formulário multipasso com lead scoring

- 4 etapas: loja, estrutura, marketing, dores
- Validação de cada etapa
- Animações suaves com Framer Motion
- UX otimizada para conversão"
```

## 3. API de Leads

```bash
git add src/app/api/leads/route.ts
git commit -m "feat(api): implementa endpoint /api/leads com scoring

- Cálculo automático de score (0-100 pontos)
- Classificação: qualified, warm, early_stage
- Pontuação baseada em faturamento, tráfego e equipe
- Lógica de negócio para qualificação"
```

## 4. Automação de E-mails

```bash
git add src/app/api/leads/route.ts package.json
git commit -m "feat(email): configura notificações automáticas

- Email para Pedro com dados completos do lead
- Email para lead com link do Calendly
- Templates HTML responsivos
- Integração com nodemailer"
```

## 5. Integração Calendly

```bash
git add src/components/DiagnosticoForm.tsx src/app/api/leads/route.ts
git commit -m "feat(integrations): adiciona integração com Calendly

- Link automático após diagnóstico
- Horários específicos: 17:15-18:15 e 18:15-19:15
- Mensagem de sucesso personalizada
- Fallback para leads iniciais"
```

## 6. Documentação

```bash
git add README.md SETUP.md COMMITS.md env.example
git commit -m "docs: atualiza documentação completa

- README com funcionalidades e configuração
- SETUP com guia passo a passo
- Exemplos de commits
- Variáveis de ambiente documentadas"
```

## 7. Dependências

```bash
git add package.json package-lock.json
git commit -m "chore: adiciona nodemailer para envio de emails"
```

## Commit Único (Tudo de uma vez)

Se preferir fazer um único commit com todas as mudanças:

```bash
git add .
git commit -m "feat: implementa consultoria Scala.AI™ com diagnóstico automatizado

BREAKING CHANGE: Refatoração completa da copy e fluxo de conversão

- Copy humanizada e consultiva em todas seções
- Formulário multipasso de diagnóstico (4 etapas)
- Lead scoring automático (qualified/warm/early_stage)
- Emails automáticos para Pedro e lead
- Integração com Calendly
- SEO atualizado
- Documentação completa

Objetivo: Converter leads qualificados (R$ 20k+) em calls agendadas
Meta: +15% de conversão"
```

## Depois de Commitar

```bash
# Verificar status
git status

# Ver último commit
git log -1

# Push para o repositório
git push origin main
```

## Boas Práticas

1. **Commits pequenos e focados**: É melhor vários commits pequenos do que um gigante
2. **Mensagens claras**: Descreva O QUE mudou e POR QUÊ
3. **Formato**: `tipo(escopo): descrição`
   - `feat`: nova funcionalidade
   - `fix`: correção de bug
   - `docs`: documentação
   - `style`: formatação
   - `refactor`: refatoração de código
   - `chore`: tarefas gerais

## Exemplo de Fluxo Completo

```bash
# Adicionar arquivos específicos
git add src/components/Hero.tsx

# Commitar com mensagem descritiva
git commit -m "feat(hero): atualiza headline para foco consultivo"

# Repetir para cada mudança lógica
git add src/components/Problema.tsx
git commit -m "feat(problema): adiciona tom empático nas dores"

# Push final
git push origin main
```
