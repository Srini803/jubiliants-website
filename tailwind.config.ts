import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Fraunces", "Georgia", "serif"],
        body:    ["'Instrument Sans'", "'Segoe UI'", "system-ui", "sans-serif"],
        sans:    ["'Instrument Sans'", "'Segoe UI'", "system-ui", "sans-serif"],
      },
      colors: {
        indigo: { brand: "#2E3192", deep: "#23276F", ink: "#191C52" },
        azure:  { DEFAULT: "#1B75BB", sky: "#29ABE2" },
        flame:  { orange: "#F7941D", red: "#D8232A", gold: "#FBB040" },
        paper:  { DEFAULT: "#FAF7F0", raised: "#FFFFFF", surface: "#F2EDE1" },
      },
    },
  },
  plugins: [],
};
export default config;
