const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  // optimization: {
  // splitChunks: {
  // chunks: 'all',
  //     // cacheGroups: {
  //     //   vendors: false,
  //     //   default: false,
  //     // }
  //   }
  // }
  optimization: {
    // splitChunks: {
    //   cacheGroups: {
    //     styles: {
    //       name: 'styles',
    //       test: /\.css$/,
    //       chunks: 'all',
    //       enforce: true,
    //     }
    //   }
    // }
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: 'all', // 下面全是默认项，不做更改就不需要写。不过 chunks 的默认值其实是 async
      // minSize: 30000,
      // maxSize: 0,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // name: true,
      // cacheGroups: {
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10,
      //     // filename: 'vendors.js',
      //   },
      //   default: {
      //     priority: -20,
      //     reuseExistingChunk: false,
      //     filename: 'common.js',
      //   }
      // }
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
    }]
  },
  performance: false, // 不让命令板提示我们性能上的问题（警告）
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  // manifest // 旧版本 webpack 因为这个的差异，每次打包内容没发生改变 hash 就会改变
  // optimization: {  // runtimeChunk 就是处理旧版本 webpack manifest 带来的问题。当然新版本也可以写，写了也没有问题，只是多了个 runtime 的文件，里面就是 manifest 的相关代码
  //   runtimeChunk: {
  //     name: 'runtime',
  //   },
  // },
  output: {
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