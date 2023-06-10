## Giải thích code chi tiết:

✅✅ Đoạn code 1 ✅✅

```jsx
/**
 * Kiểu ErrorFormObject dành cho trường hợp bao quát
 */
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
```

- Đoạn code trên là việc import một type/interface `FetchBaseQueryError` từ package `@reduxjs/toolkit/query`.

- `FetchBaseQueryError` là một kiểu dữ liệu được định nghĩa sẵn trong Redux toolkit `@reduxjs/toolkit/query` để đại diện cho lỗi trong quá trình thực hiện các truy vấn (queries) sử dụng `fetchBaseQuery`.

- Khi sử dụng `fetchBaseQuery`, nếu có bất kỳ lỗi nào xảy ra trong quá trình gửi yêu cầu HTTP hoặc xử lý kết quả trả về, nó sẽ trả về một đối tượng lỗi thuộc kiểu `FetchBaseQueryError`.

- Việc import `FetchBaseQueryError` cho phép chúng ta sử dụng và kiểm tra các thuộc tính của đối tượng lỗi này, ví dụ như `error.message`, để xử lý và hiển thị thông báo lỗi phù hợp trong ứng dụng của chúng ta.

✅✅ Đoạn code 2 ✅✅

```jsx
interface ErrorFormObject {
  [key: string | number]: string;
}
```

- Interface `ErrorFormObject` định nghĩa một cấu trúc dữ liệu để lưu trữ các thông báo lỗi cho các trường trong một form hoặc bất kỳ đối tượng nào có các thuộc tính động.

- Đối tượng `ErrorFormObject` có thể có nhiều thuộc tính với tên là chuỗi hoặc số. Giá trị của mỗi thuộc tính là một chuỗi, đại diện cho thông báo lỗi tương ứng cho trường hoặc thuộc tính đó.

- Ví dụ, nếu chúng ta có một form với các trường như `username`, `email` và `password`, ta có thể sử dụng `ErrorFormObject` để lưu trữ thông báo lỗi cho mỗi trường. Ví dụ:

```jsx
const errors: ErrorFormObject = {
  username: 'Tên người dùng không hợp lệ',
  email: 'Email không đúng định dạng',
  password: 'Mật khẩu phải có ít nhất 6 ký tự'
}
```

- Trong ví dụ này, `errors` là một đối tượng thuộc kiểu `ErrorFormObject`, với các thuộc tính động là `username`, `email`, `password` và giá trị tương ứng là các thông báo lỗi cho mỗi trường. Interface `ErrorFormObject` giúp chúng ta biểu diễn và quản lý các thông báo lỗi dễ dàng trong một đối tượng.

✅✅ Đoạn code 3 ✅✅

```jsx
interface EntityError {
  status: 422
  data: {
    error: ErrorFormObject
  }
}
```

- Đoạn code trên định nghĩa một interface có tên là `EntityError`. Interface này có hai thuộc tính:

  - `status`: Được định nghĩa với kiểu dữ liệu là 422. Giá trị này thể hiện trạng thái của lỗi, trong trường hợp này là mã trạng thái HTTP 422 (Unprocessable Entity).
  - `data`: Được định nghĩa với kiểu dữ liệu là một đối tượng có thuộc tính `error` có kiểu dữ liệu là `ErrorFormObject`. Thuộc tính `error` này chứa thông tin về lỗi, được mô tả bằng một đối tượng có kiểu dữ liệu là `ErrorFormObject`.

- Với interface này, bạn có thể sử dụng `EntityError` để biểu diễn một lỗi cụ thể trong đối tượng có trạng thái HTTP 422 và chứa thông tin lỗi theo định dạng `ErrorFormObject`.

✅✅ Đoạn code 4 ✅✅

```jsx
/**
 * Phương pháp "type predicate" dùng để thu hẹp kiểu của một biến
 * ✅ Đầu tiên chúng ta sẽ khai báo một function check kiểm tra cấu trúc về mặc logic javascript
 * ✅ Tiếp theo chúng ta thêm `parameterName is Type` làm kiểu return của function thay vì boolean
 * ✅ Khi dùng function kiểu tra kiểu này, ngoài việc kiểm tra về mặc logic cấu trúc, nó còn chuyển kiểu
 *
 * So sánh với phương pháp ép kiểu "Type Assertions" thì ép kiểu chúng giúp chúng ta đúng về mặc Type, chưa chắc về logic
 *
 */

/**
 * Thu hẹp một error có kiểu không xác định về `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === 'object' && error !== null && 'status' in error
}
```

- Hàm `isFetchBaseQueryError` được sử dụng để kiểm tra kiểu dữ liệu của một biến có phải là `FetchBaseQueryError` hay không.

- Đầu tiên, hàm kiểm tra xem biến `error` có phải là một đối tượng (`typeof error === 'object'`) và không phải là giá trị `null` (`error !== null`). Điều này đảm bảo rằng biến `error` là một đối tượng hợp lệ.

- Tiếp theo, hàm kiểm tra xem biến `error` có thuộc tính `status` hay không (`'status' in error`). Nếu có, tức là biến `error` có cấu trúc giống với `FetchBaseQueryError`.

- Nếu tất cả các điều kiện trên đúng, hàm sẽ trả về giá trị `true`, và điều này cho biết rằng biến `error` thỏa mãn kiểu `FetchBaseQueryError`. Nếu không, hàm sẽ trả về giá trị `false`.

- Bằng cách sử dụng hàm `isFetchBaseQueryError`, chúng ta có thể kiểm tra kiểu dữ liệu của một biến và sử dụng các thuộc tính và phương thức của kiểu `FetchBaseQueryError` một cách an toàn, mà không gây ra lỗi kiểu dữ liệu.

✅✅ Đoạn code 5 ✅✅

```jsx
/**
 * Thu hẹp một error có kiểu không xác định về một object với thuộc tính message: string (SerializedError)
 */
export function isErrorWithMessage(error: unknown): error is { message: string } {
  return typeof error === 'object' && error !== null && 'message' in error && typeof (error as any).message === 'string'
}
```

- Hàm `isErrorWithMessage` được sử dụng để kiểm tra xem một biến có thuộc kiểu dữ liệu `{ message: string }` hay không.

- Đầu tiên, hàm kiểm tra xem biến `error` có phải là một đối tượng (`typeof error === 'object'`) và không phải là giá trị `null` (`error !== null`). Điều này đảm bảo rằng biến `error` là một đối tượng hợp lệ.

- Tiếp theo, hàm kiểm tra xem biến `error` có thuộc tính `message` hay không (`'message' in error`). Nếu có, chúng ta tiếp tục kiểm tra xem giá trị của thuộc tính `message` có phải là một chuỗi (`typeof (error as any).message === 'string'`). Điều này đảm bảo rằng thuộc tính `message` là một chuỗi.

- Nếu tất cả các điều kiện trên đúng, hàm sẽ trả về giá trị `true`, và điều này cho biết rằng biến `error` thỏa mãn kiểu `{ message: string }`. Nếu không, hàm sẽ trả về giá trị `false`.

- Bằng cách sử dụng hàm `isErrorWithMessage`, chúng ta có thể kiểm tra xem một biến có thuộc kiểu `{ message: string }` hay không. Nếu biến thỏa mãn kiểu này, chúng ta có thể truy cập thuộc tính `message` một cách an toàn và sử dụng giá trị của nó mà không gây ra lỗi kiểu dữ liệu.

✅✅ Đoạn code 6 ✅✅

```jsx
/**
 * Thu hẹp một error có kiểu không xác định về lỗi liên quan đến POST, PUT không đúng field (EntityError)
 */
export function isEntityError(error: unknown): error is EntityError {
  return (
    isFetchBaseQueryError(error) &&
    error.status === 422 &&
    typeof error.data === 'object' &&
    error.data !== null &&
    !(error.data instanceof Array)
  )
}
```

- Đoạn code này định nghĩa một hàm `isEntityError`, mục đích là kiểm tra xem một biến có thuộc kiểu `EntityError` hay không.

- Để làm điều này, hàm sử dụng một số điều kiện để kiểm tra tính hợp lệ của biến `error` theo kiểu `EntityError`:

  - Đầu tiên, chúng ta kiểm tra xem biến `error` có thuộc kiểu `FetchBaseQueryError` không bằng cách gọi hàm `isFetchBaseQueryError(error)`. Điều này đảm bảo rằng biến `error` là một lỗi phản hồi từ một truy vấn.
  - Tiếp theo, chúng ta kiểm tra xem thuộc tính `status` của `error` có giá trị là 422 hay không (`error.status === 422`). Điều này đảm bảo rằng mã trạng thái của lỗi phản hồi là 422, như đã được định nghĩa trong kiểu `EntityError`.
  - Sau đó, chúng ta kiểm tra xem thuộc tính `data` của `error` có thuộc kiểu đối tượng (`typeof error.data === 'object'`) và không phải là giá trị `null` (`error.data !== null`). Điều này đảm bảo rằng thuộc tính `data` của lỗi phản hồi là một đối tượng hợp lệ.
  - Cuối cùng, chúng ta kiểm tra xem thuộc tính `data` không phải là một mảng (`!(error.data instanceof Array)`). Điều này đảm bảo rằng thuộc tính `data` không phải là một mảng, mà là một đối tượng hợp lệ.

- Nếu tất cả các điều kiện trên đều đúng, hàm `isEntityError` sẽ trả về giá trị `true`, cho biết rằng biến `error` thỏa mãn kiểu `EntityError`. Nếu không, hàm sẽ trả về giá trị `false`.

- Bằng cách sử dụng hàm `isEntityError`, chúng ta có thể kiểm tra một biến xem nó có phải là một lỗi phản hồi từ truy vấn và có đáp ứng các yêu cầu và cấu trúc của kiểu `EntityError` hay không.

✅✅ Đoạn code 7 ✅✅

```jsx
export class CustomError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'CustomError'
  }
}
```

- Trong đoạn code trên, chúng ta định nghĩa một lớp `CustomError` là một lớp con của lớp `Error` có sẵn trong JavaScript. Lớp `CustomError` được sử dụng để tạo ra các đối tượng lỗi tùy chỉnh với thông báo lỗi cụ thể.

- Để tạo một đối tượng lỗi `CustomError`, chúng ta gọi hàm khởi tạo của lớp `CustomError` và truyền vào thông báo lỗi dưới dạng đối số `message`. Trong hàm khởi tạo, chúng ta gọi phương thức `super(message)` để gọi lại hàm khởi tạo của lớp cha `Error` và truyền vào thông báo lỗi. Điều này đảm bảo rằng các tính năng và thuộc tính của lớp cha `Error` được kế thừa và được sử dụng trong lớp `CustomError`.

- Sau đó, chúng ta đặt tên cho đối tượng lỗi bằng cách gán giá trị `'CustomError'` cho thuộc tính `name` của đối tượng lỗi. Điều này giúp phân biệt lỗi tùy chỉnh của chúng ta với các loại lỗi khác và có thể hữu ích trong việc xử lý và xác định loại lỗi.

- Với lớp `CustomError`, chúng ta có thể tạo các đối tượng lỗi tùy chỉnh và sử dụng chúng để xử lý các tình huống lỗi cụ thể trong ứng dụng của mình. Khi một đối tượng lỗi `CustomError` được ném ra, chúng ta có thể bắt và xử lý nó bằng cách sử dụng khối `try-catch`, và truy cập thông tin lỗi như thông báo (`message`) và tên (`name`) của đối tượng lỗi đó.

- Ví dụ sử dụng lớp `CustomError`:

```jsx
try {
  throw new CustomError('This is a custom error')
} catch (error) {
  console.log(error instanceof CustomError) // true
  console.log(error.message) // 'This is a custom error'
  console.log(error.name) // 'CustomError'
}
```

- Trong ví dụ trên, chúng ta tạo một đối tượng lỗi `CustomError` bằng cách sử dụng từ khóa `throw` và ghi nhận nó trong khối `catch`. Chúng ta kiểm tra xem đối tượng lỗi có phải là một `instance` của lớp `CustomError` không, và sau đó truy xuất thông tin lỗi như thông báo (`message`) và tên (`name`) của nó.
