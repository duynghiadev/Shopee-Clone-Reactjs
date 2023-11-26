# Select một Element

## Element là gì

**Element** hay **HTML Element** đơn giản chỉ là những thẻ HTML

## Tìm 1 Element bằng id

```javascript
// Chọn 1 element từ cây DOM
const title = document.getElementById('title')
console.log(title)

// Lấy một số thuộc tính từ element
console.log(title.id)
console.log(title.className)

// Thay đổi style
title.style.background = '#333'
title.style.color = '#fff'
title.style.padding = '5px'

// Thay đổi nội dung
title.textContent = 'Hello mọi người'
title.innerText = 'Tôi là Alex'
title.innerHTML = '<span style="color: red"></span>'
```

## Tìm một Element bằng selector

[Selector](https://www.w3schools.com/cssref/css_selectors.asp) là cú pháp CSS giúp tìm kiếm những phần tử trong cây DOM

```javascript
console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card'))
console.log(document.querySelector('h5'))

document.querySelector('li').style.color = 'red'
document.querySelector('ul li').style.color = 'blue'

document.querySelector('li:last-child').style.color = 'red'
```
