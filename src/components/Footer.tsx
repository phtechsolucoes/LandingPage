'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, ExternalLink } from 'lucide-react'

const Footer = () => {
  const handleInstagramClick = () => {
    window.open('https://instagram.com/phtechsolucoes_', '_blank', 'noopener')
  }

  return (
    <footer className="py-12 px-4 bg-navy/50 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Instagram Section */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-gray text-sm text-center md:text-left">
              Nos siga no Instagram para conteúdos de Automação e IA:
            </p>
            <motion.button
              onClick={handleInstagramClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-accent hover:text-primaryLight transition-colors duration-300 font-medium"
            >
              <Instagram size={20} />
              <span>@phtechsolucoes_</span>
              <ExternalLink size={14} />
            </motion.button>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray text-sm">
              © 2025 PH Tech Soluções – Todos os direitos reservados
            </p>
          </div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        />
      </div>
    </footer>
  )
}

export default Footer
