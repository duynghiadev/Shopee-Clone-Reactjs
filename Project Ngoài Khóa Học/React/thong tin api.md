# Thông tin API

URL: `https://api-ecom.duthanhduoc.com/`
Đối với các route cần xác thực => Gửi token lên bằng headers với key là `authorization`. Token phải bắt đầu bằng 'Bearer '

## Format trả về

Là một object

```ts
interface Response {
  message: string
  data?: any
}
```

Ví dụ

```json
{
  "message": "Lấy sản phẩm thành công",
  "data": {
    "_id": "60afb2c76ef5b902180aacba",
    "images": [
      "https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg"
    ],
    "price": 3190000,
    "rating": 4.6,
    "price_before_discount": 3990000,
    "quantity": 138,
    "sold": 1200,
    "view": 696,
    "name": "Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng",
    "description": "",
    "category": "60afafe76ef5b902180aacb5",
    "image": "https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg",
    "createdAt": "2021-05-27T14:55:03.113Z",
    "updatedAt": "2021-06-12T14:22:55.871Z"
  }
}
```

## Format lỗi

### Trong trường hợp lỗi 422 (thường do form) hoặc lỗi do truyền query / param bị sai

Ví dụ đăng ký email đã tồn tại

```json
{
  "message": "Lỗi",
  "data": {
    "email": "Email đã tồn tại"
  }
}
```

### Trong trường hợp lỗi còn lại

```json
{
  "message": "Lỗi do abcxyz"
}
```

## Register: `/register`

Method: POST
body

```json
{
  "email": "user2@gmail.com",
  "password": "123456"
}
```

Rules

- email: required, length: 5-160, isEmail
- password: required, length: 6-160

Response

```json
{
  "message": "Đăng ký thành công",
  "data": {
    "access_token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxNUBnbWFpbC5jb20iLCJpZCI6IjYwYzZmNGViNGVhMWRlMzg5ZjM1NjA1YiIsInJvbGVzIjpbIlVzZXIiXSwiY3JlYXRlZF9hdCI6IjIwMjEtMDYtMTRUMDY6MTk6MjMuNzQ5WiIsImlhdCI6MTYyMzY1MTU2MywiZXhwIjoxNjI0MjU2MzYzfQ.WbNgnd4cewdDNpx-ZLebk1kLgogLctBqgh9fc9Mb3yg",
    "expires": "7d",
    "user": {
      "roles": ["User"],
      "_id": "60c6f4eb4ea1de389f35605b",
      "email": "user15@gmail.com",
      "createdAt": "2021-06-14T06:19:23.703Z",
      "updatedAt": "2021-06-14T06:19:23.703Z",
      "__v": 0
    }
  }
}
```

## Login: `/login`

Method: POST
body

```json
{
  "email": "user2@gmail.com",
  "password": "123456"
}
```

Rules

- email: required, length: 5-160, isEmail
- password: required, length: 6-160

Response

```json
{
  "message": "Đăng nhập thành công",
  "data": {
    "access_token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOThmNWI1MTY5MDU1MzZlODE4ZjhjYyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciIsIkFkbWluIl0sImNyZWF0ZWRfYXQiOiIyMDIxLTA2LTE0VDA4OjA4OjI4LjQ5NVoiLCJpYXQiOjE2MjM2NTgxMDgsImV4cCI6MTYyNDI2MjkwOH0.8YITBWt6SXikoaBHf-SlOh_h7ii0UgwY_5-bjCirY",
    "expires": "7d",
    "user": {
      "_id": "6098f5b516905536e818f8cc",
      "roles": ["User"],
      "email": "user2@gmail.com",
      "name": "Real user",
      "date_of_birth": null,
      "address": "",
      "phone": "",
      "createdAt": "2021-05-10T08:58:29.081Z",
      "updatedAt": "2021-05-10T08:58:29.081Z",
      "__v": 0
    }
  }
}
```

## Logout: `/logout`

Method: POST

## Read me: `/me`

Method: GET

Response

```json
{
  "message": "Lấy người dùng thành công",
  "data": {
    "_id": "6098f5b516905536e818f8cc",
    "roles": ["User"],
    "email": "user@gmail.com",
    "name": "Real",
    "date_of_birth": null,
    "address": "",
    "phone": "",
    "createdAt": "2021-05-10T08:58:29.081Z",
    "updatedAt": "2021-05-10T08:58:29.081Z"
  }
}
```

## Read Products: `/products`

Ví du: `products?page=1&limit=30`
Method: GET

Query Params:
`page`: number. Số trang. Mặc định là 1
`limit`: number. Số product trên 1 trang. Mặc định là 30
`order`: 'desc' || 'asc'. Sắp xếp theo thứ tự. Mặc định là 'desc'
`sort_by`: 'createdAt' || 'view' || 'sold' || 'price'. Sắp xếp theo trường. Mặc định là 'createdAt'.
`category`: categoryId. Lọc sản phẩm theo category
`exclude`: productId. Loại trừ sản phẩm nào đó
`rating_filter`: number. Lọc sản phẩm có số sao lớn hơn hoặc bằng rating_filter
`price_max`: number. Giá cao nhất
`price_min`: number. Giá thấp nhất
`name`: string. Tên sản phẩm (lưu ý Tên sản phẩm tiếng Việt phải gõ đầy đủ dấu)

Response

```json
{
  "message": "Lấy các sản phẩm thành công",
  "data": {
    "products": [],
    "pagination": {
      "page": 1,
      "limit": 30,
      "page_size": 2
    }
  }
}
```

## Read Product Detail: `/products/productId`

Method: GET

## Add To Cart: `/purchases/add-to-cart`

Method: POST

Body

```json
{
  "product_id": "60afb1c56ef5b902180aacb8",
  "buy_count": 3
}
```

## Read Purchases: `/purchases`

Method: GET
Query Params:
`status`: Trạng thái đơn hàng

Thông tin `status`:
-1: Sản phẩm đang trong giỏ hàng
0: Tất cả sản phâm
1: Sản phẩm đang đợi xác nhận từ chủ shop
2: Sản phẩm đang được lấy hàng
3: Sản phẩm đang vận chuyển
4: San phẩm đã được giao
5: Sản phẩm đã bị hủy

## Update purchase: `/purchases/update-purchase`

Method: PUT
Body:

```json
{
  "product_id": "60afb1c56ef5b902180aacb8",
  "buy_count": 3
}
```

## Delete purchases: `/purchases`

Method: DELETE
body: mảng các `purchase_id`

```json
["purchase_id"]
```

## Buy purchases: `/purchases/buy-products`

Method: POST
body: Mảng các object

```json
[{ "product_id": "60afb1c56ef5b902180aacb8", "buy_count": 2 }]
```

## Update me: `/user`

Method: PUT
Body:

```json
{
  "address": "Việt Nam",
  "date_of_birth": "1907-02-18T17:17:56.000Z",
  "name": "Dư Thanh Được",
  "phone": "04511414",
  "avatar": "URL Avatar",
  "password": "Mật khẩu cũ",
  "new_password": "Mật khẩu mới"
}
```

Rules

- name: maxLength = 160
- phone: maxLength = 20
- address: maxLength = 160
- date_of_birth: ISO8601
- password: length: 6-160
- new_password: length: 6-160
