// const myObj = {
//   name: 'John',
//   age: 30,
//   cars: ['Ford', 'BMW', 'Fiat']
// }
// const myJSON = JSON.stringify(myObj)
// console.log(myJSON)
// const myJSON = `{"name":"John","age":30,"cars":["Ford","BMW","Fiat"]}`
// const myObj = JSON.parse(myJSON)
// console.log(myObj)

// // Array
// const arr = ['Ford', 'BMW', 'Fiat']
// // JSON
// const json = '["Ford","BMW","Fiat"]'
// console.log(json === JSON.stringify(arr))

// Number
// const result = JSON.stringify(1)
// console.log(result === '1')

// String
// const result = JSON.stringify('duoc')
// console.log(result === '"duoc"')

// Boolean
// const result = JSON.stringify(true)
// console.log(result === 'true')

// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function() {
//   console.log(this.readyState)
// }

// xhr.open('POST', 'https://6061cc41ac47190017a71c4b.mockapi.io/posts', true)
// xhr.setRequestHeader('Content-Type', 'application/json')
// const body = {title: 'Đi chơi công viên'}
// xhr.send(JSON.stringify(body))

// fetch('https://6061cc41ac47190017a71c4b.mockapi.io/posts').then(response => {
//   if(!response.ok) {
//     throw Error(response.statusText)
//   }
//   console.log(response)
//   return response.json()
// }).then(data => {
//   console.log(data)
// }).catch(error => {
//   console.log(error)
// })

fetch('https://6061cc41ac47190017a71c4b.mockapi.io/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ title: 'Sing my song' })
}).then((res) => res.json()).then(data => {
  console.log(data)
})
