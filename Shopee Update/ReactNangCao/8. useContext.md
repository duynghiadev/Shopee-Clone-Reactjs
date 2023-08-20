# useContext()

`useContext` nằm trong Context API của React, giúp chúng ta không còn cảnh truyền prop dài loằn ngoằn từ ông -> cha -> con -> chắt nữa.

## Cách dùng

1. Tạo context bằng `createContext`

```jsx
const ThemeContext = createContext(null)
```

2. Dùng một Provider bao bọc component muốn dùng, chỉ cần component nằm trong Provider là dùng được hết!

```jsx
const ThemeContext = createContext(null)

export default function MyApp() {
  return (
    <ThemeContext.Provider value='dark'>
      <Form />
    </ThemeContext.Provider>
  )
}
```

Provider nhận vào một prop là `value`, vì thế Form component có thể nhận value này thông qua context

3. Nhận context bằng `useContext()`

```jsx
import { createContext, useContext } from 'react'

const ThemeContext = createContext(null)

export default function MyApp() {
  return (
    <ThemeContext.Provider value='dark'>
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title='Welcome'>
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  )
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext)
  const className = 'panel-' + theme
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext)
  const className = 'button-' + theme
  return <button className={className}>{children}</button>
}
```

## Lưu ý khi dùng useContext

- Provider gần nhất sẽ override Provider xa hơn. Ví dụ dưới đây, footer sẽ nhận `value` từ context là "light"

```jsx
<ThemeContext.Provider value='dark'>
  ...
  <ThemeContext.Provider value='light'>
    <Footer />
  </ThemeContext.Provider>
  ...
</ThemeContext.Provider>
```

- Nhớ truyền `value` vào Provider, không truyền `value` vào thì nó sẽ lấy giá trị mặc định mà chúng ta khởi tạo từ đầu

- Không nên **truyền thẳng một object** vào `value` ở Provider, vì mỗi lần re-render sẽ là một object mới, dẫn đến component trong Provider của chúng ta bị re-render do value context thay đổi

```jsx
function MyApp() {
  const [currentUser, setCurrentUser] = useState(null)

  function login(response) {
    storeCredentials(response.credentials)
    setCurrentUser(response.user)
  }

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      <Page />
    </AuthContext.Provider>
  )
}
```

Nên truyền như thế này

```jsx
import { useCallback, useMemo } from 'react'

function MyApp() {
  const [currentUser, setCurrentUser] = useState(null)

  const login = useCallback((response) => {
    storeCredentials(response.credentials)
    setCurrentUser(response.user)
  }, [])

  const contextValue = useMemo(
    () => ({
      currentUser,
      login
    }),
    [currentUser, login]
  )

  return (
    <AuthContext.Provider value={contextValue}>
      <Page />
    </AuthContext.Provider>
  )
}
```
