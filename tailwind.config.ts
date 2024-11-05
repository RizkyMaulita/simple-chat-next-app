import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "blue-primary": "#00b4d8",
        "blue-secondary": "#90e0ef",
        "blue-tersier": "#0077b6",
        "blue-complementary": "#03045e",
        "blue-light": "#caf0f8",
      },
    },
  },
  plugins: [daisyui],
};
export default config;