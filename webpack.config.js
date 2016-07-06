'use strict';
/* eslint no-const: 0 */
const _curry = require('lodash/curry');
const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const WebpackRobots = require('@tanepiper/webpack-robotstxt');
const SitemapPlugin = require('sitemap-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const environment = process.env.NODE_ENV || 'development';
const development = environment === 'development';

const paths = [
  '/',
  '/privacy',
  '/tos',
];

const lIN = development ? '[name]__[local]' : '[hash:base64]';

const outputPath = path.join(__dirname, 'build');

const makePlugin = _curry((state, name) => `{${name}:${state}}`);
const truePlugins = [ 'removeTitle', 'removeDesc', 'removeViewBox', 'removeDimensions' ].map(makePlugin('true'));
const falsePlugins = [].map(makePlugin('false'));
const pluginList = [].concat(truePlugins, falsePlugins).join(',');
const svgoOptions = `svgo:{plugins:[${pluginList}]}`;

const domain = 'https://tryvoo.com';
const sitemapName = 'sitemap.xml';

module.exports = {
  entry: {
    main: './src/index.js',
    landing: './src/static/landing.js',
    legal: './src/static/legal.js',
  },
  output: {
    path: outputPath,
    filename: '[name].[chunkhash].js',
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
      '__API_URL__': JSON.stringify(development ? '/api' : 'https://api.letsroundup.com'),
      '__DEV__': development,
    }),
    new ExtractTextPlugin('main.[contenthash].css'),
    new webpack.NoErrorsPlugin(),
    new StaticSiteGeneratorPlugin('main', paths, {}),
    new SitemapPlugin(domain, paths, sitemapName),
    new WebpackRobots({ sitemap: `${domain}/${sitemapName}` }),
    new CopyWebpackPlugin([ {
      context: path.join(__dirname, 'src/thirdparties/js'),
      from: '**/*',
    } ]),
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      {
        test: /.(css)$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css'
        ),
        include: /thirdparties/,
      },
      {
        test: /\.(s?css)$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&localIdentName=' + lIN + '!autoprefixer?browsers=last 2 version!sass'
        ),
        exclude: /thirdparties/,
      },
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
  devServer: {
    outputPath,
    host: '0.0.0.0',
    proxy: {
      '/api/*': {
        'target': {
          'host': 'localhost',
          'protocol': 'http:',
          'port': 3001,
        },
        rewrite: (req) => {
          req.url = req.url.replace(/^\/api/, '');
        },
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
