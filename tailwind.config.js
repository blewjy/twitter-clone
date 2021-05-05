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
      padding: {
        '4.5': '1.125rem'
      },
      width: {
        '68': '17rem',
        '84': '21rem',
        '144': '36rem',
        '156': '39rem',
        'content': 'fit-content'
      },
      height: {
        '108': '27rem',
        '120': '30rem',
        '132': '33rem',
        '168': '42rem',
        'content': 'fit-content'
      },
      maxWidth: {
        '68': '17rem',
        '28': '7rem',
        '32': '8rem',
        '1/4': '25%',
        '1/3': '33.3333%',
        '1/2': '50%',
        '3/4': '75%',
      },
      minWidth: {
        '0': '0',
        '16': '4rem',
        '20': '5rem',
        '32': '8rem',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      inset: {
        '4.5': '1.125rem',
        '5.5': '1.375rem'
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
