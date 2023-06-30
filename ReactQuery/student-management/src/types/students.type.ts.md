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

-

👉 Đoạn 2:

```jsx
export type Students = Pick<Student, 'id' | 'email' | 'avatar' | 'last_name'>[]
```

-

---
