/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    ".pages/**/*.{html,ts}",
    ".components/**/*.{html,ts}",

  ],
  theme: {
    extend: {
      colors:{
        primary: "#5c059b",
        segundary: "C1E293B",
        accent: "C5930",
        danger: "#F00"


      }

    },
  },
  plugins: [],
}

