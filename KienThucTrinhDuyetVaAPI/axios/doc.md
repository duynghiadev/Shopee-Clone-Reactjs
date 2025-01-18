# Axios

## AJAX là gì

AJAX là chữ viết tắt của Asynchronous JavaScript and XML

Đừng quan tâm cái XML vì trong thực tế chúng ta dùng JSON để trao đổi data client-server

AJAX chỉ đơn giản là sự kết hợp của

- Trình duyệt được xây dựng với `XMLHttpRequest` object để nhận và gửi data từ server
- Javascript và HTML DOM để hiển thị data

AJAX giúp cho bạn:

- Cập nhật lại website mà không cần reload lại trang
- Yêu cầu dữ liệu từ server sau khi trang đã load
- Nhận dữ liệu từ server sau khi trang đã load
- Gửi data lên server ở chế độ ngầm

Các trình duyệt ngày nay cũng có thể dùng `FetchAPI` thay cho `XMLHttpRequest`, với `FetchAPI` thì chúng ta có thể tạo các HTTP request đến server một cách đơn giản hơn `XMLHttpRequest` rất nhiều.

Trong thực tế thì chúng ta thường dùng những thư viện như axios để tạo các HTTP request vì những thư viện này cho phép chúng ta tùy biến nhiều hơn.

## Axios

Một số tính năng nổi trội

- Chạy được ở cả trình duyệt (dùng `XMLHttpRequests`) và node.js (dùng `http`)
- Hỗ trợ Promise API
- Tạo được Interceptor request và response
- Cancel request
- Tự động chuyển JSON sang object
- Chống tấn công XSRF ở client

### Dùng cơ bản

### Request config

### Response schema

### Config default

### Tạo instance

Để setup các cấu hình axios dùng cho cả dự án. Khi nào dùng chỉ cần import instance là được, không cần setup lại từ đầu.

### Tạo interceptor

interceptor giống như là trung gian, trước khi gửi request lên server sẽ đi qua nó hoặc trước khi nhận nhận data thì cũng sẽ đi qua nó. Mục đích là để tiền xử lý các tác vụ.

### Handle error
