module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "10xl": ["9rem", "1"],
      },
      transitionProperty: {
        width: "width",
        position: "position",
      },
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};
