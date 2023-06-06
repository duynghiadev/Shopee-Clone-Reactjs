❌❌❌❌ Bổ sung thêm khái niệm cho Docs ❌❌❌❌

## Xử lý lỗi trong RTK Query ?

- Trong RTK Query, có một số cách để xử lý lỗi. Dưới đây là một số phương pháp phổ biến để xử lý lỗi trong RTK Query:

1. Sử dụng cú pháp `try-catch`: Bạn có thể sử dụng cú pháp `try-catch` để bắt các lỗi xảy ra trong các `mutation` hoặc `query`. Điều này cho phép bạn xử lý các lỗi cụ thể và thực hiện các hành động tương ứng, như hiển thị thông báo lỗi cho người dùng.

```jsx
try {
  const result = await api.mutationFunction(payload)
  // Xử lý kết quả thành công
} catch (error) {
  // Xử lý lỗi
  console.error('Error:', error)
}
```

2. Sử dụng hooks built-in của RTK Query: RTK Query cung cấp các hooks như `useGetQuery`, `useMutation`, `useQuery`, v.v., và chúng có thể trả về các thông tin về lỗi khi `request` gặp vấn đề. Bạn có thể sử dụng các thông tin này để xử lý lỗi.

```jsx
const { data, error, isLoading } = useGetQuery()
if (isLoading) {
  // Đang tải...
} else if (error) {
  // Xử lý lỗi
  console.error('Error:', error)
} else {
  // Xử lý kết quả thành công
}
```

3. Sử dụng `invalidatesTags` và `refetchOnMount` trong RTK Query: Bạn có thể cấu hình `invalidatesTags` để xác định các phần của cache cần được xóa khi một `mutation` thực hiện thành công. Điều này đảm bảo rằng các `query` liên quan sẽ được `refetch` để cập nhật dữ liệu mới nhất.

```jsx
createApi({
  // ...
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
      providesTags: ['Posts']
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost
      }),
      invalidatesTags: ['Posts']
    })
  })
})
```

4. Sử dụng `middleware` của RTK Query: Bạn có thể tạo `middleware` để xử lý các lỗi chung hoặc thực hiện các hành động khác nhau dựa trên loại lỗi. Ví dụ, bạn có thể ghi log lỗi, hiển thị thông báo cho người dùng hoặc thực hiện các xử lý tùy chỉnh.

```jsx
import { middleware } from '@reduxjs/toolkit/query/react'

const errorMiddleware = () => (next) => (action) => {
  if (isFetchBaseQueryError(action)) {
    // Xử lý lỗi từ fetchBaseQuery
    console.error('Fetch Error:', action.error)
  } else if (isEntityError(action)) {
    // Xử lý lỗi từ các endpoint
    console.error('Endpoint Error:', action.error)
  }
  return next(action)
}

const api = createApi({
  // ...
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware, errorMiddleware)
})
```

=> Đây chỉ là một số phương pháp để xử lý lỗi trong RTK Query. Tùy thuộc vào yêu cầu và tình huống cụ thể, bạn có thể thực hiện các xử lý lỗi khác nhau để đảm bảo ứng dụng hoạt động một cách ổn định và cung cấp trải nghiệm tốt cho người dùng.

## Sẽ có 2 kiểu lỗi FetchBaseQueryError và SerializedError:

- ❌❌ Cách xử lý 2 lỗi đó như thế nào ? ❌❌

- Đúng, trong RTK Query, có hai kiểu lỗi chính là `FetchBaseQueryError` và `SerializedError`.

1. `FetchBaseQueryError`: Đây là kiểu lỗi được trả về khi có lỗi xảy ra trong quá trình thực hiện các request fetch dựa trên `baseQuery` (thường là lỗi mạng). Để xử lý lỗi này, bạn có thể sử dụng các thuộc tính như `error`, `isLoading`, và `isFetching` trả về từ hooks của RTK Query như `useQuery`, `useMutation`,... để hiển thị thông báo lỗi, ghi log, hoặc xử lý lỗi theo logic của bạn.

- Ví dụ:

```jsx
const { data, error, isLoading, isFetching } = useGetPostsQuery()

if (isLoading) {
  // Đang tải...
} else if (error) {
  // Xử lý lỗi FetchBaseQueryError
  console.error('Error:', error)
} else {
  // Xử lý kết quả thành công
}
```

2. `SerializedError`: Đây là kiểu lỗi được sử dụng trong các `mutation` để đại diện cho các lỗi xảy ra trong quá trình gửi hoặc xử lý request. Bạn có thể sử dụng `invalidatesTags` trong endpoint definition để xác định `tags` bị `invalidate` khi có lỗi xảy ra trong mutation. Đồng thời, bạn cũng có thể xử lý lỗi bằng cách sử dụng các thuộc tính `error`, `isLoading`, `isError`, `isSuccess`,... trả về từ hooks của RTK Query.

- Ví dụ:

```jsx
const { mutate, error } = useAddPostMutation()

const handleAddPost = async (postData) => {
  try {
    await mutate(postData)
    // Xử lý thành công
  } catch (error) {
    // Xử lý lỗi SerializedError
    console.error('Error:', error)
  }
}
```

=> Trong cả hai trường hợp, bạn có thể sử dụng các phương thức xử lý lỗi mặc định hoặc tự xử lý lỗi theo logic của bạn. Điều này cho phép bạn định rõ các hành động xử lý khi có lỗi xảy ra trong quá trình sử dụng RTK Query.

## ❌❌ Chú ý: Mutation là thay đổi state xong sau đó cập nhật lại bằng cách setState đúng không ? ❌❌

- 🚀 Hãy đọc kỹ để xem mutation là gì nhé !!

- Không, trong Redux Toolkit (RTK) và RTK Query, `mutation` không phải là việc thay đổi `state` bằng cách sử dụng `setState`. Thay vào đó, `mutation` là việc gửi các yêu cầu thay đổi dữ liệu (thường là các yêu cầu `POST`, `PUT`, `DELETE`) đến server, và cập nhật lại state dựa trên kết quả trả về từ server.

- Trong RTK Query, khi bạn sử dụng `createApi` và định nghĩa endpoint `build.mutation`, RTK Query sẽ tạo ra một mutation function và cho bạn để thực hiện các yêu cầu thay đổi dữ liệu. Khi `mutation` được gọi, RTK Query sẽ gửi yêu cầu đến server, và sau đó tự động cập nhật lại state dựa trên kết quả trả về từ server.

- Ví dụ:

```jsx
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Định nghĩa API cho các yêu cầu thay đổi dữ liệu
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    addPost: builder.mutation<Post, Omit<Post, 'id'>>({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
});

// Extract các mutation functions
export const { useAddPostMutation } = api;

-----------------------------------------

// Component sử dụng mutation
const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Sử dụng mutation function
  const { mutate, isLoading, isError, error } = useAddPostMutation();

  const handleSubmit = () => {
    const newPost = { title, content };

    // Gọi mutation để thêm bài post mới
    mutate(newPost)
      .then((response) => {
        // Xử lý kết quả trả về từ server
        console.log('Post added:', response);
      })
      .catch((error) => {
        // Xử lý lỗi
        console.error('Error adding post:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <button type="submit" disabled={isLoading}>
        {
          isLoading ? 'Adding...' : 'Add Post'
        }
      </button>
      {
        isError && <div>Error: {error.message}</div>
      }
    </form>
  );
};
```

- Trong ví dụ này, chúng ta định nghĩa một mutation `addPost` trong API sử dụng `builder.mutation`. Mutation này thực hiện yêu cầu POST để thêm một bài post mới vào server.

- Trong component `AddPostForm`, chúng ta sử dụng mutation function `useAddPostMutation` để có thể gửi yêu cầu thay đổi dữ liệu. Khi người dùng nhấn nút "Add Post", chúng ta gọi mutation function `mutate` với dữ liệu của bài post mới.

- Mutation function trả về một Promise, vì vậy chúng ta có thể sử dụng `.then` và `.catch` để xử lý kết quả trả về hoặc xử lý lỗi nếu có.

- Trên giao diện, chúng ta có thể sử dụng `isLoading` để hiển thị trạng thái "Adding..." khi mutation đang được xử lý. Nếu có lỗi, chúng ta có thể sử dụng `isError` và `error` để hiển thị thông báo lỗi tương ứng.

=> Tóm lại, mutation trong RTK Query cho phép thực hiện các yêu cầu thay đổi dữ liệu đến server và cung cấp các trạng thái và cơ chế xử lý lỗi để quản lý quá trình thay đổi dữ liệu một cách dễ dàng và hiệu quả.

## Quy ước lỗi trả về từ Server và RTK Query ?

- RTK Query có quy ước rõ ràng về cách xử lý và truyền các lỗi từ server. Dưới đây là một số quy ước chính:

- Lỗi truy vấn: Khi một yêu cầu truy vấn gặp lỗi trên server, RTK Query sẽ trả về một đối tượng `FetchBaseQueryError`. Đối tượng này chứa các thông tin về lỗi, bao gồm `status`, `statusText`, `data`, và `headers`. Thông thường, `data` chứa chi tiết lỗi trả về từ server.

- Lỗi mutation: Khi một yêu cầu mutation gặp lỗi trên server, RTK Query sẽ trả về một đối tượng `SerializedError`. Đối tượng này có một số trường thông tin chuẩn như `name` và `message`, và bạn có thể tùy chỉnh các trường thông tin khác nếu cần.

- Xử lý lỗi tự định nghĩa: Bạn cũng có thể xử lý các lỗi tự định nghĩa trong RTK Query. Khi bạn gặp một lỗi trong mutation hoặc truy vấn, bạn có thể ném một lỗi tự định nghĩa và RTK Query sẽ xử lý nó như một lỗi thông thường.

- Cấu hình xử lý lỗi toàn cục: Bạn có thể cấu hình xử lý lỗi toàn cục cho tất cả các yêu cầu trong RTK Query bằng cách sử dụng `api.injectEndpoints` hoặc `api.util.baseQuery.middleware`. Điều này cho phép bạn xử lý các lỗi chung, thêm thông tin vào lỗi, hoặc thực hiện các hành động khác một cách tùy chỉnh.

=> Tổng quan, RTK Query cung cấp cơ chế mạnh mẽ để xử lý và truyền lỗi từ server, cho phép bạn tùy chỉnh và quản lý quá trình xử lý lỗi một cách linh hoạt.

## Cách hiển thị lỗi message bằng Middleware ?

- Để hiển thị thông báo lỗi sử dụng Middleware trong RTK Query, bạn có thể làm như sau:

1. Tạo một Middleware mới bằng cách sử dụng `createApi`:

```jsx
const api = createApi({
  // Cấu hình endpoints...
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(yourErrorMiddleware)
  }
})
```

2. Định nghĩa Middleware xử lý lỗi:

```jsx
const yourErrorMiddleware = (api) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // Xử lý lỗi ở đây
    const error = action.payload
    console.log('Error:', error)
    // Hiển thị thông báo lỗi
    alert('Đã xảy ra lỗi: ' + error.message)
  }
  return next(action)
}
```

- Trong Middleware trên, chúng ta sử dụng `isRejectedWithValue` để kiểm tra xem action có phải là một action bị reject (có giá trị payload lỗi) hay không. Nếu là action lỗi, bạn có thể xử lý thông báo lỗi theo ý muốn.

3. Áp dụng Middleware vào cấu hình của RTK Query:

```jsx
const api = createApi({
  // Cấu hình endpoints...
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(yourErrorMiddleware)
  }
})
```

- Với việc thêm Middleware xử lý lỗi như trên, mỗi khi có một action bị reject (gặp lỗi), Middleware sẽ được kích hoạt và bạn có thể thực hiện xử lý lỗi, ví dụ như hiển thị thông báo lỗi cho người dùng.

## Type predicate trong redux được gọi là gì ?

- Trong Redux, các hàm kiểm tra kiểu được sử dụng để thu hẹp kiểu của một biến được gọi là "`type predicate`". `Type predicate` cho phép chúng ta xác định kiểu cụ thể của một biến dựa trên các điều kiện logic.

- `Type predicate` thường được sử dụng trong Redux để kiểm tra kiểu của các action hoặc lỗi (error) trong reducers hoặc các hàm xử lý liên quan. Điều này giúp chúng ta xác định rõ ràng các kiểu dữ liệu mà reducers có thể xử lý và thực hiện các hành động tương ứng.

- Ví dụ, trong Redux Toolkit, chúng ta có thể sử dụng `type predicate` để kiểm tra kiểu của một action như sau:

```jsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: string;
  name: string;
}

interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload
    }
  }
})

export const { setCurrentUser } = userSlice.actions

export default userSlice.reducer

// Sử dụng type predicate để kiểm tra kiểu của action
function userReducer(state: UserState, action: any) {
  if (setCurrentUser.match(action)) {
    // Thực hiện xử lý khi action có kiểu là setCurrentUser
    return {
      ...state,
      currentUser: action.payload
    }
  }
  // Xử lý các action khác
  return state
}
```

=> Trong ví dụ trên, `setCurrentUser.match(action)` được sử dụng để kiểm tra nếu action có kiểu là `setCurrentUser`. Nếu điều kiện đúng, chúng ta có thể thực hiện xử lý tương ứng.

❌❌❌❌ Đây là Docs của Được Dev ❌❌❌❌

## Sau khi học xong bài học `140. Xử lý lỗi trong RTK Query` ta tóm tắt lại bài học như sau:

- Xử lý lỗi là một phần rất quan trọng trong việc phát triển phần mềm, video này chúng ta sẽ thực hiện việc handle error liên quan đến add post và update post nhé

- Trong video này các bạn sẽ học được:

  - Mô hình phân chia và xử lý lỗi trong React như thế nào
  - Học được cách sử dụng type predicate
  - Xử lý lỗi trong RTK Query theo từng case: Từ server, từ lỗi code
  - Fix vấn đề bị gọi lại API khi submit error
