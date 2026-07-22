/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae3',
          300: '#b0bac9',
          400: '#8595ad',
          500: '#677892',
          600: '#526077',
          700: '#434e61',
          800: '#3a4352',
          900: '#0b1220',
          950: '#060912',
        },
        brand: {
          50: '#eef9f4',
          100: '#d6f1e6',
          200: '#aee3d0',
          300: '#7dceb2',
          400: '#48b391',
          500: '#2a9a78',
          600: '#1d7d61',
          700: '#1a654f',
          800: '#185140',
          900: '#154335',
          950: '#0a271e',
        },
        gold: {
          50: '#fbf7ee',
          100: '#f5ebd3',
          200: '#ebd5a8',
          300: '#dfb977',
          400: '#d4a055',
          500: '#c98a3f',
          600: '#b06d31',
          700: '#8c5128',
          800: '#734126',
          900: '#613723',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,18,32,0.04), 0 8px 24px -8px rgba(11,18,32,0.08)',
        lift: '0 2px 4px rgba(11,18,32,0.05), 0 24px 48px -16px rgba(11,18,32,0.18)',
        glow: '0 0 0 1px rgba(42,154,120,0.18), 0 20px 60px -20px rgba(42,154,120,0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
