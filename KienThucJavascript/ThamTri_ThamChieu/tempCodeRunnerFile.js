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