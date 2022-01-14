module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: 'blue',
        'primary': '#f1f1f1'
      },
      height:{
        '4': '4rem',
      },
      width:{
        '18': '18rem',
        '5.5': '5.5rem',
      },
      transitionProperty:{
        width: 'width'
      }
    },
  },
  plugins: [],
}