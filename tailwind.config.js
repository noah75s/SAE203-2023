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
    extend: {
      colors: {
        rouge: "#6d0115",
        blanc: "#f5f5f5",
        noir: "#000000"
       },
       fontSize: {
        base: "1.25rem"
       },
       fontFamily: {
        poppins: "Poppins"
       },
       borderRadius: {
        none: "0",
        xs: "0.1875rem",
        sm: "0.3125rem",
        default: "0.625rem",
        lg: "0.8125rem",
        xl: "0.9375rem",
        full: "9999px",
       }
       ,extend: {
        gridTemplateColumns: {
          principal: 'repeat(12, minmax(0, 64px))'
        }
      }
    },
  },
  plugins: [],
}

