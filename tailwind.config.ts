import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        color1:"#00BFFF",
        color2:"#F97316",
        color3:"#22C55E",
        color4:"#1E3A8A",
        color5:"#551D87"
      },
     
    },
  },
  plugins: [],
};

export default config;
