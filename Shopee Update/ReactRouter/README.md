# React Router

## Phân biệt một số loại Router Component

### BrowsersRouter

99% anh em sẽ dùng `<BrowsersRouter>`, được build trên history API của trình duyệt, dùng để lưu trữ URL và chuyển trang.

Ví dụ:

Đối với SPA thì server sẽ cấu hình là khi bạn nhập url nào thì server cũng trả về url nhắm đến file `index.html`, ví dụ `/`.

Khi enter url `https://duthanhduoc.com/about` vào trình duyệt, server nhận được url là `https://duthanhduoc.com/about` và sẽ trả về nội dụng là file `index.html`. Lúc này React Router sẽ đảm nhiệm việc hiển thị component cho đúng tùy vào url.

### HashRouter

HashRouter dùng dấu `#` trong URL ví dụ: `https://duthanhduoc.com/#/about`, `https://duthanhduoc.com/#/blog/hoc-react-nhu-the-nao`.

Lợi ích của việc thêm dấu `#` vào url là để server không nhận biết được chúng ta vào url nào. Khi anh em nhập các url ở ví dụ trên vào trình duyệt và nhấn enter thì trình duyệt chỉ gửi lên server là `https://duthanhduoc.com` và server chỉ nhận được là `https://duthanhduoc.com`.

Điều này khá hữu ích khi server anh em là một share hosting và không toàn quyền điều hành server.

Ví dụ:

Có một server được cấu hình cho nhiều dịch vụ, mỗi dịch vụ là một url khác nhau.

- Landing Page cho user: `https://hospital.com`
- Manager: `https://hospital.com/manager`
- Doctor: `https://hospital.com/doctor`
- Staff: `https://hospital.com/staff`

Mình đảm nhiệm thiết kế một Landing Page cho user là một SPA có nhiều trang trong đó, và chỉ được cấp cho url là `https://hospital.com`.

Bây giờ nếu mình thiết kế thêm url `/manager` là dành cho việc quản lý profile cá nhân của người dùng

- BrowsersRouter: người dùng enter url `https://hospital.com/manager` thì server sẽ trả về trang của manager (người quản lý), điều này không tốt!

- HashRouter: người dùng enter url `https://hospital.com/#/manager` thì server sẽ trả về trang `https://hospital.com`, lúc này React Router sẽ thực hiện hiển thị cho đúng trang `/manager`.

### MemoryRouter

MemoryRouter lưu trữ url vào một array. Không như `<BrowserHistory>` và `<HashRouter>`, nó không bị ràng buộc bởi history stack trong trình duyệt. Điều này rất hữu ích khi viết unit test cho React Router.

### Router

Đây là cấp thấp nhất của tất cả Router component, tức là các Router component như `BrowsersRouter` hay `HashRouter` đều được build nên từ `Router` này.

Bạn không cần dùng Router, thay vì đó dùng các Router cấp cao hơn như `BrowsersRouter`

### StaticRouter

StaticRouter dùng để render React Router trong môi trường nodejs, phục vụ cho việc Server Side Rendering
