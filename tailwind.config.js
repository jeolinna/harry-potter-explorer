/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["HeadingFont", "sans-serif"],
        body: ["BodyFont", "serif"],
      },
    },
  },
  plugins: [],
};
