/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        almostBlack: '#080808',
      },
      animation: {
        glitch: 'glitch 2s linear infinite',
        glitchTop: 'glitchTop 1.5s linear infinite',
        glitchBottom: 'glitchBottom 2.5s linear infinite',
      },
      keyframes: {
        glitch: {
          '2%, 64%': {
            transform: 'translate(1px, 0) skew(0deg)',
          },
          '4%, 60%': {
            transform: 'translate(-1px, 0) skew(0deg)',
          },
          '62%': {
            transform: 'translate(0, 0) skew(5deg)',
          },
        },
        glitchTop: {
          '2% 64%': {
            transform: 'translate(2px, -2px)',
            opacity: 0.1,
          },
          '4%, 60%': {
            transform: 'translate(-2px, 2px)',
            opacity: 0.7,
          },
          '62%': {
            transform: 'translate(2px, -1px) skew(-13deg)',
            opacity: 0,
          },
        },
        glitchBottom: {
          '2%, 64%': {
            transform: 'translate(-1px, 0)',
          },
          '4%, 60%': {
            transform: 'translate(-1px, 0)',
            opacity: 1,
          },
          '62%': {
            transform: 'translate(-11px, 2px) skew(21deg)',
            opacity: 0.6,
          },
        },
      },
    },
  },
  plugins: [],
};
