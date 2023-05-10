## Giải thích code trong file `store.ts`:

- Đoạn code này là phần khởi tạo `store` của `Redux` trong ứng dụng của chúng ta bằng hàm `configureStore` được cung cấp bởi `@reduxjs/toolkit`. Chúng ta cũng xuất và sử dụng các kiểu `RootState` và `AppDispatch` từ `store` để định nghĩa kiểu trong React components, giúp chúng ta có thể truy cập `store` của `Redux` trong các components.

- Trong đó:

  - Hàm `configureStore` nhận đối số là một `object` chứa các `reducer` được kết hợp với nhau và trả về một Redux `store`.
  - `Reducer` của chúng ta là `blogReducer`, được import từ module `pages/blog/blog.slice`. Chúng ta kết hợp `reducer` này với nhau bằng cách truyền nó vào trong một `object` với key là `"blog"`.
  - Kiểu `RootState` được định nghĩa bằng cách lấy kiểu trả về của hàm `store.getState()`.
  - Kiểu `AppDispatch` là một kiểu dữ liệu có chứa kiểu của hàm `store.dispatch`. Ta sử dụng nó để định nghĩa kiểu cho hook `useAppDispatch`.
  - Hook `useAppDispatch` sử dụng `useDispatch` từ module `react-redux` để trả về một tham chiếu tới `dispatch` của `store`. Chúng ta cũng định nghĩa kiểu cho `useAppDispatch` bằng cách sử dụng kiểu `AppDispatch`.

## Giải thích chi tiết từng dòng code:

```jsx
export const store = configureStore({
  reducer: {
    blog: blogReducer
  }
})
```

- Trong đoạn code trên, chúng ta đang sử dụng hàm `configureStore` được cung cấp bởi `Redux Toolkit` để tạo một Redux `store`. Hàm này nhận vào một đối tượng `configuration object` với các trường sau:

  - `reducer`: Đây là một đối tượng chứa các `reducers`, tương tự như một `store` Redux truyền thống. Tuy nhiên, thay vì phải tự viết `reducer`, chúng ta có thể sử dụng `createSlice` của `Redux Toolkit` để tạo `reducer` một cách nhanh chóng và đơn giản hơn. Trong đoạn code này, chúng ta chỉ có một `reducer` duy nhất là `blogReducer`, và nó được đặt tên là `blog`.

- Sau khi khởi tạo, Redux `store` sẽ được lưu trữ trong biến `store`, có thể sử dụng để truy cập `state` và dispatch `action` đến `store`.

```jsx
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
```

- Trong đoạn code này, chúng ta định nghĩa các kiểu dữ liệu cho Redux `store` và `dispatch`.

- Dòng đầu tiên `export type RootState = ReturnType<typeof store.getState>` định nghĩa kiểu dữ liệu cho `RootState`, là kiểu dữ liệu trả về của hàm `store.getState()`. Hàm này trả về toàn bộ `state` của Redux `store`, bao gồm các `state` của tất cả các `reducers`.

- Dòng tiếp theo `export type AppDispatch = typeof store.dispatch` định nghĩa kiểu dữ liệu cho `AppDispatch`, là kiểu dữ liệu của `dispatch` function trong Redux `store`. Chúng ta sử dụng `typeof store.dispatch` để lấy kiểu dữ liệu của `dispatch` function, giúp đảm bảo kiểu dữ liệu của function `useAppDispatch` sẽ phù hợp với kiểu dữ liệu của `dispatch` function.

- Cuối cùng, `useAppDispatch` là một `custom hook` để sử dụng `useDispatch` với kiểu dữ liệu tương ứng với `AppDispatch`. Điều này giúp cho `TypeScript` có thể kiểm tra kiểu dữ liệu của `action` được `dispatch` trong component, giúp tránh các lỗi xảy ra khi dispatch `action` với kiểu dữ liệu không đúng.
