## Giải thích code chi tiết:

- Đoạn mã trên là một thành phần React có tên "Staff". Hãy tách nó thành các phần nhỏ để giải thích chi tiết:

1. Khai báo import:

```jsx
import { NavLink, Routes, Route } from 'react-router-dom'
import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'
```

- `NavLink` là một thành phần từ thư viện `react-router-dom` để tạo các liên kết dẫn đến các địa chỉ URL trong ứng dụng React, và quản lý lớp CSS cho các liên kết khi chúng được chọn hoặc kích hoạt.
- `Routes` là một thành phần từ thư viện `react-router-dom` để định nghĩa các tuyến đường (routes) cho ứng dụng React.
- `Route` là một thành phần từ thư viện `react-router-dom` để liên kết một tuyến đường với một thành phần cụ thể trong ứng dụng React.
- `AddStaff`, `StaffItem`, và `StaffList` là các thành phần (component) React khác được import từ các module có đường dẫn tương ứng.

2. Khai báo thành phần "Staff":

```jsx
export default function Staff() {
  return (
    <div>
      <h1 className='mb-6 text-lg'>Staff</h1>
      <div className='border-b border-gray-200 text-center text-sm font-medium text-gray-500'>
        <ul className='-mb-px flex flex-wrap'>
          {/* NavLink for List */}
          <li className='mr-2'>
            <NavLink
              to='/staff'
              end
              className={({ isActive }) =>
                `inline-block rounded-t-lg border-b-2 p-4 ${
                  isActive
                    ? 'border-blue-600  text-blue-600'
                    : 'border-transparent  hover:border-gray-300 hover:text-gray-600'
                } `
              }
            >
              List
            </NavLink>
          </li>
          {/* NavLink for Add */}
          <li className='mr-2'>
            <NavLink
              to='/staff/add'
              className={({ isActive }) =>
                `inline-block rounded-t-lg border-b-2 p-4 ${
                  isActive
                    ? 'border-blue-600  text-blue-600'
                    : 'border-transparent  hover:border-gray-300 hover:text-gray-600'
                } `
              }
              aria-current='page'
            >
              Add
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Routes for displaying different components based on the URL */}
      <Routes>
        <Route path=':id' element={<StaffItem />} />
        <Route path='add' element={<AddStaff />} />
        <Route index element={<StaffList />} />
      </Routes>
    </div>
  )
}
```

- Định nghĩa một hàm thành phần React có tên "Staff".
- Trong hàm thành phần, trả về một cấu trúc JSX chứa nội dung của thành phần "Staff".
- Sử dụng thẻ `<h1>` để hiển thị tiêu đề "Staff" trên giao diện người dùng.

- Sử dụng các thẻ `<NavLink>` để tạo liên kết dẫn đến các địa chỉ URL "/staff" và "/staff/add".

  - Thẻ `<NavLink to='/staff'>...</NavLink>` tạo một liên kết đến "/staff" và cung cấp một hàm callback để quản lý lớp CSS của liên kết khi nó được chọn hoặc kích hoạt.
  - Thẻ` <NavLink to='/staff/add'>...</NavLink>` tạo một liên kết đến "/staff/add" và được đánh dấu là đường dẫn hiện tại (`aria-current='page'`) để ánh sáng thể hiện trạng thái hiện tại.

- Sử dụng thẻ `<Routes>` để định nghĩa các tuyến đường cho các thành phần con của "Staff".

  - `<Route path=':id' element={<StaffItem />} />` định nghĩa một tuyến đường có dạng "/staff/:id" và liên kết nó với thành phần `<StaffItem />`. Khi URL khớp với mẫu tuyến đường này, thành phần `<StaffItem />` sẽ được hiển thị.
  - `<Route path='add' element={<AddStaff />} />` định nghĩa một tuyến đường có địa chỉ URL "/staff/add" và liên kết nó với thành phần `<AddStaff />`. Khi URL khớp với địa chỉ này, thành phần `<AddStaff />` sẽ được hiển thị.
  - `<Route index element={<StaffList />} />` định nghĩa tuyến đường mặc định (index route) cho thành phần "Staff". Khi không có tuyến đường khớp với URL, thành phần `<StaffList />` sẽ được hiển thị.

- Dòng `<Outlet context={{ profile: { name: 'Duoc' } }} />`, nó sẽ tạo ra một điểm chèn (outlet) trong thành phần "Staff" và cung cấp một đối tượng context. Điểm chèn cho phép các thành phần con khác trong cấu trúc cây định tuyến có thể truy cập vào context được cung cấp và sử dụng nó trong logic của mình.

- Trong trường hợp này, context được cung cấp chứa một đối tượng "profile" với thuộc tính "name" có giá trị là "Duoc". Các thành phần con của "Staff" có thể sử dụng hook `useOutletContext()` để truy cập vào context này và truyền dữ liệu từ context vào các thành phần con khác của "Staff".

- Việc sử dụng context giúp chia sẻ dữ liệu giữa các thành phần trong cây định tuyến một cách thuận tiện và hiệu quả.
