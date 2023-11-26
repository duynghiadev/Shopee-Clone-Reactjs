const set = new Set()

let john = { name: 'John' }
let peter = { name: 'Peter' }
let mary = { name: 'Mary' }

set.add(john).add(peter).add(mary)
// for (const item of set) {
//   console.log(item)
// }
// set.forEach((value, valueAgain, set) => {
//   console.log('value', value)
//   console.log('valueAgain', valueAgain)
// })

console.log(set.keys())
console.log(set.values())
console.log(set.entries())

// set.clear()
// console.log(set.size)

// const arr = [1, 2, 3, 4, 5, 1, 2, 3]
// const newArr = Array.from(new Set(arr))
// Speard operator
// const newArr = [...new Set(arr)]
// console.log(newArr)
