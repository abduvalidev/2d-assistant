/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      xs: '576px',
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        golos: "Golos Text",
      },
      fontSize: {
        "heading-1": [
          "3.75rem",
          {
            lineHeight: "4.5rem",
          },
        ],
      },
      spacing: {
        "base-1": "32.25rem",
        "base-2": "42.25rem",
        "base-3": "63.6875rem",
        15: "3.75rem",
        17: "4.25rem",
        30: "7.5rem",
      },
      colors: {
        primary: "#356FEC",
        brand: {
          gray: {
            400: "#D9D9E5",
            800: "#666679",
            900: "#2B2B2B",
          },
        },
      },
      boxShadow: {
        soft: "0 0 12px rgba(130, 129, 152, 0.2)",
      },
    },
  },
  plugins: [],
};
