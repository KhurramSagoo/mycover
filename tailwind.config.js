/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        menuIcon: "#fafbfd",
        bgRefer: "#f4f3ff",
      },
      container: {
        // center: true,
        // padding: {
        //   DEFAULT: "1rem",
        //   sm: "2rem",
        //   lg: "4rem",
        //   xl: "5rem",
        //   "2xl": "6rem",
        // },
        // padding: "2rem",
        // screens: {
        //   " 2xl": "1536px",
        // },
      },
    },
  },
  plugins: [],
};
