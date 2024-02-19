/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "../../packages/ui/**/*.{js,jsx,ts,tsx}"],
  presets: ["nativewind/presets"],
  theme: {
    extend: {},
  },
  plugins: [],
};
