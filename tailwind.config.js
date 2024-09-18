const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '30px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
