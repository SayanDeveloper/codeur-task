/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

      'fl-xs': '510px',
      'fl-sm': '865px',
      'fl-md': '1100px',
      'fl-lg': '1320px',

    },
  },
  plugins: [],
}
