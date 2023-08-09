# Giải thích code chi tiết trong file category.type.ts

```jsx
export interface Category {
  _id: string
  name: string
}
```

- Dưới đây là giải thích dễ hiểu cho đoạn mã:

1. `Khai báo Kiểu (Interface) Category`:

- `export interface Category`: Đoạn này khai báo một kiểu giao diện (interface) được gọi là `Category`.

  - `{ _id: string; name: string; }`: Đây là phần chứa thuộc tính và kiểu dữ liệu của kiểu `Category`.
  - `_id`: Đại diện cho một chuỗi (string) có tên là `_id`. Đây có thể là một mã duy nhất để định danh danh mục.
  - `name`: Đại diện cho một chuỗi (string) có tên là `name`. Đây là tên của danh mục.

- Tóm lại, đoạn mã trên định nghĩa một kiểu giao diện (Category) để biểu diễn một đối tượng thể hiện danh mục.

- Đối tượng này có hai thuộc tính: `_id` và `name`. `_id` đại diện cho mã duy nhất của danh mục và `name` đại diện cho tên của danh mục. Điều này giúp bạn định nghĩa cấu trúc dữ liệu cho danh mục và sử dụng nó trong toàn bộ ứng dụng của bạn.

---
