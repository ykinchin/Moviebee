/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-300': '#191A1D',
        'primary-500': '#131416',
        'secondary-300': '#bf8230',
        'secondary-500': '#a65f00',
        'secondary-700': '#BF7520'
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['OPEN Sans', 'sans-serif']
      }
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px'
    }
  },
  plugins: []
};
