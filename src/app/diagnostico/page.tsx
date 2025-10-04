'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticoForm from '@/components/DiagnosticoForm'

export default function DiagnosticoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 md:pt-28 px-4 py-12 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-highlight/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap size={16} />
              Diagnóstico Premium com IA
            </div>

            <h1 className="font-arthaus text-4xl md:text-6xl mb-6 leading-tight">
              Descubra onde sua loja está{' '}
              <span className="gradient-text">deixando dinheiro na mesa</span>
            </h1>

            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              Responda 4 perguntas simples e receba uma análise personalizada sobre como aumentar suas vendas com IA.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              {[
                'Análise gratuita em 2 minutos',
                'Identificação de oportunidades',
                'Agendamento direto com especialista'
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted justify-center"
                >
                  <CheckCircle className="text-primary flex-shrink-0" size={16} />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <DiagnosticoForm />
          </motion.div>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted">
              🔒 Seus dados estão seguros. Não compartilhamos com terceiros.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
