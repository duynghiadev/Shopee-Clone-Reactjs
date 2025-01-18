# componentDidUpdate

`componentDidUpdate` sẽ được gọi ngay lập tức khi component của bạn re-render và cập nhật lại DOM thật. Phương thức này không chạy ở lần render đầu tiên.

Chúng ta dùng `componentDidUpdate` khi

- Muốn tracking sự thay đổi trên state thì sẽ thực hiện 1 hành động gì đó, ví dụ truy cập đến DOM thật
- tracking sự thay đổi url
- Bạn cũng có thể gọi API và setState trong này nhưng hãy cẩn thận đặt điều kiện vào trong, còn không thì sẽ dễ dấn đến vòng lặp vô hạn.
