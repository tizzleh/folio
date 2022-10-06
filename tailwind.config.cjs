/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        freigeist: ['Freigeist'],
        freigeistwide: ['Freigeist Wide'],
        euclid: ['Euclid Circular B']
      },
      colors: {
        tyyellow: '#A67417',
        tyorange: '#A6600A',
        tygreen: '#3A591B',
        tylightyellow: '#C2B01F',
        tylightpurple: '#584296',
        tylightblue: '#54BBFF',
        tydarkyellow: '#FFAD00',
        tydarkpurple: '#2D253C',
        tydarkblue: '#00A8FF',
        tylightgray: '#F0F1F4',
        tygray: '#676767',
        tydarkgray: '#E2E2E2',
        tyoffwhite: '#F5F0F5',
        tydark: '#1C1C27',
        tydarklight: '#28293E',
        tydarklighter: '#42426A'
      }
    },
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      mdlg: '896px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: []
}
