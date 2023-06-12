/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./storybook/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'main-color': {
        DEFAULT: '#D83A0C',
        light: '#F7DBD5'
      },
    },
    extend: {},
  },
  plugins: [],
}
