/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maindark: "#1B941F",
        tertiary: "#E8FF8F",
        dark1: "#191919",
        dark2: "#212326",
        dark3: "#464646",
        cinza1: "#8A8A8A",
        cinza2: "#E4E4E4",
        cinza3: "#CCD3D4",
        branco: "#f9f9f9",
        marca2: "#E9FFC7",
        error: "#F44A4A",
      },
    },
  },
  plugins: [],
};
