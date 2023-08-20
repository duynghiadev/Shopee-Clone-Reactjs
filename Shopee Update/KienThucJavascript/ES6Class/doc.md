# ES6 class

## Constructor function

```js
function Cat(name, color, type) {
  this.name = name
  this.color = color
  this.type = type
}
// Thêm method
Cat.prototype.meow = function () {
  console.log(`${this.name} meows: meow meow meow!`)
}

// Khởi tạo 1 instance object
let alex = new Cat('Alex', 'Yellow', 'Bengal')

alex.meow() // Alex meows: meow meow meow!
```

hoặc như thế này

```js
function Cat(name, color, type) {
  this.name = name
  this.color = color
  this.type = type

  this.meow = function () {
    console.log(`${this.name} meows: meow meow meow!`)
  }
}

let alex = new Cat('Alex', 'Yellow', 'Bengal')

alex.meow() // Alex meows: meow meow meow!
```

## Class

Class giúp gom các thuộc tính và phương thức lại, giúp code nhìn clean hơn

```js
class Cat {
  constructor(name, color, type) {
    // Tạo các thuộc tính (property)
    this.name = name
    this.color = color
    this.type = type
  }

  // Thêm vào các phương thức (method)
  meow() {
    console.log(`${this.name} meows: meow meow meow!`)
  }
}

let alex = new Cat('Alex', 'Yellow', 'Bengal')

alex.meow() // Alex meows: meow meow meow!
```

### Vấn đề this trong class

```js
function handle(cb) {
  cb()
}

class Cat {
  constructor(name, color, type) {
    this.name = name
    this.color = color
    this.type = type
  }

  meow() {
    console.log(`${this.name} meows: meow meow meow!`)
  }

  run() {
    handle(this.meow)
  }
}

let alex = new Cat('Alex', 'Yellow', 'Bengal')

// Lỗi vì giá trị của this phụ thuộc vào ngữ cảnh lúc run-time. Lúc này this nó là undefined
alex.run() // Uncaught TypeError: Cannot read properties of undefined (reading 'name')
```

Cách fix 1: Dùng `bind`

```js
function handle(cb) {
  cb()
}

class Cat {
  constructor(name, color, type) {
    this.name = name
    this.color = color
    this.type = type
    this.meow = this.meow.bind(this)
  }

  meow() {
    console.log(`${this.name} meows: meow meow meow!`)
  }

  run() {
    handle(this.meow)
  }
}

let alex = new Cat('Alex', 'Yellow', 'Bengal')

alex.run() // Alex meows: meow meow meow!
```

Cách fix 2: Dùng arrow function cho method `meow`

```js
function handle(cb) {
  cb()
}

class Cat {
  constructor(name, color, type) {
    this.name = name
    this.color = color
    this.type = type
  }

  meow = () => {
    console.log(`${this.name} meows: meow meow meow!`)
  }

  run() {
    handle(this.meow)
  }
}

let alex = new Cat('Alex', 'Yellow', 'Bengal')

alex.run() // Alex meows: meow meow meow!
```

Cách fix 3: Dùng arrow fuction cho callback lúc truyền vào `handle`

```js
function handle(cb) {
  cb()
}

class Cat {
  constructor(name, color, type) {
    this.name = name
    this.color = color
    this.type = type
  }

  meow() {
    console.log(`${this.name} meows: meow meow meow!`)
  }

  run() {
    handle(() => this.meow())
  }
}

let alex = new Cat('Alex', 'Yellow', 'Bengal')

alex.run() // Alex meows: meow meow meow!
```
