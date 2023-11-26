# Chuỗi – String

Chuỗi có thể được chứa trong nháy đơn hoặc nháy kép. Vị trí đầu tiên của chuỗi là **0**.

```javascript
var carName1 = "Volvo XC60" // Double quotes
var carName2 = 'Volvo XC60' // Single quotes
```

## Một số phương thức hay dùng

**length** trả về độ dài của chuỗi

```javascript
var txt = 'Duoc'
var sln = txt.length // 4
```

**indexOf()** trả về vị trí đầu tiên của từ khóa trong một chuỗi. Nếu không có sẽ trả về -1

```javascript
var str = "Please locate where 'locate' occurs!"
var pos = str.indexOf('locate') // 7
```

**Tách chuỗi**

Có 3 phương thức tách chuỗi

**slice(start, end)**: Tách từ vị trí start đến vị trí end – 1

```javascript
var str = 'Apple, Banana, Kiwi'
var res = str.slice(7, 13) // Banana
//Nếu không có tham số thứ 2 thì coi như đếm đến cuối
str.slice(7) // Banana, Kiwi
```

**substring(start, end)**: Tương tự với slice

```javascript
var str = 'Apple, Banana, Kiwi'
var res = str.substring(7, 13) // Banana
```

**substr()** tương tự **slice()** nhưng tham số thứ 2 là độ dài chuỗi

```javascript
var str = 'Apple, Banana, Kiwi'
var res = str.substr(7, 6) // Banana
str.substr(7) // Banana, Kiwi
str.substr(-4) // Kiwi
```

**replace()**: Thay thế chuỗi

```javascript
var str = 'Please visit Microsoft and Microsoft!'
var n1 = str.replace('Microsoft', 'W3Schools')
var n2 = str.replace(/Microsoft/g, 'W3Schools')
console.log(n1) // Please visit W3Schools and Microsoft!
console.log(n2) // Please visit W3Schools and W3Schools!
```

**Chuyển đổi sang chữ hoa hoặc chữ thường (upper and lower case)**

```javascript
var text1 = 'Hello World!'
var text2 = text1.toUpperCase() // HELLO WORLD!
var text3 = text1.toLowerCase() // hello world!
```

**concat()**: Nối chuỗi

```javascript
var text1 = 'Hello'
var text2 = 'World'
var text3 = text1.concat(' ', text2) // Hello World
```

**trim()**: Xóa khoảng trắng 2 bên chuỗi

```javascript
var str = ' Hello World! '
var newStr = str.trim() // Hello World!
```

**charAt() hoặc []**: Lấy ký tự từ một chuỗi

```javascript
var str = 'HELLO WORLD'
str.charAt(0) // returns H
str[0] // returns H
str[0] = 'A' // Không bị lỗi nhưng đoạn code này không hoạt động
```

**charCodeAt()**: Lấy UTF-16 code tại vị trí bất kì trong chuỗi

```javascript
var str = 'HELLO WORLD'
str.charCodeAt(0) // returns 72
```

**split()**: Chuyển chuỗi sang mảng. Tham số là chuỗi ngăn cách

```javascript
const txt1 = 'a,b,c,d,e'
const array1 = txt1.split(',') // [ 'a', 'b', 'c', 'd', 'e' ]
// Nếu tham số là rỗng thì sẽ return về mảng từng ký tự
const txt2 = 'Hello'
const array2 = txt2.split('') // [ 'H', 'e', 'l', 'l', 'o' ]
```
