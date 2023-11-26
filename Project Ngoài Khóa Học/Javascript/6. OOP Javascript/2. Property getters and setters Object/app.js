// let user = {
//   name: 'John',
//   surname: 'Smith',
//   get fullName() {
//     return `${this.name} ${this.surname}`
//   },
//   set fullName(value) {
//     // Destructuring
//     ;[this.name, this.surname] = value.split(' ')
//   }
// }
// // set fullName được thực thi với giá trị được gán phía dưới
// // user.fullName = 'Alice Cooper'
// // console.log(user)

// console.log(Object.getOwnPropertyDescriptor(user, 'fullName'))
// let user = {
//   name: 'John',
//   surname: 'Smith'
// }
// Object.defineProperty(user, 'fullName', {
//   get() {
//     return `${this.name} ${this.surname}`
//   },
//   set(value) {
//     ;[this.name, this.surname] = value.split(' ')
//   },
//   enumerable: true
// })
// console.log(user)

let user = {
  get name() {
    return this._name
  },
  set name(value) {
    if(value.length < 4) {
      alert('Tên không được bé hơn 4 ký tự')
      return 
    }
    this._name = value
  }
}
user.name = 'Hung'
console.log(user.name)

