// // Constructor function
// throw new TypeError('Lỗi rồi')

class CustomError extends Error {
  constructor(message, student) {
    super(message)
    this.student = student
    this.name = 'CustomError'
  }
}

try {
  throw new CustomError('End game', { name: 'Thanos' })
} catch (error) {
  // console.log(error instanceof CustomError)
  // console.log(error instanceof Error)
  console.log(error.stack)
}
