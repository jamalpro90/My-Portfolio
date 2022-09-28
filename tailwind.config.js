module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "0.3rem",
          sm: "1rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        r: "Roboto, sans-serif",
        "r-slab": "Roboto Slab, serif",
        "u-mono": "Ubuntu Mono, monospace",
      },
      colors: {
        "black-111": "#000",
        "black-222": "#222222",
        "black-09": "#090909",
        "black-1c": "#1c1c1c",
        "slate-50": "#F8FAFC",
        "linear-blue": "linear-gradient(#3b82f6, #1e40af)",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
