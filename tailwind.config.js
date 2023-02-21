/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#2D2D32',
      'white': '#FFFFFF',
      'navy': '#64629D',
      'lavender': '#EDECFC',
      'mauve': '#9F9EC1',
      'lightGray': '#F9F9F9',
      'pureBlack': '#000000',
    },
    fontFamily: {
      jp: ["'Noto Sans JP', sans-serif"],
      en: ["'Lato', sans-serif"],
    },
    fontSize: {
      sm: ['0.875rem', '1.4'],
      base: ['1rem', '1.4'],
      lg: ['1.125rem', '1.4'],
      xl: ['1.5rem', '1.4'],
      '2xl': ['1.5rem', '1.4'],
      '3xl': ['1.875rem', '1.4'],
      '4xl': ['2.25rem', '1.4'],
      '5xl': ['3rem', '1.4'],
      '6xl': ['3.75rem', '1.4'],
      '7xl': ['4.5rem', '1.4'],
      '8xl': ['6rem', '1.4'],
      '9xl': ['8rem', '1.4'],
    }  
  },
  plugins: [],
}
