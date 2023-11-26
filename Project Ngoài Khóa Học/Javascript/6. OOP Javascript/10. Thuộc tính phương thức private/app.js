// class CoffeMachine {
//   constructor(power) {
//     this._power = power
//   }
//   get power() {
//     return this._power
//   }
// }

// let coffeMachine = new CoffeMachine(100)

// console.log(`Power is ${coffeMachine.power}W`)
// coffeMachine.power = 25
// coffeMachine._power = 25
// console.log(coffeMachine)

// class CoffeMachine {
//   _waterAmount = 0
  
//   setWaterAmount(value) {
//     if(value < 0) value = 0
//     this._waterAmount = value
//   }
//   getWaterAmount() {
//     return this._waterAmount
//   }
// }
// const coffeMachine = new CoffeMachine()
// coffeMachine.setWaterAmount(100)

// console.log(coffeMachine.getWaterAmount())

class CoffeMachine {
  // Private field, Private property
  #waterLimit = 200

  // Private method
  #fixWaterAmount(value) {
    if(value < 0) return 0
    if(value > this.#waterLimit) return this.#waterLimit
  }

  // Public method
  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value)
  }

}

let coffeMachine = new CoffeMachine()

// console.log(coffeMachine.#waterLimit)
coffeMachine.setWaterAmount(300)

console.log(coffeMachine)