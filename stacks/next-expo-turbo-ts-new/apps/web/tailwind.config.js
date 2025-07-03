/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    '../../packages/app/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
}
