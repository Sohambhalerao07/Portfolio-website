/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'], // Playfair Display for the name
        roboto: ['Roboto', 'sans-serif'],       // Roboto for the description
      },
    },
  },
  plugins: [],
}
