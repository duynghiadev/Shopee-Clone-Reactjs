// setTimeout(() => {
//   console.log('Hello')
// }, 0)

// console.log('I Am Alex')
// const pFunc = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Hello')
//     }, 0)
//   })

// const value = pFunc()
//   .then((value) => {
//     console.log(value)
//     return 100
//   })
//   .catch((error) => {
//     console.warn(error)
//     return -100
//   })
//   .finally(() => {
//     console.log('Ket thuc roi')
//   })
// value.then((value) => {
//   console.log(value)
// })
// console.log('value', value)

/**
 * Async / Await
 * * await chỉ sử dụng được trong một async function
 * * Chỉ sử dụng await với promise
 */

const p2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Loiiiii')
    }, 0)
  })

;(async () => {
  try {
    const value = await p2()
    console.log(value)
  } catch (error) {
    console.warn(error)
  } finally {
    console.log('Finally')
  }
})()
