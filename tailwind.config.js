module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // backgroundImage: {
      //   ash: "url('/src/ash.png')",
      //   opacity: "opacity-20",
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
