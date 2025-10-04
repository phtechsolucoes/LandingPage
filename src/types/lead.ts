export interface LeadFormData {
  // Etapa 1: Sobre a loja
  name: string
  email: string
  phone: string
  storeUrl: string
  platform: string
  hasActiveStore: boolean
  
  // Etapa 2: Estrutura atual
  monthlyRevenue: string
  teamSize: string
  
  // Etapa 3: Marketing e operação
  adBudget: string
  hasActiveTraffic: boolean
  
  // Etapa 4: Dores e metas
  mainPain: string
  growthGoal: string
}

export interface Lead extends LeadFormData {
  score: number
  status: 'qualified' | 'warm' | 'early_stage'
  createdAt: Date
}

export const platformOptions = [
  'Shopify',
  'Nuvemshop',
  'WooCommerce',
  'VTEX',
  'Tray',
  'Outro'
]

export const revenueOptions = [
  'Menos de R$ 50k/mês',
  'R$ 50k - R$ 100k/mês',
  'R$ 100k - R$ 500k/mês',
  'Mais de R$ 500k/mês'
]

export const teamSizeOptions = [
  'Só eu',
  '2-4 pessoas',
  '5 ou mais pessoas'
]

export const adBudgetOptions = [
  'Menos de R$ 5k/mês',
  'R$ 5k - R$ 15k/mês',
  'Mais de R$ 15k/mês'
]
