// let a = 1
// let sum = 0
// while (a <= 10) {
//   sum += a
//   a++
// }
// console.log(a)

// let a = 1
// let sum = 0
// do {
//   sum += a
//   a++
// } while (a <= 10)
// console.log(a) // 55

// let sum = 0
// for (let i = 1; i <= 10; i = i + 2) {
//   console.log(i)
//   sum += i
// }
// console.log(sum) // 55

// let person = ['du', 'thanh', 'duoc']
// for (let x in person) {
//   console.log(x)
// }

let people = ['Nick', 'Alan', 'Ben']
let text = ''
for (const value of people) {
  console.log(value)
  text += value + ' '
}
// console.log(text) // Nick Alan Ben
