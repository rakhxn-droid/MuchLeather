/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        'great-vibes': ['Great Vibes', 'cursive'],
        allura: ['Allura', 'cursive'],
      },
      colors: {
        white: '#FFFFFF',
        black: '#111111',
        'leather-brown': '#8B5E3C',
        'dark-chocolate': '#4A2C1D',
        'warm-beige': '#E7D7C1',
        'soft-cream': '#F7F5F2',
        leather: {
          50: '#fef9f5',
          100: '#fdefe3',
          200: '#f8d7bc',
          300: '#f2bc8c',
          400: '#ea9657',
          500: '#e1732e',
          600: '#c75821',
          700: '#a5441e',
          800: '#863920',
          900: '#6e321d',
        },
        charcoal: {
          50: '#f6f6f7',
          100: '#e3e4e7',
          200: '#c7c9d0',
          300: '#a1a5b2',
          400: '#767c8e',
          500: '#595f72',
          600: '#454a5a',
          700: '#383c48',
          800: '#2e313b',
          900: '#0f1115',
        }
      },
      boxShadow: {
        'luxury': '0 20px 60px -15px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
