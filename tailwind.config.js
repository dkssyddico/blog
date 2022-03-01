module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.400'),
            'h2,h3': {
              color: theme('colors.slate.300'),
            },
            strong: {
              color: theme('colors.slate.200'),
            },
            code: {
              color: theme('colors.slate.200'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
