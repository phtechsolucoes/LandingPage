'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, TrendingUp, Users, ShoppingCart, BarChart3, Target, Zap, Brain, Store, MessageCircle } from 'lucide-react'

const ProvasDeCapacidade = () => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/5575982300164?text=Olá%20PH%20Tech%20Soluções,%20tenho%20interesse%20no%20ecossistema%20Scala.AI%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica%20gratuita'
    window.open(whatsappUrl, '_blank', 'noopener')
  }

  const resultPotentials = [
    {
      icon: Store,
      segment: 'Lojas de Moda & Variedades',
      potential: 'Potencial de crescimento: 25-45%',
      challenges: [
        'Estoque sazonal desbalanceado',
        'Baixa conversão online (2-3%)',
        'Experiência de compra genérica'
      ],
      scalaAISolution: [
        'IA de Personalização para campanhas direcionadas',
        'IA de Estoque para previsão de tendências sazonais',
        'IA de Conversão para atendimento automatizado'
      ],
      expectedResults: [
        'ROI potencial: 150-250% em 12 meses',
        'Redução de estoque parado: 25-40%',
        'Aumento no ticket médio: 15-30%',
        'Conversão online: +20-50%'
      ]
    },
    {
      icon: ShoppingCart,
      segment: 'Supermercados & Alimentação',
      potential: 'Potencial de otimização: 30-55%',
      challenges: [
        'Perdas por vencimento (3-8% do faturamento)',
        'Demanda sazonal imprevisível',
        'Gestão manual de reposição'
      ],
      scalaAISolution: [
        'IA de Estoque Inteligente com previsão de demanda',
        'IA de Decisão para otimização de compras',
        'Automação de reposição baseada em histórico'
      ],
      expectedResults: [
        'Redução de perdas: 30-60%',
        'Otimização de capital de giro: 15-25%',
        'Precisão de previsão: 75-85%',
        'Eficiência operacional: +20-40%'
      ]
    },
    {
      icon: Users,
      segment: 'Farmácias & Saúde',
      potential: 'Potencial de fidelização: 35-65%',
      challenges: [
        'Baixa fidelização de clientes (20-30%)',
        'Atendimento limitado ao horário comercial',
        'Dificuldade em vendas cruzadas'
      ],
      scalaAISolution: [
        'IA de Personalização baseada no perfil de saúde',
        'IA de Conversão com chatbot especializado em saúde',
        'IA de Decisão para recomendações inteligentes'
      ],
      expectedResults: [
        'Fidelização: +40-80%',
        'Vendas cruzadas: +25-60%',
        'Atendimento 24/7: Cobertura completa',
        'NPS potencial: 65-80 pontos'
      ]
    }
  ]

  const scalaFormula = [
    {
      icon: Brain,
      title: 'IA',
      subtitle: 'Inteligência Artificial',
      description: 'Algoritmos que analisam dados do seu varejo e sugerem estratégias baseadas em padrões reais',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Ferramentas',
      subtitle: 'Tecnologia Integrada',
      description: 'Plataforma que se conecta aos seus sistemas existentes sem interrupção da operação',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Pessoas',
      subtitle: 'Capacitação Humana',
      description: 'Treinamento prático para sua equipe usar as ferramentas e processos de forma eficiente',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Target,
      title: 'Processos',
      subtitle: 'Metodologia Estruturada',
      description: 'Implementação gradual em 90 dias com métricas transparentes e metas realistas',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Resultados',
      subtitle: 'Crescimento Sustentável',
      description: 'Melhorias consistentes e mensuráveis com foco em eficiência operacional real',
      color: 'from-gradient-start to-gradient-end'
    }
  ]

  const processFlow = [
    { 
      step: '1. Análise', 
      description: 'Mapeamento de dados', 
      color: 'from-blue-500 to-blue-600',
      icon: BarChart3
    },
    { 
      step: '2. IA Setup', 
      description: 'Configuração dos módulos', 
      color: 'from-purple-500 to-purple-600',
      icon: Brain
    },
    { 
      step: '3. Integração', 
      description: 'Conexão com sistemas', 
      color: 'from-green-500 to-green-600',
      icon: Zap
    },
    { 
      step: '4. Resultados', 
      description: 'ROI comprovado', 
      color: 'from-orange-500 to-orange-600',
      icon: TrendingUp
    }
  ]

  const guarantees = [
    { icon: Target, text: 'Implementação personalizada para seu negócio' },
    { icon: BarChart3, text: 'Métricas transparentes e relatórios detalhados' },
    { icon: Zap, text: 'Suporte técnico durante toda a implementação' },
    { icon: Brain, text: 'IA configurada para seu segmento específico' },
    { icon: CheckCircle, text: 'Se em 90 dias o Scala.AI™ não aumentar em pelo menos 20% as vendas do seu e-commerce, você recebe 3 meses extras de acompanhamento estratégico gratuito até alcançar o resultado.' }
  ]

  return (
    <section id="provas" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-arthaus text-3xl md:text-5xl mb-6">
            Prova Social & Estudos de Mercado
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            📊 “Pesquisas recentes mostram que <strong>93% dos consumidores brasileiros preferem comprar pelo WhatsApp</strong>,
            mas a maioria das lojas não tem estrutura para responder rápido nem automatizar follow-ups. O resultado: mensagens não respondidas e vendas que somem.
            O Scala.AI™ transforma o WhatsApp em um canal de conversão previsível.”
          </p>
        </motion.div>

        {/* Scala.AI Formula */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-4">
            A Fórmula do <span className="gradient-text">Scala.AI™</span>
          </h3>
          <p className="text-center text-lg text-muted mb-12 max-w-2xl mx-auto">
            Nossa metodologia integra 4 pilares fundamentais que, juntos, 
            geram resultados exponenciais no seu varejo.
          </p>
          
          {/* Simplified formula presentation: keep the pillars succinct and avoid explicit ROI claims */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            {scalaFormula.map((element, index) => {
              const IconComponent = element.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${element.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h4 className="font-bold text-white text-lg">{element.title}</h4>
                    <p className="text-accent text-sm">{element.subtitle}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Result Potentials by Segment */}
        <div className="space-y-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Potencial por Segmento</span> de Varejo
          </h3>
          
          {resultPotentials.map((potential, index) => {
            const IconComponent = potential.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-8 hover:bg-slate-800/60 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                  {/* Segment Header */}
                  <div className="lg:col-span-4 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">{potential.segment}</h4>
                        <p className="text-accent text-lg font-semibold">{potential.potential}</p>
                      </div>
                    </div>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h5 className="text-lg font-semibold text-red-300 mb-3">Desafios Comuns</h5>
                    <ul className="space-y-2">
                      {potential.challenges.map((challenge, challengeIndex) => (
                        <li key={challengeIndex} className="text-muted text-sm flex items-start gap-2">
                          <span className="text-red-400 text-xs mt-1">●</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Scala.AI Solution */}
                  <div>
                    <h5 className="text-lg font-semibold text-blue-300 mb-3">Solução Scala.AI™</h5>
                    <ul className="space-y-2">
                      {potential.scalaAISolution.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="text-muted text-sm flex items-start gap-2">
                          <span className="text-blue-400 text-xs mt-1">●</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expected Results */}
                  <div className="lg:col-span-2">
                    <h5 className="text-lg font-semibold text-green-300 mb-3">Resultados Esperados</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {potential.expectedResults.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center gap-2 bg-green-900/20 border border-green-500/20 rounded-lg p-3">
                          <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                          <span className="text-sm text-white font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Processo</span> Scala.AI™ em 90 Dias
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processFlow.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="glass-card p-6 hover:bg-slate-800/60 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-white">{step.step}</h4>
                    <p className="text-muted text-sm">{step.description}</p>
                  </div>
                  
                  {/* Arrow */}
                  {index < processFlow.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-accent">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 mb-16 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Nossas <span className="gradient-text">Garantias</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white/5"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-white" size={20} />
                  </div>
                  <span className="text-white font-medium">{guarantee.text}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 text-center bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Pronto para <span className="gradient-text">liberar todo esse potencial</span>?
          </h3>
          
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Estes números podem ser realidade no seu varejo. Agende uma sessão estratégica gratuita 
            e descubra exatamente qual o potencial do Scala.AI™ para o seu negócio específico.
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="btn-primary text-lg py-4 px-8 inline-flex items-center gap-3 group"
          >
            <Zap className="group-hover:scale-110 transition-transform" size={20} />
            Descobrir meu potencial agora
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </motion.div>

        {/* Quem Atendemos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Quem Atendemos</h3>
          <p className="text-muted max-w-3xl mx-auto">
            E-commerces de <strong>moda feminina</strong>, lojas de <strong>biquínis</strong> e marcas de <strong>joias e acessórios</strong>
            com faturamento entre <strong>R$ 200k e R$ 1M/mês</strong>. Se esse é o seu perfil e você investe em tráfego pago, o próximo passo é destravar crescimento com previsibilidade.
          </p>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: 2, 
          duration: 0.5, 
          type: "spring", 
          stiffness: 200, 
          damping: 15 
        }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          onClick={handleWhatsAppClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
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
          title="Fale conosco no WhatsApp"
        >
          <MessageCircle 
            size={28} 
            className="group-hover:scale-110 transition-transform duration-300" 
          />
        </motion.button>
        
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ 
            delay: 3,
            duration: 4,
            times: [0, 0.1, 0.9, 1],
            repeat: Infinity,
            repeatDelay: 8
          }}
          className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
        >
          💬 Converse com um especialista!
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default ProvasDeCapacidade
