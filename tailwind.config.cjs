/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}',"'./node_modules/tw-elements/dist/js/**/*.js'"],
  theme: {
    fontFamily:{
        "poppins": ["Poppins", 'sans-serif'],
        "montserrat": ["Montserrat", 'serif']
    },
    colors: {
        "stone-500" : "#F4EDDF",
        "purple" : "#211A36",
        "cyan" : "#85E1D0",
        "white": "#FFFFFF"
    },
    extend: {},
  },
  plugins: ['tw-elements/dist/plugin'],
}
