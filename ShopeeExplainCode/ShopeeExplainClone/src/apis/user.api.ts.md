# Giải thích code chi tiết trong file code user.api.ts

- Đoạn code trên định nghĩa một module JavaScript/TypeScript liên quan đến các yêu cầu API liên quan đến người dùng (user). Hãy chia đoạn code ra từng phần và giải thích từng phần chi tiết:

```jsx
import { User } from 'src/types/user.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'
```

- Import các kiểu dữ liệu và module:

- Dòng đầu tiên import kiểu `User` từ module 'src/types/user.type'. Điều này giả định rằng có một định nghĩa kiểu tên là `User` trong file 'user.type.ts' (hoặc 'user.type.tsx') trong thư mục 'src/types'.

- Dòng thứ hai import kiểu `SuccessResponse` từ module 'src/types/utils.type'. Điều này giả định rằng có một định nghĩa kiểu tên là `SuccessResponse` trong file 'utils.type.ts' (hoặc 'utils.type.tsx') trong thư mục 'src/types'.

- Dòng thứ ba import biến `http` từ module 'src/utils/http'. Điều này giả định rằng có một file hoặc module tên là `'http'` trong thư mục 'src/utils', chịu trách nhiệm thực hiện các yêu cầu HTTP.

---

```jsx
interface BodyUpdateProfile extends Omit<User, '_id' | 'roles' | 'createdAt' | 'updatedAt' | 'email'> {
  password?: string
  newPassword?: string
}
```

- Định nghĩa kiểu dữ liệu `BodyUpdateProfile`:

- Interface `BodyUpdateProfile` mở rộng từ kiểu `User`, nhưng loại bỏ một số thuộc tính như `_id`, `roles`, `createdAt`, `updatedAt`, `email`.

- `password` và `newPassword` là hai thuộc tính tùy chọn trong `BodyUpdateProfile`, có kiểu dữ liệu là string. Chúng được sử dụng để cập nhật thông tin cá nhân của người dùng, bao gồm cả mật khẩu (nếu muốn thay đổi mật khẩu).

---

```jsx
const userApi = {
  getProfile() {
    return http.get < SuccessResponse < User >> 'me'
  },
  updateProfile(body: BodyUpdateProfile) {
    return http.put < SuccessResponse < User >> ('user', body)
  },
  uploadAvatar(body: FormData) {
    return (
      http.post <
      SuccessResponse <
      string >>
        ('user/upload-avatar',
        body,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
    )
  }
}
```

- Đoạn code trên định nghĩa một đối tượng có tên `userApi`, chứa ba phương thức để thực hiện các yêu cầu API liên quan đến người dùng.

1. Phương thức `getProfile() { ... }`:

- Phương thức `getProfile()` không nhận tham số.

- Phương thức này gọi hàm `http.get<SuccessResponse<User>>('me')` để thực hiện yêu cầu GET đến đường dẫn API `'me'`. Yêu cầu này được dùng để lấy thông tin cá nhân của người dùng hiện tại.

- Kết quả trả về của hàm này là một Promise chứa dữ liệu có kiểu `SuccessResponse<User>`, tức là phản hồi từ server sau khi hoàn tất yêu cầu lấy thông tin cá nhân của người dùng.

2. Phương thức `updateProfile(body: BodyUpdateProfile) { ... }`:

- Phương thức `updateProfile()` nhận một tham số `body` có kiểu dữ liệu là `BodyUpdateProfile`. Tham số này là một đối tượng chứa thông tin cá nhân cần cập nhật cho người dùng.

- Phương thức này gọi hàm `http.put<SuccessResponse<User>>('user', body)` để thực hiện yêu cầu PUT đến đường dẫn API `'user'` (thường là đường dẫn để cập nhật thông tin người dùng).

- Kết quả trả về của hàm này là một Promise chứa dữ liệu có kiểu `SuccessResponse<User>`, tức là phản hồi từ server sau khi hoàn tất yêu cầu cập nhật thông tin cá nhân của người dùng.

3. Phương thức `uploadAvatar(body: FormData) { ... }`:

- Phương thức `uploadAvatar()` nhận một tham số `body` có kiểu dữ liệu là `FormData`. Tham số này chứa dữ liệu của hình ảnh (avatar) người dùng cần tải lên server.

- Phương thức này gọi hàm `http.post<SuccessResponse<string>>('user/upload-avatar', body, { ... })` để thực hiện yêu cầu POST đến đường dẫn API `'user/upload-avatar'` (thường là đường dẫn để tải lên avatar của người dùng).

- Trong tham số thứ ba của hàm `http.post`, chúng ta truyền một đối tượng options để chỉ định các thông số của yêu cầu POST, bao gồm cấu hình header `Content-Type` là `'multipart/form-data'`, phù hợp với việc tải lên hình ảnh.

- Kết quả trả về của hàm này là một Promise chứa dữ liệu có kiểu `SuccessResponse<string>`, tức là phản hồi từ server sau khi hoàn tất yêu cầu tải lên hình ảnh avatar của người dùng.

---

## Trên đó là giải thích sơ lược, còn dưới đây là giải thích chi tiết từng đoạn code:

❌❌ Đoạn 1 ❌❌

```jsx
getProfile() {
  return http.get<SuccessResponse<User>>('me')
},
```

- Đây là phương thức `getProfile()` được định nghĩa trong đối tượng `userApi`. Phương thức này được sử dụng để thực hiện yêu cầu API để lấy thông tin cá nhân của người dùng hiện tại.

- Giải thích từng phần chi tiết:

- `getProfile()`: Đây là tên của phương thức, không nhận tham số nào.

- `return http.get<SuccessResponse<User>>('me')`: Đoạn code này là nội dung của phương thức `getProfile()`. Nó sử dụng hàm `http.get()` để thực hiện yêu cầu GET đến đường dẫn API `'me'`.

- `http.get<SuccessResponse<User>>`: Đây là cách sử dụng hàm `http.get()`. Hàm này thực hiện một yêu cầu HTTP GET tới đường dẫn được cung cấp và trả về một Promise chứa dữ liệu phản hồi từ server.

- `'me'`: Đây là đường dẫn API mà phương thức GET sẽ gửi yêu cầu đến. Trong trường hợp này, đường dẫn là `'me'`, đại diện cho thông tin cá nhân của người dùng hiện tại. Thường thì đây là một đường dẫn đặc biệt trong hệ thống, giúp người dùng lấy thông tin về chính họ sau khi đã đăng nhập.

- `<SuccessResponse<User>>`: Đây là một type parameter được sử dụng để chỉ định kiểu dữ liệu của dữ liệu phản hồi từ server. Trong trường hợp này, đây là kiểu `SuccessResponse<User>`, nghĩa là server sẽ trả về một phản hồi thành công (`SuccessResponse`) và dữ liệu chứa trong phản hồi có kiểu `User`.

- Kết quả trả về: Phương thức `getProfile()` trả về một Promise, nghĩa là khi gọi phương thức này, chúng ta cần sử dụng `.then()` và `.catch()` để xử lý kết quả phản hồi từ server. Khi yêu cầu hoàn tất thành công, dữ liệu phản hồi sẽ có kiểu `SuccessResponse<User>` (được chỉ định bởi type parameter), tức là thông tin cá nhân của người dùng hiện tại.

❌❌ Đoạn 2 ❌❌

```jsx
updateProfile(body: BodyUpdateProfile) {
  return http.put<SuccessResponse<User>>('user', body)
},
```

- Đây là phương thức `updateProfile()` được định nghĩa trong đối tượng `userApi`. Phương thức này được sử dụng để thực hiện yêu cầu API để cập nhật thông tin cá nhân của người dùng.

- Giải thích từng phần chi tiết:

- `updateProfile(body: BodyUpdateProfile)`: Đây là tên của phương thức. Phương thức này nhận một tham số là `body` có kiểu dữ liệu là `BodyUpdateProfile`. Tham số này là một đối tượng chứa các thông tin cá nhân cần cập nhật cho người dùng.

- `return http.put<SuccessResponse<User>>('user', body)`: Đoạn code này là nội dung của phương thức `updateProfile()`. Nó sử dụng hàm `http.put()` để thực hiện yêu cầu PUT đến đường dẫn API `'user'`, cùng với dữ liệu cần cập nhật được truyền thông qua tham số `body`.

- `http.put<SuccessResponse<User>>`: Đây là cách sử dụng hàm `http.put()`. Hàm này thực hiện một yêu cầu HTTP PUT tới đường dẫn được cung cấp và trả về một Promise chứa dữ liệu phản hồi từ server.

- `'user'`: Đây là đường dẫn API mà phương thức PUT sẽ gửi yêu cầu đến. Thường thì đây là đường dẫn đặc biệt trong hệ thống, giúp người dùng cập nhật thông tin cá nhân.

- `body`: Đây là đối tượng chứa thông tin cá nhân cần cập nhật cho người dùng. Thông tin này được truyền dưới dạng tham số `body` khi gọi phương thức `updateProfile()`.

- `<SuccessResponse<User>>`: Đây là một type parameter được sử dụng để chỉ định kiểu dữ liệu của dữ liệu phản hồi từ server. Trong trường hợp này, đây là kiểu `SuccessResponse<User>`, nghĩa là server sẽ trả về một phản hồi thành công (`SuccessResponse`) và dữ liệu chứa trong phản hồi có kiểu `User`.

- Kết quả trả về: Phương thức `updateProfile()` trả về một Promise, nghĩa là khi gọi phương thức này, chúng ta cần sử dụng `.then()` và `.catch()` để xử lý kết quả phản hồi từ server. Khi yêu cầu cập nhật hoàn tất thành công, dữ liệu phản hồi sẽ có kiểu `SuccessResponse<User>` (được chỉ định bởi type parameter), tức là thông tin cá nhân đã được cập nhật.

❌❌ Đoạn 3 ❌❌

```jsx
uploadAvatar(body: FormData) {
  return http.post<SuccessResponse<string>>('user/upload-avatar', body, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
```

- Đây là phương thức `uploadAvatar()` được định nghĩa trong đối tượng `userApi`. Phương thức này được sử dụng để tải lên (upload) hình ảnh avatar của người dùng thông qua yêu cầu API POST.

- Giải thích từng phần chi tiết:

- `uploadAvatar(body: FormData)`: Đây là tên của phương thức. Phương thức này nhận một tham số là `body` có kiểu dữ liệu là `FormData`. Tham số này chứa dữ liệu của hình ảnh (avatar) người dùng cần tải lên server.

- `return http.post<SuccessResponse<string>>('user/upload-avatar', body, { ... })`: Đoạn code này là nội dung của phương thức `uploadAvatar()`. Nó sử dụng hàm `http.post()` để thực hiện yêu cầu POST đến đường dẫn API `'user/upload-avatar'`, cùng với dữ liệu hình ảnh và thông tin cấu hình yêu cầu.

- `http.post<SuccessResponse<string>>`: Đây là cách sử dụng hàm `http.post()`. Hàm này thực hiện một yêu cầu HTTP POST tới đường dẫn được cung cấp và trả về một Promise chứa dữ liệu phản hồi từ server.

- `'user/upload-avatar'`: Đây là đường dẫn API mà phương thức POST sẽ gửi yêu cầu đến. Thường thì đây là đường dẫn đặc biệt trong hệ thống, giúp người dùng tải lên hình ảnh avatar.

- `body`: Đây là đối tượng chứa dữ liệu của hình ảnh (avatar) người dùng. Thông tin hình ảnh này được truyền dưới dạng tham số `body` khi gọi phương thức `uploadAvatar()`.

- `{ headers: { 'Content-Type': 'multipart/form-data' } }`: Đây là một đối tượng options được truyền vào hàm `http.post()` để chỉ định các thông số của yêu cầu POST, trong trường hợp này là cấu hình header `Content-Type` là `'multipart/form-data'`. Điều này đảm bảo rằng yêu cầu POST có kiểu dữ liệu `multipart/form-data` phù hợp với việc tải lên hình ảnh.

- Kết quả trả về: Phương thức `uploadAvatar()` trả về một Promise, nghĩa là khi gọi phương thức này, chúng ta cần sử dụng `.then()` và `.catch()` để xử lý kết quả phản hồi từ server. Khi yêu cầu tải lên hoàn tất thành công, dữ liệu phản hồi sẽ có kiểu `SuccessResponse<string>` (được chỉ định bởi type parameter), tức là thông tin về hình ảnh avatar đã được tải lên thành công.

---

```jsx
export default userApi
```

- Dòng code này xuất module `userApi` để có thể sử dụng các phương thức trong đó từ các module khác bằng cách import.

---
