/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        md: '4px',
      },
    },
  },
  plugins: [],
};
