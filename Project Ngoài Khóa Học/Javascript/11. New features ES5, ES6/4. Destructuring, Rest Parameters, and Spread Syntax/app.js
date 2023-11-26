// Destructuring
// const user = {
//   lastName: 'Duoc',
//   age: 18,
//   nation: 'Vietnam',
//   gender: 'male'
// }

// const { lastName, age, nation, gender = 'female' } = user
// console.log(lastName)
// console.log(age)
// console.log(nation)
// console.log(gender)

// const handle = ({ a, b = 0, c }) => {
//   return a + b + c
// }

// console.log(handle({ a: 1, c: 3 }))

// Spread Syntax
// const user = {
//   name: 'Duoc',
//   age: 24,
//   ability: ['coding']
// }

// Sallow copy
// const cloneUser = {...user}
// cloneUser.name = 'Minh'
// console.log(user === cloneUser)
// cloneUser.ability = [...user.ability]
// cloneUser.ability[0] = 'Sing'
// console.log(user)

// const user = {
//   name: 'Duoc',
//   age: 24,
//   ability: ['coding']
// }

// const userPlus = {...user, ability: 'Sing'}
// console.log(user)
// console.log(userPlus)

// const list1 = [1, 2, 3, 4]
// const list2 = [5, 6, 7, 8]

// const list3 = [...list2, ...list1]
// const cloneList1 = [...list1]
// console.log(cloneList1 === list1)
// console.log(list3)
// const list4 = [...list1, 5]
// console.log(list4)
// console.log(1, 2, 3, 4)
// console.log(...list1)

// Rest Parameter
// const handle = (a, b, ...c) => {
//   console.log(c)
// }

// handle(1, 2, 3, 4, 5, 6)

// const handle = ({a, b, ...c}) => {
//   console.log(c)
// }

// handle({a: 1, b: 2, c: 3, d: 4, e: 5})

// const handle = ([a, b, ...c]) => {
//   console.log(c)
// }

// handle([1, 2, 3, 4, 5, 6, 7])


const cake = {
  name: 'Banh qui',
  price: 100,
  quantity: 10
}

const {name, ...other} = cake
console.log(other)