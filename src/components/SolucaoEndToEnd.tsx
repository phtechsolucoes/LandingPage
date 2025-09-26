'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Warehouse, MessageSquare, BarChart3, Users, TrendingUp, ArrowRight, Zap } from 'lucide-react'

const SolucaoEndToEnd = () => {
  const processSteps = [
    {
      icon: Target,
      title: "IA de Personalização",
      description: "Conecte-se com cada cliente de forma única, criando campanhas sob medida que realmente convertem e geram mais vendas.",
      features: ["Segmentação inteligente de clientes", "Campanhas personalizadas automáticas", "Experiência única por perfil"]
    },
    {
      icon: Warehouse,
      title: "IA de Estoque Inteligente",
      description: "Previsões de demanda precisas e reposição automática, garantindo que o produto certo esteja sempre disponível no momento ideal.",
      features: ["Previsão de demanda avançada", "Reposição automática inteligente", "Otimização de capital de giro"]
    },
    {
      icon: MessageSquare,
      title: "IA de Conversão",
      description: "Chatbots e voicebots que não só respondem perguntas, mas convertem visitantes em clientes satisfeitos, 24 horas por dia.",
      features: ["Atendimento automatizado 24/7", "Qualificação inteligente de leads", "Conversão otimizada por IA"]
    },
    {
      icon: BarChart3,
      title: "IA de Decisão",
      description: "Dashboards intuitivos com insights em tempo real para orientar suas decisões estratégicas, eliminando completamente o achismo.",
      features: ["Dashboards em tempo real", "Insights preditivos automatizados", "Relatórios inteligentes personalizados"]
    }
  ]

  return (
    <section id="processo" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-arthaus text-3xl md:text-5xl mb-6">
            Os <span className="gradient-text">Pilares que Sustentam</span> o Seu Crescimento
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Quatro módulos de IA integrados que trabalham em sinergia para transformar 
            completamente a operação do seu varejo com resultados mensuráveis.
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card p-6 h-full hover:bg-slate-800/60 transition-all duration-300">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="text-accent" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted mb-4 text-sm leading-relaxed">{step.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow connector (hidden on mobile, last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-accent">
                    <ArrowRight size={24} />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Resultados que <span className="gradient-text">Transformam o Varejo</span>
            </h3>
            <p className="text-lg text-muted">
              Com o ecossistema Scala.AI™, varejistas conquistam:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, metric: "+180%", label: "Crescimento em Vendas" },
              { icon: Users, metric: "95%", label: "Satisfação do Cliente" },
              { icon: Zap, metric: "24/7", label: "IA Sempre Ativa" },
              { icon: BarChart3, metric: "ROI 5x", label: "Retorno Garantido" }
            ].map((result, index) => {
              const IconComponent = result.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold gradient-text mb-2">{result.metric}</div>
                  <div className="text-sm text-muted">{result.label}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolucaoEndToEnd
