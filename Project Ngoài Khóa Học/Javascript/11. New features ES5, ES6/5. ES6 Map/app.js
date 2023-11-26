// const map = new Map(
//   [
//     ['1', 'str'],
//     [1, 'num'],
//     [true, 'bool']
//   ]
// )
// map.set('1', 'str')
// map.set(1, 'num')
// map.set(true, 'bool')
// map.set('1', 'str').set(1, 'num').set(true, 'bool')
// const map =
// map[{}] = 'Duoc'
// map[{age: 18}] = 2021
// map.clear()
// console.log(map)

// for (const item of map.keys()) {
//     console.log(item)
// }

// for (const item of map.values()) {
//   console.log(item)
// }

// for (const item of map.entries()) {
//   console.log(item)
// }

// for (const item of map) {
//   console.log(item)
// }

// map.forEach((value, key, map) => {
//   console.log(value, key)
// })

// const user = {
//   name: 'Duoc',
//   age: 18
// }

// const map = new Map(Object.entries(user))
// console.log(map)

const map = new Map([
  ['name', 'Duoc'],
  ['age', 18]
])

const user = Object.fromEntries(map)

console.log(user)
