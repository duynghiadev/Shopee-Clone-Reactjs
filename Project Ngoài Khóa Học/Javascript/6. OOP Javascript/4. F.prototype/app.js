// // Constructor Function
// function Car(name, price) {
//   this.name = name
//   this.price = price
// }

// const factory = {
//   date: '2020'
// }
// // prototype !== [[Prototype]]
// Car.prototype = factory

// const car = new Car('BMW', 1000)
// // console.log(car)

// Car.prototype = {location: 'Vietnam'}
// const hyundai = new Car('Hyundai', 500)
// console.log(hyundai)

function Rabbit(name) {
  this.name = name
}
Rabbit.prototype.jumps = true
let rabbit = new Rabbit('LongEar')
console.log(rabbit)
// console.log(rabbit.constructor === Rabbit)

let rabbit2 = new rabbit.constructor('ShortEar')
console.log(rabbit2)