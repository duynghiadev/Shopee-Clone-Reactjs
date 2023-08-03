# Giải thích code chi tiết trong file purchase.ts

- Đoạn code trên định nghĩa một biến hằng số `purchasesStatus`, chứa các giá trị số nguyên đại diện cho các trạng thái của đơn hàng trong ứng dụng.

```jsx
export const purchasesStatus = {
  inCart: -1,
  all: 0,
  waitForConfirmation: 1,
  waitForGetting: 2,
  inProgress: 3,
  delivered: 4,
  cancelled: 5
} as const
```

- Giải thích từng phần chi tiết:

- Định nghĩa biến `purchasesStatus`:

- `export const purchasesStatus`: Đây là cách sử dụng từ khóa `export const` để xuất biến `purchasesStatus` ra ngoài để có thể được sử dụng trong các module khác.

- `purchasesStatus`: Đây là tên của biến hằng số được định nghĩa.

- Đối tượng `purchasesStatus` chứa các thuộc tính là các trạng thái của đơn hàng. Mỗi thuộc tính có một tên và một giá trị số nguyên đại diện cho trạng thái tương ứng. Các giá trị là các số nguyên với mục tiêu dễ dàng sử dụng và đại diện cho các trạng thái cụ thể của đơn hàng.

- Các thuộc tính trong `purchasesStatus` và ý nghĩa tương ứng:

  - `inCart`: Đại diện cho trạng thái "trong giỏ hàng". Giá trị là -1.
  - `all`: Đại diện cho trạng thái "tất cả đơn hàng". Giá trị là 0.
  - `waitForConfirmation`: Đại diện cho trạng thái "chờ xác nhận". Giá trị là 1.
  - `waitForGetting`: Đại diện cho trạng thái "chờ lấy hàng". Giá trị là 2.
  - `inProgress`: Đại diện cho trạng thái "đang xử lý". Giá trị là 3.
  - `delivered`: Đại diện cho trạng thái "đã giao hàng". Giá trị là 4.
  - `cancelled`: Đại diện cho trạng thái "đã hủy". Giá trị là 5.

- `as const`: Điều này đảm bảo rằng các giá trị trong đối tượng `purchasesStatus` được xem là các giá trị không thể thay đổi (immutable), thay vì các giá trị có thể thay đổi (mutable) thông thường.

- Tóm lại, đoạn code này định nghĩa biến hằng số `purchasesStatus`, chứa các giá trị số nguyên đại diện cho các trạng thái của đơn hàng trong ứng dụng. Các giá trị này có thể được import và sử dụng trong các module khác để tham chiếu và xử lý trạng thái đơn hàng tương ứng.
