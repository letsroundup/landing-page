'use strict';
/* eslint no-var: 0 */
const _curry = require('lodash/curry');

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var environment = process.env.NODE_ENV || 'development';
var development = environment === 'development';

var paths = [
  '/',
  '/privacy',
  '/tos',
];

var lIN = development ? '[name]__[local]' : '[hash:base64]';

var outputPath = path.join(__dirname, 'build');

const makePlugin = _curry((state, name) => `{${name}:${state}}`);
const truePlugins = [ 'removeTitle', 'removeDesc', 'removeViewBox', 'removeDimensions' ].map(makePlugin('true'));
const falsePlugins = [].map(makePlugin('false'));
const pluginList = [].concat(truePlugins, falsePlugins).join(',');
const svgoOptions = `svgo:{plugins:[${pluginList}]}`;

module.exports = {
  entry: {
    main: './src/index.js',
    // landing: './src/static/landing.js',
    analytics: './src/static/analytics.js',
    legal: './src/static/legal.js',
  },
  output: {
    path: outputPath,
    filename: '[name].js',
    libraryTarget: 'umd',
    publicPath: '/',
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
    new webpack.NoErrorsPlugin(),
    new StaticSiteGeneratorPlugin('main', paths, {}),
    new CopyWebpackPlugin([ {
      context: path.join(__dirname, 'src/thirdparties/'),
      from: '**/*',
    } ]),
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.(s?css)$/, loader: ExtractTextPlugin.extract(
        'style',
        'css?modules&localIdentName=' + lIN + '!autoprefixer?browsers=last 2 version!sass') },
      {
        test: /\.(svg)/,
        loaders: [
          `file-loader`,
          `image-webpack?{${svgoOptions}}`,
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)/,
        loader: `file-loader`,
      },
      { test: /\.(mp4)/, loader: 'file-loader' },
      { test: /CNAME|LICENSE/, loader: 'file-loader?name=[name]' },
      { test: /\.md/, loader: 'file-loader?name=[name].[ext]' },
    ],
  },
  devServer: { outputPath, host: '0.0.0.0' },
};
