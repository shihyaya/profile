import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./component/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Graphik', 'sans-serif'],
      //   serif: ['Merriweather', 'serif'],
      // },
      colors:{
        'primary':{
          100: '#E7E6E1',
          75:'#E8E7E3',
          50:'#ECECE7',
          25:'#F5F3F1',
          10:'#FBFBF9'
        },
        'dark':{
          100: '#314E52',
          75:'#3E595C',
          50:'#637A7D',
          25:'#A4B0B2',
          10:'#D9DFDF'
        },
        'secondary':'#F7F6E7',
        'accent':'#F2A154',
        'white':'#fefefe'
      }
    },
  },
  plugins: [],
};
export default config;
