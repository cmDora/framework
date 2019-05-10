// code splitting

// 一、

// 以下是最原始状态下的问题：
// 1、lodash 第三方库在打包的时候会和下面的 业务逻辑打包在一个文件内 main.bundle.js
// 2、假设 lodash 1mb  ====  业务逻辑 1mb，那么打包之后 main.bundle.js 2mb
// 3、用户加载改页面时要加载 2mb 的 main.bundle.js 文件（打包文件过大，加载时间过长）
// 4、更改 业务逻辑 时，又要重新做一次打包，又回打包一个新的 main.bundle.js 2mb 文件。
//    这个时候用户重新访问这个页面，又要重新加载 main.bundle.js 2mb

// <!--------------------------------------------------------------------------------!>

// 解决方法：将 lodash 挂载在 window 上，单独打包 lodash（尝试的时候出问题了，具体原因目前未解开，思路是这样，用时请慎重）

// 1、main.bundle.js 2mb 拆分成 lodash.js 1mb 和 main.bundle.js 1mb
// 2、此时，当业务逻辑发生变化时，只要加载 main.bundle.js 1mb 就可以了，因为 lodash 并没有更改，在用户浏览器里面是有缓存的
// 3、这样就会有效提升页面展开的速度

//  <!-------------------------------------------------------------------------------!>



// 二、

// 是先引用 lodash 库，然后调用这个库里的方法，是一个同步的执行顺序（加载模块、往下执行）（同步的逻辑）
// 结合 webpack 的 splitChunks
// 同步代码

// import _ from 'lodash'

// // 字符串连接功能，第二个参数是连接符的意思
// // 此处省略 一万行 业务逻辑
// console.log(_.join(['a', 'b', 'c'], '**'))
// console.log(_.join(['a', 'b', 'c'], '***'))
// console.log(_.join(['a', 'b', 'c'], '***'))

// 注意：在平常项目中。同时并行加载两个 1mb 的文件，可能会比加载一个 2mb 的文件要快一点（但并不是绝对的）



// 三、


// <!--------------------------------以下是异步模块的引入-----------------------------------!>



// 异步载入的组件会自动的被打包到一个单独的文件里面（无需在 webpack 中配置 splitChunks）
// 异步代码（无需任何配置，会自动进行代码分割）

// function getComponent() {
//   return import ( /*webpackChunkName:"lodash"*/ 'lodash').then(({
//     default: _ // 是用来做兼容的，兼容 commonjs
//   }) => {
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['CM', 'Dora'], '-')
//     return element
//   })
// }

// document.addEventListener('click', () => {
//   getComponent().then((element) => {
//     document.body.appendChild(element)
//   })
// })

// 异步函数式写法
async function getComponent() {
  const {
    default: _
  } = await
  import ( /*webpackChunkName:"lodash"*/ 'lodash')
  const element = document.createElement('div')
  element.innerHTML = _.join(['CM', 'Dora'], '-')
  return element
}

document.addEventListener('click', () => {
  getComponent().then((element) => {
    document.body.appendChild(element)
  })
})