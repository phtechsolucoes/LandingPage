'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, TrendingUp, ArrowRight, Zap, RefreshCw, Lock, CheckCircle } from 'lucide-react' 

const SolucaoEndToEnd = () => {
  const processSteps = [
    {
      icon: TrendingUp,
      title: "Recuperar Vendas Perdidas Imediatamente",
      description: "Recupere até 35% das vendas perdidas por carrinho abandonado e PIX expirado. Sua loja para de sangrar dinheiro.",
      features: ["Recuperação automática de Carrinhos e PIX", "WhatsApp para e-commerce como motor de conversão", "Automação Imediata"]
    },
    {
      icon: RefreshCw,
      title: "Multiplicar a Fidelização",
      description: "Aumente 3x a recompra e fidelização com fluxos inteligentes que ativam clientes inativos e vendem mais para a base atual.",
      features: ["Fluxos de recompra inteligentes", "Aumento da Fidelização/LTV", "Mensagens personalizadas por IA"]
    },
    {
      icon: MessageSquare,
      title: "Operação no Piloto Automático",
      description: "Crie uma operação automática de conversão que funciona 24 horas por dia, 7 dias por semana, sem depender de operadores humanos.",
      features: ["Automação completa do processo de venda", "Atendimento e conversão ininterruptos", "Escala sem custo fixo"]
    },
    {
      icon: Lock,
      title: "Ambição: Crescimento com Previsibilidade",
      description: "Garanta previsibilidade de caixa e liberdade operacional, sabendo exatamente o que esperar do seu funil de vendas.",
      features: ["Previsão de Receita baseada em dados", "Controle Total do Funil de Vendas", "Liberdade para focar em Estratégia"]
    }
  ]

  const handleDiagnosticoClick = () => {
    window.location.href = '/diagnostico'
  }

  return (
    <section id="solucao" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-arthaus text-3xl md:text-5xl mb-6">
            Como a <span className="gradient-text">Scala.AI™</span> transforma sua operação
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Não vendemos ferramentas. Entregamos crescimento previsível e sustentável.
          </p>
        </motion.div>

        {/* Process Flow - New content focused on the 4 key results */}
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
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="text-accent" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">✅ {step.title}</h3>
                  <p className="text-muted mb-4 text-sm leading-relaxed">{step.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mt-4">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="text-accent flex-shrink-0" size={14} />
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA to close the section */}
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-12"
        >
          <button
            onClick={handleDiagnosticoClick}
            className="btn-secondary text-lg py-3 px-6 inline-flex items-center gap-2 group"
          >
            Ver Como Isso Funciona na Prática
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default SolucaoEndToEnd
