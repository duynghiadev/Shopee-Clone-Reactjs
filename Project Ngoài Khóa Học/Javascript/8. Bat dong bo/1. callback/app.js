setTimeout(() => {
  try {
    throw new Error('Lỗi rồi')
  } catch (error) {
    // Dòng này sẽ không bao giờ được chạy
    console.log(error)
  }
}, 1000)
