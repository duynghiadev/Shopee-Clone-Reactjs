// function handle(event) {
//   console.log(event)
// }
// window.addEventListener('click', handle)

class Subject {
  constructor() {
    this.observers = []
  }
  // Đăng ký function
  subcribe(func) {
    this.observers.push(func)
  }

  // Hủy đăng ký function
  unsubcribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func)
  }

  // Thông báo đến các function
  fire(data) {
    this.observers.forEach((observer) => observer(data))
  }
}

const subject = new Subject()
function handle1(value) {
  console.log('Handle1', value)
}
function handle2(value) {
  console.log('Handle2', value)
}

subject.subcribe(handle1)
subject.subcribe(handle2)

subject.fire('Hello')
subject.unsubcribe(handle1)
subject.fire('World')