import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.css',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'rgb(var(--bg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
          surface: 'rgb(var(--bg-surface) / <alpha-value>)',
          elevated: 'rgb(var(--bg-elevated) / <alpha-value>)',
        },
        glass: {
          subtle: 'rgb(var(--glass-surface-rgb) / var(--glass-opacity-subtle))',
          light: 'rgb(var(--glass-surface-rgb) / var(--glass-opacity-light))',
          medium: 'rgb(var(--glass-surface-rgb) / var(--glass-opacity-medium))',
          strong: 'rgb(var(--glass-surface-rgb) / var(--glass-opacity-strong))',
          highlight: 'rgb(var(--glass-highlight-rgb) / var(--glass-highlight-alpha))',
        },
        border: {
          subtle: 'rgb(var(--border-rgb) / var(--border-alpha-subtle))',
          DEFAULT: 'rgb(var(--border-rgb) / var(--border-alpha-default))',
          strong: 'rgb(var(--border-rgb) / var(--border-alpha-strong))',
          accent: 'rgb(var(--accent-rgb) / var(--border-alpha-accent))',
          glow: 'rgb(var(--accent-rgb) / var(--border-alpha-glow))',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent-rgb) / 1)',
          muted: 'rgb(var(--accent-rgb) / var(--accent-alpha-muted))',
          light: 'rgb(var(--accent-rgb) / var(--accent-alpha-light))',
          medium: 'rgb(var(--accent-rgb) / var(--accent-alpha-medium))',
          glow: 'rgb(var(--accent-rgb) / var(--accent-alpha-glow))',
          solid: 'rgb(var(--accent-solid-rgb) / 1)',
        },
        text: {
          primary: 'rgb(var(--text-primary) / 1)',
          secondary: 'rgb(var(--text-secondary) / 1)',
          muted: 'rgb(var(--text-muted) / 1)',
          accent: 'rgb(var(--accent-solid-rgb) / 1)',
        },
        success: {
          DEFAULT: 'rgb(var(--success-rgb) / 1)',
          muted: 'rgb(var(--success-rgb) / 0.14)',
        },
        tone: {
          cyan: 'rgb(var(--tone-cyan-rgb) / <alpha-value>)',
          sand: 'rgb(var(--tone-sand-rgb) / <alpha-value>)',
          green: 'rgb(var(--tone-green-rgb) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'ui-sans-serif', 'sans-serif'],
        display: ['var(--font-geist)', 'ui-sans-serif', 'sans-serif'],
        accent: ['var(--font-serif)', 'serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
        eyebrow: ['0.75rem', { lineHeight: '1.1rem', letterSpacing: '0.22em', fontWeight: '600' }],
        display: ['4.75rem', { lineHeight: '0.98', letterSpacing: '-0.05em', fontWeight: '600' }],
        'display-sm': ['3.2rem', { lineHeight: '1.02', letterSpacing: '-0.04em', fontWeight: '600' }],
        heading: ['2.2rem', { lineHeight: '1.06', letterSpacing: '-0.035em', fontWeight: '600' }],
        'heading-sm': ['1.45rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }],
        body: ['1rem', { lineHeight: '1.72', fontWeight: '400' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.65', fontWeight: '400' }],
        caption: ['0.8125rem', { lineHeight: '1.35', letterSpacing: '0.02em', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'glass-xs': '0 1px 0 rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-sm': '0 18px 38px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.06)',
        glass: '0 24px 64px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-md': '0 28px 72px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)',
        'glass-lg': '0 36px 96px rgba(0,0,0,0.46), inset 0 1px 0 rgba(255,255,255,0.08)',
        'glass-xl': '0 48px 120px rgba(0,0,0,0.52), inset 0 1px 0 rgba(255,255,255,0.09)',
        'glass-glow': '0 0 0 1px rgba(126,196,227,0.18), 0 0 34px rgba(126,196,227,0.12)',
        'glow-sm': '0 0 0 1px rgba(126,196,227,0.16), 0 0 24px rgba(126,196,227,0.12)',
        glow: '0 0 0 1px rgba(126,196,227,0.24), 0 0 44px rgba(126,196,227,0.16)',
        'glow-lg': '0 0 0 1px rgba(126,196,227,0.28), 0 0 64px rgba(126,196,227,0.22)',
        card: '0 20px 48px rgba(0,0,0,0.24)',
        'card-hover': '0 28px 72px rgba(0,0,0,0.32)',
        'card-active': '0 16px 40px rgba(0,0,0,0.24)',
        button: '0 12px 24px rgba(0,0,0,0.18)',
        'button-hover': '0 18px 36px rgba(0,0,0,0.24)',
        'button-primary': '0 18px 42px rgba(126,196,227,0.18)',
        'button-primary-hover': '0 24px 54px rgba(126,196,227,0.24)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '6px',
        md: '12px',
        lg: '18px',
        xl: '26px',
        '2xl': '32px',
        '3xl': '48px',
      },
      animation: {
        'fade-in': 'fadeIn 0.45s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-in-left': 'slideInLeft 0.35s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
