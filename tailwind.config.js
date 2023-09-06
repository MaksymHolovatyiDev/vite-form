/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'Marine-Blue': 'hsl(213, 96%, 18%)',
        'Purplish-Blue': 'hsl(243, 100%, 62%)',
        'Pastel-Blue': 'hsl(228, 100%, 84%)',
        'Light-Blue': 'hsl(206, 94%, 87%)',
        'Strawberry-Red': 'hsl(354, 84%, 57%)',
        'Cool-Gray': '#9699AB',
        'Light-Gray': 'hsl(229, 24%, 87%)',
        Magnolia: 'hsl(217, 100%, 97%)',
        Alabaster: 'hsl(231, 100%, 99%)',
        white: 'hsl(0, 0%, 100%)',
      },
      backgroundImage: {
        'bg-desktop': "url('./src/assets/images/bg-sidebar-desktop.svg')",
        'thank-you': "url('./src/assets/images/icon-thank-you.svg')",
        Arcade: "url('./src/assets/images/icon-arcade.svg')",
        Pro: "url('./src/assets/images/icon-pro.svg')",
        Advanced: "url('./src/assets/images/icon-advanced.svg')",
        Checkmark: "url('./src/assets/images/icon-checkmark.svg')",
      },
    },
  },
  plugins: [],
};
