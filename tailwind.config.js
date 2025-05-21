/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",         // Scan index.html in the project root for Tailwind classes
    "./public/**/*.js",     // Scan JavaScript files in the public folder if they dynamically add Tailwind classes
    // "./public/**/*.html", // This line can be removed if index.html was the only HTML file in public/
                            // Or kept if other HTML files exist in public/ that use Tailwind classes
    "./src/**/*.css",       // Scan source CSS files (like input.css) for @apply or theme() usage
  ],
  theme: {
    extend: {
      // Your custom theme extensions
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
  plugins: [
    // Any Tailwind plugins you might be using
  ],
}
