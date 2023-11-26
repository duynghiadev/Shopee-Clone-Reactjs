# Regex Shorthand character classes

Cú pháp rút gọn trong Regex

Khớp 1 chữ cái, số hoặc `_`

```javascript
const regex = /\w/
regex.test('Hello 2021') // true
regex.test('!hi') // true
```

Khớp 1 hoặc nhiều chữ cái, số, hoặc `_`

```javascript
const regex = /\w+/
regex.test('Hello 2021') // true
regex.test('!hi') // true
```

Khớp với không phải là chữ cái, số hoặc `_`

```javascript
const regex = /\W/
regex.test('~') // true
regex.test('he') // false
```

Khớp 1 số

```javascript
const regex = /\d/
```

Khớp 1 hoặc nhiều số

```javascript
const regex = /\d+/
```

Khớp không phải là số

```javascript
const regex = /\D/
```

Khớp với dấu cách

```javascript
const regex = /\s/
```

Khớp với không phải dấu cách

```javascript
const regex = /\S/
```

Khớp nếu b theo ngay sau a

```javascript
const regex = /a(?=b)/
regex.test('hi abc') // true
```

Khớp nếu không phải b ngay sau a

```javascript
const regex = /a(?!b)/
regex.test('hi acb') // true
```

Khớp nếu chuỗi `an` là ký tự biên
Ký tự biên là ký tự mà nằm giữa ký tự từ và không phải ký tự từ hoặc giữa 2 ký tự không phải là ký tự từ

```javascript
const regex = /an\b/i
regex.test('han yeu anh khong') // true, Khớp tại từ han
```
