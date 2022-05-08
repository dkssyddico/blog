module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.300'),
            'h2,h3,h4': {
              color: theme('colors.slate.200'),
              fontWeight: '600',
            },
            strong: {
              color: theme('colors.teal.400'),
            },
            code: {
              color: theme('colors.slate.200'),
            },
            a: {
              color: theme('colors.teal.400'),
            },
            blockquote: {
              color: theme('colors.white'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
