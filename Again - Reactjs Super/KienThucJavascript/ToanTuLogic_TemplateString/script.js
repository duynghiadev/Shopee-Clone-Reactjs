// const a = true;
// const b = "";
// const c = "Hi";

// const d = a && b && c;
// console.log(d);

let check = 10;

const handle = () => {
  return [1, 2, 3].map((item) => item * 2);
};
// if (check > 9) {
//   value = handle();
// }

// value = check > 9 && handle();
// console.log(value);

// let firstName = "duynghia";

// firstName === "duynghia" ? console.log("true") : console.log("false");

let a = `string text`;
// let c = "string text " + a + " string text";
let c = `string text ${a} string text`;
console.log(c);
