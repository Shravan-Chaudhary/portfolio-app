/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#202023',
        'light-white': '#EDEDED',
        sunlight: '#FBD38D',
        'light-sunlight': '#F6E5B7',
        'nav-color': '#F4EDE4',
        'body-color': '#f0e7db',
        'menu-color': '#FFFFFF',
        'menu-button-color': '#E2E8F0',
        menu: '#E2E8F0',
        purple: '#6B46C1',
        pink: '#FF63C3',
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
