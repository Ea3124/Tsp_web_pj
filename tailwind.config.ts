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
      fontFamily: {
        abel: ['Abel', 'sans-serif'], // 폰트 이름을 지정합니다.
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#094FB7',
        'custom-blue-2': '#2B65BB',
        'custom-pink': '#ff49db',
        'custom-orange': '#FEB800',
        'custom-orange-2': '#EFA109',
        'custom-font-gray': '#16335E',
        'custom-font-gray-2': '#CACACA',
        'custom-font-brown': '#948E89',
        'custom-font-brown-2': '#E2DDD8',
        'custom-font-brown-3': '#EDEAE6',

        // 추가적인 색상을 정의할 수 있습니다.
      },
      fontWeight: {
        'light': '350',
        'thin': '100'
      },
      borderRadius: {
        'custom-1': '45px', // 사용자 지정 모서리 둥글기 1
        'custom-2': '20px', // 사용자 지정 모서리 둥글기 2
        // 여기에 더 많은 사용자 지정 값을 추가할 수 있습니다.
      }
    },
  },
  plugins: [],
};
export default config;
