/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightRed: "hsl(0, 100%, 67%)",
        orangeyYellow: "hsl(39, 100%, 56%)",
        greenTeal: "hsl(166, 100%, 37%)",
        cobaltBlue: "hsl(234, 85%, 45%)",
        gradientBackgroundStart: "hsl(252, 100%, 67%)",
        gradientBackgroundEnd: "hsl(241, 81%, 54%)",
        gradientCircleStart: "hsla(256, 72%, 46%, 1)",
        gradientCircleEnd: "hsla(241, 72%, 46%, 0)",
        paleBlue: "hsl(221, 100%, 96%)",
        lightLavender: "hsl(241, 100%, 89%)",
        darkGrayBlue: "hsl(224, 30%, 27%)",
      },
      fontFamily: {
        hanken: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
