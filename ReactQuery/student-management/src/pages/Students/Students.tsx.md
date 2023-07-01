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

---

👉 Đoạn 4:

```jsx
const queryClient = useQueryClient()
```

👉 Đoạn 5:

```jsx
const queryString: { page?: string } = useQueryString()
const page = Number(queryString.page) || 1
```

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
