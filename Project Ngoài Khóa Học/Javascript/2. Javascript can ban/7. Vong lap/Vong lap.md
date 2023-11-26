# Vòng lặp

Vòng `while` kiểm tra điều kiện trước khi thực hiện code bên trong

```javascript
let a = 1
let sum = 0
while (a <= 10) {
  sum += a
  a++
}
console.log(sum) // 55
```

Vòng `do-while` thực hiện code trước rồi mới kiểm tra điều kiện cho đoạn code tiếp theo

```javascript
let a = 1
let sum = 0
do {
  sum += a
  a++
} while (a <= 10)
console.log(sum) // 55
```

Vòng `for`

```javascript
let sum = 0
for (let i = 1; i <= 10; i++) {
  sum += i
}
console.log(sum) // 55
```

Vòng `for-in` dùng lặp các key của object

```javascript
let person = { fname: 'John', lname: 'Doe', age: 25 }
let text = ''
for (let x in person) {
  text += person[x] + ' '
}
console.log(text) // John Doe 25
```

Vòng `for-of` dùng lặp các value của interable object điển hình như array hay string

```javascript
let people = ['Nick', 'Alan', 'Ben']
let text = ''
for (let value of people) {
  text += value + ' '
}
console.log(text) // Nick Alan Ben
```
