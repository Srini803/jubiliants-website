import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050D1A",
          900: "#0A1628",
          800: "#0D1F3C",
          700: "#122444",
        },
        blue: {
          accent: "#1E6FD9",
          bright: "#2E86FF",
        },
        cyan: {
          accent: "#00C2FF",
          glow: "#00D4FF",
        },
        slate: {
          muted: "#8A9BB5",
          light: "#B8C8DE",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "pulse-ring": "pulseRing 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0,194,255,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0,194,255,0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
