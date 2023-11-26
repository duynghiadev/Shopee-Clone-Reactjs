# Xóa và thay thế element

```javascript
// Thay thế element

// Tạo element
const newHeading = document.createElement('h2')
// Thêm id
newHeading.id = 'task-title'
// Chèn một text vào
newHeading.appendChild(document.createTextNode('Task List'))

// Get element
const oldHeading = document.getElementById('task-title')
// Get element cha
const cardAction = document.querySelector('.card-action')

// Thay thế oldHeading thành newHeading
cardAction.replaceChild(newHeading, oldHeading)

// Xóa Element
const lis = document.querySelectorAll('li')
const list = document.querySelector('ul')

// Xóa 1 element bằng cách gọi method remove từ chính element
lis[0].remove()

// Hoặc gọi method removeChild từ element cha của nó
list.removeChild(lis[3])

// CLASSES & thuộc tính
const firstLi = document.querySelector('li:first-child')
const link = firstLi.children[0]

let val

// Classes
val = link.className
val = link.classList
val = link.classList[0]
link.classList.add('test')
link.classList.remove('test')
val = link

// Thuộc tính
val = link.getAttribute('href')
val = link.setAttribute('href', 'http://google.com')
link.setAttribute('title', 'Google')
val = link.hasAttribute('title')
link.removeAttribute('title')
val = link

console.log(val)
```
