/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#d32f2f', // Traditional deep media red
          darkRed: '#7f1d1d', // Rich deep red accent
          accent: '#ef4444', // Bright red accent
          dark: '#111827', // Rich dark gray/black for readability
          charcoal: '#1f2937', // Medium dark for subheadings
          lightBg: '#fdfdfd', // Soft clean background
        }
      },
      fontFamily: {
        sans: ['"Noto Sans Devanagari"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['"Rajdhani"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
