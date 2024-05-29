/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '340px',   // Small screens
        'md': '768px',   // Medium screens
        'lg': '1024px',  // Large screens
        'xl': '1280px',  // Extra-large screens
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


