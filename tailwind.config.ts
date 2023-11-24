import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      maxsm: { max: "960px" },
      sm: { max: "960px" },
      md: { min: "960px" },
      lg: "1512px",
    }
  },
  plugins: [],
};
export default config;
