# Rules of Hooks

## Chỉ gọi hook ở top level

Đừng gọi hook bên trong vòng lặp, câu lệnh điều kiện, hoặc nested function. Thay vì đó hãy sử dụng hooks ở top level của React Function, trước bất kỳ return nào.

Với nguyên tắc này, bạn sẽ đảm bảo hooks được gọi cùng thời điểm khi component render.

## Chỉ gọi hook trong React functions

Đừng gọi hook bên trong các javascript function thông thường. Thay vì đó bạn có thể:

- Gọi hook từ react function component
- Gọi hook từ custom hook

Theo nguyên tắc này, component của bạn sẽ có các logic state rõ ràng

## ESlint plugin

Team React release một plugin ESlint là `eslint-plugin-react-hooks` để đảm bảo chúng ta theo 2 rule. Chúng ta nên dùng để hạn chế những bug không đáng có trong tương lai.

Plugin này đã mặc định có trong Create React App

```bash
npm install eslint-plugin-react-hooks --save-dev
```

```json
// Your ESLint configuration
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  }
}
```
