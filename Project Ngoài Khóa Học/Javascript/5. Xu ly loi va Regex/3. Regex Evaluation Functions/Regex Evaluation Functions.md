# Regex Evaluation Funtions

Nên test trên trang: [https://regexr.com/](https://regexr.com/)
Tham khảo: [https://developer.mozilla.org/vi/docs/Web/JavaScript/Guide/Regular_Expressions](https://developer.mozilla.org/vi/docs/Web/JavaScript/Guide/Regular_Expressions)
## Regex là gì

**Regex** là các mẫu (pattern) thay vì các chuỗi cụ thể được sử dụng tìm/thay thế (Find/Replace). Là một công cụ cực mạnh cho xử lí chuỗi trong Php, javascript… Ví dụ: Khi kiểm tra tính hợp lệ của email hoặc số điện thoại thì điều bạn nghĩ tới đầu tiên chính là regex. **Regex** là viết tắt của **Regular Expression**, tên thuần Việt là biểu thức chính quy.

Ứng dụng chủ yếu của Regex là so khớp chuỗi dựa trên một mẫu (pattern)
Ví dụ: Kiểm tra một chuỗi có phải là email, kiểm tra một chuỗi có chứa số hay không,...

## Regex căn bản

Trong javascript, Regex được coi là một object
Ví dụ Regex dùng để kiểm tra một chuỗi có chứa string 'name'

```javascript
const regex = /name/
regex.test('my name is duoc') // true
```

Trong trường hợp nếu string của bạn không có `name` mà thay vào đó là `Name` hay `NAME` nhưng bạn vẫn muốn là khớp với Regex thì chỉ cần thêm `i` phía sau

```javascript
const regex = /name/i
regex.test('my Name is duoc') // true
```

## Một số phương thức áp dụng với Regex

`Regex.exec()`: return về một array hoặc null

```javascript
const reg = /name/
reg.exec('what is your name') // array
reg.exec('hello everybody') // null
```

`String.match()`: return về một array hoặc null

```javascript
const reg = /name/
const string = 'what is your name'
string.match(reg) // array
```

`String.search()`: return về index của chuỗi khớp đầu tiên, nếu không có thì return -1

```javascript
const reg = /name/
const string = 'what is your name'
string.search(reg) // 13
```

`String.replace()`: Thay thế 1 hoặc nhiều ký tự trong chuỗi, return về chuỗi mới đã được thay thế

```javascript
const regex = /name/i
const string = 'my name is Name'
const newString = string.replace(regex, 'cat')
console.log(newString) // my cat is Name
```

Trong trường hợp muốn thay thế hết ký tự khớp thì thêm `g` vào cuối regex

```javascript
const regex = /name/gi
const string = 'my name is Name'
const newString = string.replace(regex, 'cat')
console.log(newString) // my cat is cat
```
