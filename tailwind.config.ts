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
        // Custom color palette
        background: {
          primary: '#FAFAF9',
          secondary: '#F4F2EE',
          tertiary: '#EBE7E0',
        },
        text: {
          primary: '#2C2C2C',
          secondary: '#5A5A5A',
          inverse: '#FAFAF9',
        },
        border: {
          DEFAULT: '#EBE7E0',
          hover: '#2C2C2C',
        },
        button: {
          primary: '#1A1A1A',
          hover: '#2C2C2C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        // 8px spacing system
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '8': '64px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease',
      },
      lineHeight: {
        'body': '1.6',
      },
    },
  },
  plugins: [],
};

export default config;
