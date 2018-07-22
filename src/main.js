import Ellipse from './ellipse.js';
const copyNode = document.querySelector('.test')
const copy = copyNode.textContent

const copyEllipse = new Ellipse([
  {
    width: 768,
    count : 50
  },
  {
    width: 980,
    count: 100
  },
  {
    width: 1280,
    count: 150
  }
])

copyNode.innerHTML = copyEllipse.ellipseCopy(copy)

window.addEventListener('resize', () => {
  copyNode.innerHTML = copyEllipse.ellipseCopy(copy)
})
