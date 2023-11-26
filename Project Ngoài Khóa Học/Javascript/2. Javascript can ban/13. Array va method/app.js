// const car = ['BMW', 'Toyota', 'Hyundai']
// const flex = ['An', { name: 'Binh' }, [1, 2, 3]]
// console.log(flex)
// flex[1] = 'Binh'
// console.log(flex)

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// let check = Array.isArray(fruits) // true
// check = fruits instanceof Array // true
// console.log(check)

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// let newStr = fruits.toString()
// newStr = fruits.join('-')
// newStr = newStr.split('-')
// console.log(newStr)

// const fruits = ['Banana', 'Orange', 'Apple']
// const x = fruits.push('Mango')
// console.log(fruits)
// fruits.pop()
// console.log(fruits)

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// delete fruits[2]
// console.log(fruits)
// console.log(fruits[2])
// const myGirls = ['Cecilie', 'Lone']
// const myBoys = ['Emil', 'Tobias', 'Linus']
// const myChildren = myGirls.concat(['Alan', 'Walker'])

// console.log(myChildren)

// const cars1 = [1, 2, 3]
// const cars2 = [3, 4, 5]
// // const newCars = [...cars1,...cars2]
// const cars3 = [...cars2] // [3, 4, 5]
// console.log(cars3 === cars2)

// const numbers = [1, 2, 3, 4, 5, 6, 7]
// const newNumbers = []
// // for(let i = 0; i < numbers.length; i++) {
// //   if(i === 2) {
// //     break
// //   }
// //   newNumbers.push(numbers[i])
// // }
// numbers.forEach((value, index) => {
//   // console.log(value, index, array)
//   newNumbers.push(value)
// })

// console.log(newNumbers)

// const numbers = [1, 2, 3]

// const newNumbers = numbers.map((value, index , array) => {
//   value*2
// })
// console.log(newNumbers)

// const numbers = [1, 2, 3]
// const newNumbers = numbers.filter((value) => {
//   if(value >= 2) {
//     return true
//   } else {
//     return false
//   }
// })
// console.log(newNumbers)

// const numbers = [1, 2, 3]
// const num = numbers.find((value) => value > 3)
// console.log(num)

// const numbers = [1, 2, 3, 4, 5, 6]
// const check = numbers.every((value) => {
//   console.log(value)
//    value > 1
// })
// console.log(check)
// const numbers = [1, 2, 3, 4, 5, 6]
// const check = numbers.some((value) => {
//   return value > 7
// })
// console.log(check)

// const numbers = [1, 2, 3, 4, 5]
// const check = numbers.includes(6)
// const check2 = numbers.indexOf(6) > -1

// console.log(check)
// console.log(check2)

// const names = ['Binh', 'An', 'Dat']

// names.sort()
// console.log(names)

// const points = [40,6,3,9]
// points.sort((a,b) => {
//   return a - b
// })
// console.log(points)

// const points = [1, 2, [3, 4], 5, 6]

// const result = points.reduce((total, current, currIndex) => {
//    total[currIndex] = current
//    return total
// }, {})

// console.log(result)

const points = [1, 2, 3, 4, 5, 6]
const result = points.reduce((total, current) => {
  console.log(total)
  return total + current
})

// console.log(result)