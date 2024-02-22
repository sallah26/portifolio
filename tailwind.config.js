/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor:{
        myMain: "#41B9B4",
      },
      backgroundColor:{
        myMain: "#41B9B4",
      },
      width:{
        55: "55%",
      },
    },
  },
  plugins: [],
}

