/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
    },
    borderWidth: {
      DEFAULT: "1.9px",
      x: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      width: {
        "w-31": "31rem",
        21: "21px",
        136: "136px",
      },
      minHeight: {
        24: "302px",
      },
      maxWidth: {
        340: "340px",
      },
      height: {
        253: "253px",
        21: "21px",
        fit: "fit-content",
      },
      margin: {
        6.25: "6.25rem",
        6.7: "6.6875rem",
        36: "36px",
        30: "30px",
        25: "25px",
        21: "21px",
        18: "18px",
        13: "13px",
      },
      padding: {
        4.4: "4.4rem",
        2.7: "2.6875rem",
        30: "30px",
        25: "25px",
      },
      gap: {
        135: "8.4375rem",
        152: "9.6875rem",
      },
      colors: {
        transparent: "transparent",
        black: "#000000",
        white: "#ffffff",
        light: "#F1F1F1",
        gray: {
          800: "#D9D9D9",
          700: "#5A5B5B",
          600: "#979EA6",
          500: "#444444",
          400: "#16181A",
          300: "#898989",
          200: "#222222",
          100: "#2A2A2A",
          50: "#F9F9F9",
        },
        primary: {
          600: "#121D42",
          500: "#2763E9",
          200: "#F1F5FE",
          100: "#F6F8FE",
        },
        secondary: {
          600: "#b0441f",
          500: "#FC622F",
          100: "#FFF4F0",
        },
        dark: {
          100: "#F8F8F8",
          200: "#EFEFEF",
          300: "#FAFAFA",
          400: "#FCFCFCFA",
          500: "#C8C8C8",
          600: "#F6F6F6",
          700: "#FAFAFAFA",
          800: "#555555",
        },
        success: "#56BC7C",
        error: {
          main: "#E20000",
          deep: "#F11524",
          common: "#FF3D00",
          dark: "#820909",
          button: "#E30000",
        },
        warning: {
          500: "#FEF5DC",
        },
        active: {
          500: "#00A4FF",
          400: "#114FF0",
        },
        link: {
          active: "#3972E0",
          hover: "#30519C",
          green: "#09821A",
        },
        main: "#f4f5f8",
        base: "#1E1E1E",
        pending: { main: "#FF9500", bg: "#fffcf4" },
        completed: { main: "#0CAF60", bg: "#eef9f5" },
        declined: { main: "#CC212D", bg: "#fcf0f1" },
        instock: { main: "#09821A", bg: "#F5FEF7" },
      },
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    fontSize: {
      xs: [
        "8px",
        {
          letterSpacing: "2%",
          fontWeight: "normal",
        },
      ],
      buttonText: [
        "14px",
        {
          letterSpacing: "2%",
          fontWeight: "semi-bold",
        },
      ],
      labels: [
        "12px",
        {
          fontWeight: "medium",
        },
      ],
      "xxx-small": [
        "6px",
        {
          fontWeight: "medium",
        },
      ],
      "xx-small": [
        "8px",
        {
          fontWeight: "medium",
        },
      ],
      "x-small": [
        "10px",
        {
          fontWeight: "medium",
        },
      ],
      small: [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "medium",
        },
      ],
      "sm-regular": [
        "14px",
        {
          fontWeight: "normal",
          lineHeight: "140%",
        },
      ],
      "md-regular": [
        "15px",
        {
          fontWeight: "normal",
          lineHeight: "140%",
        },
      ],
      "sm-headline": ["16px", { lineHeight: "140%" }],
      "x-sm-headline": ["18px", { lineHeight: "140%" }],
      "md-headline": ["20px", { lineHeight: "140%" }],
      headline: ["24px", { fontWeight: "medium" }],
      "l-headline": ["32px"],
      "ll-headline": ["35px"],
      "xl-heading": ["40px"],
      "xxl-heading": ["60.68px"],
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.primary.200", "currentColor"),
    }),
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
