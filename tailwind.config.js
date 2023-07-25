/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '2rem',
        '2xl': '1rem',
      },
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1420px',
      },
    },
    fontSize: {
      sm: '12px',
        '14sm': '14px',
        '16sm': '16px',
        '18sm': '18px',
      xl: '20px',
      '24xl': '24px',
      '26xl': '26px'
    },
    borderRadius: {
      default: '10px',
    },
    extend: {
      colors: {
        light: '#FAFBFF',
        grey: '#9CA3AF', 
        'grey-700': '#374151', 
        'grey-500': '#6B7280',
        'grey-400': '#9CA3AF',
        'grey-300': '#D1D5DB',
        'grey-200': '#E5E7EB',
      },
      userSelect: {
        'none': 'none',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
       }
    },
  },
  plugins: [],
}

