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
          dark: "#0F1115",
          neon: "#D2F34C",
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
