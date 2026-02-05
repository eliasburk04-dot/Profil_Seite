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
          muted: 'rgb(var(--success-rgb) / 0.2)',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'ui-sans-serif', 'sans-serif'],
        display: ['var(--font-manrope)', 'ui-sans-serif', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
        display: ['2.75rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-sm': ['2.1rem', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '600' }],
        heading: ['1.6rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-sm': ['1.3rem', { lineHeight: '1.3', letterSpacing: '-0.015em', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        body: ['1rem', { lineHeight: '1.65', fontWeight: '400' }],
        'body-sm': ['0.925rem', { lineHeight: '1.55', fontWeight: '400' }],
        caption: ['0.75rem', { lineHeight: '1.35', letterSpacing: '0.02em', fontWeight: '500' }],
      },
      spacing: {
        '18': 'var(--space-18)',
        '22': 'var(--space-22)',
      },
      borderRadius: {
        xl: 'var(--radius-card-sm)',
        '2xl': 'var(--radius-card)',
        '3xl': 'var(--radius-panel-sm)',
        '4xl': 'var(--radius-panel)',
      },
      boxShadow: {
        'glass-xs': 'var(--shadow-glass-xs)',
        'glass-sm': 'var(--shadow-glass-sm)',
        glass: 'var(--shadow-glass)',
        'glass-md': 'var(--shadow-glass-md)',
        'glass-lg': 'var(--shadow-glass-lg)',
        'glass-xl': 'var(--shadow-glass-xl)',
        'glass-glow': 'var(--shadow-glow-soft)',
        'glow-sm': 'var(--shadow-glow-soft)',
        glow: 'var(--shadow-glow)',
        'glow-lg': 'var(--shadow-glow-lg)',
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        'card-active': 'var(--shadow-card-active)',
        button: 'var(--shadow-button)',
        'button-hover': 'var(--shadow-button-hover)',
        'button-primary': 'var(--shadow-button-primary)',
        'button-primary-hover': 'var(--shadow-button-primary-hover)',
      },
      backdropBlur: {
        xs: 'var(--blur-xs)',
        sm: 'var(--blur-sm)',
        md: 'var(--blur-md)',
        lg: 'var(--blur-lg)',
        xl: 'var(--blur-xl)',
        '2xl': 'var(--blur-2xl)',
        '3xl': 'var(--blur-3xl)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.55s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.35s ease-out forwards',
        'content-appear': 'contentAppear 0.15s ease-out forwards',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
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
          '0%': { opacity: '0', transform: 'translateX(-14px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        contentAppear: {
          '0%': { opacity: '0.85' },
          '100%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      transitionDuration: {
        DEFAULT: '180ms',
        fast: '120ms',
        normal: '220ms',
        slow: '320ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.22, 1, 0.36, 1)',
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
