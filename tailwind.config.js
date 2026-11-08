/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-primary': {
          DEFAULT: '#0F3D2E',  // Verde bosque oscuro
          dark: '#0F3D2E',
          olive: '#4E6B45',    // Verde oliva profundo
          soft: '#7E8F6A',     // Verde musgo suave
          light: '#E7DCC8',    // Beige arena
        },
        'brand-secondary': {
          DEFAULT: '#f7a10eff',  // Dorado tierra (Secondary)
          gold: '#b6790fff',
        },
        primary: {
          DEFAULT: '#0F3D2E',
        },
        secondary: {
          DEFAULT: '#B08A4A',
        },
        accent: {
          gold: '#B08A4A',
        },
        neutral: {
          soft: '#F5F5F5',     // Blanco suave
          border: '#D9D9D9',   // Gris claro
        },
        dark: {
          bg: '#0F3D2E',       // Fondo modo oscuro
          card: '#1B5A47',     // Tarjetas oscuras
          text: '#F5F5F5',
        },
        light: {
          bg: '#E7DCC8',
          card: '#FFFFFF',
          text: '#0F3D2E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.jpg')",
      }
    },
  },
  plugins: [],
}