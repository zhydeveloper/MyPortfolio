/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding:'16PX',
    },
    extend: {
      colors: {
        green:'#16a34a',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

