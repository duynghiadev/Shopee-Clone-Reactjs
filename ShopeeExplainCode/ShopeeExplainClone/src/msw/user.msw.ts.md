# Dưới đây là phần giải thích code chi tiết

```jsx
import { rest } from 'msw'
import config from 'src/constants/config'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { access_token_1s } from './auth.msw'
```

- Dòng code này import các thư viện và tệp liên quan

- `import { rest } from 'msw';`: Dòng này import hàm `rest` từ thư viện MSW (Mock Service Worker). `rest` là một hàm giúp định nghĩa các mock request handlers để mô phỏng các endpoint API.

- `import config from 'src/constants/config';`: Dòng này import cấu hình từ tệp `config`. Có thể là nơi chứa các thông tin cấu hình như URL cơ sở cho các API.

- `import HttpStatusCode from 'src/constants/httpStatusCode.enum';`: Dòng này import một enum (liệt kê) `HttpStatusCode` từ tệp `httpStatusCode.enum`. Enum này chứa các mã trạng thái HTTP, giúp bạn định nghĩa các trạng thái cho các phản hồi mock.

- `import { access_token_1s } from './auth.msw';`: Dòng này import biến `access_token_1s` từ tệp `auth.msw`. Biến này có thể chứa một chuỗi token truy cập dùng cho việc kiểm tra trong mock API.

- Tóm lại, những dòng mã này thực hiện việc import các thư viện và tệp cần thiết cho việc định nghĩa các mock request handlers.

---

```jsx
const meRes = {
  message: 'Lấy người dùng thành công',
  data: {
    _id: '636f935e5fdc5f037e6f68d3',
    roles: ['User'],
    email: 'd3@gmail.com',
    createdAt: '2022-11-12T12:36:46.282Z',
    updatedAt: '2022-12-02T07:57:45.069Z',
    avatar: 'a59b50bf-511c-4603-ae90-3ccc63d373a9.png',
    name: 'Dư Thanh Được'
  }
}
```

- Dưới đây là giải thích chi tiết cho đoạn mã:

- `const meRes = { ... }`: Định nghĩa dữ liệu mẫu cho phản hồi API

- `const meRes`: Đây là biến mà bạn định nghĩa để chứa dữ liệu mẫu cho phản hồi của endpoint `/me` khi được gọi.

- `{ ... }`: Dấu ngoặc nhọn này định nghĩa một đối tượng JSON chứa các thuộc tính và giá trị tương ứng.

- `message: 'Lấy người dùng thành công'`: Đây là thông báo thành công mà phản hồi sẽ gửi về, để cho phía client biết rằng request đã được xử lý thành công.

- `data: { ... }`: Đây là một phần dữ liệu chính trong phản hồi. Đối tượng (Object) `data` chứa thông tin chi tiết về người dùng.

- `_id: '636f935e5fdc5f037e6f68d3'`: Mã định danh duy nhất của người dùng.

  - `roles: ['User']`: Mảng chứa vai trò của người dùng, trong trường hợp này là 'User'.

  - `email: 'd3@gmail.com'`: Địa chỉ email của người dùng.

  - `createdAt: '2022-11-12T12:36:46.282Z'`: Ngày và giờ tạo tài khoản.

  - `updatedAt: '2022-12-02T07:57:45.069Z'`: Ngày và giờ cập nhật gần nhất.

  - `avatar: 'a59b50bf-511c-4603-ae90-3ccc63d373a9.png'`: Tên tệp hình ảnh đại diện của người dùng.

  - `name: 'Dư Thanh Được'`: Tên đầy đủ của người dùng.

- Tóm lại, biến `meRes` chứa dữ liệu mẫu mà bạn muốn sử dụng để tạo phản hồi khi endpoint `/me` được gọi. Phần `data` chứa thông tin chi tiết về người dùng và sẽ được bao gồm trong phản hồi khi API trả về dữ liệu người dùng.

---

```jsx
const meRequest = rest.get(`${config.baseUrl}me`, (req, res, ctx) => {
  const access_token = req.headers.get('authorization')
  if (access_token === access_token_1s) {
    return res(
      ctx.status(HttpStatusCode.Unauthorized),
      ctx.json({
        message: 'Lỗi',
        data: {
          message: 'Token hết hạn',
          name: 'EXPIRED_TOKEN'
        }
      })
    )
  }
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(meRes))
})
```

- Dưới đây là giải thích chi tiết cho đoạn mã này:

- `const meRequest = rest.get(...)`: Định nghĩa mock request handler cho endpoint `/me` với phương thức GET

- `const meRequest`: Đây là biến chứa định nghĩa cho mock request handler cho endpoint `/me` với phương thức GET.

- `rest.get(...)`: Hàm này tạo một định nghĩa mock request handler cho phương thức GET của endpoint `/me`.

- `${config.baseUrl}me`: Đây là URL của endpoint `/me` dựa trên cấu hình từ biến `config`. Biến `baseUrl` trong `config` chứa URL cơ sở cho API.

- `(req, res, ctx) => { ... }`: Đây là hàm callback sẽ được gọi khi có request đến endpoint `/me`.

- `const access_token = req.headers.get('authorization')`: Dòng này lấy giá trị của header 'authorization' từ request để kiểm tra token truy cập.

- `if (access_token === access_token_1s) { ... }`: Nếu token truy cập trong request khớp với biến `access_token_1s` (giả sử là một token truy cập hết hạn), thì trả về một phản hồi (response) lỗi Unauthorized với thông báo `Token hết hạn`.

- `ctx.status(HttpStatusCode.Unauthorized)`: Đây là cách để định nghĩa mã trạng thái HTTP cho phản hồi (response), trong trường hợp này là Unauthorized (mã 401).

- `ctx.json({ ... })`: Đây là cách để định nghĩa dữ liệu JSON cho phản hồi (response).

- `return res(...)`: Dòng này trả về phản hồi (response) cho request. Nếu token hết hạn, trả về phản hồi (response) lỗi Unauthorized. Nếu không, trả về phản hồi (response) thành công với dữ liệu từ biến `meRes`.

- `return res(ctx.status(HttpStatusCode.Ok), ctx.json(meRes))`: Nếu token truy cập hợp lệ, trả về phản hồi (response) thành công với dữ liệu mẫu từ biến `meRes`.

- Tóm lại, đoạn mã này tạo một mock request handler cho endpoint `/me` với phương thức GET. Nó kiểm tra token truy cập và trả về phản hồi (response) tương ứng (lỗi Unauthorized hoặc thành công) dựa trên giá trị của token.

---

```jsx
const userRequests = [meRequest]
```

- Dưới đây là giải thích cho đoạn mã:

- `const userRequests = [meRequest]`: Định nghĩa mảng các mock request handlers cho người dùng

- `const userRequests`: Đây là biến chứa mảng các mock request handlers cho các endpoint liên quan đến người dùng.

- `[meRequest]`: Đây là mảng chứa các mock request handler, trong trường hợp này chỉ có một mock request handler `meRequest` cho endpoint `/me`.

- Tóm lại, đoạn mã này định nghĩa một mảng `userRequests` chứa các mock request handlers, trong trường hợp này chỉ có một mock request handler cho endpoint `/me`. Mảng này sẽ được sử dụng để cấu hình các mock API handlers cho MSW (Mock Service Worker).

---

```jsx
export default userRequests
```

- Dưới đây là phần giải thích cho đoạn mã:

- `export default userRequests`: Xuất biến `userRequests` để sử dụng ở những nơi khác

- `export default`: Đây là cách xuất một biến hoặc giá trị để có thể import và sử dụng ở những tệp khác.

- `userRequests`: Đây là biến mà chứa mảng các mock request handlers cho các endpoint liên quan đến người dùng.

- Tóm lại, đoạn mã này sử dụng `export default` để xuất biến `userRequests` ra ngoài, cho phép tệp khác import và sử dụng mảng các mock request handlers để cấu hình các mock API handlers cho MSW (Mock Service Worker).

---
