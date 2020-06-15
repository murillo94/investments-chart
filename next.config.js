const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  svgo: {
    plugins: [{ removeComments: true, cleanupAttrs: true }]
  }
});
