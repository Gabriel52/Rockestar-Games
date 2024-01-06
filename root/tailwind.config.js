/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
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
  safelist: [
    'flex', 
    'items-center', 
    'gap-x-6', 
    'h-28', 
    'bg-black_700', 
    'hover:cursor-pointer',
    'ml-10',
    'hover:text-yellow_500', // Added hover styles
    'ease-in', // Added ease-in animation
    'duration-200', // Added duration-200 animation duration
    'justify-between',
    'px-32',
    'px-4',
    'py-3',
    'bg-yellow_500',
    'rounded-lg',
    'text-black',
    'hover:brightness-50',
    'gap-x-10',
    'bg-grey_500',
    'w-12',
    'h-12',
    'inline-flex',
    'rounded-full',
    'mr-2',
    'contents',
    'text-2xl',
    'justify-center'
  ],
  plugins: [],
}


