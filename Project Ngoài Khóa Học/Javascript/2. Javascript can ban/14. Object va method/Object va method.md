# Object

- entry của object là cặp key, value tương ứng
- key thì luôn luôn là một string hoặc number
- value có thể là bất cứ giá trị nào của Javascript, kể cả function
- method (phương thức) là những thuộc tính mà value của nó là function

```javascript
const user = {
  name: 'Duoc',
  age: 24,
  greet() {
    console.log('Hello, Toi ten la ' + this.name)
  }
}
user.greet() // Hello, Toi ten la Duoc
```

## Một số phương thức thường thao tác với object

### Đọc – thêm – sửa – xóa thuộc tính object

```javascript
const person = {
  name: 'Duoc'
}
// đọc thuộc tính name
person.name
// thêm thuộc tính vào person
person.ability = ['dance', 'sing']
// sửa thuộc tính name
person.name = 'Alan'
// xóa thuộc tính name
delete person.name
```

### Object.assign(): dùng để merge object

```javascript
const person = {
  name: 'Duoc',
  ability: ['programing']
}
const person2 = Object.assign(person, { ability: ['dance', 'sing'] })
console.log(person2) // { name: 'Duoc', ability: [ 'dance', 'sing' ] }
```

### spread operator: dùng để shallow copy hoặc merge object

```javascript
const person = {
  name: 'Duoc',
  ability: ['programing']
}
const person2 = { ...person, ability: ['dance', 'sing'] }
console.log(person2) // { name: 'Duoc', ability: [ 'dance', 'sing' ] }
```

### Object.keys(): trả về mảng các key của object

```javascript
const person = {
  name: { firstName: 'Du', lastName: 'Duoc' },
  age: 24
}
console.log(Object.keys(person)) // [ 'name', 'age' ]
```

### Object.values(): trả về mảng các value của object

```javascript
const person = {
  name: { firstName: 'Du', lastName: 'Duoc' },
  age: 24
}
console.log(Object.values(person)) // [ { firstName: 'Du', lastName: 'Duoc' }, 24 ]
```

### Lặp object với for in

```javascript
const object = { a: 1, b: 2, c: 3 }

for (const property in object) {
  console.log(`${property}: ${object[property]}`)
}

// output:
// "a: 1"
// "b: 2"
// "c: 3"
```
