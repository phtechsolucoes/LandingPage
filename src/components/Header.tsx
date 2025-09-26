'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const navItems = [
    { label: 'Processo', href: '#processo', id: 'processo' },
    { label: 'Como Funciona', href: '#como-funciona', id: 'como-funciona' },
    { label: 'Benefícios', href: '#beneficios', id: 'beneficios' },
    { label: 'Provas', href: '#provas', id: 'provas' },
    { label: 'Dúvidas', href: '#faq', id: 'faq' },
  ]

  // Scroll listener para detectar seção ativa e estado do header
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)

      // Calcula progresso do scroll
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled_percentage = (winScroll / height) * 100
      setScrollProgress(scrolled_percentage)

      // Detecta seção ativa
      const sections = navItems.map(item => item.id)
      let currentSection = ''

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Executa uma vez para definir estado inicial

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll personalizado
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    
    // Fecha menu mobile após clique
    setIsMenuOpen(false)
  }

  const handleCTAClick = () => {
    if (process.env.NEXT_PUBLIC_N8N_FORM_URL) {
      window.open(process.env.NEXT_PUBLIC_N8N_FORM_URL, '_blank', 'noopener')
    }
  }

  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/5575982300164?text=Olá%20PH%20Tech%2C%20quero%20meu%20diagnóstico%20gratuito'
    window.open(whatsappUrl, '_blank', 'noopener')
  }

  return (
    <>
      {/* Progress indicator */}
      <div 
        className="progress-indicator"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-card border-b border-white/20 backdrop-blur-xl' 
          : 'bg-transparent border-b border-white/5'
      }`}>
        <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setIsMenuOpen(false)
              }}
              className="focus:outline-none focus:ring-2 focus:ring-accent rounded-lg p-1 transition-transform hover:scale-105 flex items-center gap-3"
            >
              <Image 
                src="/logo-phtech.png" 
                alt="PH Tech Soluções - Voltar ao topo" 
                width={60} 
                height={60}
                className="h-20 w-auto"
                priority
              />
            </button>
          </motion.div>          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-accent bg-accent/10 border border-accent/20' 
                    : 'text-gray hover:text-accent hover:bg-white/5'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primaryLight/20 rounded-lg -z-10"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center gap-3"
          >
            <button
              onClick={handleWhatsAppClick}
              className="btn-secondary text-sm px-4 py-2"
            >
              WhatsApp Agora
            </button>
            <button
              onClick={handleCTAClick}
              className="btn-primary text-sm px-6 py-3"
            >
              Quero meu diagnóstico
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden py-4 border-t border-white/10 bg-navy/95 backdrop-blur-xl"
            >
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-accent bg-accent/10 border border-accent/20' 
                        : 'text-gray hover:text-accent hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight 
                      size={16} 
                      className={`transition-transform duration-300 ${
                        activeSection === item.id ? 'rotate-90' : ''
                      }`} 
                    />
                  </motion.a>
                ))}
                <div className="mt-4 space-y-3">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                    onClick={() => {
                      handleWhatsAppClick()
                      setIsMenuOpen(false)
                    }}
                    className="btn-secondary text-sm w-full"
                  >
                    Fale Conosco
                  </motion.button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
    </>
  )
}

export default Header
