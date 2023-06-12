## Giải thích code chi tiết:

- Đoạn code trên triển khai ứng dụng chính của bạn với React Router.

1. Import các thành phần cần thiết:

```jsx
import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import Staff from 'pages/Staff'
import { useEffect } from 'react'
import { useRoutes, useLocation, useSearchParams } from 'react-router-dom'
```

- Đoạn code trên là một phần của ứng dụng React sử dụng React Router v6 để quản lý định tuyến và hiển thị các trang tương ứng. Hãy giải thích từng phần của đoạn code:

1. Import các module và component:

- `MainLayout`: Đây là một component layout chính của ứng dụng.
- `About`, `Dashboard`, `NotFound`, `Staff`: Đây là các component tương ứng với các trang của ứng dụng.
- `useEffect`: Là một hook trong React để thực hiện các tác vụ sẽ được thực thi sau khi render giao diện.
- `useRoutes`, `useLocation`, `useSearchParams`: Các hooks được cung cấp bởi React Router v6 để xử lý định tuyến và thông tin vị trí trong ứng dụng.

2. Khai báo component `App`:

- Component `App` là thành phần chính của ứng dụng.
- Sử dụng hook `useRoutes` để xác định các đối tượng định tuyến và lựa chọn component tương ứng dựa trên đường dẫn hiện tại.
- Khai báo các biến `location` và `searchParams` sử dụng hook `useLocation` và `useSearchParams` để lấy thông tin vị trí và các tham số truy vấn từ URL.
- Sử dụng hai hooks `useEffect` để theo dõi thay đổi trong `searchParams` và `location` và in ra thông tin tương ứng trong console.

3. Component `App` trả về:

- Component `App` trả về một `div` với className "App".
- Bên trong `div`, sử dụng component `MainLayout` để tạo layout chính của ứng dụng.
- Trong `MainLayout`, hiển thị nội dung dựa trên kết quả của hook `useRoutes` thông qua biến `elements`. Các component tương ứng với đường dẫn sẽ được hiển thị trong layout chính.

✅✅ Đoạn code trên thiết lập cấu trúc ban đầu cho ứng dụng, xác định các định tuyến và hiển thị các component tương ứng dựa trên địa chỉ URL hiện tại. Ngoài ra, nó cũng theo dõi và xử lý các tham số truy vấn và thông tin vị trí trong ứng dụng.

2. Xác định định tuyến và thành phần tương ứng:

```jsx
const elements = useRoutes([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/staff/*',
    element: <Staff />
  },
  {
    path: '*',
    element: <NotFound />
  }
])
```

- Đoạn code trên sử dụng hook `useRoutes` để xác định các định tuyến (`router`) trong ứng dụng.

- Cụ thể, `useRoutes` nhận vào một mảng (array) các đối tượng (object) định tuyến (`router`), mỗi đối tượng định tuyến (`router`) đại diện cho một đường dẫn (`path`) cụ thể và component tương ứng được khai báo trong `element` sẽ được hiển thị khi đường dẫn đó khớp.

- Trong đoạn code trên, chúng ta có các định tuyến (`router`) sau:

- Định tuyến cho đường dẫn `'/'`: Khi đường dẫn hiện tại là `'/'`, component `Dashboard` sẽ được hiển thị.
- Định tuyến cho đường dẫn `'/about'`: Khi đường dẫn hiện tại là `'/about'`, component `About` sẽ được hiển thị.
- Định tuyến cho đường dẫn `'/staff/*'`: Khi đường dẫn hiện tại bắt đầu bằng `'/staff/'`, component `Staff` sẽ được hiển thị. Ký tự `*` đại diện cho một phần tử con của đường dẫn.
- Định tuyến mặc định `'*'`: Đây là định tuyến mặc định, nghĩa là khi không có đường dẫn nào khớp với các định tuyến trước đó, component `NotFound` sẽ được hiển thị.

- Các thành phần định tuyến sẽ được gán cho biến `elements`, và sau đó chúng ta có thể hiển thị các thành phần này trong JSX bằng cách sử dụng `{elements}`.

3. Lấy thông tin vị trí hiện tại:

```jsx
const location = useLocation()
```

- `useLocation` là một hook của React Router, được sử dụng để lấy thông tin về vị trí hiện tại trong ứng dụng.
- Biến `location` chứa thông tin về vị trí hiện tại bao gồm `pathname` (đường dẫn), `search` (chuỗi truy vấn), `hash` (mảng hash), `state` (trạng thái liên quan đến vị trí).

4. Lấy thông tin truy vấn từ URL:

```jsx
const [searchParams] = useSearchParams()
```

- `useSearchParams` là một hook của React Router, được sử dụng để lấy thông tin về truy vấn từ URL.
- Biến `searchParams` chứa thông tin truy vấn dưới dạng đối tượng URLSearchParams, cho phép chúng ta truy cập và thao tác với các tham số truy vấn.

5. Theo dõi thay đổi trong `searchParams` và in ra console:

```jsx
useEffect(() => {
  console.log('searchParams', Object.fromEntries([...searchParams]))
}, [searchParams])
```

- `useEffect` là một hook của React, được sử dụng để thực hiện tác vụ sau mỗi lần render hoặc khi các dependency thay đổi.
- Trong đoạn code trên, chúng ta sử dụng `useEffect` để theo dõi thay đổi trong `searchParams`. Mỗi khi `searchParams` thay đổi, chúng ta in ra console đối tượng `searchParams` dưới dạng một đối tượng JavaScript thông thường bằng cách chuyển đổi nó thành một mảng và sau đó thành một đối tượng thông qua `Object.fromEntries()`.

6. Theo dõi thay đổi trong `location` và in ra console:

```jsx
useEffect(() => {
  console.log('location', location)
}, [location])
```

- Tương tự như `searchParams`, chúng ta sử dụng `useEffect` để theo dõi thay đổi trong `location`.
- Mỗi khi `location` thay đổi, chúng ta in ra console giá trị của `location`.

7. Render giao diện ứng dụng:

```jsx
return (
  <div className='App'>
    <MainLayout>
      {/* Hiển thị các thành phần dựa trên định tuyến */}
      {elements}
    </MainLayout>
  </div>
)
```

- Chúng ta render giao diện ứng dụng bao gồm một component `div` với class `App`.
- Component `MainLayout` được sử dụng để bao bọc toàn bộ ứng dụng.
- Thành phần dựa trên định tuyến (được xác định bằng `elements`) được hiển thị bên trong `MainLayout`.

✅Cuối cùng, chúng ta export component `App` để sử dụng trong các file khác.
