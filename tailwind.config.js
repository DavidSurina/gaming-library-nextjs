/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
        sans: ['Roboto', 'sans-serif'],
    },
    colors: {
      backgroundGrey: '#222629',
      contrastText: '#fcfeff',
      dimmedGrey: '#6b6e70',
      darkGrey: '#474b4f',
      darkGreen: '#61892f',
      lighterGreen: '#86c232',
    },
    extend: {},
  },
  plugins: [],
}
