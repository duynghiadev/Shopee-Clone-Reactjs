# startTransition và useTransition

## startTransition

```jsx
React.startTransition(callback)
```

callback truyền vào `startTransition` sẽ được React đánh dấu là độ ưu tiên thấp, khi nào các tác vụ có độ ưu tiên cao hơn như cập nhật các state khác, render,... hoàn thành thì cái callback trong đó mới được chạy.

Thường chúng ta chỉ dùng `startTransition` khi không muốn dùng `useTransition`, vì `useTransition` sẽ cho chúng ta thêm giá trị nữa là pending

## useTransition

```jsx
function App() {
  const [isPending, startTransition] = useTransition()
  const [filterTerm, setFilterTerm] = useState('')

  const filteredProducts = filterProducts(filterTerm)

  function updateFilterHandler(event) {
    startTransition(() => {
      setFilterTerm(event.target.value)
    })
  }

  return (
    <div id='app'>
      <input type='text' onChange={updateFilterHandler} />
      {isPending && <p>Updating List...</p>}
      <ProductList products={filteredProducts} />
    </div>
  )
}
```

## `useTransition` vs `useDeferredValue`

Cơ chế trì hoãn giữa `useTransition` và `useDeferredValue` là như nhau, đều đưa biến hoặc function vào trạng thái ưu tiên thấp.

Nếu có thể dùng thì cứ dùng `useTransition` sẽ đem lại cho chúng ta nhiều lợi ích hơn

Chỉ dùng `useDeferredValue` khi mà không thể dùng `useTransition`. Ví dụ trong những trường hợp chúng ta không thể can thiệp vào quá trình cập nhật state của component (của một thư viện bên thứ 3 chẳng hạn)

## Đừng lạm dụng

Không nên gói tất cả cập nhật state trong `useTransition` hay tất cả các value trong `useDeferredValue`. Chỉ nên dùng nếu UI và performance có vấn đề mà chúng ta không thể xử lý bằng các cách khác.
