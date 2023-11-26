# Toán tử

Có đến 10 loại toán tử khác nhau trong Javascript

- Toán tử gán – Assignment operators
- Toán tử so sánh – Comparison operators
- Toán tử toán hạng – Arithmetic operators
- Toán tử bitwase – Bitwise operators
- Toán tử logic – Logical operators
- Toán tử chuỗi – String operators
- Toán tử ba ngôi – Conditional (ternary) operator
- Toán tử phẩy – Comma operator
- Toán tử một ngôi – Unary operators
- Toán tử quan hệ – Relational operators

Nhưng dưới đây là những toán tử thường được dùng nhất
Chi tiết hơn có thể xem tại [bài viết này](https://xdevclass.com/phan-2-toan-tu-cau-lenh-dieu-kien-vong-lap-function-hof-arrow-function-call-apply-bind-trong-javascript/#Toan_tu_operator)

## Toán tử toán hạng

```javascript
1 + 2
2 - 1
3 * 4
2 ** 3
4 / 2
10 % 5
5++
5--
++5
--5
```

## Toán tử gán

```javascript
let a = 1
a += 2
a -= 2
a *= 2
a **= 2
a /= 2
a %= 2
```

## Toán tử so sánh

### == bằng giá trị

```javascript
console.log(2 == '2')
```

### === bằng giá trị và kiểu dữ liệu

```javascript
console.log(2 === '2')
```

### != không bằng giá trị

```javascript
console.log(2 != '2')
```

### !== không bằng giá trị và kiểu dữ liệu

```javascript
console.log(2 !== '2')
```

### > lớn hơn

```javascript
console.log(3 > 2)
```

### < bé hơn

```javascript
console.log(3 < 2)
```

### >= lớn hơn hoặc bằng

```javascript
console.log(2 >= 2)
```

### <= bé hơn hoặc bằng

```javascript
console.log(5 <= 6)
```

### ? toán tử ba ngôi

```javascript
let check = 5
let a = check > 4 ? 2 : 1
```

## Toán tử logic – Logical operators

### && logic và

```javascript
console.log(true && false)
```

### || logic hoặc

```javascript
console.log(false || true)
```

### ! logic phủ định

```javascript
console.log(!false)
```
