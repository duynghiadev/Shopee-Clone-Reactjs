/**
 * Destructuring
 */

// Destructuring with object

const user = {
  name: "Duy Nghia Dev",
  age: 21,
  sex: "male",
};

const { name: Username, age, sex } = user;
console.log(Username, age, sex);

// Destructuring with array

const list = [
  1,
  function (x, y) {
    return x + y;
  },
];

const [value, sum] = list;
console.log(value, sum(1, 2));

/**
 * Spread Syntax
 */

const user_1 = {
  name: "Duy Nghia Dev",
  age: 21,
  ability: ["coding"],
};

// shallow copy (copy nông)
const user_2 = { ...user_1 };
console.log(user_1 === user_2);

console.log("ability: ", user_1.ability === user_2.ability);
console.log("age: ", user_1.age === user_2.age);
console.log("name: ", user_1.name === user_2.name);

/**
 * Rest Parameter
 */

const handle = (a, b, ...c) => {
  return c;
};

const value_1 = handle(1, 2, 3, 4, 5, 6);
console.log("Rest parameter:", value_1);

/**
 * Collaboration rest parameter with destructuring
 */

const handle_1 = ({ a, b, ...c }) => {
  return c;
};

const value_2 = handle(7, 8, 9, 10, 11);
console.log("Collaboration rest parameter with destructuring:", value_2);

/**
 * Bonus: destructuring
 */

const t = { a: 1, b: 2, c: 3 };
const { a, ...d } = t;

console.log(a, t); // 1 { b: 2, c: 3 }

/**
 * Bonus: rest parameter
 */
const t_1 = { a: 1, b: 2, c: 3 };

const newObj = { ...t_1, d: 4 }; // Thêm thuộc tính "d" với giá trị 4 vào newObj
console.log(newObj);

/**
 * Cho ví dụ về rest parameter:
 *
 * - Dưới đây là một ví dụ về cách sử dụng rest parameter trong khai báo hàm để xử lý một số lượng đối số không cố
 * định:
 *
 * - Trong ví dụ này, hàm sum_1 nhận một số lượng không cố định các đối số sử dụng rest parameter ...numbers. Bất
 * kỳ số nào được truyền vào khi gọi hàm sum_1 sẽ được gom vào một mảng có tên là numbers. Hàm sau đó duyệt qua
 * mảng này và tính tổng của tất cả các số.
 *
 * - Khi gọi sum_1(1, 2, 3, 4, 5), các số này sẽ được gom thành một mảng [1, 2, 3, 4, 5], và sau đó hàm sum_1 tính
 * tổng của chúng, cho kết quả là 15.
 *
 * - Rest parameter là một cách tiện lợi để làm việc với các hàm có số lượng đối số không cố định và thực hiện
 * các phép toán trên chúng trong một mảng.
 */

function sum_1(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

const result = sum_1(1, 2, 3, 4, 5);
console.log(result); // Kết quả là 15, tổng của tất cả các đối số truyền vào.
