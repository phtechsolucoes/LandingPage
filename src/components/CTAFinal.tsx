// src/components/CTAFinal.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, AlertCircle } from 'lucide-react'

const CTAFinal = () => {
  const handleDiagnosticoClick = () => {
    window.location.href = '/diagnostico'
  }

  return (
    <section id="cta-final" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-dark to-accent/30" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-highlight/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-arthaus text-3xl md:text-5xl mb-6 leading-tight">
            📅 Faça um <span className="gradient-text">diagnóstico gratuito</span>
            <br />
            e veja onde sua loja está <span className="text-accent">deixando dinheiro na mesa</span>.
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Agenda aberta apenas em dois horários por dia:
            <br />
            <span className="text-accent font-semibold">🕔 17:15 – 18:15 | 🕕 18:15 – 19:15</span>
          </p>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-12 mb-12 bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <AlertCircle size={16} />
              Vagas Limitadas
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Em uma conversa de <span className="gradient-text">60 minutos</span>, você vai descobrir:
            </h3>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              "Quanto você está perdendo em vendas não convertidas",
              "Como recuperar carrinhos, PIX e boletos automaticamente",
              "O caminho mais rápido para escalar com previsibilidade"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 text-left"
              >
                <Zap className="text-accent flex-shrink-0 mt-1" size={20} />
                <span className="text-gray text-base">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <button
              onClick={handleDiagnosticoClick}
              className="btn-primary text-xl py-6 px-12 mb-4 group inline-flex items-center gap-4"
            >
              Garanta sua vaga agora
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </button>
            
            <div className="text-sm text-gray space-y-1">
              <div>✓ 100% Gratuito • ✓ Apenas 2 horários por dia</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTAFinal