import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        fresh: {
          50: "#f2faf4",
          100: "#e2f4e8",
          200: "#c8e9d3",
          300: "#a0d8b4",
          400: "#70be8c",
          500: "#10b981", // primary emerald brand color
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        slate: {
          950: "#0b0f19",
        },
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
