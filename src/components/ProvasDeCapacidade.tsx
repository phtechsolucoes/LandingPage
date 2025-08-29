'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, FileText, BarChart3, Target, Shield, Zap } from 'lucide-react'

const ProvasDeCapacidade = () => {
  const handleExampleClick = (type: string) => {
    console.log(`Visualizar exemplo: ${type}`)
    // Aqui você pode implementar modais ou redirecionamentos para os exemplos
  }

  const processSteps = [
    { label: 'Leads', color: 'from-accent to-primaryLight' },
    { label: 'Captação', color: 'from-primaryLight to-primary' },
    { label: 'Qualificação', color: 'from-primary to-accent' },
    { label: 'Nutrição', color: 'from-accent to-primaryLight' },
    { label: 'Conversão', color: 'from-primaryLight to-primary' },
    { label: 'Pós-venda', color: 'from-primary to-success' }
  ]

  const metrics = [
    'Taxa de conversão por etapa',
    'Tempo médio no funil',
    'ROI por canal de captação'
  ]

  const commitments = [
    { icon: Target, text: 'Nada de promessas irreais' },
    { icon: BarChart3, text: 'Métricas transparentes' },
    { icon: Zap, text: 'Implantação guiada' },
    { icon: FileText, text: 'Copy sob medida' },
    { icon: Shield, text: 'LGPD-first' }
  ]

  const samples = [
    {
      title: 'Exemplo de roteiro de qualificação',
      description: 'Fluxo completo de perguntas estruturadas para identificar leads qualificados',
      icon: FileText
    },
    {
      title: 'Template de follow-up de 3 dias',
      description: 'Sequência de mensagens para nutrir leads que não converteram imediatamente',
      icon: Target
    },
    {
      title: 'Modelo de KPI semanal',
      description: 'Dashboard com métricas essenciais para acompanhar performance do funil',
      icon: BarChart3
    }
  ]

  return (
    <section id="provas" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-arthaus text-3xl md:text-5xl mb-6">
            <span className="gradient-text">Provas de Capacidade</span>
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Veja na prática como estruturamos processos que geram resultados reais e sustentáveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Processo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-accent">Processo</h3>
            
            {/* Diagrama do processo */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`bg-gradient-to-r ${step.color} text-white text-xs px-3 py-2 rounded-lg font-medium`}>
                      {step.label}
                    </div>
                    {index < processSteps.length - 1 && (
                      <ArrowRight className="text-gray mx-1" size={16} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <h4 className="font-semibold mb-3 text-white">O que medimos:</h4>
            <ul className="space-y-2">
              {metrics.map((metric, index) => (
                <li key={index} className="flex items-center gap-2 text-gray text-sm">
                  <CheckCircle className="text-success" size={16} />
                  {metric}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Compromissos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-accent">Compromissos</h3>
            
            <ul className="space-y-4">
              {commitments.map((commitment, index) => {
                const IconComponent = commitment.icon
                return (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-accent to-primaryLight rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-navy" size={16} />
                    </div>
                    <span className="text-white font-medium">{commitment.text}</span>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* Amostras */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-accent">Amostras</h3>
            
            <div className="space-y-4">
              {samples.map((sample, index) => {
                const IconComponent = sample.icon
                return (
                  <div key={index} className="border border-white/10 rounded-lg p-4 hover:border-accent/30 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-accent to-primaryLight rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-navy" size={16} />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-white text-sm mb-1">{sample.title}</h4>
                        <p className="text-gray text-xs leading-relaxed">{sample.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleExampleClick(sample.title)}
                      className="text-accent hover:text-primaryLight text-sm font-medium flex items-center gap-1 transition-colors"
                    >
                      Ver exemplo
                      <ArrowRight size={14} />
                    </button>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 text-center bg-gradient-to-r from-accent/10 to-primaryLight/10 border-accent/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Quer ver esses exemplos aplicados ao <span className="gradient-text">seu negócio</span>?
          </h3>
          
          <p className="text-lg text-gray max-w-2xl mx-auto mb-8">
            No diagnóstico gratuito, analisamos seu processo atual e mostramos exatamente 
            como implementar essas estratégias na sua empresa.
          </p>

          <button
            onClick={() => {
              if (process.env.NEXT_PUBLIC_N8N_FORM_URL) {
                window.open(process.env.NEXT_PUBLIC_N8N_FORM_URL, '_blank', 'noopener')
              }
            }}
            className="btn-primary text-lg"
          >
            Quero meu diagnóstico gratuito
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProvasDeCapacidade
