/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      'bg-image': "url('./assets/intro-background.svg')",
    },
    fontFamily: {
      baloo: ["Baloo 2", "cursive"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      
      "yellow-500": "#DBAC2C",
      "yellow-700": "#C47F17",
      "yellow-200": "#F1E9C9",

      "purple-600": "#8047F8",
      "purple-800": "#4B2995",
      "purple-200": "#EBE5F9",

      "black-900": "#272221",
      "brown-600": "#403937",
      "brown-300": "#574F4D",
      "brown-200": "#8D8686",

      white: "#fff",

      "gray-100": "#EDEDED",
      "gray-200": "#E6E5E5",
      "gray-300": "#D7D5D5",

      background: "#FAFAFA",
    },
    extend: {
      backgroundImage: {
        'info-gradient': 'linear-gradient(to right, #DBAC2C, #C47F17, #8047F8)'
      }
    },
  },
  plugins: [],
};
