/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["'League Spartan'"],
      },
      colors: {
        brick: "#582114 ", // Color personalizado
        mmenu: "#63301B",
        bgestan: "#FCF9F5",
        bgpagi: "#E2D8D4",
        bgbnn: "#D45F35",
        bgbnn2: "#B9482F",
        face: "#0866FF",
        whats: "#37C238",
      },
    },
  },
  plugins: [],
};
