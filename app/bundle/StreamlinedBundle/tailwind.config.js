/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/Resources/assets/**/*.js",
    "./src/Resources/assets/*.js",
    "./src/Resources/templates/**/*.html.twig",
    "./src/Resources/templates/*.html.twig",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
