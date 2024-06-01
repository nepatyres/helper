/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ejs}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cs2': "url('/images/cs52.jpg')",
        'dota2': "url('/images/dota32.jpg')",
        'wbg': "url('/images/wbg.jpg')",
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}

