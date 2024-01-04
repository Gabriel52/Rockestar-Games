/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        yellow_500: '#FCAF17',
        yellow_600: '#FFAB00',
    
        black_900: '#000000',
        black_700: '#020202',
        black_500: '#040300',
        black_100: '#101010',
    
        grey_500: '#5A5A5A',
        grey_400: '#606060'
      } 
    },
  },
  plugins: [],
}

