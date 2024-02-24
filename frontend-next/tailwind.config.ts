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
      colors: {
        dark: {
          500: "#3D3B40",
          300: "#6E6C70",
        },
        blue: {
          500: "#525CEB",
          300: "#A1A0D6",
        },
        "light-blue": {
          500: "#BFCFE7",
          300: "#E1E3F0",
        },
        light: {
          500: "#F8EDFF",
          300: "#FCF7FF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
