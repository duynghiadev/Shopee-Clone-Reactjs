## Giải thích code trong file PostList.tsx

- Đoạn code trên có chức năng hiển thị danh sách các bài viết trong `blog`.

- Đầu tiên, ta sử dụng `React` `Redux` để lấy danh sách các bài viết từ `store`. Bằng cách sử dụng hook `useSelector` của React Redux, ta lấy ra danh sách các bài viết và trạng thái `loading` từ `store` của ứng dụng.

- Tiếp theo, ta sử dụng hook useEffect để gọi action getPostList từ `store`. useEffect này sẽ được gọi khi component được mount lần đầu tiên và khi danh sách các bài viết trong `store` thay đổi. Trong action getPostList, ta gọi API bằng thư viện Axios thông qua instance của nó, được import từ file utils/http. Khi API được gọi, ta lưu danh sách các bài viết vào `store`.

- Sau đó, ta hiển thị danh sách các bài viết bằng cách sử dụng hàm map của JavaScript, nếu `loading` là true, ta sẽ hiển thị component SkeletonPost để giảm thiểu thời gian tải dữ liệu. Nếu `loading` là false, ta sẽ hiển thị các bài viết trong danh sách với component PostItem. Mỗi bài viết được hiển thị cùng với hai button để xóa và chỉnh sửa bài viết, chức năng xóa và chỉnh sửa bài viết sẽ được thực hiện thông qua action deletePost và startEditingPost của `store`.

## Giải thích chi tiết hơn từng đoạn code:

```jsx
import { RootState, useAppDispatch } from 'store'
import PostItem from '../PostItem'
import { useSelector, useDispatch } from 'react-redux'
import { deletePost, getPostList, startEditingPost } from 'pages/blog/blog.slice'
import { Fragment, useEffect } from 'react'
import http from 'utils/http'
import SkeletonPost from '../SkeletonPost'
```

- Dòng 1: Imports các dependencies và custom components cần thiết cho component này.
- Dòng 2: Imports type RootState và hook useAppDispatch từ store.
- Dòng 3: Imports component PostItem và hook useSelector và useDispatch từ react-redux.
- Dòng 4: Imports các action creators deletePost, getPostList, startEditingPost từ redux slice được định nghĩa trong file 'blog.slice'.
- Dòng 5: Imports Fragment và useEffect hooks từ React.
- Dòng 6: Imports module http từ utils/http.
- Dòng 7: Imports component SkeletonPost.

```jsx
export default function PostList() {
  const postList = useSelector((state: RootState) => state.blog.postList)
  const loading = useSelector((state: RootState) => state.blog.loading)

  const dispatch = useAppDispatch()
```

- Dòng 9-11: Khai báo component PostList với function component.
- Dòng 12-13: Sử dụng useSelector để lấy các giá trị từ store, ở đây là danh sách các bài đăng và trạng thái loading của component.
- Dòng 15: Sử dụng useAppDispatch để lấy reference đến dispatch function của store.

```jsx
useEffect(() => {
  const promise = dispatch(getPostList())
  return () => {
    promise.abort()
  }
}, [dispatch])
```

- Dòng 17-22: Sử dụng useEffect để gọi API và lấy danh sách các bài đăng từ server.

  - Đoạn code trong useEffect được chạy một lần duy nhất khi component được mount.

  - Hàm getPostList() được dispatch để gọi API lấy danh sách các bài đăng từ server.

  - Trong return function của useEffect, promise.abort() được gọi để cancel request nếu component bị unmount.
    [dispatch] được truyền vào array dependencies để useEffect biết khi nào nên return.

```jsx
const handleDelete = (postId: string) => {
  dispatch(deletePost(postId))
}

const handleStartEditing = (postId: string) => {
  dispatch(startEditingPost(postId))
}
```

- Dòng 24-28: Khai báo các hàm xử lý sự kiện để được sử dụng bởi các PostItem components.

  - Hàm handleDelete() được sử dụng để xóa bài đăng.

  - Hàm handleStartEditing() được sử dụng để bắt đầu quá trình chỉnh sửa bài đăng.

```jsx
return (
  <div className='bg-white py-6 sm:py-8 lg:py-12'>
    <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
      <div className='mb-10 md:mb-16'>
        <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>Được Dev Blog</h2>
        <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
          Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi tệ. Nhưng ngày mốt sẽ có nắng
        </p>
      </div>
      <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
        {loading && (
          <Fragment>
            <SkeletonPost />
            <SkeletonPost />
          </Fragment>
        )}

        {!loading &&
          postList.map((post) => (
            <PostItem post={post} key={post.id} handleDelete={handleDelete} handleStartEditing={handleStartEditing} />
          ))}
      </div>
    </div>
  </div>
)
```

- Dòng 30-73: Hiển thị component PostList với tiêu đề,mô tả và danh sách các bài đăng.

  - Dòng 30-31: Tạo các div containers cho component.

  - Dòng 32-37: Tạo tiêu đề và mô tả của component.

  - Dòng 39-58: Tạo danh sách các bài đăng bằng cách sử dụng loading để hiển thị SkeletonPost components trong quá trình tải dữ liệu. Khi tải xong dữ liệu, danh sách các bài đăng được hiển thị bằng cách sử dụng postList.map để ánh xạ mỗi bài đăng trong postList thành một PostItem component.

  - Dòng 60-73: Đóng các container div của component.

  ------------- Đọc hiểu code ở trên đi 👆 ----------------------

  ------------- Mới làm tới đây thôi. Những đoạn giải thích ở dưới 👇 mới copy qua thôi chứ chưa đọc hiểu ---------

## `promise.abort()` cũng có thể được gọi là `cleanup function` đúng không ?

- Đúng rồi, trong trường hợp này, `promise.abort()` được gọi khi component bị xóa khỏi DOM (`unmount`).

- `Cleanup function` được sử dụng để xử lý các tác vụ phụ như dọn dẹp các `resources`, `hủy` các kết nối, `unsubscribe` các `events listener`, ... khi `component` bị `unmount`.

- Trong đoạn code này, `promise.abort()` được sử dụng để `cancel request` khi component bị `unmount`. Nó được đặt trong `return function` của `useEffect` để đảm bảo rằng nó sẽ được thực thi trước khi `component` bị `unmount`. Do đó, nó có thể được gọi là một `cleanup function`.

- Trong `React`, `cleanup function` có thể được thực thi thông qua hàm `useEffect` với tham số thứ 2 là một mảng (`array`) chứa các `dependencies` (deps) của `effect`. Nếu `effect` này trả về một hàm (`cleanup function`), thì hàm này sẽ được thực thi khi component bị `unmount` hoặc tham số `deps` của `effect` thay đổi.

## Cho ví dụ về `promise.abort()` ?

- Để cho rõ hơn về việc sử dụng promise.abort(), ta có thể xem xét ví dụ sau:

- Giả sử chúng ta đang gọi một API để lấy danh sách sản phẩm từ server. Tuy nhiên, trang web của chúng ta cần cập nhật nhanh chóng và không được chậm chạp. Vì vậy, nếu mất quá nhiều thời gian để lấy dữ liệu từ server (ví dụ: do kết nối mạng chậm hoặc lỗi server), chúng ta muốn người dùng có thể hủy bỏ yêu cầu lấy dữ liệu.

- Chúng ta có thể sử dụng AbortController để tạo một signal và sử dụng signal đó để hủy yêu cầu AJAX đang chờ. Ví dụ dưới đây minh họa cách sử dụng AbortController và signal để hủy yêu cầu AJAX:

```jsx
const controller = new AbortController()
const { signal } = controller

fetch('/api/products', { signal })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.name === 'AbortError') {
      console.log('Request aborted')
    } else {
      console.error('Request failed', error)
    }
  })

// Để hủy yêu cầu AJAX đang chờ, ta có thể gọi controller.abort()
controller.abort()
```

- Ở đây, ta tạo một AbortController mới và lấy signal từ controller. Ta sử dụng signal này để đính kèm vào yêu cầu AJAX thông qua fetch(). Sau đó, ta gọi controller.abort() để hủy yêu cầu AJAX. Nếu yêu cầu được hủy, chúng ta sẽ xử lý nó trong khối catch, sử dụng điều kiện để kiểm tra lỗi có phải là AbortError hay không.
