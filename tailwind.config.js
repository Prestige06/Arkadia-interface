/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        '2xl': '1rem'
      },
      colors: {
        arkadia: '#98f5e1'
      }
    }
  },
  plugins: []
}
