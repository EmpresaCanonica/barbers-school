import type { Config } from "tailwindcss";

const {nextui} = require("@nextui-org/theme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img_bg_register': "url('/assets/bg-register2.jpg')",
      },
      fontFamily: {
        abril: ['var(--font-abril)', 'serif'],
        sourceSerif: ['var(--font-source)', 'serif'],
      },
      colors: {
        'primary-black': '#020F13',
        'primary-white': '#E4DED2',
        'primary-brown': '#7C490E',
        'primary-yellow': '#D08E18',
        'detail-green': '#359364',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
