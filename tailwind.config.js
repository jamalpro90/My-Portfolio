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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
