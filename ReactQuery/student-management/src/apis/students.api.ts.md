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

- Đoạn code trên xuất khẩu (export) một hàm có tên `getStudent`. Hàm này được sử dụng để gửi một yêu cầu GET đến một endpoint `students/${id}` trên máy chủ dữ liệu để lấy thông tin của một sinh viên cụ thể.

- Hàm nhận một tham số `id` là số hoặc chuỗi để xác định sinh viên cần lấy thông tin. Đối tượng `http` (được import từ module `utils/http`) được sử dụng để thực hiện yêu cầu GET đến endpoint `students/${id}`.

- Ký tự (dấu huyền trong `students/${id}`) (backtick) được sử dụng để định nghĩa chuỗi template (template string) trong JavaScript. Trong đoạn code trên, chuỗi template được sử dụng để tạo URL endpoint `students/${id}`. Giá trị của biến `id` sẽ được thay thế vào trong chuỗi template khi thực hiện yêu cầu.

- Cú pháp `http.get<Student>` cho biết chúng ta mong đợi dữ liệu trả về từ yêu cầu là một đối tượng có kiểu `Student`, tương ứng với kiểu dữ liệu được định nghĩa trong module `types/students.type`.

- ✅ Hàm `getStudent` trả về một promise (promise of Student) chứa dữ liệu từ yêu cầu GET. Ta có thể sử dụng phương thức `.then()` hoặc `async/await` để xử lý dữ liệu khi nó được trả về từ máy chủ dữ liệu.

---

👉 Đoạn 4:

```jsx
export const addStudent = (student: Omit<Student, 'id'>) => http.post < Student > ('/students', student)
```

- Đoạn code trên xuất khẩu (export) một hàm có tên `addStudent`. Hàm này được sử dụng để gửi một yêu cầu POST đến endpoint `/students` trên máy chủ dữ liệu để thêm một sinh viên mới.

- Hàm nhận một tham số `student` có kiểu `Omit<Student, 'id'>`. Kiểu `Omit<Student, 'id'>` được sử dụng để chỉ định rằng tham số `student` có cấu trúc giống như đối tượng `Student`, nhưng loại bỏ thuộc tính `id` ra khỏi đối tượng. Điều này đảm bảo rằng khi thêm sinh viên mới, không cần phải cung cấp giá trị cho thuộc tính `id` (vì `id` sẽ được sinh tự động hoặc được xác định bởi máy chủ dữ liệu).

- Đối tượng `http` (được import từ module `utils/http`) được sử dụng để thực hiện yêu cầu POST đến endpoint `/students`. Tham số `student` được truyền vào yêu cầu POST như là dữ liệu cần gửi.

- Ký tự (dấu huyền trong `/students`) (backtick) được sử dụng để định nghĩa chuỗi template (template string) trong JavaScript. Trong đoạn code trên, chuỗi template được sử dụng để chỉ định URL endpoint `/students`.

- Cú pháp `http.post<Student>` cho biết chúng ta mong đợi dữ liệu trả về từ yêu cầu là một đối tượng có kiểu `Student`, tương ứng với kiểu dữ liệu được định nghĩa trong module `types/students.type`.

- ✅ Hàm `addStudent` trả về một promise (promise of Student) chứa dữ liệu từ yêu cầu POST. Ta có thể sử dụng phương thức `.then()` hoặc `async/await` để xử lý dữ liệu khi nó được trả về từ máy chủ dữ liệu.

---

👉 Đoạn 5:

```jsx
export const updateStudent = (id: number | string, student: Student) => http.put < Student > (`students/${id}`, student)
```

- Đoạn code trên xuất khẩu (export) một hàm có tên `updateStudent`. Hàm này được sử dụng để gửi một yêu cầu PUT đến endpoint `/students/:id` trên máy chủ dữ liệu để cập nhật thông tin của một sinh viên.

- Hàm nhận hai tham số: `id` và `student`. Tham số `id` có kiểu `number | string` và đại diện cho ID của sinh viên cần cập nhật. Tham số `student` có kiểu `Student` và đại diện cho thông tin cập nhật của sinh viên.

- Đối tượng `http` (được import từ module `utils/http`) được sử dụng để thực hiện yêu cầu PUT đến endpoint `/students/:id`. Tham số `student` được truyền vào yêu cầu PUT như là dữ liệu cần gửi.

- Ký tự (dấu huyền trong `students/${id}`) (backtick) được sử dụng để định nghĩa chuỗi template (template string) trong JavaScript. Trong đoạn code trên, chuỗi template được sử dụng để chỉ định URL endpoint `/students/${id}` với `id` được thay thế bằng giá trị của tham số `id`.

- Cú pháp `http.put<Student>` cho biết chúng ta mong đợi dữ liệu trả về từ yêu cầu là một đối tượng có kiểu `Student`, tương ứng với kiểu dữ liệu được định nghĩa trong module `types/students.type`.

- ✅ Hàm `updateStudent` trả về một promise (promise of Student) chứa dữ liệu từ yêu cầu PUT. Ta có thể sử dụng phương thức `.then()` hoặc `async/await` để xử lý dữ liệu khi nó được trả về từ máy chủ dữ liệu.

---

👉 Đoạn 6:

```jsx
export const deleteStudent = (id: number | string) => http.delete < {} > `students/${id}`
```

- Đoạn code trên xuất khẩu (export) một hàm có tên `deleteStudent`. Hàm này được sử dụng để gửi một yêu cầu DELETE đến endpoint `/students/:id` trên máy chủ dữ liệu để xóa một sinh viên.

- Hàm nhận một tham số `id` có kiểu `number | string` và đại diện cho ID của sinh viên cần xóa.

- Đối tượng `http` (được import từ module `utils/http`) được sử dụng để thực hiện yêu cầu DELETE đến endpoint `/students/:id`.

- Ký tự (dấu huyền trong `students/${id}`) (backtick) được sử dụng để định nghĩa chuỗi template (template string) trong JavaScript. Trong đoạn code trên, chuỗi template được sử dụng để chỉ định URL endpoint `/students/${id}` với `id` được thay thế bằng giá trị của tham số `id`.

- Cú pháp `http.delete<{}>` cho biết rằng chúng ta không mong đợi dữ liệu trả về từ yêu cầu DELETE này. Trong trường hợp này, chỉ cần xác nhận rằng yêu cầu DELETE đã thành công (HTTP status code 200) là đủ.

- ✅ Hàm `deleteStudent` trả về một promise (promise of {}) không chứa dữ liệu từ yêu cầu DELETE. Ta có thể sử dụng phương thức `.then()` hoặc `async/await` để xác nhận rằng yêu cầu DELETE đã thành công và thực hiện các hành động phù hợp sau khi xóa sinh viên.

---

## Giải đáp:

❓ `id` trong này `/students/:id` ? Làm sao ta biết được mà thực hiện nhiệm vụ xoá ?

- Trong đoạn mã `/students/:id`, `:id` là một parameterized route trong URL. Điều này có nghĩa là trong thực tế, nó sẽ được thay thế bằng một giá trị ID cụ thể khi gửi yêu cầu xoá sinh viên.

- Khi bạn gọi hàm `deleteStudent` với một giá trị `id`, nó sẽ được chèn vào URL để tạo thành một URL đầy đủ cho yêu cầu DELETE, ví dụ: `/students/123` hoặc `/students/abc`. Giá trị `id` mà bạn truyền vào sẽ được thay thế vào địa chỉ URL để chỉ định rõ rằng yêu cầu xoá sinh viên có ID tương ứng với giá trị id đó.

- ✅ Khi máy chủ dữ liệu nhận được yêu cầu DELETE với URL `/students/:id`, nó sẽ xử lý yêu cầu bằng cách trích xuất giá trị của `id` từ URL và thực hiện nhiệm vụ xoá sinh viên có ID tương ứng. Điều này cho phép chúng ta xác định rõ ràng rằng yêu cầu DELETE đang thao tác trên sinh viên cụ thể với ID đã được xác định.

❓ Mà `id` đó từ đâu mà ra. Máy chủ tự tạo à ?

- ID trong `/:id` là một tham số động trong URL, nghĩa là nó có thể được cung cấp từ nguồn dữ liệu bên ngoài, chẳng hạn như từ cơ sở dữ liệu hoặc từ người dùng.

- Khi xây dựng ứng dụng, thông thường chúng ta sẽ có một nguồn dữ liệu (ví dụ: cơ sở dữ liệu) chứa thông tin về các sinh viên. Mỗi sinh viên trong nguồn dữ liệu này sẽ có một ID duy nhất để xác định và định danh nó.

- Khi chúng ta tạo một URL để thực hiện các hoạt động CRUD (Create, Read, Update, Delete) trên dữ liệu sinh viên, chúng ta cần cung cấp ID của sinh viên cụ thể mà chúng ta muốn thao tác.

- ID có thể được truyền vào từ nhiều nguồn khác nhau, chẳng hạn như từ người dùng khi họ thực hiện một tương tác trên giao diện người dùng (ví dụ: bấm nút xoá sinh viên), hoặc từ một truy vấn hoặc tham số trong URL khi chúng ta điều hướng đến một trang cụ thể. Tùy thuộc vào cách chúng ta xây dựng ứng dụng, cách lấy ID có thể khác nhau.

- ✅ Tóm lại, ID được truyền vào trong `/:id` là một giá trị duy nhất để xác định sinh viên cụ thể mà chúng ta muốn thao tác. Cách chúng ta lấy ID này phụ thuộc vào ngữ cảnh và triển khai cụ thể của ứng dụng.
