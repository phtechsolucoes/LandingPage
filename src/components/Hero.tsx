"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/5575982300164?text=Ol%C3%A1%20PH%20Tech%20Solu%C3%A7%C3%B5es,%20tenho%20interesse%20no%20ecossistema%20Scala.AI%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20estrat%C3%A9gica%20gratuita'
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
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-full text-sm font-medium mb-6 mx-auto w-max">
              <Zap size={16} />
              Ecossistema Scala.AI™ by PhTech
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-arthaus text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
            >
              Transforme o WhatsApp e o Checkout da sua loja em uma <span className="gradient-text">Máquina Automática de Vendas</span> com o <span className="text-accent font-medium">Scala.AI™ by PhTech</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-lg md:text-xl text-gray max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Recupere até 35% das vendas perdidas, aumente 3x a recompra e conquiste previsibilidade de caixa em até 90 dias.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="btn-primary"
              >
                👉 Agendar Call Estratégica
              </motion.button>

              <motion.a
                href="#processo"
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver Como Funciona
              </motion.a>
            </motion.div>

            <p className="text-sm text-gray mt-4">
              ✓ Sem compromisso • ✓ Insights valiosos • ✓ Sessão estratégica gratuita
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { label: 'Recuperar vendas', desc: 'Automação de WhatsApp e recuperação de carrinhos' },
              { label: 'Aumentar recompra', desc: 'Fluxos inteligentes de fidelização' },
              { label: 'Previsibilidade', desc: 'Relatórios e decisões baseadas em IA' },
              { label: 'Operação automática', desc: 'Trabalha 24/7 sem intervenção manual' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.08 }}
                className="text-center glass-card p-4"
              >
                <div className="text-accent font-semibold text-sm mb-1">
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
