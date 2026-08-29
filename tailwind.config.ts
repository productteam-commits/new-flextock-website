import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        flextock: {
          background: "#0F1115",
          dark: "#0F1115",
          neon: "#D2F34C",
          foreground: "#FFFFFF",
          muted: "#D1D5DB",
        },
      },
      fontFamily: {
        sans: ["var(--font-juturu)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
