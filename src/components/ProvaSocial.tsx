'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight, AlertTriangle } from 'lucide-react'

const ProvaSocial = () => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/5575982300164?text=Olá%20PH%20Tech%20Soluções,%20tenho%20interesse%20no%20ecossistema%20Scala.AI%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica%20gratuita'
    window.open(whatsappUrl, '_blank', 'noopener')
  }

  return (
    <section id="prova-social" className="py-20 px-4 relative bg-navy-light">
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
            Onde Suas Vendas Estão se <span className="text-red-400">Perdendo</span>?
          </h2>
          {/* COPY REVISADA: Corpo */}
          <p className="text-xl text-muted max-w-4xl mx-auto">
            A dor da perda é universal. Veja o que o mercado diz sobre o canal que você está subestimando.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card p-8 md:p-12 text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20"
        >
          <div className="flex items-center justify-center mb-6">
             <MessageCircle className="text-green-500 w-12 h-12 mr-4" />
             <h3 className="font-bold text-4xl md:text-5xl text-white">
                93%
             </h3>
          </div>
          {/* COPY REVISADA: Estatística de Compra */}
          <p className="text-xl md:text-2xl font-bold text-white mb-6">
            dos consumidores brasileiros <span className="text-accent">preferem comprar pelo WhatsApp</span>.
          </p>
          {/* COPY REVISADA: Consequência da Falta de Automação */}
          <p className="text-lg text-muted max-w-3xl mx-auto mb-8">
            Mas a maioria das lojas não tem estrutura para responder rápido nem automatizar follow-ups. O resultado: mensagens não respondidas e vendas que somem.
          </p>
          <p className="text-xl font-bold text-accent flex items-center justify-center gap-3">
             <AlertTriangle size={24} /> O Scala.AI™ transforma o WhatsApp em um canal de conversão previsível.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={handleWhatsAppClick}
            className="btn-primary text-lg py-3 px-6 inline-flex items-center gap-2 group"
          >
            Quero saber Mais
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </motion.div>
        
      </div>
    </section>
  )
}

export default ProvaSocial
