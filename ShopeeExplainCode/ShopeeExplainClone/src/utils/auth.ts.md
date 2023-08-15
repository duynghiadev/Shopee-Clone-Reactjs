# Đây là phần giải thích code chi tiết trong file auth.ts

```jsx
import { User } from 'src/types/user.type'
```

- Đây là một câu lệnh import trong JavaScript/TypeScript để nhập một kiểu dữ liệu hoặc biến từ một tệp khác. Trong trường hợp này:

- `User`: Đây là kiểu dữ liệu được import từ tệp `'src/types/user.type'`. Được giả định là kiểu đại diện cho thông tin của một người dùng trong dự án thương mại điện tử.

- Tệp `'src/types/user.type'` có thể chứa định nghĩa kiểu dữ liệu `User` mà bạn sử dụng trong dự án thương mại điện tử, bao gồm các trường như `name`, `email`, `avatar`, và các thông tin khác liên quan đến người dùng. Câu lệnh import này cho phép bạn sử dụng kiểu dữ liệu `User` trong phần còn lại của tệp hiện tại.

---

```jsx
export const LocalStorageEventTarget = new EventTarget()
```

- Đoạn mã này tạo một biến `LocalStorageEventTarget` bằng cách khởi tạo một đối tượng `EventTarget`.

- `export const LocalStorageEventTarget`: Đây là cách để xuất biến `LocalStorageEventTarget` để có thể được sử dụng ở bất kỳ đoạn mã nào muốn import nó.

- `new EventTarget()`: Đây là cách tạo ra một đối tượng `EventTarget`, một phần của cơ chế JavaScript để xử lý sự kiện. `EventTarget` được sử dụng để tạo, quản lý và theo dõi các sự kiện.

- Với mã này, bạn đã tạo một đối tượng `LocalStorageEventTarget` sẽ được sử dụng để theo dõi sự thay đổi trong Local Storage và thông báo cho các phần khác của ứng dụng khi dữ liệu trong Local Storage thay đổi.

---

```jsx
export const setAccessTokenToLS = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}
```

- Đoạn mã này định nghĩa một hàm `setAccessTokenToLS` để lưu `access_token` vào Local Storage.

- `export const setAccessTokenToLS`: Đây là cách xuất hàm `setAccessTokenToLS` để có thể sử dụng nó ở bất kỳ đoạn mã nào muốn import nó.

- `(access_token: string) => { ... }`: Đây là khai báo hàm có một tham số `access_token` kiểu dữ liệu `string`. Hàm này nhận vào giá trị `access_token` và thực hiện một hành động.

- `localStorage.setItem('access_token', access_token)`: Đây là lệnh sử dụng API của Local Storage để đặt giá trị của `access_token` vào Local Storage với khóa `'access_token'`. Khi lệnh này được thực hiện, `access_token` sẽ được lưu trong Local Storage và có thể được truy xuất sau này.

- Với hàm này, bạn có thể gọi `setAccessTokenToLS('some_access_token_value')` để lưu giá trị của `access_token` vào Local Storage.

---

```jsx
export const setRefreshTokenToLS = (refresh_token: string) => {
  localStorage.setItem('refresh_token', refresh_token)
}
```

- Đoạn mã này định nghĩa một hàm `setRefreshTokenToLS` để lưu `refresh_token` vào Local Storage.

- `export const setRefreshTokenToLS`: Đây là cách xuất hàm `setRefreshTokenToLS` để có thể sử dụng nó ở bất kỳ đoạn mã nào muốn import nó.

- `(refresh_token: string) => { ... }`: Đây là khai báo hàm có một tham số `refresh_token` kiểu dữ liệu `string`. Hàm này nhận vào giá trị `refresh_token` và thực hiện một hành động.

- `localStorage.setItem('refresh_token', refresh_token)`: Đây là lệnh sử dụng API của Local Storage để đặt giá trị của `refresh_token` vào Local Storage với khóa `'refresh_token'`. Khi lệnh này được thực hiện, `refresh_token` sẽ được lưu trong Local Storage và có thể được truy xuất sau này.

- Với hàm này, bạn có thể gọi `setRefreshTokenToLS('some_refresh_token_value')` để lưu giá trị của `refresh_token` vào Local Storage.

---

```jsx
export const clearLS = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('profile')
  const clearLSEvent = new Event('clearLS')
  LocalStorageEventTarget.dispatchEvent(clearLSEvent)
}
```

- Đoạn mã này định nghĩa hàm `clearLS` để xóa dữ liệu trong Local Storage và kích hoạt sự kiện `clearLS`.

- `export const clearLS`: Đây là cách xuất hàm `clearLS` để có thể sử dụng nó ở bất kỳ đoạn mã nào muốn import nó.

- `() => { ... }`: Đây là khai báo hàm không có tham số. Hàm này thực hiện một loạt hành động.

- `localStorage.removeItem('access_token')`: Lệnh này xóa giá trị có khóa `'access_token'` khỏi Local Storage.

- `localStorage.removeItem('refresh_token')`: Lệnh này xóa giá trị có khóa `'refresh_token'` khỏi Local Storage.

- `localStorage.removeItem('profile')`: Lệnh này xóa giá trị có khóa `'profile'` khỏi Local Storage.

- `const clearLSEvent = new Event('clearLS')`: Tạo một sự kiện `clearLS` bằng cách tạo một đối tượng `Event` với tên sự kiện là `'clearLS'`.

- `LocalStorageEventTarget.dispatchEvent(clearLSEvent)`: Kích hoạt sự kiện `clearLS` bằng cách sử dụng đối tượng `LocalStorageEventTarget` (được tạo ra trước đó) và gọi phương thức `dispatchEvent`. Khi sự kiện `clearLS` được kích hoạt, các phần khác của ứng dụng có thể lắng nghe sự kiện này và thực hiện các hành động tương ứng khi dữ liệu trong Local Storage được xóa.

- Với hàm này, bạn có thể gọi `clearLS()` để xóa dữ liệu trong Local Storage và thông báo cho các phần khác của ứng dụng về việc xóa dữ liệu này thông qua sự kiện `clearLS`.

---

```jsx
export const getAccessTokenFromLS = () => localStorage.getItem('access_token') || ''
```

- Đoạn mã này định nghĩa hàm `getAccessTokenFromLS` để truy xuất giá trị của `access_token` từ Local Storage.

- `export const getAccessTokenFromLS`: Đây là cách xuất hàm `getAccessTokenFromLS` để có thể sử dụng nó ở bất kỳ đoạn mã nào muốn import nó.

- `() => ...`: Đây là khai báo hàm không có tham số. Hàm này thực hiện một hành động và trả về một giá trị.

- `localStorage.getItem('access_token')`: Đây là lệnh sử dụng API của Local Storage để truy xuất giá trị của `access_token` từ Local Storage với khóa `'access_token'`. Nếu `access_token` không tồn tại trong Local Storage, phương thức `getItem` sẽ trả về `null`.

- `|| ''`: Đây là toán tử `||` (hoặc) trong JavaScript. Nếu giá trị từ `localStorage.getItem('access_token')` là `null` hoặc không tồn tại, thì biểu thức này sẽ trả về giá trị rỗng `''`.

- Với hàm này, bạn có thể gọi `getAccessTokenFromLS()` để truy xuất giá trị của `access_token` từ Local Storage. Nếu `access_token` không tồn tại, hàm này sẽ trả về giá trị rỗng `''`.

---

```jsx
export const getRefreshTokenFromLS = () => localStorage.getItem('refresh_token') || ''
```

- Đoạn mã này định nghĩa hàm `getRefreshTokenFromLS` để truy xuất giá trị của `refresh_token` từ Local Storage.

- `export const getRefreshTokenFromLS`: Đây là cách xuất hàm `getRefreshTokenFromLS` để có thể sử dụng nó ở bất kỳ đoạn mã nào muốn import nó.

- `() => ...`: Đây là khai báo hàm không có tham số. Hàm này thực hiện một hành động và trả về một giá trị.

- `localStorage.getItem('refresh_token')`: Đây là lệnh sử dụng API của Local Storage để truy xuất giá trị của refresh_token từ Local Storage với khóa 'refresh_token'. Nếu refresh_token không tồn tại trong Local Storage, phương thức getItem sẽ trả về null.

- `|| ''`: Đây là toán tử || (hoặc) trong JavaScript. Nếu giá trị từ `localStorage.getItem('refresh_token')` là `null` hoặc không tồn tại, thì biểu thức này sẽ trả về giá trị rỗng `''`.

- Với hàm này, bạn có thể gọi `getRefreshTokenFromLS()` để truy xuất giá trị của `refresh_token` từ Local Storage. Nếu `refresh_token` không tồn tại, hàm này sẽ trả về giá trị rỗng `''`.

---

```jsx
export const getProfileFromLS = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}
```

- Đoạn mã này định nghĩa hàm `getProfileFromLS` để truy xuất thông tin hồ sơ người dùng từ Local Storage.

- `export const getProfileFromLS`: Đây là cách xuất hàm `getProfileFromLS` để có thể sử dụng nó ở bất kỳ đoạn mã nào muốn import nó.

- `() => ...`: Đây là khai báo hàm không có tham số. Hàm này thực hiện một hành động và trả về kết quả.

- `const result = localStorage.getItem('profile')`: Lệnh này truy xuất giá trị có khóa `'profile'` từ Local Storage và gán vào biến `result`.

- `return result ? JSON.parse(result) : null;`: Đây là câu lệnh trả về kết quả của hàm.

- `result ? JSON.parse(result) : null`: Đoạn này kiểm tra xem biến `result` có giá trị hay không. Nếu `result` có giá trị, tức là dữ liệu hồ sơ đã lưu trong Local Storage, hàm sẽ sử dụng JSON.parse``để chuyển chuỗi JSON (được lưu trong Local Storage) thành một đối tượng JavaScript. Nếu`result`không có giá trị, tức là không có dữ liệu hồ sơ, hàm sẽ trả về`null`.

- Với hàm này, bạn có thể gọi `getProfileFromLS()` để truy xuất thông tin hồ sơ người dùng từ Local Storage. Nếu hồ sơ tồn tại, hàm sẽ trả về một đối tượng hồ sơ. Nếu không có hồ sơ, hàm sẽ trả về `null`.

---

```jsx
export const setProfileToLS = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
```

- Đoạn mã này định nghĩa hàm `setProfileToLS` để lưu thông tin hồ sơ người dùng vào Local Storage.

- `export const setProfileToLS`: Đây là cách xuất hàm `setProfileToLS` để có thể sử dụng nó ở bất kỳ đoạn mã nào muốn import nó.

- `(profile: User) => ...`: Đây là khai báo hàm với một tham số `profile` kiểu `User`. Tham số này chứa thông tin hồ sơ người dùng mà bạn muốn lưu vào Local Storage.

- `localStorage.setItem('profile', JSON.stringify(profile))`: Lệnh này lưu thông tin hồ sơ người dùng vào Local Storage.

- `'profile'`: Đây là khóa được sử dụng để xác định nơi lưu trữ thông tin hồ sơ trong Local Storage.

- `JSON.stringify(profile)`: Đoạn này chuyển đối tượng profile thành một chuỗi JSON để có thể lưu nó vào Local Storage.

- Với hàm này, bạn có thể gọi `setProfileToLS(profile)` để lưu thông tin hồ sơ người dùng vào Local Storage. Thông tin này sau đó có thể được truy xuất bằng cách gọi hàm `getProfileFromLS()`.

---
