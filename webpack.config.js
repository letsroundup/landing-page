var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var environment = process.env.NODE_ENV || 'development';
var development = environment === 'development';

var paths = [
  '/',
  '/privacy',
];

var lIN = development ? '[name]__[local]' : '[hash:base64]';

module.exports = {
  entry: {
    main: './src/index.js',
    landing: './src/static/landing.js',
    analytics: './src/static/analytics.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment),
      '__DEV__': development,
    }),
    new ExtractTextPlugin('main.css'),
    new StaticSiteGeneratorPlugin('main', paths, {}),
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.(s?css)$/, loader: ExtractTextPlugin.extract(
        'style',
        'css?modules&localIdentName=' + lIN + '!autoprefixer?browsers=last 2 version!sass') },
      { test: /\.(png|jpg|jpeg|gif|svg)/, loader: 'file-loader' },
      { test: /CNAME/, loader: 'file-loader?name=[name]' },
    ],
  },
};
