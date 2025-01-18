# useId

`useId` là một hook giúp tạo ra một unique ID

```jsx
function Checkbox() {
  const id = useId()
  return (
    <>
      <label htmlFor={id}>Do you like React?</label>
      <input id={id} type='checkbox' name='react' />
    </>
  )
}
```

Công dụng:

- Tạo id duy nhất, thích hợp cho label htmlFor và input
- Có thể đồng bộ ở server và client. Nếu server return về id là 'a' nhưng client render với id là 'b' nghĩa là không đồng bộ. `useId` có thể fix điều này. Bạn nào dùng NextJs hoặc chạy React trên server sẽ hiểu quá trình này

Lưu ý:

- Vì chúng ta không biết `useId()` return ra id như thế nào nên không dùng nó để CSS được.

Chưa hết, string của nó có chứa dấu `:`, cái này thì không được hỗ trợ trong các CSS selector hay API như `querySelectorAll` (Có thể fix bằng cách `\:` nhưng mà không nên dùng kiểu này)

- `useId` không nên dùng để tạo key trong một list
