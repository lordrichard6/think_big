/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/public/images/home_background.png')",
      },
      colors: {
        'primary-color': '#A4C18B',
        'secondary-color': '#384230',
      },
    },
  },
  plugins: [],
}
