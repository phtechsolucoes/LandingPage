'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getBlogPost, getAllBlogPosts } from '@/types/blog'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = getBlogPost(slug)
  const allPosts = getAllBlogPosts().filter(p => p.slug !== slug).slice(0, 2)

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-24 px-4 py-12">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
            <Link href="/blog" className="text-accent hover:underline">
              ← Voltar para o blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/5575982300164?text=Olá! Li o artigo sobre ' + encodeURIComponent(post.title) + ' e gostaria de agendar uma conversa sobre a Scala.AI™'
    window.open(whatsappUrl, '_blank', 'noopener')
  }

  const handleDiagnosticoClick = () => {
    window.location.href = '/diagnostico'
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 md:pt-28 px-4 py-12 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        
        <article className="container mx-auto max-w-4xl relative z-10">
          {/* Back Link */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={18} />
            Voltar para o blog
          </Link>

          {/* Post Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {/* Category Badge */}
            <div className="inline-flex items-center bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
              {post.category}
            </div>

            {/* Title */}
            <h1 className="font-arthaus text-3xl md:text-5xl mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-muted mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime} de leitura</span>
              </div>
              <div className="text-sm">
                Por <span className="text-accent font-medium">{post.author}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-muted leading-relaxed">
              {post.description}
            </p>
          </motion.div>

          {/* CTA Top - WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 mb-12 bg-green-900/10 border-green-500/20"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <MessageCircle className="text-green-500" size={32} />
                <div>
                  <h3 className="font-semibold mb-1">Quer implementar isso na sua loja?</h3>
                  <p className="text-sm text-muted">Fale direto comigo no WhatsApp</p>
                </div>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors whitespace-nowrap"
              >
                Chamar no WhatsApp
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Post Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-invert prose-lg max-w-none mb-12"
          >
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .split('\n')
                  .map(line => {
                    // Headers
                    if (line.startsWith('# ')) return `<h1>${line.substring(2)}</h1>`
                    if (line.startsWith('## ')) return `<h2>${line.substring(3)}</h2>`
                    if (line.startsWith('### ')) return `<h3>${line.substring(4)}</h3>`
                    if (line.startsWith('#### ')) return `<h4>${line.substring(5)}</h4>`
                    
                    // Bold text
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return `<p class="font-bold text-xl mt-6 mb-4">${line.slice(2, -2)}</p>`
                    }
                    
                    // Lists
                    if (line.startsWith('- ✅')) return `<li class="text-green-400">${line.substring(4)}</li>`
                    if (line.startsWith('- ❌')) return `<li class="text-red-400">${line.substring(4)}</li>`
                    if (line.startsWith('- ')) return `<li>${line.substring(2)}</li>`
                    
                    // Empty lines
                    if (line.trim() === '') return '<br />'
                    
                    // Regular paragraphs
                    return `<p>${line}</p>`
                  })
                  .join('\n')
              }}
            />
          </motion.div>

          {/* CTA Middle - Diagnóstico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card p-8 md:p-12 my-16 text-center bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Descubra quanto <span className="gradient-text">você está perdendo</span> hoje
            </h2>
            <p className="text-lg text-muted mb-6 max-w-2xl mx-auto">
              Faça um diagnóstico gratuito e veja exatamente onde sua loja está deixando dinheiro na mesa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleDiagnosticoClick}
                className="btn-primary inline-flex items-center gap-3 text-lg"
              >
                Fazer Diagnóstico Gratuito
                <ArrowRight size={20} />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="btn-secondary inline-flex items-center gap-3 text-lg"
              >
                <MessageCircle size={20} />
                Chamar no WhatsApp
              </button>
            </div>
            <p className="text-sm text-muted mt-4">
              ✓ 100% Gratuito • ✓ Horários: 17:15-18:15 e 18:15-19:15
            </p>
          </motion.div>

          {/* Related Posts */}
          {allPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold mb-6">Continue lendo</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {allPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <div className="glass-card p-6 hover:bg-slate-800/60 transition-all duration-300 group cursor-pointer h-full">
                      <div className="inline-flex items-center bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3">
                        {relatedPost.category}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted text-sm mb-3 line-clamp-2">
                        {relatedPost.description}
                      </p>
                      <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                        Ler artigo
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="glass-card p-8 mt-16 text-center bg-accent/10 border-accent/20"
          >
            <h3 className="text-xl font-bold mb-3">
              Gostou do conteúdo? Compartilhe com outros empreendedores! 🚀
            </h3>
            <p className="text-muted mb-6">
              E se quiser transformar teoria em prática, estamos aqui para ajudar.
            </p>
            <button
              onClick={handleDiagnosticoClick}
              className="btn-primary inline-flex items-center gap-3"
            >
              Agendar Conversa Gratuita
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  )
}
