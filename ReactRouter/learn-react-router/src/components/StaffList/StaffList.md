## Giải thích code chi tiết:

```jsx
import { Link } from 'react-router-dom'

export default function StaffList() {
  return (
    <ul>
      <li>
        <Link to='/staff/1' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
          Staff 1
        </Link>
      </li>
      <li>
        <Link to='/staff/2' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
          Staff 2
        </Link>
      </li>
      <li>
        <Link to='/staff/3' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
          Staff 3
        </Link>
      </li>
    </ul>
  )
}
```

- Đoạn code trên tạo ra một danh sách các liên kết sử dụng `Link` từ `react-router-dom`. Mỗi liên kết đại diện cho một nhân viên trong danh sách nhân viên. Khi người dùng nhấp vào một liên kết, nó sẽ chuyển hướng đến đường dẫn tương ứng với ID của nhân viên.

- Cụ thể, danh sách nhân viên bao gồm ba mục:

1. Mục "Staff 1": Đây là một liên kết đến đường dẫn '/staff/1'. Khi người dùng nhấp vào liên kết này, nó sẽ chuyển hướng đến trang chi tiết nhân viên với ID là 1.

2. Mục "Staff 2": Đây là một liên kết đến đường dẫn '/staff/2'. Khi người dùng nhấp vào liên kết này, nó sẽ chuyển hướng đến trang chi tiết nhân viên với ID là 2.

3. Mục "Staff 3": Đây là một liên kết đến đường dẫn '/staff/3'. Khi người dùng nhấp vào liên kết này, nó sẽ chuyển hướng đến trang chi tiết nhân viên với ID là 3.

- Mỗi liên kết được thiết lập với các lớp CSS và các hiệu ứng hover để tạo giao diện người dùng tương tác.
