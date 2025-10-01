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
                Você está deixando dinheiro na mesa todos os dias
              </h2>
              <p className="text-xl text-muted max-w-3xl mx-auto text-left">
                Você está deixando dinheiro na mesa todos os dias.
              </p>
              <ul className="mt-4 text-left list-disc list-inside space-y-2 max-w-3xl mx-auto">
                <li>Mensagens no WhatsApp que não são respondidas a tempo.</li>
                <li>Carrinhos abandonados no checkout.</li>
                <li>Clientes que compram uma vez e nunca mais voltam.</li>
              </ul>

              <p className="text-xl text-muted max-w-3xl mx-auto mt-6">
                O resultado? <strong className="text-red-400">entre 20% e 40% das suas vendas potenciais evaporam</strong> todos os meses.
                <br />
                <strong className="text-muted">Isso pode significar de R$ 500 mil a R$ 3 milhões em perdas ao longo do ano.</strong>
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
                O impacto real
              </h3>
              <p className="text-lg text-muted mb-6">
                Entre <strong className="text-red-400">20% e 40%</strong> das vendas potenciais somem todo mês — e isso acumula.
                Se você já escala tráfego pago, cada mensagem não respondida no WhatsApp e cada carrinho abandonado é receita perdida.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">20–40%</div>
                  <div className="text-sm text-muted">Vendas potenciais perdidas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-muted">Canal de vendas sem automação</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">Risco Acumulado</div>
                  <div className="text-sm text-muted">Perdas significativas ao longo do ano</div>
                </div>
              </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Problema
