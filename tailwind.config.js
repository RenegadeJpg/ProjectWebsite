/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          white: "#FFFFFF", // WHITE
          light: "#FF7744", // Coral Orange
          lighter: "#FFBB99", // Peach
          dark: "#88CCBB", // Sage Green
          darker: "#005566", // Deep Teal
        },
      },
    },
  },
  plugins: [],
};
