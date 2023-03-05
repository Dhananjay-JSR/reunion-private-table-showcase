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
    },
  },
  plugins: [],
}
