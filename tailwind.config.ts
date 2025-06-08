// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0056B3',
        'secondary-green': '#28A745',
        'accent-teal': '#20C997',
        'neutral-dark': '#343A40',
        'neutral-light': '#F8F9FA', // This was already here

        // NEW VERY LIGHT BACKGROUND COLORS
        'bg-white-pure': '#FFFFFF',
        'bg-bluish-light': '#F0F8FF', // Alice Blue
        'bg-off-white': '#FAFAFA',    // Very light gray
        'bg-cream': '#FCFBF5',      // Very light cream
      },
      backgroundImage: {
        // Keep these or adjust subtly if needed, but primary sections will be solid colors
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [], // No custom plugins needed for this iteration
};

export default config;