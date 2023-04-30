## Giải thích code chi tiết và dễ hiểu hơn:

- Đoạn mã trên là một ví dụ về cách sử dụng React Context API để chia sẻ dữ liệu giữa các component con mà không cần truyền qua các props. Đoạn mã này bao gồm các component: Welcome, Label, Form, Panel và Button.

- Đầu tiên, chúng ta định nghĩa kiểu dữ liệu cho Context bằng interface ThemeType. ThemeType bao gồm một đối tượng theme với thuộc tính color có thể là 'light' hoặc 'dark', và một hàm onChangeTheme để thay đổi giá trị của color.

```jsx
interface ThemeType {
  theme: {
    color: 'light' | 'dark'
  }
  onChangeTheme: (color: 'light' | 'dark') => void
}
```

- Sau đó, chúng ta tạo một ThemeContext bằng createContext() với giá trị mặc định là light và hàm onChangeTheme rỗng.

```jsx
const ThemeContext =
  createContext <
  ThemeType >
  {
    theme: {
      color: 'light'
    },
    onChangeTheme: () => {}
  }
```

- Tiếp theo, chúng ta tạo một custom hook useTheme để quản lý giá trị của theme và hàm onChangeTheme. Hook này sẽ trả về giá trị của theme và hàm onChangeTheme, và sử dụng useState() để quản lý giá trị của theme.

```jsx
const useTheme = () => {
  const [theme, setTheme] = useState < ThemeType['theme'] > { color: 'light' }

  const onChangeTheme = useCallback((color: 'light' | 'dark') => {
    setTheme((prev) => ({ ...prev, color }))
  }, [])

  useDebugValue(theme.color, doTask)

  return { theme, onChangeTheme }
}
```

- Trong hook này, chúng ta sử dụng useMemo() để tạo giá trị mới cho Context khi giá trị của theme hoặc onChangeTheme thay đổi.

```jsx
const { onChangeTheme, theme } = useTheme()

const valueContext = useMemo(() => {
  return { theme, onChangeTheme }
}, [theme, onChangeTheme])
```

- Sau đó, chúng ta tạo một component Welcome và sử dụng ThemeContext.Provider để cung cấp giá trị của Context cho các component con bên trong nó.

```jsx
export default function Welcome() {
  const { onChangeTheme, theme } = useTheme()
  const [, forceRender] = useState({})

  const valueContext = useMemo(() => {
    return { theme, onChangeTheme }
  }, [theme, onChangeTheme])

  const pleaseRender = () => forceRender({})

  return (
    <div className='welcome'>
      <div>
        <button onClick={pleaseRender}>Please Render Welcome</button>
      </div>
      <ThemeContext.Provider value={valueContext}>
        <Form />
        <Label />
      </ThemeContext.Provider>
    </div>
  )
}
```

- Trong component Label, chúng ta sử dụng useContext() để truy cập giá trị của Context và sử dụng useId() để tạo một id duy nhất cho input checkbox.

```jsx
const { theme, onChangeTheme } = useContext(ThemeContext)

const id = useId()

return (
  <div>
    <input
      type='checkbox'
      checked={theme.color === 'dark'}
      onChange={(e) => {
        onChangeTheme(e.target.checked ? 'dark' : 'light')
      }}
      id={id + 'Label'}
    />
    <label htmlFor={id + 'Label'}> Use dark mode</label>
  </div>
)
```

- Trong component Form, chúng ta sử dụng một component Panel để hiển thị tiêu đề và các nút button. Component Panel sử dụng useContext() để truy cập giá trị của Context và sử dụng className để thay đổi màu sắc của panel.

```jsx
const { theme } = useContext(ThemeContext)

const className = 'panel-' + theme.color

return (
  <section className={className}>
    <h1>{title}</h1>
    {children}
  </section>
)
```

- Cuối cùng, chúng ta sử dụng một component Button để hiển thị các nút button. Component Button cũng sử dụng useContext() để truy cập giá trị của Context và sử dụng className để thay đổi màu sắc của button.

```jsx
const { theme } = useContext(ThemeContext)

const className = 'button-' + theme.color

return <button className={className}>{children}</button>
```

## Còn đây là phần tóm tắt nội dung chi tiết:

- Đoạn code trên tạo ra một giao diện đơn giản với khả năng thay đổi chủ đề màu sắc giữa chế độ sáng và chế độ tối. Các thành phần trong giao diện được tổ chức theo hình thức cây và sử dụng các hook React như useMemo, useState, useCallback, useDebugValue và useContext để quản lý trạng thái và truyền các giá trị giữa các thành phần.

- `ThemeContext`: createContext được sử dụng để tạo ra một context chung cho toàn bộ ứng dụng để chứa thông tin về chủ đề màu sắc và phương thức để thay đổi chủ đề màu sắc.

- `useTheme`: một custom hook được tạo ra để quản lý trạng thái của chủ đề màu sắc, bao gồm cả chế độ sáng và chế độ tối. Nó sử dụng các hook useState và useCallback để cập nhật trạng thái chủ đề màu sắc khi có sự thay đổi và sử dụng hook useDebugValue để hiển thị thông tin debug cho mục đích xử lý mã.

- `Welcome`: thành phần trang chính của ứng dụng, mà bao gồm một nút được sử dụng để cập nhật các thành phần đang được hiển thị trong context.

- `Label`: thành phần hiển thị một checkbox để thay đổi chủ đề màu sắc. Nó sử dụng hook useContext để lấy giá trị của chủ đề màu sắc từ ThemeContext.

- `Form`: thành phần hiển thị một tiêu đề cùng với các nút đăng ký và đăng nhập.

- `Panel` và `Button`: các thành phần hỗ trợ được sử dụng để hiển thị các phần của giao diện sử dụng chủ đề màu sắc được cấu hình. Cả hai thành phần đều sử dụng hook useContext để lấy giá trị của chủ đề màu sắc từ ThemeContext.

**- Tóm lại, đoạn mã này sử dụng các hook React như useState, useCallback, useMemo, useDebugValue và useContext để quản lý trạng thái của ứng dụng và truyền giá trị giữa các thành phần. Nó cung cấp cho người dùng khả năng thay đổi chủ đề màu sắc giữa chế độ sáng và chế độ tối.**
