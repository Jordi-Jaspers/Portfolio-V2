/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'green': '#64ffda',
            'white': '#e6f1ff',
            'navy': '#0a192f',
            'light-navy': '#112240',
            'lightest-navy': '#233554',
            'slate': '#8892b0',
            'light-slate': '#a8b2d1',
            'lightest-slate': '#ccd6f6'
        },
        extend: {},
    },
    plugins: [],
}
