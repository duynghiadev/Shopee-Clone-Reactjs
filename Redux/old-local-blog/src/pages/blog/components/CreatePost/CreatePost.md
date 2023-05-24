## Giải thích code:

```jsx
import { useState, useEffect, Fragment } from 'react'
import { Post } from 'types/blog.type'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, cancelEditingPost, finishEditingPost } from 'pages/blog/blog.reducer'
import { RootState } from 'store'

const initialState: Post = {
  id: '',
  description: '',
  featuredImage: '',
  publishDate: '',
  published: false,
  title: ''
}
```

- Đoạn mã trên là một đoạn mã JavaScript sử dụng `React` và `Redux` để quản lý việc thêm và chỉnh sửa các bài viết trong một trang blog. Dưới đây là giải thích từng phần của mã để dễ hiểu:

1. Import các thành phần cần thiết:

- `useState` và `useEffect` từ react: Đây là các `hooks` của React để quản lý `state` và `side effects` trong thành phần React.
- `Fragment` từ react: Đây là một thành phần React dùng để bao bọc các thành phần con mà không cần tạo ra thẻ HTML bổ sung.
- `Post` từ `'types/blog.type`': Đây là kiểu dữ liệu đại diện cho một bài viết trong blog.
- `useDispatch` và `useSelector` từ react-redux: Đây là các hooks của `Redux` để truy cập vào lần lượt là `dispatch` và `state` của Redux.
- `addPost`, `cancelEditingPost`, `finishEditingPost` từ `'pages/blog/blog.reducer'`: Đây là các `action creators` đã được định nghĩa trong `reducer` của trang blog để thực hiện các hành động như thêm bài viết, hủy chỉnh sửa bài viết và hoàn thành chỉnh sửa bài viết.
- `RootState` từ `'store'`: Đây là kiểu dữ liệu đại diện cho `state` toàn bộ ứng dụng đã được định nghĩa trong `store`.

2. Khởi tạo state ban đầu:

- `initialState`: Đây là một đối tượng đại diện cho trạng thái ban đầu của một bài viết. Nó bao gồm các thuộc tính như `id` (mã bài viết), `description` (mô tả), `featuredImage` (hình ảnh nổi bật), `publishDate` (ngày xuất bản), `published` (trạng thái đã xuất bản hay chưa) và `title` (tiêu đề).

3. Sử dụng các hooks và Redux trong thành phần React:

- `const dispatch = useDispatch()`: Hook `useDispatch` được sử dụng để lấy đối tượng `dispatch` từ Redux. Nó sẽ được sử dụng để gửi các `action` đến `reducer`.
- `const data = useSelector((state: RootState) => state.data)`: Hook `useSelector` được sử dụng để lấy `state` từ Redux store. Trong đoạn mã này, data được trích xuất từ `state` toàn bộ ứng dụng bằng cách sử dụng kiểu `RootState`.

4. Các action và reducer:

- `addPost`, `cancelEditingPost`, `finishEditingPost`: Đây là các `action creators` đã được định nghĩa trong `reducer` của trang blog. Chúng sẽ trả về các action tương ứng để thực hiện các hành động như thêm bài viết, hủy chỉnh sửa bài viết và hoàn thành chỉnh sửa bài viết.

- Trên đây là giải thích tổng quan về đoạn mã. Tuy nhiên, nếu muốn hiểu rõ hơn về cách đoạn mã này được sử dụng và tương tác với các thành phần khác trong ứng dụng, cần xem thêm phần mã liên quan khác và cấu trúc tổng thể của ứng dụng.

```jsx
const [formData, setFormData] = useState < Post > initialState
const editingPost = useSelector((state: RootState) => state.blog.editingPost)
const dispatch = useDispatch()

useEffect(() => {
  setFormData(editingPost || initialState)
}, [editingPost])
```

```jsx
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  if (editingPost) {
    dispatch(finishEditingPost(formData))
  } else {
    const formDataWithId = { ...formData }
    dispatch(addPost(formDataWithId))
  }

  setFormData(initialState)
}
```

- Đoạn mã trên định nghĩa một hàm handleSubmit được gọi khi người dùng gửi một biểu mẫu (form) đi. Dưới đây là giải thích từng phần của mã để dễ hiểu:

1. const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { ... }: Đây là khai báo một hàm handleSubmit với tham số là một sự kiện event có kiểu React.FormEvent<HTMLFormElement>. Sự kiện này được kích hoạt khi biểu mẫu được gửi đi.

2. event.preventDefault(): Dòng này ngăn chặn hành vi mặc định của trình duyệt khi gửi biểu mẫu, như là tải lại trang. Điều này giúp chúng ta xử lý biểu mẫu theo cách của chúng ta mà không làm mất dữ liệu hoặc làm mất trạng thái của trang.

3. Kiểm tra và gửi action tương ứng:

- if (editingPost) { ... } else { ... }: Đây là một điều kiện kiểm tra nếu biến editingPost có giá trị true. Nếu điều kiện này đúng, tức là đang trong quá trình chỉnh sửa bài viết, sẽ được thực hiện các hành động liên quan đến việc hoàn thành chỉnh sửa bài viết.
- dispatch(finishEditingPost(formData)): Nếu đang trong quá trình chỉnh sửa bài viết, hàm dispatch sẽ được gọi để gửi action finishEditingPost với dữ liệu từ formData. Action này sẽ được xử lý bởi reducer để cập nhật bài viết đã chỉnh sửa.
- const formDataWithId = { ...formData }: Dòng này tạo một bản sao của đối tượng formData bằng cách sử dụng toán tử spread (...). Điều này được thực hiện để không thay đổi giá trị của formData sau khi nó được gửi đi.
- dispatch(addPost(formDataWithId)): Nếu không đang trong quá trình chỉnh sửa bài viết (tức là tạo bài viết mới), hàm dispatch sẽ được gọi để gửi action addPost với dữ liệu từ formDataWithId. Action này sẽ được xử lý bởi reducer để thêm bài viết mới vào ứng dụng.

4. setFormData(initialState): Dòng này cập nhật giá trị của state formData về giá trị ban đầu (initialState). Điều này giúp xóa dữ liệu đã nhập trong biểu mẫu sau khi nó đã được gửi đi thành công.

- Tóm lại, hàm handleSubmit xử lý việc gửi biểu mẫu trong trang blog. Nếu đang trong quá trình chỉnh sửa bài viết, nó hoàn thành chỉnh sửa bài viết bằng cách gửi action finishEditingPost. Nếu không, nó thêm một bài viết mới bằng cách gửi action addPost. Sau khi gửi biểu mẫu thành công, nó cập nhật giá trị của formData về giá trị ban đầu để chuẩn bị cho việc nhập liệu tiếp theo.
