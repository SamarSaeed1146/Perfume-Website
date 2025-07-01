// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pop: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        "fade-in": {
          // Re-added fade-in for mobile menu, if not already there
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        pop: "pop 0.3s ease-out", // A quick pop animation
        "fade-in": "fade-in 0.3s ease-out forwards", // For mobile menu
      },
    },
  },
  plugins: [],
};
