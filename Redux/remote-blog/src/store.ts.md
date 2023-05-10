## Giải thích code trong file `store.ts`:

- Đoạn code này là phần khởi tạo `store` của `Redux` trong ứng dụng của chúng ta bằng hàm `configureStore` được cung cấp bởi `@reduxjs/toolkit`. Chúng ta cũng xuất và sử dụng các kiểu `RootState` và `AppDispatch` từ `store` để định nghĩa kiểu trong React components, giúp chúng ta có thể truy cập `store` của `Redux` trong các components.

- Trong đó:

  - Hàm `configureStore` nhận đối số là một `object` chứa các `reducer` được kết hợp với nhau và trả về một Redux `store`.
  - `Reducer` của chúng ta là `blogReducer`, được import từ module `pages/blog/blog.slice`. Chúng ta kết hợp `reducer` này với nhau bằng cách truyền nó vào trong một `object` với key là `"blog"`.
  - Kiểu `RootState` được định nghĩa bằng cách lấy kiểu trả về của hàm `store.getState()`.
  - Kiểu `AppDispatch` là một kiểu dữ liệu có chứa kiểu của hàm `store.dispatch`. Ta sử dụng nó để định nghĩa kiểu cho hook `useAppDispatch`.
  - Hook `useAppDispatch` sử dụng `useDispatch` từ module `react-redux` để trả về một tham chiếu tới `dispatch` của `store`. Chúng ta cũng định nghĩa kiểu cho `useAppDispatch` bằng cách sử dụng kiểu `AppDispatch`.
