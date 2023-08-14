# Dưới đây là phần giải thích code chi tiết trong file utils.type.ts

```jsx
export interface SuccessResponse<Data> {
  message: string
  data: Data
}
```

- Dưới đây là giải thích chi tiết cho đoạn mã `export interface SuccessResponse<Data> { ... }`:

  - `export`: Từ khóa này cho phép kiểu dữ liệu được xuất ra khỏi module hiện tại để có thể được sử dụng trong các module khác.

  - `interface SuccessResponse<Data> { ... }`: Đây là cách để định nghĩa một kiểu giao diện (interface) tên là `SuccessResponse`, với một tham số kiểu tùy chỉnh `Data`.

  - `SuccessResponse<Data>`: Đây là tên của kiểu giao diện (interface) mà chúng ta đang định nghĩa.

  - `<Data>`: Đây là tham số kiểu tùy chỉnh, cho phép bạn chỉ định loại dữ liệu cho thuộc tính `data`.

  - `{ message: string, data: Data }`: Đây là phần thân của giao diện (interface) `SuccessResponse`.

  - `message: string`: Thuộc tính `message` là một chuỗi (string) chứa thông điệp về phản hồi thành công.

  - `data: Data`: Thuộc tính `data` chứa dữ liệu liên quan đến phản hồi thành công. Kiểu của `data` sẽ được xác định bởi tham số kiểu `Data`.

- Tóm lại, việc định nghĩa kiểu giao diện (interface) `SuccessResponse` cho phép bạn xác định cấu trúc của một phản hồi thành công, bao gồm thông điệp và dữ liệu tùy chọn mà kiểu của dữ liệu đó có thể được chỉ định khi sử dụng giao diện (interface) này.

---

```jsx
export interface ErrorResponse<Data> {
  message: string
  data?: Data
}
```

- Dưới đây là giải thích chi tiết cho đoạn mã:

  - `export`: Từ khóa này cho phép kiểu dữ liệu được xuất ra khỏi module hiện tại để có thể sử dụng trong các module khác.

  - `interface ErrorResponse<Data> { ... }`: Đây là cách để định nghĩa một kiểu giao diện (interface) tên là `ErrorResponse`, với một tham số kiểu tùy chỉnh `Data`.

  - `ErrorResponse<Data>`: Đây là tên của kiểu giao diện (interface) mà chúng ta đang định nghĩa.

  - `<Data>`: Đây là tham số kiểu tùy chỉnh, cho phép bạn chỉ định loại dữ liệu cho thuộc tính `data`.

  - `{ message: string, data?: Data }`: Đây là phần thân của giao diện (interface) `ErrorResponse`.

  - `message: string`: Thuộc tính `message` là một chuỗi (string) chứa thông điệp về phản hồi lỗi.

  - `data?: Data`: Thuộc tính `data` chứa dữ liệu liên quan đến phản hồi lỗi. Kiểu của `data` sẽ được xác định bởi tham số kiểu `Data`. Tuy nhiên, dấu `?` sau `data` chỉ ra rằng thuộc tính `data` là tùy chọn (optional). Điều này có nghĩa là một phản hồi lỗi có thể không đi kèm với dữ liệu.

- Tóm lại, việc định nghĩa kiểu giao diện (interface) `ErrorResponse` cho phép bạn xác định cấu trúc của một phản hồi lỗi, bao gồm thông điệp về lỗi và dữ liệu tùy chọn mà kiểu của dữ liệu đó có thể được chỉ định khi sử dụng giao diện (interface) này. Thuộc tính `data` có thể có hoặc không có trong phản hồi lỗi, tùy thuộc vào tình huống cụ thể.

---

```jsx
// cú pháp `-?` sẽ loại bỏ undefiend của key optional

export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}
```

- Dưới đây là phần giải thích chi tiết dòng code `export type NoUndefinedField<T> = { ... }`:

  - `export`: Đây là từ khóa trong TypeScript cho phép kiểu dữ liệu này được xuất ra module khác để sử dụng.

  - `type NoUndefinedField<T> = { ... }`: Đây là cách để định nghĩa một kiểu tùy chỉnh mới có tên là `NoUndefinedField`. Kiểu này sẽ xóa bỏ các thuộc tính có giá trị undefined trong đối tượng.

  - `[P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>`

  - `[P in keyof T]`: Đây là cách để lặp qua tất cả các thuộc tính của đối tượng kiểu `T`. Mỗi thuộc tính được đại diện bằng biến `P`.

  - `-?`: Đây là một cú pháp thêm vào mỗi thuộc tính để chỉ định rằng thuộc tính này là bắt buộc (required), và không được phép có giá trị undefined.

  - `NoUndefinedField<NonNullable<T[P]>>`: Đây là phần quan trọng của kiểu `NoUndefinedField`. Nó đang áp dụng kiểu tùy chỉnh `NoUndefinedField` lên mỗi thuộc tính của đối tượng. `NonNullable<T[P]>` có nhiệm vụ loại bỏ giá trị `undefined` từ kiểu dữ liệu của thuộc tính tương ứng. Điều này đảm bảo rằng các thuộc tính không thể có giá trị undefined trong đối tượng sau khi áp dụng kiểu `NoUndefinedField`.

- Tóm lại, đoạn mã này định nghĩa một kiểu tùy chỉnh `NoUndefinedField` để xóa bỏ các thuộc tính có giá trị undefined trong một đối tượng. Cú pháp `-?` được sử dụng để làm cho tất cả các thuộc tính trở thành bắt buộc, và kiểu `NonNullable<T[P]>` được sử dụng để đảm bảo rằng các thuộc tính không thể có giá trị undefined.

---
