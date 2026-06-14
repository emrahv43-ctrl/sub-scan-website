/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ground: {
          black: '#000000',
          panel: '#0F0F0F',
          work: '#111117',
        },
        signal: {
          cyan: '#40FFD0',
          green: '#00E5A0',
        },
        accent: {
          orange: '#FFAA00',
          import: '#FF7A00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'grid-move': 'gridMove 20s linear infinite',
        'scan-sweep': 'scanSweep 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'radar-spin': 'radarSpin 8s linear infinite',
      },
      keyframes: {
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        scanSweep: {
          '0%, 100%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '50%': { transform: 'translateY(100%)', opacity: '1' },
          '60%': { opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', boxShadow: '0 0 20px rgba(64,255,208,0.2)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(64,255,208,0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        radarSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
