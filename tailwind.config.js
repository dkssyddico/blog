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
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.slate.200'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.slate.200'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
