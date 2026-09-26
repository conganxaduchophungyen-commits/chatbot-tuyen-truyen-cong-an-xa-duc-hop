import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        police: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#38a9f6',
          500: '#0e8ce4',
          600: '#026fc4',
          700: '#03589f',
          800: '#074b83',
          900: '#0b3f6d',
          950: '#072848',
        },
        flag: {
          red: '#da251d',
          gold: '#ffff00',
        }
      },
    },
  },
  plugins: [],
};
export default config;
