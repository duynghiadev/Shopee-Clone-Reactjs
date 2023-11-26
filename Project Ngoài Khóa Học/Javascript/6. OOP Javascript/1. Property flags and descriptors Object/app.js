// const profile = {
//   name: 'An',
//   age: 18
// }

// let descriptor = Object.getOwnPropertyDescriptor(profile, 'name')
// console.log(descriptor)
// Object.defineProperty(profile, 'name', {
//   writable: false
// })
// console.log(Object.getOwnPropertyDescriptor(profile, 'name'))

// let user = {
//   name: 'John'
// }
// Object.defineProperty(user, 'name', {
//   writable: false
// })
// user.name = 'Pete' // Error: Cannot assign to read only property 'name'
// console.log(user)

// let user = {}
// Object.defineProperty(user, 'name', {
//   value: 'John',
//   enumerable: true,
//   configurable: true
// })
// console.log(user.name) // John
// user.name = 'Pete' // Error
// console.log(user.name)
// let user = {
//   name: 'John',
//   toString() {
//     return this.name
//   }
// }

// // console.log(user)
// Object.defineProperty(user, 'toString', {
//   enumerable: false
// })

// // for (const key in user) {
// //   console.log(key)
// // }

// console.log(Object.keys(user))

// let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor)

// let user = {
//   name: 'John'
// }
// Object.defineProperty(user, 'name', {
//   writable: false,
//   configurable: false
// })
// Object.defineProperty(user, 'name', { value: 'Pete' })
// console.log(user)

// let user = {
//   name: 'John'
// }
// Object.defineProperty(user, 'name', {
//   writable: false
// })
// // const user2 = {...user}
// // console.log(Object.getOwnPropertyDescriptor(user2, 'name'))
// const user2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user))
// console.log(user2)
// console.log(Object.getOwnPropertyDescriptor(user2, 'name'))

let user = {
  name: 'John',
  ability: 'dance'
}

// Object.preventExtensions(user)
// user.age = 18
// console.log(user)
// console.log(Object.isExtensible(user))

// Object.seal(user)
// user.age = 18
// delete user.name
// console.log(user)
// console.log(Object.isSealed(user))

Object.freeze(user)
user.age = 18
delete user.name
user.ability = 'sing'
console.log(user)
console.log(Object.isExtensible(user))