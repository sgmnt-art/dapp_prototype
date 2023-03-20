const deftaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arimo", ...deftaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
