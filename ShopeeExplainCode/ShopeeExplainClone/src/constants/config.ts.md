# Giải thích chi tiết file code config.ts

- Đoạn code trên định nghĩa một biến `config`, chứa các cấu hình liên quan đến API và kích thước tối đa cho việc tải lên (upload) hình ảnh avatar của người dùng. Hãy chia đoạn code ra từng phần và giải thích từng phần chi tiết:

1. Định nghĩa biến `config`:

```jsx
const config = {
  baseUrl: 'https://api-ecom.duthanhduoc.com/',
  maxSizeUploadAvatar: 1048576 // bytes
}
```

- Biến `config` là một đối tượng có chứa hai thuộc tính: `baseUrl` và `maxSizeUploadAvatar`.

- Thuộc tính `baseUrl`:

```jsx
baseUrl: 'https://api-ecom.duthanhduoc.com/',
```

- Thuộc tính `baseUrl` chứa địa chỉ cơ sở (base URL) của API. Trong trường hợp này, giá trị của `baseUrl` là `'https://api-ecom.duthanhduoc.com/'`. Điều này giả định rằng API của ứng dụng được đặt tại địa chỉ `'https://api-ecom.duthanhduoc.com/'`.

2. Thuộc tính `maxSizeUploadAvatar`:

```jsx
maxSizeUploadAvatar: 1048576 // bytes
```

- Thuộc tính `maxSizeUploadAvatar` chứa kích thước tối đa cho việc tải lên (upload) hình ảnh avatar của người dùng.

- Giá trị `1048576` là số byte, tương đương với kích thước tối đa là 1 megabyte (MB). Điều này giả định rằng ứng dụng hạn chế kích thước tối đa của hình ảnh avatar là 1 MB.

✅✅Tóm lại đoạn code trên nói về vấn đề:✅✅

- Trong biến `config` này, bạn có thể cấu hình bất kỳ số lượng thuộc tính nào bạn muốn. Cấu hình có thể bao gồm bất kỳ thông tin cần thiết cho ứng dụng của bạn, nhưng có một số thuộc tính quan trọng và phổ biến bạn có thể sử dụng trong cấu hình này:

- `baseUrl`: Thuộc tính này đại diện cho địa chỉ cơ sở (base URL) của API mà ứng dụng sử dụng để thực hiện các yêu cầu HTTP đến server. Đây là một thuộc tính quan trọng để xác định địa chỉ chính xác của server.

- `maxSizeUploadAvatar`: Thuộc tính này đại diện cho kích thước tối đa cho việc tải lên (upload) hình ảnh avatar của người dùng. Bạn có thể sử dụng thuộc tính này để giới hạn kích thước tối đa của hình ảnh avatar được tải lên.

- Ngoài ra, bạn có thể thêm bất kỳ thuộc tính nào khác mà bạn cần cho ứng dụng của mình. Ví dụ: bạn có thể thêm thuộc tính `timeout` để cấu hình thời gian chờ tối đa cho các yêu cầu API, hoặc thuộc tính `apiKey` để lưu trữ khóa API của ứng dụng, và nhiều thuộc tính khác tùy theo nhu cầu và yêu cầu cụ thể của ứng dụng.

---

```jsx
export default config
```

- Xuất biến `config`:

- Dòng code này xuất biến `config` để có thể sử dụng các cấu hình trong đó từ các module khác bằng cách import.

---
