/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1600px", // Wider container for "creative" feel
      },
    },
    extend: {
      fontFamily: {
        // "Syne" is an excellent alternative to Agrandir for that wide, art-house feel
        display: ["Syne", "sans-serif"],
        // "Space Grotesk" for readable but modern technical text
        sans: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        border: "var(--border-subtle)",
        input: "var(--bg-secondary)",
        ring: "var(--brand-primary)",
        background: "var(--bg-primary)",
        foreground: "var(--text-primary)",
        primary: {
          DEFAULT: "var(--brand-primary)",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "var(--bg-secondary)",
          foreground: "var(--text-secondary)",
        },
      },
      animation: {
        "slow-spin": "spin 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
