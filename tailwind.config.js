const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'tomato-red': '#ff4b01',
        'yellow-sun': '#faa000',
        'slate-grey': '#3e4749',
        'lite-slate': '#879499',
        'color-primary': '#1E40AF',          // Azul escuro
        'color-primary-dark': '#1E3A8A',     // Para hover
        'color-secondary': '#2563EB',        // Azul claro
        'color-secondary-dark': '#1D4ED8',   // Para hover

        'neutral': colors.zinc,
        'success': colors.green,
        'danger': colors.red,
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};