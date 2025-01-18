## Giải thích code chi tiết:

```jsx
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
```

- Đoạn code trên đang import hai component `CreatePost` và `PostList` từ các file tương ứng trong thư mục `./components`.

- `import CreatePost from './components/CreatePost'`: Dòng này đang import component `CreatePost` từ file `CreatePost.tsx` trong thư mục `./components`. Sau khi import, bạn có thể sử dụng component `CreatePost` trong mã TypeScript của bạn.

- `import PostList from './components/PostList'`: Dòng này đang import component PostList từ file `PostList.tsx` trong thư mục `./components`. Sau khi import, bạn có thể sử dụng component `PostList` trong mã TypeScript của bạn.

- Điều này cho phép bạn sử dụng các component đã được xây dựng trong các file tương ứng (`CreatePost.tsx` và `PostList.tsx`) trong mã của bạn, ví dụ: `<CreatePost />` hoặc `<PostList />`. Điều này giúp tái sử dụng và tổ chức code dễ dàng hơn trong ứng dụng React của bạn.

```jsx
export default function Blog() {
  return (
    <div className='p-5'>
      <CreatePost />
      <PostList />
    </div>
  )
}
```

- Đoạn code trên định nghĩa một functional component React có tên `Blog`. Component này trả về một đoạn mã JSX, hiển thị hai component con là `CreatePost` và `PostList` được bọc trong một `div`.

- `export default function Blog() { ... }`: Dòng này định nghĩa một functional component React có tên `Blog`. Keyword `export default` cho phép ta xuất component này để có thể sử dụng nó trong các file khác.

- Trong hàm `Blog()`, chúng ta trả về một đoạn mã JSX trong cặp dấu ngoặc nhọn `{ ... }`. JSX là một cú pháp tương tự HTML được sử dụng để tạo ra giao diện trong React.

- `<div className='p-5'>`: Đây là một div trong JSX với thuộc tính `className` được đặt là `'p-5'`. Thuộc tính `className` được sử dụng để thêm lớp CSS cho phần tử.

- `<CreatePost />` và `<PostList />`: Đây là hai component con được sử dụng bên trong div. Chúng được viết dưới dạng các thẻ tự đóng (`<CreatePost />`, `<PostList />`) và được xử lý bởi React để hiển thị nội dung tương ứng của chúng.

- Tổng cộng, component `Blog` hiển thị một div với lớp CSS `'p-5'` và chứa hai component con là `CreatePost` và `PostList`. Đoạn code này có thể được sử dụng để tạo ra một trang blog với khung viết bài và danh sách bài đăng.
