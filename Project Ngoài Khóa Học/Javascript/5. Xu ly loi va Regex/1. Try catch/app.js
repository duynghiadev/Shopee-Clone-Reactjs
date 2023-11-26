// try {
//   alert('Bắt đầu chạy') // (1) <--
//   lalala // Lỗi, biến chưa được khai báo
//   alert('Dòng này sẽ không bao giờ chạy') // (2)
//  } catch (err) {
//   alert(`Đã xảy ra lỗi`) // (3) <--
//  }

// try {
//   {{{{{{{{{{{{
//  } catch(e) {
//   alert("Dòng này sẽ không được in ra");
//  }

// setTimeout(function () {
//   try {
//     noSuchVariable // Biến chưa được khai báo, lỗi!
//   } catch (e) {
//     alert('Không hoạt động')
//   }
// }, 1000)
// try {
//   lalala // Lỗi, biến chưa được khai báo!
// } catch (err) {
//   console.log(err.name) // ReferenceError
//   console.log(err.message) // lalala is not defined
//   console.log(err.stack) // ReferenceError: lalala is not defined at (...call stack)
//   console.log(err) // ReferenceError: lalala is not defined
// }

// try {
//   throw new Error('Lỗi')
// } catch (error) {
//   console.log(error)
// }

let loading = false
const getAPI = () => {
  try {
    loading = true
    const message = 'Hello'
    get()
  } catch (error) {
    console.log(error)
  } finally {
    loading = false
    console.log(message)
    console.log('Finally')
  }
}

getAPI()
