import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        blackletter: ["UnifrakturMaguntia", "cursive"],
        headline: ["Playfair Display", "serif"],
        body: ["IM Fell English", "serif"],
        typewriter: ["Courier Prime", "monospace"],
      },
      colors: {
        paper: "#f0e8dd",
        ink: "#1d1a16",
        stain: "#9a7e63",
        "stain-light": "#b5a696",
        "shadow-deep": "#372d22",
        divider: "#665341",
        "divider-light": "#7c6854",
        "divider-dark": "#503f30",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
