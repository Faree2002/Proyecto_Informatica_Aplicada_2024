/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  //Add the paths to all of your component files in your tailwind.config.js file. Remember to replace <custom directory> with the actual name of your directory e.g. screens.
  theme: {
    extend: {},
  },
  plugins: [],
};
