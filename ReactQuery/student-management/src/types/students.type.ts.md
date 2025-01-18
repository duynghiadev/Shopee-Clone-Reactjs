## Đây là phần giải thích code:

👉 Đoạn 1:

```jsx
export interface Student {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
  country: string
  avatar: string
  btc_address: string
}
```

- Đoạn mã trên định nghĩa một giao diện (interface) TypeScript có tên là `Student`. Giao diện này mô tả cấu trúc dữ liệu của một đối tượng sinh viên. Dưới đây là mô tả ý nghĩa của từng thuộc tính trong giao diện `Student`:

- `id: number` Là một số nguyên đại diện cho ID của sinh viên.
- `first_name: string` Là một chuỗi đại diện cho tên của sinh viên.
- `last_name: string` Là một chuỗi đại diện cho họ của sinh viên.
- `email: string` Là một chuỗi đại diện cho địa chỉ email của sinh viên.
- `gender: string` Là một chuỗi đại diện cho giới tính của sinh viên.
- `country: string` Là một chuỗi đại diện cho quốc gia của sinh viên.
- `avatar: string` Là một chuỗi đại diện cho đường dẫn tới hình ảnh đại diện của sinh viên.
- `btc_address: string` Là một chuỗi đại diện cho địa chỉ ví Bitcoin của sinh viên.

- Giao diện (Interface) `Student` định nghĩa cấu trúc dữ liệu cụ thể mà một đối tượng sinh viên cần phải tuân thủ. Khi một đối tượng được tạo dựa trên giao diện (interface) này, nó phải chứa các thuộc tính đã được định nghĩa và có kiểu dữ liệu tương ứng.

---

## Bổ sung thêm: Hãy định nghĩa khái niệm interface trong TypeScript ?

- Trong TypeScript, `interface` là một cách để định nghĩa cấu trúc dữ liệu của một đối tượng. Nó mô tả các thuộc tính, phương thức và kiểu dữ liệu mà một đối tượng cần phải có.

- `Interface` định nghĩa một hợp đồng (contract) cho các đối tượng. Nó chỉ định rõ những gì một đối tượng nên có, nhưng không quan tâm đến việc đối tượng đó sẽ được triển khai như thế nào. `Interface` có thể được sử dụng để kiểm tra xem một đối tượng có tuân thủ theo hợp đồng đã định nghĩa hay không.

- Một `interface` có thể chứa các thuộc tính và phương thức, mỗi thuộc tính và phương thức đều có tên và kiểu dữ liệu được xác định. `Interface` cũng có thể kế thừa từ một hoặc nhiều `interface` khác, cho phép sử dụng lại các đặc điểm đã được định nghĩa trước đó.

- Dưới đây là một ví dụ đơn giản về việc định nghĩa một `interface` trong TypeScript:

```jsx
interface Person {
  name: string;
  age: number;
  sayHello(): void;
}

class Student implements Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
  }
}

const john: Person = new Student('John', 20)
john.sayHello() // Output: Hello, my name is John and I'm 20 years old.
```

- Trong ví dụ trên, interface `Person` định nghĩa cấu trúc của một đối tượng `Person`, bao gồm thuộc tính `name` và `age` có kiểu dữ liệu `string` và `number`, và phương thức `sayHello` không có giá trị trả về (`void`).

- Lớp `Student` triển khai interface `Person` và thực hiện các thuộc tính và phương thức đã được định nghĩa trong interface. Cuối cùng, ta khởi tạo một đối tượng `Student` với tên "John" và tuổi 20, và gọi phương thức `sayHello` để in ra thông báo.

👉 Đoạn 2:

```jsx
export type Students = Pick<Student, 'id' | 'email' | 'avatar' | 'last_name'>[]
```

- Đoạn mã trên định nghĩa một kiểu TypeScript có tên là `Students`. Kiểu này là một mảng các phần tử, mỗi phần tử trong mảng là một đối tượng có cấu trúc tương tự như giao diện (interface) `Student`. Tuy nhiên, chỉ một số thuộc tính được chọn từ giao diện (interface) `Student` để tạo nên kiểu `Students`.

- Cụ thể, kiểu `Students` chứa các thuộc tính sau đây từ giao diện (interface) `Student`:

- `id`: Là Số nguyên đại diện cho ID của sinh viên.
- `email`: Là Chuỗi đại diện cho địa chỉ email của sinh viên.
- `avatar`: Là Chuỗi đại diện cho đường dẫn tới hình ảnh đại diện của sinh viên.
- `last_name`: Là Chuỗi đại diện cho họ của sinh viên.

- Mỗi phần tử trong mảng `Students` có thể chứa các thuộc tính trên với kiểu dữ liệu tương ứng.

---

## Còn chữ Pick có nghĩa là sao ?

- Trong TypeScript, `Pick` là một phép toán kiểu dữ liệu được sử dụng để tạo một kiểu mới bằng cách lựa chọn một số thuộc tính cụ thể từ một kiểu hiện có.

- Trong trường hợp của dòng mã của bạn:

```jsx
export type Students = Pick<Student, 'id' | 'email' | 'avatar' | 'last_name'>[]
```

- `Pick` được sử dụng để tạo kiểu `Students` từ kiểu `Student`.

- Cú pháp` Pick<T, K>` nhận hai tham số:

- `T`: Kiểu dữ liệu ban đầu từ đó chọn lựa thuộc tính. (Kiểu dữ liệu đã khai báo Interface từ trước đó)
- `K`: Union type của các thuộc tính muốn chọn.

- Kết quả trả về là một kiểu mới bao gồm các thuộc tính đã chọn từ `T`. Trong trường hợp này, kiểu `Students` sẽ chỉ chứa các thuộc tính `'id'`, `'email'`, `'avatar'` và `'last_name'` từ kiểu `Student`.
