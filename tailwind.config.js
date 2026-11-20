/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#121417',
        cardDark: '#1C1F24',
        inputDark: '#16191D',
        accentOrange: '#F98B2A',
        accentGold: '#F4C430',
      }
    },
  },
  plugins: [],
}
