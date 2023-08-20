/**
 * Destructuring
 */

// Destructuring với object

// const user = {
//   name: 'duoc',
//   age: 24,
//   sex: 'male'
// }

// const name = user.name
// const age = user.age
// const sex = user.sex

// const { age: userAge, name, sex } = user

// console.log(name, userAge, sex)

// Destructuring với array

// const list = [
//   1,
//   function (a, b) {
//     return a + b
//   }
// ]

// const [value, sum] = list

// console.log(sum(2, 3))

/**
 * Spread Syntax
 */

// const user = {
//   name: 'duoc',
//   age: 24,
//   ability: ['coding']
// }
// // const cloneUser = user
// // shallow copy (copy nông)
// const cloneUser = { ...user }

// console.log(cloneUser === user)

// console.log(cloneUser.ability === user.ability)

/**
 * Rest Parameter
 */

// const handle = (a, b, ...c) => {
//   return c
// }

// const value = handle(1, 2, 3, 4, 5, 6)

// console.log(value)

const handle = ({ a, b, ...c }) => {
  return c
}

const value = handle({ a: 1, b: 2, c: 3, d: 4, e: 5 })

console.log(value)
