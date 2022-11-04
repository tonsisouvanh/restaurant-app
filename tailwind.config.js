/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'main-background': "url('/src/assets/images/bgimg.png')",
        'menu-background': "url('/src/assets/images/menu-bg.jpg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}