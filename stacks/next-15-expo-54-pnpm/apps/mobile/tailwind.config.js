/** @type {import('tailwindcss').Config} */
module.exports = {
  // Extend shared base config
  ...require('@repo/tailwind-config'),

  // Mobile-specific content paths
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    '../../packages/app/**/*.{js,jsx,ts,tsx}',
  ],
}
