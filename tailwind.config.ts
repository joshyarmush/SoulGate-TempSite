import type { Config } from 'tailwindcss'
import designTokens from './design-tokens.json'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: designTokens.colors.background,
        social: designTokens.colors.social,
      },
      spacing: {
        'social-gap': designTokens.spacing['social-buttons-gap'],
        'social-gap-mobile': designTokens.spacing['social-buttons-gap-mobile'],
        'logo-margin': designTokens.spacing['logo-margin-top'],
        'social-top': designTokens.spacing['social-buttons-top'],
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'full': '1920px',
      },
    },
  },
  plugins: [],
}
export default config