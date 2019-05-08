// 简化版 webpack-dev-server 的实现
// 在 node 中直接使用 webpack
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.js')

// webpack 的编译器
// 意识是用 webpack 结合 config 配置文件，可以随时进行代码的编译。所以 compiler 是用来做编译的一个东西。
// 也就是说 webpack(config) 实际上返回了一个编译器。编译器执行一次，就会重新打包一下 代码
const compiler = webpack(config)

const app = express()

// 只要文件发生改变 ，那么 compiler 就会重新运行，重新运行生成的文件对应的打包输出内容的 publicPath 就是 config.output.publicPath
app.use(webpackDevMiddleware(compiler, {
  // publicPath: config.output.publicPath,  // 可以不写
}))

app.listen(3000, () => {
  console.log('server is runing...')
})