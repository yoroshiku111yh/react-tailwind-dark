/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        fontDM: ["DM", "sans-serif"],
        fontInter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "ico-spark": "url('./src/assets/images/ico-spark.png')",
        chart: "url('./src/assets/images/bg-chart.png')",
      },
      colors: {
        light: {
          "neutral-800": "#4B5162",
          "neutral-600": "#79829F",
          "neutral-700": "#626981",
          "primary-600": "#387FF5",
          "primary-300": "#B6D1FB",
          "neutral-400": "#B6BCCD",
          "neutral-900": "#343844",
          "neutral-300": "#D2D5E2",
          "neutral-1000": "#1C1F25",
          "primary-700": "#2D66C4",
          "neutral-0": "#FFFFFF",
        },
        dark: {
          "neutral-900": "#D3D6E2",
          "neutral-800": "#BEC2D3",
          "neutral-1000": "#EDEEF3",
          "neutral-300": "#3C4561",
          "neutral-400": "#596186",
          "prmiary-700": "#6099F7",
          "prmiary-600": "#387FF5",
          "primary-300": "#B6D1FB",
          "neutral-0": "#171C2F",
        },
      },
      screens: {
        // "2xl": "1483px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
      },
    },
  },
  plugins: [
    require("preline/plugin"), 
    require("@tailwindcss/forms")
  ],
};
