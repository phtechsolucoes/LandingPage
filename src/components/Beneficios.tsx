'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  RefreshCw, // Used for Fidelização
  Zap, // Used for Tranquilidade
  Target, // Used for Competitividade
  ArrowRight,
} from 'lucide-react'

const Beneficios = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Recupera vendas perdidas",
      description: "Carrinhos abandonados, PIX expirados, boletos pendentes. Resgatamos o que estava sendo desperdiçado.",
    },
    {
      icon: RefreshCw,
      title: "Aumenta recompra",
      description: "Fluxos inteligentes que ativam clientes inativos e vendem mais para quem já confia na sua marca.",
    },
    {
      icon: Zap,
      title: "Reduz custos operacionais",
      description: "Automação que funciona 24/7. Você economiza tempo, dinheiro e ainda aumenta a conversão.",
    },
    {
      icon: Target,
      title: "Dá previsibilidade de faturamento",
      description: "Menos incerteza, mais controle. Você sabe exatamente o que esperar do seu funil de vendas.",
    }
  ]
  
  const handleDiagnosticoClick = () => {
    window.location.href = '/diagnostico'
  }

  return (
    <section id="beneficios" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-arthaus text-3xl md:text-5xl mb-6">
            O que você ganha ao trabalhar com a <span className="gradient-text">Scala.AI™</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Não é só tecnologia. É crescimento real, previsível e sustentável.
          </p>
        </motion.div>

        {/* Detailed Benefits Grid (now simplified to the 4 main points) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="glass-card p-6 text-center hover:bg-slate-800/60 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className="text-accent" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA to close the section */}
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
           <button
            onClick={handleDiagnosticoClick}
            className="btn-primary text-lg py-3 px-6 inline-flex items-center gap-2 group"
          >
            Fazer Diagnóstico Gratuito
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
          <p className="text-sm text-muted mt-4">
            Libera você para focar em estratégia
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Beneficios
