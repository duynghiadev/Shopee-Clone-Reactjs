// let animal = {
//   eats: true
// }

// let rabbit = Object.create(animal)
// console.log(rabbit.eats)

// console.log(Object.getPrototypeOf(rabbit) === animal)

// Object.setPrototypeOf(rabbit, {})
// console.log(rabbit)

// let rabbit = Object.create(animal, {
//   jumps: {
//     value: true,
//     writable: false,
//     enumerable: true,
//     configurable: true
//   }
// })

// console.log(rabbit)

// const cloneRabbit = Object.defineProperties({}, Object.getOwnPropertyDescriptors(rabbit))

// const cloneRabbit = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptor(rabbit))
// console.log(cloneRabbit)

// let obj = {}

// let key = prompt("Nhập key", '__proto__')
// obj[key] = {}
// console.log(obj[key])
// console.log(obj)

// Very plain object, Base Object
// let obj = Object.create(null)
// console.log(obj)
// let key = prompt("Nhập key", '__proto__')
// obj[key] = 'Giá trị nào đó'
// console.log(obj[key])

let chineseDictionary = Object.create(null)
chineseDictionary.hello = '你好'
chineseDictionary.bye = '再⻅'
console.log(Object.keys(chineseDictionary))