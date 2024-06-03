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
        main: "#E74322",
        black: "#1A1A1B",
        grey: "#D7D0CF",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
