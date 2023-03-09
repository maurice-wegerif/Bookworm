const { createThemes } = require("tw-colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    createThemes({
      light: {
        primary: "#F9A8D4",
        secondary: "#F43F5E",
        text: "#262626",
        lightText: "#737373",
        background: "#FFFFFF",
        secondaryBackground: "#F7FAFC",
        cta: "#4338CA",
        ctaHover: "#3730A3",
        ctaText: "white",
        surface: "white",
      },
      dark: {
        primary: "#F9A8D4",
        secondary: "#F43F5E",
        text: "#F4F4F5",
        lightText: "#D4D4D8",
        background: "#262626",
        secondaryBackground: "#404040",
        cta: "#C7D2FE",
        ctaHover: "#E0E7FF",
        ctaText: "#262626",
        surface: "#171717",
      },
    }),
  ],
};
