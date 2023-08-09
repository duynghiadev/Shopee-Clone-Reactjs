# Dưới đây là cách giải thích chi tiết đoạn code

```jsx
type Role = 'User' | 'Admin'
```

- `type Role`: Đây là một cách để định nghĩa một kiểu dữ liệu tùy chỉnh trong TypeScript.

- `'User' | 'Admin'`: Đây là một liệt kê các giá trị mà kiểu `Role` có thể nhận. Trong trường hợp này, kiểu `Role` chỉ có thể mang giá trị là `'User'` hoặc `'Admin'`.

- Với đoạn mã này, bạn đã định nghĩa một kiểu `Role` có thể được sử dụng để biểu diễn vai trò của người dùng trong hệ thống. Khi bạn sử dụng kiểu `Role`, bạn chỉ có thể gán cho nó một trong hai giá trị: `'User'` hoặc `'Admin'`. Điều này giúp rất nhiều trong việc kiểm tra và quản lý vai trò của người dùng trong ứng dụng của bạn.

---

```jsx
export interface User {
  _id: string
  roles: Role[]
  email: string
  name?: string
  date_of_birth?: string // ISO 8610
  avatar?: string
  address?: string
  phone?: string
  createdAt: string
  updatedAt: string
}
```

- Dưới đây là giải thích chi tiết cho đoạn mã này:

1. `Khai báo Kiểu Giao Diện (Interface) User`:

- `export interface User`: Đây là cách để định nghĩa một giao diện (interface) tùy chỉnh trong TypeScript. Giao diện `User` sẽ đại diện cho thông tin của một người dùng trong hệ thống.

- `_id: string;`: Thuộc tính `_id` được định nghĩa với kiểu dữ liệu là chuỗi (`string`). Đây có thể là một mã duy nhất để định danh người dùng trong cơ sở dữ liệu.

- `roles: Role[];`: Thuộc tính `roles` là một mảng (`array`) chứa các giá trị thuộc kiểu `Role` (được định nghĩa trước đó). Đây biểu thị các vai trò của người dùng, ví dụ như `'User'` hoặc `'Admin'`.

- `email: string;`: Thuộc tính `email` được định nghĩa với kiểu dữ liệu là chuỗi (`string`). Đây là địa chỉ email của người dùng.

- `name?: string;`: Thuộc tính `name` là một chuỗi (`string`) có tên là name, nhưng có thể không có (do được đánh dấu bằng ?. Có thể gọi đây là thuộc tính optional). Đây là tên của người dùng.

- `date_of_birth?: string;`: Thuộc tính `date_of_birth` là một chuỗi (`string`) chứa ngày sinh của người dùng theo chuẩn ISO 8610, nhưng có thể không có (optional).

- `avatar?: string;`: Thuộc tính `avatar` là một chuỗi (`string`) chứa đường dẫn đến hình ảnh đại diện của người dùng, nhưng có thể không có. (optional)

- `address?: string;`: Thuộc tính `address` là một chuỗi (`string`) chứa địa chỉ của người dùng, nhưng có thể không có. (optional)

- `phone?: string;`: Thuộc tính `phone` là một chuỗi (`string`) chứa số điện thoại của người dùng, nhưng có thể không có. (optional)

- `createdAt: string;`: Thuộc tính `createdAt` là một chuỗi (`string`) chứa thời điểm người dùng được tạo.

- `updatedAt: string;`: Thuộc tính `updatedAt` là một chuỗi (`string`) chứa thời điểm cập nhật thông tin người dùng.

- Tóm lại, đoạn mã trên định nghĩa một giao diện `User` để biểu diễn thông tin của người dùng trong hệ thống. Giao diện này bao gồm nhiều thuộc tính như `_id`, `roles`, `email`, `name`, `date_of_birth`, `avatar`, `address`, `phone`, `createdAt`, và `updatedAt` để mô tả chi tiết về người dùng.

---
