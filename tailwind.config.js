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
        primaryColor: '#166534',
        bgColor: '#fef08a',
        secondaryColor: '#15803d',
        activeColor: '#ef4444',
      },
      boxShadow: {
        'custom-green': '5px 5px 10px #22c55e',
        allYellow:
          '4px 4px 6px #fef08a, -4px 4px 6px #fef08a, 4px -4px 6px #fef08a, -4px -4px 6px #fef08a',
        allGreen:
          '4px 4px 6px #166534, -4px 4px 6px #166534, 4px -4px 6px #166534, -4px -4px 6px #166534',
      },
    },
  },
  plugins: [],
};
