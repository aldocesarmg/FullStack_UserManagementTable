const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    flowbite.content()
  ],
  theme: {
    fontFamily: {
      'heebo': ['Heebo', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin()
  ],
}

