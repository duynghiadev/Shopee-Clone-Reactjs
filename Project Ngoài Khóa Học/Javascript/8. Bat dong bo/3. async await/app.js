// async function handle() {
//   return 1
// }

// function handle() {
//   return Promise.resolve(1)
// }

// handle().then(value => {
//   console.log(value)
// })

// const getAPI = () => {
//   return 100
// }

// const handle = () => {
//   console.log(1)
//   let value = 0
//   value = getAPI()
//   console.log(1 + value)
//   return value
// }

// handle()

// const getAPI = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error('Loi roi do!!!!'))
//     }, 1000)
//   })
// }

// const getUser = async () => {
//   try {
//     const value = await getAPI()
//     return value
//   } catch (error) {
//     console.log(error)
//     return null
//   }
// }

// getUser().then(value => {
//   console.log(value)
// })

// let x = 0
// async function r5() {
//   x += 1
//   console.log(x)
//   return 5
// }
// (async () => {
//   const y =  await r5()
//   x += y
//   console.log(x)
// })()

const getBooks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Duong loi DCSVN', 'Mac Lenin'])
    }, 2000)
  })
}
const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['An', 'Binh', 'Hoa'])
    }, 3000)
  })
}

const getAPI = async () => {
  // Destructuring
  const [books, users] = await Promise.all([getBooks(), getUsers()])

  return {
    books,
    users
  }
}

getAPI().then((value) => {
  console.log(value)
})
