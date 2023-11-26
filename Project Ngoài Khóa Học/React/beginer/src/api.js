// export const getUserApi = () =>
//   Promise.resolve({
//     name: 'Alan Walker',
//     age: 23
//   })

export const getUserApi = () =>
  Promise.reject({
    message: 'Lỗi server',
    data: {
      code: 500
    }
  })
