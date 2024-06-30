/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.css',
    './app/**/*.js',
    ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      white: colors.white,
      //white-btn-hover: 0.777
      black: colors.black,
      //black-btn: 0.382;
      //black-btn-hover: 0.8;
      gray: {
        //default
        100: '#808080',
        //btn + 0.6
        200: '#787878',
        //btn-hover + 0.525
        300: '#6d6d6e',
      },
      background: '#141414',
    },
    extend: {
      backgroundImage: {
        'custom-gradient': `linear-gradient(
          to bottom,
          rgba(20, 20, 20, 0.9) 5%,
          rgba(20, 20, 20, 0.2) 20%,
          rgba(20, 20, 20, 0.2) 80%,
          rgba(20, 20, 20, 0.8) 100%
        ), url(/assets/img/banner\\ 1.svg)`
      },
    },
  },
  plugins: [],
}

