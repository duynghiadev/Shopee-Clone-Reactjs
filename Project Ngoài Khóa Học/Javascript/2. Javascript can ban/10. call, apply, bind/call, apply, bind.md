# call, apply, bind

Chỉ có các function mới có thể gọi 3 hàm này.

## call

Gọi hàm và cho phép bạn truyền vào một đối số this và các đối số phân cách nhau bởi dấu phẩy

## apply

Tương tự call. Gọi hàm, cho phép truyền vào một đối số this và tiếp theo là các đối số thông qua mảng

## bind

Trả về một hàm mới. Cho phép truyền vào một đối số this và các đối số phân cách nhau bởi dấu phẩy

Khi dùng 3 hàm này, `this` sẽ đề cập đến object được truyền vào.

```javascript
let person = { name: 'Duoc', age: 24 }
function say(text1, text2) {
  console.log(text1 + ' ' + text2 + ' ' + this.name + ' ' + this.age)
}
say.call(person, 'Xin', 'chao') // Xin chao Duoc 24
say.apply(person, ['Xin', 'chao']) // Xin chao Duoc 24
const newSay = say.bind(person, 'Xin', 'chao')
newSay() // Xin chao Duoc 24
```
