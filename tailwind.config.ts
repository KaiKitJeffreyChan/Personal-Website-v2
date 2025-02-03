import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "serif"],
    },
    extend: {
      colors: {
        primary: "#0C0C0C",
        secondary: "#3E5879",
        primHighlight: "#D8C4B6",
        secHighlight: "#F5EFE7",
      },
    },
  },
  plugins: [],
};
export default config;
