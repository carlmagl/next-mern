/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navetBlue: "#30486c",
        eventGray: "#c4c4c4",
      },
    },
  },
  plugins: [],
};
