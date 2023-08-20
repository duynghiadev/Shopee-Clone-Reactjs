# useImperativeHandle

```jsx
useImperativeHandle(ref, createHandle, [deps])
```

`useImperativeHandle` dùng để đưa function từ component con ra component cha thông qua `ref`. Từ đó component cha có thể thực thi được một function ở component con (trước đây thì ta chỉ thực thi function của component cha tại component con thông qua props).

- Trước đây: Cha -> con: Tại con gọi func của cha thông qua props cha truyền xuống
- Bây giờ: Cha -> con: Tại cha gọi func của con thông qua giao tiếp ref + `useImperativeHandle`

Vì `useImperativeHandle` dùng ref nên là tránh dùng trong hầu hết các trường hợp. Bí quá thì mới dùng thôi! `useImperativeHandle` nên kết hợp với `forwardRef` để có thể dùng ref dễ dàng hơn với component

```jsx
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

function Input(props: {}, ref: any) {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => {
    return {
      type
    }
  })

  const type = () => {
    let numberIndex = 0
    const initalString = 'Dư Thanh Được'
    inputRef.current?.focus()
    let interval: any = setInterval(() => {
      setValue(initalString.slice(0, numberIndex))
      if (numberIndex === initalString.length) {
        return clearInterval(interval)
      }
      numberIndex++
    }, 100)
  }

  useEffect(() => {}, [])
  return <input type='text' placeholder='type something' value={value} onChange={() => {}} ref={inputRef} />
}

const InputForward = forwardRef(Input)

export default function AutoInput() {
  const ref = useRef<{ type: () => void }>({ type: () => {} })

  const handleType = () => {
    ref.current?.type()
  }

  return (
    <div>
      <button onClick={handleType}>Click to type</button>
      <InputForward ref={ref} />
    </div>
  )
}


```

Ở ví dụ trên thì component cha chỉ cần gọi handleType là có thể gọi được function ở component con rồi
