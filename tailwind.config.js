/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Mulish',
    },
    extend: {
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',
        accent: '#EEF7F9',
      },
    },screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    }
  },
  plugins: [],
}

