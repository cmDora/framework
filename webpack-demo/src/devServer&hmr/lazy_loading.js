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