/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundImage: {
        'gradient-four-colors': 'linear-gradient(to top right, #8636F8 2%, #F020B3 35%, #F8475E 67%, #FF9421 100%)',
      },
      transitionProperty: {
        bg: "background-color, background-image",
      },
      colors: {
        blur: "rgba(255, 255, 255, 0.08)",
        primary: "#0D1117",
        secondary: "#161B22",
        dark: "#292929",
        lightblue: "#019EF9",
        "one-dark": "#30363D",
        "half-pink": "#939AFF",
        btncolor: "#3F9CFB",
        grayColor: "#1F1D29",
        grayBlur: "rgba(255, 255, 255, 0.08)",
        grayBorder: "rgba(255, 255, 255, 0.10)",
        features_bg_grad_via: "rgba(22, 27, 34, 0.53)",
        features_bg_grad_to: "rgba(22, 27, 34, 0.46)",
        features_icons_color:
            "linear-gradient(180deg, #8324ff98 0%, #5D2ABF 100%)",
        pink_gradient: "linear-gradient(45deg, #3F9CFB -10%, #B856F3 139%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-fira-code)"],
        inter: ["Inter", "sans-serif"],
      },
      dropShadow: {
        lightblue: "0 0 8px #019EF9",
        lightblue50: "0 0 4px #2596BE",
        pink: "linear-gradient(45deg, #3F9CFB -10%, #B856F3 139%)",
      },
      fontSize: {
        heading: "52px",
        headingMd: "48px",
        headingSm: "32px",
        headingLg: "36px",
        extraSmall: "14px",
        small: "16px",
      },
      lineHeight: {
        heading: "52px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl: "30px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    animation: {
      scaleIn: "scaleIn 200ms ease",
      scaleOut: "scaleOut 200ms ease",
      fadeIn: "fadeIn 200ms ease",
      fadeOut: "fadeOut 200ms ease",
      enterFromLeft: "enterFromLeft 250ms ease",
      enterFromRight: "enterFromRight 250ms ease",
      exitToLeft: "exitToLeft 250ms ease",
      exitToRight: "exitToRight 250ms ease",
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
