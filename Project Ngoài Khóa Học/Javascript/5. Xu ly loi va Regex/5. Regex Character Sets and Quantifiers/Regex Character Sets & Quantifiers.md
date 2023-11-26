# Regex Character Sets & Quantifiers

## Ngoặc vuông [] - Set các ký tự

Phải là m hoặc n

```javascript
const regex = /ma[mn]/i
regex.test('man') // true
regex.test('mam') // true
```

Khớp tất cả trừ H và G

```javascript
const regex = /[^HG]ay/i
regex.test('kay') // true
regex.test('hay') // false
```

Khớp tất cả chữ cái thường

```javascript
const regex = /h[a-z]y/
regex.test('hay') // true
regex.test('hOy') // false
```

Khớp tất cả chữ cái in hoa

```javascript
const regex = /h[A-Z]y/
regex.test('hay') // false
regex.test('hOy') // true
```

Khớp tất cả chữ cái

```javascript
const regex = /h[A-Za-z]y/
regex.test('hay') // true
regex.test('hOy') // true
```

Khớp số

```javascript
const regex = /[0-9][0-9]years/
regex.test('9years') // false
regex.test('10years') // true
```

## Ngoặc nhọn {} - Giới hạn số lượng ký tự

Bắt buộc 2 ký tự

```javascript
const regex = /gy{2}m/i
regex.test('Gym') // false
regex.test('Gyym') // true
regex.test('Gyyym') // false
```

Giới hạn từ 2-5 ký tự

```javascript
const regex = /gy{2,5}m/i
```

Giới hạn từ 2 ký tự trở lên

```javascript
const regex = /gy{2,}m/i
```

## Ngoặc tròn () - Nhóm

```javascript
const regex = /([0-9]m){3}/
regex.test('3m3m3m') // true
regex.test('3m3m1m') // true
```

```javascript
const regex = /^([0-9]m){3}$/
regex.test('1m1m1m') // true
regex.test('2m2m2m hi') // false
```
