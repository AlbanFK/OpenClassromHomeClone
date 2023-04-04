/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      middle_md: '850px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    extend: {
      colors: {
        'primary': '#7451eb',
        'primary_a1': '#7451eb1f',
        'mygray': '#a7a1ad',
      },
    },
  },
  plugins: [],
}

