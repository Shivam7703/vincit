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
        // color4:"#00BFFF",
        color2:"#F40000",
        color3:"#22C55E",
        color4:"#0AA5C3",
        color5:"#2B3378"
      },
     
    },
  },
  plugins: [],
};

export default config;
