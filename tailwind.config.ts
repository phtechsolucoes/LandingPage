import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1362f5',
        primaryLight: '#1297f4',
        accent: '#14d2f5',
        navy: '#091638',
        gray: '#969ca9',
        success: '#088d09',
      },
      fontFamily: {
        'arthaus': ['Arthaus Bold', 'sans-serif'],
        'body': ['Century Gothic', 'Poppins', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
export default config
