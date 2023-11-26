# Khai báo biến, scope, hoisting

## var

```javascript
var name = 'Duoc'
console.log(name)
name = 'Hung'
console.log(name)
```

### Khởi tạo

```javascript
var age
console.log(age)
age = 18
console.log(age)
```

### Quy tắc đặt tên

Tên phải bắt đầu bằng chữ cái hoặc ký tự \_, $.
Không được bắt đầu bằng số

```javascript
var _car = 'BMW'
var $stream = true
```

#### Một số quy ước đặt tên

```javascript
var firstName = 'Du' // Camel case
var first_name = 'Du' // Underscore
var FirstName = 'Du' // Pascal case
```

### Vấn đề hoisting với var

```javascript
console.log(message)
var message = 'Bị hoisting'
```

tương đương

```javascript
var message
console.log(message)
message = 'Bị hoisting'
```

Chế độ bình thường cho phép khởi tạo biến mà không cần dùng var

```javascript
message = 'Thông báo'
console.log(message) // Thông báo
```

Cách fix với use strict

```javascript
'use strict'
message = 'Thông báo'
console.log(message) // Thông báo
```

## let tương tự var nhưng không bị hoisting

```javascript
console.log(message) // lỗi
let message = 'không bị hoisting'
```

## const cũng không bị hoisting

const dùng để khai báo hằng số không thể bị gán lại

```javascript
const car = 'Mercedes'
car = 'BMW' // Lỗi
```

Để ý với object

```javascript
const profile = { name: 'Duoc' }
profile.name = 'Huy'
const array = [1, 2, 3, 4]
array.push(5)
```

## scope

### Global Scope

```javascript
var company = 'xdevclass'
// Code tại đây có thể xử dụng biến company
function myFunction() {
  // Code tại đây cũng có thể xử dụng biến company
}
```

### Function Scope

Code ở đây không thể sử dụng biến carName

```javascript
function myFunction() {
  var carName = 'Volvo'
  // code ở đây CÓ THỂ sử dụng biến carName
}
// Code ở đây không thể sử dụng biến carName
```

### Block Scope

```javascript
{
  var x = 2
}
// x CÓ THỂ được dùng tại đây
```

Trước ES2015 (ES6) Javascript không có **Block Scope**.

Từ ES6 trở đi biến được khai báo bằng `let` và `const` có **Block Scope**. Vì thế các biến bên ngoài block `{ }` không thể được truy cập vào bên trong block

```javascript
{
  let x = 2
}
// x KHÔNG THỂ truy cập tại đây
```
