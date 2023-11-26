# Regex Metacharacter Symbols

Bắt đầu với

```javascript
const regex = /^h/i
const str = 'Hi everyone'
const result = regex.test(str)
console.log(result) // true
```

Kết thúc với

```javascript
const regex = /bye$/i
const str = 'goodbye'
const result = regex.test(str)
console.log(result) // true
```

Bắt đầu và kết thúc với

```javascript
const regex = /^chao$/i
const str = 'chao'
const result = regex.test(str)
console.log(result) // true
```

Khớp với 1 ký tự bất kỳ

```javascript
const regex = /m.y/i
const str1 = 'may vi tinh'
const str2 = 'mey vi tinh'
const result1 = regex.test(str1)
const result2 = regex.test(str2)
console.log(result1) // true
console.log(result2) // true
```

Cho phép ký tự trước đó lặp lại 0 hoặc nhiều lần

```javascript
const regex = /m*y/i
const str1 = 'my vi tinh'
const str2 = 'mmmy vi tinh'
const result1 = regex.test(str1)
const result2 = regex.test(str2)
console.log(result1) // true
console.log(result2) // true
```

Khớp ký tự tùy chọn

```javascript
const regex = /ma?y?n/i
const str1 = 'mn'
const str2 = 'man'
const str2 = 'myn'
const result1 = regex.test(str1)
const result2 = regex.test(str2)
const result3 = regex.test(str3)
console.log(result1) // true
console.log(result2) // true
console.log(result3) // true
```

Escape Character
Nếu muốn so khớp chuỗi có chứa các ký tự đặc biệt như \*, $, ^, ?... thì chỉ cần thêm dấu `\` vào trong regex

```javascript
const regex = /ma?y?n\?/i
const str = 'myn?'
const result = regex.test(str)
console.log(result) // true
```
