/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#16181d",
        lightGreen: "#a9c26a",
        dark: "#22262e",
        lightBlue: "#b2c7fe",
        teal: "#406573",
        lightGray: "#bbbbbd",
        blue: "#4577b2",
      },
    },
  },
  safelist: [
    {
      pattern: /bg-(DARKGRAY|LIGHTGREEN|DARK|LIGHTBLUE|TEAL|LIGHTGRAY|BLUE)/i,
    },
    {
      pattern:
        /hover:bg-(DARKGRAY|LIGHTGREEN|DARK|LIGHTBLUE|TEAL|LIGHTGRAY|BLUE)/i,
    },
  ],
  plugins: [require("tailwind-hamburgers")],
};
