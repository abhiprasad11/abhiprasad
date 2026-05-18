import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-color)',
        foreground: 'var(--text-color)',
        primary: 'var(--gold-accent)',
        accent: 'var(--rust-accent)',
        card: '#1a1a1a',
        border: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['var(--secondary-font)', 'sans-serif'],
        serif: ['var(--primary-font)', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      keyframes: {
        'blur-fade-in': {
          '0%': { filter: 'blur(10px)', transform: 'scale(1.05)', opacity: '0' },
          '100%': { filter: 'blur(0px)', transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        'blur-fade-reveal': 'blur-fade-in 1200ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      }
    },
  },
  plugins: [],
} satisfies Config;
