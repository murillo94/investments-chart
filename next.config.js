const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const plugins = [
  [
    withOptimizedImages,
    {
      svgo: {
        plugins: [{ removeComments: true, cleanupAttrs: true }]
      }
    }
  ]
];

module.exports = withPlugins(plugins, {
  webpack: (config, { webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    return config;
  }
});
