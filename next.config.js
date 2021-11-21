const nextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
})();

module.exports = {
  ...nextra,
  swcMinify: true,
};
