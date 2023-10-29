/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm" : "480px"
      }
    },
    fontFamily:{
      jost : ['Jost', 'sans-serif']
    }
  },
  plugins: [],
}

