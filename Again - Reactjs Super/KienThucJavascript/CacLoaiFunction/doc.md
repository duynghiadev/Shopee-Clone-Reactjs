# Các loại function hay dùng trong React

## Higher Order Function

### Callback function

```js
const num = [2, 4, 6, 8];
const callback = (item, index) => {
  console.log("STT: ", index, "la ", item);
};
num.forEach(callback);
```

### Currying

`findNumber` gọi là currying function vì nó return một function mới. Vậy nên chúng ta phải `()` 2 lần thì nó mới chạy hết code trong nó được.

```js
function findNumber(num) {
  return function (func) {
    const result = [];
    for (let i = 0; i < num; i++) {
      if (func(i)) {
        result.push(i);
      }
    }
    return result;
  };
}
findNumber(10)((number) => number % 2 === 1);
findNumber(20)((number) => number % 2 === 0);
findNumber(30)((number) => number % 3 === 2);
```

Cách viết ngắn gọn hơn với arrow function

```js
const findNumber = (num) => (func) => {
  const result = [];
  for (let i = 0; i < num; i++) {
    if (func(i)) {
      result.push(i);
    }
  }
  return result;
};
findNumber(10)((number) => number % 2 === 1);
findNumber(20)((number) => number % 2 === 0);
findNumber(30)((number) => number % 3 === 2);
```
