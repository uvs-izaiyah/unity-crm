import type { Config } from 'tailwindcss';

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        royal: 'rgb(var(--color-royal) / <alpha-value>)',
        'royal-dark': 'rgb(var(--color-royal-dark) / <alpha-value>)',
        midnight: 'rgb(var(--color-black) / <alpha-value>)',
        gold: 'rgb(var(--color-gold) / <alpha-value>)',
        'gold-light': 'rgb(var(--color-gold-light) / <alpha-value>)',
        ivory: 'rgb(var(--color-white) / <alpha-value>)'
      },
      boxShadow: {
        luxe: '0 20px 45px rgba(4, 8, 20, 0.35)',
        glow: '0 0 0 1px rgba(212, 175, 55, 0.35)'
      },
      borderRadius: {
        '2xl': '1.5rem'
      }
    }
  },
  plugins: []
} satisfies Config;
