# Bất đồng bộ với Promise và Async Await

## Promise

```js
// async callback thông thường
setTimeout(() => {
  console.log('hello')
}, 1000)

// chuyển thành promise
const p = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello')
    }, 1000)
  })

p()
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log('Finish!')
  })

console.log('Chạy trước tiên')
```

## Async / Await

- await chỉ sử dụng được trong một async function
- Chỉ sử dụng await với promise

```js
const p = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello')
    }, 1000)
  })

const handle = async () => {
  try {
    const value = await p()
    console.log(value)
  } catch (error) {
    console.log(error)
  } finally {
    console.log('Finish!')
  }
  console.log('Chạy cuối cùng')
}

handle()
```

Dùng `Promise.all` để tối ưu performance

```js
// chuyển thành promise
const p = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })

// Thay vì dùng như thế này
// const handle = async () => {
//   const v1 = await p(1000) // tốn 1s
//   const v2 = await p(2000) // tốn 2s
//   const v3 = await p(3000) // tốn 3s
//   console.log('Finish') // tổng cộng tốn 6s
// }

// Thì dùng như thế này sẽ nhanh hơn
const handle = async () => {
  const [v1, v2, v3] = Promise.all(p(1000), p(2000), p(3000)) // Chỉ tốn 3s
  console.log('Finish') // tổng cộng tốn 3s
}

handle()
```
