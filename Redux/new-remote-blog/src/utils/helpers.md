## Giải thích code chi tiết:

✅✅ Đoạn code 1 ✅✅

```jsx
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
```

✅✅ Đoạn code 2 ✅✅

```jsx
interface ErrorFormObject {
  [key: string | number]: string
}

interface EntityError {
  status: 422
  data: {
    error: ErrorFormObject
  }
}

export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  // Function that checks the structure of the error object
}

export function isErrorWithMessage(error: unknown): error is { message: string } {
  // Function that checks the structure of the error object
}

export function isEntityError(error: unknown): error is EntityError {
  // Function that checks the structure of the error object
}
```

✅✅ Đoạn code 3 ✅✅

```jsx
export class CustomError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'CustomError'
  }
}
```
