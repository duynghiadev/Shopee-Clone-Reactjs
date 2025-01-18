# componentWillUnmount

`componentWillUnmount` sẽ được chạy ngay trước khi component bị unmount và huỷ.

Chúng ta dùng `componentWillUnmount` khi muốn

- clean một thứ gì đó như `setTimeout` hay `setInterval`
- Huỷ gọi api, huỷ subscription nào đó đã được tạo ở `componentDidMount`

Bạn không nên `setState` trong `componentWillUnmount` vì component sẽ không bao giờ re-render lại.
