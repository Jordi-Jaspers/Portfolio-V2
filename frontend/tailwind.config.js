/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        colors: {
            'green': '#64ffda',
            'amber': '#fca311',
            'red': '#ef233c',
            'white': '#e6f1ff',
            'navy': '#0a192f',
            'light-navy': '#222F5A',
            'lightest-navy': '#595AA7',
            'slate': '#8892b0',
            'light-slate': '#a8b2d1',
            'lightest-slate': '#ccd6f6',
        },
        extend: {},
    },
    plugins: [],
}
