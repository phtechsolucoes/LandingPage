'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, Loader2 } from 'lucide-react'
import { 
  LeadFormData, 
  platformOptions, 
  revenueOptions, 
  teamSizeOptions, 
  adBudgetOptions 
} from '@/types/lead'

const DiagnosticoForm = () => {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [calendlyUrl, setCalendlyUrl] = useState('')

  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    storeUrl: '',
    platform: '',
    hasActiveStore: false,
    monthlyRevenue: '',
    teamSize: '',
    adBudget: '',
    hasActiveTraffic: false,
    mainPain: '',
    growthGoal: ''
  })

  const updateField = (field: keyof LeadFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setCalendlyUrl(data.calendlyUrl || 'https://calendly.com/scala-ai')
        setShowSuccess(true)
      } else {
        alert('Erro ao enviar formulário. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro ao enviar formulário. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.phone && formData.storeUrl && formData.platform
      case 2:
        return formData.monthlyRevenue && formData.teamSize
      case 3:
        return formData.adBudget
      case 4:
        return formData.mainPain && formData.growthGoal
      default:
        return false
    }
  }

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 md:p-12 max-w-2xl mx-auto text-center"
      >
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="text-primary" size={40} />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Parabéns!</span> Sua loja foi analisada com sucesso.
        </h2>
        
        <p className="text-lg text-muted mb-8">
          Agora agende seu horário de diagnóstico com um consultor Scala.AI™.
        </p>

        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-3 text-lg mb-6"
        >
          Agendar Call
          <ArrowRight size={20} />
        </a>

        <div className="text-sm text-muted bg-primary/10 p-4 rounded-lg">
          💡 Mesmo se sua loja estiver no início, enviaremos um material gratuito para ajudar você a evoluir.
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`flex-1 h-2 mx-1 rounded-full transition-colors ${
                s <= step ? 'bg-primary' : 'bg-slate-700'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-sm text-muted">
          Etapa {step} de 4
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12">
        <AnimatePresence mode="wait">
          {/* Etapa 1: Sobre a loja */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Conte-nos sobre <span className="gradient-text">sua loja</span>
              </h3>
              <p className="text-muted mb-6">Vamos começar pelo básico</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome completo *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">E-mail *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">URL da loja *</label>
                  <input
                    type="url"
                    value={formData.storeUrl}
                    onChange={(e) => updateField('storeUrl', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="https://minhaloja.com.br"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Plataforma *</label>
                  <select
                    value={formData.platform}
                    onChange={(e) => updateField('platform', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  >
                    <option value="">Selecione...</option>
                    {platformOptions.map((platform) => (
                      <option key={platform} value={platform}>
                        {platform}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                  <input
                    type="checkbox"
                    id="hasActiveStore"
                    checked={formData.hasActiveStore}
                    onChange={(e) => updateField('hasActiveStore', e.target.checked)}
                    className="w-5 h-5 text-primary bg-slate-800 border-slate-700 rounded focus:ring-primary"
                  />
                  <label htmlFor="hasActiveStore" className="text-sm cursor-pointer">
                    ✓ Minha loja virtual está ativa e vendendo
                  </label>
                </div>
              </div>
            </motion.div>
          )}

          {/* Etapa 2: Estrutura atual */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Qual o <span className="gradient-text">tamanho do negócio</span>?
              </h3>
              <p className="text-muted mb-6">Queremos entender sua estrutura atual</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Faturamento mensal *</label>
                  <select
                    value={formData.monthlyRevenue}
                    onChange={(e) => updateField('monthlyRevenue', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  >
                    <option value="">Selecione...</option>
                    {revenueOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tamanho da equipe *</label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => updateField('teamSize', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  >
                    <option value="">Selecione...</option>
                    {teamSizeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {/* Etapa 3: Marketing e operação */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Como você <span className="gradient-text">atrai clientes</span>?
              </h3>
              <p className="text-muted mb-6">Entenda sua estratégia de marketing</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Investimento mensal em tráfego pago *
                  </label>
                  <select
                    value={formData.adBudget}
                    onChange={(e) => updateField('adBudget', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  >
                    <option value="">Selecione...</option>
                    {adBudgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-lg">
                  <input
                    type="checkbox"
                    id="hasActiveTraffic"
                    checked={formData.hasActiveTraffic}
                    onChange={(e) => updateField('hasActiveTraffic', e.target.checked)}
                    className="w-5 h-5 text-primary bg-slate-800 border-slate-700 rounded focus:ring-primary"
                  />
                  <label htmlFor="hasActiveTraffic" className="text-sm cursor-pointer">
                    Tenho campanhas de tráfego pago rodando atualmente
                  </label>
                </div>
              </div>
            </motion.div>
          )}

          {/* Etapa 4: Dores e metas */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Qual seu <span className="gradient-text">maior desafio</span>?
              </h3>
              <p className="text-muted mb-6">Vamos identificar como podemos ajudar</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Qual sua maior dor hoje? *
                  </label>
                  <textarea
                    value={formData.mainPain}
                    onChange={(e) => updateField('mainPain', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    rows={4}
                    placeholder="Ex: Muitos carrinhos abandonados, baixa taxa de recompra, atendimento lento..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Onde você quer chegar? *
                  </label>
                  <textarea
                    value={formData.growthGoal}
                    onChange={(e) => updateField('growthGoal', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    rows={4}
                    placeholder="Ex: Dobrar faturamento, ter previsibilidade de caixa, reduzir custos..."
                    required
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="flex items-center gap-2 px-6 py-3 text-muted hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Voltar
            </button>
          )}
          
          {step < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={!isStepValid()}
              className={`ml-auto flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                isStepValid()
                  ? 'bg-primary hover:bg-primary/80 text-white'
                  : 'bg-slate-700 text-slate-500 cursor-not-allowed'
              }`}
            >
              Próximo
              <ArrowRight size={20} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!isStepValid() || isSubmitting}
              className={`ml-auto flex items-center gap-2 px-8 py-3 rounded-lg transition-all ${
                isStepValid() && !isSubmitting
                  ? 'bg-accent hover:bg-accent/80 text-white'
                  : 'bg-slate-700 text-slate-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Enviando...
                </>
              ) : (
                <>
                  Finalizar Diagnóstico
                  <Check size={20} />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default DiagnosticoForm
