/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "avenir-12": ["Avenir-Book-12", "sans-serif"],
        "avenir-14": ["Avenir-Book-14", "sans-serif"],
        "avenir-45": ["Avenir-Book-45", "sans-serif"],
        "montserrat-regular": ["Montserrat-Regular-15", "sans-serif"],
        "montserrat-medium": ["Montserrat-Medium-15", "sans-serif"],
      },
      fontSize: {
        12: ["12px", "1.4"], // [font-size, line-height]
        14: ["14px", "1.4"],
        15: ["15px", "1.5"],
        45: ["45px", "1.1"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
