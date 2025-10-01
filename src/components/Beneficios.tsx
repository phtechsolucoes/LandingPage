'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  ShoppingCart, 
  DollarSign, 
  Users, 
  Zap, 
  Brain,
  BarChart3,
  Target,
  Store,
  Package,
  MessageSquare,
  Clock,
  Shield,
  Smartphone,
  Eye,
  Settings
} from 'lucide-react'

const Beneficios = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Vendas Inteligentes",
      description: "Aumente suas vendas com IA que identifica oportunidades, personaliza ofertas e converte mais clientes automaticamente."
    },
    {
      icon: Package,
      title: "Estoque Otimizado",
      description: "Nunca mais fique sem produtos em alta demanda ou com excesso parado. IA prevê demanda com 95% de precisão."
    },
    {
      icon: Users,
      title: "Clientes Fidelizados",
      description: "Crie experiências personalizadas que fazem seus clientes voltarem sempre, aumentando o valor de vida do cliente."
    },
    {
      icon: Brain,
      title: "Decisões Baseadas em Dados",
      description: "Pare de decidir no achismo. Receba insights em tempo real sobre seu negócio para tomar decisões certeiras."
    },
    {
      icon: MessageSquare,
      title: "Atendimento 24/7",
      description: "Chatbots inteligentes que atendem, qualificam e convertem clientes mesmo quando sua loja está fechada."
    },
    {
      icon: Clock,
      title: "Tempo Recuperado",
      description: "Automatize processos repetitivos e libere sua equipe para focar em estratégia e relacionamento com clientes."
    },
    {
      icon: DollarSign,
      title: "ROI Sustentável",
      description: "Investimento focado em resultados reais. Melhoria contínua na performance financeira com métricas transparentes."
    },
    {
      icon: Target,
      title: "Campanhas Certeiras",
      description: "Marketing personalizado que realmente converte. Segmentação inteligente e ofertas sob medida para cada cliente."
    },
    {
      icon: BarChart3,
      title: "Métricas Transparentes",
      description: "Dashboards em tempo real que mostram exatamente onde seu dinheiro está sendo ganho ou perdido."
    },
    {
      icon: Shield,
      title: "Implementação Segura",
      description: "Processo estruturado em 90 dias com acompanhamento dedicado. Sua operação nunca para durante a transição."
    },
    {
      icon: Smartphone,
      title: "Integração Total",
      description: "Conecta todos os seus sistemas (PDV, e-commerce, redes sociais) em uma única plataforma inteligente."
    },
    {
      icon: Settings,
      title: "Otimização Contínua",
      description: "IA que aprende constantemente e otimiza seus processos automaticamente, melhorando resultados dia após dia."
    }
  ]

  const transformationAreas = [
    {
      icon: Store,
      title: "Operação",
      description: "Processos otimizados e automatizados",
      benefits: ["Redução de 70% em tarefas manuais", "Eficiência operacional +150%", "Menos erros, mais precisão"]
    },
    {
      icon: Users,
      title: "Experiência do Cliente", 
      description: "Jornada personalizada e inteligente",
      benefits: ["Satisfação +85%", "Tempo de resposta: segundos", "Personalização em escala"]
    },
    {
      icon: TrendingUp,
      title: "Resultados Financeiros",
      description: "Crescimento sustentável e previsível", 
      benefits: ["ROI 300-500%", "Vendas +150-400%", "Margem otimizada +40%"]
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
            Benefícios Tangíveis
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto text-left">
            Com o Scala.AI™, você terá:
          </p>

          <ul className="mt-6 max-w-2xl mx-auto text-left space-y-3 text-muted">
            <li><strong>Mais vendas imediatas:</strong> recuperação automática de carrinhos e PIX.</li>
            <li><strong>Mais fidelização:</strong> fluxos de recompra inteligentes.</li>
            <li><strong>Mais tranquilidade:</strong> uma operação que roda no piloto automático.</li>
            <li><strong>Mais competitividade:</strong> enquanto outros perdem vendas, sua loja escala.</li>
          </ul>
        </motion.div>

        {/* Transformation Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Áreas de Transformação</span> do Seu Negócio
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {transformationAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-card p-8 text-center hover:bg-slate-800/60 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white">{area.title}</h4>
                  <p className="text-accent mb-6 font-medium">{area.description}</p>
                  
                  <div className="space-y-3">
                    {area.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Detailed Benefits Grid */}
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
                  delay: index * 0.05,
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

        {/* Implementation Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="gradient-text">Implementação Scala.AI™</span>: Segura e Estruturada
            </h3>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Processo em 90 dias que transforma seu varejo sem interromper suas operações. 
              Cada etapa é planejada, executada e monitorada com métricas claras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-white" size={32} />
              </div>
              <div className="text-lg font-bold gradient-text mb-2">Análise & Mapeamento</div>
              <div className="text-muted text-sm mb-4">Dias 1-30</div>
              <div className="text-muted text-xs leading-relaxed">
                Análise profunda dos seus dados e processos para identificar oportunidades específicas de IA
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="text-white" size={32} />
              </div>
              <div className="text-lg font-bold gradient-text mb-2">Integração & Setup</div>
              <div className="text-muted text-sm mb-4">Dias 31-60</div>
              <div className="text-muted text-xs leading-relaxed">
                Configuração e ativação dos módulos Scala.AI™ integrados aos seus sistemas existentes
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <div className="text-lg font-bold gradient-text mb-2">Otimização & Resultados</div>
              <div className="text-muted text-sm mb-4">Dias 61-90</div>
              <div className="text-muted text-xs leading-relaxed">
                Ajustes contínuos e otimização baseada em dados reais para maximizar ROI
              </div>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  )
}

export default Beneficios

