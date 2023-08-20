const h1 = document.getElementsByTagName('h1')[0]
h1.style.color = 'red'

const h2 = document.createElement('h2')
h2.textContent = 'Im Alex'

console.log(document.getElementsByTagName('h2')[0])
document.body.appendChild(h2)
console.log(document.getElementsByTagName('h2')[0])
