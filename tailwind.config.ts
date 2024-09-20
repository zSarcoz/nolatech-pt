import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#035096",
        secondary: "#01a3b0",
        blackBlue: "#02010A",
        darkBlue: "#140152"
        // Add more colors to your palette here
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"]
        }
    }
  },
  plugins: [],
};
export default config;
