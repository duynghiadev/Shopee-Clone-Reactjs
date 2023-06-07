## Giải thích code chi tiết:

✅✅ Đoạn code 1: ✅✅

```jsx
import { AnyAction, isRejectedWithValue, Middleware, isRejected, MiddlewareAPI } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
```

- Đoạn code trên import các biểu thức và modules từ Redux Toolkit và React Toastify để xử lý lỗi trong middleware của Redux.

1. `AnyAction`: Đây là một kiểu dữ liệu trong Redux Toolkit để đại diện cho mọi loại action. Nó được sử dụng trong middleware để xác định kiểu dữ liệu của action đang được xử lý.

2. `isRejectedWithValue`: Đây là một hàm kiểm tra, được cung cấp bởi Redux Toolkit để kiểm tra xem một action có phải là một action bị từ chối (rejected) và có giá trị được trả về hay không. Nếu action thoả mãn điều kiện này, nó có thể được sử dụng để xử lý các trường hợp lỗi cụ thể.

3. `isRejected`: Đây là một hàm kiểm tra, được cung cấp bởi Redux Toolkit để kiểm tra xem một action có phải là một action bị từ chối (rejected) hay không. Nếu action này bị từ chối, nó có thể được sử dụng để xử lý các trường hợp lỗi chung.

4. `Middleware`: Đây là một kiểu dữ liệu trong Redux Toolkit để đại diện cho một middleware. Middleware là một công cụ trong Redux cho phép bạn thực hiện các logic trung gian trước khi action đến reducer. Middleware có thể theo dõi, xử lý hoặc thay đổi action trước khi nó đến được reducer.

5. `toast`: Đây là một module từ React Toastify, một thư viện hỗ trợ hiển thị thông báo (toasts) đẹp mắt trong ứng dụng React. Nó được sử dụng để hiển thị các thông báo lỗi trong middleware.

- Đoạn code trên có thể được sử dụng trong một middleware của Redux Toolkit để xử lý các action bị từ chối và hiển thị thông báo lỗi bằng Toastify. Cụ thể, middleware này kiểm tra xem một action có phải là action bị từ chối và có giá trị được trả về hay không, sau đó sử dụng React Toastify để hiển thị thông báo lỗi cho người dùng. Middleware này có thể được đặt vào chuỗi middleware của Redux để thực hiện xử lý lỗi chung trong ứng dụng.

✅✅ Đoạn code 2: ✅✅

```jsx
function isPayloadErrorMessage(payload: unknown): payload is {
  data: {
    error: string
  }
  status: number
} {
  return (
    typeof payload === 'object' &&
    payload !== null &&
    'data' in payload &&
    typeof (payload as any).data?.error === 'string'
  )
}
```

- Đoạn code trên định nghĩa một hàm `isPayloadErrorMessage` dùng để kiểm tra xem một giá trị payload có đúng định dạng của một thông báo lỗi hay không. Hàm này sử dụng TypeScript type predicate để chỉ định kiểu trả về của payload và kiểm tra các thuộc tính bên trong. Dưới đây là giải thích chi tiết về đoạn code:

  - `isPayloadErrorMessage`: Tên của hàm kiểm tra.
  - `payload`: unknown: Tham số đầu vào của hàm, đại diện cho giá trị cần kiểm tra.
  - `payload is { data: { error: string }, status: number }`: Phần này là TypeScript type predicate, nó cho biết rằng nếu hàm trả về `true`, thì `payload` có kiểu dữ liệu là `{ data: { error: string }, status: number }`.

- Tóm lại, hàm `isPayloadErrorMessage` kiểm tra xem giá trị `payload` có phù hợp với một dạng thông báo lỗi hay không. Theo định nghĩa, `payload` phải có các thuộc tính `data` và `status`, trong đó `data` phải là một đối tượng (`object`) có thuộc tính `error` là một chuỗi (`string`), và status là một số (`number`). Nếu giá trị `payload` thoả mãn các điều kiện này, hàm sẽ trả về `true`, ngược lại hàm sẽ trả về `false`.

- 👇👇👇 Và đoạn code này: 👇👇👇

```jsx
{
  return (
    typeof payload === 'object' &&
    payload !== null &&
    'data' in payload &&
    typeof (payload as any).data?.error === 'string'
  )
}
```

- Đoạn code trên là phần thân của hàm `isPayloadErrorMessage`. Dưới đây là giải thích chi tiết về từng phần của mã:

  - `typeof payload === 'object'`: Kiểm tra xem `payload` có kiểu dữ liệu là object hay không.
  - `payload !== null`: Kiểm tra xem `payload` có khác null hay không.
  - `'data' in payload`: Kiểm tra xem thuộc tính `data` có tồn tại trong `payload` hay không.
  - `typeof (payload as any).data?.error === 'string'`: Kiểm tra xem thuộc tính `error` trong `data` có kiểu dữ liệu là string hay không. Đây sử dụng optional chaining (`?.`) để kiểm tra xem `data` có tồn tại và có thuộc tính `error` hay không.

- Kết quả cuối cùng của toàn bộ biểu thức là giá trị logic (true hoặc false) và được sử dụng trong kiểu trả về của hàm `isPayloadErrorMessage`. Nếu tất cả các điều kiện kiểm tra đều đúng, tức là giá trị `payload` phù hợp với định dạng thông báo lỗi, hàm sẽ trả về `true`, ngược lại sẽ trả về `false`.

❌❌ Chú ý: `payload: unknown` là tham số đầu vào có kiểu là unknown hay là payload hiện tại có sẵn trong action là unkonwn ? hãy giải thích ? ❌❌

```jsx
function isPayloadErrorMessage(payload: unknown): payload is {}
```

- Trong hàm `isPayloadErrorMessage`, `payload: unknown` là khai báo tham số đầu vào của hàm. Nó cho biết rằng `payload` là một tham số và kiểu dữ liệu của nó là `unknown`.

- Trong ngữ cảnh này, `unknown` đại diện cho một kiểu dữ liệu không xác định hoặc không biết trước. Điều này có nghĩa là khi hàm `isPayloadErrorMessage` được gọi, bạn có thể truyền bất kỳ giá trị nào cho `payload`, và kiểu dữ liệu của nó có thể là bất kỳ kiểu dữ liệu nào.

- Ví dụ:

```jsx
const action = {
  payload: {
    data: {
      error: 'Something went wrong'
    },
    status: 500
  }
}

const result = isPayloadErrorMessage(action.payload)
```

- Trong ví dụ trên, `payload` trong hàm `isPayloadErrorMessage` sẽ nhận giá trị là `action.payload`, và kiểu dữ liệu của nó là `unknown`. Hàm sẽ kiểm tra xem `payload` có phù hợp với mẫu `{ data: { error: string }, status: number }` không và trả về giá trị tương ứng.

❌❌ Chú ý: Đoạn code trên có sử dụng ép kiểu không ? Giải thích ? ❌❌

- Đoạn mã trên là một kiểu Type Predicate, không phải là kiểu Type Assertion.

- Type Assertion (ép kiểu) trong TypeScript được sử dụng khi bạn có thông tin rõ ràng về kiểu dữ liệu của một giá trị, nhưng TypeScript không thể suy luận được. Bạn sử dụng Type Assertion để khai báo rõ ràng kiểu dữ liệu của giá trị đó.

- Type Predicate (giả định kiểu) trong TypeScript cung cấp thông tin về một biến hoặc một tham số có kiểu dữ liệu cụ thể hay không. Nó giúp TypeScript biết được kiểu dữ liệu của biến hoặc tham số dựa trên một điều kiện kiểm tra. Khi sử dụng Type Predicate, bạn có thể truy cập các thuộc tính và phương thức của kiểu dữ liệu đã được kiểm tra mà không cần ép kiểu thêm.

- Do đó, đoạn mã `isPayloadErrorMessage` là một Type Predicate, không phải là Type Assertion.

✅✅ Đoạn code 3: ✅✅

```jsx
export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action: AnyAction) => {
  // Xử lý lỗi
  // ...

  return next(action)
}
```

-

✅✅ Đoạn code 4: ✅✅

```jsx
if (isRejected(action)) {
  if (action.error.name === 'CustomError') {
    // Những lỗi liên quan đến quá trình thực thi
    toast.warn(action.error.message)
  }
}

if (isRejectedWithValue(action)) {
  if (isPayloadErrorMessage(action.payload)) {
    // Lỗi từ server
    toast.warn(action.payload.data.error)
  }
}
```

✅✅ Đoạn code 5: ✅✅

```jsx
return next(action)
```
