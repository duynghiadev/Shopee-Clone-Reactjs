## Giải thích code chi tiết:

```jsx
import { createReducer, createAction, current, PayloadAction, nanoid } from '@reduxjs/toolkit'
import { initialPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
  editingPost: Post | null
}

const initialState: BlogState = {
  postList: initialPostList,
  editingPost: null
}
```

1. Trong đoạn mã trên, chúng ta có các import và định nghĩa kiểu dữ liệu sau:

- `createReducer`: Một phương thức từ Redux Toolkit để tạo reducer.
- `createAction`: Một phương thức từ Redux Toolkit để tạo action.
- `current`: Một phương thức từ Redux Toolkit để truy cập trạng thái hiện tại của state.
- `PayloadAction`: Một kiểu dữ liệu từ Redux Toolkit để đại diện cho một action với payload.
- `nanoid`: Một phương thức từ Redux Toolkit để tạo ra một id duy nhất.

2. Tiếp theo, chúng ta định nghĩa một interface `BlogState`, đại diện cho trạng thái của trang Blog. Nó bao gồm hai trường:

- `postList`: Một mảng các bài viết, mỗi bài viết có kiểu `Post`.
- `editingPost`: Một bài viết đang được chỉnh sửa (`Post`) hoặc `null` nếu không có bài viết nào đang được chỉnh sửa.

3. Sau đó, chúng ta khai báo giá trị `initialState` cho `BlogState`.

```jsx
const initialState: BlogState = {
  postList: initialPostList,
  editingPost: null
}
```

- `initialState` là một đối tượng có hai thuộc tính: `postList` và `editingPost`.

  - Thuộc tính `postList` là một mảng chứa danh sách các bài viết. Giá trị ban đầu của `postList` được lấy từ biến `initialPostList`, đó là một mảng các đối tượng `Post` định nghĩa trước.

  - Thuộc tính `editingPost` đại diện cho bài viết đang được chỉnh sửa. Ban đầu, giá trị của `editingPost` được thiết lập là `null`, tức là không có bài viết nào đang được chỉnh sửa.

- Khi reducer được khởi tạo ban đầu, trạng thái sẽ được thiết lập bằng `initialState`. Điều này có nghĩa là khi ứng dụng bắt đầu chạy, trạng thái của trang Blog sẽ được khởi tạo với danh sách các bài viết ban đầu và không có bài viết nào đang được chỉnh sửa.

- Khi muốn đặt lại trạng thái của trang Blog về giá trị ban đầu, ta có thể sử dụng lại `initialState`. Việc này thường xảy ra khi ta muốn thực hiện một hành động như "Hủy chỉnh sửa bài viết" hoặc "Đặt lại trạng thái ban đầu".

- Một mảng chứa các đối tượng `Post`. Mỗi đối tượng `Post` có các thuộc tính sau:

- `description`: Mô tả về bài viết.
- `featuredImage`: Đường dẫn đến hình ảnh nổi bật của bài viết.
- `id`: Id duy nhất của bài viết.
- `publishDate`: Ngày và giờ đăng bài viết.
- `published`: Trạng thái công bố của bài viết, `true` nếu đã công bố và `false` nếu chưa.
- `title`: Tiêu đề của bài viết.

- Dưới đây là ví dụ về cấu trúc của một phần tử trong mảng `initialPostList`:

```jsx
{
  description: 'Nghịch cảnh là một phần của cuộc sống...',
  featuredImage: 'https://images.unsplash.com/...',
  id: '2022-10-12T04:32:48.650Z',
  publishDate: '2022-10-13T11:32',
  published: true,
  title: 'Mọi công việc thành đạt đều nhờ sự kiên trì và lòng say mê.'
}
```

- Vì vậy `initialPostList` định nghĩa các bài viết ban đầu để khởi tạo trạng thái của trang Blog.

```jsx
export const addPost = createAction('blog/addPost', function (post: Omit<Post, 'id'>) {
  return {
    payload: {
      ...post,
      id: nanoid()
    }
  }
})
```

- Trong đoạn code trên, ta đang tạo một action creator (creator của hành động) có tên là `addPost`. Action creator này dùng để tạo ra một action khi muốn thêm một bài viết mới vào danh sách bài viết.

- Đầu tiên, ta sử dụng hàm `createAction` từ Redux Toolkit để tạo action creator. Hàm này nhận vào hai tham số: một chuỗi đại diện cho `type` của `action` và một hàm `callback` để xử lý `payload` của `action`.

- Trong hàm callback, ta nhận vào tham số `post` kiểu `Omit<Post, 'id'>` có nghĩa là `post` là một đối tượng có cấu trúc giống với `Post` nhưng không có thuộc tính `id`. Bởi vì id là một giá trị duy nhất, ta sử dụng hàm `nanoid()` từ thư viện `nanoid` để tạo một id ngẫu nhiên cho bài viết.

- Sau đó, ta trả về một đối tượng có trường payload là đối tượng post được sao chép spread (`...`) và có trường id được tạo ra bằng `nanoid()` (một ID duy nhất cho bài viết). Đối tượng này sẽ được gửi đến `reducer` để thực hiện việc thêm bài viết vào danh sách.

- Trong đoạn mã `...post` có nghĩa là ta đang sử dụng toán tử `spread` để `sao chép` tất cả các thuộc tính của đối tượng `post` và đặt chúng vào trong đối tượng mới.

- Khi ta sử dụng toán tử spread `...post`, nó sẽ tạo ra một đối tượng mới chứa tất cả các thuộc tính của post.

```jsx
export const deletePost = createAction < string > 'blog/deletePost'
export const startEditingPost = createAction < string > '/blog/startEditingPost'
export const cancelEditingPost = createAction('/blog/cancelEditingPost')
export const finishEditingPost = createAction < Post > '/blog/finishEditingPost'
```

1. Đoạn mã trên định nghĩa một số action creators sử dụng trong Redux. Hãy giải thích từng action creator một cách chi tiết:

- `deletePost`: Đây là một action creator để tạo ra một action có type `blog/deletePost`. Action này được sử dụng để xóa một bài viết khỏi danh sách. Payload của action này là một chuỗi (`string`) là `postId` đại diện cho ID của bài viết cần xóa. Chỉ cần truyền một đối số là `string` là đủ. Ví dụ: `deletePost('postId123')`. Action này sẽ được gửi đến reducer để xóa bài viết có `id` tương ứng. Đối số `postId` sẽ được truyền vào reducer để đánh dấu bài viết cần xoá.

- `startEditingPost`: Đây là action creator để tạo ra một action có type `/blog/startEditingPost`. Action này được sử dụng để bắt đầu quá trình chỉnh sửa một bài viết. Payload của action này cũng là một chuỗi (`string`) là `postId` đại diện cho ID của bài viết cần chỉnh sửa. Ví dụ: `startEditingPost('postId123')`. Action này đại diện cho việc bắt đầu chỉnh sửa bài viết có `id` tương ứng. Đối số `postId` sẽ được truyền vào reducer để đánh dấu bài viết cần chỉnh sửa.

- `cancelEditingPost`: Đây là action creator để tạo ra một action có type `/blog/cancelEditingPost`. Action này được sử dụng để hủy bỏ quá trình chỉnh sửa một bài viết. Action này không cần payload, nghĩa là không có thông tin đặc biệt nào cần được truyền khi gọi action này.

- `finishEditingPost`: Đây là action creator để tạo ra một action có type `/blog/finishEditingPost`. Action này được sử dụng để hoàn thành quá trình chỉnh sửa một bài viết. Payload của action này là một đối tượng `Post` (`object Post`) đại diện cho bài viết đã được chỉnh sửa. Ví dụ: `finishEditingPost({ id: 'postId123', title: 'Bài viết đã chỉnh sửa' })`. Action này đại diện cho việc hoàn thành chỉnh sửa bài viết. Đối tượng `Post` được truyền vào action sẽ cung cấp thông tin cập nhật của bài viết, và nó sẽ được gửi đến reducer để cập nhật thông tin cho bài viết tương ứng.

2. Mỗi action creator sẽ tạo ra một action object với cấu trúc phù hợp, bao gồm `type` (kiểu action) và `payload` (dữ liệu đi kèm). Các action này sẽ được sử dụng trong reducer để thay đổi trạng thái của ứng dụng.

**❌❌ 👇👇👇 LƯU Ý CHỖ NÀY 👇👇👇 ❌❌**

```jsx
const blogReducer = createReducer(initialState, (builder) => {})
```

❌❌**Tại sao trong hàm này ta không sử dụng `createAction` mà phải sử dụng `createReducer`. Hãy giải thích lý do vì sao ?**❌❌

- Hàm `createAction` và `createReducer` đều là các hàm được cung cấp bởi `Redux Toolkit` để giúp viết mã `Redux` dễ dàng hơn. Tuy nhiên, chúng có mục đích và sử dụng khác nhau.

- Hàm `createAction` được sử dụng để tạo ra một action creator - một hàm trả về một action object với một định danh (type) và một payload. Action creator này sau đó được sử dụng để gửi các action đến store của `Redux` bằng cách sử dụng hàm `dispatch`.

- Trong khi đó, hàm `createReducer` được sử dụng để tạo ra một `reducer` - một hàm xử lý các `action` và trả về một `state` mới tương ứng. `Reducer` này sau đó được sử dụng để xác định cách thức cập nhật `state` của ứng dụng khi nhận được các `action` từ `store` của `Redux`.

- Trong dòng code ở trên, thì code của bạn đã sử dụng `createReducer` để tạo ra một `reducer` cho `state` của ứng dụng `blog`. Hàm này đã định nghĩa cách thức cập nhật `state` của ứng dụng khi nhận được các `action` từ `store` của Redux, bao gồm thêm bài viết (`addPost`), xóa bài viết (`deletePost`), chỉnh sửa bài viết (`startEditingPost`) và hủy chỉnh sửa bài viết (`cancelEditingPost`).

- Về việc tại sao trong hàm này không sử dụng `createAction`, có thể là do các `action` được sử dụng trong `reducer` đã được định nghĩa trước đó bằng cách sử dụng `createAction` hoặc được cung cấp từ các thư viện hoặc các thành phần khác trong ứng dụng. Nếu bạn đã định nghĩa các `action` trước đó bằng cách sử dụng `createAction`, bạn có thể truyền chúng vào `reducer` tương ứng để xử lý các `action` đó.

- Tuy nhiên, nếu bạn muốn tạo mới các `action` trong `reducer`, bạn có thể sử dụng `createAction` để tạo ra các `action creator` tương ứng và sử dụng chúng để gửi các `action` đến `store` của `Redux`. Vì vậy, việc sử dụng `createAction` và `createReducer` phụ thuộc vào cách bạn tổ chức và quản lý mã của mình trong ứng dụng.

```jsx
const blogReducer = createReducer(initialState, (builder) => {
  builder.addCase(addPost, (state, action) => {
    const post = action.payload
    state.postList.push(post)
  })
})
```

- Đoạn mã trên xác định một trường hợp xử lý action `deletePost` trong reducer.

- Đoạn mã trên tạo một reducer cho việc quản lý trạng thái của một blog. Đây là một ví dụ cụ thể sử dụng `createReducer` từ Redux Toolkit để xây dựng reducer.

1. Đoạn mã khởi tạo reducer:

- `createReducer`: Một hàm từ Redux Toolkit để tạo reducer.
- `initialState`: Một đối tượng đại diện cho trạng thái ban đầu của blog.
- `(builder) => { ... }`: Hàm xây dựng (builder function) còn được gọi là `builderCallback` nhận vào tham số `builder` và được sử dụng để xác định các trường hợp xử lý `action`.

2. Xác định trường hợp xử lý action:

- `builder.addCase(addPost, (state, action) => { ... })`: Đoạn mã này xác định một trường hợp xử lý cho action `addPost`.
- `addPost`: Action đã được tạo bằng `createAction` từ Redux Toolkit.
- `(state, action) => { ... }`: Hàm xử lý được gọi khi action `addPost` được gọi.
- `state`: Tham số đại diện cho trạng thái hiện tại của reducer.
- `action`: Tham số đại diện cho action được gọi, bao gồm `payload` và các thông tin khác.

3. Xử lý action addPost:

- `const post = action.payload`: Lấy giá trị `payload` từ `action` và gán cho biến `post`.
- `state.postList.push(post)`: Thêm đối tượng `post` vào mảng `postList` trong trạng thái hiện tại của reducer.

- Khi reducer này được gọi với action `addPost`, nó sẽ thêm đối tượng `post` vào mảng `postList` trong trạng thái hiện tại và trả về một trạng thái mới với mảng `postList` đã được cập nhật.

- Lưu ý rằng đoạn mã trên chỉ xác định một trường hợp xử lý duy nhất cho action `addPost`. Nếu có các action khác, bạn cần thêm các trường hợp xử lý tương ứng vào trong hàm xây dựng.

```m
👉👉👉👉👉👉❌❌❌👉👉👉👉👉👉
🚀 Lưu ý cái này dùng cho cả method find() và findIndex()

✅ Dòng mã post => post.id === postId là một hàm truyền vào phương thức find() để kiểm tra điều kiện tìm kiếm.
✅ Trong trường hợp này, nó đại diện cho một hàm kiểm tra xem bài viết có thuộc tính id bằng với postId hay không.
✅ Hàm này sẽ được gọi cho mỗi phần tử trong mảng postList để tìm bài viết có id tương ứng với postId.
✅ Hàm trả về true nếu bài viết có id bằng postId và false nếu không. Phương thức find() sẽ trả về bài viết đầu tiên trong mảng postList mà hàm trả về true, hoặc undefined nếu không có bài viết nào thỏa điều kiện.
```

```jsx
 .addCase(deletePost, (state, action) => {
      console.log('start', current(state))

      const postId = action.payload
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId)

      if (foundPostIndex !== -1) {
        state.postList.splice(foundPostIndex, 1)
      }

      console.log('finish', current(state))
    })
```

- Đoạn mã trên xác định một trường hợp xử lý action `deletePost` trong reducer.

1. Xác định trường hợp xử lý action:

- `builder.addCase(deletePost, (state, action) => { ... })`: Đoạn mã này xác định một trường hợp xử lý cho action `deletePost`.
- `deletePost`: Action đã được tạo bằng `createAction` từ Redux Toolkit.
- `(state, action) => { ... }`: Hàm xử lý được gọi khi action `deletePost` được gọi.
- `state`: Tham số đại diện cho trạng thái hiện tại của reducer.
- `action`: Tham số đại diện cho action được gọi, bao gồm `payload` và các thông tin khác.

2. Xử lý action deletePost:

- `console.log('start', current(state))`: In ra trạng thái hiện tại của reducer trước khi xóa bài viết.
- `const postId = action.payload`: Lấy giá trị `payload` từ `action` và gán cho biến `postId`, đại diện cho `ID` của bài viết cần xóa.
- `const foundPostIndex = state.postList.findIndex((post) => post.id === postId)`: Trong trường hợp này, `postId` từ payload của action được sử dụng để tìm vị trí của bài viết trong `state.postLis`t bằng cách sử dụng `findIndex()`. Tìm vị trí của bài viết có `ID` tương ứng trong mảng `postList` của trạng thái hiện tại. Nếu không tìm thấy, `foundPostIndex` sẽ là -1.
- `if (foundPostIndex !== -1) { ... }`: Kiểm tra nếu vị trí bài viết được tìm thấy (`khác -1`), thực hiện xóa bài viết.
- `state.postList.splice(foundPostIndex, 1)`: Xóa bài viết khỏi mảng `postList` bằng cách sử dụng `splice`, với `foundPostIndex` là vị trí của bài viết và 1 là số phần tử cần xóa.
- `console.log('finish', current(state))`: In ra trạng thái hiện tại của reducer sau khi xóa bài viết.

- Khi reducer này được gọi với action deletePost, nó sẽ tìm và xóa bài viết có ID tương ứng khỏi mảng postList trong trạng thái hiện tại, và trả về một trạng thái mới với postList đã được cập nhật. Các thông tin về trạng thái trước và sau khi xóa bài viết cũng được in ra để kiểm tra.

```jsx
    .addCase(startEditingPost, (state, action) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    })
```

- Đoạn mã trên xác định một trường hợp xử lý cho action `startEditingPost` trong reducer. Dưới đây là phân tích chi tiết của đoạn mã:

1. Xác định trường hợp xử lý action startEditingPost:

- `builder.addCase(startEditingPost, (state, action) => { ... })`: Đoạn mã này xác định một trường hợp xử lý cho action `startEditingPost`.
- `startEditingPost`: Action đã được định nghĩa bằng `createAction` từ Redux Toolkit.
- `(state, action) => { ... }`: Hàm xử lý được gọi khi action `startEditingPost` được gọi.
- `state`: Tham số đại diện cho trạng thái hiện tại của reducer.
- `action`: Tham số đại diện cho `action` được gọi, bao gồm `payload` và các thông tin khác.

2. Xử lý action startEditingPost:

- `const postId = action.payload`: Lấy giá trị payload từ action và gán cho biến `postId`, đại diện cho `ID` của bài viết cần chỉnh sửa.
- `const foundPost = state.postList.find((post) => post.id === postId) || null`: Tìm bài viết có `ID` tương ứng trong mảng `postList` trong trạng thái hiện tại. Nếu không tìm thấy, biến `foundPost` sẽ có giá trị `null`.
- `state.editingPost = foundPost`: Gán giá trị của biến `foundPost` cho thuộc tính `editingPost` trong trạng thái hiện tại của reducer.

- Khi reducer này được gọi với action `startEditingPost`, nó sẽ tìm bài viết có `ID` tương ứng trong mảng `postList` và gán giá trị của bài viết đó cho thuộc tính `editingPost` trong trạng thái hiện tại. Điều này cho phép ứng dụng biết rằng một bài viết đang được chỉnh sửa và trạng thái được cập nhật để phản ánh điều đó.

```jsx
  // Trong case này chúng ta không cần dùng action.
  // Bởi vì chúng ta không lấy cái gì từ payload.
  .addCase(cancelEditingPost, (state) => {
    state.editingPost = null
  })
```

- Đoạn mã trên xác định một trường hợp xử lý cho action `cancelEditingPost` trong reducer.

1. Xác định trường hợp xử lý action cancelEditingPost:

- `builder.addCase(cancelEditingPost, (state) => { ... })`: Đoạn này xác định một trường hợp xử lý cho action `cancelEditingPost`.
- `cancelEditingPost`: Action đã được định nghĩa bằng `createAction` từ Redux Toolkit.
- `(state) => { ... }`: Hàm xử lý được gọi khi action `cancelEditingPost` được gọi.
- `state`: Tham số đại diện cho trạng thái hiện tại của reducer.
- `action`: Trong trường hợp này không có `action`. Vì cancel edit nên không cần thêm tham số `action`

2. Xử lý action cancelEditingPost:

- `state.editingPost = null`: Gán giá trị null cho thuộc tính `editingPost` trong trạng thái hiện tại của reducer.

- Khi reducer này được gọi với action `cancelEditingPost`, nó sẽ cập nhật thuộc tính `editingPost` trong trạng thái hiện tại thành `null`. Điều này cho biết rằng việc chỉnh sửa bài viết đã được hủy bỏ và trạng thái của ứng dụng được cập nhật để phản ánh điều đó.

```jsx
 .addCase(finishEditingPost, (state, action) => {
      const postId = action.payload.id
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })
      state.editingPost = null
    })
```

- Đoạn mã trên xác định một trường hợp xử lý cho action `finishEditingPost` trong reducer. Dưới đây là phân tích chi tiết của đoạn mã:

1. Xác định trường hợp xử lý action `finishEditingPost`:

- `builder.addCase(finishEditingPost, (state, action) => { ... })`: Đoạn mã này xác định một trường hợp xử lý cho action `finishEditingPost`.
- `finishEditingPost`: Action đã được định nghĩa bằng `createAction` từ Redux Toolkit.
- `(state, action) => { ... }`: Hàm xử lý được gọi khi action `finishEditingPost` được gọi.
- `state`: Tham số đại diện cho trạng thái hiện tại của reducer.
- `action`: Tham số đại diện cho action được gọi, bao gồm `payload` và các thông tin khác.

2. Xử lý action finishEditingPost:

- `const postId = action.payload.id`: Lấy giá trị `id` từ payload của action và gán cho biến `postId`, đại diện cho `ID` của bài viết cần hoàn thành chỉnh sửa.
- `state.postList.some((post, index) => { ... })`: Sử dụng phương thức `some()` để lặp qua mảng `postList` trong trạng thái hiện tại.
- `(post, index) => { ... }`: Hàm callback sẽ được gọi cho mỗi phần tử trong mảng `postList`.
- `if (post.id === postId) { ... }`: Kiểm tra xem `id` của bài viết có bằng `postId` hay không.
- `state.postList[index] = action.payload:` Nếu mà băng thì gán giá trị của payload của action cho bài viết tương ứng trong mảng `postList` tại địa chỉ index đó. Điều này cập nhật nội dung của bài viết đã chỉnh sửa.
- `return true`: Trả về true để kết thúc vòng lặp khi đã tìm thấy bài viết cần chỉnh sửa.
- `return false`: Trả về false để tiếp tục vòng lặp khi chưa tìm thấy bài viết cần chỉnh sửa.
- `state.editingPost = null`: Gán giá trị `null` cho thuộc tính `editingPost` trong trạng thái hiện tại của reducer. Điều này cho biết rằng việc chỉnh sửa bài viết đã hoàn thành và trạng thái của ứng dụng được cập nhật để phản ánh điều đó.

- Khi gán `action.payload` cho `state.postList[index]`, ta thực hiện việc cập nhật bài viết trong mảng `postList`. Bài viết có chỉ số `index` trong mảng sẽ được thay thế bằng nội dung của bài viết đã chỉnh sửa, nhờ đó cập nhật thông tin mới cho bài viết trong danh sách.

- Tóm lại, dòng mã `state.postList[index] = action.payload` thay thế bài viết trong mảng `postList` bằng nội dung của bài viết đã chỉnh sửa, từ đó cập nhật thông tin mới cho bài viết trong danh sách.

- Khi reducer này được gọi với action `finishEditingPost`, nó sẽ tìm bài viết có `ID` tương ứng trong mảng `postList`, cập nhật nội dung của bài viết và đánh dấu việc chỉnh sửa đã hoàn thành bằng cách gán `null` cho thuộc tính `editingPost` trong trạng thái hiện tại của `reducer`.

```jsx
.addMatcher(
    (action) => action.type.includes('cancel'),
    (state, action) => {
      console.log(current(state))
    }
  )
```

- Đoạn mã trên xác định một matcher trong reducer để xử lý các action có kiểu chứa chuỗi 'cancel'. Dưới đây là phân tích chi tiết của đoạn mã:

1. Xác định matcher:

- `.addMatcher((action) => action.type.includes('cancel'), (state, action) => { ... })`: Đoạn mã này xác định một `matcher` trong reducer để xử lý các `action` có kiểu chứa chuỗi (`string`) `'cancel'`.
- `(action) => action.type.includes('cancel')`: Hàm callback xác định các action mà `matcher` sẽ xử lý. Trong trường hợp này, `matcher` sẽ xử lý các action có kiểu chứa chuỗi 'cancel'.
- `(state, action) => { ... }`: Hàm xử lý được gọi khi `matcher` phù hợp với `action`.
- `state`: Tham số đại diện cho trạng thái hiện tại của reducer.
- `action`: Tham số đại diện cho action được gọi, bao gồm `payload` và các thông tin khác.

2. Xử lý action:

- `console.log(current(state))`: Đoạn mã này đơn giản chỉ in ra trạng thái (`state`) hiện tại của reducer bằng cách sử dụng hàm `current()` từ Redux Toolkit. Điều này giúp ghi lại trạng thái hiện tại của ứng dụng trong quá trình xử lý `action` liên quan đến hủy bỏ (cancel).

- `Matcher` này được sử dụng để bắt các `action` có kiểu chứa chuỗi `'cancel'` và thực hiện hành động in ra trạng thái hiện tại của reducer. Điều này hữu ích để gỡ lỗi và kiểm tra trạng thái của ứng dụng trong quá trình xử lý các `action` liên quan đến hủy bỏ.
