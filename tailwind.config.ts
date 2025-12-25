import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2f5cff",
          dark: "#1e3db8",
          light: "#edf1ff"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
