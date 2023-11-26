// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//   let nextIndex = start
//   let iterationCount = 0
//   const rangeIterator = {
//     next: function () {
//       let result
//       if (nextIndex <= end) {
//         result = { value: nextIndex, done: false }
//         nextIndex += step
//         iterationCount++
//         return result
//       }
//       return { value: iterationCount, done: true }
//     }
//   }
//   return rangeIterator
// }
// let it = makeRangeIterator(1, 6, 2)
// console.log(it.next()) // {value: 1, done: false}
// console.log(it.next()) // {value: 3, done: false}
// console.log(it.next()) // {value: 5, done: false}
// console.log(it.next()) // {value: 3, done: true}
// console.log(it.next()) // {value: 3, done: true}

// let range = {
//   from: 1,
//   to: 5
// }
// // 1. for...of yêu cầu phương thức này
// range[Symbol.iterator] = function () {
//   // ...nó trả về một iterator object:
//   // 2. Tiếp sau đó, for..of chỉ làm việc với iterator này,
//   return {
//     current: this.from,
//     last: this.to,
//     // 3. next() được gọi trên mỗi vòng lặp for..of
//     next() {
//       // 4. Phải return về định dạng {done:.., value :...}
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ }
//       } else {
//         return { done: true }
//       }
//     }
//   }
// }
// // Bây giờ đã hoạt động!
// for (let num of range) {
//   console.log(num) // 1, then 2, 3, 4, 5
// }

// function* makeGenerator(i) {
//   yield i + 1
//   // console.log('Dòng này sẽ được in khi next() lần 2')
//   yield i + 2
//   // console.log('Dòng này sẽ được in khi next() lần 3')
//   yield i + 3
//   return i + 4
// }
// const generator = makeGenerator(0)
// console.log(generator.next()) // {value: 1, done: false}
// console.log(generator.return(100))
// console.log(generator.next()) // {value: 2, done: false}
// // console.log(generator.next()) // {value: 3, done: false}
// // console.log(generator.next()) // {value: 4, done: true}

// function* gen() {
//   while (true) {
//     yield 42
//   }
// }
// const g = gen()
// g.next()
// { value: 42, done: false }
// console.log(g.throw(new Error('Something went wrong')))
// "Something went wrong"
// { value: 42, done: false }

