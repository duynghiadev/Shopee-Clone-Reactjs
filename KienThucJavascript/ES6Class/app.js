// Constructor function
function Cat(name, color, type) {
  this.name = name;
  this.color = color;
  this.type = type;
}

// Thêm method
Cat.prototype.meow = function () {
  console.log(`${this.name} meow: meow meow meow!`);
};

// Khởi tạo 1 instance object
let alex = new Cat("Alex", "yellows", "Bengal");

alex.meow();

// hoặc như thế này

function Cat1(name, color, type) {
  this.name = name;
  this.color = color;
  this.type = type;

  this.meow = function () {
    console.log(`${this.name} gau: gau gau gau!`);
  };
}

let Dog = new Cat1("Lisa", "white", "RedBul");

Dog.meow();

// Class
class Cat2 {
  constructor(name, color, type) {
    // Tạo các thuộc tính (property)
    this.name = name;
    this.color = color;
    this.type = type;
  }

  // Thêm vào các phương thức (method)
  meow() {
    console.log(`${this.name} ok: ok ok ok!`);
  }
}

let Bob = new Cat2("Lion", "Grey", "King");

Bob.meow();

// Vấn đề this trong class
function handle(cb) {
  cb();
}

class Cat3 {
  constructor(name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;
  }

  meow = () => {
    console.log(`${this.name} meows: meow meow meow!`);
  };

  run() {
    handle(this.meow);
  }
}

let Micky = new Cat3("Alex", "Yellow", "Bengal");

// Lỗi vì giá trị của this phụ thuộc vào ngữ cảnh lúc run-time. Lúc này this nó là undefined
Micky.run(); // Uncaught TypeError: Cannot read properties of undefined (reading 'name')
