'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight, AlertTriangle } from 'lucide-react'

const ProvaSocial = () => {
  const handleDiagnosticoClick = () => {
    window.location.href = '/diagnostico'
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
          <h2 className="font-arthaus text-3xl md:text-5xl mb-6">
            O potencial <span className="gradient-text">desperdiçado</span> que você não vê
          </h2>
          <p className="text-xl text-muted max-w-4xl mx-auto">
            Enquanto você investe em tráfego, uma parte enorme das oportunidades está escapando silenciosamente.
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
          <p className="text-xl md:text-2xl font-bold text-white mb-6">
            dos brasileiros <span className="text-accent">querem comprar pelo WhatsApp</span>.
          </p>
          <p className="text-lg text-muted max-w-3xl mx-auto mb-8">
            Mas responder rápido, nutrir leads e recuperar vendas perdidas exige mais do que boa vontade. Exige estrutura. E é exatamente isso que a Scala.AI™ constrói com você.
          </p>
          <p className="text-xl font-semibold text-white">
            Não é sobre instalar uma ferramenta. É sobre <span className="text-accent">criar previsibilidade</span>.
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
            onClick={handleDiagnosticoClick}
            className="btn-primary text-lg py-3 px-6 inline-flex items-center gap-2 group"
          >
            Descobrir Onde Estou Perdendo
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </motion.div>
        
      </div>
    </section>
  )
}

export default ProvaSocial
