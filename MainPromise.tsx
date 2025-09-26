'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Zap, Shield } from 'lucide-react'

const MainPromise = () => {
  const promises = [
    {
      icon: TrendingUp,
      title: "Aumento de Receita",
      description: "Mais vendas, ticket médio elevado e clientes fidelizados através de estratégias personalizadas."
    },
    {
      icon: Zap,
      title: "Eficiência Operacional", 
      description: "Menos perdas, estoque otimizado e custos reduzidos com automação inteligente."
    },
    {
      icon: Shield,
      title: "Controle Total",
      description: "Decisões estratégicas baseadas em dados claros e confiáveis em tempo real."
    }
  ]

  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-arthaus text-3xl md:text-5xl mb-8 leading-tight">
            Transforme o <span className="gradient-text">caos em lucro</span>: 
            <br />
            <span className="text-2xl md:text-3xl">uma máquina de vendas inteligente</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            O ecossistema Scala.AI™ da PH Tech Soluções integra todas as áreas do seu varejo 
            para maximizar resultados e minimizar perdas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((promise, index) => {
            const IconComponent = promise.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{promise.title}</h3>
                <p className="text-muted leading-relaxed">{promise.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MainPromise