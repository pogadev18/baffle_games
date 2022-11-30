/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-black': '#1D1D1D',
        'baffle-blue': '#67B7FF',
        'main-yellow': '#FFB800',
        'main-yellow-hover': '#c29d34'
      },
    }
  },
  plugins: [],
}