/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        camPink: '#ff2d6b'
      },
      boxShadow: {
        glow: '0 0 30px rgba(255,45,107,0.35)'
      }
    },
  },
  plugins: [],
}
