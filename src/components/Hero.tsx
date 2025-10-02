'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

const Hero = () => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/5575982300164?text=Olá%20PH%20Tech%20Soluções,%20tenho%20interesse%20no%20ecossistema%20Scala.AI%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica%20gratuita'
    window.open(whatsappUrl, '_blank', 'noopener')
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-highlight/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-full text-sm font-medium">
              <Zap size={16} />
              Tecnologia Exclusiva Scala.AI™ by PhTech
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-arthaus text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
          >
            {/* COPY REVISADA: Foco em Lucro e Máquina de Vendas */}
            Transforme o <span className="gradient-text">WhatsApp</span>
            <br />
            em uma <span className="text-accent">Máquina de Vendas com IA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            {/* COPY REVISADA: Foco na Ambição e Triplicar Resultados */}
            Pare de depender só de tráfego pago. Recupere até 35% das vendas perdidas, triplique a taxa de recompra e garanta previsibilidade de caixa em até 90 dias com Inteligência Artificial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* CTA PRINCIPAL: ÚLTIMAS VAGAS */}
            <button
              onClick={handleWhatsAppClick}
              className="btn-primary flex items-center gap-3 text-lg group"
            >
              Quero Saber Mais
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <p className="text-sm text-gray font-medium">
              ✓ Avaliação Gratuita • ✓ Últimas Vagas para Acompanhamento
            </p>
          </motion.div>

          {/* Cards de Destaque (Atualizado com a nova copy) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { label: "+35% Vendas", desc: "Recuperação de Carrinho/PIX" },
              { label: "3x Recompra", desc: "Fidelização e Lifetime Value" },
              { label: "24/7", desc: "Operação Automática de Conversão" },
              { label: "90 Dias", desc: "Previsibilidade e Resultados" }
            ].map((benefit, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center glass-card p-4 hover:bg-slate-800/60 transition-all duration-300"
              >
                <div className="text-accent font-semibold text-base mb-1">
                  {benefit.label}
                </div>
                <div className="text-gray text-xs">
                  {benefit.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
