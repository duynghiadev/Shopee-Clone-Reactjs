// class User {
//   constructor(name) {
//     this.name = name
//   }
//   sayHi() {
//     alert(this.name)
//   }
// }

// const user = new User('Duoc')
// console.log(user)
// console.log(typeof User)
// console.log(User === User.prototype.constructor)
// console.log(User.prototype)

// function User(name) {
//   this.name = name
// }
// User.prototype.sayHi = function() {
//   alert(this.name)
// }

// User()

// const user = new User('Duoc')
// user.sayHi()
// console.log(user)
// console.log(User)

// Class Expression
// let User = class {
//   sayHi() {
//     alert('Hello')
//   }
// }

// new User().sayHi()

// let User = class MyClass{
//   sayHi() {
//     console.log(MyClass)
//   }
// }
// new User().sayHi()
// console.log(MyClass)

// function makeClass() {
//   return class {
//     sayHi() {
//       alert('Hello')
//     }
//   }
// }
// // Class Expression
// let User = makeClass()
// new User().sayHi()
// console.log(User)

// class User {
//   constructor(name) {
//     // invokes the setter
//     this.name = name
//   }
//   get name() {
//     return this._name
//   }
//   set name(value) {
//     if (value.length < 4) {
//       alert('Name is too short.')
//       return
//     }
//     this._name = value
//   }
// }
// let user = new User('John')
// // alert(user.name)
// console.log(user)
// class User {
//   ['say' + 'Hi']() {
//     alert('Hello')
//   }
// }
// new User().sayHi()

// class User {
//   firstName = 'John'
//   constructor() {
//     this.age = 24
//     this.name = 'Alan'
//   }
//   sayHi() {
//     alert(`Hello, ${this.firstName}!`)
//   }
// }
// const user = new User()
// console.log(user)
// // user.sayHi() // Hello, John!

class Button {
  constructor(value) {
    this.value = value
    // this.click = this.click.bind(this)
  }
  // click() {
  //   alert(this.value)
  // }
  click = () => {
    alert(this.value)
  }
}
let button = new Button('hello')
// setTimeout(() => button.click(), 1000) // undefined
setTimeout(button.click, 1000)
