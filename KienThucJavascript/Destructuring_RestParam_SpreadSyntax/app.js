/**
 * Destructuring
 */

// Destructuring with object

const user = {
  name: "nghiadev",
  age: 21,
  sex: "male",
};

// const name = user.name;
// const age = user.age;
// const sex = user.sex;

const { name, age, sex } = user;

console.log(name, age, sex);

// Destructuring with array

const list = [
  1,
  function (a, b) {
    return a + b;
  },
];

const [value, sum] = list;
console.log(sum(2, 3));

/**
 * Spread Operator Syntax
 */

const user1 = {
  name: "nghiadev",
  age: 21,
  ability: ["coding"],
};

// shallow copy (copy nông)
const cloneUser = { ...user1 };

console.log("cloneUser: ", cloneUser);

console.log(cloneUser === user1); // false
console.log(cloneUser.ability === user1.ability); // true

/**
 * Rest Parameter
 */

const handle = (a, b, ...c) => {
  return c;
};

const value1 = handle(1, 2, 3, 4, 5, 6);
console.log("value1: ", value1);

const handle1 = ({ d, e, ...f }) => {
  return f;
};

const value2 = handle1({ d: 1, e: 2, f: 3, g: 4, h: 5, k: 6 });
console.log("value2: ", value2);
