/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-400': '#63B3ED',
        'blue-500': '#3182CE',
        'blue-300': '#A0C4FF',
      },
    },
  },
  plugins: [],
};
