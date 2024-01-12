/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        background: "#ffff",
        background_light: "#F9F9F9",
        primary: "#00374E",
        grey: "#4C4C4C",
        grey_light: "#737373",
        green_dark: "#508F59",
        green_light: "#8ECB53",
        xlt_pink: "#F390A8",
        lt_pink: "#E46B88",
        blue: "#36B6C7",
        darK_blue: "#00374F",
        primary_link: "#006999",
        xlt_blue: "#6DC7D4",
        lt_blue: "#37B7C8",
      },
    },
    fontFamily: {
      myriadBold: ["myriadBold", "sans-seriff"],
      myriadSemi: ["myriadSemi", "sans-seriff"],
      myriadRegular: ["myriadRegular", "sans-seriff"],
    },
    keyframes: {
      "open-menu": {
        "0%": { transform: "translateY(-100%)" },
        "100%": { transform: "translateY(0%)" },
      },
      "close-menu": {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    animation: {
      "open-menu": "open-menu 0.3s",
      "close-menu": "close-menu 0.3s",
    },
  },
  plugins: [],
};
