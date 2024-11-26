/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#5C946E", // Sage Green
          DEFAULT: "#2A7F62", // Deep Teal
          dark: "#225B4F", // Forest Green
        },
        secondary: {
          light: "#F4C469", // Soft Gold
          DEFAULT: "#ECA400", // Amber
          dark: "#C98500", // Dark Amber
        },
        neutral: {
          light: "#F1F5F9", // Cool White
          DEFAULT: "#E5E7EB", // Light Gray
          dark: "#4B5563", // Charcoal Gray
        },
        accent: {
          navy: "#34495E", // Navy
          plum: "#6D597A", // Plum
        },
      },
    },
  },
  plugins: [],
};
