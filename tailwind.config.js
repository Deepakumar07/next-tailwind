module.exports = {
  content: ["./pages/**/*.{jsx,tsx}", "./src/**/*.{jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        primary: "#f64c75",
        secondary: "linear-gradient(108.25deg,#0a0926 -6.96%,#530e7d 113.05%)",
      },
    },
  },
  plugins: [],
};
