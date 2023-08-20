# useCallback

Chúng ta dùng `useCallback` khi chúng ta không muốn function của chúng ta được khởi tạo lại mỗi lần component chúng ta re-render

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b)
}, [a, b])
```

Cách sử dụng tương tự như `useMemo`, ngoài ra thì chúng ta cũng có thể dùng `useMemo` thay thế cho `useCallback` cũng được

```jsx
const memoizedCallback = useMemo(() => {
  return () => doSomething(a, b)
}, [a, b])
```
