# Các loại function hay dùng trong React

## Higher Order Function

### Callback function

- `Callback function` là một hàm được truyền vào một hàm khác như một tham số và được gọi lại trong quá trình thực thi của hàm đó. `Callback function` thường được sử dụng trong các tình huống như xử lý các tác vụ bất đồng bộ, tương tác với các API và xử lý sự kiện.

- Về tên gọi, "callback" có nghĩa là "gọi lại" hay "phản hồi lại". Điều này ám chỉ rằng khi một hàm nhận một `callback function` làm tham số, nó sẽ thực thi công việc của nó, sau đó gọi lại (`callback`) hàm đó để xử lý kết quả hoặc thực hiện các công việc khác.

- Tóm lại, tên gọi `callback function` có nghĩa là các hàm được truyền vào như một tham số và được gọi lại trong quá trình thực thi của hàm đó để xử lý kết quả hoặc thực hiện các công việc khác.

```js
const num = [2, 4, 6, 8];
const callback = (item, index) => {
  console.log("STT: ", index, "la ", item);
};
num.forEach(callback);
```

### Currying

- `Currying` là kỹ thuật chuyển đổi một hàm nhận nhiều tham số thành nhiều hàm chỉ nhận một tham số. Khi gọi hàm curried, nó sẽ trả về một hàm mới, chỉ cần truyền vào một tham số và sẽ tiếp tục trả về một hàm mới cho đến khi nhận đủ tất cả các tham số.
- `Currying` giúp ta tạo ra các hàm con linh hoạt và tái sử dụng được nhiều lần trong các chương trình.

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
