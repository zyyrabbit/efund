'use strict';
const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const {
  commonConfig
 } = require('./config');

module.exports = {
  context: commonConfig.CONTEXT,
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: commonConfig.ALIAS,
    modules: [
      'node_modules',
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin()
  ]
}
