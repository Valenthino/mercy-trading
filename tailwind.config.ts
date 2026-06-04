import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep cashew-leaf greens — primary brand colour
        brand: {
          50: "#edfbf3",
          100: "#d2f5e0",
          200: "#a8e9c5",
          300: "#71d6a4",
          400: "#3bbb80",
          500: "#1c9d64",
          600: "#107e51",
          700: "#0d6443",
          800: "#0e5038",
          900: "#0c4230",
          950: "#05261b",
        },
        // Warm cashew-kernel gold — accent
        gold: {
          50: "#fbf7ec",
          100: "#f4e9c8",
          200: "#ead08d",
          300: "#e1b85a",
          400: "#d8a23c",
          500: "#c8902f",
          600: "#ac6f27",
          700: "#8a5224",
          800: "#724224",
          900: "#613721",
        },
        cream: "#faf7f0",
        ink: "#13201a",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 14px 40px -18px rgba(13, 100, 67, 0.28)",
        card: "0 1px 2px rgba(16, 24, 20, 0.04), 0 12px 30px -16px rgba(16, 24, 20, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
