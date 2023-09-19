/**
 * Callback function là nó vừa là một function và nó được truyền vào hàm khác (như là tham số) thì nó gọi là
 * Callback ✅
 */

// Callback function

const nums = [1, 2, 3, 4, 5];

const callback = (item, index) => {
  console.log(`STT ${index} la ${item}`);
};
let cbFunc = nums.forEach(callback);
console.log("Callback function:", cbFunc);

/**
 * Currying là 1 function mà nó return về function ✅
 */

// Currying fucntion
// Đây là cách sử dụng function bình thường
function findNumber(num) {
  return function (func) {
    let result = [];
    for (let i = 0; i <= num; i++) {
      if (func(i)) {
        result.push(i);
      }
    }
    return result;
  };
}

let value = findNumber(10)((number) => number % 2 === 0);
let value_1 = findNumber(10)((number) => number % 2 === 1);
console.log("Currying function 1:", value);
console.log("Currying function 1:", value_1);

// Currying function
// Đây là cách sử dụng arrow function
const findNumber_1 = (num) => (func) => {
  const result_1 = [];
  for (let i = 0; i <= num; i++) {
    if (func(i)) {
      result_1.push(i);
    }
  }
  return result_1;
};

const newFunc = findNumber_1(20);
const value_2 = newFunc((number) => number % 2 === 0);
const value_3 = newFunc((number) => number % 2 === 1);
console.log("Currying function 2:", value_2);
console.log("Currying function 2:", value_3);
