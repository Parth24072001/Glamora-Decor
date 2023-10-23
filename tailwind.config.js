/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        maxXs: { max: "468px" },
        maxSm: { max: "639px" },
        maxMd: { max: "767px" },
        maxLg: { max: "1023px" },
        maxXl: { max: "1279px" },
        minMaxXxl: { min: "768px", max: "1366px" },
        minMaxXl: { min: "1024px", max: "1100px" },
        minMaxLg: { min: "1024px", max: "1279px" },
        minMaxMd: { min: "768px", max: "1023px" },
        minMaxSm: { min: "640px", max: "767px" },
      },
      colors: {
        golden: "#e0b459",
      },
      boxShadow: {
        cardShadow: "3px 3px 20px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};
