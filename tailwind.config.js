/**
 * Tailwind CSS Configuration File
 * This file sets up content paths, theme extensions (fonts), and any plugins.
 */

module.exports = {
  // Files Tailwind should scan for class usage
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      // Custom fonts for different themes
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Used in Theme 1
        serif: ['Merriweather', 'serif'], // Used in Theme 2
        pacifico: ['"Pacifico"', 'cursive'], // Used in Theme 3
      },
    },
  },

  plugins: [], // Add Tailwind plugins here if needed
};
