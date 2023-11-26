// const p = new Promise(function(resolve, reject) {
//   reject(new Error('Lỗi rồi đó!'))
// })

// p.then(value => {
//   console.log(value)
// }).catch(error => {
//   console.log(error)
// })

// setTimeout(() => {
//   console.log('Hi')
// }, 1000);

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Hi')
//   }, 1000);
// })

// p.then(value => {
//   console.log(value)
// }).catch(error => {
//   console.log(error)
// })

// let a = 1
// const p = () =>
//   new Promise((resolve, reject) => {
//     a++
//   })
// p()
// console.log(a)

// const p = new Promise((resolve, reject) => {
//   return resolve('done')
//   // Code sẽ chạy nhưng sẽ không được đưa vào rejected
//   console.log('chay roi')
//   reject(new Error('error'))
// })

// p.then((value) => {
//   console.log(value)
// }).catch((error) => {
//   console.log(error)
// })

// const p = new Promise((resolve, reject) => {
//   throw 'Loi roi do'
// })

// p.catch(error => {
//   throw error + ' ban oi'
// }).catch(error => {
//   console.log(error)
// })

// const p = new Promise((resolve, reject) => {
//   reject(1)
// })

// const p2 = Promise.reject(1)

// const getProfile = () => Promise.resolve({name: 'duoc'})

// const getArticles = () => Promise.resolve(['Sach van hoc', 'Tieu thuyet'])

// getProfile().then(profile => {
//   console.log(profile)
//   getArticles().then(articles => {
//     console.log(articles)
//   })
// })

// getProfile().then(profile => {
//   console.log(profile)
//   return getArticles()
// }).then(articles => {
//   console.log(articles)
// })

const getToken = () => Promise.resolve('abcdef')

// const getAPI = () => {
//   return new Promise((resolve, reject) => {
//     getToken().then(token => {
//       resolve(token)
//     }).catch(error => {
//       reject(error)
//     })
//   })
// }

const getAPI = () => {
  return getToken()
}

getAPI().then(value => {
  console.log(value)
})