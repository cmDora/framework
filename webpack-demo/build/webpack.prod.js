const merge = require('webpack-merge')
const config = require('./webpack.config.js')

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  // optimization: {
  //   usedExports: true,
  // },
}

module.exports = merge(config, prodConfig)