# Error Boundary

Error Boundary là một class component giúp chúng ta bắt lỗi trong ứng dụng React và trả về một fallback UI (UI dự phòng)

Error Boundary bắt lỗi của các component trong nó

- Lỗi trong quá trình rendering
- Lỗi trong lifecycle
- Lỗi trong constructor

Lưu ý Error Boundary không bắt được các lỗi

- Event handler
- Code bất đồng bộ
- Server side rendering
- Lỗi trong Error Boundary

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
```

```jsx
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```
