const {
  buildConfig,
  externals
 } = require('./config')
 const { merge } = require('webpack-merge');
 const commonConfig = require('./webpack.common');

 module.exports = merge(
  commonConfig,
  {
    mode: 'production',
    externals,
    entry: {
      index: buildConfig.ENTRY,
    },
    output: {
      path: buildConfig.OUT_PATH,
      filename: 'efund.common.js',
      chunkFilename: '[id].js',
      libraryExport: 'default',
      libraryTarget: 'commonjs2'
    }
  }
 )
