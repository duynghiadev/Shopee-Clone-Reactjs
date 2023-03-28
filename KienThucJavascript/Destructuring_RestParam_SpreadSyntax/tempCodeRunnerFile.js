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
