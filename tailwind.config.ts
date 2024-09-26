/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./**/*.{js,ts,jsx,tsx}", // Include all matching files
    "!./node_modules/**", // Exclude everything in node_modules
  ],
  //...
};
module.exports = config;
