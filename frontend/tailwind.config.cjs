/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    colors: {
      'green': '#64ffda',
      'amber': '#a37112',
      'amber-light': '#fca311',
      'red': '#ef233c',
      'white': '#e6f1ff',
      'white-contrast': '#E2EBF6',
      'navy': '#0a192f',
      'light-navy': '#1f2937',
      'lightest-navy': '#595AA7',
      'slate': '#8892b0',
      'light-slate': '#a8b2d1',
      'lightest-slate': '#ccd6f6',
      'transparent': 'transparent',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
