'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Settings, Trophy, ArrowRight, CheckCircle } from 'lucide-react'

const ComoFunciona = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Diagnóstico Completo",
      subtitle: "Análise detalhada da sua operação atual",
      description: "Realizamos uma auditoria completa dos seus processos de captação e conversão para identificar exatamente onde estão as oportunidades de melhoria.",
      features: [
        "Auditoria de funis existentes",
        "Análise de concorrência",
        "Mapeamento de jornada do cliente",
        "Identificação de gargalos",
        "Relatório com oportunidades"
      ],
      duration: "2-5 dias",
      deliverable: "Relatório detalhado + Plano de ação"
    },
    {
      icon: Settings,
      title: "2. Implementação Estratégica",
      subtitle: "Configuração personalizada da sua solução",
      description: "Nossa equipe especializada implementa toda a infraestrutura necessária, desde landing pages otimizadas até automações avançadas, tudo personalizado para o seu negócio.",
      features: [
        "Setup de automações",
        "Criação de landing pages",
        "Configuração de integrações",
        "Treinamento da equipe",
        "Testes e otimizações"
      ],
      duration: "7-14 dias",
      deliverable: "Sistema completo funcionando"
    },
    {
      icon: Trophy,
      title: "3. Resultados e Otimização",
      subtitle: "Acompanhamento e melhoria contínua",
      description: "Monitoramos os resultados em tempo real e fazemos ajustes constantes para maximizar a performance e garantir que você alcance os melhores resultados possíveis.",
      features: [
        "Monitoramento 24/7",
        "Relatórios semanais",
        "Otimizações contínuas",
        "Suporte dedicado",
        "Garantia de resultados"
      ],
      duration: "Contínuo",
      deliverable: "ROI comprovado em 30 dias"
    }
  ]

  return (
    <section id="como-funciona" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-arthaus text-3xl md:text-5xl mb-6">
            Como <span className="gradient-text">Funciona</span> Nossa Metodologia
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Um processo estruturado em 3 etapas que garante resultados mensuráveis 
            e transformação real do seu negócio.
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-xl">
                  <div className="glass-card p-8 hover:bg-slate-800/60 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <p className="text-accent font-medium">{step.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-muted mb-6 leading-relaxed">{step.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="text-primary flex-shrink-0" size={16} />
                          <span className="text-sm text-muted">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <div className="text-sm text-muted">Duração</div>
                        <div className="font-semibold">{step.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted">Entregável</div>
                        <div className="font-semibold text-accent">{step.deliverable}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 lg:max-w-md">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="relative"
                  >
                    <div className="glass-card p-8 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                      <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-white" size={40} />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Etapa {index + 1}</h4>
                      <p className="text-muted text-sm">{step.subtitle}</p>
                      
                      {/* Progress indicator */}
                      <div className="mt-6 flex justify-center">
                        <div className="flex gap-2">
                          {steps.map((_, stepIndex) => (
                            <div
                              key={stepIndex}
                              className={`w-3 h-3 rounded-full transition-colors ${
                                stepIndex <= index 
                                  ? 'bg-gradient-to-r from-primary to-accent' 
                                  : 'bg-white/20'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Connector arrow */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                        <ArrowRight className="text-accent rotate-90" size={24} />
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Garantia de <span className="gradient-text">Resultados</span>
            </h3>
            <p className="text-muted mb-6">
              Se você não obtiver pelo menos 50% de melhoria na conversão de leads em 30 dias, 
              devolvemos 100% do investimento.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary" size={16} />
                <span>Garantia de 30 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary" size={16} />
                <span>Suporte 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary" size={16} />
                <span>Resultados mensuráveis</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ComoFunciona
