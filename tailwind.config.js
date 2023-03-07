/** @type {import('tailwindcss').Config} */ 

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
    fontFamily: {
      aljazeera: "Al-Jazeera, -apple-system",
      aljazeera_reg: "Al-Jazeera-Arabic-Regular, -apple-system",
      cairo: "Cairo, -apple-system",
      cairo_med: "Cairo_med, -apple-system",
    },
    colors:{
      'orange' : '#eb5424',
      'white': '#ffffff',
      'black': '#000000',
      'lightgray': '#f8f8f8',
      'lightBlue' : '#2994F8',
      'gray' : '#eee',
      'grate': '#e1e1e1',
      'semiBlack': '#777',
      'lightBlack' : 'rgba(10, 0, 0, 0.7)'
    },
    extend: {
      backgroundImage: {
        'background': "url('../public/assets/images/map.svg')",
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.1) 0 0 20px',
      },
      fontFamily: {
        bold: ["Al-Jazeera-Arabic-Bold", "sans-serif"],
        regu: ["Al-Jazeera-Arabic-Regular", "sans-serif"],
      },
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 576px) { ... }

      'md': '767px',
      // => @media (min-width: 960px) { ... }

      'lg': '985px',
      // => @media (min-width: 1440px) { ... }

      'xl': '1370px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}