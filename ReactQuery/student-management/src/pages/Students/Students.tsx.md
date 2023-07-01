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
    queryClient.invalidateQueries({ queryKey: ['students', page], exact: true })
  }
})
```

---

👉 Đoạn 8:

```jsx
const totalStudentsCount = Number(studentsQuery.data?.headers['x-total-count'] || 0)
const totalPage = Math.ceil(totalStudentsCount / LIMIT)
```

---

👉 Đoạn 9:

```jsx
const handleDelete = (id: number) => {
  deleteStudentMutation.mutate(id)
}
```

---

👉 Đoạn 10:

```jsx
const handlePrefetchStudent = (id: number) => {
  // Các đoạn mã khác trong handlePrefetchStudent
}
```

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

---

👉 Đoạn 12:

```jsx
const refetchStudents = () => {
  studentsQuery.refetch()
}
```

---

👉 Đoạn 13:

```jsx
const cancelRequestStudents = () => {
  queryClient.cancelQueries({ queryKey: ['students', page] })
}
```

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

---
