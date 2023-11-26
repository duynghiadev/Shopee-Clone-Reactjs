# Sơ lược về các phương thức DOM hay dùng

```javascript
const list = document.querySelector('ul')
let val

// get các node con bằng childNodes
// Phương thức này trả về một NodeList
val = list.childNodes

// get các element con bằng children
// Phương thức này trả về một HTML Collection
val = list.children

// get node con đầu tiên
val = list.firstChild

// get element con đầu tiên
val = list.firstElementChild

// get node con cuối cùng
val = list.lastChild

// get element con cuối cùng
val = list.lastElementChild

// get node cha
val = list.parentNode

// get element cha
val = list.parenElement

// get node phía dưới
val = list.nextSibling

// get element phía dưới
val = list.nextElementSibling

// get node phía trên
val = list.previsousSibling

// get element phía trên
val = list.previousElementSibling
```
