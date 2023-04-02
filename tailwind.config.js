/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "main-black": "#151414",
      white: "#FFFFFF",
      "footer-gray": "#2B2828",
      "text-gray": "#454242",
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
