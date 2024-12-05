/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto', 'sans-serif'], // Replace 'Roboto' with your custom font name
      },
      colors: {
        blueDark : "#04032d"
      }
    },
  },
  plugins: [],
}

