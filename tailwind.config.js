/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can add custom colors here later if you want 
      // to match your 'MonoSid' branding perfectly.
    },
  },
  plugins: [
    // This adds support for the 'animate-in' classes in your code
    require("tailwindcss-animate"), 
  ],
}