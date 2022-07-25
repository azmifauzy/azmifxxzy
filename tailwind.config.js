/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily:{
        'catamaran': ['Catamaran', 'sans-serif'],
        'poppins': ["Poppins", 'sans-serif'],
        'inter': ["Inter", 'sans-serif'],
      },
      backgroundImage: {
        'night': "url('/assets/images/bg.png')",
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { top: '-50px' },
          '100%': { top: '50px' }, 
        }
      }
    },
  },
  plugins: [],
}
