/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-paper",
    "bg-item-paper",
    "bg-item-paper-dark",
    "bg-scissors",
    "bg-item-scissors",
    "bg-item-scissors-dark",
    "bg-rock",
    "bg-item-rock",
    "bg-item-rock-dark",
    "bg-lizard",
    "bg-item-lizard",
    "bg-item-lizard-dark",
    "bg-spck",
    "bg-item-spock",
    "bg-item-spock-dark",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle, hsl(214, 47%, 23%),hsl(237, 49%, 15%))",
        paper:
          "linear-gradient(120deg, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        scissors:
          "linear-gradient(120deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        rock: "linear-gradient(120deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        lizard:
          "linear-gradient(120deg, hsl(261, 73%, 60%), hsl(261, 72%, 63%))",
        spock:
          "linear-gradient(120deg, hsl(189, 59%, 53%), hsl(189, 58%, 57%))",
      },
      colors: {
        aura: {
          DEFAULT: "rgba(255, 255, 255, 0.06)",
          darker: "rgba(255, 255, 255, 0.03)",
          darkest: "rgba(255, 255, 255, 0.01)",
        },
        blue: {
          main: "hsl(214, 47%, 23%)",
        },
        grey: {
          main: "hsl(217, 16%, 90%)",
          outline: "hsl(217, 16%, 45%)",
        },
        score: "hsl(229, 64%, 46%)",
        dark: "hsl(229, 25%, 31%)",
        white: {
          DEFAULT: "#DDDDDD",
          shadow: "hsl(217, 16%, 70%)",
        },
        item: {
          paper: {
            DEFAULT: "hsl(230, 89%, 65%)",
            dark: "hsl(240, 55%, 50%)",
          },
          scissors: {
            DEFAULT: "hsl(40, 84%, 53%)",
            dark: "hsl(31 89% 40%)",
          },
          rock: {
            DEFAULT: "hsl(40, 84%, 53%)",
            dark: "hsl(365 69% 30%)",
          },
          lizard: {
            DEFAULT: "hsl(261, 72%, 63%)",
            dark: "hsl(261, 60%, 45%)",
          },
          spock: {
            DEFAULT: "hsl(189, 58%, 57%)",
            dark: "hsl(200 63% 33%)",
          },
        },
      },
      maxWidth: {
        pageContent: "120rem",
      },
      spacing: {
        7.5: "1.875rem",
        12.5: "3.125rem",
      },
      fontSize: {
        "2xl": "1.375rem",
        "3xl": "1.5rem",
        "4xl": "1.875rem",
        "5xl": "2.25rem",
        "6xl": "3rem",
        "7xl": "3.75rem",
        "8xl": "4.5rem",
        "9xl": "6rem",
        "10xl": "8rem",
      },
    },
  },
  plugins: [],
};
