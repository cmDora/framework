const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  // devtool: 'cheap-module-source-map',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './src/index.js',
  },
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080,
    hot: true, // 开启 hot module replacement 功能
    hotOnly: true, //  即便 HMR 没有生效，也不让浏览器自动的刷新
    // hotOnly 可配可不配，一般配上。如果 HMR 出了问题，那么 webpack-dev-server 会自动的重新刷新页面，如果不需要刷新，就写上 true 就 ok 了
  },
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        // presets: [
        //   ['@babel/preset-env', {
        //     useBuiltIns: 'usage',
        //     corejs: 3,
        //   }],
        //   "@babel/preset-react",
        // ],
        // 'plugins': [
        //   ['@babel/plugin-transform-runtime', {
        //     'corejs': 2,  
        //     'helpers': true,
        //     'regenerator': true,
        //     'useESModules': false,
        //   }]
        // ]
      },
    }, {
      test: /\.jpg$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
          limit: 20840
        }
      }
    }, {
      test: /\.css$/,
      use: [
        'style-loader', {
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
        'style-loader', {
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
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    publicPath: '/', // 所有打包生成的文件之间的引用前面都加一个根路径（不加也 ok，但是加上可确保不会有问题）
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}



// presets: [
//     ["@babel/preset-env", {
//         targets: {
//         chrome: '67',
//       },
//       useBuiltIns: 'usage',
//       corejs: 3,
//     }],
//     "@babel/preset-react",
//   ]

// "plugins": [
//   ["@babel/plugin-transform-runtime", {
//     "corejs": 2,  
//     "helpers": true,
//     "regenerator": true,
//     "useESModules": false,
//   }],
// ],
// "presets": [
//   [
//     "@babel/preset-react"
//   ],
// ],