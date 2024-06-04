/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Vollkorn"],
      sans: ["Diatype"],
    },

    extend: {
      colors: {
        main: {
          50: "#fff3f1",
          100: "#ffe5e0",
          200: "#ffd0c7",
          300: "#ffb0a0",
          400: "#ff8269",
          500: "#f95a3a",
          600: "#e74322",
          700: "#c23013",
          800: "#a02b14",
          900: "#852917",
          950: "#481207",
        },
        black: {
          50: "#f5f5f6",
          100: "#e6e6e7",
          200: "#cfcfd2",
          300: "#aeaeb2",
          400: "#86878a",
          500: "#6b6c6f",
          600: "#5b5b5f",
          700: "#4d4d51",
          800: "#444546",
          900: "#3c3c3d",
          950: "#1a1a1b",
        },
        grey: "#D7D0CF",
      },
    },
  },
  plugins: [],
};
