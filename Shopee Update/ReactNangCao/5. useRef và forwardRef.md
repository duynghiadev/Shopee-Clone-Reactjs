# useRef và forwardRef

## useRef

`useRef` là một hook lưu trữ một biến có thể mutate hoặc cho phép chúng ta truy cập DOM node

### Nhắc lại kiến thức cũ

#### Mutate là gì?

Mutate là chúng ta thay đổi giá trị bên trong object mà không làm thay đổi tham chiếu của nó.

```js
const A = { name: 'duoc' }
const B = A
A.name = 'cuong' // Chúng ta đang mutate A
console.log(A === B) // true vì tham chiếu A và B giống nhau
```

#### State hay prop thì không được mutate

Đối với React thì chúng ta dùng state để lưu trữ những giá trị có thể thay đổi theo thời gian, và chúng ta không mutate state, chúng ta **thay thế state** bằng một giá trị mới với tham chiếu mới kết hợp dùng set state để nói cho React biết

```jsx
const [todo, setTodo] = useState({ name: 'Hoc Bai', time: '08:20:PM' })

const handleClick = () => {
  // todo.name = 'Tap Gym' // Chúng ta không mutate như thế này!
  setState((prev) => ({ ...prev, name: 'Tap Gym' })) // Chúng ta set state với một giá trị object mới khác tham chiếu object cũ
}
```

Việc cập nhật state sẽ làm component re-render

Tất nhiên là về mặc lý thuyết chúng ta vẫn có thể mutate state trong trường hợp chúng ta không muốn component re-render, nhưng không nên làm vậy, vì chúng ta sẽ không kiểm soát được state, rất dễ sinh bug. Và useState của react không sinh ra để chúng ta làm vậy

Giờ đặt vấn đề ra thì có cách nào để mutate biến mà không làm component render hay không?

#### Tạo biến trong component

```jsx
function Todo() {
  // khi component re-render vì lý do nào đó (state, props,...) thì todo sẽ bị assign lại
  const todo = { name: 'Hoc Bai', time: '08:20:PM' }

  const handleClick = () => {
    // mutate như thế này sẽ không làm component re-render
    todo.name = 'Tap Gym'
  }
}
```

#### Tạo biến ngoài component

```jsx
// Biến todo có thể bị dùng ở bất kỳ đâu vì nó nằm ngoài function
// Trong khi biến này chỉ sinh ra để phục phụ cho funciton Todo
const todo = { name: 'Hoc Bai', time: '08:20:PM' }
function Todo() {
  const handleClick = () => {
    // mutate như thế này sẽ không làm component re-render
    todo.name = 'Tap Gym'
  }
}
```

### useRef giúp tạo biến có thể mutate mà không làm component re-render

useRef return một ref object với thuộc tính current duy nhất được set theo giá trị khởi tạo mà chúng ta cung cấp.

```jsx
import { useRef } from 'react'

export default function Counter() {
  let ref = useRef(0)

  function handleClick() {
    ref.current = ref.current + 1
    alert('You clicked ' + ref.current + ' times!')
  }

  return <button onClick={handleClick}>Click me!</button>
}
```

Một số điểm đặc biệt của ref

- Tham chiếu ref sẽ không thay đổi mỗi khi re-render (không như biến thông thường, bị reset mỗi khi re-render)
- Thay đổi nó sẽ không làm re-render (không như state - làm re-render)
- Thông tin được bao gói bên trong component (không như biến bên ngoài, bị chia sẻ nhiều chỗ khác dùng được)

### Cạm bẩy khi dùng useRef

Đừng nên ghi hay đọc `ref.current` suốt quá trình render. Đây là **nguyên tắc React**!

```jsx
function MyComponent() {
  const myRef = useRef(100)

  // 🚩 Không ghi ref suốt quá trình render
  myRef.current = 123
  // ...
  // 🚩 Không đọc ref suốt quá trình render
  return <h1>{myOtherRef.current}</h1>
}
```

Bạn có thể đọc và ghi trong event handler hay `useEffect`

```jsx
function MyComponent() {
  // ...
  useEffect(() => {
    // ✅ You can read or write refs in effects
    myRef.current = 123
  })
  // ...
  function handleClick() {
    // ✅ You can read or write refs in event handlers
    doSomething(myOtherRef.current)
  }
  // ...
}
```

Nếu bạn phải đọc và ghi thứ gì đó suốt quá trình render, sử dụng `useState`

Khi bạn phớ vỡ những rule này, component của bạn có thể vẫn hoạt động nhưng dễ gây ra bug. Tất cả tính năng mà React thêm vào đều dựa trên nguyên tắc là pure component

## Truy cập DOM nodes hoặc React elements

Nếu bạn làm việc với React được một khoảng thời gian rồi thì bạn có thể đã từng sử dụng `ref` cho việc này. Dưới đây là ví dụ về việc sử dụng `ref`:

```jsx
import React, { useRef } from 'react'
const CustomTextInput = () => {
  const textInput = useRef()
  focusTextInput = () => textInput.current.focus()
  return (
    <>
      <input type='text' ref={textInput} />
      <button onClick={focusTextInput}>Focus the text input</button>
    </>
  )
}
```

Lưu ý là trong functional component thì chúng ta sử dụng `useRef` thay vì sử dụng `createRef`. Nếu chúng ta tạo một `ref` bằng cách sử dụng `createRef` trong một functional component, React sẽ tạo mới một instance `ref` mỗi lần re-render thay vì giữ nguyên instance xuyên suốt các quá trình render.

## forwardReef là gì

Như chúng ta đã tìm hiểu bên trên thì ref giúp chúng ta truy cập đến một element, vậy nó có thể truy cập đến một component React hay không? test thử nhé

```jsx
import React from 'react'
const Input = () => <input type='text' style={style} />
export default Input
```

```jsx
import React, { useRef, useEffect } from 'react'
import Input from './Input'
function App() {
  const inputRef = useRef(null)
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
    console.log({ inputRef })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Input ref={inputRef} />
    </div>
  )
}
export default App
```

Chúng ta sẽ nhận một thông báo tham chiếu đến **Input Component** là null
Để fix vấn đề này ta dùng `forwardRef` như một HOC cho **Input Component**

```jsx
import React, { forwardRef } from 'react'
const Input = (props, ref) => <input ref={ref} type='text' style={style} />
export default forwardRef(Input)
```
