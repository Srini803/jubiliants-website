import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "'Segoe UI'", "system-ui", "sans-serif"],
        body:    ["Inter",   "'Segoe UI'", "system-ui", "sans-serif"],
        sans:    ["Inter",   "'Segoe UI'", "system-ui", "sans-serif"],
      },
      colors: {
        navy: { 950: "#080F1C", 900: "#0F172A", 800: "#1E293B", 700: "#263349" },
        blue: { accent: "#2563EB", light: "#3B82F6" },
        slate: { muted: "#94A3B8", light: "#CBD5E1" },
      },
    },
  },
  plugins: [],
};
export default config;
