/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "main-black": "#151414",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        sans: ["Noto Sans KR"],
        main: ["NeoDunggeunmo Pro"],
      },
    },
  },
  plugins: [],
};
