/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f0ff',
          100: '#e0e0ff',
          200: '#c4c4ff',
          300: '#a3a3ff',
          400: '#8585ff',
          500: '#6C63FF',
          600: '#5a52e0',
          700: '#4a44c0',
          800: '#3a38a0',
          900: '#2a2880',
        },
        accent: {
          400: '#33e0ff',
          500: '#00D4FF',
          600: '#00b0d4',
        },
        dark: {
          DEFAULT: '#0A0A0F',
          surface: '#12121A',
          card: '#1A1A28',
          border: '#2A2A44',
        },
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          700: '#047857',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(108, 99, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(108, 99, 255, 0.8), 0 0 60px rgba(0, 212, 255, 0.5)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
};
