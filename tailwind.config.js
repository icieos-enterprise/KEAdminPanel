/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
      backgroundImage: {
        'studio': "url('/src/assets/studio.png')",
       
      },
      boxShadow: {
        'admin': '1px 4px 8px rgba(79, 79, 79, 0.25)', // Custom shadow with X, Y, blur, and opacity
      },
      opacity: {
        '80': '0.8', // Add custom opacity
      },
      colors: {
        'custom-gray': '#1E1E1E',
      }
    },
    },
    plugins: [],
  };
  