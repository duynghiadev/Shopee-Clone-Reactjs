# Render Props

Render Props là kỹ thuật mà chúng ta truyền vào prop của component giá trị là một funtional component

```jsx
function MouseTracker({
  render
}: {
  render: (value: PositionType) => JSX.Element
}) {
  const [position, setPosition] = useState < PositionType > { x: 0, y: 0 }
  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    })
  }
  return (
    <div onMouseMove={handleMouseMove}>
      <p style={{ color: 'red' }}>Mouse Tracker</p>
      {render(position)}
    </div>
  )
}
function App() {
  return (
    <div>
      <MouseTracker
        render={(value: PositionType) => <Ads {...value} visible />}
      />
    </div>
  )
}
```

Khi sử dụng Render Prop thì lưu ý cái function truyền vào prop, nó sẽ là một instance mới mỗi lần component re-render => Dẫn đến dùng React.memo không có tác dụng. Để fix vấn đề này chúng ta nên memorize cái function đó lại bằng `useRef` hoặc `useMemo`, `useCallback`

Có một điều đặc biệt là hầu như component nào dùng kỹ thuật render prop thì chúng ta cũng có thể chuyển nó thành một HOC
