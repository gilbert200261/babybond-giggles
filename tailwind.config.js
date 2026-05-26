/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        blue: {
          baby: '#A8D8EA',
        },
        pink: {
          soft: '#F9C0CB',
        },
        yellow: {
          soft: '#FFF3B0',
        },
        purple: {
          soft: '#D4B8E0',
        },
        green: {
          soft: '#A8D8A8',
        },
      },
    },
  },
  plugins: [],
}
