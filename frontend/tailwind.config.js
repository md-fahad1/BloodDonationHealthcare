/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "text-white",
    "text-[#dff9fb]",
    "font-Poppins",
    "font-lobster",
    "text-[#00b894]",
    "text-[#4b7bec]",
    "bg-[#00b894]",
    "bg-[#019874]",
    "bg-white",
    "drop-shadow-lg",
    "drop-shadow-xl",
    "mix-blend-overlay",
    "blur-2xl",
    "blur-3xl",
    "animate-bounce",
    "animate-bounce-slow",
    "animate-bounce-slower",
    "animate-pulse",
    "animate-pulse-slow",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
