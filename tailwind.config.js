/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  safelist: ['hamburger-line'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px' 
        },
      colors: {
        primary: '#14B8A6',
        secondary: '#64748b', 
        dark: '#0F172A',
      },
      screens: {
        '2xl': '1320px'
        },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

