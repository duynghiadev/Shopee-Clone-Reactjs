function handle(cb) {
  cb();
}

class Cat {
  constructor(name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;
    // this.meow = this.meow.bind(this);
  }

  meo() {
    console.log(this);
    console.log(`${this.name} meow: meow meow meow`);
  }

  run() {
    handle(() => this.meo());
  }
}

let alex = new Cat("Alex", "Yello", "Belaga");
alex.run();
