import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        move: {
          "100%": {
            transform: "translateX(calc(100% - 250px))",
          },
        },
        crawl: {
          "0%": {
            top: "400px",
            transform: "rotateX(20deg)  translateZ(0)",
          },
          "100%": {
            top: "-6000px",
            transform: "rotateX(25deg) translateZ(-2500px)",
          },
        },
        delayed: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "linear-progress":
          "move 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "crawl-progress": "crawl 45s linear forwards",
        "delayed-view": "delayed 2s linear",
      },
      letterSpacing: {
        starWars: "6px",
      },
      colors: {
        starwars: "#feda4a",
      },
      fontFamily: {
        starwars: `'Pathway Gothic One', sans-serif`,
      },
    },
  },
  plugins: [],
};
export default config;
