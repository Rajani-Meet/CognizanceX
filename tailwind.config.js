/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#0a0e23',
        'neon-blue': '#00f7ff',
        'electric-purple': '#b300ff',
        'hot-magenta': '#ff00f7',
        'cyber-pink': '#ff00aa',
        'matrix-green': '#00ff9d',
        'void-black': '#000011',
        'star-white': '#e0e0ff',
      },
      fontFamily: {
        'inndam': ['"Inndam Extended"', 'Orbitron', 'monospace'],
        'orbitron': ['Orbitron', 'monospace'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(45deg, #00f7ff, #b300ff)',
        'space-gradient': 'linear-gradient(to bottom, #000011, #0a0e23)',
      },
      boxShadow: {
        'neon': '0 0 10px currentColor',
        'neon-lg': '0 0 20px currentColor',
        'cyber': '0 5px 30px rgba(0, 247, 255, 0.1)',
      },
      animation: {
        'pulse-neon': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
