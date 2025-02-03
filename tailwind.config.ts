import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter Tight', 'sans-serif'],
      },
      spacing: {
        '13': '3.25rem', // 52px
        '15': '3.75rem', // 60px
        '18': '4.5rem',  // 72px
        '22': '5.5rem',  // 88px
        '26': '6.5rem',  // 104px
        '30': '7.5rem',  // 120px
      },
    },
  },
  darkMode: 'class', // Enables dark mode using a class
  plugins: [],
};

export default config;
