// // const user = {
// //   name: 'Duoc',
// //   age: 24,
// //   greet() {
// //     console.log('Hello, Toi ten la ' + this.name)
// //   }
// // }
// // user.greet() // Hello, Toi ten la Duoc

// // const person = {
// //   name: 'Duoc'
// // }

// // console.log(person.name)
// // person.age = 18
// // console.log(person)
// // person.name = 'An'
// // console.log(person)
// // delete person.age
// // console.log(person)

// // const person = {
// //   name: 'Duoc',
// //   ability: ['programing']
// // }

// // // const person2 = Object.assign(person, { ability: ['dance', 'sing'], age: 18 })
// // const person2 = person
// // person.ability = ['dance', 'sing']
// // person.age = 18
// // console.log(person2)
// // console.log(person)

// const person = {
//   name: 'Duoc',
//   ability: ['programing']
// }

// // normal copy
// // const person2 = person
// // person2.age = 18
// // console.log(person)

// // shallow copy
// // const person2 = { ...person }
// // person2.ability = [...person.ability]
// // // console.log(person2 === person)
// // // person2.name = 'An'
// // person2.ability[0] = 'Dance'
// // console.log(person)

// // Merge object
// const person2 = { ...person, ability: ['Dance'], age: 18 }
// // const person3 = Object.assign(person, { ability: ['Dance'], age: 18 })
// console.log(person2 === person)
// console.log(person)
// // console.log(person3 === person)
// const person = {
//   name: { firstName: 'Du', lastName: 'Duoc' },
//   age: 24
// }
// const newArr = Object.keys(person).map((key, index) => {
//   return `Key ${index} là ${key} và value là ${person[key]}`
// })
// console.log(newArr)

const person = {
  name: { firstName: 'Du', lastName: 'Duoc' },
  age: 24
}

for (const key in person) {
  console.log(person[key])
}