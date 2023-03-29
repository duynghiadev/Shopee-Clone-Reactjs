let check = 10;

const handle = () => {
  return [1, 2, 3].map((item) => item * 2);
};

let value = [];
value = check > 9 && handle();
console.log(value);
