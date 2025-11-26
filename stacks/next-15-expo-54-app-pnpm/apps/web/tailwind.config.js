/** @type {import('tailwindcss').Config} */
module.exports = {
  // Extend shared base config
  ...require('@repo/tailwind-config'),

  // Web-specific: Enable class-based dark mode
  darkMode: 'class',

  // Web-specific: Make Tailwind classes important to override other styles
  important: true,

  // Web-specific content paths
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    '../../packages/app/components/**/*.{js,jsx,ts,tsx}',
  ],
}
