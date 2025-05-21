/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html", // Scan HTML files in the public folder
    "./public/**/*.js",   // Scan JS files in public if they manipulate classes (your script is inline)
    // Add other paths if you have templates elsewhere
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        // Example: if you want to map your custom colors to Tailwind names
        // 'custom-green': '#2ECC71',
        // 'custom-dark': '#1C2526',
      },
    },
  },
  plugins: [],
}