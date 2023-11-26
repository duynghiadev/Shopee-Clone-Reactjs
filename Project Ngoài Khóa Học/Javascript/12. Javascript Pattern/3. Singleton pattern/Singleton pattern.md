# Singleton pattern

**Singleton** là một object chỉ khởi tạo một lần duy nhất trong suốt chương trình chạy dù cho bạn có gọi khởi tạo nó bao nhiêu lần đi nữa. Singleton pattern là cách khai báo object đó, đơn giản vậy thôi. Nhờ điều này mà nó giúp cho chương trình chúng ta không bị lãng phí bộ nhớ, chiếm ít ram hơn.

Singleton pattern dễ thấy nhất trong javascript là object, đây là tính năng mà JS xây dựng sẵn nhằm giảm thiểu việc cấp phát bộ nhớ.

Ví dụ

```js
const car = {
  name: 'BMW',
  price: 9000
}
// Khai báo một object bike và gán nó bằng car
// Điều này sẽ không phải tạo mới lại object car
// Mà motor sẽ tham chiếu đến car
const motor = car
// Thay đổi price tại motor cũng làm thay đổi price tại car
// Vì thuộc tính của motor cũng là của car
motor.price = 10000
console.log(motor.price) // 10000
console.log(car.price) // 10000
```

Bây giờ chúng ta cùng thử tạo một Singleton pattern nhé. Ở đây mình kết hợp với module pattern.

```js
const User = (function () {
  let instance
  function init() {
    return {
      name: 'Dư Thanh Được',
      printName() {
        console.log(this.name)
      }
    }
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = init()
      }
      return instance
    }
  }
})()
// Dù cho gọi getInstance() bao nhiêu lần
// thì cũng chỉ có 1 instance được tạo ra mà thôi
const user1 = User.getInstance()
const user2 = User.getInstance()
console.log(user1 === user2) // true
```
