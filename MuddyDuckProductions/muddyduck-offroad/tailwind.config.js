/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grundee: ['Grundee', 'sans-serif'],
      },
     screens: {
        xs: '480px',        // Add an extra small screen
        sm: '640px',        // Modify existing breakpoints if needed
        md: '768px',
        lg: '1148px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',     // Add a custom large screen
      },
    },
  },
  plugins: [],
};