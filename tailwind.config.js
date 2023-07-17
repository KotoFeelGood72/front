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
        xl: '5rem',
        '2xl': '6rem',
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
        grey: '#9CA3AF', 
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

