const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // Updated from purge to content for modern Tailwind syntax support
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // Explicit fluid screen breakpoints to make layouts highly responsive
    screens: {
      'xs': '475px',     // Extra small devices (large phones)
      ...defaultTheme.screens, // Inherits standard 'sm', 'md', 'lg', 'xl', '2xl'
    },
    extend: {
      colors: {
        "custom-light-blue": "#0177FB",
        "custom-dark-blue": "#3F72DE",
      },
      // Fluid spacing parameters to scale typography layouts smoothly across device breakpoints
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  variants: {
    extend: {
      // Enables responsive variant properties for transitions, animations, and hover shifts
      translate: ['responsive', 'hover', 'focus'],
      boxShadow: ['responsive', 'hover', 'focus'],
      borderColor: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
};