/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amber: {
          DEFAULT: '#E8960C',
          50: '#FFF8ED',
        },
        cream: '#FFF8ED',
        primary: '#1A1208',
        secondary: '#6B5B4E',
        border: '#EDE8E0',
        success: {
          DEFAULT: '#3F7D52',
          light: '#E7F2EA',
        },
        danger: '#B94A3D',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
