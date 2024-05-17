/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        primary: "#1f1235", // Assuming this is for headlines
        secondary: "#1b1425", // Assuming this is for sub headlines
        button: "#ff6e6c",
        "button-text": "#1f1235",
        button1: "#fbdd74",
        button2: "#67568c",
        stroke: "#1f1235",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
