// class Animal {
//   constructor(name) {
//     this.speed = 0
//     this.name = name
//   }
//   run(speed) {
//     this.speed = speed
//     alert(`${this.name} runs with speed ${this.speed}`)
//   }
//   stop() {
//     this.speed = 0
//     alert(`${this.name} stans still.`)
//   }
// }

// let animal = new Animal('My animal')

// class Rabbit extends Animal {
//   constructor(...args) {
//     super(...args)
//   }
//   hide() {
//     alert(`${this.name} hides!`)
//   }
//   stop() {
//     setTimeout(() => {
//       super.stop()
//     }, 1000)
//     // this.hide()
//   }
// }

// let rabbit = new Rabbit('White Rabbit')
// rabbit.stop()
// // rabbit.run(5)
// // rabbit.hide()

// console.log(rabbit)

// function makeClass(type) {
//   if(type === 0) {
//     return class {
//       sayHi() {
//         alert('Hello')
//       }
//     }
//   }
//   return class {
//     sayBye() {
//       alert('Bye!')
//     }
//   }
// }

// class User extends makeClass(0) {}
// new User().sayHi()
// class Animal {
//   name = 'animal'
//   constructor() {
//     alert(this.name) // (*)
//   }
// }
// class Rabbit extends Animal {
//   name = 'rabbit'
// }
// new Animal() // animal
// new Rabbit() // animal
