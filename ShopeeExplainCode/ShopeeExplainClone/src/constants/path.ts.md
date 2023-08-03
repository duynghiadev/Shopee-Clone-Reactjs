# Giải thích code chi tiết trong file path.ts

- Đoạn code trên định nghĩa một đối tượng `path`, chứa các đường dẫn (URL) cho các trang trong ứng dụng. Các giá trị trong đối tượng `path` là các chuỗi đại diện cho các đường dẫn.

```jsx
const path = {
  home: '/',
  user: '/user',
  profile: '/user/profile',
  changePassword: '/user/password',
  historyPurchase: '/user/purchase',
  login: '/login',
  register: '/register',
  logout: '/logout',
  productDetail: ':nameId',
  cart: '/cart'
} as const
```

- Giải thích từng phần chi tiết:

1. Khai báo đối tượng `path`:

```jsx
const path = {
  // Các đường dẫn (URL) sẽ được định nghĩa ở đây.
} as const;
```

- `const path`: Khai báo biến `path` với từ khóa `const`, cho phép giá trị của biến này không thay đổi (không thể gán lại giá trị mới sau khi đã được gán một lần). Bởi vì `const` là hằng số (không thể thay đổi được).

- `as const`: Điều này đảm bảo rằng các giá trị trong đối tượng `path` được xem là các giá trị không thể thay đổi (`immutable`), thay vì các giá trị có thể thay đổi (`mutable`) thông thường. Kỹ thuật này đảm bảo rằng TypeScript hiểu các giá trị trong đối tượng `path` là các giá trị cố định (`literals`), không phải kiểu dữ liệu động.

2. Các đường dẫn trong đối tượng `path`:

```jsx
home: '/',
user: '/user',
profile: '/user/profile',
changePassword: '/user/password',
historyPurchase: '/user/purchase',
login: '/login',
register: '/register',
logout: '/logout',
productDetail: ':nameId',
cart: '/cart'
```

- Đối tượng `path` chứa các thuộc tính là các đường dẫn (URL) của ứng dụng.

- Mỗi thuộc tính có một tên và một giá trị chuỗi đại diện cho đường dẫn. Ví dụ: thuộc tính `home` có giá trị `'/'`, `user` có giá trị `'/user'`, `login` có giá trị `'/login'`, v.v.

- Đặc biệt, thuộc tính `productDetail` có giá trị `':nameId'`. Điều này cho thấy rằng đây là một đường dẫn có tham số `nameId`, trong đó `nameId` là một giá trị biến trong đường dẫn. Ví dụ: đường dẫn `/products/apple` có thể tương ứng với `'/products/:nameId'` với `nameId` là `'apple'`.

---

❌❌ Giải thích chi tiết dòng code này: ❌❌

```jsx
productDetail: ':nameId',
```

- Dòng code `productDetail: ':nameId'` định nghĩa thuộc tính `productDetail` của đối tượng `path` với giá trị là `':nameId'`. Trong đó, `':nameId'` là một chuỗi (string) có dạng `':<tên_tham_số>'`.

- Giải thích:

1. `productDetail`: Đây là tên của thuộc tính được định nghĩa trong đối tượng `path`. Đối tượng `path` chứa các đường dẫn (URL) cho các trang trong ứng dụng, và `productDetail` đại diện cho đường dẫn đến trang chi tiết sản phẩm.

2. `':nameId'`: Đây là giá trị được gán cho thuộc tính `productDetail`. Chuỗi `':nameId'` có dạng `':<tên_tham_số>'`, trong đó `<tên_tham_số>` là một tên tham số. Trong trường hợp này, `nameId` là tên tham số. Điều đặc biệt với tên tham số là nó được đặt trong dấu hai chấm `:`, điều này cho biết đó là một tham số của đường dẫn.

- Ví dụ:

- Khi bạn sử dụng `productDetail` trong một đoạn mã, nó sẽ giữ nguyên chuỗi `':nameId'`, chứ không phải giá trị cụ thể. Ví dụ:

```jsx
// Giả sử ta sử dụng đoạn mã sau
console.log(path.productDetail)

// Kết quả in ra sẽ là:
// :nameId
```

- Đoạn mã trên sẽ in ra chuỗi `:nameId`, chứ không phải giá trị nào khác. Điều này cho phép bạn sử dụng `productDetail` là một mẫu (pattern) định dạng đường dẫn mà có tham số `nameId`, và sau đó bạn có thể sử dụng tham số thực tế để thay thế `:nameId` khi xử lý các đường dẫn cụ thể.

---

```jsx
export default path
```

- Xuất đối tượng `path`:

- Dòng code này xuất đối tượng `path`, cho phép nó có thể được import và sử dụng trong các module khác bằng cách sử dụng tên tùy ý mà không cần phải sử dụng tên gốc của đối tượng đó.

---
