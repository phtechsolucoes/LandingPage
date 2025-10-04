import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { LeadFormData, Lead } from '@/types/lead'

// Configuração do transportador de e-mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

// Função de lead scoring
function calculateLeadScore(data: LeadFormData): { score: number; status: 'qualified' | 'warm' | 'early_stage' } {
  let score = 0

  // Faturamento
  if (data.monthlyRevenue === 'Mais de R$ 500k/mês') {
    score += 40
  } else if (data.monthlyRevenue === 'R$ 100k - R$ 500k/mês') {
    score += 30
  } else if (data.monthlyRevenue === 'R$ 50k - R$ 100k/mês') {
    score += 20
  } else {
    score += 10
  }

  // Investimento em tráfego
  if (data.adBudget === 'Mais de R$ 15k/mês') {
    score += 20
  } else if (data.adBudget === 'R$ 5k - R$ 15k/mês') {
    score += 10
  }

  // Tamanho da equipe
  if (data.teamSize === '5 ou mais pessoas') {
    score += 10
  } else if (data.teamSize === '2-4 pessoas') {
    score += 5
  }

  // Tem loja ativa
  if (data.hasActiveStore) {
    score += 5
  }

  // Tem tráfego ativo
  if (data.hasActiveTraffic) {
    score += 10
  }

  // Classificação
  let status: 'qualified' | 'warm' | 'early_stage'
  if (score >= 70) {
    status = 'qualified'
  } else if (score >= 40) {
    status = 'warm'
  } else {
    status = 'early_stage'
  }

  return { score, status }
}

// Enviar e-mail para Pedro
async function sendEmailToPedro(lead: Lead) {
  const statusLabels = {
    qualified: 'Qualificado 🔥',
    warm: 'Aquecido 🌡️',
    early_stage: 'Inicial 🌱'
  }

  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #088d09 0%, #14d2f5 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #088d09; }
          .value { margin-left: 10px; }
          .score { font-size: 24px; font-weight: bold; color: #14d2f5; text-align: center; padding: 15px; background: white; border-radius: 8px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 Novo Diagnóstico Scala.AI™</h1>
            <p>Um novo lead preencheu o formulário de diagnóstico!</p>
          </div>
          <div class="content">
            <div class="score">
              Score: ${lead.score} pontos<br>
              <span style="font-size: 16px;">${statusLabels[lead.status]}</span>
            </div>
            
            <div class="field">
              <span class="label">Nome:</span>
              <span class="value">${lead.name}</span>
            </div>
            
            <div class="field">
              <span class="label">E-mail:</span>
              <span class="value">${lead.email}</span>
            </div>
            
            <div class="field">
              <span class="label">Telefone:</span>
              <span class="value">${lead.phone}</span>
            </div>
            
            <div class="field">
              <span class="label">Loja:</span>
              <span class="value"><a href="${lead.storeUrl}" target="_blank">${lead.storeUrl}</a></span>
            </div>
            
            <div class="field">
              <span class="label">Plataforma:</span>
              <span class="value">${lead.platform}</span>
            </div>
            
            <div class="field">
              <span class="label">Loja Ativa:</span>
              <span class="value">${lead.hasActiveStore ? '✅ Sim' : '❌ Não'}</span>
            </div>
            
            <div class="field">
              <span class="label">Faturamento:</span>
              <span class="value">${lead.monthlyRevenue}</span>
            </div>
            
            <div class="field">
              <span class="label">Equipe:</span>
              <span class="value">${lead.teamSize}</span>
            </div>
            
            <div class="field">
              <span class="label">Investimento em tráfego:</span>
              <span class="value">${lead.adBudget}</span>
            </div>
            
            <div class="field">
              <span class="label">Tráfego ativo:</span>
              <span class="value">${lead.hasActiveTraffic ? 'Sim ✓' : 'Não'}</span>
            </div>
            
            <div class="field">
              <span class="label">Dor principal:</span>
              <span class="value">${lead.mainPain}</span>
            </div>
            
            <div class="field">
              <span class="label">Meta:</span>
              <span class="value">${lead.growthGoal}</span>
            </div>
            
            <div class="field">
              <span class="label">Data:</span>
              <span class="value">${new Date(lead.createdAt).toLocaleString('pt-BR')}</span>
            </div>
          </div>
        </div>
      </body>
    </html>
  `

  await transporter.sendMail({
    from: `"Scala.AI™ Diagnóstico" <${process.env.EMAIL_USER}>`,
    to: 'phtechsolucoescontato@gmail.com',
    subject: `Novo Diagnóstico Scala.AI™ — ${lead.name} [${statusLabels[lead.status]}]`,
    html: emailHtml,
  })
}

// Enviar e-mail para o lead
async function sendEmailToLead(lead: Lead) {
  const calendlyUrl = process.env.CALENDLY_URL || 'https://calendly.com/phtechsolucoescontato/diagnostico-estrategico-gratuito-scala-ai'
  
  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #088d09 0%, #14d2f5 100%); color: white; padding: 30px 20px; border-radius: 10px 10px 0 0; text-align: center; }
          .content { background: #f9f9f9; padding: 30px 20px; border-radius: 0 0 10px 10px; }
          .btn { display: inline-block; background: #088d09; color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Diagnóstico Scala.AI™ confirmado 🚀</h1>
          </div>
          <div class="content">
            <p>Oi, <strong>${lead.name}</strong>!</p>
            
            <p>Obrigado por preencher seu diagnóstico.</p>
            
            <p>👉 Agende sua call de análise personalizada agora:</p>
            
            <div style="text-align: center;">
              <a href="${calendlyUrl}" class="btn">Agendar no Calendly</a>
            </div>
            
            <p>Um consultor da Scala.AI™ vai te mostrar como aumentar vendas e previsibilidade com IA — sem inflar custos.</p>
            
            <p style="margin-top: 30px;">Abraço,<br><strong>Equipe Scala.AI™ | PhTech Soluções</strong></p>
          </div>
          <div class="footer">
            <p>Scala.AI™ by PhTech Soluções</p>
          </div>
        </div>
      </body>
    </html>
  `

  await transporter.sendMail({
    from: `"Scala.AI™" <${process.env.EMAIL_USER}>`,
    to: lead.email,
    subject: 'Diagnóstico Scala.AI™ confirmado 🚀',
    html: emailHtml,
  })

  return calendlyUrl
}

export async function POST(request: Request) {
  try {
    const formData: LeadFormData = await request.json()

    // Calcular score
    const { score, status } = calculateLeadScore(formData)

    // Criar objeto lead completo
    const lead: Lead = {
      ...formData,
      score,
      status,
      createdAt: new Date(),
    }

    // Log do lead (útil para debug em produção)
    console.log('📊 Novo lead recebido:', {
      name: lead.name,
      email: lead.email,
      score: lead.score,
      status: lead.status,
    })

    // Tentar enviar e-mails (não bloqueia se falhar)
    try {
      await Promise.race([
        Promise.all([
          sendEmailToPedro(lead),
          sendEmailToLead(lead),
        ]),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Email timeout')), 8000)
        )
      ])
      console.log('✅ E-mails enviados com sucesso')
    } catch (emailError) {
      // Log do erro mas continua o fluxo
      console.error('⚠️ Erro ao enviar e-mails (não crítico):', emailError)
      console.log('Lead salvo mesmo sem e-mail. Dados:', lead)
    }

    const calendlyUrl = process.env.CALENDLY_URL || 'https://calendly.com/phtechsolucoescontato/diagnostico-estrategico-gratuito-scala-ai'

    return NextResponse.json({
      success: true,
      message: 'Lead registrado com sucesso',
      score,
      status,
      calendlyUrl,
    })
  } catch (error) {
    console.error('❌ Erro crítico ao processar lead:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erro ao processar formulário',
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    )
  }
}
