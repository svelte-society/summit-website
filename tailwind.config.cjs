const colors = require('tailwindcss/colors')

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      'display': ['Anton'],
      'body': ['Overpass']
    },
    extend: {
      colors: {
        primary: '#3b0069',
        secondary: '#FF3F3F',
        'crystal': {
          '50': '#ebe5ff',
          '100': '#d9cfff',
          '200': '#bfa9ff',
          '300': '#9f75ff',
          '400': '#8d3fff',
          '500': '#8914ff',
          '600': '#8700ff',
          '700': '#8600ff',
          '800': '#7700e3',
          '900': '#3b0069',
        },
        'papaya': {
          '50': '#fff1f1',
          '100': '#ffe1e1',
          '200': '#ffc7c7',
          '300': '#ffa0a0',
          '400': '#ff6c6c',
          '500': '#f83b3b',
          '600': '#FF3F3F',
          '700': '#c11414',
          '800': '#a01414',
          '900': '#841818',
        },
      }
    }
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-elevation'),
  ]
};

module.exports = config;