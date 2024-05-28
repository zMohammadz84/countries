import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-primary-color": "rgb(var(--color-primary) / <alpha-value>)",
        "custom-background-color":
          "rgb(var(--color-background) / <alpha-value>)",
        "custom-text-color": "rgb(var(--color-text) / <alpha-value>)",
      },
      keyframes: {
        light: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        dark: {
          "0%": { transform: "rotate(-180deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        light: "light 0.5s  forwards  cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        dark: "dark 0.5s  forwards  cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
