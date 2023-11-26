# Câu lệnh điều kiện

## if

```javascript
let check = false
if (!check) {
  console.log('Check is false')
}
```

## if else

```javascript
let a = 2
if (a > 0) {
  console.log('a lớn hơn 0')
} else {
  console.log('a bé hơn 0')
}
```

## if else if

```javascript
let b = 10
if (b < 0) {
  console.log('B la so am')
} else if (b === 0) {
  console.log('B la so 0')
} else {
  console.log('B la so duong')
}
```

## switch case

```javascript
let step = 1
switch (step) {
  case 0:
    console.log('a = 0')
    break
  case 1:
    console.log('a = 1')
    break
  default:
    break
}
```

```javascript
let flag = 0
switch (step) {
  case 0:
  case 1:
    console.log('Hello')
    break
  default:
    break
}
```

## Nâng cao

## Dùng toán tử ba ngôi

```javascript
let c = null
c ? console.log('C co gia tri') : console.log('C khong co gia tri')
```

## Dung toan tu logic

```javascript
!c && console.log('C co gia tri')
```
