import svgToDataUri from "mini-svg-data-uri";

import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        primary: "#140e4d",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(92.69deg, #648BF4 0%, #D2597A 100%)",
        "line-gradient":
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%)",
        "hero-image": "url('/src/assets/vs.svg')",
        "secondary-img": "url('/src/assets/secondarybg.svg') ",
      },
    },
    screens: {
      "4k": "1919px",
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      base: { max: "1250px" },

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { min: "576px", max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "575px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="80" height="80" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
