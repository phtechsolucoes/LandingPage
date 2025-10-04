'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, MessageSquare, TrendingDown, ShoppingCart } from 'lucide-react'

const Problema = () => {
  const problems = [
    {
      icon: ShoppingCart,
      title: "Carrinhos são abandonados",
      description: "Você viu o cliente interessado, mas ele sumiu antes de finalizar. Cada carrinho abandonado é uma venda que escorreu pelos dedos."
    },
    {
      icon: TrendingDown,
      title: "Tráfego sobe, margem cai",
      description: "Investir mais em anúncios não garante mais lucro. Sem conversão eficiente, você só aumenta o custo de aquisição."
    },
    {
      icon: MessageSquare,
      title: "Atendimento lento faz clientes desistirem",
      description: "Resposta demorada no WhatsApp = cliente que vai comprar do concorrente. Cada minuto perdido é uma oportunidade que se foi."
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
          <h2 className="font-arthaus text-3xl md:text-5xl mb-6">
            Sua loja <span className="gradient-text">vende</span>, mas <span className="text-red-400">não cresce</span>.
          </h2>
          <p className="text-xl text-muted max-w-4xl mx-auto">
            A Scala.AI™ resolve isso combinando IA, automação e acompanhamento humano — pra que cada conversa gere lucro real.
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
        
        {/* CTA empático */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 text-center bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            A boa notícia? <span className="gradient-text">Isso tem solução</span>.
          </h3>
          <p className="text-lg text-muted mb-6">
            E não precisa ser complicado. Você só precisa das ferramentas certas e de quem entende o seu negócio.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Problema
