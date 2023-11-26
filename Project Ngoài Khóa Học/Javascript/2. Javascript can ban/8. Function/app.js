// hoisted() // Output: "This function has been hoisted."
// function hoisted() {
//  console.log('This function has been hoisted.')
// }
// var expression
// expression() //Output: "TypeError: expression is not a function
// expression = function () {
//   console.log('Will this work?')
// }

// var expression = function (x) {
//   console.log(x)
// }
// ;(function () {
//   let a = 1
//   let b = 2
//   console.log('a + b = ' + (a + b))
// })()

// 'use strict'

// function handleClick_1() {
//   console.log(this)
// }

// const handleClick_2 = () => {
//   // thực hiện gì đó
//   console.log(this)
// }

// handleClick_1()
// handleClick_2()

// const obj = {
//   lastName: 'Duoc',
//   print: () => {
//     console.log(this.lastName)
//   }
// }

// obj.print()

function sum(a, b, ...theArgs) {
  let result = 0
  for (const item of theArgs) {
    result += item
  }
  return result
}

let val = sum(1, 2, 3, 4, 5, 6)
console.log(val)
