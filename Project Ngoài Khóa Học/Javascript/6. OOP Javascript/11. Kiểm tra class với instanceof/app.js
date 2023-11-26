// class Animal {}
// class Rabbit extends Animal{}

// let rabbit = new Rabbit()

// console.log(rabbit.__proto__.__proto__ === Animal.prototype)
// console.log(rabbit instanceof Animal)

function Rabbit() {

}

let rabbit = new Rabbit()

// console.log(Rabbit instanceof Function)
console.log(typeof rabbit)