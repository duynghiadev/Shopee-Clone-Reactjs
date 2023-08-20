# useDebugValue

```jsx
useDebugValue(value)
```

`useDebugValue` được dùng trong custom hook để hiển thị value lên React Dev Tool

```jsx
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null)

  // ...

  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? 'Online' : 'Offline')

  return isOnline
}
```

Trong trường hợp bạn tính toán nặng ví dụ như `useDebugValue(expensiveOperate(value))`, thì bạn nên chuyển nó thành

```jsx
useDebugValue(value, expensiveOperate)
```

Vì như thế này, `expensiveOperate` chỉ được gọi khi hook inspected trên dev tool
