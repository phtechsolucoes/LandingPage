'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, MessageSquare, TrendingDown, ShoppingCart } from 'lucide-react'

const Problema = () => {
  const problems = [
    {
      icon: MessageSquare,
      title: "WhatsApp Congelado",
      description: "Mensagens de clientes que não são respondidas rapidamente, transformando interesse em desistência."
    },
    {
      icon: ShoppingCart,
      title: "Vazamento no Checkout",
      description: "Carrinhos abandonados, PIX expirados e boletos que nunca são pagos significam dinheiro deixado na mesa todos os dias."
    },
    {
      icon: TrendingDown,
      title: "Clientes Fantasmas",
      description: "Clientes que compram uma vez e desaparecem, forçando você a gastar infinitamente em novas aquisições."
    },
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
          {/* COPY REVISADA: Título */}
          <h2 className="font-arthaus text-3xl md:text-5xl mb-6">
            O Seu E-commerce Está <span className="text-red-400">Sangrando Dinheiro</span> Por Falta de Automação.
          </h2>
          {/* COPY REVISADA: Corpo */}
          <p className="text-xl text-muted max-w-4xl mx-auto">
            Você trabalha duro para atrair clientes, investe pesado em tráfego... Mas a conversão não acompanha. A verdade é que, sem a automação e inteligência artificial certas, você está perdendo vendas valiosas todos os dias:
          </p>
        </motion.div>

        {/* Problem list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
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
        
        {/* Highlighted Result updated with new copy points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 text-center bg-gradient-to-r from-red-900/20 to-orange-900/20 border-red-500/20"
        >
          {/* COPY REVISADA: Título Impacto */}
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            O Impacto Real: <span className="text-red-400">20% a 40% das suas vendas evaporam</span> mensalmente.
          </h3>
          {/* COPY REVISADA: Impacto Financeiro */}
          <p className="text-lg text-muted mb-6">
            No fim do ano, isso pode custar de R$ 500 mil a R$ 3 milhões em lucro perdido.
          </p>
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="inline-flex items-center gap-4 bg-red-500/20 text-red-400 px-6 py-3 rounded-full font-bold"
          >
            <AlertTriangle size={20} />
            <span className="text-base">O custo da falta de automação é alto demais.</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Problema
