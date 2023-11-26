// const car = {
//   name: 'BMW',
//   price: 9000
// }

// const motor = car

// motor.name = 'Toyota'
// console.log(car)

// Singleton pattern
const User = (function(){
  let instance
  function init() {
    return {
      name: 'Dư Thanh Được',
      printName(){
        console.log(this.name)
      }
    }
  }
  return {
    getInstance() {
      if(!instance) {
        instance = init()
      }
      return instance
    }
  }
})()

const user1 = User.getInstance()
const user2 = User.getInstance()
user1.name = 'Nguyễn Văn Mạnh'
console.log(user2)
// console.log(user1 === user2)
