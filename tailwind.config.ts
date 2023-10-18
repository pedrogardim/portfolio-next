import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF8F5A",
        secondary: "#85FDF7",
        background: "#2C293D",
      },
      gridTemplateRows: {
        "home-column": "0.8fr 2fr 2fr",
      },
    },
  },
  plugins: [],
};
export default config;
