## Đây là phần giải thích code:

👉 Đoạn 1:

```jsx
import { deleteStudent, getStudent, getStudents } from 'apis/students.api'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useQueryString } from 'utils/utils'
import classNames from 'classnames'
import { toast } from 'react-toastify'
```

- Đoạn code trên sử dụng các thư viện và module như `react-query`, `react-router-dom`, `classnames`, và `react-toastify` để thực hiện các tác vụ như truy vấn dữ liệu từ máy chủ, điều hướng trang, quản lý trạng thái dữ liệu, và hiển thị thông báo.

- `deleteStudent`, `getStudent`, và `getStudents` là các hàm được import từ module `apis/students.api` để giao tiếp với API và lấy dữ liệu về sinh viên.
- `Fragment` là một thành phần của React được sử dụng để nhóm các phần tử JSX mà không cần bọc chúng trong một thẻ gốc nào.
- `Link` là một thành phần của React Router, dùng để tạo các liên kết trong ứng dụng để chuyển đổi giữa các trang.
- `useMutation`, `useQuery`, và `useQueryClient` là các hook được cung cấp bởi thư viện `react-query`, dùng để quản lý và thực hiện các truy vấn và thay đổi dữ liệu từ máy chủ.
- `useQueryString` là một custom hook để trích xuất thông tin từ query string trong URL.
- `classNames` là một công cụ tiện ích để tạo các class name dựa trên điều kiện hoặc thuộc tính đầu vào. Nó giúp xây dựng các class name động và linh hoạt cho các phần tử JSX.
- `toast` cung cấp các phương thức để hiển thị các thông báo (toast) trong ứng dụng. Nó được sử dụng để cung cấp thông báo cho người dùng trong các tình huống cụ thể.

- ✅ Các thư viện và module này đóng vai trò quan trọng trong việc xây dựng và mở rộng các tính năng của ứng dụng React.

---

## Hãy giải thích những import này là gì: module, component, utility trong reactjs ?

- Trong ReactJS, các thuật ngữ "module", "component" và "utility" được sử dụng để miêu tả các khái niệm và phần tử khác nhau trong quá trình phát triển ứng dụng web. Dưới đây là giải thích cho từng thuật ngữ này:

1. `Module`: Trong ngữ cảnh ReactJS, "module" thường được sử dụng để chỉ các tệp tin JavaScript độc lập hoặc nhóm các thành phần có liên quan vào một gói. Một module có thể chứa một hoặc nhiều thành phần, các hàm tiện ích và các khối mã JavaScript khác. Việc sử dụng module giúp tổ chức mã nguồn, tăng tính tổ chức và khả năng tái sử dụng.

2. `Component`: Trong ReactJS, "component" là một khái niệm quan trọng và cơ bản. Một component đại diện cho một phần giao diện người dùng (UI) độc lập và tái sử dụng được. Component trong React được xây dựng bằng cách sử dụng các khối mã JavaScript, có thể chứa HTML, CSS và logic xử lý để hiển thị và quản lý các phần tử giao diện người dùng. Các component có thể nhúng vào nhau để tạo thành cấu trúc giao diện phức tạp.

3. `Utility`: "Utility" trong ReactJS thường ám chỉ đến các hàm tiện ích (utility functions) hoặc các công cụ hỗ trợ trong quá trình phát triển ứng dụng. Các hàm tiện ích là những hàm JavaScript có chức năng cụ thể, thường được viết để thực hiện một nhiệm vụ nhỏ mà có thể được sử dụng lại ở nhiều nơi trong mã nguồn. Các hàm tiện ích có thể giúp xử lý dữ liệu, thao tác với chuỗi, tính toán hoặc cung cấp các chức năng hỗ trợ khác cho các component và module trong ứng dụng React.

- ✅ Những thuật ngữ này không chỉ áp dụng trong ReactJS mà còn được sử dụng rộng rãi trong phát triển ứng dụng web nói chung.

- Trong đoạn code trên, phần code của `utility` được trích dẫn từ file `utils/utils`.

## Vì sao gọi đoạn code này 👇 là utility ? Hãy giải thích lý do ?

- Đoạn code này được trích từ file `utils.ts`:

```jsx
import axios, { AxiosError } from 'axios'
import { useSearchParams } from 'react-router-dom'

export const useQueryString = () => {
  const [searchParams] = useSearchParams()
  const searchParamsObject = Object.fromEntries([...searchParams])
  return searchParamsObject
}

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}
```

- Đoạn mã trên được gọi là `utility` vì nó cung cấp các chức năng hữu ích và tái sử dụng được trong nhiều phần của ứng dụng. Đoạn code này chứa hai hàm: `useQueryString` và `isAxiosError`.

- `useQueryString`: Đây là một custom hook dùng để trích xuất các tham số truy vấn từ URL trong React Router. Nó sử dụng `useSearchParams` để lấy giá trị của tham số truy vấn và chuyển đổi nó thành một object.

- `isAxiosError`: Đây là một hàm kiểm tra kiểu dữ liệu sử dụng generic type. Nó kiểm tra xem một đối tượng có phải là `AxiosError` hay không. `AxiosError` là một lỗi đặc biệt được trả về bởi thư viện Axios khi gửi các yêu cầu HTTP không thành công.

- Cả hai hàm này đều cung cấp các chức năng hữu ích và có thể được sử dụng lại trong nhiều phần của ứng dụng, vì vậy chúng được gọi là `utility`.

👉 Đoạn 2:

```jsx
const LIMIT = 10
```

- ❌❌ Đây là lý thuyết: ❌❌

- Đoạn code trên định nghĩa một hằng số `LIMIT` có giá trị là 10. Hằng số này được sử dụng để giới hạn số lượng phần tử hoặc kết quả trong một phạm vi nào đó.

- Việc sử dụng hằng số `LIMIT` giúp tăng tính linh hoạt và dễ dàng thay đổi giá trị giới hạn nếu cần thiết. Bằng cách sử dụng hằng số này, ta có thể thay đổi giá trị `LIMIT` một lần duy nhất tại nơi khai báo, và tất cả các vị trí sử dụng `LIMIT` sẽ được áp dụng giá trị mới mà không cần chỉnh sửa từng địa điểm một.

- Ví dụ, trong trường hợp này, giá trị `LIMIT` được sử dụng để giới hạn số lượng phần tử hoặc kết quả trong một truy vấn hoặc chức năng nào đó. Nếu muốn thay đổi giới hạn này, ta chỉ cần thay đổi giá trị của `LIMIT` một lần duy nhất tại khai báo, và tất cả các vị trí sử dụng `LIMIT` sẽ áp dụng giá trị mới mà không cần chỉnh sửa từng chỗ sử dụng.

- ✅✅ Đây là thực tế trong dự án của mình: ✅✅

- Nếu `LIMIT` là hằng số được sử dụng để giới hạn số lượng dữ liệu trong một trang, và số lượng trang được tự động tính toán dựa trên số lượng dữ liệu.

- Khi có một danh sách dữ liệu lớn và muốn hiển thị chúng theo từng trang, ta có thể sử dụng giá trị `LIMIT` để xác định số lượng dữ liệu hiển thị trên mỗi trang. Ví dụ, nếu `LIMIT` được đặt là 10, thì mỗi trang sẽ hiển thị tối đa 10 phần tử.

- Số lượng trang sẽ được tính toán dựa trên tổng số lượng dữ liệu và `LIMIT`. Ví dụ, nếu có tổng cộng 50 phần tử dữ liệu và `LIMIT` được đặt là 10, thì sẽ có 5 trang để hiển thị tất cả dữ liệu. Điều này giúp người dùng dễ dàng điều hướng và xem các phần tử dữ liệu theo trang.

---

👉 Đoạn 3:

```jsx
export default function Students() {
  // Các đoạn mã khác trong component này
}
```

- Trong đoạn mã trên, chúng ta khai báo một React functional component có tên là `Students`. Đây là một phần của ứng dụng React và nhiệm vụ của nó là hiển thị danh sách các sinh viên.

- Trong component này, chúng ta có thể thêm các đoạn mã khác để xử lý các tác vụ như gọi API, xử lý dữ liệu và điều khiển giao diện. Tuy nhiên, trong phần được cung cấp, chúng ta chỉ có đoạn mã mô tả component chính mà không có các phần tử con hoặc các logic cụ thể.

- Component `Students` có thể nhận các thông số (props) từ component cha của nó thông qua JSX khi được sử dụng. Tuy nhiên, trong đoạn mã trên, không có props được định nghĩa nên component này không sử dụng bất kỳ thông số nào và chỉ tập trung vào việc hiển thị giao diện.

- Các đoạn mã bên trong component này sẽ thực hiện các tác vụ cần thiết để hiển thị danh sách sinh viên. Điều này có thể bao gồm lấy dữ liệu từ API, xử lý và định dạng dữ liệu, sau đó hiển thị danh sách các sinh viên trên giao diện.

- ✅ Component `Students` có thể được sử dụng trong cấu trúc giao diện tổng quát của ứng dụng React hoặc có thể được kết hợp với các thành phần khác để tạo thành trang web hoàn chỉnh.

---

👉 Đoạn 4:

```jsx
const queryClient = useQueryClient()
```

- Trong đoạn mã trên, chúng ta sử dụng hook `useQueryClient` từ thư viện `react-query` để lấy một instance của `queryClient`.

- `queryClient` là một đối tượng quan trọng trong React Query, nó đại diện cho một phiên làm việc với các truy vấn dữ liệu. Với `queryClient`, chúng ta có thể thực hiện các tác vụ như lấy dữ liệu từ cache, gửi các truy vấn mới đến API, cập nhật dữ liệu trong cache, hoặc xóa dữ liệu khỏi cache.

- Bằng cách sử dụng `useQueryClient`, chúng ta có thể truy cập `queryClient` từ bất kỳ thành phần nào trong ứng dụng để thực hiện các hoạt động liên quan đến quản lý dữ liệu và truy vấn.

- Trong đoạn mã trên, việc sử dụng `useQueryClient` có thể được áp dụng để lấy `queryClient` trong phạm vi của functional component hiện tại. Điều này cho phép chúng ta sử dụng `queryClient` để thực hiện các tác vụ quan trọng liên quan đến dữ liệu trong React Query như khởi động truy vấn, gửi mutations, hoặc làm mới dữ liệu từ cache.

- ✅ Trong đoạn mã trên, chúng ta gán giá trị trả về của `useQueryClient` vào biến `queryClient`. Điều này cho phép chúng ta sử dụng `queryClient` để thực hiện các hoạt động liên quan đến dữ liệu trong phạm vi của hàm `Students()`.

---

👉 Đoạn 5:

```jsx
const queryString: {
  page?: string
} = useQueryString()

const page = Number(queryString.page) || 1
```

- Trong đoạn mã trên, `useQueryString()` là một custom hook được sử dụng để lấy giá trị của tham số truy vấn (query parameters) từ URL. Kết quả trả về của hook này là một đối tượng `queryString` chứa các tham số truy vấn được trích xuất từ URL.

- Đoạn mã `const queryString: { page?: string } = useQueryString()` khai báo một biến `queryString` và gán giá trị trả về của `useQueryString()` cho biến này. Kiểu dữ liệu của `queryString` được định nghĩa là `{ page?: string }`, có nghĩa là `queryString` là một đối tượng có thuộc tính `page` kiểu `string` hoặc có thể không có thuộc tính `page` (được đánh dấu với `?` -> optional).

- Tiếp theo, đoạn mã `const page = Number(queryString.page) || 1` gán giá trị của thuộc tính `page` trong `queryString` cho biến `page`. Bằng cách sử dụng `Number()` để chuyển đổi giá trị `queryString.page` từ kiểu `string` sang kiểu `number`. Nếu giá trị không hợp lệ (không phải số), hoặc thuộc tính `page` không tồn tại trong `queryString`, giá trị của `page` sẽ được gán mặc định là 1.

---

## ❌❌ Bổ sung: ❌❌

```jsx
const queryString: {
  page?: string
} = useQueryString()
```

- ❓ Tại sao chỗ này `const queryString:` không phải là dấu `=` mà là dấu `:` làm như vậy có nghĩa là gì ?

- 👉 Trong đoạn mã bạn đã cung cấp, `const queryString` không phải là một phần của JavaScript cơ bản, mà có vẻ như là một đoạn mã TypeScript. TypeScript là một ngôn ngữ phụ thuộc vào JavaScript, nhưng cung cấp thêm kiểu dữ liệu tĩnh và các tính năng mở rộng khác.

- 👉 Trong TypeScript, cú pháp `const queryString: { page?: string }` được sử dụng để khai báo một biến có tên là `queryString` với kiểu dữ liệu là một đối tượng (`object`). Trong đối tượng đó, có một thuộc tính có tên là `page`, và thuộc tính này có kiểu dữ liệu là chuỗi (`string`). Ký tự dấu `:` được sử dụng trong TypeScript để chỉ định kiểu dữ liệu cho biến hoặc thuộc tính.

- 👉 Nếu bạn đã chắc chắn rằng đoạn mã của bạn là JavaScript thuần túy, không phải TypeScript, thì việc sử dụng `:` thay vì `=` có thể là một lỗi hoặc dấu hiệu của một vấn đề khác trong mã của bạn.

- ✅ Giải thích dễ hiểu hơn:

- Trong đoạn mã JavaScript của bạn, chỗ `const queryString: { page?: string } = useQueryString()`, ký tự `":"` được sử dụng để chỉ định kiểu dữ liệu của biến `queryString`. Đây là cú pháp của TypeScript, một ngôn ngữ phụ thuộc vào JavaScript được sử dụng để kiểm tra kiểu dữ liệu trong quá trình phát triển ứng dụng JavaScript lớn và phức tạp hơn.

- Trong TypeScript, chúng ta có thể chỉ định kiểu dữ liệu của biến hoặc hằng số bằng cách sử dụng `":"` sau tên biến, theo sau là kiểu dữ liệu được chỉ định. Trong trường hợp này, `{ page?: string }` là kiểu dữ liệu được chỉ định cho biến `queryString`. Ký tự `":"` sau const `queryString` cho phép chúng ta chỉ định kiểu dữ liệu của biến `queryString` mà biến này sẽ có, trong trường hợp này là một đối tượng có thuộc tính `"page"` có kiểu dữ liệu là string, và thuộc tính này có thể có hoặc không (optional).

- Tóm lại, `":"` trong câu lệnh `const queryString: { page?: string } = useQueryString()` là cú pháp của TypeScript để chỉ định kiểu dữ liệu của biến `queryString` và không phải là dấu `"="` để gán giá trị.

---

👉 Đoạn 6:

```jsx
const studentsQuery = useQuery({
  queryKey: ['students', page],
  queryFn: () => {
    const controller = new AbortController()

    setTimeout(() => {
      controller.abort()
    }, 5000)
    return getStudents(page, LIMIT, controller.signal)
  },
  keepPreviousData: true,
  retry: 0
})
```

- Trong đoạn mã trên, `useQuery` là một hook được cung cấp bởi thư viện React Query. Nó được sử dụng để thực hiện một truy vấn dữ liệu từ server.

  - `queryKey` là một mảng chứa các giá trị dùng để xác định truy vấn hiện tại. Trong trường hợp này, `['students', page]` được sử dụng làm khóa truy vấn, với `'students'` là tên truy vấn và `page` là giá trị của trang hiện tại.

  - `queryFn` là một hàm thực hiện truy vấn dữ liệu thực tế. Trong đoạn mã này, hàm này được xác định dưới dạng hàm vô danh (anonymous function) và được gọi để lấy danh sách sinh viên từ server bằng cách sử dụng hàm `getStudents(page, LIMIT, controller.signal)`. Đồng thời, một `AbortController` cũng được tạo và sử dụng để hủy truy vấn sau 5 giây.

  - `keepPreviousData` là một cờ (boolean) cho phép giữ lại dữ liệu trước đó khi thực hiện truy vấn mới. Trong trường hợp này, giá trị được đặt là `true`, cho phép giữ lại dữ liệu trước đó khi chuyển trang.

  - `retry` là số lần thử lại (retry) truy vấn khi gặp lỗi. Trong trường hợp này, giá trị được đặt là 0, tức là không thử lại truy vấn nếu gặp lỗi.

- Kết quả của hook `useQuery` là một đối tượng `studentsQuery` chứa các thông tin về trạng thái của truy vấn, kết quả truy vấn, và các hàm liên quan khác để tương tác với quá trình truy vấn dữ liệu.

## ❌❌ Bổ sung: ❌❌

- Đây là cách giải thích dễ hiểu hơn:

- Trong đoạn mã trên, `useQuery` là một hook của thư viện React Query được sử dụng để thực hiện một truy vấn dữ liệu từ server.

  - `queryKey` là một mảng chứa các giá trị dùng để xác định truy vấn hiện tại. Trong trường hợp này, truy vấn có tên `'students'` và trang hiện tại `page` được sử dụng làm khóa truy vấn.

  - `queryFn` là một hàm thực hiện truy vấn dữ liệu. Trong đoạn mã này, hàm này được định nghĩa để lấy danh sách sinh viên từ server bằng cách gọi hàm `getStudents(page, LIMIT, controller.signal)`. Hàm này cũng tạo ra một `AbortController` để hủy truy vấn sau 5 giây.

  - `keepPreviousData` là một cờ (boolean) cho phép giữ lại dữ liệu trước đó khi thực hiện truy vấn mới. Trong trường hợp này được đặt là `true`, cho nên dữ liệu trước đó sẽ được giữ lại khi chuyển trang.

  - `retry` là số lần thử lại truy vấn khi gặp lỗi. Trong đoạn mã này, không có sự thử lại nào được thực hiện nếu truy vấn gặp lỗi.

- Kết quả trả về từ hook `useQuery` là một đối tượng (object) `studentsQuery` chứa thông tin về trạng thái của truy vấn (`loading`, `error`, `success`), kết quả truy vấn, và các hàm liên quan để tương tác với quá trình truy vấn dữ liệu.

---

👉 Đoạn 7:

```jsx
const deleteStudentMutation = useMutation({
  mutationFn: (id: number | string) => deleteStudent(id),
  onSuccess: (_, id) => {
    toast.success(`Xóa thành công student với id là ${id}`)
    queryClient.invalidateQueries({
      queryKey: ['students', page],
      exact: true
    })
  }
})
```

- Trong đoạn mã trên, `useMutation` là một hook được sử dụng để thực hiện một mutation (thay đổi dữ liệu) và quản lý trạng thái của quá trình mutation.

- Dòng code `mutationFn: (id: number | string) => deleteStudent(id)` khai báo một hàm `mutationFn` là hàm thực hiện mutation. Trong trường hợp này, hàm này nhận đầu vào là một giá trị `id` có kiểu dữ liệu là `number` hoặc `string`. Hàm này gọi hàm `deleteStudent(id)` để thực hiện việc xóa sinh viên với `id` tương ứng.

  - Tóm lại: `mutationFn` là một hàm thực hiện mutation, trong trường hợp này là hàm `deleteStudent(id)` để xóa một sinh viên với `id` được truyền vào.

- `onSuccess` là một hàm callback được gọi khi mutation hoàn thành thành công. Trong đoạn mã này, hàm này được sử dụng để hiển thị một thông báo thành công bằng `toast.success` và sau đó gọi `queryClient.invalidateQueries` để làm mới truy vấn danh sách sinh viên. Điều này đảm bảo rằng sau khi xóa một sinh viên, danh sách sinh viên được cập nhật tức thì.

  - Dòng code này khai báo một hàm `onSuccess` được gọi khi mutation thành công. Hàm này nhận hai đối số là `_` và `id`. Thường thì `_` được sử dụng để bỏ qua đối số không cần thiết.

  - Trong phần thực thi của hàm `onSuccess`, có hai hoạt động được thực hiện:

  - Hiển thị một thông báo thành công sử dụng `toast.success()`. Thông báo này sẽ thông báo cho người dùng rằng sinh viên có `id` tương ứng đã được xóa thành công.

  - Gọi `queryClient.invalidateQueries()` để gửi yêu cầu làm mới các truy vấn liên quan đến danh sách sinh viên. Trong trường hợp này, truy vấn có `queryKey` là `['students', page]` (đại diện cho danh sách sinh viên trên trang hiện tại). Yêu cầu làm mới này giúp đảm bảo rằng sau khi xóa sinh viên thành công, danh sách sinh viên sẽ được cập nhật và hiển thị thông tin mới nhất.

- ✅ Kết quả trả về từ hook `useMutation` là một đối tượng `deleteStudentMutation` chứa các thông tin và hàm liên quan đến quá trình mutation. Các trạng thái như `isLoading` (đang tải), `isError` (gặp lỗi), `isSuccess` (hoàn thành thành công) được cung cấp để quản lý trạng thái của mutation. Các hàm như `mutate` để gọi thực hiện mutation, `reset` để đặt lại trạng thái mutation, và nhiều hàm khác để tương tác với quá trình mutation.

---

👉 Đoạn 8:

```jsx
const totalStudentsCount = Number(studentsQuery.data?.headers['x-total-count'] || 0)
const totalPage = Math.ceil(totalStudentsCount / LIMIT)
```

- ❌❌ Giải thích dòng code thứ 1: ❌❌

- 👉 `const totalStudentsCount = Number(studentsQuery.data?.headers['x-total-count'] || 0)`, giải thích từng phần như sau:

- `studentsQuery.data`: Đây là dữ liệu trả về từ một truy vấn (query) được gọi `studentsQuery`. Đối tượng `data` chứa dữ liệu được trả về từ truy vấn đó.

- `studentsQuery.data?.headers`: Đây là thuộc tính `headers` trong đối tượng `data`. Có thể có hoặc không (nullable), (còn có tên gọi khác là optional), tuỳ thuộc vào trạng thái của `studentsQuery.data`. Nếu `data` tồn tại, thuộc tính `headers` sẽ được truy cập.

- `studentsQuery.data?.headers['x-total-count']`: Đây là giá trị của thuộc tính `'x-total-count'` trong đối tượng `headers`. Tương tự như trước đó, nếu `data` tồn tại và thuộc tính `headers` tồn tại, thì giá trị của `'x-total-count'` sẽ được truy cập.

- `studentsQuery.data?.headers['x-total-count'] || 0`: Nếu giá trị của `'x-total-count'` tồn tại, nó sẽ được sử dụng. Nếu không tồn tại (hoặc có giá trị là undefined), thì giá trị `0` sẽ được sử dụng thay thế.

- `Number(studentsQuery.data?.headers['x-total-count'] || 0)`: Đoạn mã này chuyển đổi giá trị của `'x-total-count'` thành kiểu số (number). Nếu giá trị không tồn tại, nó sẽ được chuyển đổi thành số `0`. Kết quả sẽ là `totalStudentsCount`, là biến chứa số lượng sinh viên tổng cộng.

- ❌❌ Giải thích dòng code thứ 2: ❌❌

- 👉 `const totalPage = Math.ceil(totalStudentsCount / LIMIT)`, giải thích dòng code như sau:

- `totalStudentsCount`: Đây là biến chứa tổng số lượng sinh viên (`totalStudentsCount` được giả định là đã được khai báo và gán giá trị, và biến này đã được khai báo ở trên).

- `LIMIT`: Đây là một hằng số hoặc biến chứa giới hạn số lượng sinh viên được hiển thị trên mỗi trang.

- `Math.ceil(totalStudentsCount / LIMIT)`: Đoạn mã này tính toán số trang cần thiết để hiển thị tất cả sinh viên dựa trên tổng số sinh viên và giới hạn số lượng sinh viên trên mỗi trang. Hàm `Math.ceil` làm tròn lên (làm tròn lên gần nhất) để đảm bảo rằng số trang là một số nguyên.

- ✅ Kết quả của phép tính trên sẽ được gán cho biến `totalPage`, biến chứa số lượng trang tổng cộng cần thiết để hiển thị tất cả sinh viên.

🚀 Tóm lại: Cả hai dòng code đó liên quan đến việc tính toán và lấy thông tin về tổng số sinh viên và tổng số trang dựa trên kết quả của `studentsQuery`.

---

👉 Đoạn 9:

```jsx
const handleDelete = (id: number) => {
  deleteStudentMutation.mutate(id)
}
```

- Dòng code này khai báo một hàm `handleDelete` với tham số `id` là một số nguyên. Hàm này được sử dụng để xử lý việc xóa sinh viên.

- Trong hàm `handleDelete`, `deleteStudentMutation.mutate(id)` được gọi. `deleteStudentMutation` là một biến đại diện cho mutation (thay đổi dữ liệu) của việc xóa sinh viên. Phương thức `mutate()` được gọi với tham số `id`, nhằm khởi động quá trình xóa sinh viên thông qua mutation.

- Khi `mutate()` được gọi, thư viện React Query sẽ thực hiện việc gửi một request xóa sinh viên tới server và xử lý kết quả. Quá trình này có thể bao gồm việc cập nhật cache, gửi các request tương tác khác (ví dụ: cập nhật danh sách sinh viên), và cung cấp thông tin về trạng thái của mutation (như đang thực thi, thành công, lỗi, vv.) thông qua các giá trị như `isLoading`, `isError`, `isSuccess`, `error`, vv.

- ✅ Tóm lại, dòng code này định nghĩa hàm `handleDelete` để thực hiện việc xóa sinh viên thông qua mutation `deleteStudentMutation.mutate()`.

- 🚀 Đây là cách giải thích dễ hiểu hơn:

- Dòng code trên khai báo một hàm có tên là `handleDelete` với một tham số `id` là một số nguyên. Mục đích của hàm này là để xử lý việc xóa một sinh viên.

- Khi hàm `handleDelete` được gọi, nó sẽ thực hiện một mutation gọi là `deleteStudentMutation`. Một mutation trong React Query là một hoạt động thay đổi dữ liệu, trong trường hợp này là xóa sinh viên.

- Gọi phương thức `mutate()` trên `deleteStudentMutation` với tham số `id` sẽ kích hoạt quá trình thực thi mutation để xóa sinh viên có ID tương ứng. Trong quá trình này, React Query sẽ gửi một yêu cầu HTTP tới máy chủ để xóa sinh viên, và sau đó xử lý kết quả trả về.

- Cách sử dụng `mutate()` trong mutation cho phép bạn kích hoạt các hoạt động thay đổi dữ liệu một cách dễ dàng và tự động, trong khi React Query quản lý quá trình thực thi, cache và cung cấp thông tin về trạng thái của mutation.

- Tóm lại, đoạn code trên định nghĩa một hàm `handleDelete` để xử lý việc xóa sinh viên bằng cách sử dụng mutation `deleteStudentMutation.mutate()`.

## ❓ Nhắc lại kiến thức cũ: Hàm `mutate()` trong react query có chức năng gì ?

- Trong React Query, hàm `mutate()` được sử dụng để thực hiện các thay đổi dữ liệu (mutate data) bằng cách gọi các hàm API tương ứng. Hàm này cho phép bạn gửi các yêu cầu HTTP như POST, PUT, DELETE để thay đổi dữ liệu trên máy chủ.

- `mutate()` có thể được sử dụng để gửi yêu cầu tạo, cập nhật hoặc xóa một tài nguyên trên máy chủ. Nó là một phương thức cung cấp bởi React Query để quản lý việc cập nhật dữ liệu và tự động cập nhật UI khi dữ liệu thay đổi.

- Cú pháp cơ bản của hàm `mutate()` như sau:

```jsx
mutate(mutationKey, updatedData, options)
```

- Trong đó:

- `mutationKey` là khóa xác định loại mutation (thay đổi) dữ liệu. Nó thường là một chuỗi định danh duy nhất, ví dụ: `'createUser'`, `'updatePost'`, `'deleteComment'`, vv. Mutation key được sử dụng để phân biệt các mutations khác nhau trong hệ thống của bạn.
- `updatedData` là dữ liệu cần được cập nhật hoặc gửi đi. Đây có thể là một object chứa thông tin mới để tạo hoặc cập nhật tài nguyên.
- `options` (tùy chọn) là một đối tượng chứa các tùy chọn cho mutation, ví dụ: `onSuccess`, `onError`, `onSettled`, vv. Các tùy chọn này cho phép bạn định nghĩa hành vi sau khi mutation được thực hiện thành công, xảy ra lỗi hoặc khi hoàn tất (bao gồm cả thành công và lỗi).

- Khi gọi `mutate()`, React Query sẽ tự động gửi yêu cầu tương ứng đến máy chủ, và sau đó cập nhật bộ đệm (cache) dữ liệu và cập nhật UI dựa trên kết quả trả về từ yêu cầu. Bạn có thể sử dụng các hàm callback như `onSuccess`, `onError`, `onSettled` trong options để thực hiện các tác vụ bổ sung sau khi mutation hoàn thành.

- Ví dụ:

```jsx
import { useMutation } from 'react-query'

const updateUser = async (userId, userData) => {
  // Gửi yêu cầu cập nhật thông tin người dùng với userId và userData
  const response = await fetch(`/api/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json()
  return data
}

const UserProfile = ({ userId }) => {
  const { mutate } = useMutation(updateUser)

  const handleUpdateUser = (userData) => {
    mutate(userId, userData, {
      onSuccess: (updatedUser) => {
        // Xử lý khi cập nhật thành công
        console.log('User updated:', updatedUser)
      },
      onError: (error) => {
        // Xử lý khi có lỗi xảy ra
        console.error('Error updating user:', error)
      }
    })
  }

  return (
    <div>
      {/* Form để cập nhật thông tin người dùng */}
      {/* Gọi handleUpdateUser() khi người dùng ấn nút lưu */}
    </div>
  )
}
```

- Trong ví dụ trên, chúng ta sử dụng `useMutation` để khởi tạo mutation hook và lấy ra hàm `mutate` từ hook đó. Khi người dùng thực hiện cập nhật thông tin người dùng, chúng ta gọi `mutate()` để gửi yêu cầu cập nhật dữ liệu và định nghĩa các hàm callback `onSuccess` và `onError` để xử lý kết quả trả về.

---

👉 Đoạn 10:

```jsx
const handlePrefetchStudent = (id: number) => {
  // Các đoạn mã khác trong handlePrefetchStudent
}
```

- Dòng code trên khai báo một hàm có tên là `handlePrefetchStudent` với một tham số `id` là một số nguyên. Mục đích của hàm này là để thực hiện việc prefetch (tải trước) dữ liệu của một sinh viên.

- Trong phần thân của hàm `handlePrefetchStudent`, có thể có các đoạn mã khác để thực hiện việc prefetch dữ liệu của sinh viên có `id` tương ứng. Điều này có thể bao gồm việc gọi một mutation hoặc một truy vấn để tải dữ liệu của sinh viên từ máy chủ.

- Việc prefetch dữ liệu có thể hữu ích trong các tình huống khi bạn muốn tải trước dữ liệu trước khi người dùng thực hiện một hành động nhất định, như khi họ chuẩn bị xem chi tiết của một sinh viên. Điều này giúp tăng trải nghiệm của người dùng bằng cách đảm bảo rằng dữ liệu đã được sẵn sàng và không có sự trễ trong việc hiển thị thông tin.

- Tuy nhiên, do đoạn code chỉ định rõ rằng có các đoạn mã khác trong hàm `handlePrefetchStudent`, chúng ta cần xem xét nội dung của các đoạn mã đó để có một giải thích chi tiết và chính xác hơn về chức năng của hàm `handlePrefetchStudent`.

---

👉 Đoạn 11:

```jsx
const fetchStudent = (second: number) => {
  const id = '6'
  queryClient.prefetchQuery(['student', id], {
    queryFn: () => getStudent(id),
    staleTime: second * 1000
  })
}
```

- Đoạn code trên khai báo một hàm có tên là `fetchStudent` với một tham số `second` là một số nguyên. Mục đích của hàm này là để thực hiện prefetch (tải trước) dữ liệu của một sinh viên có `id` cố định (trong trường hợp này là `'6'`).

- Trong phần thân của hàm `fetchStudent`, có sử dụng `queryClient.prefetchQuery` để thực hiện prefetch dữ liệu của sinh viên. Cụ thể, `queryClient.prefetchQuery` nhận vào hai tham số:

- Tham số thứ nhất là một mảng định danh truy vấn, trong trường hợp này là `['student', id]`. Mảng định danh truy vấn này giúp xác định một truy vấn cụ thể để prefetch. Trong trường hợp này, truy vấn được định danh bằng cách sử dụng chuỗi `'student'` kết hợp với `id` của sinh viên để tạo ra một định danh duy nhất cho truy vấn.

- Tham số thứ hai là một đối tượng (object) cấu hình cho prefetch truy vấn. Trong đoạn code trên, đối tượng cấu hình có hai thuộc tính chính:

  - `queryFn`: Thuộc tính này xác định hàm truy vấn thực tế được gọi để lấy dữ liệu của sinh viên. Trong trường hợp này, `queryFn` được định nghĩa là hàm `getStudent(id)` để lấy dữ liệu của sinh viên có `id` tương ứng.

  - `staleTime`: Thuộc tính này xác định thời gian (tính bằng mili giây) mà dữ liệu prefetch được coi là còn mới và không cần phải truy vấn lại từ máy chủ. Trong trường hợp này, `staleTime` được đặt bằng `second * 1000` để xác định thời gian cũ hết hạn của dữ liệu prefetch.

- Việc sử dụng `queryClient.prefetchQuery` giúp tải trước dữ liệu của sinh viên có `id` tương ứng và lưu trữ nó trong bộ đệm (`cache`). Điều này giúp tăng hiệu suất và trải nghiệm người dùng bằng cách đảm bảo rằng dữ liệu đã được sẵn sàng để sử dụng mà không cần phải đợi truy vấn lại từ máy chủ.

---

👉 Đoạn 12:

```jsx
const refetchStudents = () => {
  studentsQuery.refetch()
}
```

- Đoạn mã `refetchStudents` khai báo một hàm có tên là `refetchStudents`. Mục đích của hàm này là để thực hiện lại truy vấn `studentsQuery` và cập nhật dữ liệu sinh viên mới nhất.

- Trong phần thân của hàm `refetchStudents`, sử dụng phương thức `refetch` của đối tượng `studentsQuery`. `studentsQuery` là một truy vấn React Query đã được khai báo trước đó, và phương thức `refetch` được cung cấp bởi React Query để thực hiện lại truy vấn và cập nhật dữ liệu mới nhất.

- Bằng cách gọi `studentsQuery.refetch()`, truy vấn `studentsQuery` sẽ được gửi lại tới máy chủ để lấy dữ liệu sinh viên mới nhất. Sau khi truy vấn hoàn thành, dữ liệu sinh viên sẽ được cập nhật trong bộ đệm và tác động lên giao diện người dùng để hiển thị thông tin mới nhất.

## Giải thích dễ hiểu hơn:

- Hàm `refetchStudents` được sử dụng để làm mới dữ liệu sinh viên. Khi được gọi, nó sẽ thực hiện lại truy vấn `studentsQuery`, từ đó gửi yêu cầu đến máy chủ để lấy dữ liệu mới nhất về danh sách sinh viên.

- Bằng cách gọi `studentsQuery.refetch()`, React Query sẽ tự động gửi yêu cầu tới máy chủ và lấy dữ liệu mới nhất. Kết quả trả về sẽ được cập nhật trong bộ nhớ đệm (cache) của React Query và sau đó được sử dụng để hiển thị thông tin mới nhất trên giao diện người dùng.

- Hàm `refetch` là một phương thức của đối tượng `studentsQuery` được cung cấp bởi React Query. Khi gọi `studentsQuery.refetch()`, nó sẽ gửi yêu cầu truy vấn mới tới máy chủ để lấy dữ liệu mới nhất về danh sách sinh viên.

- Phương thức `refetch` trong React Query sẽ gửi lại yêu cầu truy vấn và cập nhật kết quả mới trong bộ nhớ đệm của React Query. Sau khi yêu cầu được xử lý thành công, kết quả trả về sẽ được cập nhật trong `studentsQuery.data`, từ đó cung cấp dữ liệu mới nhất cho ứng dụng.

- Trong trường hợp của hàm `refetchStudents`, khi nó được gọi, nó sẽ gọi phương thức `refetch` trên `studentsQuery`. Điều này sẽ kích hoạt việc gửi yêu cầu truy vấn mới và cập nhật danh sách sinh viên với dữ liệu mới nhất.

- Điều này giúp đảm bảo rằng khi gọi hàm `refetchStudents`, danh sách sinh viên sẽ được cập nhật với dữ liệu mới nhất từ máy chủ, đồng thời cung cấp trải nghiệm người dùng liền mạch khi làm mới dữ liệu mà không cần tải lại toàn bộ trang web.

---

👉 Đoạn 13:

```jsx
const cancelRequestStudents = () => {
  queryClient.cancelQueries({
    queryKey: ['students', page]
  })
}
```

- Đoạn code trên giải thích về hàm `cancelRequestStudents`.

- Hàm `cancelQueries` là một phương thức của đối tượng `queryClient` trong React Query. Khi gọi `queryClient.cancelQueries()`, nó sẽ hủy bỏ các yêu cầu truy vấn liên quan đến một khóa truy vấn cụ thể.

- Trong trường hợp của hàm `cancelRequestStudents`, khi nó được gọi, nó sẽ gọi `queryClient.cancelQueries()` để hủy bỏ các yêu cầu truy vấn liên quan đến danh sách sinh viên hiện tại và trang cụ thể. Điều này có nghĩa là nếu có bất kỳ yêu cầu truy vấn nào đang chờ xử lý hoặc đang được thực hiện liên quan đến danh sách sinh viên và trang đó, thì các yêu cầu đó sẽ bị hủy bỏ.

- Điều này có thể hữu ích trong trường hợp muốn ngừng yêu cầu truy vấn hiện tại hoặc tránh việc lấy dữ liệu lỗi thời từ các yêu cầu truy vấn trước đó.

## Giải thích dễ hiểu hơn:

- Hàm `cancelRequestStudents` được sử dụng để hủy bỏ các yêu cầu truy vấn liên quan đến danh sách sinh viên và trang cụ thể. Khi được gọi, hàm này thực hiện các bước sau:

- `queryClient.cancelQueries()`: `cancelQueries()` là phương thức của đối tượng `queryClient` được cung cấp bởi React Query. Đây là phương thức dùng để hủy bỏ các yêu cầu truy vấn.

- Đối số truyền vào là một đối tượng có thuộc tính `queryKey`, đại diện cho khóa truy vấn của danh sách sinh viên và trang cụ thể. Đối số này giúp xác định các yêu cầu truy vấn cần bị hủy bỏ.

- `queryKey` được cung cấp dưới dạng một mảng, bao gồm các thành phần liên quan đến truy vấn. Trong trường hợp này, `['students', page]` là khóa truy vấn sử dụng để xác định danh sách sinh viên và trang cụ thể.

- Khi `queryClient.cancelQueries()` được gọi với `queryKey` tương ứng, tất cả các yêu cầu truy vấn liên quan đến khóa truy vấn này sẽ bị hủy bỏ. Điều này có nghĩa là nếu có các yêu cầu đang chờ xử lý hoặc đang được thực hiện liên quan đến danh sách sinh viên và trang đó, chúng sẽ bị dừng lại.

- Hàm `cancelRequestStudents` hữu ích khi ta muốn hủy bỏ các yêu cầu truy vấn không cần thiết hoặc không còn cần thiết, chẳng hạn khi người dùng chuyển sang một trang khác hoặc thực hiện một hành động khác. Điều này giúp tránh việc lấy dữ liệu không cần thiết và giảm tải cho máy chủ.

---

👉 Đoạn 14:

```jsx
return (
  <div>
    <h1 className='text-lg'>Students</h1>
    <div>
      <button className='mt-6 rounded bg-blue-500 px-5 py-2 text-white' onClick={() => fetchStudent(10)}>
        Click 10s
      </button>
    </div>
    <div>
      <button className='mt-6 rounded bg-blue-500 px-5 py-2 text-white' onClick={() => fetchStudent(2)}>
        Click 2s
      </button>
    </div>
    <div>
      <button className='mt-6 rounded bg-pink-700 px-5 py-2 text-white' onClick={refetchStudents}>
        Refetch Students
      </button>
    </div>
    <div>
      <button className='mt-6 rounded bg-pink-700 px-5 py-2 text-white' onClick={cancelRequestStudents}>
        Cancel Request Students
      </button>
    </div>
    <div className='mt-6'>
      <Link
        to='/students/add'
        className=' rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 '
      >
        Add Student
      </Link>
    </div>

    {studentsQuery.isLoading && (
      <div role='status' className='mt-6 animate-pulse'>
        <div className='mb-4 h-4  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10 rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <span className='sr-only'>Loading...</span>
      </div>
    )}
    {!studentsQuery.isLoading && (
      <Fragment>
        <div className='relative mt-6 overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
            <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  #
                </th>
                <th scope='col' className='py-3 px-6'>
                  Avatar
                </th>
                <th scope='col' className='py-3 px-6'>
                  Name
                </th>
                <th scope='col' className='py-3 px-6'>
                  Email
                </th>
                <th scope='col' className='py-3 px-6'>
                  <span className='sr-only'>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {studentsQuery.data?.data.map((student) => (
                <tr
                  key={student.id}
                  className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'
                  onMouseEnter={() => handlePrefetchStudent(student.id)}
                >
                  <td className='py-4 px-6'>{student.id}</td>
                  <td className='py-4 px-6'>
                    <img src={student.avatar} alt='student' className='h-5 w-5' />
                  </td>
                  <th scope='row' className='whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white'>
                    {student.last_name}
                  </th>
                  <td className='py-4 px-6'>{student.email}</td>
                  <td className='py-4 px-6 text-right'>
                    <Link
                      to={`/students/${student.id}`}
                      className='mr-5 font-medium text-blue-600 hover:underline dark:text-blue-500'
                    >
                      Edit
                    </Link>
                    <button
                      className='font-medium text-red-600 dark:text-red-500'
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='mt-6 flex justify-center'>
          <nav aria-label='Page navigation example'>
            <ul className='inline-flex -space-x-px'>
              <li>
                {page === 1 ? (
                  <span className='cursor-not-allowed rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 '>
                    Previous
                  </span>
                ) : (
                  <Link
                    className='rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 '
                    to={`/students?page=${page - 1}`}
                  >
                    Previous
                  </Link>
                )}
              </li>
              {Array(totalPage)
                .fill(0)
                .map((_, index) => {
                  const pageNumber = index + 1
                  const isActive = page === pageNumber
                  return (
                    <li key={pageNumber}>
                      <Link
                        className={classNames(
                          'border border-gray-300   py-2 px-3 leading-tight  hover:bg-gray-100 hover:text-gray-700 ',
                          {
                            'bg-gray-100 text-gray-700': isActive,
                            'bg-white text-gray-500': !isActive
                          }
                        )}
                        to={`/students?page=${pageNumber}`}
                      >
                        {pageNumber}
                      </Link>
                    </li>
                  )
                })}
              <li>
                {page === totalPage ? (
                  <span className='cursor-not-allowed rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 '>
                    Next
                  </span>
                ) : (
                  <Link
                    className='rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 '
                    to={`/students?page=${page + 1}`}
                  >
                    Next
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </Fragment>
    )}
  </div>
)
```

- Đoạn code trên là một phần của một giao diện người dùng trong React. Dưới đây là giải thích từng phần của mã:

1. Hiển thị tiêu đề "Students":

```jsx
<h1 className='text-lg'>Students</h1>
```

- Đây là một tiêu đề được hiển thị trên trang.

2. Nút "Click 10s":

```jsx
<button className='mt-6 rounded bg-blue-500 px-5 py-2 text-white' onClick={() => fetchStudent(10)}>
  Click 10s
</button>
```

- Đây là một nút được sử dụng để gọi hàm `fetchStudent` với đối số `10`.

3. Nút "Click 2s":

```jsx
<button className='mt-6 rounded bg-blue-500 px-5 py-2 text-white' onClick={() => fetchStudent(2)}>
  Click 2s
</button>
```

- Đây là một nút được sử dụng để gọi hàm `fetchStudent` với đối số `2`.

4. Nút "Refetch Students":

```jsx
<button className='mt-6 rounded bg-pink-700 px-5 py-2 text-white' onClick={refetchStudents}>
  Refetch Students
</button>
```

- Đây là một nút được sử dụng để gọi hàm `refetchStudents`, để tải lại danh sách sinh viên.

5. Nút "Cancel Request Students":

```jsx
<button className='mt-6 rounded bg-pink-700 px-5 py-2 text-white' onClick={cancelRequestStudents}>
  Cancel Request Students
</button>
```

- Đây là một nút được sử dụng để gọi hàm `cancelRequestStudents`, để hủy bỏ các yêu cầu truy vấn liên quan đến danh sách sinh viên.

6. Nút "Add Student":

```jsx
<Link
  to='/students/add'
  className=' rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 '
>
  Add Student
</Link>
```

- Đây là một liên kết (Link) được sử dụng để chuyển hướng đến trang `"Add Student"` khi được nhấp vào.

7. Kiểm tra xem yêu cầu truy vấn đang được tải:

```jsx
{studentsQuery.isLoading && (
  // Mã JSX để hiển thị trạng thái đang tải
)}
```

- Đoạn mã trên kiểm tra xem biến `studentsQuery.isLoading` có giá trị `true` hay không. Nếu có, nghĩa là đang có yêu cầu truy vấn đang được thực thi và một phần giao diện được hiển thị để biểu thị trạng thái đang tải (loading...).

8. Hiển thị danh sách sinh viên:

```jsx
{studentsQuery.data?.data.map((student) => (
  // Mã JSX để hiển thị thông tin của từng sinh viên
))}
```

- Đoạn mã trên kiểm tra xem biến `studentsQuery.data` có giá trị hay không và sau đó sử dụng phương thức `map` để lặp qua từng sinh viên trong danh sách và hiển thị thông tin của từng sinh viên.

9. Hiển thị phân trang:

```jsx
<div className='mt-6 flex justify-center'>// Mã JSX để hiển thị các nút phân trang</div>
```

- Đoạn mã trên hiển thị các nút phân trang để người dùng có thể điều hướng giữa các trang của danh sách sinh viên.

- Trên cơ sở những phần trên, đoạn mã trên tạo ra một giao diện người dùng để hiển thị danh sách sinh viên, cho phép người dùng tải lại dữ liệu, hủy bỏ yêu cầu truy vấn và thực hiện các hành động khác như thêm và sửa đổi sinh viên.

---
