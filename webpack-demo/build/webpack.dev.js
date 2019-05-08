const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('./webpack.config.js')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080,
    hot: true, // 开启 hot module replacement 功能
    hotOnly: true, //  即便 HMR 没有生效，也不让浏览器自动的刷新
    // hotOnly 可配可不配，一般配上。如果 HMR 出了问题，那么 webpack-dev-server 会自动的重新刷新页面，如果不需要刷新，就写上 true 就 ok 了
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}

module.exports = merge(config, devConfig)