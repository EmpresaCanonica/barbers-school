import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: ['var(--font-abril-fatface)', 'serif'],
        sourceSerif: ['var(--font-source-serif-4)', 'serif'],
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
  plugins: [],
};
export default config;
