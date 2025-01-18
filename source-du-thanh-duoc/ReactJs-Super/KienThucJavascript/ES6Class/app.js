function handle(cb) {
  cb()
}

class Cat {
  constructor(name, color, type) {
    this.name = name
    this.color = color
    this.type = type
    // this.meow = this.meow.bind(this)
  }

  meow() {
    console.log(this)
    console.log(`${this.name} meows: meow meow meow!`)
  }

  run() {
    handle(() => this.meow())
  }
}

let alex = new Cat('Alex', 'Yellow', 'Bengal')
// Lỗi vì giá trị của this phụ thuộc vào ngữ cảnh lúc run-time. Lúc này this nó là undefined
alex.run() // Uncaught TypeError: Cannot read properties of undefined (reading 'name')
