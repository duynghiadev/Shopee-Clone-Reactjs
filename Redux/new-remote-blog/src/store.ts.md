## Giải thích code trong file `store.ts`:

✅✅ Đoạn code 1 ✅✅

```jsx
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { rtkQueryErrorLogger } from 'middleware'
import { blogApi } from 'pages/blog/blog.service'
import blogReducer from 'pages/blog/blog.slice'
```

- `configureStore`: là một hàm từ thư viện Redux Toolkit, được sử dụng để cấu hình Redux store.
- `setupListeners`: là một hàm từ thư viện Redux Toolkit, được sử dụng để thiết lập các lắng nghe sự kiện cho `store`, đặc biệt là cho `RTK Query`.

- `rtkQueryErrorLogger`:

  - Dòng code này được sử dụng để import middleware `rtkQueryErrorLogger` từ một module trong thư mục `middleware`.
  - Việc import này cho phép chúng ta sử dụng middleware `rtkQueryErrorLogger` trong quá trình xử lý Redux. Middleware này được sử dụng để xử lý và ghi nhật ký các lỗi liên quan đến truy vấn và tác vụ trong RTK Query.
  - Sau khi import, chúng ta có thể sử dụng biến `rtkQueryErrorLogger` để thêm middleware này vào cấu hình Redux của chúng ta. Điều này cho phép middleware được áp dụng cho các action trước khi chúng được chuyển đến reducers, giúp xử lý và ghi nhật ký các lỗi một cách tiện lợi.

- `blogApi`:

  - Là một instance của RTK Query API, được import từ file `blog.service.ts`. Nó chứa các `endpoints` và `logic` liên quan đến việc giao tiếp với `backend` cho phần `blog`.
  - Dòng này import một instance của RTK Query API từ module `blog.service`. Thông qua `blogApi`, bạn có thể sử dụng các endpoint đã được định nghĩa trong API này để thực hiện các tác vụ như lấy danh sách bài viết, thêm, sửa hoặc xóa bài viết.
  - Tóm lại, dòng này liên quan đến việc sử dụng RTK Query API để tương tác với dịch vụ API

- `blogReducer`:

  - Là reducer cho phần blog, được import từ file `blog.slice.ts`. Nó định nghĩa cách thức xử lý các action liên quan đến phần blog trong Redux store.
  - Dòng này import một reducer từ module blog.slice. Reducer này được tạo ra bằng cách sử dụng createSlice từ Redux Toolkit và sẽ quản lý trạng thái của blog trong Redux store. Reducer này sẽ được sử dụng để cập nhật trạng thái của blog khi có các hành động diễn ra trong ứng dụng, chẳng hạn như bắt đầu chỉnh sửa bài viết, hủy chỉnh sửa, và các hành động khác liên quan đến blog.
  - liên quan đến việc quản lý trạng thái của blog trong Redux store bằng cách sử dụng Redux Toolkit.

✅✅ Đoạn code 2 ✅✅

```jsx
export const store = configureStore({
  reducer: {
    blog: blogReducer,
    [blogApi.reducerPath]: blogApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApi.middleware, rtkQueryErrorLogger)
})
```

- Trong đoạn code trên, chúng ta đang tạo một Redux store bằng cách sử dụng hàm `configureStore` từ Redux Toolkit.

- Cấu hình store được thực hiện bằng cách truyền một đối tượng cấu hình cho hàm `configureStore`. Trong đó:

  - Thuộc tính `reducer` định nghĩa các reducers được sử dụng trong store. Ở đây, chúng ta có hai reducers: `blogReducer` và `blogApi.reducer` được thêm vào đối tượng reducer. `blogReducer` là reducer tự tạo, trong khi `blogApi.reducer` là reducer được tạo từ API slice của RTK Query.

- Trong dòng code:

```jsx
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApi.middleware, rtkQueryErrorLogger)
```

- Trong đoạn mã trên, chúng ta đang cấu hình `middleware` cho Redux store bằng cách sử dụng hàm `getDefaultMiddleware` từ Redux Toolkit.

- `Middleware` là một khối mã (block code) được thực thi trung gian giữa khi một `action` được gửi và khi nó đến được `reducer`. Nó cho phép chúng ta thực hiện các logic bổ sung, xử lý bất đồng bộ (async), ghi log, kiểm tra lỗi và nhiều tác vụ khác trước khi action đến reducer.

- Trong đoạn code trên, chúng ta sử dụng hàm `getDefaultMiddleware()` để lấy danh sách middleware mặc định của Redux Toolkit. Điều này bao gồm các middleware như `redux-thunk` và `redux-logger`.

- Tiếp theo, chúng ta sử dụng phương thức `.concat()` để kết hợp danh sách middleware mặc định với `blogApi.middleware` và `rtkQueryErrorLogger`.

  - `blogApi.middleware` là middleware được tạo từ API slice của RTK Query. Nó cho phép chúng ta sử dụng các tính năng như `caching`, `invalidation`, `polling` và nhiều tính năng khác của RTK Query trong ứng dụng Redux của chúng ta.

  - `rtkQueryErrorLogger` là một middleware tự tạo. Nó được sử dụng để xử lý và ghi log các lỗi liên quan đến các action của RTK Query. Nếu một action bị lỗi, middleware này kiểm tra xem action đó có thuộc loại lỗi cụ thể nào và thực hiện các hành động xử lý tương ứng, ví dụ như hiển thị thông báo lỗi. (`toast.warn`)

- Cuối cùng, danh sách middleware đã được kết hợp được truyền vào thuộc tính `middleware` của hàm `configureStore`, để cấu hình Redux store với các middleware tương ứng.

- Tổng quát lại, đoạn mã trên cho phép chúng ta thêm middleware của RTK Query và middleware tự tạo `rtkQueryErrorLogger` vào danh sách middleware mặc định của Redux Toolkit để mở rộng chức năng và xử lý lỗi trong ứng dụng Redux của chúng ta.

=> Kết quả là, biến store sẽ chứa Redux store đã được cấu hình với reducers và middleware tương ứng. Chúng ta có thể sử dụng biến store để truy cập vào trạng thái và gửi các action trong ứng dụng của chúng ta.

✅✅ Đoạn code 3 ✅✅

```jsx
setupListeners(store.dispatch)
```

- Đoạn code `setupListeners(store.dispatch)` được sử dụng để thiết lập các lắng nghe (listeners) cho các sự kiện liên quan đến RTK Query trong Redux store.

- RTK Query cung cấp các tính năng như tái tạo truy vấn khi trang web được tập trung hoặc kết nối mạng được thiết lập lại. Để sử dụng các tính năng này, chúng ta cần thiết lập các lắng nghe để đảm bảo rằng các hoạt động tái tạo truy vấn (`query`) diễn ra một cách chính xác.

- Hàm `setupListeners` được cung cấp bởi Redux Toolkit và RTK Query để tự động thiết lập các lắng nghe. Nó nhận vào `dispatch` của Redux store và sẽ tự động tạo các lắng nghe cho các sự kiện như `focus` và `reconnect`. Các lắng nghe này sẽ gọi các truy vấn (`query`) và `mutations` được định nghĩa bởi RTK Query để thực hiện tái tạo truy vấn hoặc cập nhật dữ liệu khi cần thiết.

- Việc sử dụng `setupListeners` giúp chúng ta không cần phải tự viết các lắng nghe bằng tay cho các sự kiện tái tạo truy vấn, mà nó được xử lý tự động bởi thư viện RTK Query.

✅✅❌❌ Chú ý: setupListeners có phải là polling không ? ❌❌✅✅

- Trong Redux Toolkit, `setupListeners` không phải là một cơ chế `polling` tích hợp sẵn.

- `setupListeners` là một hàm cung cấp bởi RTK Query để cấu hình các listeners (nghe sự kiện) cho các hoạt động trong RTK Query. Bạn có thể sử dụng `setupListeners` để thực hiện các hành động như đăng ký các interceptor cho các yêu cầu HTTP, xử lý lỗi chung, hoặc lắng nghe các sự kiện phát sinh từ RTK Query.

- Ví dụ, bạn có thể sử dụng `setupListeners` để đăng ký một interceptor để gắn thêm token xác thực vào các yêu cầu HTTP gửi từ RTK Query:

```jsx
import { setupListeners } from '@reduxjs/toolkit/query'

const api = createApi({
  // Cấu hình của API
})

const store = configureStore({
  reducer: {
    // Các reducers khác
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

setupListeners(store.dispatch, api)
```

- Trong ví dụ trên, `setupListeners` được gọi với `store.dispatch` và `api` (được tạo bởi `createApi`). Điều này sẽ thiết lập các listeners để theo dõi các hoạt động của RTK Query và thực hiện các hành động được định nghĩa bởi người dùng.

- Để thực hiện polling trong RTK Query, bạn có thể sử dụng các options như `refetchOnMount`, `refetchOnReconnect`, và `refetchOnFocus`, trong endpoint definitions. Các options này cho phép bạn tự động gửi lại các yêu cầu sau một khoảng thời gian hoặc khi xảy ra các sự kiện nhất định.

- Ví dụ, để thực hiện polling định kỳ, bạn có thể sử dụng `refetchOnMount` và `refetchInterval`:

```jsx
const { data, isLoading, isError } = useGetPostsQuery(undefined, {
  refetchOnMount: true, // Gửi yêu cầu lấy danh sách bài viết khi component được mount
  refetchInterval: 5000 // Gửi yêu cầu lấy danh sách bài viết mỗi 5 giây
})
```

- Trên đây là một cách để thực hiện polling trong RTK Query, nhưng `setupListeners` không liên quan trực tiếp đến việc này.

✅✅ Đoạn code 4 ✅✅

```jsx
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

- Trong đoạn code trên, chúng ta đang sử dụng `TypeScript` để định nghĩa hai kiểu dữ liệu mới: `RootState` và `AppDispatch`.

- `RootState`: Là kiểu dữ liệu đại diện cho trạng thái (state) toàn bộ của ứng dụng trong Redux. Nó được xác định bằng cách sử dụng phương thức `getState()` từ store. Kiểu dữ liệu `RootState` sẽ chứa các thuộc tính tương ứng với các `reducer` đã được định nghĩa trong hàm `configureStore`.

  - Ví dụ: Nếu chúng ta có một reducer có tên là "`counterReducer`" trong hàm `configureStore`, thì `RootState` sẽ chứa một thuộc tính có tên "`counter`" tương ứng với trạng thái của reducer đó.

- `AppDispatch`: Là kiểu dữ liệu đại diện cho đối tượng `dispatch` của `store` trong Redux. Nó được xác định bằng cách sử dụng phương thức `dispatch` từ `store`. Kiểu dữ liệu `AppDispatch` đại diện cho các hành động (`actions`) mà chúng ta có thể gửi từ Redux store để thay đổi trạng thái của ứng dụng.

  - Ví dụ: Nếu chúng ta có một action có tên là "`increment`" để tăng giá trị của "`counter`", thì `AppDispatch` sẽ có phương thức `dispatch` để gửi `action` đó đi.

- Với việc định nghĩa kiểu `RootState` và `AppDispatch`, chúng ta có thể sử dụng chúng trong các thành phần của ứng dụng để đảm bảo kiểm tra kiểu dữ liệu chính xác và sử dụng các phương thức và thuộc tính từ Redux store một cách an toàn và dễ dàng.
