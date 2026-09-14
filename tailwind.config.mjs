import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        century: ["Century Gothic", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        cem: "#ff004f",
      },
      spacing: {
        navbar: "140px",
      },
      height: {
        hero: "calc(100dvh - 140px)",
      },
    },
  },
  plugins: [],
};
