## Đây là phần giải thích code:

👉 Đoạn 1:

```jsx
import { Students, Student } from 'types/students.type'
import http from 'utils/http'
```

- Trong đoạn code trên:

1. `import { Students, Student } from 'types/students.type'`: Đây là câu lệnh import để lấy các kiểu dữ liệu `Students` và `Student` từ module `types/students.type`. Điều này giúp chúng ta sử dụng các kiểu dữ liệu này trong các phần khác của mã nguồn.

2. `import http from 'utils/http'`: Đây là câu lệnh import để lấy một đối tượng `http` từ module `utils/http`. Đối tượng `http` có thể là một thư viện hoặc phương thức dùng để thực hiện các yêu cầu HTTP, chẳng hạn như GET, POST, PUT, DELETE, để giao tiếp với các API hoặc máy chủ dữ liệu.

- ✅ Tuy nhiên, đoạn code này chỉ giới thiệu các câu lệnh import mà không có sử dụng trực tiếp trong phần tiếp theo. Để hiểu rõ hơn về việc sử dụng các kiểu dữ liệu và đối tượng `http` trong mã nguồn, cần xem các phần khác của mã để biết cách chúng được sử dụng và tương tác với các phần khác của ứng dụng.

---

👉 Đoạn 2:

```jsx
export const getStudents = (page: number | string, limit: number | string, signal?: AbortSignal) =>
  http.get<Students>('students', {
    params: {
      _page: page,
      _limit: limit
    },
    signal
  }
```

- Đoạn code trên xuất khẩu (export) một hàm có tên `getStudents`. Hàm này được sử dụng để gửi một yêu cầu GET đến một endpoint `'students`' trên máy chủ dữ liệu. Các tham số đầu vào của hàm bao gồm `page`, `limit` và tùy chọn (optional) `signal` (một đối tượng `AbortSignal` được sử dụng để hủy yêu cầu nếu cần).

- Trong hàm, chúng ta sử dụng đối tượng `http` (được import từ module `utils/http`) để thực hiện yêu cầu GET. Cú pháp `http.get<Students>` cho biết chúng ta mong đợi dữ liệu trả về từ yêu cầu là một đối tượng có kiểu `Students`, tương ứng với kiểu dữ liệu được định nghĩa trong module `types/students.type`.

- Các tham số `page` và `limit` được truyền vào yêu cầu GET thông qua `params`, một đối tượng chứa các tham số truy vấn (query parameters). Trong trường hợp này, `page` và `limit` được đặt là `_page` và `_limit` tương ứng. Điều này phụ thuộc vào quy ước đặt tên của máy chủ dữ liệu, trong đó `_page` là tham số truy vấn để chỉ định trang dữ liệu và `_limit` là tham số truy vấn để chỉ định số lượng phần tử trên mỗi trang.

- Đối tượng `signal` được truyền vào yêu cầu để cho phép hủy yêu cầu nếu cần. Điều này có thể được sử dụng để quản lý việc hủy yêu cầu khi component bị unmount hoặc khi xảy ra các tác động khác mà ta muốn hủy yêu cầu đang chờ.

- ✅ Cuối cùng, hàm `getStudents` trả về một promise (promise of Students) chứa dữ liệu từ yêu cầu GET. Ta có thể sử dụng phương thức `.then()` hoặc `async/await` để xử lý dữ liệu khi nó được trả về từ máy chủ dữ liệu.

---

👉 Đoạn 3:

```jsx
export const getStudent = (id: number | string) => http.get < Student > `students/${id}`
```

---

👉 Đoạn 4:

```jsx
export const addStudent = (student: Omit<Student, 'id'>) => http.post < Student > ('/students', student)
```

👉 Đoạn 5:

```jsx
export const updateStudent = (id: number | string, student: Student) => http.put < Student > (`students/${id}`, student)
```

---

👉 Đoạn 6:

```jsx
export const deleteStudent = (id: number | string) => http.delete < {} > `students/${id}`
```

---
