function FastHttp() {
  this.xhr = new XMLHttpRequest()
}

FastHttp.prototype.send = function (method, url, body, callback) {
  this.xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200 || this.status === 201) {
        callback(null, JSON.parse(this.responseText))
      } else {
        callback(this.responseText)
      }
    }
  }
  this.xhr.open(method, url, true)
  this.xhr.setRequestHeader('Content-Type', 'application/json')
  this.xhr.send(body ? JSON.stringify(body) : null)
}

FastHttp.prototype.get = function (url, callback) {
  this.send('GET', url, null, callback)
}

FastHttp.prototype.post = function (url, body, callback) {
  this.send('POST', url, body, callback)
}

FastHttp.prototype.put = function (url, body, callback) {
  this.send('PUT', url, body, callback)
}

FastHttp.prototype.delete = function (url, callback) {
  this.send('DELETE', url, null, callback)
}

const http = new FastHttp()
const baseURL = 'https://60794f85460a6600174fb776.mockapi.io/users'
// http.get(baseURL, (error, data) => {
//   if (error) {
//     console.log('Error', error)
//   } else {
//     console.log(data)
//   }
// })
// http.post(baseURL, { name: 'Duoc' }, (error, data) => {
//   if (error) {
//     console.log('Error', error)
//   } else {
//     console.log(data)
//   }
// })

// http.put(`${baseURL}/14`, { name: 'Alan Walker' }, (error, data) => {
//   if (error) {
//     console.log('Error', error)
//   } else {
//     console.log(data)
//   }
// })

// http.delete(`${baseURL}/15`, (error, data) => {
//   if (error) {
//     console.log('Error', error)
//   } else {
//     console.log(data)
//   }
// })