## Giải thích code chi tiết:

- Đoạn code trên định nghĩa một component `PostItem` để hiển thị thông tin chi tiết của một bài đăng. Dưới đây là phân tích chi tiết:

```jsx
import { Post } from 'types/blog.type'

interface PostItemType {
  post: Post
  handleDelete: (postId: string) => void
  handleStartEditing: (postId: string) => void
}

export default function PostItem({ post, handleDelete, handleStartEditing }: PostItemType) {
  // ...
}
```

- Đầu tiên, import một interface `Post` từ module `types/blog.typ`e để sử dụng trong component.

- Tiếp theo, định nghĩa một interface `PostItemType` để mô tả kiểu dữ liệu của các thuộc tính (`post`, `handleDelete` `handleStartEditing`) mà `PostItem` component nhận vào.

- Sau đó, sử dụng từ khóa `export default` để xuất component `PostItem`.

```jsx
return (
  <div className='flex flex-col items-center overflow-hidden rounded-lg border md:flex-row'>
    <div className='group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48'>
      <img
        src={post.featuredImage}
        loading='lazy'
        alt={post.title}
        className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
      />
    </div>
    <div className='flex flex-col gap-2 p-4 lg:p-6'>
      <span className='text-sm text-gray-400'>{post.publishDate}</span>
      <h2 className='text-xl font-bold text-gray-800'>{post.title}</h2>
      <p className='text-gray-500'>{post.description}</p>
      <div>
        <div className='inline-flex rounded-md shadow-sm' role='group'>
          <button
            type='button'
            className='rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
            onClick={() => handleStartEditing(post.id)}
          >
            Edit
          </button>
          <button
            type='button'
            className='rounded-r-lg border-b border-r border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
            onClick={() => handleDelete(post.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
)
```

- Component `PostItem` được bọc trong một `<div>` với className `'flex flex-col items-center overflow-hidden rounded-lg border md:flex-row'`, tạo ra một `container` linh hoạt với kiểu hiển thị `flex-direction` là `column` trên các màn hình nhỏ và `row` trên các màn hình trung bình trở lên.

- Trong container này, có một `<div>` với className `'group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48'`, tạo ra một khối chứa ảnh đại diện của bài đăng. Kích thước của khối này được điều chỉnh dựa trên kích thước màn hình.

- Trong `<div>` ảnh đại diện, có một `<img>` với các thuộc tính như `src` (đường dẫn ảnh), `loading` (chế độ tải ảnh), `alt` (văn bản mô tả cho ảnh) và các className để điều chỉnh hiển thị và hiệu ứng `hover` của ảnh.

- Tiếp theo, có một `<div>` với className `'flex flex-col gap-2 p-4 lg:p-6'`, chứa các thông tin về bài đăng như ngày đăng, tiêu đề và mô tả. Classname này xác định kiểu hiển thị `flex-direction` là `column`, độ rộng `padding` và khoảng cách giữa các phần tử.

- Trong `<div>` thông tin bài đăng, có một `<span>` với className `'text-sm text-gray-400'`, hiển thị ngày đăng bài với kích thước và màu sắc văn bản nhất định.

- Tiếp theo là một tiêu đề `<h2>` với className `'text-xl font-bold text-gray-800'`, hiển thị tiêu đề bài đăng với kiểu văn bản, độ lớn và màu sắc nhất định.

- Dưới tiêu đề, có một đoạn văn bản `<p>` với className `'text-gray-500'`, hiển thị mô tả của bài đăng với màu sắc văn bản nhất định.

- Cuối cùng, có một `<div>` chứa hai nút `<button>` để thực hiện các hành động `Edit` và `Delete`. Các nút này có các `className` và sự kiện `onClick` tương ứng để xử lý sự kiện khi người dùng nhấp vào chúng.
