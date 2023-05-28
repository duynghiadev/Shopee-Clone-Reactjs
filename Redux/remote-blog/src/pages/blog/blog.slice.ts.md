## Giải thích code trong file `blog.slice.ts` ?

```jsx
import { current, PayloadAction, createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit'
import { initialPostList } from 'constants/blog'
import { Post } from 'types/blog.type'
import http from 'utils/http'
```

- Đoạn code trên bao gồm các import và khai báo biến để sử dụng trong việc quản lý trạng thái của blog. Hãy giải thích từng dòng code một:

- Import:

- `current`: Một hàm từ Redux Toolkit để truy cập vào giá trị hiện tại của một trạng thái trong reducer.
- `PayloadAction`: Một kiểu dữ liệu từ Redux Toolkit để đại diện cho một action có payload.
- `createSlice`: Một hàm từ Redux Toolkit để tạo ra một slice, bao gồm reducer và actions.
- `createAsyncThunk`: Một hàm từ Redux Toolkit để tạo ra một async thunk, cho phép xử lý các side effect và gọi các action khác.
- `AsyncThunk`: Một kiểu dữ liệu từ Redux Toolkit đại diện cho một async thunk.
- `initialPostList`: Một hằng số được import từ module `constants/blog`, chứa danh sách bài viết ban đầu.
- `Post`: Một kiểu dữ liệu được import từ `types/blog.type`, đại diện cho cấu trúc dữ liệu của một bài viết.
- `http`: Một module được import từ `utils/http`, đại diện cho công cụ gửi yêu cầu HTTP.

```jsx
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>
```

- `GenericAsyncThunk` là một alias kiểu dữ liệu được định nghĩa bằng cách sử dụng `AsyncThunk` từ Redux Toolkit. Nó đại diện cho một async thunk có kiểu trả về là `unknown`, `không có tham số đầu vào` và `có bất kỳ loại extra metadata nào`.
- `PendingAction` là một alias kiểu dữ liệu đại diện cho action khi một async thunk đang trong trạng thái đang chờ (`pending`). Nó được xác định bằng cách sử dụng `ReturnType` để truy cập thuộc tính `pending` của `GenericAsyncThunk`.
- `RejectedAction` là một alias kiểu dữ liệu đại diện cho action khi một async thunk bị từ chối (`rejected`). Nó được xác định bằng cách sử dụng `ReturnType` để truy cập thuộc tính `rejected` của `GenericAsyncThunk`.
- `FulfilledAction` là một alias kiểu dữ liệu đại diện cho action khi một async thunk đã hoàn thành (`fulfilled`). Nó được xác định bằng cách sử dụng `ReturnType` để truy cập thuộc tính `fulfilled` của `GenericAsyncThunk`.

- Các alias kiểu dữ liệu này giúp định nghĩa các kiểu dữ liệu cho các action tương ứng với trạng thái của async thunk (đang chờ, bị từ chối, hoàn thành). Điều này hỗ trợ trong việc xử lý các action trong reducers một cách dễ dàng và tổ chức hơn.

```jsx
interface BlogState {
  postList: Post[]
  editingPost: Post | null
  loading: boolean
  currentRequestId: undefined | string
}
```

- `BlogState` là một interface định nghĩa cấu trúc dữ liệu cho trạng thái của slice `blog`. Chi tiết của các thuộc tính trong `BlogState` là như sau:

- `postList` là một mảng các đối tượng `Post`, đại diện cho danh sách các bài viết.
- `editingPost` là một đối tượng `Post` hoặc `null`, đại diện cho bài viết đang được chỉnh sửa. Nếu giá trị của `editingPost` là một đối tượng `Post`, đó là bài viết đang được chỉnh sửa. Nếu giá trị của `editingPost` là `null`, không có bài viết nào đang được chỉnh sửa. Thuộc tính `editingPost` được sử dụng để theo dõi trạng thái của bài viết đang được chỉnh sửa trong ứng dụng. Khi người dùng bắt đầu chỉnh sửa bài viết, giá trị của `editingPost` sẽ được cập nhật thành đối tượng `Post` tương ứng. Khi quá trình chỉnh sửa hoàn thành hoặc bị hủy, giá trị của `editingPost` sẽ trở về `null`.
- `loading` là một giá trị boolean, đại diện cho trạng thái tải dữ liệu. Khi `loading` là `true`, đang có quá trình tải dữ liệu diễn ra khi `loading` là `false`, không có quá trình tải dữ liệu.
- `currentRequestId` là một chuỗi (`string`) hoặc `undefined`, đại diện cho id của request hiện tại đang được xử lý. Nếu không có request nào đang được xử lý, giá trị của `currentRequestId` sẽ là `undefined`.

- Interface `BlogState` này mô tả cấu trúc dữ liệu của trạng thái trong slice `blog` và được sử dụng để khởi tạo giá trị ban đầu cho trạng thái (`initialState`) và trong việc định nghĩa các reducers để thay đổi trạng thái của slice.

```jsx
const initialState: BlogState = {
  postList: initialPostList,
  editingPost: null,
  loading: false,
  currentRequestId: undefined
}
```

- `initialState` định nghĩa trạng thái ban đầu của Redux store cho slice `blog`.

- `postList` là một mảng chứa danh sách các bài viết. Giá trị ban đầu của `postList` được gán bằng `initialPostList` là một mảng các bài viết dược khởi tạo từ trước.
- `editingPost` là một đối tượng `Post` hoặc `null`. Giá trị ban đầu của `editingPost` được gán là `null`, cho biết không có bài viết nào đang được chỉnh sửa khi ban đầu.
- `loading` là một giá trị `boolean`, biểu thị trạng thái hiện tại của tiến trình tải dữ liệu. Giá trị ban đầu của `loading` được gán là `false`, cho biết không có quá trình tải dữ liệu nào đang diễn ra khi ban đầu.
- `currentRequestId` là một chuỗi (`string`) hoặc `undefined`, đại diện cho requestId hiện tại của tiến trình tải dữ liệu. Giá trị ban đầu của `currentRequestId` được gán là `undefined`, cho biết không có requestId nào đang tồn tại khi ban đầu.

=> `initialState` cung cấp các giá trị khởi tạo ban đầu cho các thuộc tính trong slice `blog`. Các giá trị này sẽ được cập nhật và thay đổi trong quá trình thực thi các reducers và thunks của slice.

```jsx
export const getPostList = createAsyncThunk('blog/getPostList', async (_, thunkAPI) => {
  const response = await http.get<Post[]>('posts', {
    signal: thunkAPI.signal
  })
  return response.data
})
```

- Đoạn code trên định nghĩa một `createAsyncThunk` có tên `getPostList` trong slice blog. `createAsyncThunk` là một hàm được cung cấp bởi Redux Toolkit để tạo ra các thunks cho các tác vụ không đồng bộ (`asynchronous`).

- `getPostList` là một async thunk, nghĩa là nó sẽ thực hiện các tác vụ không đồng bộ và tự động xử lý các trạng thái liên quan đến tác vụ đó, bao gồm trạng thái "pending" (đang chờ), "fulfilled" (hoàn thành) và "rejected" (bị từ chối).

- Cụ thể, khi `getPostList` được gọi, nó sẽ thực hiện yêu cầu HTTP GET đến đường dẫn `/posts` bằng cách sử dụng thư viện `http` và truyền `thunkAPI.signal` để có thể hủy yêu cầu (nếu cần). Kết quả trả về từ yêu cầu HTTP sẽ được trả về dưới dạng `response.data`.

- Trong Redux Toolkit, các trạng thái "pending", "fulfilled" và "rejected" sẽ được tự động xử lý thông qua việc sử dụng các reducers đã được tạo ra tự động bởi `createAsyncThunk`. Ví dụ trong trường hợp trạng thái "pending" sẽ được xử lý bởi một action có kiểu `{type}/pending` (trong trường hợp này là `blog/getPostList/pending`), hoặc trạng thái "fulfilled" sẽ được xử lý bởi một action có kiểu `{type}/fulfilled` (ví dụ: `blog/getPostList/fulfilled`), hoặc trạng thái "rejected" sẽ được xử lý bởi một action có kiểu `{type}/rejected` (ví dụ: `blog/getPostList/rejected`).

- Điều này cho phép bạn dễ dàng thực hiện các tác vụ không đồng bộ trong Redux và theo dõi trạng thái của chúng thông qua reducers và các action tương ứng.

```jsx
export const addPost = createAsyncThunk('blog/addPost', async (body: Omit<Post, 'id'>, thunkAPI) => {
  try {
    const response = await http.post<Post>('posts', body, {
      signal:thunkAPI.signal
    })
    return response.data
  } catch (error: any) {
    if (error.name === 'AxiosError' && error.response.status === 422) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
    throw error
  }
})
```

- `createAsyncThunk`: Đây là một hàm helper từ Redux Toolkit để tạo ra một async thunk. Nó nhận vào một tên hành động (action) (`'blog/addPost'`) và một hàm callback (`async (body, thunkAPI) => { ... }`) để xử lý logic của async thunk.

- `addPost`: Đây là async thunk được tạo ra bởi `createAsyncThunk`. Khi được gọi, nó sẽ thực hiện một yêu cầu HTTP POST để thêm một bài viết mới vào danh sách bài viết.

- `body: Omit<Post, 'id'>`: Đây là một phần của TypeScript và nó chỉ định kiểu dữ liệu cho đối số `body` của hàm `addPost`. Trong kiểu dữ liệu `Post`, có một thuộc tính là `'id'` đại diện cho ID của bài viết. Tuy nhiên, khi thêm một bài viết mới, chúng ta không cần quan tâm đến giá trị của `'id'` vì nó sẽ được tạo ra tự động. Vì vậy, `Omit<Post, `'id'`>` được sử dụng để tạo ra một kiểu dữ liệu mới bằng cách loại bỏ thuộc tính `'id'` từ kiểu dữ liệu `Post`. Kết quả là, đối số `body` của hàm `addPost` sẽ là một đối tượng có cùng kiểu dữ liệu như `Post`, nhưng không chứa thuộc tính `'id'`. Điều này cho phép chúng ta truyền các thuộc tính khác của bài viết vào hàm `addPost` để thêm một bài viết mới vào danh sách.

- `http.post<Post>('posts', body, { signal: thunkAPI.signal })`: Đây là yêu cầu HTTP POST sử dụng thư viện `http`. Nó gửi dữ liệu bài viết (`body`) đến đường dẫn `/posts`. `thunkAPI.signal` được truyền vào để cho phép hủy yêu cầu khi cần thiết. Dòng `signal: thunkAPI.signal` được sử dụng để cung cấp một tín hiệu (`signal`) từ `thunkAPI` cho các yêu cầu `HTTP` được gửi đi trong các hàm async thunks.

- Trong Redux Toolkit, `thunkAPI` cung cấp một số thuộc tính hữu ích, bao gồm `signal`, là một đối tượng `AbortSignal`. Đối tượng `AbortSignal` được sử dụng để gửi tín hiệu hủy (`abort`) cho các yêu cầu `HTTP`. Khi một tín hiệu hủy được gửi đi, nếu yêu cầu `HTTP` chưa hoàn thành, nó có thể bị hủy bỏ, giúp quản lý việc hủy yêu cầu và ngăn chặn việc xử lý kết quả không cần thiết.

- Với việc sử dụng `signal: thunkAPI.signal` trong yêu cầu `HTTP`, chúng ta đang chuyển tín hiệu hủy từ Redux Toolkit vào yêu cầu HTTP. Điều này cho phép chúng ta kiểm soát việc hủy bỏ yêu cầu HTTP khi cần thiết, chẳng hạn như khi người dùng rời khỏi trang hoặc hủy một thao tác đang diễn ra.

- `try { ... } catch (error: any) { ... }`: Đây là cấu trúc try-catch để xử lý các lỗi trong quá trình gửi yêu cầu HTTP.

- `http.post` trả về một phản hồi (`response`) từ server khi yêu cầu thành công. Dữ liệu bài viết mới được trả về từ `response.data` và sẽ được đưa vào trong action payload. Trạng thái "`fulfilled`" sẽ được tự động xử lý bởi Redux Toolkit và kết quả trả về sẽ được cập nhật trong Redux store.

- Trong trường hợp xảy ra lỗi, chúng ta kiểm tra xem lỗi có phải là một `AxiosError` và mã phản hồi có phải là `422` (Unprocessable Entity) hay không. Nếu đúng, `thunkAPI.rejectWithValue(error.response.data)` được gọi để trả về một giá trị bị từ chối (rejected value) là dữ liệu phản hồi từ `server`. Điều này cho phép chúng ta truy cập vào dữ liệu phản hồi từ action handler khi trạng thái "rejected" được xử lý trong Redux Toolkit.

- Nếu lỗi không phải là `AxiosError` hoặc mã phản hồi không phải là `422`, chúng ta ném lại lỗi để xử lý bên ngoài async thunk (ví dụ: bởi một middleware hoặc một khối try-catch bên ngoài).

- Tóm lại, `addPost` là một async thunk được tạo ra bằng `createAsyncThunk` để thêm một bài viết mới vào danh sách bài viết. Nó xử lý các tình huống thành công và lỗi của yêu cầu HTTP và cập nhật trạng thái tương ứng trong Redux store.

```jsx
export const updatePost = createAsyncThunk(
  'blog/updatePost',
  async ({ postId, body }: { postId: string; body: Post }, thunkAPI) => {
    try {
      const response = await http.put<Post>(`posts/${postId}`, body, {
        signal: thunkAPI.signal
      })
      return response.data
    } catch (error: any) {
      if (error.name === 'AxiosError' && error.response.status === 422) {
        return thunkAPI.rejectWithValue(error.response.data)
      }
      throw error
    }
  }
)
```

- Đoạn code trên định nghĩa một async thunk function có tên là `updatePost` trong slice "`blog`". Đây là một action async để cập nhật thông tin của một bài viết trong hệ thống blog.

1. Hàm `updatePost` được khai báo bằng cách sử dụng `createAsyncThunk` từ Redux Toolkit. Nó nhận vào các tham số sau:

- `blog/updatePost`: Một string đại diện cho tên của action.
- Một hàm async callback nhận vào đối tượng `{ postId, body }` và `thunkAPI` là đối tượng cung cấp bởi Redux Toolkit.

2. Callback async nhận vào đối tượng `{ postId, body }` và `thunkAPI`. Đối tượng `postId` là một chuỗi (`string`) đại diện cho ID của bài viết cần cập nhật, và `body` là một đối tượng `Post` chứa thông tin mới của bài viết.

3. Trong khối try-catch, ta thực hiện gửi yêu cầu HTTP PUT để cập nhật bài viết. Đường dẫn của yêu cầu HTTP được xây dựng bằng cách sử dụng `postId` để định vị bài viết cần cập nhật.

4. Sử dụng `http.put<Post>(...)` để gửi yêu cầu PUT với thông tin mới của bài viết. Đối số `body` chứa thông tin cập nhật, và `{ signal: thunkAPI.signal }` được sử dụng để chuyển tín hiệu hủy từ Redux Toolkit vào yêu cầu HTTP.

5. Nếu yêu cầu HTTP thành công, ta trả về dữ liệu từ phản hồi (response) bằng cách sử dụng `response.data`. Điều này đảm bảo rằng kết quả cập nhật mới nhất được trả về từ `server`.

6. Trong khối catch, ta xử lý các lỗi có thể xảy ra trong quá trình gửi yêu cầu HTTP PUT để cập nhật bài viết. Đầu tiên, ta sử dụng `error.name === 'AxiosError'` để kiểm tra xem lỗi có phải là một lỗi được tạo ra bởi thư viện Axios hay không. Điều này giúp ta xác định rằng lỗi xảy ra trong quá trình gửi yêu cầu HTTP.

- Tiếp theo, ta kiểm tra `error.response.status === 422` để xác định rằng lỗi này có mã trạng thái (status) là 422 hay không. Mã trạng thái 422 thường được sử dụng để đại diện cho lỗi xảy ra khi dữ liệu gửi lên server không hợp lệ.

- Nếu cả hai điều kiện trên đều đúng, tức là lỗi là một AxiosError và có mã trạng thái 422, ta sử dụng `thunkAPI.rejectWithValue(error.response.data)` để trả về giá trị lỗi từ phản hồi của yêu cầu HTTP. Điều này cho phép ta xử lý lỗi 422 một cách riêng biệt trong việc xử lý kết quả của thunk function.

- Nếu không có lỗi nào xảy ra hoặc lỗi không phải là AxiosError hoặc không có mã trạng thái 422, ta sẽ sử dụng `throw error` để ném lại lỗi và cho phép mã gọi thunk function xử lý lỗi đó.

- Tóm lại, đoạn code trên định nghĩa một async thunk function để cập nhật thông tin của một bài viết trong slice blog. Nó sử dụng HTTP PUT để gửi yêu cầu cập nhật thông tin mới và xử lý các lỗi có thể xảy ra trong quá trình này.

```jsx
export const deletePost = createAsyncThunk('blog/deletePost', async (postId: string, thunkAPI) => {
  const response = await http.delete<Post>(`posts/${postId}`, {
    signal: thunkAPI.signal
  })
  return response.data
)
```

- Đoạn code trên định nghĩa một async thunk function có tên là `deletePost` trong slice blog. Thunk này được sử dụng để xóa một bài viết từ server.

- Async thunk function này nhận một tham số là `postId`, đại diện cho ID của bài viết cần xóa. Tham số này được truyền vào từ phần gọi của thunk function.

- Trong hàm xử lý của async thunk, chúng ta sử dụng từ khóa `await` để đợi phản hồi từ yêu cầu HTTP DELETE đến endpoint `posts/${postId}` để xóa bài viết. Chúng ta sử dụng phương thức `http.delete` và truyền URL endpoint cần xóa bài viết.

- Cấu trúc của phương thức `http.delete` như sau:

```jsx
`http.delete`<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
```

- Trong trường hợp này, chúng ta đang sử dụng kiểu dữ liệu `<Post>` cho phương thức `http.delete`, cho biết chúng ta mong đợi dữ liệu trả về là một đối tượng kiểu `Post`.

- Chúng ta cũng truyền `thunkAPI.signal` vào tùy chọn `signal` trong cấu hình (config) của yêu cầu DELETE. Điều này cho phép chúng ta sử dụng tín hiệu hủy bỏ (cancellation signal) để có khả năng hủy yêu cầu khi cần thiết, ví dụ như khi người dùng thoát khỏi trang hoặc hủy bỏ thao tác xóa bài viết.

- Sau khi yêu cầu DELETE thành công, chúng ta trả về dữ liệu từ phản hồi (`response.data`), tức là dữ liệu của bài viết đã bị xóa. Giá trị này sẽ được truyền vào `fulfilled` action của async thunk function và sử dụng để cập nhật trạng thái Redux store của slice blog.

```jsx
const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    startEditingPost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    }
  }
}),
```

- Đoạn mã trên tạo ra một slice của Redux với tên là '`blog`' bằng cách sử dụng hàm `createSlice` từ thư viện `@reduxjs/toolkit`. Slice này định nghĩa các `reducer` và `action creators` liên quan đến slice `blog`.

- `name`: 'blog' xác định tên của slice là 'blog'.
- `initialState`: đại diện cho trạng thái ban đầu của slice, được định nghĩa trước đó.
- `reducers`: là một đối tượng chứa các reducer và action creators của slice.

- `startEditingPost`: Đây là một reducer được kích hoạt khi action `startEditingPost` được dispatch. Reducer này nhận vào hai đối số: `state` (trạng thái hiện tại của slice) và `action` (payload action). Payload action có kiểu dữ liệu là `string`, đại diện cho `postId` của bài viết cần chỉnh sửa.
- Trong reducer này, chúng ta tìm bài viết trong `state.postList` có `id` trùng khớp với `postId`, sau đó gán bài viết tìm được vào `state.editingPost`. Nếu không tìm thấy bài viết, `state.editingPost` được gán giá trị `null`.

- Reducer này sẽ tự động tạo ra action creator tương ứng có tên là `startEditingPost`. Action creator này có thể được gọi và dispatch để thay đổi trạng thái của slice blog trong Redux store.

```jsx
const blogSlice = createSlice({
  reducers: {
    cancelEditingPost: (state) => {
      state.editingPost = null
    }
  }
})
```

- Đoạn mã trên định nghĩa một reducer và action creator cho việc hủy bỏ việc chỉnh sửa bài viết trong slice blog.

- `cancelEditingPost`: Đây là một reducer được kích hoạt khi action `cancelEditingPost` được dispatch. Reducer này chỉ nhận vào một đối số là `state` (trạng thái hiện tại của slice blog ). Trong reducer này, `state.editingPost` được gán giá trị `null`, tương ứng với việc hủy bỏ việc chỉnh sửa bài viết.

- Reducer này sẽ tự động tạo ra action creator tương ứng có tên là `cancelEditingPost`. Action creator này có thể được gọi và dispatch để thay đổi trạng thái của slice blog trong Redux store.

```jsx
const blogSlice = createSlice({
  extraReducers(builder) {
    builder
      .addCase(getPostList.fulfilled, (state, action: any) => {
        state.postList = action.payload
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.postList.push(action.payload)
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.postList.find((post, index) => {
          if (post.id === action.payload.id) {
            state.postList[index] = action.payload
            return true
          }
          return false
        })
        state.editingPost = null
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        const postId = action.meta.arg
        const deletePostIndex = state.postList.findIndex((post) => post.id === postId)
        if (deletePostIndex !== -1) {
          state.postList.splice(deletePostIndex, 1)
        }
      })
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith('/pending'),
        (state, action) => {
          state.loading = true
          state.currentRequestId = action.meta.requestId
        }
      )
      .addMatcher<RejectedAction | FulfilledAction>(
        (action) => action.type.endsWith('/rejected') || action.type.endsWith('/fulfilled'),
        (state, action) => {
          if (state.loading && state.currentRequestId === action.meta.requestId) {
            state.loading = false
            state.currentRequestId = undefined
          }
        }
      )
      .addDefaultCase((state, action) => {
        console.log(`action type: ${action.type}`, current(state))
      })
  }
  )
```

- Đoạn mã trên định nghĩa các extra reducers cho slice `blog`. Extra reducers được sử dụng để xử lý các action không được định nghĩa trong reducers ban đầu, chẳng hạn các action từ các async thunks.

✅✅ `.addCase(getPostList.fulfilled, (state, action: any) => { ... })`: Xử lý khi action `getPostList.fulfilled` được kích hoạt và thành công. Trạng thái `postList` trong `state` sẽ được cập nhật bằng giá trị `action.payload`, là dữ liệu bài viết đã được trả về từ API.

✅✅ `.addCase(addPost.fulfilled, (state, action) => { ... })`: Xử lý khi action `addPost.fulfilled` được kích hoạt và thành công. Bài viết mới được thêm vào `postList` bằng cách sử dụng `state.postList.push(action.payload)`, trong đó `action.payload` chứa thông tin bài viết mới.

✅✅ `.addCase(updatePost.fulfilled, (state, action) => { ... })`:

- Đoạn mã trên định nghĩa xử lý khi action `updatePost.fulfilled` được kích hoạt và thành công. Nó thực hiện các bước sau:

- `state.postList.find((post, index) => { ... })`: Hàm `find` được sử dụng để tìm bài viết trong `state.postList` có `post.id` trùng với `action.payload.id`. Nếu tìm thấy, callback function được thực thi.

- Trong callback function, kiểm tra nếu `post.id` trùng khớp với `action.payload.id`, tức là đã tìm thấy bài viết cần cập nhật.

- `state.postList[index] = action.payload`: Gán bài viết cập nhật từ `action.payload` cho bài viết tìm thấy trong `state.postList`. Điều này cập nhật nội dung của bài viết trong danh sách.

- `return true`: Kết thúc vòng lặp `find` và dừng việc tìm kiếm tiếp.

- `state.editingPost = null`: Gán giá trị `null` cho `editingPost`, đánh dấu rằng không có bài viết đang được chỉnh sửa.

=> Tóm lại, đoạn code trên cập nhật bài viết đã được chỉnh sửa trong danh sách `postList` của `state` và đánh dấu rằng không có bài viết đang được chỉnh sửa.

✅✅ `.addCase(deletePost.fulfilled, (state, action) => { ... })`:

- Đoạn mã trên định nghĩa xử lý khi action `deletePost.fulfilled` được kích hoạt và thành công. Nó thực hiện các bước sau:

- `const postId = action.meta.arg`: Lấy giá trị `postId` từ thuộc tính `arg` của `action.meta`. Đây là giá trị được truyền vào khi gọi action `deletePost`.

- `const deletePostIndex = state.postList.findIndex((post) => post.id === postId)`: Sử dụng hàm `findIndex` để tìm vị trí của bài viết cần xóa trong `state.postList`. Nếu tìm thấy, `deletePostIndex` sẽ lưu trữ vị trí đầu tiên của bài viết trong mảng `postList`.

- `if (deletePostIndex !== -1) { ... }`: Kiểm tra nếu `deletePostIndex` khác -1, tức là đã tìm thấy bài viết cần xóa.

- `state.postList.splice(deletePostIndex, 1)`: Sử dụng phương thức `splice` để xóa bài viết khỏi `state.postList`. Đoạn mã này xóa 1 phần tử tại vị trí `deletePostIndex` trong mảng.

=> Tóm lại, đoạn mã trên xóa bài viết khỏi danh sách `postList` trong state nếu tìm thấy bài viết có `id` trùng khớp với `postId` được truyền vào.

✅✅ `.addMatcher<PendingAction>(...)`:

- Đoạn mã trên sử dụng phương thức `.addMatcher` để xử lý các action có trạng thái "`pending`" (đang chờ xử lý). Nó xác định một matcher (bộ so khớp) để kiểm tra các action và thực hiện các thay đổi trong trạng thái.

  - `matcher: (action) => action.type.endsWith('/pending')`: Đây là hàm so khớp được cung cấp cho matcher. Nó kiểm tra xem action có kết thúc bằng '/pending' hay không, chỉ định rằng action này đang ở trạng thái "pending".

  - `(state, action) => { ... }`: Đây là hàm xử lý được gọi nếu matcher tìm thấy một action khớp. Nó nhận vào hai tham số là `state` (trạng thái hiện tại của slice) và `action` (action đang được xử lý).

- Trong trường hợp này, khi một action có trạng thái "`pending`" được tìm thấy, hàm xử lý được gọi sẽ thực hiện các thay đổi sau:

- `state.loading = true`: Thiết lập thuộc tính `loading` của state thành `true`, chỉ định rằng đang có quá trình tải dữ liệu hoặc xử lý đang diễn ra.

- `state.currentRequestId = action.meta.requestId`: Gán giá trị `requestId` từ thuộc tính `meta` của action vào thuộc tính `currentRequestId` của state. Điều này có thể được sử dụng để theo dõi `requestId` của action đang được xử lý, cho phép kiểm tra xem action hiện tại có phải là action mới nhất hay không trong trường hợp xử lý bất đồng bộ.

✅✅ `.addMatcher<RejectedAction | FulfilledAction>(...)`:

- Đoạn mã trên sử dụng phương thức `.addMatcher` để xử lý các action có trạng thái "rejected" (thất bại) hoặc "fulfilled" (hoàn thành). Nó xác định một matcher (bộ so khớp) để kiểm tra các action và thực hiện các thay đổi trong trạng thái.

  - `matcher: (action) => action.type.endsWith('/rejected') || action.type.endsWith('/fulfilled')`: Đây là hàm so khớp được cung cấp cho matcher. Nó kiểm tra xem action có kết thúc bằng '/rejected' hoặc '/fulfilled' hay không, chỉ định rằng action này đã hoàn thành hoặc thất bại.

  - `(state, action) => { ... }`: Đây là hàm xử lý được gọi nếu matcher tìm thấy một action khớp. Nó nhận vào hai tham số là `state` (trạng thái hiện tại của slice) và `action` (action đang được xử lý).

- Trong trường hợp này, khi một action có trạng thái "rejected" hoặc "fulfilled" được tìm thấy, hàm xử lý được gọi sẽ thực hiện các thay đổi sau:

  - `if (state.loading && state.currentRequestId === action.meta.requestId) { ... }`: Kiểm tra xem trạng thái `loading` đang là `true` và `currentRequestId` trong state khớp với `requestId` của action hiện tại. Điều này đảm bảo rằng action được xử lý là action mới nhất và không phải là action trước đó.

  - `state.loading = false`: Thiết lập thuộc tính `loading` của state thành `false`, chỉ định rằng quá trình tải dữ liệu hoặc xử lý đã hoàn thành.

  - `state.currentRequestId = undefined`: Thiết lập `currentRequestId` của state thành `undefined`, đánh dấu rằng không có `requestId` nào đang được xử lý.

=> Đoạn mã này đảm bảo rằng khi một action được xử lý xong hoặc thất bại, trạng thái `loading` và `currentRequestId` sẽ được cập nhật phù hợp để chỉ định trạng thái hoạt động hiện tại của slice blog.

✅✅ `.addDefaultCase((state, action) => { ... })`:

- `addDefaultCase` là một trình xử lý mặc định được sử dụng trong `extraReducers` của slice để xử lý các action không khớp với bất kỳ case nào khác đã được xác định trước đó. Trong trường hợp này, nếu một action không khớp với bất kỳ case nào, đoạn mã được cung cấp sẽ được thực thi.

- `(state, action) => { ... }`: Đây là hàm xử lý được gọi khi không có case nào khớp với action. Nó nhận vào hai tham số là `state` (trạng thái hiện tại của slice) và `action` (action đang được xử lý).

- Trong trường hợp này, hàm xử lý mặc định được định nghĩa để in ra thông tin về action type và trạng thái hiện tại của slice bằng cách sử dụng console.log.

  - `console.log(action type: ${action.type}, current(state))`: Đoạn mã này in ra thông tin về loại (`type`) action và trạng thái (`state`) hiện tại của slice. `action.type` chứa loại của action không khớp, và `current(state)` trả về trạng thái hiện tại của slice.

=> Đoạn mã này giúp ghi log các action không khớp để theo dõi và gỡ lỗi khi cần thiết.

```jsx
export const { cancelEditingPost, startEditingPost } = blogSlice.actions
const blogReducer = blogSlice.reducer

export default blogReducer
```

- Trong đoạn code trên:

  - `cancelEditingPost` và `startEditingPost` là hai action creators được tạo ra từ slice `blogSlice`. Chúng là các hàm đã được tạo sẵn để tạo ra các action tương ứng với các reducer đã định nghĩa trong slice. Các action creators này được xuất ra và có thể sử dụng trong việc gửi các action liên quan đến việc hủy bỏ hoặc bắt đầu chỉnh sửa một bài viết trong slice blog.

  - `blogReducer` là reducer được tạo ra từ slice `blogSlice`. Nó đại diện cho reducer chính của slice blog. Reducer này sẽ xử lý các action đã được định nghĩa trong slice và cập nhật trạng thái của module blog tương ứng.

- Cuối cùng, `blogReducer` được xuất ra để có thể sử dụng trong việc tạo ra store Redux hoặc kết hợp với các reducer khác của ứng dụng.
