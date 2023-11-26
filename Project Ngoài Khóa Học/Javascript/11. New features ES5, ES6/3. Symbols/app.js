// let id1 = Symbol('id')
// let id2 = Symbol('id')
// console.log(id1 === id2)

// const profile = {name: 'Duoc'}
// alert(profile.toString())

// const id = Symbol('hehe')
// alert(id.toString())
// console.log(id.description)

// const initState = () => ({
//   id: 1
// })

// const state = initState()
// state.id = 2

// const character = {
//   health: 100
// }

// character.health = 9999

// const character = {
//   [Symbol('health')]: 100
// }

// console.log(character)


// let user = {
//   name: 'Duoc',
//   age: 25,
//   [Symbol('id')]: 123
// }

// for (const key in user) {
//   console.log(key)
// }

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// let clonedUser = Object.assign({}, user)
// console.log(clonedUser)

let id = Symbol.for('id')

let idAgain = Symbol.for('id')
let normalId = Symbol('id')

// console.log(id === idAgain)

console.log(idAgain.description)
