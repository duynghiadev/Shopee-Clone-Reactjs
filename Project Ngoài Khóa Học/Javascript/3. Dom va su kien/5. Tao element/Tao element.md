# Tạo Element

Để tạo một element bất kì ta dùng `document.createElement(tên element)`

Ví dụ

```javascript
// Tạo element là thẻ li
const li = document.createElement('li')

// Thêm class
li.className = 'collection-item'

// Thêm id
li.id = 'new-item'

// Thêm thuộc tính title
li.setAttribute('title', 'New Item')

// Tạo một text bên trong thẻ li
li.appendChild(document.createTextNode('Hello World'))

// Tạo một thẻ a
const link = document.createElement('a')

// Thêm nhiều class
link.className = 'delete-item secondary-content'

// Gán nội dung HTML bên trong thẻ a là một đoạn HTML mới
link.innerHTML = '<i class="fa fa-remove"></i>'

// Thêm thẻ a vào dưới thẻ li
li.appendChild(link)

// Thêm thẻ li vào dưới element ul
document.querySelector('ul.collection').appendChild(li)

console.log(li)
```
