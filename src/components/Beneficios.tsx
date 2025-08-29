'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  Zap, 
  Shield,
  BarChart3,
  Target,
  Smartphone,
  Mail,
  MessageSquare,
  Gauge
} from 'lucide-react'

const Beneficios = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Conversão Otimizada",
      description: "Melhore sua taxa de conversão com automações inteligentes e processos estruturados baseados em dados."
    },
    {
      icon: Clock,
      title: "Tempo Recuperado",
      description: "Automatize tarefas repetitivas e libere sua equipe para focar no que realmente importa: relacionamento com clientes."
    },
    {
      icon: DollarSign,
      title: "ROI Previsível",
      description: "Investimento que se justifica com o aumento gradual em vendas e redução de desperdícios operacionais."
    },
    {
      icon: Users,
      title: "Controle Total de Leads",
      description: "Sistema que garante que nenhum lead seja esquecido ou deixado sem follow-up adequado."
    },
    {
      icon: Zap,
      title: "Resposta em Segundos",
      description: "Qualificação automática que responde leads instantaneamente, aumentando significativamente as chances de conversão."
    },
    {
      icon: Shield,
      title: "Implementação Guiada",
      description: "Acompanhamento passo a passo para garantir que o processo funcione adequadamente na sua empresa."
    },
    {
      icon: BarChart3,
      title: "Dashboards em Tempo Real",
      description: "Visualize performance, ROI e métricas importantes com relatórios automatizados e em tempo real."
    },
    {
      icon: Target,
      title: "Segmentação Inteligente",
      description: "Qualifique e segmente leads automaticamente para abordagens mais assertivas e personalizadas."
    },
    {
      icon: Smartphone,
      title: "Multi-canal Integrado",
      description: "Gerencie leads de todas as fontes em um só lugar: site, redes sociais, anúncios e mais."
    },
    {
      icon: Mail,
      title: "Email Marketing Automático",
      description: "Sequências de email inteligentes que nutrem leads e os conduzem através do funil de vendas."
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Business API",
      description: "Automação completa via WhatsApp com mensagens personalizadas e follow-ups automáticos."
    },
    {
      icon: Gauge,
      title: "Performance Otimizada",
      description: "Melhoria contínua baseada em dados e inteligência artificial para máxima performance."
    }
  ]

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
            <span className="gradient-text">Benefícios</span> que Transformam seu Negócio
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Descubra como nossa solução pode revolucionar seus resultados e 
            levar sua empresa para o próximo nível.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="glass-card p-6 hover:bg-slate-800/60 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Implementação <span className="gradient-text">Estruturada</span> e Transparente
            </h3>
            <p className="text-lg text-gray max-w-3xl mx-auto">
              Cada etapa é planejada e executada com métricas claras, 
              garantindo que você acompanhe todo o progresso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <div className="text-lg font-bold gradient-text mb-2">Diagnóstico</div>
              <div className="text-gray text-sm">Análise completa do processo atual</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <div className="text-lg font-bold gradient-text mb-2">Implementação</div>
              <div className="text-gray text-sm">Execução guiada e acompanhada</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-white" size={32} />
              </div>
              <div className="text-lg font-bold gradient-text mb-2">Otimização</div>
              <div className="text-gray text-sm">Ajustes baseados em dados reais</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Beneficios

