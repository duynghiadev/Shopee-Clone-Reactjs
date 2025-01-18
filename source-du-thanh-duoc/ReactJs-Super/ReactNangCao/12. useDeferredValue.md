# useDeferredValue

`useDeferredValue` dùng để trả về 1 value bị trì hoãn giống như debounce. Chỉ khác một cái là debounce ta có thể quy định thời gian trì hoãn, còn `useDeferredValue` thì không, thời gian trì hoãn sẽ dựa vào các yếu tố sau

- Tính chất cập nhật liên tục của state
- Tốc độ thiết bị
- Độ phức tạp của thuật toán và render jsx

```jsx
const deferredValue = useDeferredValue(value)
```
