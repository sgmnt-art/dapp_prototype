const deftaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...deftaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
