import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F7F3",
        text: "#333333",
        primary: {
          DEFAULT: "#8A9A5B", // Sage
          light: "#A7B67A",
          dark: "#6F7B49"
        },
        calm: {
          DEFAULT: "#A2B9D1" // Blue calm (secondary option)
        }
      },
      fontFamily: {
        inter: ["var(--font-inter)"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    },
  },
  plugins: [],
};
export default config;
