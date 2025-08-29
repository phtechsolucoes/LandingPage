'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Users, Clock } from 'lucide-react'

const Problema = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Leads Abandonados",
      description: "80% dos leads nunca recebem um follow-up adequado, resultando em oportunidades perdidas diariamente."
    },
    {
      icon: Clock,
      title: "Resposta Lenta",
      description: "Demora para responder leads diminui as chances de conversão em até 400%. Cada minuto conta."
    },
    {
      icon: Users,
      title: "Falta de Qualificação",
      description: "Tempo perdido com leads não qualificados prejudica a produtividade da equipe de vendas."
    },
    {
      icon: AlertTriangle,
      title: "Processos Manuais",
      description: "Dependência de processos manuais gera erros, inconsistências e sobrecarga da equipe."
    }
  ]

  return (
    <section id="problema" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-arthaus text-3xl md:text-5xl mb-6">
            Por que Sua Empresa está <span className="text-red-400">Perdendo Dinheiro</span>?
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            A cada dia que passa sem um sistema adequado de captação e conversão, 
            sua empresa deixa de faturar milhares de reais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 hover:bg-slate-800/60 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <IconComponent className="text-red-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                    <p className="text-muted leading-relaxed">{problem.description}</p>
                  </div>
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
          className="glass-card p-8 md:p-12 text-center bg-gradient-to-r from-red-900/20 to-orange-900/20 border-red-500/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Resultado: <span className="text-red-400">Prejuízo de até R$ 50.000/mês</span>
          </h3>
          <p className="text-lg text-muted mb-6">
            Empresas que não investem em automação perdem em média 60% dos leads gerados 
            e deixam de converter 3x mais vendas que poderiam.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">60%</div>
              <div className="text-sm text-muted">Leads Perdidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">3x</div>
              <div className="text-sm text-muted">Menos Conversões</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">R$ 50k</div>
              <div className="text-sm text-muted">Prejuízo Mensal</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Problema
