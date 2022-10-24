/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        logo: "#FA0000",
      },
      fontFamily: {
        Vidaloka: ["Vidaloka, serif"],
        Satisfy: ["Satisfy, cursive"],
      },
      dropShadow: {
        shadow1: "3px 5px 8px rgb(173,0,0, 1)",
      },
      boxShadowColor: {
        shadow1: "rgb(173,0,0, 1)",
      },
    },
  },
  plugins: [],
};
