# Dưới đây là phần giải thích code chi tiết trong file product.type.ts

```jsx
export interface Product {
  _id: string
  images: string[]
  price: number
  rating: number
  price_before_discount: number
  quantity: number
  sold: number
  view: number
  name: string
  description: string
  category: {
    _id: string
    name: string
  }
  image: string
  createdAt: string
  updatedAt: string
}
```

- Dưới đây là cách tách mã thành các phần nhỏ hơn và giải thích từng phần:

- `Product` là một kiểu dữ liệu đối tượng đại diện cho thông tin một sản phẩm.

- Mỗi thuộc tính của `Product` mô tả thông tin cụ thể về sản phẩm như `_id`, `images`, `price`, `rating`, và nhiều thuộc tính khác.

---

```jsx
export interface ProductList {
  products: Product[]
  pagination: {
    page: number
    limit: number
    page_size: number
  }
}
```

1. Định nghĩa kiểu dữ liệu `ProductList`:

- `ProductList` là một kiểu dữ liệu đại diện cho danh sách sản phẩm cùng với thông tin phân trang (`pagination`).

- Thuộc tính `products` là một mảng các đối tượng kiểu `Product`.

- Thuộc tính `pagination` chứa thông tin về trang hiện tại, giới hạn số lượng sản phẩm trên mỗi trang (`limit`), và kích thước tổng cộng (`page_size`).

---

```jsx
export interface ProductListConfig {
  page?: number | string
  limit?: number | string
  sort_by?: 'createdAt' | 'view' | 'sold' | 'price'
  order?: 'asc' | 'desc'
  exclude?: string
  rating_filter?: number | string
  price_max?: number | string
  price_min?: number | string
  name?: string
  category?: string
}
```

1. Định nghĩa kiểu dữ liệu `ProductListConfig`:

- `ProductListConfig` là một kiểu dữ liệu đại diện cho cấu hình tùy chọn khi truy vấn danh sách sản phẩm.

- Các thuộc tính như `page`, `limit`, `sort_by`, `order`, và các thuộc tính khác đại diện cho các tham số có thể được truyền vào truy vấn danh sách sản phẩm.

- Tóm lại, các kiểu dữ liệu này được sử dụng để định nghĩa cấu trúc dữ liệu cho sản phẩm, danh sách sản phẩm và các tùy chọn khi truy vấn danh sách sản phẩm. Điều này giúp bạn xác định rõ ràng và đúng kiểu dữ liệu trong các phần khác nhau của ứng dụng của mình.

---
