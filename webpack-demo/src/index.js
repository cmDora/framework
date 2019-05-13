// async function getComponent() {
//   const {
//     default: _
//   } = await
//   import ( /*webpackChunkName:"lodash"*/ 'lodash')
//   const element = document.createElement('div')
//   element.innerHTML = _.join(['CM', 'Dora'], '-')
//   return element
// }
// getComponent().then((element) => {
//   document.body.appendChild(element)
// })


// document.addEventListener('click', () => {
//   import ('./click.js').then(({
//     defualt: func
//   }) => {
//     func()
//   })
// })
// var a = 1
// var b = 12
// var c = 3

// function fn(argument) {
//   console.log(a + b)
// }

// function fn2(argument) {
//   console.log(b + c)
// }

// fn()
document.addEventListener('click', () => {
  import ( /* webpackPrefetch: true */ './click.js').then(({
    default: func
  }) => {
    func()
  })
})