export const getUser = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: 'Du Thanh Duoc',
          age: 26,
          address: 'Da Nang'
        },
        status: 200
      })
    }, 1500)
  })
