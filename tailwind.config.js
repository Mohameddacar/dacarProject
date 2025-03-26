/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'jost': ['Jost'],
      'voll': ['Vollkorn'],

      
    },
    extend: {
      colors: {
        'primary': '#00413D',
        'secondary': '#E5745D',
      },
      maxWidth:{
        'container': '1170px',
      },     
    },
  },
  plugins: [],
}