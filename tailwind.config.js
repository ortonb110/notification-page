/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        veryLightGrayishBlue: "hsl(210, 60%, 98%)",
        lightGrayishBlue_1: "hsl(211, 68%, 94%)",
        lightGrayishBlue_2: "hsl(205, 33%, 90%)",
        grayishBlue: "hsl(219, 14%, 63%)",
        darkGrayishBlue: "hsl(219, 12%, 42%)",
        veryDarkGrayishBlue: "hsl(224, 21%, 14%)",
        blue: "#0A327B",
        red: "#F36663",
      }
    },
  },
  plugins: [],
};
