// let user = {
//   name: 'John',
//   age: 30,
//   sayHi() {
//     alert(this.name) // Điều này sẽ dẫn đến 1 lỗi
//   }
// }
// let admin = user
// user = null // ghi đè để làm thứ gì đó
// admin.sayHi() // TypeError: Cannot read property 'name' of null
// 'use strict'
// function sayHi() {
//   console.log(this.name)
// }
// sayHi()

// 'use strict'
// function handle1() {
//   console.log(this)
// }
// const handle2 = () => {
//   console.log(this)
// }
// console.log('log o ngoai', this)
// handle1() // undefined
// handle2() // Window object

// 'use strict'
// let user = {
//   firstName: 'Ilya',
//   sayHi() {
//     // let arrow = () => alert(this.firstName)
//     function arrow() {
//       alert(this.firstName)
//     }
//     arrow()
//   }
// }
// user.sayHi() // Ilya
// 'use strict'
// const delay = {
//   lastName: 'Duoc',
//   print() {
//     setTimeout(() => {
//       console.log(this.lastName) // undefined
//     }, 1000)
//   }
// }
// delay.print()

// function broke(func) {
//   const obj = {
//     name: 'duoc',
//     func
//   }
//   return obj.func()
// }

// broke(() => {
//   console.log(this) // obj
// })

// const num = [2, 4, 6, 8]
// const callback = (item, index) => {
//   console.log('STT: ', index, 'la ', item)
// }
// num.forEach(callback)
// const increase = () => {
//   let x = 0
//   const increaseInner = () => ++x
//   return increaseInner
// }
// const myFunc = increase()
// console.log(increase()()) // 1
// console.log(increase()()) // 1
// console.log(myFunc()) // 1
// console.log(myFunc()) // 2
// console.log(myFunc()) // 3
// console.log(myFunc()) // 3
// const findNumber1 = () => {
//   const result = []
//   for (let i = 0; i < 10; i++) {
//     if (i % 2 === 1) {
//       result.push(i)
//     }
//   }
//   return result
// }
// const findNumber2 = () => {
//   const result = []
//   for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//       result.push(i)
//     }
//   }
//   return result
// }
// const findNumber3 = () => {
//   const result = []
//   for (let i = 0; i < 30; i++) {
//     if (i % 3 === 2) {
//       result.push(i)
//     }
//   }
//   return result
// }
// console.log(findNumber1())
// console.log(findNumber2())
// console.log(findNumber3())
const findNumber = (num) => (func) => {
  const result = []
  for (let i = 0; i < num; i++) {
    if (func(i)) {
      result.push(i)
    }
  }
  return result
}
let a = findNumber(10)((number) => number % 2 === 1)
let b = findNumber(20)((number) => number % 2 === 0)
let c = findNumber(30)((number) => number % 3 === 2)
console.log(a)
console.log(b)
console.log(c)
