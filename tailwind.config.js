/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        body: "#171718",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        hero: ["1.5rem", { lineHeight: "45px" }],
        about: ["1.25rem", { lineHeight: "40px" }],
      },
      height: {
        250: "250px",
      },
    },
  },
  plugins: [],
};
