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

export const metadata: Metadata = {
  title: 'Scala.AI™ by PhTech — WhatsApp para e-commerce e automação de vendas',
  description: 'Scala.AI™ by PhTech transforma WhatsApp e checkout em uma máquina automática de vendas. Recuperar vendas, automação e inteligência artificial para e-commerce.',
  keywords: 'WhatsApp para e-commerce, recuperar vendas, automação, inteligência artificial para e-commerce, aumento de vendas, Scala.AI, automação de checkout',
  authors: [{ name: 'Ph Tech Soluções' }],
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
        {/* Google Analytics gtag - inserted after copy verification per user request */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2X1Y2M8L67"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2X1Y2M8L67');` }} />
      </head>
      <body className="font-body">
        {children}
      </body>
    </html>
  )
}
