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
  // New benefits list (4 points)
  const benefits = [
    {
      icon: TrendingUp,
      title: "Mais Vendas Imediatas",
      description: "Recuperação automática de carrinhos e PIX expirados. Sua loja fatura mais no mesmo dia.",
    },
    {
      icon: RefreshCw,
      title: "Mais Fidelização e Recompra",
      description: "Fluxos de recompra inteligentes que trazem seus clientes de volta 3x mais rápido, maximizando o LTV.",
    },
    {
      icon: Zap,
      title: "Mais Tranquilidade Operacional",
      description: "Uma operação de conversão que roda no piloto automático 24/7, liberando seu tempo para focar na estratégia e no produto.",
    },
    {
      icon: Target,
      title: "Mais Competitividade e Escala",
      description: "Enquanto outros perdem 35% das vendas, sua loja escala o crescimento com previsibilidade e eficiência.",
    }
  ]
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/5575982300164?text=Olá%20PH%20Tech%20Soluções,%20tenho%20interesse%20no%20ecossistema%20Scala.AI%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica%20gratuita'
    window.open(whatsappUrl, '_blank', 'noopener')
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
          {/* COPY REVISADA: Título */}
          <h2 className="font-arthaus text-3xl md:text-5xl mb-6">
            <span className="gradient-text">Destrave o Crescimento</span>: 4 Resultados Imediatos
          </h2>
          {/* COPY REVISADA: Corpo */}
          <p className="text-xl text-muted max-w-3xl mx-auto">
            O Scala.AI™ é um investimento direto no seu faturamento. Esses são os benefícios tangíveis que você terá:
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
            onClick={handleWhatsAppClick}
            className="btn-primary text-lg py-3 px-6 inline-flex items-center gap-2 group"
          >
            Quero Agendar a Call Estratégica
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Beneficios
