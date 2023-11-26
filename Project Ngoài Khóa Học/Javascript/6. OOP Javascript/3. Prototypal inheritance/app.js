// let animal = {
//   eats: true
// }
// let rabbit = {
//   jumps: true
// }
// rabbit.__proto__ = animal
// console.log(rabbit.eats)
// let animal = {
//   eats: true,
//   walk() {
//     alert('Animal walk')
//   }
// }
// let rabbit = {
//   jumps: true,
//   __proto__: animal
// }
// let longEar = {
//   earLength: 10,
//   __proto__: rabbit
// }
// longEar.walk()
// console.log(longEar)
// let user = {
//   name: 'John',
//   surname: 'Smith',
//   set fullName(value) {
//     ;[this.name, this.surname] = value.split(' ')
//   },
//   get fullName() {
//     return `${this.name} ${this.surname}`
//   }
// }
// let admin = {
//   __proto__: user,
//   isAdmin: true
// }

// admin.fullName = 'Alice Cooper'
// console.log('admin.fullName', admin.fullName)
// console.log('user.fullName', user.fullName)
// console.log('admin', admin)

// let animal = {
//   eats: true
// }
// console.log(animal)
// let rabbit = {
//   jumps: true,
//   __proto__: animal
// }

// console.log(Object.keys(rabbit))
// for(const key in rabbit) {
//   console.log(key)
// }

let animal = {
  eats: true
}
let rabbit = {
  jumps: true,
  __proto__: animal
}
console.log(rabbit)
