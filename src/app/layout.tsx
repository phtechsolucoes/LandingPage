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
  title: 'Ph Tech Soluções',
  description: 'Conheça a consultoria de Scala.ai que vai levar seu comércio a outro patamar!',
  keywords: 'ia, automação, vendas, conversão, marketing digital',
  authors: [{ name: 'Landing Page' }],
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
      </head>
      <body className="font-body">
        {children}
      </body>
    </html>
  )
}
