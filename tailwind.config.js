module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-decore": "url('/decore.svg')",
        "hero-display": "url('/scrumble.svg')",
      }),
      fontFamily: {
        display: "Volkhov",
        heading: "Open Sans",
        body: "Poppins",
      },
      colors: {
        gray: {
          900: "#181E4B",
          600: "#686D77",
          500: "#5E6282",
        },
        orange: {
          light: "#F1A501",
          DEFAULT: "#DF6951",
        },
      },
      backgroundSize: {
        125: "125%",
        40: "40%",
      },
      boxShadow: {
        btnMd: "0px 20px 35px rgba(241, 165, 1, 0.15)",
        btnSm: "0px 15px 30px rgba(223, 105, 81, 0.3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
