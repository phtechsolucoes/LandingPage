'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, CheckCircle, Zap, Gift, AlertCircle } from 'lucide-react'

const CTAFinal = () => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/5575982300164?text=Olá%20PH%20Tech%2C%20quero%20meu%20diagnóstico%20gratuito'
    window.open(whatsappUrl, '_blank', 'noopener')
  }

  const features = [
    "Análise completa do processo atual",
    "Identificação de pontos de melhoria",
    "Plano de implementação personalizado",
    "Métricas e indicadores sugeridos",
    "Roadmap de automação estruturado"
  ]

  return (
    <section id="faq" className="py-20 px-4 relative overflow-hidden">
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
          <h2 className="font-arthaus text-3xl md:text-6xl mb-6 leading-tight">
            Pronto para <span className="gradient-text">Transformar</span> 
            <br />
            <span className="text-2xl md:text-4xl">seus Processos de Venda?</span>
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Comece com um diagnóstico gratuito e detalhado do seu processo atual. 
            <span className="text-white font-medium">Sem compromisso, análise completa, plano personalizado.</span>
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
              <CheckCircle size={16} />
              Diagnóstico Gratuito
            </div>
            
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Diagnóstico Completo</span> do seu Processo
            </h3>
            
            <p className="text-lg text-gray mb-8">
              Análise detalhada da sua operação atual com plano de implementação personalizado.
              <span className="text-white font-medium"> Sem compromisso, totalmente gratuito.</span>
            </p>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="text-accent flex-shrink-0" size={20} />
                <span className="text-gray">{feature}</span>
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
              Agendar meu diagnóstico agora
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </button>
            
            <div className="text-sm text-gray space-y-1">
              <div>✓ 100% Gratuito • ✓ Sem Compromisso • ✓ Análise Completa</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray max-w-2xl mx-auto">
            Nosso diagnóstico vai mostrar exatamente onde seu processo pode melhorar 
            e qual o potencial de crescimento que você tem pela frente.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTAFinal
