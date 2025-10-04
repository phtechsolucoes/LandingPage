import React from 'react'
import './globals.css'

// Temporary type until Next.js is installed
type Metadata = {
  title: string
  description: string
  keywords: string
  authors: { name: string }[]
  viewport: string
}

// SEO OTIMIZADO - Foco em Consultoria de Crescimento
export const metadata: Metadata = {
  title: 'Scala.AI™ by PhTech — Consultoria de Crescimento com IA para E-commerce',
  description: 'Tenha uma visão clara de como sua loja pode escalar com IA. Descubra como aumentar vendas e previsibilidade sem inflar custos. Diagnóstico gratuito.',
  keywords: 'consultoria ecommerce, crescimento com ia, automação vendas, recuperar vendas perdidas, previsibilidade faturamento, escalar loja virtual, inteligência artificial ecommerce, Scala.AI',
  authors: [{ name: 'PhTech Soluções' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Google Analytics gtag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2X1Y2M8L67"></script>
        <script 
          dangerouslySetInnerHTML={{ 
            __html: `
              window.dataLayer = window.dataLayer || []; 
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date()); 
              gtag('config', 'G-2X1Y2M8L67');
            ` 
          }} 
        />
      </head>
      <body className="font-body">
        {children}
      </body>
    </html>
  )
}
