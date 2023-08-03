# Giải thích chi tiết đoạn code trong file product.ts

- Đoạn code trên định nghĩa hai biến `sortBy` và `order`, chứa các giá trị hằng số được sử dụng để sắp xếp (sort) và định hướng (order) dữ liệu trong ứng dụng.

```jsx
export const sortBy = {
  createdAt: 'createdAt',
  view: 'view',
  sold: 'sold',
  price: 'price'
} as const
```

- Giải thích từng phần chi tiết:

1. Định nghĩa biến `sortBy`:

- `export const sortBy`: Đây là cách sử dụng từ khóa `export const` để xuất biến `sortBy` ra ngoài để có thể được sử dụng trong các module khác.

- `sortBy`: Đây là tên của biến được định nghĩa.

- `as const`: Điều này đảm bảo rằng các giá trị trong đối tượng `sortBy` được xem là các giá trị không thể thay đổi (`immutable`), thay vì các giá trị có thể thay đổi (`mutable`) thông thường. Bởi vì đối tượng (object) đó được khai báo với kiểu biến `const`.

- Đối tượng `sortBy` chứa các thuộc tính là các kiểu sắp xếp có thể áp dụng cho dữ liệu. Ví dụ: `createdAt` đại diện cho sắp xếp theo ngày tạo, `view` đại diện cho sắp xếp theo lượt xem, `sold` đại diện cho sắp xếp theo số lượng bán, `price` đại diện cho sắp xếp theo giá.

---

```jsx
export const order = {
  asc: 'asc',
  desc: 'desc'
} as const
```

2. Định nghĩa biến `order`:

- `export const order`: Đây là cách sử dụng từ khóa `export const` để xuất biến `order` ra ngoài để có thể được sử dụng trong các module khác.

- `order`: Đây là tên của biến được định nghĩa.

- `as const`: Điều này đảm bảo rằng các giá trị trong đối tượng `order` được xem là các giá trị không thể thay đổi (`immutable`), thay vì các giá trị có thể thay đổi (`mutable`) thông thường. Bởi vì đối tượng (object) đó được khai báo với kiểu biến `const`.

- Đối tượng `order` chứa các thuộc tính là các kiểu định hướng có thể áp dụng cho dữ liệu. Ví dụ: `asc` đại diện cho định hướng sắp xếp tăng dần, `desc` đại diện cho định hướng sắp xếp giảm dần.

- Tóm lại, đoạn code này định nghĩa hai biến hằng số `sortBy` và `order`, chứa các giá trị đại diện cho các kiểu sắp xếp và định hướng dữ liệu trong ứng dụng. Các biến này có thể được import và sử dụng trong các module khác để thực hiện việc sắp xếp và định hướng dữ liệu tương ứng.

---

❌❌Đây là phần câu hỏi không liên quan đến trong file code này❌❌

**Khi ta export 2 ra kiểu đó thì khi import vào các file khác thì import như thế nào ?**

- Khi bạn export các biến như e`xport const sortBy = ...` và `export const order = ...` như trong đoạn code đã cho, bạn có thể import chúng vào các file khác bằng cách sử dụng cú pháp destructuring hoặc import toàn bộ module. Dưới đây là cách import các biến này:

- Import bằng cú pháp destructuring:

```jsx
// fileA.ts
export const sortBy = {
  // ...
} as const;

export const order = {
  // ...
} as const;
```

```jsx
// fileB.ts
import { sortBy, order } from './fileA'

// Bây giờ bạn có thể sử dụng các biến sortBy và order trong fileB.ts
console.log(sortBy.createdAt) // 'createdAt'
console.log(order.asc) // 'asc'
```

- Import toàn bộ module:

```jsx
// fileC.ts
import * as constants from './fileA'

// Bây giờ bạn có thể sử dụng các biến sortBy và order qua đối tượng constants
console.log(constants.sortBy.createdAt) // 'createdAt'
console.log(constants.order.asc) // 'asc'
```

- Lưu ý rằng cả hai cách đều sử dụng đúng tên của biến đã được xuất từ `fileA.ts`, và cách bạn import phụ thuộc vào cách bạn muốn sử dụng và tổ chức các biến này trong `fileB.ts` hoặc `fileC.ts`.

- Khi sử dụng cú pháp destructuring (cách 1), bạn chỉ import các biến cụ thể bạn muốn sử dụng. Trong khi đó, khi sử dụng import toàn bộ module (cách 2), bạn import toàn bộ module vào một đối tượng và sau đó truy cập các biến thông qua đối tượng đó.

**Nếu như trong cách khai báo đó tôi không sử dụng chữ `as const` sau cùng thì object đó có tự hiểu là nó là hằng số và không thể thay đổi được không ?**

- Nếu bạn không sử dụng từ khóa `as const` sau cùng khi khai báo đối tượng, thì TypeScript sẽ hiểu rằng các giá trị trong đối tượng đó không bị ràng buộc và có thể thay đổi. Khi không sử dụng `as const`, TypeScript mặc định xem các giá trị là kiểu dữ liệu có thể thay đổi (mutable).

- Ví dụ, xét đoạn mã sau:

```jsx
// Không sử dụng as const
export const sortBy = {
  createdAt: 'createdAt',
  view: 'view',
  sold: 'sold',
  price: 'price'
}
```

- Khi bạn import và sử dụng biến `sortBy`, TypeScript sẽ cho phép bạn thay đổi các giá trị bên trong đối tượng:

```jsx
import { sortBy } from './fileA'

sortBy.createdAt = 'newCreatedAt' // Không có lỗi, TypeScript cho phép thay đổi giá trị
console.log(sortBy.createdAt) // 'newCreatedAt'
```

- Tuy nhiên, nếu bạn sử dụng `as const` trong khai báo đối tượng, TypeScript sẽ xem các giá trị trong đối tượng là các giá trị không thể thay đổi (immutable):

```jsx
// Sử dụng as const
export const sortBy = {
  createdAt: 'createdAt',
  view: 'view',
  sold: 'sold',
  price: 'price'
} as const;
```

- Khi bạn import và sử dụng biến `sortBy` như trên, TypeScript sẽ không cho phép bạn thay đổi các giá trị bên trong đối tượng và sẽ thông báo lỗi:

```jsx
import { sortBy } from './fileA'

sortBy.createdAt = 'newCreatedAt' // Lỗi, TypeScript không cho phép thay đổi giá trị
```

- Sử dụng `as const` là cách xác định rõ ràng rằng bạn muốn các giá trị trong đối tượng là các giá trị không thể thay đổi (immutable), giúp bạn tránh những lỗi không mong muốn do thay đổi giá trị không đáng kỳ vọng.

**Tuy tôi không sử dụng `as const` sau object, mà trước đó tôi có sử dụng kiểu `const` khi khai báo mà. Tại sao lại có thể thay đổi được các thuộc tính trong đó ?**

- `const` là một từ khóa được sử dụng để khai báo các biến không thể thay đổi. Tuy nhiên, nó không có tác dụng đối với các thuộc tính của đối tượng. Các thuộc tính của đối tượng có thể thay đổi, ngay cả khi biến được khai báo là `const`.

- Điều này là do các thuộc tính của đối tượng được lưu trữ dưới dạng các tham chiếu đến các giá trị. Khi bạn thay đổi giá trị của một thuộc tính, bạn thực sự đang thay đổi tham chiếu đến giá trị. Biến `const` chỉ ngăn bạn thay đổi giá trị của chính biến, nó không ngăn bạn thay đổi giá trị của các thuộc tính của biến.

---
