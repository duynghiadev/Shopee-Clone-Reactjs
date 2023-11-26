// const user = {
//   print(age, location) {
//     console.log(this.name + ' ' + age + ' tuổi, sống tại ' + location)
//   }
// }
// const duoc = { name: 'Dư Thanh Được' }
// user.print.bind(duoc, 25, 'Việt Nam')()

const user = {
  lname: 'Được',
  delayPrint() {
    function handle() {
      console.log(this.lname)
    }
    setTimeout(handle.bind(this), 1000)
  }
}
user.delayPrint()
