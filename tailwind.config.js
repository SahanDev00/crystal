/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'lgg': '1240px',
      '2lg': '1365px',
      '3lg': '1367px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      mono: ["Share Tech Mono", "monospace"],
      roboto: ["Roboto", "sans-serif"],
      karla: ["Karla", "sans-serif"],
      overpass: ["Overpass", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

