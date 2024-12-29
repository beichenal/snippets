/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/renderer/src/pages/**/*.{html,js,ts,jsx,tsx}",
    "./src/renderer/src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          "::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none" /* IE 和 Edge */,
          "scrollbar-width": "none" /* Firefox */
        }
      });
    })
  ]
};
