/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        'slide': 'slide .7s cubic-bezier(0.4, 0, 0.2, 1);',
      },

      keyframes: {
       slide: {
          '0%' : { right:"-500px" },
          '100%': { right: "0px" },
        }
      },

      boxShadow: {
        '3xl': '0 5px 20px 0px rgba(0, 0, 0, 0.6)',
      },

      backgroundImage: {
        'divider': 'linear-gradient(to left bottom, #fff 49%, #3943b7 50%)',
        'logo': 'url(./assets/Logo-text1.png)',
      },

      screens: {
        'nl': '375px',
        'nxl': '425px',
    },

    fontFamily: {
      'head':  ['Roboto', "sans-serif"],
        'body':['Quattrocento Sans', "sans-serif"],
    },
 
},
  plugins: [],
}
}