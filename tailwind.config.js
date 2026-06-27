/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        fresh: {
          50: "#effdf5",
          100: "#d9fbe8",
          500: "#1fb968",
          600: "#159554",
          700: "#117645"
        },
        citrus: "#f7b801",
        ink: "#17201c"
      },
      boxShadow: {
        glow: "0 20px 80px rgba(31, 185, 104, 0.22)",
        soft: "0 18px 45px rgba(23, 32, 28, 0.10)"
      }
    }
  },
  plugins: []
};
