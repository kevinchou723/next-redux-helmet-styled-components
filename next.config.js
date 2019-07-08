const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(withImages({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|jpg|gif|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: './',
          outputPath: 'static/',
          name: '[name].[ext]',
        },
      },
    });

    return config;
  },
}));
