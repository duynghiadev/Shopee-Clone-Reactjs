// Callback function
const nums = [1, 2, 3, 4, 5];

const callback = (item, index) => {
  console.log(`STT ${item} la ${index}`);
};

nums.forEach(callback);

// Curring là function mà return về function
function findNumber(num) {
  return function (func) {
    const result = [];
    for (let i = 0; i <= num; i++) {
      if (func(i)) {
        result.push(i);
      }
    }
    return result;
  };
}

const value = findNumber(10)((number) => number % 2 === 0);
const value1 = findNumber(10)((number) => number % 2 === 1);
console.log("write in a functional way: ");
console.log(value);
console.log(value1);

// Viết lại hàm Curring trên bằng cách sử dụng Arrow Function
const findNumber1 = (num) => (func) => {
  const result = [];
  for (let i = 0; i <= num; i++) {
    if (func(i)) {
      result.push(i);
    }
  }
  return result;
};

const value2 = findNumber(10)((number) => number % 2 === 0);
const value3 = findNumber(10)((number) => number % 2 === 1);
console.log("write in a arrow functional way: ");
console.log(value2);
console.log(value3);
