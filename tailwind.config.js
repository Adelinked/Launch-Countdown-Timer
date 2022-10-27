const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stars': "url('/images/stars.svg') ",
      },
      colors: {
        white: '#ffffff',
        grayishBleu: '#8486a9',
        softRed: '#fb6087',
        darkDesaturatedBlue: '#343650',
        veryDarkBlue: '#1e1f29',
        veryDarkBlue2: '	#191a24'
      },
      fontFamily: {
        'sans': ['Red Hat Text', 'sans-serif']
      },


    },
  },
  plugins: [],
}
