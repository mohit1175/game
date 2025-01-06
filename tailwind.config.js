/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00f3ff',
        'cyber-purple': '#8000ff',
        'cyber-pink': '#ff00ff',
        'cyber-dark-blue': '#000033',
      },
      animation: {
        'text-shine': 'text-shine 8s linear infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out infinite',
        'grid-flow': 'grid-flow 20s linear infinite',
      },
      keyframes: {
        'text-shine': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          }
        },
        'grid-flow': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(24px)' }
        },
      },
      backgroundImage: {
        'cyber-grid': `radial-gradient(circle, rgba(0, 243, 255, 0.1) 1px, transparent 1px),
                       linear-gradient(to right, rgba(0, 243, 255, 0.1) 1px, transparent 1px),
                       linear-gradient(to bottom, rgba(0, 243, 255, 0.1) 1px, transparent 1px)`,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'cyber': '24px 24px, 24px 24px, 24px 24px',
      },
      fontFamily: {
        'tech': ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 