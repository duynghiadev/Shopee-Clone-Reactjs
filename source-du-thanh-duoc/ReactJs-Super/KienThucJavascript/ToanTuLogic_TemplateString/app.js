// const a = true
// const b = ''
// const c = 'Hi'

// const d = a && b && c // ''

// console.log('d', d)

// let check = 8
// const handle = () => {
//   return [1, 2, 3].map((item) => item * 2)
// }
// let value = []
// // if (check > 9) {
// //   value = handle()
// // }
// value = check > 9 && handle()
// console.log(value)

// let fname = 'alex'

// fname === 'alex' ? console.log('true') : console.log(false)

// let user = {}
// alert(user.adress.street) // undefined

// let user = ''
// let value = user ?? 'Hello'

// null, undefined, 0, '', NaN, 0n
// let value = user || 'Hello'

// console.log(value)

let a = `string text`

const sum = (a, b) => a + b

// let c = 'string text ' + a + ' string text'

let c = `string text ${sum(1, 2)} string text`
console.log(c)
