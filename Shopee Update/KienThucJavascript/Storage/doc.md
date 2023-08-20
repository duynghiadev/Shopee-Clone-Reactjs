# Web Storage và Cookie

- Web storage: Local Storage và Session Storage
- Web storage lưu trữ được nhiều dữ liệu và dễ dùng hơn Cookie
- Cả 3 đều dùng để lưu thông tin trên trình duyệt để tiện xử lý sau này.

Khác biệt lớn nhất giữa Local Storage, Session Storage và Cookie là thời gian lưu lại trên trình duyệt

## Local Storage

- Là Web Storage
- Lưu lại vĩnh viễn trên trình duyệt
- Dung lượng khoản 5Mb - 10Mb
- Các trang khác không thể truy cập đến Local Storage nếu như khác domain

```js
// thêm item
localStorage.setItem('name', 'John Doe')
// đọc item
localStorage.getItem('name') // 'John Doe'
// xóa item
localStorage.removeItem('name')
// xóa hết local storage
localStorage.clear()
```

## Session Storage

- Là Web Storage giống Local Storage
- Lưu lại trong 1 phiên dùng web thôi, đóng tab là mất hết data.
- Dung lượng khoản 5Mb - 10Mb
- Các trang khác không thể truy cập đến Session Storage nếu như khác domain

```js
// thêm item
sessionStorage.setItem('name', 'John Doe')
// đọc item
sessionStorage.getItem('name') // 'John Doe'
// xóa item
sessionStorage.removeItem('name')
// xóa hết Session Storage
sessionStorage.clear()
```

## Cookie

- Không phải là web storage
- Thời gian lưu trữ data có giới hạn, khi hết hạn thì cookie tự động bị xóa
- Dung lượng lưu trữ chỉ khoảng 4KB => Nên lưu những data đơn giản, càng ít càng tốt
- Cookie sẽ tự động truyền từ server xuống client và truyền từ client lên server thông qua mỗi header request
- Có thể cấu hình để các sub domain ví dụ `sub1.domain.com` có thể set cookie cho `sub2.domain.com`. Lưu ý là phải cùng domain cha!

Cookie thường được tạo trên server bằng PHP, Python, Java hoặc Node.Js để truyền xuống client thông qua header của mỗi request

```php
setcookie(
    string $name,
    string $value = "",
    int $expires_or_options = 0,
    string $path = "",
    string $domain = "",
    bool $secure = false,
    bool $httponly = false
): bool
```

Cookie cũng có thể được tạo thông qua Javascript bằng cách dùng `document.cookie`

```js
document.cookie = 'yummy_cookie=choco'
document.cookie = 'tasty_cookie=strawberry'
console.log(document.cookie)
// logs "yummy_cookie=choco; tasty_cookie=strawberry"
```

Những Cookie mà tạo bằng javascript thì không có cờ `HttpOnly` flag.

## Bonus: Server Session

- Đây là phiên trên server, không phải ở client
- Server sẽ tự động quyết định khi nào kết thúc phiên để đưa ra quyết định với client

![](./session.png)
