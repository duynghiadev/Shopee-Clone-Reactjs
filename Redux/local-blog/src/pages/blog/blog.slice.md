## Giải thích code chi tiết:

- Trong đoạn code trên, chúng ta đang tạo một slice cho phần quản lý blog trong ứng dụng Redux. Hãy giải thích từng phần một:

1. Định nghĩa kiểu dữ liệu state và khởi tạo giá trị ban đầu:

```jsx
interface BlogState {
  postList: Post[]
  editingPost: Post | null
}

const initialState: BlogState = {
  postList: initialPostList,
  editingPost: null
}
```

- Trong kiểu dữ liệu `BlogState`, chúng ta định nghĩa các thuộc tính của state trong slice quản lý blog bằng cách khai báo các trường dữ liệu và kiểu của chúng. Tức là chúng ta định nghĩa các thành phần dữ liệu mà state của slice blog sẽ bao gồm.

- Chúng ta định nghĩa hai thuộc tính của state trong slice quản lý blog là `postList` và `editingPost`.

  - `postList` là một mảng (`Post[]`) chứa danh sách các bài viết. Đây là nơi lưu trữ và quản lý các bài viết trong ứng dụng. Mỗi phần tử trong mảng là một đối tượng có kiểu dữ liệu `Post`, định nghĩa trước đó.

  - `editingPost` là một đối tượng (`Post | null`) đại diện cho bài viết đang được chỉnh sửa. Nó có kiểu dữ liệu `Post` hoặc `null`. Khi một bài viết đang được chỉnh sửa, giá trị của `editingPost` sẽ là bài viết đó. Khi không có bài viết nào đang được chỉnh sửa, giá trị của `editingPost` sẽ là `null`.

- Việc định nghĩa các thuộc tính này trong `BlogState` cho phép chúng ta lưu trữ và truy cập vào các trạng thái của ứng dụng liên quan đến danh sách bài viết và bài viết đang được chỉnh sửa trong slice quản lý blog.

2. Tạo slice bằng createSlice:

- Giải thích tổng quan về code:

```jsx
const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    // Các reducers và action creators
  },
  extraReducers(builder) {
    // Các extra reducers
  }
})
```

- Trong đoạn mã trên, chúng ta sử dụng hàm `createSlice` từ Redux Toolkit để tạo một slice mới cho việc quản lý state của blog. Dưới đây là các thành phần chính của đoạn mã:

  - `name: 'blog'`: Đây là tên của slice, giúp xác định namespace cho các action và reducer của slice này. Khi tương tác với store, ta sẽ sử dụng tên này để truy cập đến các action và reducer của slice.

  - `initialState`: Đây là trạng thái ban đầu của slice, được khai báo trước đó trong biến `initialState`. Trạng thái này chứa các thuộc tính postList và editingPost như đã định nghĩa trong kiểu BlogState.

  - `reducers`: Đây là một đối tượng chứa các reducers và action creators cho slice. Trong ví dụ này, chỉ có phần khai báo các reducers mà không có khai báo action creators. Chúng ta có thể thêm các reducers vào đây để xử lý các action tương ứng và cập nhật state.

  - `extraReducers(builder)`: Đây là phần cho phép chúng ta khai báo các extra reducers, tức là reducers được thực hiện trên action từ các slice khác hoặc action không được khai báo trước đó trong reducers. Trong ví dụ này, chúng ta không cụ thể khai báo extra reducers, mà chỉ có một số ví dụ đơn giản về cách sử dụng builder để xử lý action.

- Trong đoạn mã trên, `deletePost` không phải là một `action creator` mà là một `reducer`.

- Trên thực tế, `createSlice` từ Redux Toolkit đã tự động tạo các `action creators` tương ứng cho mỗi `reducer` được khai báo trong phần `reducers`. Trong trường hợp này, action creator tương ứng với reducer `deletePost` sẽ có cùng tên là `deletePost`.

- Vì vậy, khi sử dụng slice `blogSlice` trong ứng dụng của bạn, bạn có thể import action creator `deletePost` từ `blogSlice.actions` và sử dụng nó để dispatch action. Ví dụ: `dispatch(deletePost(postId))`.

3. Định nghĩa reducers và action creators:

- Giải thích chi tiết đoạn code:

```jsx
const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    deletePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
      if (foundPostIndex !== -1) {
        state.postList.splice(foundPostIndex, 1)
      }
    },
    startEditingPost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    },
    cancelEditingPost: (state) => {
      state.editingPost = null
    },
    finishEditingPost: (state, action: PayloadAction<Post>) => {
      const postId = action.payload.id
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })
      state.editingPost = null
    },
    addPost: {
      // immerjs
      // immerjs giúp chúng ta mutate một state an toàn
      reducer: (state, action: PayloadAction<Post>) => {
        const post = action.payload
        state.postList.push(post)
      },
      prepare: (post: Omit<Post, 'id'>) => ({
        payload: {
          ...post,
          id: nanoid()
        }
      })
    }
  }
}),
```

- Trong đoạn mã trên, chúng ta đang tạo một slice có tên là `'blog'` bằng cách sử dụng `createSlice` từ Redux Toolkit.

- `deletePost` là một reducer, nhận vào `state` và một `action` có kiểu `PayloadAction<string>`. Trong reducer này, chúng ta truyền vào `action.payload` (một chuỗi đại diện cho `postId`) để tìm vị trí của bài viết trong danh sách `postList`. Nếu tìm thấy, chúng ta sử dụng `splice` để xóa bài viết đó khỏi danh sách.

- `startEditingPost` cũng là một `reducer`, nhận vào `state` và một `action` có kiểu `PayloadAction<string>`. Trong reducer này, chúng ta truyền vào `action.payload` (một chuỗi đại diện cho `postId`) để tìm bài viết trong danh sách `postList` và gán nó cho thuộc tính `editingPost` trong state.

- `cancelEditingPost` là một `reducer`, chỉ nhận vào `state`. Trong reducer này, chúng ta đơn giản gán `null` cho thuộc tính `editingPost` trong `state`, đánh dấu việc hủy bỏ (`cancel`) việc chỉnh sửa bài viết (`edit`).

- `finishEditingPost` là một `reducer`, nhận vào `state` và một `action` có kiểu `PayloadAction<Post>`. Trong reducer này, chúng ta truyền vào `action.payload` (một đối tượng đại diện cho bài viết) để tìm và cập nhật bài viết tương ứng trong danh sách `postList`. Sau đó, chúng ta cũng gán `null` cho thuộc tính `editingPost` trong state.

- `addPost` là một `reducer` có cấu trúc phức tạp hơn. Nó không chỉ là một hàm reducer, mà còn chứa một thuộc tính `prepare` và một hàm reducer bên trong `reducer`. Trước khi hàm reducer được gọi, `prepare` được thực thi để chuẩn bị dữ liệu. Trong ví dụ này, chúng ta sử dụng `nanoid()` để tạo một `id` duy nhất cho bài viết và truyền các thuộc tính khác từ `post` vào `payload`. Hàm reducer sẽ nhận vào `state` và `action`, và chúng ta sử dụng `push` để thêm bài viết vào danh sách `postList` trong state.

- Đây là một ví dụ về cách sử dụng `createSlice` để định nghĩa các reducer và action creators cho một slice trong Redux Toolkit.

4. Định nghĩa extra reducers:

```jsx
extraReducers(builder) {
  builder
    .addMatcher(
      (action) => action.type.includes('cancel'),
      (state, action) => {
        console.log(current(state))
      }
    )
    .addDefaultCase((state, action) => {
      console.log(`action type: ${action.type}`, current(state))
    })
}
```

- Trong đoạn mã trên, chúng ta sử dụng phương thức `extraReducers` của `createSlice` để xử lý các action mà không thuộc vào reducers đã được định nghĩa trong slice.

  - `addMatcher` là một phương thức trong `extraReducers` để xác định xem action có khớp với một điều kiện nhất định hay không. Trong ví dụ này, chúng ta sử dụng `(action) => action.type.includes('cancel')` làm điều kiện. Nếu action type chứa chuỗi `'cancel'`, điều kiện sẽ trả về `true`, và reducer đi kèm sẽ được thực thi.

  - Trong trường hợp điều kiện khớp, chúng ta truyền một reducer function vào để xử lý action. Trong ví dụ này, reducer nhận vào `state` và `action`, và chúng ta sử dụng `current(state)` để lấy trạng thái hiện tại và log ra.

  - `addDefaultCase` là một phương thức trong `extraReducers` được sử dụng để xử lý các action mà không khớp với bất kỳ điều kiện nào khác. Trong ví dụ này, chúng ta truyền một reducer function vào để xử lý các action mặc định. Reducer này nhận vào `state` và `action`, và chúng ta sử dụng `current(state)` để lấy trạng thái hiện tại và log ra, cùng với action type.

- Tổng quan, phần `extraReducers` trong slice cho phép chúng ta xử lý các action mà không thuộc vào reducers đã được định nghĩa sẵn. Chúng ta có thể sử dụng `addMatcher` để đặt điều kiện cho action và xử lý nó trong reducer tương ứng, hoặc sử dụng `addDefaultCase` để xử lý các action mặc định.

5. Export action creators và reducer:

```jsx
export const { addPost, cancelEditingPost, deletePost, finishEditingPost, startEditingPost } = blogSlice.actions
const blogReducer = blogSlice.reducer

export default blogReducer
```

- Cuối cùng, chúng ta export các action creators đã định nghĩa và reducer của slice để có thể sử dụng trong ứng dụng.

- Cuối cùng, chúng ta export các action creators và reducer được tạo ra bởi createSlice thông qua blogSlice.actions và blogSlice.reducer. Điều này cho phép chúng ta import và sử dụng chúng trong các thành phần khác của ứng dụng.
