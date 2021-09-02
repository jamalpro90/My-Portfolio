module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: '4rem',
      },
      fontFamily: {
        r: 'Roboto, sans-serif',
        'r-slab': 'Roboto Slab, serif',
        'u-mono': 'Ubuntu Mono, monospace',
      },
      colors: {
        'black-111': '#111111',
        'black-222': '#222222',
        'black-09': '#090909',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
