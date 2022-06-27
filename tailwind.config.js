/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    fontFamily: {
      'heading': ['Archivo Black', 'sans-serif',],
    },
    extend: {
      colors: {
        'dark-gray': 'rgba(21,18,23,1)',
        'light-gray': 'rgba(43,35,53,1)',
        'text': '#2B2828',
      }
    },
  },
  plugins: [],
}
