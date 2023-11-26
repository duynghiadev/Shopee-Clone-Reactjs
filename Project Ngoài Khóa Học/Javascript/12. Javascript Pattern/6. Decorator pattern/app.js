// function Car(name) {
//   this.name = name
//   // Default values
//   this.color = 'White'
// }
// // Tạo object mới
// const tesla = new Car('Tesla Model 3')
// // Thêm tính năng mới vào object mà không phải thay đổi constructor function
// tesla.setColor = function (color) {
//   this.color = color
// }
// tesla.setPrice = function (price) {
//   this.price = price
// }
// tesla.setColor('black')
// tesla.setPrice(49000)
// // prints black
// console.log(tesla.color)

class Car {
  constructor() {
    // Default Cost
    this.cost = function () {
      return 20000
    }
  }
  addAc() {
    this.hasAC = true
    const prevCost = this.cost()
    this.cost = function() {
      return prevCost + 500
    }
  }
  addAuto() {
    this.auto = true
    const prevCost = this.cost()
    this.cost = function() {
      return prevCost + 1000
    }
  }
}

const car = new Car()
car.addAc()
car.addAuto()

console.log(car.cost())