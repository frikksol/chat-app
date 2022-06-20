const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./client/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      sky: colors.sky,
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      gray: colors.gray,
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'spotify': '#1DB954',
        'neopurple': '#DE7DFF',
      },
      dropShadow: {
        'block': [
          '4px 4px 0rem rgba(0, 0, 0, 1)',
        ],
        'block-thick': [
          '6px 6px 0rem rgba(0, 0, 0, 1)',
        ]
      },
      backgroundImage: {
        'index-background': "url('/background.svg')",
      }
    },
  },
  plugins: [],
}
