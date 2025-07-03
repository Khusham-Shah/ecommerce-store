/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          // Make sure your index.html file is being included.
    "./src/**/*.{js,ts,jsx,tsx}",  // Tailwind will scan all JS, JSX, TS, and TSX files in the src folder.
  ],
  theme: {
    extend: {},  // You can add customizations here in the future.
  },
  plugins: [],  // Add any plugins if needed in the future.
}
