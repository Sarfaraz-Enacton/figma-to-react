/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // primary: ["Nunito", "sans-serif"],
        primary: ['"Nunito", sans-serif'],
        secondary: ['"Noto Sans", sans-serif'],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          DEFAULT: "1200px",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#162466",
          100: "#F5F7FF",
        },
        secondary: {
          DEFAULT: "#FF3B33",
        },
        dark: {
          DEFAULT: "#181B31",
        },
        gray: {
          100: "#ECECEC",
          150: "#DCDCDC",
          200: "#D0D0D0",
          250: "#D6D6E3",
        },
        light: {
          DEFAULT: "#FFFFFF",
          blue: "#E9F7FF",
          red: "#FFDBD4",
          yellow: "#FFF3CA",
          gray: "#CFCFCF",
        },
        pink: {
          DEFAULT: "#FFD1C8",
          light: "#FFF8F8",
        },
        green: {
          DEFAULT: "#38E55E",
        },
        yellow: {
          DEFAULT: "#FFDC60",
        },
        red: {
          DEFAULT: "#FF1850",
        },
        blue: {
          DEFAULT: "#5956E8",
        },
      },
      backgroundImage: {
        "section-gradient":
          "linear-gradient(to bottom right, #E9F7FF, #FFDBD4)",
        "section-gradient-2":
          "linear-gradient(151deg, #FFF8F8 10.38%, #F5F7FF 95.44%)",
        card: "linear-gradient(111deg, #E9F7FF 9.66%, #FFDBD4 57.52%, #FFF3CA 103.42%)",
        hero: "url('/images/hero-bg.png')",
        "about-hero": "url('/images/hero-common-bg.png')",
        "service-hero": "url('/images/services-hero.png')",
        "contact-hero": "url('/images/contact-hero.png')",
        subscribe: "url('/images/subscribe-bg.png')",
        "service-cta": "url('/images/service-cta.png')",
        "term-gradient":
          "linear-gradient(151deg, #FFF8F8 10.38%, #F5F7FF 95.44%)",
      },
    },
  },
  plugins: [],
};
