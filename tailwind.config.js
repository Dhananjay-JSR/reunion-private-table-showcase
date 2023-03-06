/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#026FFA",
        primaryLight: "#F8FBFF",
        secondary:"#3D5467",
        secondaryLight:"#6B6B6B",
      },
      animation:{
        fadeIn:'fadeIn 0.3s ease-in-out forwards',
        fadeOut:'fadeOut 0.3s ease-in-out forwards',
      }
    },
    keyframes: {
      fadeIn:{
        '0%':{
          backgroundColor:'transparent'
        },
        '100%':{
          backgroundColor:'rgb(0 0 0 / 0.4)'
        }
      },
      fadeOut:{
        '0%':{
          backgroundColor:'rgb(0 0 0 / 0.4)'
        },
        '100%':{
          backgroundColor:'transparent'
        }
      },
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [],
}
