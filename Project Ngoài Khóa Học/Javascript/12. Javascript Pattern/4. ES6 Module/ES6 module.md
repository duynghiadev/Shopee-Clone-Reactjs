# ES6 Module

Trước khi ES6 xuất hiện thì Javascript không có tính năng module hóa, anh em dev phải dựa vào các thứ viện ngoài như Webpack hoặc tự tạo theo Module Pattern mà mình giới thiệu ở phần 1 để module hóa ứng dụng web.

Giờ đây thì ta có thể dùng ES6 module ở trong môi trường trình duyệt thông thường, ở trong [Webpack](https://webpack.js.org/api/module-methods/#es6-recommended) hoặc [NodeJs phiên bản 13.2.0](https://nodejs.medium.com/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663) trở lên.

ES6 Module lưu trữ trên từng file, mỗi file là một module. Mọi thứ bên trong module mặc định là private. Hàm, biến và các class được “xuất” ra ngoài bằng từ khóa export. Code bên trong module luôn luôn chạy ở chế độ **strict mode**.

## Export một module

Có 2 cách để export một function hoặc 1 biến:

### Sử dụng từ khóa `export` ở trước khai báo function hoặc biến.

Ví dụ:

**utils.js**

```js
export const greeting = 'Hello World'
export function sum(num1, num2) {
  console.log('Sum:', num1, num2)
  return num1 + num2
}
export function subtract(num1, num2) {
  console.log('Subtract:', num1, num2)
  return num1 - num2
}
// Đây là một private function
function privateLog() {
  console.log('Private Function')
}
```

### Thêm từ khóa `export` vào dưới khai báo biến hoặc function.

Ví dụ:

```js
function multiply(num1, num2) {
  console.log('Multiply:', num1, num2)
  return num1 * num2
}
function divide(num1, num2) {
  console.log('Divide:', num1, num2)
  return num1 / num2
}
// Đây là một private function
function privateLog() {
  console.log('Private Function')
}
export { multiply, divide }
```

## Import một module

Tương tự như export một module, có 2 cách để import một module bằng cách sử dụng từ khóa `import`.

### Import nhiều biến/hàm cùng một lần

Ví dụ:
**main.js**

```js
// import nhiều phần tử
import { sum, multiply } from './utils.js'
console.log(sum(3, 7))
console.log(multiply(3, 7))
```

### Import tất cả ở trong module

**main.js**

```js
// import tất cả phần tử trong module
import * as utils from './utils.js'
console.log(utils.sum(3, 7))
console.log(utils.multiply(3, 7))
```

## Import và Export cũng có thể dùng bí danh (alias)

Nếu bạn muốn tránh việc xung đột tên, bạn có thể thay đổi tên export cũng như import.

Ví dụ Đổi tên một export

**utils.js**

```js
function sum(num1, num2) {
  console.log('Sum:', num1, num2)
  return num1 + num2
}
function multiply(num1, num2) {
  console.log('Multiply:', num1, num2)
  return num1 * num2
}
export { sum as add, multiply }
```

Đổi tên một import

**main.js**

```js
import { add, multiply as mult } from './utils.js'
console.log(add(3, 7))
console.log(mult(3, 7))
```

Trong file HTML các bạn nhớ link đến file **main.js** (file mà import các file khác) nhé

**index.html**

```html
<script src="main.js" type="module"></script>
```
