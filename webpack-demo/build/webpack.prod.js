const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const merge = require('webpack-merge')
const config = require('./webpack.config.js')

const prodConfig = {
  mode: 'production',
  // devtool: 'cheap-module-source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            // modules: true,
          },
        },
      ]
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            // modules: true,
          }
        },
        'sass-loader',
        'postcss-loader',
      ]
    }]
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsWebpackPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].chunk.css'
    })
  ],
  // optimization: {
  //   usedExports: true,
  // },
  output: { // hash 或者 contenthash 都能达到一样的效果
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js'
  }
}

module.exports = merge(config, prodConfig)