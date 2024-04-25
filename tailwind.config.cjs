const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      'display': ['Anton'],
      'body': ['Overpass']
    },
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      }
    },
    typography: {
      DEFAULT: {
        css: {
          'prose': {
            'max-width': '100ch'
          },
          'max-w-prose': {
            'max-width': '100ch'
          },
        }
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