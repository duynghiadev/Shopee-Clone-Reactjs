// Việc copy biến với tham trị
var message = "Hello!";
var parse = message;
var message = "hi";
console.log(parse);

// Việc copy biến với tham chiếu
let user = { name: "John" };
let admin = user;

admin.name = "Peter"; // changed by the "admin" reference
console.log(user.name); // 'Peter', changes are seen from the "user" reference

// So sánh với tham chiếu
let a = {};
let b = a; // copy the reference

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

// Không bằng nhau
let a1 = {};
let b1 = {};

console.log(a1 == b1); // false
console.log(a1 === b1); // false

// Clone và merge
let user1 = {
  name: "John",
  age: 30,
};

// Bây giờ clone là một object độc lập với cùng nội dung với user1
let clone = { ...user1 };
clone.name = "Peter";
console.log(user1.name); // Vẫn là John trong object gốc

// Hoặc sài vòng lặp

let user2 = {
  name: "John",
  age: 30,
};

let clone = {}; // một object rỗng

// Cùng copy các thuộc tính nào
for (let key in user2) {
  clone[key] = user2[key];
}
clone.name = "Pete";
console.log(user2.name); // Vẫn là John trong object gốc

// Deep clone
let user3 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = { ...user3 };

console.log(user3.sizes === clone.sizes); // true, Vì cùng object

// user3 và clone chia sẻ sizes
user3.sizes.width++; // Thay đổi thuộc tính từ một nơi
console.log(clone.sizes.width); // 51, Tại nơi khác kết quả cũng bị thay đổi theo
