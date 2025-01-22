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
      colors: {
        primaryColor: '#22c55e',
        bgColor: '#fafafa',
        secondaryColor: '#15803d',
        activeColor: '#ef4444',
      },
      boxShadow: {
        'custom-green': '5px 5px 10px #22c55e',
      },
    },
  },
  plugins: [],
};
