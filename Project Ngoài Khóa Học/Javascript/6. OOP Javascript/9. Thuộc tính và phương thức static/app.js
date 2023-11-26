// class User {

// }

// // const user = new User()
// // user.sayHi()
// User.sayHi = function() {
//   alert('Hello')
// }
// User.sayHi()

// class Article {
//   constructor(title, date) {
//     this.title = title
//     this.date = date
//   }
//   static compare(articleA, articleB) {
//     return articleA.date - articleB.date
//   }
// }

// let articles = [
//   new Article('HTML', new Date(2019, 1, 1)),
//   new Article('CSS', new Date(2019, 0, 1)),
//   new Article('Javascript', new Date(2019, 11, 1))
// ]

// // console.log(articles)

// articles.sort(Article.compare)
// console.log(articles)

// class Article {
// }

// Article.publisher = 'Duoc'

// console.log(Article.publisher)

// class Article {
//   static publisher = 'Duoc'
//   static sayHi() {
//     console.log('hello')
//   }
// }

// Article.sayHi()
// console.log(new Article())

class Animal {
  static planet = 'Earth'
  constructor(name, speed) {
    this.speed = speed
    this.name = name
  }
  run(speed = 0) {
    this.speed +=speed
    alert(`${this.name} runs with speed ${this.speed}`)
  }
  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`)
  }
}

let rabbits = [
  new Rabbit('White Rabbit', 10),
  new Rabbit('Black Rabbit', 5)
]

// rabbits.sort(Rabbit.compare)

// console.log(rabbits)

// console.log(Rabbit.planet)

// console.log(Rabbit.__proto__ === Animal)
console.log(Rabbit.prototype.__proto__ === Animal.prototype)