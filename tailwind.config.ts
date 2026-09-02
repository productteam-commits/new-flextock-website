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
          background: "#071522",
          navy: "#071522",
          dark: "#061321",
          panel: "#10283A",
          panelStrong: "#16384B",
          neon: "#70C48F",
          foreground: "#F4F7F3",
          muted: "#9BAAB5",
          line: "#284255",
          sand: "#E8E5D7",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
