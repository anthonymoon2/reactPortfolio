/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        cursor: {
          '50%': { borderColor: 'transparent' },
        },
        typing: {
          from: { width: '0' },
        },
      },
      animation: {
        'typing-cursor':
          'typing 1s steps(12), cursor 0.4s step-end infinite alternate',
      },
    },
  },
  plugins: [],
};
