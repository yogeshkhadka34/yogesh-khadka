import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
      'ss': '30rem',
      // min-width: 480px
      'sm': '40rem',
      // => @media (min-width: 640px) { ... }

      'md': '48rem',
      // => @media (min-width: 768px) { ... }

      'lg': '64rem',
      // => @media (min-width: 1024px) { ... }

      'xl': '80rem',
      // => @media (min-width: 1280px) { ... }

      '2xl': '96rem',
      // => @media (min-width: 1536px) { ... }
    },

      fontFamily:{
        "primary":["Montserrat","sans-serif"],
        "secondary":["Poppins","sans-serif"]
      },
      colors:{
        dark:"#1b1b1b",
        light:"#f5f5f5",
        gray:{
          DEFAULT:"#2f2f2f",
          600:"rgb(75 85 99)",
          700:"rgb(55 65 81)",
          800:"rgb(31 41 55)"
        },
        cream:"#BFBDB0",
        primary: "#536DFE"
      }
    },
  },
  plugins: [],
}
export default config
