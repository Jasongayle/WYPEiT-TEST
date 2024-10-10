/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#74aced',
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#36aaf6',
          500: '#74aced',
          600: '#0575d1',
          700: '#0460ab',
          800: '#07518c',
          900: '#0c4574',
          950: '#082b4b',
        },
      },
    },
  },
  plugins: [],
}