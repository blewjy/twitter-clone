module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '496px'
      },
      colors: {
        'twitter-blue': '#1DA1F2',
        'twitter-dark-blue': '#1a91da'
      },
      width: {
        '84': '21rem',
        '144': '36rem',
        'content': 'fit-content'
      },
      height: {
        '108': '27rem',
        '120': '30rem',
        '132': '33rem',
        'content': 'fit-content'
      },
      maxWidth: {
        '1/4': '25%',
        '1/3': '33.3333%',
        '1/2': '50%',
        '3/4': '75%',
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      inset: {
        '4.5': '1.125rem'
      }
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active', 'focus'],
    },
  },
  plugins: [],
}
