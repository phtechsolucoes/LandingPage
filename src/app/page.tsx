'use client'

import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problema from '@/components/Problema'
import SolucaoEndToEnd from '@/components/SolucaoEndToEnd'
import ComoFunciona from '@/components/ComoFunciona'
import Beneficios from '@/components/Beneficios'
import ProvasDeCapacidade from '@/components/ProvaSocial'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'
import FloatingWhatsappButton from '@/components/FloatingWhatsappButton' // 1. IMPORTAÇÃO DO COMPONENTE FLUTUANTE

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        <Hero />
        <Problema />
        <SolucaoEndToEnd />
        <ComoFunciona />
        <Beneficios />
        <ProvasDeCapacidade />
        <CTAFinal />
      </main>
      <Footer />
      {/* 2. RENDERIZAÇÃO: O botão é colocado aqui para flutuar sobre todo o conteúdo da página, fora da tag <main> */}
      <FloatingWhatsappButton /> 
    </>
  )
}
