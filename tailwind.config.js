/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      fredoka: ["'Fredoka\\ One', 'cursive' !important"],
      pt: ["'PT\\ Mono', monospace !important"],
      space: ["'Space\\ Mono', 'monospace' !important"]
    },
    width: {
      '72': '28rem'
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      default: '0.25rem',
      default: '4px',
      'md': '0.375rem',
      'lg': '20%',
      'full': '9999px',
      'large': '55%',
    }
    
  },
  plugins: [],
}