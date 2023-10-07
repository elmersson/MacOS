/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark']
    },
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        'apple-blue': {
          100: '#167AE5'
        },
      },
      fontSize: {
        '3xs': ['0.5rem', '0.0rem'],
        'xxs': ['0.6rem', '0.7rem'],
        'xs': ['0.688rem', '0.9rem'],
        'sm': ['0.813rem', '1.2rem'],
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px rgba(0,0,0,0.22)',
        lg: '0 0px 8px rgba(0,0,0,0.55)',
      },
      backgroundImage: {
        'apple-active': 'linear-gradient(180deg, #167AE5, #156DCC)',
        'weather-dark': 'linear-gradient(180deg, #225385, #92caf4)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
