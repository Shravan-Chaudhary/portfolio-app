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
        'light-teal': '#A7D8D6',
        'dark-teal': '#2C7A7A',
        blue: '#2D3748',
        'light-gray': '#313134',
        'footer-color': '#727274',
      },
      backgroundImage: {
        stars: "url('./assests/Stars.svg')",
      },
    },
  },
  plugins: [],
}
