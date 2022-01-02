import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
});

export default {
  async redirects() {
    return [
      {
        source: '/yourhours',
        destination: 'https://yourhours.org',
        permanent: true,
      },
    ];
  },
  ...withNextra(),
};
