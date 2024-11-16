/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Monocraft: ['Monocraft', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
