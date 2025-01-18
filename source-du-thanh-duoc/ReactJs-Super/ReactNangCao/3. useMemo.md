# useMemo

Chúng ta dùng `useMemo` khi chúng ta muốn một biến không bị làm mới lại mỗi lần component re-render

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])
```

`useMemo` nhận vào các depedency để quyết định có chạy callback hay không tương tự như bên `useEffect`
