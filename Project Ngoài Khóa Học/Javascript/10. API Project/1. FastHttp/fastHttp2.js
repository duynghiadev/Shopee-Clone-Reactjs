class FastHttp {
  send(method, url, body) {
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: body ? JSON.stringify(body) : undefined
    }).then((res) => res.json())
  }
  get(url) {
    return this.send('GET', url)
  }
  post(url, body) {
    return this.send('POST', url, body)
  }
  put(url, body) {
    return this.send('PUT', url, body)
  }
  delete(url) {
    return this.send('DELETE', url)
  }
}

const http = new FastHttp()
const baseURL = 'https://60794f85460a6600174fb776.mockapi.io/users'
// http
//   .get(baseURL)
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.log('Error', error)
//   })

// http
//   .post(baseURL, {name: 'Du Thanh Duoc'})
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.log('Error', error)
//   })

// http
//   .put(baseURL + '/' + 30, { name: 'Nguyễn Mạnh Cường' })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.log('Error', error)
//   })

http
  .delete(baseURL + '/' + 30)
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log('Error', error)
  })
