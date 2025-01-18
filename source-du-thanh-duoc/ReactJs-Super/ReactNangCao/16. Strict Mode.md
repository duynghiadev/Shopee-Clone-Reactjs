# Strict Mode

Strict Mode là công cụ giúp cảnh báo các vấn đề tiềm tàng trong ứng dụng chúng ta. Nó sẽ thêm một số bước kiểm tra và warning nó lên console.

> Strict Mode chỉ chạy ở chế độ development, khi bạn build cho production thì nó sẽ biến mất.

Muốn dùng Strict Mode cho component nào thì chỉ cần bao bọc component đó là được

```jsx
import React from 'react'

function ExampleApplication() {
  return (
    <div>
      <Header />
      <React.StrictMode>
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>
      <Footer />
    </div>
  )
}
```

Hiện tại Strict Mode sẽ giúp chúng ta

- Cảnh báo về việc đang dùng những lifecycle cũ, không còn an toàn nữa.

- Cảnh báo về việc sử dụng string ref API (rất cũ trước đây)

- Phát hiện context API cũ, sẽ bị xóa trong tương lai

- Cảnh báo về việc sử dụng `findDOMNode` - một API đã bị xóa. Chúng ta có thể dùng ref để truy cập trực tiếp đến DOM node

- Phát hiện những Side Effect không mong muốn bằng cách gọi lại 2 lần một số function như: `constructor`, `render`, bên trong functional component, function truyền vào `useState`, `useReducer`, `useMemo`,... Thực chất React sẽ không warning gì mà nó gọi 2 lần để bạn để ý mà tìm cách khắc phục.

- Đảm bảo tính tái sử dụng của state: React Strict Mode sẽ mô phỏng quá trình mounting, unmounting, và re-mounting với state trước đó. Điều này là tiền đề cho một tính năng trong tương lai là React sẽ cho phép người dùng click từ route `/a` sang trang route `/b` về back lại route `\a` với nguyên màn hình cũ. Đây là tính năng chưa sẵn sàng ở chế độ production, tính năng này sẽ làm cho các callback trong life cyle chạy 2 lần như `useEffect`, `useLayoutEffect`,...
