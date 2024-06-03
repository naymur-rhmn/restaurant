/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: '"Nunito", sans-serif',
    },

    extend: {
      colors: {
        transparent: "transparent",
        black: "#000000",
        white: "#FFFFFF",
        green: "#B8D20B",
        softGreen: "#F4F9F8",
        darkGray: "#050202",
        gray: "#515A63",
        orange: "#F86D58",
        blue: "#040459",
        title: "#2E2E2E",
        body: "#808080",
        inField: "#CCCCCC",
        disable: "#E6E6E6",
        hover: "#889B08",
      },
    },
  },
  plugins: [],
};
