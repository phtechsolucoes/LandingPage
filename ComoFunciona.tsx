'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Settings, Trophy, ArrowRight, CheckCircle } from 'lucide-react'

const ComoFunciona = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Análise & Mapeamento",
      subtitle: "Imergimos nos seus dados e processos para entender a fundo seu varejo",
      description: "Realizamos uma análise abrangente e detalhada dos seus dados operacionais e processos de vendas para identificar oportunidades estratégicas de otimização e crescimento sustentável.",
      features: [
        "Análise profunda de dados históricos",
        "Mapeamento completo de processos",
        "Identificação de gaps e oportunidades",
        "Avaliação do potencial de IA específico",
        "Relatório executivo com insights estratégicos"
      ],
      duration: "Dias 1-30",
      deliverable: "Diagnóstico estratégico + Roadmap personalizado"
    },
    {
      icon: Settings,
      title: "2. Integração & Configuração",
      subtitle: "Conectamos as principais áreas da sua loja e ativamos os módulos de IA do Scala.AI",
      description: "Nossa equipe especializada realiza a integração completa dos sistemas existentes com os módulos Scala.AI™, configurando cada componente para funcionar perfeitamente com sua operação específica.",
      features: [
        "Integração completa com sistemas existentes",
        "Configuração personalizada dos módulos IA",
        "Setup avançado de automações inteligentes",
        "Treinamento especializado da equipe",
        "Testes rigorosos e validações de segurança"
      ],
      duration: "Dias 31-60",
      deliverable: "Ecossistema Scala.AI™ totalmente operacional"
    },
    {
      icon: Trophy,
      title: "3. Otimização & Resultados",
      subtitle: "Acompanhamos os dados, fazemos ajustes e geramos os primeiros resultados mensuráveis de forma contínua",
      description: "Monitoramento contínuo de performance com ajustes inteligentes baseados em dados reais, garantindo que você obtenha o máximo retorno do investimento e resultados sustentáveis a longo prazo.",
      features: [
        "Monitoramento contínuo de KPIs",
        "Otimizações baseadas em machine learning",
        "Ajustes estratégicos em tempo real",
        "Relatórios detalhados de performance",
        "Garantia comprovada de resultados"
      ],
      duration: "Dias 61-90",
      deliverable: "ROI comprovado + Sistema otimizado e escalável"
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
            <span className="gradient-text">Pacote Piloto</span>: 90 Dias Para Ver a Diferença
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Metodologia estruturada em 3 etapas que garante implementação eficaz 
            e resultados mensuráveis na transformação digital do seu varejo.
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            const stepColors = [
              'from-blue-900/20 to-blue-800/20 border-blue-500/20',
              'from-green-900/20 to-green-800/20 border-green-500/20', 
              'from-purple-900/20 to-purple-800/20 border-purple-500/20'
            ]
            const stepColor = stepColors[index]
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
                  <div className={`glass-card p-8 hover:bg-slate-800/60 transition-all duration-300 bg-gradient-to-r ${stepColor}`}>
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
              Compromisso com <span className="gradient-text">Resultados</span>
            </h3>
            <p className="text-muted mb-6">
              Nosso compromisso é com seus resultados. Trabalhamos até que você 
              alcance as melhorias esperadas para seu negócio.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary" size={16} />
                <span>Garantia de 90 dias</span>
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
