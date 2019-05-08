const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
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
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
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