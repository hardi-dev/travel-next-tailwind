module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-decore": "url('/decore.svg')",
        "hero-display": "url('/scrumble.svg')",
        "subs-right": "url('/circle-wave-1.svg')",
        "subs-left": "url('/circle-wave-2.svg')",
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
        layer:
          "0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)",
        "layer-soft": "0px 100px 80px rgba(0, 0, 0, 0.02)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "0",
          md: "0",
          lg: "0",
          xl: "0",
          "2xl": "0",
        },
        screens: {
          lg: "1170px",
        },
      },
      borderRadius: {
        huge: "8rem",
      },
      gridTemplateColumns: {
        footer: "200px 1fr 200px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
