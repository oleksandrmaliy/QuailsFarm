/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        amatic: ['"Amatic SC"', 'serif'],
        caveat: ['"Caveat"', 'serif'],
        shantell: ['"Shantell Sans"', 'serif'],
      },
      spacing: {
        30: '30px',
      },
    },
  },
  plugins: [],
};
