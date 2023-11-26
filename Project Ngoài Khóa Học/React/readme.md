# React

- Đây là khóa học trước đó của anh Được. Khóa này bị outdate rồi. Mình clone về để đọc code về tìm hiểu luồng code chạy, và tiện thể ôn lại các kiến thức của ReactJS.

[Link Tutorial](https://github.com/dtdgroup/React)

## Tổng quan về React

1. ReactJS là gì, tại sao phải học ReactJS
2. Cài đặt ReactJS: CRA, Webpack, URL

## Setup môi trường

1. Cài Nodejs và VS Code: Cài extension cần thiết
2. Cài đặt Git
3. Tạo Repo trên github
4. Tạo SSH key và clone repo
5. Sử dụng CRA để tạo project React
6. Sơ lượt về cấu trúc folder của ReactJs
7. Setup Prettier và ESLint
8. CICD và Deploy với Vercel và Netlify

## 3. React căn bản

1. DOM và Virtual DOM là gì
2. JSX trong ReactJS
3. ReactDOM.render
4. Class component và functional compnent
5. Life cycle trong React Class
6. State và setState
7. Prop và PropTypes
8. Các cách render trong react
9. constructor
10. componentDidMount
11. componentWillUnmount
12. componentDidUpdate
13. Sơ lượt về React Hooks
14. useState
15. useEffect
16. Lỗi mutate state, props
17. Các yếu tố ảnh hưởng đến việc render của component
18. Higher Order Component
19. React.memo
20. useMemo
21. useCallback
22. ref, createRef, useRef, forwardRef
23. custom hook, thử tạo useInputNumber và usePrevious
24. useContext
25. useReducer
26. Sử dụng React Devtool để debug

## Vấn đề CSS của React

1. Vấn đề global CSS
2. CSS, SCSS
3. Atomic CSS
4. CSS module
5. CSS in JS (CSS inline, Styled Component)

## Project Student Management

1. Tạo nhanh UI bằng bootstrap
2. Thêm logic state
3. Chia component Input và Student
4. Thêm chức năng cập nhật và xóa student

## Project Validate Form với React Hook Form

1. Tạo UI trang Register
2. Áp dụng React hook form để validate

## React Router căn bản

1. Tạo Route cho các page
2. Link và NavLink
3. Switch và exact
4. Redirect
5. Nested Route
6. Not Found
7. React Router hooks
8. Xử lý query params với custom hook useQuery

## Redux và Redux toolkit

1. Tại sao dùng Redux và cách Redux hoạt động
2. Cấu hình file reducer, store và Redux Dev Tools
3. Cấu hình types và actions. Dùng HOC connect
4. Dùng hook useSelector và useDispatch
5. Middleware với redux-thunk
6. Dùng immer để mutate state
7. Giới thiệu về Redux Toolkit
8. Configure store và root Reducer
9. Sử dụng createReducer và createAction
10. Sử dụng createSlice và createAsyncThunk

## Clone Shopee trang đăng ký & đăng nhập

1. Khởi tạo Project, Setup Prettier, ESLint, jsconfig.json
   1.5 Fix lỗi warning: LF will be replaced by CRLF
2. Cài một số package cần thiết. Setup CSS global và fonts
3. Setup Redux và Router
4. Code giao diện RegisterLayout, Footer, HeaderRegister
5. Code giao diện Register Page, InputText, InputPassword
6. Uncontrolled Components là gì
7. Code validate Register Page
8. Code Http class
9. Code auth.slice cho register, hoàn thiện apply API vào Register
10. Cấu hình postman để test API
11. Code UI trang Login
12. Apply API cho trang Login

## Clone Shopee trang danh sách sản phẩm

1. Code UI MainLayout
2. Code UI Navbar, cập nhật haldeAuthFulfilled, Fix bug trong initialState authSlice
3. Tách Popver Component, cập nhật PropTypes
4. Code UI Header
5. UnauthenticatedGuard và AuthenticatedGuard
6. Code chức năng Logout
7. Code UI FilterPanel
8. Code UI SortBar
9. Code UI ProductItem
10. Code UI Pagination
11. Xử lý get API Categories
12. Xử lý get API Products
13. Xử lý filterPanel và đồng bộ hóa lên URL
14. Xử lý sortBar
15. Xử lý Pagination
16. Xử lý Search sản phẩm

## Clone Shopee trang chi tiết sản phẩm

1. Tạo UI trang ProductDetail
2. Tạo UI ProductQuantityController
3. Code chức năng slider
4. Code logic cho ProductQuantityController
5. render HTML (rich text - WYSIWYG) an toàn trong React
6. Thêm sản phẩm vào giỏ hàng
7. Xử lý lỗi khi token hết hạn

## Clone Shopee trang giỏ hàng

1. Get sản phẩm trên popup giỏ hàng
2. Tạo HeaderCart và CartLayout
3. Tạo Checkbox component
4. Tạo trang Cart
5. Code logic cập nhật số lượng đơn hàng. Tạo local state với createNextState
6. Code logic check đơn hàng
7. Chức năng xóa và mua sản phẩm

## Clone Shopee trang thông tin user

1. Code UI Sidebar User
2. Nested Route cho User page, trick hay cho khai báo path
3. Code UI trang Profile
4. Code UI trang Password
5. Code UI trang Purchase
6. Code Logic trang Profile
7. Code Logic trang Password
8. Code Logic trang Purchase

## Chương 14: Tối ưu UX và hiệu suất cho website

1. Giảm kích thước js với lazy loading
2. Loại bỏ source map trên production để tăng tốc ứng dụng
3. Tối ưu path với class
4. Cải thiện UX với global loading

## Chương 15: Bonus

1. Đa ngôn ngữ trong React
2. Cải thiện title cho React với React healmet
3. Thay đổi màu sắc và logo project
4. Sử dụng ErrorBoundary để hạn chế crash app

## Chương 16: Tạo React với webpack
