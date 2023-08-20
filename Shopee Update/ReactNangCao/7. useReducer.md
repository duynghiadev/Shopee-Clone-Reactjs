# useReducer

`useReducer` là một hook dùng để gom logic các `useState` lại với nhau thành một chỗ. `useReducer` có cơ chế hoạt động tương đồng như Redux, vậy nên học `useReducer` thì qua Redux lại rất dễ.

Đối với `useState` thì muốn cập nhật state ta cần

1. gọi set state function với mới value mới
2. state đã cập nhật

Đối với `useReducer` thì dài hơn 1 tí

1. Gọi dispatch function với value là action (action có thể là object hoặc string)

2. Reducer tính toán state mới dựa vào action nhận

3. state đã cập nhật

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

- `reducer`: là một function dạng

```jsx
function reducer(state, action) {
  // ...
}
```

- `initialArg` là giá trị state khởi tạo, tương tự bên `useState(initialArg)`. Vì vậy nên behavior tương tượng bên useState, tránh gọi function bên trong này để không bị gọi liên tục mỗi lần re-render: `useReducer(reducer, caculate(initialArg))`

- `init`: Đây là optional, nó là một function, nếu truyền vào thì khi `useReducer` được gọi, giá trị khởi tạo của bạn sẽ là `init(initialArg)`, còn không thì là `initialArg` thôi!

## Cách dùng

```jsx
import { useReducer } from 'react'

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    }
  }
  throw Error('Unknown action.')
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 })

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: 'incremented_age' })
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  )
}
```

## Một số lỗi cần tránh khi làm việc với useReducer

Thực ra là lỗi chung khi làm việc với react, chứ không riêng reducer, nếu anh em làm với state thì cũng bị lỗi thôi.

### Log state rồi nhưng tại sao ra giá trị cũ?

Gọi `dispatch` function nhưng không change state?

```jsx
function handleClick() {
  console.log(state.age) // 42

  dispatch({ type: 'incremented_age' }) // Request a re-render with 43
  console.log(state.age) // Still 42!

  setTimeout(() => {
    console.log(state.age) // Also 42!
  }, 5000)
}
```

Một lần nữa, cơ chế nó giống set state thôi, các bạn có thể hiểu như là nó **bất đồng bộ** (nhưng thực ra nó phức tạp hơn thế, nó sử dụng cơ chế closure).

Muốn nhận được giá trị thì có thể thử cách này

```jsx
const action = { type: 'incremented_age' }
dispatch(action)

const nextState = reducer(state, action)
console.log(state) // { age: 42 }
console.log(nextState) // { age: 43 }
```

### Dispatch rồi nhưng screen không cập nhật

Mutate state trong react thì bị nghiêm cấm!

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // 🚩 Wrong: mutating existing object
      state.age++
      return state
    }
    case 'changed_name': {
      // 🚩 Wrong: mutating existing object
      state.name = action.nextName
      return state
    }
    // ...
  }
}
```

Hãy trả về một object mới thay vì mutate

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // ✅ Correct: creating a new object
      return {
        ...state,
        age: state.age + 1
      }
    }
    case 'changed_name': {
      // ✅ Correct: creating a new object
      return {
        ...state,
        name: action.nextName
      }
    }
    // ...
  }
}
```
