/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#202023',
        'light-white': '#EDEDED',
        sunlight: '#FBD38D',
        purple: '#6B46C1',
        teal: '#88CCCA',
      },
      backgroundImage: {
        stars: "url('./assests/Stars.svg')",
      },
    },
  },
  plugins: [],
}
