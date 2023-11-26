# Phân tích thuật toán

## State của cart\

- `purchases = []`
- Mỗi purchase ngoài việc nắm giữ thông tin từ api trả về, chúng còn nắm giữ thuộc tính `disabled` và `checked`
- Vì thế mình sẽ tạo một state mới là `localPurchases` với các `purchase` được add thuộc tính `disabled` và `checked` vào. Và mình sẽ dùng `createNextState` (tương tự `produce` của `immer`) để thực hiện để tránh mutate state `purchases`

## BaseInputNumber

- Nhận thấy khi out focus khỏi input thì sẽ gọi 1 sự kiện => thêm prop `onBlur` vào

## ProductQuantityController

- Nhận thấy rằng chỉ gọi api khi out focus khỏi input hoặc nhấn button tăng / giảm
- Nếu chỉ dùng `onChange` thì mỗi khi gõ phím sẽ thực hiện gọi api => không nên
  => Không dùng prop `onChange` được trong trường hợp này
  => Đổi thành `onInput, onIncrease, onDecrease, onBlur`.
- Khi gõ phím thì sẽ gọi `onInput` và `onInput` của chúng ta chỉ cập nhật lại value chứ không gọi api
- Khi mất focus khỏi input thì sẽ gọi `onBlur` và `onBlur` của chúng ta sẽ gọi api
- Khi nhấn button `increase` thì sẽ gọi `onIncrease` và `onIncrease` sẽ gọi api
- Khi nhấn button `decrease` thì sẽ gọi `onDecrease` và `onDecrease` sẽ gọi api
