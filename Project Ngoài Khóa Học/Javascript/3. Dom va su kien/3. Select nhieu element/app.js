// let labels = document.getElementsByTagName('label')
// labels = document.getElementsByClassName('form-group')

// for (let i = 0; i < labels.length; i++) {
//   labels[i].style.color = 'green'
// }

// let labelHTMLCollection = document.getElementsByTagName('label')
// console.log(labelHTMLCollection)
let labelNodeList = document.querySelectorAll('form .form-group')
labelNodeList.forEach(item => {
  item.style.color = 'green'
})