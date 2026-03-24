import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0F172A',
        accent: '#22D3EE',
        muted: '#94A3B8'
      },
      boxShadow: {
        card: '0 18px 30px -18px rgba(15, 23, 42, 0.45)'
      }
    }
  },
  plugins: []
};

export default config;
