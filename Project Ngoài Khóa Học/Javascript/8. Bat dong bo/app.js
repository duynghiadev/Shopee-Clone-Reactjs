// setTimeout(() => {
//   try {
//     throw new Error('Lỗi rồi')
//   } catch (error) {
//     // Dòng này sẽ không bao giờ được chạy
//     console.log(error)
//   }
// }, 1000)

// const sum = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b)
//   }, 2000)
// }

// const mul = (x, y, callback) => {
//   setTimeout(() => {
//     callback(x * y)
//   }, 1000)
// }

// sum(2, 3, (resultSum) => {
//   mul(resultSum, 4, (final) => {
//     console.log(final)
//   })
// })

// const p = new Promise((resolve, reject) => {
//   // resolve('Hello')
//   reject('Loi roi ne')
// })

// p.then(
//   (value) => {
//     console.log('success', value)
//   },
//   (error) => {
//     console.log('error', error)
//   }
// ).catch((error) => {
//   console.log('error', error)
// })

// const sum = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b)
//   }, 2000)
// }

// const sum$ = (a, b) =>
//   new Promise((resolve, reject) => {
//     sum(a, b, (result) => {
//       resolve(result)
//     })
//   })
// sum$(2, 2).then((value) => {
//   console.log(value)
// })

// const p = new Promise((resolve, reject) => {
//   // resolve('done')
//   // Code sẽ chạy nhưng sẽ không được đưa vào rejected
//   // reject(new Error('error'))
//   throw new Error('error')
// })
// p.then(
//   (value) => {
//     console.log(value)
//   },
//   (error) => {
//     console.log(error)
//     throw new Error(error)
//   }
// ).then(
//   (res) => {
//     console.log(res)
//   },
//   (error) => {
//     console.log('error', error)
//   }
// )

// const p = new Promise((resolve, reject) => {
//   resolve(1)
// })

// const p2 = Promise.resolve(1)

// const sum = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b)
//   }, 2000)
// }

// const sum$ = (a, b) =>
//   new Promise((resolve, reject) => {
//     sum(a, b, (result) => {
//       resolve(result)
//     })
//   })
// const mul = (x, y, callback) => {
//   setTimeout(() => {
//     callback(x * y)
//   }, 1000)
// }

// const mul$ = (a, b) =>
//   new Promise((resolve, reject) => {
//     mul(a, b, (result) => {
//       resolve(result)
//     })
//   })

// sum$(1, 2).then((sumVal) => {
//   mul$(sumVal, 4).then((mulVal) => {
//     console.log(mulVal)
//   })
// })

// Promise chain
// sum$(1, 2)
//   .then((sumVal) => mul$(sumVal, 4))
//   .then((mulVal) => {
//     console.log(mulVal)
//   })

// const asyncFunc2 = () => Promise.reject(100)

// function asyncFunc1() {
//   return new Promise(function (resolve, reject) {
//     asyncFunc2()
//       .then(function (data) {
//         console.log(`${data} + 50 = ${data + 50}`)
//         resolve(data)
//       })
//       .catch(reject)
//   })
// }

// const asyncFunc1 = () =>
//   asyncFunc2().then((data) => {
//     console.log(`${data} + 50 = ${data + 50}`)
//     return data
//   })

// asyncFunc1()
//   .then((value) => {
//     console.log('success', value)
//   })
//   .catch((error) => {
//     console.log('error', error)
//   })

// Async Await

// async function handle() {
//   return 1
// }

// const handle = async () => 1

// handle().then((data) => {
//   console.log(data)
// })

// async function handle() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done!'), 1000)
//   })
//   // đợi cho đến khi promise resolves (*)
//   const result = await promise
//   console.log(result) // "done!"
// }

// async function handle2() {
//   console.log('Xin chao moi nguoi')
//   return 1
// }
// // cach 1
// // handle().then(() => handle2())

// // Cach 2
// async function wrapFunc() {
//   await handle()
//   await handle2()
// }
// wrapFunc()

// const sum = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b)
//   }, 2000)
// }

// // sum(1, 2, (result) => {
// //   console.log(result)
// // })

// const handle = async () => {
//   const result = await sum(1, 2)
//   console.log(result)
// }

// handle()

// async function getUser(username) {
//   try {
//     const response = await fetch(
//       `https://api.github.com/search/users?q=${username}`
//     )
//     return await response.json()
//   } catch (e) {
//     throw e
//   }
// }
// getUser('duthanhduoc')
//   .then((res) => console.log(res))
//   .catch((err) => console.warn(err))

// Promise All

const sum = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b)
  }, 2000)
}

const sum$ = (a, b) =>
  new Promise((resolve, reject) => {
    sum(a, b, (result) => {
      resolve(result)
    })
  })
const mul = (x, y, callback) => {
  setTimeout(() => {
    callback(x * y)
  }, 1000)
}

const mul$ = (a, b) =>
  new Promise((resolve, reject) => {
    mul(a, b, (result) => {
      resolve(result)
    })
  })

async function handle() {
  // const sumResult = await sum$(1, 3)
  // const mulResult = await mul$(1, 3)
  const [sumResult, mulResult] = await Promise.all([sum$(1, 3), mul$(1, 3)])
  return sumResult + mulResult
}
handle().then((data) => {
  console.log(data)
})
