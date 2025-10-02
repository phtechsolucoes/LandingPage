'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const FloatingWhatsappButton = () => {
  const handleWhatsAppClick = () => {
    // URL de WhatsApp com mensagem pré-definida para a CTA principal
    const whatsappUrl = 'https://wa.me/5575982300164?text=Olá%20PH%20Tech%20Soluções,%20tenho%20interesse%20no%20ecossistema%20Scala.AI%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica%20gratuita'
    window.open(whatsappUrl, '_blank', 'noopener')
  }

  return (
    // Div que garante a fixação e o Z-index alto
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 0.5, // Aparece logo após o load inicial da página
        duration: 0.5, 
        type: "spring", 
        stiffness: 200, 
        damping: 15 
      }}
      className="fixed bottom-6 right-6 z-[100]" // Z-index alto para sobrepor tudo
    >
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        // Animação de Pulsar (efeito "ew" que chama a atenção)
        animate={{ 
          boxShadow: [
            "0 0 0 0 rgba(37, 211, 102, 0.7)",
            "0 0 0 10px rgba(37, 211, 102, 0)",
            "0 0 0 20px rgba(37, 211, 102, 0)",
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center group transition-all duration-300"
        title="Agende seu Diagnóstico estratégico pelo WhatsApp"
      >
        <MessageCircle 
          size={28} 
          className="group-hover:scale-110 transition-transform duration-300" 
        />
      </motion.button>
      
      {/* Tooltip de chamamento rápido (opcional, pode ser removido se for excessivo) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ 
          delay: 2, // Atraso para aparecer após o botão
          duration: 4,
          times: [0, 0.1, 0.9, 1],
          repeat: Infinity,
          repeatDelay: 8
        }}
        className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg hidden md:block"
      >
        💬 **Call Gratuita!** Agende Agora!
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </motion.div>
    </motion.div>
  )
}

export default FloatingWhatsappButton
