/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: 'Poppins'
      },
      backgroundColor: {
        hoverColor: "#ecebe7"
      },
      screens: {
        'ssm': '360px'
      },
      borderColor: {
        'borderColor': '#e5e7eb'
      }
    },
  },
  plugins: [],
};
