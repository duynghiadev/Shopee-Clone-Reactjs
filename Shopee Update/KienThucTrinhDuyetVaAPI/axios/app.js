// const xhttp = new XMLHttpRequest()
// xhttp.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     const res = JSON.parse(this.responseText)
//     let html = ''
//     res.data.forEach((item) => {
//       html += `<div>${item.first_name} ${item.last_name}</div>`
//     })
//     document.getElementById('result').innerHTML = html
//     console.log(res)
//   }
// }
// xhttp.open('GET', 'https://reqres.in/api/users?page=2', true)
// xhttp.send()

// fetch('https://reqres.in/api/users/23')
//   .then((res) => {
//     console.log(res)
//     if (res.ok) {
//       return res.json()
//     } else {
//       throw new Error('Loi cmnr')
//     }
//   })
//   .then((res) => {
//     // let html = ''
//     // res.data.forEach((item) => {
//     //   html += `<div>${item.first_name} ${item.last_name}</div>`
//     // })
//     // document.getElementById('result').innerHTML = html
//     console.log('chinh thuc', res)
//   })
//   .catch((error) => {
//     console.log('Loi', error)
//   })

// axios({
//   method: 'get',
//   baseURL: 'https://reqres.in/api',
//   url: '/users'
// })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((error) => {
//     console.warn(error)
//   })

// axios({
//   method: 'get',
//   baseURL: 'https://reqres.in/api',
//   url: '/users/2'
// })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((error) => {
//     console.warn(error)
//   })

const http = axios.create({
  baseURL: 'https://reqres.in/api'
})

http.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (config) => {
    console.log(config)
    return config.data.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

http
  .get('/users/2')
  .then((res) => {
    console.log(res)
  })
  .catch((error) => {
    console.warn(error)
  })
