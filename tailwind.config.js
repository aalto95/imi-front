module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'centurygothic': ['centurygothic', 'sans-serif']
    },
    extend: {
      screens: {
        'xs': '480px'
      },
      colors: {
        'terracota': '#943813',
        'berlin-blue': '#003153',
        'carousel-arrows': '#c7ccd2',
        'antique-white': '#faebd7',
        'light-gray': '#ebf3f8'
      },
      height: {
        '5': '20px',
        '7': '28px',
        '18': '72px'
      }
    },
  },
  plugins: [],
}
