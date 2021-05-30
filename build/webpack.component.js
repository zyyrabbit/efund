const {
  componentConfig,
  externals
 } = require('./config')
 const { merge } = require('webpack-merge');
 const commonConfig = require('./webpack.common');

 module.exports = merge(
  commonConfig,
  {
    mode: 'production',
    externals,
    entry: componentConfig.ENTRY,
    output: {
      path: componentConfig.OUT_PATH,
      filename: '[name].js',
      chunkFilename: '[id].js',
      libraryTarget: 'commonjs2'
    }
  }
 )
