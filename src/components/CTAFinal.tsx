// src/components/CTAFinal.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, AlertCircle } from 'lucide-react'

const CTAFinal = () => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/5575982300164?text=Olá%20PH%20Tech%20Soluções,%20tenho%20interesse%20no%20ecossistema%20Scala.AI%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica%20gratuita'
    window.open(whatsappUrl, '_blank', 'noopener')
  }

  const features = [
    "Descubra o potencial de recuperação de vendas no seu negócio",
    "Receba um Roadmap Estratégico para Automação de Conversão",
    "Entenda como o Scala.AI™ garante 20% de aumento de vendas em 90 dias", 
  ]

  return (
    <section id="cta-final" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects (Mantido) */}
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
          <h2 className="font-arthaus text-3xl md:text-6xl mb-6 leading-tight">
            <span className="text-red-400">Você Pode Continuar Perdendo Vendas</span>...
            <br />
            <span className="gradient-text text-3xl md:text-4xl">Ou Escolher o Crescimento Previsível.</span>
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            O próximo passo para destravar o seu faturamento. Atenção: Vagas Limitadas!
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
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 border border-red-500/30 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <AlertCircle size={16} />
              Vagas Limitadas - Agende sua Sessão
            </div>
            
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Agende Seu Diagnóstico Estratégico</span> Gratuito
            </h3>
            
            <p className="text-lg text-gray mb-8">
              Uma análise completa para entender o potencial de recuperação e automação de vendas
              que o Scala.AI™ pode trazer para o seu e-commerce.
            </p>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 md:flex-col md:text-center"
              >
                <Zap className="text-accent flex-shrink-0" size={20} />
                <span className="text-gray text-sm">{feature}</span>
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
              onClick={handleWhatsAppClick}
              className="btn-primary text-xl py-6 px-12 mb-4 group inline-flex items-center gap-4"
            >
              <Zap className="group-hover:scale-110 transition-transform" size={24} />
              Agendar Diagnóstico Estratégico Gratuito
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </button>
            
            <div className="text-sm text-gray space-y-1">
              <div>✓ 100% Gratuito • ✓ Sem Compromisso • ✓ Garanta sua Vaga!</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTAFinal