/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
		colors: {
      indigo: '#1d096b',
      pink: '#feaa9b',
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      gray: colors.zinc
    },
    extend: {}
  },
  plugins: []
}

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      indigo: '#1d096b',
      pink: '#feaa9b',
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      gray: colors.zinc
    },
    fontFamily: {
      sans: ['Mulish', 'sans-serif'],
      serif: ['Space Mono', 'monospace']
    },
    extend: {}
  },
  plugins: []
}