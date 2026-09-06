/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lumux: {
          bg: '#0a0a0a',
          alt: '#111111',
          card: '#161616',
          cardHover: '#1f1f1f',
          border: '#262626',
          borderLight: '#383838',
          red: '#e11d2a',
          redHover: '#ff2d3a',
          redDark: '#8b1117',
          grayText: '#9ca3af',
          lightText: '#f3f4f6',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20BA56',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 0 30px rgba(225, 29, 42, 0.35)',
        'red-glow-sm': '0 0 15px rgba(225, 29, 42, 0.25)',
        'red-glow-lg': '0 0 60px rgba(225, 29, 42, 0.5)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
