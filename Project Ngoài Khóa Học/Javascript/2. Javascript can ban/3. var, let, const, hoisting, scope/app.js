// var age
// console.log(age)
// age = 18
// console.log(age)

// var car = "BMW"

// const my_computer

// console.log(message)
// var message = 'Bị hoisting'
// 'use strict'
// message = 'Thông báo'
// console.log(message) // Thông báo

// console.log(message) // lỗi
// const message = 'không bị hoisting'

// const car = 'Mercedes'
// car = 'BMW' // Lỗi

// const profile = { name: 'Duoc' }
// // profile.name = 'Huy'
// profile = { name: 'Huy' }
// console.log(profile)

// const array = [1, 2, 3, 4]
// // array.push(5)
// array = [1, 2, 3, 4, 5]
// console.log(array)

// var company = 'xdevclass'
// // Code tại đây có thể xử dụng biến company
// console.log('log 1', company)
// function myFunction() {
//   // Code tại đây cũng có thể xử dụng biến company
//   console.log('log 2', company)
// }
// myFunction()

// function myFunction() {
//   var carName = 'Volvo'
//   // code ở đây CÓ THỂ sử dụng biến carName
//   console.log('log 1', carName)
// }
// myFunction()
// // Code ở đây không thể sử dụng biến carName
// console.log('log 2', carName)

if (true) {
  const x = 2
  console.log('log 1', x)
}

console.log('log 2', x)
