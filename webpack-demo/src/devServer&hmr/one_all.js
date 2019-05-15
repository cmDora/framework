// 关于 webpack-dev-server
// console.log('All lives end, all hearts are broken. Caring is not an advantage!')

// 关于 HMR
// import './index.css'

// var btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.body.appendChild(btn)

// btn.onclick = function() {
//   var div = document.createElement('div')
//   div.innerHTML = '索隆'
//   document.body.appendChild(div)
// }

// import counter from './counter'
// import number from './number'

// counter()
// number()

// if (module.hot) {
//   module.hot.accept('./number', () => {
//     document.body.removeChild(document.getElementById('number'))
//     number()
//   })
// }

// 关于 babel es6
// import '@babel/polyfill'
// const arr = [
//   new Promise(() => {}),
//   new Promise(() => {}),
// ]

// arr.map((item) => {
//   console.log(item)
// })

// 打包 react

// import '@babel/polyfill'

// import React, {
//   Component
// } from 'react'
// import ReactDom from 'react-dom'

// class App extends Component {
//   render() {
//     return <div>All lives end, all hearts are broken</div>
//   }
// }

// ReactDom.render(<App />, document.getElementById('root'))

// Tree Shaking