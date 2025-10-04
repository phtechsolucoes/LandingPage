'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAllBlogPosts } from '@/types/blog'

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 md:pt-28 px-4 py-12 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen size={16} />
              Blog Scala.AI™
            </div>

            <h1 className="font-arthaus text-4xl md:text-6xl mb-6 leading-tight">
              Conteúdo sobre <span className="gradient-text">crescimento real</span> para e-commerce
            </h1>

            <p className="text-xl text-muted max-w-3xl mx-auto">
              Estratégias, cases e insights para você escalar sua loja com inteligência.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="glass-card p-6 h-full hover:bg-slate-800/60 transition-all duration-300 group cursor-pointer">
                    {/* Category Badge */}
                    <div className="inline-flex items-center bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
                      {post.category}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-muted mb-4 line-clamp-3">
                      {post.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-muted mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{new Date(post.publishedAt).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{post.readTime} de leitura</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                      Ler artigo completo
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 glass-card p-8 md:p-12 text-center bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para <span className="gradient-text">aplicar isso</span> na sua loja?
            </h2>
            <p className="text-lg text-muted mb-6">
              Faça um diagnóstico gratuito e descubra como implementar essas estratégias.
            </p>
            <Link
              href="/diagnostico"
              className="btn-primary inline-flex items-center gap-3 text-lg"
            >
              Fazer Diagnóstico Gratuito
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
