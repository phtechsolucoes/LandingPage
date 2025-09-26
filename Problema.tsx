'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Package, ShoppingCart } from 'lucide-react'

const Problema = () => {
  const problems = [
    {
      icon: Package,
      title: "Estoque Descontrolado",
      description: "Falta de produtos na hora certa e excesso de itens parados prejudicam o fluxo de caixa e as vendas."
    },
    {
      icon: TrendingDown,
      title: "Vendas Imprevisíveis",
      description: "Sem dados claros sobre tendências e comportamento do cliente, é impossível planejar estratégias eficazes."
    },
    {
      icon: ShoppingCart,
      title: "Experiência Genérica",
      description: "Clientes recebem o mesmo tratamento, perdendo oportunidades de personalização e aumento de ticket médio."
    },
    {
      icon: AlertTriangle,
      title: "Decisões no Achismo",
      description: "Falta de insights baseados em dados leva a decisões erradas que custam caro ao negócio."
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
            Por que Sua Loja está <span className="text-red-400">Perdendo Dinheiro</span>?
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            A cada dia sem inteligência artificial no seu varejo, você perde oportunidades valiosas 
            de aumentar vendas e fidelizar clientes.
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
            Resultado: <span className="text-red-400">Prejuízo de até R$ 100.000/mês</span>
          </h3>
          <p className="text-lg text-muted mb-6">
            Lojas que não usam IA perdem em média 40% das oportunidades de venda 
            e têm 60% mais produtos parados em estoque.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">40%</div>
              <div className="text-sm text-muted">Vendas Perdidas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">60%</div>
              <div className="text-sm text-muted">Estoque Parado</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">R$ 100k</div>
              <div className="text-sm text-muted">Prejuízo Mensal</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Problema
